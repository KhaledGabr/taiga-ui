(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[42569],{42569:n=>{n.exports='<tui-swipe-actions>\n    <div\n        tuiCardLarge\n        tuiCell\n        tuiSurface="elevated"\n    >\n        <tui-avatar\n            appearance="primary"\n            src="tuiIconDollarSignLarge"\n        ></tui-avatar>\n        <div tuiTitle>\n            <strong>{{ 10000 | tuiAmount: \'USD\' | async }}</strong>\n            <div tuiSubtitle>Dollar account</div>\n        </div>\n    </div>\n\n    <button\n        appearance="flat"\n        iconLeft="tuiIconMoreVertical"\n        size="s"\n        tuiDropdownOpen\n        tuiIconButton\n        class="fallback"\n        [tuiDropdown]="content"\n    ></button>\n\n    <ng-template #content>\n        <tui-data-list>\n            <button tuiOption>Hide</button>\n            <button tuiOption>Edit</button>\n        </tui-data-list>\n    </ng-template>\n\n    <button\n        iconLeft="tuiIconEye"\n        size="m"\n        tuiIconButton\n        tuiSwipeAction\n    ></button>\n    <button\n        iconLeft="tuiIconEdit3"\n        size="m"\n        tuiIconButton\n        tuiSwipeAction\n    ></button>\n</tui-swipe-actions>\n'}}]);