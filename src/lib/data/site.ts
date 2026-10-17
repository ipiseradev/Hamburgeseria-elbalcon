export const site = {
  name: "Hamburguesería El Balcón",
  slogan: "Ricas y Sabrosas",
  description: "Somos especialistas en hamburguesas y lomitos.",
  url: "https://www.hamburgueseriaelbalcon.com",
  logo: "/images/site/logo.svg",
  logoFooter: "/images/site/logo-footer.webp",
  devCredit: { name: "MGS Creativa", url: "https://www.mgscreativa.com" },
} as const;

export const nav = [
  { label: "Menú", href: "/" },
  { label: "Sucursales y Precios", href: "/sucursales-y-precios" },
  { label: "Nosotros", href: "/nosotros" },
] as const;

export const branch = {
  name: "El Balcón VGB",
  address: "Av. San Martín 311, Villa Gral. Belgrano, Córdoba",
  hours: "Martes a Domingo de 19:00 a 00:00 hs",
  hoursNote:
    "La página de sucursales menciona además un horario de fin de semana al mediodía (11:30 a 15:30 hs) que no figura en la ficha de la sucursal. Pendiente de confirmar con el negocio.",
  services: ["Salón", "Take away", "Delivery"],
  whatsapp: "https://wa.me/543546455863",
  whatsappDisplay: "+54 354 645 5863",
  instagram: "https://www.instagram.com/elbalconvgb/?hl=es",
  instagramHandle: "@elbalconvgb",
  facebook: "https://www.facebook.com/elbalconvgb/",
  maps: "https://goo.gl/maps/b3VBkG5QJpTh5gkx5",
  menuHref: "/el-balcon-vgb",
} as const;

export const about = {
  tagline: "En El Balcón nos tomamos en serio la calidad",
  sections: [
    {
      heading: "Viaja con nosotros al corazón de nuestra cocina",
      body: "Cada plato que sale de la cocina de El Balcón se prepara con el mismo cuidado con el que lo serviríamos en nuestra propia mesa.",
    },
    {
      heading: "Elaboramos Nuestros Panes",
      body: "Horneamos nuestro propio pan para cada hamburguesa y lomito, porque la calidad se nota desde la primera capa.",
    },
  ],
  gallery: [
    "/images/site/gallery-1.webp",
    "/images/site/gallery-2.webp",
    "/images/site/gallery-3.webp",
    "/images/site/gallery-4.webp",
  ],
} as const;
