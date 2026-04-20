  function cmdHelp() {
    printBlank();
    println('c-cyan bold', '╔══════════════════════════════════════════════════════╗');
    println('c-cyan bold', '║         MALWORLD — COMMAND REFERENCE TABLE           ║');
    println('c-cyan bold', '╚══════════════════════════════════════════════════════╝');
    printBlank();
    const rows = [
      ['help',       'Display this command reference'],
      ['whoami',     'Dump current operator identity & privileges'],
      ['ls',         'Enumerate filesystem — list accessible directories'],
      ['about',      'Run nmap banner grab on target: MAL'],
      ['skills',     'Load capability modules into payload builder'],
      ['projects',   'Enumerate active operations / deployed sessions'],
      ['experience', 'Intercept and replay career timeline packets'],
      ['education',  'Map kernel module — load education.dll into memory'],
      ['tools',      'List botnet arsenal — weaponized tool inventory'],
      ['social',     'OSINT recon dump — exfiltrate social accounts'],
      ['contact',    'Establish encrypted comms channel to operator'],
      ['clear',      'Wipe terminal buffer — destroy evidence'],
      ['exit',       'Terminate session — close Meterpreter channel'],
    ];
    rows.forEach(([cmd, desc]) => {
      const row = document.createElement('div');
      row.className = 'help-row';
      const c = document.createElement('span');
      c.className = 'help-cmd';
      c.textContent = cmd;
      const d = document.createElement('span');
      d.className = 'help-desc';
      d.textContent = '— ' + desc;
      row.appendChild(c);
      row.appendChild(d);
      print(row);
    });
    printBlank();
    println('c-dim', '[ Tab to autocomplete · ↑↓ to navigate history ]');
    printBlank();
  }
