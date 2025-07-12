const yourWhatsAppNumber = "27639440527"; // Replace with your real number

const products = [
  {
    name: "Rose Glow Serum",
    price: "R249",
    description: "Hydrates and brightens your skin naturally.",
    image: "https://via.placeholder.com/200x200.png?text=Rose+Glow+Serum"
  },
  {
    name: "Hair Growth Oil",
    price: "R199",
    description: "Boosts hair strength and scalp health.",
    image: "https://via.placeholder.com/200x200.png?text=Hair+Growth+Oil"
  },
  {
    name: "Slim Plus Fat Burner",
    price: "R299",
    description: "Supports metabolism and fat loss.",
    image: "https://via.placeholder.com/200x200.png?text=Slim+Fat+Burner"
  },
  {
    name: "Keto Collagen Coffee",
    price: "R189",
    description: "Boost energy with collagen and MCT oil.",
    image: "https://via.placeholder.com/200x200.png?text=Keto+Coffee"
  }
];

const catalog = document.getElementById("productCatalog");

function renderProducts(productsToShow) {
  catalog.innerHTML = "";
  productsToShow.forEach(product => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${product.name}. Is it available?`);
    const whatsappLink = `https://wa.me/${yourWhatsAppNumber}?text=${message}`;

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p class="price">${product.price}</p>
      <p>${product.description}</p>
      <a href="${whatsappLink}" target="_blank" class="whatsapp-btn">Order on WhatsApp</a>
    `;
    catalog.appendChild(card);
  });
}

document.getElementById("searchInput").addEventListener("input", e => {
  const search = e.target.value.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(search) ||
    product.description.toLowerCase().includes(search)
  );
  renderProducts(filtered);
});

renderProducts(products);
document.getElementById("searchBtn").addEventListener("click", () => {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(search) ||
    product.description.toLowerCase().includes(search)
  );
  renderProducts(filtered);
});
