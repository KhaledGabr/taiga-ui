(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[33068],{33068:n=>{n.exports='<div\n    tuiCardLarge\n    tuiSurface="elevated"\n>\n    <header tuiHeader>\n        <h1 tuiTitle>\n            Title\n            <span tuiSubtitle>Subtitle</span>\n        </h1>\n    </header>\n\n    <tui-hosted-dropdown\n        *tuiRepeatTimes="let index of 3"\n        tuiDropdownAlign="right"\n        [content]="dropdown"\n        [sided]="true"\n    >\n        <button tuiCell="l">\n            <tui-avatar\n                appearance="primary"\n                src="tuiIconStar"\n            ></tui-avatar>\n\n            <div tuiTitle>\n                Title\n                <div tuiSubtitle>Description</div>\n            </div>\n\n            <tui-icon\n                icon="tuiIconChevronRightLarge"\n                tuiAppearance="icon"\n            ></tui-icon>\n        </button>\n    </tui-hosted-dropdown>\n\n    <button\n        tuiLink\n        type="button"\n    >\n        Show all\n    </button>\n</div>\n\n<ng-template\n    #dropdown\n    let-close="close"\n>\n    <tui-data-list>\n        <tui-opt-group>\n            <button\n                *ngFor="let item of [\'Edit\', \'Download\', \'Rename\', \'Delete\']"\n                tuiOption\n            >\n                {{ item }}\n            </button>\n        </tui-opt-group>\n        <tui-opt-group>\n            <button\n                tuiOption\n                (click)="close()"\n            >\n                Nevermind\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n'}}]);