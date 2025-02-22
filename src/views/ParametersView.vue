<template>
  <div class="container">
    <!-- Titolo -->
    <div class="row mt-5">
      <h1>{{ $t('tabulati.title') }}</h1>
      <div class="col-12 col-lg-8">
        <!-- Specifiche di Progetto -->
        <h2 class="mt-5">{{ $t('tabulati.project_specs') }}</h2>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>{{ $t('tabulati.parameter') }}</th>
                <th>{{ $t('tabulati.symbol') }}</th>
                <th>{{ $t('tabulati.value') }}</th>
                <th>{{ $t('tabulati.unit') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in specificheProgetto" :key="index">
                <td>{{ item.parametro }}</td>
                <td>{{ item.simbolo }}</td>
                <td v-if="item.link">
                  <a :href="item.link">{{ item.valore }}</a>
                </td>
                <td v-else>{{ item.valore }}</td>
                <td>{{ item.udm }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Potenziale Metanigeno -->
    <div class="row">
      <div class="col-12 col-lg-8">
        <h2 id="tabulati_pm" class="mt-5">{{ $t('tabulati.metanigeno') }}</h2>
        <div class="table-responsive">
          <table class="table table-striped text-center">
            <thead>
              <tr>
                <th>{{ $t('tabulati.biomass') }}</th>
                <th>{{ $t('tabulati.potential_biogas') }}</th>
                <th>{{ $t('tabulati.ch4_content') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in potenzialeMetanigeno" :key="index">
                <td>{{ item.biomassa }}</td>
                <td>{{ item.potenziale }}</td>
                <td>{{ item.ch4 }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Resa Colturali medie -->
    <div class="row">
      <div class="col-12 col-lg-8">
        <h2 class="mt-5">{{ $t('tabulati.crop_yield') }}</h2>
        <div class="table-responsive">
          <table class="table table-striped text-center">
            <thead>
              <tr>
                <th>{{ $t('tabulati.energy_crop') }}</th>
                <th>{{ $t('tabulati.crop_yield_value') }}</th>
                <th>{{ $t('tabulati.density') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in resaColturali" :key="index">
                <td>{{ item.coltura }}</td>
                <td>{{ item.resa }}</td>
                <td>{{ item.densita }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Produttività Reflui -->
    <div class="row">
      <div class="col-12 col-lg-8">
        <h2 class="mt-5">{{ $t('tabulati.waste_productivity') }}</h2>
        <div class="table-responsive">
          <table class="table table-striped text-center">
            <thead>
              <tr>
                <th>{{ $t('tabulati.waste') }}</th>
                <th>{{ $t('tabulati.waste_prod') }}</th>
                <th>{{ $t('tabulati.live_weight') }}</th>
                <th>{{ $t('tabulati.biomass_density') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in produttivitaReflui" :key="index">
                <td>{{ item.refluo }}</td>
                <td>{{ item.produzione }}</td>
                <td>{{ item.pesoVivo }}</td>
                <td>{{ item.densita }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabulati",
  data() {
    return {
      specificheProgetto: [
        { parametro: "Potenza", simbolo: "P", valore: "1000", udm: "kW" },
        { parametro: "Ore di funzionamento annuo", simbolo: "T", valore: "8040", udm: "ore/annue" },
        { parametro: "Rendimento elettrico", simbolo: "n", valore: "45", udm: "%" },
        { parametro: "Potere Calorifero Inferiore CH4", simbolo: "H1", valore: "10", udm: "kWh/Nm³" },
        { parametro: "Contenuto CH4 nel Biogas", simbolo: "M_ch4_tot", valore: "(colNextTab)", link: "#tabulati_pm", udm: "% in volume" },
        { parametro: "Carico Medio Giornaliero", simbolo: "M_B_tot", valore: "40 ~ 70", udm: "ton/giorno" },
      ],

      potenzialeMetanigeno: [
        { biomassa: "liquame_bovino", potenziale: "30", ch4: "55" },
        { biomassa: "letame_bovino", potenziale: "70", ch4: "55" },
        { biomassa: "liquame_suino", potenziale: "20", ch4: "62" },
        { biomassa: "letame_suino", potenziale: "90", ch4: "62" },
        { biomassa: "insilato_mais", potenziale: "200", ch4: "53" },
        { biomassa: "insilato_sorgo", potenziale: "150", ch4: "52" },
        { biomassa: "insilato_triticale", potenziale: "185", ch4: "53" },
        { biomassa: "bucce_pomodoro", potenziale: "100", ch4: "55" },
        { biomassa: "siero_latte", potenziale: "30", ch4: "60" },
        { biomassa: "scarti_frutta", potenziale: "130", ch4: "55" },
        { biomassa: "sansa_olive", potenziale: "200", ch4: "55" },
        { biomassa: "scarti_patata", potenziale: "120", ch4: "57" },
      ],

      resaColturali: [
        { coltura: "insilato_mais", resa: "40", densita: "0.63" },
        { coltura: "insilato_sorgo", resa: "20", densita: "0.63" },
        { coltura: "insilato_triticale", resa: "35", densita: "0.63" },
      ],

      produttivitaReflui: [
        { refluo: "liquame_bovino", produzione: "21", pesoVivo: "0.48", densita: "1.00" },
        { refluo: "letame_bovino", produzione: "33", pesoVivo: "0.48", densita: "0.35" },
        { refluo: "liquame_suino", produzione: "28", pesoVivo: "0.10", densita: "1.00" },
        { refluo: "letame_suino", produzione: "55", pesoVivo: "0.10", densita: "0.35" },
      ],
    };
  },
};
</script>

<style scoped></style>