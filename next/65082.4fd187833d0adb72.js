(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[65082],{65082:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p});var l=n(80486),o=n(48266),i=n(8704),c=n(35548),a=n(37770),r=n(52659),s=n(69624);function u(t,e){if(1&t&&c._uU(0),2&t){const t=e.$implicit;c.hij(" ",t.text,"\n")}}const p=(()=>{var t;class e{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.map=new Map,this.handler=t=>t.children||l.EMPTY_ARRAY}toggleTopmost(){this.map.set(this.data,!this.map.get(this.data))}toggleLevel(t){const e=this.data.children||[];this.map.set(e[t],!this.map.get(e[t]))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent4",features:[c.jDz],decls:11,vars:5,consts:[[3,"childrenHandler","content","map","tuiTreeController","value"],["content",""],["size","s","tuiButton","","type","button",1,"programmatic","tui-space_right-2",3,"click"],["size","s","tuiButton","","type","button",1,"programmatic",3,"click"]],template:function(t,e){if(1&t&&(c._UZ(0,"tui-tree",0),c.YNc(1,u,1,1,"ng-template",null,1,c.W1O),c.TgZ(3,"p")(4,"button",2),c.NdJ("click",(function(){return e.toggleTopmost()})),c._uU(5," Toggle Topmost "),c.qZA()(),c.TgZ(6,"p")(7,"button",3),c.NdJ("click",(function(){return e.toggleLevel(0)})),c._uU(8," Toggle Top level 1 "),c.qZA()(),c.TgZ(9,"button",3),c.NdJ("click",(function(){return e.toggleLevel(2)})),c._uU(10," Toggle Top level 3\n"),c.qZA()),2&t){const t=c.MAs(2);c.Q6J("childrenHandler",e.handler)("content",t)("map",e.map)("tuiTreeController",!1)("value",e.data)}},dependencies:[i.TuiTree,a.Y,r.n,s.m,o.TuiButtonDirective],encapsulation:2,changeDetection:0}),e})()}}]);