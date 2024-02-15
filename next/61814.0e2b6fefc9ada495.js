(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[61814],{61814:e=>{e.exports="import {Component, Inject, ViewEncapsulation} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiDialogService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-dialog-example-10',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection,\n})\nexport class TuiDialogExampleComponent10 {\n    constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}\n\n    showDialog(): void {\n        this.dialogs\n            .open(\n                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',\n                {\n                    label: 'What is Lorem Ipsum?',\n                    appearance: 'lorem-ipsum',\n                },\n            )\n            .subscribe();\n    }\n}\n"}}]);