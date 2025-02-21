<template>
    <div style="height: 500px;" class="container mt-5">
        <h1>{{ dietaTitle }}</h1>
        <DietForm :dieta="dieta" @calculate="handleCalculation" />
        <DietResult v-if="results" :results="results" />
        <CalcuDetails v-if="results" :results="results" />
    </div>
</template>

<script>
import DietForm from "../components/DietFrom.vue";
import DietResult from "../components/DietResults.vue";
import CalcuDetails from "../components/CalcuDetails.vue";
import param from "../data/parameters.js";

export default {
    name: "DietaView",
    props: ["dieta_name"],
    components: { DietForm, DietResult, CalcuDetails },
    data() {
        return {
            dieta: {},
            results: null,
        };
    },
    computed: {
        dietaTitle() {
            return `Dieta ${this.dieta_name.toUpperCase()}`;
        },
    },
    mounted() {
        this.fetchDietaData();
    },
    methods: {
        fetchDietaData() {
            const diete = {
                A: { liquame_bovino: [5, 15], insilato_mais: [75, 90], siero_latte: [5, 10] },
                B: { letame_bovino: [5, 25], insilato_mais: [55, 75], scarti_patata: [10, 35] },
                C: { liquame_suino: [15, 25], insilato_mais: [30, 65], bucce_pomodoro: [10, 32] },
                D: { letame_bovino: [25, 50], insilato_sorgo: [5, 50], sansa_olive: [10, 35] },
                E: { letame_suino: [15, 60], insilato_triticale: [5, 50], scarti_frutta: [10, 35] },
            };
            this.dieta = diete[this.dieta_name.toUpperCase()];
        },
        handleCalculation(inputValues) {
            const M_ch4_tot = param.E_el / (param.H1 * param.n);
            const phi_LS = inputValues[Object.keys(this.dieta)[0]] / 100;
            const phi_IT = inputValues[Object.keys(this.dieta)[1]] / 100;
            const phi_SF = inputValues[Object.keys(this.dieta)[2]] / 100;

            const Pg_LS = param.pot_pg_animali[Object.keys(this.dieta)[0]];
            const Pg_IT = param.pot_pg_colture[Object.keys(this.dieta)[1]];
            const Pg_SF = param.pot_pg_scarti[Object.keys(this.dieta)[2]];

            const C_CH4_LS = param.pot_ch4_animali[Object.keys(this.dieta)[0]];
            const C_CH4_IT = param.pot_ch4_colture[Object.keys(this.dieta)[1]];
            const C_CH4_SF = param.pot_ch4_scarti[Object.keys(this.dieta)[2]];

            const M_B_tot_denominator = (phi_LS * Pg_LS * C_CH4_LS) + (phi_IT * Pg_IT * C_CH4_IT) + (phi_SF * Pg_SF * C_CH4_SF);
            const M_B_tot = M_ch4_tot / M_B_tot_denominator;

            const M_B_IT = phi_IT * M_B_tot;
            const M_B_LS = phi_LS * M_B_tot;
            const N = param.t / 24;

            const resa_IT = param.resa_r_colture[Object.keys(this.dieta)[1]];
            const S_IT = (M_B_IT * N) / resa_IT;

            const diet_params = param.getDietParams(this.dieta_name);
            const A_capi = (M_B_LS * N) / (diet_params.p_m * diet_params.rho * diet_params.m_c);

            const warning_message = M_B_tot < 40 || M_B_tot > 70 ?
                "⚠️Attenzione: il Carico Medio Giornaliero di Biogas (M_B_tot) è fuori dal range di progetto (40-70 tonnellate). Le specifiche di progetto non sono rispettate. Cambia i valori che hai inserito." :
                null;

            this.results = {
                E_el: param.E_el,
                M_ch4_tot: M_ch4_tot.toFixed(2),
                M_B_tot: M_B_tot.toFixed(2),
                M_B_IT: M_B_IT.toFixed(2),
                M_B_LS: M_B_LS.toFixed(2),
                S_IT: S_IT.toFixed(2),
                A_capi: A_capi.toFixed(2),
                warning_message,
                debug_info: {
                    phi_LS,
                    phi_IT,
                    phi_SF,
                    Pg_LS,
                    Pg_IT,
                    Pg_SF,
                    C_CH4_LS,
                    C_CH4_IT,
                    C_CH4_SF,
                    M_B_tot_denominator,
                },
            };
        },
    },
};
</script>

<style scoped>
.alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
    padding: 10px;
    border-radius: 5px;
}
</style>