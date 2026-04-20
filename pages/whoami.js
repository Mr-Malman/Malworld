  function cmdWhoami() {
    printBlank();
    println('c-green bold', 'malworld\\mal-operator');
    printBlank();
    println('c-cyan',  'Privileges:');
    println('c-yellow','  SeDebugPrivilege          [ENABLED]');
    println('c-yellow','  SeImpersonatePrivilege    [ENABLED]');
    println('c-yellow','  SeTakeOwnershipPrivilege  [ENABLED]');
    println('c-yellow','  SeShutdownPrivilege       [ENABLED]');
    printBlank();
    println('c-dim',   'User SID   : S-1-5-21-3457823498-1337-4444-500');
    println('c-dim',   'Logon time : ' + new Date().toISOString().replace('T',' ').slice(0,19));
    printBlank();
  }
