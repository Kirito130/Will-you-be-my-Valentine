module.exports = [
"[project]/src/components/RouteGuard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteGuard",
    ()=>RouteGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const GATE_OK_KEY = "val_gate_ok";
function RouteGuard({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/lib/assets.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Public URLs for assets in public/Photos/Assets.
 * Use encodeURIComponent for filenames with spaces/special chars in paths.
 */ __turbopack_context__.s([
    "assets",
    ()=>assets
]);
const BASE = "/Photos/Assets";
function asset(name) {
    return `${BASE}/${encodeURIComponent(name)}`;
}
const assets = {
    /** Cute T-Rex character (main dino for gate) - Dino1.png */ cuteDino: asset("Dino1.png"),
    /** Cartoon 3D dino rendering */ dinoCartoon: asset("—Pngtree—a cartoon-style 3d rendering of_21141951.png"),
    /** 3D illustration dino */ dinoIllustration: asset("—Pngtree—isolated 3d illustration of a_5795749.jpg"),
    /** Hearts and love */ twoHearts: asset("two hearts.png"),
    heartWithWingsFront: asset("heart with wings (front).png"),
    heartWithWingsAngle: asset("heart with wings (angle).png"),
    heartWithLove: asset("heart with love.png"),
    heartWithArrow: asset("heart with arrow.png"),
    heartLock: asset("heart lock.png"),
    handWithLove: asset("hand with love.png"),
    /** Gifts / romance */ gift: asset("gift.png"),
    chocolateFront: asset("chocolate (front).png"),
    envelopeFront: asset("envelope (front).png"),
    ring: asset("ring.png"),
    boxWithRingFront: asset("box with ring (front).png"),
    lockWithHeart: asset("lock with heart.png"),
    airBalloon: asset("air balloon.png"),
    airBalloonClouds: asset("air balloon with clouds.png"),
    /** Misc */ bowWithArrow: asset("bow with arrow.png"),
    brokenHeart: asset("broken heart.png"),
    iLoveYou1: asset("i love you #1.png"),
    iLoveYou2: asset("i love you #2.png")
};
}),
"[project]/src/components/page6/Page6Backdrop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page6Backdrop",
    ()=>Page6Backdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assets.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/**
 * Scattered asset positions (percent of viewport). Fixed so layout is stable;
 * we use scale-in + slow rotation only — no bounce, no orbit (different from pages 2 and 4).
 */ const ASSET_CONFIG = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].twoHearts,
        size: 56,
        left: 8,
        top: 12
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithWingsFront,
        size: 52,
        left: 78,
        top: 8
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithLove,
        size: 48,
        left: 12,
        top: 72
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].gift,
        size: 50,
        left: 82,
        top: 70
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].cuteDino,
        size: 58,
        left: 5,
        top: 42
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].ring,
        size: 44,
        left: 88,
        top: 38
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].chocolateFront,
        size: 46,
        left: 72,
        top: 88
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithArrow,
        size: 42,
        left: 18,
        top: 22
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].envelopeFront,
        size: 48,
        left: 75,
        top: 25
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].iLoveYou1,
        size: 54,
        left: 22,
        top: 82
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartLock,
        size: 40,
        left: 85,
        top: 55
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].handWithLove,
        size: 46,
        left: 42,
        top: 6
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].airBalloon,
        size: 52,
        left: 58,
        top: 78
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithWingsAngle,
        size: 44,
        left: 35,
        top: 88
    }
];
/** Slow rotation duration (one full turn) — dreamy, not like page 4 orbit. */ const ROTATION_DURATION = 80;
function Page6Backdrop() {
    const [reducedMotion, setReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const handler = ()=>setReducedMotion(mq.matches);
        mq.addEventListener("change", handler);
        return ()=>mq.removeEventListener("change", handler);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 overflow-hidden pointer-events-none z-0",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                style: {
                    background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 65%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/page6/Page6Backdrop.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            ASSET_CONFIG.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute -translate-x-1/2 -translate-y-1/2 opacity-90 drop-shadow-lg",
                    style: {
                        left: `${item.left}%`,
                        top: `${item.top}%`,
                        width: item.size,
                        height: item.size
                    },
                    initial: {
                        scale: 0,
                        opacity: 0,
                        rotate: -24
                    },
                    animate: {
                        scale: 1,
                        opacity: 0.9,
                        rotate: reducedMotion ? 0 : 360
                    },
                    transition: {
                        scale: {
                            type: "spring",
                            stiffness: 200,
                            damping: 22,
                            delay: i * 0.1
                        },
                        opacity: {
                            duration: 0.4,
                            delay: i * 0.1
                        },
                        rotate: reducedMotion ? {} : {
                            repeat: Infinity,
                            duration: ROTATION_DURATION,
                            ease: "linear",
                            delay: i * 0.12
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: item.src,
                        alt: "",
                        width: item.size,
                        height: item.size,
                        className: "object-contain w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/page6/Page6Backdrop.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/components/page6/Page6Backdrop.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/page6/Page6Backdrop.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/ist-countdown.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Countdown to February 14th 8:00 PM IST (Valentine's Day).
 * 8 PM IST = 14:30 UTC. Target is Feb 14 at 14:30 UTC; if that moment has passed this year, use next year.
 */ __turbopack_context__.s([
    "formatRemaining",
    ()=>formatRemaining,
    "getNext8PMISTUtcMs",
    ()=>getNext8PMISTUtcMs,
    "getRemainingMs",
    ()=>getRemainingMs
]);
const FEB = 1; // Date month: February = 1 (0-indexed)
const FEB_14 = 14;
const IST_8PM_AS_UTC_HOUR = 14;
const IST_8PM_AS_UTC_MINUTE = 30;
const MS_PER_SEC = 1000;
const MS_PER_MIN = 60 * MS_PER_SEC;
const MS_PER_HOUR = 60 * MS_PER_MIN;
/**
 * Returns the UTC timestamp (ms) for Feb 14, 8 PM IST in the given year.
 * 8 PM IST = 14:30 UTC on the same calendar day.
 */ function getFeb14_8PM_IST_UtcMs(year) {
    return Date.UTC(year, FEB, FEB_14, IST_8PM_AS_UTC_HOUR, IST_8PM_AS_UTC_MINUTE, 0, 0);
}
function getNext8PMISTUtcMs() {
    const now = Date.now();
    const y = new Date(now).getUTCFullYear();
    const thisYear = getFeb14_8PM_IST_UtcMs(y);
    if (now < thisYear) return thisYear;
    return getFeb14_8PM_IST_UtcMs(y + 1);
}
function getRemainingMs() {
    const target = getNext8PMISTUtcMs();
    return Math.max(0, target - Date.now());
}
function formatRemaining(ms) {
    if (ms <= 0) return "0 hrs : 0 min : 0 sec";
    const hours = Math.floor(ms / MS_PER_HOUR);
    const restH = ms % MS_PER_HOUR;
    const minutes = Math.floor(restH / MS_PER_MIN);
    const restM = restH % MS_PER_MIN;
    const seconds = Math.floor(restM / MS_PER_SEC);
    return `${hours} hrs : ${minutes} min : ${seconds} sec`;
}
}),
"[project]/src/components/page6/Page6Countdown.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page6Countdown",
    ()=>Page6Countdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ist$2d$countdown$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ist-countdown.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const TICK_MS = 1000;
function Page6Countdown({ onZero }) {
    const [formatted, setFormatted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ist$2d$countdown$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRemaining"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ist$2d$countdown$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRemainingMs"])()));
    const onZeroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onZero);
    onZeroRef.current = onZero;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>{
            const ms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ist$2d$countdown$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRemainingMs"])();
            setFormatted((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ist$2d$countdown$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRemaining"])(ms));
            if (ms <= 0) {
                clearInterval(id);
                onZeroRef.current();
            }
        }, TICK_MS);
        return ()=>clearInterval(id);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "tabular-nums font-semibold",
        "aria-live": "polite",
        children: formatted
    }, void 0, false, {
        fileName: "[project]/src/components/page6/Page6Countdown.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/page6-text.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Page 6 copy: countdown stages and final messages.
 */ /** Stage labels for the initial flow (4s per stage). Stage 8 is final with timer. */ __turbopack_context__.s([
    "PAGE6_BURST_HEADLINE",
    ()=>PAGE6_BURST_HEADLINE,
    "PAGE6_RELEASED_MESSAGE",
    ()=>PAGE6_RELEASED_MESSAGE,
    "PAGE6_STAGES",
    ()=>PAGE6_STAGES
]);
const PAGE6_STAGES = [
    "Hiii",
    "My T-Rex",
    "This is not the end",
    "There is another surprise waiting for you",
    "But not so soon",
    "You will have to wait just a bit longer",
    "Come back to this page for your surprise",
    "Your surprise coming in: "
];
const PAGE6_RELEASED_MESSAGE = "You did well my T-Rex! All the wait is now over!";
const PAGE6_BURST_HEADLINE = "Happy Valentines Day!";
}),
"[project]/src/components/page6/Page6Burst.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page6Burst",
    ()=>Page6Burst
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assets.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page6$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/page6-text.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/** Assets for the celebration bloom — arranged in rings so they scale out from center. */ const BURST_ASSETS = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].twoHearts,
        size: 64,
        angle: 0
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithWingsFront,
        size: 58,
        angle: 45
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].cuteDino,
        size: 72,
        angle: 90
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].gift,
        size: 56,
        angle: 135
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithLove,
        size: 60,
        angle: 180
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].ring,
        size: 52,
        angle: 225
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].chocolateFront,
        size: 54,
        angle: 270
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithArrow,
        size: 50,
        angle: 315
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].envelopeFront,
        size: 56,
        angle: 22
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].iLoveYou1,
        size: 62,
        angle: 112
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].airBalloon,
        size: 58,
        angle: 202
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].handWithLove,
        size: 52,
        angle: 292
    }
];
const RADIUS = 160;
const BLOOM_STAGGER = 0.05;
const HEADLINE_DELAY = 0.4;
function Page6Burst() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center z-20 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 w-0 h-0",
                style: {
                    transform: "translate(-50%, -50%)"
                },
                children: BURST_ASSETS.map((item, i)=>{
                    const rad = item.angle * Math.PI / 180;
                    const x = Math.cos(rad) * RADIUS - item.size / 2;
                    const y = Math.sin(rad) * RADIUS - item.size / 2;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute left-0 top-0 flex items-center justify-center drop-shadow-2xl",
                        style: {
                            width: item.size,
                            height: item.size
                        },
                        initial: {
                            scale: 0,
                            opacity: 0,
                            x,
                            y
                        },
                        animate: {
                            scale: 1,
                            opacity: 0.95,
                            x,
                            y
                        },
                        transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 22,
                            delay: i * BLOOM_STAGGER
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: item.src,
                            alt: "",
                            width: item.size,
                            height: item.size,
                            className: "object-contain w-full h-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/page6/Page6Burst.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this)
                    }, i, false, {
                        fileName: "[project]/src/components/page6/Page6Burst.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/page6/Page6Burst.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "relative z-10 font-display text-3xl sm:text-4xl md:text-5xl text-white text-center drop-shadow-2xl px-4 max-w-xl",
                initial: {
                    scale: 0.6,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    type: "spring",
                    stiffness: 220,
                    damping: 20,
                    delay: HEADLINE_DELAY
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page6$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAGE6_BURST_HEADLINE"]
            }, void 0, false, {
                fileName: "[project]/src/components/page6/Page6Burst.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/page6/Page6Burst.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/page6/Page6Content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page6Content",
    ()=>Page6Content
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6Backdrop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page6/Page6Backdrop.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6Countdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page6/Page6Countdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6Burst$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page6/Page6Burst.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './Page6BackgroundMusic'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page6$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/page6-text.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const STAGE_DURATION_MS = 4000;
const RELEASED_HOLD_MS = 2500;
const BURST_HOLD_MS = 15000;
const PERSIST_KEY = "val_page6_final";
/**
 * Flip-in transition: 3D rotateY from 90deg (side) to 0, with opacity.
 * Different from simple slide/bounce used on other pages.
 */ const flipIn = {
    initial: {
        opacity: 0,
        rotateY: 90,
        filter: "blur(8px)"
    },
    animate: {
        opacity: 1,
        rotateY: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 24
        }
    },
    exit: {
        opacity: 0,
        rotateY: -90,
        filter: "blur(8px)",
        transition: {
            duration: 0.3
        }
    }
};
function Page6Content() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("flow");
    const [stageIndex, setStageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [reducedMotion, setReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const clearTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        timersRef.current.forEach(clearTimeout);
        timersRef.current = [];
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const h = ()=>setReducedMotion(mq.matches);
        mq.addEventListener("change", h);
        return ()=>mq.removeEventListener("change", h);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>()=>clearTimers(), [
        clearTimers
    ]);
    // Persist check: if already at final stage, skip flow
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }, []);
    // Flow: advance stage every 4s through stages 1–7 (indices 0–6); stage 8 is final with timer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (phase !== "flow" || stageIndex >= 6) return;
        const t = setTimeout(()=>setStageIndex((i)=>i + 1), STAGE_DURATION_MS);
        timersRef.current.push(t);
        return clearTimers;
    }, [
        phase,
        stageIndex,
        clearTimers
    ]);
    // When we reach stage 7 (index 6: "Come back..."), after 4s go to final (stage 8) and persist
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (phase !== "flow" || stageIndex !== 6) return;
        const t = setTimeout(()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setPhase("final");
        }, STAGE_DURATION_MS);
        timersRef.current.push(t);
        return clearTimers;
    }, [
        phase,
        stageIndex,
        clearTimers
    ]);
    const handleCountdownZero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setPhase("released");
        const t = setTimeout(()=>setPhase("burst"), RELEASED_HOLD_MS);
        timersRef.current.push(t);
    }, []);
    // After burst, wait 15s then navigate to page-7
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (phase !== "burst") return;
        const t = setTimeout(()=>router.push("/page-7"), BURST_HOLD_MS);
        timersRef.current.push(t);
        return ()=>clearTimeout(t);
    }, [
        phase,
        router
    ]);
    const isFinalStage = phase === "final";
    const isReleased = phase === "released";
    const isBurst = phase === "burst";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen relative flex flex-col items-center justify-center bg-valentine-page2 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Page6BackgroundMusic, {}, void 0, false, {
                fileName: "[project]/src/components/page6/Page6Content.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6Backdrop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Page6Backdrop"], {}, void 0, false, {
                fileName: "[project]/src/components/page6/Page6Content.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full flex flex-col items-center justify-center px-6 py-12",
                style: {
                    perspective: "1200px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: [
                            phase === "flow" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "text-center",
                                ...reducedMotion ? {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    }
                                } : flipIn,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page6$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAGE6_STAGES"][stageIndex]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/page6/Page6Content.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            }, `stage-${stageIndex}`, false, {
                                fileName: "[project]/src/components/page6/Page6Content.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            isFinalStage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "text-center max-w-xl",
                                initial: {
                                    opacity: 0,
                                    scale: 0.96
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 0.4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg",
                                        children: "Your surprise coming in:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/page6/Page6Content.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg font-bold mt-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6Countdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Page6Countdown"], {
                                            onZero: handleCountdownZero
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/page6/Page6Content.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/page6/Page6Content.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, "final", true, {
                                fileName: "[project]/src/components/page6/Page6Content.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            isReleased && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg text-center max-w-2xl",
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 220,
                                    damping: 22
                                },
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page6$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAGE6_RELEASED_MESSAGE"]
                            }, "released", false, {
                                fileName: "[project]/src/components/page6/Page6Content.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/page6/Page6Content.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    isBurst && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6Burst$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Page6Burst"], {}, void 0, false, {
                        fileName: "[project]/src/components/page6/Page6Content.tsx",
                        lineNumber: 168,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/page6/Page6Content.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/page6/Page6Content.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_fe76eea7._.js.map