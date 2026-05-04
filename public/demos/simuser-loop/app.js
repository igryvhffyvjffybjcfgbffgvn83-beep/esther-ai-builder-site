const state = {
  step: "brief",
  prepared: false,
  simulated: false,
  selectedPersonas: new Set(["Alex", "Morgan", "Mia"]),
};

const steps = ["brief", "personas", "simulate", "insights"];

const screenMeta = {
  brief: {
    title: "Import the product flow, screenshots, and test goals",
    note: "Waiting for imported materials before starting the simulation.",
    run: "R1 · Onboarding Flow",
  },
  personas: {
    title: "Select personas across different decision patterns",
    note: "The test task is generated. Select personas to continue.",
    run: "R1 · Persona Matrix",
  },
  simulate: {
    title: "Simulate user decisions screen by screen",
    note: "Simulated users are reading screenshots and deciding whether to continue or drop off.",
    run: "R1 · Simulation Running",
  },
  insights: {
    title: "Aggregate feedback into next-iteration priorities",
    note: "Structured feedback and top issues have been summarized.",
    run: "R1 · Iteration Report",
  },
};

const personas = [
  ["Alex", "New Graduate Developer", "Writing a professional resume for the first time. Willing to try, but needs clear guidance."],
  ["Morgan", "Executive Candidate", "Short on time with high willingness to pay. Only accepts a direct, obviously useful flow."],
  ["Mia", "International Job Seeker", "Cares about English phrasing, privacy, and export quality."],
  ["Jordan", "Career Switcher", "Unfamiliar with JD and resume terminology, and easily discouraged by complex steps."],
  ["Grace", "Product Manager", "Cares about controllability, rewrite rationale, and how editable the output remains."],
  ["Taylor", "Low-Tech User", "Needs strong prompts, low cognitive load, and clear recovery from errors."],
];

const logs = [
  "P01 Alex: Continues after seeing the empty state, but is unsure which files to upload.",
  "P06 Morgan: Drops off on the card library page because the intermediate step is not explained well enough.",
  "P03 Mia: Reaches the export page, but asks for clearer data privacy messaging.",
  "P04 Jordan: Is confused by the JD input and needs examples plus placeholder guidance.",
  "P05 Grace: Likes the source explanation, but wants to edit which materials the AI uses.",
  "P02 Taylor: Needs clearer file format guidance and error messaging before uploading.",
];

const issues = [
  ["P0", "Empty state lacks first-step guidance", "Users do not know what to upload or what they will receive afterward, directly hurting first-session retention."],
  ["P1", "Card library value is under-explained", "Some users do not understand why they need to manage cards before generating a resume."],
  ["P1", "Trust and privacy messaging is weak", "High-value users need to see clear data handling boundaries before uploading a resume."],
  ["P2", "JD input needs examples", "Non-technical users do not know what kind of JD to paste, so an example-fill option would help."],
];

const stage = document.querySelector("#stage");
const nextBtn = document.querySelector("#nextBtn");
const resetBtn = document.querySelector("#resetBtn");

function render() {
  const meta = screenMeta[state.step];
  document.querySelector("#screenTitle").textContent = meta.title;
  document.querySelector("#runName").textContent = meta.run;
  document.querySelector("#runNote").textContent = meta.note;
  document.querySelector("#issueCount").textContent = state.simulated ? issues.length : 0;
  document.querySelector("#scoreValue").textContent = state.simulated ? "5.4" : "--";

  document.querySelectorAll(".step").forEach((button, index) => {
    button.classList.toggle("is-active", button.dataset.step === state.step);
    document.querySelectorAll(".timeline .dot")[index]?.classList.toggle("is-on", index <= steps.indexOf(state.step));
  });

  const template = document.querySelector(`#${state.step}Template`);
  stage.replaceChildren(template.content.cloneNode(true));

  if (state.step === "brief") renderBrief();
  if (state.step === "personas") renderPersonas();
  if (state.step === "simulate") renderSimulation();
  if (state.step === "insights") renderInsights();
}

function renderBrief() {
  document.querySelector("#prepareBtn").addEventListener("click", () => {
    state.prepared = true;
    setStep("personas");
  });
}

function renderPersonas() {
  const grid = document.querySelector("#personaGrid");
  grid.replaceChildren(
    ...personas.map(([name, role, desc]) => {
      const button = document.createElement("button");
      button.className = "persona-card";
      button.type = "button";
      button.classList.toggle("is-selected", state.selectedPersonas.has(name));
      button.innerHTML = `<strong>${name}</strong><span>${role}</span><p>${desc}</p>`;
      button.addEventListener("click", () => {
        if (state.selectedPersonas.has(name)) {
          state.selectedPersonas.delete(name);
        } else {
          state.selectedPersonas.add(name);
        }
        renderPersonas();
      });
      return button;
    }),
  );

  document.querySelector("#startRunBtn").addEventListener("click", () => setStep("simulate"));
}

function renderSimulation() {
  const logBox = document.querySelector("#consoleLog");
  const bar = document.querySelector("#analysisBar");
  const pct = document.querySelector("#analysisPct");
  const text = document.querySelector("#analysisText");
  let index = 0;

  const appendLog = () => {
    const line = document.createElement("p");
    line.textContent = logs[index];
    logBox.append(line);
    index += 1;
    const progress = Math.round((index / logs.length) * 100);
    bar.style.width = `${progress}%`;
    pct.textContent = `${progress}%`;
    text.textContent = index >= logs.length ? "Simulation complete" : "Recording user decisions";

    if (index >= logs.length) {
      state.simulated = true;
      window.clearInterval(timer);
      setTimeout(() => setStep("insights"), 500);
    }
  };

  const timer = window.setInterval(appendLog, 420);
  appendLog();

  document.querySelector("#skipBtn").addEventListener("click", () => {
    window.clearInterval(timer);
    state.simulated = true;
    setStep("insights");
  });
}

function renderInsights() {
  const list = document.querySelector("#issueList");
  list.replaceChildren(
    ...issues.map(([priority, title, detail]) => {
      const item = document.createElement("article");
      item.className = "issue-item";
      item.innerHTML = `<span>${priority}</span><div><strong>${title}</strong><p>${detail}</p></div>`;
      return item;
    }),
  );

  document.querySelector("#exportBtn").addEventListener("click", () => {
    document.querySelector("#exportNote").textContent = "Simulated export complete: feedback.csv, analysis_report.md, and clustering_prompt.md";
  });
}

function setStep(step) {
  if (step !== "brief") state.prepared = true;
  if (step === "insights") state.simulated = true;
  state.step = step;
  render();
}

document.querySelectorAll(".step").forEach((button) => {
  button.addEventListener("click", () => setStep(button.dataset.step));
});

nextBtn.addEventListener("click", () => {
  const index = steps.indexOf(state.step);
  setStep(steps[(index + 1) % steps.length]);
});

resetBtn.addEventListener("click", () => {
  state.step = "brief";
  state.prepared = false;
  state.simulated = false;
  state.selectedPersonas = new Set(["Alex", "Morgan", "Mia"]);
  render();
});

render();
