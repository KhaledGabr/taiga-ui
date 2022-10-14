"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[85177],{

/***/ 85177:
/***/ ((module) => {

module.exports = "```html\n<table\n  tuiTable\n  [columns]=\"columns\"\n>\n  <thead tuiThead>\n    <tr tuiThGroup>\n      <th\n        *tuiHead=\"'name'\"\n        tuiTh\n      >\n        Name\n      </th>\n      <th\n        *tuiHead=\"'email'\"\n        tuiTh\n      >\n        E-mail\n      </th>\n      <th\n        *tuiHead=\"'status'\"\n        tuiTh\n      >\n        Status\n      </th>\n      <th\n        *tuiHead=\"'tags'\"\n        tuiTh\n        [sorter]=\"null\"\n      >\n        Tags\n      </th>\n    </tr>\n  </thead>\n  <tbody\n    *tuiLet=\"users | tuiTableSort as sortedUsers\"\n    tuiTbody\n    [data]=\"sortedUsers\"\n  >\n    <tr\n      *ngFor=\"let item of sortedUsers\"\n      tuiTr\n    >\n      <td\n        *tuiCell=\"'name'\"\n        tuiTd\n      >\n        {{ item.name }}\n      </td>\n      <td\n        *tuiCell=\"'email'\"\n        tuiTd\n      >\n        <a\n          *ngIf=\"item.email\"\n          tuiLink\n          [href]=\"'mailto:' + item.email\"\n        >\n          {{ item.email }}\n        </a>\n      </td>\n      <td\n        *tuiCell=\"'status'\"\n        tuiTd\n      >\n        <div [class]=\"item.status\">{{ item.status }}</div>\n      </td>\n      <td\n        *tuiCell=\"'tags'\"\n        tuiTd\n      >\n        <tui-tag\n          *ngFor=\"let tag of item.tags\"\n          class=\"tui-space_right-1\"\n          [value]=\"tag\"\n          [autoColor]=\"true\"\n        ></tui-tag>\n      </td>\n    </tr>\n  </tbody>\n</table>\n```\n";

/***/ })

}]);