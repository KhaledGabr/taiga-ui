(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[95018],{95018:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiInputCardModule:()=>oe});var n=o(88692),i=o(69900),a=o(91795),u=o(24007),r=o(64500),d=o(75526),c=o(498),l=o(75695),s=o(64537),p=o(82880),m=o(98204),g=o(98537),h=o(22436),C=o(22444),b=o(56021),f=o(36951),x=o(36710),y=o(23178),Z=o(7406),T=o(84848),v=o(64374),V=o(68874),_=o(10200),P=o(83074),A=o(10977),w=o(62840),U=o(60404),E=o(43560),N=o(93525),J=o(38868),q=o(54218),M=o(39607);let I=(()=>{var e;class t{constructor(){this.form=new i.cw({card:new i.NI(""),expire:new i.NI(""),cvc:new i.NI("")})}get card(){const e=this.form.get("card")?.value;if((e?.length??0)<7)return null;switch(e?.charAt(0)){case"0":case"1":case"2":return"https://ng-web-apis.github.io/dist/assets/images/common.svg";case"3":case"4":case"5":return"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg";case"6":case"7":return"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg";default:return"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg"}}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-input-card-example-1"]],decls:11,vars:5,consts:[["tuiGroup","",3,"formGroup"],["formControlName","card",3,"autocompleteEnabled","cardSrc"],["formControlName","expire",3,"autocompleteEnabled"],["formControlName","cvc",3,"autocompleteEnabled"]],template:function(e,t){1&e&&(s.TgZ(0,"p")(1,"code"),s._uU(2,"form"),s.qZA(),s._uU(3," tag is used for better autocomplete\n"),s.qZA(),s.TgZ(4,"form",0)(5,"tui-input-card",1),s._uU(6," Card number "),s.qZA(),s.TgZ(7,"tui-input-expire",2),s._uU(8," Expire date "),s.qZA(),s.TgZ(9,"tui-input-cvc",3),s._uU(10," CVC/CVV "),s.qZA()()),2&e&&(s.xp6(4),s.Q6J("formGroup",t.form),s.xp6(1),s.Q6J("autocompleteEnabled",!0)("cardSrc",t.card),s.xp6(2),s.Q6J("autocompleteEnabled",!0),s.xp6(2),s.Q6J("autocompleteEnabled",!0))},dependencies:[g.z,h.a,C.U,b.h,M.g,i._Y,i.JJ,i.JL,i.sg,i.u],encapsulation:2,changeDetection:0}),t})();var H=o(7114);const O=["documentationPropertyBinChange"];function S(e,t){if(1&e&&(s.TgZ(0,"p")(1,"code"),s._uU(2,"InputCard"),s.qZA(),s._uU(3," can be used with "),s.TgZ(4,"code"),s._uU(5,"InputExpire"),s.qZA(),s._uU(6," and "),s.TgZ(7,"code"),s._uU(8,"InputCVC"),s.qZA(),s._uU(9," to input a card "),s.qZA(),s.TgZ(10,"tui-doc-example",2),s._UZ(11,"tui-input-card-example-1"),s.qZA()),2&e){const e=s.oxw();s.xp6(10),s.Q6J("content",e.example1)("fullsize",!0)}}const Q=function(){return[]};function D(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"form",8)(1,"tui-input-card",9),s.NdJ("binChange",(function(t){s.CHM(e);const o=s.oxw(2);return s.KtG(null==o.binChangeProperty?null:o.binChangeProperty.emitEvent(t))})),s._uU(2," Card number "),s.qZA(),s.TgZ(3,"tui-input-expire",10),s._uU(4," Expire date "),s.qZA(),s.TgZ(5,"tui-input-cvc",11),s._uU(6," CVC/CVV "),s.qZA(),s._UZ(7,"tui-error",12),s.ALo(8,"async"),s.ALo(9,"tuiFieldError"),s.qZA()}if(2&e){const e=s.oxw(2);s.Q6J("formGroup",e.control),s.xp6(1),s.Q6J("autocompleteEnabled",e.autocompleteEnabledCard)("cardSrc",e.cardSrc)("focusable",e.focusable)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size),s.xp6(2),s.Q6J("autocompleteEnabled",e.autocompleteEnabledExpire)("focusable",e.focusable)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size),s.xp6(2),s.Q6J("autocompleteEnabled",e.autocompleteEnabledCVC)("focusable",e.focusable)("length",e.length)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("tuiHintAppearance",e.hintAppearanceCVC)("tuiHintContent",e.hintContentCVC)("tuiHintDirection",e.hintDirectionCVC)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size),s.xp6(2),s.Q6J("error",s.lcZ(8,38,s.lcZ(9,40,s.DdM(42,Q))))}}function G(e,t){1&e&&(s._uU(0," Disabled state (use "),s.TgZ(1,"code"),s._uU(2,"formControl.disable()"),s.qZA(),s._uU(3," ) "))}function Y(e,t){1&e&&s._uU(0," Browser autocomplete of card ")}function z(e,t){1&e&&s._uU(0," SVG card icon ")}function F(e,t){1&e&&s._uU(0," BIN value (card first 6 symbols) ")}function L(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-doc-documentation"),s.YNc(1,G,4,0,"ng-template",13),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const o=s.oxw(2);return s.KtG(o.disabledCard=t)})),s.YNc(2,Y,1,0,"ng-template",14),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const o=s.oxw(2);return s.KtG(o.autocompleteEnabledCard=t)})),s.YNc(3,z,1,0,"ng-template",15),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const o=s.oxw(2);return s.KtG(o.cardSrcSelected=t)})),s.YNc(4,F,1,0,"ng-template",16,17,s.W1O),s.qZA(),s._UZ(6,"inherited-documentation")}if(2&e){const e=s.oxw(2);s.xp6(1),s.Q6J("documentationPropertyValue",e.disabledCard),s.xp6(1),s.Q6J("documentationPropertyValue",e.autocompleteEnabledCard),s.xp6(1),s.Q6J("documentationPropertyValues",e.cardSrcVariants)("documentationPropertyValue",e.cardSrcSelected)}}function B(e,t){1&e&&(s._uU(0," Disabled state (use "),s.TgZ(1,"code"),s._uU(2,"formControl.disable()"),s.qZA(),s._uU(3," ) "))}function k(e,t){1&e&&s._uU(0," Browser autocomplete of card ")}function K(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-doc-documentation"),s.YNc(1,B,4,0,"ng-template",13),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const o=s.oxw(2);return s.KtG(o.disabledExpire=t)})),s.YNc(2,k,1,0,"ng-template",14),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const o=s.oxw(2);return s.KtG(o.autocompleteEnabledExpire=t)})),s.qZA(),s._UZ(3,"inherited-documentation")}if(2&e){const e=s.oxw(2);s.xp6(1),s.Q6J("documentationPropertyValue",e.disabledExpire),s.xp6(1),s.Q6J("documentationPropertyValue",e.autocompleteEnabledExpire)}}function j(e,t){1&e&&(s._uU(0," Disabled state (use "),s.TgZ(1,"code"),s._uU(2,"formControl.disable()"),s.qZA(),s._uU(3," ) "))}function X(e,t){1&e&&s._uU(0," Browser autocomplete of card ")}function R(e,t){1&e&&s._uU(0," Code length ")}function W(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-doc-documentation"),s.YNc(1,j,4,0,"ng-template",13),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const o=s.oxw(2);return s.KtG(o.disabledCVC=t)})),s.YNc(2,X,1,0,"ng-template",14),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const o=s.oxw(2);return s.KtG(o.autocompleteEnabledCVC=t)})),s.YNc(3,R,1,0,"ng-template",18),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const o=s.oxw(2);return s.KtG(o.length=t)})),s.qZA(),s._UZ(4,"inherited-documentation")}if(2&e){const e=s.oxw(2);s.xp6(1),s.Q6J("documentationPropertyValue",e.disabledCVC),s.xp6(1),s.Q6J("documentationPropertyValue",e.autocompleteEnabledCVC),s.xp6(1),s.Q6J("documentationPropertyValues",e.lengthVariants)("documentationPropertyValue",e.length)}}function $(e,t){if(1&e&&(s.TgZ(0,"tui-doc-demo",3),s.YNc(1,D,10,43,"ng-template"),s.qZA(),s.TgZ(2,"div",4)(3,"p"),s._uU(4," Add "),s.TgZ(5,"code"),s._uU(6,"tuiCreateLuhnValidator(customMessage?)"),s.qZA(),s._uU(7," to control validators to validate it with Luhn algorithm "),s.qZA()(),s.TgZ(8,"tui-accordion",5)(9,"tui-accordion-item",6),s._uU(10," TuiInputCardComponent "),s.YNc(11,L,7,4,"ng-template",7),s.qZA(),s.TgZ(12,"tui-accordion-item",6),s._uU(13," TuiInputExpireComponent "),s.YNc(14,K,4,2,"ng-template",7),s.qZA(),s.TgZ(15,"tui-accordion-item",6),s._uU(16," TuiInputCVCComponent "),s.YNc(17,W,5,4,"ng-template",7),s.qZA()()),2&e){const e=s.oxw();s.Q6J("control",e.control),s.xp6(8),s.Q6J("closeOthers",!1),s.xp6(1),s.Q6J("open",!0),s.xp6(3),s.Q6J("open",!1),s.xp6(3),s.Q6J("open",!1)}}function ee(e,t){if(1&e&&(s.TgZ(0,"ol",19)(1,"li"),s._uU(2," Import "),s.TgZ(3,"code"),s._uU(4,"TuiInputCardModule"),s.qZA(),s._uU(5," , "),s.TgZ(6,"code"),s._uU(7,"TuiInputCVCModule"),s.qZA(),s._uU(8," , "),s.TgZ(9,"code"),s._uU(10,"TuiInputExpireModule"),s.qZA(),s._uU(11," modules into the module where you want to use them: "),s._UZ(12,"tui-doc-code",20),s.qZA(),s.TgZ(13,"li")(14,"p"),s._uU(15,"Add to the template:"),s.qZA(),s._UZ(16,"tui-doc-code",21),s.qZA()()),2&e){const e=s.oxw();s.xp6(12),s.Q6J("code",e.exampleModule),s.xp6(4),s.Q6J("code",e.exampleHtml)}}let te=(()=>{var e;class t extends p.b{constructor(){super(...arguments),this.exampleModule=o.e(7724).then(o.t.bind(o,7724,17)),this.exampleHtml=o.e(51642).then(o.t.bind(o,51642,17)),this.example1={TypeScript:o.e(2180).then(o.t.bind(o,2180,17)),HTML:o.e(80379).then(o.t.bind(o,80379,17))},this.card="",this.lengthVariants=[3,4],this.length=this.lengthVariants[0],this.cleaner=!1,this.exampleText="0000 0000 0000 0000",this.hintContentCVC=null,this.hintDirectionCVC="bottom-left",this.hintAppearanceCVC="",this.cards={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",intersection:"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.cardSrcVariants=Object.keys(this.cards),this.cardSrcSelected=null,this.autocompleteEnabledCard=!1,this.autocompleteEnabledCVC=!1,this.autocompleteEnabledExpire=!1,this.control=new i.cw({card:new i.NI("",[i.kI.required,(0,u.tuiCreateLuhnValidator)("Invalid card number")]),expire:new i.NI("",i.kI.required),cvc:new i.NI("",i.kI.required)})}get cardSrc(){return null===this.cardSrcSelected?null:this.cards[this.cardSrcSelected]}get disabledCard(){return this.isDisabled("card")}set disabledCard(e){this.toggleDisabled(e,"card")}get disabledExpire(){return this.isDisabled("expire")}set disabledExpire(e){this.toggleDisabled(e,"expire")}get disabledCVC(){return this.isDisabled("cvc")}set disabledCVC(e){this.toggleDisabled(e,"cvc")}isDisabled(e){return this.control.get(e).disabled}toggleDisabled(e,t){e?this.control.get(t).disable():this.control.get(t).enable()}}return(e=t).ɵfac=function(){let t;return function(o){return(t||(t=s.n5z(e)))(o||e)}}(),e.ɵcmp=s.Xpm({type:e,selectors:[["example-input-card"]],viewQuery:function(e,t){if(1&e&&s.Gf(O,5,r.B7),2&e){let e;s.iGM(e=s.CRH())&&(t.binChangeProperty=e.first)}},features:[s._Bn([{provide:m.x,useExisting:(0,s.Gpc)((()=>e))}]),s.qOj],decls:4,vars:0,consts:[["header","InputCard","package","ADDON-COMMERCE","type","components"],["pageTab",""],["id","group","heading","tui-group",3,"content","fullsize"],[3,"control"],[1,"b-full-width","tui-space_bottom-6"],[1,"b-full-width",3,"closeOthers"],[3,"open"],["tuiAccordionItemContent",""],[1,"form",3,"formGroup"],["formControlName","card",1,"control",3,"autocompleteEnabled","cardSrc","focusable","pseudoActive","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize","binChange"],["formControlName","expire",1,"control",3,"autocompleteEnabled","focusable","pseudoActive","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","tuiTextfieldLabelOutside","tuiTextfieldSize"],["formControlName","cvc",1,"control",3,"autocompleteEnabled","focusable","length","pseudoActive","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldLabelOutside","tuiTextfieldSize"],["formControlName","card",1,"error",3,"error"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","autocompleteEnabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","cardSrc","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","binChange","documentationPropertyType","string | null"],["documentationPropertyBinChange",""],["documentationPropertyMode","input","documentationPropertyName","length","documentationPropertyType","3 | 4",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,S,12,2,"ng-template",1),s.YNc(2,$,18,5,"ng-template",1),s.YNc(3,ee,17,2,"ng-template",1),s.qZA())},dependencies:[g.z,h.a,C.U,b.h,f.v,x.o,y.K,Z.d,T.bZ,v.b,V.x,_.s,i._Y,i.JJ,i.JL,i.sg,i.u,P.c,A.F,w.z,U.B,E.q,N.n,J.f,q.w,I,H.A,n.Ov],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.control[_ngcontent-%COMP%]{flex:1;margin-bottom:.25rem}.control[_ngcontent-%COMP%]:not(:last-child){margin-right:1.25rem}.error[_ngcontent-%COMP%]{min-width:100%}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}"],changeDetection:0}),t})(),oe=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[u.TuiInputCardModule,u.TuiInputCVCModule,u.TuiInputExpireModule,d.TuiLinkModule,d.TuiErrorModule,c.TuiFieldErrorPipeModule,c.TuiAccordionModule,n.ez,d.TuiHintModule,d.TuiTextfieldControllerModule,i.UX,r.fV,l.f,a.Bz.forChild((0,r.Ve)(te))]}),t})()}}]);