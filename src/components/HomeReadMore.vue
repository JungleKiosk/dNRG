<script>
export default {
    name: "BiogasInfo",
};
</script>

<template>
    <div id="read_more" class="container">
        <!-- Introduzione e Specifiche di progetto -->
        <div class="row m-5">
            <h1>{{ $t('biogasInfo.projectTitle') }}</h1>
            <div class="col-12">
                <p>{{ $t('biogasInfo.projectDescription') }} <router-link to="/parameters">{{ $t('biogasInfo.tables') }}</router-link>.</p>
                <p>{{ $t('biogasInfo.mapDescription') }}</p>
            </div>

            <!-- Mappa Google -->
            <iframe class="my-3"
                src="https://www.google.com/maps/d/embed?mid=1l5lTTXeaORSkZiHJ5JMlRZ7_QkiQcmED&ehbc=2E312F" width="100%"
                height="480"></iframe>
            <a class="text-center"
                href="https://www.google.com/maps/d/embed?mid=1l5lTTXeaORSkZiHJ5JMlRZ7_QkiQcmED&ehbc=2E312F">{{ $t('biogasInfo.openMap') }}</a>
        </div>

        <hr>

        <!-- Sezione Biogas -->
        <div class="row m-5">
            <h1>{{ $t('biogasInfo.whatIsBiogas') }}</h1>
            <p>{{ $t('biogasInfo.biogasDescription1') }}</p>
            <p>{{ $t('biogasInfo.biogasDescription2') }}</p>
            <small><a class="a_dark" href="https://www.lemvigbiogas.com/BiogasHandbook.pdf">{{ $t('biogasInfo.biogasHandbook') }}</a></small>
            <small><a class="a_dark" href="https://www.crpa.it/nqcontent.cfm?a_id=3722&tt=crpa_www">{{ $t('biogasInfo.practiceManual') }}</a></small>
        </div>

        <hr>

        <!-- Quadro Normativo -->
        <div class="row m-5">
            <h1>{{ $t('biogasInfo.legalFramework') }}</h1>
            <p>{{ $t('biogasInfo.legalDescription') }}</p>
            <h3>{{ $t('biogasInfo.decreeTitle') }}</h3>
            <small><a class="a_dark"
                    href="https://www.mimit.gov.it/images/stories/normativa/DM-biometano-2-marzo_2018_FINALE.pdf">{{ $t('biogasInfo.decreeText') }}</a></small>
            <p>{{ $t('biogasInfo.decreeDescription') }}</p>
        </div>

        <hr>

        <!-- Definizioni -->
        <div class="row m-5">
            <h1>{{ $t('biogasInfo.definitionsTitle') }}</h1>
            <ul>
                <li><strong>{{ $t('biogasInfo.definitions.biogas') }}</strong></li>
                <li><strong>{{ $t('biogasInfo.definitions.influente') }}</strong></li>
                <li><strong>{{ $t('biogasInfo.definitions.digestore') }}</strong></li>
                <li><strong>{{ $t('biogasInfo.definitions.digestato') }}</strong></li>
            </ul>
        </div>

        <hr>

        <!-- Processi Biochimici -->
        <div class="row m-5">
            <h1>{{ $t('biogasInfo.biochemicalProcesses') }}</h1>
            <p>{{ $t('biogasInfo.biochemicalDescription') }}</p>
            <ul>
                <li><strong>{{ $t('biogasInfo.processes.hydrolysis') }}</strong></li>
                <li><strong>{{ $t('biogasInfo.processes.acidogenesis') }}</strong></li>
                <li><strong>{{ $t('biogasInfo.processes.methanogenesis') }}</strong></li>
            </ul>
        </div>

        <div class="row justify-content-center my-5">
            <img class="text-center img-fluid" style="max-width: 80%;" src="../assets/img/dig_anaerob.png"
                alt="Processo di digestione anaerobica">
        </div>

        <hr>

        <!-- Biodegradabilità -->
        <div class="row m-5">
            <h1>{{ $t('biogasInfo.biodegradability') }}</h1>
            <p>{{ $t('biogasInfo.biodegradabilityDescription') }}</p>

            <h3>{{ $t('biogasInfo.chemicalAnalysis') }}</h3>
            <p>{{ $t('biogasInfo.chemicalAnalysisDescription') }}</p>

            <h3>{{ $t('biogasInfo.bmpStatic') }}</h3>
            <p>{{ $t('biogasInfo.bmpStaticDescription') }}</p>
        </div>

        <hr>

        <!-- Substrati di alimentazione -->
        <div class="row m-5">
            <h1>{{ $t('biogasInfo.substratesTitle') }}</h1>
            <p>{{ $t('biogasInfo.substratesDescription') }}</p>
        </div>
    </div>
</template>

<style scoped>
/* Aggiungi qui il tuo stile se necessario */
</style>
