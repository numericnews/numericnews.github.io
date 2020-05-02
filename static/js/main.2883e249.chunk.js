(this.webpackJsonpcovid19italia=this.webpackJsonpcovid19italia||[]).push([[0],{129:function(e,t,a){"use strict";(function(e){var n=a(77),i=a(53),r=a(46),o=a(80),l=a(79),s=a(0),c=a.n(s),d=a(130);e.appVersion=d.version;var u=function(t){Object(o.a)(s,t);var a=Object(l.a)(s);function s(e){var t;return Object(i.a)(this,s),(t=a.call(this,e)).state={loading:!0,isLatestVersion:!1,refreshCacheAndReload:function(){console.log("Clearing cache and hard reloading...");var e=window.caches;e&&e.keys().then((function(t){var a,i=Object(n.a)(t);try{for(i.s();!(a=i.n()).done;){var r=a.value;e.delete(r)}}catch(o){i.e(o)}finally{i.f()}})),window.location.reload(!0)}},t}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this;fetch("/meta.json").then((function(e){return e.json()})).then((function(a){var n=a.version;(function(e,t){for(var a=e.split(/\./g),n=t.split(/\./g);a.length||n.length;){var i=Number(a.shift()),r=Number(n.shift());if(i!==r)return i>r||isNaN(r)}return!1})(n,e.appVersion)?(console.log("We have a new version - ".concat(n,". Should force refresh")),t.setState({loading:!1,isLatestVersion:!1})):(console.log("You already have the latest version - ".concat(n,". No cache refresh needed.")),t.setState({loading:!1,isLatestVersion:!0}))}))}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.isLatestVersion,n=e.refreshCacheAndReload;return this.props.children({loading:t,isLatestVersion:a,refreshCacheAndReload:n})}}]),s}(c.a.Component);t.a=u}).call(this,a(83))},130:function(e){e.exports=JSON.parse('{"homepage":"https://numericnews.github.io","name":"covid19italia","version":"0.1.11","private":true,"dependencies":{"@material-ui/core":"^4.9.9","@material-ui/icons":"^4.9.1","@material-ui/lab":"^4.0.0-alpha.48","@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","covid-web":"git+ssh://git@gitlab.com/covid-19-italia/plot.git#v1.0.22","dygraphs":"https://github.com/Alpt/dygraphs.git#v0.0.6","google-charts":"^2.0.0","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.4.1","react-swipeable-views":"^0.13.9"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","generate-build-version":"node generate-build-version","prebuild":"npm run generate-build-version"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"serve":"^11.3.0"}}')},144:function(e,t,a){e.exports=a(183)},149:function(e,t,a){},150:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),o=a.n(r),l=(a(149),a(150),a(13)),s=a.n(l),c=a(29),d=a(30),u=a(86),m=a(238),p=a(236),h=a(235),v=a(245),g=a(128),f=a.n(g),b=a(233),w=a(229),E=a(17),y=a(246),x=a(237),k=a(243),C=a(239),j=a(241),D=a(119),z=a.n(D),P=a(123),O=a.n(P),L=i.a.createElement(z.a,{fontSize:"small"}),T=i.a.createElement(O.a,{fontSize:"small"}),S=Object(w.a)((function(e){return{input:{"&::placeholder":{color:"#FFF"}}}}));function R(e){var t=S();return i.a.createElement(j.a,{multiple:!0,size:"small",disablePortal:!0,options:e.lists,disableCloseOnSelect:!0,getOptionLabel:function(e){return e},value:e.values,onChange:function(t,a){e.setvalue(a,e.type)},style:{background:"#FFF",padding:20},renderOption:function(e,t){var a=t.selected;return i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,{icon:L,checkedIcon:T,style:{marginRight:8},checked:a}),e)},renderInput:function(a){return i.a.createElement(C.a,Object.assign({InputProps:{classes:{input:t.input}},style:{color:"#FFF"}},a,{variant:"outlined",label:"",placeholder:e.type}))},id:e.id+Math.random()})}var I=a(36),F=a(131),G=a(77),N=a(53),W=a(46),M=a(80),V=a(79),B=a(132),A=a(42),H=a(43),q=a(41),_=a(127),U=a(23),Y=a(240),J=a(242),Q=a(234),K=a(58),Z=a(27),$=a(2),X={},ee=i.a.createElement(b.a,{component:"p"},"Dettagli sui calcoli: il growth rate in data t e' stimato usando la formula: ",i.a.createElement("br",null)," r(t) = (I(t)-I(t-1)) / (I(t-1)-I(t-2)) = v(t) / v(t-1)",i.a.createElement("br",null),"dove I(t) e' il numero totale dei casi al tempo t, v(t) e' la velocita' al tempo t. Per una motivazione dell'uso di tale formula, vedi ",i.a.createElement("a",{href:"http://katolaz.net/covid-2019/growth.html"},"Epidemic 101"),i.a.createElement("br",null),"Da tale stima, la formula per il calcolo del numero di casi al tempo t e': ",i.a.createElement("img",{src:"/eq_growth.svg",style:{height:"50%",width:"auto"},alt:"I(t)=r**t*I(0)"}),", dove I(0) e' il numero di infetti iniziali.",i.a.createElement("br",null),"Nota: questa formula e' una forte semplificazione del reale fenomeno dell'epidemia corona virus, ma essendo l'epidemia di carattere esponenziale, rende comunque una idea di come l'epidemia potrebbe evolvere senza misure di contenimento, di lock-down e vaccinazione.",i.a.createElement("br",null),"Gli scienziati stanno ancora studiando le dinamiche dell'epidemia Coronavirus. Tuttavia, un growth rate maggiore di uno implica un altissimo valore di crescita. Per approfondire sull'exponential growth rate vedi"," ",i.a.createElement("a",{href:"http://katolaz.net/covid-2019/growth.html"},"Epidemic 101"),","," ",i.a.createElement("a",{href:"https://www.youtube.com/watch?v=Kas0tIxDvrg&t=81s"},"3Blue1Brown Youtube"),","," ",i.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Basic_reproduction_number"},"R0 (wikipedia)"),","," ",i.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/pubmed/32007643"},"Zhao, Lin, et al.")," ",'("The early outbreak data largely follows the exponential growth. [We estimated a] mean R0 from 2.24 to 3.58").',i.a.createElement("br",null),"Ci sono formule e modelli molto piu' rifiniti, precisi e validi, che tengono conto delle diverse possibili fasi ed evoluzioni della malattia nel singolo individuo, tuttavia la dinamica di base dell'exponential growth e' la stessa.");function te(e){var t=e.children,a=e.value,n=e.index,r=Object(B.a)(e,["children","value","index"]);return i.a.createElement(b.a,Object.assign({component:"div",role:"tabpanel",hidden:!a||a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r,{style:{height:"100%"}}),a===n&&i.a.createElement(Y.a,{style:{height:"50%"},p:3},t))}function ae(e,t){var a=t.findIndex((function(t,a){return a>0&&t[0].getTime()>=e.getTime()}));return a>=0?[t[0]].concat(t.slice(a)):t}var ne=function(e){Object(M.a)(a,e);var t=Object(V.a)(a);function a(e){var n;return Object(N.a)(this,a),(n=t.call(this,e)).state={date:(new Date).toLocaleString(),projPlotStart:null,activeStep:0,value:1,open:!1,startDate:Z().subtract(1,"month").toDate()},n}return Object(W.a)(a,[{key:"getSelectedItems",value:function(){return"Nazione"==this.props.types?["Italia"]:"denominazione_regione"===this.props.field?this.props.regionValues:this.props.provinceValues}},{key:"componentWillMount",value:function(){var e=this;A.a.load((function(){e._draw(e.props.field,e.getSelectedItems())}))}},{key:"onOrientationChange",value:function(e){var t=this;window.addEventListener("resize",(function e(){t.setState({innerWidth:window.innerWidth}),window.removeEventListener("resize",e)}))}},{key:"componentDidMount",value:function(){var e=this.onOrientationChange.bind(this);window.addEventListener("orientationchange",e),this.setState({onOrientationChange:e})}},{key:"componentWillUnmount",value:function(){this.state.onOrientationChange&&window.removeEventListener("orientationchange",this.state.onOrientationChange)}},{key:"componentDidUpdate",value:function(e,t){if(t.startDate==this.state.startDate&&e.types===this.props.types&&e.field===this.props.field&&U.isEqual(e.regionValues,this.props.regionValues)&&U.isEqual(e.provinceValues,this.props.provinceValues)){if(t.innerWidth!=this.state.innerWidth)for(var a=0,n=Object.keys(X);a<n.length;a++){var i=n[a],r=X[i];U.isObject(r)&&"resize"in r&&U.isFunction(r.resize)&&r.resize()}}else{var o=this.getSelectedItems();if(!o.length)return;this._draw(this.props.field,o)}}},{key:"darkenColor",value:function(e){var t=H.a.toRGB_(e);return t.r=Math.floor((255+t.r)/2),t.g=Math.floor((255+t.g)/2),t.b=Math.floor((255+t.b)/2),"rgb("+t.r+","+t.g+","+t.b+")"}},{key:"barChartPlotter",value:function(e){var t=e.drawingContext,a=e.points,n=e.dygraph.toDomYCoord(0);t.fillStyle=this.darkenColor(e.color);for(var i=1/0,r=1;r<a.length;r++){var o=a[r].canvasx-a[r-1].canvasx;o<i&&(i=o)}for(var l=Math.floor(2/3*i),s=0;s<a.length;s++){var c=a[s],d=c.canvasx;t.fillRect(d-l/2,c.canvasy,l,n-c.canvasy),t.strokeRect(d-l/2,c.canvasy,l,n-c.canvasy)}}},{key:"legendFormatter",value:function(e){var t=e.dygraph,a=t?t.getLabels():[];if(null===e.x)return e.series.map((function(e){return"<div>"+e.dashHTML+"</div><div>"+e.labelHTML+"</div>"}));var n=new Date;n.setSeconds(0),n.setMilliseconds(0);var i="<div>"+this.getLabels()[0]+": "+(e.xHTML||Object($.q)(n))+"</div>";return e.series.forEach((function(e,n){if(e.isVisible){var r=e.labelHTML+(e.yHTML?": "+e.yHTML+"&nbsp;":": ------");e.isHighlighted&&(r="<b>"+r+"</b>");var o=n>0&&t?t.getOption("strokePattern",a[n+1]):[],l=(!o||o.length<=1?"solid ":"dashed ")+(e.color||"white")+" 3px";i+='<div style="border-bottom: '.concat(l,'">')+r+"</div>"}})),i}},{key:"drawGrowthRate",value:function(){var e=Object(c.a)(s.a.mark((function e(t,a){var n,i,r,o,l,c,d=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(d.length>2&&void 0!==d[2])||d[2],e.next=3,Object(I.init)();case 3:return e.next=5,Object(q.generalPlotGrowthRate)(t,a);case 5:(i=e.sent).data=ae(this.state.startDate,i.data),X.drawGrowthRatePlot=i,r=Object(K.smallYBounds)(i.data.slice(1),5),o=i.data[i.data.length-1][0],l=i.data[0].map((function(e,t){return[e.label].concat([i.data[i.data.length-1][t]])})).slice(1,i.data[0].length-1),this.setState({lastGrowthRates:{data:l,date:o}}),i.gviz=A.a.api.visualization.arrayToDataTable(i.data),c={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"growthRateLegendDiv",colorValue:1,digitsAfterDecimal:4,series:i.options,valueRange:r},n&&(X.drawGrowthRateGraph=new H.a(document.getElementById("growthRatePlotDiv"),i.gviz,c),X.drawGrowthRateGraph.resize());case 15:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"annotationOnHighlight",value:function(e,t,a,n,i,r){var o,l=[],s=Object(G.a)(n);try{for(s.s();!(o=s.n()).done;){var c=o.value,d=""+c.yval,u=Z(a).format("DD MMM"),m=Math.max(d.length,u.length),p="".concat(d,"<br>").concat(u),h=m/1.5;l.push({series:c.name,xval:a,width:18*h,height:46,tickHeight:4,html:p})}}catch(v){s.e(v)}finally{s.f()}e.setAnnotations(l)}},{key:"annotationOnPointClick",value:function(e,t,a){return this.annotationOnHighlight(e,t,a.xval,[a])}},{key:"drawChart",value:function(){var e=Object(c.a)(s.a.mark((function e(t,a){var n,i,r,o,l,c,d,u,m=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(e){return e.map((function(e,t){return e.filter((function(e,t){return 0==t||t%2==1}))}))},i=function(e){return e.map((function(e,t){return e.filter((function(e,t){return t%2==0}))}))},n=!(m.length>2&&void 0!==m[2])||m[2],e.next=5,Object(I.init)();case 5:return e.next=7,Object(q.generalPlot)(t,a);case 7:(o=e.sent).data=ae(this.state.startDate,o.data),X.drawChartPlot=o,(l=Object.assign({},o)).data=r(o.data),l.gviz=A.a.api.visualization.arrayToDataTable(l.data),c={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"totaleLegendDiv",colorValue:1,series:Object.assign({},l.options)},(d=Object.assign({},o)).data=i(o.data),d.gviz=A.a.api.visualization.arrayToDataTable(d.data),u={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"velLegendDiv",colorValue:1,series:Object.assign({},d.options)},n&&(X.drawChartGraphVel&&X.drawChartGraphVel.destroy(),X.drawChartGraphVel=new H.a(document.getElementById("velPlotDiv"),d.gviz,u),X.drawChartGraphVel.ready((function(){X.drawChartGraphVel.resize()})),X.drawChartGraphTotale&&X.drawChartGraphTotale.destroy(),X.drawChartGraphTotale=new H.a(document.getElementById("totalePlotDiv"),l.gviz,c),X.drawChartGraphTotale.ready((function(){X.drawChartGraphTotale.resize()})));case 19:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"calculateProjectionChart",value:function(){var e=Object(c.a)(s.a.mark((function e(t,a){var n,i,r=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>2&&void 0!==r[2]?r[2]:null,e.next=3,Object(I.init)();case 3:return e.next=5,Object(q.projectGeneralPlot)(t,a,n);case 5:return i=e.sent,this.setState({projPlotStart:{gr:i.gr,date:i.startDate,series:i.series}}),i.gviz=A.a.api.visualization.arrayToDataTable(i.data),e.abrupt("return",{plot:i,safeMax:i.safeMax});case 9:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"drawProjectionChart",value:function(){var e=Object(c.a)(s.a.mark((function e(t,a){var n,i,r,o,l,d,u=this,m=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.length>2&&void 0!==m[2]?m[2]:null,e.next=3,this.calculateProjectionChart(t,a,n);case 3:i=e.sent,r=i.plot,o=i.safeMax,X.projectionPlot=r,l={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"projLegendDiv",colorValue:1,series:r.options,valueRange:[0,o]},X.drawProjectionChartGraph&&X.drawProjectionChartGraph.destroy(),X.drawProjectionChartGraph=new H.a(document.getElementById("projPlotDiv"),r.gviz,l),X.drawProjectionChartGraph.resize(),(d=X.drawProjectionChartGraph).ready((function(){d.updateOptions({pointClickRadius:50,pointClickCallback:function(){var e=Object(c.a)(s.a.mark((function e(n,i){var r,o,l,c,m,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.idx,o=X.projectionPlot.data,(l=o[r+1][0]).getTime()>X.projectionPlot.maxDate.getTime()&&(l=X.projectionPlot.maxDate),e.next=6,u.calculateProjectionChart(t,a,l);case 6:c=e.sent,m=c.plot,p=c.safeMax,d.updateOptions({file:m.gviz,valueRange:[0,p]});case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()})}));case 13:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"drawTamponiChart",value:function(){var e=Object(c.a)(s.a.mark((function e(t,a){var n,i,r,o,l,c,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.testsPlot)(t,a,0);case 2:for((n=e.sent).data=ae(this.state.startDate,n.data),i=U.cloneDeep(n),this.setState({firstCasiTestati:n.firstCasiTestatiMap}),r=1;r<n.data.length;r++)for(o=1;2*o<n.data[r].length;o++)n.data[r][2*o]=null,i.data[r][2*(o-1)+1]=null;l=Object(K.smallYBounds)(i.data.slice(1),1),n.gviz=A.a.api.visualization.arrayToDataTable(n.data),i.gviz=A.a.api.visualization.arrayToDataTable(i.data),c={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"tampTLegendDiv",colorValue:1,series:n.options},X.drawTampTChartGraph=new H.a(document.getElementById("tampTPlotDiv"),n.gviz,c),X.drawTampTChartGraph.resize(),(d=U.clone(c)).labelsDiv="tampPLegendDiv",d.series=U.clone(c.series),d.valueRange=[0,Math.min(100,l[1])],X.drawTampPChartGraph=new H.a(document.getElementById("tampPPlotDiv"),i.gviz,d),X.drawTampPChartGraph.resize();case 19:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"_draw",value:function(){var e=Object(c.a)(s.a.mark((function e(t,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.state.value,e.next=1===e.t0?3:2===e.t0?6:3===e.t0?9:4===e.t0?12:15;break;case 3:return e.next=5,this.drawChart(t,a);case 5:return e.abrupt("break",16);case 6:return e.next=8,this.drawTamponiChart(t,a);case 8:return e.abrupt("break",16);case 9:return e.next=11,this.drawGrowthRate(t,a);case 11:return e.abrupt("break",16);case 12:return e.next=14,this.drawProjectionChart(t,a);case 14:case 15:return e.abrupt("break",16);case 16:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var a=this;if(0!=t){var n=this.props.field,i=this.getSelectedItems();this.setState({value:t},(function(){a._draw(n,i)}))}else this.props.handleDrawerToggle()}},{key:"getLabel",value:function(){this.state.value;return"Approfondimento"}},{key:"getContent",value:function(e){var t=this,a=this.state,n=a.lastGrowthRates,r=a.value,o=a.projPlotStart,l=a.firstCasiTestati,s=a.startDate,c=Z().subtract(1,"month").toDate(),d=!s||s.getTime()>0?i.a.createElement(b.a,{component:"p"},i.a.createElement("button",{onClick:function(){return t.setState({startDate:new Date(0)})}},"Clicca per vedere anche i dati prima del ",s.toLocaleString())):i.a.createElement(b.a,{component:"p"},i.a.createElement("button",{onClick:function(){return t.setState({startDate:c})}},"Clicca per vedere i dati solo a partire dal ",c.toLocaleString())),u=n,m=l&&new Date(Math.max.apply(Math,Object(F.a)(l.values()))),p=m?m.toLocaleString():"[non disponibile]",h=i.a.createElement("div",{className:"explanation"},i.a.createElement(b.a,{component:"p"},i.a.createElement("br",null),"In questi due grafi viene rappresentata la percentuale di tamponi risultati positivi e il numero totale di tamponi effettuati in un dato giorno.",i.a.createElement("br",null),"Piu' il numero di tamponi e' alto, piu' il numero totale dei casi e i numeri derivati da esso (velocita', growth rate) mostrati negli altri grafi sono indicativi.",i.a.createElement("br",null),d,i.a.createElement("br",null),"Dettagli: a partire da giorno ",p,', il numero dei tamponi e\' sostituito dal numero di "casi testati". Questo perche\' i tamponi vengono fatti piu\' volte ad una stessa persona. "Casi testati", invece, non conta i tamponi duplicati, quindi una persona viene conteggiata una volta sola.',i.a.createElement("br",null),"Prima di giorno ",p,", questo parametro non era disponibile. Per piu' informazioni, vedi  ",i.a.createElement("a",{href:"https://www.youtrend.it/2020/03/25/coronavirus-il-rebus-dei-tamponi-multipli/"},"Lorenzo Ruffino"),".",i.a.createElement("br",null),"Nota: non e' disponibile il numero di tamponi per provincia, ma solo per regione.",i.a.createElement("br",null),'Nota: nei primi giorni di cambio da "tamponi" a "casi testati", ci sono state delle irregolarita\' nei dati di Lombardia, Lazio e Campania. Piu\' precisamente, giorno 20 e 21 aprile, vedi ',i.a.createElement("a",{href:"https://github.com/pcm-dpc/COVID-19/blob/master/note/dpc-covid19-ita-note-it.csv"},"Note DPC"),".")),v=!e||"velPlotDiv"==e;return i.a.createElement(i.a.Fragment,null,function(){switch(r){case 1:return i.a.createElement("div",{className:"explanation"},i.a.createElement("br",null),"totalePlotDiv"==e?i.a.createElement(b.a,{component:"p"},'Totale casi: sono tutte le persone che sono state certificate essere infette da coronavirus. Questo numero e\' uguale alla somma "persone attualmente positive" + "persone guarite" + "persone decedute"'):i.a.createElement(b.a,{component:"p"},"Velocita'. Se un giorno la velocita' e' 10, vuol dire che dal giorno precedente ci sono stati 10 casi in piu'."),i.a.createElement("br",null),d);case 2:return h;case 3:return i.a.createElement("div",{className:"explanation"},i.a.createElement(b.a,{component:"p"},"In data ",(null===u||void 0===u?void 0:u.date)?null===u||void 0===u?void 0:u.date.toLocaleString():"[non-disponibile]",", i growth rate sono:",i.a.createElement("br",null),i.a.createElement("br",null),(null===u||void 0===u?void 0:u.data)?u.data.map((function(e,t){return i.a.createElement("span",{key:t},e.map((function(e){return U.isNumber(e)?e.toFixed(4):e})).join(" "),i.a.createElement("br",null))})):"[non disponibile]"),i.a.createElement("br",null),i.a.createElement(b.a,{component:"p"},"Growth rate: rapporto tra la velocita' di un giorno e quella del giorno precedente. E' una quantita' importante perche' e' una stima della crescita della velocita'. Se il growth rate e' maggiore di 1, allora la velocita' sta' crescendo. Se e' minore, sta' diminuendo. L'epidemia finisce solo se la velocita' scende e rimane a zero."),i.a.createElement("br",null),d,i.a.createElement("br",null),i.a.createElement(b.a,{component:"p"},"La crescita del numero di casi in un'epidemia come il Coronavirus e' esponenziale. In una crescita esponenziale anche valori poco piu' alti (growth rate > 1) implicano un'altissima crescita. Ad esempio, se ci sono 100 infetti, con growth rate 1.22, solo dopo 30 giorni ci saranno 39000 infetti."),i.a.createElement("br",null),ee);case 4:return i.a.createElement("div",{className:"explanation"},i.a.createElement(b.a,{component:"p"},"In questo grafo, viene usato il growth rate per mostrare ",i.a.createElement("b",null,"a grandi linee")," ","come procederebbe l'epidemia se non venissero fatte delle misure di contenimento e lock-down. Senza misure di prevenzione, l'andamento dei nuovi casi sarebbe esponenziale."),o?i.a.createElement(b.a,{component:"p"},"L'andamento ipotetico graficato (linee tratteggiate) e' a partire da giorno ",o.date.toLocaleString(),", dove i growth rate erano ",o.gr.map((function(e){return e.toFixed(3)})).join(", ")," in ",o.series.join(", "),".",i.a.createElement("br",null),"Puoi cliccare su un punto del grafo per cambiare il giorno dell'inizio della proiezione. La proiezione verra' ricalcolata a partire da quel punto, usando il growth rate di quel giorno.",i.a.createElement("br",null),"Nota: la proiezione inizia giorno ",o.date.toLocaleString(),". Il numero di infetti iniziale ",i.a.createElement("i",null,"I(0)"),' in quel giorno e\' scelto come il numero di "totale positivi", ovvero il numero di persone infette vive e non ancora guarite. Nel grafo si puo\' notare un balzo in basso, infatti, "totale positivi" ',"<=",' "totale casi".                         ',i.a.createElement("br",null),"Infine, se il growth rate e' minore di 1, la proiezione non ha piu' senso e verra' graficata una linea costante."):"",ee);default:return i.a.createElement("div",null)}}(),v?i.a.createElement("div",{style:{"font-size":"smaller"}},i.a.createElement("br",null),"I dati sono forniti dalla ",i.a.createElement("a",{href:"https://github.com/pcm-dpc/COVID-19"},"Protezione Civile"),". Il codice sorgente dei plot e' disponibile su ",i.a.createElement("a",{href:"https://github.com/numericnews/numericnews.github.io/tree/master/covid-web"},"github"),".",i.a.createElement("br",null),i.a.createElement("a",{href:"https://www.linkedin.com/in/lopumo/"},"Andrea Lo Pumo"),", ",i.a.createElement("a",{href:"https://www.linkedin.com/in/claudiomusumeci/"},"Claudio F. Musumeci"),".  ",i.a.createElement("a",{href:"mailto:numeric-news-authors@googlegroups.com"},"Contattaci"),"."):i.a.createElement(i.a.Fragment,null))}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e,t,a,n,r=window.innerWidth>window.innerHeight?window.innerWidth-.2*window.innerWidth+"px":window.innerWidth-.1*window.innerWidth+"px",o=this.state.value,l="Regione"==this.props.types?"regioni":"province",s=i.a.createElement("div",{style:{left:"60px",top:"10px",position:"absolute","font-size":"small"}},"Due dita per zoomare. Doppio click per resettare."),c=function(){return document.getElementById("tabBar")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,{id:"tabBar",onChange:this.handleChange.bind(this),"aria-label":"ploty tabs",variant:"fullWidth",scrollButtons:"auto",className:"generalTabs",value:this.state.value},i.a.createElement(Q.a,{label:"Altre "+l}),i.a.createElement(Q.a,{label:"Totale casi"}),i.a.createElement(Q.a,{label:"Tamponi"}),i.a.createElement(Q.a,{label:"Growth Rate"}),i.a.createElement(Q.a,{label:"Exp Growth Rate"})),i.a.createElement(te,{label:"Altre "+l,value:o,index:0},"empty"),i.a.createElement(te,{label:"Totale casi",value:o,index:1},i.a.createElement("div",{id:"totaleCasi",style:{height:"100%",top:null===(e=c())||void 0===e?void 0:e.clientHeight,position:"relative"}},i.a.createElement(h.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},i.a.createElement(h.a,{item:!0,xs:12,md:12,className:"containerLegend"},i.a.createElement("div",{id:"totaleLegendDiv"})),i.a.createElement(h.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"90%",height:"100%",maxWidth:r}},s,i.a.createElement("div",{id:"totalePlotDiv",style:{width:"100%",height:"100%"}})),i.a.createElement(h.a,{item:!0,xs:12},this.getContent("totalePlotDiv")),i.a.createElement(h.a,{item:!0,xs:12,md:12,className:"containerLegend"},i.a.createElement("div",{id:"velLegendDiv"})),i.a.createElement(h.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"90%",height:"100%",maxWidth:r}},s,i.a.createElement("div",{id:"velPlotDiv",style:{width:"100%",height:"100%"}})),i.a.createElement(h.a,{item:!0,xs:12},this.getContent("velPlotDiv"))))),i.a.createElement(te,{label:"Tamponi",value:o,index:2},i.a.createElement("div",{style:{top:null===(t=c())||void 0===t?void 0:t.clientHeight,position:"relative"}},i.a.createElement(h.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},i.a.createElement(h.a,{item:!0,xs:12,md:12,className:"containerLegend"},i.a.createElement("div",{id:"tampPLegendDiv"})),i.a.createElement(h.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:r}},s,i.a.createElement("div",{id:"tampPPlotDiv",style:{width:"100%",height:"100%"}})),i.a.createElement(h.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:r}},s,i.a.createElement("div",{id:"tampTPlotDiv",style:{width:"100%",height:"100%"}})),i.a.createElement(h.a,{item:!0,xs:12,md:12,className:"containerLegend"},i.a.createElement("div",{id:"tampTLegendDiv"})),i.a.createElement(h.a,{item:!0,xs:12},this.getContent())))),i.a.createElement(te,{label:"Growth Rate",value:o,index:3},i.a.createElement("div",{style:{top:null===(a=c())||void 0===a?void 0:a.clientHeight,position:"relative"}},i.a.createElement(h.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},i.a.createElement(h.a,{item:!0,xs:12,md:12,className:"containerLegend"},i.a.createElement("div",{id:"growthRateLegendDiv"})),i.a.createElement(h.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:r}},s,i.a.createElement("div",{id:"growthRatePlotDiv",style:{width:"100%",height:"100%"}})),i.a.createElement(h.a,{item:!0,xs:12},this.getContent())))),i.a.createElement(te,{label:"Proiezione",value:o,index:4},i.a.createElement("div",{style:{top:null===(n=c())||void 0===n?void 0:n.clientHeight,position:"relative"}},i.a.createElement(h.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},i.a.createElement(h.a,{item:!0,xs:12,md:12,className:"containerLegend"},i.a.createElement("div",{id:"projLegendDiv"})),i.a.createElement(h.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:r}},s,i.a.createElement("div",{id:"projPlotDiv",style:{width:"100%",height:"100%"}})),i.a.createElement(h.a,{item:!0,xs:12},this.getContent())))))}}]),a}(n.Component),ie=Object(w.a)((function(e){return{root:{},drawer:Object(u.a)({},e.breakpoints.up("sm"),{width:300,flexShrink:0}),menuButton:Object(u.a)({border:"solid 1px #FFF",borderRadius:"15px",fontSize:"10px",padding:"3px"},"fontSize","1rem"),drawerPaper:{background:"#2c2e35",color:"#FFF",textAlign:"center"},content:{}}}));function re(e){var t=e.container,a=ie(),n=Object(E.a)(),r=i.a.useState(!1),o=Object(d.a)(r,2),l=o[0],u=o[1],g=function(){u(!l)},w=i.a.useState("Provincia"),k=Object(d.a)(w,2),C=k[0],j=k[1],D=i.a.useState([]),z=Object(d.a)(D,2),P=z[0],O=z[1],L=i.a.useState([]),T=Object(d.a)(L,2),S=T[0],F=T[1],G=i.a.useState(["Lombardia","Veneto"]),N=Object(d.a)(G,2),W=N[0],M=N[1],V=i.a.useState(["Bergamo","Milano","Venezia"]),B=Object(d.a)(V,2),A=B[0],H=B[1];i.a.useEffect((function(){(function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.init)();case 2:O(Object(q.getProvinces)().sort()),F(Object(q.getRegions)().sort());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var _=i.a.createElement("div",null,i.a.createElement("div",{className:a.toolbar},i.a.createElement(h.a,{container:!0,style:{position:"relative",top:"15px"}},i.a.createElement(h.a,{item:!0,xs:6},i.a.createElement(b.a,{variant:"h6",noWrap:!0,style:{paddingLeft:10,paddingBottom:20}},"Filtra")),i.a.createElement(h.a,{item:!0,xs:6},i.a.createElement(f.a,{style:{float:"right",cursor:"pointer"},onClick:g})))),i.a.createElement(p.a,null),i.a.createElement(y.a,{exclusive:!0,value:C,onChange:function(e,t){j(t)},"aria-label":"aree_buttons"},i.a.createElement(x.a,{value:"Nazione","aria-label":"bold"},"Nazione"),i.a.createElement(x.a,{value:"Regione","aria-label":"bold"},"Regioni"),i.a.createElement(x.a,{value:"Province","aria-label":"bold"},"Province")),i.a.createElement(p.a,null),i.a.createElement("div",{style:{display:"Regione"===C?"block":"none"}},i.a.createElement(R,{id:"regione",values:W,setvalue:function(e){M(e)},type:"Regioni",lists:S})),i.a.createElement("div",{style:{display:"Province"===C?"block":"none"}},i.a.createElement(R,{id:"province",values:A,setvalue:function(e){H(e)},type:"Province",lists:P})),i.a.createElement("div",{style:{display:"Nazione"===C?"block":"none"}},i.a.createElement(R,{id:"nazione",values:["Italia"],type:"Nazione",lists:["Italia"]})));return i.a.createElement("div",{className:a.root},i.a.createElement(m.a,null),i.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},i.a.createElement(v.a,{container:t,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:l,onClose:g,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},_)),i.a.createElement("main",{className:a.content},i.a.createElement("div",{className:a.toolbar}),l?i.a.createElement(i.a.Fragment,null):i.a.createElement(ne,{handleDrawerToggle:g,types:C,field:"Regione"===C?"denominazione_regione":"denominazione_provincia",regionValues:W,provinceValues:A})))}var oe=a(129);var le=function(){return i.a.createElement(oe.a,null,(function(e){var t=e.loading,a=e.isLatestVersion,n=e.refreshCacheAndReload;return t?null:(t||a||n(),setTimeout(n,Z.duration(5,"hour").asMilliseconds()),i.a.createElement("div",{id:"App"},i.a.createElement(h.a,{container:!0},i.a.createElement(h.a,{item:!0,xs:12},i.a.createElement(re,null)))))}))},se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(le,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(t,e)}))}}()}},[[144,1,2]]]);
//# sourceMappingURL=main.2883e249.chunk.js.map