(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[85254],{85254:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiInputTagModule:()=>Me});var o=n(12057),i=n(24751),a=n(33982),r=n(29851),u=n(3497),l=n(55908),d=n(75695),c=n(74788),p=n(68807),s=n(82880),m=n(98204),g=n(88331),h=n(37159),x=n(57068),f=n(72146),T=n(68874);let y=(()=>{class e{constructor(){this.control=new i.NI([])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-tag-example-1"]],decls:4,vars:2,consts:[[1,"b-form",3,"tuiTextfieldLabelOutside","formControl"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-input-tag",0),c._uU(1," I'm a "),c.TgZ(2,"i"),c._uU(3,"placeholder"),c.qZA(),c.qZA()),2&e&&c.Q6J("tuiTextfieldLabelOutside",!0)("formControl",t.control)},directives:[f.P,T.x,i.JJ,i.oH],encapsulation:2,changeDetection:0}),e})();var P=n(79765),Z=n(25917),b=n(43190),C=n(39761),V=n(71289),w=n(52219),A=n(50020);function J(e,t){if(1&e&&(c._UZ(0,"tui-data-list-wrapper",2),c.ALo(1,"async")),2&e){const e=c.oxw();c.Q6J("items",c.lcZ(1,1,e.items$))}}const M=["John Cleese","Eric Idle","Michael Palin","Terry Gilliam","Terry Jones","Graham Chapman"];let v=(()=>{class e{constructor(){this.search$=new P.xQ,this.value=[],this.items$=this.search$.pipe((0,b.w)((e=>this.serverRequest(e).pipe((0,C.O)(null)))),(0,C.O)(M))}onSearchChange(e){this.search$.next(e)}serverRequest(e){const t=M.filter((t=>t.toLowerCase().includes(e.toLowerCase())));return(0,Z.of)(t).pipe((0,V.g)(1e3*Math.random()+500))}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-tag-example-2"]],decls:3,vars:2,consts:[[1,"b-form",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange","searchChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-input-tag",0),c.NdJ("ngModelChange",(function(e){return t.value=e}))("searchChange",(function(e){return t.onSearchChange(e)})),c._uU(1," Choose your Pythons' "),c.YNc(2,J,2,3,"tui-data-list-wrapper",1),c.qZA()),2&e&&c.Q6J("tuiTextfieldLabelOutside",!0)("ngModel",t.value)},directives:[f.P,T.x,i.JJ,i.On,w.g,A.e],pipes:[o.Ov],encapsulation:2,changeDetection:0}),e})();var _=n(10200),H=n(64374);let U=(()=>{class e{constructor(){this.testForm=new i.cw({testValue:new i.NI(["I","love","Angular"])})}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-tag-example-3"]],decls:13,vars:6,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["formControlName","testValue","tuiTextfieldSize","m",1,"tui-space_top-2",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["formControlName","testValue",1,"tui-space_top-2",3,"tuiTextfieldCleaner"]],template:function(e,t){1&e&&(c.TgZ(0,"form",0),c.TgZ(1,"tui-input-tag",1),c._uU(2," I'm a "),c.TgZ(3,"i"),c._uU(4,"placeholder"),c.qZA(),c.qZA(),c.TgZ(5,"tui-input-tag",2),c._uU(6," I'm a "),c.TgZ(7,"i"),c._uU(8,"placeholder"),c.qZA(),c.qZA(),c.TgZ(9,"tui-input-tag",3),c._uU(10," I'm a "),c.TgZ(11,"i"),c._uU(12,"placeholder"),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.Q6J("formGroup",t.testForm),c.xp6(1),c.Q6J("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),c.xp6(4),c.Q6J("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),c.xp6(4),c.Q6J("tuiTextfieldCleaner",!0))},directives:[i._Y,i.JL,i.sg,f.P,i.JJ,i.u,_.s,T.x,H.b],encapsulation:2,changeDetection:0}),e})();var N=n(64762),q=n(36951),L=n(20933),I=n(35065),Q=n(7114);function S(e,t){if(1&e&&(c.TgZ(0,"button",5),c._uU(1),c.qZA()),2&e){const e=t.$implicit;c.Q6J("value",e),c.xp6(1),c.hij(" ",e," ")}}function O(e,t){if(1&e&&(c.TgZ(0,"tui-data-list"),c.YNc(1,S,2,2,"button",4),c.qZA()),2&e){const e=c.oxw(2);c.xp6(1),c.Q6J("ngForOf",e.filtered)}}function D(e,t){1&e&&(c.ynx(0),c.YNc(1,O,2,1,"tui-data-list",3),c.BQk())}const Y=function(){return[]},E=["The Midnight","FM-84","Timecop1983","GUNSHIP"];function F(e){return!/\d/.test(e)}class z{constructor(){var e;this.search="",this.tagValidator=F,this.control=new i.NI([],(e=F,({value:t})=>(t?t.filter(e):p.EMPTY_ARRAY).length>0?{tags:new p.TuiValidationError("Some tags are invalid")}:null))}get filtered(){var e;return this.filterBy(this.search,null!==(e=this.control.value)&&void 0!==e?e:[])}filterBy(e,t){return E.filter((n=>(0,p.TUI_DEFAULT_MATCHER)(n,e)&&!t.includes(n)))}}z.ɵfac=function(e){return new(e||z)},z.ɵcmp=c.Xpm({type:z,selectors:[["tui-input-tag-example-4"]],decls:8,vars:12,consts:[[1,"b-form",3,"formControl","tuiTextfieldLabelOutside","tagValidator","search","searchChange"],[4,"ngIf"],[3,"formControl","error"],[4,"tuiDataList"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(e,t){1&e&&(c.TgZ(0,"p"),c._uU(1,"In this sample, tags with digits are invalid"),c.qZA(),c.TgZ(2,"tui-input-tag",0),c.NdJ("searchChange",(function(e){return t.search=e})),c._uU(3," Try it "),c.YNc(4,D,2,0,"ng-container",1),c.qZA(),c._UZ(5,"tui-error",2),c.ALo(6,"async"),c.ALo(7,"tuiFieldError")),2&e&&(c.xp6(2),c.Q6J("formControl",t.control)("tuiTextfieldLabelOutside",!0)("tagValidator",t.tagValidator)("search",t.search),c.xp6(2),c.Q6J("ngIf",t.filtered.length),c.xp6(1),c.Q6J("formControl",t.control)("error",c.lcZ(6,7,c.lcZ(7,9,c.DdM(11,Y)))))},directives:[f.P,i.JJ,i.oH,T.x,o.O5,q.v,w.g,L.q,o.sg,I.v],pipes:[o.Ov,Q.A],encapsulation:2,changeDetection:0}),(0,N.gn)([p.tuiPure],z.prototype,"filterBy",null);var R=n(3729),k=n(84848);let B=(()=>{class e{constructor(){this.value=["گراهام چپمن","جان کلیز"]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-tag-example-5"]],decls:1,vars:3,consts:[["tuiTextfieldIconLeft","tuiIconSearchLarge","tuiHintContent","مونتی پایتون",1,"input",3,"tuiTextfieldCleaner","tuiTextfieldLabelOutside","ngModel","ngModelChange"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-input-tag",0),c.NdJ("ngModelChange",(function(e){return t.value=e})),c.qZA()),2&e&&c.Q6J("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0)("ngModel",t.value)},directives:[f.P,R.aR,k.bZ,H.b,T.x,i.JJ,i.On],styles:[".input[_ngcontent-%COMP%]{max-width:20rem;direction:rtl;text-align:right}"],changeDetection:0}),e})();var X=n(39607),W=n(77027),G=n(41360);let $=(()=>{class e{constructor(){this.value=["not","unique","tags, with","custom","separator","separator"],this.customSeparator=";"}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-tag-example-6"]],decls:4,vars:7,consts:[["tuiGroup","","orientation","vertical","tuiTextfieldIconLeft","tuiIconSearchLarge","tuiHintContent","Just here to test icons alignment",1,"input",3,"collapsed","tuiTextfieldCleaner"],[3,"ngModel","ngModelChange"],[3,"uniqueTags","separator","tuiTextfieldLabelOutside","ngModel","ngModelChange"]],template:function(e,t){1&e&&(c.TgZ(0,"div",0),c.TgZ(1,"tui-input",1),c.NdJ("ngModelChange",(function(e){return t.customSeparator=e})),c._uU(2,"Custom separator"),c.qZA(),c.TgZ(3,"tui-input-tag",2),c.NdJ("ngModelChange",(function(e){return t.value=e})),c.qZA(),c.qZA()),2&e&&(c.Q6J("collapsed",!0)("tuiTextfieldCleaner",!0),c.xp6(1),c.Q6J("ngModel",t.customSeparator),c.xp6(2),c.Q6J("uniqueTags",!1)("separator",t.customSeparator)("tuiTextfieldLabelOutside",!0)("ngModel",t.value))},directives:[X.g,R.aR,k.bZ,H.b,W.K,G.w,i.JJ,i.On,f.P,T.x],styles:[".input[_ngcontent-%COMP%]{max-width:20rem}"],changeDetection:0}),e})(),j=(()=>{class e{constructor(){this.value=["Use","space","button"],this.customSeparator=/[\s,]/}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-tag-example-7"]],decls:1,vars:3,consts:[[1,"b-form",3,"separator","tuiTextfieldLabelOutside","ngModel","ngModelChange"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-input-tag",0),c.NdJ("ngModelChange",(function(e){return t.value=e})),c.qZA()),2&e&&c.Q6J("separator",t.customSeparator)("tuiTextfieldLabelOutside",!0)("ngModel",t.value)},directives:[f.P,T.x,i.JJ,i.On],encapsulation:2,changeDetection:0}),e})(),K=(()=>{class e{constructor(){this.control=new i.NI(["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen"])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-input-tag-example-8"]],decls:8,vars:5,consts:[[1,"input",3,"tuiTextfieldLabelOutside","formControl","rows"],[1,"input","tui-space_top-5",3,"formControl","rows"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-input-tag",0),c._uU(1," I'm a "),c.TgZ(2,"i"),c._uU(3,"placeholder"),c.qZA(),c.qZA(),c.TgZ(4,"tui-input-tag",1),c._uU(5," I'm a "),c.TgZ(6,"i"),c._uU(7,"placeholder"),c.qZA(),c.qZA()),2&e&&(c.Q6J("tuiTextfieldLabelOutside",!0)("formControl",t.control)("rows",3),c.xp6(4),c.Q6J("formControl",t.control)("rows",3))},directives:[f.P,T.x,i.JJ,i.oH],styles:[".input[_ngcontent-%COMP%]{max-width:20rem}"],changeDetection:0}),e})();var ee=n(31823),te=n(54476),ne=n(17023),oe=n(54218),ie=n(33250),ae=n(88494),re=n(66596),ue=n(76349);function le(e,t){1&e&&(c._uU(0," Use power of RegExp to forbid spaces inside tags via property "),c.TgZ(1,"code"),c._uU(2,"[separator]"),c.qZA(),c._uU(3," . "))}function de(e,t){if(1&e&&(c.TgZ(0,"div",2),c.TgZ(1,"code"),c._uU(2,"InputTag"),c.qZA(),c._uU(3," allows to input several tags with autocomplete and list in dropdown. "),c.qZA(),c.TgZ(4,"tui-doc-example",3),c._UZ(5,"tui-input-tag-example-1"),c.qZA(),c.TgZ(6,"tui-doc-example",4),c._UZ(7,"tui-input-tag-example-2"),c.qZA(),c.TgZ(8,"tui-doc-example",5),c._UZ(9,"tui-input-tag-example-3"),c.qZA(),c.TgZ(10,"tui-doc-example",6),c._UZ(11,"tui-input-tag-example-4"),c.qZA(),c.TgZ(12,"tui-doc-example",7),c._UZ(13,"tui-input-tag-example-5"),c.qZA(),c.TgZ(14,"tui-doc-example",8),c._UZ(15,"tui-input-tag-example-6"),c.qZA(),c.TgZ(16,"tui-doc-example",9),c.YNc(17,le,4,0,"ng-template",null,10,c.W1O),c._UZ(19,"tui-input-tag-example-7"),c.qZA(),c.TgZ(20,"tui-doc-example",11),c.TgZ(21,"div",2),c._uU(22," You can limit the number of visible rows in expandable mode with "),c.TgZ(23,"code"),c._uU(24,"rows"),c.qZA(),c._uU(25," input "),c.qZA(),c._UZ(26,"tui-input-tag-example-8"),c.qZA()),2&e){const e=c.MAs(18),t=c.oxw();c.xp6(4),c.Q6J("content",t.example1),c.xp6(2),c.Q6J("content",t.example2),c.xp6(2),c.Q6J("content",t.example3),c.xp6(2),c.Q6J("content",t.example4),c.xp6(2),c.Q6J("content",t.example5),c.xp6(2),c.Q6J("content",t.example6),c.xp6(2),c.Q6J("content",t.example7)("description",e),c.xp6(4),c.Q6J("content",t.example8)}}function ce(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-input-tag",29),c.NdJ("searchChange",(function(t){return c.CHM(e),c.oxw(2).search=t})),c._uU(1," Please enter Pythons' names "),c.qZA()}if(2&e){const e=c.oxw(2);c.Udp("text-align",e.textAlign),c.Q6J("formControl",e.control)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiDropdownOffset",e.dropdownOffset)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintAppearance",e.hintAppearance)("tuiTextfieldIcon",e.icon)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("placeholder",e.exampleText)("maxLength",e.maxLength)("rows",e.rows)("focusable",e.focusable)("disabledItemHandler",e.disabledItemHandler)("editable",e.editable)("expandable",e.expandable)("uniqueTags",e.uniqueTags)("separator",e.separator)("readOnly",e.readOnly)("tagValidator",e.tagValidator)("inputHidden",e.inputHidden)("pseudoHover",e.pseudoHovered)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoInvalid",e.pseudoInvalid)("search",e.search)}}function pe(e,t){1&e&&(c._uU(0," Disabled state (use "),c.TgZ(1,"code"),c._uU(2,"formControl.disable()"),c.qZA(),c._uU(3," ) "))}function se(e,t){1&e&&(c._uU(0," Textfield value to subscribe on input or setting it from the outside (emits "),c.TgZ(1,"code"),c._uU(2,"null"),c.qZA(),c._uU(3," when item from list selected) "))}function me(e,t){1&e&&c._uU(0," Max length of tag ")}function ge(e,t){1&e&&c._uU(0," Handler for deactivation some tags ")}function he(e,t){1&e&&c._uU(0," Placeholder ")}function xe(e,t){1&e&&c._uU(0," Ability to enter unique or non-unique tags ")}function fe(e,t){1&e&&c._uU(0," Tags are editable ")}function Te(e,t){1&e&&c._uU(0," Control height can be expanded to show all tags ")}function ye(e,t){1&e&&c._uU(0," String or RegExp to separate tags ")}function Pe(e,t){1&e&&(c._uU(0," A number of visible rows in "),c.TgZ(1,"code"),c._uU(2,"expandable"),c.qZA(),c._uU(3," mode "))}function Ze(e,t){1&e&&c._uU(0," Hide input field. For example, to prevent adding new tags ")}function be(e,t){1&e&&c._uU(0," A function that cheks that tag is valid ")}function Ce(e,t){1&e&&(c._uU(0," Icon content. If content is a string, it is used as stringified svg or a name of icon registered in "),c.TgZ(1,"a",30),c.TgZ(2,"code"),c._uU(3,"SvgService"),c.qZA(),c.qZA())}function Ve(e,t){1&e&&c._uU(0," Custom align content by text-align ")}function we(e,t){if(1&e){const e=c.EpF();c.TgZ(0,"tui-doc-demo",12),c.YNc(1,ce,2,34,"ng-template"),c.qZA(),c.TgZ(2,"tui-doc-documentation"),c.YNc(3,pe,4,0,"ng-template",13),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().disabled=t})),c.YNc(4,se,4,0,"ng-template",14),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().search=t})),c.YNc(5,me,1,0,"ng-template",15),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().maxLength=t})),c.YNc(6,ge,1,0,"ng-template",16),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().disabledItemHandler=t})),c.YNc(7,he,1,0,"ng-template",17),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().exampleText=t})),c.YNc(8,xe,1,0,"ng-template",18),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().uniqueTags=t})),c.YNc(9,fe,1,0,"ng-template",19),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().editable=t})),c.YNc(10,Te,1,0,"ng-template",20),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().expandable=t})),c.YNc(11,ye,1,0,"ng-template",21),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().separator=t})),c.YNc(12,Pe,4,0,"ng-template",22),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().rows=t})),c.YNc(13,Ze,1,0,"ng-template",23),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().inputHidden=t})),c.YNc(14,be,1,0,"ng-template",24),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().tagValidator=t})),c.YNc(15,Ce,4,0,"ng-template",25),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().icon=t})),c.qZA(),c._UZ(16,"inherited-documentation",26),c.TgZ(17,"tui-doc-documentation",27),c.YNc(18,Ve,1,0,"ng-template",28),c.NdJ("documentationPropertyValueChange",(function(t){return c.CHM(e),c.oxw().textAlign=t})),c.qZA()}if(2&e){const e=c.oxw();c.Q6J("control",e.control),c.xp6(3),c.Q6J("documentationPropertyValue",e.disabled),c.xp6(1),c.Q6J("documentationPropertyValue",e.search),c.xp6(1),c.Q6J("documentationPropertyValue",e.maxLength),c.xp6(1),c.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),c.xp6(1),c.Q6J("documentationPropertyValue",e.exampleText),c.xp6(1),c.Q6J("documentationPropertyValue",e.uniqueTags),c.xp6(1),c.Q6J("documentationPropertyValue",e.editable),c.xp6(1),c.Q6J("documentationPropertyValue",e.expandable),c.xp6(1),c.Q6J("documentationPropertyValues",e.separatorVariants)("documentationPropertyValue",e.separator),c.xp6(1),c.Q6J("documentationPropertyValue",e.rows),c.xp6(1),c.Q6J("documentationPropertyValue",e.inputHidden),c.xp6(1),c.Q6J("documentationPropertyValues",e.tagValidatorVariants)("documentationPropertyValue",e.tagValidator),c.xp6(1),c.Q6J("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.icon),c.xp6(1),c.Q6J("dropdown",!0),c.xp6(2),c.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function Ae(e,t){if(1&e&&(c.TgZ(0,"ol",31),c.TgZ(1,"li"),c.TgZ(2,"p"),c._uU(3," Import "),c.TgZ(4,"code"),c._uU(5,"TuiInputTagModule"),c.qZA(),c._uU(6," into a module where you want to use our component "),c.qZA(),c._UZ(7,"tui-doc-code",32),c.qZA(),c.TgZ(8,"li"),c.TgZ(9,"p"),c._uU(10,"Add to the template:"),c.qZA(),c._UZ(11,"tui-doc-code",33),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.xp6(7),c.Q6J("code",e.exampleModule),c.xp6(4),c.Q6J("code",e.exampleHtml)}}let Je=(()=>{class e extends s.b{constructor(){super(...arguments),this.exampleModule=n.e(9600).then(n.t.bind(n,9600,17)),this.exampleHtml=n.e(22524).then(n.t.bind(n,22524,17)),this.example1={TypeScript:n.e(58335).then(n.t.bind(n,58335,17)),HTML:n.e(32119).then(n.t.bind(n,32119,17))},this.example2={TypeScript:n.e(48276).then(n.t.bind(n,48276,17)),HTML:n.e(7633).then(n.t.bind(n,7633,17))},this.example3={TypeScript:n.e(18290).then(n.t.bind(n,18290,17)),HTML:n.e(88939).then(n.t.bind(n,88939,17))},this.example4={TypeScript:n.e(37105).then(n.t.bind(n,37105,17)),HTML:n.e(1702).then(n.t.bind(n,1702,17))},this.example5={TypeScript:n.e(69211).then(n.t.bind(n,69211,17)),HTML:n.e(20139).then(n.t.bind(n,20139,17)),LESS:n.e(44686).then(n.t.bind(n,44686,17))},this.example6={TypeScript:n.e(83429).then(n.t.bind(n,83429,17)),HTML:n.e(32927).then(n.t.bind(n,53072,17)),LESS:n.e(13449).then(n.t.bind(n,13449,17))},this.example7={TypeScript:n.e(80627).then(n.t.bind(n,80627,17)),HTML:n.e(72114).then(n.t.bind(n,72114,17))},this.example8={TypeScript:n.e(63330).then(n.t.bind(n,63330,17)),HTML:n.e(48805).then(n.t.bind(n,48805,17)),LESS:n.e(22314).then(n.t.bind(n,22314,17))},this.control=new i.NI(["John Cleese","Eric Idle","Michael Palin"],i.kI.required),this.editable=!0,this.expandable=!0,this.uniqueTags=!0,this.separatorVariants=[",",";",/[\d]/,/[\s,]/],this.separator=this.separatorVariants[0],this.iconVariants=["tuiIconSearchLarge"],this.icon="",this.iconAlignVariants=["left","right"],this.iconAlign=this.iconAlignVariants[1],this.maxLengthVariants=[10,20],this.maxLength=null,this.search="",this.rows=100,this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[this.sizeVariants.length-1],this.tagValidatorVariants=[p.ALWAYS_TRUE_HANDLER,e=>"test"===e,e=>"mail"!==e],this.tagValidator=this.tagValidatorVariants[0],this.inputHidden=!1,this.disabledItemHandlerVariants=[p.ALWAYS_FALSE_HANDLER,e=>String(e).startsWith("T")],this.disabledItemHandler=this.disabledItemHandlerVariants[0]}}return e.ɵfac=function(){let t;return function(n){return(t||(t=c.n5z(e)))(n||e)}}(),e.ɵcmp=c.Xpm({type:e,selectors:[["example-input-tag"]],features:[c._Bn([{provide:m.x,useExisting:(0,c.Gpc)((()=>e))},(0,r.PR)(["tuiTextfieldPrefix","tuiTextfieldPostfix","tuiTextfieldFiller"])]),c.qOj],decls:4,vars:0,consts:[["header","InputTag","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-3"],["id","base","heading","Basic",3,"content"],["id","async","heading","Async items loading",3,"content"],["id","sizes","heading","sizes",3,"content"],["id","validation","heading","Custom validation",3,"content"],["id","rtl","heading","Direction: RTL",3,"content"],["id","separator","heading","Custom separator",3,"content"],["id","no-spaces-inside-tags","heading","No spaces inside tags",3,"content","description"],["forbidSpacesDescription",""],["id","expandable","heading","expandable",3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","search","documentationPropertyMode","input-output","documentationPropertyType","string | null",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","maxLength","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<string>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","placeholder","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","uniqueTags","documentationPropertyType","boolean","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","editable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","expandable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","separator","documentationPropertyMode","input","documentationPropertyType","string | RegExp",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","rows","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","inputHidden","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tagValidator","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<string>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiTextfieldIcon","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","style.text-align",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiDropdownOffset","tuiHintContent","tuiHintDirection","tuiHintAppearance","tuiTextfieldIcon","tuiTextfieldIconLeft","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize","placeholder","maxLength","rows","focusable","disabledItemHandler","editable","expandable","uniqueTags","separator","readOnly","tagValidator","inputHidden","pseudoHover","pseudoActive","pseudoFocus","pseudoInvalid","search","searchChange"],["tuiLink","","routerLink","/services/svg-service"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,de,27,9,"ng-template",1),c.YNc(2,we,19,21,"ng-template",1),c.YNc(3,Ae,12,2,"ng-template",1),c.qZA())},directives:[g.q,h.n,x.f,y,v,U,z,B,$,j,K,ee.F,te.z,ne.B,oe.w,f.P,i.JJ,i.oH,ie.Ek,k.bZ,ae.AW,R.aR,H.b,T.x,_.s,re.V,a.yS,ue.c],encapsulation:2,changeDetection:0}),e})(),Me=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=c.oAB({type:e}),e.ɵinj=c.cJS({imports:[[o.ez,i.u5,i.UX,d.f,u.TuiDataListModule,l.TuiDataListWrapperModule,u.TuiLinkModule,l.TuiInputModule,u.TuiGroupModule,l.TuiInputTagModule,u.TuiErrorModule,l.TuiFieldErrorPipeModule,u.TuiDropdownModule,u.TuiTextfieldControllerModule,u.TuiHintModule,r.fV,a.Bz.forChild((0,r.Ve)(Je))]]}),e})()}}]);