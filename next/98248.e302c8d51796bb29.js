(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[98248],{98248:(t,e,n)=>{n.r(e),n.d(e,{default:()=>N});var i=n(4594),o=n(49237),a=n(80486),c=n(48266),u=n(8704),r=n(35548),s=n(86561),l=n(84155),d=n(4855),m=n(93098),p=n(23772),g=n(64419),h=n(99829),f=n(25138),T=n(90070);function x(t,e){1&t&&(r.TgZ(0,"th",5),r._uU(1," Name "),r.qZA())}function C(t,e){1&t&&(r.TgZ(0,"th",5),r._uU(1," E-mail "),r.qZA())}function Z(t,e){1&t&&(r.TgZ(0,"th",5),r._uU(1," Status "),r.qZA())}function b(t,e){1&t&&(r.TgZ(0,"th",6),r._uU(1," Tags "),r.qZA()),2&t&&r.Q6J("sorter",null)}function y(t,e){1&t&&r._UZ(0,"th",6),2&t&&r.Q6J("sorter",null)}function _(t,e){if(1&t&&(r.TgZ(0,"td",11),r._uU(1),r.qZA()),2&t){const t=r.oxw(),e=t.index,n=t.$implicit;r.xp6(1),r.AsE(" ",e+1,". ",n.name," ")}}function v(t,e){if(1&t&&(r.TgZ(0,"a",13),r._uU(1),r.qZA()),2&t){const t=r.oxw(2).$implicit;r.Q6J("href","mailto:"+t.email,r.LSH),r.xp6(1),r.hij(" ",t.email," ")}}function A(t,e){if(1&t&&(r.TgZ(0,"td",11),r.YNc(1,v,2,2,"a",12),r.qZA()),2&t){const t=r.oxw().$implicit;r.xp6(1),r.Q6J("ngIf",t.email)}}function O(t,e){if(1&t&&(r.TgZ(0,"td",11)(1,"div"),r._uU(2),r.qZA()()),2&t){const t=r.oxw().$implicit;r.xp6(1),r.Tol(t.status),r.xp6(1),r.Oqu(t.status)}}function J(t,e){if(1&t&&(r.TgZ(0,"tui-chip",15),r.ALo(1,"tuiAutoColor"),r._uU(2),r.qZA()),2&t){const t=e.$implicit;r.Udp("background",r.lcZ(1,3,t)),r.xp6(2),r.hij(" ",t," ")}}function M(t,e){if(1&t&&(r.TgZ(0,"td",11),r.YNc(1,J,3,5,"tui-chip",14),r.qZA()),2&t){const t=r.oxw().$implicit;r.xp6(1),r.Q6J("ngForOf",t.tags)}}function P(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"td",11)(1,"button",16),r.NdJ("click",(function(){r.CHM(t);const e=r.oxw().$implicit,n=r.oxw(2);return r.KtG(n.remove(e))})),r._uU(2," Remove "),r.qZA()()}2&t&&(r.xp6(1),r.Udp("border-radius",100,"%"))}function Q(t,e){1&t&&(r.TgZ(0,"tr",9),r.YNc(1,_,2,2,"td",10),r.YNc(2,A,2,1,"td",10),r.YNc(3,O,3,3,"td",10),r.YNc(4,M,2,1,"td",10),r.YNc(5,P,3,2,"td",10),r.qZA()),2&t&&(r.xp6(1),r.Q6J("tuiCell","name"),r.xp6(1),r.Q6J("tuiCell","email"),r.xp6(1),r.Q6J("tuiCell","status"),r.xp6(1),r.Q6J("tuiCell","tags"),r.xp6(1),r.Q6J("tuiCell","actions"))}function q(t,e){if(1&t&&(r.TgZ(0,"tbody",7),r.YNc(1,Q,6,5,"tr",8),r.qZA()),2&t){const t=e.tuiLet;r.Q6J("data",t),r.xp6(1),r.Q6J("ngForOf",t)}}const N=(()=>{var t;class e{constructor(){this.columns=["name","email","status","tags","actions"],this.users=[{name:"Michael Palin",email:"m.palin@montypython.com",status:"alive",tags:["Funny"]},{name:"Eric Idle",email:"e.idle@montypython.com",status:"alive",tags:["Funny","Music"]},{name:"John Cleese",email:"j.cleese@montypython.com",status:"alive",tags:["Funny","Tall","Actor"]},{name:"Terry Jones",email:"",status:"deceased",tags:["Funny","Director"]},{name:"Terry Gilliam",email:"t.gilliam@montypython.com",status:"alive",tags:["Funny","Director"]},{name:"Graham Chapman",email:"",status:"deceased",tags:["Funny","King Arthur"]}]}remove(t){this.users=this.users.filter((e=>e!==t))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=r.Xpm({type:t,selectors:[["tui-table-example-2"]],standalone:!0,exportAs:"ExampleComponent2",features:[r.jDz],decls:10,vars:9,consts:[["tuiTable","",3,"columns"],["tuiThGroup",""],["tuiTh","",4,"tuiHead"],["tuiTh","",3,"sorter",4,"tuiHead"],["tuiTbody","",3,"data",4,"tuiLet"],["tuiTh",""],["tuiTh","",3,"sorter"],["tuiTbody","",3,"data"],["tuiTr","",4,"ngFor","ngForOf"],["tuiTr",""],["tuiTd","",4,"tuiCell"],["tuiTd",""],["tuiLink","",3,"href",4,"ngIf"],["tuiLink","",3,"href"],["size","xs","class","tui-space_right-1",3,"background",4,"ngFor","ngForOf"],["size","xs",1,"tui-space_right-1"],["appearance","flat","iconLeft","tuiIconTrash","size","s","tuiIconButton","","type","button",1,"remove",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"table",0)(1,"thead")(2,"tr",1),r.YNc(3,x,2,0,"th",2),r.YNc(4,C,2,0,"th",2),r.YNc(5,Z,2,0,"th",2),r.YNc(6,b,2,1,"th",3),r.YNc(7,y,1,1,"th",3),r.qZA()(),r.YNc(8,q,2,2,"tbody",4),r.ALo(9,"tuiTableSort"),r.qZA()),2&t&&(r.Q6J("columns",e.columns),r.xp6(3),r.Q6J("tuiHead","name"),r.xp6(1),r.Q6J("tuiHead","email"),r.xp6(1),r.Q6J("tuiHead","status"),r.xp6(1),r.Q6J("tuiHead","tags"),r.xp6(1),r.Q6J("tuiHead","actions"),r.xp6(1),r.Q6J("tuiLet",r.lcZ(9,7,e.users)))},dependencies:[o.TuiTable,s.c,l.j,d.E,m.W,p.K,g.f,h.B,f.D,T.y,u.TuiChipDirective,i.sg,c.TuiAutoColorPipe,c.TuiLinkDirective,i.O5,c.TuiButtonDirective,a.TuiLetDirective],styles:['td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{white-space:nowrap;border-color:transparent;border-right-color:var(--tui-base-04)}td[_ngcontent-%COMP%]:last-child, th[_ngcontent-%COMP%]:last-child{border-right-color:transparent}tbody[_ngcontent-%COMP%]{border-color:transparent}tr[_ngcontent-%COMP%]:nth-child(2n)   td[_ngcontent-%COMP%]{background:var(--tui-base-02)}.alive[_ngcontent-%COMP%], .deceased[_ngcontent-%COMP%]{display:flex;align-items:center;text-transform:capitalize}.alive[_ngcontent-%COMP%]:before, .deceased[_ngcontent-%COMP%]:before{content:"";width:.5rem;height:.5rem;border-radius:100%;margin-right:.5rem;background:var(--tui-base-04)}.alive[_ngcontent-%COMP%]:before{background:var(--tui-success-fill)}.remove[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}tr[_ngcontent-%COMP%]:hover   .remove[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]:focus-within   .remove[_ngcontent-%COMP%]{opacity:1}'],changeDetection:0}),e})()}}]);