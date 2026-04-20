import re
import os

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

styles_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
styles = styles_match.group(1) if styles_match else ''

head_match = re.search(r'<head>(.*?)</head>', content, re.DOTALL)
head = head_match.group(1) if head_match else ''
head = re.sub(r'<style>.*?</style>', '', head, flags=re.DOTALL)

body_match = re.search(r'(<body>.*?<!-- TERMINAL WRAPPER -->)', content, re.DOTALL)
body_top = body_match.group(1) if body_match else '<body>'

terminal_match = re.search(r'(<div id="terminal-wrapper">.*?</div>)', content, re.DOTALL)
terminal = terminal_match.group(1) if terminal_match else ''

script_match = re.search(r'<script>(.*?)</script>', content, re.DOTALL)
script_full = script_match.group(1) if script_match else ''

with open('styles.css', 'w', encoding='utf-8') as f:
    f.write(styles)

# extract functions out of script
cmd_funcs = re.findall(r'(  function cmd([A-Z][a-z]+)\(\) \{.*?\n  \})', script_full, re.DOTALL)
funcs_dict = {name.lower(): code for code, name in cmd_funcs}

for name, code in funcs_dict.items():
    with open(f'pages/{name}.js', 'w', encoding='utf-8') as f:
        f.write(code + '\n')

# replace functions in script_full with a dynamic loader
script_base = re.sub(r'  function cmd[A-Z][a-z]+\(\) \{.*?\n  \}', '', script_full, flags=re.DOTALL)

script_dynamic_loader = """
  async function loadCommand(cmdName) {
    try {
      const response = await fetch(`pages/${cmdName}.js`);
      if (!response.ok) throw new Error('Not found');
      const text = await response.text();
      // create a new function
      const fn = new Function('printBlank', 'println', 'printRaw', 'output', text + `\\nreturn cmd${cmdName.charAt(0).toUpperCase() + cmdName.slice(1)}();`);
      fn(printBlank, println, printRaw, output);
    } catch (e) {
        console.error(e);
        printBlank();
        println('c-red', `Failed to load command module '${cmdName}'.`);
        printBlank();
    }
  }
"""

script_base = script_base.replace("function runCommand(raw) {", script_dynamic_loader + "\n  async function runCommand(raw) {")
script_base = re.sub(r'case \'(\w+)\':\s*cmd\w+\(\);\s*break;', r"case '\1': await loadCommand('\1'); break;", script_base)


new_index = f"""<!DOCTYPE html>
<html lang="en">
<head>
{head}
  <link rel="stylesheet" href="styles.css" />
</head>
{body_top}
{terminal}
<script>
{script_base}
</script>
</body>
</html>
"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_index)

