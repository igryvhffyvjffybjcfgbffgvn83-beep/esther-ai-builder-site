/* ══════════════════════════════════════════
   AutoPromo — Showcase Interactions
   ══════════════════════════════════════════ */

// ── Scene Data (current cut review) ──
const SCENES = [
  { id: "S01", time: "0–4s", name: "Hook", badge: "S01 · Hook",
    eyebrow: "Viewer Hook",
    title: "PMs, Stop Writing Like A Jira Ticket",
    frame: "../projects/tailorcv-pm-resume-strategy-45s/hyperframes/qa-frames/v1.1-final/t_1s.png",
    viewer: "A role-specific hook, weak before bullet, and fast diagnosis labels: no metric, no method, no outcome.",
    generated: "The workflow selected the PM angle, placed the weak bullet as editorial overlay, and timed the first subtitle beat.",
    review: "Strongest copy in the cut. Next pass should tighten first-card pacing and make the opening visual feel less static.",
    chips: [
      { text: "Hook works", cls: "sv-chip-green" },
      { text: "Pacing review", cls: "sv-chip-warn" },
    ]
  },
  { id: "S02", time: "4–10s", name: "Diagnosis", badge: "S02 · Diagnosis",
    eyebrow: "Weak Bullet Diagnosis",
    title: "\"Worked On Growth\" Tells Me Nothing",
    frame: "../projects/tailorcv-pm-resume-strategy-45s/hyperframes/qa-frames/v1.1-final/t_6s.png",
    viewer: "The before bullet stays visible while the cut explains why it does not show decision quality or business outcome.",
    generated: "The planning pack turns resume critique into timed overlay copy, then keeps it outside the app UI.",
    review: "The lesson is clear, but this section can probably lose a second without hurting comprehension.",
    chips: [
      { text: "Missing Method", cls: "sv-chip-warn" },
      { text: "Missing Metric", cls: "sv-chip-warn" },
      { text: "Missing Impact", cls: "sv-chip-warn" },
    ]
  },
  { id: "S03", time: "10–13s", name: "Input", badge: "S03 · Product Flow",
    eyebrow: "Real Product UI",
    title: "Old Resume, Work Notes, Target JD",
    frame: "../projects/tailorcv-pm-resume-strategy-45s/hyperframes/qa-frames/v1.1-final/t_12s.png",
    viewer: "The phone recording introduces the actual app flow and the source materials behind the rewritten resume.",
    generated: "Raw simulator capture is cut into the composition with outside-the-phone labels for the visible material types.",
    review: "Good proof point. The next edit should make the app screen easier to inspect at phone-feed size.",
    chips: [
      { text: "XCUITest", cls: "sv-chip-accent" },
      { text: "Live Recording", cls: "sv-chip-accent" },
      { text: "Source-backed", cls: "sv-chip-green" },
    ]
  },
  { id: "S04", time: "13–18s", name: "JD Analysis", badge: "S04 · JD Analysis",
    eyebrow: "JD Matching",
    title: "The JD Dictates The Keywords",
    frame: "../projects/tailorcv-pm-resume-strategy-45s/hyperframes/qa-frames/v1.1-final/t_18s.png",
    viewer: "Growth PM, SQL, A/B testing, activation, and trial-to-paid appear as visible role-language signals.",
    generated: "Fixture-backed keyword chips are layered over real UI so the later rewrite feels job-specific, not generic.",
    review: "The concept is useful; reduce chip density if the video feels too instructional.",
    chips: [
      { text: "Growth PM", cls: "sv-chip-green" },
      { text: "A/B Testing", cls: "sv-chip-green" },
      { text: "SQL", cls: "sv-chip-green" },
      { text: "Activation", cls: "sv-chip-green" },
    ]
  },
  { id: "S05", time: "18–30s", name: "Transform", badge: "S05 · Before → After",
    eyebrow: "Core Transformation",
    title: "Same Notes, Different Bullet",
    frame: "../projects/tailorcv-pm-resume-strategy-45s/hyperframes/qa-frames/v1.1-final/t_24s.png",
    viewer: "The weak bullet resolves into a fixture-backed after bullet with experiments, conversion lift, and business context.",
    generated: "The workflow composes the before/after reveal and preserves the exact approved after bullet.",
    review: "This is the proof moment. Make sure the reveal breathes; do not bury the metric under caption clutter.",
    beforeAfter: true
  },
  { id: "S06", time: "30–38s", name: "Review", badge: "S06 · Keyword Review",
    eyebrow: "Quality Review",
    title: "Cross-Check Against The JD",
    frame: "../projects/tailorcv-pm-resume-strategy-45s/hyperframes/qa-frames/v1.1-final/t_30s.png",
    viewer: "The cut turns review into a visible story beat: nothing generic slips through without keyword comparison.",
    generated: "QA frames and fixture checks make the review surface repeatable instead of relying on one final playback.",
    review: "Useful workflow proof, but the language can be less absolute if the product claim needs more restraint.",
    chips: [
      { text: "Fixture-Verified", cls: "sv-chip-green" },
      { text: "QA Frames", cls: "sv-chip-accent" },
      { text: "Claim Review", cls: "sv-chip-warn" },
    ]
  },
  { id: "S07", time: "38–45s", name: "Trust Close", badge: "S07 · Trust Close",
    eyebrow: "Trust Close",
    title: "No Magic Tricks, No Fake Experience",
    frame: "../projects/tailorcv-pm-resume-strategy-45s/hyperframes/qa-frames/v1.1-final/t_42s.png",
    viewer: "The ending sets the ethical boundary and tees up the next episode without promising interview outcomes.",
    generated: "Governance constraints keep the close away from ATS or interview guarantees, then seed a reusable series hook.",
    review: "The positioning is right. The ending may need a sharper visual change before the next-up card.",
    chips: [
      { text: "No Guarantees", cls: "sv-chip-warn" },
      { text: "Honest Positioning", cls: "sv-chip-green" },
      { text: "Series Continuity", cls: "sv-chip-accent" },
    ]
  },
];

const SHOT_TIMES = [0, 4, 10, 13, 18, 30, 38, 45]; // boundaries

// ── Render Scenes ──
function renderSceneCards() {
  const container = document.getElementById("scene-cards");
  container.innerHTML = SCENES.map((s, i) =>
    `<div class="scene-card${i === 0 ? " active" : ""}" data-scene="${i}">
      <div class="sc-time">${s.time}</div>
      <div class="sc-name">${s.name}</div>
    </div>`
  ).join("");
}

function renderScene(index) {
  const s = SCENES[index];
  const display = document.getElementById("scene-display");
  const badge = document.getElementById("player-badge");
  badge.textContent = s.badge;

  let chipsHTML = "";
  if (s.chips) {
    chipsHTML = `<div class="sv-chips">${s.chips.map(c => `<span class="sv-chip ${c.cls}">${c.text}</span>`).join("")}</div>`;
  }

  let baHTML = "";
  if (s.beforeAfter) {
    baHTML = `<div class="ba-cards">
      <div class="ba-card ba-before">
        <div class="ba-label">Before</div>
        Managed user growth initiatives and cross-functional collaboration.
      </div>
      <div class="ba-card ba-after">
        <div class="ba-label">After — Fixture-Verified</div>
        Shipped 9 A/B tests that lifted trial-to-paid conversion from 8.7% to 13.2%.
      </div>
    </div>`;
  }

  display.innerHTML = `
    <div class="scene-visual review-scene">
      <div class="review-frame">
        <img src="${s.frame}" alt="${s.name} key frame from current cut">
        <span>${s.time}</span>
      </div>
      <div class="review-copy">
        <div class="sv-eyebrow">${s.eyebrow}</div>
        <h3>${s.title}</h3>
        <div class="review-grid">
          <article class="review-note">
            <span>Viewer sees</span>
            <p>${s.viewer}</p>
          </article>
          <article class="review-note">
            <span>Pipeline generated</span>
            <p>${s.generated}</p>
          </article>
          <article class="review-note review-note-warn">
            <span>Still needs review</span>
            <p>${s.review}</p>
          </article>
        </div>
        ${chipsHTML}
        ${baHTML}
      </div>
    </div>`;

  document.querySelectorAll(".scene-card").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
}

function renderProgressMarkers() {
  const container = document.getElementById("progress-markers");
  SHOT_TIMES.slice(1, -1).forEach(t => {
    const marker = document.createElement("div");
    marker.className = "progress-marker";
    marker.style.left = (t / 45 * 100) + "%";
    container.appendChild(marker);
  });
}

// ── Player Logic ──
let currentScene = 0;
let isPlaying = false;
let playTimer = null;
let playTime = 0;

function setScene(index) {
  currentScene = index;
  renderScene(index);
  const pct = SHOT_TIMES[index] / 45 * 100;
  document.getElementById("progress-fill").style.width = pct + "%";
  updateTimeDisplay(SHOT_TIMES[index]);
}

function updateTimeDisplay(sec) {
  const m = Math.floor(sec / 60);
  const s = String(Math.floor(sec % 60)).padStart(2, "0");
  document.getElementById("time-display").textContent = `${m}:${s} / 0:45`;
}

function play() {
  isPlaying = true;
  document.querySelector(".icon-play").style.display = "none";
  document.querySelector(".icon-pause").style.display = "block";
  playTime = SHOT_TIMES[currentScene];

  clearInterval(playTimer);
  playTimer = setInterval(() => {
    playTime += 0.1;
    if (playTime >= 45) {
      playTime = 0;
      currentScene = 0;
    }
    // Check scene change
    for (let i = SCENES.length - 1; i >= 0; i--) {
      if (playTime >= SHOT_TIMES[i]) {
        if (currentScene !== i) {
          currentScene = i;
          renderScene(i);
          document.querySelectorAll(".scene-card").forEach((el, j) => el.classList.toggle("active", j === i));
        }
        break;
      }
    }
    const pct = playTime / 45 * 100;
    document.getElementById("progress-fill").style.width = pct + "%";
    updateTimeDisplay(playTime);
  }, 100);
}

function pause() {
  isPlaying = false;
  clearInterval(playTimer);
  document.querySelector(".icon-play").style.display = "block";
  document.querySelector(".icon-pause").style.display = "none";
}

document.getElementById("play-btn").addEventListener("click", () => {
  isPlaying ? pause() : play();
});

document.getElementById("progress-bar").addEventListener("click", e => {
  const rect = e.currentTarget.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  playTime = pct * 45;
  for (let i = SCENES.length - 1; i >= 0; i--) {
    if (playTime >= SHOT_TIMES[i]) { setScene(i); break; }
  }
});

document.getElementById("scene-cards").addEventListener("click", e => {
  const card = e.target.closest(".scene-card");
  if (card) {
    pause();
    setScene(+card.dataset.scene);
  }
});

// ── Pipeline animation on scroll ──
function animatePipeline() {
  const steps = document.querySelectorAll(".pipe-step");
  const section = document.getElementById("pipeline-anim");
  if (!section) return;
  const rect = section.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight * 0.3)));
  const activeIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));

  steps.forEach((s, i) => s.classList.toggle("active", i <= activeIndex));
  const pipeProg = document.getElementById("pipe-progress");
  if (pipeProg) pipeProg.style.height = ((activeIndex + 1) / steps.length * 100) + "%";
}

// ── Counter animation ──
function animateCounters() {
  document.querySelectorAll(".metric").forEach(m => {
    const target = +m.dataset.count;
    const numEl = m.querySelector(".metric-num");
    if (m.dataset.done) return;
    const rect = m.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9) {
      m.dataset.done = "1";
      let current = 0;
      const step = Math.ceil(target / 30) || 1;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        numEl.textContent = current;
      }, 30);
    }
  });
}

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function setupReveals() {
  document.querySelectorAll("[data-reveal], .cap-card, .arch-node").forEach(el => revealObserver.observe(el));
}

// ── Terminal validator ──
const TERM_LINES = [
  { t: "", cls: "" },
  { t: "⠋ Scanning planning pack...", cls: "t-accent" },
  { t: "  ✓ Manifest structure valid", cls: "t-pass" },
  { t: "  ✓ 10/10 required files present", cls: "t-pass" },
  { t: "  ✓ Shot timing: 7 shots, 45s total, no overlaps", cls: "t-pass" },
  { t: "  ✓ Asset map: all 4 evidence sections present", cls: "t-pass" },
  { t: "  ✓ Composition scan: 6 HTML files, 0 prohibited claims found", cls: "t-pass" },
  { t: "  ✓ Cover plan: scanned, clean", cls: "t-pass" },
  { t: "  ✓ Distribution: 3 platform targets, 0 prohibited caption phrases", cls: "t-pass" },
  { t: "  ✓ Captions and scene notes loaded for review", cls: "t-pass" },
  { t: "", cls: "" },
  { t: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", cls: "t-dim" },
  { t: "  PASS  All governance checks passed.", cls: "t-pass" },
  { t: "  Warnings: none", cls: "t-pass" },
  { t: "  Review packet: READY ✓", cls: "t-pass" },
  { t: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", cls: "t-dim" },
];

document.getElementById("term-run").addEventListener("click", function() {
  const body = document.getElementById("term-body");
  body.innerHTML = `<div class="term-prompt">$ validate_planning_pack <span class="t-dim">--project tailorcv-pm-resume-strategy-45s</span></div>`;
  this.disabled = true;
  this.textContent = "Running...";

  TERM_LINES.forEach((line, i) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.className = `term-line ${line.cls}`;
      div.textContent = line.t || "\u00A0";
      div.style.animationDelay = "0ms";
      body.appendChild(div);
      body.scrollTop = body.scrollHeight;
      if (i === TERM_LINES.length - 1) {
        this.textContent = "✓ Done";
      }
    }, 120 * (i + 1));
  });
});

// ── Smooth nav ──
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// ── Scroll handler ──
function onScroll() {
  animatePipeline();
  animateCounters();
}
window.addEventListener("scroll", onScroll, { passive: true });

// ── Init ──
renderSceneCards();
renderScene(0);
renderProgressMarkers();
setupReveals();
onScroll();
