Questo codice e' stato scritto nei ritagli del mio tempo libero e anche con una certa premura di rendere il prima possibile accessibile i grafi sul sito [Numeric News](https://numericnews.github.io/). 
Quindi, il codice non e' per niente ottimizzato. Inoltre, potrebbe essere documentato meglio. 
Tuttavia, i calcoli fatti sono abbastanza semplici. La cosa meno leggibile e' il codice che gestisce i plot in formato [GViZ](https://developers.google.com/chart/interactive/docs/reference?csw=1#DataTable). La data-table di GViZ non e' molto maneggiabile.

totaleCasi.ts
-------------

generalPlot() crea il plot dei "totale casi" e delle velocita' dei totale casi. La velocita' e' il numero di nuovi casi.  
generalPlotGrowthRate() crea il plot del growth rate.  
projectGeneralPlot() crea il plot della proiezione basata sul growth rate.

tamponi.ts
----------

testsPlot() crea il plot dei tamponi/casi\_testati. Il plot risultante e' composto da due serie: quella dei nuovi tamponi giornalieri e quella della percentuale dei tamponi positivi. 
testsPlot() cerca di usare il campo casi\_testati del json della Protezione Civile piuttosto che il campo "tamponi", quando possibile.

download-data.ts
----------------

Scarica i dati dal github della protezione civile.

r0.r e r0.ts
------------

Il codice per il calcolo dell'r0 e' deprecato.

GViZ
----

plot[i][j] si riferisce all'ordinata della serie (j+1)-esima, nell'ascissa (i+1)-esima.  
Nel caso del plot "totale casi" (generalPlot), plot[i][0] e' la data, plot[i][1] e' il totale casi della prima provincia, plot[i][2] e' la velocita' della prima provincia. Ogni riga i e' cosi': [data, totale provincia 1, velocita' provincia 1, totale provincia 2, velocita' provincia 2, ...]. Lo stesso vale per le regioni.  
plot[0] e' una lista che contiene la descrizione delle serie: nome serie, id serie, tipo serie.

index.ts e index.sh
-------------------

Utilizzati per testare il codice in maniera spicciola. 

plot() e plotVelocity()
-----------------------

Queste sono le funzioni interne principali.  
Prendono in input 1. la lista dei dati json delle province (ma va bene anche quella delle regioni), 2. una funzione filter(), 3. 'name' e 'plotType' che al momento non servono (prima servivano per la libreria plotly) e 4. una funzione getY().  

plot() fa lo storico, plotVelocity() lo storico della velocita'.  

Entrambe scansionano la lista dei dati json e tramite la funzione filter() prendono gli elementi della lista che soddisfano la funzione filter. Ad esempio, con filter = p => p["denominazione\_provincia"].toLowerCase() == "roma", verrano considerati solo i dati riguardanti Roma. Invece, con filter = p => p["denominazione\_regione"].toLowerCase() == "sicilia" verranno considerati i dati di tutte le province della regione Sicilia.  
Nel secondo esempio (Sicilia), per una stesso giorno, ci saranno piu' dati, quindi la funzione plot() usa una mappa per aggregarli e poi, se ad esempio, era di interessa il "totale\_casi", somma tutti i totale\_casi trovati in quel giorno e lo restituisce come output di quel giorno. Cosi', quandi si fa il plot delle regioni, plot() nel giorno X, per la regione R, dara' come Y la somma dei totale\_casi di tutte le province di R.  
Infine, la funzione getY() serve per considerare altri campi dei dati Json. Di default, plot() prende "totale\_casi", con getY() si possono prendere altri campi, come "tamponi" o "casi\_testati".

plotVelocity() fa' prima un plot(), ottenendo pX e pY, e poi restituisce {x,y}, dove in y[i] c'e' pY[i] - pY[i-1]. Cioe', c'e' l'incremento che c'e' stato da pY[i-1] a pY[i]. Questa e' una velocita', se si considera che il tempo che intercorre tra il punto in i-1 e in i e' di un giorno.  
