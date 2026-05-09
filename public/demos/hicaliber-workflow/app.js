// ===== PANEL SWITCHING =====
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('panel-' + btn.dataset.panel).classList.add('active');
  });
});

// ===== 1. DATA MODEL =====
function renderDataModel() {
  const container = document.getElementById('er-diagram');
  container.innerHTML = ENTITIES.map(e => `
    <div class="entity-box" data-id="${e.id}">
      <div class="entity-icon">${e.icon}</div>
      <div class="entity-badge">${e.badge}</div>
      <h3>${e.name}</h3>
      <p class="entity-desc">${e.desc}</p>
      <div class="rel-tags">${e.rels.map(r => `<span class="rel-tag">${r}</span>`).join('')}</div>
    </div>
  `).join('');

  container.querySelectorAll('.entity-box').forEach(box => {
    box.addEventListener('click', () => {
      container.querySelectorAll('.entity-box').forEach(b => b.classList.remove('selected'));
      box.classList.add('selected');
      showEntityDetail(box.dataset.id);
    });
  });
}

function showEntityDetail(id) {
  const e = ENTITIES.find(x => x.id === id);
  const detail = document.getElementById('entity-detail');
  detail.innerHTML = `
    <div class="detail-title">${e.icon} ${e.name}</div>
    <div class="detail-subtitle">${e.desc} · ${e.fields.length} fields · ${e.rels.length} relationships</div>
    <table class="field-table">
      <thead><tr><th>Field</th><th>Type</th><th>Note</th></tr></thead>
      <tbody>${e.fields.map(f => `
        <tr>
          <td>${f.name}</td>
          <td class="${f.type.includes('FK') ? 'fk' : ''}">${f.type}</td>
          <td>${f.note}</td>
        </tr>`).join('')}
      </tbody>
    </table>`;
}

// ===== 2. STATE MACHINE =====
function renderStateMachine() {
  const canvas = document.getElementById('sm-canvas');
  const rows = [
    { type:'nodes', ids:['DRAFT','VALIDATING','UNDER_REVIEW'] },
    { type:'branch-label', labels:['↓ pass →','↗ fail'] },
    { type:'solo', ids:['INCOMPLETE'], side:'right', note:'Fix & re-submit ↑' },
    { type:'nodes', ids:['APPROVED'] },
    { type:'nodes', ids:['PUBLISHING'] },
    { type:'nodes', ids:['LIVE'] },
    { type:'branch', ids:['SOLD'], note:'Price Δ>10% → re-review ↑' },
    { type:'nodes', ids:['ARCHIVED'] },
  ];

  let html = '';
  // Simple linear flow with labeled arrows
  const order = ['DRAFT','VALIDATING','INCOMPLETE','UNDER_REVIEW','APPROVED','PUBLISHING','LIVE','SOLD','ARCHIVED'];
  order.forEach((sid, i) => {
    const s = STATES.find(x => x.id === sid);
    html += `<div class="sm-node" data-state="${s.id}"><span class="node-label">${s.label}</span><span class="node-sub">${s.sub}</span></div>`;
    if (i < order.length - 1) html += `<span class="sm-arrow">→</span>`;
  });
  canvas.innerHTML = html;

  canvas.querySelectorAll('.sm-node').forEach(node => {
    node.addEventListener('click', () => {
      canvas.querySelectorAll('.sm-node').forEach(n => n.classList.remove('selected','pulse'));
      node.classList.add('selected','pulse');
      showStateDetail(node.dataset.state);
    });
  });
}

function showStateDetail(id) {
  const s = STATES.find(x => x.id === id);
  const detail = document.getElementById('state-detail');
  detail.innerHTML = `
    <div class="detail-title" style="color:${s.color}">${s.label}</div>
    <div class="detail-subtitle">${s.sub}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:14px">
      <div class="rule-block trigger"><h5>Entry Condition</h5><p>${s.entry}</p></div>
      <div class="rule-block condition"><h5>Exit Condition</h5><p>${s.exit}</p></div>
      <div class="rule-block action"><h5>Auto Actions</h5><ul>${s.actions.map(a => `<li>${a}</li>`).join('')}</ul></div>
    </div>`;
}

// ===== 3. RULES ENGINE =====
function renderRules() {
  const container = document.getElementById('rules-list');
  container.innerHTML = RULES.map(r => `
    <div class="rule-card" data-rule="${r.id}">
      <div class="rule-card-header">
        <div class="rule-card-left">
          <span class="rule-number">${r.id}</span>
          <div><div class="rule-title">${r.title}</div><div class="rule-desc">${r.desc}</div></div>
        </div>
        <div style="display:flex;align-items:center">
          <div class="rule-toggle on" data-rule-toggle="${r.id}"></div>
          <span class="rule-expand">▼</span>
        </div>
      </div>
      <div class="rule-body"><div class="rule-body-inner">
        <div class="rule-block trigger"><h5>Trigger</h5><p>${r.trigger}</p></div>
        <div class="rule-block condition"><h5>Conditions</h5><ul>${r.conditions.map(c => `<li>${c}</li>`).join('')}</ul></div>
        <div class="rule-block action"><h5>Actions</h5><ul>${r.actions.map(a => `<li>${a}</li>`).join('')}</ul></div>
      </div></div>
    </div>
  `).join('');

  container.querySelectorAll('.rule-card-header').forEach(header => {
    header.addEventListener('click', (e) => {
      if (e.target.classList.contains('rule-toggle') || e.target.closest('.rule-toggle')) return;
      header.closest('.rule-card').classList.toggle('open');
    });
  });

  container.querySelectorAll('.rule-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => toggle.classList.toggle('on'));
  });
}

// ===== 4. SIMULATION =====
let simRunning = false;

function renderSimulation() {
  const sc = document.getElementById('sim-scenarios');
  sc.innerHTML = SCENARIOS.map((s, i) => `
    <button class="scenario-btn ${i === 0 ? 'selected' : ''}" data-scenario="${s.id}">
      <div class="sc-icon">${s.icon}</div>
      <div class="sc-name">${s.name}</div>
      <div class="sc-desc">${s.desc}</div>
    </button>
  `).join('') + `<button class="btn-run" id="btn-run-sim">▶ Run Simulation</button>`;

  sc.querySelectorAll('.scenario-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (simRunning) return;
      sc.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      resetSimUI();
    });
  });

  document.getElementById('btn-run-sim').addEventListener('click', runSimulation);
  document.getElementById('btn-clear-console').addEventListener('click', () => {
    document.getElementById('console-body').innerHTML = '<p class="console-idle">Select a scenario and press Run to begin.</p>';
    resetSimUI();
  });
}

function resetSimUI() {
  document.getElementById('sim-state-track').innerHTML = '';
  document.getElementById('task-list').innerHTML = '';
  document.getElementById('notif-list').innerHTML = '';
}

async function runSimulation() {
  if (simRunning) return;
  simRunning = true;
  const runBtn = document.getElementById('btn-run-sim');
  runBtn.disabled = true;
  runBtn.textContent = '⏳ Running...';

  const selectedId = document.querySelector('.scenario-btn.selected')?.dataset.scenario || 'happy';
  const scenario = SCENARIOS.find(s => s.id === selectedId);
  const consoleEl = document.getElementById('console-body');
  const trackEl = document.getElementById('sim-state-track');
  const taskListEl = document.getElementById('task-list');
  const notifListEl = document.getElementById('notif-list');

  consoleEl.innerHTML = '';
  trackEl.innerHTML = '';
  taskListEl.innerHTML = '';
  notifListEl.innerHTML = '';

  for (let i = 0; i < scenario.steps.length; i++) {
    const step = scenario.steps[i];
    await sleep(600);

    // Add state to track
    if (i > 0) trackEl.innerHTML += `<span class="sim-st-arrow">→</span>`;
    const stNode = document.createElement('span');
    stNode.className = 'sim-st active';
    stNode.textContent = step.state;
    if (step.state === 'INCOMPLETE') stNode.classList.add('error');
    trackEl.appendChild(stNode);
    trackEl.scrollLeft = trackEl.scrollWidth;

    // Mark previous as done
    const prevNodes = trackEl.querySelectorAll('.sim-st');
    prevNodes.forEach((n, idx) => { if (idx < prevNodes.length - 1) { n.classList.remove('active'); n.classList.add('done'); }});

    // Log entries
    for (const log of step.log) {
      await sleep(350);
      const time = new Date().toLocaleTimeString('en-AU', { hour12: false });
      const line = document.createElement('div');
      line.className = 'log-line';
      line.innerHTML = `<span class="log-time">${time}</span><span class="log-type ${log.type}">[${log.type.toUpperCase()}]</span>${log.msg}`;
      consoleEl.appendChild(line);
      consoleEl.scrollTop = consoleEl.scrollHeight;
    }

    // Tasks
    if (step.tasks) {
      step.tasks.forEach(t => {
        taskListEl.innerHTML += `<div class="artifact-item task"><span class="ai-label">${t.label}</span><span class="ai-meta">${t.meta}</span></div>`;
      });
    }
    // Notifications
    if (step.notifs) {
      step.notifs.forEach(n => {
        notifListEl.innerHTML += `<div class="artifact-item notif"><span class="ai-label">${n.label}</span><span class="ai-meta">${n.meta}</span></div>`;
      });
    }
  }

  await sleep(400);
  const doneLine = document.createElement('div');
  doneLine.className = 'log-line';
  doneLine.innerHTML = `<span class="log-time">${new Date().toLocaleTimeString('en-AU',{hour12:false})}</span><span class="log-type action">[DONE]</span>Simulation complete.`;
  consoleEl.appendChild(doneLine);
  consoleEl.scrollTop = consoleEl.scrollHeight;

  simRunning = false;
  runBtn.disabled = false;
  runBtn.textContent = '▶ Run Simulation';
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ===== 5. DASHBOARD =====
function renderDashboard() {
  // KPIs
  document.getElementById('dash-kpis').innerHTML = KPI_DATA.map(k => `
    <div class="kpi-card">
      <div class="kpi-icon">${k.icon}</div>
      <div class="kpi-value">${k.value}</div>
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-change ${k.dir}">${k.dir === 'up' ? '↑' : '↓'} ${k.change}</div>
    </div>
  `).join('');

  // Bar chart
  document.getElementById('bar-chart-status').innerHTML = STATUS_CHART.map(s => `
    <div class="bar-row">
      <span class="bar-label">${s.label}</span>
      <div class="bar-track">
        <div class="bar-fill" style="width:${s.pct}%;background:${s.color}">${s.count}</div>
      </div>
    </div>
  `).join('');

  // Bottlenecks
  document.getElementById('bottleneck-list').innerHTML = BOTTLENECKS.map(b => `
    <div class="bottleneck-item">
      <div class="bn-rank ${b.rank}">${b.rank === 'critical' ? '!' : b.rank === 'warning' ? '⚠' : '✓'}</div>
      <div class="bn-info"><div class="bn-name">${b.name}</div><div class="bn-detail">${b.detail}</div></div>
      <div class="bn-metric">${b.metric}</div>
    </div>
  `).join('');

  // Channels
  document.getElementById('channel-grid').innerHTML = CHANNELS.map(c => `
    <div class="channel-card">
      <div class="ch-name">${c.name}</div>
      <span class="ch-status ${c.status}">${c.status}</span>
      <div class="ch-count">${c.count}</div>
    </div>
  `).join('');

  // Animate bar fills
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(f => { f.style.width = f.style.width; });
  }, 100);
}

// ===== INIT =====
renderOverview();
renderDataModel();
renderStateMachine();
renderRules();
renderPlatformMapping();
renderSimulation();
renderHandover();
renderDashboard();

// ===== 0. OVERVIEW =====
function renderOverview() {
  document.getElementById('overview-caps').innerHTML = CAPABILITIES.map(c => `
    <div class="cap-card">
      <div class="cap-num">${c.num}</div>
      <div class="cap-title">${c.title}</div>
      <div class="cap-desc">${c.desc}</div>
    </div>
  `).join('');
}

// ===== 4b. PLATFORM MAPPING =====
function renderPlatformMapping() {
  document.getElementById('platform-grid').innerHTML = `
    <div class="platform-col">
      <div class="plat-header">
        <span class="plat-logo">📊</span>
        <div><div class="plat-name">Airtable Base</div><div class="plat-sub">Relational data tables</div></div>
      </div>
      <div class="plat-items">
        ${AIRTABLE_TABLES.map(t => `
          <div class="plat-item">
            <span class="pi-icon">${t.icon}</span>
            <span class="pi-name">${t.name}</span>
            <span class="pi-map">${t.map}</span>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="platform-col">
      <div class="plat-header">
        <span class="plat-logo">📋</span>
        <div><div class="plat-name">Monday.com Boards</div><div class="plat-sub">Visual workflow boards</div></div>
      </div>
      <div class="plat-items">
        ${MONDAY_BOARDS.map(b => `
          <div class="plat-item">
            <span class="pi-icon">${b.icon}</span>
            <span class="pi-name">${b.name}</span>
            <span class="pi-map">${b.map}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.getElementById('automation-examples').innerHTML = PLATFORM_AUTOMATIONS.map(a => `
    <div class="auto-example">
      <span class="ae-trigger">${a.trigger}</span>
      <span class="ae-arrow">→</span>
      <span class="ae-action">${a.action}</span>
    </div>
  `).join('');
}

// ===== 6. HANDOVER NOTES =====
function renderHandover() {
  const container = document.getElementById('handover-sections');
  container.innerHTML = HANDOVER_SECTIONS.map(s => {
    const body = s.content
      ? `<p>${s.content}</p>`
      : `${s.tags ? s.tags.map(t => `<span class="ho-tag ${t.cls}">${t.text}</span>`).join('') : ''}
         <ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    return `
      <div class="ho-section">
        <div class="ho-header">
          <div class="ho-icon">${s.icon}</div>
          <div class="ho-title">${s.title}</div>
          <span class="ho-expand">▼</span>
        </div>
        <div class="ho-body"><div class="ho-body-inner">${body}</div></div>
      </div>`;
  }).join('');

  container.querySelectorAll('.ho-header').forEach(header => {
    header.addEventListener('click', () => {
      header.closest('.ho-section').classList.toggle('open');
    });
  });
}
