"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[60386],{60386:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    defaultEditorExtensions,\n    TUI_EDITOR_EXTENSIONS,\n    TUI_EDITOR_VALUE_TRANSFORMER,\n} from '@taiga-ui/addon-editor';\n\nimport {ExampleEditorCleanupHtmlTransformer} from './transformer';\n\n@Component({\n    selector: 'tui-editor-cleanup-html-example-1',\n    templateUrl: './index.html',\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: defaultEditorExtensions,\n        },\n        {\n            provide: TUI_EDITOR_VALUE_TRANSFORMER,\n            useClass: ExampleEditorCleanupHtmlTransformer,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorCleanupHtmlExample1 {\n    control = new FormControl(\n        '<p class=\"t-content\">TipTap Editor</p>',\n        Validators.required,\n    );\n}\n"}}]);