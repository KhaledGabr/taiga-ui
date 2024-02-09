(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[29312],{56768:(A,_,E)=>{E.d(_,{w:()=>N});var U=E(6528);let N=(()=>{var A;class _{constructor(){this.code=""}}return(A=_).ɵfac=function(_){return new(_||A)},A.ɵdir=U.Sc5({type:A,selectors:[["code","tuiText",""]],hostVars:1,hostBindings:function(A,_){2&A&&U.SoX("textContent",_.code)},inputs:{code:["tuiText","code"]}}),_})()},77216:(A,_,E)=>{E.d(_,{M:()=>T});var U=E(6528),N=E(82312),I=E(62224),G=E(55412);let T=(()=>{var A;class _{}return(A=_).ɵfac=function(_){return new(_||A)},A.ɵcmp=U.In1({type:A,selectors:[["tui-styles-info"]],decls:10,vars:0,consts:[[1,"tui-space_bottom-3"],["fragment","styles","routerLink","/getting-started","tuiLink",""]],template:function(A,_){1&A&&(U.I0R(0,"tui-notification",0),U.OEk(1," To use this you need to add optional "),U.I0R(2,"code"),U.OEk(3,"@taiga-ui/styles"),U.C$Y(),U.OEk(4," package and include "),U.I0R(5,"code"),U.OEk(6,"@taiga-ui/styles/taiga-ui-global"),U.C$Y(),U.OEk(7," in your global styles. "),U.I0R(8,"a",1),U.OEk(9," Read more. "),U.C$Y()())},dependencies:[N.ER,I.e,G.C],encapsulation:2,changeDetection:0}),_})()},42856:(A,_,E)=>{E.d(_,{P:()=>G});var U=E(82312),N=E(10488),I=E(6528);let G=(()=>{var A;class _{}return(A=_).ɵfac=function(_){return new(_||A)},A.ɵmod=I.a4G({type:A}),A.ɵinj=I.s3X({imports:[U.qQ,N.TuiNotificationModule,N.TuiLinkModule]}),_})()},64696:(A,_,E)=>{E.r(_),E.d(_,{SCREENSHOT_BOT_LINK:()=>L,SCREENSHOT_BOT_NAME:()=>a,default:()=>t});var U=E(752),N=E(10488),I=E(6528),G=E(34496),T=E(55412);const a="Lumberjack",L="https://github.com/apps/lumberjack-bot";let t=(()=>{var A;class _{constructor(){this.botName=a,this.botAppLink=L,this.botRepoLink="https://github.com/taiga-family/argus"}}return(A=_).ɵfac=function(_){return new(_||A)},A.ɵcmp=I.In1({type:A,selectors:[["screenshot-github-bot"]],standalone:!0,features:[I.UHJ],decls:31,vars:6,consts:[[3,"header"],["target","_blank","tuiLink","",3,"href"],[1,"tui-list"],[1,"tui-list__item"],[1,"setup"],[1,"steps"]],template:function(A,_){1&A&&(I.I0R(0,"tui-doc-page",0)(1,"strong"),I.OEk(2," Try our "),I.I0R(3,"a",1),I.OEk(4),I.C$Y(),I.OEk(5," for your screenshots testing in CI. "),I.C$Y(),I.I0R(6,"p"),I.OEk(7," Using official Cypress dashboard is rather expensive (especially if you run thousands of tests every day). Which is why we developed Github App. This bot: "),I.C$Y(),I.I0R(8,"ul",2)(9,"li",3),I.OEk(10," Downloads artifacts from workflow with tests, finds screenshots diffs images, and pins them to the tests failure report as Pull Request comment. "),I.C$Y(),I.I0R(11,"li",3),I.OEk(12," Always holds first PR comment. Any workflow updates (for example, new commit pushed to the branch) edit already existing bot comment. No endless stream of comments from bot! "),I.C$Y(),I.I0R(13,"li",3),I.OEk(14," Doesn't require any data-storage for your screenshots with diffs. Bot creates separate branch to upload images for its tests failure report. After closing PR bot removes all saved screenshots. Also, you can delete this branch at any time to clean github history. "),I.C$Y()(),I.I0R(15,"div",4)(16,"p"),I.OEk(17," To begin using "),I.I0R(18,"strong"),I.OEk(19),I.C$Y(),I.OEk(20," : "),I.C$Y(),I.I0R(21,"ol",5)(22,"li")(23,"a",1),I.OEk(24," Invite him "),I.C$Y(),I.OEk(25," to you repo. "),I.C$Y(),I.I0R(26,"li"),I.OEk(27," See its configurable params "),I.I0R(28,"a",1),I.OEk(29," in its repo's README "),I.C$Y(),I.OEk(30," or use default ones. "),I.C$Y()()()()),2&A&&(I.E7m("header","Github App "+_.botName),I.yG2(3),I.E7m("href",_.botAppLink,I.K6U),I.yG2(1),I.oRS(" Github App ",_.botName," "),I.yG2(15),I.oRS("",_.botName," bot"),I.yG2(4),I.E7m("href",_.botAppLink+"/installations/new",I.K6U),I.yG2(5),I.E7m("href",_.botRepoLink,I.K6U))},dependencies:[U._2,G.E,N.TuiLinkModule,T.C],styles:[".steps[_ngcontent-%COMP%]{list-style-type:decimal;padding-left:.9375rem}.setup[_ngcontent-%COMP%]{margin-top:2rem}"],changeDetection:0}),_})()},47819:(A,_,E)=>{function U(A){return`./assets/${A.join("")}`}E.d(_,{_:()=>U})},18252:(A,_,E)=>{E.d(_,{G:()=>I});var U=E(6528);const N=["*"];let I=(()=>{var A;class _{constructor(){this.direction="right"}}return(A=_).ɵfac=function(_){return new(_||A)},A.ɵcmp=U.In1({type:A,selectors:[["tui-avatar-stack"]],hostVars:1,hostBindings:function(A,_){2&A&&U.e48("data-direction",_.direction)},inputs:{direction:"direction"},ngContentSelectors:N,decls:1,vars:0,template:function(A,_){1&A&&(U.kPM(),U._Xx(0))},styles:["tui-avatar-stack{display:flex;--t-gap: .125rem}tui-avatar-stack tui-avatar._round{-webkit-mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px));mask-image:radial-gradient(circle at var(--t-x) 50%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px))}tui-avatar-stack[data-direction=right] tui-avatar._round{--t-x: 100%}tui-avatar-stack[data-direction=right] tui-avatar._round:last-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar._round{--t-x: 0}tui-avatar-stack[data-direction=left] tui-avatar._round:first-child{-webkit-mask-image:none;mask-image:none}tui-avatar-stack[data-direction=left] tui-avatar:not(._round):not(:first-child){-webkit-mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 0% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 0% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to right,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(-1 * var(--t-gap)),calc(50% - (var(--t-radius) - var(--t-gap)) / 2) calc(100% + var(--t-gap)),bottom}tui-avatar-stack[data-direction=right] tui-avatar:not(._round):not(:last-child){-webkit-mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));mask-image:radial-gradient(circle at 150% 100%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),radial-gradient(circle at 150% 0%,transparent calc(var(--t-radius) + var(--t-gap)),#000 calc(var(--t-radius) + var(--t-gap) + .2px)),linear-gradient(to left,transparent calc(50% + var(--t-gap)),#000 calc(50% + var(--t-gap)));-webkit-mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom;mask-position:calc(50% - var(--t-gap)) calc(-1 * var(--t-gap)),calc(50% - var(--t-gap)) calc(100% + var(--t-gap)),bottom}tui-avatar-stack tui-avatar:not(._round){-webkit-mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;mask-size:calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),calc(var(--t-radius) + var(--t-gap)) calc(var(--t-radius) + var(--t-gap)),100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}tui-avatar-stack tui-avatar:not(:last-child){margin-right:calc(var(--t-size) / -2)}\n"],encapsulation:2,changeDetection:0}),_})()},46904:(A,_,E)=>{E.r(_),E.d(_,{TUI_BELARUSIAN_LANGUAGE:()=>T.TUI_BELARUSIAN_LANGUAGE,TUI_BELARUSIAN_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_BELARUSIAN_LANGUAGE_ADDON_COMMERCE,TUI_BELARUSIAN_LANGUAGE_ADDON_EDITOR:()=>N.TUI_BELARUSIAN_LANGUAGE_ADDON_EDITOR,TUI_BELARUSIAN_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_BELARUSIAN_LANGUAGE_ADDON_PREVIEW,TUI_BELARUSIAN_LANGUAGE_ADDON_TABLE:()=>G.TUI_BELARUSIAN_LANGUAGE_ADDON_TABLE,TUI_BELARUSIAN_LANGUAGE_CORE:()=>a.TUI_BELARUSIAN_LANGUAGE_CORE,TUI_BELARUSIAN_LANGUAGE_COUNTRIES:()=>L.TUI_BELARUSIAN_LANGUAGE_COUNTRIES,TUI_BELARUSIAN_LANGUAGE_KIT:()=>t.TUI_BELARUSIAN_LANGUAGE_KIT});var U=E(23944),N=E(80164),I=E(19056),G=E(45024),T=E(73368),a=E(60880),L=E(52963),t=E(1880)},34488:(A,_,E)=>{E.r(_),E.d(_,{TUI_CHINESE_LANGUAGE:()=>T.TUI_CHINESE_LANGUAGE,TUI_CHINESE_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_CHINESE_LANGUAGE_ADDON_COMMERCE,TUI_CHINESE_LANGUAGE_ADDON_EDITOR:()=>N.TUI_CHINESE_LANGUAGE_ADDON_EDITOR,TUI_CHINESE_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_CHINESE_LANGUAGE_ADDON_PREVIEW,TUI_CHINESE_LANGUAGE_ADDON_TABLE:()=>G.TUI_CHINESE_LANGUAGE_ADDON_TABLE,TUI_CHINESE_LANGUAGE_CORE:()=>a.TUI_CHINESE_LANGUAGE_CORE,TUI_CHINESE_LANGUAGE_COUNTRIES:()=>L.TUI_CHINESE_LANGUAGE_COUNTRIES,TUI_CHINESE_LANGUAGE_KIT:()=>t.TUI_CHINESE_LANGUAGE_KIT});var U=E(83568),N=E(59420),I=E(94156),G=E(84),T=E(69384),a=E(71376),L=E(33360),t=E(86816)},69832:(A,_,E)=>{E.r(_),E.d(_,{TUI_DUTCH_LANGUAGE:()=>L.TUI_DUTCH_LANGUAGE,TUI_DUTCH_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_DUTCH_LANGUAGE_ADDON_COMMERCE,TUI_DUTCH_LANGUAGE_ADDON_EDITOR:()=>N.TUI_DUTCH_LANGUAGE_ADDON_EDITOR,TUI_DUTCH_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_DUTCH_LANGUAGE_ADDON_PREVIEW,TUI_DUTCH_LANGUAGE_ADDON_TABLE:()=>G.TUI_DUTCH_LANGUAGE_ADDON_TABLE,TUI_DUTCH_LANGUAGE_CORE:()=>T.TUI_DUTCH_LANGUAGE_CORE,TUI_DUTCH_LANGUAGE_COUNTRIES:()=>a.TUI_DUTCH_LANGUAGE_COUNTRIES,TUI_DUTCH_LANGUAGE_KIT:()=>t.TUI_DUTCH_LANGUAGE_KIT});var U=E(94972),N=E(28196),I=E(13904),G=E(4104),T=E(74540),a=E(77048),L=E(85480),t=E(14680)},70952:(A,_,E)=>{E.r(_),E.d(_,{TUI_ENGLISH_LANGUAGE:()=>L.TUI_ENGLISH_LANGUAGE,TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE,TUI_ENGLISH_LANGUAGE_ADDON_EDITOR:()=>N.TUI_ENGLISH_LANGUAGE_ADDON_EDITOR,TUI_ENGLISH_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_ENGLISH_LANGUAGE_ADDON_PREVIEW,TUI_ENGLISH_LANGUAGE_ADDON_TABLE:()=>G.TUI_ENGLISH_LANGUAGE_ADDON_TABLE,TUI_ENGLISH_LANGUAGE_CORE:()=>T.TUI_ENGLISH_LANGUAGE_CORE,TUI_ENGLISH_LANGUAGE_COUNTRIES:()=>a.TUI_ENGLISH_LANGUAGE_COUNTRIES,TUI_ENGLISH_LANGUAGE_KIT:()=>t.TUI_ENGLISH_LANGUAGE_KIT});var U=E(54272),N=E(47200),I=E(87376),G=E(6724),T=E(65004),a=E(32272),L=E(49144),t=E(87572)},79208:(A,_,E)=>{E.r(_),E.d(_,{TUI_FRENCH_LANGUAGE:()=>L.TUI_FRENCH_LANGUAGE,TUI_FRENCH_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_FRENCH_LANGUAGE_ADDON_COMMERCE,TUI_FRENCH_LANGUAGE_ADDON_EDITOR:()=>N.TUI_FRENCH_LANGUAGE_ADDON_EDITOR,TUI_FRENCH_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_FRENCH_LANGUAGE_ADDON_PREVIEW,TUI_FRENCH_LANGUAGE_ADDON_TABLE:()=>G.TUI_FRENCH_LANGUAGE_ADDON_TABLE,TUI_FRENCH_LANGUAGE_CORE:()=>T.TUI_FRENCH_LANGUAGE_CORE,TUI_FRENCH_LANGUAGE_COUNTRIES:()=>a.TUI_FRENCH_LANGUAGE_COUNTRIES,TUI_FRENCH_LANGUAGE_KIT:()=>t.TUI_FRENCH_LANGUAGE_KIT});var U=E(26280),N=E(72492),I=E(80880),G=E(32172),T=E(5960),a=E(35064),L=E(3392),t=E(74516)},29036:(A,_,E)=>{E.r(_),E.d(_,{TUI_GERMAN_LANGUAGE:()=>a.TUI_GERMAN_LANGUAGE,TUI_GERMAN_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_GERMAN_LANGUAGE_ADDON_COMMERCE,TUI_GERMAN_LANGUAGE_ADDON_EDITOR:()=>N.TUI_GERMAN_LANGUAGE_ADDON_EDITOR,TUI_GERMAN_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_GERMAN_LANGUAGE_ADDON_PREVIEW,TUI_GERMAN_LANGUAGE_ADDON_TABLE:()=>G.TUI_GERMAN_LANGUAGE_ADDON_TABLE,TUI_GERMAN_LANGUAGE_CORE:()=>T.TUI_GERMAN_LANGUAGE_CORE,TUI_GERMAN_LANGUAGE_KIT:()=>L.TUI_GERMAN_LANGUAGE_KIT});var U=E(2320),N=E(16840),I=E(96912),G=E(92208),T=E(30280),a=E(51160),L=E(97596)},38468:(A,_,E)=>{E.r(_),E.d(_,{TUI_BELARUSIAN_LANGUAGE:()=>U.KE,TUI_BELARUSIAN_LANGUAGE_ADDON_COMMERCE:()=>U.cX,TUI_BELARUSIAN_LANGUAGE_ADDON_EDITOR:()=>U.OC,TUI_BELARUSIAN_LANGUAGE_ADDON_PREVIEW:()=>U.AF,TUI_BELARUSIAN_LANGUAGE_ADDON_TABLE:()=>U.Ww,TUI_BELARUSIAN_LANGUAGE_CORE:()=>U.Ev,TUI_BELARUSIAN_LANGUAGE_COUNTRIES:()=>U.mw,TUI_BELARUSIAN_LANGUAGE_KIT:()=>U.QF,TUI_CHINESE_LANGUAGE:()=>N.is,TUI_CHINESE_LANGUAGE_ADDON_COMMERCE:()=>N.yk,TUI_CHINESE_LANGUAGE_ADDON_EDITOR:()=>N.bx,TUI_CHINESE_LANGUAGE_ADDON_PREVIEW:()=>N.Qt,TUI_CHINESE_LANGUAGE_ADDON_TABLE:()=>N.Ub,TUI_CHINESE_LANGUAGE_CORE:()=>N.QV,TUI_CHINESE_LANGUAGE_COUNTRIES:()=>N.u2,TUI_CHINESE_LANGUAGE_KIT:()=>N.kb,TUI_DUTCH_LANGUAGE:()=>I.sL,TUI_DUTCH_LANGUAGE_ADDON_COMMERCE:()=>I.of,TUI_DUTCH_LANGUAGE_ADDON_EDITOR:()=>I.c9,TUI_DUTCH_LANGUAGE_ADDON_PREVIEW:()=>I.a0,TUI_DUTCH_LANGUAGE_ADDON_TABLE:()=>I.Ud,TUI_DUTCH_LANGUAGE_CORE:()=>I.Kk,TUI_DUTCH_LANGUAGE_COUNTRIES:()=>I.M$,TUI_DUTCH_LANGUAGE_KIT:()=>I.am,TUI_ENGLISH_LANGUAGE:()=>G.Qn,TUI_ENGLISH_LANGUAGE_ADDON_COMMERCE:()=>G.w9,TUI_ENGLISH_LANGUAGE_ADDON_EDITOR:()=>G.kL,TUI_ENGLISH_LANGUAGE_ADDON_PREVIEW:()=>G.CA,TUI_ENGLISH_LANGUAGE_ADDON_TABLE:()=>G.Gc,TUI_ENGLISH_LANGUAGE_CORE:()=>G.Mb,TUI_ENGLISH_LANGUAGE_COUNTRIES:()=>G.qo,TUI_ENGLISH_LANGUAGE_KIT:()=>G.UH,TUI_FRENCH_LANGUAGE:()=>T.Ws,TUI_FRENCH_LANGUAGE_ADDON_COMMERCE:()=>T.uU,TUI_FRENCH_LANGUAGE_ADDON_EDITOR:()=>T.MR,TUI_FRENCH_LANGUAGE_ADDON_PREVIEW:()=>T.Yh,TUI_FRENCH_LANGUAGE_ADDON_TABLE:()=>T.QN,TUI_FRENCH_LANGUAGE_CORE:()=>T._K,TUI_FRENCH_LANGUAGE_COUNTRIES:()=>T.ei,TUI_FRENCH_LANGUAGE_KIT:()=>T.cJ,TUI_GERMAN_LANGUAGE:()=>a.YP,TUI_GERMAN_LANGUAGE_ADDON_COMMERCE:()=>a.ZJ,TUI_GERMAN_LANGUAGE_ADDON_EDITOR:()=>a.AU,TUI_GERMAN_LANGUAGE_ADDON_PREVIEW:()=>a.w1,TUI_GERMAN_LANGUAGE_ADDON_TABLE:()=>a.kN,TUI_GERMAN_LANGUAGE_CORE:()=>a.U5,TUI_GERMAN_LANGUAGE_KIT:()=>a.s9,TUI_ITALIAN_LANGUAGE:()=>L.sv,TUI_ITALIAN_LANGUAGE_ADDON_COMMERCE:()=>L.Wo,TUI_ITALIAN_LANGUAGE_ADDON_EDITOR:()=>L.C6,TUI_ITALIAN_LANGUAGE_ADDON_PREVIEW:()=>L._0,TUI_ITALIAN_LANGUAGE_ADDON_TABLE:()=>L.Os,TUI_ITALIAN_LANGUAGE_CORE:()=>L.Ut,TUI_ITALIAN_LANGUAGE_COUNTRIES:()=>L.gj,TUI_ITALIAN_LANGUAGE_KIT:()=>L.Qd,TUI_KAZAKH_LANGUAGE:()=>t.oX,TUI_KAZAKH_LANGUAGE_ADDON_COMMERCE:()=>t.kn,TUI_KAZAKH_LANGUAGE_ADDON_EDITOR:()=>t.wb,TUI_KAZAKH_LANGUAGE_ADDON_PREVIEW:()=>t.Oc,TUI_KAZAKH_LANGUAGE_ADDON_TABLE:()=>t.kV,TUI_KAZAKH_LANGUAGE_CORE:()=>t.mO,TUI_KAZAKH_LANGUAGE_COUNTRIES:()=>t.y6,TUI_KAZAKH_LANGUAGE_KIT:()=>t.m0,TUI_MALAY_LANGUAGE:()=>D.M9,TUI_MALAY_LANGUAGE_ADDON_COMMERCE:()=>D.Qj,TUI_MALAY_LANGUAGE_ADDON_EDITOR:()=>D.cT,TUI_MALAY_LANGUAGE_ADDON_PREVIEW:()=>D.aY,TUI_MALAY_LANGUAGE_ADDON_TABLE:()=>D.sN,TUI_MALAY_LANGUAGE_CORE:()=>D.O6,TUI_MALAY_LANGUAGE_COUNTRIES:()=>D.iS,TUI_MALAY_LANGUAGE_KIT:()=>D.yg,TUI_POLISH_LANGUAGE:()=>O.u_,TUI_POLISH_LANGUAGE_ADDON_COMMERCE:()=>O.QZ,TUI_POLISH_LANGUAGE_ADDON_EDITOR:()=>O.M7,TUI_POLISH_LANGUAGE_ADDON_PREVIEW:()=>O.gl,TUI_POLISH_LANGUAGE_ADDON_TABLE:()=>O.ig,TUI_POLISH_LANGUAGE_CORE:()=>O.sb,TUI_POLISH_LANGUAGE_COUNTRIES:()=>O.em,TUI_POLISH_LANGUAGE_KIT:()=>O.Ez,TUI_PORTUGUESE_LANGUAGE:()=>R.Ih,TUI_PORTUGUESE_LANGUAGE_ADDON_COMMERCE:()=>R.SW,TUI_PORTUGUESE_LANGUAGE_ADDON_EDITOR:()=>R.a4,TUI_PORTUGUESE_LANGUAGE_ADDON_PREVIEW:()=>R.mW,TUI_PORTUGUESE_LANGUAGE_ADDON_TABLE:()=>R.ED,TUI_PORTUGUESE_LANGUAGE_CORE:()=>R.KQ,TUI_PORTUGUESE_LANGUAGE_COUNTRIES:()=>R.aW,TUI_PORTUGUESE_LANGUAGE_KIT:()=>R.K_,TUI_RUSSIAN_LANGUAGE:()=>r.uG,TUI_RUSSIAN_LANGUAGE_ADDON_COMMERCE:()=>r.Ep,TUI_RUSSIAN_LANGUAGE_ADDON_EDITOR:()=>r.Yn,TUI_RUSSIAN_LANGUAGE_ADDON_PREVIEW:()=>r.CK,TUI_RUSSIAN_LANGUAGE_ADDON_TABLE:()=>r.IH,TUI_RUSSIAN_LANGUAGE_CORE:()=>r.Ww,TUI_RUSSIAN_LANGUAGE_COUNTRIES:()=>r.B$,TUI_RUSSIAN_LANGUAGE_KIT:()=>r.Az,TUI_SPANISH_LANGUAGE:()=>e.qA,TUI_SPANISH_LANGUAGE_ADDON_COMMERCE:()=>e.QT,TUI_SPANISH_LANGUAGE_ADDON_EDITOR:()=>e.uE,TUI_SPANISH_LANGUAGE_ADDON_TABLE:()=>e.QX,TUI_SPANISH_LANGUAGE_CORE:()=>e.Vq,TUI_SPANISH_LANGUAGE_COUNTRIES:()=>e.o1,TUI_SPANISH_LANGUAGE_KIT:()=>e.OG,TUI_SPANISH_LANGUAGE_PREVIEW:()=>e.gB,TUI_TURKISH_LANGUAGE:()=>S.q6,TUI_TURKISH_LANGUAGE_ADDON_COMMERCE:()=>S.gt,TUI_TURKISH_LANGUAGE_ADDON_EDITOR:()=>S.aW,TUI_TURKISH_LANGUAGE_ADDON_PREVIEW:()=>S.U1,TUI_TURKISH_LANGUAGE_ADDON_TABLE:()=>S.Cu,TUI_TURKISH_LANGUAGE_CORE:()=>S.io,TUI_TURKISH_LANGUAGE_KIT:()=>S.c7,TUI_UKRAINIAN_LANGUAGE:()=>i.qy,TUI_UKRAINIAN_LANGUAGE_ADDON_COMMERCE:()=>i.CM,TUI_UKRAINIAN_LANGUAGE_ADDON_EDITOR:()=>i.CY,TUI_UKRAINIAN_LANGUAGE_ADDON_PREVIEW:()=>i.w5,TUI_UKRAINIAN_LANGUAGE_ADDON_TABLE:()=>i.qG,TUI_UKRAINIAN_LANGUAGE_CORE:()=>i.Pw,TUI_UKRAINIAN_LANGUAGE_KIT:()=>i.oN,TUI_VIETNAMESE_LANGUAGE:()=>C.AH,TUI_VIETNAMESE_LANGUAGE_ADDON_COMMERCE:()=>C.Qz,TUI_VIETNAMESE_LANGUAGE_ADDON_EDITOR:()=>C.s5,TUI_VIETNAMESE_LANGUAGE_ADDON_PREVIEW:()=>C.qO,TUI_VIETNAMESE_LANGUAGE_ADDON_TABLE:()=>C.k1,TUI_VIETNAMESE_LANGUAGE_CORE:()=>C.Ky,TUI_VIETNAMESE_LANGUAGE_COUNTRIES:()=>C.Mh,TUI_VIETNAMESE_LANGUAGE_KIT:()=>C.An});var U=E(71052),N=E(89184),I=E(41220),G=E(95320),T=E(72816),a=E(53116),L=E(54532),t=E(34948),D=E(2264),O=E(5776),R=E(2508),r=E(70340),e=E(88676),S=E(38261),i=E(47760),C=E(24336)},15940:(A,_,E)=>{E.r(_),E.d(_,{TUI_ITALIAN_LANGUAGE:()=>L.TUI_ITALIAN_LANGUAGE,TUI_ITALIAN_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_ITALIAN_LANGUAGE_ADDON_COMMERCE,TUI_ITALIAN_LANGUAGE_ADDON_EDITOR:()=>N.TUI_ITALIAN_LANGUAGE_ADDON_EDITOR,TUI_ITALIAN_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_ITALIAN_LANGUAGE_ADDON_PREVIEW,TUI_ITALIAN_LANGUAGE_ADDON_TABLE:()=>G.TUI_ITALIAN_LANGUAGE_ADDON_TABLE,TUI_ITALIAN_LANGUAGE_CORE:()=>T.TUI_ITALIAN_LANGUAGE_CORE,TUI_ITALIAN_LANGUAGE_COUNTRIES:()=>a.TUI_ITALIAN_LANGUAGE_COUNTRIES,TUI_ITALIAN_LANGUAGE_KIT:()=>t.TUI_ITALIAN_LANGUAGE_KIT});var U=E(68174),N=E(31421),I=E(37240),G=E(76612),T=E(90228),a=E(57932),L=E(68072),t=E(94320)},61792:(A,_,E)=>{E.r(_),E.d(_,{TUI_KAZAKH_LANGUAGE:()=>L.TUI_KAZAKH_LANGUAGE,TUI_KAZAKH_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_KAZAKH_LANGUAGE_ADDON_COMMERCE,TUI_KAZAKH_LANGUAGE_ADDON_EDITOR:()=>N.TUI_KAZAKH_LANGUAGE_ADDON_EDITOR,TUI_KAZAKH_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_KAZAKH_LANGUAGE_ADDON_PREVIEW,TUI_KAZAKH_LANGUAGE_ADDON_TABLE:()=>G.TUI_KAZAKH_LANGUAGE_ADDON_TABLE,TUI_KAZAKH_LANGUAGE_CORE:()=>T.TUI_KAZAKH_LANGUAGE_CORE,TUI_KAZAKH_LANGUAGE_COUNTRIES:()=>a.TUI_KAZAKH_LANGUAGE_COUNTRIES,TUI_KAZAKH_LANGUAGE_KIT:()=>t.TUI_KAZAKH_LANGUAGE_KIT});var U=E(73220),N=E(78220),I=E(44992),G=E(59148),T=E(8392),a=E(55640),L=E(4468),t=E(25052)},97660:(A,_,E)=>{E.r(_),E.d(_,{TUI_MALAY_LANGUAGE:()=>t.TUI_MALAY_LANGUAGE,TUI_MALAY_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_MALAY_LANGUAGE_ADDON_COMMERCE,TUI_MALAY_LANGUAGE_ADDON_EDITOR:()=>N.TUI_MALAY_LANGUAGE_ADDON_EDITOR,TUI_MALAY_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_MALAY_LANGUAGE_ADDON_PREVIEW,TUI_MALAY_LANGUAGE_ADDON_TABLE:()=>G.TUI_MALAY_LANGUAGE_ADDON_TABLE,TUI_MALAY_LANGUAGE_CORE:()=>T.TUI_MALAY_LANGUAGE_CORE,TUI_MALAY_LANGUAGE_COUNTRIES:()=>a.TUI_MALAY_LANGUAGE_COUNTRIES,TUI_MALAY_LANGUAGE_KIT:()=>L.TUI_MALAY_LANGUAGE_KIT});var U=E(39428),N=E(30936),I=E(4272),G=E(49272),T=E(70444),a=E(36444),L=E(63360),t=E(53840)},5728:(A,_,E)=>{E.r(_),E.d(_,{TUI_POLISH_LANGUAGE:()=>t.TUI_POLISH_LANGUAGE,TUI_POLISH_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_POLISH_LANGUAGE_ADDON_COMMERCE,TUI_POLISH_LANGUAGE_ADDON_EDITOR:()=>N.TUI_POLISH_LANGUAGE_ADDON_EDITOR,TUI_POLISH_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_POLISH_LANGUAGE_ADDON_PREVIEW,TUI_POLISH_LANGUAGE_ADDON_TABLE:()=>G.TUI_POLISH_LANGUAGE_ADDON_TABLE,TUI_POLISH_LANGUAGE_CORE:()=>T.TUI_POLISH_LANGUAGE_CORE,TUI_POLISH_LANGUAGE_COUNTRIES:()=>a.TUI_POLISH_LANGUAGE_COUNTRIES,TUI_POLISH_LANGUAGE_KIT:()=>L.TUI_POLISH_LANGUAGE_KIT});var U=E(31076),N=E(1208),I=E(12496),G=E(48779),T=E(23816),a=E(73176),L=E(912),t=E(65148)},67400:(A,_,E)=>{E.r(_),E.d(_,{TUI_PORTUGUESE_LANGUAGE:()=>t.TUI_PORTUGUESE_LANGUAGE,TUI_PORTUGUESE_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_PORTUGUESE_LANGUAGE_ADDON_COMMERCE,TUI_PORTUGUESE_LANGUAGE_ADDON_EDITOR:()=>N.TUI_PORTUGUESE_LANGUAGE_ADDON_EDITOR,TUI_PORTUGUESE_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_PORTUGUESE_LANGUAGE_ADDON_PREVIEW,TUI_PORTUGUESE_LANGUAGE_ADDON_TABLE:()=>G.TUI_PORTUGUESE_LANGUAGE_ADDON_TABLE,TUI_PORTUGUESE_LANGUAGE_CORE:()=>T.TUI_PORTUGUESE_LANGUAGE_CORE,TUI_PORTUGUESE_LANGUAGE_COUNTRIES:()=>a.TUI_PORTUGUESE_LANGUAGE_COUNTRIES,TUI_PORTUGUESE_LANGUAGE_KIT:()=>L.TUI_PORTUGUESE_LANGUAGE_KIT});var U=E(76576),N=E(75184),I=E(63700),G=E(89544),T=E(56764),a=E(30476),L=E(82680),t=E(71064)},70624:(A,_,E)=>{E.r(_),E.d(_,{TUI_RUSSIAN_LANGUAGE:()=>t.TUI_RUSSIAN_LANGUAGE,TUI_RUSSIAN_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_RUSSIAN_LANGUAGE_ADDON_COMMERCE,TUI_RUSSIAN_LANGUAGE_ADDON_EDITOR:()=>N.TUI_RUSSIAN_LANGUAGE_ADDON_EDITOR,TUI_RUSSIAN_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_RUSSIAN_LANGUAGE_ADDON_PREVIEW,TUI_RUSSIAN_LANGUAGE_ADDON_TABLE:()=>G.TUI_RUSSIAN_LANGUAGE_ADDON_TABLE,TUI_RUSSIAN_LANGUAGE_CORE:()=>T.TUI_RUSSIAN_LANGUAGE_CORE,TUI_RUSSIAN_LANGUAGE_COUNTRIES:()=>a.TUI_RUSSIAN_LANGUAGE_COUNTRIES,TUI_RUSSIAN_LANGUAGE_KIT:()=>L.TUI_RUSSIAN_LANGUAGE_KIT});var U=E(53344),N=E(98324),I=E(13956),G=E(7092),T=E(85944),a=E(94152),L=E(67792),t=E(41236)},51344:(A,_,E)=>{E.r(_),E.d(_,{TUI_SPANISH_LANGUAGE:()=>t.TUI_SPANISH_LANGUAGE,TUI_SPANISH_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_SPANISH_LANGUAGE_ADDON_COMMERCE,TUI_SPANISH_LANGUAGE_ADDON_EDITOR:()=>N.TUI_SPANISH_LANGUAGE_ADDON_EDITOR,TUI_SPANISH_LANGUAGE_ADDON_TABLE:()=>G.TUI_SPANISH_LANGUAGE_ADDON_TABLE,TUI_SPANISH_LANGUAGE_CORE:()=>T.TUI_SPANISH_LANGUAGE_CORE,TUI_SPANISH_LANGUAGE_COUNTRIES:()=>a.TUI_SPANISH_LANGUAGE_COUNTRIES,TUI_SPANISH_LANGUAGE_KIT:()=>L.TUI_SPANISH_LANGUAGE_KIT,TUI_SPANISH_LANGUAGE_PREVIEW:()=>I.TUI_SPANISH_LANGUAGE_PREVIEW});var U=E(72632),N=E(31892),I=E(32880),G=E(21608),T=E(73216),a=E(95032),L=E(17636),t=E(73392)},58628:(A,_,E)=>{E.r(_),E.d(_,{TUI_TURKISH_LANGUAGE:()=>L.TUI_TURKISH_LANGUAGE,TUI_TURKISH_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_TURKISH_LANGUAGE_ADDON_COMMERCE,TUI_TURKISH_LANGUAGE_ADDON_EDITOR:()=>N.TUI_TURKISH_LANGUAGE_ADDON_EDITOR,TUI_TURKISH_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_TURKISH_LANGUAGE_ADDON_PREVIEW,TUI_TURKISH_LANGUAGE_ADDON_TABLE:()=>G.TUI_TURKISH_LANGUAGE_ADDON_TABLE,TUI_TURKISH_LANGUAGE_CORE:()=>T.TUI_TURKISH_LANGUAGE_CORE,TUI_TURKISH_LANGUAGE_KIT:()=>a.TUI_TURKISH_LANGUAGE_KIT});var U=E(72520),N=E(87552),I=E(98512),G=E(36968),T=E(82336),a=E(22484),L=E(76180)},57480:(A,_,E)=>{E.r(_),E.d(_,{TUI_UKRAINIAN_LANGUAGE:()=>L.TUI_UKRAINIAN_LANGUAGE,TUI_UKRAINIAN_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_UKRAINIAN_LANGUAGE_ADDON_COMMERCE,TUI_UKRAINIAN_LANGUAGE_ADDON_EDITOR:()=>N.TUI_UKRAINIAN_LANGUAGE_ADDON_EDITOR,TUI_UKRAINIAN_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_UKRAINIAN_LANGUAGE_ADDON_PREVIEW,TUI_UKRAINIAN_LANGUAGE_ADDON_TABLE:()=>G.TUI_UKRAINIAN_LANGUAGE_ADDON_TABLE,TUI_UKRAINIAN_LANGUAGE_CORE:()=>T.TUI_UKRAINIAN_LANGUAGE_CORE,TUI_UKRAINIAN_LANGUAGE_KIT:()=>a.TUI_UKRAINIAN_LANGUAGE_KIT});var U=E(11532),N=E(79608),I=E(55052),G=E(22040),T=E(37360),a=E(54872),L=E(81968)},94196:(A,_,E)=>{E.r(_),E.d(_,{TUI_VIETNAMESE_LANGUAGE:()=>t.TUI_VIETNAMESE_LANGUAGE,TUI_VIETNAMESE_LANGUAGE_ADDON_COMMERCE:()=>U.TUI_VIETNAMESE_LANGUAGE_ADDON_COMMERCE,TUI_VIETNAMESE_LANGUAGE_ADDON_EDITOR:()=>N.TUI_VIETNAMESE_LANGUAGE_ADDON_EDITOR,TUI_VIETNAMESE_LANGUAGE_ADDON_PREVIEW:()=>I.TUI_VIETNAMESE_LANGUAGE_ADDON_PREVIEW,TUI_VIETNAMESE_LANGUAGE_ADDON_TABLE:()=>G.TUI_VIETNAMESE_LANGUAGE_ADDON_TABLE,TUI_VIETNAMESE_LANGUAGE_CORE:()=>T.TUI_VIETNAMESE_LANGUAGE_CORE,TUI_VIETNAMESE_LANGUAGE_COUNTRIES:()=>a.TUI_VIETNAMESE_LANGUAGE_COUNTRIES,TUI_VIETNAMESE_LANGUAGE_KIT:()=>L.TUI_VIETNAMESE_LANGUAGE_KIT});var U=E(99812),N=E(83952),I=E(41980),G=E(30384),T=E(73048),a=E(11332),L=E(25716),t=E(9e4)}}]);