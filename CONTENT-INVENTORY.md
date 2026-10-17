# Inventario de contenido — Hamburguesería El Balcón

Fuente: https://www.hamburgueseriaelbalcon.com/ (auditado 2026-10-16)

Este documento es la referencia de verificación para la Fase 4 (Validación). Todo lo
que aparece en la web nueva debe poder rastrearse a una fila de este inventario.

## 1. Identidad

- **Nombre:** Hamburguesería El Balcón
- **Slogan (home):** "Ricas y Sabrosas"
- **Descripción (home):** "Somos especialistas en hamburguesas y lomitos!"
- **Logo:** `/images/logo-el-balcon.svg`
- **Logo footer:** `/images/el-balcon-logo-footer.webp`
- **Crédito desarrollo original:** MGS Creativa — www.mgscreativa.com (se conserva como
  cortesía de atribución, no se elimina ni se reemplaza por otro crédito)

## 2. Navegación global (verificada en las 3 páginas)

| Label | Href original | Ruta nueva |
|---|---|---|
| Menú | `/` | `/` |
| Sucursales Y Precios | `/sucursales-y-precios.html` | `/sucursales-y-precios` |
| Nosotros | `/nosotros.html` | `/nosotros` |
| (detalle de sucursal) | `/el-balcon-vgb.html` | `/el-balcon-vgb` |

## 3. ⚠️ Discrepancia de precios detectada y resuelta

La portada (`/`) muestra una tabla de precios en un orden de magnitud ~19-20x menor
(ej. Romeo = **$750**) que la página específica de la sucursal
`/el-balcon-vgb.html` (ej. Romeo = **$14.500**). Se verificó carácter por carácter en
ambas páginas, no es un error de lectura.

**Resolución:** `/el-balcon-vgb.html` es la página específica de "Sucursales y Precios"
a la que realmente apunta la navegación (la portada es un menú de muestra/plantilla
desactualizado). Se adopta **`/el-balcon-vgb.html` como fuente de verdad para precios**
en toda la web nueva. La discrepancia queda documentada acá para que el negocio la
revise — no se inventó ningún valor, ambos precios son reales y están citados.

## 4. Menú completo (nombre, precio verificado, descripción/ingredientes, imagen)

Todos los platos son "con papas" salvo donde se indique.

### Hamburguesas (con papas)

| Producto | Precio | Ingredientes (de portada) | Imagen original |
|---|---|---|---|
| Romeo | $14.500 | Jamón, queso, lechuga, tomate, cebolla morada, huevo frito | `romeohweb1-2.webp` |
| Suicida Simple | $15.900 | Cheddar, bacon, cebolla caramelizada, huevo frito | `suicidasimplehweb1.webp` |
| Suicida (DESAFIANTE) | $21.900 | Doble carne, doble cheddar, bacon, cebolla caramelizada, huevo frito | `suicidadhweb1.webp` |
| Serenata | $16.900 | Jamón crudo, rúcula, parmesano | `serenatahweb1-2.webp` |
| Mi Querida Margarita | $15.900 | Tomate, mozzarella, mayo de ajo | `margaritahweb1-2.webp` |
| Costanera | $15.900 | Hamburguesa de chorizo, provoleta, morrón asado, chimichurri | `costanerahweb1-2.webp` |
| Julieta | $14.900 | Mozzarella, papas pay, salsa criolla | `julietahweb1-2.webp` |
| Tercio De Libra | $15.900 | Doble cheddar, cebolla, aderezos, pickles opcional | `terciohweb1.webp` |
| Mariachi | $15.200 | Cebolla, morrón asado, salsa picante | `mariachihweb1-2.webp` |
| Turuleca | $15.200 | Hamburguesa de pollo, queso fontina, pepinos encurtidos, barbacoa | `turulecahweb1.webp` |
| Onda Verde | $14.500 | Hamburguesa vegetariana, berenjena, morrón asado, huevo frito | `ondaverdehweb1-2.webp` |
| Balconcito Kids | $13.000 | Jamón y queso | `kidshweb1-2.webp` |

### Lomitos / Sandwiches (con papas)

| Producto | Precio | Imagen original |
|---|---|---|
| Romeo | $20.900 | `romeolweb1-2.webp` |
| Suicida | $22.900 | `suicidalwen1.webp` |
| Serenata | $21.900 | `serenatalweb1.webp` |
| Mi Querida Margarita | $21.900 | `margaritalweb-2.webp` |
| Julieta | $21.900 | `julietalweb1-2.webp` |
| Tercio De Libra | $21.900 | `terciolweb1.webp` |
| Mariachi | $21.900 | `mariachilweb-2.webp` |

### Papas

| Producto | Precio | Imagen original |
|---|---|---|
| Papas Fritas | $10.400 | `papasfritasweb1-2.webp` |
| Papas A La Provenzal | $10.600 | `papasprovenzalweb1-2.webp` |
| Papas A Caballo | $10.700 | `papasacaballoweb1-2.webp` |
| Papas Al Verdeo | $11.100 | `papasalverdeo1-2.webp` |
| Papas Cheddar Y Panceta | $12.800 | `papaschedypancetaweb1-2.webp` |
| Salchipapas (fritas, salchicha alemana, huevo, repollo, mayo, ketchup) | $14.500 | `salchipapasweb1-2.webp` |

### Entradas

| Producto | Precio | Imagen original |
|---|---|---|
| Chicken Fingers | $13.000 | `chickenfingersweb1-2.webp` |
| Cubos De Muzzarella | $13.000 | `cubosweb1-2.webp` |

## 5. Sucursal

**El Balcón VGB** (única sucursal detectada en el sitio)

- Dirección: Av. San Martín 311, Villa Gral. Belgrano, Córdoba
- Horario: Martes a Domingo de 19:00 a 00:00 hs (la página de sucursales añade un
  detalle de fin de semana — 11:30 a 15:30 y 19:00 a 00:00 — que **no aparece** en
  `el-balcon-vgb.html`; se marca como PENDIENTE DE CONFIRMAR con el negocio y se
  muestra el horario que figura en la página de la sucursal, el más específico)
- Servicios: salón, take-away, delivery
- WhatsApp: https://wa.me/543546455863 (+54 354 645 5863)
- Instagram: https://www.instagram.com/elbalconvgb/?hl=es (@elbalconvgb)
- Facebook: https://www.facebook.com/elbalconvgb/
- Google Maps: https://goo.gl/maps/b3VBkG5QJpTh5gkx5

## 6. "Nosotros"

- Tagline: "En El Balcón nos tomamos en serio la calidad"
- Headers de sección: "Viaja con nosotros al corazón de nuestra cocina",
  "Elaboramos Nuestros Panes"
- No hay nombres de fundadores, historia detallada ni misión/valores formales en el
  sitio — **no se inventa nada**, se mantiene el texto breve real y se puede
  acompañar con la fotografía de proceso (panes, cocina) ya existente.
- Imágenes: hero `/images/2022/01/13/el-balcon-hambugruesa-home.webp`,
  galería `gallery1.webp`…`gallery4.webp`

## 7. Imágenes — procedencia

Todas las imágenes de producto y de marca se descargan directamente del dominio
original `hamburgueseriaelbalcon.com` (carpeta `/images/2025/02/11/...` para fotos de
menú, `/images/2022/01/13/...` para hero/galería) y se guardan en
`public/images/menu/` y `public/images/site/` del proyecto nuevo. No se usa ninguna
fotografía de stock ni generada por IA para reemplazar producto real.

## 8. Pendientes / no verificable

- Horario de fin de semana de la sucursal (ver sección 5).
- No se detectaron reseñas, calificaciones, otras sucursales, promociones o
  sistema de pedidos online propio (solo WhatsApp) — no se inventan.
- No hay teléfono fijo publicado, solo WhatsApp.
