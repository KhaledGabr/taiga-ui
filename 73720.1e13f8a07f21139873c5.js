"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[73720],{73720:(G,c,o)=>{o.r(c),o.d(c,{ExampleTuiCalendarMonthModule:()=>U});var h=o(12057),d=o(33982),T=o(29851),p=o(76040),E=o(418),i=o(68339),e=o(74788),N=o(88331),g=o(37159),O=o(66596),S=o(57068),_=o(33313);let A=(()=>{class n{constructor(){this.value=null,this.hoveredMonth=null}onMonthClick(t){this.value=t}onMonthHovered(t){this.hoveredMonth=t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-calendar-month-example-1"]],decls:5,vars:3,consts:[[3,"value","monthClick","hoveredItemChange"]],template:function(t,a){1&t&&(e.TgZ(0,"tui-calendar-month",0),e.NdJ("monthClick",function(u){return a.onMonthClick(u)})("hoveredItemChange",function(u){return a.onMonthHovered(u)}),e.qZA(),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()),2&t&&(e.Q6J("value",a.value),e.xp6(2),e.hij("Selected month: ",a.value,""),e.xp6(2),e.hij("Hovered month: ",a.hoveredMonth,""))},directives:[_.o],encapsulation:2,changeDetection:0}),n})(),D=(()=>{class n{constructor(){this.value=null,this.max=new i.TuiMonth(2021,7),this.min=new i.TuiMonth(2019,7)}onMonthClick(t){this.value=null!==this.value&&this.value.isSingleMonth?i.TuiMonthRange.sort(this.value.from,t):new i.TuiMonthRange(t,t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-calendar-month-example-2"]],decls:3,vars:4,consts:[[3,"value","min","max","monthClick"]],template:function(t,a){1&t&&(e.TgZ(0,"tui-calendar-month",0),e.NdJ("monthClick",function(u){return a.onMonthClick(u)}),e.qZA(),e.TgZ(1,"p"),e._uU(2),e.qZA()),2&t&&(e.Q6J("value",a.value)("min",a.min)("max",a.max),e.xp6(2),e.hij("Selected range: ",a.value,""))},directives:[_.o],encapsulation:2,changeDetection:0}),n})();var F=o(31823),x=o(54476),f=o(17023),y=o(76349);function P(n,l){if(1&n&&(e.TgZ(0,"p"),e.tHW(1,2),e._UZ(2,"a",3),e.N_p(),e.qZA(),e.TgZ(3,"tui-doc-example",4),e._UZ(4,"tui-calendar-month-example-1"),e.qZA(),e.TgZ(5,"tui-doc-example",5),e._UZ(6,"tui-calendar-month-example-2"),e.qZA()),2&n){const t=e.oxw();e.xp6(3),e.Q6J("content",t.example1),e.xp6(2),e.Q6J("content",t.example2)}}function R(n,l){1&n&&(e.tHW(0,13),e._UZ(1,"div"),e._UZ(2,"strong"),e.N_p())}function L(n,l){1&n&&e.SDv(0,14)}function v(n,l){1&n&&e._uU(0," Minimal month ")}function H(n,l){1&n&&e.SDv(0,15)}function $(n,l){1&n&&e._uU(0," Current year ")}function V(n,l){1&n&&e._uU(0," Selected month ")}function I(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"tui-doc-demo"),e.TgZ(1,"tui-calendar-month",6),e.NdJ("monthClick",function(m){return e.CHM(t),e.oxw().onMonthClick(m)}),e.qZA(),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,R,3,0,"ng-template",7),e.NdJ("documentationPropertyValueChange",function(m){return e.CHM(t),e.oxw().disabledItemHandler=m}),e.YNc(4,L,1,0,"ng-template",8),e.NdJ("documentationPropertyValueChange",function(m){return e.CHM(t),e.oxw().max=m}),e.YNc(5,v,1,0,"ng-template",9),e.NdJ("documentationPropertyValueChange",function(m){return e.CHM(t),e.oxw().min=m}),e.YNc(6,H,1,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(m){return e.CHM(t),e.oxw().value=m}),e.YNc(7,$,1,0,"ng-template",11),e.NdJ("documentationPropertyValueChange",function(m){return e.CHM(t),e.oxw().year=m}),e.YNc(8,V,1,0,"ng-template",12),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("disabledItemHandler",t.disabledItemHandler)("min",t.min)("max",t.max)("year",t.year)("value",t.value),e.xp6(2),e.Q6J("documentationPropertyValues",t.disabledItemHandlerVariants)("documentationPropertyValue",t.disabledItemHandler),e.xp6(1),e.Q6J("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),e.xp6(1),e.Q6J("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),e.xp6(1),e.Q6J("documentationPropertyValues",t.valueVariants)("documentationPropertyValue",t.value),e.xp6(1),e.Q6J("documentationPropertyValues",t.yearVariants)("documentationPropertyValue",t.year)}}function Z(n,l){if(1&n&&(e.TgZ(0,"ol",16),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,17),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",18),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,19),e.qZA(),e._UZ(9,"tui-doc-code",20),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(4),e.Q6J("code",t.exampleHtml)}}let J=(()=>{class n{constructor(t){this.alertService=t,this.exampleModule=o.e(1697).then(o.t.bind(o,1697,17)),this.exampleHtml=o.e(79434).then(o.t.bind(o,79434,17)),this.example1={TypeScript:o.e(89300).then(o.t.bind(o,89300,17)),HTML:o.e(73106).then(o.t.bind(o,73106,17))},this.example2={TypeScript:o.e(87945).then(o.t.bind(o,87945,17)),HTML:o.e(50584).then(o.t.bind(o,50584,17))},this.minVariants=[i.TUI_FIRST_DAY,new i.TuiMonth(2019,2),new i.TuiMonth(2007,0)],this.maxVariants=[i.TUI_LAST_DAY,new i.TuiMonth(2020,2),new i.TuiMonth(2023,0),new i.TuiMonth(2019,4)],this.min=this.minVariants[0],this.max=this.maxVariants[0],this.disabledItemHandlerVariants=[i.ALWAYS_FALSE_HANDLER,({month:a})=>a%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.valueVariants=[i.TuiDay.currentLocal(),new i.TuiMonthRange(i.TuiDay.currentLocal(),i.TuiDay.currentLocal().append({month:3})),new i.TuiMonth(2007,2)],this.value=null,this.yearVariants=[i.TuiDay.currentLocal(),new i.TuiYear(2007)],this.year=this.yearVariants[0]}onMonthClick(t){this.alertService.open(String(t)).subscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.TuiAlertService))},n.\u0275cmp=e.Xpm({type:n,selectors:[["example-tui-calendar-month"]],decls:4,vars:0,consts:function(){let l,t,a,m,u,M,s,C;return l=$localize`:␟1c677168edd7fab101b47647d0e0c6408932436e␟7706503232819829138: Month picker component. If you want a textfield, see ${"\ufffd#2\ufffd"}:START_LINK: InputMonthRange ${"\ufffd/#2\ufffd"}:CLOSE_LINK:`,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,a=$localize`:␟0427b9c1f10441c6f4c53f1788242e2a97954be1␟2348971518300945764:Range`,m=$localize`:␟5acb2fc15a092ea08e97136e74cb7441fee5a74b␟3402892514282812900:${"\ufffd#1\ufffd"}:START_TAG_DIV:A handler that gets a month and returns true if it is disabled.${"\ufffd/#1\ufffd"}:CLOSE_TAG_DIV:${"\ufffd#2\ufffd"}:START_TAG_STRONG:Must be a pure function${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG:`,u=$localize`:␟21de36d65c8d90255cbe722536ad7ffd2dc18ba7␟2184035891904629249: Maximal month `,M=$localize`:␟10d55eb5861d4ee0970065a79e957f6374271b88␟6121231479332733898: A single month or a range of months `,s=$localize`:␟7e49cae11b32705d7cff0ad772b81e8e2f773f55␟2970267431945466119: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCalendarMonthModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,C=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","CalendarMonth","package","KIT","type","components"],["pageTab",""],l,["tuiLink","","routerLink","/components/input-month-range"],["id","base","heading",t,3,"content"],["id","range","heading",a,3,"content"],[3,"disabledItemHandler","min","max","year","value","monthClick"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","TuiMonth | TuiMonthRange | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","year","documentationPropertyMode","input-output","documentationPropertyType","TuiYear",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","monthClick","documentationPropertyMode","output","documentationPropertyType","TuiMonth"],m,u,M,[1,"b-demo-steps"],s,["filename","myComponent.module.ts",3,"code"],C,["filename","myComponent.template.html",3,"code"]]},template:function(t,a){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,P,7,2,"ng-template",1),e.YNc(2,I,9,15,"ng-template",1),e.YNc(3,Z,10,2,"ng-template",1),e.qZA())},directives:[N.q,g.n,O.V,d.yS,S.f,A,D,F.F,_.o,x.z,f.B,y.c],encapsulation:2,changeDetection:0}),n})(),U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.ez,d.Bz,p.TuiLinkModule,E.TuiCalendarMonthModule,T.fV,d.Bz.forChild((0,T.Ve)(J))]]}),n})()}}]);