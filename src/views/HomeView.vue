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
    <div class="row mt-5 justify-content-center">
      <div class="col-12 col-lg-8 p-3">
        <h1 class="display-1">{{ $t('home.title') }}</h1>
        <br>
        <h4>{{ $t('home.description') }}</h4>
        <h5>{{ $t('home.instruction') }}</h5>
        <br>
        <a class="btn btn_blulight" href="#read_more">{{ $t('home.learn_more') }}</a>
        <br>
      </div>
      <div class="col-3 col-lg-4">
        <img class="rounded-3" src="../assets/img/tunder.svg" alt="Thunder Image">
      </div>
    </div>

    <div class="row justify-content-center mb-5">
      <h1 class="mt-5">{{ $t('home.choose_diet') }}</h1>

      <div v-for="(dieta, index) in diete" :key="index" class="col-12 col-lg-4">
        <div class="card card_st p-2 mb-3">
          <h3>{{ dieta.nome }}</h3>
          <ul>
            <h6>{{ $t('home.composition_limits') }}:</h6>
            <li v-for="(componente, idx) in dieta.componenti" :key="idx">{{ componente }}</li>
          </ul>
          <div class="p-2">
            <router-link :to="`/dieta/${dieta.slug}`" class="btn btn_blulight fw-bold mt-3">
              {{ $t('home.calculate') }} {{ dieta.nome }}
            </router-link>
          </div>
        </div>
      </div>

      <BiogasInfo />
    </div>
  </div>
</template>

<style scoped>
/* Aggiungi eventuali stili qui */
</style>
