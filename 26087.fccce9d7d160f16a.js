(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[26087],{26087:n=>{n.exports="import {NgFor} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCarousel} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [TuiCarousel, NgFor],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected index = 0;\n\n    protected readonly items = [\n        'angular.svg',\n        'avatar.jpg',\n        'angular.svg',\n        'avatar.jpg',\n        'angular.svg',\n        'avatar.jpg',\n    ];\n}\n"}}]);