export type MenuItem = {
  slug: string;
  name: string;
  price: number;
  description?: string;
  image: string;
  tag?: string;
};

export type MenuCategory = {
  slug: string;
  label: string;
  note?: string;
  items: MenuItem[];
};

// Precios verificados en /el-balcon-vgb.html (ver CONTENT-INVENTORY.md, sección 3).
export const menu: MenuCategory[] = [
  {
    slug: "hamburguesas",
    label: "Hamburguesas",
    note: "Todas vienen con papas",
    items: [
      {
        slug: "romeo-h",
        name: "Romeo",
        price: 14500,
        description: "Jamón, queso, lechuga, tomate, cebolla morada, huevo frito",
        image: "/images/menu/romeo-h.webp",
      },
      {
        slug: "suicida-simple",
        name: "Suicida Simple",
        price: 15900,
        description: "Cheddar, bacon, cebolla caramelizada, huevo frito",
        image: "/images/menu/suicida-simple-h.webp",
      },
      {
        slug: "suicida-h",
        name: "Suicida",
        price: 21900,
        description: "Doble carne, doble cheddar, bacon, cebolla caramelizada, huevo frito",
        image: "/images/menu/suicida-h.webp",
        tag: "Desafiante",
      },
      {
        slug: "serenata-h",
        name: "Serenata",
        price: 16900,
        description: "Jamón crudo, rúcula, parmesano",
        image: "/images/menu/serenata-h.webp",
      },
      {
        slug: "margarita-h",
        name: "Mi Querida Margarita",
        price: 15900,
        description: "Tomate, mozzarella, mayo de ajo",
        image: "/images/menu/margarita-h.webp",
      },
      {
        slug: "costanera",
        name: "Costanera",
        price: 15900,
        description: "Hamburguesa de chorizo, provoleta, morrón asado, chimichurri",
        image: "/images/menu/costanera-h.webp",
      },
      {
        slug: "julieta-h",
        name: "Julieta",
        price: 14900,
        description: "Mozzarella, papas pay, salsa criolla",
        image: "/images/menu/julieta-h.webp",
      },
      {
        slug: "tercio-h",
        name: "Tercio De Libra",
        price: 15900,
        description: "Doble cheddar, cebolla, aderezos, pickles opcional",
        image: "/images/menu/tercio-h.webp",
      },
      {
        slug: "mariachi-h",
        name: "Mariachi",
        price: 15200,
        description: "Cebolla, morrón asado, salsa picante",
        image: "/images/menu/mariachi-h.webp",
      },
      {
        slug: "turuleca",
        name: "Turuleca",
        price: 15200,
        description: "Hamburguesa de pollo, queso fontina, pepinos encurtidos, barbacoa",
        image: "/images/menu/turuleca-h.webp",
      },
      {
        slug: "onda-verde",
        name: "Onda Verde",
        price: 14500,
        description: "Hamburguesa vegetariana, berenjena, morrón asado, huevo frito",
        image: "/images/menu/onda-verde-h.webp",
      },
      {
        slug: "kids",
        name: "Balconcito Kids",
        price: 13000,
        description: "Jamón y queso",
        image: "/images/menu/kids-h.webp",
      },
    ],
  },
  {
    slug: "lomitos",
    label: "Lomitos",
    note: "Todos vienen con papas",
    items: [
      { slug: "romeo-l", name: "Romeo", price: 20900, image: "/images/menu/romeo-l.webp" },
      { slug: "suicida-l", name: "Suicida", price: 22900, image: "/images/menu/suicida-l.webp" },
      { slug: "serenata-l", name: "Serenata", price: 21900, image: "/images/menu/serenata-l.webp" },
      { slug: "margarita-l", name: "Mi Querida Margarita", price: 21900, image: "/images/menu/margarita-l.webp" },
      { slug: "julieta-l", name: "Julieta", price: 21900, image: "/images/menu/julieta-l.webp" },
      { slug: "tercio-l", name: "Tercio De Libra", price: 21900, image: "/images/menu/tercio-l.webp" },
      { slug: "mariachi-l", name: "Mariachi", price: 21900, image: "/images/menu/mariachi-l.webp" },
    ],
  },
  {
    slug: "papas",
    label: "Papas",
    items: [
      { slug: "papas-fritas", name: "Papas Fritas", price: 10400, image: "/images/menu/papas-fritas.webp" },
      { slug: "papas-provenzal", name: "Papas A La Provenzal", price: 10600, image: "/images/menu/papas-provenzal.webp" },
      { slug: "papas-caballo", name: "Papas A Caballo", price: 10700, image: "/images/menu/papas-caballo.webp" },
      { slug: "papas-verdeo", name: "Papas Al Verdeo", price: 11100, image: "/images/menu/papas-verdeo.webp" },
      { slug: "papas-cheddar-panceta", name: "Papas Cheddar Y Panceta", price: 12800, image: "/images/menu/papas-cheddar-panceta.webp" },
      {
        slug: "salchipapas",
        name: "Salchipapas",
        price: 14500,
        description: "Papas fritas, salchicha alemana, huevo, repollo, mayo, ketchup",
        image: "/images/menu/salchipapas.webp",
      },
    ],
  },
  {
    slug: "entradas",
    label: "Entradas",
    items: [
      { slug: "chicken-fingers", name: "Chicken Fingers", price: 13000, image: "/images/menu/chicken-fingers.webp" },
      { slug: "cubos-muzzarella", name: "Cubos De Muzzarella", price: 13000, image: "/images/menu/cubos-muzzarella.webp" },
    ],
  },
];

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(price);
}
