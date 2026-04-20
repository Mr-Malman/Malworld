  function cmdLs() {
    printBlank();
    println('c-dim', ' Directory of C:\\Users\\victim');
    printBlank();
    const pad = (s, n) => s + ' '.repeat(Math.max(0, n - s.length));
    const now = new Date();
    const d   = now.toLocaleDateString('en-GB').replace(/\//g,'/');
    const t   = now.toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' });

    const items = [
      { date:d, time:t, type:'<DIR>', name:'about',      size:''},
      { date:d, time:t, type:'<DIR>', name:'projects',   size:''},
      { date:d, time:t, type:'<DIR>', name:'experience', size:''},
      { date:d, time:t, type:'<DIR>', name:'education',  size:''},
      { date:d, time:t, type:'<DIR>', name:'tools',      size:''},
      { date:d, time:t, type:'<DIR>', name:'social',     size:''},
      { date:d, time:t, type:'',      name:'contact.enc',size:'  4,096'},
      { date:d, time:t, type:'',      name:'README.md',  size:'  2,041'},
      { date:d, time:t, type:'',      name:'payload.py', size:'  8,192'},
    ];

    items.forEach(item => {
      const line = `${pad(item.date,10)}  ${pad(item.time,5)}    ${pad(item.type,5)}  ${pad(item.size,10)}  ${item.name}`;
      if (item.type === '<DIR>') {
        const el = span('c-cyan', line);
        print(el);
      } else {
        println('', line);
      }
    });

    printBlank();
    println('c-dim', `               3 Dir(s)     6 File(s)`);
    println('c-dim', `              48,291,840 bytes free`);
    printBlank();
  }
