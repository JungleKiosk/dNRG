<template>
    <div class="calculation-details mt-5">
        <h1>Dimensionamento aziendale</h1>
        <h3>Processo di calcolo:</h3>
        <p>
            L'algoritmo è calibrato su <a class="a_dark" href="/tabulati">specifiche di progetto</a>, con
            obiettivo finale di produrre un megawatt ora al giorno (commissione progettuale). Saranno quindi utilizzati
            i parametri riportati nei <a class="a_dark" href="/tabulati">tabulati</a> per la stima del dimensionamento
            aziendale.
            La stima del dimensionamento aziendale è espressa attraverso <strong>il numero di capi di bestiame</strong>
            e <strong>la superficie a coltura energetica</strong> dedicata a Biogas.
        </p>

        <div class="formula-box">
            <p>
                <strong>E_el = P x 24 [kW x (ore/giorno)]</strong><br><br>
                E_el = 1000 x 24 = <span>{{ results.E_el }}</span> [kW/giorno]<br><br>
                <span class="small">in cui P = potenza richiesta (commissione progettuale)</span>
            </p>
        </div>

        <p>Calcolo del metano totale [M_ch4_tot] necessario:</p>

        <div class="formula-box">
            <p>
                <strong>M_ch4_tot = E_el / (H1 x n) [(kWh/giorno) / (kWh/Nm³)]</strong><br><br>
                M_ch4_tot = {{ results.E_el }} / (10 x 0.45) = <span>{{ results.M_ch4_tot }}</span> [Nm³/giorno]<br><br>
                <span class="small">in cui H1 = potere calorifero inferiore CH4 [kWh/Nm³], n = rendimento elettrico
                    [%]</span>
            </p>
        </div>

        <p>Stima del Biogas totale [M_B_tot] per la dieta selezionata:</p>

        <div class="formula-box">
            <p>
                <strong>M_B_tot = M_ch4_tot / [(phi_animal x Pg_animal x C_CH4_animal) + (phi_crop x Pg_crop x
                    C_CH4_crop) + (phi_waste x Pg_waste x C_CH4_waste)]</strong><br><br>
                M_B_tot = {{ results.M_ch4_tot }} / [ ({{ results.debug_info.phi_LS }} x {{ results.debug_info.Pg_LS }}
                x {{ results.debug_info.C_CH4_LS }}) + ({{ results.debug_info.phi_IT }} x {{ results.debug_info.Pg_IT }}
                x {{ results.debug_info.C_CH4_IT }}) + ({{ results.debug_info.phi_SF }} x {{ results.debug_info.Pg_SF }}
                x {{ results.debug_info.C_CH4_SF }}) ]<br>
                = <span>{{ results.M_B_tot }}</span> [ton/giorno]
            </p>
        </div>

        <p>Superficie coltivata e numero di capi:</p>

        <div class="formula-box">
            <p>
                <strong>S_crop = (M_B_crop x N) / r</strong><br>
                S_crop = ({{ results.M_B_IT }} x 335) / {{ results.debug_info.resa_IT }} = <span>{{ results.S_IT
                    }}</span> ha<br><br>

                <strong>A_capi = (M_B_animal x N) / (p_m x ρ x m_c)</strong><br>
                A_capi = ({{ results.M_B_LS }} x 335) / ({{ results.debug_info.p_m }} x {{ results.debug_info.rho }} x
                {{ results.debug_info.m_c }}) = <span>{{ results.A_capi }}</span> capi
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "CalculationDetails",
    props: ["results"],
};
</script>

<style scoped>
.formula-box {
    background-color: #f9f9f9;
    border-left: 5px solid #007bff;
    padding: 15px;
    margin-bottom: 20px;
}

.small {
    font-size: 0.9em;
    color: #666;
}
</style>