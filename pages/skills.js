  function cmdSkills() {
    printBlank();
    println('c-yellow', '[*] Connecting to C2 implant at 10.13.37.1:4444...');
    println('c-green',  '[+] Beacon received. Staging payload modules...');
    println('c-dim',    '[*] Core skills sourced from operator profile...');
    printBlank();

    const modules = [
      { name:'vapt               ', pct: 92, final: 18 },
      { name:'malware_analysis   ', pct: 90, final: 18 },
      { name:'malware_development', pct: 85, final: 17 },
      { name:'digital_forensics  ', pct: 90, final: 18 },
      { name:'red_teaming        ', pct: 88, final: 18 },
      { name:'reverse_engineering', pct: 85, final: 17 },
      { name:'incident_response  ', pct: 87, final: 17 },
      { name:'python_scripting   ', pct: 88, final: 18 },
      { name:'c_cpp              ', pct: 75, final: 15 },
      { name:'bash_linux         ', pct: 87, final: 17 },
      { name:'nim_lang           ', pct: 78, final: 16 },
      { name:'network_security   ', pct: 88, final: 18 },
      { name:'threat_intelligence', pct: 85, final: 17 },
    ];

    const TOTAL = 20;
    const spans = [];

    // create placeholder elements first
    modules.forEach((m, idx) => {
      const el = document.createElement('span');
      el.className = 'line';
      output.appendChild(el);
      spans.push({ el, m, cur: 0 });
    });
    output.scrollTop = output.scrollHeight;

    // animate all bars in parallel
    const timer = setInterval(() => {
      let allDone = true;
      spans.forEach(s => {
        if (s.cur < s.m.final) { s.cur++; allDone = false; }
        const filled = '█'.repeat(s.cur);
        const empty  = '░'.repeat(TOTAL - s.cur);
        const done   = s.cur >= s.m.final;
        s.el.innerHTML =
          `<span class="c-yellow">[MODULE]</span> ` +
          `<span class="c-cyan">${s.m.name}</span> ` +
          `<span class="c-green">${filled}</span>` +
          `<span class="c-dim">${empty}</span>` +
          `  <span class="c-yellow">${Math.round((s.cur / TOTAL) * 100)}%</span>` +
          `  <span class="${done ? 'c-green bold' : 'c-dim'}">${done ? 'ACTIVE' : 'LOADING'}</span>`;
      });
      output.scrollTop = output.scrollHeight;
      if (allDone) {
        clearInterval(timer);
        printBlank();
        println('c-green bold', '[*] All 13 modules armed. Payload builder ready.');
        println('c-yellow',     '[*] C2 beacon persistent — keep-alive: 120s');
        println('c-dim',        '[*] Operator clearance level: OPERATOR_ELITE');
        printBlank();
      }
    }, 40);
  }
