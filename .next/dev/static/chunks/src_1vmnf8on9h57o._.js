(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Portada.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListaProximas",
    ()=>ListaProximas,
    "ProximaFiesta",
    ()=>ProximaFiesta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useHoy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/useHoy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TarjetaFiesta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TarjetaFiesta.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ProximaFiesta({ hoyBuild }) {
    _s();
    const hoy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useHoy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHoy"])(hoyBuild);
    const { f, e } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proximas"])(hoy)[0];
    const faltan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diasEntre"])(hoy, e.inicio);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "proxima arco",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "etiqueta",
                children: "La próxima fiesta"
            }, void 0, false, {
                fileName: "[project]/src/components/Portada.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: f.nombre
            }, void 0, false, {
                fileName: "[project]/src/components/Portada.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rango"])(e.inicio, e.fin),
                    " · ",
                    f.provincia
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Portada.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            faltan > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cuenta",
                        children: faltan
                    }, void 0, false, {
                        fileName: "[project]/src/components/Portada.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "etiqueta",
                        children: faltan === 1 ? 'día' : 'días'
                    }, void 0, false, {
                        fileName: "[project]/src/components/Portada.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Portada.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cuenta",
                style: {
                    fontSize: 40
                },
                children: "¡En fiestas!"
            }, void 0, false, {
                fileName: "[project]/src/components/Portada.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            e.aproximada ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "aprox",
                children: [
                    "Fecha aproximada a partir de la edición de ",
                    e.anyoReferencia,
                    ". Pendiente del programa oficial."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Portada.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/fiestas/${f.slug}/`,
                className: "boton",
                children: "Ver la fiesta"
            }, void 0, false, {
                fileName: "[project]/src/components/Portada.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Portada.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(ProximaFiesta, "YXtDYmm9ovoKzmFzvcUZvIYmFFQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useHoy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHoy"]
    ];
});
_c = ProximaFiesta;
function ListaProximas({ hoyBuild, cuantas = 9 }) {
    _s1();
    const hoy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useHoy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHoy"])(hoyBuild);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rejilla",
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proximas"])(hoy).slice(0, cuantas).map(({ f, e }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TarjetaFiesta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TarjetaFiesta"], {
                f: f,
                e: e,
                i: i
            }, f.slug, false, {
                fileName: "[project]/src/components/Portada.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Portada.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s1(ListaProximas, "YXtDYmm9ovoKzmFzvcUZvIYmFFQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$useHoy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHoy"]
    ];
});
_c1 = ListaProximas;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProximaFiesta");
__turbopack_context__.k.register(_c1, "ListaProximas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TarjetaFiesta.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TarjetaFiesta",
    ()=>TarjetaFiesta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/index.ts [app-client] (ecmascript)");
;
;
;
function TarjetaFiesta({ f, e, i = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/fiestas/${f.slug}/`,
        className: "tarjeta-fiesta",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "escudo",
                style: {
                    width: 60,
                    height: 64,
                    background: i % 2 ? 'var(--lapis)' : 'var(--carmesi)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "num",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diasCorto"])(e.inicio, e.fin)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TarjetaFiesta.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mes",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mesesCorto"])(e.inicio, e.fin)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TarjetaFiesta.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TarjetaFiesta.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    minWidth: 0,
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "nombre",
                        children: f.nombre
                    }, void 0, false, {
                        fileName: "[project]/src/components/TarjetaFiesta.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sub",
                        children: [
                            f.provincia,
                            e.aproximada ? ' · fecha aproximada' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TarjetaFiesta.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    f.declaracion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tag tag-oro",
                            children: [
                                "Interés ",
                                f.declaracion.replace(/\s*\(.*\)/, '')
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TarjetaFiesta.tsx",
                            lineNumber: 18,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/TarjetaFiesta.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TarjetaFiesta.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TarjetaFiesta.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = TarjetaFiesta;
var _c;
__turbopack_context__.k.register(_c, "TarjetaFiesta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/useHoy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHoy",
    ()=>useHoy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/index.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useHoy(hoyBuild) {
    _s();
    const [hoy, setHoy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(hoyBuild);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHoy.useEffect": ()=>setHoy((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hoyIso"])())
    }["useHoy.useEffect"], []);
    return hoy;
}
_s(useHoy, "R72DqurOHwShJG01TV+Dy+zRzIg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/data/actos.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"id\":\"alcoy-001\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-20\",\"hora\":\"20:15\",\"nombre\":\"Procesión del Traslado (San Jorge el Xicotet)\",\"tipo\":\"Procesión\",\"lugar\":\"Iglesia de San Jorge → Santa María\",\"recorrido\":\"Sant Tomàs, l'Escola, Mossèn Torregrosa, Sant Francesc, pl. Ramón y Cajal, Sant Nicolau, pl. d'Espanya, Pintor Casanova, placeta del Fossar\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-002\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-21\",\"hora\":\"20:15\",\"nombre\":\"Triduo (1.er día)\",\"tipo\":\"Religioso\",\"lugar\":\"Parroquia de Santa María\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-003\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-22\",\"hora\":\"20:15\",\"nombre\":\"Triduo (2.º día)\",\"tipo\":\"Religioso\",\"lugar\":\"Parroquia de Santa María\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-004\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-23\",\"hora\":\"19:30\",\"nombre\":\"Triduo (3.er día) y apertura del Año Jubilar\",\"tipo\":\"Religioso\",\"lugar\":\"Parroquia de Santa María\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-005\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-24\",\"hora\":\"19:00\",\"nombre\":\"Fiesta del Pasodoble (Día dels Músics)\",\"tipo\":\"Música\",\"lugar\":\"Av. País Valencià con c/ Santa Llúcia\",\"recorrido\":\"Av. País Valencià → pl. d'Espanya; castillo de fuegos al final\",\"polvora\":\"si\",\"nota\":\"Colles de dolçainers i tabaleters a las 18:45\",\"anyo\":2026},{\"id\":\"alcoy-006\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-24\",\"hora\":\"21:30\",\"nombre\":\"Nit de l'Olla (desfile de paisano, hasta las 2:00)\",\"tipo\":\"Otro\",\"lugar\":\"Sant Nicolau (Font Redona) y Av. País Valencià (c/ Bambú)\",\"recorrido\":\"Final ante el Ayuntamiento y ante el Teatre Calderón\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-007\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-25\",\"hora\":\"05:00\",\"nombre\":\"Missa del Fester\",\"tipo\":\"Religioso\",\"lugar\":\"Parroquia de Santa María\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-008\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-25\",\"hora\":\"05:45\",\"nombre\":\"Diana\",\"tipo\":\"Diana\",\"lugar\":\"Pl. d'Espanya\",\"recorrido\":\"Pl. d'Espanya, Sant Tomàs, Sant Jaume, Pont del Terrer, Sant Jordi, Bambú, Av. País Valencià, Sant Llorenç, Sant Francesc, El Partidor, Sant Nicolau, pl. d'Espanya\",\"polvora\":\"desconocido\",\"nota\":\"Filaes salen de 5:50 a 7:45 aprox.\",\"anyo\":2026},{\"id\":\"alcoy-009\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-25\",\"hora\":\"10:30\",\"nombre\":\"Entrada de Cristianos\",\"tipo\":\"Entrada\",\"lugar\":\"El Partidor\",\"recorrido\":\"El Partidor, Sant Nicolau, pl. d'Espanya, Sant Llorenç, hasta el final de Av. País Valencià\",\"polvora\":\"desconocido\",\"nota\":\"Capitán en la plaza hacia las 11:15. À Punt en directo\",\"anyo\":2026},{\"id\":\"alcoy-010\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-25\",\"hora\":\"17:00\",\"nombre\":\"Entrada de Moros\",\"tipo\":\"Entrada\",\"lugar\":\"El Partidor\",\"recorrido\":\"Mismo recorrido que la Entrada de Cristianos\",\"polvora\":\"desconocido\",\"nota\":\"Capitán en la plaza hacia las 17:45. À Punt en directo\",\"anyo\":2026},{\"id\":\"alcoy-011\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-26\",\"hora\":\"08:30\",\"nombre\":\"Segunda Diana (Diana infantil)\",\"tipo\":\"Diana\",\"lugar\":\"Font Redona (cristianos) y Av. País Valencià (moros)\",\"recorrido\":\"Hacia pl. d'Espanya y castillo\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-012\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-26\",\"hora\":\"11:00\",\"nombre\":\"Procesión de la Reliquia y Misa Mayor\",\"tipo\":\"Procesión\",\"lugar\":\"Iglesia de San Jorge → Santa María\",\"recorrido\":\"Sant Tomàs, l'Escola, Mossèn Torregrosa, Sant Llorenç, pl. d'Espanya, Pintor Casanova\",\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-013\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-26\",\"hora\":\"14:00\",\"nombre\":\"Mascletà\",\"tipo\":\"Pólvora/Castillo\",\"lugar\":\"Pl. d'Espanya\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-014\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-26\",\"hora\":\"18:00\",\"nombre\":\"Diana Vespertina del Cavallet (Realistes y Berberiscos)\",\"tipo\":\"Diana\",\"lugar\":\"Font Redona\",\"recorrido\":\"Font Redona → pl. d'Espanya\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-015\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-26\",\"hora\":\"19:30\",\"nombre\":\"Procesión General\",\"tipo\":\"Procesión\",\"lugar\":\"Placeta del Carbó → iglesia de San Jorge\",\"recorrido\":\"Pintor Casanova, pl. d'Espanya, Sant Nicolau, pl. Ramón y Cajal, Sant Francesc, Mossèn Torregrosa, l'Escola, Sant Tomàs\",\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-016\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-26\",\"hora\":\"23:30\",\"nombre\":\"Retreta\",\"tipo\":\"Retreta\",\"lugar\":\"Cruce c/ El Camí con Sant Mateu\",\"recorrido\":\"Sant Nicolau, pl. d'Espanya, Sant Tomàs, iglesia de San Jorge\",\"polvora\":\"desconocido\",\"nota\":\"Valenciabonita sitúa la salida en la Font Redona\",\"anyo\":2026},{\"id\":\"alcoy-017\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-27\",\"hora\":\"08:00\",\"nombre\":\"Contrabando (Andaluces y Labradores)\",\"tipo\":\"Otro\",\"lugar\":\"Pl. d'Espanya\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-018\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-27\",\"hora\":\"08:45\",\"nombre\":\"Guerrillas\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Zona centro (salvo pl. d'Espanya)\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":\"A las 9:45 los cristianos toman el castillo\",\"anyo\":2026},{\"id\":\"alcoy-019\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-27\",\"hora\":\"10:00\",\"nombre\":\"Estafeta y Embajada Mora\",\"tipo\":\"Embajada\",\"lugar\":\"Castillo, pl. d'Espanya\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-020\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-27\",\"hora\":\"11:00\",\"nombre\":\"Alardo de la mañana\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Pl. d'Espanya\",\"recorrido\":\"Termina ante la Torre Na Valora\",\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-021\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-27\",\"hora\":\"16:15\",\"nombre\":\"Toma del castillo por el Capitán y el Alférez moros\",\"tipo\":\"Otro\",\"lugar\":\"Pl. d'Espanya\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-022\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-27\",\"hora\":\"16:30\",\"nombre\":\"Estafeta y Embajada Cristiana\",\"tipo\":\"Embajada\",\"lugar\":\"Pl. d'Espanya\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-023\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-27\",\"hora\":\"17:30\",\"nombre\":\"Alardo de la tarde\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Pl. d'Espanya / castillo\",\"recorrido\":\"Termina frente a la iglesia de San Jorge\",\"polvora\":\"si\",\"nota\":\"Fin del fuego antes de las 20:00\",\"anyo\":2026},{\"id\":\"alcoy-024\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-27\",\"hora\":null,\"nombre\":\"Acompañamiento de la imagen de San Jorge\",\"tipo\":\"Procesión\",\"lugar\":\"Santa María → iglesia de San Jorge\",\"recorrido\":\"Pintor Casanova, pl. d'Espanya, Sant Tomàs\",\"polvora\":\"desconocido\",\"nota\":\"Hora no publicada\",\"anyo\":2026},{\"id\":\"alcoy-025\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-27\",\"hora\":\"21:30\",\"nombre\":\"Aparición de San Jorge y castillo de fuegos\",\"tipo\":\"Pólvora/Castillo\",\"lugar\":\"Castillo, pl. d'Espanya\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"alcoy-026\",\"fiesta\":\"alcoy\",\"fecha\":\"2026-04-27\",\"hora\":\"22:00\",\"nombre\":\"Soparets\",\"tipo\":\"Otro\",\"lugar\":\"Pl. d'Espanya y alrededores\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-001\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-09\",\"hora\":null,\"nombre\":\"Entraetas conmemorativas (25 y 50 años)\",\"tipo\":\"Desfile\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"Agenda petrerenfestes (fechada 2027): 20:00\",\"anyo\":2026},{\"id\":\"petrer-002\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-10\",\"hora\":null,\"nombre\":\"Desfile Infantil y Homenaje a las Rodelas\",\"tipo\":\"Infantil\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"Agenda petrerenfestes (fechada 2027): 11:30\",\"anyo\":2026},{\"id\":\"petrer-003\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-13\",\"hora\":null,\"nombre\":\"Bendición de la Palma\",\"tipo\":\"Religioso\",\"lugar\":\"Ermita de San Bonifacio\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"Agenda petrerenfestes (fechada 2027): 21:30\",\"anyo\":2026},{\"id\":\"petrer-004\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-14\",\"hora\":\"20:00\",\"nombre\":\"Entrada y saludo de bandas (pasodoble «Petrel»)\",\"tipo\":\"Música\",\"lugar\":\"Plaza de la Explanada\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-005\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-15\",\"hora\":\"00:00\",\"nombre\":\"Retreta y saludo-ofrenda al patrón\",\"tipo\":\"Retreta\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"Madrugada del jueves al viernes\",\"anyo\":2026},{\"id\":\"petrer-006\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-15\",\"hora\":\"10:00\",\"nombre\":\"Alardo con ostentación de las rodelas\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-007\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-15\",\"hora\":\"12:30\",\"nombre\":\"Bajada del Santo\",\"tipo\":\"Procesión\",\"lugar\":\"Ermita de San Bonifacio → iglesia de San Bartolomé\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-008\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-15\",\"hora\":\"18:30\",\"nombre\":\"Guerrilla mora\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Castillo de Embajadas\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":\"Hora discrepante entre fuentes (18:00/18:30)\",\"anyo\":2026},{\"id\":\"petrer-009\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-15\",\"hora\":\"18:45\",\"nombre\":\"Estafeta del embajador moro\",\"tipo\":\"Embajada\",\"lugar\":\"Castillo de Embajadas\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-010\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-15\",\"hora\":\"20:15\",\"nombre\":\"Embajada Mora\",\"tipo\":\"Embajada\",\"lugar\":\"Castillo de Embajadas\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-011\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-16\",\"hora\":\"00:30\",\"nombre\":\"Ambaixada en Valencià (humorística)\",\"tipo\":\"Embajada\",\"lugar\":\"Jardines Alcalde Vicente Maestre\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"Agenda 2027: 00:05\",\"anyo\":2026},{\"id\":\"petrer-012\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-16\",\"hora\":\"11:00\",\"nombre\":\"Entrada Cristiana\",\"tipo\":\"Entrada\",\"lugar\":null,\"recorrido\":\"Recorrido no publicado\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-013\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-16\",\"hora\":\"20:30\",\"nombre\":\"Solemne Procesión\",\"tipo\":\"Procesión\",\"lugar\":null,\"recorrido\":\"Recorrido no publicado\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-014\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-17\",\"hora\":\"10:30\",\"nombre\":\"Desfile de Honor y Misa a San Bonifacio\",\"tipo\":\"Desfile\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-015\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-17\",\"hora\":null,\"nombre\":\"Entrada Mora\",\"tipo\":\"Entrada\",\"lugar\":null,\"recorrido\":\"Recorrido no publicado\",\"polvora\":\"desconocido\",\"nota\":\"Hora sin confirmar: 13:30 o 17:30 según la fuente\",\"anyo\":2026},{\"id\":\"petrer-016\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-18\",\"hora\":\"10:30\",\"nombre\":\"Guerrilla cristiana\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Castillo\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-017\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-18\",\"hora\":\"11:30\",\"nombre\":\"Estafeta del embajador cristiano\",\"tipo\":\"Embajada\",\"lugar\":\"Castillo de Embajadas\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-018\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-18\",\"hora\":\"12:30\",\"nombre\":\"Embajada Cristiana\",\"tipo\":\"Embajada\",\"lugar\":\"Castillo de Embajadas\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-019\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-18\",\"hora\":\"16:30\",\"nombre\":\"Subida del Santo y Misa de Acción de Gracias\",\"tipo\":\"Procesión\",\"lugar\":\"San Bartolomé → ermita de San Bonifacio\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"petrer-020\",\"fiesta\":\"petrer\",\"fecha\":\"2026-05-18\",\"hora\":null,\"nombre\":\"Proclamación de los cargos 2027\",\"tipo\":\"Otro\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"Agenda 2027: 19:30\",\"anyo\":2026},{\"id\":\"elda-001\",\"fiesta\":\"elda\",\"fecha\":\"2026-05-28\",\"hora\":\"19:30\",\"nombre\":\"Entrada de Bandas y pasodoble «Idella»\",\"tipo\":\"Música\",\"lugar\":\"Plaza del Zapatero\",\"recorrido\":\"Dahellos, Ortega y Gasset, Nueva, Colón, Pl. de la Constitución\",\"polvora\":\"desconocido\",\"nota\":\"Intercomarcal en directo a las 20:00\",\"anyo\":2026},{\"id\":\"elda-002\",\"fiesta\":\"elda\",\"fecha\":\"2026-05-28\",\"hora\":\"23:30\",\"nombre\":\"Retreta\",\"tipo\":\"Retreta\",\"lugar\":null,\"recorrido\":\"Juan Carlos I, Antonino Vera, Elia Barceló, Dahellos, Ortega y Gasset, Nueva, Colón, Pl. de la Constitución\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"elda-003\",\"fiesta\":\"elda\",\"fecha\":\"2026-05-29\",\"hora\":\"10:00\",\"nombre\":\"Acompañamiento del Estandarte del Santo\",\"tipo\":\"Desfile\",\"lugar\":\"Casa de la viuda de Rosas → ermita de San Antón\",\"recorrido\":\"Nueva, Ortega y Gasset, Los Giles, La Iglesia, Pl. de Arriba, Magdalena Maestre, Independencia\",\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"elda-004\",\"fiesta\":\"elda\",\"fecha\":\"2026-05-29\",\"hora\":\"11:00\",\"nombre\":\"Traslado de la imagen del Santo\",\"tipo\":\"Procesión\",\"lugar\":\"Ermita de San Antón → iglesia de Santa Ana\",\"recorrido\":\"Independencia, Magdalena Maestre, Espoz y Mina, Pl. Constitución, Colón, Nueva, Ortega y Gasset, Los Giles\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"elda-005\",\"fiesta\":\"elda\",\"fecha\":\"2026-05-29\",\"hora\":\"19:00\",\"nombre\":\"Desfile Infantil\",\"tipo\":\"Infantil\",\"lugar\":null,\"recorrido\":\"Juan Carlos I, Pl. Sagasta, Jardines, Dahellos, Elia Barceló, Antonino Vera, Padre Manjón\",\"polvora\":\"desconocido\",\"nota\":\"Intercomarcal en directo\",\"anyo\":2026},{\"id\":\"elda-006\",\"fiesta\":\"elda\",\"fecha\":\"2026-05-30\",\"hora\":\"10:00\",\"nombre\":\"Alardo y Embajada Mora\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Castillo, Pl. de la Constitución\",\"recorrido\":\"Antonino Vera, Padre Manjón, Av. Chapí, Antonio Maura, Nueva, Colón, Pl. Constitución\",\"polvora\":\"si\",\"nota\":\"Estafeta y embajada hacia las 11:30\",\"anyo\":2026},{\"id\":\"elda-007\",\"fiesta\":\"elda\",\"fecha\":\"2026-05-30\",\"hora\":\"18:00\",\"nombre\":\"Triunfal Entrada Cristiana\",\"tipo\":\"Entrada\",\"lugar\":null,\"recorrido\":\"Juan Carlos I, Pl. Sagasta, Jardines, Dahellos, Elia Barceló, Antonino Vera, Padre Manjón\",\"polvora\":\"desconocido\",\"nota\":\"Intercomarcal en directo\",\"anyo\":2026},{\"id\":\"elda-008\",\"fiesta\":\"elda\",\"fecha\":\"2026-05-30\",\"hora\":\"23:30\",\"nombre\":\"Cuartelillo Municipal (DJs, gratuito)\",\"tipo\":\"Música\",\"lugar\":\"Plaza Castelar\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"elda-009\",\"fiesta\":\"elda\",\"fecha\":\"2026-05-31\",\"hora\":\"08:00\",\"nombre\":\"Diana Festera\",\"tipo\":\"Diana\",\"lugar\":\"Pl. de la Constitución\",\"recorrido\":\"Colón, Nueva, Antonio Maura, Av. Chapí, Padre Manjón, Antonino Vera, Elia Barceló, Dahellos, Jardines, Pl. Sagasta, Juan Carlos I\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"elda-010\",\"fiesta\":\"elda\",\"fecha\":\"2026-05-31\",\"hora\":\"11:00\",\"nombre\":\"Desfile Ofrenda de Flores\",\"tipo\":\"Religioso\",\"lugar\":\"Plaza Castelar → iglesia de Santa Ana\",\"recorrido\":\"Juan Carlos I, Pl. Sagasta, Jardines, Ortega y Gasset, Los Giles\",\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"elda-011\",\"fiesta\":\"elda\",\"fecha\":\"2026-05-31\",\"hora\":\"12:30\",\"nombre\":\"Solemne Misa al Santo\",\"tipo\":\"Religioso\",\"lugar\":\"Templo de Santa Ana\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"elda-012\",\"fiesta\":\"elda\",\"fecha\":\"2026-05-31\",\"hora\":\"18:00\",\"nombre\":\"Majestuosa Entrada Mora\",\"tipo\":\"Entrada\",\"lugar\":null,\"recorrido\":\"Juan Carlos I, Pl. Sagasta, Jardines, Dahellos, Elia Barceló, Antonino Vera, Padre Manjón\",\"polvora\":\"desconocido\",\"nota\":\"Intercomarcal en directo\",\"anyo\":2026},{\"id\":\"elda-013\",\"fiesta\":\"elda\",\"fecha\":\"2026-06-01\",\"hora\":\"10:00\",\"nombre\":\"Alardo y Embajada Cristiana\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Castillo, Pl. de la Constitución\",\"recorrido\":\"Antonino Vera, Padre Manjón, Av. Chapí, Antonio Maura, Nueva, Colón, Pl. Constitución\",\"polvora\":\"si\",\"nota\":\"Estafeta y embajada hacia las 11:30\",\"anyo\":2026},{\"id\":\"elda-014\",\"fiesta\":\"elda\",\"fecha\":\"2026-06-01\",\"hora\":\"18:30\",\"nombre\":\"Procesión de San Antonio Abad y traslado a su ermita\",\"tipo\":\"Procesión\",\"lugar\":\"Templo de Santa Ana\",\"recorrido\":\"Pl. de Arriba, La Iglesia, Los Giles, Pedrito Rico, Antonino Vera, Elia Barceló, Dahellos, Ortega y Gasset, Nueva, Colón, Pl. Constitución\",\"polvora\":\"desconocido\",\"nota\":\"Otra fuente da un recorrido distinto\",\"anyo\":2026},{\"id\":\"elda-015\",\"fiesta\":\"elda\",\"fecha\":\"2026-06-01\",\"hora\":\"22:00\",\"nombre\":\"Alborada pirotécnica, fin de fiestas\",\"tipo\":\"Pólvora/Castillo\",\"lugar\":\"Ermita de San Antón\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":\"Hora aproximada\",\"anyo\":2026},{\"id\":\"sax-001\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-01\",\"hora\":null,\"nombre\":\"Entrada de bandas e inicio de fiestas\",\"tipo\":\"Música\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"2025: 10:45\",\"anyo\":2026},{\"id\":\"sax-002\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-01\",\"hora\":null,\"nombre\":\"Entrada\",\"tipo\":\"Entrada\",\"lugar\":\"Puente Picayo (2025)\",\"recorrido\":\"Puente Picayo → esquina Juan Ramón Jiménez (2025)\",\"polvora\":\"desconocido\",\"nota\":\"2025: 16:45\",\"anyo\":2026},{\"id\":\"sax-003\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-01\",\"hora\":null,\"nombre\":\"Fuegos artificiales\",\"tipo\":\"Pólvora/Castillo\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"si\",\"nota\":\"2025: 21:10\",\"anyo\":2026},{\"id\":\"sax-004\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-01\",\"hora\":null,\"nombre\":\"Retreta\",\"tipo\":\"Retreta\",\"lugar\":\"Plaza del Ayuntamiento (2025)\",\"recorrido\":\"San Blas, Embajadores, Del Cabildo, San José, Santa Eulalia, Canalejas, Pl. Cervantes → ermita de San Blas (2025)\",\"polvora\":\"desconocido\",\"nota\":\"2025: 21:40\",\"anyo\":2026},{\"id\":\"sax-005\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-02\",\"hora\":null,\"nombre\":\"Diana\",\"tipo\":\"Diana\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"2025: 8:30\",\"anyo\":2026},{\"id\":\"sax-006\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-02\",\"hora\":null,\"nombre\":\"Procesión de Candelas (arcabucería)\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Plaza del Ayuntamiento (2025)\",\"recorrido\":\"Hasta la Gran Vía y la iglesia (2025)\",\"polvora\":\"si\",\"nota\":\"2025: 9:35\",\"anyo\":2026},{\"id\":\"sax-007\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-02\",\"hora\":null,\"nombre\":\"Misa de presentación de niños a la Virgen\",\"tipo\":\"Religioso\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"no\",\"nota\":\"2025: 13:00\",\"anyo\":2026},{\"id\":\"sax-008\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-02\",\"hora\":null,\"nombre\":\"Procesión de Bajada del Santo (arcabucería)\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Ermita de San Blas\",\"recorrido\":\"Ermita → Gran Vía → iglesia (2025)\",\"polvora\":\"si\",\"nota\":\"2025: 17:15\",\"anyo\":2026},{\"id\":\"sax-009\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-03\",\"hora\":\"08:30\",\"nombre\":\"Diana\",\"tipo\":\"Diana\",\"lugar\":null,\"recorrido\":\"Calles de Sax\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"sax-010\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-03\",\"hora\":null,\"nombre\":\"Acto del Predicador\",\"tipo\":\"Religioso\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"no\",\"nota\":\"2025: 9:50\",\"anyo\":2026},{\"id\":\"sax-011\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-03\",\"hora\":\"11:00\",\"nombre\":\"Misa Mayor en honor a San Blas\",\"tipo\":\"Religioso\",\"lugar\":\"Iglesia parroquial\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"sax-012\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-03\",\"hora\":null,\"nombre\":\"Procesión de San Blas\",\"tipo\":\"Procesión\",\"lugar\":\"Iglesia y Ayuntamiento (2025)\",\"recorrido\":\"Principales calles\",\"polvora\":\"desconocido\",\"nota\":\"Tras la misa; 2025: 12:30\",\"anyo\":2026},{\"id\":\"sax-013\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-03\",\"hora\":null,\"nombre\":\"Desfile de comparsas y Embajada Mora\",\"tipo\":\"Embajada\",\"lugar\":\"Av. Pascual Carrión; embajada en Pl. Cervantes\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"2025: 18:15\",\"anyo\":2026},{\"id\":\"sax-014\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-04\",\"hora\":null,\"nombre\":\"Diana\",\"tipo\":\"Diana\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"Día 4 suspendido por lluvia en 2026\",\"anyo\":2026},{\"id\":\"sax-015\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-04\",\"hora\":null,\"nombre\":\"Procesión de Subida del Santo (arcabucería)\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Iglesia parroquial\",\"recorrido\":\"Iglesia → ermita de San Blas (2025)\",\"polvora\":\"si\",\"nota\":\"2025: 9:30. Suspendido por lluvia en 2026\",\"anyo\":2026},{\"id\":\"sax-016\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-04\",\"hora\":null,\"nombre\":\"Desfile de comparsas y Embajada Cristiana\",\"tipo\":\"Embajada\",\"lugar\":\"Av. Pascual Carrión (2025)\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"2025: 18:15. Suspendido por lluvia en 2026\",\"anyo\":2026},{\"id\":\"sax-017\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-05\",\"hora\":null,\"nombre\":\"Diana\",\"tipo\":\"Diana\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"sax-018\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-05\",\"hora\":null,\"nombre\":\"Misa de Acción de Gracias\",\"tipo\":\"Religioso\",\"lugar\":\"Plaza de San Blas (2025)\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":\"2025: 10:30\",\"anyo\":2026},{\"id\":\"sax-019\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-05\",\"hora\":\"12:15\",\"nombre\":\"Subasta de regalos al Santo\",\"tipo\":\"Otro\",\"lugar\":\"Plaza de San Blas (2025)\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":\"Horario cambiado por la lluvia\",\"anyo\":2026},{\"id\":\"sax-020\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-05\",\"hora\":\"13:45\",\"nombre\":\"Cambio de capitanes\",\"tipo\":\"Otro\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"sax-021\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-05\",\"hora\":\"17:45\",\"nombre\":\"Desfile de nuevos capitanes\",\"tipo\":\"Desfile\",\"lugar\":\"Av. Pascual Carrión (2025)\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"Adelantado por la lluvia; 2025: 18:30\",\"anyo\":2026},{\"id\":\"sax-022\",\"fiesta\":\"sax\",\"fecha\":\"2026-02-05\",\"hora\":null,\"nombre\":\"Embajada y acto de fin de fiestas\",\"tipo\":\"Embajada\",\"lugar\":\"Plaza del Ayuntamiento\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-001\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-06\",\"hora\":\"12:00\",\"nombre\":\"Volteig general de campanes\",\"tipo\":\"Otro\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-002\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-06\",\"hora\":\"19:30\",\"nombre\":\"Traca y Retreta de les Caixes\",\"tipo\":\"Retreta\",\"lugar\":\"Puerta del Ayuntamiento\",\"recorrido\":\"Carrers de costum → pont de Sant Blai (castillo de fuegos) → barri vell → Ayuntamiento\",\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-003\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-06\",\"hora\":\"23:00\",\"nombre\":\"Desfilada de la Nit de Caixes\",\"tipo\":\"Desfile\",\"lugar\":\"Residència\",\"recorrido\":\"Residència → pl. de l'Ajuntament\",\"polvora\":\"desconocido\",\"nota\":\"La inicia Contrabandistes\",\"anyo\":2026},{\"id\":\"bocairent-004\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-07\",\"hora\":\"11:00\",\"nombre\":\"Moguda de Bandes y concurso de interpretación\",\"tipo\":\"Música\",\"lugar\":\"Placeta dels Omets\",\"recorrido\":\"Sor Pietat de la Creu, Bisbe Miró, pl. Joan de Joanes, pl. de l'Ajuntament\",\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-005\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-07\",\"hora\":\"13:00\",\"nombre\":\"Mascletà\",\"tipo\":\"Pólvora/Castillo\",\"lugar\":\"C/ José Puig (depósito de aguas)\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-006\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-07\",\"hora\":\"16:30\",\"nombre\":\"Entrada de Moros i Cristians\",\"tipo\":\"Entrada\",\"lugar\":\"C/ València (iglesia de la Santa Creu)\",\"recorrido\":\"C/ València → pl. de l'Ajuntament\",\"polvora\":\"desconocido\",\"nota\":\"Abre el bando cristiano. Otra fuente da salida por Batalla de Lepanto\",\"anyo\":2026},{\"id\":\"bocairent-007\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-07\",\"hora\":null,\"nombre\":\"Revista a les tropes, Primeres Vespres y Ofrena\",\"tipo\":\"Religioso\",\"lugar\":\"Pl. de l'Ajuntament / iglesia\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"Tras la Entrada\",\"anyo\":2026},{\"id\":\"bocairent-008\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-08\",\"hora\":\"08:00\",\"nombre\":\"Gran Diana\",\"tipo\":\"Diana\",\"lugar\":\"Puerta del Ayuntamiento\",\"recorrido\":\"C/ Sant Agustí y recorrido habitual\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-009\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-08\",\"hora\":\"11:30\",\"nombre\":\"Reunión de filaes y Missa Solemne de Sant Blai\",\"tipo\":\"Religioso\",\"lugar\":\"Ayuntamiento → iglesia\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":\"Otras fuentes: misa a las 12:00\",\"anyo\":2026},{\"id\":\"bocairent-010\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-08\",\"hora\":\"16:30\",\"nombre\":\"Desfilada del Piquete del Terç de Suavos\",\"tipo\":\"Desfile\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-011\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-08\",\"hora\":\"17:30\",\"nombre\":\"Ball del Moro\",\"tipo\":\"Otro\",\"lugar\":\"Maset de los Moros Vells\",\"recorrido\":\"Maset → casa del capitán → pl. de l'Ajuntament\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-012\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-08\",\"hora\":\"18:30\",\"nombre\":\"Solemne Processó de Sant Blai y fuegos\",\"tipo\":\"Procesión\",\"lugar\":\"Pl. de l'Ajuntament / iglesia\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":\"Otras fuentes: procesión a las 19:00\",\"anyo\":2026},{\"id\":\"bocairent-013\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-09\",\"hora\":\"08:00\",\"nombre\":\"Misas de las filaes en templos y ermitas\",\"tipo\":\"Religioso\",\"lugar\":\"Masets\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-014\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-09\",\"hora\":\"11:30\",\"nombre\":\"Batalla y Ambaixada del Moro\",\"tipo\":\"Embajada\",\"lugar\":\"Batalla de Lepanto con av. Sant Joan de Ribera\",\"recorrido\":\"Batalla de Lepanto → pl. de l'Ajuntament / castillo\",\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-015\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-09\",\"hora\":\"17:00\",\"nombre\":\"Batalla y Ambaixada del Cristià\",\"tipo\":\"Embajada\",\"lugar\":\"Residència\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-016\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-09\",\"hora\":\"23:30\",\"nombre\":\"Desfilada-retreta\",\"tipo\":\"Retreta\",\"lugar\":\"Residència\",\"recorrido\":\"Residència → pl. de l'Ajuntament\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-017\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-10\",\"hora\":\"07:00\",\"nombre\":\"Diana\",\"tipo\":\"Diana\",\"lugar\":\"Desde los masets\",\"recorrido\":\"Termina en pl. de l'Ajuntament\",\"polvora\":\"desconocido\",\"nota\":\"UNDEF: 08:00\",\"anyo\":2026},{\"id\":\"bocairent-018\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-10\",\"hora\":\"10:00\",\"nombre\":\"Subida a la ermita del Sant Crist\",\"tipo\":\"Desfile\",\"lugar\":\"Pl. de l'Ajuntament\",\"recorrido\":\"→ ermita del Sant Crist\",\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-019\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-10\",\"hora\":\"11:30\",\"nombre\":\"Misa y Despojo del Moro\",\"tipo\":\"Religioso\",\"lugar\":\"Ermita del Sant Crist\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-020\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-10\",\"hora\":\"12:30\",\"nombre\":\"Homenaje a la Reliquia de Sant Blai\",\"tipo\":\"Religioso\",\"lugar\":\"Iglesia parroquial\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-021\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-10\",\"hora\":\"17:30\",\"nombre\":\"Te Deum, bandas a los nuevos cargos y Cercavila\",\"tipo\":\"Religioso\",\"lugar\":\"Iglesia → Monestir dels Dolors i dels Reis Mags\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"bocairent-022\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-11\",\"hora\":\"00:00\",\"nombre\":\"Gran Cordà\",\"tipo\":\"Pólvora/Castillo\",\"lugar\":\"Centro histórico\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":\"Medianoche del 10 al 11\",\"anyo\":2026},{\"id\":\"bocairent-023\",\"fiesta\":\"bocairent\",\"fecha\":\"2026-02-11\",\"hora\":\"11:30\",\"nombre\":\"L'Eixabegó: misa por los festeros difuntos\",\"tipo\":\"Religioso\",\"lugar\":\"Local social → iglesia\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"banyeres-de-mariola-001\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-21\",\"hora\":null,\"nombre\":\"Trasllat de Sant Jordi a la iglesia\",\"tipo\":\"Procesión\",\"lugar\":\"Ermita de Sant Jordi\",\"recorrido\":\"Sant Jordi, Pl. Major, Major, Felip IV, Sant Jaume, Àngel Torró, Pl. Major (2025)\",\"polvora\":\"si\",\"nota\":\"2025: 19:00, con 21 salvas\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-002\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-22\",\"hora\":\"10:30\",\"nombre\":\"Ofrena de flors a Sant Jordi\",\"tipo\":\"Desfile\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"no\",\"nota\":null,\"anyo\":2026},{\"id\":\"banyeres-de-mariola-003\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-22\",\"hora\":\"12:00\",\"nombre\":\"Àngelus, mascletà, Senyera en el castillo y concurso de bandas\",\"tipo\":\"Música\",\"lugar\":\"Castillo y Pl. Major\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"banyeres-de-mariola-004\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-22\",\"hora\":\"17:30\",\"nombre\":\"Entrada de Moros i Cristians\",\"tipo\":\"Entrada\",\"lugar\":\"Torre de la Font Bona (sin año)\",\"recorrido\":\"Font Bona, av. Gregorio Molina, pl. dels Plàtans, av. dels Furs, La Creu, pl. de l'Ajuntament → Pl. Major (sin año)\",\"polvora\":\"desconocido\",\"nota\":\"2025: 17:00\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-005\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-22\",\"hora\":null,\"nombre\":\"Retreta y quema de faroles\",\"tipo\":\"Retreta\",\"lugar\":null,\"recorrido\":\"Hasta la Pl. Major\",\"polvora\":\"desconocido\",\"nota\":\"2025: 00:00 cristianos, 00:30 moros\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-006\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-23\",\"hora\":null,\"nombre\":\"Despertà de Moros Vells\",\"tipo\":\"Diana\",\"lugar\":\"Todo el pueblo\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"2025: 6:00\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-007\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-23\",\"hora\":\"07:30\",\"nombre\":\"Gran Diana y concurso de caps i esquadres\",\"tipo\":\"Diana\",\"lugar\":null,\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":null,\"anyo\":2026},{\"id\":\"banyeres-de-mariola-008\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-23\",\"hora\":null,\"nombre\":\"Missa Major, mascletà y acompañamiento del Predicador\",\"tipo\":\"Religioso\",\"lugar\":\"Iglesia; mascletà en la Casa Abadia\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":\"2025: 11:30\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-009\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-23\",\"hora\":null,\"nombre\":\"Desfilada Infantil\",\"tipo\":\"Infantil\",\"lugar\":\"Av. dels Furs (2025)\",\"recorrido\":\"→ Pl. Major\",\"polvora\":\"no\",\"nota\":\"2025: 17:00\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-010\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-23\",\"hora\":null,\"nombre\":\"Solemne Processó de Sant Jordi\",\"tipo\":\"Procesión\",\"lugar\":null,\"recorrido\":\"Llegada a la Pl. Major con fuegos\",\"polvora\":\"si\",\"nota\":\"2025: 19:00\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-011\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-24\",\"hora\":null,\"nombre\":\"Diana y esmorzar en el Barranc Fondo\",\"tipo\":\"Diana\",\"lugar\":\"Barranc Fondo\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"2025: 7:30\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-012\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-24\",\"hora\":\"10:45\",\"nombre\":\"Simulacre de combat, Ball de Banderes y arcabucería\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Serreta de la Neu / Barranc Fondo\",\"recorrido\":\"→ Monument a Sant Jordi\",\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"banyeres-de-mariola-013\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-24\",\"hora\":\"13:30\",\"nombre\":\"Ambaixada Mora\",\"tipo\":\"Embajada\",\"lugar\":\"Castillo\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"banyeres-de-mariola-014\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-24\",\"hora\":null,\"nombre\":\"Guerreta\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"C/ Mariola\",\"recorrido\":\"→ Monument a Sant Jordi\",\"polvora\":\"si\",\"nota\":\"2025: 17:30\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-015\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-24\",\"hora\":\"19:00\",\"nombre\":\"Ambaixada Cristiana y Ball Moro\",\"tipo\":\"Embajada\",\"lugar\":\"Castillo\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":null,\"anyo\":2026},{\"id\":\"banyeres-de-mariola-016\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-24\",\"hora\":\"20:30\",\"nombre\":\"Ambaixades humorístiques\",\"tipo\":\"Embajada\",\"lugar\":\"Castillo, Pl. Major\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"En 2026 se suspendió el resto por lluvia\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-017\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-25\",\"hora\":null,\"nombre\":\"Ball de banderes y arcabucería hasta ermita y cementerio\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Finca El Morer\",\"recorrido\":\"El Morer → ermita de Sant Jordi → cementerio\",\"polvora\":\"si\",\"nota\":\"2025: 8:00\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-018\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-25\",\"hora\":null,\"nombre\":\"Misa por los difuntos y esmorzar\",\"tipo\":\"Religioso\",\"lugar\":\"Cementerio municipal\",\"recorrido\":null,\"polvora\":\"no\",\"nota\":\"2025: 9:30\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-019\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-25\",\"hora\":null,\"nombre\":\"Firma de nuevos capitanes y bajada disparando\",\"tipo\":\"Alardo/Arcabucería\",\"lugar\":\"Ermita del Sant Crist\",\"recorrido\":\"→ ermita de la Malena\",\"polvora\":\"si\",\"nota\":\"2025: 12:00\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-020\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-25\",\"hora\":null,\"nombre\":\"Despojo y Ball Moro\",\"tipo\":\"Embajada\",\"lugar\":\"Ermita de la Malena\",\"recorrido\":\"Bajada a la Pl. Major\",\"polvora\":\"desconocido\",\"nota\":\"2025: 13:00\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-021\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-25\",\"hora\":null,\"nombre\":\"Alzada de nuevos capitanes y trasllat dels Sants Jordiets\",\"tipo\":\"Desfile\",\"lugar\":\"Pl. Major\",\"recorrido\":null,\"polvora\":\"desconocido\",\"nota\":\"2025: 18:00 y 18:30\",\"anyo\":2026},{\"id\":\"banyeres-de-mariola-022\",\"fiesta\":\"banyeres-de-mariola\",\"fecha\":\"2026-04-25\",\"hora\":null,\"nombre\":\"Cordà (infantil y adultos)\",\"tipo\":\"Pólvora/Castillo\",\"lugar\":\"Pl. Major (2025)\",\"recorrido\":null,\"polvora\":\"si\",\"nota\":\"2025: 23:55\",\"anyo\":2026}]");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/data/fiestas.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"slug\":\"valverde-de-jucar\",\"nombre\":\"Valverde de Júcar\",\"provincia\":\"Cuenca\",\"fechasTexto\":\"5–10 ene 2025\",\"inicio\":\"2025-01-05\",\"fin\":\"2025-01-10\",\"mes\":\"Enero\",\"prioridad\":\"C\",\"organizador\":\"Hermandad del Santo Niño\",\"enHonorA\":\"Santo Niño\",\"declaracion\":\"\",\"web\":\"ciademoros@valverdedejucar.net\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"sax\",\"nombre\":\"Sax\",\"provincia\":\"Alicante\",\"fechasTexto\":\"1–5 feb 2025\",\"inicio\":\"2026-02-01\",\"fin\":\"2026-02-05\",\"mes\":\"Febrero\",\"prioridad\":\"A\",\"organizador\":\"Mayordomía de San Blas\",\"enHonorA\":\"San Blas\",\"declaracion\":\"\",\"web\":\"www.mayordomiasanblas.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":true},{\"slug\":\"bocairent\",\"nombre\":\"Bocairent\",\"provincia\":\"Valencia\",\"fechasTexto\":\"7–11 feb 2025\",\"inicio\":\"2026-02-06\",\"fin\":\"2026-02-11\",\"mes\":\"Febrero\",\"prioridad\":\"A\",\"organizador\":\"Associació Festes de Moros i Cristians de Sant Blai\",\"enHonorA\":\"Sant Blai\",\"declaracion\":\"Nacional\",\"web\":\"www.santblai.org\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":true},{\"slug\":\"villafranqueza-el-palamo\",\"nombre\":\"Villafranqueza – El Palamó (Alicante)\",\"provincia\":\"Alicante\",\"fechasTexto\":\"14–19 mar 2025\",\"inicio\":\"2025-03-14\",\"fin\":\"2025-03-19\",\"mes\":\"Marzo\",\"prioridad\":\"B\",\"organizador\":\"Asociación de Fiestas de Moros y Cristianos «El Palamó»\",\"enHonorA\":\"San José\",\"declaracion\":\"\",\"web\":\"www.villafranqueza.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"los-alcazares\",\"nombre\":\"Los Alcázares\",\"provincia\":\"Murcia\",\"fechasTexto\":\"17–20 abr 2025\",\"inicio\":\"2025-04-17\",\"fin\":\"2025-04-20\",\"mes\":\"Abril\",\"prioridad\":\"B\",\"organizador\":\"Asociación de Fiestas de las Incursiones Berberiscas en el Mar Menor\",\"enHonorA\":\"\",\"declaracion\":\"\",\"web\":\"www.incursionesberberiscas.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Formato propio: bandos campesino y berberisco\",\"tienePrograma\":false},{\"slug\":\"banyeres-de-mariola\",\"nombre\":\"Banyeres de Mariola\",\"provincia\":\"Alicante\",\"fechasTexto\":\"22–25 abr 2025\",\"inicio\":\"2026-04-21\",\"fin\":\"2026-04-25\",\"mes\":\"Abril\",\"prioridad\":\"A\",\"organizador\":\"Comissió de Festes de Sant Jordi\",\"enHonorA\":\"Sant Jordi\",\"declaracion\":\"Nacional\",\"web\":\"festes1@portademariola.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":true},{\"slug\":\"alcoy\",\"nombre\":\"Alcoy\",\"provincia\":\"Alicante\",\"fechasTexto\":\"25–27 abr 2026\",\"inicio\":\"2026-04-25\",\"fin\":\"2026-04-27\",\"mes\":\"Abril\",\"prioridad\":\"A\",\"organizador\":\"Associació de Sant Jordi\",\"enHonorA\":\"Sant Jordi\",\"declaracion\":\"Internacional (1980)\",\"web\":\"www.asjordi.org\",\"fuente\":\"Alicante Plaza / comunitatvalenciana.com\",\"notas\":\"No está en la UNDEF. Fechas de 2026; la Comunitat Valenciana da 24–26 abr 2027 como aproximadas\",\"tienePrograma\":true},{\"slug\":\"abanilla\",\"nombre\":\"Abanilla\",\"provincia\":\"Murcia\",\"fechasTexto\":\"25 abr–11 may 2025\",\"inicio\":\"2025-04-25\",\"fin\":\"2025-05-11\",\"mes\":\"Abril\",\"prioridad\":\"B\",\"organizador\":\"Federación de Asociaciones de Moros y Cristianos «Santa Cruz»\",\"enHonorA\":\"Santísima Cruz\",\"declaracion\":\"\",\"web\":\"www.morosycristianosabanilla.org\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"agullent\",\"nombre\":\"Agullent\",\"provincia\":\"Valencia\",\"fechasTexto\":\"25–30 abr 2025\",\"inicio\":\"2025-04-25\",\"fin\":\"2025-04-30\",\"mes\":\"Abril\",\"prioridad\":\"B\",\"organizador\":\"Junta de Festes de Moros i Cristians d'Agullent\",\"enHonorA\":\"Sant Vicent Ferrer\",\"declaracion\":\"Local\",\"web\":\"www.morosicristiansagullent.org\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"busot\",\"nombre\":\"Busot\",\"provincia\":\"Alicante\",\"fechasTexto\":\"25–28 abr 2025\",\"inicio\":\"2025-04-25\",\"fin\":\"2025-04-28\",\"mes\":\"Abril\",\"prioridad\":\"B\",\"organizador\":\"Associació de Festes de Moros i Cristians de Busot\",\"enHonorA\":\"San José y San Vicente Ferrer\",\"declaracion\":\"\",\"web\":\"www.morosycristianosbusot.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"sant-vicent-del-raspeig\",\"nombre\":\"Sant Vicent del Raspeig\",\"provincia\":\"Alicante\",\"fechasTexto\":\"25–29 abr 2025\",\"inicio\":\"2025-04-25\",\"fin\":\"2025-04-29\",\"mes\":\"Abril\",\"prioridad\":\"A\",\"organizador\":\"Federación Unión de Comparsas «Ber-Largas»\",\"enHonorA\":\"San Vicente Ferrer\",\"declaracion\":\"Autonómico\",\"web\":\"www.berlargas.org\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"benamaurel\",\"nombre\":\"Benamaurel\",\"provincia\":\"Granada\",\"fechasTexto\":\"26–29 abr 2025\",\"inicio\":\"2025-04-26\",\"fin\":\"2025-04-29\",\"mes\":\"Abril\",\"prioridad\":\"C\",\"organizador\":\"Comisión de Fiestas de Benamaurel\",\"enHonorA\":\"Virgen de la Cabeza\",\"declaracion\":\"\",\"web\":\"www.morosycristianosbenamaurel.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"campotejar\",\"nombre\":\"Campotéjar\",\"provincia\":\"Granada\",\"fechasTexto\":\"26–29 abr 2025\",\"inicio\":\"2025-04-26\",\"fin\":\"2025-04-29\",\"mes\":\"Abril\",\"prioridad\":\"C\",\"organizador\":\"Asociación Cultural Tradicional «Tiraores de Campotéjar»\",\"enHonorA\":\"Virgen de los Remedios\",\"declaracion\":\"Atlas del Patrimonio Inmaterial de Andalucía\",\"web\":\"Ver guía UNDEF\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"llutxent\",\"nombre\":\"Llutxent\",\"provincia\":\"Valencia\",\"fechasTexto\":\"26–28 abr 2025\",\"inicio\":\"2025-04-26\",\"fin\":\"2025-04-28\",\"mes\":\"Abril\",\"prioridad\":\"B\",\"organizador\":\"Germandat de Moros i Cristians de Llutxent\",\"enHonorA\":\"Crist del Conhort\",\"declaracion\":\"\",\"web\":\"www.germocril.org\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"almansa\",\"nombre\":\"Almansa\",\"provincia\":\"Albacete\",\"fechasTexto\":\"30 abr–6 may 2025\",\"inicio\":\"2025-04-30\",\"fin\":\"2025-05-06\",\"mes\":\"Abril\",\"prioridad\":\"A\",\"organizador\":\"Agrupación de Comparsas de Moros y Cristianos de Almansa\",\"enHonorA\":\"Ntra. Sra. de Belén\",\"declaracion\":\"Internacional (según la guía UNDEF)\",\"web\":\"www.agrupaciondecomparsas.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"onil\",\"nombre\":\"Onil\",\"provincia\":\"Alicante\",\"fechasTexto\":\"30 abr–4 may 2025\",\"inicio\":\"2025-04-30\",\"fin\":\"2025-05-04\",\"mes\":\"Abril\",\"prioridad\":\"A\",\"organizador\":\"Asociación de Comparsas «Virgen de la Salud»\",\"enHonorA\":\"Virgen de la Salud\",\"declaracion\":\"Autonómico\",\"web\":\"asociacioncomparsasonil@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"caravaca-de-la-cruz\",\"nombre\":\"Caravaca de la Cruz\",\"provincia\":\"Murcia\",\"fechasTexto\":\"1–5 may 2025\",\"inicio\":\"2025-05-01\",\"fin\":\"2025-05-05\",\"mes\":\"Mayo\",\"prioridad\":\"A\",\"organizador\":\"Comisión de Festejos de la Real e Ilustre Cofradía de la Stma. y Vera Cruz\",\"enHonorA\":\"Stma. y Vera Cruz\",\"declaracion\":\"Internacional\",\"web\":\"www.caravacaenfiestas.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Incluye los Caballos del Vino\",\"tienePrograma\":false},{\"slug\":\"cieza\",\"nombre\":\"Cieza\",\"provincia\":\"Murcia\",\"fechasTexto\":\"9–11 may 2025\",\"inicio\":\"2025-05-09\",\"fin\":\"2025-05-11\",\"mes\":\"Mayo\",\"prioridad\":\"B\",\"organizador\":\"Comisión de las Fiestas del Escudo «La Invasión»\",\"enHonorA\":\"San Bartolomé\",\"declaracion\":\"\",\"web\":\"www.fiestasdelescudo.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"piles\",\"nombre\":\"Piles\",\"provincia\":\"Valencia\",\"fechasTexto\":\"9–11 may 2025\",\"inicio\":\"2025-05-09\",\"fin\":\"2025-05-11\",\"mes\":\"Mayo\",\"prioridad\":\"B\",\"organizador\":\"Associació de Moros i Cristians de Piles\",\"enHonorA\":\"Sant Felip\",\"declaracion\":\"\",\"web\":\"mic.piles@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"muro-de-alcoy\",\"nombre\":\"Muro de Alcoy\",\"provincia\":\"Alicante\",\"fechasTexto\":\"10–12 may 2025\",\"inicio\":\"2025-05-10\",\"fin\":\"2025-05-12\",\"mes\":\"Mayo\",\"prioridad\":\"B\",\"organizador\":\"Federació Junta de Festes de Moros i Cristians «Verge dels Desemparats»\",\"enHonorA\":\"Mare de Déu dels Desemparats\",\"declaracion\":\"\",\"web\":\"juntafestesmuro@telefonica.net\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"petrer\",\"nombre\":\"Petrer\",\"provincia\":\"Alicante\",\"fechasTexto\":\"16–20 may 2025\",\"inicio\":\"2026-05-14\",\"fin\":\"2026-05-18\",\"mes\":\"Mayo\",\"prioridad\":\"A\",\"organizador\":\"Unión de Festejos de San Bonifacio Mártir\",\"enHonorA\":\"San Bonifacio\",\"declaracion\":\"\",\"web\":\"www.petrerenfestes.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":true},{\"slug\":\"lleida\",\"nombre\":\"Lleida\",\"provincia\":\"Lleida\",\"fechasTexto\":\"17–18 may 2025\",\"inicio\":\"2025-05-17\",\"fin\":\"2025-05-18\",\"mes\":\"Mayo\",\"prioridad\":\"C\",\"organizador\":\"Associació de la Festa de Moros i Cristians de Lleida\",\"enHonorA\":\"Sant Anastasi\",\"declaracion\":\"\",\"web\":\"www.miclleida.org\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"salinas\",\"nombre\":\"Salinas\",\"provincia\":\"Alicante\",\"fechasTexto\":\"22–26 may 2025\",\"inicio\":\"2025-05-22\",\"fin\":\"2025-05-26\",\"mes\":\"Mayo\",\"prioridad\":\"B\",\"organizador\":\"Comisión de Fiestas de Salinas\",\"enHonorA\":\"Ntra. Sra. del Rosario\",\"declaracion\":\"\",\"web\":\"www.salinas.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"elda\",\"nombre\":\"Elda\",\"provincia\":\"Alicante\",\"fechasTexto\":\"28 may–1 jun 2026\",\"inicio\":\"2026-05-28\",\"fin\":\"2026-06-01\",\"mes\":\"Mayo\",\"prioridad\":\"A\",\"organizador\":\"Junta Central de Comparsas de Moros y Cristianos de Elda\",\"enHonorA\":\"San Antón\",\"declaracion\":\"Internacional (2026)\",\"web\":\"www.morosycristianoselda.es\",\"fuente\":\"morosycristianoselda.es / Ministerio de Industria y Turismo\",\"notas\":\"No está en la UNDEF. Fechas de 2026\",\"tienePrograma\":true},{\"slug\":\"torre-pacheco\",\"nombre\":\"Torre-Pacheco\",\"provincia\":\"Murcia\",\"fechasTexto\":\"1–4 jun 2025\",\"inicio\":\"2025-06-01\",\"fin\":\"2025-06-04\",\"mes\":\"Junio\",\"prioridad\":\"B\",\"organizador\":\"Asociación de Fiestas Históricas de Torre-Pacheco\",\"enHonorA\":\"\",\"declaracion\":\"\",\"web\":\"trinitariosyberberiscos.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF. Formato trinitarios y berberiscos\",\"tienePrograma\":false},{\"slug\":\"archena\",\"nombre\":\"Archena\",\"provincia\":\"Murcia\",\"fechasTexto\":\"6–15 jun 2025\",\"inicio\":\"2025-06-06\",\"fin\":\"2025-06-15\",\"mes\":\"Junio\",\"prioridad\":\"B\",\"organizador\":\"Junta Central de Fiestas de Moros y Cristianos de Archena\",\"enHonorA\":\"Virgen de la Salud y Corpus Christi\",\"declaracion\":\"\",\"web\":\"morosycristianosdearchena@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"jumilla\",\"nombre\":\"Jumilla\",\"provincia\":\"Murcia\",\"fechasTexto\":\"6–9 jun 2025\",\"inicio\":\"2025-06-06\",\"fin\":\"2025-06-09\",\"mes\":\"Junio\",\"prioridad\":\"B\",\"organizador\":\"Asociación de Moros y Cristianos Don Pedro I\",\"enHonorA\":\"Virgen de la Asunción\",\"declaracion\":\"\",\"web\":\"morosycristianosjumilla@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"moraira\",\"nombre\":\"Moraira (Teulada)\",\"provincia\":\"Alicante\",\"fechasTexto\":\"6–15 jun 2025\",\"inicio\":\"2025-06-06\",\"fin\":\"2025-06-15\",\"mes\":\"Junio\",\"prioridad\":\"B\",\"organizador\":\"Junta de Moros y Cristianos de Moraira\",\"enHonorA\":\"Santísimo Cristo de Moraira\",\"declaracion\":\"\",\"web\":\"morosdemoraira@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"santomera\",\"nombre\":\"Santomera\",\"provincia\":\"Murcia\",\"fechasTexto\":\"16–25 jun 2025\",\"inicio\":\"2025-06-16\",\"fin\":\"2025-06-25\",\"mes\":\"Junio\",\"prioridad\":\"B\",\"organizador\":\"Junta Central de Moros y Cristianos de Santomera\",\"enHonorA\":\"Ntra. Sra. del Rosario\",\"declaracion\":\"\",\"web\":\"jcmcs2013@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"agost\",\"nombre\":\"Agost\",\"provincia\":\"Alicante\",\"fechasTexto\":\"25 jun–1 jul 2025\",\"inicio\":\"2025-06-25\",\"fin\":\"2025-07-01\",\"mes\":\"Junio\",\"prioridad\":\"B\",\"organizador\":\"Unión de Festejos «San Pedro Apóstol»\",\"enHonorA\":\"San Pedro Apóstol\",\"declaracion\":\"\",\"web\":\"unionfestejosagost@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"benissa\",\"nombre\":\"Benissa\",\"provincia\":\"Alicante\",\"fechasTexto\":\"26–30 jun 2025\",\"inicio\":\"2025-06-26\",\"fin\":\"2025-06-30\",\"mes\":\"Junio\",\"prioridad\":\"B\",\"organizador\":\"Associació de Moros i Cristians de Benissa\",\"enHonorA\":\"San Pedro Apóstol\",\"declaracion\":\"\",\"web\":\"morosicristiansbenissa@hotmail.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"el-rebolledo\",\"nombre\":\"El Rebolledo (Alicante)\",\"provincia\":\"Alicante\",\"fechasTexto\":\"3–6 jul 2025\",\"inicio\":\"2025-07-03\",\"fin\":\"2025-07-06\",\"mes\":\"Julio\",\"prioridad\":\"B\",\"organizador\":\"Asociación festera de Moros y Cristianos «El Rebolledo»\",\"enHonorA\":\"Virgen del Carmen\",\"declaracion\":\"\",\"web\":\"Ver guía UNDEF (@mycrebolledo)\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"hondon-de-las-nieves\",\"nombre\":\"Hondón de las Nieves\",\"provincia\":\"Alicante\",\"fechasTexto\":\"10–13 jul 2025\",\"inicio\":\"2025-07-10\",\"fin\":\"2025-07-13\",\"mes\":\"Julio\",\"prioridad\":\"B\",\"organizador\":\"Asociación de Moriscos y Cristianos de Hondón de las Nieves\",\"enHonorA\":\"San José\",\"declaracion\":\"\",\"web\":\"aso.moriscosycristianoshn@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"san-blas\",\"nombre\":\"San Blas (Alicante)\",\"provincia\":\"Alicante\",\"fechasTexto\":\"10–14 jul 2025\",\"inicio\":\"2025-07-10\",\"fin\":\"2025-07-14\",\"mes\":\"Julio\",\"prioridad\":\"A\",\"organizador\":\"Comparsas de Moros y Cristianos «San Blas»\",\"enHonorA\":\"San Blas\",\"declaracion\":\"Interés turístico de la C. Valenciana\",\"web\":\"www.mycsanblasalicante.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"el-genoves\",\"nombre\":\"El Genovés\",\"provincia\":\"Valencia\",\"fechasTexto\":\"11–13 jul 2025\",\"inicio\":\"2025-07-11\",\"fin\":\"2025-07-13\",\"mes\":\"Julio\",\"prioridad\":\"B\",\"organizador\":\"Associació Moros i Cristians del Genovés\",\"enHonorA\":\"\",\"declaracion\":\"\",\"web\":\"moroscristiansgenoves@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"orihuela\",\"nombre\":\"Orihuela\",\"provincia\":\"Alicante\",\"fechasTexto\":\"13–19 jul 2025\",\"inicio\":\"2025-07-13\",\"fin\":\"2025-07-19\",\"mes\":\"Julio\",\"prioridad\":\"A\",\"organizador\":\"Asociación de Fiestas de Moros y Cristianos «Santas Justa y Rufina»\",\"enHonorA\":\"Santas Justa y Rufina\",\"declaracion\":\"Autonómico\",\"web\":\"www.morosycristianosorihuela.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Tiene app propia (AMYCO) con recorridos y orden de desfile\",\"tienePrograma\":false},{\"slug\":\"xabia\",\"nombre\":\"Xàbia\",\"provincia\":\"Alicante\",\"fechasTexto\":\"13–21 jul 2025\",\"inicio\":\"2025-07-13\",\"fin\":\"2025-07-21\",\"mes\":\"Julio\",\"prioridad\":\"A\",\"organizador\":\"Junta de Festes de Moros i Cristians de Xàbia\",\"enHonorA\":\"San Jaime\",\"declaracion\":\"\",\"web\":\"juntadefestes2012@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"albatera\",\"nombre\":\"Albatera\",\"provincia\":\"Alicante\",\"fechasTexto\":\"17–25 jul 2025\",\"inicio\":\"2025-07-17\",\"fin\":\"2025-07-25\",\"mes\":\"Julio\",\"prioridad\":\"A\",\"organizador\":\"Federación de Comparsas «Santiago Apóstol»\",\"enHonorA\":\"Santiago Apóstol\",\"declaracion\":\"Provincial (2026)\",\"web\":\"albateraenfiestas@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"oliva\",\"nombre\":\"Oliva\",\"provincia\":\"Valencia\",\"fechasTexto\":\"17–20 jul 2025\",\"inicio\":\"2025-07-17\",\"fin\":\"2025-07-20\",\"mes\":\"Julio\",\"prioridad\":\"A\",\"organizador\":\"Federació de Moros i Cristians d'Oliva\",\"enHonorA\":\"\",\"declaracion\":\"Autonómico\",\"web\":\"www.olivamorosicristians.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"guardamar-del-segura\",\"nombre\":\"Guardamar del Segura\",\"provincia\":\"Alicante\",\"fechasTexto\":\"18–27 jul 2025\",\"inicio\":\"2025-07-18\",\"fin\":\"2025-07-27\",\"mes\":\"Julio\",\"prioridad\":\"A\",\"organizador\":\"Junta Central de Moros y Cristianos\",\"enHonorA\":\"Sant Jaume\",\"declaracion\":\"\",\"web\":\"www.jcguardamar.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"novelda\",\"nombre\":\"Novelda\",\"provincia\":\"Alicante\",\"fechasTexto\":\"18–24 jul 2025\",\"inicio\":\"2025-07-18\",\"fin\":\"2025-07-24\",\"mes\":\"Julio\",\"prioridad\":\"A\",\"organizador\":\"Federación de Comparsas Santa Mª Magdalena\",\"enHonorA\":\"Santa María Magdalena\",\"declaracion\":\"Autonómico\",\"web\":\"www.elfesterdenovelda.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Tiene app propia\",\"tienePrograma\":false},{\"slug\":\"la-vila-joiosa\",\"nombre\":\"La Vila Joiosa\",\"provincia\":\"Alicante\",\"fechasTexto\":\"24–31 jul 2025\",\"inicio\":\"2025-07-24\",\"fin\":\"2025-07-31\",\"mes\":\"Julio\",\"prioridad\":\"A\",\"organizador\":\"Associació Santa Marta\",\"enHonorA\":\"Santa Marta\",\"declaracion\":\"Internacional\",\"web\":\"www.associaciosantamarta.org\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Desembarco moro en la playa\",\"tienePrograma\":false},{\"slug\":\"torrent\",\"nombre\":\"Torrent\",\"provincia\":\"Valencia\",\"fechasTexto\":\"24–30 jul 2025\",\"inicio\":\"2025-07-24\",\"fin\":\"2025-07-30\",\"mes\":\"Julio\",\"prioridad\":\"A\",\"organizador\":\"Federació de Moros i Cristians de Torrent\",\"enHonorA\":\"Sants Abdón i Senent\",\"declaracion\":\"\",\"web\":\"www.fmct.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"almoradi\",\"nombre\":\"Almoradí\",\"provincia\":\"Alicante\",\"fechasTexto\":\"30 jul–3 ago 2025\",\"inicio\":\"2025-07-30\",\"fin\":\"2025-08-03\",\"mes\":\"Julio\",\"prioridad\":\"A\",\"organizador\":\"Asociación Cultural y Festera «San Andrés»\",\"enHonorA\":\"San Abdón y San Senén\",\"declaracion\":\"Provincial (2026)\",\"web\":\"presidencia.jcf@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"alicante\",\"nombre\":\"Alicante (Federación Alicantina)\",\"provincia\":\"Alicante\",\"fechasTexto\":\"31 jul–2 ago 2025 y 6 dic\",\"inicio\":\"2025-07-31\",\"fin\":\"2025-08-02\",\"mes\":\"Julio\",\"prioridad\":\"A\",\"organizador\":\"Federación Alicantina de Moros y Cristianos\",\"enHonorA\":\"Virgen del Remedio\",\"declaracion\":\"\",\"web\":\"fed.morosycristianosalicante@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Desembarco en el Postiguet; agrupa Altozano, El Palamó y El Rebolledo\",\"tienePrograma\":false},{\"slug\":\"rotova\",\"nombre\":\"Ròtova\",\"provincia\":\"Valencia\",\"fechasTexto\":\"31 jul–2 ago 2025\",\"inicio\":\"2025-07-31\",\"fin\":\"2025-08-02\",\"mes\":\"Julio\",\"prioridad\":\"B\",\"organizador\":\"Federació Comissió Festes de Moros i Cristians de Ròtova\",\"enHonorA\":\"\",\"declaracion\":\"\",\"web\":\"Ver guía UNDEF\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"aielo-de-malferit\",\"nombre\":\"Aielo de Malferit\",\"provincia\":\"Valencia\",\"fechasTexto\":\"2–5 ago 2025\",\"inicio\":\"2025-08-02\",\"fin\":\"2025-08-05\",\"mes\":\"Agosto\",\"prioridad\":\"B\",\"organizador\":\"Associació Festes de Moros i Cristians\",\"enHonorA\":\"Stm. Crist de la Pobresa i Sant Engraci\",\"declaracion\":\"\",\"web\":\"associaciofestesaielo@hotmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"aspe\",\"nombre\":\"Aspe\",\"provincia\":\"Alicante\",\"fechasTexto\":\"7–11 ago 2025\",\"inicio\":\"2025-08-07\",\"fin\":\"2025-08-11\",\"mes\":\"Agosto\",\"prioridad\":\"B\",\"organizador\":\"Unión de Moros y Cristianos Virgen de las Nieves\",\"enHonorA\":\"Virgen de las Nieves\",\"declaracion\":\"Provincial\",\"web\":\"www.morosycristianosdeaspe.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"elche\",\"nombre\":\"Elche\",\"provincia\":\"Alicante\",\"fechasTexto\":\"7–11 ago 2025\",\"inicio\":\"2025-08-07\",\"fin\":\"2025-08-11\",\"mes\":\"Agosto\",\"prioridad\":\"A\",\"organizador\":\"Asociación Festera de Moros y Cristianos de Elche\",\"enHonorA\":\"Virgen de la Asunción\",\"declaracion\":\"Autonómico\",\"web\":\"www.morosycristianoselche.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"ador\",\"nombre\":\"Ador\",\"provincia\":\"Valencia\",\"fechasTexto\":\"8–10 ago 2025\",\"inicio\":\"2025-08-08\",\"fin\":\"2025-08-10\",\"mes\":\"Agosto\",\"prioridad\":\"B\",\"organizador\":\"Junta de Moros i Cristians d'Ador\",\"enHonorA\":\"\",\"declaracion\":\"\",\"web\":\"morosicristiansador@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"cocentaina\",\"nombre\":\"Cocentaina\",\"provincia\":\"Alicante\",\"fechasTexto\":\"8–11 ago 2025\",\"inicio\":\"2025-08-08\",\"fin\":\"2025-08-11\",\"mes\":\"Agosto\",\"prioridad\":\"A\",\"organizador\":\"Federació Junta de Festes de Moros i Cristians de Cocentaina\",\"enHonorA\":\"San Hipólito Mártir\",\"declaracion\":\"Autonómico\",\"web\":\"www.jfcocentaina.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"callosa-de-segura\",\"nombre\":\"Callosa de Segura\",\"provincia\":\"Alicante\",\"fechasTexto\":\"10–16 ago 2025\",\"inicio\":\"2025-08-10\",\"fin\":\"2025-08-16\",\"mes\":\"Agosto\",\"prioridad\":\"A\",\"organizador\":\"Asociación de Moros y Cristianos «San Roque»\",\"enHonorA\":\"San Roque\",\"declaracion\":\"\",\"web\":\"amycsanroque@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"altozano\",\"nombre\":\"Altozano (Alicante)\",\"provincia\":\"Alicante\",\"fechasTexto\":\"12–16 ago 2025\",\"inicio\":\"2025-08-12\",\"fin\":\"2025-08-16\",\"mes\":\"Agosto\",\"prioridad\":\"B\",\"organizador\":\"Asociación Comparsas de Moros y Cristianos de Altozano\",\"enHonorA\":\"Virgen de la Asunción\",\"declaracion\":\"Provincial\",\"web\":\"secretaria.acmyca@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"denia\",\"nombre\":\"Dénia\",\"provincia\":\"Alicante\",\"fechasTexto\":\"13–16 ago 2025\",\"inicio\":\"2025-08-13\",\"fin\":\"2025-08-16\",\"mes\":\"Agosto\",\"prioridad\":\"A\",\"organizador\":\"Federación de Moros y Cristianos de Dénia\",\"enHonorA\":\"Sant Roc\",\"declaracion\":\"\",\"web\":\"www.femmiccdenia.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"el-camp-de-mirra\",\"nombre\":\"El Camp de Mirra\",\"provincia\":\"Alicante\",\"fechasTexto\":\"21–25 ago 2025\",\"inicio\":\"2025-08-21\",\"fin\":\"2025-08-25\",\"mes\":\"Agosto\",\"prioridad\":\"B\",\"organizador\":\"Junta de Festers de Moros i Cristians\",\"enHonorA\":\"Sant Bertomeu i Sants Abdón i Senen\",\"declaracion\":\"\",\"web\":\"campdemirra@undef.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"paterna\",\"nombre\":\"Paterna\",\"provincia\":\"Valencia\",\"fechasTexto\":\"21–27 ago 2025\",\"inicio\":\"2025-08-21\",\"fin\":\"2025-08-27\",\"mes\":\"Agosto\",\"prioridad\":\"B\",\"organizador\":\"Federació Intercomparses Paterna\",\"enHonorA\":\"Stm. Crist de la Fe i Sant Vicent Ferrer\",\"declaracion\":\"\",\"web\":\"www.intercomparsas.org\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"ontinyent\",\"nombre\":\"Ontinyent\",\"provincia\":\"Valencia\",\"fechasTexto\":\"22–25 ago 2026 (aprox.)\",\"inicio\":\"2026-08-22\",\"fin\":\"2026-08-25\",\"mes\":\"Agosto\",\"prioridad\":\"A\",\"organizador\":\"Societat de Festers del Santíssim Crist de l'Agonia\",\"enHonorA\":\"Santíssim Crist de l'Agonia\",\"declaracion\":\"Internacional (2024)\",\"web\":\"secretaria@morosycristianos.eu\",\"fuente\":\"comunitatvalenciana.com / festivalesdeespana.com\",\"notas\":\"No está en la UNDEF. Fin de semana del cuarto domingo de agosto\",\"tienePrograma\":false},{\"slug\":\"castello\",\"nombre\":\"Castelló (de la Ribera)\",\"provincia\":\"Valencia\",\"fechasTexto\":\"22–28 ago 2025\",\"inicio\":\"2025-08-22\",\"fin\":\"2025-08-28\",\"mes\":\"Agosto\",\"prioridad\":\"B\",\"organizador\":\"Associació Festera de Moros i Cristians de Castelló\",\"enHonorA\":\"\",\"declaracion\":\"\",\"web\":\"affmmicc@hotmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"xixona\",\"nombre\":\"Xixona\",\"provincia\":\"Alicante\",\"fechasTexto\":\"23–25 ago 2025\",\"inicio\":\"2025-08-23\",\"fin\":\"2025-08-25\",\"mes\":\"Agosto\",\"prioridad\":\"A\",\"organizador\":\"Federació de Sant Bartomeu i Sant Sebastià\",\"enHonorA\":\"San Bartolomé y San Sebastián\",\"declaracion\":\"\",\"web\":\"www.festesxixona.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"beniganim\",\"nombre\":\"Benigànim\",\"provincia\":\"Valencia\",\"fechasTexto\":\"25–30 ago 2025\",\"inicio\":\"2025-08-25\",\"fin\":\"2025-08-30\",\"mes\":\"Agosto\",\"prioridad\":\"B\",\"organizador\":\"Asociación de Moros y Cristianos de Benigànim\",\"enHonorA\":\"San Roque\",\"declaracion\":\"\",\"web\":\"juntacentralbeniganim@hotmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"fontanars-dels-alforins\",\"nombre\":\"Fontanars dels Alforins\",\"provincia\":\"Valencia\",\"fechasTexto\":\"25 ago–2 sep 2025\",\"inicio\":\"2025-08-25\",\"fin\":\"2025-09-02\",\"mes\":\"Agosto\",\"prioridad\":\"B\",\"organizador\":\"Comissió de Festes de Moros i Cristians de Fontanars\",\"enHonorA\":\"Verge del Rosari\",\"declaracion\":\"\",\"web\":\"moroscristiansfontanars@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"riba-roja-de-turia\",\"nombre\":\"Riba-roja de Túria\",\"provincia\":\"Valencia\",\"fechasTexto\":\"29–30 ago 2025\",\"inicio\":\"2025-08-29\",\"fin\":\"2025-08-30\",\"mes\":\"Agosto\",\"prioridad\":\"B\",\"organizador\":\"Associació Moros i Cristians de Riba-roja\",\"enHonorA\":\"Stm. Crist dels Afligits\",\"declaracion\":\"\",\"web\":\"Ver guía UNDEF\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"l-olleria\",\"nombre\":\"L'Olleria\",\"provincia\":\"Valencia\",\"fechasTexto\":\"30 ago–1 sep 2025\",\"inicio\":\"2025-08-30\",\"fin\":\"2025-09-01\",\"mes\":\"Agosto\",\"prioridad\":\"A\",\"organizador\":\"Junta Central de Festes de Moros i Cristians de l'Olleria\",\"enHonorA\":\"San Miguel\",\"declaracion\":\"\",\"web\":\"presidentejuntacentral@hotmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"castalla\",\"nombre\":\"Castalla\",\"provincia\":\"Alicante\",\"fechasTexto\":\"1–4 sep 2025\",\"inicio\":\"2025-09-01\",\"fin\":\"2025-09-04\",\"mes\":\"Septiembre\",\"prioridad\":\"A\",\"organizador\":\"Agrupación de Comparsas de Moros y Cristianos\",\"enHonorA\":\"Mare de Déu de la Soledat\",\"declaracion\":\"\",\"web\":\"www.morosicristianscastalla.org\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"santa-pola\",\"nombre\":\"Santa Pola\",\"provincia\":\"Alicante\",\"fechasTexto\":\"1–3 sep 2025\",\"inicio\":\"2025-09-01\",\"fin\":\"2025-09-03\",\"mes\":\"Septiembre\",\"prioridad\":\"A\",\"organizador\":\"Asociación Festero-Cultural de Moros y Cristianos de Santa Pola\",\"enHonorA\":\"Virgen de Loreto\",\"declaracion\":\"\",\"web\":\"asocmorycris@hotmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"villena\",\"nombre\":\"Villena\",\"provincia\":\"Alicante\",\"fechasTexto\":\"4–9 sep 2025\",\"inicio\":\"2025-09-04\",\"fin\":\"2025-09-09\",\"mes\":\"Septiembre\",\"prioridad\":\"A\",\"organizador\":\"Junta Central de Fiestas de Moros y Cristianos de Villena\",\"enHonorA\":\"Virgen de las Virtudes\",\"declaracion\":\"Nacional\",\"web\":\"www.juntacentral.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Tiene app propia con GPS por comparsa\",\"tienePrograma\":false},{\"slug\":\"beneixama\",\"nombre\":\"Beneixama\",\"provincia\":\"Alicante\",\"fechasTexto\":\"5–11 sep 2025\",\"inicio\":\"2025-09-05\",\"fin\":\"2025-09-11\",\"mes\":\"Septiembre\",\"prioridad\":\"B\",\"organizador\":\"Comissió de Festes de Moros i Cristians N. S. de la Divina Aurora\",\"enHonorA\":\"Divina Aurora\",\"declaracion\":\"\",\"web\":\"www.morosicristiansbeneixama.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"caudete\",\"nombre\":\"Caudete\",\"provincia\":\"Albacete\",\"fechasTexto\":\"5–10 sep 2025\",\"inicio\":\"2025-09-05\",\"fin\":\"2025-09-10\",\"mes\":\"Septiembre\",\"prioridad\":\"B\",\"organizador\":\"Asociación de Comparsas de Ntra. Sra. de Gracia\",\"enHonorA\":\"Virgen de Gracia\",\"declaracion\":\"\",\"web\":\"comparsascaudete@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"mutxamel\",\"nombre\":\"Mutxamel\",\"provincia\":\"Alicante\",\"fechasTexto\":\"7–12 sep 2025\",\"inicio\":\"2025-09-07\",\"fin\":\"2025-09-12\",\"mes\":\"Septiembre\",\"prioridad\":\"B\",\"organizador\":\"Comissió de Festes de Moros i Cristians\",\"enHonorA\":\"Mare de Déu de Loreto\",\"declaracion\":\"Provincial\",\"web\":\"www.festesmutxamel.org\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"murcia\",\"nombre\":\"Murcia\",\"provincia\":\"Murcia\",\"fechasTexto\":\"8–15 sep 2025\",\"inicio\":\"2025-09-08\",\"fin\":\"2025-09-15\",\"mes\":\"Septiembre\",\"prioridad\":\"A\",\"organizador\":\"Federación de Asociaciones de Fiestas de Moros y Cristianos «Civitas Murciae»\",\"enHonorA\":\"\",\"declaracion\":\"Internacional (2025)\",\"web\":\"www.morosycristianosmurcia.es\",\"fuente\":\"Guía Festera UNDEF 2025 / Ministerio de Industria y Turismo\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"ibi\",\"nombre\":\"Ibi\",\"provincia\":\"Alicante\",\"fechasTexto\":\"11–14 sep 2025\",\"inicio\":\"2025-09-11\",\"fin\":\"2025-09-14\",\"mes\":\"Septiembre\",\"prioridad\":\"A\",\"organizador\":\"Comisión de Fiestas de Moros y Cristianos de Ibi\",\"enHonorA\":\"Mare de Déu dels Desemparats\",\"declaracion\":\"\",\"web\":\"www.morosycristianosibi.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"molina-de-segura\",\"nombre\":\"Molina de Segura\",\"provincia\":\"Murcia\",\"fechasTexto\":\"22 sep–5 oct 2025\",\"inicio\":\"2025-09-22\",\"fin\":\"2025-10-05\",\"mes\":\"Septiembre\",\"prioridad\":\"B\",\"organizador\":\"Federación de Moros y Cristianos de Molina de Segura\",\"enHonorA\":\"San Vicente Mártir\",\"declaracion\":\"\",\"web\":\"morosycristianosmolinadesegura@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"bellreguard\",\"nombre\":\"Bellreguard\",\"provincia\":\"Valencia\",\"fechasTexto\":\"25–28 sep 2025\",\"inicio\":\"2025-09-25\",\"fin\":\"2025-09-28\",\"mes\":\"Septiembre\",\"prioridad\":\"B\",\"organizador\":\"Associació de Moros i Cristians de Bellreguard\",\"enHonorA\":\"\",\"declaracion\":\"\",\"web\":\"morosicristiansbellreguard@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"altea\",\"nombre\":\"Altea\",\"provincia\":\"Alicante\",\"fechasTexto\":\"26–30 sep 2025\",\"inicio\":\"2025-09-26\",\"fin\":\"2025-09-30\",\"mes\":\"Septiembre\",\"prioridad\":\"A\",\"organizador\":\"Federació de Moros i Cristians Sant Blai d'Altea\",\"enHonorA\":\"Sant Blai\",\"declaracion\":\"\",\"web\":\"www.santblai.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"benidorm\",\"nombre\":\"Benidorm\",\"provincia\":\"Alicante\",\"fechasTexto\":\"2–5 oct 2025\",\"inicio\":\"2025-10-02\",\"fin\":\"2025-10-05\",\"mes\":\"Octubre\",\"prioridad\":\"A\",\"organizador\":\"Asociación de Moros y Cristianos de Benidorm\",\"enHonorA\":\"San Jaime Apóstol\",\"declaracion\":\"\",\"web\":\"moroscristianosbenidorm@hotmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"valencia\",\"nombre\":\"València (Federación Valenciana)\",\"provincia\":\"Valencia\",\"fechasTexto\":\"2–9 oct 2025\",\"inicio\":\"2025-10-02\",\"fin\":\"2025-10-09\",\"mes\":\"Octubre\",\"prioridad\":\"A\",\"organizador\":\"Federació Valenciana de Moros i Cristians (FEVAMIC)\",\"enHonorA\":\"Sant Donís\",\"declaracion\":\"\",\"web\":\"fevamic.blogspot.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF. Entrada el 9 de octubre\",\"tienePrograma\":false},{\"slug\":\"alzira\",\"nombre\":\"Alzira\",\"provincia\":\"Valencia\",\"fechasTexto\":\"3–5 oct 2025\",\"inicio\":\"2025-10-03\",\"fin\":\"2025-10-05\",\"mes\":\"Octubre\",\"prioridad\":\"B\",\"organizador\":\"Federació de Comparses i Filaes d'Alzira\",\"enHonorA\":\"Santa Catalina\",\"declaracion\":\"\",\"web\":\"www.morosicristiansalzira.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"crevillent\",\"nombre\":\"Crevillent\",\"provincia\":\"Alicante\",\"fechasTexto\":\"3–6 oct 2025\",\"inicio\":\"2025-10-03\",\"fin\":\"2025-10-06\",\"mes\":\"Octubre\",\"prioridad\":\"A\",\"organizador\":\"Asociación de Fiestas de Moros y Cristianos San Francisco de Asís\",\"enHonorA\":\"San Francisco de Asís\",\"declaracion\":\"Internacional\",\"web\":\"www.morosicristianscrevillent.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"albaida\",\"nombre\":\"Albaida\",\"provincia\":\"Valencia\",\"fechasTexto\":\"8–11 oct 2025\",\"inicio\":\"2025-10-08\",\"fin\":\"2025-10-11\",\"mes\":\"Octubre\",\"prioridad\":\"B\",\"organizador\":\"Junta Central de Moros y Cristianos de Albaida (JUCEF)\",\"enHonorA\":\"Mare de Déu del Remei\",\"declaracion\":\"\",\"web\":\"blog.jucef.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false},{\"slug\":\"la-pobla-llarga\",\"nombre\":\"La Pobla Llarga\",\"provincia\":\"Valencia\",\"fechasTexto\":\"9–14 oct 2025\",\"inicio\":\"2025-10-09\",\"fin\":\"2025-10-14\",\"mes\":\"Octubre\",\"prioridad\":\"B\",\"organizador\":\"Junta Central de Moros i Cristians\",\"enHonorA\":\"Sant Calixt\",\"declaracion\":\"\",\"web\":\"juntacentralmorosicristians@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"callosa-d-en-sarria\",\"nombre\":\"Callosa d'en Sarrià\",\"provincia\":\"Alicante\",\"fechasTexto\":\"11–14 oct 2025\",\"inicio\":\"2025-10-11\",\"fin\":\"2025-10-14\",\"mes\":\"Octubre\",\"prioridad\":\"A\",\"organizador\":\"Associació de Moros i Cristians de Callosa d'en Sarrià\",\"enHonorA\":\"Mare de Déu de les Injúries\",\"declaracion\":\"\",\"web\":\"junta@callosaenfestes.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"el-campello\",\"nombre\":\"El Campello\",\"provincia\":\"Alicante\",\"fechasTexto\":\"12–15 oct 2025\",\"inicio\":\"2025-10-12\",\"fin\":\"2025-10-15\",\"mes\":\"Octubre\",\"prioridad\":\"B\",\"organizador\":\"Junta Festera de Moros i Cristians del Campello\",\"enHonorA\":\"Mare de Déu dels Desemparats\",\"declaracion\":\"Provincial (desembarco)\",\"web\":\"www.morosicristiansdelcampello.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"calp\",\"nombre\":\"Calp\",\"provincia\":\"Alicante\",\"fechasTexto\":\"17–23 oct 2025\",\"inicio\":\"2025-10-17\",\"fin\":\"2025-10-23\",\"mes\":\"Octubre\",\"prioridad\":\"A\",\"organizador\":\"Associació de Moros i Cristians «Santíssim Crist de la Suor»\",\"enHonorA\":\"Santíssim Crist de la Suor\",\"declaracion\":\"\",\"web\":\"morosicristianscalp@gmail.com\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"xixona-2\",\"nombre\":\"Xixona (Fiesta de Heladeros)\",\"provincia\":\"Alicante\",\"fechasTexto\":\"23–26 oct 2025\",\"inicio\":\"2025-10-23\",\"fin\":\"2025-10-26\",\"mes\":\"Octubre\",\"prioridad\":\"B\",\"organizador\":\"Asociación Cultural y Festera de Heladeros\",\"enHonorA\":\"San Bartolomé y San Sebastián\",\"declaracion\":\"\",\"web\":\"Ver guía UNDEF\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"\",\"tienePrograma\":false},{\"slug\":\"la-font-de-la-figuera\",\"nombre\":\"La Font de la Figuera\",\"provincia\":\"Valencia\",\"fechasTexto\":\"5–8 dic 2025\",\"inicio\":\"2025-12-05\",\"fin\":\"2025-12-08\",\"mes\":\"Diciembre\",\"prioridad\":\"A\",\"organizador\":\"Confraria i Junta de Festers de Santa Bàrbara\",\"enHonorA\":\"Santa Bárbara\",\"declaracion\":\"Autonómico (2026)\",\"web\":\"www.moroscristiansicontrabandistes.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Incluye un bando contrabandista\",\"tienePrograma\":false},{\"slug\":\"monforte-del-cid\",\"nombre\":\"Monforte del Cid\",\"provincia\":\"Alicante\",\"fechasTexto\":\"5–9 dic 2025\",\"inicio\":\"2025-12-05\",\"fin\":\"2025-12-09\",\"mes\":\"Diciembre\",\"prioridad\":\"B\",\"organizador\":\"Comisión de Fiestas de Moros y Cristianos de Monforte del Cid\",\"enHonorA\":\"La Purísima\",\"declaracion\":\"Provincial\",\"web\":\"www.monfortedelcid.es\",\"fuente\":\"Guía Festera UNDEF 2025\",\"notas\":\"Fechas sin confirmar en la guía UNDEF\",\"tienePrograma\":false}]");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/data/fuentes.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "fiesta": "alcoy",
        "titulo": "Guion oficial 2026 (Associació de Sant Jordi)",
        "url": "https://www.asjordi.org/upload/files/guiones/guion2026_castellano.pdf",
        "aporta": "Todos los actos, horas, recorridos y orden de filaes"
    },
    {
        "fiesta": "alcoy",
        "titulo": "Alicante Plaza: movilidad 2026",
        "url": "https://alicanteplaza.es/alicanteplaza/alcoy-el-comtat/alcoy-habilita-autobuses-lanzadera-y-areas-de-parking-gratis-para-facilitar-la-movilidad-durante-los-moros-y-cristianos",
        "aporta": "Aparcamientos disuasorios, lanzaderas y cortes"
    },
    {
        "fiesta": "alcoy",
        "titulo": "Valencia Bonita 2026",
        "url": "https://www.valenciabonita.es/2026/04/11/fiestas-moros-y-cristianos-alcoy-2026/",
        "aporta": "Contraste de horarios y venta de sillas"
    },
    {
        "fiesta": "petrer",
        "titulo": "Ayuntamiento de Petrer: programa 2026",
        "url": "https://petrer.es/events/2026-05-14-fiestas-de-moros-y-cristianos-2026/",
        "aporta": "Programa con horas"
    },
    {
        "fiesta": "petrer",
        "titulo": "Alicantextra: programa 2026",
        "url": "https://alicantextra.com/es/comarcas/moros-cristianos-petrer-2026-guia-definitiva-programacion-actos-horarios_587201_102.html",
        "aporta": "Programa con horas (algunas discrepan)"
    },
    {
        "fiesta": "petrer",
        "titulo": "Unión de Festejos: la fiesta",
        "url": "https://petrerenfestes.com/la-fiesta/",
        "aporta": "Comparsas por bando y lugares"
    },
    {
        "fiesta": "elda",
        "titulo": "Junta Central: horarios 2026",
        "url": "https://morosycristianoselda.com/horarios-fiestas/",
        "aporta": "Horarios y recorridos oficiales"
    },
    {
        "fiesta": "elda",
        "titulo": "Junta Central: orden Entrada Cristiana",
        "url": "https://morosycristianoselda.com/orden-de-marcha-de-la-entrada-cristiana/",
        "aporta": "Orden de marcha 2026"
    },
    {
        "fiesta": "elda",
        "titulo": "Junta Central: orden Entrada Mora",
        "url": "https://morosycristianoselda.com/orden-de-marcha-de-la-entrada-mora/",
        "aporta": "Orden de marcha 2026"
    },
    {
        "fiesta": "elda",
        "titulo": "Intercomarcal: retransmisiones 2026",
        "url": "https://www.intercomarcal.com/elda/intercomarcal-television-convierte-a-los-moros-y-cristianos-de-elda-en-el-gran-escaparate-festero-de-la-comunitat/",
        "aporta": "Actos en directo"
    },
    {
        "fiesta": "sax",
        "titulo": "Guía Festera UNDEF 2026",
        "url": "https://www.undef.eu/wp-content/uploads/2026/02/GuiaFestera2026_web.pdf",
        "aporta": "Actos de 2026 sin horas"
    },
    {
        "fiesta": "sax",
        "titulo": "Horario oficial 2025",
        "url": "https://saxdigital.com/wp-content/uploads/2025/01/00-Horarios-2025-comprimido.pdf",
        "aporta": "Horas, salidas y recorridos de 2025"
    },
    {
        "fiesta": "sax",
        "titulo": "Intercomarcal: cambios por lluvia 2026",
        "url": "https://www.intercomarcal.com/sax/la-mayordomia-de-san-blas-modifica-los-horarios-de-los-actos-del-dia-5-por-la-lluvia/",
        "aporta": "Horarios del día 5 y suspensión del día 4"
    },
    {
        "fiesta": "bocairent",
        "titulo": "Programa oficial 2026 (santblai.org)",
        "url": "https://www.santblai.org/programa-de-festes-2026/",
        "aporta": "Horas, lugares y recorridos"
    },
    {
        "fiesta": "bocairent",
        "titulo": "Valencia Bonita 2026",
        "url": "https://www.valenciabonita.es/2026/01/26/fiestas-moros-y-cristianos-bocairent-2026/",
        "aporta": "Horario resumido"
    },
    {
        "fiesta": "banyeres-de-mariola",
        "titulo": "Programa oficial 2025",
        "url": "https://www.portademariola.com/wp-content/uploads/2025/04/programa-de-ma-sant-jordi-2025-1.pdf",
        "aporta": "Horas y recorridos de 2025"
    },
    {
        "fiesta": "banyeres-de-mariola",
        "titulo": "Intercomarcal: 22 de abril de 2026",
        "url": "https://www.intercomarcal.com/banyeres/banyeres-de-mariola-esclata-en-festa-arranquen-les-celebracions-de-moros-i-cristians-2026-amb-lofrena-el-concurs-dinterpretacio-de-bandes-i-lentrada/",
        "aporta": "Ofrena, concurso y Entrada 2026"
    },
    {
        "fiesta": "banyeres-de-mariola",
        "titulo": "Intercomarcal: 24 de abril de 2026",
        "url": "https://www.intercomarcal.com/banyeres/la-polvora-i-les-ambaixades-protagonitzen-el-dia-24-dabril/",
        "aporta": "Horas de las embajadas 2026"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/data/orden.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":1,\"comparsa\":\"Andaluces\",\"bando\":\"cristiano\",\"cargo\":\"Filà del Capitán\",\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":2,\"comparsa\":\"Aragonesos\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":3,\"comparsa\":\"Alcodianos\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":4,\"comparsa\":\"Cruzados\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":5,\"comparsa\":\"Muntanyesos\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":6,\"comparsa\":\"Tomasinas\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":7,\"comparsa\":\"Navarros\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":8,\"comparsa\":\"Almogávares\",\"bando\":\"cristiano\",\"cargo\":\"Filà del Mig\",\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":9,\"comparsa\":\"Mozárabes\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":10,\"comparsa\":\"Vascos\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":11,\"comparsa\":\"Guzmanes\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":12,\"comparsa\":\"Labradores\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":13,\"comparsa\":\"Cides\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Cristianos\",\"fecha\":\"2026-04-25\",\"orden\":14,\"comparsa\":\"Asturianos\",\"bando\":\"cristiano\",\"cargo\":\"Filà del Alférez\",\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":1,\"comparsa\":\"Marrakesch\",\"bando\":\"moro\",\"cargo\":\"Filà del Capitán\",\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":2,\"comparsa\":\"Abencerrajes\",\"bando\":\"moro\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":3,\"comparsa\":\"Mudéjares\",\"bando\":\"moro\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":4,\"comparsa\":\"Ligeros\",\"bando\":\"moro\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":5,\"comparsa\":\"Cordón\",\"bando\":\"moro\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":6,\"comparsa\":\"Magenta\",\"bando\":\"moro\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":7,\"comparsa\":\"Verdes\",\"bando\":\"moro\",\"cargo\":\"Filà del Mig\",\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":8,\"comparsa\":\"Chano\",\"bando\":\"moro\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":9,\"comparsa\":\"Domingo Miques\",\"bando\":\"moro\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":10,\"comparsa\":\"Judíos\",\"bando\":\"moro\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":11,\"comparsa\":\"Llana\",\"bando\":\"moro\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":12,\"comparsa\":\"Benimerines\",\"bando\":\"moro\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":13,\"comparsa\":\"Berberiscos\",\"bando\":\"moro\",\"cargo\":null,\"nota\":null},{\"fiesta\":\"alcoy\",\"desfile\":\"Entrada de Moros\",\"fecha\":\"2026-04-25\",\"orden\":14,\"comparsa\":\"Realistes\",\"bando\":\"moro\",\"cargo\":\"Filà del Alférez\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Triunfal Entrada Cristiana\",\"fecha\":\"2026-05-30\",\"orden\":1,\"comparsa\":\"Estudiantes\",\"bando\":\"cristiano\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Triunfal Entrada Cristiana\",\"fecha\":\"2026-05-30\",\"orden\":2,\"comparsa\":\"Zíngaros\",\"bando\":\"cristiano\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Triunfal Entrada Cristiana\",\"fecha\":\"2026-05-30\",\"orden\":3,\"comparsa\":\"Contrabandistas\",\"bando\":\"cristiano\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Triunfal Entrada Cristiana\",\"fecha\":\"2026-05-30\",\"orden\":4,\"comparsa\":\"Cristianos\",\"bando\":\"cristiano\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Triunfal Entrada Cristiana\",\"fecha\":\"2026-05-30\",\"orden\":5,\"comparsa\":\"Piratas\",\"bando\":\"cristiano\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Triunfal Entrada Cristiana\",\"fecha\":\"2026-05-30\",\"orden\":6,\"comparsa\":\"Huestes del Cadí\",\"bando\":\"moro\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Triunfal Entrada Cristiana\",\"fecha\":\"2026-05-30\",\"orden\":7,\"comparsa\":\"Moros Musulmanes\",\"bando\":\"moro\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Triunfal Entrada Cristiana\",\"fecha\":\"2026-05-30\",\"orden\":8,\"comparsa\":\"Moros Marroquíes\",\"bando\":\"moro\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Triunfal Entrada Cristiana\",\"fecha\":\"2026-05-30\",\"orden\":9,\"comparsa\":\"Moros Realistas\",\"bando\":\"moro\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Majestuosa Entrada Mora\",\"fecha\":\"2026-05-31\",\"orden\":1,\"comparsa\":\"Huestes del Cadí\",\"bando\":\"moro\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Majestuosa Entrada Mora\",\"fecha\":\"2026-05-31\",\"orden\":2,\"comparsa\":\"Moros Musulmanes\",\"bando\":\"moro\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Majestuosa Entrada Mora\",\"fecha\":\"2026-05-31\",\"orden\":3,\"comparsa\":\"Moros Marroquíes\",\"bando\":\"moro\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Majestuosa Entrada Mora\",\"fecha\":\"2026-05-31\",\"orden\":4,\"comparsa\":\"Moros Realistas\",\"bando\":\"moro\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Majestuosa Entrada Mora\",\"fecha\":\"2026-05-31\",\"orden\":5,\"comparsa\":\"Estudiantes\",\"bando\":\"cristiano\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Majestuosa Entrada Mora\",\"fecha\":\"2026-05-31\",\"orden\":6,\"comparsa\":\"Zíngaros\",\"bando\":\"cristiano\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Majestuosa Entrada Mora\",\"fecha\":\"2026-05-31\",\"orden\":7,\"comparsa\":\"Contrabandistas\",\"bando\":\"cristiano\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Majestuosa Entrada Mora\",\"fecha\":\"2026-05-31\",\"orden\":8,\"comparsa\":\"Cristianos\",\"bando\":\"cristiano\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"elda\",\"desfile\":\"Majestuosa Entrada Mora\",\"fecha\":\"2026-05-31\",\"orden\":9,\"comparsa\":\"Piratas\",\"bando\":\"cristiano\",\"cargo\":\"Capitán y abanderada\",\"nota\":null},{\"fiesta\":\"sax\",\"desfile\":\"Procesión de San Blas (orden de capitanes, dato 2025)\",\"fecha\":\"2025-02-03\",\"orden\":1,\"comparsa\":\"Cristianos\",\"bando\":\"cristiano\",\"cargo\":\"Capitanía\",\"nota\":null},{\"fiesta\":\"sax\",\"desfile\":\"Procesión de San Blas (orden de capitanes, dato 2025)\",\"fecha\":\"2025-02-03\",\"orden\":2,\"comparsa\":\"Garibaldinos\",\"bando\":\"cristiano\",\"cargo\":\"Capitanía\",\"nota\":null},{\"fiesta\":\"sax\",\"desfile\":\"Procesión de San Blas (orden de capitanes, dato 2025)\",\"fecha\":\"2025-02-03\",\"orden\":3,\"comparsa\":\"Alagoneses\",\"bando\":\"cristiano\",\"cargo\":\"Capitanía\",\"nota\":null},{\"fiesta\":\"sax\",\"desfile\":\"Procesión de San Blas (orden de capitanes, dato 2025)\",\"fecha\":\"2025-02-03\",\"orden\":4,\"comparsa\":\"Caballeros de Cardona\",\"bando\":\"cristiano\",\"cargo\":\"Capitanía\",\"nota\":null},{\"fiesta\":\"sax\",\"desfile\":\"Procesión de San Blas (orden de capitanes, dato 2025)\",\"fecha\":\"2025-02-03\",\"orden\":5,\"comparsa\":\"Árabes Emires\",\"bando\":\"moro\",\"cargo\":\"Capitanía\",\"nota\":null},{\"fiesta\":\"sax\",\"desfile\":\"Procesión de San Blas (orden de capitanes, dato 2025)\",\"fecha\":\"2025-02-03\",\"orden\":6,\"comparsa\":\"Turcos\",\"bando\":\"moro\",\"cargo\":\"Capitanía\",\"nota\":null},{\"fiesta\":\"sax\",\"desfile\":\"Procesión de San Blas (orden de capitanes, dato 2025)\",\"fecha\":\"2025-02-03\",\"orden\":7,\"comparsa\":\"Marruecos\",\"bando\":\"moro\",\"cargo\":\"Capitanía\",\"nota\":null},{\"fiesta\":\"sax\",\"desfile\":\"Procesión de San Blas (orden de capitanes, dato 2025)\",\"fecha\":\"2025-02-03\",\"orden\":8,\"comparsa\":\"Moros\",\"bando\":\"moro\",\"cargo\":\"Capitanía\",\"nota\":null},{\"fiesta\":\"bocairent\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-02-07\",\"orden\":null,\"comparsa\":\"Espanyoletos\",\"bando\":\"cristiano\",\"cargo\":\"Capitanía\",\"nota\":\"Orden interno no publicado; abre el bando cristiano\"},{\"fiesta\":\"bocairent\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-02-07\",\"orden\":null,\"comparsa\":\"Granaders\",\"bando\":\"cristiano\",\"cargo\":\"Capitanía\",\"nota\":\"Orden interno no publicado; abre el bando cristiano\"},{\"fiesta\":\"bocairent\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-02-07\",\"orden\":null,\"comparsa\":\"Contrabandistes\",\"bando\":\"cristiano\",\"cargo\":\"Capitanía\",\"nota\":\"Orden interno no publicado; abre el bando cristiano\"},{\"fiesta\":\"bocairent\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-02-07\",\"orden\":null,\"comparsa\":\"Terç de Suavos\",\"bando\":\"cristiano\",\"cargo\":\"Capitanía\",\"nota\":\"Orden interno no publicado; abre el bando cristiano\"},{\"fiesta\":\"bocairent\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-02-07\",\"orden\":null,\"comparsa\":\"Estudiants\",\"bando\":\"cristiano\",\"cargo\":\"Capitanía\",\"nota\":\"Orden interno no publicado; abre el bando cristiano\"},{\"fiesta\":\"bocairent\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-02-07\",\"orden\":null,\"comparsa\":\"Moros Vells\",\"bando\":\"moro\",\"cargo\":\"Capitanía\",\"nota\":\"Orden interno no publicado; abre el bando cristiano\"},{\"fiesta\":\"bocairent\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-02-07\",\"orden\":null,\"comparsa\":\"Marrocs\",\"bando\":\"moro\",\"cargo\":\"Capitanía\",\"nota\":\"Orden interno no publicado; abre el bando cristiano\"},{\"fiesta\":\"bocairent\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-02-07\",\"orden\":null,\"comparsa\":\"Moros Marins\",\"bando\":\"moro\",\"cargo\":\"Capitanía\",\"nota\":\"Orden interno no publicado; abre el bando cristiano\"},{\"fiesta\":\"bocairent\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-02-07\",\"orden\":null,\"comparsa\":\"Mosqueters\",\"bando\":\"moro\",\"cargo\":\"Capitanía\",\"nota\":\"Orden interno no publicado; abre el bando cristiano\"},{\"fiesta\":\"banyeres-de-mariola\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-04-22\",\"orden\":null,\"comparsa\":\"Cristians\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":\"Orden no publicado; filaes por bando\"},{\"fiesta\":\"banyeres-de-mariola\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-04-22\",\"orden\":null,\"comparsa\":\"Estudiants\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":\"Orden no publicado; filaes por bando\"},{\"fiesta\":\"banyeres-de-mariola\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-04-22\",\"orden\":null,\"comparsa\":\"Maseros\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":\"Orden no publicado; filaes por bando\"},{\"fiesta\":\"banyeres-de-mariola\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-04-22\",\"orden\":null,\"comparsa\":\"Contrabandistes\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":\"Orden no publicado; filaes por bando\"},{\"fiesta\":\"banyeres-de-mariola\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-04-22\",\"orden\":null,\"comparsa\":\"Jordians\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":\"Orden no publicado; filaes por bando\"},{\"fiesta\":\"banyeres-de-mariola\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-04-22\",\"orden\":null,\"comparsa\":\"Moros Vells\",\"bando\":\"moro\",\"cargo\":null,\"nota\":\"Orden no publicado; filaes por bando\"},{\"fiesta\":\"banyeres-de-mariola\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-04-22\",\"orden\":null,\"comparsa\":\"Moros Nous\",\"bando\":\"moro\",\"cargo\":null,\"nota\":\"Orden no publicado; filaes por bando\"},{\"fiesta\":\"banyeres-de-mariola\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-04-22\",\"orden\":null,\"comparsa\":\"Marrocs\",\"bando\":\"moro\",\"cargo\":null,\"nota\":\"Orden no publicado; filaes por bando\"},{\"fiesta\":\"banyeres-de-mariola\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-04-22\",\"orden\":null,\"comparsa\":\"Pirates\",\"bando\":\"moro\",\"cargo\":null,\"nota\":\"Orden no publicado; filaes por bando\"},{\"fiesta\":\"banyeres-de-mariola\",\"desfile\":\"Entrada de Moros i Cristians\",\"fecha\":\"2026-04-22\",\"orden\":null,\"comparsa\":\"Califes\",\"bando\":\"moro\",\"cargo\":null,\"nota\":\"Orden no publicado; filaes por bando\"},{\"fiesta\":\"petrer\",\"desfile\":\"Entradas Cristiana y Mora\",\"fecha\":\"2026-05-16\",\"orden\":null,\"comparsa\":\"Tercio de Flandes\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":\"Orden no publicado (tríptico ilegible); comparsas por bando\"},{\"fiesta\":\"petrer\",\"desfile\":\"Entradas Cristiana y Mora\",\"fecha\":\"2026-05-16\",\"orden\":null,\"comparsa\":\"Marinos\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":\"Orden no publicado (tríptico ilegible); comparsas por bando\"},{\"fiesta\":\"petrer\",\"desfile\":\"Entradas Cristiana y Mora\",\"fecha\":\"2026-05-16\",\"orden\":null,\"comparsa\":\"Vizcaínos\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":\"Orden no publicado (tríptico ilegible); comparsas por bando\"},{\"fiesta\":\"petrer\",\"desfile\":\"Entradas Cristiana y Mora\",\"fecha\":\"2026-05-16\",\"orden\":null,\"comparsa\":\"Estudiantes\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":\"Orden no publicado (tríptico ilegible); comparsas por bando\"},{\"fiesta\":\"petrer\",\"desfile\":\"Entradas Cristiana y Mora\",\"fecha\":\"2026-05-16\",\"orden\":null,\"comparsa\":\"Labradores\",\"bando\":\"cristiano\",\"cargo\":null,\"nota\":\"Orden no publicado (tríptico ilegible); comparsas por bando\"},{\"fiesta\":\"petrer\",\"desfile\":\"Entradas Cristiana y Mora\",\"fecha\":\"2026-05-16\",\"orden\":null,\"comparsa\":\"Moros Viejos\",\"bando\":\"moro\",\"cargo\":null,\"nota\":\"Orden no publicado (tríptico ilegible); comparsas por bando\"},{\"fiesta\":\"petrer\",\"desfile\":\"Entradas Cristiana y Mora\",\"fecha\":\"2026-05-16\",\"orden\":null,\"comparsa\":\"Moros Nuevos\",\"bando\":\"moro\",\"cargo\":null,\"nota\":\"Orden no publicado (tríptico ilegible); comparsas por bando\"},{\"fiesta\":\"petrer\",\"desfile\":\"Entradas Cristiana y Mora\",\"fecha\":\"2026-05-16\",\"orden\":null,\"comparsa\":\"Moros Beduinos\",\"bando\":\"moro\",\"cargo\":null,\"nota\":\"Orden no publicado (tríptico ilegible); comparsas por bando\"},{\"fiesta\":\"petrer\",\"desfile\":\"Entradas Cristiana y Mora\",\"fecha\":\"2026-05-16\",\"orden\":null,\"comparsa\":\"Berberiscos\",\"bando\":\"moro\",\"cargo\":null,\"nota\":\"Orden no publicado (tríptico ilegible); comparsas por bando\"},{\"fiesta\":\"petrer\",\"desfile\":\"Entradas Cristiana y Mora\",\"fecha\":\"2026-05-16\",\"orden\":null,\"comparsa\":\"Moros Fronterizos\",\"bando\":\"moro\",\"cargo\":null,\"nota\":\"Orden no publicado (tríptico ilegible); comparsas por bando\"}]");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shared/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ETIQUETA_POLVORA",
    ()=>ETIQUETA_POLVORA,
    "PROVINCIAS_PRINCIPALES",
    ()=>PROVINCIAS_PRINCIPALES,
    "TIPOS_ACTO",
    ()=>TIPOS_ACTO,
    "acto",
    ()=>acto,
    "actos",
    ()=>actos,
    "actosDe",
    ()=>actosDe,
    "comparsasDe",
    ()=>comparsasDe,
    "d",
    ()=>d,
    "desfilesDe",
    ()=>desfilesDe,
    "diaMes",
    ()=>diaMes,
    "diaSemana",
    ()=>diaSemana,
    "diaSemanaCorto",
    ()=>diaSemanaCorto,
    "diasCorto",
    ()=>diasCorto,
    "diasDe",
    ()=>diasDe,
    "diasEntre",
    ()=>diasEntre,
    "fechaLarga",
    ()=>fechaLarga,
    "fechaLargaAnyo",
    ()=>fechaLargaAnyo,
    "fiesta",
    ()=>fiesta,
    "fiestas",
    ()=>fiestas,
    "filtroProvincia",
    ()=>filtroProvincia,
    "fuentes",
    ()=>fuentes,
    "fuentesDe",
    ()=>fuentesDe,
    "hoyIso",
    ()=>hoyIso,
    "iso",
    ()=>iso,
    "mayuscula",
    ()=>mayuscula,
    "mesCorto",
    ()=>mesCorto,
    "mesLargo",
    ()=>mesLargo,
    "mesesCorto",
    ()=>mesesCorto,
    "orden",
    ()=>orden,
    "porMes",
    ()=>porMes,
    "provincias",
    ()=>provincias,
    "proximaEdicion",
    ()=>proximaEdicion,
    "proximas",
    ()=>proximas,
    "rango",
    ()=>rango,
    "reemplazarCatalogo",
    ()=>reemplazarCatalogo
]);
// Datos y utilidades compartidas entre la web y la app de En Comparsa.
// Este archivo es la fuente: `npm run sync` lo copia a web/src/shared y app/src/shared.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$data$2f$fiestas$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/data/fiestas.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$data$2f$actos$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/data/actos.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$data$2f$orden$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/data/orden.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$data$2f$fuentes$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/data/fuentes.json.[json].cjs [app-client] (ecmascript)");
;
;
;
;
const fiestas = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$data$2f$fiestas$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
];
const actos = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$data$2f$actos$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
];
const orden = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$data$2f$orden$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const fuentes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$data$2f$fuentes$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
function reemplazarCatalogo(nuevo) {
    if (nuevo.fiestas?.length) fiestas.splice(0, fiestas.length, ...nuevo.fiestas);
    if (nuevo.actos?.length) actos.splice(0, actos.length, ...nuevo.actos);
}
const TIPOS_ACTO = [
    'Entrada',
    'Embajada',
    'Alardo/Arcabucería',
    'Pólvora/Castillo',
    'Procesión',
    'Religioso',
    'Diana',
    'Retreta',
    'Desfile',
    'Infantil',
    'Música',
    'Otro'
];
const PROVINCIAS_PRINCIPALES = [
    'Alicante',
    'Valencia',
    'Murcia'
];
const MESES = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
];
const MESES_C = [
    'ene',
    'feb',
    'mar',
    'abr',
    'may',
    'jun',
    'jul',
    'ago',
    'sep',
    'oct',
    'nov',
    'dic'
];
const DIAS = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado'
];
const DIAS_C = [
    'DOM',
    'LUN',
    'MAR',
    'MIÉ',
    'JUE',
    'VIE',
    'SÁB'
];
const d = (iso)=>new Date(iso + 'T00:00:00Z');
const iso = (x)=>x.toISOString().slice(0, 10);
const hoyIso = (now = new Date())=>`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
const addYears = (s, n)=>`${Number(s.slice(0, 4)) + n}${s.slice(4)}`;
function diasEntre(a, b) {
    return Math.round((d(b).getTime() - d(a).getTime()) / 86400000);
}
function proximaEdicion(f, hoy = hoyIso()) {
    let n = 0;
    while(addYears(f.fin, n) < hoy)n++;
    return {
        inicio: addYears(f.inicio, n),
        fin: addYears(f.fin, n),
        aproximada: n > 0,
        anyoReferencia: Number(f.fin.slice(0, 4))
    };
}
function rango(inicio, fin) {
    const a = d(inicio), b = d(fin);
    const ma = MESES_C[a.getUTCMonth()], mb = MESES_C[b.getUTCMonth()];
    if (inicio === fin) return `${a.getUTCDate()} ${ma}`;
    return ma === mb ? `${a.getUTCDate()}–${b.getUTCDate()} ${mb}` : `${a.getUTCDate()} ${ma}–${b.getUTCDate()} ${mb}`;
}
const diasCorto = (inicio, fin)=>{
    const a = d(inicio), b = d(fin);
    return inicio === fin ? `${a.getUTCDate()}` : `${a.getUTCDate()}–${b.getUTCDate()}`;
};
const mesCorto = (s)=>MESES_C[d(s).getUTCMonth()].toUpperCase();
const mesesCorto = (inicio, fin)=>mesCorto(inicio) === mesCorto(fin) ? mesCorto(inicio) : `${mesCorto(inicio)}–${mesCorto(fin)}`;
const mesLargo = (s)=>MESES[d(s).getUTCMonth()];
const diaSemana = (s)=>DIAS[d(s).getUTCDay()];
const diaSemanaCorto = (s)=>DIAS_C[d(s).getUTCDay()];
const diaMes = (s)=>d(s).getUTCDate();
const fechaLarga = (s)=>`${diaSemana(s)} ${diaMes(s)} de ${mesLargo(s)}`;
const mayuscula = (s)=>s.charAt(0).toUpperCase() + s.slice(1);
const fechaLargaAnyo = (s)=>`${fechaLarga(s)} de ${s.slice(0, 4)}`;
const fiesta = (slug)=>fiestas.find((f)=>f.slug === slug);
const acto = (id)=>actos.find((a)=>a.id === id);
const actosDe = (slug)=>actos.filter((a)=>a.fiesta === slug).sort((x, y)=>(x.fecha + (x.hora ?? '99')).localeCompare(y.fecha + (y.hora ?? '99')));
const diasDe = (slug)=>[
        ...new Set(actosDe(slug).map((a)=>a.fecha))
    ];
const fuentesDe = (slug)=>fuentes.filter((f)=>f.fiesta === slug);
function desfilesDe(slug) {
    const out = [];
    for (const o of orden.filter((x)=>x.fiesta === slug)){
        let g = out.find((x)=>x.nombre === o.desfile);
        if (!g) {
            g = {
                nombre: o.desfile,
                fecha: o.fecha,
                nota: o.nota,
                comparsas: []
            };
            out.push(g);
        }
        g.comparsas.push(o);
    }
    return out;
}
function comparsasDe(slug) {
    const m = new Map();
    for (const o of orden.filter((x)=>x.fiesta === slug))if (!m.has(o.comparsa)) m.set(o.comparsa, o.bando);
    return [
        ...m
    ].map(([nombre, bando])=>({
            nombre,
            bando
        }));
}
function proximas(hoy = hoyIso()) {
    return fiestas.map((f)=>({
            f,
            e: proximaEdicion(f, hoy)
        })).sort((a, b)=>a.e.inicio.localeCompare(b.e.inicio) || a.f.nombre.localeCompare(b.f.nombre));
}
function porMes(hoy = hoyIso(), filtro = ()=>true) {
    const grupos = [];
    for (const it of proximas(hoy).filter((x)=>filtro(x.f))){
        const clave = it.e.inicio.slice(0, 7);
        let g = grupos.find((x)=>x.clave === clave);
        if (!g) {
            g = {
                clave,
                titulo: `${mesLargo(it.e.inicio)} ${clave.slice(0, 4)}`,
                items: []
            };
            grupos.push(g);
        }
        g.items.push(it);
    }
    return grupos;
}
const provincias = ()=>[
        ...new Set(fiestas.map((f)=>f.provincia))
    ].sort();
const filtroProvincia = (p)=>(f)=>p === 'Todas' ? true : p === 'Otras' ? !PROVINCIAS_PRINCIPALES.includes(f.provincia) : f.provincia === p;
const ETIQUETA_POLVORA = {
    si: 'Con pólvora',
    no: 'Sin pólvora',
    desconocido: 'Pólvora: no consta'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1vmnf8on9h57o._.js.map