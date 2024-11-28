"use strict";(self.webpackChunkewallet=self.webpackChunkewallet||[]).push([[984],{6984:(j,f,i)=>{i.r(f),i.d(f,{DashboardModule:()=>F});var w=i(6814),h=i(95),n=i(9431),b=i(1272),y=i(1303),m=i(1430),t=i(5678),l=function(e,r){if(!(typeof window>"u"||typeof document>"u")){var a=r??document.body;return window.getComputedStyle(a,null).getPropertyValue(e).replace(/^\s/,"")}};let D=(()=>{class e{constructor(){this.mainChart={},this.initMainChart()}random(a,s){return Math.floor(Math.random()*(s-a+1)+a)}initMainChart(a="Month"){const s=l("--cui-success")??"#4dbd74",o=l("--cui-info")??"#20a8d8",d=function(e,r){if(void 0===r&&(r=100),typeof e>"u")throw new TypeError("Hex color is not defined");var s,o,d;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(s=parseInt(e.slice(1,3),16),o=parseInt(e.slice(3,5),16),d=parseInt(e.slice(5,7),16)):(s=parseInt(e.slice(1,2),16),o=parseInt(e.slice(2,3),16),d=parseInt(e.slice(3,5),16)),"rgba(".concat(s,", ").concat(o,", ").concat(d,", ").concat(r/100,")")}(o,10),g=l("--cui-danger")||"#f86c6b";this.mainChart.elements="Month"===a?12:27,this.mainChart.Data1=[],this.mainChart.Data2=[],this.mainChart.Data3=[];for(let c=0;c<=this.mainChart.elements;c++)this.mainChart.Data1.push(this.random(50,240)),this.mainChart.Data2.push(this.random(20,160)),this.mainChart.Data3.push(65);let u=[];if("Month"===a)u=["January","February","March","April","May","June","July","August","September","October","November","December"];else{const c=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];u=c.concat(c,c,c)}const p=[{backgroundColor:d,borderColor:o,pointHoverBackgroundColor:o,borderWidth:2,fill:!0},{backgroundColor:"transparent",borderColor:s||"#4dbd74",pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:g||"#f86c6b",pointHoverBackgroundColor:g,borderWidth:1,borderDash:[8,5]}],R=[{data:this.mainChart.Data1,label:"Current",...p[0]},{data:this.mainChart.Data2,label:"Previous",...p[1]},{data:this.mainChart.Data3,label:"BEP",...p[2]}],W={maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{labelColor:function(c){return{backgroundColor:c.dataset.borderColor}}}}},scales:{x:{grid:{drawOnChartArea:!1}},y:{beginAtZero:!0,max:250,ticks:{maxTicksLimit:5,stepSize:Math.ceil(50)}}},elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}};this.mainChart.type="line",this.mainChart.options=W,this.mainChart.data={datasets:R,labels:u}}static#t=this.\u0275fac=function(s){return new(s||e)};static#a=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"any"})}return e})();var C=i(9947),x=i(1474);let T=(()=>{class e{constructor(a){this.http=a}filterTransactions(){return this.http.get(`${C.N.apiUrl}filterTransactions`,{headers:C.o.headers})}static#t=this.\u0275fac=function(s){return new(s||e)(t.LFG(x.eN))};static#a=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function J(e,r){if(1&e&&(t._uU(0),t.TgZ(1,"span",7),t._uU(2),t.O4$(),t._UZ(3,"svg",8),t._uU(4,")\n        "),t.qZA(),t._uU(5,"\n      ")),2&e){const a=t.oxw();t.hij("\n        $",null==a.userData?null:a.userData.walletBalance,"\n        "),t.xp6(2),t.hij("\n          (+",(100*(null==a.userData?null:a.userData.walletBalance)).toFixed(2),"% ")}}function A(e,r){if(1&e&&t._UZ(0,"c-chart",9),2&e){const a=t.oxw();t.Q6J("data",a.data[3])("options",a.options[3])}}function M(e,r){if(1&e&&(t._uU(0),t.TgZ(1,"span",7),t._uU(2),t.O4$(),t._UZ(3,"svg",8),t._uU(4,")\n        "),t.qZA(),t._uU(5,"\n      ")),2&e){const a=t.oxw();t.hij("\n        ",null==a.userData?null:a.userData.noOfCredits,"\n        "),t.xp6(2),t.hij("\n          (+",100*(null==a.userData?null:a.userData.noOfCredits),"% ")}}function _(e,r){if(1&e&&t._UZ(0,"c-chart",10),2&e){const a=t.oxw();t.Q6J("data",a.data[0])("options",a.options[0])("type","line")}}function k(e,r){if(1&e&&(t._uU(0,"\n        "),t.TgZ(1,"span"),t._uU(2),t.qZA(),t._uU(3,"\n        "),t.TgZ(4,"span",7),t._uU(5),t.O4$(),t._UZ(6,"svg",8),t._uU(7,")\n        "),t.qZA(),t._uU(8,"\n      ")),2&e){const a=t.oxw();t.xp6(2),t.Oqu(null==a.userData?null:a.userData.noOfDebits),t.xp6(3),t.hij("\n          (+",100*(null==a.userData?null:a.userData.noOfDebits),"%")}}function Z(e,r){1&e&&(t.TgZ(0,"c-dropdown",11)(1,"button",12),t.O4$(),t._UZ(2,"svg",13),t.qZA(),t.kcU(),t.TgZ(3,"ul",14)(4,"li")(5,"a",15),t._uU(6,"Action"),t.qZA()(),t.TgZ(7,"li")(8,"a",15),t._uU(9,"Another action"),t.qZA()(),t.TgZ(10,"li")(11,"a",15),t._uU(12,"Something else here"),t.qZA()(),t.TgZ(13,"li")(14,"a",16),t._uU(15,"Disabled"),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("caret",!1),t.xp6(13),t.Q6J("disabled",!0))}function U(e,r){if(1&e&&t._UZ(0,"c-chart",17),2&e){const a=t.oxw();t.Q6J("data",a.data[1])("options",a.options[1])}}let S=(()=>{class e{constructor(a){this.changeDetectorRef=a,this.data=[],this.options=[],this.labels=["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],this.datasets=[[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:l("--cui-warning"),pointHoverBorderColor:l("--cui-warning"),data:[65,59,84,84,51,55,40]}],[{label:"My Second dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:l("--cui-info"),pointHoverBorderColor:l("--cui-info"),data:[1,18,9,17,34,22,11]}],[{label:"My Third dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:l("--cui-warning"),pointHoverBorderColor:l("--cui-warning"),data:[78,81,80,45,34,12,40],fill:!0}],[{label:"My Fourth dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.7}]],this.optionsDefault={plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}}ngOnInit(){this.setData()}ngAfterContentInit(){this.changeDetectorRef.detectChanges()}setData(){for(let a=0;a<4;a++)this.data[a]={labels:a<3?this.labels.slice(0,7):this.labels,datasets:this.datasets[a]};this.setOptions()}setOptions(){for(let a=0;a<4;a++){const s=JSON.parse(JSON.stringify(this.optionsDefault));switch(a){case 0:this.options.push(s);break;case 1:s.scales.y.min=-9,s.scales.y.max=39,this.options.push(s);break;case 2:s.scales.x={display:!1},s.scales.y={display:!1},s.elements.line.borderWidth=2,s.elements.point.radius=0,this.options.push(s);break;case 3:s.scales.x.grid={display:!1,drawTicks:!1},s.scales.x.grid={display:!1,drawTicks:!1,drawBorder:!1},s.scales.y.min=void 0,s.scales.y.max=void 0,s.elements={},this.options.push(s)}}}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(t.sBO))};static#a=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-widgets-dropdown"]],inputs:{userData:"userData"},decls:14,vars:2,consts:[["sm","6","xl","4"],["color","danger",1,"mb-4",3,"title"],["cTemplateId","widgetValueTemplate"],["cTemplateId","widgetChartTemplate"],["color","warning","title","No of Credits",1,"mb-4"],["color","info",1,"mb-4",3,"title"],["cTemplateId","widgetActionTemplate"],[1,"fs-6","fw-normal"],["cIcon","","name","cilArrowTop"],["height","70","type","bar",1,"mt-3","mx-3",3,"data","options"],["height","70",1,"mt-3","mx-3",3,"data","options","type"],["alignment","end","variant","btn-group"],["cButton","","cDropdownToggle","","color","transparent",1,"p-0",3,"caret"],["cIcon","","name","cilOptions",1,"text-high-emphasis-inverse"],["cDropdownMenu",""],["routerLink","./","cDropdownItem",""],["routerLink","./","cDropdownItem","",3,"disabled"],["height","70","type","line",1,"mt-3","mx-3",3,"data","options"]],template:function(s,o){1&s&&(t.TgZ(0,"c-row")(1,"c-col",0)(2,"c-widget-stat-a",1),t.YNc(3,J,6,2,"ng-template",2)(4,A,1,2,"ng-template",3),t.qZA()(),t.TgZ(5,"c-col",0)(6,"c-widget-stat-a",4),t.YNc(7,M,6,2,"ng-template",2)(8,_,1,3,"ng-template",3),t.qZA()(),t.TgZ(9,"c-col",0)(10,"c-widget-stat-a",5),t.YNc(11,k,9,2,"ng-template",2)(12,Z,16,2,"ng-template",6)(13,U,1,2,"ng-template",3),t.qZA()()()),2&s&&(t.xp6(2),t.Q6J("title","Wallet Balance"),t.xp6(8),t.Q6J("title","No of Debits"))},dependencies:[m.rH,n.Yp0,n.iok,n.Eqf,b.ar,n.JOL,n.HH4,n.bQk,n.RUe,n.y1J,n.Hq3,y.d]})}return e})();const B=[{path:"",component:(()=>{class e{constructor(a,s){this.chartsData=a,this.dashboardService=s,this.users=[{name:"Yiorgos Avraamu",state:"New",registered:"Jan 1, 2021",country:"Us",usage:50,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Mastercard",activity:"10 sec ago",avatar:"./assets/img/avatars/1.jpg",status:"success",color:"success"},{name:"Avram Tarasios",state:"Recurring ",registered:"Jan 1, 2021",country:"Br",usage:10,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Visa",activity:"5 minutes ago",avatar:"./assets/img/avatars/2.jpg",status:"danger",color:"info"},{name:"Quintin Ed",state:"New",registered:"Jan 1, 2021",country:"In",usage:74,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Stripe",activity:"1 hour ago",avatar:"./assets/img/avatars/3.jpg",status:"warning",color:"warning"},{name:"En\xe9as Kwadwo",state:"Sleep",registered:"Jan 1, 2021",country:"Fr",usage:98,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Paypal",activity:"Last month",avatar:"./assets/img/avatars/4.jpg",status:"secondary",color:"danger"},{name:"Agapetus Tade\xe1\u0161",state:"New",registered:"Jan 1, 2021",country:"Es",usage:22,period:"Jun 11, 2021 - Jul 10, 2021",payment:"ApplePay",activity:"Last week",avatar:"./assets/img/avatars/5.jpg",status:"success",color:"primary"},{name:"Friderik D\xe1vid",state:"New",registered:"Jan 1, 2021",country:"Pl",usage:43,period:"Jun 11, 2021 - Jul 10, 2021",payment:"Amex",activity:"Yesterday",avatar:"./assets/img/avatars/6.jpg",status:"info",color:"dark"}],this.mainChart={},this.chart=[],this.trafficRadioGroup=new h.nJ({trafficRadio:new h.p4("Month")})}ngOnInit(){this.initCharts(),this.getDashboardData()}initCharts(){this.mainChart=this.chartsData.mainChart}setTrafficPeriod(a){this.trafficRadioGroup.setValue({trafficRadio:a}),this.chartsData.initMainChart(a),this.initCharts()}getDashboardData(){this.dashboardService.filterTransactions().subscribe(a=>{this.userData=a,console.log(a)})}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(D),t.Y36(T))};static#a=this.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"userData"]],template:function(s,o){1&s&&t._UZ(0,"app-widgets-dropdown",0),2&s&&t.Q6J("userData",o.userData)},dependencies:[S],styles:["[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:x-small}"]})}return e})(),data:{title:$localize`Dashboard`}}];let O=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#a=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(B),m.Bz]})}return e})();var I=i(7663);let F=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#a=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[O,n.dTQ,n.dGk,b.QX,n.P4_,w.ez,n.zE6,n.qek,h.UX,n.hJ1,n.ejP,n.hJ1,n.ga2,y.N,n.FxY,n.U$I,I.H]})}return e})()}}]);