(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[84015],{84015:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiDataListWrapper,\n    TuiFilterByInputPipeModule,\n    TuiStringifyContentPipeModule,\n} from '@taiga-ui/kit';\nimport {TuiComboBoxModule} from '@taiga-ui/legacy';\n\ninterface User {\n    readonly name: string;\n    readonly surname: string;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiComboBoxModule,\n        FormsModule,\n        TuiDataListWrapper,\n        TuiStringifyContentPipeModule,\n        TuiFilterByInputPipeModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected value = null;\n\n    protected readonly items = [\n        {\n            name: 'John',\n            surname: 'Cleese',\n        },\n        {\n            name: 'Eric',\n            surname: 'Idle',\n        },\n    ];\n\n    protected readonly stringify = ({name, surname}: User): string =>\n        `${name} ${surname}`;\n}\n"}}]);