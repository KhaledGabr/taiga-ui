(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[58359],{58359:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';\nimport {\n    TuiCellDirective,\n    TuiTableDirective,\n    TuiTbodyComponent,\n    TuiTdComponent,\n    TuiThComponent,\n    TuiThGroupComponent,\n    TuiTrComponent,\n} from '@taiga-ui/addon-table';\nimport {TuiHintDirective, TuiTextfieldControllerModule} from '@taiga-ui/core';\nimport {TUI_VALIDATION_ERRORS, TuiFieldErrorContentPipe} from '@taiga-ui/kit';\nimport {TuiInputNumberModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent6\",\n    imports: [\n        TuiTableDirective,\n        TuiThGroupComponent,\n        TuiThComponent,\n        TuiTbodyComponent,\n        NgForOf,\n        TuiTrComponent,\n        TuiCellDirective,\n        TuiTdComponent,\n        TuiInputNumberModule,\n        TuiHintDirective,\n        ReactiveFormsModule,\n        TuiTextfieldControllerModule,\n        TuiFieldErrorContentPipe,\n        TuiCurrencyPipe,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_VALIDATION_ERRORS,\n            useValue: {\n                required: 'Enter this!',\n                max: (context: {max: number}): string =>\n                    `Too expensive, max ${context.max}`,\n            },\n        },\n    ],\n})\nexport default class ExampleComponent {\n    protected readonly data = [{name: 'Latte'}, {name: 'Cappuccino'}] as const;\n\n    protected latteControl = new FormControl<number | null>(null, [\n        Validators.required,\n        Validators.max(6),\n    ]);\n\n    protected cappuccinoControl = new FormControl<number | null>(null, [\n        Validators.required,\n        Validators.max(5),\n    ]);\n\n    protected controls = [this.latteControl, this.cappuccinoControl];\n\n    protected readonly columns = ['name', 'price'];\n}\n"}}]);