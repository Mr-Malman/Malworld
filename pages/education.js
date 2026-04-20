  function cmdEducation() {
    const lines = [
      { fn: () => printBlank() },
      { fn: () => println('c-yellow', '[*] Initializing Windows kernel module loader...') },
      { fn: () => println('c-yellow', '[*] Calling NtMapViewOfSection() on education.dll...') },
      { fn: () => println('c-dim',    '[*] Resolving export table — walking PEB loader data...') },
      { fn: () => printBlank() },
      { fn: () => println('c-dim',    '──────────────────────────────────────────────────────────────────────') },
      // Degree 1
      { fn: () => printRaw('<span class="c-cyan">LoadLibrary(<span class="c-green">"AmityUniversityNoida.dll"</span>)</span>  →  <span class="c-green bold">0x7FFE0000  SUCCESS</span>') },
      { fn: () => printRaw('  <span class="c-yellow">GetProcAddress("MSc_CyberForensic_CyberSecurity")</span>  →  <span class="c-magenta">0x7FFE4821</span>') },
      { fn: () => printRaw('  <span class="c-yellow">GetProcAddress("Board_AmityUniversity")</span>          →  <span class="c-magenta">0x7FFE4822</span>') },
      { fn: () => printRaw('  <span class="c-yellow">GetProcAddress("Duration_2024_to_Present")</span>       →  <span class="c-magenta">0x7FFE4823</span>') },
      { fn: () => printRaw('  <span class="c-yellow">GetProcAddress("CGPA_8.01")</span>                      →  <span class="c-magenta">0x7FFE4824</span>') },
      { fn: () => printRaw('  <span class="c-dim">ImportTable:</span> <span class="c-cyan">Digital Forensics · Network Security · Cryptography · AI/ML · OS Internals</span>') },
      { fn: () => printBlank() },
      // Degree 2
      { fn: () => printRaw('<span class="c-cyan">LoadLibrary(<span class="c-green">"SKFGI_MAKAUT.dll"</span>)</span>              →  <span class="c-green bold">0x7FFE1000  SUCCESS</span>') },
      { fn: () => printRaw('  <span class="c-yellow">GetProcAddress("BSc_CyberSecurity")</span>              →  <span class="c-magenta">0x7FFE1001</span>') },
      { fn: () => printRaw('  <span class="c-yellow">GetProcAddress("Board_MAKAUTUniversity")</span>         →  <span class="c-magenta">0x7FFE1002</span>') },
      { fn: () => printRaw('  <span class="c-yellow">GetProcAddress("Year_2023")</span>                      →  <span class="c-magenta">0x7FFE1003</span>') },
      { fn: () => printRaw('  <span class="c-yellow">GetProcAddress("CGPA_8.86")</span>                      →  <span class="c-magenta">0x7FFE1004</span>') },
      { fn: () => printRaw('  <span class="c-dim">ImportTable:</span> <span class="c-cyan">Algorithms · Data Structures · Networking · OS · Software Development</span>') },
      { fn: () => printBlank() },
      { fn: () => println('c-dim',    '──────────────────────────────────────────────────────────────────────') },
      { fn: () => println('c-yellow', '[*] Scanning certification registry (HKLM\\SOFTWARE\\Certs)...') },
      { fn: () => printBlank() },
      // Certs
      { fn: () => printRaw('  <span class="c-green">[OK]</span>  CompTIA Security+              <span class="c-dim">[VERIFIED]  EC id: 97e48515</span>') },
      { fn: () => printRaw('  <span class="c-green">[OK]</span>  Certified Ethical Hacker MASTER <span class="c-dim">[VERIFIED]  EC-Council</span>') },
      { fn: () => printRaw('  <span class="c-green">[OK]</span>  CEH (Practical)                <span class="c-dim">[VERIFIED]  EC-Council hands-on</span>') },
      { fn: () => printRaw('  <span class="c-green">[OK]</span>  CEH v13 AI                     <span class="c-dim">[VERIFIED]  EC-Council AI edition</span>') },
      { fn: () => printRaw('  <span class="c-green">[OK]</span>  Google Cybersecurity           <span class="c-dim">[VERIFIED]  Google Career Certificate</span>') },
      { fn: () => printRaw('  <span class="c-green">[OK]</span>  Cisco Cyber Threat Management  <span class="c-dim">[VERIFIED]  Cisco NetAcad</span>') },
      { fn: () => printBlank() },
      { fn: () => println('c-green bold', '[OK] Education module fully mapped into process memory.') },
      { fn: () => println('c-dim',        '[*] Base address: 0x00400000 | 2 degrees · 6 certifications loaded') },
      { fn: () => printBlank() },
    ];
    let i = 0;
    const t = setInterval(() => {
      if (i >= lines.length) { clearInterval(t); return; }
      lines[i++].fn();
    }, 55);
  }
