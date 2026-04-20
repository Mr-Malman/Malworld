  function cmdAbout() {
    const lines = [
      { fn: () => printBlank() },
      { fn: () => println('c-yellow', '[*] Starting Nmap 7.94SVN ( https://nmap.org )') },
      { fn: () => println('c-dim',    '[*] Nmap scan report for mal-operator (10.13.37.1)') },
      { fn: () => println('c-dim',    '[*] Host is up (0.0014s latency). Not shown: 65522 closed ports.') },
      { fn: () => printBlank() },
      { fn: () => println('c-cyan bold', 'PORT      STATE  SERVICE     VERSION') },
      { fn: () => println('c-dim',       '──────────────────────────────────────────────────────────────────────') },
      { fn: () => printRaw('<span class="c-green">22/tcp  </span>  <span class="c-green">open</span>   <span class="c-cyan">identity  </span>  Arya Koner | Mal | Mr. Malman') },
      { fn: () => printRaw('<span class="c-green">25/tcp  </span>  <span class="c-green">open</span>   <span class="c-cyan">email     </span>  arya.koner07@gmail.com') },
      { fn: () => printRaw('<span class="c-green">80/tcp  </span>  <span class="c-green">open</span>   <span class="c-cyan">role      </span>  Cybersecurity Researcher &amp; Developer | Age: 23') },
      { fn: () => printRaw('<span class="c-green">443/tcp </span>  <span class="c-green">open</span>   <span class="c-cyan">focus     </span>  Malware Analysis · Red Teaming · Digital Forensics · AI Security') },
      { fn: () => printRaw('<span class="c-green">1337/tcp</span>  <span class="c-green">open</span>   <span class="c-cyan">specialty </span>  VAPT · Reverse Engineering · Incident Response') },
      { fn: () => printRaw('<span class="c-green">3306/tcp</span>  <span class="c-green">open</span>   <span class="c-cyan">languages </span>  English · Bengali · Hindi') },
      { fn: () => printRaw('<span class="c-green">8080/tcp</span>  <span class="c-green">open</span>   <span class="c-cyan">status    </span>  <span class="c-yellow">Available for collaboration &amp; research work</span>') },
      { fn: () => printRaw('<span class="c-green">9000/tcp</span>  <span class="c-green">open</span>   <span class="c-cyan">location  </span>  Kolkata, West Bengal / Noida, UP (Remote-ready)') },
      { fn: () => printBlank() },
      { fn: () => println('c-dim', '──────────────────────────────────────────────────────────────────────') },
      { fn: () => println('c-yellow', '[INFO] Host is UP. Operator profile fully loaded.') },
      { fn: () => println('c-yellow', '[INFO] OS fingerprint: OffSec/Research — Linux kernel + Windows internals expertise') },
      { fn: () => printBlank() },
      { fn: () => println('c-green bold', '[BIO] Cybersecurity Specialist & Digital Forensics Investigator bridging') },
      { fn: () => println('',             '      offensive security and advanced threat detection. M.Sc. in Cyber') },
      { fn: () => println('',             '      Forensic & Cyber Security at Amity University Noida (CGPA: 8.01).') },
      { fn: () => printBlank() },
      { fn: () => println('c-green bold', '[BIO] Hobbies: Malware Research · CTF Competitions · Cybersecurity Blogging') },
      { fn: () => println('',             '      (Medium) · Threat Intelligence · Playing Guitar · Cooking') },
      { fn: () => printBlank() },
      { fn: () => println('c-yellow', '[INFO] "Building defenses by understanding the offense."') },
      { fn: () => println('c-dim',    '[INFO] "I am the firewall to my own success. No malware, no obstacle can break me."') },
      { fn: () => printBlank() },
    ];
    let i = 0;
    const t = setInterval(() => {
      if (i >= lines.length) { clearInterval(t); return; }
      lines[i++].fn();
    }, 40);
  }
