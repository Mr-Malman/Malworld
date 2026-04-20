  function cmdTools() {
    printBlank();
    println('c-yellow', '[*] Querying botnet C2 panel — arming arsenal...');
    println('c-yellow', '[*] Syncing tool registry from 847 zombie nodes...');
    println('c-dim',    '[*] Source: operator profile + CV verification');
    printBlank();

    // Tools direct from CV: IDA Pro, Ghidra, Metasploit, Burp Suite, Splunk, Wireshark,
    // Volatility, Python, C/C++, Bash, Linux, Nim, Nmap, Nessus, Autopsy, FTK, EnCase
    const tools = [
      { name:'IDA Pro       ', cat:'Reverse Eng   ', status:'LOADED' },
      { name:'Ghidra        ', cat:'Reverse Eng   ', status:'LOADED' },
      { name:'Metasploit    ', cat:'Exploitation  ', status:'LOADED' },
      { name:'Burp Suite    ', cat:'Web Attack    ', status:'LOADED' },
      { name:'Splunk        ', cat:'SIEM/Detect   ', status:'LOADED' },
      { name:'Wireshark     ', cat:'Packet Anal   ', status:'LOADED' },
      { name:'Volatility    ', cat:'Mem Forensics ', status:'LOADED' },
      { name:'Python        ', cat:'Scripting/Dev ', status:'LOADED' },
      { name:'C / C++       ', cat:'Systems Dev   ', status:'LOADED' },
      { name:'Bash/Linux    ', cat:'Automation    ', status:'LOADED' },
      { name:'Nim           ', cat:'Malware Dev   ', status:'LOADED' },
      { name:'Nmap          ', cat:'Enumeration   ', status:'LOADED' },
      { name:'Nessus        ', cat:'Vuln Scanning ', status:'LOADED' },
      { name:'Autopsy       ', cat:'Forensics     ', status:'LOADED' },
      { name:'FTK           ', cat:'Forensics     ', status:'LOADED' },
      { name:'EnCase        ', cat:'Forensics     ', status:'LOADED' },
    ];

    println('c-dim', '┌───────────────────┬──────────────────┬────────────┐');
    printRaw(
      '│ <span class="c-cyan">TOOL             </span> │ ' +
      '<span class="c-cyan">CATEGORY        </span> │ ' +
      '<span class="c-cyan">STATUS    </span> │'
    );
    println('c-dim', '├───────────────────┼──────────────────┼────────────┤');

    const printRow = (t, i) => {
      setTimeout(() => {
        printRaw(
          `│ <span class="c-green">${t.name}</span>│ ` +
          `<span>${t.cat}</span>│ ` +
          `<span class="c-green bold">${t.status}   </span>│`
        );
        if (i === tools.length - 1) {
          println('c-dim', '└───────────────────┴──────────────────┴────────────┘');
          printBlank();
          println('c-green bold', `[+] ${tools.length} weapons loaded. Arsenal fully operational.`);
          println('c-yellow', '[*] All tools synced across botnet nodes.');
          printBlank();
        }
      }, i * 60);
    };

    tools.forEach((t, i) => printRow(t, i));
  }
