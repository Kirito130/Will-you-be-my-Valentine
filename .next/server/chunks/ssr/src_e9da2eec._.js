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
"[project]/src/lib/quiz-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Quiz configuration for Page 4 — Anti-Impostor Quiz.
 * Each option has label, outcome message (shown after selection), and points delta.
 */ __turbopack_context__.s([
    "QUIZ_QUESTIONS",
    ()=>QUIZ_QUESTIONS,
    "TIMEOUT_DELTA",
    ()=>TIMEOUT_DELTA,
    "TIMEOUT_MESSAGE",
    ()=>TIMEOUT_MESSAGE
]);
const QUIZ_QUESTIONS = [
    {
        note: "Let's start where it all began!",
        question: "Where was I born?",
        options: [
            {
                id: "A",
                label: "Nepal",
                outcomeMessage: "I was born in India! You definitely seem like an impostor. | -10 points",
                delta: -10
            },
            {
                id: "B",
                label: "Jhankaria Hospital",
                outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
                delta: -5
            },
            {
                id: "C",
                label: "Dholkawala Hospital",
                outcomeMessage: "Right! I knew you were my T-rex. | +10 points",
                delta: 10
            },
            {
                id: "D",
                label: "Saifee Hospital",
                outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
                delta: -5
            }
        ]
    },
    {
        note: "Let's see how well you know me.",
        question: "How many phones have I broken/changed until now?",
        options: [
            {
                id: "A",
                label: "1",
                outcomeMessage: "Seriously, there is no way you are my T-Rex. | -10 points",
                delta: -10
            },
            {
                id: "B",
                label: "3",
                outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
                delta: -5
            },
            {
                id: "C",
                label: "4",
                outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
                delta: -5
            },
            {
                id: "D",
                label: "5",
                outcomeMessage: "Right! I knew you were my T-rex. | +10 points",
                delta: 10
            }
        ]
    },
    {
        note: "Let's see if you know what I groove to.",
        question: "Who was my top Spotify artist for 2025?",
        options: [
            {
                id: "A",
                label: "Taylor Swift",
                outcomeMessage: "I never doubted you for a second my beloved T-rex. | +10 points",
                delta: 10
            },
            {
                id: "B",
                label: "Gracie Abrams",
                outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
                delta: -5
            },
            {
                id: "C",
                label: "Kanye West",
                outcomeMessage: "I am pretty sure you are an impostor. | -10 points",
                delta: -10
            },
            {
                id: "D",
                label: "Griff",
                outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
                delta: -5
            }
        ]
    },
    {
        note: "Let's get a little serious, shall we.",
        question: "What is the name of the book I am currently reading?",
        options: [
            {
                id: "A",
                label: "Too Good to be Real",
                outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
                delta: -5
            },
            {
                id: "B",
                label: "Too Good to be True",
                outcomeMessage: "Right! My T-Rex knows me so well. | +10 points",
                delta: 10
            },
            {
                id: "C",
                label: "Too Good to Exist",
                outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
                delta: -5
            },
            {
                id: "D",
                label: "Too Good to Last",
                outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
                delta: -5
            }
        ]
    },
    {
        note: "This is your final chance to prove your innocence!",
        question: "When was the first time I called you T-rex?",
        options: [
            {
                id: "A",
                label: "4th Jan",
                outcomeMessage: "I knew you were the imposter :( | -10 points",
                delta: -10
            },
            {
                id: "B",
                label: "4th Feb",
                outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
                delta: -5
            },
            {
                id: "C",
                label: "7th February",
                outcomeMessage: "Right! My beloved T-rex, I knew it was you. | +10 points",
                delta: 10
            },
            {
                id: "D",
                label: "10th February",
                outcomeMessage: "Wrong, are you really my T-Rex? | -5 points",
                delta: -5
            }
        ]
    }
];
const TIMEOUT_MESSAGE = "Time's up! My T-rex needs to be faster. | -5 points";
const TIMEOUT_DELTA = -5;
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
"[project]/src/components/page4/Page4Backdrop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page4Backdrop",
    ()=>Page4Backdrop
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
 * Assets placed on orbital rings. Each ring rotates around the center;
 * inner ring clockwise, outer ring counter-clockwise. No up/down float — pure rotation.
 */ const INNER_RING = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].twoHearts,
        size: 44
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithWingsFront,
        size: 40
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].gift,
        size: 38
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].ring,
        size: 36
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithLove,
        size: 42
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartLock,
        size: 36
    }
];
const OUTER_RING = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].cuteDino,
        size: 52
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].envelopeFront,
        size: 40
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].chocolateFront,
        size: 38
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithArrow,
        size: 40
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].iLoveYou1,
        size: 46
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].handWithLove,
        size: 40
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].boxWithRingFront,
        size: 42
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithWingsAngle,
        size: 40
    }
];
const INNER_RADIUS = 140;
const OUTER_RADIUS = 220;
const INNER_DURATION = 35;
const OUTER_DURATION = 48;
function Page4Backdrop() {
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
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-0 top-0 w-1/2 h-full overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0",
                style: {
                    pointerEvents: "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute left-0 top-0 w-0 h-0",
                        animate: reducedMotion ? {} : {
                            rotate: 360
                        },
                        transition: {
                            repeat: Infinity,
                            duration: INNER_DURATION,
                            ease: "linear"
                        },
                        children: INNER_RING.map((item, i)=>{
                            const angle = i / INNER_RING.length * 360;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 top-0 flex items-center justify-center opacity-90 drop-shadow-md",
                                style: {
                                    width: item.size,
                                    height: item.size,
                                    transform: `rotate(${angle}deg) translateX(${INNER_RADIUS}px) rotate(${-angle}deg)`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: item.src,
                                    alt: "",
                                    width: item.size,
                                    height: item.size,
                                    className: "object-contain w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/page4/Page4Backdrop.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this)
                            }, `inner-${i}`, false, {
                                fileName: "[project]/src/components/page4/Page4Backdrop.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/page4/Page4Backdrop.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute left-0 top-0 w-0 h-0",
                        animate: reducedMotion ? {} : {
                            rotate: -360
                        },
                        transition: {
                            repeat: Infinity,
                            duration: OUTER_DURATION,
                            ease: "linear"
                        },
                        children: OUTER_RING.map((item, i)=>{
                            const angle = i / OUTER_RING.length * 360;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 top-0 flex items-center justify-center opacity-90 drop-shadow-md",
                                style: {
                                    width: item.size,
                                    height: item.size,
                                    transform: `rotate(${angle}deg) translateX(${OUTER_RADIUS}px) rotate(${-angle}deg)`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: item.src,
                                    alt: "",
                                    width: item.size,
                                    height: item.size,
                                    className: "object-contain w-full h-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/page4/Page4Backdrop.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            }, `outer-${i}`, false, {
                                fileName: "[project]/src/components/page4/Page4Backdrop.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/page4/Page4Backdrop.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/page4/Page4Backdrop.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/page4/Page4Backdrop.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/page4/Page4Backdrop.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/page4/Page4BackgroundMusic.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page4BackgroundMusic",
    ()=>Page4BackgroundMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const MUSIC_SRC = "/music/Enchanted.mp3";
function Page4BackgroundMusic() {
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
        audio.play().catch(()=>{
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
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const audio = audioRef.current;
        if (!audio) return;
        if (!isMuted && isLoaded) tryPlay(audio);
        else audio.pause();
    }, [
        isMuted,
        isLoaded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>setIsMuted((m)=>!m),
        className: "fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur border border-white/40 text-white hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 transition-colors",
        "aria-label": isMuted ? "Play background music" : "Mute background music",
        title: isMuted ? "Play music (Enchanted)" : "Mute music",
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
                    fileName: "[project]/src/components/page4/Page4BackgroundMusic.tsx",
                    lineNumber: 64,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "23",
                    y1: "9",
                    x2: "17",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/src/components/page4/Page4BackgroundMusic.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "17",
                    y1: "9",
                    x2: "23",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/src/components/page4/Page4BackgroundMusic.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/page4/Page4BackgroundMusic.tsx",
            lineNumber: 63,
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
                    fileName: "[project]/src/components/page4/Page4BackgroundMusic.tsx",
                    lineNumber: 70,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
                }, void 0, false, {
                    fileName: "[project]/src/components/page4/Page4BackgroundMusic.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/page4/Page4BackgroundMusic.tsx",
            lineNumber: 69,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/page4/Page4BackgroundMusic.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/page4/Page4HUD.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page4HUD",
    ()=>Page4HUD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Page4HUD({ points, secondsLeft }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-5 right-5 z-20 flex flex-col items-end gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "px-5 py-3 rounded-xl bg-black/45 backdrop-blur-md border-2 border-white/70 shadow-xl ring-2 ring-white/30",
                initial: {
                    opacity: 0,
                    x: 10
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: 0.4
                },
                "aria-live": "polite",
                "aria-label": `Current points: ${points}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-display text-xl sm:text-2xl text-white font-semibold drop-shadow-md",
                    children: [
                        "Current Points:",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                            initial: {
                                scale: 1.2,
                                opacity: 0.8
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "font-bold text-amber-200",
                            children: points
                        }, points, false, {
                            fileName: "[project]/src/components/page4/Page4HUD.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        " ",
                        "points"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/page4/Page4HUD.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/page4/Page4HUD.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            secondsLeft != null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur border border-white/30 text-white font-display text-sm sm:text-base tabular-nums",
                initial: {
                    opacity: 0,
                    y: -4
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: -4
                },
                transition: {
                    duration: 0.25
                },
                "aria-live": "polite",
                children: [
                    secondsLeft,
                    "s"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/page4/Page4HUD.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/page4/Page4HUD.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/page4/Page4Content.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page4Content",
    ()=>Page4Content
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/canvas-confetti/dist/confetti.module.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$valentines$2d$store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/valentines-store.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/quiz-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page4$2f$Page4Backdrop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page4/Page4Backdrop.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page4$2f$Page4BackgroundMusic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page4/Page4BackgroundMusic.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page4$2f$Page4HUD$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/page4/Page4HUD.tsx [app-ssr] (ecmascript)");
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
const INTRO_COPY = "Before I show you the surprise my love I need to make sure that you are not an evil imposter Dino trying to ruin my surprise for my T-rex. So answer the 5 questions and get at least 30 points in order to prove me you are my one and only T-rex.";
const INTRO_DELAY_MS = 3000;
const NOTE_TO_QUESTION_MS = 3000;
const QUESTION_TO_OPTIONS_MS = 2000;
const RESULT_HOLD_MS = 3000;
const END_HOLD_MS = 6000;
const COUNTDOWN_SECONDS = 30;
const PAGE4_PERSIST_KEY = "val_page4_stage";
const PASS_MESSAGE = "Yayyyy, you did it! You proved that you are my one and only true love, my T-Rex 💖";
const FAIL_MESSAGE = "Don't worry! I know you are my one and only true love, T-Rex. Even though you messed up, I'm not letting you go cause you are mine forever now.";
function Page4Content() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { points, addPoints } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$valentines$2d$store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useValentinesStore"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("intro");
    const [showIntroButton, setShowIntroButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sureText, setSureText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [qIndex, setQIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("note");
    const [secondsLeft, setSecondsLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [outcome, setOutcome] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showEndCTA, setShowEndCTA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Restore from localStorage after mount (avoids hydration mismatch)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const s = window.localStorage.getItem(PAGE4_PERSIST_KEY);
        if (s === "end") {
            setStep("end");
            setShowEndCTA(true);
        } else if (s === "lastQuestion") {
            setStep("quiz");
            setQIndex(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUIZ_QUESTIONS"].length - 1);
            setPhase("note");
        }
    }, []);
    const clearTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        timersRef.current.forEach(clearTimeout);
        timersRef.current = [];
    }, []);
    // Intro: after 3s show "I am T-rex" button
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step !== "intro") return;
        const t = setTimeout(()=>setShowIntroButton(true), INTRO_DELAY_MS);
        timersRef.current.push(t);
        return clearTimers;
    }, [
        step,
        clearTimers
    ]);
    // Click "I am T-rex": show "Sure, we'll see that" then go to quiz
    const handleStartQuiz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setShowIntroButton(false);
        setSureText(true);
        const t = setTimeout(()=>{
            setSureText(false);
            setStep("quiz");
            setQIndex(0);
            setPhase("note");
        }, 2500);
        timersRef.current.push(t);
    }, []);
    // Quiz phase timeline: note → (3s) → question → (2s) → options + timer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step !== "quiz" || phase !== "note") return;
        const t = setTimeout(()=>{
            setPhase("question");
        }, NOTE_TO_QUESTION_MS);
        timersRef.current.push(t);
        return ()=>clearTimers();
    }, [
        step,
        phase,
        clearTimers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step !== "quiz" || phase !== "question") return;
        const t = setTimeout(()=>{
            setPhase("options");
            setSecondsLeft(COUNTDOWN_SECONDS);
        }, QUESTION_TO_OPTIONS_MS);
        timersRef.current.push(t);
        return ()=>clearTimers();
    }, [
        step,
        phase,
        clearTimers
    ]);
    // Countdown tick when in options phase — start at 30 and decrement every second
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step !== "quiz" || phase !== "options") return;
        setSecondsLeft(COUNTDOWN_SECONDS);
        const id = setInterval(()=>{
            setSecondsLeft((prev)=>prev == null || prev <= 0 ? null : prev - 1);
        }, 1000);
        return ()=>clearInterval(id);
    }, [
        step,
        phase,
        qIndex
    ]);
    // When countdown hits 0, apply timeout outcome
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (secondsLeft !== 0 || step !== "quiz" || phase !== "options") return;
        addPoints(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIMEOUT_DELTA"]);
        setOutcome(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TIMEOUT_MESSAGE"]);
        setPhase("result");
        setSecondsLeft(null);
    }, [
        secondsLeft,
        step,
        phase,
        addPoints
    ]);
    // After result: wait 3s then next question or end; persist when reaching end
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step !== "quiz" || phase !== "result") return;
        const t = setTimeout(()=>{
            setOutcome(null);
            if (qIndex + 1 >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUIZ_QUESTIONS"].length) {
                setStep("end");
                setSecondsLeft(null);
                window.localStorage.setItem(PAGE4_PERSIST_KEY, "end");
            } else {
                const nextIndex = qIndex + 1;
                if (nextIndex === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUIZ_QUESTIONS"].length - 1) {
                    window.localStorage.setItem(PAGE4_PERSIST_KEY, "lastQuestion");
                }
                setQIndex(nextIndex);
                setPhase("note");
            }
        }, RESULT_HOLD_MS);
        timersRef.current.push(t);
        return ()=>clearTimers();
    }, [
        step,
        phase,
        qIndex,
        clearTimers
    ]);
    // End screen: after 6s show CTA
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step !== "end") return;
        const t = setTimeout(()=>setShowEndCTA(true), END_HOLD_MS);
        timersRef.current.push(t);
        return ()=>clearTimers();
    }, [
        step,
        clearTimers
    ]);
    // Confetti celebration when final end screen appears
    const hasTriggeredConfetti = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (step !== "end" || hasTriggeredConfetti.current) return;
        hasTriggeredConfetti.current = true;
        const duration = 2500;
        const end = Date.now() + duration;
        const colors = [
            "#fff",
            "#fce7f3",
            "#f472b6",
            "#e11d48",
            "#fbbf24"
        ];
        const frame = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: {
                    x: 0
                },
                colors
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$canvas$2d$confetti$2f$dist$2f$confetti$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: {
                    x: 1
                },
                colors
            });
            if (Date.now() < end) requestAnimationFrame(frame);
        };
        frame();
    }, [
        step
    ]);
    const handleOptionSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((option)=>{
        if (phase !== "options") return;
        setSecondsLeft(null);
        addPoints(option.delta);
        setOutcome(option.outcomeMessage);
        setPhase("result");
    }, [
        phase,
        addPoints
    ]);
    const handleGoToSurprise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        router.push("/page-5");
    }, [
        router
    ]);
    const question = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$quiz$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QUIZ_QUESTIONS"][qIndex];
    const showTimerAboveQuestion = step === "quiz" && (phase === "question" || phase === "options");
    const timerValue = phase === "options" ? secondsLeft ?? 30 : 30;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen relative flex flex-col items-center justify-center bg-valentine-page2 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page4$2f$Page4Backdrop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Page4Backdrop"], {}, void 0, false, {
                fileName: "[project]/src/components/page4/Page4Content.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page4$2f$Page4BackgroundMusic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Page4BackgroundMusic"], {}, void 0, false, {
                fileName: "[project]/src/components/page4/Page4Content.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$page4$2f$Page4HUD$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Page4HUD"], {
                points: points
            }, void 0, false, {
                fileName: "[project]/src/components/page4/Page4Content.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full flex justify-start min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-xl flex flex-col items-center justify-center px-8 py-8 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: [
                            step === "intro" && !sureText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "space-y-6",
                                initial: {
                                    opacity: 0,
                                    y: 12
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -12
                                },
                                transition: {
                                    duration: 0.4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg leading-relaxed",
                                        children: INTRO_COPY
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/page4/Page4Content.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    showIntroButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                        type: "button",
                                        onClick: handleStartQuiz,
                                        className: "px-8 py-4 rounded-2xl font-display text-xl sm:text-2xl text-white bg-white/25 backdrop-blur border-2 border-white/50 hover:bg-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 transition-colors shadow-lg",
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
                                            scale: 1.03
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        children: "I am T-rex"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/page4/Page4Content.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "intro", true, {
                                fileName: "[project]/src/components/page4/Page4Content.tsx",
                                lineNumber: 225,
                                columnNumber: 13
                            }, this),
                            step === "intro" && sureText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                className: "font-display text-2xl sm:text-3xl text-white drop-shadow-lg",
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0
                                },
                                transition: {
                                    duration: 0.35
                                },
                                children: "Sure, we'll see that"
                            }, "sure", false, {
                                fileName: "[project]/src/components/page4/Page4Content.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this),
                            step === "quiz" && question && phase === "result" && outcome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "w-full space-y-4",
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
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 22
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-display text-xl sm:text-2xl md:text-3xl text-white drop-shadow-lg whitespace-pre-line",
                                    children: outcome.replace(" | ", "\n")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/page4/Page4Content.tsx",
                                    lineNumber: 275,
                                    columnNumber: 15
                                }, this)
                            }, `result-${qIndex}`, false, {
                                fileName: "[project]/src/components/page4/Page4Content.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this),
                            step === "quiz" && question && phase !== "result" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "w-full space-y-6",
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
                                    duration: 0.3
                                },
                                children: [
                                    phase === "note" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-xl sm:text-2xl text-white/95 drop-shadow-md",
                                        children: question.note
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/page4/Page4Content.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this),
                                    (phase === "question" || phase === "options") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            showTimerAboveQuestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display text-2xl sm:text-3xl text-white drop-shadow-md tabular-nums",
                                                "aria-live": "polite",
                                                children: [
                                                    "Time Left: ",
                                                    timerValue
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/page4/Page4Content.tsx",
                                                lineNumber: 298,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg",
                                                children: question.question
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/page4/Page4Content.tsx",
                                                lineNumber: 305,
                                                columnNumber: 19
                                            }, this),
                                            phase === "options" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                initial: {
                                                    opacity: 0,
                                                    y: 8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    delay: 0.1,
                                                    staggerChildren: 0.05
                                                },
                                                children: question.options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                        type: "button",
                                                        onClick: ()=>handleOptionSelect(opt),
                                                        className: "px-5 py-3 rounded-xl font-display text-lg sm:text-xl text-white bg-white/20 backdrop-blur border-2 border-white/40 hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 text-left transition-colors",
                                                        initial: {
                                                            opacity: 0,
                                                            y: 8
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0
                                                        },
                                                        transition: {
                                                            delay: 0.05 * i
                                                        },
                                                        whileHover: {
                                                            scale: 1.02
                                                        },
                                                        whileTap: {
                                                            scale: 0.98
                                                        },
                                                        children: [
                                                            opt.id,
                                                            ") ",
                                                            opt.label
                                                        ]
                                                    }, opt.id, true, {
                                                        fileName: "[project]/src/components/page4/Page4Content.tsx",
                                                        lineNumber: 316,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/page4/Page4Content.tsx",
                                                lineNumber: 309,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, `q-${qIndex}-${phase}`, true, {
                                fileName: "[project]/src/components/page4/Page4Content.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this),
                            step === "end" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "space-y-6",
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
                                        className: "font-display text-xl sm:text-2xl md:text-3xl text-white drop-shadow-lg leading-relaxed",
                                        children: points >= 30 ? PASS_MESSAGE : FAIL_MESSAGE
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/page4/Page4Content.tsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this),
                                    showEndCTA && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                        type: "button",
                                        onClick: handleGoToSurprise,
                                        className: "px-8 py-4 rounded-2xl font-display text-xl sm:text-2xl text-white bg-white/25 backdrop-blur border-2 border-white/50 hover:bg-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 transition-colors shadow-lg",
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
                                        whileHover: {
                                            scale: 1.03
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        children: "I wanna see my surprise!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/page4/Page4Content.tsx",
                                        lineNumber: 349,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, "end", true, {
                                fileName: "[project]/src/components/page4/Page4Content.tsx",
                                lineNumber: 338,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/page4/Page4Content.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/page4/Page4Content.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/page4/Page4Content.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/page4/Page4Content.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_e9da2eec._.js.map