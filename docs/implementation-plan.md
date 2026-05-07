# Esther AI Builder Site | 执行计划 v2

## 一、项目目标

搭建一个个人品牌网站，定位为：

> **I just turn the problems I run into into tools.**

网站不是普通作品集，而是一个 **Personal Brand Hub + Demo Lab**。

核心目标：

1. 展示 Esther 作为 non-coder AI product builder 的个人叙事
2. 展示已经做出的产品、demo 和实验
3. 为后续 newsletter、产品订阅、合作、求职、投资留下入口
4. 第一版先搭静态框架，不接复杂后端

---

## 二、推荐技术方案

```bash
Next.js + TypeScript + Tailwind CSS
```

原因：

- 适合做个人站和 Demo Lab
- 后续可以方便加 blog、newsletter、产品页
- 部署到 Vercel / Cloudflare Pages 都比较方便

---

## 三、建议项目目录

```bash
<project-root>
```

```bash
esther-ai-builder-site/
  app/
    page.tsx
    lab/
      page.tsx
    about/
      page.tsx
    layout.tsx
    globals.css
    not-found.tsx        # optional nice-to-have

  components/
    Header.tsx
    Hero.tsx
    ProductMap.tsx
    CurrentlyBuilding.tsx
    Lab.tsx
    LabCard.tsx
    Manifesto.tsx
    SubscribeCTA.tsx
    AboutShort.tsx
    WorkWithMe.tsx
    Footer.tsx

  data/
    site.ts
    lab.ts
    links.ts

  public/
    demos/
      exact-transit/
      simuser-loop/
      orchestrator-telemetry/
    images/
      lab/
      avatar/
```

Do not create additional product data files in v0.1.

---

## 四、本地 demo 文件地址

请 Codex 先读取这些本地文件，理解它们是什么 demo。

### 1. SimUser Loop

产品说明：

> SimUser Loop is a feedback plugin that uses AI to simulate user decisions, helping builders reproduce realistic user experience, collect structured feedback, and identify what to improve next.

本地地址：

```bash
<local-tailorcv-demo>/index.html
```

网站中状态：`Functional Prototype`

建议 slug：`simuser-loop`

### 2. Exact Transit

产品说明：

> Exact Transit turns ephemeris calculations into a transparent astrology timeline — showing the aspects, orbs, scores, and suggested actions behind every relationship and career inflection point.

本地地址：

```bash
<local-exact-transit-demo>/index.html
```

网站中状态：`Experiment`

建议 slug：`exact-transit`

### 3. Orchestrator + Telemetry Bridge

产品说明：

> Orchestrator + Telemetry Bridge is a local-first AI engineering automation product. It uses a visual workflow to connect requirements, implementation, on-device testing, bug fixing, and delivery notes into one closed loop.

本地地址：

```bash
<local-workflow-demo>/index.html
```

网站中状态：`Developer Prototype`

建议 slug：`orchestrator-telemetry`

### 4. TailorCV

产品说明：

> TailorCV matches your real experience against a target job description and generates a focused, role-specific resume. Live on iOS.

网站中状态：`Live Product`

建议 slug：`tailorcv`

备注：暂时不需要搬本地 demo。如果有 App Store 链接或官网链接，后续接入。

### 5. JustPhoto

产品说明：

> JustPhoto is a photo coaching camera with emotional support. While you shoot, it tells you how to stand, turn, and move — like a photographer talking through the lens.

网站中状态：`Building`

建议 slug：`justphoto`

备注：暂时先做产品卡片，不需要可点击 demo。

---

## 五、Demo 接入策略

第一版不要重构 demo。

### 第一阶段：复制静态 demo

把已有的静态 demo 复制到网站项目的 `public/demos/` 下：

```bash
public/demos/exact-transit/index.html
public/demos/simuser-loop/index.html
public/demos/orchestrator-telemetry/index.html
```

注意：

1. 如果原 demo 有 CSS、JS、图片等依赖，也要一起复制
2. 保持相对路径不变
3. 不要先改 demo 内部逻辑
4. 网站卡片上的 `Try Demo` 链接分别指向：
   - `/demos/exact-transit/index.html`
   - `/demos/simuser-loop/index.html`
   - `/demos/orchestrator-telemetry/index.html`

### Static Demo Import Rules

For each existing demo:

1. Copy the full demo folder when possible, not only `index.html`.
2. Preserve relative paths.
3. If the demo is a single HTML file, place it as `index.html` under the target folder.
4. If assets are referenced by relative paths, copy those assets into the same public demo directory.
5. After copying, verify each demo opens from the Next.js dev server, not from `file://`.

Do not leave `file://` links in the final site.

---

## 六、首页结构

```text
1. Header (sticky)
2. Hero
3. Product Map
4. Currently Building
5. The Lab
6. Manifesto
7. Subscribe CTA
8. About (short)
9. Work With Me
10. Footer
```

结构调整说明：

- Manifesto 后直接跟 Subscribe CTA，接住情绪
- About 短版放在 Subscribe 之后，作为理性决策位
- Work With Me 放在最后，留给真正想合作的人
- Lab 和 Products 合并成一个 section，内部用 LIVE / DEMO / NEXT 分组

---

## 七、Homepage Section Length Rules

The homepage has multiple sections, but each section must stay concise.

Do not make the homepage feel like a long essay.
Do not paste the full long-form About story onto the homepage.
Do not make Manifesto occupy too much vertical space.

Each homepage section should be short, scannable, and visually distinct.

Rules:

- Hero: strong and memorable, but not overcrowded.
- Product Map: compact, preferably visual or card-based.
- Currently Building: short weekly-status style, not a diary.
- The Lab: card-based, not paragraph-heavy.
- Manifesto: use a concise excerpt on homepage.
- About: homepage version must be short.
- Work With Me: low-key, not a job-seeking page.
- Subscribe CTA: simple and warm.

Rule of thumb:

```text
Homepage = clarity and proof.
About page = story and personality.
Manifesto = belief.
The Lab = evidence.
Footer = warmth.
```

Long personal story belongs on `/about`, not the homepage.

---

## 八、Hero Copy

Use this copy exactly unless explicitly requested otherwise:

```text
Esther.

I just turn the problems I run into into tools.

Job applications I couldn't get right → a resume AI.
Photos I couldn't pose for → a photography app.
Astrology I couldn't decode → a transit timeline tool.
User feedback I couldn't get → a simulation plugin.
Engineering chains that kept breaking → a workflow orchestrator.

Five products. Different domains. Same method.

I'm a non-coder learning by shipping —
building in public, occasionally panicking,
but always shipping.

[Subscribe to the Build]   [Explore the Lab →]

Open to AI product collaborations. → Get in touch
```

CTA：

```text
Subscribe to the Build  (主按钮)
Explore the Lab →       (次按钮)
Get in touch            (文字链接)
```

---

## 九、Product Map

Product Map 放在 Hero 之后，用紧凑视觉 section 证明 “Same method, different problems”。

```text
Same method, different problems.

TailorCV
Problem → Job applications are hard to tailor for each role.
Tool    → A resume AI that matches your experience to the JD.

JustPhoto
Problem → I never know how to pose or direct a photo.
Tool    → A camera that coaches you through the shot.

Exact Transit
Problem → Astrology reports are vague and hard to decode.
Tool    → A transparent timeline of aspects, orbs, and timing.

SimUser Loop
Problem → Early products don't have enough real users to learn from.
Tool    → An AI feedback simulator that fills the gap.

Orchestrator + Telemetry Bridge
Problem → AI coding workflows keep breaking between planning, code, and test.
Tool    → A local loop that holds the whole chain together.
```

视觉建议：紧凑卡片 / 表格 / 双列 grid 都可以。

关键是 `Problem → Tool` 两行结构必须保留，这是文档的核心节奏。

---

## 十、Content Data Model

Create a single source of truth:

```text
/data/site.ts
/data/lab.ts
/data/links.ts
```

`/data/lab.ts` is the only source of truth for all Lab items in v0.1.

Do not create:

- `data/demos.ts`
- `data/products.ts`

All products, demos, prototypes, and experiments must live in `/data/lab.ts`.

The site should not split item data across multiple files in v0.1.

Each lab item should include:

```text
id
title
tagline
description
category
group
status
type
problem
tool
href
ctaLabel
isFeatured
isExternal
screenshot
```

Allowed group values:

```text
LIVE
DEMO
NEXT
```

Allowed status values:

```text
Live Product
Building
Experiment
Functional Prototype
Developer Prototype
Coming Soon
```

Required grouping:

```text
TailorCV:
group = LIVE
status = Live Product
isFeatured = true

JustPhoto:
group = NEXT
status = Building
isFeatured = true

Exact Transit:
group = DEMO
status = Experiment

SimUser Loop:
group = DEMO
status = Functional Prototype

Orchestrator + Telemetry Bridge:
group = DEMO
status = Developer Prototype
```

---

## 十一、The Lab Card Copy

All Lab cards should be generated from `/data/lab.ts`.

### TailorCV

```ts
{
  id: "tailorcv",
  title: "TailorCV",
  tagline: "A resume AI for role-specific self-presentation.",
  status: "Live Product",
  group: "LIVE",
  type: "Product",
  category: "Career AI",
  problem: "Job applications are hard to tailor for each role.",
  tool: "An AI that matches your real experience to the JD and rewrites your resume to fit.",
  description: "Started because I couldn't get my own resume to match the jobs I wanted. Live on the App Store.",
  href: null,
  ctaLabel: "Coming soon",
  isFeatured: true,
  isExternal: true,
  screenshot: "/images/lab/tailorcv.png",
}
```

If App Store or official site link is missing, use `href: null` for now.

### JustPhoto

```ts
{
  id: "justphoto",
  title: "JustPhoto",
  tagline: "A camera that coaches you through the shot.",
  status: "Building",
  group: "NEXT",
  type: "Product",
  category: "Camera / Self-expression",
  problem: "I never know how to pose or direct a photo.",
  tool: "A camera that coaches you through the shot — how to stand, turn, and move — in real time.",
  description: "Less judging, more guiding. The vibe is closer to a friend behind the camera than an AI critic.",
  href: null,
  ctaLabel: "Coming soon",
  isFeatured: true,
  isExternal: false,
  screenshot: "/images/lab/justphoto.png",
}
```

If demo link is missing, use `href: null` for now.

### Exact Transit

```ts
{
  id: "exact-transit",
  title: "Exact Transit",
  tagline: "A transparent transit timeline for self-reflection.",
  status: "Experiment",
  group: "DEMO",
  type: "Demo",
  category: "Astrology / Timeline",
  problem: "Astrology reports are vague and hard to decode.",
  tool: "A transparent timeline that shows the aspects, orbs, and scores behind each date.",
  description: "Built to make timing signals readable instead of mystical.",
  href: "/demos/exact-transit/index.html",
  ctaLabel: "Try the demo →",
  isFeatured: false,
  isExternal: false,
  screenshot: "/images/lab/exact-transit.png",
}
```

### SimUser Loop

```ts
{
  id: "simuser-loop",
  title: "SimUser Loop",
  tagline: "AI feedback simulation for early product builders.",
  status: "Functional Prototype",
  group: "DEMO",
  type: "Prototype",
  category: "Product Feedback",
  problem: "Early products don't have enough real users to learn from.",
  tool: "An AI feedback simulator that reproduces realistic user decisions and returns structured signals.",
  description: "For builders who need to learn before they have traction.",
  href: "/demos/simuser-loop/index.html",
  ctaLabel: "Try the demo →",
  isFeatured: false,
  isExternal: false,
  screenshot: "/images/lab/simuser-loop.png",
}
```

### Orchestrator + Telemetry Bridge

```ts
{
  id: "orchestrator-telemetry",
  title: "Orchestrator + Telemetry Bridge",
  tagline: "A visible loop for fragmented AI coding workflows.",
  status: "Developer Prototype",
  group: "DEMO",
  type: "Prototype",
  category: "AI Engineering Workflow",
  problem: "AI coding workflows keep breaking between planning, code, test, and fix.",
  tool: "A local visual loop that holds requirements, implementation, on-device testing, and delivery in one place.",
  description: "Built for the messy reality of shipping with AI agents.",
  href: "/demos/orchestrator-telemetry/index.html",
  ctaLabel: "Try the demo →",
  isFeatured: false,
  isExternal: false,
  screenshot: "/images/lab/orchestrator.png",
}
```

### What's Next?

```ts
{
  id: "next",
  title: "What's next?",
  tagline: "The next small tool starts from the next thing that bothers me.",
  status: "Coming Soon",
  group: "NEXT",
  type: "Placeholder",
  category: "—",
  problem: "I keep a list of things I run into.",
  tool: "The next one will come from there.",
  description: "",
  href: "#subscribe",
  ctaLabel: "Subscribe to find out →",
  isFeatured: false,
  isExternal: false,
  screenshot: null,
}
```

### Missing Link Rules

No card should use raw `"#"`.

If a real link is missing, use:

```ts
href: null
ctaLabel: "Coming soon"
```

UI behavior:

- If `href` is `null`, render a disabled `Coming soon` button or non-clickable label.
- Do not link to `"#"`.
- Do not create broken links.

---

## 十二、Screenshots

Each lab item should support an optional screenshot.

Store screenshots in:

```text
/public/images/lab/
```

Suggested files:

- `tailorcv.png`
- `justphoto.png`
- `exact-transit.png`
- `simuser-loop.png`
- `orchestrator.png`

If a screenshot is missing, render a clean text-only card instead of a broken image.

Do not use random stock images.
Do not use AI-generated decorative images.

---

## 十三、Currently Building Copy

每周手动更新一次。第一版：

```text
Currently Building

Week of [日期]

This week:
→ Shipping the web demo for Just Photo.
→ Refining TailorCV's match score after first user feedback.
→ Writing the first essay for this site.

Ongoing: turning every real friction into a small public tool.
```

写作规则：

- 永远要有至少一个带具体动作的 `this week` 项
- 用箭头 `→` 表示动作，不要用 bullet `•`
- 末尾的 `Ongoing` 一句保留，这是接住主线的钩子

---

## 十四、Manifesto Copy

Use this copy exactly unless explicitly requested otherwise.

放在 Manifesto section，居中对齐，留白宽松。

```text
What I'm building toward

Most of my products started the same way.

I'd run into a problem.
Get frustrated.
Try to fix it with what already exists.
Fail.
Then quietly think:
someone should make a tool for this.

Eventually I realized —
that someone could be me.

I'm not a developer.
I don't have a CS background.
But I have AI now,
and I have problems —
my own and other people's.

That turns out to be enough.
```

---

## 十五、Subscribe CTA Copy

紧跟在 Manifesto 之后。

If newsletter backend is connected and there is a real privacy policy:

```text
Stay in the loop.

One email every Sunday.
What I built. What broke. What I'm thinking about.

[ your@email.com ]  [ Subscribe ]

No spam. Just a human writing to humans.
```

If Beehiiv or another newsletter backend is not connected, show:

```text
Newsletter coming soon — say hi by email for now.
[ hello@estherbuilds.com ]
```

Do not fake email collection.

---

## 十六、Homepage About Copy

Use this copy exactly unless explicitly requested otherwise.

```text
About Esther

I'm based between China, Australia, and Thailand —
depending on what visa I'm on.

Most of what I build started as something I personally got stuck on.
A resume I couldn't tailor. A photo I couldn't pose for.
An astrology report I couldn't decode.

The pattern keeps repeating, so I keep building.

→ Read the longer version
```

关键设计：

- 不重复 Hero 的身份陈述，直接讲 “你这个人” 的具象信息
- 地理流动性是稀缺的差异化标签之一
- `Read the longer version` 链接到 `/about` 完整版

---

## 十七、About Page Long Version

Use this copy exactly unless explicitly requested otherwise.

```text
About Esther

I'm Esther — a non-coder builder from China,
learning product, code, and distribution by shipping real things.

I used to think building software was something only engineers did.
Then AI changed the distance between having a problem
and making a tool for it.

So I started building. Mostly from things that personally annoyed me —
resumes I couldn't tailor, photos I couldn't pose for,
astrology reports I couldn't decode, AI workflows that kept breaking.

I'm not trying to build a clean startup arc.
I'm just building from things that actually bothered me.

Some of these turned into products.
Some are still rough demos.
A few will probably never go anywhere —
and that's fine, because each one taught me how to take
something messy and make it slightly more usable.

This site is where I keep the receipts:
the products that worked,
the demos that are still rough,
the ideas I'm still testing,
and the notes I'm collecting along the way.
```

---

## 十八、My Builder Principles

可选，放在 About 页面。

```text
How I build

1. Start from real friction.
   I don't begin with market maps. I begin with something
   that bothered me enough to make a tool for it.

2. Make the first version visible.
   A working demo teaches me more than a perfect idea.

3. Keep the human feeling.
   The best AI tools shouldn't feel like machines judging people.
   They should feel like someone helping you move forward.

4. Ship before it feels ready.
   That's the whole point. Confusion turns into clarity faster
   when something is already in front of you.
```

---

## 十九、Work With Me Copy

Use this copy exactly unless explicitly requested otherwise.

```text
Work with me

I'm open to thoughtful conversations around:

→ AI product collaborations
→ early-stage product experiments
→ practical AI workflows
→ career tools
→ photography and self-expression products

If something here resonates, say hi.

[ Say hi ]  →  mailto:hello@estherbuilds.com
```

---

## 二十、Footer Microcopy Options

Use this footer microcopy:

```text
Made by Esther, with AI, tomatoes, and too many open tabs.

[X]  [LinkedIn]  [Email]  [App Store]

Last updated: [YYYY-MM-DD]
© 2026 Esther · estherbuilds.com
```

关键设计：

- `Last updated` 时间戳每周更新一次，这是网站“还活着”的最便宜信号
- Footer microcopy 那一句是网站幽默感的唯一出口，值得保留
- 不要加版权声明以外的法律文字，会显得太正式

---

## 二十一、404 Page

A simple custom 404 page with tomato-flavored microcopy is nice to have, but it must not slow down the homepage and Lab implementation.

Priority order:

1. Homepage skeleton
2. `/data/lab.ts` data layer
3. Static demo import
4. Demo links working from Next.js dev server
5. Responsive layout
6. Build passing
7. SEO metadata
8. Simple 404 page, only if it does not slow down the main implementation

Suggested 404 tone:

- warm
- slightly playful
- tomato identity can appear subtly

Suggested copy:

```text
🍅

Looks like this page got squished.

Probably my fault. While I figure out where it went,
here are some real things:

→ The Lab (5 products in different stages)
→ The Manifesto (why I'm building these)
→ Latest update (what I'm working on this week)

— Esther
```

Do not spend time over-designing the 404 page in v0.1.

---

## 二十二、视觉风格

### 配色方案

推荐方案 A：暖色调 + 番茄红

```text
背景:    #FAF8F5  (off-white, 温暖米色)
正文:    #1A1A1A  (近黑)
强调色:  #C84B31  (砖红 / 番茄红)
辅助色:  #F4D8C0  (浅杏)
分隔线:  #E5DFD6  (浅灰米)
```

### 字体

```text
标题:    Fraunces (serif)
正文:    Inter (sans-serif)
代码:    JetBrains Mono (monospace)
```

### 间距系统

```text
section 之间:      160px (桌面) / 80px (移动)
section 内 padding: 80px (桌面) / 48px (移动)
段落之间:          24px
内容最大宽度:      720px (文字主区) / 1080px (Lab 网格)
```

### 风格关键词

```text
warm, personal, clean, builder-like
not corporate, not too SaaS
not AI 紫色渐变, not 过度科技感, not 求职简历感
```

---

## 二十三、声音风格

写作应该听起来：

- honest
- specific
- warm
- lightly funny
- clear
- human
- not over-polished
- not corporate
- not desperate
- not trying too hard to sound like Silicon Valley

### 避免的词组

```text
× building the future of AI
× revolutionizing productivity
× AI-native platform
× world-class innovation
× next-generation workflow
× empowering everyone with AI
```

### 偏好的句式

```text
✓ I made this because I needed it.
✓ This started as a problem I couldn't stop thinking about.
✓ A working demo teaches me more than a perfect idea.
✓ I'm still learning, but I keep shipping.
✓ Some of these are products. Some are experiments. All started from real friction.
```

### 三个 “AI 味” 陷阱

写作时主动避开：

1. `Some...Some...All...` 排比用超过 1 次。一次是金句，两次是模板。
2. `willing to` / `trying to` 这类犹豫动词。直接用动词本身。
3. `confusion` / `friction in daily life` 这类抽象名词。替换成 `mess` / `things that bothered me`。

---

## 二十四、产品定位约束

给 AI 写文案的 guardrail：

每个产品的描述都不能停在 “这是 X 的 AI 工具”，必须强调情感价值和用户感受。

| 产品 | 不要这样写 | 这样写 |
| --- | --- | --- |
| TailorCV | “AI resume generator” | “Helps people translate messy experience into role-specific self-presentation” |
| JustPhoto | “AI camera app” | “A photography guide with emotional support — like a photographer gently telling you how to stand and move” |
| Exact Transit | “Astrology / fortune telling” | “Makes complex timing signals more transparent and readable” |
| SimUser Loop | “Fake users” | “A product feedback simulator for early builders who need structured signals before real users” |
| Orchestrator | “AI automation” | “Connects fragmented AI coding workflows into a visible loop” |

---

## 二十五、Exact Transit Positioning Boundary

Exact Transit should be framed as a reflective timeline tool, not a deterministic prediction tool.

Avoid claims like:

- predict your future
- accurately forecast your destiny
- guarantee emotional or career outcomes

Use language like:

- reflective timeline
- transparent transit report
- aspects, orbs, scores, and suggestions
- a tool for self-reflection and timing awareness

---

## 二十六、关于 Esther 这个人

给 AI 的 IP 框架。

Frame her as:

- a product-minded builder
- a heavy AI user learning by shipping
- someone who starts from real friction
- someone who cares about human feeling, not just automation

Do NOT frame her as:

- a corporate AI founder
- a traditional software engineer
- a desperate job seeker
- a generic indie hacker

Useful personal details:

- non-coder background
- learning by shipping
- building in public
- real-life problems as product sources
- 番茄 as subtle visual identity
- `occasionally panicking, but always shipping` as signature line
- 地理流动性：中国 / 澳洲 / 清迈
- 攀岩 / 旅行 / 一只叫小米的猫，只在 About 长版用

不要做的事：

- 暴露财务焦虑或求职紧迫感
- 用夸张的创始人语言
- 谈 “AI 的未来”
- 把网站做成简历

---

## 二十七、Personal Story Arc

```text
1. I used to think building software was something only engineers did.

2. Then AI changed the distance between having a problem
   and making a tool for it.

3. So I started building. Mostly from things that personally annoyed me.

4. A few of those became real products. Most stayed experiments.
   I kept building anyway.

5. This site is where I keep the receipts.
```

---

## 二十八、Content Placement Rules

The Personal Narrative Notes are source material, not all visible page copy.

Do not put every personal detail on the homepage.

Homepage should include only:

- one strong identity line
- Hero problem -> tool list
- Currently Building
- The Lab
- Same Method, Different Problems / Product Map
- short Manifesto excerpt
- short About
- Work With Me
- Subscribe CTA

About page can include:

- longer personal story
- non-coder background
- learning by shipping
- builder principles
- why these products feel connected
- tomato identity, lightly

Footer / microcopy can include:

- occasionally panicking, but always shipping
- small tools from real problems
- learning by shipping
- tomato identity, subtly

Do not overuse these phrases:

- non-coder
- from China
- AI
- real friction
- occasionally panicking

Each phrase should appear naturally, not repeatedly.

---

## 二十九、Newsletter 第一版

If Beehiiv, ConvertKit, Resend Audiences, Mailchimp, or another real newsletter backend is connected and a privacy policy exists, collect a waitlist email.

If no newsletter backend and privacy policy are connected, show:

```text
Newsletter coming soon — say hi by email for now.
[ hello@estherbuilds.com ]
```

Do not let the newsletter UI look broken.
Do not collect emails unless the backend and privacy policy are actually ready.

---

## 三十、Privacy Note

For v0.1, all demos are static or local frontend demos.

Do not collect user input.
Do not store resumes.
Do not store birth data.
Do not store uploaded files.
Do not collect emails unless a real backend and privacy policy are added later.

If newsletter backend is not connected, show:

```text
Newsletter coming soon — say hi by email for now.
```

---

## 三十一、Navigation

Use simple anchor navigation:

- Lab → `#lab`
- Manifesto → `#manifesto`
- Work With Me → `#work-with-me`
- Subscribe → `#subscribe`

Header should be sticky.

On mobile, keep the header minimal:

- Esther
- Subscribe

---

## 三十二、SEO and Social Preview

Add page metadata:

```text
Title:        Esther — AI Builder Lab
Description: I just turn the problems I run into into tools.
             A public lab of AI products, demos, and experiments
             built by a non-coder learning by shipping.
```

Open Graph:

- `og:title`
- `og:description`
- `og:image` → `/og-image.png`
- `og:url`
- `twitter:card = summary_large_image`

Prepare:

- `/public/og-image.png` (1200x630, warm bg, tomato accent)
- `/public/favicon.ico` or tomato favicon

---

## 三十三、Copy Block Reference Rules

Use the provided named copy blocks exactly:

- Hero copy
- Manifesto copy
- Homepage About copy
- About Page Long Version
- Work With Me copy
- Subscribe CTA copy
- Footer microcopy options

Do not rewrite these copy blocks unless explicitly requested.

Do not rely on section numbers to locate copy, because section numbers may change during editing.

Use block names instead of numeric section references.

---

## 三十四、Direction Lock

Do not reinterpret the brand direction.

The direction is already locked:

```text
Personal Brand Hub + AI Builder Lab.
```

Core line:

```text
I just turn the problems I run into into tools.
```

Do not replace this with:

- AI portfolio
- startup landing page
- resume website
- SaaS product directory
- indie hacker dashboard
- personal blog only

The goal of v0.1 is execution, not repositioning.

---

## 三十五、Build Order

Implement v0.1 in this order:

1. Data layer
   - `/data/site.ts`
   - `/data/lab.ts`
   - `/data/links.ts`

2. Static demo import
   - copy demo files into `/public/demos`
   - verify demo links work locally from Next.js dev server
   - do not use `file://` links

3. Homepage skeleton
   - Header
   - Hero
   - Product Map / Same Method, Different Problems
   - Currently Building
   - The Lab
   - Manifesto
   - Subscribe CTA
   - Short About
   - Work With Me
   - Footer

4. Responsive layout
   - desktop first
   - then mobile polish
   - no horizontal overflow

5. SEO and metadata
   - title
   - description
   - OG image placeholder
   - favicon or tomato favicon

6. Final QA
   - `npm run dev` works
   - `npm run build` passes
   - no `file://` links
   - no raw `#`
   - no broken demo links
   - no fake metrics
   - missing links show `Coming soon`

---

## 三十六、Codex 第一条执行指令

```text
请在 <project-root> 新建一个 Next.js + TypeScript + Tailwind CSS 个人网站项目。

目标是搭建一个 Personal Brand Hub + Demo Lab，主题是：
"I just turn the problems I run into into tools."

请先完成网站框架，不要重构已有 demo，只把已有静态 demo 复制到 public/demos 下，并在 Lab 卡片中链接它们。

需要接入的本地 demo 文件：

1. SimUser Loop
   <local-tailorcv-demo>/index.html
   →  public/demos/simuser-loop/index.html

2. Exact Transit
   <local-exact-transit-demo>/index.html
   →  public/demos/exact-transit/index.html

3. Orchestrator + Telemetry Bridge
   <local-workflow-demo>/index.html
   →  public/demos/orchestrator-telemetry/index.html

如果这些 demo 有 CSS、JS、图片等相对路径依赖，请一起复制相关资源，保持 demo 能独立打开。

首页结构：
1. Header (sticky)
2. Hero
3. Product Map
4. Currently Building
5. The Lab (with LIVE / DEMO / NEXT groups)
6. Manifesto
7. Subscribe CTA
8. About (short version)
9. Work With Me
10. Footer

请创建 data/lab.ts，把 5 个项目和 1 个 NEXT placeholder 做成数据驱动卡片：
- TailorCV: LIVE / Live Product / featured
- JustPhoto: NEXT / Building / featured
- Exact Transit: DEMO / Experiment
- SimUser Loop: DEMO / Functional Prototype
- Orchestrator + Telemetry Bridge: DEMO / Developer Prototype
- What's next?: NEXT / Coming Soon

约束：

- 最终页面不要出现 file:// 链接
- Demo 链接统一使用 /demos/.../index.html
- 视觉风格: warm, clean, personal, builder-like
  - 不要 corporate
  - 不要 AI 紫色渐变
  - 不要假分析数字 / 假订阅数
- 配色: off-white 背景 + 近黑正文 + 番茄红强调色
- 字体: Fraunces (serif 标题) + Inter (sans-serif 正文)
- 第一版先保证: 结构、文案、可点击 demo、移动端可读

Use the provided named copy blocks exactly:
- Hero copy
- Manifesto copy
- Homepage About copy
- About Page Long Version
- Work With Me copy
- Subscribe CTA copy
- Footer microcopy options

Do not rewrite these copy blocks unless explicitly requested.
Do not rely on section numbers to locate copy, because section numbers may change during editing.
Use block names instead of numeric section references.
```

---

## 三十七、v0.1 Implementation Guardrails

This site is a static Personal Brand Hub + AI Builder Lab.
v0.1 should focus on structure, clarity, demo access, and responsive layout.

### Must do

- Build all 10 homepage sections
- Build The Lab with LIVE / DEMO / NEXT groups
- Make TailorCV the featured LIVE card
- Make JustPhoto a featured NEXT card
- Copy existing static demos into `public/demos`
- Make demo links work from the local Next.js server
- Prepare placeholders for newsletter, App Store, email, and social links
- Make the site mobile-readable
- Add `Last updated` timestamp in footer

### Must not do

- No auth
- No payment
- No real AI API integration
- No dashboard
- No CMS yet
- Do not rebuild existing demos unless required to fix broken asset paths
- No fake analytics / fake subscriber count
- No purple AI gradient
- No corporate SaaS look
- Do not collect user data in v0.1

### Nice to have

- Simple custom 404 page with tomato-flavored microcopy

The 404 page must not slow down the homepage and Lab implementation.

---

## 三十八、第一版验收标准

第一版完成后，必须满足：

### 内容

- [ ] 首页 10 秒内能看懂 Esther 是做什么的
- [ ] Hero 的 `Five products. Different domains. Same method.` 明显可见
- [ ] Homepage sections are concise and scannable
- [ ] Long personal story is placed on `/about`, not homepage
- [ ] Copy blocks are referenced by name, not section number
- [ ] Lab section 显示 5 个产品 + 1 个 NEXT 卡片
- [ ] The Lab renders three groups: LIVE, DEMO, NEXT
- [ ] TailorCV 显示为 Live Product，视觉上比其他卡片更突出
- [ ] JustPhoto 显示为 Building，并放在 NEXT 组
- [ ] 三个本地 demo 能从网站点击打开
  - [ ] `/demos/exact-transit/index.html`
  - [ ] `/demos/simuser-loop/index.html`
  - [ ] `/demos/orchestrator-telemetry/index.html`
- [ ] Manifesto 后立刻是 Subscribe CTA
- [ ] About 短版不重复 Hero 内容
- [ ] Footer 包含 `Last updated` 时间戳
- [ ] The site still feels like Esther’s public builder lab, not a generic AI tool directory

### 视觉

- [ ] 配色用暖色系 + 番茄红强调色
- [ ] 标题字体是 serif (Fraunces)
- [ ] 没有紫色 AI 渐变
- [ ] 没有 corporate SaaS 感
- [ ] 移动端可读不溢出

### 技术

- [ ] `/data/lab.ts` is the only source of truth for Lab items
- [ ] `data/demos.ts` and `data/products.ts` are not created in v0.1
- [ ] 所有 demo 链接用 `/demos/...` 路径，没有 `file://` 链接
- [ ] No card uses raw `"#"`
- [ ] Missing links render `Coming soon`
- [ ] Header 是 sticky
- [ ] 所有锚点 (`#lab`, `#manifesto`, `#subscribe`, `#work-with-me`) 滚动正确
- [ ] 404 page is optional and must not slow down core implementation
- [ ] `npm run build` passes
- [ ] 没有假数据 / 假订阅数 / 假分析数字
- [ ] No user data is collected in v0.1
- [ ] Exact Transit does not use deterministic prediction language

### 文案

- [ ] 通读全站，没有出现超过 1 次的 `Some...Some...All...` 排比
- [ ] 没有 `willing to` / `trying to` 等犹豫动词，除非是真实意思
- [ ] 没有 `the future of AI` / `revolutionizing` 等空话词组
- [ ] Footer microcopy 是 `Made by Esther, with AI, tomatoes, and too many open tabs.`

---

## Change Summary

- Updated the plan to the locked v2 direction: Personal Brand Hub + AI Builder Lab with the core line “I just turn the problems I run into into tools.”
- Replaced section-number-based copy instructions with stable named copy block references.
- Added Homepage Section Length Rules, Content Placement Rules, Build Order, Direction Lock, Privacy Note, and Exact Transit positioning boundaries.
- Unified the data model around `/data/site.ts`, `/data/lab.ts`, and `/data/links.ts`, with `/data/lab.ts` as the only Lab source of truth.
- Removed `data/demos.ts` and `data/products.ts` from the v0.1 plan.
- Added LIVE / DEMO / NEXT grouping rules, required statuses, missing-link behavior, and the rule that no card should use raw `"#"`.
- Downgraded the custom tomato 404 page from Must do to Nice to have and added the implementation priority order.
- Updated the final acceptance checklist with concise homepage, data-source, build, privacy, link, and positioning checks.
