"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[22134],{

/***/ 22134:
/***/ ((module) => {

module.exports = "<form [formGroup]=\"form\">\n    <tui-hosted-dropdown\n        [content]=\"dropdown\"\n        [(open)]=\"open\"\n    >\n        <button\n            tuiButton\n            [appearance]=\"appearance\"\n            [iconRight]=\"length ? cleaner : arrow\"\n            [style.--tui-padding.rem]=\"1.25\"\n            (keydown.delete)=\"form.reset()\"\n        >\n            {{ text }}\n        </button>\n        <ng-template #dropdown>\n            <tui-data-list-wrapper\n                tuiMultiSelectGroup\n                formControlName=\"control\"\n                [items]=\"items\"\n            ></tui-data-list-wrapper>\n        </ng-template>\n        <ng-template #cleaner>\n            <button\n                tuiIconButton\n                appearance=\"icon\"\n                size=\"xs\"\n                icon=\"tuiIconCloseLarge\"\n                type=\"reset\"\n                tuiPreventDefault=\"mousedown\"\n            ></button>\n        </ng-template>\n    </tui-hosted-dropdown>\n</form>\n";

/***/ })

}]);