(this.webpackJsonpcovid19italia=this.webpackJsonpcovid19italia||[]).push([[0],{141:function(e,a,t){e.exports=t(182)},146:function(e,a,t){},147:function(e,a,t){},182:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(13),o=t.n(i),l=(t(146),t(147),t(12)),c=t.n(l),s=t(27),u=t(31),d=t(78),m=t(239),p=t(238),h=t(236),v=t(235),g=t(247),f=t(125),b=t.n(f),w=t(232),E=t(126),x=t.n(E),y=t(240),k=t(233),P=t(230),z=t(18),j=t(248),C=t(237),O=t(246),R=t(241),D=t(243),L=t(115),T=t.n(L),V=t(119),S=t.n(V),F=r.a.createElement(T.a,{fontSize:"small"}),G=r.a.createElement(S.a,{fontSize:"small"}),I=Object(P.a)((function(e){return{input:{"&::placeholder":{color:"#FFF"}}}}));function N(e){var a=I();return r.a.createElement(D.a,{multiple:!0,options:e.lists,disableCloseOnSelect:!0,getOptionLabel:function(e){return e},value:e.values,onChange:function(a,t){t.length&&e.setvalue(t,e.type)},style:{background:"#FFF",padding:20},renderOption:function(e,a){var t=a.selected;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{icon:F,checkedIcon:G,style:{marginRight:8},checked:t}),e)},renderInput:function(t){return r.a.createElement(R.a,Object.assign({InputProps:{classes:{input:a.input}},style:{color:"#FFF"}},t,{variant:"outlined",label:"",placeholder:e.type}))},id:e.id+Math.random()})}var M=t(28),W=t(128),q=t(121),B=t(76),H=t(59),_=t(129),A=t(127),Q=t(130),U=t(41),Y=t(42),J=t(30),$=t(124),K=t(16),X=t(242),Z=t(244),ee=t(234),ae=t(45),te=t(68),ne={},re=r.a.createElement("div",{className:"explanation"},r.a.createElement(k.a,{component:"p"},"In questi due grafi viene rappresentata la percentuale di tamponi risultati positivi e il numero totale di tamponi effettuati in un dato giorno. Se il numero totale di tamponi e' alto, una bassa percentuale fa' pensare che la regione sta' facendo un numero di tamponi piu' che adeguato.",r.a.createElement("br",null),"La situazione e' tuttavia complicata dal fatto che una regione puo' fare piu' di un tampone alla stessa persona (vedi ",r.a.createElement("a",{href:"https://www.youtrend.it/2020/03/25/coronavirus-il-rebus-dei-tamponi-multipli/"},"Lorenzo Ruffino"),")",r.a.createElement("br",null),"Nota: non e' disponibile il numero di tamponi per provincia, ma solo per regione."));function ie(e){var a=e.children,t=e.value,n=e.index,i=Object(Q.a)(e,["children","value","index"]);return r.a.createElement(k.a,Object.assign({component:"div",role:"tabpanel",hidden:t!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},i,{style:{height:"100%"}}),t===n&&r.a.createElement(X.a,{style:{height:"50%"},p:3},a))}var oe=function(e){Object(_.a)(t,e);var a=Object(A.a)(t);function t(e){var n;return Object(B.a)(this,t),(n=a.call(this,e)).state={date:(new Date).toLocaleString(),maxVelLastPercRow:[new Date(0),0,0],maxVelLastNullPercRows:[],projPlotStart:null,activeStep:0,value:0,open:!1},n}return Object(H.a)(t,[{key:"componentWillMount",value:function(){var e=this;U.a.load((function(){e._draw(e.props.field,"denominazione_regione"===e.props.field?e.props.regionValues:e.props.provinceValues)}))}},{key:"componentDidUpdate",value:function(e){if(e.field!==this.props.field||!K.isEqual(e.regionValues,this.props.regionValues)||!K.isEqual(e.provinceValues,this.props.provinceValues)){var a="denominazione_regione"===this.props.field?this.props.regionValues:this.props.provinceValues;if(!a.length)return;this._draw(this.props.field,a)}}},{key:"darkenColor",value:function(e){var a=Y.a.toRGB_(e);return a.r=Math.floor((255+a.r)/2),a.g=Math.floor((255+a.g)/2),a.b=Math.floor((255+a.b)/2),"rgb("+a.r+","+a.g+","+a.b+")"}},{key:"barChartPlotter",value:function(e){var a=e.drawingContext,t=e.points,n=e.dygraph.toDomYCoord(0);a.fillStyle=this.darkenColor(e.color);for(var r=1/0,i=1;i<t.length;i++){var o=t[i].canvasx-t[i-1].canvasx;o<r&&(r=o)}for(var l=Math.floor(2/3*r),c=0;c<t.length;c++){var s=t[c],u=s.canvasx;a.fillRect(u-l/2,s.canvasy,l,n-s.canvasy),a.strokeRect(u-l/2,s.canvasy,l,n-s.canvasy)}}},{key:"legendFormatter",value:function(e){if(null===e.x)return e.series.map((function(e){return"<p>"+e.dashHTML+" "+e.labelHTML+"</p>"}));var a=e.xHTML?this.getLabels()[0]+": "+e.xHTML:"";return e.series.forEach((function(e){if(e.isVisible){var t=e.labelHTML+(e.yHTML?": "+e.yHTML:"");e.isHighlighted&&(t="<span>"+t+"</span>"),a+="<p>"+e.dashHTML+" "+t}})),a+="<br><br>Doppio click per resettare lo zoom"}},{key:"drawGrowthRate",value:function(){var e=Object(s.a)(c.a.mark((function e(a,t){var n,r,i,o,l,s,u=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(u.length>2&&void 0!==u[2])||u[2],e.next=3,Object(M.init)();case 3:return e.next=5,Object(J.generalPlotGrowthRate)(a,t);case 5:r=e.sent,ne.drawGrowthRatePlot=r,i=Object(ae.smallYBounds)(r.data.slice(1),5),o=r.data[r.data.length-1][0],l=r.data[0].map((function(e,a){return[e.label].concat([r.data[r.data.length-1][a]])})).slice(1,r.data[0].length-1),this.setState({lastGrowthRates:{data:l,date:o}}),r.gviz=U.a.api.visualization.arrayToDataTable(r.data),s={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"growthRateLegendDiv",colorValue:1,digitsAfterDecimal:4,series:r.options,valueRange:i},n&&(ne.drawGrowthRateGraph=new Y.a(document.getElementById("growthRatePlotDiv"),r.gviz,s),ne.drawGrowthRateGraph.resize());case 14:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"annotationOnHighlight",value:function(e,a,t,n,r,i){var o,l=[],c=Object(q.a)(n);try{for(c.s();!(o=c.n()).done;){var s=o.value,u=""+s.yval,d=te(t).format("DD MMM"),m=Math.max(u.length,d.length),p="".concat(u,"<br>").concat(d),h=m/1.5;l.push({series:s.name,xval:t,width:18*h,height:46,tickHeight:4,html:p})}}catch(v){c.e(v)}finally{c.f()}e.setAnnotations(l)}},{key:"annotationOnPointClick",value:function(e,a,t){return this.annotationOnHighlight(e,a,t.xval,[t])}},{key:"drawChart",value:function(){var e=Object(s.a)(c.a.mark((function e(a,t){var n,r,i,o=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(o.length>2&&void 0!==o[2])||o[2],e.next=3,Object(M.init)();case 3:return e.next=5,Object(J.generalPlot)(a,t);case 5:r=e.sent,ne.drawChartPlot=r,r.gviz=U.a.api.visualization.arrayToDataTable(r.data),i={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"legendDiv",colorValue:1,series:r.options},n&&(ne.drawChartGraph=new Y.a(document.getElementById("plotDiv"),r.gviz,i),ne.drawChartGraph.resize());case 10:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"calculateProjectionChart",value:function(){var e=Object(s.a)(c.a.mark((function e(a,t){var n,r,i,o,l,s,u,d,m,p,h,v,g,f=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=f.length>2&&void 0!==f[2]?f[2]:null,(null===(n=ne.drawChartPlot)||void 0===n?void 0:n.data)&&(null===(r=ne.drawGrowthRatePlot)||void 0===r?void 0:r.data)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Object(M.init)();case 5:return o=function(e){var a=e[0].map((function(a,t){return 0==t?0:Object(ae.max2)(e.map((function(e,a){return 0==a?0:e[t]})).filter(K.isFinite)).max}));return Math.max.apply(Math,Object(W.a)(a))},l=function(e){for(var a=K.range(0,e[1].length-1).map((function(e){return null})),t=1;t<e[1].length;t++){for(var n=0,r=1;r<e.length;r++)K.isFinite(e[r][t])&&(a[t]+=e[r][t],n++);a[t]/=n}return Object(ae.average)(a.filter(K.isFinite))},s=function(e,a){for(var t=1/0,n=-1,r=1;r<e[1].length;r++)for(var i=1;i<e.length;i++)K.isFinite(e[i][r])&&Math.abs(e[i][r]-a)<t&&(t=Math.abs(e[i][r]-a),n=i);return{i:n,y:t}},u=-1,i||(d=ne.drawGrowthRatePlot.data,(m=s(d,l(d))).i>=0&&(i=d[m.i][0],u=m.i)),i&&u<0&&(u=ne.drawGrowthRatePlot.data.findIndex((function(e,a){return a>0&&e[0].getTime()==i.getTime()}))),this.setState({projPlotStart:{gr:u>=0?ne.drawGrowthRatePlot.data[u].slice(1,-1):[],date:i,series:ne.drawGrowthRatePlot.data[0].slice(1,-1).map((function(e){return e.label}))}}),e.next=14,Object(J.projectGeneralPlot)(t.length,ne.drawChartPlot,ne.drawGrowthRatePlot,i);case 14:return(p=e.sent).gviz=U.a.api.visualization.arrayToDataTable(p.data),h=o(ne.drawChartPlot.data),v=o(p.data),g=v>h?Math.min(4*h,v):h,e.abrupt("return",{plot:p,safeMax:g});case 20:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"drawProjectionChart",value:function(){var e=Object(s.a)(c.a.mark((function e(a,t){var n,r,i,o,l,u,d=this,m=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=m.length>2&&void 0!==m[2]?m[2]:null,e.next=3,this.calculateProjectionChart(a,t,n);case 3:r=e.sent,i=r.plot,o=r.safeMax,l={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"projLegendDiv",colorValue:1,series:i.options,valueRange:[0,o]},ne.drawProjectionChartGraph&&ne.drawProjectionChartGraph.destroy(),ne.drawProjectionChartGraph=new Y.a(document.getElementById("projPlotDiv"),i.gviz,l),ne.drawProjectionChartGraph.resize(),(u=ne.drawProjectionChartGraph).ready((function(){u.updateOptions({pointClickRadius:50,pointClickCallback:function(){var e=Object(s.a)(c.a.mark((function e(n,r){var i,o,l,s,m,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.idx,o=ne.drawChartPlot.data,l=o[i+1][0],e.next=5,d.calculateProjectionChart(a,t,l);case 5:s=e.sent,m=s.plot,p=s.safeMax,u.updateOptions({file:m.gviz,valueRange:[0,p]});case 9:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()})}));case 12:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"drawTamponiChart",value:function(){var e=Object(s.a)(c.a.mark((function e(a,t){var n,r,i,o,l,s,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.testsPlot)(a,t,0);case 2:for(n=e.sent,r=K.cloneDeep(n),i=1;i<n.data.length;i++)for(o=1;2*o<n.data[i].length;o++)n.data[i][2*o]=null,r.data[i][2*(o-1)+1]=null;l=Object(ae.smallYBounds)(r.data.slice(1),5),n.gviz=U.a.api.visualization.arrayToDataTable(n.data),r.gviz=U.a.api.visualization.arrayToDataTable(r.data),s={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"tampTLegendDiv",colorValue:1,series:n.options},ne.drawTampTChartGraph=new Y.a(document.getElementById("tampTPlotDiv"),n.gviz,s),ne.drawTampTChartGraph.resize(),(u=K.clone(s)).labelsDiv="tampPLegendDiv",u.series=K.clone(s.series),u.valueRange=l,ne.drawTampPChartGraph=new Y.a(document.getElementById("tampPPlotDiv"),r.gviz,u),ne.drawTampPChartGraph.resize();case 17:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"drawMaxVel",value:function(){var e=Object(s.a)(c.a.mark((function e(a){var t,n,r,i,o=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.init)();case 2:return e.next=4,Object(J.maxVelocityPlot)(a);case 4:(t=e.sent).options=K.mapValues(t.options,(function(e){return K.mapValues(e,(function(e,a){return"plotter"===a&&"barChartPlotter"===e?o.barChartPlotter.bind(o):e}))})),n=t.data.slice().reverse(),(r=n.findIndex((function(e){return e[2]>0})))>0&&this.setState({maxVelLastPercRow:n[r]}),this.setState({maxVelNumberOfProvinces:t.data.slice(1).reduce((function(e,a){return e+a[1]}),0),maxVelLastNullPercRows:t.data.slice(1).filter((function(e){return!K.isNumber(e[2])}))}),t.gviz=U.a.api.visualization.arrayToDataTable(t.data),i={legendFormatter:this.legendFormatter,strokeWidth:3,legend:"always",labelsDiv:"maxVelLegendDiv",colorValue:1,series:t.options},ne.drawMaxVelGraph=new Y.a(document.getElementById("maxVelPlotDiv"),t.gviz,i),ne.drawMaxVelGraph.resize();case 14:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"_draw",value:function(){var e=Object(s.a)(c.a.mark((function e(a,t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=this.state.value,e.next=0===e.t0?3:1===e.t0?6:2===e.t0?9:3===e.t0?12:4===e.t0?19:22;break;case 3:return e.next=5,this.drawChart(a,t);case 5:return e.abrupt("break",22);case 6:return e.next=8,this.drawMaxVel(a,t);case 8:return e.abrupt("break",22);case 9:return e.next=11,this.drawGrowthRate(a,t);case 11:return e.abrupt("break",22);case 12:return e.next=14,this.drawChart(a,t,!1);case 14:return e.next=16,this.drawGrowthRate(a,t,!1);case 16:return e.next=18,this.drawProjectionChart(a,t);case 18:return e.abrupt("break",22);case 19:return e.next=21,this.drawTamponiChart(a,t);case 21:return e.abrupt("break",22);case 22:case"end":return e.stop()}}),e,this)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,a){var t=this,n=this.props.field,r="denominazione_regione"===n?this.props.regionValues:this.props.provinceValues;this.setState({value:a},(function(){ne.drawChartDrawing=!1,t._draw(n,r)}))}},{key:"getLabel",value:function(){this.state.value;return"Approfondimento"}},{key:"getContent",value:function(){var e=this,a="denominazione_provincia"===this.props.field?"province":"regioni",t=this.state,n=t.maxVelLastPercRow,i=t.maxVelLastNullPercRows,o=t.maxVelNumberOfProvinces,l=t.lastGrowthRates,c=t.value,s=t.projPlotStart,u=l;switch(c){case 0:return r.a.createElement("div",{className:"explanation"},r.a.createElement(k.a,{component:"p"},'Totale casi: sono tutte le persone che sono state certificate essere infette da coronavirus. Questo numero e\' uguale alla somma "persone attualmente positive" + "persone guarite" + "persone decedute"'),r.a.createElement("br",null),r.a.createElement(k.a,{component:"p"},"Velocita': indica quanto velocemente aumentano i casi. Se un giorno la velocita' e' 10, vuol dire che dal giorno precedente ci sono stati 10 casi in piu'."),r.a.createElement(k.a,{component:"p"},"Nota: se la velocita' e' troppo piccola, fai uno zoom per ingrandirla."),r.a.createElement("br",null),r.a.createElement(k.a,{component:"p"},"Per vedere come sarebbe stato l'andamento dell'epidemia senza le misure di lock down, vai a ",r.a.createElement("button",{onClick:function(){return e.handleChange(null,3)}},"proiezione growth rate")));case 1:return r.a.createElement("div",{className:"explanation"},r.a.createElement(k.a,{component:"p"},"In data ",n[0].toLocaleString(),","," "+n[2].toFixed(2),"% delle ",a,' italiane ha smesso di "accelerare".',n[2]>0?r.a.createElement(r.a.Fragment,null," Questo e' indicativo. Senza misure di lock-down o confinamento, l'epidemia avrebbe una velocita' sempre maggiore. "):"",r.a.createElement("br",null),"Degli ultimi 7 giorni, non e' riportata la percentuale, in quanto non e' rilevante considerare cali di accelerazione solo per dati recenti.",r.a.createElement("br",null),"La linea rappresenta l'andamento della percentuale di ",a," italiane in cui l'epidemia ha smesso di accelerare.",r.a.createElement("br",null),"Le barre rappresentano quante ",a," in un dato giorno hanno smesso di accelerare.",r.a.createElement("br",null),i.length>0?r.a.createElement("span",null,"Negli ultimi 7 giorni ci sono ",i.reduce((function(e,a){return e+a[1]}),0)," ",a,". Queste ",a,", ancora non sono stabili."):"",r.a.createElement("br",null),"Nota Bene: questo grafico e' aggiornato automaticamente ogni giorno, utilizzando i dati della Protezione Civile. In particolare, se l'epidemia dovesse riprendere, la percentuale si abbassera'.",r.a.createElement("br",null),r.a.createElement("br",null),"Come e' stato ricavato il grafo: per ogni provincia/regione p, si considera il suo picco di velocita' piu' recente. Se tale picco e' avvenuto in data t, allora la barra corrispondente alla data t viene innalzata di uno. Quindi, se la barra in data t segna 14, vuol dire che in quella data 14 province hanno avuto il loro picco di velocita' piu' recente, e che da quel momento in poi la velocita' non e' piu' aumentata oltre. Questo e' indicativo, perche' come spiegato nella sezione \"Growth Rate\", la velocita' di una epidemia non contrastata da lock-down o altre misure, e' esponenziale. In una velocita' esponenziale, la velocita' aumenterebbe sempre senza mai avere un picco.",r.a.createElement("br",null),r.a.createElement("br",null),"Dettagli sui calcoli: questo grafo e' stato ricavato cosi': per ogni provincia p, sia t* il tempo t in cui la velocita' v(t) e' massima. Se esistono piu' istanti t, in cui v(t) e' massimo, sia t* quello piu' grande. Quindi, per ogni provincia p, esiste un tempo t*(p). Ad ogni t, associamo ","bar(t)=|{p | t*(p) = t}|",", il numero di province p in cui in t hanno avuto  l'ultimo picco di velocita'. In questo modo, e' ottenuto il grafico a barre. Per il grafico a percentuale, basta fare la somma e dividere per il numero totale di province (",o," ad oggi), ovvero: ","perc(t)=sum(bar(t') t'=0...t) / NumeroDiProvincie * 100",". (Sia bar(t) che perc(t) hanno come dominio le date t in cui esiste almeno una provincia p e un tempo t*(p) = t.)",r.a.createElement("br",null),"In maniera analoga, si procede per le regioni."));case 2:return r.a.createElement("div",{className:"explanation"},r.a.createElement(k.a,{component:"p"},"In data ",(null===u||void 0===u?void 0:u.date)?null===u||void 0===u?void 0:u.date.toLocaleString():"[non-disponibile]",", i growth rate sono:",r.a.createElement("br",null),r.a.createElement("br",null),(null===u||void 0===u?void 0:u.data)?u.data.map((function(e,a){return r.a.createElement("span",{key:a},e.map((function(e){return K.isNumber(e)?e.toFixed(4):e})).join(" "),r.a.createElement("br",null))})):"[non disponibile]",r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement(k.a,{component:"p"},"Growth rate: stima quanto \"esponenziale\" e' la crescita dell'epidemia. Fino a quando supera la linea \"Crescita zero\", c'e' crescita. Solo se il growth rate diventa costante e pari alla linea crescita zero (y=1), l'epidemia finisce."),r.a.createElement(k.a,{component:"p"},"La crescita di un'epidemia e' esponenziale, quindi anche valori poco piu' alti (y > 1) implicano un'altissima crescita."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(k.a,{component:"p"},"Dettagli sui calcoli: la formula utilizzata e' ",r.a.createElement("img",{src:"/eq_growth.svg",style:{height:"50%",width:"auto"},alt:"I(t)=r**t*I(0)"}),", dove I(t) e' il numero di infetti al tempo t, r e' il growth rate e I(0) e' il numero di infetti iniziali. r=1+p, dove p e' la probabilita' di infezione. Fonte: ",r.a.createElement("a",{href:"http://katolaz.net/covid-2019/growth.html"},"Epidemic 101"),".",r.a.createElement("br",null)," Questa formula e' una forte semplificazione del reale fenomeno dell'epidemia corona virus, ma essendo l'epidemia di carattere esponenziale, rende comunque una idea di come l'epidemia sta' evolvendo."),r.a.createElement(k.a,{component:"p"},"Esempio: con I(0)=100, r=1.22, solo dopo 30 giorni si hanno 39000 infetti."),r.a.createElement(k.a,{component:"p"},"Dettagli sui calcoli: il growth rate in data t e' stimato usando la formula: ",r.a.createElement("br",null)," r(t) = (I(t)-I(t-1)) / (I(t-1)-I(t-2)) = v(t) / v(t-1)",r.a.createElement("br",null),"dove v(t) e' la velocita' al tempo t"),r.a.createElement(k.a,{component:"p"},"Per approfondire: ",r.a.createElement("a",{href:"http://katolaz.net/covid-2019/growth.html"},"Epidemic 101")));case 3:return r.a.createElement("div",{className:"explanation"},r.a.createElement(k.a,{component:"p"},"In questo grafo, viene usato il growth rate per mostrare come procederebbe l'epidemia se non venissero fatte delle misure di contenimento e lock-down. Senza misure di prevenzione, l'andamento dei nuovi casi sarebbe esponenziale."),s?r.a.createElement(k.a,{component:"p"},"L'andamento ipotetico graficato (linee tratteggiate) e' a partire da giorno ",s.date.toLocaleString(),", dove i growth rate erano ",s.gr.map((function(e){return e.toFixed(3)})).join(", ")," in ",s.series.join(", "),".",r.a.createElement("br",null),"Clicca su un punto del grafo per graficare l'andamento ipotetico a partire da quel punto. Verra' usato il growth rate di quel giorno (solo su desktop, non funziona da cellulare)."):"",r.a.createElement(k.a,{component:"p"},"La formula e' ",r.a.createElement("img",{src:"/eq_growth.svg",style:{height:"50%",width:"auto"},alt:"I(t)=r**t*I(0)"}),", dove I(t) e' il numero di infetti al tempo t, r e' il growth rate e I(0) e' il numero di infetti iniziali. r=1+p, dove p e' la probabilita' di infezione."),r.a.createElement(k.a,{component:"p"},"Esempio: con I(0)=100, r=1.22, solo dopo 30 giorni si hanno 39000 infetti."),r.a.createElement(k.a,{component:"p"},"Per approfondire: ",r.a.createElement("a",{href:"http://katolaz.net/covid-2019/growth.html"},"Epidemic 101")));case 4:return re;default:return r.a.createElement("div",null)}}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.state.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{value:e,onChange:this.handleChange.bind(this),"aria-label":"ploty tabs",variant:"scrollable",scrollButtons:"auto",className:"generalTabs"},r.a.createElement(ee.a,{label:"Totale casi"}),r.a.createElement(ee.a,{label:"Andamento nazionale"}),r.a.createElement(ee.a,{label:"Growth Rate"}),r.a.createElement(ee.a,{label:"Proiezione Growth Rate"}),r.a.createElement(ee.a,{label:"Tamponi"})),r.a.createElement(ie,{label:"Totale casi",value:e,index:0},r.a.createElement("div",{id:"totaleCasi",style:{height:"100%"}},r.a.createElement(v.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},r.a.createElement(v.a,{item:!0,xs:12,md:12,className:"containerLegend"},r.a.createElement("div",{id:"legendDiv"})),r.a.createElement(v.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:window.innerWidth-100+"px"}},r.a.createElement("div",{id:"plotDiv",style:{width:"100%",height:"100%"}})),r.a.createElement(v.a,{item:!0,xs:12},this.getContent())))),r.a.createElement(ie,{label:"Velocit\xe0 contagi",value:e,index:1},r.a.createElement("div",null,r.a.createElement(v.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},r.a.createElement(v.a,{item:!0,xs:12,md:12,className:"containerLegend"},r.a.createElement("div",{id:"maxVelLegendDiv"})),r.a.createElement(v.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:window.innerWidth-100+"px"}},r.a.createElement("div",{id:"maxVelPlotDiv",style:{width:"100%",height:"100%"}})),r.a.createElement(v.a,{item:!0,xs:12},this.getContent())))),r.a.createElement(ie,{label:"Grow Rate",value:e,index:2},r.a.createElement("div",null,r.a.createElement(v.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},r.a.createElement(v.a,{item:!0,xs:12,md:12,className:"containerLegend"},r.a.createElement("div",{id:"growthRateLegendDiv"})),r.a.createElement(v.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:window.innerWidth-100+"px"}},r.a.createElement("div",{id:"growthRatePlotDiv",style:{width:"100%",height:"100%"}})),r.a.createElement(v.a,{item:!0,xs:12},this.getContent())))),r.a.createElement(ie,{label:"Proiezione",value:e,index:3},r.a.createElement("div",null,r.a.createElement(v.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},r.a.createElement(v.a,{item:!0,xs:12,md:12,className:"containerLegend"},r.a.createElement("div",{id:"projLegendDiv"})),r.a.createElement(v.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:window.innerWidth-100+"px"}},r.a.createElement("div",{id:"projPlotDiv",style:{width:"100%",height:"100%"}})),r.a.createElement(v.a,{item:!0,xs:12},this.getContent())))),r.a.createElement(ie,{label:"Tamponi",value:e,index:4},r.a.createElement("div",null,r.a.createElement(v.a,{container:!0,style:{height:75*window.innerHeight/100+"px"}},r.a.createElement(v.a,{item:!0,xs:12,md:12,className:"containerLegend"},r.a.createElement("div",{id:"tampPLegendDiv"})),r.a.createElement(v.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:window.innerWidth-100+"px"}},r.a.createElement("div",{id:"tampPPlotDiv",style:{width:"100%",height:"100%"}})),r.a.createElement(v.a,{item:!0,xs:12,md:12,style:{position:"relative",width:"100%",height:"100%",maxWidth:window.innerWidth-100+"px"}},r.a.createElement("div",{id:"tampTPlotDiv",style:{width:"100%",height:"100%"}})),r.a.createElement(v.a,{item:!0,xs:12,md:12,className:"containerLegend"},r.a.createElement("div",{id:"tampTLegendDiv"})),r.a.createElement(v.a,{item:!0,xs:12},this.getContent())))))}}]),t}(n.Component),le=Object(P.a)((function(e){var a;return{root:{},drawer:Object(d.a)({},e.breakpoints.up("sm"),{width:300,flexShrink:0}),appBar:(a={},Object(d.a)(a,e.breakpoints.up("sm"),{}),Object(d.a)(a,"background","#2c2e35"),a),menuButton:{border:"solid 1px #FFF",borderRadius:"15px",fontSize:"10px"},toolbar:e.mixins.toolbar,drawerPaper:{background:"#2c2e35",color:"#FFF",textAlign:"center"},content:{}}}));function ce(e){var a=e.container,t=le(),n=Object(z.a)(),i=r.a.useState(!1),o=Object(u.a)(i,2),l=o[0],d=o[1],f=function(){d(!l)},E=r.a.useState("Regione"),P=Object(u.a)(E,2),O=P[0],R=P[1],D=r.a.useState([]),L=Object(u.a)(D,2),T=L[0],V=L[1],S=r.a.useState([]),F=Object(u.a)(S,2),G=F[0],I=F[1],W=r.a.useState(["Lombardia","Veneto"]),q=Object(u.a)(W,2),B=q[0],H=q[1],_=r.a.useState(["Bergamo","MIlano","Venezia"]),A=Object(u.a)(_,2),Q=A[0],U=A[1];r.a.useEffect((function(){(function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.init)();case 2:V(Object(J.getProvinces)().sort()),I(Object(J.getRegions)().sort());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var Y=r.a.createElement("div",null,r.a.createElement("div",{className:t.toolbar},r.a.createElement(v.a,{container:!0,style:{position:"relative",top:"15px"}},r.a.createElement(v.a,{item:!0,xs:6},r.a.createElement(k.a,{variant:"h6",noWrap:!0,style:{paddingLeft:10}},"Filtra")),r.a.createElement(v.a,{item:!0,xs:6},r.a.createElement(b.a,{style:{float:"right",cursor:"pointer"},onClick:f})))),r.a.createElement(h.a,null),r.a.createElement(j.a,{exclusive:!0,value:O,onChange:function(e,a){R(a)},"aria-label":"aree_buttons"},r.a.createElement(C.a,{value:"Regione","aria-label":"bold"},"Regioni"),r.a.createElement(C.a,{value:"Province","aria-label":"bold"},"Province")),r.a.createElement(h.a,null),r.a.createElement("div",{style:{display:"Regione"===O?"block":"none"}},r.a.createElement(N,{id:"regione",values:B,setvalue:function(e){H(e)},type:"Regioni",lists:G})),r.a.createElement("div",{style:{display:"Regione"!==O?"block":"none"}},r.a.createElement(N,{id:"province",values:Q,setvalue:function(e){U(e)},type:"Province",lists:T})));return r.a.createElement("div",{className:t.root},r.a.createElement(p.a,null),r.a.createElement(m.a,{position:"fixed",className:t.appBar},r.a.createElement(y.a,null,r.a.createElement(v.a,{container:!0},r.a.createElement(v.a,{xs:6},r.a.createElement(k.a,{variant:"h6",noWrap:!0},"Numeric News")),r.a.createElement(v.a,{xs:6},r.a.createElement(w.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:f,className:t.menuButton,style:{float:"right"}},r.a.createElement(x.a,null)," Seleziona ","Regioni/Province"))))),r.a.createElement("nav",{className:t.drawer,"aria-label":"mailbox folders"},r.a.createElement(g.a,{container:a,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:l,onClose:f,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},Y)),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(oe,{field:"Regione"===O?"denominazione_regione":"denominazione_provincia",regionValues:B,provinceValues:Q})))}var se=function(){return r.a.createElement("div",{id:"App"},r.a.createElement(v.a,{container:!0},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(ce,null))))},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");ue?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):de(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):de(a,e)}))}}()}},[[141,1,2]]]);
//# sourceMappingURL=main.87857a75.chunk.js.map