(this.webpackJsonpcovid19italia=this.webpackJsonpcovid19italia||[]).push([[0],{141:function(e,t,a){e.exports=a(181)},146:function(e,t,a){},147:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(12),o=a.n(r),l=(a(146),a(147),a(13)),c=a.n(l),s=a(28),d=a(29),u=a(82),m=a(237),p=a(235),h=a(234),v=a(244),g=a(125),f=a.n(g),w=a(232),b=a(228),E=a(18),y=a(245),x=a(236),k=a(243),C=a(238),j=a(240),z=a(115),P=a.n(z),O=a(119),R=a.n(O),D=i.a.createElement(P.a,{fontSize:"small"}),T=i.a.createElement(R.a,{fontSize:"small"}),S=Object(b.a)((function(e){return{input:{"&::placeholder":{color:"#FFF"}}}}));function G(e){var t=S();return i.a.createElement(j.a,{multiple:!0,size:"small",disablePortal:!0,options:e.lists,disableCloseOnSelect:!0,getOptionLabel:function(e){return e},value:e.values,onChange:function(t,a){e.setvalue(a,e.type)},style:{background:"#FFF",padding:20},renderOption:function(e,t){var a=t.selected;return i.a.createElement(i.a.Fragment,null,i.a.createElement(k.a,{icon:D,checkedIcon:T,style:{marginRight:8},checked:a}),e)},renderInput:function(a){return i.a.createElement(C.a,Object.assign({InputProps:{classes:{input:t.input}},style:{color:"#FFF"}},a,{variant:"outlined",label:"",placeholder:e.type}))},id:e.id+Math.random()})}var L=a(35),F=a(127),W=a(121),M=a(75),I=a(58),N=a(128),H=a(126),V=a(129),B=a(46),q=a(47),A=a(40),_=a(124),U=a(16),Y=a(239),J=a(241),K=a(233),Q=a(45),Z=a(67),$=a(2),X={},ee=i.a.createElement("div",{className:"explanation"},i.a.createElement(w.a,{component:"p"},"In questi due grafi viene rappresentata la percentuale di tamponi risultati positivi e il numero totale di tamponi effettuati in un dato giorno. Se il numero totale di tamponi e' alto, una bassa percentuale fa' pensare che la regione sta' facendo un numero di tamponi piu' che adeguato.",i.a.createElement("br",null),"La situazione e' tuttavia complicata dal fatto che una regione puo' fare piu' di un tampone alla stessa persona (vedi ",i.a.createElement("a",{href:"https://www.youtrend.it/2020/03/25/coronavirus-il-rebus-dei-tamponi-multipli/"},"Lorenzo Ruffino"),")",i.a.createElement("br",null),"Nota: non e' disponibile il numero di tamponi per provincia, ma solo per regione.")),te=i.a.createElement(w.a,{component:"p"},"Dettagli sui calcoli: il growth rate in data t e' stimato usando la formula: ",i.a.createElement("br",null)," r(t) = (I(t)-I(t-1)) / (I(t-1)-I(t-2)) = v(t) / v(t-1)",i.a.createElement("br",null),"dove I(t) e' il numero totale dei casi al tempo t, v(t) e' la velocita' al tempo t. Per una motivazione dell'uso di tale formula, vedi ",i.a.createElement("a",{href:"http://katolaz.net/covid-2019/growth.html"},"Epidemic 101"),i.a.createElement("br",null),"Da tale stima, la formula per il calcolo del numero di casi al tempo t e': ",i.a.createElement("img",{src:"/eq_growth.svg",style:{height:"50%",width:"auto"},alt:"I(t)=r**t*I(0)"}),", dove I(0) e' il numero di infetti iniziali.",i.a.createElement("br",null),"Nota: questa formula e' una forte semplificazione del reale fenomeno dell'epidemia corona virus, ma essendo l'epidemia di carattere esponenziale, rende comunque una idea di come l'epidemia potrebbe evolvere senza misure di contenimento, di lock-down e vaccinazione.",i.a.createElement("br",null),"Gli scienziati stanno ancora studiando le dinamiche dell'epidemia Coronavirus. Tuttavia, un growth rate maggiore di uno implica un altissimo valore di crescita. Per approfondire sull'exponential growth rate vedi"," ",i.a.createElement("a",{href:"http://katolaz.net/covid-2019/growth.html"},"Epidemic 101"),","," ",i.a.createElement("a",{href:"https://www.youtube.com/watch?v=Kas0tIxDvrg&t=81s"},"3Blue1Brown Youtube"),","," ",i.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Basic_reproduction_number"},"R0 (wikipedia)"),","," ",i.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/pubmed/32007643"},"Zhao, Lin, et al.")," ",'("The early outbreak data largely follows the exponential growth. [We estimated a] mean R0 from 2.24 to 3.58").',i.a.createElement("br",null),"Ci sono formule e modelli molto piu' rifiniti, precisi e validi, che tengono conto delle diverse possibili fasi ed evoluzioni della malattia nel singolo individuo, tuttavia la dinamica di base dell'exponential growth e' la stessa.");function ae(e){var t=e.children,a=e.value,n=e.index,r=Object(V.a)(e,["children","value","index"]);return i.a.createElement(w.a,Object.assign({component:"div",role:"tabpanel",hidden:!a||a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r,{style:{height:"100%"}}),a===n&&i.a.createElement(Y.a,{style:{height:"50%"},p:3},t))}var ne=function(e){Object(N.a)(a,e);var t=Object(H.a)(a);function a(e){var n;return Object(M.a)(this,a),(n=t.call(this,e)).state={date:(new Date).toLocaleString(),projPlotStart:null,activeStep:0,value:1,open:!1},n}return Object(I.a)(a,[{key:"getSelectedItems",value:function(){return"Nazione"==this.props.types?["Italia"]:"denominazione_regione"===this.props.field?this.props.regionValues:this.props.provinceValues}},{key:"componentWillMount",value:function(){var e=this;B.a.load((function(){e._draw(e.props.field,e.getSelectedItems())}))}},{key:"onOrientationChange",value:function(e){this.setState({innerWidth:window.innerWidth})}},{key:"componentDidMount",value:function(){var e=this.onOrientationChange.bind(this);this.setState({onOrientationChange:e},(function(){window.addEventListener("orientationchange",e)}))}},{key:"componentWillUnmount",value:function(){this.state.onOrientationChange&&window.removeEventListener("orientationchange",this.state.onOrientationChange)}},{key:"componentDidUpdate",value:function(e,t){if(e.types===this.props.types&&e.field===this.props.field&&U.isEqual(e.regionValues,this.props.regionValues)&&U.isEqual(e.provinceValues,this.props.provinceValues)){if(t.innerWidth!=this.state.innerWidth)for(var a=0,n=Object.keys(X);a<n.length;a++){var i=n[a],r=X[i];U.isObject(r)&&"resize"in r&&U.isFunction(r.resize)&&r.resize()}}else{var o=this.getSelectedItems();if(!o.length)return;this._draw(this.props.field,o)}}},{key:"darkenColor",value:function(e){var t=q.a.toRGB_(e);return t.r=Math.floor((255+t.r)/2),t.g=Math.floor((255+t.g)/2),t.b=Math.floor((255+t.b)/2),"rgb("+t.r+","+t.g+","+t.b+")"}},{key:"barChartPlotter",value:function(e){var t=e.drawingContext,a=e.points,n=e.dygraph.toDomYCoord(0);t.fillStyle=this.darkenColor(e.color);for(var i=1/0,r=1;r<a.length;r++){var o=a[r].canvasx-a[r-1].canvasx;o<i&&(i=o)}for(var l=Math.floor(2/3*i),c=0;c<a.length;c++){var s=a[c],d=s.canvasx;t.fillRect(d-l/2,s.canvasy,l,n-s.canvasy),t.strokeRect(d-l/2,s.canvasy,l,n-s.canvasy)}}},{key:"legendFormatter",value:function(e){var t=e.dygraph,a=t?t.getLabels():[];if(null===e.x)return e.series.map((function(e){return"<div>"+e.dashHTML+"</div><div>"+e.labelHTML+"</div>"}));var n=new Date;n.setSeconds(0),n.setMilliseconds(0);var i="<div>"+this.getLabels()[0]+": "+(e.xHTML||Object($.q)(n))+"</div>";return e.series.forEach((function(e,n){if(e.isVisible){var r=e.labelHTML+(e.yHTML?": "+e.yHTML+"&nbsp;":": ------");e.isHighlighted&&(r="<b>"+r+"</b>");var o=n>0&&t?t.getOption("strokePattern",a[n+1]):[],l=(!o||o.length<=1?"solid ":"dashed ")+(e.color||"white")+" 3px";i+='<div style="border-bottom: '.concat(l,'">')+r+"</div>"}})),i}},{key:"drawGrowthRate",value:function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,i,r,o,l,s,d=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(d.length>2&&void 0!==d[2])||d[2],e.next=3,Object(L.init)();case 3:return e.next=5,Object(A.generalPlotGrowthRate)(t,a);case 5:i=e.sent,X.drawGrowthRatePlot=i,r=Object(Q.smallYBounds)(i.data.slice(1),5),o=i.data[i.data.length-1][0],l=i.data[0].map((function(e,t){return[e.label].concat([i.data[i.data.length-1][t]])})).slice(1,i.data[0].length-1),this.setState({lastGrowthRates:{data:l,date:o}}),i.gviz=B.a.api.visualization.arrayToDataTable(i.data),s={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"growthRateLegendDiv",colorValue:1,digitsAfterDecimal:4,series:i.options,valueRange:r},n&&(X.drawGrowthRateGraph=new q.a(document.getElementById("growthRatePlotDiv"),i.gviz,s),X.drawGrowthRateGraph.resize());case 14:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"annotationOnHighlight",value:function(e,t,a,n,i,r){var o,l=[],c=Object(W.a)(n);try{for(c.s();!(o=c.n()).done;){var s=o.value,d=""+s.yval,u=Z(a).format("DD MMM"),m=Math.max(d.length,u.length),p="".concat(d,"<br>").concat(u),h=m/1.5;l.push({series:s.name,xval:a,width:18*h,height:46,tickHeight:4,html:p})}}catch(v){c.e(v)}finally{c.f()}e.setAnnotations(l)}},{key:"annotationOnPointClick",value:function(e,t,a){return this.annotationOnHighlight(e,t,a.xval,[a])}},{key:"drawChart",value:function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,i,r,o=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(o.length>2&&void 0!==o[2])||o[2],e.next=3,Object(L.init)();case 3:return e.next=5,Object(A.generalPlot)(t,a);case 5:i=e.sent,X.drawChartPlot=i,i.gviz=B.a.api.visualization.arrayToDataTable(i.data),r={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"legendDiv",colorValue:1,series:i.options},n&&(X.drawChartGraph&&X.drawChartGraph.destroy(),X.drawChartGraph=new q.a(document.getElementById("plotDiv"),i.gviz,r),X.drawChartGraph.ready((function(){X.drawChartGraph.resize()})));case 10:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"calculateProjectionChart",value:function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,i,r,o,l,s,d,u,m,p,h,v,g,f=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=f.length>2&&void 0!==f[2]?f[2]:null,(null===(n=X.drawChartPlot)||void 0===n?void 0:n.data)&&(null===(i=X.drawGrowthRatePlot)||void 0===i?void 0:i.data)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Object(L.init)();case 5:return o=function(e){var t=e[0].map((function(t,a){return 0==a?0:Object(Q.max2)(e.map((function(e,t){return 0==t?0:e[a]})).filter(U.isFinite)).max}));return Math.max.apply(Math,Object(F.a)(t))},l=function(e){for(var t=U.range(0,e[1].length-1).map((function(e){return null})),a=1;a<e[1].length;a++){for(var n=0,i=1;i<e.length;i++)U.isFinite(e[i][a])&&(t[a]+=e[i][a],n++);t[a]/=n}return Object(Q.average)(t.filter(U.isFinite))},s=function(e,t){for(var a=1/0,n=-1,i=1;i<e[1].length;i++)for(var r=1;r<e.length;r++)U.isFinite(e[r][i])&&Math.abs(e[r][i]-t)<a&&(a=Math.abs(e[r][i]-t),n=r);return{i:n,y:a}},d=-1,r||(u=X.drawGrowthRatePlot.data,(m=s(u,l(u))).i>=0&&(r=u[m.i][0],d=m.i)),r&&d<0&&(d=X.drawGrowthRatePlot.data.findIndex((function(e,t){return t>0&&e[0].getTime()==r.getTime()}))),this.setState({projPlotStart:{gr:d>=0?X.drawGrowthRatePlot.data[d].slice(1,-1):[],date:r,series:X.drawGrowthRatePlot.data[0].slice(1,-1).map((function(e){return e.label}))}}),e.next=14,Object(A.projectGeneralPlot)(a.length,X.drawChartPlot,X.drawGrowthRatePlot,r);case 14:return(p=e.sent).gviz=B.a.api.visualization.arrayToDataTable(p.data),h=o(X.drawChartPlot.data),v=o(p.data),g=v>h?Math.min(4*h,v):h,e.abrupt("return",{plot:p,safeMax:g});case 20:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"drawProjectionChart",value:function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,i,r,o,l,d,u=this,m=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.length>2&&void 0!==m[2]?m[2]:null,e.next=3,this.calculateProjectionChart(t,a,n);case 3:i=e.sent,r=i.plot,o=i.safeMax,l={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"projLegendDiv",colorValue:1,series:r.options,valueRange:[0,o]},X.drawProjectionChartGraph&&X.drawProjectionChartGraph.destroy(),X.drawProjectionChartGraph=new q.a(document.getElementById("projPlotDiv"),r.gviz,l),X.drawProjectionChartGraph.resize(),(d=X.drawProjectionChartGraph).ready((function(){d.updateOptions({pointClickRadius:50,pointClickCallback:function(){var e=Object(s.a)(c.a.mark((function e(n,i){var r,o,l,s,m,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.idx,o=X.drawChartPlot.data,l=o[r+1][0],e.next=5,u.calculateProjectionChart(t,a,l);case 5:s=e.sent,m=s.plot,p=s.safeMax,d.updateOptions({file:m.gviz,valueRange:[0,p]});case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()})}));case 12:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"drawTamponiChart",value:function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,i,r,o,l,s,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.testsPlot)(t,a,0);case 2:for(n=e.sent,i=U.cloneDeep(n),r=1;r<n.data.length;r++)for(o=1;2*o<n.data[r].length;o++)n.data[r][2*o]=null,i.data[r][2*(o-1)+1]=null;l=Object(Q.smallYBounds)(i.data.slice(1),1),n.gviz=B.a.api.visualization.arrayToDataTable(n.data),i.gviz=B.a.api.visualization.arrayToDataTable(i.data),s={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"tampTLegendDiv",colorValue:1,series:n.options},X.drawTampTChartGraph=new q.a(document.getElementById("tampTPlotDiv"),n.gviz,s),X.drawTampTChartGraph.resize(),(d=U.clone(s)).labelsDiv="tampPLegendDiv",d.series=U.clone(s.series),d.valueRange=[0,Math.min(100,l[1])],X.drawTampPChartGraph=new q.a(document.getElementById("tampPPlotDiv"),i.gviz,d),X.drawTampPChartGraph.resize();case 17:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"_draw",value:function(){var e=Object(s.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.state.value,e.next=1===e.t0?3:2===e.t0?6:3===e.t0?9:4===e.t0?16:19;break;case 3:return e.next=5,this.drawChart(t,a);case 5:return e.abrupt("break",19);case 6:return e.next=8,this.drawGrowthRate(t,a);case 8:return e.abrupt("break",19);case 9:return e.next=11,this.drawChart(t,a,!1);case 11:return e.next=13,this.drawGrowthRate(t,a,!1);case 13:return e.next=15,this.drawProjectionChart(t,a);case 15:return e.abrupt("break",19);case 16:return e.next=18,this.drawTamponiChart(t,a);case 18:return e.abrupt("break",19);case 19:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"zoomVelocity",value:function(){if(X.drawChartGraph&&X.drawChartPlot){var e=X.drawChartPlot.data.map((function(e,t){return 0==t?e:e.map((function(e,t){return 0==t||t%2==0?e:"not-vel"})).filter((function(e){return"not-vel"!=e}))})),t=Object(Q.smallYBounds)(e.slice(1),5);console.log(t),X.drawChartGraph.updateOptions({valueRange:[0,t[1]]})}}},{key:"handleChange",value:function(e,t){var a=this;if(0!=t){var n=this.props.field,i=this.getSelectedItems();this.setState({value:t},(function(){a._draw(n,i)}))}else this.props.handleDrawerToggle()}},{key:"getLabel",value:function(){this.state.value;return"Approfondimento"}},{key:"getContent",value:function(){var e=this,t=this.state,a=t.lastGrowthRates,n=t.value,r=t.projPlotStart,o=a;switch(n){case 1:return i.a.createElement("div",{className:"explanation"},i.a.createElement(w.a,{component:"p"},'Totale casi: sono tutte le persone che sono state certificate essere infette da coronavirus. Questo numero e\' uguale alla somma "persone attualmente positive" + "persone guarite" + "persone decedute"'),i.a.createElement("br",null),i.a.createElement(w.a,{component:"p"},"Velocita': indica quanto velocemente aumentano i casi. Se un giorno la velocita' e' 10, vuol dire che dal giorno precedente ci sono stati 10 casi in piu'."),i.a.createElement(w.a,{component:"p"},"Fai un zoom sulla velocita': ",i.a.createElement("button",{onClick:function(){return e.zoomVelocity()}},"zoom"),"."),i.a.createElement("br",null),i.a.createElement(w.a,{component:"p"},"Per vedere come sarebbe stato l'andamento dell'epidemia senza le misure di lock down, vai a ",i.a.createElement("button",{onClick:function(){return e.handleChange(null,3)}},"proiezione growth rate")));case 2:return i.a.createElement("div",{className:"explanation"},i.a.createElement(w.a,{component:"p"},"In data ",(null===o||void 0===o?void 0:o.date)?null===o||void 0===o?void 0:o.date.toLocaleString():"[non-disponibile]",", i growth rate sono:",i.a.createElement("br",null),i.a.createElement("br",null),(null===o||void 0===o?void 0:o.data)?o.data.map((function(e,t){return i.a.createElement("span",{key:t},e.map((function(e){return U.isNumber(e)?e.toFixed(4):e})).join(" "),i.a.createElement("br",null))})):"[non disponibile]"),i.a.createElement("br",null),i.a.createElement(w.a,{component:"p"},"Growth rate: rapporto tra la velocita' di un giorno e quella del giorno precedente. E' una quantita' importante perche' e' una stima della crescita della velocita'. Se il growth rate e' maggiore di 1, allora la velocita' sta' crescendo. Se e' minore, sta' diminuendo. L'epidemia finisce solo se la velocita' scende e rimane a zero."),i.a.createElement("br",null),i.a.createElement(w.a,{component:"p"},"La crescita del numero di casi in un'epidemia come il Coronavirus e' esponenziale. In una crescita esponenziale anche valori poco piu' alti (growth rate > 1) implicano un'altissima crescita. Ad esempio, se ci sono 100 infetti, con growth rate 1.22, solo dopo 30 giorni ci saranno 39000 infetti."),i.a.createElement("br",null),te);case 3:return i.a.createElement("div",{className:"explanation"},i.a.createElement(w.a,{component:"p"},"In questo grafo, viene usato il growth rate per mostrare ",i.a.createElement("b",null,"a grandi linee")," ","come procederebbe l'epidemia se non venissero fatte delle misure di contenimento e lock-down. Senza misure di prevenzione, l'andamento dei nuovi casi sarebbe esponenziale."),r?i.a.createElement(w.a,{component:"p"},"L'andamento ipotetico graficato (linee tratteggiate) e' a partire da giorno ",r.date.toLocaleString(),", dove i growth rate erano ",r.gr.map((function(e){return e.toFixed(3)})).join(", ")," in ",r.series.join(", "),".",i.a.createElement("br",null),"Clicca su un punto del grafo per graficare l'andamento ipotetico a partire da quel punto. Verra' usato il growth rate di quel giorno (solo su desktop, non funziona da cellulare)."):"",te);case 4:return ee;default:return i.a.createElement("div",null)}}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=window.innerWidth>window.innerWidth?window.innerWidth-.2*window.innerWidth+"px":window.innerWidth-.1*window.innerWidth+"px",t=(window.innerHeight>window.innerWidth?(window.innerHeight,window.innerHeight):(window.innerHeight,window.innerHeight),this.state.value),a="Regione"==this.props.types?"regioni":"province",n=i.a.createElement("div",{style:{left:"60px",top:"10px",position:"absolute","font-size":"small"}},"Doppio click per resettare lo zoom");return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,{onChange:this.handleChange.bind(this),"aria-label":"ploty tabs",variant:"scrollable",scrollButtons:"auto",className:"generalTabs",value:this.state.value},i.a.createElement(K.a,{label:"Altre "+a}),i.a.createElement(K.a,{label:"Totale casi"}),i.a.createElement(K.a,{label:"Growth Rate"}),i.a.createElement(K.a,{label:"Proiezione Growth Rate"}),i.a.createElement(K.a,{label:"Tamponi"})),i.a.createElement(ae,{label:"Altre "+a,value:t,index:0},"empty"),i.a.createElement(ae,{label:"Totale casi",value:t,index:1},i.a.createElement("div",{id:"totaleCasi",style:{height:"100%"}},i.a.createElement(h.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},i.a.createElement(h.a,{item:!0,xs:12,md:12,className:"containerLegend"},i.a.createElement("div",{id:"legendDiv"})),i.a.createElement(h.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"90%",height:"100%",maxWidth:e}},n,i.a.createElement("div",{id:"plotDiv",style:{width:"100%",height:"100%"}})),i.a.createElement(h.a,{item:!0,xs:12},this.getContent())))),i.a.createElement(ae,{label:"Growth Rate",value:t,index:2},i.a.createElement("div",null,i.a.createElement(h.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},i.a.createElement(h.a,{item:!0,xs:12,md:12,className:"containerLegend"},i.a.createElement("div",{id:"growthRateLegendDiv"})),i.a.createElement(h.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:e}},n,i.a.createElement("div",{id:"growthRatePlotDiv",style:{width:"100%",height:"100%"}})),i.a.createElement(h.a,{item:!0,xs:12},this.getContent())))),i.a.createElement(ae,{label:"Proiezione",value:t,index:3},i.a.createElement("div",null,i.a.createElement(h.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},i.a.createElement(h.a,{item:!0,xs:12,md:12,className:"containerLegend"},i.a.createElement("div",{id:"projLegendDiv"})),i.a.createElement(h.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:e}},n,i.a.createElement("div",{id:"projPlotDiv",style:{width:"100%",height:"100%"}})),i.a.createElement(h.a,{item:!0,xs:12},this.getContent())))),i.a.createElement(ae,{label:"Tamponi",value:t,index:4},i.a.createElement("div",null,i.a.createElement(h.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},i.a.createElement(h.a,{item:!0,xs:12,md:12,className:"containerLegend"},i.a.createElement("div",{id:"tampPLegendDiv"})),i.a.createElement(h.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:e}},n,i.a.createElement("div",{id:"tampPPlotDiv",style:{width:"100%",height:"100%"}})),i.a.createElement(h.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:e}},n,i.a.createElement("div",{id:"tampTPlotDiv",style:{width:"100%",height:"100%"}})),i.a.createElement(h.a,{item:!0,xs:12,md:12,className:"containerLegend"},i.a.createElement("div",{id:"tampTLegendDiv"})),i.a.createElement(h.a,{item:!0,xs:12},this.getContent())))))}}]),a}(n.Component),ie=Object(b.a)((function(e){return{root:{},drawer:Object(u.a)({},e.breakpoints.up("sm"),{width:300,flexShrink:0}),menuButton:Object(u.a)({border:"solid 1px #FFF",borderRadius:"15px",fontSize:"10px",padding:"3px"},"fontSize","1rem"),drawerPaper:{background:"#2c2e35",color:"#FFF",textAlign:"center"},content:{}}}));function re(e){var t=e.container,a=ie(),n=Object(E.a)(),r=i.a.useState(!1),o=Object(d.a)(r,2),l=o[0],u=o[1],g=function(){u(!l)},b=i.a.useState("Provincia"),k=Object(d.a)(b,2),C=k[0],j=k[1],z=i.a.useState([]),P=Object(d.a)(z,2),O=P[0],R=P[1],D=i.a.useState([]),T=Object(d.a)(D,2),S=T[0],F=T[1],W=i.a.useState(["Lombardia","Veneto"]),M=Object(d.a)(W,2),I=M[0],N=M[1],H=i.a.useState(["Bergamo","Milano","Venezia"]),V=Object(d.a)(H,2),B=V[0],q=V[1];i.a.useEffect((function(){(function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(L.init)();case 2:R(Object(A.getProvinces)().sort()),F(Object(A.getRegions)().sort());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var _=i.a.createElement("div",null,i.a.createElement("div",{className:a.toolbar},i.a.createElement(h.a,{container:!0,style:{position:"relative",top:"15px"}},i.a.createElement(h.a,{item:!0,xs:6},i.a.createElement(w.a,{variant:"h6",noWrap:!0,style:{paddingLeft:10,paddingBottom:20}},"Filtra")),i.a.createElement(h.a,{item:!0,xs:6},i.a.createElement(f.a,{style:{float:"right",cursor:"pointer"},onClick:g})))),i.a.createElement(p.a,null),i.a.createElement(y.a,{exclusive:!0,value:C,onChange:function(e,t){j(t)},"aria-label":"aree_buttons"},i.a.createElement(x.a,{value:"Nazione","aria-label":"bold"},"Nazione"),i.a.createElement(x.a,{value:"Regione","aria-label":"bold"},"Regioni"),i.a.createElement(x.a,{value:"Province","aria-label":"bold"},"Province")),i.a.createElement(p.a,null),i.a.createElement("div",{style:{display:"Regione"===C?"block":"none"}},i.a.createElement(G,{id:"regione",values:I,setvalue:function(e){N(e)},type:"Regioni",lists:S})),i.a.createElement("div",{style:{display:"Province"===C?"block":"none"}},i.a.createElement(G,{id:"province",values:B,setvalue:function(e){q(e)},type:"Province",lists:O})),i.a.createElement("div",{style:{display:"Nazione"===C?"block":"none"}},i.a.createElement(G,{id:"nazione",values:["Italia"],type:"Nazione",lists:["Italia"]})));return i.a.createElement("div",{className:a.root},i.a.createElement(m.a,null),i.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},i.a.createElement(v.a,{container:t,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:l,onClose:g,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},_)),i.a.createElement("main",{className:a.content},i.a.createElement("div",{className:a.toolbar}),l?i.a.createElement(i.a.Fragment,null):i.a.createElement(ne,{handleDrawerToggle:g,types:C,field:"Regione"===C?"denominazione_regione":"denominazione_provincia",regionValues:I,provinceValues:B})))}var oe=function(){return i.a.createElement("div",{id:"App"},i.a.createElement(h.a,{container:!0},i.a.createElement(h.a,{item:!0,xs:12},i.a.createElement(re,null))))},le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(oe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");le?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ce(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ce(t,e)}))}}()}},[[141,1,2]]]);
//# sourceMappingURL=main.06fc690e.chunk.js.map