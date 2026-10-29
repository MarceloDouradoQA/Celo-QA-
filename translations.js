const translations = {
  pt: {
    title: "⛏️ MineCrafting - Tutorial Hub",
    subtitle: "Tutoriais e blueprints de construções de Minecraft, com lista de materiais e passo a passo para o seu Survival.",
    searchPlaceholder: "Buscar tutorial por palavra-chave...",
    filterAll: "Todos",
    filterHouses: "Casas/Vilas",
    filterCastles: "Castelos/Medievais",
    filterFarms: "Redstone/Fazendas",
    emptyState: "Nenhum tutorial encontrado. Tente outra palavra ou categoria. 🔍",
    modalMaterials: "🎒 Materiais necessários",
    modalSteps: "📋 Passo a passo",
    btnPrev: "← Anterior",
    btnNext: "Próximo →"
  },
  en: {
    title: "⛏️ MineCrafting - Tutorial Hub",
    subtitle: "Minecraft construction tutorials and blueprints, with material lists and step-by-step for your Survival.",
    searchPlaceholder: "Search tutorial by keyword...",
    filterAll: "All",
    filterHouses: "Houses/Villages",
    filterCastles: "Castles/Medieval",
    filterFarms: "Redstone/Farms",
    emptyState: "No tutorials found. Try another keyword or category. 🔍",
    modalMaterials: "🎒 Required Materials",
    modalSteps: "📋 Step by Step",
    btnPrev: "← Previous",
    btnNext: "Next →"
  },
  es: {
    title: "⛏️ MineCrafting - Tutorial Hub",
    subtitle: "Tutoriales y planos de construcción de Minecraft, con lista de materiales y paso a paso para tu Supervivencia.",
    searchPlaceholder: "Buscar tutorial por palabra clave...",
    filterAll: "Todos",
    filterHouses: "Casas/Aldeas",
    filterCastles: "Castillos/Medievales",
    filterFarms: "Redstone/Granjas",
    emptyState: "No se encontraron tutoriales. Prueba con otra palabra o categoría. 🔍",
    modalMaterials: "🎒 Materiales necesarios",
    modalSteps: "📋 Paso a paso",
    btnPrev: "← Anterior",
    btnNext: "Siguiente →"
  },
  fr: {
    title: "⛏️ MineCrafting - Tutorial Hub",
    subtitle: "Tutoriels et plans de construction Minecraft, avec liste de matériaux et étape par étape pour votre Survie.",
    searchPlaceholder: "Rechercher un tutoriel par mot-clé...",
    filterAll: "Tous",
    filterHouses: "Maisons/Villages",
    filterCastles: "Châteaux/Médiéval",
    filterFarms: "Redstone/Fermes",
    emptyState: "Aucun tutoriel trouvé. Essayez un autre mot-clé ou catégorie. 🔍",
    modalMaterials: "🎒 Matériaux nécessaires",
    modalSteps: "📋 Étape par étape",
    btnPrev: "← Précédent",
    btnNext: "Suivant →"
  },
  it: {
    title: "⛏️ MineCrafting - Tutorial Hub",
    subtitle: "Tutorial e blueprint di costruzione per Minecraft, con lista materiali e guida passo dopo passo per la tua Survival.",
    searchPlaceholder: "Cerca tutorial per parola chiave...",
    filterAll: "Tutti",
    filterHouses: "Case/Villaggi",
    filterCastles: "Castelli/Medievali",
    filterFarms: "Redstone/Fattorie",
    emptyState: "Nessun tutorial trovato. Prova un'altra parola chiave o categoria. 🔍",
    modalMaterials: "🎒 Materiali necessari",
    modalSteps: "📋 Guida Passo Passo",
    btnPrev: "← Precedente",
    btnNext: "Avanti →"
  }
};

function mudarIdioma(lang) {
  const t = translations[lang];
  if (!t) return;

  // Atualiza cabeçalho
  document.querySelector("[data-cy='app-title']").innerText = t.title;
  document.querySelector("[data-cy='app-subtitle']").innerText = t.subtitle;
  
  // Campo de busca e estado vazio
  document.querySelector("[data-cy='search-input']").placeholder = t.searchPlaceholder;
  document.querySelector("[data-cy='empty-state']").innerText = t.emptyState;

  // Botões de filtro
  const filters = document.querySelectorAll("[data-cy='filter-category']");
  if (filters.length >= 4) {
    filters[0].innerText = t.filterAll;
    filters[1].innerText = t.filterHouses;
    filters[2].innerText = t.filterCastles;
    filters[3].innerText = t.filterFarms;
  }

  // Títulos do Modal
  const modal = document.querySelector("[data-cy='tutorial-modal']");
  if (modal) {
    const h4Elements = modal.querySelectorAll("h4");
    if (h4Elements.length >= 2) {
      h4Elements[0].innerText = t.modalMaterials;
      h4Elements[1].innerText = t.modalSteps;
    }
    document.querySelector("[data-cy='btn-prev-step']").innerText = t.btnPrev;
    document.querySelector("[data-cy='btn-next-step']").innerText = t.btnNext;
  }
}