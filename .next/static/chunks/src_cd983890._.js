(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/valentines-store.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ValentinesStoreProvider",
    ()=>ValentinesStoreProvider,
    "useValentinesStore",
    ()=>useValentinesStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const STORAGE_KEY = "val_state";
function loadState() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            return {
                points: typeof parsed.points === "number" ? parsed.points : 0,
                lastChoicePage2: parsed.lastChoicePage2 === "yes" || parsed.lastChoicePage2 === "hell" ? parsed.lastChoicePage2 : null
            };
        }
    } catch (e) {
    // ignore
    }
    return {
        points: 0,
        lastChoicePage2: null
    };
}
function saveState(state) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
    // ignore
    }
}
const ValentinesStoreContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function ValentinesStoreProvider(param) {
    let { children } = param;
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        points: 0,
        lastChoicePage2: null
    });
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ValentinesStoreProvider.useEffect": ()=>{
            setState(loadState());
            setHydrated(true);
        }
    }["ValentinesStoreProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ValentinesStoreProvider.useEffect": ()=>{
            if (hydrated) saveState(state);
        }
    }["ValentinesStoreProvider.useEffect"], [
        hydrated,
        state
    ]);
    const addPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ValentinesStoreProvider.useCallback[addPoints]": (delta)=>{
            setState({
                "ValentinesStoreProvider.useCallback[addPoints]": (prev)=>({
                        ...prev,
                        points: prev.points + delta
                    })
            }["ValentinesStoreProvider.useCallback[addPoints]"]);
        }
    }["ValentinesStoreProvider.useCallback[addPoints]"], []);
    const setPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ValentinesStoreProvider.useCallback[setPoints]": (value)=>{
            setState({
                "ValentinesStoreProvider.useCallback[setPoints]": (prev)=>({
                        ...prev,
                        points: value
                    })
            }["ValentinesStoreProvider.useCallback[setPoints]"]);
        }
    }["ValentinesStoreProvider.useCallback[setPoints]"], []);
    const setLastChoicePage2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ValentinesStoreProvider.useCallback[setLastChoicePage2]": (choice)=>{
            setState({
                "ValentinesStoreProvider.useCallback[setLastChoicePage2]": (prev)=>({
                        ...prev,
                        lastChoicePage2: choice
                    })
            }["ValentinesStoreProvider.useCallback[setLastChoicePage2]"]);
        }
    }["ValentinesStoreProvider.useCallback[setLastChoicePage2]"], []);
    const value = {
        points: state.points,
        addPoints,
        setPoints,
        lastChoicePage2: state.lastChoicePage2,
        setLastChoicePage2
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ValentinesStoreContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/valentines-store.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(ValentinesStoreProvider, "mv4qMR7zGjt58XqeTOsC9Ma2XHo=");
_c = ValentinesStoreProvider;
function useValentinesStore() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ValentinesStoreContext);
    if (!ctx) {
        throw new Error("useValentinesStore must be used within ValentinesStoreProvider");
    }
    return ctx;
}
_s1(useValentinesStore, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "ValentinesStoreProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HeartTrail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeartTrail",
    ()=>HeartTrail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const THROTTLE_MS = 60;
const FADE_DURATION = 2.5;
const MAX_HEARTS = 28;
const HEART_SIZE = 18;
/**
 * Single heart in the trail: small SVG heart that fades out and is then removed.
 */ function TrailHeart(param) {
    let { id, x, y, onComplete } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "absolute pointer-events-none",
        style: {
            left: x,
            top: y,
            width: HEART_SIZE,
            height: HEART_SIZE,
            transform: "translate(-50%, -50%)"
        },
        initial: {
            opacity: 0.9,
            scale: 0.8
        },
        animate: {
            opacity: 0,
            scale: 1.1
        },
        transition: {
            duration: FADE_DURATION,
            ease: "easeOut"
        },
        onAnimationComplete: ()=>onComplete(id),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "w-full h-full drop-shadow-sm",
            "aria-hidden": true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "#e63950",
                stroke: "#1a0a0a",
                strokeWidth: "1",
                strokeLinejoin: "round",
                d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            }, void 0, false, {
                fileName: "[project]/src/components/HeartTrail.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/HeartTrail.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HeartTrail.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = TrailHeart;
function HeartTrail() {
    _s();
    const [hearts, setHearts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [reducedMotion, setReducedMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const lastMoveRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const idRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeartTrail.useEffect": ()=>{
            const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
            setReducedMotion(mq.matches);
            const handler = {
                "HeartTrail.useEffect.handler": ()=>setReducedMotion(mq.matches)
            }["HeartTrail.useEffect.handler"];
            mq.addEventListener("change", handler);
            return ({
                "HeartTrail.useEffect": ()=>mq.removeEventListener("change", handler)
            })["HeartTrail.useEffect"];
        }
    }["HeartTrail.useEffect"], []);
    const addHeart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeartTrail.useCallback[addHeart]": (clientX, clientY)=>{
            const id = ++idRef.current;
            setHearts({
                "HeartTrail.useCallback[addHeart]": (prev)=>{
                    const next = [
                        ...prev,
                        {
                            id,
                            x: clientX,
                            y: clientY
                        }
                    ];
                    if (next.length > MAX_HEARTS) return next.slice(-MAX_HEARTS);
                    return next;
                }
            }["HeartTrail.useCallback[addHeart]"]);
        }
    }["HeartTrail.useCallback[addHeart]"], []);
    const removeHeart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeartTrail.useCallback[removeHeart]": (id)=>{
            setHearts({
                "HeartTrail.useCallback[removeHeart]": (prev)=>prev.filter({
                        "HeartTrail.useCallback[removeHeart]": (h)=>h.id !== id
                    }["HeartTrail.useCallback[removeHeart]"])
            }["HeartTrail.useCallback[removeHeart]"]);
        }
    }["HeartTrail.useCallback[removeHeart]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeartTrail.useEffect": ()=>{
            if (reducedMotion) return;
            const handleMove = {
                "HeartTrail.useEffect.handleMove": (e)=>{
                    const now = Date.now();
                    if (now - lastMoveRef.current < THROTTLE_MS) return;
                    lastMoveRef.current = now;
                    addHeart(e.clientX, e.clientY);
                }
            }["HeartTrail.useEffect.handleMove"];
            window.addEventListener("mousemove", handleMove, {
                passive: true
            });
            return ({
                "HeartTrail.useEffect": ()=>window.removeEventListener("mousemove", handleMove)
            })["HeartTrail.useEffect"];
        }
    }["HeartTrail.useEffect"], [
        reducedMotion,
        addHeart
    ]);
    if (reducedMotion) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none z-[9999]",
        "aria-hidden": true,
        children: hearts.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrailHeart, {
                id: h.id,
                x: h.x,
                y: h.y,
                onComplete: removeHeart
            }, h.id, false, {
                fileName: "[project]/src/components/HeartTrail.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/HeartTrail.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(HeartTrail, "Zi7iucrJ+0um1niKPETt0SZR/vQ=");
_c1 = HeartTrail;
var _c, _c1;
__turbopack_context__.k.register(_c, "TrailHeart");
__turbopack_context__.k.register(_c1, "HeartTrail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_cd983890._.js.map