(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{GRgB:function(r,a,n){"use strict";n.r(a),a.default="@import '../../taiga-ui-local';\n\n/* stylelint-disable order/order */\ntui-wrapper[data-appearance='secondary'],\ntui-wrapper[data-appearance='flat'],\n[tuiWrapper][data-appearance='secondary'],\n[tuiWrapper][data-appearance='flat'] {\n    background: var(--tui-secondary);\n    color: var(--tui-link);\n\n    &[data-mode='onDark'] {\n        background: var(--tui-clear-inverse);\n        color: var(--tui-text-01-night);\n\n        .wrapper-hover({\n            background: var(--tui-clear-inverse-hover);\n            color: var(--tui-text-01-night);\n        });\n\n        .wrapper-active({\n            background: var(--tui-clear-inverse-active);\n        });\n\n        .wrapper-focus({\n            --tui-focus: var(--tui-text-01-night);\n        });\n    }\n\n    &[data-mode='onLight'] {\n        background: var(--tui-clear);\n        color: var(--tui-text-01);\n\n        .wrapper-hover({\n            background: var(--tui-clear-hover);\n            color: var(--tui-text-01);\n        });\n\n        .wrapper-active({\n            background: var(--tui-clear-active);\n        });\n    }\n\n    .wrapper-hover({\n        background: var(--tui-secondary-hover);\n        color: var(--tui-link-hover);\n    });\n\n    .wrapper-active({\n        background: var(--tui-secondary-active);\n    });\n\n    .wrapper-invalid({\n        color: var(--tui-error-fill);\n        background: var(--tui-error-bg);\n\n        .wrapper-hover({\n            background: var(--tui-error-bg-hover);\n        });\n\n        .wrapper-focus({\n            --tui-focus: var(--tui-error-fill);\n        });\n    });\n}\n\ntui-wrapper[data-appearance='flat'],\n[tuiWrapper][data-appearance='flat'] {\n    background: transparent;\n\n    &[data-mode='onDark'],\n    &[data-mode='onLight'] {\n        background: transparent;\n    }\n}\n"}}]);