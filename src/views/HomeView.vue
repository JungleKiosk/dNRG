<template>
  <div class="container">
    <div class="row mt-5 justify-content-center">
      <div class="col-12 col-lg-8 p-3">
        <h1 class="display-1">{{ $t('home.title') }}</h1>
        <br>
        <h2 class="display-6">{{ $t('home.description') }}</h2>
        <hr>
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

      <!-- Cards delle diete -->
      <div v-for="(dieta, index) in diete" :key="index" class="col-12 col-lg-4">
        <div class="card card_st p-2 mb-3">
          <h3>{{ $t(`diets.dieta_${dieta.slug}`) }}</h3>
          <ul>
            <h6>{{ $t('home.composition_limits') }}:</h6>
            <li v-for="(componente, idx) in dieta.componenti" :key="idx">
              {{ translateIngredient(componente) }}
            </li>
          </ul>
          <div class="p-2">
            <router-link :to="`/dieta/${dieta.slug}`" class="btn btn_blulight fw-bold mt-3">
              {{ $t('home.calculate') }}
            </router-link>
          </div>
        </div>
      </div>

      <BiogasInfo />
    </div>
  </div>
</template>

<script>
import BiogasInfo from "../components/HomeReadMore.vue";
import { useI18n } from 'vue-i18n';

export default {
  components: { BiogasInfo },
  name: "HomeView",
  setup() {
    const { t } = useI18n();

    // Funzione per tradurre i componenti
    const translateIngredient = (ingredient) => {
      const key = ingredient.split(" ")[0].toLowerCase().replace(/ /g, "_");
      const percentage = ingredient.match(/\d+[-]?\d*%/g);
      return `${t(`ingredients.${key}`)} ${percentage ? percentage[0] : ""}`;
    };

    return { t, translateIngredient };
  },
  data() {
    return {
      diete: [
        { nome: "dieta_a", slug: "a", componenti: ["liquame_bovino 5-15%", "insilato_mais 75-90%", "siero_latte 5-10%"] },
        { nome: "dieta_b", slug: "b", componenti: ["letame_bovino 5-25%", "insilato_mais 55-75%", "scarti_patata 10-35%"] },
        { nome: "dieta_c", slug: "c", componenti: ["liquame_suino 15-25%", "insilato_mais 30-65%", "bucce_pomodoro 10-32%"] },
        { nome: "dieta_d", slug: "d", componenti: ["letame_bovino 25-50%", "insilato_sorgo 5-50%", "sansa_olive 10-35%"] },
        { nome: "dieta_e", slug: "e", componenti: ["letame_suino 15-60%", "insilato_triticale 5-50%", "scarti_frutta 10-35%"] }
      ]
    };
  }
};
</script>

<style scoped>
/* Aggiungi eventuali stili */
</style>
