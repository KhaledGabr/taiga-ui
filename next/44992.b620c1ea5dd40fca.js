(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44992],{22611:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiInputDateTimeModule:()=>X});var o=n(86568),a=n(35856),i=n(82312),u=n(752),r=n(10488),d=n(33976),m=n(47796),l=n(6528),c=n(45328),s=n(7548),p=n(11307),y=n(13692),f=n(96808),h=n(95356),C=n(56616),T=n(34496),E=n(37288),I=n(83480),O=n(34448),Y=n(55412),k=n(86216),M=n(93280),R=n(88468),V=n(47976),g=n(7332),x=n(72212),w=n(73904),D=n(62224),P=n(94472),b=n(17704);let $=(()=>{var e;class t{constructor(){this.testForm=new a.WC({testValue:new a.Ku([new c.TuiDay(2017,2,15),null])})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-input-date-time-example-1"]],decls:10,vars:4,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue"],["placeholder","OCT 26 1985 01:22","tuiTextfield",""]],template:function(e,t){1&e&&(l.I0R(0,"form",0)(1,"tui-input-date-time",1),l.OEk(2," Choose date and time "),l.wR5(3,"input",2),l.C$Y(),l.I0R(4,"p"),l.OEk(5,"Form value:"),l.C$Y(),l.I0R(6,"pre")(7,"code"),l.OEk(8),l.wVc(9,"json"),l.C$Y()()()),2&e&&(l.E7m("formGroup",t.testForm),l.yG2(8),l.cNF(l.kDX(9,2,t.testForm.value)))},dependencies:[a.sz,a.ue,a.u,a.uW,a.Wo,k.a,M.C,b.b,o.ED],encapsulation:2,changeDetection:0}),t})(),v=(()=>{var e;class t{constructor(){this.testForm=new a.WC({testValue:new a.Ku([new c.TuiDay(2017,2,15),null])})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-input-date-time-example-2"]],decls:19,vars:4,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","timeMode","HH:MM"],["formControlName","testValue","timeMode","HH:MM:SS"],["formControlName","testValue","timeMode","HH:MM:SS.MSS"]],template:function(e,t){1&e&&(l.I0R(0,"form",0)(1,"p"),l.OEk(2,"Default:"),l.C$Y(),l.I0R(3,"tui-input-date-time",1),l.OEk(4," Choose date and time "),l.C$Y(),l.I0R(5,"p"),l.OEk(6,"With seconds:"),l.C$Y(),l.I0R(7,"tui-input-date-time",2),l.OEk(8," Choose date and time "),l.C$Y(),l.I0R(9,"p"),l.OEk(10,"With SS and MS:"),l.C$Y(),l.I0R(11,"tui-input-date-time",3),l.OEk(12," Choose date and time "),l.C$Y(),l.I0R(13,"p"),l.OEk(14,"Form value:"),l.C$Y(),l.I0R(15,"pre")(16,"code"),l.OEk(17),l.wVc(18,"json"),l.C$Y()()()),2&e&&(l.E7m("formGroup",t.testForm),l.yG2(17),l.cNF(l.kDX(18,2,t.testForm.value)))},dependencies:[a.sz,a.ue,a.u,a.uW,a.Wo,k.a,M.C,o.ED],encapsulation:2,changeDetection:0}),t})(),G=(()=>{var e;class t{constructor(){this.control=new a.Ku([new c.TuiDay(2017,2,15),new c.TuiTime(12,30)])}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-input-date-time-example-3"]],features:[l.M5G([{provide:c.TUI_DATE_FORMAT,useValue:"YMD"},{provide:c.TUI_DATE_SEPARATOR,useValue:"/"}])],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(l.I0R(0,"tui-input-date-time",0),l.OEk(1," Choose date and time\n"),l.C$Y()),2&e&&l.E7m("formControl",t.control)},dependencies:[a.ue,a.ug,k.a,M.C],encapsulation:2,changeDetection:0}),t})(),A=(()=>{var e;class t extends c.AbstractTuiValueTransformer{constructor(){super(...arguments),this.separator=", "}fromControlValue(e){const[t,n=""]=e.split(this.separator);return t?[c.TuiDay.normalizeParse(t),n?c.TuiTime.fromString(n):null]:[null,null]}toControlValue([e,t]){return e?e.toString()+(t?`${this.separator}${t.toString()}`:""):""}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=l.otF(e)))(n||e)}}(),e.ɵprov=l.wxM({token:e,factory:e.ɵfac}),t})(),H=(()=>{var e;class t{constructor(){this.control=new a.Ku("19.01.2022, 12:33")}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-input-date-time-example-4"]],features:[l.M5G([{provide:d.TUI_DATE_TIME_VALUE_TRANSFORMER,useClass:A}])],decls:7,vars:2,consts:[[1,"b-form",3,"formControl"]],template:function(e,t){1&e&&(l.I0R(0,"tui-input-date-time",0),l.OEk(1," Choose date and time\n"),l.C$Y(),l.I0R(2,"p"),l.OEk(3,"Stringified control value:"),l.C$Y(),l.I0R(4,"p")(5,"code"),l.OEk(6),l.C$Y()()),2&e&&(l.E7m("formControl",t.control),l.yG2(6),l.cNF(t.control.value))},dependencies:[a.ue,a.ug,k.a,M.C],encapsulation:2,changeDetection:0}),t})(),S=(()=>{var e;class t{constructor(){this.testForm=new a.WC({testValue:new a.Ku([new c.TuiDay(2017,2,15),new c.TuiTime(12,30)])})}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=l.In1({type:e,selectors:[["tui-input-date-time-example-5"]],features:[l.M5G([(0,d.tuiInputDateOptionsProvider)({nativePicker:!0})])],decls:4,vars:2,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue",3,"tuiTextfieldCleaner"],["placeholder","10.10.1998 01:22","tuiTextfield",""]],template:function(e,t){1&e&&(l.I0R(0,"form",0)(1,"tui-input-date-time",1),l.OEk(2," Choose date and time "),l.wR5(3,"input",2),l.C$Y()()),2&e&&(l.E7m("formGroup",t.testForm),l.yG2(1),l.E7m("tuiTextfieldCleaner",!0))},dependencies:[a.sz,a.ue,a.u,a.uW,a.Wo,k.a,M.C,b.b,V.e],encapsulation:2,changeDetection:0}),t})();function F(e,t){if(1&e&&(l.I0R(0,"div",2)(1,"code"),l.OEk(2,"InputDateTime"),l.C$Y(),l.OEk(3," allows to input date and time "),l.C$Y(),l.I0R(4,"h3"),l.OEk(5,"DI-tokens for date localization:"),l.C$Y(),l.I0R(6,"dl")(7,"dt")(8,"code"),l.OEk(9,"TUI_DATE_FORMAT"),l.C$Y()(),l.I0R(10,"dd",3),l.OEk(11," active date format ( "),l.I0R(12,"code"),l.OEk(13,"'DMY' | 'MDY' | 'YMD'"),l.C$Y(),l.OEk(14," ) "),l.C$Y(),l.I0R(15,"dt")(16,"code"),l.OEk(17,"TUI_DATE_SEPARATOR"),l.C$Y()(),l.I0R(18,"dd"),l.OEk(19,"single-character date's separator (dot, slash etc.)"),l.C$Y()(),l.I0R(20,"p",2)(21,"a",4),l.OEk(22," See example "),l.C$Y(),l.OEk(23," with the usage of these tokens. "),l.C$Y(),l.I0R(24,"h3"),l.OEk(25,"DI-tokens for input-configurations:"),l.C$Y(),l.I0R(26,"dl")(27,"dt")(28,"code"),l.OEk(29,"TUI_DATE_TIME_VALUE_TRANSFORMER"),l.C$Y()(),l.I0R(30,"dd"),l.OEk(31," custom format of control output ( "),l.I0R(32,"code"),l.OEk(33,"[TuiDay | null, TuiTime | null]"),l.C$Y(),l.OEk(34," is default). "),l.I0R(35,"p")(36,"a",5),l.OEk(37," See example "),l.C$Y(),l.OEk(38," with string as control's output. "),l.C$Y()()(),l.I0R(39,"tui-doc-example",6)(40,"tui-notification",7),l.OEk(41," If you need to set some attributes or listen to events on native "),l.I0R(42,"code"),l.OEk(43,"input"),l.C$Y(),l.OEk(44," , you can put it inside with "),l.I0R(45,"code"),l.OEk(46,"Textfield"),l.C$Y(),l.OEk(47," directive as shown below "),l.C$Y(),l.wR5(48,"tui-input-date-time-example-1"),l.C$Y(),l.I0R(49,"tui-doc-example",8),l.wR5(50,"tui-input-date-time-example-2"),l.C$Y(),l.I0R(51,"tui-doc-example",9),l.wR5(52,"tui-input-date-time-example-3"),l.C$Y(),l.I0R(53,"tui-doc-example",10),l.wR5(54,"tui-input-date-time-example-4"),l.C$Y(),l.I0R(55,"tui-doc-example",11)(56,"tui-notification",3),l.OEk(57," Please note that native input datetime only supports HH:MM time mode "),l.C$Y(),l.wR5(58,"tui-input-date-time-example-5"),l.C$Y()),2&e){const e=l.GaO();l.yG2(39),l.E7m("content",e.example1),l.yG2(10),l.E7m("content",e.example2),l.yG2(2),l.E7m("content",e.example3),l.yG2(2),l.E7m("content",e.example4),l.yG2(2),l.E7m("content",e.example5)}}function _(e,t){if(1&e){const e=l.KQA();l.I0R(0,"tui-input-date-time",22),l.qCj("tuiDropdownOpenChange",(function(t){l.usT(e);const n=l.GaO(2);return l.CGJ(n.dropdownOpen.next(t))})),l.wVc(1,"async"),l.OEk(2," Choose date and time "),l.C$Y()}if(2&e){const e=l.GaO(2);l.m4B("text-align",e.textAlign),l.E7m("defaultActiveYearMonth",e.defaultActiveYearMonth)("disabledItemHandler",e.disabledItemHandler)("focusable",e.focusable)("formControl",e.control)("max",e.max)("min",e.min)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("timeMode",e.mode)("tuiDropdownOpen",!!l.kDX(1,21,e.dropdownOpen))("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)}}function L(e,t){1&e&&(l.OEk(0," Disabled state (use "),l.I0R(1,"code"),l.OEk(2,"formControl.disable()"),l.C$Y(),l.OEk(3," ) "))}function N(e,t){1&e&&(l.I0R(0,"div"),l.OEk(1,"A handler that gets a date and returns true if it is disabled."),l.C$Y(),l.I0R(2,"strong"),l.OEk(3,"Must be a pure function"),l.C$Y())}function U(e,t){1&e&&l.OEk(0," Min date ")}function W(e,t){1&e&&l.OEk(0," Max date ")}function z(e,t){1&e&&l.OEk(0," The default active month that is shown when you opens calendar for the first time ")}function j(e,t){1&e&&l.OEk(0," Time modes for SS and MS support ")}function q(e,t){1&e&&l.OEk(0," Custom align content by text-align ")}function K(e,t){if(1&e){const e=l.KQA();l.I0R(0,"tui-doc-demo",12),l.yuY(1,_,3,23,"ng-template"),l.C$Y(),l.I0R(2,"tui-doc-documentation"),l.yuY(3,L,4,0,"ng-template",13),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const n=l.GaO();return l.CGJ(n.disabled=t)})),l.yuY(4,N,4,0,"ng-template",14),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const n=l.GaO();return l.CGJ(n.disabledItemHandler=t)})),l.yuY(5,U,1,0,"ng-template",15),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const n=l.GaO();return l.CGJ(n.min=t)})),l.yuY(6,W,1,0,"ng-template",16),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const n=l.GaO();return l.CGJ(n.max=t)})),l.yuY(7,z,1,0,"ng-template",17),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const n=l.GaO();return l.CGJ(n.defaultActiveYearMonth=t)})),l.yuY(8,j,1,0,"ng-template",18),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const n=l.GaO();return l.CGJ(n.mode=t)})),l.C$Y(),l.wR5(9,"inherited-documentation",19),l.I0R(10,"tui-doc-documentation",20),l.yuY(11,q,1,0,"ng-template",21),l.qCj("documentationPropertyValueChange",(function(t){l.usT(e);const n=l.GaO();return l.CGJ(n.textAlign=t)})),l.C$Y()}if(2&e){const e=l.GaO();l.E7m("control",e.control),l.yG2(3),l.E7m("documentationPropertyValue",e.disabled),l.yG2(1),l.E7m("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),l.yG2(1),l.E7m("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),l.yG2(1),l.E7m("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),l.yG2(1),l.E7m("documentationPropertyValues",e.defaultActiveYearMonthVariants)("documentationPropertyValue",e.defaultActiveYearMonth),l.yG2(1),l.E7m("documentationPropertyValues",e.modeVariants)("documentationPropertyValue",e.mode),l.yG2(1),l.E7m("dropdown",!0),l.yG2(2),l.E7m("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function J(e,t){if(1&e&&(l.I0R(0,"ol",23)(1,"li")(2,"p"),l.OEk(3," Import an Angular module for forms and "),l.I0R(4,"code"),l.OEk(5,"TuiInputDateTimeModule"),l.C$Y(),l.OEk(6," in the same module where you want to use our component: "),l.C$Y(),l.wR5(7,"tui-doc-code",24),l.C$Y(),l.I0R(8,"li")(9,"p"),l.OEk(10," Declare a form ( "),l.I0R(11,"code"),l.OEk(12,"FormGroup"),l.C$Y(),l.OEk(13," ) or a control ( "),l.I0R(14,"code"),l.OEk(15,"FormControl"),l.C$Y(),l.OEk(16," ) in your component: "),l.C$Y(),l.wR5(17,"tui-doc-code",25),l.C$Y(),l.I0R(18,"li"),l.OEk(19," Use in template: "),l.wR5(20,"tui-doc-code",26),l.C$Y()()),2&e){const e=l.GaO();l.yG2(7),l.E7m("code",e.exampleModule),l.yG2(10),l.E7m("code",e.exampleForm),l.yG2(3),l.E7m("code",e.exampleHtml)}}let Q=(()=>{var e;class t extends s.m{constructor(){super(...arguments),this.today=c.TuiDay.currentLocal(),this.exampleForm=n.e(64828).then(n.t.bind(n,64828,17)),this.exampleModule=n.e(44204).then(n.t.bind(n,44204,17)),this.exampleHtml=n.e(11632).then(n.t.bind(n,34012,17)),this.example1={TypeScript:n.e(91528).then(n.t.bind(n,91528,17)),HTML:n.e(47796).then(n.t.bind(n,25416,17))},this.example2={TypeScript:n.e(19248).then(n.t.bind(n,19248,17)),HTML:n.e(17512).then(n.t.bind(n,17512,17))},this.example3={TypeScript:n.e(16308).then(n.t.bind(n,16308,17)),HTML:n.e(47252).then(n.t.bind(n,47252,17))},this.example4={TypeScript:n.e(24232).then(n.t.bind(n,24232,17)),HTML:n.e(71060).then(n.t.bind(n,71060,17)),"value-transformer.ts":n.e(38332).then(n.t.bind(n,38332,17))},this.example5={TypeScript:n.e(14176).then(n.t.bind(n,58940,17)),HTML:n.e(29572).then(n.t.bind(n,29572,17))},this.minVariants=[c.TUI_FIRST_DAY,new c.TuiDay(2017,2,5),new c.TuiDay(1900,0,1),new c.TuiDay((new Date).getFullYear()+3,1,1),[this.today.append({day:-1}),new c.TuiTime(12,20)]],this.min=this.minVariants[0],this.maxVariants=[c.TUI_LAST_DAY,new c.TuiDay(2017,11,11),new c.TuiDay(2020,2,5),new c.TuiDay(2300,0,1),[this.today.append({day:1}),new c.TuiTime(16,20)]],this.max=this.maxVariants[0],this.defaultActiveYearMonthVariants=[c.TuiMonth.currentLocal(),new c.TuiMonth(2020,2),new c.TuiMonth(2017,2)],this.defaultActiveYearMonth=this.defaultActiveYearMonthVariants[0],this.disabledItemHandlerVariants=[c.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.itemsVariants=[[],[new d.TuiNamedDay(c.TUI_LAST_DAY.append({year:-1}),"Until today")]],this.items=this.itemsVariants[0],this.cleaner=!1,this.control=new a.Ku(null,a.AQ.required),this.modeVariants=["HH:MM","HH:MM:SS","HH:MM:SS.MSS"],this.mode=this.modeVariants[0]}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=l.otF(e)))(n||e)}}(),e.ɵcmp=l.In1({type:e,selectors:[["example-tui-input-date-time"]],features:[l.M5G([{provide:p.m,useExisting:(0,l.wd)((()=>e))}]),l.eg9],decls:4,vars:0,consts:[["header","InputDateTime","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-9"],[1,"tui-space_bottom-5"],["fragment","date-localization","routerLink",".","tuiLink",""],["fragment","string-control-output","routerLink",".","tuiLink",""],["id","base","heading","Basic",3,"content"],[1,"tui-space_bottom-4","b-form"],["id","modes","heading","Modes",3,"content"],["id","date-localization","heading","Date localization",3,"content"],["id","string-control-output","heading","With control's output as string",3,"content"],["id","native","heading","Native input datetime",3,"content"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","TuiDay | [TuiDay, TuiTime] | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","TuiDay | [TuiDay, TuiTime] | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","defaultActiveYearMonth","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","timeMode","documentationPropertyType","TuiTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"defaultActiveYearMonth","disabledItemHandler","focusable","formControl","max","min","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","timeMode","tuiDropdownOpen","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiDropdownOpenChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(l.I0R(0,"tui-doc-page",0),l.yuY(1,F,59,5,"ng-template",1),l.yuY(2,K,12,15,"ng-template",1),l.yuY(3,J,21,3,"ng-template",1),l.C$Y())},dependencies:[y.u,f.m,h.I,C.S,T.E,E.u,I.I,O.i,a.ue,a.ug,Y.C,k.a,M.C,R.cb,V.e,g.E,x.r,w.E,D.e,i.ER,P.o,$,v,G,H,S,o.a],encapsulation:2,changeDetection:0}),t})(),X=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=l.a4G({type:e}),e.ɵinj=l.s3X({imports:[u.kx,m.k,a.sl,a.y,o.MD,r.TuiLinkModule,d.TuiInputDateTimeModule,r.TuiHintModule,r.TuiTextfieldControllerModule,r.TuiNotificationModule,i.qQ.forChild((0,u._A)(Q)),r.TuiDropdownModule]}),t})()}}]);