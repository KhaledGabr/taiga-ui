(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[73265],{73265:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiFadeIn} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-fade-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    animations: [tuiFadeIn],\n})\nexport class TuiFadeExample2 {\n    expanded = false;\n\n    toggle(): void {\n        this.expanded = !this.expanded;\n    }\n}\n"}}]);