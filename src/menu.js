export const categories = [
  {
    category: "Entradas",
    items: [
      {
        name: "Edamame",
        desc: "Al vapor o asado",
        image: "/images/edamame.webp",
        options: [
          { name: "Al vapor", price: 89 },
          { name: "Asado", price: 119 },
        ],
      },
      {
        name: "Miso Soup",
        desc: "Sopa japonesa con tofu y algas",
        price: 119,
        image: "/images/miso-soup.webp",
      },
      {
        name: "Ensalada de Wakame",
        desc: "Alga marina con sésamo",
        price: 99,
        image: "/images/ensalada-wakame.webp",
      },
      {
        name: "Gyoza",
        desc: "Pollo o cerdo, al vapor o frito",
        image: "/images/gyoza.webp",
      
        options: [
          {
            name: "Cerdo al Vapor",
            price: 169,
          },
          {
            name: "Cerdo Frito",
            price: 169,
          },
          {
            name: "Pollo al Vapor",
            price: 169,
          },
          {
            name: "Pollo Frito",
            price: 169,
          },
        ],
      },
      {
        name: "Bao Asiática",
        desc: "Pan al vapor relleno de cerdo BBQ",
        price: 159,
        image: "/images/bao.webp",
      },
      {
        name: "Spring Roll",
        desc: "Crujiente relleno de vegetales",
        price: 179,
        image: "/images/spring-roll.webp",
      },
      {
        name: "Brocheta de Camaron",
        desc: "2 / 5 piezas",
        image: "/images/brocheta-camaron.webp",
        options: [
          { name: "De 2", price: 109 },
          { name: "De 5", price: 229 },
        ],
      },
      {
        name: "Tempura Mixto",
        desc: "Verduras y 3 piezas de camarones",
        price: 249,
        image: "/images/tempura.webp",
      },
      {
        name: "Ika Sansai",
        desc: "Ensalada de calamar",
        price: 189,
        image: "/images/ika-sansai.webp",
      },
      
    ],
  },

  {
    category: "Combos",
    items: [
      {
        name: "Combo Yamato",
        desc: "Yamato Roll(5 piezas), Nemo Roll(4 piezas), Brocheta de Camaron(2 piezas), Salmon Wonton Bites(2 piezas)",
        image: "/images/combo-yamato.webp",
        price: 399,
      },
      {
        name: "Combo Clásico",
        desc: "Ebi Roll(5 piezas), California Roll (4 piezas), Gyoza Frita (2 piezas), Spring Roll (1 pieza), Miso Soup (1 tazón)",
        image: "/images/combo-clasico.webp",
        price: 399,
      },

      {
        name: "Combo Zambo Lover",
        desc: "Gyoza + Zambo Roll",
        image: "/images/combo-zambo-lover.webp",
        price: 389,
        type: "combo",
        steps: [
          {
            label: "Elige tu Gyoza",
            options: [
              { name: "Cerdo Frito"},
              { name: "Cerdo al Vapor"},
              { name: "Pollo Frito"},
              { name: "Pollo al Vapor"},
            ],
          },
        ],
      },
      {
        name: "Combo para Compartir",
        desc: "Edamame + 2 Rollos (hasta L.269 c/u)",
        image: "/images/combo-compartir.webp",
        price: 550,
        type: "combo",
        steps: [
          {
            label: "Elige tu Edamame",
            options: [
              { name: "Edamame Al vapor"},
              { name: "Edamame Asado"},
            ],
          },
          {
            label: "Elige el Rollo 1",
            options: [
              { name: "Yamato Roll" },
              { name: "Ebi Roll"},
              { name: "Sesame Roll"},
              { name: "Boston Roll"},
              { name: "Zambo Roll"},
              { name: "Kani Kama Roll" },
              { name: "Nemo Roll"},
              { name: "Alaska Roll"},
              { name: "Sofia Roll"},
              { name: "Hokkaido Roll"},
              { name: "Wakame Roll"},
              { name: "Osaka Roll"},
              { name: "Chicken Roll"},
              { name: "Abokado Roll"},
              { name: "Catracho Roll"},
            ],
          },
          {
            label: "Elige el Rollo 2",
            options: [
              { name: "Yamato Roll"},
              { name: "Ebi Roll"},
              { name: "Sesame Roll"},
              { name: "Boston Roll"},
              { name: "Zambo Roll"},
              { name: "Kani Kama Roll"},
              { name: "Nemo Roll"},
              { name: "Alaska Roll"},
              { name: "Sofia Roll"},
              { name: "Hokkaido Roll"},
              { name: "Wakame Roll"},
              { name: "Osaka Roll"},
              { name: "Chicken Roll"},
              { name: "Abokado Roll"},
              { name: "Catracho Roll"},
            ],
          },
        ],
      },
    ],
  },
  
  {
    category: "Rollos",
    items: [
      {
        name: "Yamato Roll",
        desc: "Camaron, aguacate, queso, zanahoria",
        price: 259,
        image: "/images/yamato.webp",
      },
      {
        name: "Tokyo Roll",
        desc: "Camaron, queso, aguacate, salmon, tobikos",
        price: 339,
        image: "/images/tokyo.webp",
      },
      {
        name: "Ebi Roll",
        desc: "Queso, aguacate, surimi, camaron",
        price: 259,
        image: "/images/ebi.webp",
      },
      {
        name: "Salmon Lovers Roll",
        desc: "Salmon y Aguacate",
        price: 339,
        image: "/images/salmon-lovers.webp",
      },
      {
        name: "Sesame Roll",
        desc: "Queso crema, camaron empanizado y aguacate",
        price: 259,
        image: "/images/sesame.webp",
      },
      {
        name: "Sake Roll",
        desc: "Salmon, queso crema, aguacate, cebollin",
        price: 299,
        image: "/images/sake.webp",
      },
      {
        name: "Boston Roll",
        desc: "Camarón tempura, surimi, Queso, Aguacate",
        price: 259,
        image: "/images/boston.webp",
      },
      {
        name: "Dragon Roll",
        desc: "Queso crema, camaron tempura, aguacate, anguila y tobikos",
        price: 349,
        image: "/images/dragon.webp",
      },
      {
        name: "Zambo Roll",
        desc: "Queso crema, camaron tempura, aguacate y platano",
        price: 259,
        image: "/images/zambo.webp",
      },
      {
        name: "Kani Kama Roll",
        desc: "Queso crema, aguacate y surimi",
        price: 259,
        image: "/images/kani.webp",
      },
      {
        name: "Fuji Roll",
        desc: "Queso crema, aguacate, salmon y tobikos",
        price: 329,
        image: "/images/fuji.webp",
      },
      {
        name: "Sakura Roll",
        desc: "Queso crema, aguacate, surimi y salmon",
        price: 299,
        image: "/images/sakura.webp",
      },
      {
        name: "Nagoya Roll",
        desc: "Queso crema, salmon y aguacate",
        price: 299,
        image: "/images/nagoya.webp",
      },
      {
        name: "Okassan Roll",
        desc: "Queso crema, pepino, surimi y salmon",
        price: 299,
        image: "/images/okassan.webp",
      },
      {
        name: "California Roll",
        desc: "aguacate, pepino y surimi o camaron",
        image: "/images/california.webp",
        options: [
          { name: "de camaron", price: 219 },
          { name: "de cangrejo", price: 219 },
        ],
      },
      {
        name: "Nemo Roll",
        desc: "Queso crema, aguacate, pepino y surimi",
        price: 269,
        image: "/images/nemo.webp",
      },
      {
        name: "Alaska Roll",
        desc: "Queso crema, surimi, pescado tempura y aguacate",
        price: 269,
        image: "/images/alaska.webp",
      },
      {
        name: "Sofia Roll",
        desc: "Queso crema, camaron tempura, aguacate, surimi y lechuga",
        price: 259,
        image: "/images/sofia.webp",
      },
      {
        name: "Hokkaido Roll",
        desc: "Queso crema, aguacate y surimi empanizado",
        price: 239,
        image: "/images/hokkaido.webp",
      },
      {
        name: "Wakame Roll",
        desc: "Queso crema, camaron tempura, aguacate y wakame",
        price: 269,
        image: "/images/wakame.webp",
      },
      {
        name: "Queso Roll",
        desc: "Queso crema, aguacate, pepino, surimi y queso americano",
        price: 239,
        image: "/images/queso.webp",
      },
      {
        name: "Osaka Roll",
        desc: "Pollo desmenuzado, Queso, aguacate y pepino.",
        price: 269,
        image: "/images/osaka.webp",
      },
      {
        name: "Chicken Roll",
        desc: "Queso crema, platano, pollo tempura y aguacate",
        price: 269,
        image: "/images/chicken.webp",
      },
      {
        name: "Abokado Roll",
        desc: "Queso crema y aguacate",
        price: 229,
        image: "/images/abokado.webp",
      },
      {
        name: "Catracho Roll",
        desc: "Queso crema, aguacate y platano",
        price: 239,
        image: "/images/catracho.webp",
      },
    ],
  },
  {
    category: "Ramen",
    items: [
      {
        name: "Ramen",
        desc: "Ramen japonés en Copán con pollo o camarón",
        price: 289,
        image: "/images/ramen.webp",
      },
      {
        name: "Udon",
        desc: "Udon japonés estilo ramen en Copán",
        price: 289,
        image: "/images/udon.webp",
      },
    ],
  },
  {
    category: "Bowls",
    items: [
      {
        name: "Teriyaki Chicken Bowl",
        desc: "Pollo teriyaki estilo japonés",
        price: 259,
        image: "/images/teriyaki-chicken.webp",
      },
      {
        name: "Sweet Chili Chicken Bowl",
        desc: "Pollo sweet chili estilo japonés",
        price: 259,
        image: "/images/chili-chicken.webp",
      },
    ],
  },

  {
    category: "Especialidades",
    items: [
      {
        name: "Kids Chickens",
        desc: "Crujiente de pollo acompañada de papas fritas",
        price: 189,
        image: "/images/kids-chicken.webp",
      },
      {
        name: "Camarón Cantonés",
        desc: "camarones al vapor con jengible y cebollina",
        image: "/images/camaron-cantones.webp",
        options: [
          { name: "18u", price: 349 },
          { name: "9u", price: 180 },
        ],
      },
      
    ],
  },

  
  
  {
    category: "Bubble Tea",
    items: [
      {
        name: "Clasica Bubble Tea",
        image: "/images/milk-tea.webp",
        desc: "Bubble Tea clásico con leche",
      
        options: [
          { name: "Sin Boba", price: 90 },
          { name: "Boba Tapioca", price: 110 },
          { name: "Boba Fresa", price: 110 },
          { name: "Boba Mango", price: 110 },
          { name: "Boba Manzana", price: 110 },
        ],
      },
      {
        name: "Matcha Bubble Tea",
        image: "/images/milk-tea.webp",
        desc: "Té Matcha Japonés",
      
        options: [
          {
            name: "Sin Boba",
            price: 110,
          },
          {
            name: "Boba Tapioca",
            price: 130,
          },
          {
            name: "Boba Fresa",
            price: 130,
          },
          {
            name: "Boba Mango",
            price: 130,
          },
          {
            name: "Boba Manzana",
            price: 130,
          },
        ],
      },
      {
        name: "Fresa Bubble Tea",
        image: "/images/milk-tea.webp",
        desc: "Bubble Tea de fresa con leche",
      
        options: [
          { name: "Sin Boba", price: 110 },
          { name: "Boba Tapioca", price: 130 },
          { name: "Boba Fresa", price: 130 },
          { name: "Boba Mango", price: 130 },
          { name: "Boba Manzana", price: 130 },
        ],
      },,
      {
        name: "Latte de Coco Frío",
        desc: "Estilo asiático",
        price: 90,
        image: "/images/latte-coco.webp",
      },
    ],
  },
];