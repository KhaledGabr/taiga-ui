(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[45946],{45946:e=>{e.exports='<tui-tree\n    *ngFor="let item of data.children"\n    [childrenHandler]="handler"\n    [content]="content"\n    [tuiTreeController]="true"\n    [value]="item"\n></tui-tree>\n\n<ng-template\n    #content\n    let-item\n>\n    <label\n        tuiLabel\n        class="tui-space_vertical-2 tui-space_left-1"\n    >\n        <input\n            size="s"\n            tuiCheckbox\n            type="checkbox"\n            [ngModel]="item | tuiMapper: getValue : map"\n            (ngModelChange)="onChecked(item, $event)"\n        />\n        <small>{{ item.text }}</small>\n    </label>\n</ng-template>\n'}}]);