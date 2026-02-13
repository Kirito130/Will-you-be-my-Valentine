(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/RouteGuard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteGuard",
    ()=>RouteGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const GATE_OK_KEY = "val_gate_ok";
function RouteGuard(param) {
    let { children } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RouteGuard.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (sessionStorage.getItem(GATE_OK_KEY) !== "1") {
                router.replace("/");
            }
        }
    }["RouteGuard.useEffect"], [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(RouteGuard, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RouteGuard;
var _c;
__turbopack_context__.k.register(_c, "RouteGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/assets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    return "".concat(BASE, "/").concat(encodeURIComponent(name));
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/page6/Page6Backdrop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page6Backdrop",
    ()=>Page6Backdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assets.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/**
 * Scattered asset positions (percent of viewport). Fixed so layout is stable;
 * we use scale-in + slow rotation only — no bounce, no orbit (different from pages 2 and 4).
 */ const ASSET_CONFIG = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].twoHearts,
        size: 56,
        left: 8,
        top: 12
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].heartWithWingsFront,
        size: 52,
        left: 78,
        top: 8
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].heartWithLove,
        size: 48,
        left: 12,
        top: 72
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].gift,
        size: 50,
        left: 82,
        top: 70
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].cuteDino,
        size: 58,
        left: 5,
        top: 42
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].ring,
        size: 44,
        left: 88,
        top: 38
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].chocolateFront,
        size: 46,
        left: 72,
        top: 88
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].heartWithArrow,
        size: 42,
        left: 18,
        top: 22
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].envelopeFront,
        size: 48,
        left: 75,
        top: 25
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].iLoveYou1,
        size: 54,
        left: 22,
        top: 82
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].heartLock,
        size: 40,
        left: 85,
        top: 55
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].handWithLove,
        size: 46,
        left: 42,
        top: 6
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].airBalloon,
        size: 52,
        left: 58,
        top: 78
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].heartWithWingsAngle,
        size: 44,
        left: 35,
        top: 88
    }
];
/** Slow rotation duration (one full turn) — dreamy, not like page 4 orbit. */ const ROTATION_DURATION = 80;
function Page6Backdrop() {
    _s();
    const [reducedMotion, setReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page6Backdrop.useEffect": ()=>{
            const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
            setReducedMotion(mq.matches);
            const handler = {
                "Page6Backdrop.useEffect.handler": ()=>setReducedMotion(mq.matches)
            }["Page6Backdrop.useEffect.handler"];
            mq.addEventListener("change", handler);
            return ({
                "Page6Backdrop.useEffect": ()=>mq.removeEventListener("change", handler)
            })["Page6Backdrop.useEffect"];
        }
    }["Page6Backdrop.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 overflow-hidden pointer-events-none z-0",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-30",
                style: {
                    background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 65%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/page6/Page6Backdrop.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            ASSET_CONFIG.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute -translate-x-1/2 -translate-y-1/2 opacity-90 drop-shadow-lg",
                    style: {
                        left: "".concat(item.left, "%"),
                        top: "".concat(item.top, "%"),
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Page6Backdrop, "Z/efR3eUxGiWxs70VtFjzm6j4zM=");
_c = Page6Backdrop;
var _c;
__turbopack_context__.k.register(_c, "Page6Backdrop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/ist-countdown.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    return "".concat(hours, " hrs : ").concat(minutes, " min : ").concat(seconds, " sec");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/page6/Page6Countdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page6Countdown",
    ()=>Page6Countdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ist$2d$countdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ist-countdown.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TICK_MS = 1000;
function Page6Countdown(param) {
    let { onZero } = param;
    _s();
    const [formatted, setFormatted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Page6Countdown.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ist$2d$countdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRemaining"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ist$2d$countdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemainingMs"])())
    }["Page6Countdown.useState"]);
    const onZeroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onZero);
    onZeroRef.current = onZero;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page6Countdown.useEffect": ()=>{
            const id = setInterval({
                "Page6Countdown.useEffect.id": ()=>{
                    const ms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ist$2d$countdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRemainingMs"])();
                    setFormatted((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ist$2d$countdown$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRemaining"])(ms));
                    if (ms <= 0) {
                        clearInterval(id);
                        onZeroRef.current();
                    }
                }
            }["Page6Countdown.useEffect.id"], TICK_MS);
            return ({
                "Page6Countdown.useEffect": ()=>clearInterval(id)
            })["Page6Countdown.useEffect"];
        }
    }["Page6Countdown.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "tabular-nums font-semibold whitespace-nowrap",
        "aria-live": "polite",
        children: formatted
    }, void 0, false, {
        fileName: "[project]/src/components/page6/Page6Countdown.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Page6Countdown, "O6ghNdE4FIELzYI+BE6ZhRYWjlg=");
_c = Page6Countdown;
var _c;
__turbopack_context__.k.register(_c, "Page6Countdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/page6-text.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/page6/Page6Burst.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page6Burst",
    ()=>Page6Burst
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assets.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page6$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/page6-text.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
/** Assets for the celebration bloom — arranged in rings so they scale out from center. */ const BURST_ASSETS = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].twoHearts,
        size: 64,
        angle: 0
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].heartWithWingsFront,
        size: 58,
        angle: 45
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].cuteDino,
        size: 72,
        angle: 90
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].gift,
        size: 56,
        angle: 135
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].heartWithLove,
        size: 60,
        angle: 180
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].ring,
        size: 52,
        angle: 225
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].chocolateFront,
        size: 54,
        angle: 270
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].heartWithArrow,
        size: 50,
        angle: 315
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].envelopeFront,
        size: 56,
        angle: 22
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].iLoveYou1,
        size: 62,
        angle: 112
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].airBalloon,
        size: 58,
        angle: 202
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assets"].handWithLove,
        size: 52,
        angle: 292
    }
];
const RADIUS = 160;
const BLOOM_STAGGER = 0.05;
const HEADLINE_DELAY = 0.4;
function Page6Burst() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center z-20 pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 w-0 h-0",
                style: {
                    transform: "translate(-50%, -50%)"
                },
                children: BURST_ASSETS.map((item, i)=>{
                    const rad = item.angle * Math.PI / 180;
                    const x = Math.cos(rad) * RADIUS - item.size / 2;
                    const y = Math.sin(rad) * RADIUS - item.size / 2;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
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
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page6$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAGE6_BURST_HEADLINE"]
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
_c = Page6Burst;
var _c;
__turbopack_context__.k.register(_c, "Page6Burst");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/page6/Page6BackgroundMusic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page6BackgroundMusic",
    ()=>Page6BackgroundMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const MUSIC_SRC = "/music/Paper%20Rings.MP3";
function Page6BackgroundMusic() {
    _s();
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page6BackgroundMusic.useEffect": ()=>{
            const audio = new Audio(MUSIC_SRC);
            audio.loop = true;
            audio.preload = "auto";
            audioRef.current = audio;
            const handleCanPlay = {
                "Page6BackgroundMusic.useEffect.handleCanPlay": ()=>setIsLoaded(true)
            }["Page6BackgroundMusic.useEffect.handleCanPlay"];
            audio.addEventListener("canplaythrough", handleCanPlay);
            return ({
                "Page6BackgroundMusic.useEffect": ()=>{
                    audio.removeEventListener("canplaythrough", handleCanPlay);
                    audio.pause();
                    audioRef.current = null;
                }
            })["Page6BackgroundMusic.useEffect"];
        }
    }["Page6BackgroundMusic.useEffect"], []);
    const tryPlay = (audio)=>{
        if (isMuted) return;
        audio.currentTime = 0;
        const p = audio.play();
        if (p && typeof p.then === "function") {
            p.catch(()=>{
                const retry = ()=>{
                    audio.currentTime = 0;
                    audio.play().catch(()=>{});
                    document.removeEventListener("click", retry);
                    document.removeEventListener("touchstart", retry);
                    document.removeEventListener("keydown", retry);
                };
                document.addEventListener("click", retry, {
                    once: true
                });
                document.addEventListener("touchstart", retry, {
                    once: true
                });
                document.addEventListener("keydown", retry, {
                    once: true
                });
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page6BackgroundMusic.useEffect": ()=>{
            const audio = audioRef.current;
            if (!audio) return;
            if (!isMuted && isLoaded) tryPlay(audio);
            else audio.pause();
        }
    }["Page6BackgroundMusic.useEffect"], [
        isMuted,
        isLoaded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>setIsMuted((m)=>!m),
        className: "fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur border border-white/40 text-white hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 transition-colors",
        "aria-label": isMuted ? "Play background music" : "Mute background music",
        title: isMuted ? "Play music (Paper Rings)" : "Mute music",
        children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                }, void 0, false, {
                    fileName: "[project]/src/components/page6/Page6BackgroundMusic.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "23",
                    y1: "9",
                    x2: "17",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/src/components/page6/Page6BackgroundMusic.tsx",
                    lineNumber: 67,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "17",
                    y1: "9",
                    x2: "23",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/src/components/page6/Page6BackgroundMusic.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/page6/Page6BackgroundMusic.tsx",
            lineNumber: 65,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            "aria-hidden": true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                }, void 0, false, {
                    fileName: "[project]/src/components/page6/Page6BackgroundMusic.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
                }, void 0, false, {
                    fileName: "[project]/src/components/page6/Page6BackgroundMusic.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/page6/Page6BackgroundMusic.tsx",
            lineNumber: 71,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/page6/Page6BackgroundMusic.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(Page6BackgroundMusic, "JDHUgpeBdG33tW0VZCRaNKLuNls=");
_c = Page6BackgroundMusic;
var _c;
__turbopack_context__.k.register(_c, "Page6BackgroundMusic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/page6/Page6Content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page6Content",
    ()=>Page6Content
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6Backdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page6/Page6Backdrop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6Countdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page6/Page6Countdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6Burst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page6/Page6Burst.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6BackgroundMusic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page6/Page6BackgroundMusic.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page6$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/page6-text.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("flow");
    const [stageIndex, setStageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [reducedMotion, setReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const clearTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page6Content.useCallback[clearTimers]": ()=>{
            timersRef.current.forEach(clearTimeout);
            timersRef.current = [];
        }
    }["Page6Content.useCallback[clearTimers]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page6Content.useEffect": ()=>{
            const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
            setReducedMotion(mq.matches);
            const h = {
                "Page6Content.useEffect.h": ()=>setReducedMotion(mq.matches)
            }["Page6Content.useEffect.h"];
            mq.addEventListener("change", h);
            return ({
                "Page6Content.useEffect": ()=>mq.removeEventListener("change", h)
            })["Page6Content.useEffect"];
        }
    }["Page6Content.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page6Content.useEffect": ()=>({
                "Page6Content.useEffect": ()=>clearTimers()
            })["Page6Content.useEffect"]
    }["Page6Content.useEffect"], [
        clearTimers
    ]);
    // Persist check: if already at final stage, skip flow
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page6Content.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (window.localStorage.getItem(PERSIST_KEY) === "1") {
                setPhase("final");
                setStageIndex(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page6$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAGE6_STAGES"].length - 1);
            }
        }
    }["Page6Content.useEffect"], []);
    // Flow: advance stage every 4s through stages 1–7 (indices 0–6); stage 8 is final with timer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page6Content.useEffect": ()=>{
            if (phase !== "flow" || stageIndex >= 6) return;
            const t = setTimeout({
                "Page6Content.useEffect.t": ()=>setStageIndex({
                        "Page6Content.useEffect.t": (i)=>i + 1
                    }["Page6Content.useEffect.t"])
            }["Page6Content.useEffect.t"], STAGE_DURATION_MS);
            timersRef.current.push(t);
            return clearTimers;
        }
    }["Page6Content.useEffect"], [
        phase,
        stageIndex,
        clearTimers
    ]);
    // When we reach stage 7 (index 6: "Come back..."), after 4s go to final (stage 8) and persist
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page6Content.useEffect": ()=>{
            if (phase !== "flow" || stageIndex !== 6) return;
            const t = setTimeout({
                "Page6Content.useEffect.t": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) window.localStorage.setItem(PERSIST_KEY, "1");
                    setPhase("final");
                }
            }["Page6Content.useEffect.t"], STAGE_DURATION_MS);
            timersRef.current.push(t);
            return clearTimers;
        }
    }["Page6Content.useEffect"], [
        phase,
        stageIndex,
        clearTimers
    ]);
    const handleCountdownZero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Page6Content.useCallback[handleCountdownZero]": ()=>{
            setPhase("released");
            const t = setTimeout({
                "Page6Content.useCallback[handleCountdownZero].t": ()=>setPhase("burst")
            }["Page6Content.useCallback[handleCountdownZero].t"], RELEASED_HOLD_MS);
            timersRef.current.push(t);
        }
    }["Page6Content.useCallback[handleCountdownZero]"], []);
    // After burst, wait 15s then navigate to page-7
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page6Content.useEffect": ()=>{
            if (phase !== "burst") return;
            const t = setTimeout({
                "Page6Content.useEffect.t": ()=>router.push("/page-7")
            }["Page6Content.useEffect.t"], BURST_HOLD_MS);
            timersRef.current.push(t);
            return ({
                "Page6Content.useEffect": ()=>clearTimeout(t)
            })["Page6Content.useEffect"];
        }
    }["Page6Content.useEffect"], [
        phase,
        router
    ]);
    const isFinalStage = phase === "final";
    const isReleased = phase === "released";
    const isBurst = phase === "burst";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen relative flex flex-col items-center justify-center bg-valentine-page2 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6BackgroundMusic$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Page6BackgroundMusic"], {}, void 0, false, {
                fileName: "[project]/src/components/page6/Page6Content.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6Backdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Page6Backdrop"], {}, void 0, false, {
                fileName: "[project]/src/components/page6/Page6Content.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full flex flex-col items-center justify-center px-6 py-12",
                style: {
                    perspective: "1200px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: [
                            phase === "flow" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page6$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAGE6_STAGES"][stageIndex]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/page6/Page6Content.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this)
                            }, "stage-".concat(stageIndex), false, {
                                fileName: "[project]/src/components/page6/Page6Content.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            isFinalStage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "text-center w-full max-w-4xl px-4",
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg",
                                        children: "Your surprise coming in:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/page6/Page6Content.tsx",
                                        lineNumber: 144,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg font-bold mt-3 whitespace-nowrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6Countdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Page6Countdown"], {
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
                            isReleased && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
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
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page6$2d$text$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAGE6_RELEASED_MESSAGE"]
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
                    isBurst && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page6$2f$Page6Burst$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Page6Burst"], {}, void 0, false, {
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
_s(Page6Content, "AwUKRwoNFBBNdBdVbIrPgA39z94=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Page6Content;
var _c;
__turbopack_context__.k.register(_c, "Page6Content");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a2354e61._.js.map