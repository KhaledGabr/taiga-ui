(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[19137],{19137:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';\nimport {TuiDialogService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-data-list-example-2',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiDataListExample2 {\n    private readonly dialogs = inject(TuiDialogService);\n\n    protected dropdownOpen = false;\n    protected size: TuiSizeL | TuiSizeS = 's';\n\n    protected readonly burgers = ['Classic', 'Cheeseburger', 'Royal Cheeseburger'];\n    protected readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];\n\n    protected open = false;\n\n    protected selectOption(item: string): void {\n        this.dropdownOpen = false;\n        this.dialogs.open(`You selected ${item}`).subscribe();\n    }\n}\n"}}]);