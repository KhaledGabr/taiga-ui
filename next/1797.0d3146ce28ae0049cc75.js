(window.webpackJsonp=window.webpackJsonp||[]).push([[1797],{An4C:function(n,e,a){"use strict";a.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\ninterface User {\n    readonly name: string;\n    readonly email: string;\n    readonly status: 'alive' | 'deceased';\n    readonly tags: readonly string[];\n}\n\n@Component({\n    selector: `tui-table-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTableExample2 {\n    readonly columns = [`name`, `email`, `status`, `tags`, `actions`];\n\n    users: readonly User[] = [\n        {\n            name: `Michael Palin`,\n            email: `m.palin@montypython.com`,\n            status: `alive`,\n            tags: [`Funny`],\n        },\n        {\n            name: `Eric Idle`,\n            email: `e.idle@montypython.com`,\n            status: `alive`,\n            tags: [`Funny`, `Music`],\n        },\n        {\n            name: `John Cleese`,\n            email: `j.cleese@montypython.com`,\n            status: `alive`,\n            tags: [`Funny`, `Tall`, `Actor`],\n        },\n        {\n            name: `Terry Jones`,\n            email: ``,\n            status: `deceased`,\n            tags: [`Funny`, `Director`],\n        },\n        {\n            name: `Terry Gilliam`,\n            email: `t.gilliam@montypython.com`,\n            status: `alive`,\n            tags: [`Funny`, `Director`],\n        },\n        {\n            name: `Graham Chapman`,\n            email: ``,\n            status: `deceased`,\n            tags: [`Funny`, `King Arthur`],\n        },\n    ];\n\n    remove(item: User): void {\n        this.users = this.users.filter(user => user !== item);\n    }\n}\n"}}]);