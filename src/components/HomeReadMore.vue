<script>
export default {
    name: "BiogasInfo",
};
</script>


<template>
    <div class="container">
        <!-- Introduzione e Specifiche di progetto -->
        <div id="read_more" class="row m-5">
            <h1>Specifiche di progetto</h1>
            <div class="col-12">
                <p>
                    Le specifiche di progetto dell'impianto sono state fissate per garantire la produzione di 1 MW (1000
                    kW), con
                    un carico medio di biomassa compreso tra 40 e 70 t/giorno. Questo dato fondamentale servirà per
                    l'elaborazione
                    del dimensionamento aziendale. Vai ai <router-link to="/parameters">Tabulati</router-link>.
                </p>
                <p>
                    Di seguito la mappatura aggiornata al 2022 degli impianti per la produzione di Metano. Con questa
                    mappa
                    ti sarà possibile identificare l'impianto più vicino alla tua zona per prendere spunto da altre
                    realtà
                    aziendali già avviate.
                </p>
            </div>

            <!-- Mappa Google -->
            <iframe class="my-3"
                src="https://www.google.com/maps/d/embed?mid=1l5lTTXeaORSkZiHJ5JMlRZ7_QkiQcmED&ehbc=2E312F" width="100%"
                height="480"></iframe>
            <a class="text-center"
                href="https://www.google.com/maps/d/embed?mid=1l5lTTXeaORSkZiHJ5JMlRZ7_QkiQcmED&ehbc=2E312F">Apri la
                mappa</a>
        </div>

        <hr>

        <!-- Sezione Biogas -->
        <div class="row m-5">
            <h1>Che cosa è il Biogas?</h1>
            <p>
                Il termine "biogas" si riferisce a un combustibile gassoso naturale, costituito principalmente da metano
                e da
                una miscela di altri gas, tra cui l'anidride carbonica. Il biogas viene generato tramite un processo di
                digestione anaerobica, ossia la fermentazione delle biomasse in assenza di ossigeno e a temperatura
                controllata.
                Le biomasse comprendono materiali organici di varia origine, come deiezioni animali, fanghi di
                depurazione,
                frazione organica dei rifiuti solidi urbani, scarti agroindustriali, sottoprodotti agricoli e colture
                dedicate.
            </p>
            <p>
                La fermentazione anaerobica è svolta da batteri che scompongono la materia organica in monomeri,
                avviando una
                fermentazione acida che produce acidi, anidride carbonica e idrogeno. Questo è seguito da una fase
                metanigena,
                in cui i batteri archea catturano la CO₂ e la convertono in metano. Il processo genera anche un
                sottoprodotto
                chiamato digestato, ricco di azoto ammoniacale, che può essere impiegato come fertilizzante rinnovabile.
            </p>
            <small><a class="a_dark" href="https://www.lemvigbiogas.com/BiogasHandbook.pdf">Handbook Biogas</a></small>
            <small><a class="a_dark" href="https://www.crpa.it/nqcontent.cfm?a_id=3722&tt=crpa_www">Manuale
                    Pratico</a></small>
        </div>

        <hr>

        <!-- Quadro Normativo -->
        <div class="row m-5">
            <h1>Quadro normativo</h1>
            <p>
                Si inizia a parlare per la prima volta di incentivazione di biogas e gas derivante dalla biomassa con la
                direttiva 2009/73/CE. L’Italia ha recepito tale normativa con il DM del 05/12/2013, ma a causa del
                numero esiguo
                di impianti, è stato emanato il DM 02/03/2018 (Decreto Biometano) per favorire lo sviluppo di questo
                settore.
            </p>
            <h3>DM 02/03/2018 - (Decreto Biometano)</h3>
            <small><a class="a_dark"
                    href="https://www.mimit.gov.it/images/stories/normativa/DM-biometano-2-marzo_2018_FINALE.pdf">Testo
                    del
                    Decreto</a></small>
            <p>
                Il decreto disciplina la produzione, immissione in rete e incentivazione del biometano, specificando
                definizioni, capacità produttiva e criteri per l'incentivazione. Include dettagli su impianti di
                produzione,
                criteri ambientali e scadenze per ottenere gli incentivi.
            </p>
        </div>

        <hr>

        <!-- Definizioni -->
        <div class="row m-5">
            <h1>Definizioni UNI 10458</h1>
            <ul>
                <li><strong>Biogas:</strong> Miscela gassosa prodotta nel processo di digestione anaerobica, costituita
                    prevalentemente da metano (50%-80% v/v) e anidride carbonica.</li>
                <li><strong>Influente:</strong> Biomassa avviata alla digestione anaerobica dopo eventuali
                    pre-trattamenti.</li>
                <li><strong>Digestore:</strong> Contenitore sigillato dove avviene la digestione anaerobica.</li>
                <li><strong>Digestato:</strong> Biomassa stabilizzata in uscita dal digestore, utilizzabile come
                    fertilizzante.
                </li>
            </ul>
        </div>

        <hr>

        <!-- Processi Biochimici -->
        <div class="row m-5">
            <h1>Processi biochimici</h1>
            <p>
                I processi di conversione biochimica permettono di ricavare energia dalla materia organica grazie
                all'azione di
                enzimi, funghi e microrganismi. La digestione anaerobica è suddivisa in tre fasi:
            </p>
            <ul>
                <li><strong>Fase idrolitica:</strong> Scomposizione delle sostanze complesse in composti più semplici.
                </li>
                <li><strong>Fase acidogenetica:</strong> Conversione dei composti semplici in acidi organici e gas.</li>
                <li><strong>Fase metanigena:</strong> Produzione di metano e anidride carbonica dai composti formatisi
                    nella
                    fase precedente.</li>
            </ul>
        </div>

        <div class="row justify-content-center my-5">
            <img class="text-center img-fluid" style="max-width: 80%;" src="../assets/img/dig_anaerob.png"
                alt="Processo di digestione anaerobica">
        </div>

        <hr>

        <!-- Biodegradabilità -->
        <div class="row m-5">
            <h1>Biodegradabilità</h1>
            <p>
                La biodegradabilità anaerobica di una matrice organica è valutata attraverso analisi chimiche e test BMP
                (Biomethane Potential), utili a determinare il potenziale metanigeno di un substrato.
            </p>
            <h3>Analisi chimica</h3>
            <p>
                L'analisi chimica del substrato valuta il contenuto di umidità, proteine, grassi e ceneri. Questo metodo
                rapido,
                sebbene meno preciso, offre un'indicazione generale del potenziale metanigeno del substrato.
            </p>

            <h3>BMP statico</h3>
            <p>
                Questo test di laboratorio misura la produzione di biogas in condizioni controllate. Il BMP si calcola
                sottraendo
                la produzione di biogas dell'inoculo dalla miscela di inoculo e substrato.
            </p>
        </div>

        <hr>

        <!-- Substrati di alimentazione -->
        <div class="row m-5">
            <h1>Substrati di alimentazione - Prodotti e Sottoprodotti</h1>
            <p>
                Gli impianti a biogas possono essere alimentati sia con prodotti agricoli che con sottoprodotti derivati
                da
                processi industriali. I sottoprodotti possono essere di origine vegetale o animale e devono rispettare
                specifici
                requisiti normativi per essere impiegati nel processo di digestione anaerobica.
            </p>
        </div>
    </div>
</template>



<style scoped>

</style>