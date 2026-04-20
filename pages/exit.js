  function cmdExit() {
    printBlank();
    println('c-yellow', '[*] Closing Meterpreter session 1...');
    setTimeout(() => {
      println('c-red bold', '[!] Connection terminated.');
      println('c-red',      '[!] Session ended by operator. Cleaning tracks...');
      setTimeout(() => {
        println('c-dim', '[*] Clearing event logs...');
        println('c-dim', '[*] Wiping bash_history...');
        println('c-dim', '[*] Removing temp files...');
        setTimeout(() => {
          println('c-green', '[OK] Forensic cleanup complete. Stay ghost. 👻');
          const input = document.getElementById('cmd-input');
          if (input) {
             input.disabled = true;
             input.placeholder = '[ session closed ]';
          }
          window.exited = true;
          document.getElementById('prompt-label').style.opacity = '0.3';
        }, 800);
      }, 600);
    }, 500);
  }
