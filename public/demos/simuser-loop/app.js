const state = {
  step: "brief",
  prepared: false,
  simulated: false,
  selectedPersonas: new Set(["小张", "刘总", "Mia"]),
};

const steps = ["brief", "personas", "simulate", "insights"];

const screenMeta = {
  brief: {
    title: "导入产品流程、截图和测试目标",
    note: "等待导入材料后开始模拟。",
    run: "R1 · Onboarding Flow",
  },
  personas: {
    title: "选择用户画像，覆盖不同决策习惯",
    note: "已生成测试任务，等待选择画像。",
    run: "R1 · Persona Matrix",
  },
  simulate: {
    title: "逐屏模拟用户决策并记录反馈",
    note: "模拟用户正在阅读截图并做继续/放弃判断。",
    run: "R1 · Simulation Running",
  },
  insights: {
    title: "聚合反馈，生成下一轮迭代重点",
    note: "已汇总结构化反馈和 Top 问题。",
    run: "R1 · Iteration Report",
  },
};

const personas = [
  ["小张", "应届开发", "第一次正式写简历，愿意尝试但需要明确引导。"],
  ["刘总", "高管候选人", "时间少、付费意愿高，只接受直接有效的流程。"],
  ["Mia", "海外求职", "关注英文表达、隐私和导出质量。"],
  ["阿杰", "转行用户", "不熟悉 JD 和简历术语，容易被复杂步骤劝退。"],
  ["Grace", "产品经理", "关注结果可控性、改写依据和可编辑程度。"],
  ["王老师", "低技术用户", "需要强提示、低认知负担和清晰错误恢复。"],
];

const logs = [
  "P01 小张：看到空状态后继续，但不确定应该上传什么文件。",
  "P06 刘总：在卡片库页面放弃，认为中间步骤解释不足。",
  "P03 Mia：继续到导出页，但要求更清晰的数据隐私说明。",
  "P04 阿杰：对 JD 输入有疑问，需要示例和占位提示。",
  "P05 Grace：认可来源说明，希望能编辑 AI 选用哪些素材。",
  "P02 王老师：上传前需要更明确的文件格式和错误提示。",
];

const issues = [
  ["P0", "空状态缺少第一步引导", "用户不知道要上传什么、上传后会得到什么，直接影响首次留存。"],
  ["P1", "卡片库价值解释不足", "部分用户不理解为什么生成简历前要先管理卡片。"],
  ["P1", "信任与隐私说明弱", "高价值用户在上传简历前需要看到数据处理边界。"],
  ["P2", "JD 输入缺少示例", "非技术用户不知道 JD 该粘贴什么，建议提供示例填充。"],
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
    text.textContent = index >= logs.length ? "模拟完成" : "正在记录用户决策";

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
    document.querySelector("#exportNote").textContent = "已模拟导出 feedback.csv、analysis_report.md 和 clustering_prompt.md";
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
  state.selectedPersonas = new Set(["小张", "刘总", "Mia"]);
  render();
});

render();
