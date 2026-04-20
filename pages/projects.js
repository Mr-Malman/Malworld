  function cmdProjects() {
    printBlank();
    println('c-yellow', '[*] Querying active operations database...');
    println('c-yellow', '[*] Enumerating hijacked sessions — decrypting manifests...');
    printBlank();

    const projects = [
      {
        id: '001', name: 'NIM MALWARE DETECTION FRAMEWORK',
        status: 'RESEARCH/ACTIVE', type: 'Multi-Layered Detection for Nim-Compiled Malicious Binaries',
        stack: 'Python · YARA · ML · Static Analysis · Compiler Artifact Fingerprinting',
        org: 'Amity University Noida', year: '2026 – Present',
        threat: 'CRITICAL', tlevel: 'Identifies persistent fingerprints even after obfuscation',
        link: 'github.com/Mr-Malman/NimHunter'
      },
      {
        id: '002', name: 'BLACKICE AI MCP AGENTS v1',
        status: 'ACTIVE/DEPLOYED', type: 'Advanced AI-Powered Autonomous Penetration Testing Framework',
        stack: 'Python · LLMs · MCP Protocol · Autonomous Agents · 150+ Security Tools',
        org: 'Independent / Research', year: '2025 – Present',
        threat: 'CRITICAL', tlevel: 'Intelligent Decision Engine — fully autonomous red team ops',
        link: 'github.com/Mr-Malman/BLACKICE'
      },
      {
        id: '003', name: 'BADNET v1',
        status: 'DEPLOYED', type: 'AI-Powered Cyberattack Detection & Prediction System',
        stack: 'Python · Scikit-learn · Pandas · ML Algorithms · CLI Workflows',
        org: 'Independent / Research', year: '2025',
        threat: 'HIGH', tlevel: 'Real-time detection: DoS · Probe · R2L · U2R · auto training pipelines',
        link: 'github.com/Mr-Malman/BADNET'
      },
    ];

    const DIV  = () => println('c-green',  '═══════════════════════════════════════════════════════════════');
    const SEP  = () => println('c-dim',    '───────────────────────────────────────────────────────────────');

    projects.forEach(p => {
      const tcol = p.threat === 'CRITICAL' ? 'c-red' : p.threat === 'HIGH' ? 'c-yellow' : 'c-cyan';
      DIV();
      println('c-cyan bold', `SESSION #${p.id} — [${p.threat === 'CRITICAL' ? '!CRITICAL! ' : ''}${p.name}]`);
      SEP();
      printRaw(`<span class="c-dim">STATUS   :</span> <span class="c-green bold">${p.status}</span>`);
      printRaw(`<span class="c-dim">TYPE     :</span> ${p.type}`);
      printRaw(`<span class="c-dim">STACK    :</span> <span class="c-cyan">${p.stack}</span>`);
      printRaw(`<span class="c-dim">ORG      :</span> ${p.org}  <span class="c-dim">|  YEAR: ${p.year}</span>`);
      printRaw(`<span class="c-dim">THREAT   :</span> [<span class="${tcol}">${p.threat}</span>] ${p.tlevel}`);
      printRaw(`<span class="c-dim">LINK     :</span> <span class="c-cyan">${p.link}</span>`);
    });

    DIV();
    printBlank();
    println('c-yellow', `[*] ${projects.length} active operations enumerated.`);
    println('c-dim',    '[*] Additional projects: github.com/Mr-Malman');
    printBlank();
  }
