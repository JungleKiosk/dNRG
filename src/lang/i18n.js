import { createI18n } from 'vue-i18n';

const messages = {
  it: {
    navbar:{
      home: 'Home',
      parameters: 'Parametri'
    },
    home: {
      title: 'Benvenuto su bioNRG🌳',
      description: 'Calcola il dimensionamento aziendale per un impianto a Biogas.',
      instruction: 'Scegli la dieta per l\'impianto Biogas, inserisci le quantità e avrai subito il risultato e il relativo processo di calcolo.',
      learn_more: 'Scopri di più',
      choose_diet: 'Scegli la Dieta per il tuo Impianto Biogas',
      composition_limits: 'Limiti di Composizione',
      calculate: 'Calcola',
    },
    biogasInfo: {
      projectTitle: "Specifiche di progetto",
      projectDescription: "Le specifiche di progetto dell'impianto sono state fissate per garantire la produzione di 1 MW (1000 kW), con un carico medio di biomassa compreso tra 40 e 70 t/giorno. Questo dato fondamentale servirà per l'elaborazione del dimensionamento aziendale. Vai ai",
      tables: "Tabulati",
      mapDescription: "Di seguito la mappatura aggiornata al 2022 degli impianti per la produzione di Metano.",
      openMap: "Apri la mappa",
      whatIsBiogas: "Che cosa è il Biogas?",
      biogasDescription1: "Il termine 'biogas' si riferisce a un combustibile gassoso naturale, costituito principalmente da metano e anidride carbonica.",
      biogasDescription2: "Il biogas viene generato tramite digestione anaerobica di biomasse.",
      biogasHandbook: "Handbook Biogas",
      practiceManual: "Manuale Pratico",
      legalFramework: "Quadro normativo",
      legalDescription: "Si parla di incentivazione di biogas e gas derivante dalla biomassa con la direttiva 2009/73/CE.",
      decreeTitle: "DM 02/03/2018 - (Decreto Biometano)",
      decreeText: "Testo del Decreto",
      decreeDescription: "Il decreto disciplina la produzione, immissione in rete e incentivazione del biometano.",
      definitionsTitle: "Definizioni UNI 10458",
      definitions: {
        biogas: "Biogas: Miscela gassosa prodotta nel processo di digestione anaerobica.",
        influente: "Influente: Biomassa avviata alla digestione anaerobica.",
        digestore: "Digestore: Contenitore sigillato dove avviene la digestione anaerobica.",
        digestato: "Digestato: Biomassa stabilizzata utilizzabile come fertilizzante."
      },
      biochemicalProcesses: "Processi biochimici",
      biochemicalDescription: "I processi di conversione biochimica permettono di ricavare energia dalla materia organica.",
      processes: {
        hydrolysis: "Fase idrolitica: Scomposizione delle sostanze complesse.",
        acidogenesis: "Fase acidogenetica: Conversione dei composti semplici in acidi.",
        methanogenesis: "Fase metanigena: Produzione di metano e anidride carbonica."
      },
      biodegradability: "Biodegradabilità",
      biodegradabilityDescription: "La biodegradabilità anaerobica è valutata con test BMP.",
      chemicalAnalysis: "Analisi chimica",
      chemicalAnalysisDescription: "L'analisi chimica valuta il potenziale metanigeno di un substrato.",
      bmpStatic: "BMP statico",
      bmpStaticDescription: "Test di laboratorio per misurare la produzione di biogas.",
      substratesTitle: "Substrati di alimentazione - Prodotti e Sottoprodotti",
      substratesDescription: "Gli impianti possono essere alimentati con prodotti agricoli e sottoprodotti industriali."
    },
    diet_from:{
      calculate: 'Calcola',
    }
  },
  en: {
    navbar:{
      home: 'Home',
      parameters: 'Parameters'
    },
    home: {
      title: 'Welcome to bioNRG🌳',
      description: 'Calculate the company sizing for a Biogas plant.',
      instruction: 'Choose the diet for the Biogas plant, enter the quantities, and get the result along with the calculation process.',
      learn_more: 'Read more',
      choose_diet: 'Choose the Diet for your Biogas Plant',
      composition_limits: 'Composition Limits',
      calculate: 'Calculate',
    },
    biogasInfo: {
      projectTitle: "Project Specifications",
      projectDescription: "The plant specifications ensure the production of 1 MW (1000 kW) with an average biomass load between 40 and 70 t/day. This key data is used for company sizing. Go to",
      tables: "Tables",
      mapDescription: "Below is the updated 2022 map of methane production plants.",
      openMap: "Open the map",
      whatIsBiogas: "What is Biogas?",
      biogasDescription1: "'Biogas' refers to a natural gas fuel mainly consisting of methane and carbon dioxide.",
      biogasDescription2: "Biogas is generated through anaerobic digestion of biomass.",
      biogasHandbook: "Biogas Handbook",
      practiceManual: "Practical Manual",
      legalFramework: "Legal Framework",
      legalDescription: "Biogas incentives began with directive 2009/73/EC.",
      decreeTitle: "DM 02/03/2018 - (Biomethane Decree)",
      decreeText: "Decree Text",
      decreeDescription: "The decree governs the production, distribution, and incentivization of biomethane.",
      definitionsTitle: "UNI 10458 Definitions",
      definitions: {
        biogas: "Biogas: Gas mixture from anaerobic digestion.",
        influente: "Influente: Biomass directed to anaerobic digestion.",
        digestore: "Digestor: Sealed container for anaerobic digestion.",
        digestato: "Digestate: Stabilized biomass used as fertilizer."
      },
      biochemicalProcesses: "Biochemical Processes",
      biochemicalDescription: "Biochemical processes extract energy from organic matter.",
      processes: {
        hydrolysis: "Hydrolysis phase: Breakdown of complex substances.",
        acidogenesis: "Acidogenesis phase: Conversion into acids.",
        methanogenesis: "Methanogenesis phase: Methane and CO₂ production."
      },
      biodegradability: "Biodegradability",
      biodegradabilityDescription: "Anaerobic biodegradability is measured using BMP tests.",
      chemicalAnalysis: "Chemical Analysis",
      chemicalAnalysisDescription: "Analyzes the substrate’s methane potential.",
      bmpStatic: "Static BMP",
      bmpStaticDescription: "Lab test to measure biogas production.",
      substratesTitle: "Feedstocks - Products and Byproducts",
      substratesDescription: "Biogas plants can use both agricultural products and industrial byproducts."
    },
    diet_from:{
      calculate: 'Calculate',
    }
  }
};

const i18n = createI18n({
  locale: localStorage.getItem('language') || 'it', // Lingua predefinita
  fallbackLocale: 'it',
  messages,
});

export default i18n;
