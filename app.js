(() => {
  'use strict';

  const email = 'matyasbalcar0@gmail.com';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const translatedElements = [...document.querySelectorAll('[data-i18n]')];
  const english = Object.fromEntries(translatedElements.map(element => [element.dataset.i18n, element.textContent]));
  const translations = {
    en: { ...english, play: 'Play', copied: 'Copied!', copyFailed: 'Select email', copySuccess: 'Email address copied.', copyManual: 'Email selected. Press Control+C or Command+C to copy.', simulationRunning: 'Simulation running.', simulationPaused: 'Simulation paused.', layoutChanged: 'New warehouse layout loaded.', routeFailed: 'No safe schedule found. Try another layout.' },
    cs: {
      skip: 'Přeskočit na obsah', navWork: 'Projekty', navContact: 'Kontakt', resume: 'Životopis',
      heroTitle: 'Ahoj,', heroName: 'jsem Matyáš.',
      heroDescription: 'Jsem full-stack vývojář z Olomouce. Pracuji s C#/.NET, Reactem a Node.js. Tady je pár věcí, které jsem vytvořil ve volném čase.',
      explore: 'Moje projekty', location: 'Olomouc, Česko',
      agents: 'ROBOTI', tick: 'KROK', conflicts: 'KOLIZE', pause: 'Pozastavit', play: 'Spustit', step: 'Krok', newLayout: 'Nová mapa',
      labCaption: 'Malá ukázka plánování tras inspirovaná mým projektem Gridline.',
      workTitle: 'Projekty', workIntro: 'Dva projekty, na kterých pracuji ve volném čase.',
      interfaceStudy: 'Ilustrace rozhraní', simulationStudy: 'Ilustrace simulátoru',
      codeduelDescription: 'Aplikace pro programovací duely, kterou jsem vytvořil v Javě a Reactu. Hledá soupeře, vyhodnocuje jejich kód a po souboji aktualizuje Elo.',
      behindProject: 'Více o projektu',
      gridlineDescription: 'Simulátor skladových robotů v Javě. Zkouším v něm plánování tras a koordinaci více robotů ve společném prostoru.',
      moreGithub: 'Další projekty na GitHubu',
      experienceTitle: 'Kde jsem pracoval', elektDates: '2026 — DOSUD',
      elektRole: 'Software developer', elektDescription: 'Pracuji na softwaru pro výrobní procesy v C#/.NET, ASP.NET MVC, WPF a SQL.',
      railsRole: 'Full-stack / backend developer',
      railsDescription: 'Pracoval jsem na webových aplikacích, REST API a relačních databázích v Reactu a Node.js.',
      itRole: 'Frontend developer', itDescription: 'Vytvářel jsem webová rozhraní a propojoval je s backendovými službami.',
      contactTitle: 'Kontakt',
      contactDescription: 'Když budete chtít probrat projekt nebo se na něco zeptat, napište mi.', copyEmail: 'Zkopírovat e-mail', copied: 'Zkopírováno!',
      copyFailed: 'Vybrat e-mail', copySuccess: 'E-mailová adresa byla zkopírována.', copyManual: 'E-mail je označený. Zkopírujte ho pomocí Control+C nebo Command+C.',
      simulationRunning: 'Simulace běží.', simulationPaused: 'Simulace pozastavena.', layoutChanged: 'Nové rozložení skladu načteno.', routeFailed: 'Bezpečný plán nenalezen. Zkuste jinou mapu.'
    }
  };

  const projects = {
    codeduel: {
      title: 'CodeDuel', stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
      url: `mailto:${email}?subject=CodeDuel`,
      en: {
        summary: 'A side project for timed programming duels, with accounts, matchmaking, code evaluation, and a leaderboard.',
        sections: [
          { title: 'How it works', text: 'Code evaluation runs asynchronously in an isolated environment. Each duel gets a consistent result, and Elo updates use database transactions.' },
          { title: 'Features', items: ['Accounts and matchmaking for timed duels.', 'Isolated code execution and a leaderboard.', 'A React and TypeScript interface with a Spring Boot backend and PostgreSQL.'] }
        ],
        action: 'Ask about CodeDuel', note: 'This is a local MVP I built in 2026. The project preview is an illustration.'
      },
      cs: {
        summary: 'Vlastní projekt pro časované programovací duely, s účty, hledáním soupeřů, vyhodnocováním kódu a žebříčkem.',
        sections: [
          { title: 'Jak to funguje', text: 'Kód se vyhodnocuje asynchronně v izolovaném prostředí. Souboje mají konzistentní výsledky a aktualizace Elo probíhají v databázových transakcích.' },
          { title: 'Funkce', items: ['Účty a hledání soupeřů pro časované duely.', 'Izolované spouštění kódu a žebříček.', 'Rozhraní v Reactu a TypeScriptu, backend ve Spring Boot a databáze PostgreSQL.'] }
        ],
        action: 'Napsat o CodeDuel', note: 'Projekt jsem vytvořil v roce 2026 jako lokální MVP. Náhled je ilustrace.'
      }
    },
    gridline: {
      title: 'Gridline', stack: ['Java 17', 'Swing', 'Space-time A*', 'Reservations', 'Conflict-Based Search'],
      url: 'https://github.com/MatyasBalcar/robot-solver',
      en: {
        summary: 'A Java desktop app for planning and replaying the routes of warehouse robots.',
        sections: [
          { title: 'How it works', text: 'Robots need to account for each other when planning a route. Gridline uses space-time A*, cell reservations, and bounded Conflict-Based Search to coordinate them.' },
          { title: 'Other features', items: ['Pickup and delivery tasks, followed by a return home.', 'Schedule validation before execution.', 'Background planning, timeline playback, and scenario import/export.'] },
          { title: 'The demo on this site', text: 'The homepage has a smaller, separate routing demo running in the browser. You can find the full Java simulator in the repository.' }
        ],
        action: 'View on GitHub', note: 'The project preview is a simplified illustration of the simulator.'
      },
      cs: {
        summary: 'Desktopová aplikace v Javě pro plánování a přehrávání tras skladových robotů.',
        sections: [
          { title: 'Jak to funguje', text: 'Roboti musí při plánování trasy počítat i s ostatními. Gridline je koordinuje pomocí space-time A*, rezervací buněk a omezeného Conflict-Based Search.' },
          { title: 'Další funkce', items: ['Úkoly vyzvednutí a doručení s návratem domů.', 'Validace plánu před spuštěním.', 'Plánování na pozadí, přehrávání časové osy a import/export scénářů.'] },
          { title: 'Ukázka na tomto webu', text: 'Na úvodní stránce běží menší, samostatná ukázka plánování tras v prohlížeči. Plný Java simulátor najdete v repozitáři.' }
        ],
        action: 'Otevřít na GitHubu', note: 'Náhled je zjednodušená ilustrace simulátoru.'
      }
    }
  };

  let language = 'en';
  try {
    const preferred = new URLSearchParams(location.search).get('lang') || localStorage.getItem('portfolio-language');
    if (preferred === 'cs') language = 'cs';
  } catch { /* The default language also works when storage is unavailable. */ }
  let simulation;
  let activeProject = null;
  let copyResetTimer;
  const dialog = document.querySelector('#project-dialog');
  const translate = key => translations[language][key] ?? translations.en[key] ?? key;

  function updateTime() {
    const time = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Prague', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(new Date());
    const element = document.querySelector('#local-time');
    element.textContent = `${time} ${language === 'cs' ? 'MÍSTNÍ ČAS' : 'LOCAL TIME'}`;
    element.setAttribute('aria-label', `${language === 'cs' ? 'Čas v Olomouci' : 'Time in Olomouc'}: ${time}`);
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;
    for (const element of translatedElements) element.textContent = translate(element.dataset.i18n);
    document.querySelector('.language-current').textContent = language === 'cs' ? 'CZ' : 'EN';
    document.querySelector('.language-other').textContent = language === 'cs' ? 'EN' : 'CZ';
    document.querySelector('.language-toggle').setAttribute('aria-label', language === 'cs' ? 'Switch to English' : 'Přepnout do češtiny');
    document.querySelector('.language-toggle').title = language === 'cs' ? 'Switch to English' : 'Přepnout do češtiny';
    document.querySelector('#dialog-close').setAttribute('aria-label', language === 'cs' ? 'Zavřít projekt' : 'Close project');
    document.querySelector('#route-canvas').setAttribute('aria-label', language === 'cs'
      ? 'Šest očíslovaných robotů sleduje koordinované trasy ve skladu. Ovládání níže umožňuje pozastavit simulaci, přejít o krok a změnit mapu.'
      : 'Six numbered robots follow coordinated paths through a warehouse grid. Use the controls below to pause, step, or change the layout.');
    for (const link of document.querySelectorAll('a[href^="resume.html"]')) link.href = `resume.html?lang=${language}`;
    try { localStorage.setItem('portfolio-language', language); } catch { /* Storage is optional. */ }
    try {
      const url = new URL(location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.set('lang', language);
        history.replaceState(null, '', url);
      }
    } catch { /* Direct file previews may restrict history changes. */ }
    updateTime();
    if (simulation) simulation.updateLabels();
    if (activeProject) renderProject(activeProject);
  }

  function renderProject(id) {
    const project = projects[id];
    const content = project[language];
    const external = project.url.startsWith('https:') ? ' target="_blank" rel="noopener noreferrer"' : '';
    // Content is authored locally; no user or remote HTML is inserted here.
    document.querySelector('#dialog-content').innerHTML = `
      <h2 id="dialog-title">${project.title}</h2>
      <p class="dialog-summary">${content.summary}</p>
      <div class="dialog-stack">${project.stack.map(item => `<span>${item}</span>`).join('')}</div>
      ${content.sections.map(section => `<section class="dialog-section"><h3>${section.title}</h3>${section.text ? `<p>${section.text}</p>` : `<ul>${section.items.map(item => `<li>${item}</li>`).join('')}</ul>`}</section>`).join('')}
      <a class="dialog-source" href="${project.url}"${external}>${content.action}<span aria-hidden="true">↗</span></a>
      <p class="dialog-footnote">${content.note}</p>`;
  }

  document.querySelector('.language-toggle').addEventListener('click', () => setLanguage(language === 'en' ? 'cs' : 'en'));
  for (const button of document.querySelectorAll('[data-project]')) {
    button.addEventListener('click', () => {
      activeProject = button.dataset.project;
      renderProject(activeProject);
      dialog.showModal();
      dialog.scrollTop = 0;
    });
  }
  document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => { activeProject = null; });
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });

  document.querySelector('.copy-email').addEventListener('click', async () => {
    const label = document.querySelector('.copy-email [data-i18n]');
    clearTimeout(copyResetTimer);
    let copied = false;
    try {
      await navigator.clipboard.writeText(email);
      copied = true;
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.setAttribute('readonly', '');
      textarea.style.cssText = 'position:fixed;top:0;left:-9999px';
      document.body.append(textarea);
      textarea.select();
      try { copied = document.execCommand('copy'); } catch { /* Fall back to selecting the visible address. */ }
      textarea.remove();
      document.querySelector('.copy-email').focus({ preventScroll: true });
    }
    if (!copied) {
      const range = document.createRange();
      range.selectNodeContents(document.querySelector('.contact-email').firstChild);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    }
    label.textContent = translate(copied ? 'copied' : 'copyFailed');
    document.querySelector('#copy-status').textContent = translate(copied ? 'copySuccess' : 'copyManual');
    copyResetTimer = setTimeout(() => { label.textContent = translate('copyEmail'); }, 2500);
  });

  document.querySelector('#current-year').textContent = new Date().getFullYear();
  setInterval(updateTime, 60000);

  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('#work, #contact');
    const sectionObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of document.querySelectorAll('.main-nav a')) {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        }
      }
    }, { rootMargin: '-10% 0px -55% 0px' });
    for (const section of sections) sectionObserver.observe(section);
  }

  // This small, independent browser study uses cell and edge reservations.
  // It is not a port of Gridline's Java planner or bounded CBS implementation.
  class RouteStudy {
    constructor(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d');
      this.size = 14;
      this.layout = 0;
      this.time = 0;
      this.lastFrame = null;
      this.frameId = null;
      this.visible = true;
      this.playing = !reducedMotion.matches;
      this.robots = [
        { start: [0, 1], goal: [13, 12] }, { start: [13, 1], goal: [0, 12] },
        { start: [0, 6], goal: [13, 7] }, { start: [13, 6], goal: [0, 7] },
        { start: [5, 0], goal: [8, 13] }, { start: [8, 0], goal: [5, 13] }
      ];
      this.loadLayout();
      new ResizeObserver(() => this.resize()).observe(canvas.parentElement);
      document.querySelector('#simulation-toggle').addEventListener('click', () => {
        this.setPlaying(!this.playing);
        this.announce(this.playing ? 'simulationRunning' : 'simulationPaused');
      });
      document.querySelector('#simulation-step').addEventListener('click', () => {
        this.setPlaying(false);
        this.time = this.time >= this.duration ? 0 : Math.floor(this.time) + 1;
        this.draw();
        this.announce('simulationPaused');
      });
      document.querySelector('#simulation-layout').addEventListener('click', () => {
        this.layout = (this.layout + 1) % 3;
        this.loadLayout();
        this.draw();
        this.announce(this.valid ? 'layoutChanged' : 'routeFailed');
      });
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(entries => {
          this.visible = entries[0].isIntersecting;
          this.syncAnimation();
        }).observe(canvas);
      }
      document.addEventListener('visibilitychange', () => this.syncAnimation());
      reducedMotion.addEventListener('change', event => { if (event.matches) this.setPlaying(false); });
      this.resize();
      this.updateLabels();
      this.syncAnimation();
    }

    cellId(x, y) { return y * this.size + x; }
    point(id) { return [id % this.size, Math.floor(id / this.size)]; }

    loadLayout() {
      this.walls = new Set();
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          const shelves = this.layout === 0
            ? [3, 4, 9, 10].includes(x) && y >= 3 && y <= 10 && y !== 6 && y !== 7
            : this.layout === 1
              ? [3, 4, 9, 10].includes(y) && x >= 3 && x <= 10 && x !== 6 && x !== 7
              : ((x >= 3 && x <= 5) || (x >= 8 && x <= 10)) && ((y >= 3 && y <= 5) || (y >= 8 && y <= 10));
          if (shelves) this.walls.add(this.cellId(x, y));
        }
      }
      this.time = 0;
      this.lastFrame = null;
      this.paths = this.plan();
      this.duration = this.paths ? Math.max(...this.paths.map(path => path.length - 1)) : 0;
      this.conflicts = this.paths ? this.validate() : null;
      this.valid = this.conflicts === 0;
      this.canvas.dataset.scheduleValid = String(this.valid);
      this.canvas.dataset.layout = String(this.layout);
      document.querySelector('#conflict-count').textContent = this.conflicts === null ? '—' : String(this.conflicts).padStart(2, '0');
      document.querySelector('#simulation-toggle').disabled = !this.valid;
      document.querySelector('#simulation-step').disabled = !this.valid;
      if (!this.valid) this.playing = false;
      this.updateLabels();
    }

    plan() {
      const horizon = 140;
      const cells = new Set();
      const edges = new Set();
      const paths = [];
      for (const robot of this.robots) cells.add(`${this.cellId(...robot.start)}:0`);
      for (const robot of this.robots) {
        const start = this.cellId(...robot.start);
        const goal = this.cellId(...robot.goal);
        const distance = id => {
          const [x, y] = this.point(id);
          return Math.abs(x - robot.goal[0]) + Math.abs(y - robot.goal[1]);
        };
        const open = [{ id: start, t: 0, h: distance(start), parent: null }];
        const visited = new Set();
        let finish = null;
        while (open.length) {
          open.sort((a, b) => (a.t + a.h) - (b.t + b.h) || a.h - b.h);
          const node = open.shift();
          const key = `${node.id}:${node.t}`;
          if (visited.has(key)) continue;
          visited.add(key);
          if (node.id === goal) {
            let canPark = true;
            for (let t = node.t; t <= horizon; t++) {
              if (cells.has(`${goal}:${t}`)) { canPark = false; break; }
            }
            if (canPark) { finish = node; break; }
          }
          if (node.t >= horizon) continue;
          const [x, y] = this.point(node.id);
          for (const [dx, dy] of [[1, 0], [0, 1], [-1, 0], [0, -1], [0, 0]]) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= this.size || ny >= this.size) continue;
            const next = this.cellId(nx, ny);
            const nextTime = node.t + 1;
            if (this.walls.has(next) || cells.has(`${next}:${nextTime}`) || edges.has(`${next}:${node.id}:${node.t}`) || visited.has(`${next}:${nextTime}`)) continue;
            open.push({ id: next, t: nextTime, h: distance(next), parent: node });
          }
        }
        if (!finish) return null;
        const path = [];
        for (let node = finish; node; node = node.parent) path.unshift(node.id);
        for (let t = 0; t <= horizon; t++) {
          const id = path[Math.min(t, path.length - 1)];
          cells.add(`${id}:${t}`);
          if (t < path.length - 1) edges.add(`${id}:${path[t + 1]}:${t}`);
        }
        paths.push(path);
      }
      return paths;
    }

    validate() {
      let conflicts = 0;
      for (let t = 0; t <= this.duration; t++) {
        for (let i = 0; i < this.paths.length; i++) {
          const current = this.paths[i][Math.min(t, this.paths[i].length - 1)];
          const previous = this.paths[i][Math.max(0, Math.min(t - 1, this.paths[i].length - 1))];
          if (this.walls.has(current)) conflicts++;
          const [cx, cy] = this.point(current);
          const [px, py] = this.point(previous);
          if (Math.abs(cx - px) + Math.abs(cy - py) > 1) conflicts++;
          for (let j = i + 1; j < this.paths.length; j++) {
            const other = this.paths[j][Math.min(t, this.paths[j].length - 1)];
            const otherPrevious = this.paths[j][Math.max(0, Math.min(t - 1, this.paths[j].length - 1))];
            if (current === other || (t > 0 && current === otherPrevious && previous === other)) conflicts++;
          }
        }
      }
      return conflicts;
    }

    resize() {
      const { width, height } = this.canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      this.width = width;
      this.height = height;
      this.canvas.width = Math.round(width * ratio);
      this.canvas.height = Math.round(height * ratio);
      this.context.setTransform(ratio, 0, 0, ratio, 0, 0);
      this.draw();
    }

    draw() {
      const context = this.context;
      if (!context || !this.width) return;
      const cell = (Math.min(this.width, this.height) - 48) / this.size;
      const offsetX = (this.width - cell * this.size) / 2;
      const offsetY = (this.height - cell * this.size) / 2;
      const center = id => {
        const [x, y] = this.point(id);
        return [offsetX + (x + .5) * cell, offsetY + (y + .5) * cell];
      };
      context.clearRect(0, 0, this.width, this.height);
      context.lineWidth = .65;
      context.strokeStyle = '#353530';
      context.beginPath();
      for (let n = 0; n <= this.size; n++) {
        context.moveTo(offsetX + n * cell, offsetY);
        context.lineTo(offsetX + n * cell, offsetY + this.size * cell);
        context.moveTo(offsetX, offsetY + n * cell);
        context.lineTo(offsetX + this.size * cell, offsetY + n * cell);
      }
      context.stroke();
      for (const id of this.walls) {
        const [x, y] = center(id);
        context.fillStyle = '#3d3d36';
        context.fillRect(x - cell / 2 + 2, y - cell / 2 + 2, cell - 4, cell - 4);
        context.strokeStyle = '#54544a';
        context.strokeRect(x - cell / 2 + 4, y - cell / 2 + 4, cell - 8, cell - 8);
      }
      if (!this.paths) return;
      const tick = Math.min(Math.floor(this.time), this.duration);
      const fraction = Math.min(this.time - tick, 1);
      const eased = fraction * fraction * (3 - 2 * fraction);
      const shades = ['#f0f0e7', '#aaaa9f', '#d6d6ca', '#8a8a7e', '#c3c3b6', '#e4e4d9'];
      this.paths.forEach((path, index) => {
        const step = Math.min(tick, path.length - 1);
        const [x, y] = center(path[step]);
        const [nx, ny] = center(path[Math.min(step + 1, path.length - 1)]);
        const rx = x + (nx - x) * eased;
        const ry = y + (ny - y) * eased;
        context.beginPath();
        context.moveTo(rx, ry);
        for (let n = step + 1; n < path.length; n++) context.lineTo(...center(path[n]));
        context.strokeStyle = `${shades[index]}55`;
        context.lineWidth = 1;
        context.setLineDash([3, 4]);
        context.stroke();
        context.setLineDash([]);
        const [gx, gy] = center(path[path.length - 1]);
        context.strokeStyle = `${shades[index]}70`;
        context.strokeRect(gx - cell * .2, gy - cell * .2, cell * .4, cell * .4);
        const side = cell * .68;
        context.fillStyle = shades[index];
        context.fillRect(rx - side / 2, ry - side / 2, side, side);
        context.fillStyle = '#171713';
        context.font = `500 ${Math.max(6, cell * .29)}px Consolas, monospace`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(String(index + 1).padStart(2, '0'), rx, ry + .5);
      });
      document.querySelector('#tick-count').textContent = String(tick).padStart(3, '0');
    }

    updateLabels() {
      document.querySelector('#play-label').textContent = translate(this.playing ? 'pause' : 'play');
      document.querySelector('#play-symbol').textContent = this.playing ? 'Ⅱ' : '▶';
      document.querySelector('#simulation-toggle').removeAttribute('aria-pressed');
      this.canvas.dataset.playing = String(this.playing);
    }

    announce(key) { document.querySelector('#simulation-status').textContent = translate(key); }

    setPlaying(value) {
      this.playing = value && this.valid;
      if (this.playing && this.time >= this.duration) this.time = 0;
      this.updateLabels();
      this.syncAnimation();
    }

    syncAnimation() {
      if (this.frameId !== null) cancelAnimationFrame(this.frameId);
      this.frameId = null;
      this.lastFrame = null;
      if (this.playing && this.visible && !document.hidden && this.valid) this.frameId = requestAnimationFrame(time => this.frame(time));
    }

    frame(now) {
      if (!this.playing || !this.visible || document.hidden) { this.frameId = null; return; }
      if (this.lastFrame !== null) this.time += Math.min(now - this.lastFrame, 80) / 560;
      this.lastFrame = now;
      if (this.time > this.duration + 3) this.time = 0;
      this.draw();
      this.frameId = requestAnimationFrame(time => this.frame(time));
    }
  }

  const miniMap = document.querySelector('#warehouse-mini');
  const miniRobots = new Map([[15, '01'], [26, '02'], [70, '03'], [83, '04'], [117, '05'], [130, '06']]);
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 14; x++) {
      const cell = document.createElement('span');
      cell.className = 'warehouse-cell';
      const wall = [3, 4, 9, 10].includes(x) && y >= 2 && y <= 7 && y !== 4 && y !== 5;
      if (wall) cell.classList.add('wall');
      else if ([1, 4, 5, 8].includes(y) || x === 1 || x === 12) cell.classList.add('route');
      const robot = miniRobots.get(y * 14 + x);
      if (robot) {
        cell.classList.add('robot');
        if (Number(robot) % 2 === 0) cell.classList.add('robot-outline');
        cell.dataset.robot = robot;
      }
      miniMap.append(cell);
    }
  }

  setLanguage(language);
  if (document.querySelector('#route-canvas').getContext('2d')) simulation = new RouteStudy(document.querySelector('#route-canvas'));
})();
