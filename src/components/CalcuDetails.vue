<template>
    <div class="calculation-details mt-5">
        <h1>Dimensionamento aziendale</h1>
        <h3>Processo di calcolo:</h3>
        <p>
            L'algoritmo è calibrato su <router-link to="/parameters">specifiche di progetto</router-link> <a class="a_dark" href="/tabulati">specifiche di progetto</a>, con
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

        <!-- Tabella dei parametri DENOMINATORE -->
        <h3 class="mt-5">Valori al Denominatore per la {{ results.dieta }}</h3>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Parametro</th>
                        <th>Descrizione</th>
                        <th>Ingrediente</th>
                        <th>Valore</th>
                        <th>UdM</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>phi_animal</td>
                        <td>Percentuale di ingrediente</td>
                        <td>{{ results.debug_info.phi_LS_name }}</td>
                        <td>{{ results.debug_info.phi_LS }}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>phi_crop</td>
                        <td>Percentuale di ingrediente</td>
                        <td>{{ results.debug_info.phi_IT_name }}</td>
                        <td>{{ results.debug_info.phi_IT }}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>phi_waste</td>
                        <td>Percentuale di ingrediente</td>
                        <td>{{ results.debug_info.phi_SF_name }}</td>
                        <td>{{ results.debug_info.phi_SF }}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>Pg_animal</td>
                        <td>Potenziale prod. Biogas</td>
                        <td>{{ results.debug_info.phi_LS_name }}</td>
                        <td>{{ results.debug_info.Pg_LS }}</td>
                        <td>Nm³/t</td>
                    </tr>
                    <tr>
                        <td>Pg_crop</td>
                        <td>Potenziale prod. Biogas</td>
                        <td>{{ results.debug_info.phi_IT_name }}</td>
                        <td>{{ results.debug_info.Pg_IT }}</td>
                        <td>Nm³/t</td>
                    </tr>
                    <tr>
                        <td>Pg_waste</td>
                        <td>Potenziale prod. Biogas</td>
                        <td>{{ results.debug_info.phi_SF_name }}</td>
                        <td>{{ results.debug_info.Pg_SF }}</td>
                        <td>Nm³/t</td>
                    </tr>
                    <tr>
                        <td>C_CH4_animal</td>
                        <td>Volume CH4 nel Biogas</td>
                        <td>{{ results.debug_info.phi_LS_name }}</td>
                        <td>{{ results.debug_info.C_CH4_LS }}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>C_CH4_crop</td>
                        <td>Volume CH4 nel Biogas</td>
                        <td>{{ results.debug_info.phi_IT_name }}</td>
                        <td>{{ results.debug_info.C_CH4_IT }}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>C_CH4_waste</td>
                        <td>Volume CH4 nel Biogas</td>
                        <td>{{ results.debug_info.phi_SF_name }}</td>
                        <td>{{ results.debug_info.C_CH4_SF }}</td>
                        <td>%</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Tabella dei Risultati al Denominatore -->
        <h3 class="mt-5">Risultati al Denominatore:</h3>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Parametro</th>
                        <th>Valore</th>
                        <th>Risultato</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>phi_animal x Pg_animal x C_CH4_animal</td>
                        <td>{{ results.debug_info.phi_LS }} x {{ results.debug_info.Pg_LS }} x {{
                            results.debug_info.C_CH4_LS }}</td>
                        <td>{{ results.debug_info['phi_LS * Pg_LS * C_CH4_LS']
                            }}</td>
                    </tr>
                    <tr>
                        <td>phi_crop x Pg_crop x C_CH4_crop</td>
                        <td>{{ results.debug_info.phi_IT }} x {{ results.debug_info.Pg_IT }} x {{
                            results.debug_info.C_CH4_IT }}</td>
                        <td>{{ results.debug_info['phi_IT * Pg_IT * C_CH4_IT']
                            }}</td>
                    </tr>
                    <tr>
                        <td>phi_waste x Pg_waste x C_CH4_waste</td>
                        <td>{{ results.debug_info.phi_SF }} x {{ results.debug_info.Pg_SF }} x {{
                            results.debug_info.C_CH4_SF }}</td>
                        <td>{{ results.debug_info['phi_SF * Pg_SF * C_CH4_SF']
                            }}</td>
                    </tr>
                    <tr>
                        <td><strong>M_B_tot_denominatore</strong></td>
                        <td></td>
                        <td><strong>{{ results.debug_info.M_B_tot_denominator }}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="biomass-calculation">
            <p>
                La biomassa totale è di <span>{{ results.debug_info.M_B_tot }}</span> tonnellate al giorno, rientra nel
                vincolo di progetto
                (40 e le 70 tonnellate al giorno). Si procede con il calcolo della superficie coperta dalla coltura
                dedicata (relativa alla <span>{{ results.debug_info.dieta }}</span> scelta) e il calcolo dei capi da
                allevare per ottenere le
                quantità necessarie alla <span>{{ results.debug_info.dieta }}</span>.
            </p>

            <div class="formula-box">
                <p>
                    <strong>M_B_crop = phi_crop x M_B_tot</strong> [tonn/giorno]<br>
                    <strong>M_B_animal = phi_animal x M_B_tot</strong> [tonn/giorno]<br><br>
                    M_B_crop = <span>{{ results.debug_info.phi_crop }}</span> x <span>{{ results.debug_info.M_B_tot
                        }}</span> [tonn/giorno]<br>
                    M_B_animal = <span>{{ results.debug_info.phi_animal }}</span> x <span>{{ results.debug_info.M_B_tot
                        }}</span> [tonn/giorno]
                </p>
            </div>

            <p>Calcolo dei giorni di funzionamento dell'impianto a Biogas:</p>

            <div class="formula-box">
                <p>
                    <strong>N = T/24</strong> [(h/anno) / (h/giorno)] <br><br>
                    N = 8040 / 24 = 335 [giorni/anno]<br>
                </p>
                <p>
                    <strong>NOTA! Il resto dei giorni dell'anno serviranno per la manutenzione dell'impianto
                        e bruciare i gas in eccesso.
                    </strong>
                </p>

                <div class="row mt-4">
                    <div class="col-12 col-lg-6">
                        <img src="../assets/img/torcia.png" alt="">
                    </div>
                    <div class="col-12 col-lg-6">
                        <p>
                            Le torce sono necessarie come misura di sicurezza e di tutela ambientale per bruciare
                            eccedenze
                            di biogas. <br> Obiettivo: massimizzare la combustione e ridurre il rilascio in atmosfera.
                            <br>
                            Distanza minima dal suolo: 4 m. <br> Distanza minima da aree abitate: 5 m.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Superficie coltivata e numero di capi -->
        <p>Ora si passa alla stima della superficie da destinare alla coltura energetica:</p>

        <div class="formula-box">
            <p>
                <strong>S_crop = (M_B_crop x N) / r</strong><br>
                S_crop = ({{ results.M_B_IT }} x 335) / {{ results.debug_info.resa_IT }} = <span>{{ results.S_IT
                }}</span> ha<br><br>

                <strong>A_capi = (M_B_animal x N) / (p_m x ρ x m_c)</strong><br>
                A_capi = ({{ results.M_B_LS }} x 335) / ({{ results.debug_info.p_m }} x {{ results.debug_info.rho }}
                x
                {{ results.debug_info.m_c }}) = <span>{{ results.A_capi }}</span> capi
            </p>
        </div>
        <div class="livestock-estimation">
            <!-- Calcolo numero capi necessari -->
            <p>Infine, si stima il numero di capi necessari per ottenere la produzione di refluo zootecnico:</p>

            <div class="formula-box">
                <p>
                    <strong>A_capi = (M_B_animal x N) / (p_m x ρ x m_c)</strong> <br>
                    {(tonn/anno) / [(m³/(tonn_pesovivo x anno)) x (tonn/m³) x (tonn_pesovivo/capo)]}
                </p>
                <p>
                    A_capi = (<span>{{ results.debug_info.M_B_LS }}</span> x 335) /
                    (<span>{{ results.debug_info.p_m }}</span> x <span>{{ results.debug_info.rho }}</span> x
                    <span>{{ results.debug_info.m_c }}</span>) = <strong>{{ results.A_capi }}</strong>
                </p>
            </div>

            <!-- Tabella dei Parametri della Dieta -->
            <div class="row mb-5">
                <div class="col-12">
                    <h3 class="mt-5">Parametri della Dieta:</h3>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Parametro</th>
                                    <th>Descrizione</th>
                                    <th>Valore</th>
                                    <th>UdM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>r</td>
                                    <td>Resa Colturale</td>
                                    <td>{{ results.debug_info.resa_IT }}</td>
                                    <td>ha</td>
                                </tr>
                                <tr>
                                    <td>p_m</td>
                                    <td>Produzione di reflui</td>
                                    <td>{{ results.debug_info.p_m }}</td>
                                    <td>ton</td>
                                </tr>
                                <tr>
                                    <td>rho</td>
                                    <td>Densità media refluo</td>
                                    <td>{{ results.debug_info.rho }}</td>
                                    <td>ton/m³</td>
                                </tr>
                                <tr>
                                    <td>m_c</td>
                                    <td>Quantità di refluo per capo</td>
                                    <td>{{ results.debug_info.m_c }}</td>
                                    <td>ton/capo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
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

.table-responsive {
    margin-top: 20px;
}

.table th,
.table td {
    text-align: center;
}
</style>
