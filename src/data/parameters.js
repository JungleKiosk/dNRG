// Specifiche di progetto fisse
const P = 1000; // Potenza in kW per 1 MW
const t = 8040; // ore annue
const n = 0.45; // Rendimento elettrico
const H1 = 10; // Potere calorifero (kWh/Nm³)
const E_el = P * 24; // Energia elettrica giornaliera in kWh

// Potenziale metanigeno (valori presi dai file Excel)
const pot_pg_animali = {
  liquame_bovino: 30, // A-1
  letame_bovino: 70,  // B,D-1
  liquame_suino: 20,  // C-1
  letame_suino: 90,   // E-1
};

const pot_ch4_animali = {
  liquame_bovino: 0.55, // A-1
  letame_bovino: 0.55,  // B,D-1
  liquame_suino: 0.62,  // C-1
  letame_suino: 0.62,   // E-1
};

const pot_pg_colture = {
  insilato_mais: 200,     // A,B,C-1
  insilato_sorgo: 150,    // D-1
  insilato_triticale: 185 // E-1
};

const pot_ch4_colture = {
  insilato_mais: 0.53,     // A,B,C-1
  insilato_sorgo: 0.52,    // D-1
  insilato_triticale: 0.53 // E-1
};

const pot_pg_scarti = {
  bucce_pomodoro: 100, // C-1
  siero_latte: 30,     // A-1
  scarti_frutta: 130,  // E-1
  sansa_olive: 200,    // D-1
  scarti_patata: 120   // B-1
};

const pot_ch4_scarti = {
  bucce_pomodoro: 0.55, // C-1
  siero_latte: 0.60,    // A-1
  scarti_frutta: 0.55,  // E-1
  sansa_olive: 0.55,    // D-1
  scarti_patata: 0.57   // B-1
};

// Resa colturale (valori presi dai file Excel)
const resa_r_colture = {
  insilato_mais: 40,
  insilato_sorgo: 20,
  insilato_triticale: 35
};

const resa_p_colture = {
  insilato_mais: 0.63,
  insilato_sorgo: 0.63,
  insilato_triticale: 0.63
};

// Produzione reflui (valori presi dai file Excel)
const prod_pm_reflui = {
  liquame_bovino: 21,
  letame_bovino: 33,
  liquame_suino: 28,
  letame_suino: 55 // E
};

const prod_mc_reflui = {
  liquame_bovino: 0.48,
  letame_bovino: 0.48,
  liquame_suino: 0.10,
  letame_suino: 0.10
};

const prod_p_reflui = {
  liquame_bovino: 1.00,
  letame_bovino: 0.35,
  liquame_suino: 1.00,
  letame_suino: 0.35
};

// Funzione per ottenere i parametri di una dieta
function getDietParams(dietaName) {
  const params = {};
  switch (dietaName.toUpperCase()) {
    case 'A':
      params.resa_IT = resa_r_colture['insilato_mais'];
      params.p_m = prod_pm_reflui['liquame_bovino'];
      params.rho = prod_p_reflui['liquame_bovino'];
      params.m_c = prod_mc_reflui['liquame_bovino'];
      break;
    case 'B':
      params.resa_IT = resa_r_colture['insilato_mais'];
      params.p_m = prod_pm_reflui['letame_bovino'];
      params.rho = prod_p_reflui['letame_bovino'];
      params.m_c = prod_mc_reflui['letame_bovino'];
      break;
    case 'C':
      params.resa_IT = resa_r_colture['insilato_mais'];
      params.p_m = prod_pm_reflui['liquame_suino'];
      params.rho = prod_p_reflui['liquame_suino'];
      params.m_c = prod_mc_reflui['liquame_suino'];
      break;
    case 'D':
      params.resa_IT = resa_r_colture['insilato_sorgo'];
      params.p_m = prod_pm_reflui['letame_bovino'];
      params.rho = prod_p_reflui['letame_bovino'];
      params.m_c = prod_mc_reflui['letame_bovino'];
      break;
    case 'E':
      params.resa_IT = resa_r_colture['insilato_triticale'];
      params.p_m = prod_pm_reflui['letame_suino'];
      params.rho = prod_p_reflui['letame_suino'];
      params.m_c = prod_mc_reflui['letame_suino'];
      break;
    default:
      console.warn(`Dieta ${dietaName} non trovata`);
  }
  return params;
}

// Esportazione dei parametri
export default {
  P,
  t,
  n,
  H1,
  E_el,
  pot_pg_animali,
  pot_ch4_animali,
  pot_pg_colture,
  pot_ch4_colture,
  pot_pg_scarti,
  pot_ch4_scarti,
  resa_r_colture,
  resa_p_colture,
  prod_pm_reflui,
  prod_mc_reflui,
  prod_p_reflui,
  getDietParams
};
