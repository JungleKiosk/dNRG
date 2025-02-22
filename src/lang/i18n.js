import { createI18n } from "vue-i18n";

const messages = {
  it: {
    navbar: {
      home: "Home",
      parameters: "Parametri",
    },
    home: {
      title: "bioNRG🌳",
      description:
        "Calcola il dimensionamento aziendale per un impianto a Biogas.",
      instruction:
        "Scegli la dieta per l'impianto Biogas, inserisci le quantità e avrai subito il risultato e il relativo processo di calcolo.",
      learn_more: "Scopri di più",
      choose_diet: "Scegli la Dieta per il tuo Impianto Biogas",
      composition_limits: "Limiti di Composizione",
      calculate: "Calcola",
    },
    biogasInfo: {
      projectTitle: "Specifiche di progetto",
      projectDescription:
        "Le specifiche di progetto dell'impianto sono state fissate per garantire la produzione di 1 MW (1000 kW), con un carico medio di biomassa compreso tra 40 e 70 t/giorno. Questo dato fondamentale servirà per l'elaborazione del dimensionamento aziendale. Vai ai",
      tables: "Tabulati",
      mapDescription:
        "Di seguito la mappatura aggiornata al 2022 degli impianti per la produzione di Metano.",
      openMap: "Apri la mappa",
      whatIsBiogas: "Che cosa è il Biogas?",
      biogasDescription1:
        "Il termine 'biogas' si riferisce a un combustibile gassoso naturale, costituito principalmente da metano e anidride carbonica.",
      biogasDescription2:
        "Il biogas viene generato tramite digestione anaerobica di biomasse.",
      biogasHandbook: "Handbook Biogas",
      practiceManual: "Manuale Pratico",
      legalFramework: "Quadro normativo",
      legalDescription:
        "Si parla di incentivazione di biogas e gas derivante dalla biomassa con la direttiva 2009/73/CE.",
      decreeTitle: "DM 02/03/2018 - (Decreto Biometano)",
      decreeText: "Testo del Decreto",
      decreeDescription:
        "Il decreto disciplina la produzione, immissione in rete e incentivazione del biometano.",
      definitionsTitle: "Definizioni UNI 10458",
      definitions: {
        biogas:
          "Biogas: Miscela gassosa prodotta nel processo di digestione anaerobica.",
        influente: "Influente: Biomassa avviata alla digestione anaerobica.",
        digestore:
          "Digestore: Contenitore sigillato dove avviene la digestione anaerobica.",
        digestato:
          "Digestato: Biomassa stabilizzata utilizzabile come fertilizzante.",
      },
      biochemicalProcesses: "Processi biochimici",
      biochemicalDescription:
        "I processi di conversione biochimica permettono di ricavare energia dalla materia organica.",
      processes: {
        hydrolysis: "Fase idrolitica: Scomposizione delle sostanze complesse.",
        acidogenesis:
          "Fase acidogenetica: Conversione dei composti semplici in acidi.",
        methanogenesis:
          "Fase metanigena: Produzione di metano e anidride carbonica.",
      },
      biodegradability: "Biodegradabilità",
      biodegradabilityDescription:
        "La biodegradabilità anaerobica è valutata con test BMP.",
      chemicalAnalysis: "Analisi chimica",
      chemicalAnalysisDescription:
        "L'analisi chimica valuta il potenziale metanigeno di un substrato.",
      bmpStatic: "BMP statico",
      bmpStaticDescription:
        "Test di laboratorio per misurare la produzione di biogas.",
      substratesTitle: "Substrati di alimentazione - Prodotti e Sottoprodotti",
      substratesDescription:
        "Gli impianti possono essere alimentati con prodotti agricoli e sottoprodotti industriali.",
    },
    diet_from: {
      calculate: "Calcola",
    },
    results: {
      title: "Risultati:",
      parameter: "Parametro",
      description: "Descrizione",
      value: "Valore",
      unit: "UdM",
      S_crop: "Superficie coltivata a coltura energetica",
      A_capi: "Numero di Capi di Bestiame",
      M_B_tot: "Massa di Biogas Totale",
      E_el: "Energia Elettrica Giornaliera",
      M_ch4_tot: "Metano Totale Necessario",
      M_B_crop: "Massa di Biogas da coltura energetica",
      M_B_animal: "Massa di Biogas da reflui zootecnici",
    },
    calculation: {
      title: "Dimensionamento aziendale",
      process_title: "Processo di calcolo:",
      process_description: "L'algoritmo è calibrato su",
      project_specs: "specifiche di progetto",
      objective:
        "con obiettivo finale di produrre un megawatt ora al giorno (commissione progettuale). Saranno quindi utilizzati i parametri riportati nei",
      tables: "tabulati",
      power_note: "in cui P = potenza richiesta (commissione progettuale)",
      methane_calc: "Calcolo del metano totale [M_ch4_tot] necessario:",
      methane_note:
        "in cui H1 = potere calorifero inferiore CH4 [kWh/Nm³], n = rendimento elettrico [%]",
      biogas_estimation:
        "Stima del Biogas totale [M_B_tot] per la dieta selezionata:",
      denominator_values: "Valori al Denominatore per la",
      param: "Parametro",
      description: "Descrizione",
      ingredient: "Ingrediente",
      value: "Valore",
      unit: "UdM",
      percentage: "Percentuale di ingrediente",
    },
    denominator_table: {
      title: "Valori al Denominatore per la",
      param: "Parametro",
      description: "Descrizione",
      ingredient: "Ingrediente",
      value: "Valore",
      unit: "UdM",
      percentage: "Percentuale di ingrediente",
      biogas_potential: "Potenziale prod. Biogas",
      methane_content: "Volume CH4 nel Biogas",
    },
    ingredients: {
      liquame_bovino: "Liquame Bovino",
      letame_bovino: "Letame Bovino",
      liquame_suino: "Liquame Suino",
      letame_suino: "Letame Suino",
      insilato_mais: "Insilato di Mais",
      insilato_sorgo: "Insilato di Sorgo",
      insilato_triticale: "Insilato di Triticale",
      bucce_pomodoro: "Bucce di Pomodoro",
      siero_latte: "Siero di Latte",
      scarti_frutta: "Scarti di Frutta",
      sansa_olive: "Sansa di Olive",
      scarti_patata: "Scarti di Patata",
    },
    results_table: {
      title: "Risultati al Denominatore",
      parameter: "Parametro",
      value: "Valore",
      result: "Risultato",
      animal_formula: "phi_animal x Pg_animal x C_CH4_animal",
      crop_formula: "phi_crop x Pg_crop x C_CH4_crop",
      waste_formula: "phi_waste x Pg_waste x C_CH4_waste",
      total_denominator: "M_B_tot_denominatore",
    },
    biomass: {
      total_biomass: "La biomassa totale è di",
      total_biomass2:
        "tonnellate al giorno, rientra nel vincolo di progetto (40 e le 70 tonnellate al giorno). Si procede con il calcolo della superficie coperta dalla coltura dedicata (relativa alla {diet} scelta) e il calcolo dei capi da allevare per ottenere le quantità necessarie alla dieta scelta.",
      formula_crop: "M_B_crop = phi_crop x M_B_tot",
      formula_animal: "M_B_animal = phi_animal x M_B_tot",
      calc_crop: "M_B_crop = {phi_crop} x {M_B_tot}",
      calc_animal: "M_B_animal = {phi_animal} x {M_B_tot}",
      operating_days:
        "Calcolo dei giorni di funzionamento dell'impianto a Biogas:",
      note: "NOTA! Il resto dei giorni dell'anno serviranno per la manutenzione dell'impianto e bruciare i gas in eccesso.",
      torch_description:
        "Le torce sono necessarie come misura di sicurezza e di tutela ambientale per bruciare eccedenze di biogas.",
      torch_goal:
        "Obiettivo: massimizzare la combustione e ridurre il rilascio in atmosfera.",
      torch_ground_distance: "Distanza minima dal suolo: 4 m.",
      torch_residence_distance: "Distanza minima da aree abitate: 5 m.",
    },
    units: {
      ton_day: "tonn/giorno",
      days_year: "giorni/anno",
    },
    surface_estimation: {
      intro:
        "Ora si passa alla stima della superficie da destinare alla coltura energetica:",
    },
    livestock_estimation: {
      intro:
        "Infine, si stima il numero di capi necessari per ottenere la produzione di refluo zootecnico:",
    },
    diet_parameters: {
      title: "Parametri della Dieta:",
      param: "Parametro",
      description: "Descrizione",
      value: "Valore",
      unit: "UdM",
      yield: "Resa Colturale",
      waste_production: "Produzione di reflui",
      density: "Densità media refluo",
      waste_per_head: "Quantità di refluo per capo",
    },
    tabulati: {
      title: "Tabulati",
      project_specs: "Specifiche di Progetto",
      parameter: "Parametro",
      symbol: "Simbolo",
      value: "Valore",
      unit: "UdM",
      metanigeno: "Potenziale Metanigeno",
      biomass: "Biomassa",
      potential_biogas: "Potenziale prod. Biogas [Nm³/ton_biomassa]",
      ch4_content: "Contenuto di CH4 nel Biogas [% in volume]",
      crop_yield: "Resa Colturali Medie",
      energy_crop: "Coltura Energetica",
      crop_yield_value: "Resa (r) [ton/(ha x anno)]",
      density: "Densità media biomassa [ton/m³]",
      waste_productivity: "Produttività Reflui",
      waste: "Reflui",
      waste_prod: "Prod. del refluo (p_m) [ton/(ha x anno)]",
      live_weight: "Peso vivo (m_c) [ton_pespvivo/capo]",
      biomass_density: "Densità media biomassa (rho) [ton/m³]",
    },
    parameters_view: {
      Potenza: "Potenza",
      h_func: "Ore di funzionamento annuo",
      elettric_rend: "Rendimento elettrico",
      Pot_CH4: "Potere Calorifero Inferiore CH4",
      Cont_CH4: "Contenuto CH4 nel Biogas",
      Carico_med_gg: "Carico Medio Giornaliero"
    },
  },
  /* ************************************ */
  /* ******  ENGLISH ********************* */
  /* ************************************ */
  en: {
    navbar: {
      home: "Home",
      parameters: "Parameters",
    },
    home: {
      title: "bioNRG🌳",
      description: "Calculate the company sizing for a Biogas plant.",
      instruction:
        "Choose the diet for the Biogas plant, enter the quantities, and get the result along with the calculation process.",
      learn_more: "Read more",
      choose_diet: "Choose the Diet for your Biogas Plant",
      composition_limits: "Composition Limits",
      calculate: "Calculate",
    },
    biogasInfo: {
      projectTitle: "Project Specifications",
      projectDescription:
        "The plant specifications ensure the production of 1 MW (1000 kW) with an average biomass load between 40 and 70 t/day. This key data is used for company sizing. Go to",
      tables: "Tables",
      mapDescription:
        "Below is the updated 2022 map of methane production plants.",
      openMap: "Open the map",
      whatIsBiogas: "What is Biogas?",
      biogasDescription1:
        "'Biogas' refers to a natural gas fuel mainly consisting of methane and carbon dioxide.",
      biogasDescription2:
        "Biogas is generated through anaerobic digestion of biomass.",
      biogasHandbook: "Biogas Handbook",
      practiceManual: "Practical Manual",
      legalFramework: "Legal Framework",
      legalDescription: "Biogas incentives began with directive 2009/73/EC.",
      decreeTitle: "DM 02/03/2018 - (Biomethane Decree)",
      decreeText: "Decree Text",
      decreeDescription:
        "The decree governs the production, distribution, and incentivization of biomethane.",
      definitionsTitle: "UNI 10458 Definitions",
      definitions: {
        biogas: "Biogas: Gas mixture from anaerobic digestion.",
        influente: "Influente: Biomass directed to anaerobic digestion.",
        digestore: "Digestor: Sealed container for anaerobic digestion.",
        digestato: "Digestate: Stabilized biomass used as fertilizer.",
      },
      biochemicalProcesses: "Biochemical Processes",
      biochemicalDescription:
        "Biochemical processes extract energy from organic matter.",
      processes: {
        hydrolysis: "Hydrolysis phase: Breakdown of complex substances.",
        acidogenesis: "Acidogenesis phase: Conversion into acids.",
        methanogenesis: "Methanogenesis phase: Methane and CO₂ production.",
      },
      biodegradability: "Biodegradability",
      biodegradabilityDescription:
        "Anaerobic biodegradability is measured using BMP tests.",
      chemicalAnalysis: "Chemical Analysis",
      chemicalAnalysisDescription:
        "Analyzes the substrate’s methane potential.",
      bmpStatic: "Static BMP",
      bmpStaticDescription: "Lab test to measure biogas production.",
      substratesTitle: "Feedstocks - Products and Byproducts",
      substratesDescription:
        "Biogas plants can use both agricultural products and industrial byproducts.",
    },
    diet_from: {
      calculate: "Calculate",
    },
    results: {
      title: "Results:",
      parameter: "Parameter",
      description: "Description",
      value: "Value",
      unit: "Unit",
      S_crop: "Cultivated Area for Energy Crops",
      A_capi: "Number of Livestock",
      M_B_tot: "Total Biogas Mass",
      E_el: "Daily Electrical Energy",
      M_ch4_tot: "Total Methane Required",
      M_B_crop: "Biogas from Energy Crops",
      M_B_animal: "Biogas from Livestock Waste",
    },
    calculation: {
      title: "Business Sizing",
      process_title: "Calculation Process:",
      process_description: "The algorithm is calibrated on",
      project_specs: "project specifications",
      objective:
        "with the final goal of producing one megawatt-hour per day (project commission). The parameters listed in the",
      tables: "tables",
      power_note: "where P = required power (project commission)",
      methane_calc: "Calculation of total methane [M_ch4_tot] required:",
      methane_note:
        "where H1 = lower calorific value of CH4 [kWh/Nm³], n = electrical efficiency [%]",
      biogas_estimation:
        "Estimation of total Biogas [M_B_tot] for the selected diet:",
      denominator_values: "Denominator values for",
      param: "Parameter",
      description: "Description",
      ingredient: "Ingredient",
      value: "Value",
      unit: "Unit",
      percentage: "Ingredient percentage",
    },
    denominator_table: {
      title: "Denominator Values for",
      param: "Parameter",
      description: "Description",
      ingredient: "Ingredient",
      value: "Value",
      unit: "Unit",
      percentage: "Ingredient Percentage",
      biogas_potential: "Biogas Production Potential",
      methane_content: "CH4 Content in Biogas",
    },
    ingredients: {
      liquame_bovino: "Cattle Slurry",
      letame_bovino: "Cattle Manure",
      liquame_suino: "Pig Slurry",
      letame_suino: "Pig Manure",
      insilato_mais: "Corn Silage",
      insilato_sorgo: "Sorghum Silage",
      insilato_triticale: "Triticale Silage",
      bucce_pomodoro: "Tomato Peels",
      siero_latte: "Whey",
      scarti_frutta: "Fruit Waste",
      sansa_olive: "Olive Pomace",
      scarti_patata: "Potato Waste",
    },
    results_table: {
      title: "Denominator Results",
      parameter: "Parameter",
      value: "Value",
      result: "Result",
      animal_formula: "phi_animal x Pg_animal x C_CH4_animal",
      crop_formula: "phi_crop x Pg_crop x C_CH4_crop",
      waste_formula: "phi_waste x Pg_waste x C_CH4_waste",
      total_denominator: "M_B_tot_denominator",
    },
    biomass: {
      total_biomass: "The total biomass is",
      total_biomass2:
        "tons per day, falls within the design constraint (40 and 70 tons per day). We proceed with the calculation of the area covered by the dedicated crop (relative to the {diet} chosen) and the calculation of the animals to be raised to obtain the quantities needed for the chosen diet.",
      formula_crop: "M_B_crop = phi_crop x M_B_tot",
      formula_animal: "M_B_animal = phi_animal x M_B_tot",
      calc_crop: "M_B_crop = {phi_crop} x {M_B_tot}",
      calc_animal: "M_B_animal = {phi_animal} x {M_B_tot}",
      operating_days: "Calculation of the Biogas plant operating days:",
      note: "NOTE! The remaining days of the year will be used for plant maintenance and burning excess gas.",
      torch_description:
        "The torches are necessary as a safety and environmental protection measure to burn excess biogas.",
      torch_goal: "Goal: maximize combustion and reduce atmospheric release.",
      torch_ground_distance: "Minimum distance from the ground: 4 m.",
      torch_residence_distance: "Minimum distance from residential areas: 5 m.",
    },
    units: {
      ton_day: "tons/day",
      days_year: "days/year",
    },
    surface_estimation: {
      intro: "Now let's estimate the area to be allocated to energy crops:",
    },
    livestock_estimation: {
      intro:
        "Finally, the number of livestock required to produce zootechnical waste is estimated:",
    },
    diet_parameters: {
      title: "Diet Parameters:",
      param: "Parameter",
      description: "Description",
      value: "Value",
      unit: "Unit",
      yield: "Crop Yield",
      waste_production: "Waste Production",
      density: "Average Waste Density",
      waste_per_head: "Waste per Head",
    },
    tabulati: {
      title: "Tables",
      project_specs: "Project Specifications",
      parameter: "Parameter",
      symbol: "Symbol",
      value: "Value",
      unit: "Unit",
      metanigeno: "Methanogenic Potential",
      biomass: "Biomass",
      potential_biogas: "Biogas Production Potential [Nm³/ton_biomass]",
      ch4_content: "CH4 Content in Biogas [% by volume]",
      crop_yield: "Average Crop Yield",
      energy_crop: "Energy Crop",
      crop_yield_value: "Yield (r) [ton/(ha x year)]",
      density: "Average Biomass Density [ton/m³]",
      waste_productivity: "Waste Productivity",
      waste: "Waste",
      waste_prod: "Waste Production (p_m) [ton/(ha x year)]",
      live_weight: "Live Weight (m_c) [ton_live_weight/head]",
      biomass_density: "Average Biomass Density (rho) [ton/m³]",
    },
    parameters_view: {
      Potenza: "Power",
      h_func: "Annual Operating Hours",
      elettric_rend: "Electrical Efficiency",
      Pot_CH4: "Lower Heating Value CH4",
      Cont_CH4: "CH4 Content in Biogas",
      Carico_med_gg: "Average Daily Load",
    },
  },
};

const i18n = createI18n({
  locale: localStorage.getItem("language") || "it", // Lingua predefinita
  fallbackLocale: "it",
  messages,
});

export default i18n;
