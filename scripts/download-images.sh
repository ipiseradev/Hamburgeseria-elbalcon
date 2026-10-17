#!/usr/bin/env bash
set -e
BASE="https://hamburgueseriaelbalcon.com/images"
MENU_DIR="public/images/menu"
SITE_DIR="public/images/site"

declare -A MENU_IMAGES=(
  ["romeo-h.webp"]="2025/02/11/romeohweb1-2.webp"
  ["suicida-simple-h.webp"]="2025/02/11/suicidasimplehweb1.webp"
  ["suicida-h.webp"]="2025/02/11/suicidadhweb1.webp"
  ["serenata-h.webp"]="2025/02/11/serenatahweb1-2.webp"
  ["margarita-h.webp"]="2025/02/11/margaritahweb1-2.webp"
  ["costanera-h.webp"]="2025/02/11/costanerahweb1-2.webp"
  ["julieta-h.webp"]="2025/02/11/julietahweb1-2.webp"
  ["tercio-h.webp"]="2025/02/11/terciohweb1.webp"
  ["mariachi-h.webp"]="2025/02/11/mariachihweb1-2.webp"
  ["turuleca-h.webp"]="2025/02/11/turulecahweb1.webp"
  ["onda-verde-h.webp"]="2025/02/11/ondaverdehweb1-2.webp"
  ["kids-h.webp"]="2025/02/11/kidshweb1-2.webp"
  ["romeo-l.webp"]="2025/02/11/romeolweb1-2.webp"
  ["suicida-l.webp"]="2025/02/11/suicidalwen1.webp"
  ["serenata-l.webp"]="2025/02/11/serenatalweb1.webp"
  ["margarita-l.webp"]="2025/02/11/margaritalweb-2.webp"
  ["julieta-l.webp"]="2025/02/11/julietalweb1-2.webp"
  ["tercio-l.webp"]="2025/02/11/terciolweb1.webp"
  ["mariachi-l.webp"]="2025/02/11/mariachilweb-2.webp"
  ["papas-fritas.webp"]="2025/02/11/papasfritasweb1-2.webp"
  ["papas-provenzal.webp"]="2025/02/11/papasprovenzalweb1-2.webp"
  ["papas-caballo.webp"]="2025/02/11/papasacaballoweb1-2.webp"
  ["papas-verdeo.webp"]="2025/02/11/papasalverdeo1-2.webp"
  ["papas-cheddar-panceta.webp"]="2025/02/11/papaschedypancetaweb1-2.webp"
  ["salchipapas.webp"]="2025/02/11/salchipapasweb1-2.webp"
  ["chicken-fingers.webp"]="2025/02/11/chickenfingersweb1-2.webp"
  ["cubos-muzzarella.webp"]="2025/02/11/cubosweb1-2.webp"
)

declare -A SITE_IMAGES=(
  ["hero-home.webp"]="2022/01/13/el-balcon-hambugruesa-home.webp"
  ["gallery-1.webp"]="2022/01/13/gallery1.webp"
  ["gallery-2.webp"]="2022/01/13/gallery2.webp"
  ["gallery-3.webp"]="2022/01/13/gallery3.webp"
  ["gallery-4.webp"]="2022/01/13/gallery4.webp"
  ["logo-footer.webp"]="../el-balcon-logo-footer.webp"
)

mkdir -p "$MENU_DIR" "$SITE_DIR"

ok=0
fail=0

for name in "${!MENU_IMAGES[@]}"; do
  url="$BASE/${MENU_IMAGES[$name]}"
  if curl -fsSL "$url" -o "$MENU_DIR/$name" --max-time 20; then
    echo "OK  menu/$name"
    ok=$((ok+1))
  else
    echo "FAIL menu/$name <- $url"
    fail=$((fail+1))
  fi
done

for name in "${!SITE_IMAGES[@]}"; do
  url="$BASE/${SITE_IMAGES[$name]}"
  if curl -fsSL "$url" -o "$SITE_DIR/$name" --max-time 20; then
    echo "OK  site/$name"
    ok=$((ok+1))
  else
    echo "FAIL site/$name <- $url"
    fail=$((fail+1))
  fi
done

# Logo SVG
if curl -fsSL "https://www.hamburgueseriaelbalcon.com/images/logo-el-balcon.svg" -o "$SITE_DIR/logo.svg" --max-time 20; then
  echo "OK  site/logo.svg"
  ok=$((ok+1))
else
  echo "FAIL site/logo.svg"
  fail=$((fail+1))
fi

echo "---"
echo "Downloaded: $ok  Failed: $fail"
