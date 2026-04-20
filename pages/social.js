  function cmdSocial() {
    printBlank();
    println('c-yellow', '[*] Launching theHarvester against target: Arya Koner | Mr. Malman...');
    println('c-yellow', '[*] Modules: google · bing · github · linkedin · twitter · hunter.io');
    println('c-dim',    '[*] Correlation engine: Maltego CE v4.4.0');
    printBlank();

    const sources = [
      { source:'GitHub',        delay: 300,  hit:'+', val:'github.com/Mr-Malman',             note: 'Source repos · NimHunter · BLACKICE · BADNET · 12+ repos' },
      { source:'Portfolio',     delay: 700,  hit:'+', val:'mr-malman.github.io/Malworld',     note: 'Live CTF-themed terminal portfolio' },
      { source:'LinkedIn',      delay: 1100, hit:'+', val:'linkedin.com/in/hackarya007',      note: 'Cybersecurity Researcher — Noida/Kolkata' },
      { source:'Twitter/X',     delay: 1500, hit:'+', val:'x.com/mr_malman',                  note: 'Active · threat intel · security content' },
      { source:'YouTube',       delay: 1900, hit:'+', val:'youtube.com/@Mr-Malman',           note: 'Security tutorials & walkthroughs' },
      { source:'Medium',        delay: 2300, hit:'+', val:'mr-malman.medium.com',             note: 'Research articles · malware analysis deep dives' },
      { source:'MalwareBazaar', delay: 2700, hit:'+', val:'bazaar.abuse.ch/user/31425',       note: 'Malware samples & threat intelligence published' },
      { source:'Email',         delay: 3100, hit:'+', val:'arya.koner07@gmail.com',           note: 'Primary contact — operator reachable' },
    ];

    sources.forEach(s => {
      setTimeout(() => {
        println('c-yellow', `[*] Querying ${s.source}...`);
        setTimeout(() => {
          printRaw(
            `<span class="c-green">[${s.hit}]</span> ` +
            `<span class="c-cyan">${s.val}</span>  ` +
            `<span class="c-dim">// ${s.note}</span>`
          );
          if (s === sources[sources.length - 1]) {
            setTimeout(() => {
              printBlank();
              println('c-dim',    '──────────────────────────────────────────────────────────────────────');
              println('c-yellow', `[*] Scan complete. ${sources.length} accounts enumerated & exfiltrated.`);
              println('c-green',  '[+] OSINT profile compiled. Significant digital footprint confirmed.');
              println('c-dim',    '[*] Report saved: /tmp/osint_mal_operator.txt');
              printBlank();
            }, 400);
          }
        }, 250);
      }, s.delay);
    });
  }
