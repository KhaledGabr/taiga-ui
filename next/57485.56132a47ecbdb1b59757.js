"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[57485],{

/***/ 57485:
/***/ ((module) => {

module.exports = "<form\n    tuiGroup\n    [collapsed]=\"true\"\n    [formGroup]=\"form\"\n>\n    <tui-radio-block\n        *ngFor=\"let item of items\"\n        formControlName=\"control\"\n        class=\"control\"\n        [item]=\"item\"\n        [hideRadio]=\"true\"\n    >\n        {{ item }}\n        <button\n            tuiIconButton\n            appearance=\"icon\"\n            size=\"xs\"\n            icon=\"tuiIconCloseLarge\"\n            type=\"reset\"\n            class=\"button\"\n        ></button>\n    </tui-radio-block>\n</form>\n<pre>{{ form.value | json }}</pre>\n";

/***/ })

}]);