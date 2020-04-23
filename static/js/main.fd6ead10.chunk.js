(this.webpackJsonpcovid19italia=this.webpackJsonpcovid19italia||[]).push([[0],{141:function(e,t,a){e.exports=a(181)},146:function(e,t,a){},147:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),l=(a(146),a(147),a(13)),c=a.n(l),s=a(28),u=a(29),d=a(62),m=a(238),p=a(237),h=a(235),v=a(234),g=a(246),f=a(125),w=a.n(f),b=a(231),E=a(126),y=a.n(E),x=a(239),k=a(232),j=a(229),C=a(18),z=a(247),P=a(236),O=a(245),R=a(240),D=a(242),T=a(115),S=a.n(T),L=a(119),G=a.n(L),F=r.a.createElement(S.a,{fontSize:"small"}),M=r.a.createElement(G.a,{fontSize:"small"}),I=Object(j.a)((function(e){return{input:{"&::placeholder":{color:"#FFF"}}}}));function N(e){var t=I();return r.a.createElement(D.a,{multiple:!0,options:e.lists,disableCloseOnSelect:!0,getOptionLabel:function(e){return e},value:e.values,onChange:function(t,a){a.length&&e.setvalue(a,e.type)},style:{background:"#FFF",padding:20},renderOption:function(e,t){var a=t.selected;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{icon:F,checkedIcon:M,style:{marginRight:8},checked:a}),e)},renderInput:function(a){return r.a.createElement(R.a,Object.assign({InputProps:{classes:{input:t.input}},style:{color:"#FFF"}},a,{variant:"outlined",label:"",placeholder:e.type}))},id:e.id+Math.random()})}var W=a(35),B=a(128),V=a(121),H=a(77),q=a(59),_=a(129),A=a(127),U=a(130),Y=a(45),J=a(46),K=a(40),Q=a(124),Z=a(16),$=a(241),X=a(243),ee=a(233),te=a(54),ae=a(69),ne={},re=r.a.createElement("div",{className:"explanation"},r.a.createElement(k.a,{component:"p"},"In questi due grafi viene rappresentata la percentuale di tamponi risultati positivi e il numero totale di tamponi effettuati in un dato giorno. Se il numero totale di tamponi e' alto, una bassa percentuale fa' pensare che la regione sta' facendo un numero di tamponi piu' che adeguato.",r.a.createElement("br",null),"La situazione e' tuttavia complicata dal fatto che una regione puo' fare piu' di un tampone alla stessa persona (vedi ",r.a.createElement("a",{href:"https://www.youtrend.it/2020/03/25/coronavirus-il-rebus-dei-tamponi-multipli/"},"Lorenzo Ruffino"),")",r.a.createElement("br",null),"Nota: non e' disponibile il numero di tamponi per provincia, ma solo per regione.")),ie=r.a.createElement(k.a,{component:"p"},"Dettagli sui calcoli: il growth rate in data t e' stimato usando la formula: ",r.a.createElement("br",null)," r(t) = (I(t)-I(t-1)) / (I(t-1)-I(t-2)) = v(t) / v(t-1)",r.a.createElement("br",null),"dove I(t) e' il numero totale dei casi al tempo t, v(t) e' la velocita' al tempo t. Per una motivazione dell'uso di tale formula, vedi ",r.a.createElement("a",{href:"http://katolaz.net/covid-2019/growth.html"},"Epidemic 101"),r.a.createElement("br",null),"Da tale stima, la formula per il calcolo del numero di casi al tempo t e': ",r.a.createElement("img",{src:"/eq_growth.svg",style:{height:"50%",width:"auto"},alt:"I(t)=r**t*I(0)"}),", dove I(0) e' il numero di infetti iniziali.",r.a.createElement("br",null),"Nota: questa formula e' una forte semplificazione del reale fenomeno dell'epidemia corona virus, ma essendo l'epidemia di carattere esponenziale, rende comunque una idea di come l'epidemia potrebbe evolvere senza misure di contenimento, di lock-down e vaccinazione.",r.a.createElement("br",null),"Gli scienziati stanno ancora studiando le dinamiche dell'epidemia Coronavirus. Tuttavia, un growth rate maggiore di uno implica un altissimo valore di crescita. Per approfondire sull'exponential growth rate vedi"," ",r.a.createElement("a",{href:"http://katolaz.net/covid-2019/growth.html"},"Epidemic 101"),","," ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=Kas0tIxDvrg&t=81s"},"3Blue1Brown Youtube"),","," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Basic_reproduction_number"},"R0 (wikipedia)"),","," ",r.a.createElement("a",{href:"https://www.ncbi.nlm.nih.gov/pubmed/32007643"},"Zhao, Lin, et al.")," ",'("The early outbreak data largely follows the exponential growth. [We estimated a] mean R0 from 2.24 to 3.58").',r.a.createElement("br",null),"Ci sono formule e modelli molto piu' rifiniti, precisi e validi, che tengono conto delle diverse possibili fasi ed evoluzioni della malattia nel singolo individuo, tuttavia la dinamica di base dell'exponential growth e' la stessa.");function oe(e){var t=e.children,a=e.value,n=e.index,i=Object(U.a)(e,["children","value","index"]);return r.a.createElement(k.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},i,{style:{height:"100%"}}),a===n&&r.a.createElement($.a,{style:{height:"50%"},p:3},t))}var le=function(e){Object(_.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(H.a)(this,a),(n=t.call(this,e)).state={date:(new Date).toLocaleString(),projPlotStart:null,activeStep:0,value:0,open:!1},n}return Object(q.a)(a,[{key:"getSelectedItems",value:function(){return"Nazione"==this.props.types?["Italia"]:"denominazione_regione"===this.props.field?this.props.regionValues:this.props.provinceValues}},{key:"componentWillMount",value:function(){var e=this;Y.a.load((function(){e._draw(e.props.field,e.getSelectedItems())}))}},{key:"componentDidUpdate",value:function(e){if(e.types!==this.props.types||e.field!==this.props.field||!Z.isEqual(e.regionValues,this.props.regionValues)||!Z.isEqual(e.provinceValues,this.props.provinceValues)){var t=this.getSelectedItems();if(!t.length)return;this._draw(this.props.field,t)}}},{key:"darkenColor",value:function(e){var t=J.a.toRGB_(e);return t.r=Math.floor((255+t.r)/2),t.g=Math.floor((255+t.g)/2),t.b=Math.floor((255+t.b)/2),"rgb("+t.r+","+t.g+","+t.b+")"}},{key:"barChartPlotter",value:function(e){var t=e.drawingContext,a=e.points,n=e.dygraph.toDomYCoord(0);t.fillStyle=this.darkenColor(e.color);for(var r=1/0,i=1;i<a.length;i++){var o=a[i].canvasx-a[i-1].canvasx;o<r&&(r=o)}for(var l=Math.floor(2/3*r),c=0;c<a.length;c++){var s=a[c],u=s.canvasx;t.fillRect(u-l/2,s.canvasy,l,n-s.canvasy),t.strokeRect(u-l/2,s.canvasy,l,n-s.canvasy)}}},{key:"legendFormatter",value:function(e){if(null===e.x)return e.series.map((function(e){return"<p>"+e.dashHTML+" "+e.labelHTML+"</p>"}));var t=e.xHTML?this.getLabels()[0]+": "+e.xHTML:"";return e.series.forEach((function(e){if(e.isVisible){var a=e.labelHTML+(e.yHTML?": "+e.yHTML:"");e.isHighlighted&&(a="<span>"+a+"</span>"),t+="<p>"+e.dashHTML+" "+a}})),t+="<br><br>Doppio click per resettare lo zoom"}},{key:"drawGrowthRate",value:function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,r,i,o,l,s,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(u.length>2&&void 0!==u[2])||u[2],e.next=3,Object(W.init)();case 3:return e.next=5,Object(K.generalPlotGrowthRate)(t,a);case 5:r=e.sent,ne.drawGrowthRatePlot=r,i=Object(te.smallYBounds)(r.data.slice(1),5),o=r.data[r.data.length-1][0],l=r.data[0].map((function(e,t){return[e.label].concat([r.data[r.data.length-1][t]])})).slice(1,r.data[0].length-1),this.setState({lastGrowthRates:{data:l,date:o}}),r.gviz=Y.a.api.visualization.arrayToDataTable(r.data),s={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"growthRateLegendDiv",colorValue:1,digitsAfterDecimal:4,series:r.options,valueRange:i},n&&(ne.drawGrowthRateGraph=new J.a(document.getElementById("growthRatePlotDiv"),r.gviz,s),ne.drawGrowthRateGraph.resize());case 14:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"annotationOnHighlight",value:function(e,t,a,n,r,i){var o,l=[],c=Object(V.a)(n);try{for(c.s();!(o=c.n()).done;){var s=o.value,u=""+s.yval,d=ae(a).format("DD MMM"),m=Math.max(u.length,d.length),p="".concat(u,"<br>").concat(d),h=m/1.5;l.push({series:s.name,xval:a,width:18*h,height:46,tickHeight:4,html:p})}}catch(v){c.e(v)}finally{c.f()}e.setAnnotations(l)}},{key:"annotationOnPointClick",value:function(e,t,a){return this.annotationOnHighlight(e,t,a.xval,[a])}},{key:"drawChart",value:function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,r,i,o=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(o.length>2&&void 0!==o[2])||o[2],e.next=3,Object(W.init)();case 3:return e.next=5,Object(K.generalPlot)(t,a);case 5:r=e.sent,ne.drawChartPlot=r,r.gviz=Y.a.api.visualization.arrayToDataTable(r.data),i={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"legendDiv",colorValue:1,series:r.options},n&&(ne.drawChartGraph=new J.a(document.getElementById("plotDiv"),r.gviz,i),ne.drawChartGraph.resize());case 10:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"calculateProjectionChart",value:function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,r,i,o,l,s,u,d,m,p,h,v,g,f=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=f.length>2&&void 0!==f[2]?f[2]:null,(null===(n=ne.drawChartPlot)||void 0===n?void 0:n.data)&&(null===(r=ne.drawGrowthRatePlot)||void 0===r?void 0:r.data)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Object(W.init)();case 5:return o=function(e){var t=e[0].map((function(t,a){return 0==a?0:Object(te.max2)(e.map((function(e,t){return 0==t?0:e[a]})).filter(Z.isFinite)).max}));return Math.max.apply(Math,Object(B.a)(t))},l=function(e){for(var t=Z.range(0,e[1].length-1).map((function(e){return null})),a=1;a<e[1].length;a++){for(var n=0,r=1;r<e.length;r++)Z.isFinite(e[r][a])&&(t[a]+=e[r][a],n++);t[a]/=n}return Object(te.average)(t.filter(Z.isFinite))},s=function(e,t){for(var a=1/0,n=-1,r=1;r<e[1].length;r++)for(var i=1;i<e.length;i++)Z.isFinite(e[i][r])&&Math.abs(e[i][r]-t)<a&&(a=Math.abs(e[i][r]-t),n=i);return{i:n,y:a}},u=-1,i||(d=ne.drawGrowthRatePlot.data,(m=s(d,l(d))).i>=0&&(i=d[m.i][0],u=m.i)),i&&u<0&&(u=ne.drawGrowthRatePlot.data.findIndex((function(e,t){return t>0&&e[0].getTime()==i.getTime()}))),this.setState({projPlotStart:{gr:u>=0?ne.drawGrowthRatePlot.data[u].slice(1,-1):[],date:i,series:ne.drawGrowthRatePlot.data[0].slice(1,-1).map((function(e){return e.label}))}}),e.next=14,Object(K.projectGeneralPlot)(a.length,ne.drawChartPlot,ne.drawGrowthRatePlot,i);case 14:return(p=e.sent).gviz=Y.a.api.visualization.arrayToDataTable(p.data),h=o(ne.drawChartPlot.data),v=o(p.data),g=v>h?Math.min(4*h,v):h,e.abrupt("return",{plot:p,safeMax:g});case 20:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"drawProjectionChart",value:function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,r,i,o,l,u,d=this,m=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.length>2&&void 0!==m[2]?m[2]:null,e.next=3,this.calculateProjectionChart(t,a,n);case 3:r=e.sent,i=r.plot,o=r.safeMax,l={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"projLegendDiv",colorValue:1,series:i.options,valueRange:[0,o]},ne.drawProjectionChartGraph&&ne.drawProjectionChartGraph.destroy(),ne.drawProjectionChartGraph=new J.a(document.getElementById("projPlotDiv"),i.gviz,l),ne.drawProjectionChartGraph.resize(),(u=ne.drawProjectionChartGraph).ready((function(){u.updateOptions({pointClickRadius:50,pointClickCallback:function(){var e=Object(s.a)(c.a.mark((function e(n,r){var i,o,l,s,m,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.idx,o=ne.drawChartPlot.data,l=o[i+1][0],e.next=5,d.calculateProjectionChart(t,a,l);case 5:s=e.sent,m=s.plot,p=s.safeMax,u.updateOptions({file:m.gviz,valueRange:[0,p]});case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()})}));case 12:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"drawTamponiChart",value:function(){var e=Object(s.a)(c.a.mark((function e(t,a){var n,r,i,o,l,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.testsPlot)(t,a,0);case 2:for(n=e.sent,r=Z.cloneDeep(n),i=1;i<n.data.length;i++)for(o=1;2*o<n.data[i].length;o++)n.data[i][2*o]=null,r.data[i][2*(o-1)+1]=null;l=Object(te.smallYBounds)(r.data.slice(1),1),n.gviz=Y.a.api.visualization.arrayToDataTable(n.data),r.gviz=Y.a.api.visualization.arrayToDataTable(r.data),s={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"tampTLegendDiv",colorValue:1,series:n.options},ne.drawTampTChartGraph=new J.a(document.getElementById("tampTPlotDiv"),n.gviz,s),ne.drawTampTChartGraph.resize(),(u=Z.clone(s)).labelsDiv="tampPLegendDiv",u.series=Z.clone(s.series),u.valueRange=[0,Math.min(100,l[1])],ne.drawTampPChartGraph=new J.a(document.getElementById("tampPPlotDiv"),r.gviz,u),ne.drawTampPChartGraph.resize();case 17:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"_draw",value:function(){var e=Object(s.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.state.value,e.next=0===e.t0?3:1===e.t0?6:2===e.t0?9:3===e.t0?16:19;break;case 3:return e.next=5,this.drawChart(t,a);case 5:return e.abrupt("break",19);case 6:return e.next=8,this.drawGrowthRate(t,a);case 8:return e.abrupt("break",19);case 9:return e.next=11,this.drawChart(t,a,!1);case 11:return e.next=13,this.drawGrowthRate(t,a,!1);case 13:return e.next=15,this.drawProjectionChart(t,a);case 15:return e.abrupt("break",19);case 16:return e.next=18,this.drawTamponiChart(t,a);case 18:return e.abrupt("break",19);case 19:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var a=this,n=this.props.field,r=this.getSelectedItems();this.setState({value:t},(function(){ne.drawChartDrawing=!1,a._draw(n,r)}))}},{key:"getLabel",value:function(){this.state.value;return"Approfondimento"}},{key:"getContent",value:function(){var e=this,t=this.state,a=t.lastGrowthRates,n=t.value,i=t.projPlotStart,o=a;switch(n){case 0:return r.a.createElement("div",{className:"explanation"},r.a.createElement(k.a,{component:"p"},'Totale casi: sono tutte le persone che sono state certificate essere infette da coronavirus. Questo numero e\' uguale alla somma "persone attualmente positive" + "persone guarite" + "persone decedute"'),r.a.createElement("br",null),r.a.createElement(k.a,{component:"p"},"Velocita': indica quanto velocemente aumentano i casi. Se un giorno la velocita' e' 10, vuol dire che dal giorno precedente ci sono stati 10 casi in piu'."),r.a.createElement(k.a,{component:"p"},"Nota: se la velocita' e' troppo piccola, fai uno zoom per ingrandirla."),r.a.createElement("br",null),r.a.createElement(k.a,{component:"p"},"Per vedere come sarebbe stato l'andamento dell'epidemia senza le misure di lock down, vai a ",r.a.createElement("button",{onClick:function(){return e.handleChange(null,2)}},"proiezione growth rate")));case 1:return r.a.createElement("div",{className:"explanation"},r.a.createElement(k.a,{component:"p"},"In data ",(null===o||void 0===o?void 0:o.date)?null===o||void 0===o?void 0:o.date.toLocaleString():"[non-disponibile]",", i growth rate sono:",r.a.createElement("br",null),r.a.createElement("br",null),(null===o||void 0===o?void 0:o.data)?o.data.map((function(e,t){return r.a.createElement("span",{key:t},e.map((function(e){return Z.isNumber(e)?e.toFixed(4):e})).join(" "),r.a.createElement("br",null))})):"[non disponibile]"),r.a.createElement("br",null),r.a.createElement(k.a,{component:"p"},"Growth rate: rapporto tra la velocita' di un giorno e quella del giorno precedente. E' una quantita' importante perche' e' una stima della crescita della velocita'. Se il growth rate e' maggiore di 1, allora la velocita' sta' crescendo. Se e' minore, sta' diminuendo. L'epidemia finisce solo se la velocita' scende e rimane a zero."),r.a.createElement("br",null),r.a.createElement(k.a,{component:"p"},"La crescita del numero di casi in un'epidemia come il Coronavirus e' esponenziale. In una crescita esponenziale anche valori poco piu' alti (growth rate > 1) implicano un'altissima crescita. Ad esempio, se ci sono 100 infetti, con growth rate 1.22, solo dopo 30 giorni ci saranno 39000 infetti."),r.a.createElement("br",null),ie);case 2:return r.a.createElement("div",{className:"explanation"},r.a.createElement(k.a,{component:"p"},"In questo grafo, viene usato il growth rate per mostrare ",r.a.createElement("b",null,"a grandi linee")," ","come procederebbe l'epidemia se non venissero fatte delle misure di contenimento e lock-down. Senza misure di prevenzione, l'andamento dei nuovi casi sarebbe esponenziale."),i?r.a.createElement(k.a,{component:"p"},"L'andamento ipotetico graficato (linee tratteggiate) e' a partire da giorno ",i.date.toLocaleString(),", dove i growth rate erano ",i.gr.map((function(e){return e.toFixed(3)})).join(", ")," in ",i.series.join(", "),".",r.a.createElement("br",null),"Clicca su un punto del grafo per graficare l'andamento ipotetico a partire da quel punto. Verra' usato il growth rate di quel giorno (solo su desktop, non funziona da cellulare)."):"",ie);case 3:return re;default:return r.a.createElement("div",null)}}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.state.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{value:e,onChange:this.handleChange.bind(this),"aria-label":"ploty tabs",variant:"scrollable",scrollButtons:"auto",className:"generalTabs"},r.a.createElement(ee.a,{label:"Totale casi"}),r.a.createElement(ee.a,{label:"Growth Rate"}),r.a.createElement(ee.a,{label:"Proiezione Growth Rate"}),r.a.createElement(ee.a,{label:"Tamponi"})),r.a.createElement(oe,{label:"Totale casi",value:e,index:0},r.a.createElement("div",{id:"totaleCasi",style:{height:"100%"}},r.a.createElement(v.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},r.a.createElement(v.a,{item:!0,xs:12,md:12,className:"containerLegend"},r.a.createElement("div",{id:"legendDiv"})),r.a.createElement(v.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:window.innerWidth-100+"px"}},r.a.createElement("div",{id:"plotDiv",style:{width:"100%",height:"100%"}})),r.a.createElement(v.a,{item:!0,xs:12},this.getContent())))),r.a.createElement(oe,{label:"Growth Rate",value:e,index:1},r.a.createElement("div",null,r.a.createElement(v.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},r.a.createElement(v.a,{item:!0,xs:12,md:12,className:"containerLegend"},r.a.createElement("div",{id:"growthRateLegendDiv"})),r.a.createElement(v.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:window.innerWidth-100+"px"}},r.a.createElement("div",{id:"growthRatePlotDiv",style:{width:"100%",height:"100%"}})),r.a.createElement(v.a,{item:!0,xs:12},this.getContent())))),r.a.createElement(oe,{label:"Proiezione",value:e,index:2},r.a.createElement("div",null,r.a.createElement(v.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},r.a.createElement(v.a,{item:!0,xs:12,md:12,className:"containerLegend"},r.a.createElement("div",{id:"projLegendDiv"})),r.a.createElement(v.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:window.innerWidth-100+"px"}},r.a.createElement("div",{id:"projPlotDiv",style:{width:"100%",height:"100%"}})),r.a.createElement(v.a,{item:!0,xs:12},this.getContent())))),r.a.createElement(oe,{label:"Tamponi",value:e,index:3},r.a.createElement("div",null,r.a.createElement(v.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},r.a.createElement(v.a,{item:!0,xs:12,md:12,className:"containerLegend"},r.a.createElement("div",{id:"tampPLegendDiv"})),r.a.createElement(v.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:window.innerWidth-100+"px"}},r.a.createElement("div",{id:"tampPPlotDiv",style:{width:"100%",height:"100%"}})),r.a.createElement(v.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:window.innerWidth-100+"px"}},r.a.createElement("div",{id:"tampTPlotDiv",style:{width:"100%",height:"100%"}})),r.a.createElement(v.a,{item:!0,xs:12,md:12,className:"containerLegend"},r.a.createElement("div",{id:"tampTLegendDiv"})),r.a.createElement(v.a,{item:!0,xs:12},this.getContent())))))}}]),a}(n.Component),ce=Object(j.a)((function(e){var t;return{root:{},drawer:Object(d.a)({},e.breakpoints.up("sm"),{width:300,flexShrink:0}),appBar:(t={},Object(d.a)(t,e.breakpoints.up("sm"),{}),Object(d.a)(t,"background","#2c2e35"),t),menuButton:Object(d.a)({border:"solid 1px #FFF",borderRadius:"15px",fontSize:"10px",padding:"3px"},"fontSize","1rem"),toolbar:e.mixins.toolbar,drawerPaper:{background:"#2c2e35",color:"#FFF",textAlign:"center"},content:{}}}));function se(e){var t=e.container,a=ce(),n=Object(C.a)(),i=r.a.useState(!1),o=Object(u.a)(i,2),l=o[0],d=o[1],f=function(){d(!l)},E=r.a.useState("Regione"),j=Object(u.a)(E,2),O=j[0],R=j[1],D=r.a.useState([]),T=Object(u.a)(D,2),S=T[0],L=T[1],G=r.a.useState([]),F=Object(u.a)(G,2),M=F[0],I=F[1],B=r.a.useState(["Lombardia","Veneto"]),V=Object(u.a)(B,2),H=V[0],q=V[1],_=r.a.useState(["Bergamo","Milano","Venezia"]),A=Object(u.a)(_,2),U=A[0],Y=A[1];r.a.useEffect((function(){(function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(W.init)();case 2:L(Object(K.getProvinces)().sort()),I(Object(K.getRegions)().sort());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var J=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar},r.a.createElement(v.a,{container:!0,style:{position:"relative",top:"15px"}},r.a.createElement(v.a,{item:!0,xs:6},r.a.createElement(k.a,{variant:"h6",noWrap:!0,style:{paddingLeft:10}},"Filtra")),r.a.createElement(v.a,{item:!0,xs:6},r.a.createElement(w.a,{style:{float:"right",cursor:"pointer"},onClick:f})))),r.a.createElement(h.a,null),r.a.createElement(z.a,{exclusive:!0,value:O,onChange:function(e,t){R(t)},"aria-label":"aree_buttons"},r.a.createElement(P.a,{value:"Nazione","aria-label":"bold"},"Nazione"),r.a.createElement(P.a,{value:"Regione","aria-label":"bold"},"Regioni"),r.a.createElement(P.a,{value:"Province","aria-label":"bold"},"Province")),r.a.createElement(h.a,null),r.a.createElement("div",{style:{display:"Regione"===O?"block":"none"}},r.a.createElement(N,{id:"regione",values:H,setvalue:function(e){q(e)},type:"Regioni",lists:M})),r.a.createElement("div",{style:{display:"Province"===O?"block":"none"}},r.a.createElement(N,{id:"province",values:U,setvalue:function(e){Y(e)},type:"Province",lists:S})),r.a.createElement("div",{style:{display:"Nazione"===O?"block":"none"}},r.a.createElement(N,{id:"nazione",values:["Italia"],type:"Nazione",lists:["Italia"]})));return r.a.createElement("div",{className:a.root},r.a.createElement(p.a,null),r.a.createElement(m.a,{position:"fixed",className:a.appBar},r.a.createElement(x.a,null,r.a.createElement(v.a,{container:!0},r.a.createElement(v.a,{xs:6},r.a.createElement(k.a,{variant:"h6",noWrap:!0},"Numeric News")),r.a.createElement(v.a,{xs:6},r.a.createElement(b.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:f,style:{float:"right"}},r.a.createElement(y.a,null)," Seleziona"))))),r.a.createElement("nav",{className:a.drawer,"aria-label":"mailbox folders"},r.a.createElement(g.a,{container:t,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:l,onClose:f,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},J)),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(le,{types:O,field:"Regione"===O?"denominazione_regione":"denominazione_provincia",regionValues:H,provinceValues:U})))}var ue=function(){return r.a.createElement("div",{id:"App"},r.a.createElement(v.a,{container:!0},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(se,null))))},de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");de?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):me(t,e)}))}}()}},[[141,1,2]]]);
//# sourceMappingURL=main.fd6ead10.chunk.js.map