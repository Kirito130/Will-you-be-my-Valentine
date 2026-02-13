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
"[project]/src/lib/page5-text.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Page 5 copy: love letter (typewriter) and Valentine prompt.
 */ __turbopack_context__.s([
    "LOVE_LETTER",
    ()=>LOVE_LETTER,
    "PROMPT_LINE1",
    ()=>PROMPT_LINE1,
    "PROMPT_LINE2_PREFIX",
    ()=>PROMPT_LINE2_PREFIX,
    "PROMPT_QUESTION_LINE2",
    ()=>PROMPT_QUESTION_LINE2,
    "PROMPT_WORDS",
    ()=>PROMPT_WORDS,
    "SUCCESS_MESSAGE",
    ()=>SUCCESS_MESSAGE,
    "SURPRISE_HEADLINE",
    ()=>SURPRISE_HEADLINE
]);
const SURPRISE_HEADLINE = "I am your surprise!";
const LOVE_LETTER = "I know we have not known each other for long and there are still a lot of things we need to discover about each other. On top of that I know this distance makes things harder. But for me it doesn't matter, cause the first time I laid my eyes on you I knew you were the one.\n\nThe one I wanna get flowers for, the one whose heels I carry, the one who I compete with, the one I lose to, the one I wanna laugh with, the one I wanna cry with, the one I have long calls with, the one I do long distance with, the one I hug, the one I kiss, the one and only that I love, the one I choose will always be you!";
const PROMPT_LINE1 = "So will you do me the honor of being";
const PROMPT_LINE2_PREFIX = "my Valentine";
const PROMPT_QUESTION_LINE2 = "my Valentine now and forever after?";
const PROMPT_WORDS = [
    "now",
    "and",
    "forever",
    "after?"
];
const SUCCESS_MESSAGE = "Yaayyyyy you made the right choice my T-Rex!\nIt's a date!";
}),
"[project]/src/components/page5/Page5Intro.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page5Intro",
    ()=>Page5Intro,
    "SurpriseHeadline",
    ()=>SurpriseHeadline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assets.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/page5-text.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
/**
 * Intro assets: fixed positions in a loose ring around center.
 * One-time "bloom" scale-in (no continuous float/orbit)—distinct from other pages.
 */ const INTRO_ASSETS = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].twoHearts,
        size: 56,
        left: "12%",
        top: "18%"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithWingsFront,
        size: 52,
        left: "78%",
        top: "14%"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithLove,
        size: 58,
        left: "8%",
        top: "52%"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].gift,
        size: 50,
        left: "82%",
        top: "48%"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].cuteDino,
        size: 64,
        left: "6%",
        top: "78%"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].ring,
        size: 44,
        left: "80%",
        top: "76%"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithArrow,
        size: 48,
        left: "22%",
        top: "8%"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].envelopeFront,
        size: 46,
        left: "72%",
        top: "82%"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].iLoveYou1,
        size: 54,
        left: "88%",
        top: "32%"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].chocolateFront,
        size: 44,
        left: "14%",
        top: "82%"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartLock,
        size: 42,
        left: "76%",
        top: "22%"
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].handWithLove,
        size: 48,
        left: "28%",
        top: "88%"
    }
];
const STAGGER_CHILDREN = 0.06;
const BLOOM_DURATION = 0.55;
function Page5Intro() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 overflow-hidden pointer-events-none z-0",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0",
            initial: "hidden",
            animate: "visible",
            variants: {
                visible: {
                    transition: {
                        staggerChildren: STAGGER_CHILDREN,
                        delayChildren: 0.15
                    }
                },
                hidden: {}
            },
            children: INTRO_ASSETS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute opacity-90 drop-shadow-lg",
                    style: {
                        left: item.left,
                        top: item.top,
                        width: item.size,
                        height: item.size
                    },
                    variants: {
                        hidden: {
                            scale: 0,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 0.9,
                            transition: {
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                duration: BLOOM_DURATION
                            }
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: item.src,
                        alt: "",
                        width: item.size,
                        height: item.size,
                        className: "object-contain w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/page5/Page5Intro.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/components/page5/Page5Intro.tsx",
                    lineNumber: 54,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/page5/Page5Intro.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/page5/Page5Intro.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
const HEADLINE_DELAY_MS = 900;
function SurpriseHeadline() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const reducedMotion = "undefined" !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const t = setTimeout(()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const colors = [
                "#fff",
                "#fce7f3",
                "#f472b6",
                "#e11d48",
                "#fbbf24"
            ];
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                particleCount: 80,
                spread: 70,
                origin: {
                    y: 0.6
                },
                colors
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: {
                    x: 0.2,
                    y: 0.7
                },
                colors
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: {
                    x: 0.8,
                    y: 0.7
                },
                colors
            });
        }, HEADLINE_DELAY_MS);
        return ()=>clearTimeout(t);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
        className: "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg text-center px-4",
        initial: {
            opacity: 0,
            scale: 0.85
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            delay: 0.9,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 22
        },
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SURPRISE_HEADLINE"]
    }, void 0, false, {
        fileName: "[project]/src/components/page5/Page5Intro.tsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/page5/Page5BackgroundMusic.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page5BackgroundMusic",
    ()=>Page5BackgroundMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
/** Path to background song (You Belong With Me). Place your audio file at public/music/You Belong With Me.mp3 */ const MUSIC_SRC = "/music/" + encodeURIComponent("You Belong With Me.mp3");
const NORMAL_VOLUME = 1;
const DUCKED_VOLUME = 0.18;
function Page5BackgroundMusic({ duck = false }) {
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const audio = new Audio(MUSIC_SRC);
        audio.loop = true;
        audio.preload = "auto";
        audioRef.current = audio;
        const handleCanPlay = ()=>setIsLoaded(true);
        audio.addEventListener("canplaythrough", handleCanPlay);
        return ()=>{
            audio.removeEventListener("canplaythrough", handleCanPlay);
            audio.pause();
            audioRef.current = null;
        };
    }, []);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const audio = audioRef.current;
        if (!audio) return;
        audio.volume = duck ? DUCKED_VOLUME : NORMAL_VOLUME;
        if (!isMuted && isLoaded) {
            tryPlay(audio);
        } else {
            audio.pause();
        }
    }, [
        isMuted,
        isLoaded,
        duck
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>setIsMuted((m)=>!m),
        className: "fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur border border-white/40 text-white hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page transition-colors",
        "aria-label": isMuted ? "Play background music" : "Mute background music",
        title: isMuted ? "Play music (You Belong With Me)" : "Mute music",
        children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                }, void 0, false, {
                    fileName: "[project]/src/components/page5/Page5BackgroundMusic.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "23",
                    y1: "9",
                    x2: "17",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/src/components/page5/Page5BackgroundMusic.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "17",
                    y1: "9",
                    x2: "23",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/src/components/page5/Page5BackgroundMusic.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/page5/Page5BackgroundMusic.tsx",
            lineNumber: 75,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
                }, void 0, false, {
                    fileName: "[project]/src/components/page5/Page5BackgroundMusic.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
                }, void 0, false, {
                    fileName: "[project]/src/components/page5/Page5BackgroundMusic.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/page5/Page5BackgroundMusic.tsx",
            lineNumber: 81,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/page5/Page5BackgroundMusic.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/page5/Page5SideDinos.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page5SideDinos",
    ()=>Page5SideDinos
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
/** Dino display size — much bigger for a strong presence on the sides */ const DINO_SIZE = 220;
/**
 * Cute multi-step keyframes for a unique "curious sway" — the dino gently rotates,
 * bobs up and down, and pulses in scale like it's peeking and nodding. Smooth and friendly.
 * Used only for the looping part (nested motion) so entrance doesn't repeat.
 */ const CUTE_SWAY_LOOP = {
    y: [
        0,
        -14,
        -22,
        -14,
        0
    ],
    rotate: [
        0,
        6,
        -5,
        6,
        0
    ],
    scale: [
        1,
        1.06,
        1.1,
        1.06,
        1
    ]
};
const CUTE_SWAY_TRANSITION = {
    duration: 4.2,
    repeat: Infinity,
    ease: [
        0.45,
        0,
        0.55,
        1
    ]
};
function Page5SideDinos() {
    const [reducedMotion, setReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const h = ()=>setReducedMotion(mq.matches);
        mq.addEventListener("change", h);
        return ()=>mq.removeEventListener("change", h);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none z-0",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute left-2 top-1/2 -translate-y-1/2",
                style: {
                    width: DINO_SIZE,
                    height: DINO_SIZE
                },
                initial: {
                    opacity: 0,
                    x: -60,
                    scale: 0.85
                },
                animate: {
                    opacity: 0.92,
                    x: 0,
                    scale: 1
                },
                transition: {
                    duration: 0.7,
                    ease: [
                        0.22,
                        0.61,
                        0.36,
                        1
                    ],
                    delay: 0.2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-full h-full",
                    animate: reducedMotion ? {} : CUTE_SWAY_LOOP,
                    transition: reducedMotion ? {} : CUTE_SWAY_TRANSITION,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].cuteDino,
                        alt: "",
                        width: DINO_SIZE,
                        height: DINO_SIZE,
                        className: "object-contain drop-shadow-2xl w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/page5/Page5SideDinos.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/page5/Page5SideDinos.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/page5/Page5SideDinos.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute right-2 top-1/2 -translate-y-1/2",
                style: {
                    width: DINO_SIZE,
                    height: DINO_SIZE
                },
                initial: {
                    opacity: 0,
                    x: 60,
                    scale: 0.85
                },
                animate: {
                    opacity: 0.92,
                    x: 0,
                    scale: 1
                },
                transition: {
                    duration: 0.7,
                    ease: [
                        0.22,
                        0.61,
                        0.36,
                        1
                    ],
                    delay: 0.3
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-full h-full",
                    animate: reducedMotion ? {} : CUTE_SWAY_LOOP,
                    transition: reducedMotion ? {} : {
                        ...CUTE_SWAY_TRANSITION,
                        delay: 2.1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].cuteDino,
                        alt: "",
                        width: DINO_SIZE,
                        height: DINO_SIZE,
                        className: "object-contain drop-shadow-2xl w-full h-full scale-x-[-1]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/page5/Page5SideDinos.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/page5/Page5SideDinos.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/page5/Page5SideDinos.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/page5/Page5SideDinos.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/page5/TypewriterLetter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypewriterLetter",
    ()=>TypewriterLetter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/page5-text.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const CHAR_DELAY_MS = 95;
const PARAGRAPH_PAUSE_MS = 1200;
const HOLD_AFTER_TYPING_MS = 15000;
function TypewriterLetter({ onComplete, reducedMotion }) {
    const [displayLength, setDisplayLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const soundRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onCompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onComplete);
    onCompleteRef.current = onComplete;
    const fullText = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOVE_LETTER"];
    const displayText = fullText.slice(0, displayLength);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (reducedMotion) {
            setDisplayLength(fullText.length);
            setDone(true);
            const t = setTimeout(()=>onCompleteRef.current(), 400);
            return ()=>clearTimeout(t);
        }
        if (displayLength >= fullText.length) {
            setDone(true);
            const t = setTimeout(()=>onCompleteRef.current(), HOLD_AFTER_TYPING_MS);
            return ()=>clearTimeout(t);
        }
        const isNewline = fullText[displayLength] === "\n";
        const delay = isNewline ? PARAGRAPH_PAUSE_MS : CHAR_DELAY_MS;
        const char = fullText[displayLength];
        const id = setTimeout(()=>{
            setDisplayLength((n)=>n + 1);
            if (char !== " " && char !== "\n") {
                try {
                    if (!soundRef.current) {
                        soundRef.current = new Audio("/music/typewriter.wav");
                    }
                    soundRef.current.currentTime = 0;
                    soundRef.current.volume = 0.6;
                    soundRef.current.play().catch(()=>{});
                } catch  {
                // no sound
                }
            }
        }, delay);
        return ()=>clearTimeout(id);
    }, [
        displayLength,
        fullText.length,
        reducedMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "max-w-2xl mx-auto px-6 py-4 text-left",
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-display text-lg sm:text-xl text-white/95 drop-shadow-md leading-relaxed whitespace-pre-line",
            children: [
                displayText,
                !done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                    className: "inline-block w-0.5 h-[1em] bg-white ml-0.5 align-baseline",
                    animate: {
                        opacity: [
                            1,
                            0
                        ]
                    },
                    transition: {
                        duration: 0.5,
                        repeat: Infinity
                    },
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/page5/TypewriterLetter.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/page5/TypewriterLetter.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/page5/TypewriterLetter.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/page5/ValentinePrompt.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ValentinePrompt",
    ()=>ValentinePrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/page5-text.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const LINE2_DELAY_MS = 3000;
const WORD_INTERVAL_MS = 2000;
const HOLD_AFTER_WORDS_MS = 2000;
function ValentinePrompt({ onComplete }) {
    const [showLine1, setShowLine1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showLine2Prefix, setShowLine2Prefix] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [extraWords, setExtraWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const onCompleteRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onComplete);
    onCompleteRef.current = onComplete;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t2 = setTimeout(()=>setShowLine2Prefix(true), LINE2_DELAY_MS);
        return ()=>clearTimeout(t2);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showLine2Prefix) return;
        let index = 0;
        const timeouts = [];
        const addWord = ()=>{
            if (index >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROMPT_WORDS"].length) {
                timeouts.push(setTimeout(()=>onCompleteRef.current(), HOLD_AFTER_WORDS_MS));
                return;
            }
            setExtraWords((prev)=>[
                    ...prev,
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROMPT_WORDS"][index]
                ]);
            index += 1;
            timeouts.push(setTimeout(addWord, WORD_INTERVAL_MS));
        };
        timeouts.push(setTimeout(addWord, WORD_INTERVAL_MS));
        return ()=>timeouts.forEach(clearTimeout);
    }, [
        showLine2Prefix
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "max-w-2xl mx-auto px-6 py-6 text-center space-y-4",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.4
        },
        children: [
            showLine1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg",
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.4
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROMPT_LINE1"]
            }, void 0, false, {
                fileName: "[project]/src/components/page5/ValentinePrompt.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this),
            showLine2Prefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                className: "font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg",
                initial: {
                    opacity: 0,
                    y: 8
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.4
                },
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROMPT_LINE2_PREFIX"],
                    extraWords.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                            className: "inline-block ml-2",
                            initial: {
                                opacity: 0,
                                scale: 0.7,
                                y: 12
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            transition: {
                                type: "spring",
                                stiffness: 260,
                                damping: 22
                            },
                            children: [
                                " ",
                                word
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/page5/ValentinePrompt.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/page5/ValentinePrompt.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/page5/ValentinePrompt.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/page5/FlowersHeartsExplosion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlowersHeartsExplosion",
    ()=>FlowersHeartsExplosion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
/** Hearts and flowers for falling confetti — emoji work everywhere and look cute */ const HEARTS = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💝",
    "♥️"
];
const FLOWERS = [
    "🌸",
    "🌷",
    "🌹",
    "💐",
    "🪷",
    "🌺"
];
const SYMBOLS = [
    ...HEARTS,
    ...FLOWERS
];
const PARTICLE_COUNT = 64;
const FALL_DURATION_MIN = 3.5;
const FALL_DURATION_MAX = 6;
const DRIFT_MAX = 120;
const DELAY_MAX = 2.2;
/**
 * Generates stable particle configs for falling confetti so we don't re-randomize on re-render.
 * Each particle starts at a random x across the top, falls down with slight horizontal drift and rotation.
 */ function useParticleConfigs(seed) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const configs = [];
        const rnd = (i, min, max)=>min + (Math.sin(seed * 999 + i * 17) * 0.5 + 0.5) * (max - min);
        for(let i = 0; i < PARTICLE_COUNT; i++){
            configs.push({
                id: i,
                startX: rnd(i, 0, 100),
                drift: rnd(i, -DRIFT_MAX, DRIFT_MAX),
                delay: rnd(i, 0, DELAY_MAX),
                duration: rnd(i, FALL_DURATION_MIN, FALL_DURATION_MAX),
                symbol: SYMBOLS[i % SYMBOLS.length],
                rotate: rnd(i, -720, 720),
                size: rnd(i, 16, 28)
            });
        }
        return configs;
    }, [
        seed
    ]);
}
function FlowersHeartsExplosion({ active, reducedMotion = false }) {
    const [seed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>Math.random() * 1e6);
    const configs = useParticleConfigs(seed);
    if (!active || reducedMotion) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none z-[5] overflow-hidden",
        "aria-hidden": true,
        children: configs.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                className: "absolute select-none",
                style: {
                    left: `${p.startX}vw`,
                    top: "-40px",
                    fontSize: p.size,
                    filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.2))"
                },
                initial: {
                    y: 0,
                    x: 0,
                    opacity: 1,
                    rotate: 0
                },
                animate: {
                    y: "calc(100vh + 80px)",
                    x: p.drift,
                    opacity: [
                        1,
                        1,
                        0.6,
                        0
                    ],
                    rotate: p.rotate
                },
                transition: {
                    duration: p.duration,
                    delay: p.delay,
                    ease: "linear"
                },
                children: p.symbol
            }, p.id, false, {
                fileName: "[project]/src/components/page5/FlowersHeartsExplosion.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/page5/FlowersHeartsExplosion.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/page5/YesNoButtons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YesNoButtons",
    ()=>YesNoButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const EDGE_MARGIN_PX = 24;
const PADDING_AROUND_FORBIDDEN_PX = 16;
const MAX_ATTEMPTS = 25;
const HOVER_DISAPPEAR_COUNT = 7;
/**
 * Returns true if rect A overlaps rect B with optional padding.
 */ function overlaps(ax, ay, aw, ah, bx, by, bw, bh, padding) {
    return ax - padding < bx + bw && ax + aw + padding > bx && ay - padding < by + bh && ay + ah + padding > by;
}
function YesNoButtons({ onYes, sectionRef }) {
    const yesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const noRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [noFloating, setNoFloating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noPosition, setNoPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoverCount, setHoverCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [noVisible, setNoVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const moveNo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const noEl = noRef.current;
        const yesEl = yesRef.current;
        const section = sectionRef.current;
        if (!noEl || !section) return;
        const noRect = noEl.getBoundingClientRect();
        const w = noRect.width;
        const h = noRect.height;
        let questionRect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        let yesRect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
        const questionEl = section.querySelector("p");
        if (questionEl) {
            const q = questionEl.getBoundingClientRect();
            questionRect = {
                x: q.left,
                y: q.top,
                width: q.width,
                height: q.height
            };
        }
        if (yesEl) {
            const y = yesEl.getBoundingClientRect();
            yesRect = {
                x: y.left,
                y: y.top,
                width: y.width,
                height: y.height
            };
        }
        const minLeft = EDGE_MARGIN_PX;
        const maxLeft = window.innerWidth - w - EDGE_MARGIN_PX;
        const minTop = EDGE_MARGIN_PX;
        const maxTop = window.innerHeight - h - EDGE_MARGIN_PX;
        for(let attempt = 0; attempt < MAX_ATTEMPTS; attempt++){
            const left = minLeft + Math.random() * Math.max(0, maxLeft - minLeft);
            const top = minTop + Math.random() * Math.max(0, maxTop - minTop);
            const noLeft = left;
            const noTop = top;
            if (overlaps(noLeft, noTop, w, h, questionRect.x, questionRect.y, questionRect.width, questionRect.height, PADDING_AROUND_FORBIDDEN_PX)) continue;
            if (overlaps(noLeft, noTop, w, h, yesRect.x, yesRect.y, yesRect.width, yesRect.height, PADDING_AROUND_FORBIDDEN_PX)) continue;
            setNoPosition({
                left: noLeft + w / 2,
                top: noTop + h / 2
            });
            setNoFloating(true);
            setHoverCount((c)=>{
                const next = c + 1;
                if (next >= HOVER_DISAPPEAR_COUNT) {
                    setTimeout(()=>setNoVisible(false), 200);
                }
                return next;
            });
            return;
        }
        setNoFloating(true);
        setNoPosition({
            left: window.innerWidth / 2,
            top: window.innerHeight / 2
        });
        setHoverCount((c)=>{
            const next = c + 1;
            if (next >= HOVER_DISAPPEAR_COUNT) setTimeout(()=>setNoVisible(false), 200);
            return next;
        });
    }, [
        sectionRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center gap-6 mt-8 relative min-h-[4rem]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                ref: yesRef,
                type: "button",
                onClick: onYes,
                className: "px-10 py-5 rounded-2xl font-display text-2xl sm:text-3xl text-white bg-white/25 backdrop-blur border-2 border-white/60 hover:bg-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page transition-colors shadow-lg shrink-0",
                initial: {
                    opacity: 0,
                    scale: 0.95
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    delay: 0.1,
                    duration: 0.4
                },
                whileHover: {
                    scale: 1.05
                },
                whileTap: {
                    scale: 0.98
                },
                children: "Yes!"
            }, void 0, false, {
                fileName: "[project]/src/components/page5/YesNoButtons.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            noVisible && !noFloating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                ref: noRef,
                type: "button",
                "aria-disabled": "true",
                tabIndex: -1,
                className: "px-10 py-5 rounded-2xl font-display text-2xl sm:text-3xl text-white/80 bg-white/15 backdrop-blur border-2 border-white/40 cursor-default select-none shrink-0",
                initial: {
                    opacity: 0,
                    scale: 0.95
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    delay: 0.2,
                    duration: 0.4
                },
                onMouseEnter: moveNo,
                onMouseMove: (e)=>{
                    const el = noRef.current;
                    if (!el) return;
                    const rect = el.getBoundingClientRect();
                    const cx = rect.left + rect.width / 2;
                    const cy = rect.top + rect.height / 2;
                    if (Math.hypot(e.clientX - cx, e.clientY - cy) < 80) moveNo();
                },
                onFocus: moveNo,
                children: "No"
            }, void 0, false, {
                fileName: "[project]/src/components/page5/YesNoButtons.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: noVisible && noFloating && noPosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                    ref: noRef,
                    type: "button",
                    "aria-disabled": "true",
                    tabIndex: -1,
                    className: "fixed px-10 py-5 rounded-2xl font-display text-2xl sm:text-3xl text-white/80 bg-white/15 backdrop-blur border-2 border-white/40 cursor-default select-none -translate-x-1/2 -translate-y-1/2 z-30 shrink-0",
                    style: {
                        left: noPosition.left,
                        top: noPosition.top
                    },
                    initial: {
                        opacity: 1,
                        scale: 1
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8
                    },
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 28
                    },
                    onMouseEnter: moveNo,
                    onMouseMove: (e)=>{
                        const el = noRef.current;
                        if (!el) return;
                        const rect = el.getBoundingClientRect();
                        const cx = rect.left + rect.width / 2;
                        const cy = rect.top + rect.height / 2;
                        if (Math.hypot(e.clientX - cx, e.clientY - cy) < 80) moveNo();
                    },
                    onFocus: moveNo,
                    children: "No"
                }, "floating-no", false, {
                    fileName: "[project]/src/components/page5/YesNoButtons.tsx",
                    lineNumber: 179,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/page5/YesNoButtons.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/page5/YesNoButtons.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/page5/Page5Content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page5Content",
    ()=>Page5Content
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$Page5Intro$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page5/Page5Intro.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$Page5BackgroundMusic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page5/Page5BackgroundMusic.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$Page5SideDinos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page5/Page5SideDinos.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$TypewriterLetter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page5/TypewriterLetter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$ValentinePrompt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page5/ValentinePrompt.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$FlowersHeartsExplosion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page5/FlowersHeartsExplosion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$YesNoButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page5/YesNoButtons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/page5-text.ts [app-ssr] (ecmascript)");
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
;
;
;
const INTRO_HOLD_MS = 4000;
const LETTER_FADE_DELAY_MS = 800;
const SUCCESS_HOLD_MS = 10000;
function Page5Content() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [scene, setScene] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("intro");
    const [reducedMotion, setReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const h = ()=>setReducedMotion(mq.matches);
        mq.addEventListener("change", h);
        return ()=>mq.removeEventListener("change", h);
    }, []);
    const goToLetter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setScene("letter"), []);
    const goToPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setScene("prompt"), []);
    const goToButtons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setScene("buttons"), []);
    // Intro: hold then transition to letter
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (scene !== "intro") return;
        const t = setTimeout(goToLetter, INTRO_HOLD_MS);
        timersRef.current.push(t);
        return ()=>{
            timersRef.current.forEach(clearTimeout);
            timersRef.current = [];
        };
    }, [
        scene,
        goToLetter
    ]);
    // Success: after 10s navigate to page-6
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (scene !== "success") return;
        const t = setTimeout(()=>router.push("/page-6"), SUCCESS_HOLD_MS);
        timersRef.current.push(t);
        return ()=>{
            timersRef.current.forEach(clearTimeout);
            timersRef.current = [];
        };
    }, [
        scene,
        router
    ]);
    const handleYes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setScene("success"), []);
    const buttonsSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const showSideDinos = scene === "letter" || scene === "prompt" || scene === "buttons" || scene === "success";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen relative flex flex-col items-center justify-center bg-valentine-page overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$Page5BackgroundMusic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Page5BackgroundMusic"], {
                duck: scene === "letter"
            }, void 0, false, {
                fileName: "[project]/src/components/page5/Page5Content.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            showSideDinos && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$Page5SideDinos$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Page5SideDinos"], {}, void 0, false, {
                fileName: "[project]/src/components/page5/Page5Content.tsx",
                lineNumber: 80,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$FlowersHeartsExplosion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FlowersHeartsExplosion"], {
                active: scene === "buttons",
                reducedMotion: reducedMotion
            }, void 0, false, {
                fileName: "[project]/src/components/page5/Page5Content.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: [
                    scene === "intro" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "relative z-10 w-full flex flex-col items-center justify-center min-h-screen px-4",
                        initial: {
                            opacity: 1
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: 0.92
                        },
                        transition: {
                            duration: 0.6,
                            ease: [
                                0.22,
                                0.61,
                                0.36,
                                1
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$Page5Intro$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Page5Intro"], {}, void 0, false, {
                                fileName: "[project]/src/components/page5/Page5Content.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$Page5Intro$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SurpriseHeadline"], {}, void 0, false, {
                                    fileName: "[project]/src/components/page5/Page5Content.tsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/page5/Page5Content.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "intro", true, {
                        fileName: "[project]/src/components/page5/Page5Content.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    scene === "letter" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "relative z-10 w-full flex flex-col items-center justify-center min-h-screen py-12",
                        initial: {
                            opacity: 0,
                            scale: 0.94,
                            y: 32
                        },
                        animate: {
                            opacity: 1,
                            scale: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 0.8,
                            ease: [
                                0.22,
                                0.61,
                                0.36,
                                1
                            ],
                            opacity: {
                                duration: 0.5
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$TypewriterLetter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypewriterLetter"], {
                            onComplete: goToPrompt,
                            reducedMotion: reducedMotion
                        }, void 0, false, {
                            fileName: "[project]/src/components/page5/Page5Content.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)
                    }, "letter", false, {
                        fileName: "[project]/src/components/page5/Page5Content.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    scene === "prompt" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "relative z-10 w-full flex flex-col items-center justify-center min-h-screen py-12",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 0.4
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$ValentinePrompt$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValentinePrompt"], {
                            onComplete: goToButtons
                        }, void 0, false, {
                            fileName: "[project]/src/components/page5/Page5Content.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this)
                    }, "prompt", false, {
                        fileName: "[project]/src/components/page5/Page5Content.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    scene === "buttons" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        ref: buttonsSectionRef,
                        className: "relative z-10 w-full flex flex-col items-center justify-center min-h-screen py-12 px-4",
                        initial: {
                            opacity: 0,
                            scale: 0.96
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: 0.75,
                            ease: [
                                0.22,
                                0.61,
                                0.36,
                                1
                            ]
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-2xl sm:text-3xl text-white drop-shadow-lg text-center mb-4",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROMPT_LINE1"],
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/page5/Page5Content.tsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROMPT_QUESTION_LINE2"]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/page5/Page5Content.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page5$2f$YesNoButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YesNoButtons"], {
                                onYes: handleYes,
                                sectionRef: buttonsSectionRef
                            }, void 0, false, {
                                fileName: "[project]/src/components/page5/Page5Content.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        ]
                    }, "buttons", true, {
                        fileName: "[project]/src/components/page5/Page5Content.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    scene === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "relative z-10 max-w-2xl mx-auto px-6 py-12 text-center",
                        initial: {
                            opacity: 0,
                            scale: 0.96
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 22
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg whitespace-pre-line leading-relaxed",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page5$2d$text$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUCCESS_MESSAGE"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/page5/Page5Content.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this)
                    }, "success", false, {
                        fileName: "[project]/src/components/page5/Page5Content.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/page5/Page5Content.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/page5/Page5Content.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_19bc6b54._.js.map