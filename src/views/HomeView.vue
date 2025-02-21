<script>
import BiogasInfo from "../components/HomeReadMore.vue";

export default {
  components: {
    BiogasInfo,
  },
  name: "HomeView",
  data() {
    return {
      diete: [
        { nome: "Dieta A", slug: "a", componenti: ["Liquame Bovino 5-15%", "Insilato di Mais 75-90%", "Siero di Latte 5-10%"] },
        { nome: "Dieta B", slug: "b", componenti: ["Letame Bovino 5-25%", "Insilato di Mais 55-75%", "Scarti di Patata 10-35%"] },
        { nome: "Dieta C", slug: "c", componenti: ["Liquame Suino 15-25%", "Insilato di Mais 30-65%", "Bucce di Pomodoro 10-32%"] },
        { nome: "Dieta D", slug: "d", componenti: ["Letame Bovino 25-50%", "Insilato di Sorgo 5-50%", "Sansa di Olive 10-35%"] },
        { nome: "Dieta E", slug: "e", componenti: ["Letame Suino 15-60%", "Insilato di Triticale 5-50%", "Scarti di Frutta 10-35%"] }
      ]
    };
  }
};
</script>

<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12 col-lg-8 p-3">
        <h1 class="display-1">bioNRG🌳</h1>
        <br>
        <h4>Calcola il dimensionamento aziendale per un impianto a Biogas.</h4>
        <h5>Scegli la dieta per l'impianto Biogas, inserisci le quantità e avrai subito il risultato e il relativo processo di calcolo.</h5>
        <br>
        <a class="btn btn_blulight" href="#read_more">Scopri di più</a>
        <br>
      </div>
      <div class="col-12 col-lg-4 text-center">
        <img class=" rounded-3" src="../assets/img/tunder.svg" alt="">
      </div>
    </div>

    <div class="row justify-content-center mb-5">
      <h1 class="mt-5">Scegli la Dieta per il tuo Impianto Biogas</h1>

      <div v-for="(dieta, index) in diete" :key="index" class="col-12 col-lg-4">
        <div class="card card_st p-2 mb-3">
          <h3>{{ dieta.nome }}</h3>
          <ul>
            <h6>Limiti di Composizione:</h6>
            <li v-for="(componente, idx) in dieta.componenti" :key="idx">{{ componente }}</li>
          </ul>
          <div class="p-2">
            <router-link :to="`/dieta/${dieta.slug}`" class="btn btn_blulight fw-bold mt-3">Calcola {{ dieta.nome }}</router-link>
          </div>
        </div>
      </div>

      <BiogasInfo />

    </div>
  </div>
</template>


