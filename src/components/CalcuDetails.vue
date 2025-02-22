<script>
export default {
    name: "CalculationDetails",
    props: ["results"],
};
</script>

<template>
    <div class="calculation-details mt-5 p-3">
        <h1>{{ $t('calculation.title') }}</h1>
        <h3>{{ $t('calculation.process_title') }}</h3>
        <p>
            {{ $t('calculation.process_description') }}
            <router-link to="/parameters">{{ $t('calculation.project_specs') }}</router-link>,
            {{ $t('calculation.objective') }}
            <a class="a_dark" href="/tabulati">{{ $t('calculation.tables') }}</a>.
        </p>

        <div class="formula_box">
            <p>
                <strong>E_el = P x 24 [kW x (ore/giorno)]</strong><br><br>
                E_el = 1000 x 24 = <span>{{ results.E_el }}</span> [kW/giorno]<br><br>
                <span class="small">{{ $t('calculation.power_note') }}</span>
            </p>
        </div>

        <p>{{ $t('calculation.methane_calc') }}</p>

        <div class="formula_box">
            <p>
                <strong>M_ch4_tot = E_el / (H1 x n) [(kWh/giorno) / (kWh/Nm³)]</strong><br><br>
                M_ch4_tot = {{ results.E_el }} / (10 x 0.45) = <span>{{ results.M_ch4_tot }}</span> [Nm³/giorno]<br><br>
                <span class="small">{{ $t('calculation.methane_note') }}</span>
            </p>
        </div>

        <p>{{ $t('calculation.biogas_estimation') }}</p>

        <div class="formula_box">
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
        <h3 class="mt-5">{{ $t('denominator_table.title') }} {{ results.dieta }}</h3>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>{{ $t('denominator_table.param') }}</th>
                        <th>{{ $t('denominator_table.description') }}</th>
                        <th>{{ $t('denominator_table.ingredient') }}</th>
                        <th>{{ $t('denominator_table.value') }}</th>
                        <th>{{ $t('denominator_table.unit') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>phi_animal</td>
                        <td>{{ $t('denominator_table.percentage') }}</td>
                        <td>{{ results.debug_info.phi_LS_name }}</td>
                        <td>{{ results.debug_info.phi_LS }}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>phi_crop</td>
                        <td>{{ $t('denominator_table.percentage') }}</td>
                        <td>{{ results.debug_info.phi_IT_name }}</td>
                        <td>{{ results.debug_info.phi_IT }}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>phi_waste</td>
                        <td>{{ $t('denominator_table.percentage') }}</td>
                        <td>{{ results.debug_info.phi_SF_name }}</td>
                        <td>{{ results.debug_info.phi_SF }}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>Pg_animal</td>
                        <td>{{ $t('denominator_table.biogas_potential') }}</td>
                        <td>{{ results.debug_info.phi_LS_name }}</td>
                        <td>{{ results.debug_info.Pg_LS }}</td>
                        <td>Nm³/t</td>
                    </tr>
                    <tr>
                        <td>Pg_crop</td>
                        <td>{{ $t('denominator_table.biogas_potential') }}</td>
                        <td>{{ results.debug_info.phi_IT_name }}</td>
                        <td>{{ results.debug_info.Pg_IT }}</td>
                        <td>Nm³/t</td>
                    </tr>
                    <tr>
                        <td>Pg_waste</td>
                        <td>{{ $t('denominator_table.biogas_potential') }}</td>
                        <td>{{ results.debug_info.phi_SF_name }}</td>
                        <td>{{ results.debug_info.Pg_SF }}</td>
                        <td>Nm³/t</td>
                    </tr>
                    <tr>
                        <td>C_CH4_animal</td>
                        <td>{{ $t('denominator_table.methane_content') }}</td>
                        <td>{{ results.debug_info.phi_LS_name }}</td>
                        <td>{{ results.debug_info.C_CH4_LS }}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>C_CH4_crop</td>
                        <td>{{ $t('denominator_table.methane_content') }}</td>
                        <td>{{ results.debug_info.phi_IT_name }}</td>
                        <td>{{ results.debug_info.C_CH4_IT }}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <td>C_CH4_waste</td>
                        <td>{{ $t('denominator_table.methane_content') }}</td>
                        <td>{{ results.debug_info.phi_SF_name }}</td>
                        <td>{{ results.debug_info.C_CH4_SF }}</td>
                        <td>%</td>
                    </tr>
                </tbody>
            </table>
        </div>


        <!-- Tabella dei Risultati al Denominatore -->
        <!-- Tabella dei Risultati al Denominatore -->
        <h3 class="mt-5">{{ $t('results_table.title') }}</h3>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>{{ $t('results_table.parameter') }}</th>
                        <th>{{ $t('results_table.value') }}</th>
                        <th>{{ $t('results_table.result') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ $t('results_table.animal_formula') }}</td>
                        <td>{{ results.debug_info.phi_LS }} x {{ results.debug_info.Pg_LS }} x {{
                            results.debug_info.C_CH4_LS }}</td>
                        <td>{{ results.debug_info['phi_LS * Pg_LS * C_CH4_LS'] }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t('results_table.crop_formula') }}</td>
                        <td>{{ results.debug_info.phi_IT }} x {{ results.debug_info.Pg_IT }} x {{
                            results.debug_info.C_CH4_IT }}</td>
                        <td>{{ results.debug_info['phi_IT * Pg_IT * C_CH4_IT'] }}</td>
                    </tr>
                    <tr>
                        <td>{{ $t('results_table.waste_formula') }}</td>
                        <td>{{ results.debug_info.phi_SF }} x {{ results.debug_info.Pg_SF }} x {{
                            results.debug_info.C_CH4_SF }}</td>
                        <td>{{ results.debug_info['phi_SF * Pg_SF * C_CH4_SF'] }}</td>
                    </tr>
                    <tr>
                        <td><strong>{{ $t('results_table.total_denominator') }}</strong></td>
                        <td></td>
                        <td><strong>{{ results.debug_info.M_B_tot_denominator }}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>


        <div class="biomass-calculation">
            <p>
                {{ $t('biomass.total_biomass', { biomass: results.debug_info.M_B_tot, diet: results.debug_info.dieta })
                }}
            </p>

            <div class="formula_box">
                <p>
                    <strong>{{ $t('biomass.formula_crop') }}</strong> [{{ $t('units.ton_day') }}]<br>
                    <strong>{{ $t('biomass.formula_animal') }}</strong> [{{ $t('units.ton_day') }}]<br><br>
                    {{ $t('biomass.calc_crop', {
                        phi_crop: results.debug_info.phi_crop, M_B_tot:
                            results.debug_info.M_B_tot
                    }) }} [{{ $t('units.ton_day') }}]<br>
                    {{ $t('biomass.calc_animal', {
                        phi_animal: results.debug_info.phi_animal, M_B_tot:
                            results.debug_info.M_B_tot
                    }) }} [{{ $t('units.ton_day') }}]
                </p>
            </div>

            <p>{{ $t('biomass.operating_days') }}</p>

            <div class="formula_box">
                <p>
                    <strong>N = T/24</strong> [(h/anno) / (h/giorno)] <br><br>
                    N = 8040 / 24 = 335 [{{ $t('units.days_year') }}]<br>
                </p>
                <p>
                    <strong>{{ $t('biomass.note') }}</strong>
                </p>

                <div class="row mt-4">
                    <div class="col-12 col-lg-6">
                        <img src="../assets/img/torcia.png" alt="Biogas torch">
                    </div>
                    <div class="col-12 col-lg-6">
                        <p>
                            {{ $t('biomass.torch_description') }}<br>
                            {{ $t('biomass.torch_goal') }}<br>
                            {{ $t('biomass.torch_ground_distance') }}<br>
                            {{ $t('biomass.torch_residence_distance') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Superficie coltivata e numero di capi -->
        <p>{{ $t('surface_estimation.intro') }}</p>
        <br>
        <div class="formula_box">
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
            <p>{{ $t('livestock_estimation.intro') }}</p>

            <div class="formula_box">
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
                    <h3 class="mt-5">{{ $t('diet_parameters.title') }}</h3>
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>{{ $t('diet_parameters.param') }}</th>
                                    <th>{{ $t('diet_parameters.description') }}</th>
                                    <th>{{ $t('diet_parameters.value') }}</th>
                                    <th>{{ $t('diet_parameters.unit') }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>r</td>
                                    <td>{{ $t('diet_parameters.yield') }}</td>
                                    <td>{{ results.debug_info.resa_IT }}</td>
                                    <td>ha</td>
                                </tr>
                                <tr>
                                    <td>p_m</td>
                                    <td>{{ $t('diet_parameters.waste_production') }}</td>
                                    <td>{{ results.debug_info.p_m }}</td>
                                    <td>ton</td>
                                </tr>
                                <tr>
                                    <td>rho</td>
                                    <td>{{ $t('diet_parameters.density') }}</td>
                                    <td>{{ results.debug_info.rho }}</td>
                                    <td>ton/m³</td>
                                </tr>
                                <tr>
                                    <td>m_c</td>
                                    <td>{{ $t('diet_parameters.waste_per_head') }}</td>
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


<style scoped>
.calculation-details {
    background-color: #adadad5a;
    border-radius: 8px;
    padding: 20px;
}

.formula_box {
    background-color: rgb(182, 215, 255);
    padding: 15px;
    border-left: 4px solid #007bff;
    margin-bottom: 20px;
}

.small {
    font-size: 0.9em;
    color: #555555f3;
}
</style>
