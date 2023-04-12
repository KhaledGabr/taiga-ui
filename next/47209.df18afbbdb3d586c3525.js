(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[47209],{47209:n=>{n.exports="import {Component, Input} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {EMPTY_ARRAY, TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';\nimport {TuiDataListComponent, tuiIsEditingKey} from '@taiga-ui/core';\n\ninterface Items<T> {\n    readonly name: string;\n    readonly items: readonly T[];\n}\n\n@Component({\n    selector: 'custom-list',\n    templateUrl: './custom-list.template.html',\n    changeDetection,\n})\nexport class CustomListComponent<T> {\n    @Input()\n    items: ReadonlyArray<Items<T>> = [];\n\n    value = '';\n\n    readonly all = EMPTY_ARRAY;\n\n    readonly filter = TUI_DEFAULT_MATCHER;\n\n    onArrowDown<T>(list: TuiDataListComponent<T>, event: Event): void {\n        list.onFocus(event, true);\n    }\n\n    onKeyDown(key: string, element: HTMLElement | null): void {\n        if (element && tuiIsEditingKey(key)) {\n            element.focus({preventScroll: true});\n        }\n    }\n}\n"}}]);