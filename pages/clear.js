  function cmdClear() {
    output.innerHTML = '';
    // Print minimal prompt context after clear
    println('c-dim', '[terminal buffer wiped — evidence destroyed]');
    printBlank();
  }
