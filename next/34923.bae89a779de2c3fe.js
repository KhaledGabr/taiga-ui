(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[34923],{34923:t=>{t.exports='<tui-combo-box\n    class="b-form"\n    [stringify]="stringify"\n    [(ngModel)]="value"\n>\n    Find the best employees\n    <input\n        placeholder="Type a name"\n        tuiTextfield\n    />\n    <tui-data-list-wrapper\n        *tuiDataList\n        [itemContent]="stringify | tuiStringifyContent"\n        [items]="items | tuiFilterByInputWith: stringify"\n    ></tui-data-list-wrapper>\n</tui-combo-box>\n'}}]);