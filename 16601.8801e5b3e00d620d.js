(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[16601],{16601:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-filter-by-input-example-3',\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport class TuiFilterByInputExample3 {\n    protected readonly items = [\n        'Luke Skywalker',\n        'Leia Organa Solo',\n        'Darth Vader',\n        'Han Solo',\n        'Obi-Wan Kenobi',\n        'Yoda',\n    ];\n\n    protected readonly control = new FormControl([this.items[0]]);\n}\n"}}]);