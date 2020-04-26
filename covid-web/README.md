Questo codice e' stato scritto nei ritagli del mio tempo libero e anche con una certa premura di rendere il prima possibile accessibile i grafi sul sito [Numeric News](https://numericnews.github.io/). 
Quindi, il codice non e' per niente ottimizzato. Inoltre, deve essere documentato meglio.  
Tuttavia, i calcoli fatti sono abbastanza semplici. La cosa meno leggibile e' il codice che gestisce i plot in formato GViZ, dove plot[i][j] si riferisce all'ordinata della serie (j+1)-esima, nell'ascissa (i+1)-esima. Nel caso del plot "totale casi" (generalPlot), plot[i][0] e' la data, plot[i][1] e' il totale casi della prima provincia, plot[i][2] e' la velocita' della prima provincia. Cioe', ogni riga e' cosi': [data, prov1, vel1, prov2, vel2, ...]. Lo stesso vale per le regioni. plot[0] e' una lista che contiene la descrizione delle serie. 

Il codice per il calcolo dell'r0 e' deprecato. Il paper a cui faceva riferimento vale solo per la nave crociera che era stata messa in quarantena in Giappone.  

index.ts e index.sh e' utilizzato per testare il codice in maniera spicciola. 

totaleCasi.ts
-------------

generalPlot() crea il plot dei "totale casi" e delle velocita' dei totale casi. La velocita' e' il numero di nuovi casi.  
generalPlotGrowthRate() crea il plot del growth rate.  
projectGeneralPlot() crea il plot della proiezione basata sul growth rate. Esempio di invocazione:

tamponi.ts
----------

testsPlot() crea il plot dei tamponi/casi\_testati. Il plot risultate e' composto da due serie: quella dei nuovi tamponi giornalieri e quella della percentuale dei tamponi positivi. 
Cerca di usare il campo casi\_testati del json della Protezione Civile piuttosto che il campo "tamponi".

download-data.ts
----------------

Scarica i dati dal github della protezione civile.
