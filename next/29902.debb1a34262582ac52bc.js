(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[29902],{29902:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';\nimport {TUI_TREE_CONTENT} from '@taiga-ui/kit';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\n\nimport {FoldersComponent} from './content';\n\ninterface TreeNode {\n    readonly text: string;\n    readonly children?: readonly TreeNode[];\n}\n\n@Component({\n    selector: 'tui-tree-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['index.less'],\n    providers: [\n        {\n            provide: TUI_TREE_CONTENT,\n            useValue: new PolymorpheusComponent(FoldersComponent),\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTreeExample5 {\n    readonly data: TreeNode = {\n        text: 'Topmost',\n        children: [\n            {\n                text: 'Top level 1',\n                children: [\n                    {\n                        text: 'Another item',\n                        children: [\n                            {text: 'Next level 1'},\n                            {text: 'Next level 2'},\n                            {text: 'Next level 3'},\n                        ],\n                    },\n                ],\n            },\n            {text: 'Top level 2'},\n            {\n                text: 'Top level 3',\n                children: [{text: 'Test 1'}, {text: 'Test 2'}],\n            },\n        ],\n    };\n\n    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>\n        item.children || EMPTY_ARRAY;\n}\n"}}]);