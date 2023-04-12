(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[78200],{78200:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\nimport {TuiBooleanHandler} from '@taiga-ui/cdk';\nimport {of} from 'rxjs';\nimport {delay} from 'rxjs/operators';\n\nclass User {\n    constructor(\n        readonly firstName: string,\n        readonly lastName: string,\n        readonly avatarUrl: string | null = null,\n    ) {}\n\n    toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst databaseMockData: readonly User[] = [\n    new User('Roman', 'Sedov', 'https://avatars.githubusercontent.com/u/10106368'),\n    new User('Alex', 'Inkin', assets`/images/avatar.jpg`),\n    new User('Dmitriy', 'Demenskiy'),\n    new User('Evgeniy', 'Mamaev'),\n    new User('Ivan', 'Ishmametiev'),\n    new User('Igor', 'Katsuba'),\n    new User('Yulia', 'Tsareva'),\n];\n\n@Component({\n    selector: 'tui-select-example-6',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiSelectExample6 {\n    value = null;\n\n    readonly items$ = of(databaseMockData).pipe(delay(5000));\n\n    readonly disabledItemHandler: TuiBooleanHandler<User> = ({avatarUrl}) => !!avatarUrl;\n}\n"}}]);