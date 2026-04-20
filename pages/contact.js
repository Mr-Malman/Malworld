  function cmdContact() {
    printBlank();
    println('c-yellow', '[*] Establishing encrypted comms tunnel to operator...');
    println('c-yellow', '[*] Negotiating TLS 1.3 handshake...');
    println('c-cyan',   '[*] Generating ephemeral ECDH keypair...');
    println('c-green',  '[OK] AES-256-GCM session key derived.');
    println('c-green',  '[OK] Encrypted tunnel established. 3 hops: TOR → VPN → proxy.');
    printBlank();
    println('c-dim',    '-----BEGIN ENCRYPTED MESSAGE-----');
    println('c-dim',    'QWxnb3JpdGhtOiBBRVMtMjU2LUdDTQpLZXkgZGVyaXZhdGlvbjogRUNESAo=');
    printBlank();
    println('',          'To reach the operator:');
    printBlank();
    printRaw(`  <span class="c-cyan">GitHub   :</span> <span class="c-green">github.com/Mr-Malman</span>`);
    printRaw(`  <span class="c-cyan">LinkedIn :</span> <span class="c-green">linkedin.com/in/hackarya007</span>`);
    printRaw(`  <span class="c-cyan">Twitter  :</span> <span class="c-green">x.com/mr_malman</span>`);
    printRaw(`  <span class="c-cyan">Medium   :</span> <span class="c-green">mr-malman.medium.com</span>`);
    printRaw(`  <span class="c-cyan">Portfolio:</span> <span class="c-green">mr-malman.github.io/Malworld</span>`);
    printRaw(`  <span class="c-cyan">YouTube  :</span> <span class="c-green">youtube.com/@Mr-Malman</span>`);
    printBlank();
    println('c-dim',    '-----END ENCRYPTED MESSAGE-----');
    printBlank();
    println('c-yellow', '[*] Message routed through 3 proxies. Untraceable.');
    println('c-dim',    '[*] Session will self-destruct in 60 seconds. (jk)');
    printBlank();
  }
