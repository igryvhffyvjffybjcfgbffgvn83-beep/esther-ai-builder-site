"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Hold = [label: string, x: number, y: number, radius: number, note: string];

type Route = {
  id: string;
  no: number;
  product: string;
  color: string;
  route: string;
  holds: Hold[];
};

type Marker = {
  hold: Hold;
  route: Route;
  index: number;
};

const STEP_MS = 260;
const WALL_ASPECT = 1024 / 1536;

const routes: Route[] = [
  {
    id: "tailorcv",
    no: 1,
    product: "TailorCV",
    color: "#0B7FEA",
    route: "Blue Web Traverse",
    holds: [
      ["Next.js", 13.1, 87.6, 3.0, "App Router / 页面骨架"],
      ["React", 20.8, 80.1, 2.7, "交互状态与评分结果"],
      ["TypeScript", 23.5, 73.8, 3.0, "类型约束 schema"],
      ["Tailwind CSS", 18.1, 63.9, 2.8, "Web UI 样式"],
      ["Prisma", 31.0, 58.7, 2.8, "数据库访问层"],
      ["PostgreSQL", 21.2, 53.1, 2.6, "核心数据存储"],
      ["NextAuth", 19.0, 44.5, 2.8, "OAuth / Session"],
      ["PDF/DOCX", 23.2, 37.0, 3.0, "简历解析"],
      ["Playwright", 17.5, 33.1, 3.0, "E2E 自动化测试"],
      ["Sentry", 12.1, 24.5, 3.6, "生产错误追踪"],
    ],
  },
  {
    id: "job-radar",
    no: 2,
    product: "Job Radar",
    color: "#F5C400",
    route: "Yellow Mobile Line",
    holds: [
      ["Electron", 26.8, 93.1, 2.9, "桌面客户端壳层"],
      ["React", 30.5, 86.6, 2.8, "岗位列表与评分 UI"],
      ["TypeScript", 36.3, 81.8, 3.0, "端到端类型约束"],
      ["Node.js", 34.4, 73.4, 3.0, "本地任务调度"],
      ["LLM API", 38.4, 69.2, 2.9, "岗位匹配与材料生成"],
      ["SQLite", 38.8, 48.9, 2.7, "本地缓存"],
      ["Playwright", 35.4, 34.6, 2.8, "招聘站点自动化"],
      ["JSON Schema", 31.1, 30.6, 2.6, "结构化输出校验"],
      ["Cloudflare", 33.5, 17.9, 3.0, "边缘 API / 路由"],
    ],
  },
  {
    id: "justphoto",
    no: 3,
    product: "JustPhoto",
    color: "#E13A24",
    route: "Red Overhang",
    holds: [
      ["SwiftUI", 38.9, 89.0, 3.0, "相机控制层 UI"],
      ["AVFoundation", 47.7, 84.6, 2.8, "实时相机预览"],
      ["Vision", 46.7, 77.6, 2.8, "姿态 / 人脸检测"],
      ["CoreImage", 52.1, 73.8, 2.9, "影像处理增强"],
      ["PhotosUI", 49.6, 64.6, 3.0, "系统相册交互"],
      ["Photos", 51.5, 53.3, 2.8, "相册保存 / 权限"],
      ["GRDB", 45.5, 49.0, 2.9, "Session 数据管理"],
      ["SQLite", 47.2, 34.8, 2.9, "本地持久化"],
      ["XCTest", 45.5, 21.6, 2.8, "相机状态机测试"],
      ["PoseSpec", 44.5, 12.5, 5.6, "姿态指标引擎"],
    ],
  },
  {
    id: "builder-site",
    no: 4,
    product: "Builder Site",
    color: "#6FBD19",
    route: "Green Launch Line",
    holds: [
      ["Next.js 16", 62.4, 85.6, 2.7, "路由 / 静态生成"],
      ["React 19", 61.1, 78.3, 2.8, "互动 Demo 状态"],
      ["TypeScript", 63.1, 68.1, 2.8, "组件 props 约束"],
      ["Tailwind 4", 57.9, 59.6, 2.8, "统一视觉系统"],
      ["Static Export", 60.2, 51.0, 3.2, "可部署静态站"],
      ["Interactive UI", 58.0, 47.2, 6.5, "访客直接体验产品"],
      ["SEO", 59.6, 36.7, 2.8, "结构化索引优化"],
      ["i18n", 64.4, 31.6, 2.7, "中英文页面结构"],
      ["Content Sys", 63.9, 15.8, 2.8, "产品 / 文章沉淀"],
    ],
  },
  {
    id: "promo",
    no: 5,
    product: "Promo Pipeline",
    color: "#F5820B",
    route: "Orange Render Dyno",
    holds: [
      ["Python", 70.4, 93.6, 2.8, "批量脚本 / 入口"],
      ["FFmpeg", 73.0, 85.7, 3.0, "视频编码拼接"],
      ["HTML Video", 73.1, 67.1, 3.0, "画面结构定义"],
      ["HyperFrames", 72.8, 59.8, 2.9, "帧动画合成"],
      ["JSON Schema", 70.9, 53.9, 2.9, "模板参数校验"],
      ["Pillow", 70.9, 42.8, 2.8, "图片裁切 / 海报"],
      ["Render QA", 76.3, 26.1, 2.8, "批量生成多平台版"],
      ["Automation", 79.0, 11.4, 3.6, "跑批 / 导出命名"],
    ],
  },
  {
    id: "workflow",
    no: 6,
    product: "Workflow",
    color: "#8B5CF6",
    route: "Purple Arete",
    holds: [
      ["Python", 93.8, 91.7, 3.0, "插件核心逻辑"],
      ["FastAPI", 83.7, 78.0, 2.9, "REST 服务层"],
      ["Pytest", 88.9, 70.2, 3.0, "API 回归测试"],
      ["YAML Config", 92.9, 62.7, 2.7, "步骤 / 依赖配置"],
      ["Telemetry", 78.8, 50.1, 2.9, "运行状态 / 耗时"],
      ["Orchestration", 87.2, 42.9, 2.9, "节点调度 / 重试"],
      ["REST API", 92.3, 34.3, 2.9, "对外能力暴露"],
      ["Async Flow", 90.4, 23.6, 3.1, "异步任务 / 队列"],
      ["Docker", 87.3, 16.2, 3.1, "封装运行环境"],
    ],
  },
];

const allTechLabels = Array.from(
  new Set(routes.flatMap((route) => route.holds.map(([label]) => label))),
).sort((a, b) => a.localeCompare(b));

function cssVars(vars: Record<string, string | number>): CSSProperties {
  return vars as CSSProperties;
}

function chipEdge(xPct: number, yPct: number) {
  if (xPct < 18) return "left";
  if (xPct > 82) return "right";
  if (yPct < 18) return xPct < 50 ? "left" : "right";
  return "mid";
}

function drawFullGray(canvas: HTMLCanvasElement, image: HTMLImageElement) {
  const context = canvas.getContext("2d");
  if (!context || !image.naturalWidth || !image.naturalHeight) return;

  canvas.width = image.naturalWidth;
  canvas.height = image.naturalHeight;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  context.filter = "grayscale(1) saturate(0) contrast(0.92) brightness(0.86)";
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  context.restore();
}

function punchHole(canvas: HTMLCanvasElement, xPct: number, yPct: number, rPct: number) {
  const context = canvas.getContext("2d");
  if (!context) return;

  const cx = (canvas.width * xPct) / 100;
  const cy = (canvas.height * yPct) / 100;
  const radius = (canvas.width * rPct * 2.05) / 100;
  const gradient = context.createRadialGradient(cx, cy, 0, cx, cy, radius);

  context.save();
  context.globalCompositeOperation = "destination-out";
  gradient.addColorStop(0, "rgba(0,0,0,1)");
  gradient.addColorStop(0.54, "rgba(0,0,0,0.94)");
  gradient.addColorStop(1, "rgba(0,0,0,0)");
  context.fillStyle = gradient;
  context.beginPath();
  context.arc(cx, cy, radius, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function routePath(holds: Hold[]) {
  if (holds.length < 2) return "";
  return holds.reduce((path, hold, index) => {
    const [, x, y] = hold;
    return `${path}${index === 0 ? "M" : " L"} ${x} ${y}`;
  }, "");
}

export default function TechStack() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wallRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number[]>([]);

  const activeRoute = routes.find((route) => route.id === activeId) ?? null;
  const visibleHolds = activeRoute?.holds.slice(0, visibleCount) ?? [];
  const litTechLabels = new Set(visibleHolds.map(([label]) => label));

  const resetRoute = () => {
    timerRef.current.forEach(window.clearTimeout);
    timerRef.current = [];
    setActiveId(null);
    setVisibleCount(0);
    setMarkers([]);

    if (canvasRef.current && imageRef.current) {
      drawFullGray(canvasRef.current, imageRef.current);
    }
  };

  const activateRoute = (route: Route) => {
    timerRef.current.forEach(window.clearTimeout);
    timerRef.current = [];
    setActiveId(route.id);
    setVisibleCount(0);
    setMarkers([]);

    if (canvasRef.current && imageRef.current) {
      drawFullGray(canvasRef.current, imageRef.current);
    }

    if (wallRef.current) {
      wallRef.current.scrollTop = wallRef.current.scrollHeight;
    }

    route.holds.forEach((hold, index) => {
      const timer = window.setTimeout(() => {
        if (canvasRef.current) {
          punchHole(canvasRef.current, hold[1], hold[2], hold[3]);
        }

        setVisibleCount(index + 1);
        setMarkers((previous) => [...previous, { hold, route, index }]);

        if (wallRef.current) {
          const targetY = (wallRef.current.scrollHeight * hold[2]) / 100;
          const targetTop = Math.max(0, targetY - wallRef.current.clientHeight * 0.56);
          if (Math.abs(wallRef.current.scrollTop - targetTop) > 70) {
            wallRef.current.scrollTo({ top: targetTop, behavior: "smooth" });
          }
        }
      }, index * STEP_MS);

      timerRef.current.push(timer);
    });
  };

  useEffect(() => {
    return () => {
      timerRef.current.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <section id="tech-stack" className="px-0 py-12 sm:py-16">
      <div className="shell">
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-serif text-3xl font-semibold text-[#191714] sm:text-4xl">
            技术栈
          </h2>

          <div className="flex flex-wrap gap-2">
            {routes.map((route) => {
              const isActive = activeId === route.id;
              return (
                <button
                  key={route.id}
                  type="button"
                  onClick={() => {
                    if (isActive) {
                      resetRoute();
                      return;
                    }
                    activateRoute(route);
                  }}
                  className="inline-flex min-h-9 items-center gap-2 rounded-full border px-3 py-2 text-[0.72rem] font-semibold text-[#686057] transition-all hover:text-[#191714]"
                  style={{
                    borderColor: isActive ? route.color : "rgba(25,23,20,0.10)",
                    background: isActive ? `${route.color}22` : "rgba(255,253,248,0.72)",
                    boxShadow: isActive ? `0 0 18px ${route.color}44` : "none",
                    color: isActive ? "#191714" : undefined,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{
                      background: route.color,
                      boxShadow: isActive ? `0 0 0 3px ${route.color}38` : "none",
                    }}
                  />
                  {route.no}. {route.product}
                </button>
              );
            })}
            <button
              type="button"
              onClick={resetRoute}
              className="inline-flex min-h-9 items-center rounded-full border border-[#E4D9CB] bg-[#FFFDF8]/72 px-3 py-2 text-[0.72rem] font-semibold text-[#686057] transition-colors hover:border-[#C84B31] hover:text-[#C84B31]"
            >
              重置
            </button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div
            ref={wallRef}
            className="relative max-h-[68vh] overflow-y-auto overflow-x-hidden rounded-lg border border-[#E4D9CB] bg-[#06080B] shadow-[0_28px_80px_rgb(82_53_34_/_18%)]"
          >
            <div className="relative aspect-[1024/1536] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element -- canvas masking needs the raw HTMLImageElement */}
              <img
                ref={imageRef}
                className="absolute inset-0 z-[1] h-full w-full object-cover"
                src="/images/tech-stack-wall.png"
                alt=""
                onLoad={() => {
                  if (canvasRef.current && imageRef.current) {
                    drawFullGray(canvasRef.current, imageRef.current);
                  }
                }}
              />
              <canvas
                ref={canvasRef}
                className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
              />
              <svg
                className="pointer-events-none absolute inset-0 z-[3] h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {activeRoute && visibleHolds.length > 1 ? (
                  <path
                    d={routePath(visibleHolds)}
                    fill="none"
                    stroke={activeRoute.color}
                    strokeDasharray="1.8 2.2"
                    strokeLinecap="round"
                    strokeOpacity="0.72"
                    strokeWidth="0.75"
                    style={{ filter: `drop-shadow(0 0 4px ${activeRoute.color})` }}
                  />
                ) : null}
              </svg>

              <div className="pointer-events-none absolute inset-0 z-[5]">
                {markers.map(({ hold, route, index }) => {
                  const [label, x, y, radius, note] = hold;
                  const edge = chipEdge(x, y);
                  const glowSize = Math.max(radius * 3.35, 6.4);
                  return (
                    <div key={`${route.id}-${label}-${index}`}>
                      <span
                        className="tech-stack-hold-glow"
                        style={cssVars({
                          "--route-color": route.color,
                          left: `${x}%`,
                          top: `${y}%`,
                          width: `${glowSize}%`,
                          height: `${glowSize * WALL_ASPECT}%`,
                        })}
                      />
                      <span
                        className="tech-stack-hold-chip"
                        data-edge={edge}
                        title={note}
                        style={cssVars({
                          "--route-color": route.color,
                          left: `${x}%`,
                          top: `${y}%`,
                        })}
                      >
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(circle_at_50%_45%,transparent_55%,rgb(0_0_0_/_18%)_100%)]" />
            </div>
          </div>

          <aside className="rounded-lg border border-[#E4D9CB] bg-[#FFFDF8]/80 p-4 shadow-[0_18px_45px_rgb(82_53_34_/_6%)] lg:sticky lg:top-24">
            <div className="flex max-h-[68vh] flex-wrap gap-1.5 overflow-y-auto pr-1">
              {allTechLabels.map((label) => {
                const isLit = activeRoute ? litTechLabels.has(label) : false;
                const color = activeRoute?.color ?? "#C84B31";
                return (
                  <span
                    key={label}
                    className="rounded-full border px-2 py-1 text-[0.68rem] font-semibold transition-colors"
                    style={{
                      borderColor: isLit ? `${color}88` : "rgba(25,23,20,0.08)",
                      background: isLit ? `${color}20` : "rgba(25,23,20,0.03)",
                      color: isLit ? "#191714" : "#9C8E82",
                      boxShadow: isLit ? `0 0 10px ${color}33` : "none",
                    }}
                  >
                    {label}
                  </span>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
