/*
  COMO ADICIONAR OU EDITAR PRODUTOS:
  1. Copie um bloco de produto abaixo.
  2. Troque nome, categoria, imagem e link.
  3. Coloque as fotos dentro da pasta assets.
  4. Use caminhos como "assets/produto-01.jpg".
  DICA: o link deve ser seu link completo de afiliado (começando com https://).
*/

const products = [
  {
    name: "Airpods",
    category: "Eletrônicos",
    image: "assets/airpods.png",
    link: "https://s.shopee.com.br/2gCSzl0qKP"
  },
  {
    name: "Tênis Casual ",
    category: "Tênis",
    image: "assets/samba.png",
    link: "https://s.shopee.com.br/1Lh5PQl1Hb"
  },
  {
    name: "Copo Térmico Garrafa - Stanley",
    category: "Copos",
    image: "assets/stanley.png",
    link: "https://s.shopee.com.br/2LZcbSGMow"
  },
  {
    name: "Mini JBL Original",
    category: "Eletrônicos",
    image: "assets/jbl.png", 
    link: "https://s.shopee.com.br/5LDEBGAsGj"
  },
  {
    name: "Poedagar Digital",
    category: "Acessórios de Grife",
    image: "assets/poedagar.png",
    link: "https://s.shopee.com.br/7puZ9xXms9"
  },
  {
    name: "Tablet Apple iPad",
    category: "Tablets",
    image: "assets/Ipad.png",
    link: "https://s.shopee.com.br/50aNmwvfXA"
  },
  {
    name: "Tênis Vans Knu Skool",
    category: "Tenis",
    image: "assets/vans.png",
    link: "https://s.shopee.com.br/114F6gtNd3I"
  },
  {
    name: "Apple Watch Original",
    category: "Eletrônicos",
    image: "assets/apple.png",
    link: "https://s.shopee.com.br/BV87FGSpC"
  },
  {
    name: "Bolsa Just Do It - NIKE",
    category: "Bolsas",
    image: "assets/bolsa.png",
    link: "https://s.shopee.com.br/2gCT5yyqCO"
  },
  {
    name: "RL bear Bordadas",
    category: "Camisas e moletons",
    image: "assets/bear.png",
    link: "https://s.shopee.com.br/5q9Urx9ges"
  },
  {
    name: "Camisa Polo ",
    category: "Camisa e Moletons",
    image: "assets/camisapolo.png",
    link: "https://s.shopee.com.br/9pfddXF8JP"
  },
  {
    name: "Polo Ralph Lauren",
    category: "Camisas e Moletons",
    image: "assets/polomoletom.png",
    link: "https://s.shopee.com.br/4Ve7Hr1PGW"
  },
  {
    name: "Polo Listrada",
    category: "Camisas e Moletons",
    image: "assets/pololistrada.png",
    link: "https://s.shopee.com.br/20wmIxIbCa"
  },
  {
    name: "Boné Polo Original",
    category: "bonés",
    image: "assets/polobone.png",
    link: "https://s.shopee.com.br/4Ve7HcBwAA"
  },
  {
    name: "Console Portatil 6,3 POLEG ",
    category: "Eletrônicos",
    image: "assets/console.png",
    link: "https://s.shopee.com.br/9APwqFWPxy"
  },
  {
    name: "SmartWatch",
    category: "Eletrônicos",
    image: "assets/smartwatch.png",
    link: "https://s.shopee.com.br/70LS9cDZZU"
  },
  {
    name: "Calça Jeans Reta",
    category: "Calças",
    image: "assets/calçareta.png",
    link: "https://s.shopee.com.br/8fTgFb56zu"
  },
  {
    name: "Calça Jeans Cargo",
    category: "Calças",
    image: "assets/calçajeans.png",
    link: "https://s.shopee.com.br/5q9UsSegIo"
  },
  {
    name: "Pods Max Fone de Ouvido",
    category: "Eletrônicos",
    image: "assets/pods.png",
    link: "https://s.shopee.com.br/1W0ViXci7C"
  },
  {
    name: "Birken Couro Ecológico",
    category: "Sandálias",
    image: "assets/Birken.png",
    link: "https://s.shopee.com.br/2qVtJ1asih"
  },
  {
    name: "Chinelo As 2.0",
    category: "Chinelos ",
    image: "assets/chineloas.png",
    link: "https://s.shopee.com.br/9zz3qE0TMk"
  },
  {
    name: "Suéter Ralph Lauren",
    category: "Suéters",
    image: "assets/sueter.png",
    link: "https://s.shopee.com.br/6AmLHJcESi"
  },
  {
    name: "Blusão Polo Linho",
    category: "Blusas",
    image: "assets/linho.png",
    link: "https://s.shopee.com.br/7puZGXnmKg"
  },
  {
    name: "Polo Angels",
    category: "Camisas ",
    image: "assets/poloangels.png",
    link: "https://s.shopee.com.br/7puZGZIAjr"
  },
  {
    name: "Moleton cdg",
    category: "Moletons ",
    image: "assets/moletoncdg.png",
    link: "https://s.shopee.com.br/30pJVhIV8E"
  },
  {
    name: "Tenis Unisex Clean White",
    category: "Tênis",
    image: "assets/nikeair.png",
    link: "https://s.shopee.com.br/5Ato5iMdwE"
  },
  {
    name: "Calça Balão Jeans",
    category: "Calças",
    image: "assets/calçabalao.png",
    link: "https://s.shopee.com.br/4fxXUoSXgo"
  },
  {
    name: "Camisa Barcelona 2023/24",
    category: "CAMISAS E MOLETONS",
    image: "assets/barcelona.png",
    link: "https://s.shopee.com.br/50aPMFrhIs"
  },
  {
    name: "Barcelona Camisa Branca",
    category: "CAMISAS E MOLETONS",
    image: "assets/barcelonabranca.png",
    link: "https://s.shopee.com.br/6fidLGD1U3"
  },
  {
    name: "Moletom City",
    category: "CAMISAS E MOLETONS",
    image: "assets/city.png",
    link: "https://s.shopee.com.br/1BNgn5ZZsI"
  },
  {
    name: "Moletom Real Madrid",
    category: "CAMISAS E MOLETONS",
    image: "assets/realmadrid.png",
    link: "https://s.shopee.com.br/4fxYxVDrFo"
  },
  {
    name: "Santos Retro Neymar",
    category: "CAMISAS E MOLETONS",
    image: "assets/santos.png",
    link: "https://s.shopee.com.br/9V2oiFUN7m"
  },
  {
    name: "Bayer de Munique Oficial",
    category: "CAMISAS E MOLETONS",
    image: "assets/bayer.png",
    link: "https://s.shopee.com.br/BV9b2iykK"
  },
  {
    name: "Relógio Casio Vintage",
    category: "Relógios",
    image: "assets/casio.png",
    link: "https://s.shopee.com.br/6VPDBcQCXZ"
  },
  {
    name: "Sapato Social Mocassim",
    category: "Sapatos Sociais",
    image: "assets/mocassim.png",
    link: "https://s.shopee.com.br/2gCUcm0gls"
  }
];

const grid = document.getElementById("product-grid");
const count = document.getElementById("item-count");

function renderProducts() {
  grid.innerHTML = "";
  count.textContent = `${products.length} ${products.length === 1 ? "item" : "itens"}`;

  products.forEach((product) => {
    const card = document.createElement("a");
    card.className = "product-card";
    card.href = product.link;
    card.target = "_blank";
    card.rel = "noopener noreferrer sponsored";
    card.setAttribute("aria-label", `Ver ${product.name}`);

    const imageWrap = document.createElement("div");
    imageWrap.className = "product-image-wrap";

    const img = document.createElement("img");
    img.className = "product-image";
    img.src = product.image;
    img.alt = product.name;
    img.loading = "lazy";
    img.onerror = () => {
      img.src = "assets/placeholder.svg";
    };

    const info = document.createElement("div");
    info.className = "product-info";

    const category = document.createElement("span");
    category.className = "product-category";
    category.textContent = product.category;

    const name = document.createElement("span");
    name.className = "product-name";
    name.textContent = product.name;

    const cta = document.createElement("span");
    cta.className = "product-cta";
    cta.innerHTML = 'Ver produto <span aria-hidden="true">↗</span>';

    imageWrap.appendChild(img);
    info.append(category, name, cta);
    card.append(imageWrap, info);
    grid.appendChild(card);
  });
}

renderProducts();
