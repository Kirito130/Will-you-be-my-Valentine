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
"[project]/src/components/next/hero-text-flow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroTextFlow",
    ()=>HeroTextFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
/**
 * Tokenizes a line by whitespace for diffing.
 */ function tokenize(text) {
    return text.trim().split(/\s+/).filter(Boolean);
}
/**
 * Finds the single differing index between two token arrays of the same length, or -1.
 */ function findReplacementIndex(prev, next) {
    if (prev.length !== next.length) return -1;
    let idx = -1;
    for(let i = 0; i < prev.length; i++){
        if (prev[i] !== next[i]) {
            if (idx !== -1) return -1;
            idx = i;
        }
    }
    return idx;
}
/**
 * Finds the index at which a new token was inserted (next = prev + one token).
 */ function findInsertion(prev, next) {
    if (next.length !== prev.length + 1) return null;
    for(let i = 0; i <= prev.length; i++){
        const prevBefore = prev.slice(0, i);
        const prevAfter = prev.slice(i);
        const nextBefore = next.slice(0, i);
        const nextAfter = next.slice(i + 1);
        if (prevBefore.every((t, j)=>t === nextBefore[j]) && prevAfter.every((t, j)=>t === nextAfter[j])) {
            return {
                index: i,
                newToken: next[i]
            };
        }
    }
    return null;
}
/** Page 2 hero: much larger text for readability (Parisienne). */ const HERO_TEXT_CLASS = "text-center text-white font-display px-6 py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl";
function HeroTextFlow({ currentText, previousText }) {
    const prevTokens = previousText ? tokenize(previousText) : [];
    const nextTokens = tokenize(currentText);
    const replacementIdx = findReplacementIndex(prevTokens, nextTokens);
    const insertion = findInsertion(prevTokens, nextTokens);
    // No replacement / first stage: full-line fade
    if (!previousText || replacementIdx === -1 && !insertion) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
            className: HERO_TEXT_CLASS,
            style: {
                overflow: "visible"
            },
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: 0.5
            },
            children: currentText
        }, currentText, false, {
            fileName: "[project]/src/components/next/hero-text-flow.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    // One word replaced: new falls from above, old pops and disappears
    if (replacementIdx !== -1) {
        const oldWord = prevTokens[replacementIdx];
        const newWord = nextTokens[replacementIdx];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `${HERO_TEXT_CLASS} flex flex-wrap justify-center items-center gap-x-1 gap-y-1`,
            style: {
                overflow: "visible"
            },
            children: nextTokens.map((token, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center justify-center overflow-visible shrink-0",
                    children: [
                        i === replacementIdx ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative inline-flex items-center justify-center min-w-max overflow-visible shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "inline-block whitespace-nowrap",
                                    initial: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    animate: {
                                        opacity: 0,
                                        scale: 1.2
                                    },
                                    transition: {
                                        delay: 0.32,
                                        duration: 0.2,
                                        ease: "easeOut"
                                    },
                                    children: oldWord
                                }, `old-${oldWord}`, false, {
                                    fileName: "[project]/src/components/next/hero-text-flow.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                    className: "absolute left-0 top-0 inline-block whitespace-nowrap",
                                    initial: {
                                        y: -56,
                                        opacity: 1
                                    },
                                    animate: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 0.5,
                                        ease: [
                                            0.22,
                                            0.61,
                                            0.36,
                                            1
                                        ]
                                    },
                                    children: newWord
                                }, `new-${newWord}`, false, {
                                    fileName: "[project]/src/components/next/hero-text-flow.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/next/hero-text-flow.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block whitespace-nowrap shrink-0",
                            children: token
                        }, void 0, false, {
                            fileName: "[project]/src/components/next/hero-text-flow.tsx",
                            lineNumber: 118,
                            columnNumber: 15
                        }, this),
                        i < nextTokens.length - 1 ? "\u00A0" : null
                    ]
                }, `${i}-${token}`, true, {
                    fileName: "[project]/src/components/next/hero-text-flow.tsx",
                    lineNumber: 90,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/next/hero-text-flow.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this);
    }
    // One word inserted: pop-in (keep current animation)
    if (insertion) {
        const { index } = insertion;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `${HERO_TEXT_CLASS} flex flex-wrap justify-center items-center gap-x-1 gap-y-1`,
            style: {
                overflow: "visible"
            },
            children: nextTokens.map((token, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex overflow-visible shrink-0",
                    children: [
                        i === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                            className: "inline-block whitespace-nowrap shrink-0",
                            initial: {
                                opacity: 0,
                                scale: 0
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 24,
                                mass: 0.8
                            },
                            children: token
                        }, void 0, false, {
                            fileName: "[project]/src/components/next/hero-text-flow.tsx",
                            lineNumber: 138,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block whitespace-nowrap shrink-0",
                            children: token
                        }, void 0, false, {
                            fileName: "[project]/src/components/next/hero-text-flow.tsx",
                            lineNumber: 152,
                            columnNumber: 15
                        }, this),
                        i < nextTokens.length - 1 ? "\u00A0" : null
                    ]
                }, `${i}-${token}`, true, {
                    fileName: "[project]/src/components/next/hero-text-flow.tsx",
                    lineNumber: 136,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/next/hero-text-flow.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
        className: HERO_TEXT_CLASS,
        style: {
            overflow: "visible"
        },
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        transition: {
            duration: 0.5
        },
        children: currentText
    }, currentText, false, {
        fileName: "[project]/src/components/next/hero-text-flow.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/next/ChoiceButtons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChoiceButtons",
    ()=>ChoiceButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function ChoiceButtons({ onChoice }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleClick = (choice)=>{
        onChoice(choice);
        router.push("/page-3");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col sm:flex-row gap-5 justify-center items-center mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                type: "button",
                onClick: ()=>handleClick("yes"),
                className: "px-10 py-5 rounded-2xl font-display text-xl sm:text-2xl md:text-3xl text-white bg-white/20 backdrop-blur border-2 border-white/60 hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 transition-colors",
                initial: {
                    opacity: 0,
                    y: 16
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.2,
                    duration: 0.5,
                    ease: [
                        0.22,
                        0.61,
                        0.36,
                        1
                    ]
                },
                whileHover: {
                    scale: 1.03
                },
                whileTap: {
                    scale: 0.98
                },
                children: "Yes, I am in"
            }, void 0, false, {
                fileName: "[project]/src/components/next/ChoiceButtons.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                type: "button",
                onClick: ()=>handleClick("hell"),
                className: "px-10 py-5 rounded-2xl font-display text-xl sm:text-2xl md:text-3xl text-white bg-white/25 backdrop-blur border-2 border-white/70 hover:bg-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 transition-colors",
                initial: {
                    opacity: 0,
                    y: 16
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.35,
                    duration: 0.5,
                    ease: [
                        0.22,
                        0.61,
                        0.36,
                        1
                    ]
                },
                whileHover: {
                    scale: 1.03
                },
                whileTap: {
                    scale: 0.98
                },
                children: "Hell yeah, I am innn!!!"
            }, void 0, false, {
                fileName: "[project]/src/components/next/ChoiceButtons.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/next/ChoiceButtons.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/next/Page2BackgroundMusic.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page2BackgroundMusic",
    ()=>Page2BackgroundMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const MUSIC_SRC = "/music/Lover.MP3";
function Page2BackgroundMusic() {
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
        if (!isMuted && isLoaded) {
            tryPlay(audio);
        } else {
            audio.pause();
        }
    }, [
        isMuted,
        isLoaded
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>setIsMuted((m)=>!m),
        className: "fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur border border-white/40 text-white hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 transition-colors",
        "aria-label": isMuted ? "Play background music" : "Mute background music",
        title: isMuted ? "Play music (Lover)" : "Mute music",
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
                    fileName: "[project]/src/components/next/Page2BackgroundMusic.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "23",
                    y1: "9",
                    x2: "17",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/src/components/next/Page2BackgroundMusic.tsx",
                    lineNumber: 73,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "17",
                    y1: "9",
                    x2: "23",
                    y2: "15"
                }, void 0, false, {
                    fileName: "[project]/src/components/next/Page2BackgroundMusic.tsx",
                    lineNumber: 74,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/next/Page2BackgroundMusic.tsx",
            lineNumber: 71,
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
                    fileName: "[project]/src/components/next/Page2BackgroundMusic.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
                }, void 0, false, {
                    fileName: "[project]/src/components/next/Page2BackgroundMusic.tsx",
                    lineNumber: 79,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/next/Page2BackgroundMusic.tsx",
            lineNumber: 77,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/next/Page2BackgroundMusic.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
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
"[project]/src/components/next/Page2Backdrop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Page2Backdrop",
    ()=>Page2Backdrop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/assets.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/** Asset config: src and size (bigger and more scattered) */ const ASSETS = [
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].twoHearts,
        size: 72
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithWingsFront,
        size: 68
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithLove,
        size: 76
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithArrow,
        size: 64
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].twoHearts,
        size: 70
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartWithWingsAngle,
        size: 66
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].gift,
        size: 62
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].ring,
        size: 58
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].chocolateFront,
        size: 60
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].iLoveYou1,
        size: 74
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].heartLock,
        size: 56
    },
    {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$assets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assets"].envelopeFront,
        size: 60
    }
];
const PADDING = 40;
const CENTER_ZONE_WIDTH_RATIO = 0.6;
const CENTER_ZONE_HEIGHT_RATIO = 0.45;
const MIN_SPEED = 0.4;
const MAX_SPEED = 1.2;
const BOUNCE_DAMP = 0.98;
function Page2Backdrop() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const positionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const velocitiesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const sizesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(ASSETS.map((a)=>a.size));
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        mountedRef.current = true;
        const container = containerRef.current;
        if (!container) return;
        const w = window.innerWidth;
        const h = window.innerHeight;
        const cx = w / 2;
        const cy = h / 2;
        const zoneW = w * CENTER_ZONE_WIDTH_RATIO;
        const zoneH = h * CENTER_ZONE_HEIGHT_RATIO;
        const zoneLeft = cx - zoneW / 2;
        const zoneRight = cx + zoneW / 2;
        const zoneTop = cy - zoneH / 2;
        const zoneBottom = cy + zoneH / 2;
        const positions = positionsRef.current;
        const velocities = velocitiesRef.current;
        const sizes = sizesRef.current;
        if (positions.length === 0) {
            for(let i = 0; i < ASSETS.length; i++){
                const size = sizes[i];
                positions.push({
                    x: PADDING + Math.random() * (w - 2 * PADDING - size),
                    y: PADDING + Math.random() * (h - 2 * PADDING - size)
                });
                const angle = Math.random() * Math.PI * 2;
                const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
                velocities.push({
                    x: Math.cos(angle) * speed,
                    y: Math.sin(angle) * speed
                });
            }
            requestAnimationFrame(()=>{
                itemRefs.current.forEach((el, i)=>{
                    if (el && positions[i]) {
                        el.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
                    }
                });
            });
        }
        function bounceOffEdges(i) {
            const pos = positions[i];
            const vel = velocities[i];
            const size = sizes[i];
            const r = size / 2;
            if (pos.x <= 0) {
                pos.x = 0;
                vel.x = Math.abs(vel.x) * BOUNCE_DAMP;
            }
            if (pos.x >= w - size) {
                pos.x = w - size;
                vel.x = -Math.abs(vel.x) * BOUNCE_DAMP;
            }
            if (pos.y <= 0) {
                pos.y = 0;
                vel.y = Math.abs(vel.y) * BOUNCE_DAMP;
            }
            if (pos.y >= h - size) {
                pos.y = h - size;
                vel.y = -Math.abs(vel.y) * BOUNCE_DAMP;
            }
        }
        function bounceOffCenterZone(i) {
            const pos = positions[i];
            const vel = velocities[i];
            const size = sizes[i];
            const centerX = pos.x + size / 2;
            const centerY = pos.y + size / 2;
            const insideX = centerX >= zoneLeft && centerX <= zoneRight;
            const insideY = centerY >= zoneTop && centerY <= zoneBottom;
            if (!insideX || !insideY) return;
            const fromLeft = centerX - zoneLeft;
            const fromRight = zoneRight - centerX;
            const fromTop = centerY - zoneTop;
            const fromBottom = zoneBottom - centerY;
            const minHor = Math.min(fromLeft, fromRight);
            const minVer = Math.min(fromTop, fromBottom);
            if (minHor < minVer) {
                vel.x *= -BOUNCE_DAMP;
                pos.x = centerX < cx ? zoneLeft - size : zoneRight;
                pos.x = Math.max(PADDING, Math.min(w - PADDING - size, pos.x));
            } else {
                vel.y *= -BOUNCE_DAMP;
                pos.y = centerY < cy ? zoneTop - size : zoneBottom;
                pos.y = Math.max(PADDING, Math.min(h - PADDING - size, pos.y));
            }
        }
        function bounceOffEachOther(i, j) {
            const posI = positions[i];
            const posJ = positions[j];
            const velI = velocities[i];
            const velJ = velocities[j];
            const rI = sizes[i] / 2;
            const rJ = sizes[j] / 2;
            const centerI = {
                x: posI.x + rI,
                y: posI.y + rI
            };
            const centerJ = {
                x: posJ.x + rJ,
                y: posJ.y + rJ
            };
            const dx = centerJ.x - centerI.x;
            const dy = centerJ.y - centerI.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const minDist = rI + rJ;
            if (dist < minDist && dist > 0.01) {
                const overlap = minDist - dist;
                const nx = dx / dist;
                const ny = dy / dist;
                posI.x -= nx * overlap * 0.5;
                posI.y -= ny * overlap * 0.5;
                posJ.x += nx * overlap * 0.5;
                posJ.y += ny * overlap * 0.5;
                const dvx = velJ.x - velI.x;
                const dvy = velJ.y - velI.y;
                const dvn = dvx * nx + dvy * ny;
                if (dvn > 0) {
                    velI.x += nx * dvn * 0.5;
                    velI.y += ny * dvn * 0.5;
                    velJ.x -= nx * dvn * 0.5;
                    velJ.y -= ny * dvn * 0.5;
                }
            }
        }
        function tick() {
            if (!mountedRef.current) return;
            const w = window.innerWidth;
            const h = window.innerHeight;
            const cx = w / 2;
            const cy = h / 2;
            const zoneW = w * CENTER_ZONE_WIDTH_RATIO;
            const zoneH = h * CENTER_ZONE_HEIGHT_RATIO;
            const zoneLeft = cx - zoneW / 2;
            const zoneRight = cx + zoneW / 2;
            const zoneTop = cy - zoneH / 2;
            const zoneBottom = cy + zoneH / 2;
            const positions = positionsRef.current;
            const velocities = velocitiesRef.current;
            const sizes = sizesRef.current;
            const n = positions.length;
            for(let i = 0; i < n; i++){
                positions[i].x += velocities[i].x;
                positions[i].y += velocities[i].y;
            }
            for(let i = 0; i < n; i++){
                bounceOffEdges(i);
                bounceOffCenterZone(i);
            }
            for(let i = 0; i < n; i++){
                for(let j = i + 1; j < n; j++){
                    bounceOffEachOther(i, j);
                }
            }
            for(let i = 0; i < n; i++){
                const el = itemRefs.current[i];
                if (el) {
                    el.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
                }
            }
            rafRef.current = requestAnimationFrame(tick);
        }
        rafRef.current = requestAnimationFrame(tick);
        return ()=>{
            mountedRef.current = false;
            cancelAnimationFrame(rafRef.current);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "fixed inset-0 overflow-hidden pointer-events-none z-0",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-25",
                style: {
                    background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/next/Page2Backdrop.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            ASSETS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: (el)=>{
                        itemRefs.current[i] = el;
                    },
                    className: "absolute left-0 top-0 w-[var(--size)] h-[var(--size)] opacity-85 drop-shadow-lg will-change-transform",
                    style: {
                        "--size": `${item.size}px`,
                        width: item.size,
                        height: item.size,
                        transform: positionsRef.current[i] ? `translate(${positionsRef.current[i].x}px, ${positionsRef.current[i].y}px)` : "translate(0,0)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: item.src,
                        alt: "",
                        width: item.size,
                        height: item.size,
                        className: "object-contain w-full h-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/next/Page2Backdrop.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/components/next/Page2Backdrop.tsx",
                    lineNumber: 234,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/next/Page2Backdrop.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/next/NextPageContent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextPageContent",
    ()=>NextPageContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$next$2f$hero$2d$text$2d$flow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/next/hero-text-flow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$next$2f$ChoiceButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/next/ChoiceButtons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$next$2f$Page2BackgroundMusic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/next/Page2BackgroundMusic.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$next$2f$Page2Backdrop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/next/Page2Backdrop.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$valentines$2d$store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/valentines-store.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/** 8 stages, 3 seconds each; then 10s hold; then question; 2s later buttons */ const STAGES = [
    "Hiiii Sakina ;)",
    "My Dino",
    "My T-rex",
    "My Love",
    "My True Love",
    "My First Love",
    "My Last",
    "My Forever"
];
const STAGE_DURATION_MS = 3000;
const HOLD_AFTER_LAST_STAGE_MS = 10000;
const DELAY_AFTER_QUESTION_MS = 2000;
const PAGE2_PERSIST_KEY = "val_page2_stage";
function NextPageContent() {
    const { setLastChoicePage2 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$valentines$2d$store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useValentinesStore"])();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("stages");
    const [stageIndex, setStageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showQuestion, setShowQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showButtons, setShowButtons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentText = STAGES[stageIndex];
    const previousText = stageIndex > 0 ? STAGES[stageIndex - 1] : null;
    // Restore from localStorage after mount (avoids hydration mismatch)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const s = window.localStorage.getItem(PAGE2_PERSIST_KEY);
        if (s === "buttons") {
            setPhase("question");
            setShowQuestion(true);
            setShowButtons(true);
        } else if (s === "question") {
            setPhase("question");
            setShowQuestion(true);
            setShowButtons(false);
        } else if (s === "lastStage") {
            setStageIndex(STAGES.length - 1);
            setPhase("stages");
            setShowQuestion(false);
            setShowButtons(false);
        }
    }, []);
    // Advance stage every 3s while in "stages" phase (timeout per step so no interval cleanup issues)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (phase !== "stages" || stageIndex >= STAGES.length - 1) return;
        const t = setTimeout(()=>setStageIndex((i)=>i + 1), STAGE_DURATION_MS);
        return ()=>clearTimeout(t);
    }, [
        phase,
        stageIndex
    ]);
    // When we reach last stage, persist and wait 10s then show question
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (stageIndex < STAGES.length - 1) return;
        window.localStorage.setItem(PAGE2_PERSIST_KEY, "lastStage");
        const t = setTimeout(()=>{
            setPhase("question");
            setShowQuestion(true);
            window.localStorage.setItem(PAGE2_PERSIST_KEY, "question");
        }, HOLD_AFTER_LAST_STAGE_MS);
        return ()=>clearTimeout(t);
    }, [
        stageIndex
    ]);
    // 2s after question appears, show buttons and persist
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showQuestion) return;
        const t = setTimeout(()=>{
            setShowButtons(true);
            window.localStorage.setItem(PAGE2_PERSIST_KEY, "buttons");
        }, DELAY_AFTER_QUESTION_MS);
        return ()=>clearTimeout(t);
    }, [
        showQuestion
    ]);
    const handleChoice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((choice)=>{
        if (choice) setLastChoicePage2(choice);
    }, [
        setLastChoicePage2
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen flex flex-col items-center justify-center bg-valentine-page2 px-6 py-8 overflow-x-hidden overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$next$2f$Page2Backdrop$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Page2Backdrop"], {}, void 0, false, {
                fileName: "[project]/src/components/next/NextPageContent.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$next$2f$Page2BackgroundMusic$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Page2BackgroundMusic"], {}, void 0, false, {
                fileName: "[project]/src/components/next/NextPageContent.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full flex flex-col items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: [
                        phase === "stages" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex flex-col items-center justify-center min-h-[40vh] w-full overflow-visible",
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
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$next$2f$hero$2d$text$2d$flow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroTextFlow"], {
                                currentText: currentText,
                                previousText: previousText
                            }, void 0, false, {
                                fileName: "[project]/src/components/next/NextPageContent.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        }, "flow", false, {
                            fileName: "[project]/src/components/next/NextPageContent.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        phase === "question" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex flex-col items-center justify-center min-h-[40vh]",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: 0.5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                    className: "text-center text-white font-display max-w-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight",
                                    initial: {
                                        opacity: 0,
                                        scale: 0.96
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: 0.5,
                                        ease: [
                                            0.22,
                                            0.61,
                                            0.36,
                                            1
                                        ]
                                    },
                                    children: "Are you ready for the surprise?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/next/NextPageContent.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                showButtons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$next$2f$ChoiceButtons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChoiceButtons"], {
                                    onChoice: handleChoice
                                }, void 0, false, {
                                    fileName: "[project]/src/components/next/NextPageContent.tsx",
                                    lineNumber: 136,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, "question", true, {
                            fileName: "[project]/src/components/next/NextPageContent.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/next/NextPageContent.tsx",
                    lineNumber: 106,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/next/NextPageContent.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/next/NextPageContent.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_c28d7e59._.js.map