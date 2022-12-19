"use strict";(self.webpackChunkngdemos=self.webpackChunkngdemos||[]).push([[8898],{8898:(z,C,r)=>{r.r(C),r.d(C,{WeatherDashboardComponent:()=>u,WeatherForecastModule:()=>c});var o=r(6895),I=r(1516),e=r(4650);class p{constructor(){this.headingStart="Weather in"}ngOnInit(){}}function w(a,t){if(1&a&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&a){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(n.cast.clouds.all)}}function S(a,t){if(1&a&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&a){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("",n.cast.rain["3h"],"\xa0")}}function _(a,t){if(1&a&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&a){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("",n.cast.wind.main,"\xa0")}}p.\u0275fac=function(t){return new(t||p)},p.\u0275cmp=e.\u0275\u0275defineComponent({type:p,selectors:[["wc-weather-forecast"]],inputs:{headingStart:"headingStart",weather:"weather",date:"date"},decls:5,vars:7,template:function(t,n){1&t&&(e.\u0275\u0275text(0),e.\u0275\u0275elementStart(1,"b"),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"date")),2&t&&(e.\u0275\u0275textInterpolate1("",n.headingStart,"\xa0\n"),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2("",null==n.weather?null:n.weather.city.name,", ",null==n.weather?null:n.weather.city.country,""),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" \xa0",e.\u0275\u0275pipeBind2(4,4,n.date,"shortDate"),""))},dependencies:[o.uU],changeDetection:0});class l{constructor(){}ngOnInit(){}}l.\u0275fac=function(t){return new(t||l)},l.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["wc-weather-forecast-details"]],inputs:{cast:"cast"},decls:18,vars:14,consts:[[1,"temp"],[4,"ngIf"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"small"),e.\u0275\u0275text(1," min\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"span",0),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"number"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(5,"\u2103 \xa0-\xa0\n"),e.\u0275\u0275elementStart(6,"small"),e.\u0275\u0275text(7," max\n"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"span",0),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"number"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(11,"\u2103\n"),e.\u0275\u0275template(12,w,2,1,"span",1),e.\u0275\u0275text(13,"\xa0\n"),e.\u0275\u0275template(14,S,2,1,"span",1),e.\u0275\u0275template(15,_,2,1,"span",1),e.\u0275\u0275text(16),e.\u0275\u0275pipe(17,"date")),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(4,6,n.cast.main.temp_min,".2-2")),e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(10,9,n.cast.main.temp_max,".2-2")),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",n.cast.clouds&&n.cast.clouds.all>0),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",n.cast.rain),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n.cast.wind),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("\n",e.\u0275\u0275pipeBind1(17,12,n.cast.dt_txt),""))},dependencies:[o.O5,o.JJ,o.uU],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}"],changeDetection:0});class d{constructor(){}ngOnInit(){}}function O(a,t){if(1&a&&(e.\u0275\u0275elementStart(0,"li"),e.\u0275\u0275element(1,"img",1),e.\u0275\u0275elementStart(2,"span",2),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"number"),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(5,"\u2103 "),e.\u0275\u0275element(6,"span",3),e.\u0275\u0275elementStart(7,"div",4),e.\u0275\u0275text(8),e.\u0275\u0275pipe(9,"date"),e.\u0275\u0275elementEnd()()),2&a){const n=t.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275propertyInterpolate1("src","assets/weather-icons/",n.weather[0].icon,".png",e.\u0275\u0275sanitizeUrl),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(4,3,n.main.temp,".2-2")),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(9,6,n.dt_txt,"hh:mm a"))}}d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=e.\u0275\u0275defineComponent({type:d,selectors:[["wc-weather-forecast-city"]],inputs:{cast:"cast"},decls:6,vars:4,consts:[["width","50","height","50",3,"src"],[1,"temp-current"],[1,"temp-status"]],template:function(t,n){1&t&&(e.\u0275\u0275element(0,"img",0),e.\u0275\u0275elementStart(1,"span",1),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(3,"\u2103\n"),e.\u0275\u0275elementStart(4,"b",2),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275propertyInterpolate1("src","assets/weather-icons/",n.cast.weather[0].icon,".png",e.\u0275\u0275sanitizeUrl),e.\u0275\u0275attribute("alt",n.cast.weather[0].main),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(n.cast.main.temp),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1("- ",n.cast.weather[0].main,""))},styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}.temp-current[_ngcontent-%COMP%]{font-size:25px}.temp-status[_ngcontent-%COMP%]{font-size:22px}.weather-img[_ngcontent-%COMP%]{top:10px;position:relative}"],changeDetection:0});class m{constructor(){this.startIndex=0,this.endIndex=0,this.history=[]}set start(t){this.startIndex=t,this.endIndex=isNaN(t)?0:t+7}ngOnInit(){}}m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=e.\u0275\u0275defineComponent({type:m,selectors:[["wc-weather-forecast-history"]],inputs:{history:"history",start:"start"},decls:5,vars:5,consts:[[4,"ngFor","ngForOf"],["alt","Weather London , GB",1,"weather-widget__img",3,"src"],[1,"temp-current-small"],[1,"spacer"],[1,"custom-chip"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"ul")(1,"h3"),e.\u0275\u0275text(2,"Details with 3hrs difference"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,O,10,9,"li",0),e.\u0275\u0275pipe(4,"slice"),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind3(4,1,n.history,n.startIndex,n.endIndex)))},dependencies:[o.sg,o.OU,o.JJ,o.uU],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}.temp-current-small[_ngcontent-%COMP%]{font-size:25px}.chip-right[_ngcontent-%COMP%]{float:right}ul[_ngcontent-%COMP%]{list-style:none;padding:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.custom-chip[_ngcontent-%COMP%]{transition:box-shadow .28s cubic-bezier(.4,0,.2,1);display:inline-flex;padding:5px 8px;border-radius:24px;align-items:center;cursor:default;background-color:#e0e0e0;color:#000000de}"]});var F=r(8987),y=r(4006),v=r(529);class s{constructor(t){this.httpClient=t}getWeatherData(t,n){return this.httpClient.get("https://api.openweathermap.org/data/2.5/forecast?appid=7ec24178bacbeb8537ee4d6dbe6724db",{params:{q:`${t},${n}`,units:"metric"}})}}s.\u0275fac=function(t){return new(t||s)(e.\u0275\u0275inject(v.eN))},s.\u0275prov=e.\u0275\u0275defineInjectable({token:s,factory:s.\u0275fac,providedIn:"root"});var D=r(1135),E=r(9646),P=r(8505);class i{constructor(t){this.httpClient=t,this.ipData$=new D.X(null)}ipDataGetter(){return this.ipData$.asObservable()}ipDataSetter(t){this.ipData$.next(t)}getIPData(){return this.ipData?(0,E.of)(this.ipData):this.httpClient.jsonp("https://api.ipdata.co/1.1.1.1?api-key=150731c1daac573655cad56e9fce2f193d9e5f66a0954e400b465277","callback").pipe((0,P.b)(t=>{(!t.city||"Ghatkopar"===t.city)&&(t.city="Mumbai",t.country_code="IN"),this.ipData$.next(t),this.ipData=t}))}}i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275inject(v.eN))},i.\u0275prov=e.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"});var T=r(4850),h=r(7084),N=r(6338);function j(a,t){if(1&a){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"mat-expansion-panel",6),e.\u0275\u0275listener("opened",function(){e.\u0275\u0275restoreView(n);const g=e.\u0275\u0275nextContext().index,f=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(f.selectAccordion(g))}),e.\u0275\u0275elementStart(1,"mat-expansion-panel-header")(2,"mat-panel-title",7),e.\u0275\u0275element(3,"wc-weather-forecast-city",8),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"mat-panel-description",9),e.\u0275\u0275element(5,"wc-weather-forecast-details",8),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(6,"mat-divider")(7,"wc-weather-forecast-history",10),e.\u0275\u0275elementEnd()}if(2&a){const n=e.\u0275\u0275nextContext(),x=n.index,g=n.$implicit,f=e.\u0275\u0275nextContext();e.\u0275\u0275property("expanded",f.selected==x),e.\u0275\u0275advance(3),e.\u0275\u0275property("cast",g),e.\u0275\u0275advance(2),e.\u0275\u0275property("cast",g),e.\u0275\u0275advance(2),e.\u0275\u0275property("history",null==f.weatherCast?null:f.weatherCast.list)("start",x)}}function B(a,t){if(1&a&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,j,8,5,"mat-expansion-panel",5),e.\u0275\u0275elementContainerEnd()),2&a){const n=t.index;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",n%8==0)}}class u{constructor(t,n){this.weatherService=t,this.locationService=n,this.headingStart="Weather Forecast in",this.date=new Date,this.selected=0}getWeatherData(t){this.weatherService.getWeatherData("MUMBAI","IN").subscribe(n=>{this.weatherCast=n})}selectAccordion(t){this.selected=t}ngOnInit(){this.getWeatherData(this.locationData)}}u.\u0275fac=function(t){return new(t||u)(e.\u0275\u0275directiveInject(s),e.\u0275\u0275directiveInject(i))},u.\u0275cmp=e.\u0275\u0275defineComponent({type:u,selectors:[["wc-weather-dashboard"]],inputs:{headingStart:"headingStart"},decls:5,vars:4,consts:[[1,"container"],[1,"example-headers-align"],["mat-subheader",""],[3,"weather","headingStart","date"],[4,"ngFor","ngForOf"],["hideToggle","false",3,"expanded","opened",4,"ngIf"],["hideToggle","false",3,"expanded","opened"],[1,"temp-title"],[3,"cast"],[1,"description"],[3,"history","start"]],template:function(t,n){1&t&&(e.\u0275\u0275elementStart(0,"div",0)(1,"mat-accordion",1)(2,"h1",2),e.\u0275\u0275element(3,"wc-weather-forecast",3),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(4,B,2,1,"ng-container",4),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275advance(3),e.\u0275\u0275property("weather",n.weatherCast)("headingStart",n.headingStart)("date",n.date),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==n.weatherCast?null:n.weatherCast.list))},dependencies:function(){return[o.sg,o.O5,T.d,h.pp,h.ib,h.yz,h.yK,h.u4,N.gs,p,l,d,m]},styles:[".dashboar-tab-group[_ngcontent-%COMP%]{border:1px solid #e8e8e8}.dashboar-tab-content[_ngcontent-%COMP%]{padding:16px}.temp[_ngcontent-%COMP%]{font-size:20px}.temp-title[_ngcontent-%COMP%]{flex-direction:row;line-height:50px}.description[_ngcontent-%COMP%]{line-height:50px}.temp-status[_ngcontent-%COMP%]{font-size:25px}"]});class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=e.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=e.\u0275\u0275defineInjector({imports:[o.ez,I.PW,F.S,y.u5,y.UX]})}}]);