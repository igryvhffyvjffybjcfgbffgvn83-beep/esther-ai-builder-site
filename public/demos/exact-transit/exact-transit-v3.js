/* eslint-disable */
// Exact Transit v0.4 demo - pure front-end UI with mock data.
const products = [
  { key: "backtest", label: "Timing Report", price: "$0" },
  { key: "check", label: "Check One Date", price: "$3.99" },
  { key: "six", label: "6-Month Timing Report", price: "$12.99" },
];

const reportAnchors = [
  { key: "overview", label: "Overview" },
  { key: "calendar", label: "Explorer" },
  { key: "backtest", label: "Backtest" },
];

const freePreviewCount = 3;

const profile = {
  name: "Avery M.",
  birth: "Jul 18, 1998 · 2:26 PM",
  place: "Los Angeles, CA, USA",
  reportRange: "May 01–Oct 31, 2026",
};

const topicOptions = ["Love", "Career", "Money", "Self", "Relationship", "Communication", "Launch", "Travel", "Move"];

const pastWindows = [
  {
    id: 101,
    date: "Aug 12",
    time: "20:14",
    iso: "2025-08-12",
    score: 88,
    title: "Emotional Spike",
    formula: "Transit Mars □ Natal Moon",
    orb: "0°06′",
    theme: "Emotional Response",
    transitPlanet: "Mars",
    validation: "unreviewed",
    evidence: {
      transit: "Mars · 18°22′ Gemini",
      natal: "Moon · 18°16′ Pisces",
      aspect: "90° square",
      house: "3H / 6H activation",
      themeMapping: "Emotion / reaction speed / stress signal",
    },
    activation: "This date activates faster emotional response and lower tolerance for pressure.",
    bestUse: "Name the feeling before responding.",
    avoid: "Do not treat a temporary spike as the final answer.",
  },
  {
    id: 102,
    date: "Aug 29",
    time: "11:30",
    iso: "2025-08-29",
    score: 79,
    title: "Hidden Pull",
    formula: "Transit Venus ☌ Natal 12H",
    orb: "0°15′",
    theme: "Inner Desire",
    transitPlanet: "Venus",
    validation: "matched",
    evidence: {
      transit: "Venus · 04°10′ Leo",
      natal: "12H cusp · 03°55′ Leo",
      aspect: "0° conjunction",
      house: "12H activation",
      themeMapping: "Attraction / memory / private feeling",
    },
    activation: "This window activates private attraction, old associations, and subtle longing.",
    bestUse: "Observe what feels magnetic without rushing it into action.",
    avoid: "Avoid reading silence as proof of intent.",
  },
  {
    id: 103,
    date: "Sep 07",
    time: "04:52",
    iso: "2025-09-07",
    score: 84,
    title: "Clarity Flash",
    formula: "Transit Mercury ☌ Natal ASC",
    orb: "0°02′",
    theme: "Communication",
    transitPlanet: "Mercury",
    validation: "partial",
    evidence: {
      transit: "Mercury · 02°41′ Virgo",
      natal: "ASC · 02°39′ Virgo",
      aspect: "0° conjunction",
      house: "1H activation",
      themeMapping: "Voice / self-expression / message",
    },
    activation: "This date activates direct expression and a sharper ability to name what is happening.",
    bestUse: "Write, ask, clarify, or organize your next step.",
    avoid: "Avoid over-explaining when a clear sentence is enough.",
  },
  {
    id: 104,
    date: "Sep 21",
    time: "16:08",
    iso: "2025-09-21",
    score: 73,
    title: "Tension Test",
    formula: "Transit Saturn □ Natal Mars",
    orb: "0°19′",
    theme: "Boundary",
    transitPlanet: "Saturn",
    validation: "missed",
    evidence: {
      transit: "Saturn · 29°05′ Pisces",
      natal: "Mars · 28°46′ Gemini",
      aspect: "90° square",
      house: "6H / 10H pressure",
      themeMapping: "Effort / constraint / timing pressure",
    },
    activation: "This window activates friction between urgency and limits.",
    bestUse: "Cut the plan into one concrete action.",
    avoid: "Avoid forcing momentum through a blocked path.",
  },
];

const forecastWindows = [
  {
    id: 201,
    priority: "High Priority",
    month: "Jun",
    day: 18,
    date: "Jun 18",
    time: "09:42",
    iso: "2026-06-18",
    score: 94,
    title: "Soft Contact Window",
    theme: "Love / Communication",
    formula: "Transit Mercury △ Natal Venus",
    orb: "0°04′",
    transitPlanet: "Mercury",
    evidence: {
      transit: "Mercury · 12°18′ Cancer",
      natal: "Venus · 12°14′ Pisces",
      aspect: "120° trine",
      house: "3H / 7H activation",
      themeMapping: "Soft contact / message / relationship ease",
    },
    activation: "This date activates softer communication, mutual receptivity, and a cleaner way to make contact.",
    externalSignal: "This may correspond to a message, invitation, or attraction cue becoming easier to read.",
    innerResponse: "The inner response may feel more open, curious, and willing to reach out without forcing clarity.",
    bestUse: ["Sending a light message.", "Planning a casual meet-up.", "Testing mutual interest without pressure."],
    avoid: ["Long emotional texts.", "Asking for certainty.", "Overpromising too early."],
    breakdown: [["Theme relevance", 26], ["Aspect strength", 30], ["Orb precision", 24], ["Timing priority", 14]],
    nearby: [
      ["Jun 21 · 15:30", "Communication follow-through", "86"],
      ["Jul 02 · 08:55", "Decision support", "82"],
    ],
  },
  {
    id: 202,
    priority: "High Priority",
    month: "Aug",
    day: 7,
    date: "Aug 07",
    time: "21:10",
    iso: "2026-08-07",
    score: 91,
    title: "Relationship Visibility Window",
    theme: "Relationship / Self",
    formula: "Transit Jupiter ☌ Natal DSC",
    orb: "0°07′",
    transitPlanet: "Jupiter",
    evidence: {
      transit: "Jupiter · 11°35′ Leo",
      natal: "DSC · 11°28′ Leo",
      aspect: "0° conjunction",
      house: "7H exact zone",
      themeMapping: "Relationship visibility / opening / mutual attention",
    },
    activation: "This window activates relationship visibility, openness, and the need to meet others clearly.",
    externalSignal: "This may correspond to invitations, direct attention, social visibility, or a defining relationship conversation.",
    innerResponse: "The inner response may feel more expansive, hopeful, and available to connection.",
    bestUse: ["Make the invitation clear.", "Define expectations without overloading the moment.", "Notice who meets you halfway."],
    avoid: ["Avoid turning a strong opening into a guarantee.", "Avoid overcommitting before patterns are visible."],
    breakdown: [["Relationship axis", 28], ["Planet amplification", 24], ["Aspect strength", 26], ["Orb precision", 13]],
    nearby: [
      ["Aug 10 · 12:05", "Soft contact support", "84"],
      ["Aug 19 · 19:40", "Expectation clarity", "87"],
    ],
  },
  {
    id: 203,
    priority: "High Priority",
    month: "Oct",
    day: 3,
    date: "Oct 03",
    time: "14:26",
    iso: "2026-10-03",
    score: 88,
    title: "Launch Signal Window",
    theme: "Launch / Money",
    formula: "Transit Sun △ Natal Jupiter",
    orb: "0°09′",
    transitPlanet: "Sun",
    evidence: {
      transit: "Sun · 10°41′ Libra",
      natal: "Jupiter · 10°32′ Gemini",
      aspect: "120° trine",
      house: "2H / 10H activation",
      themeMapping: "Visibility / value / public signal",
    },
    activation: "This date activates visibility, confidence, and value-oriented decisions.",
    externalSignal: "This may correspond to publishing, pitching, sharing a result, or making a practical money choice.",
    innerResponse: "The inner response leans toward confidence, but it still benefits from concrete scope.",
    bestUse: ["Share the offer.", "Ask for the number.", "Use a clear value statement."],
    avoid: ["Avoid inflated promises.", "Avoid skipping the practical details."],
    breakdown: [["Theme relevance", 24], ["Aspect strength", 27], ["Orb precision", 20], ["Visibility layer", 17]],
    nearby: [
      ["Oct 06 · 10:22", "Follow-up window", "81"],
      ["Oct 18 · 13:12", "Budget review support", "79"],
    ],
  },
  {
    id: 204,
    priority: "Medium Priority",
    month: "May",
    day: 20,
    date: "May 20",
    time: "10:35",
    iso: "2026-05-20",
    score: 78,
    title: "Structured Decision Day",
    theme: "Career",
    formula: "Transit Moon △ Natal Mercury",
    orb: "0°12′",
    transitPlanet: "Moon",
    evidence: {
      transit: "Moon · 22°08′ Virgo",
      natal: "Mercury · 21°56′ Taurus",
      aspect: "120° trine",
      house: "6H / 10H support",
      themeMapping: "Planning / communication / practical choice",
    },
    activation: "This date activates useful planning and grounded conversation.",
    externalSignal: "This may correspond to work messages, task clarity, or a practical decision point.",
    innerResponse: "The inner response is organized, but sensitive topics may still need more time.",
    bestUse: ["Clarify scope.", "Document the decision.", "Choose the practical next step."],
    avoid: ["Avoid emotional negotiation.", "Avoid rushed commitments."],
    breakdown: [["Topic relevance", 22], ["Aspect strength", 24], ["Orb precision", 17], ["Daily timing", 15]],
    nearby: [["May 23 · 09:05", "Planning support", "74"]],
  },
  {
    id: 205,
    priority: "Medium Priority",
    month: "Jul",
    day: 12,
    date: "Jul 12",
    time: "16:05",
    iso: "2026-07-12",
    score: 73,
    title: "Money Review Window",
    theme: "Money / Self",
    formula: "Transit Venus □ Natal Saturn",
    orb: "0°18′",
    transitPlanet: "Venus",
    evidence: {
      transit: "Venus · 12°32′ Gemini",
      natal: "Saturn · 12°14′ Pisces",
      aspect: "90° square",
      house: "2H / 6H activation",
      themeMapping: "Value / limit / consistency",
    },
    activation: "This window activates value, spending boundaries, and consistency.",
    externalSignal: "This may correspond to pricing, budget review, or a conversation about worth.",
    innerResponse: "The inner response may be cautious, protective, or unwilling to overextend.",
    bestUse: ["Review terms.", "Set a boundary.", "Choose sustainable scope."],
    avoid: ["Avoid impulse spending.", "Avoid agreeing to vague compensation."],
    breakdown: [["Topic relevance", 21], ["Aspect strength", 23], ["Orb precision", 16], ["Boundary signal", 13]],
    nearby: [["Jul 15 · 11:44", "Budget clarity", "76"]],
  },
  {
    id: 206,
    priority: "Medium Priority",
    month: "Sep",
    day: 9,
    date: "Sep 09",
    time: "08:18",
    iso: "2026-09-09",
    score: 69,
    title: "Communication Pressure Window",
    theme: "Communication",
    formula: "Transit Mars □ Natal Mercury",
    orb: "0°22′",
    transitPlanet: "Mars",
    evidence: {
      transit: "Mars · 21°34′ Leo",
      natal: "Mercury · 21°56′ Taurus",
      aspect: "90° square",
      house: "3H / 10H pressure",
      themeMapping: "Message / speed / conflict potential",
    },
    activation: "This date activates fast speech, urgent messaging, and potential friction around decisions.",
    externalSignal: "This may correspond to a direct message, deadline, disagreement, or need for quick clarification.",
    innerResponse: "The inner response may move faster than the facts.",
    bestUse: ["Draft first.", "Ask one clarifying question.", "Keep the ask narrow."],
    avoid: ["Avoid sending from irritation.", "Avoid turning a delay into a verdict."],
    breakdown: [["Topic relevance", 20], ["Aspect strength", 22], ["Orb precision", 14], ["Caution signal", 13]],
    nearby: [["Sep 12 · 17:08", "Smoother follow-up", "75"]],
  },
  {
    id: 207,
    priority: "Low Priority",
    month: "May",
    day: 31,
    date: "May 31",
    time: "18:20",
    iso: "2026-05-31",
    score: 56,
    title: "Self Reset Window",
    theme: "Self",
    formula: "Transit Moon ✶ Natal Sun",
    orb: "0°35′",
    transitPlanet: "Moon",
    evidence: {
      transit: "Moon · 00°12′ Libra",
      natal: "Sun · 00°47′ Leo",
      aspect: "60° sextile",
      house: "1H / 11H support",
      themeMapping: "Mood / identity / small reset",
    },
    activation: "This window activates a lighter self-reset and small emotional adjustment.",
    externalSignal: "This may correspond to a simple reset, supportive exchange, or low-stakes visibility.",
    innerResponse: "The inner response is workable but not especially forceful.",
    bestUse: ["Tidy the plan.", "Reset expectations.", "Do the small thing."],
    avoid: ["Avoid making it carry too much weight."],
    breakdown: [["Theme relevance", 16], ["Aspect strength", 17], ["Orb precision", 9], ["Support signal", 14]],
    nearby: [["Jun 04 · 13:20", "Better focus", "63"]],
  },
  {
    id: 208,
    priority: "Low Priority",
    month: "Sep",
    day: 27,
    date: "Sep 27",
    time: "11:04",
    iso: "2026-09-27",
    score: 48,
    title: "Travel Friction Window",
    theme: "Travel / Move",
    formula: "Transit Mercury ☍ Natal Uranus",
    orb: "0°42′",
    transitPlanet: "Mercury",
    evidence: {
      transit: "Mercury · 05°06′ Scorpio",
      natal: "Uranus · 05°48′ Taurus",
      aspect: "180° opposition",
      house: "3H / 9H activation",
      themeMapping: "Travel / disruption / quick adjustment",
    },
    activation: "This date activates planning friction and the need for flexible logistics.",
    externalSignal: "This may correspond to changed details, delayed messages, or a revised route.",
    innerResponse: "The inner response may want speed, while the situation needs backup options.",
    bestUse: ["Confirm details.", "Leave buffer.", "Keep alternatives open."],
    avoid: ["Avoid tight handoffs.", "Avoid assuming the first plan is fixed."],
    breakdown: [["Theme relevance", 14], ["Aspect strength", 18], ["Orb precision", 6], ["Caution signal", 10]],
    nearby: [["Oct 01 · 09:10", "Cleaner logistics", "61"]],
  },
];

const guidanceMeta = {
  101: {
    field: "Self / Emotional",
    windowType: "Caution",
    actionSummary: "Use this window to slow the reaction down before responding.",
    bestFor: ["Naming the feeling clearly", "Taking space before replying", "Separating urgency from the actual issue"],
    avoid: ["Reactive messages", "Treating a mood spike as the final answer", "Trying to settle everything at once"],
    externalSignal: "A stressful message, demand, or emotional cue may become more noticeable.",
    innerResponse: "You may feel more reactive if pressure arrives quickly.",
    why: "Mars square natal Moon with a 0°06′ orb points to fast emotional activation and lower tolerance for pressure.",
  },
  102: {
    field: "Love / Inner Response",
    windowType: "Opportunity / Reflection",
    actionSummary: "Good for noticing attraction patterns, but not for forcing a private feeling into a final answer.",
    bestFor: ["Observing what feels magnetic", "Journaling private attraction cues", "Letting interest reveal itself slowly"],
    avoid: ["Reading silence as proof of intent", "Secret tests", "Pushing for immediate clarity"],
    externalSignal: "A memory, attraction cue, or private association may become more visible.",
    innerResponse: "You may feel drawn in while still needing more context.",
    why: "Venus conjunct the natal 12H cusp with a 0°15′ orb emphasizes private attraction and subtle emotional signals.",
  },
  103: {
    field: "Communication / Self",
    windowType: "Decision",
    actionSummary: "Use this window to say the clean sentence, ask the direct question, or organize the next step.",
    bestFor: ["Writing the message", "Asking one clear question", "Naming what has changed"],
    avoid: ["Over-explaining", "Opening too many threads", "Performing certainty before you have it"],
    externalSignal: "A message, document, or need to explain yourself may come forward.",
    innerResponse: "You may feel mentally sharper and more ready to define your position.",
    why: "Mercury conjunct natal ASC with a 0°02′ orb highlights direct self-expression and fast clarity.",
  },
  104: {
    field: "Career / Energy",
    windowType: "Caution",
    actionSummary: "Best used for narrowing effort to one realistic next action.",
    bestFor: ["Setting a boundary", "Reducing scope", "Choosing the next practical step"],
    avoid: ["Forcing blocked momentum", "Arguing with the constraint", "Taking delay personally"],
    externalSignal: "A limit, delay, or workload pressure may become harder to ignore.",
    innerResponse: "You may feel urgency meeting resistance.",
    why: "Saturn square natal Mars with a 0°19′ orb points to pressure between effort and constraint.",
  },
  201: {
    field: "Love / Communication",
    windowType: "Opportunity",
    actionSummary: "Send the warm, simple message; do not turn the response into a relationship test.",
    bestFor: ["Sending a light message with one clear opening.", "Planning a casual meet-up.", "Testing mutual interest without pressure."],
    avoid: ["Long emotional texts.", "Asking for certainty.", "Overpromising before the pattern is visible."],
    why: "Mercury trine natal Venus with a 0°04′ orb supports soft contact, warmer phrasing, and relationship ease.",
  },
  202: {
    field: "Relationship / Self",
    windowType: "Opportunity",
    actionSummary: "Make the invitation visible, but do not ask for an immediate definition of the relationship.",
    bestFor: ["Making the invitation clear.", "Defining expectations lightly.", "Noticing who meets you halfway."],
    avoid: ["Overcommitting too early.", "Turning a strong opening into certainty.", "Filling in the other person's intent."],
    why: "Jupiter conjunct natal DSC with a 0°07′ orb amplifies relationship visibility and mutual attention.",
  },
  203: {
    field: "Launch / Money",
    windowType: "Opportunity",
    actionSummary: "Put the offer in front of people and name the value, but keep the promise concrete.",
    bestFor: ["Sharing the offer.", "Asking for the number.", "Publishing a clear value statement."],
    avoid: ["Inflated promises.", "Skipping practical details.", "Assuming visibility means agreement."],
    why: "Sun trine natal Jupiter with a 0°09′ orb supports visibility, confidence, and value-oriented decisions.",
  },
  204: {
    field: "Career",
    windowType: "Support",
    actionSummary: "Clarify scope in writing and ask for the next step, but do not negotiate from emotion.",
    bestFor: ["Clarifying scope.", "Documenting the decision.", "Choosing the practical next step."],
    avoid: ["Emotional negotiation.", "Rushed commitments.", "Leaving criteria undefined."],
    why: "Moon trine natal Mercury with a 0°12′ orb supports practical communication while keeping the window time-sensitive.",
  },
  205: {
    field: "Money / Self",
    windowType: "Review",
    actionSummary: "Review the terms and set a limit before saying yes.",
    bestFor: ["Reviewing terms.", "Setting a spending boundary.", "Choosing sustainable scope."],
    avoid: ["Impulse spending.", "Vague compensation.", "Agreeing from guilt."],
    why: "Venus square natal Saturn with a 0°18′ orb highlights value, restraint, and consistency.",
  },
  206: {
    field: "Communication",
    windowType: "Caution",
    actionSummary: "Ask one clean clarifying question, but do not send from irritation.",
    bestFor: ["Drafting before sending.", "Asking one clarifying question.", "Keeping the ask narrow."],
    avoid: ["Sharp messages.", "Turning delay into a verdict.", "Escalating before facts are clear."],
    why: "Mars square natal Mercury with a 0°22′ orb raises message speed and conflict potential.",
  },
  207: {
    field: "Self",
    windowType: "Support",
    actionSummary: "Use this for a small reset, not a major life decision.",
    bestFor: ["Tidying the plan.", "Resetting expectations.", "Doing one small useful thing."],
    avoid: ["Making the window carry too much weight.", "Overplanning.", "Waiting for a dramatic signal."],
    why: "Moon sextile natal Sun with a 0°35′ orb supports a lighter identity reset and workable mood shift.",
  },
  208: {
    field: "Travel / Move",
    windowType: "Caution",
    actionSummary: "Confirm logistics and leave buffer before you commit to the route.",
    bestFor: ["Confirming details.", "Leaving schedule buffer.", "Keeping alternatives open."],
    avoid: ["Tight handoffs.", "Assuming the first plan is fixed.", "Skipping backup options."],
    why: "Mercury opposite natal Uranus with a 0°42′ orb activates planning friction and quick adjustment needs.",
  },
};

[...pastWindows, ...forecastWindows].forEach((window) => {
  const meta = guidanceMeta[window.id] || {};
  Object.assign(window, meta);
  if (!window.bestFor && Array.isArray(window.bestUse)) window.bestFor = window.bestUse;
});

const dateCheck = {
  selectedDate: "May 20, 2026",
  topic: "Career",
  score: 78,
  summary: "Good for structured communication and practical decisions.",
  caution: "Not ideal for emotional negotiation or rushed commitments.",
  bestWindow: "10:40–12:15 local time",
  topicScores: [
    ["Love", 52],
    ["Career", 78],
    ["Money", 61],
    ["Self", 67],
    ["Relationship", 49],
    ["Communication", 81],
    ["Launch", 72],
    ["Travel", 44],
    ["Move", 39],
  ],
  transits: [
    ["Transit Moon △ Natal Mercury", "0°12′", "Supports practical communication"],
    ["Transit Mercury ✶ Natal MC", "0°21′", "Supports public framing and decisions"],
    ["Transit Mars □ Natal Venus", "0°34′", "Adds emotional heat around agreement"],
  ],
  do: ["Use a written agenda.", "Ask for criteria and next steps.", "Confirm practical details before closing."],
  avoid: ["Rushed commitments.", "Emotional negotiation.", "Reading one response as the whole outcome."],
};

const futurePreview = [
  ["Late May", "High intensity", "Career / Communication", "Exact date, evidence, and advice locked."],
  ["Mid July", "Medium intensity", "Money / Self", "Exact date, evidence, and advice locked."],
  ["Early September", "Strong intensity", "Communication / Caution", "Exact date, evidence, and advice locked."],
];

const forecastMonths = [
  { name: "May", number: "05", days: 31, offset: 5 },
  { name: "Jun", number: "06", days: 30, offset: 1 },
  { name: "Jul", number: "07", days: 31, offset: 3 },
  { name: "Aug", number: "08", days: 31, offset: 6 },
  { name: "Sep", number: "09", days: 30, offset: 2 },
  { name: "Oct", number: "10", days: 31, offset: 4 },
];

const pastMonths = [
  { name: "Aug", number: "08", days: 31, offset: 5 },
  { name: "Sep", number: "09", days: 30, offset: 1 },
  { name: "Oct", number: "10", days: 31, offset: 3 },
];

let currentProduct = "six";
let selectedTopic = "Career";
let selectedPastId = 101;
let selectedForecastId = 201;
let selectedForecastIso = "2026-06-18";
let selectedPanelMode = "preview";
let selectedMonth = "Jun";
let isMobileSheetOpen = false;
let dateCheckGenerated = false;
let sixMonthUnlocked = false;
let birthTimeKnown = true;
let exportType = "Summary Card";
let exportSize = "Story";
let paywallContext = null;
let dateCheckPaywallOpen = false;
let backtestOpen = false;
let toastMessage = "";
let toastTimer = null;

const $ = (id) => document.getElementById(id);
const activePast = () => pastWindows.find((window) => window.id === selectedPastId) || pastWindows[0];
const activeForecast = () => visibleForecastWindows().find((window) => window.id === selectedForecastId) || visibleForecastWindows()[0];

function profileBirthLabel() {
  return birthTimeKnown ? profile.birth : "Jul 18, 1998 · birth time unknown";
}

function isHouseBasedPoint(window) {
  const formula = `${window.formula || ""} ${window.evidence?.natal || ""}`;
  return /\b(ASC|DSC|MC|IC)\b|Natal\s+\d+H|\bcusp\b/i.test(formula);
}

function visibleForecastWindows() {
  return birthTimeKnown ? forecastWindows : forecastWindows.filter((window) => !isHouseBasedPoint(window));
}

function visiblePastWindows() {
  return birthTimeKnown ? pastWindows : pastWindows.filter((window) => !isHouseBasedPoint(window));
}

function forecastHeatmap() {
  return makeHeatmapDays(forecastMonths, visibleForecastWindows(), "2026");
}

function pastHeatmap() {
  return makeHeatmapDays(pastMonths, visiblePastWindows(), "2025");
}

function hiddenHousePointCount() {
  return forecastWindows.length - visibleForecastWindows().length;
}

function hiddenHousePointSentence() {
  const count = hiddenHousePointCount();
  return `${count} house-based node${count === 1 ? " is" : "s are"} hidden in this demo`;
}

function readBirthTimeState() {
  const unknownInput = $("birth-time-unknown");
  birthTimeKnown = !unknownInput?.checked;
}

function toggleBirthTimeUnknown(unknown) {
  birthTimeKnown = !unknown;
  const timeInput = $("birth-time");
  if (timeInput) timeInput.disabled = unknown;
}

function loadDemo(event) {
  event.preventDefault();
  startGenerate("six");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startOver() {
  currentProduct = "six";
  dateCheckGenerated = false;
  dateCheckPaywallOpen = false;
  paywallContext = null;
  isMobileSheetOpen = false;
  sixMonthUnlocked = false;
  backtestOpen = false;
  toastMessage = "";
  $("loading").style.display = "none";
  $("report").style.display = "none";
  $("main-nav").style.display = "none";
  $("landing").style.display = "flex";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startGenerate(flow = "six") {
  readBirthTimeState();
  $("landing").style.display = "none";
  $("main-nav").style.display = "none";
  $("report").style.display = "none";
  $("loading").style.display = "flex";

  const steps = [
    "Reading birth data...",
    flow === "check" ? "Preparing selected date..." : "Calculating six-month timing windows...",
    "Scoring activation strength...",
    "Building evidence and action modules...",
  ];
  $("loader-steps").innerHTML = steps.map((step, index) => `<div class="loader-step" id="ls${index}">${step}</div>`).join("");
  $("loader-progress").style.width = "0";

  let index = 0;
  const interval = window.setInterval(() => {
    if (index > 0) document.getElementById(`ls${index - 1}`).className = "loader-step done";
    if (index < steps.length) {
      document.getElementById(`ls${index}`).className = "loader-step active";
      $("loader-progress").style.width = `${((index + 1) / steps.length) * 100}%`;
      index += 1;
      return;
    }
    window.clearInterval(interval);
    window.setTimeout(() => {
      if (flow === "check") {
        dateCheckGenerated = true;
        showReport("check");
      } else {
        showReport("six");
      }
    }, 300);
  }, 520);
}

function showReport(product) {
  currentProduct = product;
  $("loading").style.display = "none";
  $("landing").style.display = "none";
  $("report").style.display = "block";
  $("main-nav").style.display = "block";
  renderReport();
  scrollToTop();
}

function showCheckOneDateInput() {
  dateCheckGenerated = false;
  showReport("check");
}

function showDateCheckReport() {
  openDateCheckPaywall();
}

function handleUnlock() {
  openPaywall("timeline");
}

function unlockSixMonth() {
  sixMonthUnlocked = true;
  paywallContext = null;
  showToast("Full report unlocked.");
  showReport("six");
}

function showToast(message) {
  toastMessage = message;
  if (toastTimer) window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastMessage = "";
    if ($("report")?.style.display === "block") renderReport();
  }, 1800);
}

function openDateCheckPaywall() {
  dateCheckPaywallOpen = true;
  renderReport();
}

function closeDateCheckPaywall() {
  dateCheckPaywallOpen = false;
  renderReport();
}

function unlockDateCheck() {
  dateCheckPaywallOpen = false;
  dateCheckGenerated = true;
  showToast("Date check unlocked.");
  showReport("check");
}

function scoreClass(score) {
  if (score <= 39) return "s0";
  if (score <= 59) return "s1";
  if (score <= 79) return "s2";
  if (score <= 89) return "s3";
  return "s4";
}

function scoreGrade(score) {
  if (score <= 39) return "Low";
  if (score <= 59) return "Medium";
  if (score <= 79) return "High";
  if (score <= 89) return "Strong";
  return "Peak";
}

function bar(value) {
  return `<div class="bar"><span style="--w:${Math.min(value, 100)}%"></span></div>`;
}

function kpi(label, value, sub = "") {
  return `<div class="card pad"><div class="label">${label}</div><div class="value">${value}</div>${sub ? `<div class="small">${sub}</div>` : ""}</div>`;
}

function tag(text, tone = "default") {
  const colors = {
    matched: "background:rgba(52,211,153,.12);color:#34d399;border-color:rgba(52,211,153,.25)",
    partial: "background:rgba(251,191,36,.12);color:#fbbf24;border-color:rgba(251,191,36,.25)",
    missed: "background:rgba(255,255,255,.08);color:rgba(255,255,255,.48);border-color:rgba(255,255,255,.14)",
    default: "background:rgba(232,121,249,.12);color:#f0abfc;border-color:rgba(232,121,249,.15)",
  };
  return `<span class="tag" style="${colors[tone] || colors.default}">${text}</span>`;
}

function planetIcon(planet) {
  return { Venus: "♀", Mercury: "☿", Jupiter: "♃", Saturn: "♄", Sun: "☉", Moon: "☽", Mars: "♂" }[planet] || "★";
}

function makeHeatmapDays(months, windows, year) {
  const map = new Map(windows.map((window) => [window.iso, window]));
  return months.flatMap((month, monthIndex) =>
    Array.from({ length: month.days }, (_, index) => {
      const day = index + 1;
      const iso = `${year}-${month.number}-${String(day).padStart(2, "0")}`;
      const window = map.get(iso);
      const baseline = 8 + ((day * 9 + monthIndex * 13) % 38);
      return {
        iso,
        month: month.name,
        day,
        date: `${month.name} ${String(day).padStart(2, "0")}`,
        score: window ? window.score : baseline,
        windowId: window?.id || null,
      };
    }),
  );
}

function rankedForecastWindows() {
  return [...visibleForecastWindows()].sort((a, b) => b.score - a.score || a.iso.localeCompare(b.iso));
}

function freePreviewWindows() {
  return rankedForecastWindows().slice(0, freePreviewCount);
}

function isFreeForecastWindow(window) {
  return Boolean(window) && freePreviewWindows().some((item) => item.id === window.id);
}

function isWindowUnlocked(window) {
  return Boolean(window) && (sixMonthUnlocked || !visibleForecastWindows().some((item) => item.id === window.id) || isFreeForecastWindow(window));
}

function selectedForecastDay() {
  const days = forecastHeatmap();
  return days.find((day) => day.iso === selectedForecastIso) || days.find((day) => day.windowId === selectedForecastId) || days[0];
}

function selectedForecastWindow() {
  const day = selectedForecastDay();
  return day?.windowId ? visibleForecastWindows().find((window) => window.id === day.windowId) || null : null;
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 920px)").matches;
}

function monthFromIso(iso) {
  const day = forecastHeatmap().find((item) => item.iso === iso);
  return day?.month || selectedMonth;
}

function selectForecastWindow(id) {
  const window = visibleForecastWindows().find((item) => item.id === Number(id));
  if (!window) return;
  selectedForecastId = window.id;
  selectedForecastIso = window.iso;
  selectedMonth = window.month;
  selectedPanelMode = sixMonthUnlocked ? "full" : "preview";
  isMobileSheetOpen = isMobileViewport();
}

function selectForecastDay(iso) {
  const day = forecastHeatmap().find((item) => item.iso === iso);
  if (!day) return;
  selectedForecastIso = day.iso;
  selectedForecastId = day.windowId || null;
  selectedMonth = day.month;
  selectedPanelMode = sixMonthUnlocked && day.windowId ? "full" : "preview";
  isMobileSheetOpen = isMobileViewport();
}

function expandSelectedDateReport() {
  selectedPanelMode = "full";
  isMobileSheetOpen = isMobileViewport();
  renderReport();
}

function collapseSelectedDateReport() {
  selectedPanelMode = "preview";
  renderReport();
}

function closeMobileSheet() {
  isMobileSheetOpen = false;
  renderReport();
}

function windowOneLine(window) {
  return window.activation || window.actionSummary || "This date has a clear timing signal and should be used intentionally.";
}

function timingQuality(window) {
  const grade = scoreGrade(window.score);
  const exactTime = isWindowUnlocked(window) ? window.time : "exact time locked";
  return `${grade} timing quality. Score measures activation strength, not certainty. The strongest point is ${exactTime}, with the practical signal centered on ${window.date}.`;
}

function renderReport() {
  ensureSelectedForecastVisible();
  renderProductTabs();
  renderProfileBar();

  if (currentProduct === "backtest") {
    $("report-content").innerHTML = renderBacktest();
  }
  if (currentProduct === "check") {
    $("report-content").innerHTML = dateCheckGenerated ? renderDateCheckReport() : renderDateCheckInput();
  }
  if (currentProduct === "six") {
    $("report-content").innerHTML = sixMonthUnlocked ? renderSixMonthReport() : renderSixMonthLocked();
  }

  $("report-content").innerHTML += renderMobileSelectedSheet();
  $("report-content").innerHTML += renderContextPaywall();
  $("report-content").innerHTML += renderDateCheckPaywall();
  $("report-content").innerHTML += renderToast();
  bindReport();
}

function ensureSelectedForecastVisible() {
  if (currentProduct !== "six" && currentProduct !== "backtest") return;
  const visible = visibleForecastWindows();
  if (!visible.length) return;
  if (!visible.some((window) => window.id === selectedForecastId)) {
    const next = rankedForecastWindows()[0] || visible[0];
    selectedForecastId = next.id;
    selectedForecastIso = next.iso;
    selectedMonth = next.month;
    selectedPanelMode = "preview";
  }
}

function renderProductTabs() {
  if (currentProduct === "check") {
    $("product-tabs").innerHTML = products
      .filter((product) => ["six", "check"].includes(product.key))
      .map((product) => `<button class="product-tab ${currentProduct === product.key ? "active" : ""}" data-product="${product.key}">${product.key === "six" ? "6-Month Map" : product.label}</button>`)
      .join("");
  } else {
    $("product-tabs").innerHTML = reportAnchors
      .map((anchor) => `<button class="product-tab anchor-tab" data-anchor="${anchor.key}">${anchor.label}</button>`)
      .join("");
  }

  const unlockButton = $("nav-unlock");
  if (currentProduct === "check" && !dateCheckGenerated) {
    unlockButton.textContent = "Open Date Check Report";
    unlockButton.onclick = showDateCheckReport;
  } else if (currentProduct === "six" && sixMonthUnlocked) {
    unlockButton.textContent = "All Key Dates Open";
    unlockButton.onclick = scrollToTop;
  } else {
    unlockButton.textContent = "Unlock Key Dates";
    unlockButton.onclick = () => openPaywall("timeline");
  }
}

function renderProfileBar() {
  const bar = $("profile-bar");
  if (currentProduct !== "check") {
    bar.style.display = "none";
    bar.innerHTML = "";
    return;
  }
  bar.style.display = "";
  const range = currentProduct === "backtest" ? `${profile.reportRange} · Love Timing Report` : currentProduct === "check" ? `May 20, 2026 · ${selectedTopic} Date Check` : profile.reportRange;
  bar.innerHTML = `
    <div class="profile-data">
      <b>${profile.name}</b>
      <span>${profileBirthLabel()}</span>
      <span>${profile.place}</span>
      <span>${range}</span>
    </div>
    <div class="badges">
      <span class="badge">Tropical</span>
      <span class="badge">Geocentric</span>
      <span class="badge">Placidus</span>
      <span class="badge">Orb ≤ 1°</span>
    </div>
  `;
}

function asList(value) {
  if (Array.isArray(value)) return value;
  return value ? [value] : [];
}

function evidenceRows(window) {
  const rows = [
    ["Formula", window.formula || "Demo formula"],
    ["Transit", window.evidence?.transit || "Demo transit"],
    ["Natal Point", window.evidence?.natal || "Demo natal point"],
    ["Aspect", window.evidence?.aspect || window.formula],
    ["Orb", window.orb],
    ["Theme Mapping", window.evidence?.themeMapping || window.theme],
  ];
  if (birthTimeKnown) rows.splice(5, 0, ["House Layer", window.evidence?.house || "Demo house layer"]);
  if (!birthTimeKnown) rows.splice(5, 0, ["House Layer", "Not calculated without birth time"]);
  return rows;
}

function renderEvidenceDetails(window, open = false) {
  return `
    <details class="evidence-fold" ${open ? "open" : ""}>
      <summary>Evidence</summary>
      <div class="evidence-inner">
        <div class="table">
          ${evidenceRows(window).map(([label, value]) => `<div class="tr"><div class="td">${label}</div><div class="td">${value}</div></div>`).join("")}
        </div>
      </div>
    </details>
  `;
}

function renderActionGuidanceCard(window, options = {}) {
  const dateLine = options.hideExact ? options.dateLabel || "Exact date locked" : `${window.date}${window.time ? ` · ${window.time}` : ""}`;
  const field = window.field || window.theme || "Timing";
  const windowType = window.windowType || "Opportunity";
  const bestFor = asList(window.bestFor || window.bestUse).slice(0, 3);
  const avoid = asList(window.avoid).slice(0, 2);

  return `
    <div class="card pad guidance-card">
      <div class="event-top">
        <div>
          <div class="small">${dateLine}</div>
          <h2 style="font-size:28px;margin-top:8px">${window.title}</h2>
        </div>
        <span class="score">Score ${window.score}</span>
      </div>
      <div class="guidance-meta">
        <div><div class="label">Field</div><b>${field}</b></div>
        <div><div class="label">Window Type</div><b>${windowType}</b></div>
        <div><div class="label">Timing Quality</div><b>${scoreGrade(window.score)}</b></div>
      </div>
      <div class="guidance-summary">
        <div class="label">One-line Prediction</div>
        <div style="margin-top:8px">${windowOneLine(window)}</div>
      </div>
      <div class="split">
        <div class="action"><div class="label">Best Use</div><div class="bullet-list">${bestFor.map((item) => `<div>${item}</div>`).join("")}</div></div>
        <div class="action"><div class="label">Avoid</div><div class="bullet-list">${avoid.map((item) => `<div>${item}</div>`).join("")}</div></div>
      </div>
      ${window.externalSignal || window.innerResponse ? `
        <div class="split">
          <div class="action"><div class="label">External Signal</div><div style="margin-top:8px">${window.externalSignal || "This may correspond to a visible timing cue."}</div></div>
          <div class="action"><div class="label">Inner Response</div><div style="margin-top:8px">${window.innerResponse || "Notice the response without turning it into certainty."}</div></div>
        </div>
      ` : ""}
      <div class="action"><div class="label">Timing Quality</div><div style="margin-top:8px">${timingQuality(window)}</div></div>
      ${options.lockEvidence ? `
        <div class="evidence-fold locked-summary">
          <summary>Evidence</summary>
          <div class="evidence-inner">
            <div class="locked-evidence">
              <div class="table">
                <div class="tr"><div class="td">Transit</div><div class="td">Exact transit locked</div></div>
                <div class="tr"><div class="td">Natal Point</div><div class="td">Natal point locked</div></div>
                <div class="tr"><div class="td">Orb</div><div class="td">Exact orb locked</div></div>
              </div>
            </div>
            <button class="btn primary" style="margin-top:14px" data-paywall="evidence">See full evidence</button>
          </div>
        </div>
      ` : renderEvidenceDetails(window, Boolean(options.evidenceOpen))}
    </div>
  `;
}

function renderLockedFutureCard(window, index) {
  const weekLabel = window.previewLabel || `${window.day <= 10 ? "Early" : window.day <= 20 ? "Mid" : "Late"} ${window.month}`;
  return `
    <div class="event locked-summary">
      <div class="event-top">
        <div>
          <div class="small">#${index + 1} · ${weekLabel} · exact date/time locked</div>
          <b>${window.title}</b>
          <div class="small" style="margin-top:6px">${window.field} · ${window.windowType}</div>
          ${tag(`Score ${window.score}`)}
        </div>
        <span class="score">${window.score}</span>
      </div>
      <div class="locked-evidence" style="margin-top:14px">
        <div class="table">
          <div class="tr"><div class="td">Formula</div><div class="td">${window.formula}</div></div>
          <div class="tr"><div class="td">Exact evidence</div><div class="td">Locked</div></div>
        </div>
      </div>
      <div class="intent-row">
        <button class="btn" data-paywall="locked-date">Unlock full date report</button>
        <button class="btn" data-paywall="evidence">See full evidence</button>
      </div>
    </div>
  `;
}

function renderPricingStrip() {
  return `
    <div class="pricing-strip">
      <div class="event"><div class="eyebrow">Free Backtest</div><div class="value">$0</div><p class="small">Past windows and validation.</p></div>
      <div class="event"><div class="eyebrow">Check One Date</div><div class="value">$3.99</div><p class="small">One selected date, one topic.</p></div>
      <div class="event"><span class="best-badge">Best value</span><div class="eyebrow">6-Month Timing Map</div><div class="value">$12.99</div><p class="small">All key dates, full date reports, reminders, and export.</p></div>
    </div>
  `;
}

function paywallCopy(context) {
  const copy = {
    "locked-date": ["Unlock all key dates and full date reports", "Unlock every locked key date, exact time, practical advice, evidence, and score logic."],
    evidence: ["Unlock all key dates and full date reports", "Unlock complete evidence and score breakdowns for every date beyond the free top 3."],
    timeline: ["Unlock all key dates and full date reports", "Unlock every future key date, exact time, full date report, evidence, reminders, and export."],
    export: ["Unlock all key dates and full date reports", "Export is included after unlocking the complete 6-month timing map."],
    reminders: ["Unlock all key dates and full date reports", "Get reminders for every high-priority and caution window in the timing map."],
    nearby: ["Unlock all key dates and full date reports", "Unlock stronger nearby windows and full guidance inside the 6-month map."],
  };
  return copy[context] || copy.timeline;
}

function openPaywall(context) {
  if (currentProduct === "six" && sixMonthUnlocked) {
    handleUnlockedAction(context);
    return;
  }
  paywallContext = context;
  isMobileSheetOpen = false;
  renderReport();
}

function closePaywall() {
  paywallContext = null;
  renderReport();
}

function renderContextPaywall() {
  if (!paywallContext) return "";
  const [title, body] = paywallCopy(paywallContext);
  return `
    <div class="sheet-backdrop" data-close-paywall>
      <div class="context-sheet" role="dialog" aria-modal="true" onclick="event.stopPropagation()">
        <div class="event-top">
          <div>
            <div class="eyebrow">6-Month Timing Report · $12.99</div>
            <h2 style="font-size:28px;margin-top:8px">${title}</h2>
            <p class="sub" style="font-size:16px">${body}</p>
          </div>
          <button class="sheet-close" data-close-paywall>Close</button>
        </div>
        <div class="pricing-strip">
          <div class="event"><div class="label">Included</div><b>All locked key dates</b></div>
          <div class="event"><div class="label">Included</div><b>Exact times + full advice</b></div>
          <div class="event"><div class="label">Included</div><b>Evidence, reminders, export</b></div>
        </div>
        <div class="sheet-actions">
          <button class="btn" data-close-paywall>Keep exploring</button>
          <button class="btn primary" data-unlock-six>Unlock all key dates and full date reports · $12.99</button>
        </div>
      </div>
    </div>
  `;
}

function renderDateCheckPaywall() {
  if (!dateCheckPaywallOpen) return "";
  return `
    <div class="sheet-backdrop" data-close-date-check-paywall>
      <div class="context-sheet" role="dialog" aria-modal="true" onclick="event.stopPropagation()">
        <div class="event-top">
          <div>
            <div class="eyebrow">Check One Date · $3.99</div>
            <h2 style="font-size:28px;margin-top:8px">Unlock this date check</h2>
            <p class="sub" style="font-size:16px">Open the selected date, topic score grid, best time window, evidence table, and single-date export preview.</p>
          </div>
          <button class="sheet-close" data-close-date-check-paywall>Close</button>
        </div>
        <div class="pricing-strip">
          <div class="event"><div class="label">Selected date</div><b>May 20, 2026</b></div>
          <div class="event"><div class="label">Topic</div><b>${selectedTopic}</b></div>
          <div class="event"><div class="label">Included</div><b>Evidence + export</b></div>
        </div>
        <div class="sheet-actions">
          <button class="btn" data-close-date-check-paywall>Keep editing</button>
          <button class="btn primary" data-unlock-date-check>Unlock this date check · $3.99</button>
        </div>
      </div>
    </div>
  `;
}

function renderToast() {
  if (!toastMessage) return "";
  return `<div class="demo-toast" role="status">${toastMessage}</div>`;
}

function importantWindows() {
  return freePreviewWindows();
}

function renderReportCover() {
  const top = rankedForecastWindows()[0];
  return `
    <section class="card pad report-header" id="overview">
      <div class="report-header-grid">
        <div>
          <div class="eyebrow">Date Explorer</div>
          <h1>6-Month Timing · ${profile.reportRange}</h1>
          <p class="small">${profile.name} · ${profileBirthLabel()} · ${profile.place}</p>
          <div class="intent-row">
            <button class="btn" data-start-over>Start Over</button>
            <button class="btn" data-demo-action="copy-link">Copy demo link</button>
          </div>
        </div>
        <div class="header-fast-read">
          <div><span>Peak Month</span><b>Aug</b></div>
          <div><span>Top Date</span><b>${top.date}</b></div>
          <div><span>Selected</span><b>${selectedForecastDay().date}</b></div>
        </div>
      </div>
    </section>
  `;
}

function renderPartialReportBanner() {
  if (birthTimeKnown) return "";
  return `
    <section class="card pad partial-banner">
      <div>
        <div class="eyebrow">Partial Report</div>
        <h2>Birth time unknown</h2>
        <p class="small">This report excludes ASC, DSC, houses, and house-based timing. Planet-to-planet timing is still shown, and ${hiddenHousePointSentence()}.</p>
      </div>
      <div class="partial-actions">
        <span class="badge">House timing hidden</span>
        <button class="btn" data-demo-action="birth-time">Add birth time</button>
      </div>
    </section>
  `;
}

function renderExecutiveSummary() {
  const top = rankedForecastWindows()[0];
  const windows = visibleForecastWindows();
  const keyDates = freePreviewWindows().map((window) => window.date).join(", ");
  const cautionDates = windows.filter((window) => window.windowType === "Caution").map((window) => window.date).join(", ");
  return `
    <section class="kpi-strip">
      <div class="grid kpis">
        ${kpi("Peak Month", "Aug", "Relationship visibility")}
        ${kpi("Top Date", top.date, `${top.title.replace(" Window", "")} · ${top.score}`)}
        ${kpi("Key Dates", String(windows.length), keyDates)}
        ${kpi("Caution Windows", String(windows.filter((window) => window.windowType === "Caution").length), cautionDates || "None")}
      </div>
    </section>
  `;
}

function chipLabel(window) {
  const shortTitle = window.title
    .replace(" Window", "")
    .replace("Relationship ", "")
    .replace("Signal ", "")
    .replace(" Signal", "")
    .replace(" Window", "");
  return `${window.date} · ${shortTitle} · ${window.score}`;
}

function renderTopDateChips() {
  return `
    <div class="top-date-chips" aria-label="Top three dates">
      ${freePreviewWindows().map((window) => `
        <button class="date-chip ${window.iso === selectedForecastIso ? "active" : ""}" data-forecast-day="${window.iso}">
          ${chipLabel(window)}
        </button>
      `).join("")}
    </div>
  `;
}

function windowTone(window) {
  if (!window) return "baseline";
  if (!isWindowUnlocked(window)) return "locked";
  if (window.windowType === "Caution") return "caution";
  if (window.windowType === "Review" || /review/i.test(window.title)) return "review";
  if (window.windowType === "Support" || window.windowType === "Decision") return "support";
  return "opportunity";
}

function renderMonthStrength() {
  const rows = [["May", 58], ["Jun", 84], ["Jul", 73], ["Aug", 96], ["Sep", 69], ["Oct", 88]];
  return `
    <div class="card pad">
      <h2>Month Strength</h2>
      ${rows.map(([month, score]) => `
        <div class="bar-row"><div class="bar-top"><span>${month}</span><b>${score}${month === "Aug" ? " · Peak" : ""}</b></div>${bar(score)}</div>
      `).join("")}
    </div>
  `;
}

function renderThemeDistribution() {
  const rows = [["Love / Communication", "3 windows", 94], ["Relationship visibility", "2 windows", 91], ["Emotional caution", "2 windows", 74], ["Logistics / timing", "1 window", 48]];
  return `
    <div class="card pad">
      <h2>Theme Distribution</h2>
      ${rows.map(([theme, meta, score]) => `
        <div class="bar-row"><div class="bar-top"><span>${theme}</span><span>${meta}</span></div>${bar(score)}</div>
      `).join("")}
    </div>
  `;
}

function renderMonthlyKeyNode(window) {
  const active = window.iso === selectedForecastIso;
  const locked = !isWindowUnlocked(window);
  const tone = windowTone(window);
  return `
    <button class="month-key node-${tone} ${active ? "active" : ""} ${locked ? "locked" : ""}" data-forecast-day="${window.iso}">
      <span class="node-date">${locked ? "🔒 " : ""}${window.date}</span>
      <span class="node-main"><b>${window.title}</b><span>${window.field} · ${window.windowType}${locked ? " · Locked" : ""}</span></span>
      <span class="score-mini">${window.score}</span>
    </button>
  `;
}

function renderForecastCalendar() {
  const daysInReport = forecastHeatmap();
  const windowsInReport = visibleForecastWindows();
  return `
    <div class="forecast-month-grid">
      ${forecastMonths.map((month) => {
        const days = daysInReport.filter((day) => day.month === month.name);
        const windows = windowsInReport.filter((window) => window.month === month.name).sort((a, b) => a.iso.localeCompare(b.iso));
        const isPeak = month.name === "Aug";
        return `
          <div class="month-card ${isPeak ? "peak" : ""}">
            <div class="month-title"><b>${month.name}${isPeak ? " · Peak" : ""}</b><span class="small">2026</span></div>
            <div class="weekday-row">${["S", "M", "T", "W", "T", "F", "S"].map((day) => `<div class="weekday">${day}</div>`).join("")}</div>
            <div class="days">
              ${Array.from({ length: month.offset }, () => `<span class="heat blank"></span>`).join("")}
              ${days.map((day) => {
                const window = day.windowId ? windowsInReport.find((item) => item.id === day.windowId) : null;
                const locked = window && !isWindowUnlocked(window);
                const tone = windowTone(window);
                return `
                  <button class="heat ${window ? `has-window node-${tone}` : "baseline-day"} ${locked ? "locked" : ""} ${day.iso === selectedForecastIso ? "active" : ""}" data-forecast-day="${day.iso}" title="${day.date} · Score ${day.score}">
                    <span>${day.day}</span>
                    ${window ? `<small>${locked ? "🔒" : window.score}</small>` : ""}
                  </button>
                `;
              }).join("")}
            </div>
            <div class="month-keys">
              ${windows.length ? windows.map(renderMonthlyKeyNode).join("") : `<div class="small">No priority nodes this month.</div>`}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderSelectedDatePreview() {
  const day = selectedForecastDay();
  const window = selectedForecastWindow();
  const panelMode = window && isWindowUnlocked(window) ? selectedPanelMode : "preview";
  const panelLabel = panelMode === "full" ? "Date Report" : "Selected Date Panel";
  const panelTools = panelMode === "full"
    ? `<button class="btn" data-collapse-selected>Collapse</button>`
    : "";

  if (!window) {
    return `
      <div class="card pad date-preview baseline-preview">
        <div class="panel-head">
          <div class="eyebrow">${panelLabel}</div>
          ${panelTools}
        </div>
        <h3>${day.date}</h3>
        <div class="event-top" style="margin-top:14px">
          <div class="small">Baseline Day</div>
          <span class="score">${day.score}</span>
        </div>
        <div class="preview-section">
          <div class="label">Prediction</div>
          Not a priority timing node.
        </div>
        <div class="preview-section">
          <div class="label">Suggested Normal Use</div>
          Keep ordinary commitments, routine follow-up, and low-stakes planning here. Do not treat this day as a major timing signal.
        </div>
      </div>
    `;
  }

  const unlocked = isWindowUnlocked(window);
  const bestUse = asList(window.bestFor || window.bestUse);
  const avoid = asList(window.avoid);
  const tone = windowTone(window);

  if (!unlocked) {
    return `
      <div class="card pad date-preview locked-preview">
        <div class="panel-head">
          <div class="eyebrow">${panelLabel}</div>
          ${panelTools}
        </div>
        <div class="small">${window.date}</div>
        <h3>${window.title}</h3>
        <div class="event-top" style="margin-top:14px">
          <div>${tag(window.field)} ${tag(`${window.windowType} · Locked`)}</div>
          <span class="score score-locked">${window.score}</span>
        </div>
        <div class="preview-section">
          <div class="label">Useful For</div>
          ${window.actionSummary || `${window.field} planning with extra attention to timing.`}
        </div>
        <div class="preview-section">
          <div class="label">Locked</div>
          Exact time, full advice, evidence, and score logic.
        </div>
        <div class="preview-actions">
          <button class="btn primary" data-paywall="locked-date">Unlock Full Date Report</button>
        </div>
      </div>
    `;
  }

  if (panelMode === "full") {
    return `
      <div class="card pad date-preview date-preview-full node-${tone}">
        <div class="panel-head">
          <div>
            <div class="eyebrow">${panelLabel}</div>
            <div class="small">${window.date} · ${window.time}</div>
          </div>
          ${panelTools}
        </div>
        <div class="event-top" style="margin-top:12px">
          <h3>${window.title}</h3>
          <span class="score">${window.score}</span>
        </div>
        <div class="preview-section">
          <div class="label">Prediction</div>
          ${windowOneLine(window)}
        </div>
        <div class="preview-section">
          <div class="label">Best Use</div>
          <div class="bullet-list">${bestUse.slice(0, 3).map((item) => `<div>${item}</div>`).join("")}</div>
        </div>
        <div class="preview-section">
          <div class="label">Avoid</div>
          <div class="bullet-list">${avoid.slice(0, 3).map((item) => `<div>${item}</div>`).join("")}</div>
        </div>
        <div class="preview-section">
          <div class="label">External Signal</div>
          ${window.externalSignal || "This may correspond to a visible timing cue."}
        </div>
        <div class="preview-section">
          <div class="label">Inner Response</div>
          ${window.innerResponse || "Notice the response without turning it into certainty."}
        </div>
        <div class="preview-section">
          <div class="label">Timing Quality</div>
          ${timingQuality(window)}
        </div>
        ${renderEvidenceDetails(window)}
        ${renderScoreBreakdownDetails(window)}
        <div class="preview-actions">
          <button class="btn primary" ${sixMonthUnlocked ? `data-unlocked-action="export"` : `data-paywall="export"`}>Share this date</button>
        </div>
      </div>
    `;
  }

  return `
    <div class="card pad date-preview node-${tone}">
      <div class="panel-head">
        <div class="eyebrow">${panelLabel}</div>
        ${panelTools}
      </div>
      <div class="small">${window.date} · ${window.time}</div>
      <h3>${window.title}</h3>
      <div class="event-top" style="margin-top:14px">
        <div>${tag(window.field)} ${tag(window.windowType)}</div>
        <span class="score">${window.score}</span>
      </div>
      <div class="preview-section">
        <div class="label">Prediction</div>
        ${windowOneLine(window)}
      </div>
      <div class="preview-section">
        <div class="label">Best Use</div>
        ${bestUse[0] || window.actionSummary}
      </div>
      <div class="preview-section">
        <div class="label">Avoid</div>
        ${avoid[0] || "Avoid forcing certainty from one timing signal."}
      </div>
      <div class="preview-actions">
        <button class="btn primary" data-expand-selected>Expand Date Report</button>
        <button class="btn" data-expand-selected>View Evidence</button>
        <button class="btn" ${sixMonthUnlocked ? `data-unlocked-action="export"` : `data-paywall="export"`}>Share Date</button>
      </div>
    </div>
  `;
}

function renderMobileSelectedSheet() {
  if (!isMobileSheetOpen) return "";
  const heightClass = selectedPanelMode === "full" ? "full" : "preview";
  return `
    <div class="mobile-sheet-backdrop" data-close-mobile-sheet>
      <div class="mobile-date-sheet ${heightClass}" role="dialog" aria-modal="true" onclick="event.stopPropagation()">
        <div class="mobile-sheet-bar">
          <span></span>
          <div>
            ${selectedPanelMode === "full" ? `<button class="btn" data-collapse-selected>Collapse</button>` : ""}
            <button class="btn" data-close-mobile-sheet>Close</button>
          </div>
        </div>
        <div class="mobile-sheet-scroll">
          ${renderSelectedDatePreview()}
        </div>
      </div>
    </div>
  `;
}

function renderTimingMapSection(unlocked = false) {
  return `
    <section class="report-section" id="calendar">
      <div class="card pad report-card">
        <div class="module-title">
          <div><div class="eyebrow">Date Explorer</div><h2>Choose a Date</h2><p class="small">Every click updates the selected date panel in place.</p></div>
          ${unlocked ? `<button class="btn" data-unlocked-action="timeline">View full timeline</button>` : `<button class="btn" data-paywall="timeline">Unlock all key dates</button>`}
        </div>
        ${renderTopDateChips()}
        <div class="mobile-selected-inline">${renderSelectedDatePreview()}</div>
        <div class="calendar-shell">
          <div class="calendar-main">${renderForecastCalendar()}</div>
          <aside class="calendar-preview">${renderSelectedDatePreview()}</aside>
        </div>
      </div>
    </section>
  `;
}

function renderScoreBreakdownDetails(window) {
  const breakdown = window.breakdown || [["Theme relevance", 24], ["Aspect strength", 24], ["Orb precision", 20], ["Timing priority", 12]];
  return `
    <details class="evidence-fold">
      <summary>Score Breakdown</summary>
      <div class="evidence-inner">
        ${breakdown.map(([label, value]) => `<div class="bar-row"><div class="bar-top"><span>${label}</span><b>+${value}</b></div>${bar(Math.round((value / window.score) * 100))}</div>`).join("")}
        <div class="action"><div class="bar-top"><span>Total activation strength</span><b style="font-size:26px">${window.score}</b></div></div>
      </div>
    </details>
  `;
}

function renderBacktestValidationSection() {
  const windows = visiblePastWindows();
  const days = pastHeatmap();
  const reviewed = windows.filter((window) => window.validation !== "unreviewed").length;
  const userMatch = reviewed ? `${windows.filter((window) => ["matched", "partial"].includes(window.validation)).length} / ${reviewed}` : "—";
  return `
    <section class="report-section" id="backtest">
      <details class="card pad report-card collapsed-module" ${backtestOpen ? "open" : ""}>
        <summary>
          <div>
            <div class="eyebrow">Collapsed Backtest</div>
            <h2>Past Timing Check</h2>
          </div>
          <span class="small">${userMatch} matched · ${windows.length} windows</span>
        </summary>
        <div class="grid kpis" style="margin-top:18px">
          ${kpi("User Match", userMatch)}
          ${kpi("Reviewed", `${reviewed} / ${windows.length}`)}
          ${kpi("Past Windows", windows.length)}
          ${kpi("Top Theme", "Emotional Response")}
        </div>
        <div class="grid two" style="margin-top:18px">
          <div>${renderHeatmap(pastMonths, days, "past")}</div>
          <div class="compact-list">
            ${renderValidationLegend()}
            ${windows.map(renderPastWindowCard).join("")}
          </div>
        </div>
      </details>
    </section>
  `;
}

function renderSecondaryMethodExport(unlocked = false) {
  return `
    <section class="card pad report-section report-card" id="method">
      <div class="module-title">
        <div><div class="eyebrow">Secondary</div><h2>Method / Export</h2></div>
      </div>
      <div class="method-grid">
        <div><div class="label">Zodiac</div><b>Tropical</b></div>
        <div><div class="label">View</div><b>Geocentric</b></div>
        <div><div class="label">House System</div><b>${birthTimeKnown ? "Placidus" : "Not used"}</b></div>
        <div><div class="label">Orb Rule</div><b>Orb ≤ 1°</b></div>
      </div>
      <div class="intent-row">
        <button class="btn ${unlocked ? "primary" : ""}" ${unlocked ? `data-unlocked-action="export"` : `data-paywall="export"`}>${unlocked ? "Export Report" : "Unlock Export"}</button>
        <button class="btn" ${unlocked ? `data-unlocked-action="reminders"` : `data-paywall="reminders"`}>Reminders</button>
        <button class="btn" ${unlocked ? `data-unlocked-action="nearby"` : `data-paywall="nearby"`}>Nearby Windows</button>
      </div>
    </section>
  `;
}

function renderMethodSection() {
  return `
    <section class="card pad report-section report-card" id="method">
      <div class="module-title"><div><div class="eyebrow">Method</div><h2>Calculation Method</h2><p class="small">Short method context for interpreting activation strength.</p></div></div>
      <div class="method-grid">
        <div><div class="label">Zodiac</div><b>Tropical</b></div>
        <div><div class="label">View</div><b>Geocentric</b></div>
        <div><div class="label">House System</div><b>${birthTimeKnown ? "Placidus" : "Not used"}</b></div>
        <div><div class="label">Orb Rule</div><b>Orb ≤ 1°</b></div>
      </div>
    </section>
  `;
}

function renderReportOptionsSection() {
  return `
    <section class="card pad report-section">
      <div class="module-title">
        <div><div class="eyebrow">Unlock</div><h2>Unlock More Key Dates</h2><p class="small">Open every locked date, exact time, full action guidance, evidence, score logic, reminders, and export.</p></div>
      </div>
      <div class="intent-row">
        <button class="btn primary" data-paywall="timeline">Unlock all key dates and full date reports</button>
        <button class="btn" data-paywall="reminders">Get reminders</button>
        <button class="btn" data-paywall="export">Export this report</button>
        <button class="btn" data-paywall="nearby">See better nearby windows</button>
      </div>
    </section>
  `;
}

function shareStudioTypes(mode = "six") {
  const allTypes = [
    ["Summary Card", "Summary", "Best for social"],
    ["Single Date Card", "Date Card", "Best for one key moment"],
    ["Full Report", "Full Report", "Complete export preview"],
  ];
  if (mode === "date-check") return allTypes.filter(([type]) => type !== "Summary Card");
  return allTypes;
}

function effectiveExportType(mode = "six") {
  if (mode === "date-check" && exportType === "Summary Card") return "Single Date Card";
  if (exportType === "PDF" || exportType === "Full Snapshot") return "Full Report";
  return exportType;
}

function shareWindow(mode = "six") {
  if (mode === "date-check") return getDateCheckWindow();
  return selectedForecastWindow() || rankedForecastWindows()[0];
}

function shareCaption(type, window, mode = "six") {
  if (type === "Summary Card") {
    const dates = freePreviewWindows().map((item) => item.date).join(", ");
    return `My ${profile.reportRange} timing map peaks in August. Top dates: ${dates}.`;
  }
  if (type === "Full Report") {
    return `My full timing report includes the complete timeline, evidence, and export.`;
  }
  return `${window.date} is a ${window.windowType || "timing"} window for ${window.field || selectedTopic}: ${windowOneLine(window)}`;
}

function shareSummaryLine() {
  return "A high-visibility stretch where timing rewards clear invitations, practical asks, and visible action.";
}

function renderShareSummaryCard() {
  const topDates = freePreviewWindows();
  return `
    <div class="share-card share-summary ${exportSize.toLowerCase()}">
      <div class="share-brand">Exact Transit</div>
      <div>
        <div class="share-kicker">Personal Timing Report</div>
        <h3>Your Peak Month</h3>
        <div class="share-peak">AUGUST 2026</div>
      </div>
      <div class="share-theme-row">
        <span>Relationship</span>
        <span>Visibility</span>
        <span>Momentum</span>
      </div>
      <div class="share-date-list">
        <div class="share-list-title">Top 3 Key Dates</div>
        ${topDates.map((window) => `
          <div class="share-date-row">
            <b>${window.date}</b>
            <span>${window.title.replace(" Window", "")}</span>
            <em>${window.score}</em>
          </div>
        `).join("")}
      </div>
      <div class="share-footer">
        <p>${shareSummaryLine()}</p>
        <span>${profile.reportRange}</span>
      </div>
    </div>
  `;
}

function renderShareDateCard(window) {
  const bestUse = asList(window.bestFor || window.bestUse).slice(0, 2).join(" / ");
  const avoid = asList(window.avoid).slice(0, 2).join(" / ");
  const tone = windowTone(window);
  return `
    <div class="share-card share-date-card share-tone-${tone} ${exportSize.toLowerCase()}">
      <div class="share-brand">Exact Transit</div>
      <div class="share-date-hero">
        <div>
          <div class="share-kicker">Key Date</div>
          <h3>${window.date}</h3>
          <span>${window.time || "Best window included"}</span>
        </div>
        <div class="share-score-orb">
          <b>${window.score}</b>
          <span>Score</span>
        </div>
      </div>
      <div>
        <div class="share-window-type">${window.windowType || "Timing"} Window</div>
        <p class="share-prediction">${windowOneLine(window)}</p>
      </div>
      <div class="share-do-avoid">
        <div>
          <span>Best Use</span>
          <b>${bestUse || window.actionSummary}</b>
        </div>
        <div>
          <span>Avoid</span>
          <b>${avoid || "Forcing certainty"}</b>
        </div>
      </div>
      <div class="share-footer compact">
        <span>${window.field || selectedTopic}</span>
        <span>Find your key dates</span>
      </div>
    </div>
  `;
}

function renderPdfPreview(window) {
  return `
    <div class="share-pdf-layout">
      <div class="pdf-cover-mini">
        <div class="share-brand">Exact Transit</div>
        <div>
          <div class="share-kicker">Full Timing Report</div>
          <h3>2026 Personal Timeline</h3>
        </div>
        <div class="pdf-cover-meta">
          <span>${profile.name}</span>
          <span>${profile.reportRange}</span>
        </div>
      </div>
      <div class="pdf-summary-panel">
        <div class="share-kicker">PDF Preview</div>
        <h3>Complete report export</h3>
        <p>Cover preview plus page-level summary for the paid report deliverable.</p>
        <div class="pdf-feature-grid">
          <div><b>Full timeline</b><span>${visibleForecastWindows().length} key date reports</span></div>
          <div><b>Evidence</b><span>Transit, natal point, aspect, orb</span></div>
          <div><b>Export included</b><span>Ready for download or report link</span></div>
        </div>
        <div class="intent-row">
          <button class="btn primary" data-demo-action="preview-pdf">Preview PDF</button>
          <button class="btn" data-demo-action="export-pdf">Download PDF</button>
          <button class="btn" data-demo-action="copy-link">Copy report link</button>
        </div>
      </div>
    </div>
  `;
}

function renderSharePreview(type, mode = "six") {
  const window = shareWindow(mode);
  if (type === "Summary Card") return renderShareSummaryCard();
  if (type === "Full Report") return renderPdfPreview(window);
  return renderShareDateCard(window);
}

function renderShareStudio(mode = "six") {
  const type = effectiveExportType(mode);
  const window = shareWindow(mode);
  const caption = shareCaption(type, window, mode);
  const sizeControls = type === "Full Report" ? "" : `
    <div class="share-control-group">
      <div class="label">Size</div>
      <div class="segmented">
        ${["Story", "Feed"].map((size) => `<button class="${exportSize === size ? "active" : ""}" data-export-size="${size}">${size} ${size === "Story" ? "1080x1920" : "1080x1080"}</button>`).join("")}
      </div>
    </div>
  `;

  return `
    <section class="share-studio" id="export">
      <div class="share-sidebar card pad">
        <div class="eyebrow">Share Studio</div>
        <h2>Choose format</h2>
        <p class="small">Cards are for social spread. The PDF preview is for the complete report asset.</p>
        <div class="share-format-list">
          ${shareStudioTypes(mode).map(([itemType, label, description]) => `
            <button class="share-format ${type === itemType ? "active" : ""}" data-export-type="${itemType}">
              <b>${label}</b>
              <span>${description}</span>
            </button>
          `).join("")}
        </div>
        ${sizeControls}
        <div class="share-control-group">
          <div class="label">Caption Suggestion</div>
          <div class="caption-box">${caption}</div>
        </div>
        <div class="share-actions">
          <button class="btn" data-copy-caption>Copy caption</button>
          <button class="btn primary" data-demo-action="${type === "Full Report" ? "export-pdf" : "download-image"}">${type === "Full Report" ? "Export PDF" : "Download image"}</button>
          <button class="btn glow" data-demo-action="share">Share</button>
        </div>
      </div>
      <div class="share-preview-wrap card pad">
        <div class="module-title">
          <div><div class="eyebrow">Preview</div><h2>${type}</h2></div>
          <span class="badge">${type === "Full Report" ? "PDF asset" : exportSize}</span>
        </div>
        <div class="share-preview ${type === "Full Report" ? "pdf-preview" : ""}">
          ${renderSharePreview(type, mode)}
        </div>
      </div>
    </section>
  `;
}

function renderUnlockedAddOns() {
  return `
    <section class="report-section" id="full-timeline">
      <div class="card pad report-card">
        <div class="module-title"><div><div class="eyebrow">Unlocked</div><h2>Full 6-Month Timeline</h2><p class="small">All future windows with exact dates, priority ranking, and action summaries.</p></div></div>
        <div class="priority-grid">
          ${["High Priority", "Medium Priority", "Low Priority"].map((priority) => `
            <div>
              <h3>${priority}</h3>
              ${visibleForecastWindows().filter((window) => window.priority === priority).map(renderForecastListCard).join("")}
            </div>
          `).join("")}
        </div>
      </div>
      <div class="grid two" style="margin-top:18px">
        <div class="card pad">
          <h2 id="nearby">Better Nearby Windows</h2>
          <p class="small" style="margin-top:8px">For each high-priority theme, show stronger nearby windows within the 6-month map.</p>
          ${importantWindows().flatMap((window) => window.nearby.map(([time, title, score]) => `
            <div class="event" style="cursor:default"><div class="event-top"><div><div class="small">${window.title}</div><b>${time} · ${title}</b></div><span class="score">Score ${score}</span></div></div>
          `)).join("")}
        </div>
        <div class="card pad">
          <h2 id="reminders">Email Reminders</h2>
          <div class="bullet-list">
            <div><b>Score 90+:</b> 7 days before, 1 day before</div>
            <div><b>Score 80–89:</b> 3 days before</div>
            <div><b>Caution windows:</b> 1 day before with caution language</div>
          </div>
        </div>
      </div>
      ${renderShareStudio("six")}
    </section>
  `;
}

function renderTimingReportFirst(unlocked = false) {
  return `
    <div class="fade-in">
      ${renderReportCover()}
      ${renderPartialReportBanner()}
      ${renderExecutiveSummary()}
      ${renderTimingMapSection(unlocked)}
      ${renderBacktestValidationSection()}
      ${renderSecondaryMethodExport(unlocked)}
      ${unlocked ? renderUnlockedAddOns() : ""}
    </div>
  `;
}

function renderBacktest() {
  return renderTimingReportFirst();
}

function renderPastWindowCard(window) {
  return `
    <div class="event ${window.id === selectedPastId ? "active" : ""}" data-past-window="${window.id}">
      <div class="event-top">
        <div>
          <div class="small">${window.date} · ${window.time}</div>
          <b><span style="opacity:.5;margin-right:4px">${planetIcon(window.transitPlanet)}</span>${window.title}</b>
          <div class="small" style="margin-top:5px">${window.actionSummary}</div>
          ${tag(window.field)} ${tag(window.windowType)}
        </div>
        <span class="score">Score ${window.score}</span>
      </div>
      <div style="margin-top:13px">${bar(window.score)}</div>
      <div class="small" style="margin-top:14px">Did this match your real timeline?</div>
      <div class="validation-btns">
        <button class="v-btn ${window.validation === "matched" ? "matched" : ""}" data-validate="${window.id}" data-val="matched">Matched</button>
        <button class="v-btn ${window.validation === "partial" ? "partial" : ""}" data-validate="${window.id}" data-val="partial">Partial</button>
        <button class="v-btn ${window.validation === "missed" ? "missed" : ""}" data-validate="${window.id}" data-val="missed">Missed</button>
      </div>
    </div>
  `;
}

function renderValidationLegend() {
  return `
    <div class="validation-legend">
      <span class="legend-item"><span class="status-dot matched"></span>Matched</span>
      <span class="legend-item"><span class="status-dot partial"></span>Partial</span>
      <span class="legend-item"><span class="status-dot missed"></span>Missed</span>
      <span class="legend-item"><span class="status-dot unreviewed"></span>Unreviewed</span>
    </div>
  `;
}

function renderHeatmap(months, days, type) {
  return `
    <div class="month-grid">
      ${months.map((month) => `
        <div class="month-card">
          <div class="month-title"><b>${month.name}</b><span class="small">${type === "past" ? "Backtest" : "2026"}</span></div>
          <div class="weekday-row">${["S", "M", "T", "W", "T", "F", "S"].map((day) => `<div class="weekday">${day}</div>`).join("")}</div>
          <div class="days">
            ${Array.from({ length: month.offset }, () => `<span class="heat blank"></span>`).join("")}
            ${days.filter((day) => day.month === month.name).map((day) => `
              <button class="heat ${scoreClass(day.score)} ${day.windowId ? "has-window" : ""} ${isActiveHeatDay(day, type) ? "active" : ""}" data-${type}-day="${day.iso}" title="${day.date} · Score ${day.score}">${day.day}</button>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function isActiveHeatDay(day, type) {
  if (type === "past") return day.windowId === selectedPastId;
  return day.iso === selectedForecastIso;
}

function renderDateCheckInput() {
  return `
    <div class="fade-in grid">
      <div class="card hero">
        <div class="hero-grid">
          <div>
            <div class="eyebrow">Check One Date · $3.99</div>
            <h1>One date. One calculated answer.</h1>
            <p class="sub">Check One Date explains one selected date. It does not search for better dates.</p>
          </div>
          <div class="peak-box">
            <div class="small">Selected product</div>
            <div class="peak-num">$3.99</div>
            <div class="small">Single date and topic.</div>
          </div>
        </div>
      </div>
      <div class="grid two">
        <div class="input-form card" style="margin-top:0;max-width:none">
          <div class="input-row">
            <label><span class="field-label">Selected date</span><input type="date" value="2026-05-20"></label>
            <label><span class="field-label">Topic</span><select><option>${selectedTopic}</option></select></label>
          </div>
          <div style="margin-bottom:16px">
            <span class="field-label">Topic</span>
            <div class="topic-grid">
              ${topicOptions.map((topic) => `<button class="topic-btn ${topic === selectedTopic ? "active" : ""}" data-topic="${topic}">${topic}</button>`).join("")}
            </div>
          </div>
          <label><span class="field-label">Optional plan</span><textarea placeholder="Example: ask for a promotion timeline, send a proposal, or schedule a conversation.">Send a career proposal and ask for clear next steps.</textarea></label>
          <button class="generate-btn" data-run-check>View Date Check Report</button>
        </div>
        <div class="card pad">
          <h2>What this includes</h2>
          <div class="bullet-list">
            <div>Date Check Summary</div>
            <div>Topic Score Grid</div>
            <div>Best Time Window</div>
            <div>Strongest Transits of the Day</div>
            <div>Evidence Table, Do / Avoid, and Single-Date Export</div>
          </div>
          <div class="action"><div class="label">Boundary</div><div style="margin-top:8px">This answers the selected date only. It does not compare multiple dates.</div></div>
        </div>
      </div>
    </div>
  `;
}

function getDateCheckWindow() {
  return {
    id: 301,
    date: "May 20, 2026",
    time: "10:40-12:15 local time",
    score: dateCheck.score,
    title: `${selectedTopic} Date Check`,
    field: selectedTopic,
    windowType: "Decision",
    formula: "Transit Moon △ Natal Mercury",
    orb: "0°12′",
    actionSummary: dateCheck.summary,
    bestFor: dateCheck.do,
    avoid: dateCheck.avoid,
    why: "Moon trine natal Mercury with a 0°12′ orb supports structured communication and practical decisions.",
    externalSignal: "A work message, decision point, or need to clarify practical next steps may become more visible.",
    innerResponse: "You may feel more organized, but less patient with unclear commitments.",
    evidence: {
      transit: "Moon · 22°08′ Virgo",
      natal: "Mercury · 21°56′ Taurus",
      aspect: "120° trine",
      house: "6H / 10H support",
      themeMapping: "Planning / communication / practical choice",
    },
  };
}

function renderDateCheckReport() {
  const checkedWindow = getDateCheckWindow();
  return `
    <div class="fade-in grid">
      <div class="card hero">
        <div class="hero-grid">
          <div>
            <div class="eyebrow">Check One Date · $3.99</div>
            <h1>One date. One calculated answer.</h1>
            <p class="sub">Check One Date explains one selected date. It does not search for better dates.</p>
          </div>
          <div class="peak-box">
            <div class="small">${dateCheck.selectedDate}</div>
            <div class="peak-num">${dateCheck.score}</div>
            <div class="small">${selectedTopic} Date Check</div>
          </div>
        </div>
      </div>

      <div>
        <div class="module-title"><div><h2>Date Check Summary</h2><p class="small">Use the date for the clearest practical action first.</p></div></div>
        ${renderActionGuidanceCard(checkedWindow)}
      </div>

      <div class="grid two">
        <div class="card pad">
          <h2>Topic Score Grid</h2>
          <div style="margin-top:18px">${dateCheck.topicScores.map(([topic, score]) => `
            <div class="bar-row">
              <div class="bar-top"><span>${topic}</span><b>${score} · ${scoreGrade(score)}</b></div>
              ${bar(score)}
            </div>
          `).join("")}</div>
        </div>
        <div class="card pad">
          <h2>Best Time Window</h2>
          <div class="event active" style="cursor:default">
            <div class="small">${dateCheck.selectedDate}</div>
            <h3 style="margin-top:8px">${dateCheck.bestWindow}</h3>
            <p class="small" style="margin-top:10px;line-height:1.55">Best used for structured communication and practical decisions.</p>
            ${tag("Activation strength High")}
          </div>
          <div class="action"><div class="label">Score note</div><div style="margin-top:8px">Score measures how strongly this date activates the selected theme. It does not measure certainty or guarantee an external event.</div></div>
        </div>
      </div>

      <div class="grid two">
        <div class="card pad">
          <h2>Strongest Transits of the Day</h2>
          ${dateCheck.transits.map(([formula, orb, meaning]) => `
            <div class="event" style="cursor:default">
              <div class="event-top"><div><b>${formula}</b><div class="small" style="margin-top:6px">${meaning}</div></div><span class="score">${orb}</span></div>
            </div>
          `).join("")}
        </div>
        <div class="card pad">
          <h2>Evidence Table</h2>
          <details class="evidence-fold">
            <summary>Evidence</summary>
            <div class="evidence-inner">
              <div class="table">
                ${[
                  ["Selected date", dateCheck.selectedDate],
                  ["Topic", selectedTopic],
                  ["Overall Score", String(dateCheck.score)],
                  ["Primary activation", "Communication / structure / practical decision"],
                  ["Strongest window", dateCheck.bestWindow],
                  ["Caution layer", "Mars-Venus friction around emotional agreement"],
                ].map(([label, value]) => `<div class="tr"><div class="td">${label}</div><div class="td">${value}</div></div>`).join("")}
              </div>
            </div>
          </details>
        </div>
      </div>

      <div class="grid two">
        <div class="card pad"><h2>Do</h2><div class="bullet-list">${dateCheck.do.map((item) => `<div>${item}</div>`).join("")}</div></div>
        <div class="card pad"><h2>Avoid</h2><div class="bullet-list">${dateCheck.avoid.map((item) => `<div>${item}</div>`).join("")}</div></div>
      </div>

      ${renderShareStudio("date-check")}
    </div>
  `;
}

function renderSixMonthLocked() {
  return renderTimingReportFirst();
}

function renderSixMonthReport() {
  return renderTimingReportFirst(true);
}

function renderForecastListCard(window) {
  return `
    <button class="event ${window.iso === selectedForecastIso ? "active" : ""}" data-forecast-window="${window.id}">
      <div class="event-top">
        <div>
          <div class="small">${window.date} · ${window.time}</div>
          <b><span style="opacity:.5;margin-right:4px">${planetIcon(window.transitPlanet)}</span>${window.title}</b>
          <div class="small" style="margin-top:5px">${window.actionSummary}</div>
          ${tag(window.field)} ${tag(window.windowType)}
        </div>
        <span class="score">${window.score}</span>
      </div>
      <div style="margin-top:13px">${bar(window.score)}</div>
    </button>
  `;
}

function handleUnlockedAction(action) {
  paywallContext = null;
  if (action === "locked-date" || action === "evidence") {
    selectedPanelMode = "full";
    showToast("Full date report opened.");
    renderReport();
    return;
  }
  const targetByAction = {
    timeline: "full-timeline",
    nearby: "nearby",
    reminders: "reminders",
    export: "export",
  };
  const messageByAction = {
    timeline: "Full timeline opened.",
    nearby: "Nearby windows opened.",
    reminders: "Reminder settings ready.",
    export: "Export studio opened.",
  };
  showToast(messageByAction[action] || "Unlocked section opened.");
  renderReport();
  window.setTimeout(() => {
    document.getElementById(targetByAction[action] || "full-timeline")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 0);
}

function demoActionMessage(action) {
  const copy = {
    "download-image": "Mock image download ready.",
    "export-pdf": "Mock PDF export ready.",
    "preview-pdf": "PDF preview generated.",
    share: "Share link copied.",
    "copy-link": "Demo report link copied.",
    "birth-time": "Birth time editor opened for the next build.",
  };
  return copy[action] || "Demo action completed.";
}

function bindReport() {
  document.querySelectorAll("[data-start-over]").forEach((button) => {
    button.onclick = startOver;
  });

  document.querySelectorAll("[data-anchor]").forEach((button) => {
    button.onclick = () => {
      const target = document.getElementById(button.dataset.anchor);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  });

  const backtestDetails = document.querySelector("#backtest details");
  const backtestSummary = document.querySelector("#backtest summary");
  if (backtestDetails && backtestSummary) {
    backtestSummary.onclick = () => {
      window.setTimeout(() => {
        backtestOpen = backtestDetails.open;
      }, 0);
    };
  }

  document.querySelectorAll("[data-product]").forEach((button) => {
    button.onclick = () => {
      currentProduct = button.dataset.product;
      if (currentProduct === "six") {
        dateCheckGenerated = false;
      }
      if (currentProduct === "check" && dateCheckGenerated) {
        renderReport();
      } else if (currentProduct === "check") {
        dateCheckGenerated = false;
        renderReport();
      } else {
        renderReport();
      }
      scrollToTop();
    };
  });

  document.querySelectorAll("[data-unlock-six]").forEach((button) => {
    button.onclick = unlockSixMonth;
  });

  document.querySelectorAll("[data-unlock-date-check]").forEach((button) => {
    button.onclick = unlockDateCheck;
  });

  document.querySelectorAll("[data-paywall]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      openPaywall(button.dataset.paywall);
    };
  });

  document.querySelectorAll("[data-unlocked-action]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      handleUnlockedAction(button.dataset.unlockedAction);
    };
  });

  document.querySelectorAll("[data-close-paywall]").forEach((button) => {
    button.onclick = closePaywall;
  });

  document.querySelectorAll("[data-close-date-check-paywall]").forEach((button) => {
    button.onclick = closeDateCheckPaywall;
  });

  document.querySelectorAll("[data-expand-selected]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      expandSelectedDateReport();
    };
  });

  document.querySelectorAll("[data-collapse-selected]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      collapseSelectedDateReport();
    };
  });

  document.querySelectorAll("[data-close-mobile-sheet]").forEach((button) => {
    button.onclick = closeMobileSheet;
  });

  document.querySelectorAll("[data-run-check]").forEach((button) => {
    button.onclick = showDateCheckReport;
  });

  document.querySelectorAll("[data-topic]").forEach((button) => {
    button.onclick = () => {
      selectedTopic = button.dataset.topic;
      renderReport();
    };
  });

  document.querySelectorAll("[data-past-window]").forEach((button) => {
    button.onclick = (event) => {
      if (event.target.closest("[data-validate]")) return;
      selectedPastId = Number(button.dataset.pastWindow);
      renderReport();
    };
  });

  document.querySelectorAll("[data-past-day]").forEach((button) => {
    button.onclick = () => {
      const day = pastHeatmap().find((item) => item.iso === button.dataset.pastDay);
      if (day?.windowId) selectedPastId = day.windowId;
      renderReport();
    };
  });

  document.querySelectorAll("[data-validate]").forEach((button) => {
    button.onclick = (event) => {
      event.stopPropagation();
      const window = pastWindows.find((item) => item.id === Number(button.dataset.validate));
      if (window) {
        window.validation = button.dataset.val;
        selectedPastId = window.id;
        backtestOpen = true;
        showToast("Backtest confidence updated.");
        renderReport();
      }
    };
  });

  document.querySelectorAll("[data-forecast-window]").forEach((button) => {
    button.onclick = () => {
      selectForecastWindow(Number(button.dataset.forecastWindow));
      renderReport();
    };
  });

  document.querySelectorAll("[data-forecast-day]").forEach((button) => {
    button.onclick = () => {
      selectForecastDay(button.dataset.forecastDay);
      renderReport();
    };
  });

  document.querySelectorAll("[data-export-type]").forEach((button) => {
    button.onclick = () => {
      exportType = button.dataset.exportType;
      renderReport();
    };
  });

  document.querySelectorAll("[data-export-size]").forEach((button) => {
    button.onclick = () => {
      exportSize = button.dataset.exportSize;
      renderReport();
    };
  });

  document.querySelectorAll("[data-copy-caption]").forEach((button) => {
    button.onclick = async () => {
      const type = effectiveExportType(currentProduct === "check" ? "date-check" : "six");
      const caption = shareCaption(type, shareWindow(currentProduct === "check" ? "date-check" : "six"), currentProduct === "check" ? "date-check" : "six");
      try {
        await navigator.clipboard.writeText(caption);
        button.textContent = "Copied";
      } catch {
        button.textContent = "Copy unavailable";
      }
      window.setTimeout(() => {
        button.textContent = "Copy caption";
      }, 1400);
    };
  });

  document.querySelectorAll("[data-demo-action]").forEach((button) => {
    button.onclick = async (event) => {
      event.stopPropagation();
      const message = demoActionMessage(button.dataset.demoAction);
      if (button.dataset.demoAction === "copy-link" || button.dataset.demoAction === "share") {
        try {
          await navigator.clipboard.writeText(window.location.href);
        } catch {
          // The visible toast is enough for the demo when clipboard permissions are blocked.
        }
      }
      showToast(message);
      renderReport();
    };
  });
}
