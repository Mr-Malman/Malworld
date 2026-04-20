  function cmdExperience() {
    printBlank();
    println('c-yellow', '[*] Intercepting timeline packets from target: MAL...');
    println('c-yellow', '[*] ARP poisoning successful. Decrypting MITM payload...');
    println('c-dim',    '[*] Wireshark capture: interface eth0 | filter: host 10.13.37.1');
    println('c-dim',    '──────────────────────────────────────────────────────────────────────');
    printBlank();

    const jobs = [
      {
        year: 'APR 2025→MAY 2025',
        src:  'Hack Secure → Remote, India',
        role: 'Cyber Security Intern',
        payload: 'Active security intern role — live vulnerability research and assessment',
        duration: 'April 2025 – May 2025 · 2 months · session in progress'
      },
      {
        year: 'FEB 2025→APR 2025',
        src:  'MRGS Infoway → Remote, Kolkata',
        role: 'Cyber Security Instructor',
        payload: 'Cyber Vahini Project — trained female students: cybersecurity fundamentals, VAPT, digital safety',
        duration: 'Feb 2025 – Apr 2025 · 3 months'
      },
      {
        year: 'FEB 2025→MAR 2025',
        src:  'Hacktify Cyber Security → Remote, Mumbai',
        role: 'VAPT Tester',
        payload: 'Enterprise network pentests — Burp Suite, Nmap, Metasploit: critical vuln identification + remediation',
        duration: 'Feb 2025 – Mar 2025 · 2 months'
      },
      {
        year: 'AUG 2023→AUG 2024',
        src:  'EDCI → Onsite, Kolkata',
        role: 'Junior Cyber Crime Investigator',
        payload: 'Digital forensics & incident response — Autopsy, FTK, EnCase, Wireshark deep forensic analysis',
        duration: 'Aug 2023 – Aug 2024 · 12 months · classified assignment'
      },
      {
        year: 'MAR 2023→JUN 2023',
        src:  'Indian Cyber Security Solutions → Onsite, Kolkata',
        role: 'VAPT Intern',
        payload: 'Network vulnerability assessments and pentesting — Nmap, Nessus, Burp Suite, Metasploit',
        duration: 'Mar 2023 – Jun 2023 · 4 months'
      },
    ];

    const printPacket = (job, i, total) => {
      const no = String(i+1).padStart(2,'0');
      printRaw(`<span class="c-dim">PKT#${no}</span>  <span class="c-yellow">[${job.year}]</span>`);
      printRaw(`        <span class="c-dim">SRC    :</span> <span class="c-cyan">${job.src}</span>`);
      printRaw(`        <span class="c-dim">DST    :</span> <span class="c-green">Arya Koner | Mal</span>`);
      printRaw(`        <span class="c-dim">ROLE   :</span> <span class="c-green bold">${job.role}</span>`);
      println('',        `        PAYLOAD: ${job.payload}`);
      printRaw(`        <span class="c-dim">BYTES  :</span> <span class="c-magenta">${job.duration}</span>`);
      if (i < total - 1) println('c-dim', '        ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─');
      printBlank();
    };

    jobs.forEach((job, i) => printPacket(job, i, jobs.length));

    println('c-dim',    '──────────────────────────────────────────────────────────────────────');
    println('c-yellow', `[*] ${jobs.length} timeline packets intercepted and decrypted.`);
    println('c-dim',    '[*] Packet capture saved: /tmp/mal_timeline.pcap');
    printBlank();
  }
