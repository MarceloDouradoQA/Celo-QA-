const TRANSLATIONS = {
  pt: {
    appTitle: "⛏️ MineCrafting - Tutorial Hub",
    appSubtitle: "Tutoriais e blueprints de construções de Minecraft, com lista de materiais e passo a passo para o seu Survival.",
    searchPlaceholder: "Buscar tutorial por palavra-chave...",
    categories: {
      "Todos": "Todos",
      "Casas/Vilas": "Casas/Vilas",
      "Castelos/Medievais": "Castelos/Medievais",
      "Redstone/Fazendas": "Redstone/Fazendas"
    },
    resultsCount: (count) => count + (count === 1 ? " tutorial encontrado" : " tutoriais encontrados"),
    emptyState: "Nenhum tutorial encontrado. Tente outra palavra ou categoria. 🔍",
    viewStepsBtn: "Ver Passo a Passo",
    sourceLabel: "Fonte:",
    originalTutorialLink: "Ver tutorial original em ",
    materialsTitle: "🎒 Materiais necessários",
    materialsStatus: (collected, total) => `${collected} de ${total} materiais coletados`,
    stepsTitle: "📋 Passo a passo",
    prevBtn: "← Anterior",
    nextBtn: "Próximo →",
    stepCounter: (current, total) => `Passo ${current} de ${total}`,
    tutoriais: [
      {
        id: 1,
        titulo: "Micro-abrigo de Sobrevivência",
        cat: "Casas/Vilas",
        dif: "Fácil",
        emoji: "🛖",
        cor: "#5b8731",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorial:Building_micro_shelters",
        desc: "Abrigo mínimo para passar a primeira noite sem ser atacado.",
        mats: ["~30x Blocos comuns (terra, pedregulho ou tábuas)", "1x Porta", "1x Cama", "2x Tochas", "1x Baú", "1x Bancada"],
        passos: [
          "Escolha uma encosta ou terreno plano e deixe um espaço interno pequeno, de 3x3 blocos.",
          "Feche paredes e teto com blocos comuns, sem deixar aberturas além da porta.",
          "Instale a porta e ilumine o interior com tochas, para que nenhum monstro nasça dentro.",
          "Coloque a cama para pular a noite e definir seu ponto de renascimento.",
          "Adicione baú e bancada e use o abrigo como base até construir uma casa maior."
        ]
      },
      {
        id: 2,
        titulo: "Fazenda de Árvores",
        cat: "Redstone/Fazendas",
        dif: "Fácil",
        emoji: "🌳",
        cor: "#3d7a28",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorial:Tree_farming",
        desc: "Plantação organizada de madeira para nunca ficar sem toras.",
        mats: ["8x Mudas de árvore", "1x Machado", "16x Farinha de osso", "4x Tochas", "1x Baú", "Blocos de terra ou grama"],
        passos: [
          "Prepare uma área plana de terra ou grama com espaço livre acima de cada muda.",
          "Plante as mudas com distância entre elas; espécies como abeto-escuro ou selva crescem em grupos 2x2.",
          "Use farinha de osso para acelerar o crescimento das árvores.",
          "Colha as toras com o machado e replante as mudas que caírem.",
          "Ilumine a área com tochas para impedir o nascimento de monstros."
        ]
      },
      {
        id: 3,
        titulo: "Castelo Medieval",
        cat: "Castelos/Medievais",
        dif: "Avançado",
        emoji: "🏰",
        cor: "#4a4a4a",
        fonte: "minecraft.how",
        url: "https://minecraft.how/pt/blog/post/minecraft-castle-medieval-building-guide",
        desc: "Muralhas, torres de canto, ameias e fosso, em pedra variada.",
        mats: ["Pedregulho, tijolos de pedra e deepslate (paleta mista)", "Toras e escadas de carvalho-escuro ou abeto", "Lajes e escadas para telhados", "Tochas, lanternas e correntes", "Balde de água (fosso)", "Portão: portas, grades ou barras de ferro"],
        passos: [
          "Planeje o layout no papel e escolha um terreno elevado, de preferência perto de água.",
          "Erga muralhas grossas, de 3 a 4 blocos de largura na base, usando pedras variadas para dar textura.",
          "Construa torres nos cantos, mais altas do que as muralhas.",
          "Crie ameias no topo das muralhas e, se quiser, machicolações com escadas e lajes salientes.",
          "Cubra os telhados com escadas e lajes para formar inclinações, em vez de topos planos.",
          "Monte o portão principal, o pátio e os cômodos internos e ilumine com tochas e lanternas.",
          "Cave o fosso e plante jardins e árvores ao redor para dar contexto."
        ]
      },
      {
        id: 4,
        titulo: "Salão de Troca de Aldeões",
        cat: "Casas/Vilas",
        dif: "Médio",
        emoji: "🧑‍🌾",
        cor: "#8f5635",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorials/Villager_trading_hall",
        desc: "Cabines individuais para cada aldeão, com bancada e cama.",
        mats: ["Aldeões (um por cabine)", "Estações de trabalho (uma por profissão)", "Camas", "Alçapões", "Vidros ou grades", "Blocos de construção", "Funis ou carrinhos para transporte"],
        passos: [
          "Defina o espaço e desenhe uma cabine individual para cada aldeão.",
          "Coloque a estação de trabalho e a cama dentro de cada cabine.",
          "Isole o aldeão com vidros ou alçapões, deixando o jogador ver e conversar com ele.",
          "Transporte os aldeões por carrinhos ou água até as cabines.",
          "Troque a profissão por quebra e recolocação da estação até obter as trocas desejadas."
        ]
      },
      {
        id: 5,
        titulo: "Fazenda de Kelp",
        cat: "Redstone/Fazendas",
        dif: "Médio",
        emoji: "🌊",
        cor: "#2b6f8f",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorials/Kelp_farming",
        desc: "Fazenda automática de kelp, útil para combustível e comida.",
        mats: ["Kelp (algas marinhas)", "1x Observador", "1x Pistão", "1x Funil", "1x Baú", "Blocos de construção", "Baldes de água"],
        passos: [
          "Crie um tanque de água com cerca de 1 bloco de profundidade a mais do que a altura desejada para o kelp.",
          "Plante o kelp no fundo, alinhado ao observador.",
          "Posicione o observador para detectar o crescimento e acionar o pistão.",
          "O pistão quebra o kelp crescido e os itens caem no funil.",
          "Conecte o funil a um baú para coletar tudo."
        ]
      },
      {
        id: 6,
        titulo: "Fazenda de Golens de Ferro",
        cat: "Redstone/Fazendas",
        dif: "Avançado",
        emoji: "🤖",
        cor: "#8f2b2b",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorial:Door-based_iron_golem_farming",
        desc: "Fazenda baseada em portas que gera golens de ferro automaticamente.",
        mats: ["Aldeões", "Camas", "Portas", "Funis e baú", "Lava, para a câmara de morte", "Blocos de construção", "Alçapões e vidros"],
        passos: [
          "Construa a plataforma de nascimento em área aberta, afastada das cabines dos aldeões.",
          "Prenda os aldeões em um espaço fechado, com camas e portas que eles reconheçam como aldeia.",
          "Ajuste a altura e a superfície onde os golens podem nascer, conforme o esquema da wiki.",
          "Leve os golens até a câmara de morte com lava ou queda.",
          "Conecte funis a um baú para coletar o ferro.",
          "As medidas exatas variam por versão: confira o esquema na Minecraft Wiki."
        ]
      }
    ]
  },
  en: {
    appTitle: "⛏️ MineCrafting - Tutorial Hub",
    appSubtitle: "Minecraft building tutorials and blueprints, with material lists and step-by-step guides for your Survival mode.",
    searchPlaceholder: "Search tutorial by keyword...",
    categories: {
      "Todos": "All",
      "Casas/Vilas": "Houses/Villages",
      "Castelos/Medievais": "Castles/Medieval",
      "Redstone/Fazendas": "Redstone/Farms"
    },
    resultsCount: (count) => count + (count === 1 ? " tutorial found" : " tutorials found"),
    emptyState: "No tutorials found. Try another search term or category. 🔍",
    viewStepsBtn: "View Step-by-Step",
    sourceLabel: "Source:",
    originalTutorialLink: "View original tutorial on ",
    materialsTitle: "🎒 Required Materials",
    materialsStatus: (collected, total) => `${collected} of ${total} materials collected`,
    stepsTitle: "📋 Step-by-Step",
    prevBtn: "← Previous",
    nextBtn: "Next →",
    stepCounter: (current, total) => `Step ${current} of ${total}`,
    tutoriais: [
      {
        id: 1,
        titulo: "Micro Survival Shelter",
        cat: "Casas/Vilas",
        dif: "Easy",
        emoji: "🛖",
        cor: "#5b8731",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorial:Building_micro_shelters",
        desc: "Minimal shelter to spend the first night without being attacked.",
        mats: ["~30x Common blocks (dirt, cobblestone, or planks)", "1x Door", "1x Bed", "2x Torches", "1x Chest", "1x Crafting Table"],
        passos: [
          "Choose a slope or flat terrain and leave a small 3x3 block internal space.",
          "Close walls and ceiling with common blocks, leaving no openings besides the door.",
          "Install the door and illuminate the interior with torches so no monsters spawn inside.",
          "Place the bed to skip the night and set your spawn point.",
          "Add a chest and crafting table, using the shelter as a base until building a larger house."
        ]
      },
      {
        id: 2,
        titulo: "Tree Farm",
        cat: "Redstone/Fazendas",
        dif: "Easy",
        emoji: "🌳",
        cor: "#3d7a28",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorial:Tree_farming",
        desc: "Organized timber plantation so you never run out of logs.",
        mats: ["8x Tree saplings", "1x Axe", "16x Bone meal", "4x Torches", "1x Chest", "Dirt or grass blocks"],
        passos: [
          "Prepare a flat area of dirt or grass with open space above each sapling.",
          "Plant saplings with distance between them; species like dark oak or jungle grow in 2x2 groups.",
          "Use bone meal to speed up tree growth.",
          "Harvest logs with an axe and replant saplings that drop.",
          "Illuminate the area with torches to prevent monsters from spawning."
        ]
      },
      {
        id: 3,
        titulo: "Medieval Castle",
        cat: "Castelos/Medievais",
        dif: "Advanced",
        emoji: "🏰",
        cor: "#4a4a4a",
        fonte: "minecraft.how",
        url: "https://minecraft.how/pt/blog/post/minecraft-castle-medieval-building-guide",
        desc: "Walls, corner towers, battlements, and a moat using varied stone.",
        mats: ["Cobblestone, stone bricks, and deepslate", "Dark oak or spruce logs and stairs", "Slabs and stairs for roofs", "Torches, lanterns, and chains", "Water bucket (moat)", "Gate: doors, fences, or iron bars"],
        passos: [
          "Plan the layout on paper and choose elevated ground, preferably near water.",
          "Build thick walls (3 to 4 blocks wide at the base) using varied stones for texture.",
          "Construct corner towers higher than the walls.",
          "Create battlements on top of the walls and machicolations with overhangs.",
          "Cover roofs with stairs and slabs to form slopes instead of flat tops.",
          "Assemble the main gate, courtyard, and interior rooms, then light with torches and lanterns.",
          "Dig a moat and plant gardens and trees around for context."
        ]
      },
      {
        id: 4,
        titulo: "Villager Trading Hall",
        cat: "Casas/Vilas",
        dif: "Medium",
        emoji: "🧑‍🌾",
        cor: "#8f5635",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorials/Villager_trading_hall",
        desc: "Individual cubicles for each villager, complete with job site and bed.",
        mats: ["Villagers (one per cubicle)", "Workstations (one per profession)", "Beds", "Trapdoors", "Glass or iron bars", "Building blocks", "Hoppers or minecarts for transport"],
        passos: [
          "Define the space and layout an individual booth for each villager.",
          "Place a workstation and bed inside each booth.",
          "Isolate the villager with glass or trapdoors while keeping them accessible for trading.",
          "Transport villagers via minecarts or water into their booths.",
          "Change their profession by breaking and replacing the workstation until getting desired trades."
        ]
      },
      {
        id: 5,
        titulo: "Kelp Farm",
        cat: "Redstone/Fazendas",
        dif: "Medium",
        emoji: "🌊",
        cor: "#2b6f8f",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorials/Kelp_farming",
        desc: "Automatic kelp farm, great for fuel and food source.",
        mats: ["Kelp", "1x Observer", "1x Piston", "1x Hopper", "1x Chest", "Building blocks", "Water buckets"],
        passos: [
          "Build a water tank approximately 1 block deeper than desired kelp height.",
          "Plant kelp at the bottom aligned with the observer.",
          "Position the observer to detect growth and trigger the piston.",
          "The piston breaks grown kelp and floating items land in the hopper.",
          "Connect the hopper to a chest to collect the harvest."
        ]
      },
      {
        id: 6,
        titulo: "Iron Golem Farm",
        cat: "Redstone/Fazendas",
        dif: "Advanced",
        emoji: "🤖",
        cor: "#8f2b2b",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorial:Door-based_iron_golem_farming",
        desc: "Door/village-based farm that automatically spawns iron golems.",
        mats: ["Villagers", "Beds", "Doors", "Hoppers and chest", "Lava for kill chamber", "Building blocks", "Trapdoors and glass"],
        passos: [
          "Build the spawning platform in an open area, away from village boundaries.",
          "Contain villagers in an enclosed space with beds and doors detected as a village.",
          "Adjust height and surface specifications according to wiki designs.",
          "Guide spawned golems into a kill chamber using water channels towards lava.",
          "Connect hoppers below to a storage chest for automatic iron collection.",
          "Exact dimensions vary by game version: consult the Minecraft Wiki blueprint."
        ]
      }
    ]
  },
  es: {
    appTitle: "⛏️ MineCrafting - Hub de Tutoriales",
    appSubtitle: "Tutoriales y planos de construcción para Minecraft, con listas de materiales y guia paso a paso para tu modo Supervivencia.",
    searchPlaceholder: "Buscar tutorial por palabra clave...",
    categories: {
      "Todos": "Todos",
      "Casas/Vilas": "Casas/Aldeas",
      "Castelos/Medievais": "Castillos/Medievales",
      "Redstone/Fazendas": "Redstone/Granjas"
    },
    resultsCount: (count) => count + (count === 1 ? " tutorial encontrado" : " tutoriales encontrados"),
    emptyState: "No se encontraron tutoriales. Intenta con otra palabra o categoría. 🔍",
    viewStepsBtn: "Ver Paso a Paso",
    sourceLabel: "Fuente:",
    originalTutorialLink: "Ver tutorial original en ",
    materialsTitle: "🎒 Materiales necesarios",
    materialsStatus: (collected, total) => `${collected} de ${total} materiales recolectados`,
    stepsTitle: "📋 Paso a paso",
    prevBtn: "← Anterior",
    nextBtn: "Siguiente →",
    stepCounter: (current, total) => `Paso ${current} de ${total}`,
    tutoriais: [
      {
        id: 1,
        titulo: "Micro-refugio de Supervivencia",
        cat: "Casas/Vilas",
        dif: "Fácil",
        emoji: "🛖",
        cor: "#5b8731",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorial:Building_micro_shelters",
        desc: "Refugio mínimo para pasar la primera noche sin ser atacado.",
        mats: ["~30x Bloques comunes (tierra, adoquín o madera)", "1x Puerta", "1x Cama", "2x Antorchas", "1x Cofre", "1x Mesa de trabajo"],
        passos: [
          "Elige una ladera o terreno plano y deja un pequeño espacio interno de 3x3 bloques.",
          "Cierra paredes y techo con bloques comunes, sin dejar aperturas además de la puerta.",
          "Instala la puerta e ilumina el interior con antorchas para evitar que aparezcan monstruos.",
          "Coloca la cama para pasar la noche y establecer tu punto de reaparición.",
          "Añade un cofre y mesa de trabajo para usar el refugio como base temporal."
        ]
      },
      {
        id: 2,
        titulo: "Granja de Árboles",
        cat: "Redstone/Fazendas",
        dif: "Fácil",
        emoji: "🌳",
        cor: "#3d7a28",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorial:Tree_farming",
        desc: "Plantación organizada de madera para no quedarte nunca sin troncos.",
        mats: ["8x Brotes de árbol", "1x Hacha", "16x Polvo de hueso", "4x Antorchas", "1x Cofre", "Bloques de tierra o césped"],
        passos: [
          "Prepara un área plana de tierra con espacio libre por encima de cada brote.",
          "Planta los brotes con distancia entre ellos.",
          "Usa polvo de hueso para acelerar el crecimiento.",
          "Tala los troncos con el hacha y replanta los brotes que caigan.",
          "Ilumina el área con antorchas para evitar la aparición de monstruos."
        ]
      },
      {
        id: 3,
        titulo: "Castillo Medieval",
        cat: "Castelos/Medievais",
        dif: "Avanzado",
        emoji: "🏰",
        cor: "#4a4a4a",
        fonte: "minecraft.how",
        url: "https://minecraft.how/pt/blog/post/minecraft-castle-medieval-building-guide",
        desc: "Murallas, torres de esquina, almenas y foso con piedra variada.",
        mats: ["Adoquín, ladrillos de piedra y pizarra profunda", "Troncos y escaleras de roble oscuro", "Losas y escaleras para tejados", "Antorchas y faroles", "Cubo de agua (foso)", "Rejas o barras de hierro"],
        passos: [
          "Planifica el diseño y elige un terreno elevado cerca del agua.",
          "Levanta murallas gruesas de 3 a 4 bloques de ancho con variedad de piedras.",
          "Construye torres en las esquinas más altas que las murallas.",
          "Crea almenas y salientes en la parte superior.",
          "Cubre los tejados con escaleras para dar inclinación.",
          "Monta el portón principal y decora el interior con faroles.",
          "Excava el foso alrededor."
        ]
      },
      {
        id: 4,
        titulo: "Sala de Comercio de Aldeanos",
        cat: "Casas/Vilas",
        dif: "Medio",
        emoji: "🧑‍🌾",
        cor: "#8f5635",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorials/Villager_trading_hall",
        desc: "Cabinas individuales para cada aldeano con mesa de trabajo y cama.",
        mats: ["Aldeanos", "Mesas de trabajo", "Camas", "Trampillas", "Cristal", "Bloques de construcción", "Vagonetas o tolvas"],
        passos: [
          "Diseña una cabina individual para cada aldeano.",
          "Coloca la mesa de trabajo y la cama dentro.",
          "Aísla al aldeano con cristal o trampillas.",
          "Transporta a los aldeanos con vagonetas hasta sus cabinas.",
          "Cambia su profesión rompiendo y colocando la mesa de trabajo."
        ]
      },
      {
        id: 5,
        titulo: "Granja de Algas (Kelp)",
        cat: "Redstone/Fazendas",
        dif: "Medio",
        emoji: "🌊",
        cor: "#2b6f8f",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorials/Kelp_farming",
        desc: "Granja automática de algas, ideal para combustible y comida.",
        mats: ["Algas", "1x Observador", "1x Pistón", "1x Tolva", "1x Cofre", "Bloques", "Cubos de agua"],
        passos: [
          "Crea un tanque de agua con la profundidad deseada.",
          "Planta algas en el fondo alineadas con el observador.",
          "Coloca el observador para detectar el crecimiento y activar el pistón.",
          "El pistón corta las algas y flotan hacia la tolva.",
          "Conecta la tolva a un cofre."
        ]
      },
      {
        id: 6,
        titulo: "Granja de Gólems de Hierro",
        cat: "Redstone/Fazendas",
        dif: "Avanzado",
        emoji: "🤖",
        cor: "#8f2b2b",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorial:Door-based_iron_golem_farming",
        desc: "Granja automatizada para generar gólems de hierro de forma continua.",
        mats: ["Aldeanos", "Camas", "Puertas", "Tolvas y cofre", "Lava", "Bloques de construcción", "Trampillas"],
        passos: [
          "Construye la plataforma de aparición en un área abierta.",
          "Encierra a los aldeanos con camas y puertas.",
          "Ajusta la altura de la zona de aparición.",
          "Guía a los gólems hacia la lava usando corrientes de agua.",
          "Recoge el hierro en un cofre mediante tolvas."
        ]
      }
    ]
  },
  fr: {
    appTitle: "⛏️ MineCrafting - Hub de Tutoriels",
    appSubtitle: "Tutoriels et plans de construction Minecraft, avec liste de matériaux et guides étape par étape pour le mode Survie.",
    searchPlaceholder: "Rechercher un tutoriel par mot-clé...",
    categories: {
      "Todos": "Tous",
      "Casas/Vilas": "Maisons/Villages",
      "Castelos/Medievais": "Châteaux/Médiéval",
      "Redstone/Fazendas": "Redstone/Fermes"
    },
    resultsCount: (count) => count + (count === 1 ? " tutoriel trouvé" : " tutoriels trouvés"),
    emptyState: "Aucun tutoriel trouvé. Essayez un autre mot-clé ou catégorie. 🔍",
    viewStepsBtn: "Voir Étape par Étape",
    sourceLabel: "Source:",
    originalTutorialLink: "Voir le tutoriel original sur ",
    materialsTitle: "🎒 Matériaux requis",
    materialsStatus: (collected, total) => `${collected} sur ${total} matériaux collectés`,
    stepsTitle: "📋 Étape par étape",
    prevBtn: "← Précédent",
    nextBtn: "Suivant →",
    stepCounter: (current, total) => `Étape ${current} sur ${total}`,
    tutoriais: [
      {
        id: 1,
        titulo: "Micro-abri de Survie",
        cat: "Casas/Vilas",
        dif: "Facile",
        emoji: "🛖",
        cor: "#5b8731",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorial:Building_micro_shelters",
        desc: "Abri minimaliste pour passer la première nuit en sécurité.",
        mats: ["~30x Blocs communs (terre, pierre, planches)", "1x Porte", "1x Lit", "2x Torches", "1x Coffre", "1x Établi"],
        passos: [
          "Choisissez un terrain plat et aménagez un espace intérieur de 3x3 blocs.",
          "Fermez les murs et le toit avec des blocs basiques.",
          "Installez la porte et éclairez l'intérieur avec des torches.",
          "Placez le lit pour passer la nuit et définir votre point de réapparition.",
          "Ajoutez le coffre et l'établi pour compléter votre base temporaire."
        ]
      },
      {
        id: 2,
        titulo: "Ferme à Arbres",
        cat: "Redstone/Fazendas",
        dif: "Facile",
        emoji: "🌳",
        cor: "#3d7a28",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorial:Tree_farming",
        desc: "Plantation de bois organisée pour ne jamais manquer de bûches.",
        mats: ["8x Pousses d'arbre", "1x Hache", "16x Poudre d'os", "4x Torches", "1x Coffre", "Blocs de terre"],
        passos: [
          "Préparez une zone plate en terre avec un espace dégagé en hauteur.",
          "Plantez les pousses en gardant de l'espace entre elles.",
          "Utilisez de la poudre d'os pour accélérer la pousse.",
          "Récoltez le bois avec une hache et replantez les pousses tombées.",
          "Éclairez la zone avec des torches."
        ]
      },
      {
        id: 3,
        titulo: "Château Médiéval",
        cat: "Castelos/Medievais",
        dif: "Avancé",
        emoji: "🏰",
        cor: "#4a4a4a",
        fonte: "minecraft.how",
        url: "https://minecraft.how/pt/blog/post/minecraft-castle-medieval-building-guide",
        desc: "Murailles, tours d'angle, créneaux et douves en pierres variées.",
        mats: ["Pierres, briques de pierre et abîme", "Bûches et escaliers en chêne noir", "Dalles et escaliers pour toits", "Torches et lanternes", "Seau d'eau (douves)", "Barreaux de fer"],
        passos: [
          "Planifiez la structure sur un terrain élevé près de l'eau.",
          "Érigez de grands murs de 3 à 4 blocs d'épaisseur.",
          "Construisez des tours aux angles plus hautes que les murs.",
          "Créez des créneaux sur le sommet des murs.",
          "Recouvrez les toits avec des escaliers inclinés.",
          "Installez la porte principale et éclairez l'intérieur.",
          "Creusez les douves autour du château."
        ]
      },
      {
        id: 4,
        titulo: "Hall de Commerce de Villageois",
        cat: "Casas/Vilas",
        dif: "Moyen",
        emoji: "🧑‍🌾",
        cor: "#8f5635",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorials/Villager_trading_hall",
        desc: "Loges individuelles pour chaque villageois avec lit et poste de travail.",
        mats: ["Villageois", "Postes de travail", "Lits", "Trappes", "Verre", "Blocs de construction", "Entonnoirs"],
        passos: [
          "Définissez l'espace et créez une loge individuelle par villageois.",
          "Placez un poste de travail et un lit dans chaque loge.",
          "Isolez le villageois avec du verre ou des trappes.",
          "Amenez les villageois à l'aide de wagons ou d'eau.",
          "Changez le métier en cassant et replaçant le bloc de travail."
        ]
      },
      {
        id: 5,
        titulo: "Ferme à Kelp (Algues)",
        cat: "Redstone/Fazendas",
        dif: "Moyen",
        emoji: "🌊",
        cor: "#2b6f8f",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorials/Kelp_farming",
        desc: "Ferme automatique à algues pour le carburant et la nourriture.",
        mats: ["Algues (Kelp)", "1x Observateur", "1x Piston", "1x Entonnoir", "1x Coffre", "Blocs", "Seaux d'eau"],
        passos: [
          "Construisez un bassin d'eau d'une profondeur adéquate.",
          "Plantez les algues au fond sous l'observateur.",
          "Placez l'observateur pour déclencher le piston lors de la pousse.",
          "Le piston coupe l'algue et les items flottent vers l'entonnoir.",
          "Reliez l'entonnoir à un coffre."
        ]
      },
      {
        id: 6,
        titulo: "Fattoria di Golem di Ferro",
        cat: "Redstone/Fazendas",
        dif: "Avanzato",
        emoji: "🤖",
        cor: "#8f2b2b",
        fonte: "Minecraft Wiki",
        url: "https://minecraft.wiki/w/Tutorial:Door-based_iron_golem_farming",
        desc: "Fattoria automatica per generare golem di ferro in modo continuo.",
        mats: ["Villici", "Letti", "Porte", "Tramogge e cassa", "Lava", "Blocchi di costruzione", "Botole"],
        passos: [
          "Costruisci la piattaforma di spawn in un'area aperta.",
          "Rinchiudi i villici con letti e porte riconosciuti come villaggio.",
          "Regola l'altezza della zona di spawn.",
          "Guida i golem verso la lava usando correnti d'acqua.",
          "Raccogli il ferro in una cassa tramite le tramogge."
        ]
      }
    ]
  }
}
