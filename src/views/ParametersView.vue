<script>
export default {
  name: "Tabulati"
};
</script>

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
              <tr>
                <td>{{ $t('parameters_view.Potenza') }}</td>
                <td>P</td>
                <td>1000</td>
                <td>kW</td>
              </tr>
              <tr>
                <td>{{ $t('parameters_view.h_func') }}</td>
                <td>T</td>
                <td>8040</td>
                <td>{{ $t('units.hours_per_year') }}</td>
              </tr>
              <tr>
                <td>{{ $t('parameters_view.elettric_rend') }}</td>
                <td>n</td>
                <td>45</td>
                <td>%</td>
              </tr>
              <tr>
                <td>{{ $t('parameters_view.Pot_CH4') }}</td>
                <td>H1</td>
                <td>10</td>
                <td>kWh/Nm³</td>
              </tr>
              <tr>
                <td>{{ $t('parameters_view.Cont_CH4') }}</td>
                <td>M_ch4_tot</td>
                <td><a href="#parameters_view_pm">{{ $t('tabulati.see_next_table') }}</a></td>
                <td>%</td>
              </tr>
              <tr>
                <td>{{ $t('parameters_view.Carico_med_gg') }}</td>
                <td>M_B_tot</td>
                <td>40 ~ 70</td>
                <td>{{ $t('units.tons_per_day') }}</td>
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
              <tr>
                <td>{{ $t('ingredients.liquame_bovino') }}</td>
                <td>30</td>
                <td>55</td>
              </tr>
              <tr>
                <td>{{ $t('ingredients.letame_bovino') }}</td>
                <td>70</td>
                <td>55</td>
              </tr>
              <tr>
                <td>{{ $t('ingredients.liquame_suino') }}</td>
                <td>20</td>
                <td>62</td>
              </tr>
              <tr>
                <td>{{ $t('ingredients.letame_suino') }}</td>
                <td>90</td>
                <td>62</td>
              </tr>
              <tr>
                <td>{{ $t('ingredients.insilato_mais') }}</td>
                <td>200</td>
                <td>53</td>
              </tr>
              <tr>
                <td>{{ $t('ingredients.insilato_sorgo') }}</td>
                <td>150</td>
                <td>52</td>
              </tr>
              <tr>
                <td>{{ $t('ingredients.insilato_triticale') }}</td>
                <td>185</td>
                <td>53</td>
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
              <tr>
                <td>{{ $t('ingredients.insilato_mais') }}</td>
                <td>40</td>
                <td>0.63</td>
              </tr>
              <tr>
                <td>{{ $t('ingredients.insilato_sorgo') }}</td>
                <td>20</td>
                <td>0.63</td>
              </tr>
              <tr>
                <td>{{ $t('ingredients.insilato_triticale') }}</td>
                <td>35</td>
                <td>0.63</td>
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
              <tr>
                <td>{{ $t('ingredients.liquame_bovino') }}</td>
                <td>21</td>
                <td>0.48</td>
                <td>1.00</td>
              </tr>
              <tr>
                <td>{{ $t('ingredients.letame_bovino') }}</td>
                <td>33</td>
                <td>0.48</td>
                <td>0.35</td>
              </tr>
              <tr>
                <td>{{ $t('ingredients.liquame_suino') }}</td>
                <td>28</td>
                <td>0.10</td>
                <td>1.00</td>
              </tr>
              <tr>
                <td>{{ $t('ingredients.letame_suino') }}</td>
                <td>55</td>
                <td>0.10</td>
                <td>0.35</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>
/* Aggiungi eventuali stili personalizzati qui */
</style>
