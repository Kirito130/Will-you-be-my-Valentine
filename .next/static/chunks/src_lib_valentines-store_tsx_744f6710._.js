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
]);

//# sourceMappingURL=src_lib_valentines-store_tsx_744f6710._.js.map