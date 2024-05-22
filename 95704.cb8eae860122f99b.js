(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[95704],{95704:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-tabs-example-5',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiTabsExample5 {\n    protected open = false;\n    protected activeItemIndex = 0;\n\n    protected items = Array.from({length: 5}, (_, i) => `Item #${i}`);\n\n    protected add(): void {\n        this.items = this.items.concat(`Item #${Date.now()}`);\n    }\n\n    protected remove(removed: string): void {\n        const index = this.items.indexOf(removed);\n\n        this.items = this.items.filter(item => item !== removed);\n\n        if (index <= this.activeItemIndex) {\n            this.activeItemIndex = Math.max(this.activeItemIndex - 1, 0);\n        }\n    }\n}\n"}}]);