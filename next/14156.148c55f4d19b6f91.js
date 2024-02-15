(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[14156],{14156:e=>{e.exports="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: 'tui-dialog-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiDialogExampleComponent5 {\n    constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}\n\n    onClick(\n        content: PolymorpheusContent<TuiDialogContext>,\n        header: PolymorpheusContent,\n        size: TuiDialogSize,\n    ): void {\n        this.dialogs\n            .open(content, {\n                label: 'What a cool library set',\n                header,\n                size,\n            })\n            .subscribe();\n    }\n}\n"}}]);