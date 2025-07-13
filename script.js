const yourWhatsAppNumber = "27639440527"; // Replace with your real number

const products = [
  {
    name: "Poly Gel Nail Kit",
    price: "R180",
    description: "Includes 3 gel colors — Glass Clear, Milky White & Pink Rose — plus slip solution and sculpting tool for easy, salon-style nails at home.",
    image: "image/poly-gel-kit.jpg"
  },
  {
    name: "poly gel nail forms",
    price: "R45",
    description: "120pc Reusable dual forms in assorted sizes for perfect poly gel nail shaping and building.",
    image: "image/poly-gel-forms.jpg"
  },
  {
    name: "luxury hair care kit",
    price: "R400",
    description: "Complete styling set including hair mousse, heat protection spray, lace tint, lace glue pen, wax stick, lace glue & remover, edge control, and edge brush/comb — everything you need for flawless installs and sleek edges.",
    image: "image/hair-kit-2.jpg"
  },
  {
    name: "Ajwad Eau de Parfum – 50ml",
    price: "R75",
    description: "A rich, long-lasting fragrance with warm woody and floral notes, perfect for everyday luxury.",
    image: "image/ajwad-50ml.png"
  },
  {
    name: "Khamrah Eau de Parfum – 50ml",
    price: "R75",
    description: "A bold and captivating scent with warm spicy, sweet, and woody notes — inspired by luxury and tradition.",
    image: "image/khamrah-50ml.png"
  },
  {
    name: "Ramz Eau de Parfum – 50ml",
    price: "R75",
    description: "A sophisticated blend of oriental woods and musk with hints of spice — elegant, bold, and long-lasting.",
  image: "image/ramz-gold-50ml.png"
},
{
  name: "Now Eau de Parfum – 50ml",
  price: "R75",
  description: "A fresh and modern scent with soft floral and fruity notes — perfect for everyday elegance.",
  image: "image/rave-now.png"
}
,
{
  name: "Haya Eau de Parfum – 50ml",
  price: "R75",
  description: "A fresh and elegant scent featuring delicate floral and citrus notes, ideal for a graceful, everyday fragrance",
  image: "image/haya-50ml.jpg"
}
,
{
  name: "La Vida Es Bella Eau de Parfum - 50ml",
  price: "R75",
  description: "Celebrate life with this joyful fragrance, blending sweet florals and soft vanilla for a beautifully uplifting scent.",
  image: "image/la-vida-es-bella-50ml.jpg"
}

,
{
  name: "Ajwad ",
  price: "R250",
  description: "A warm and inviting fragrance with sweet florals, soft musk, and woody undertones — elegant, long-lasting, and beautifully balanced.",
  image: "image/ajwad-60ml.png"
}
,
{
  name: "Ameerat Al Arab",
  price: "R200",
  description: "A bold twist on the classic — rich floral and fruity notes with warm musk and amber for a passionate, long-lasting scent.",
  image: "image/Ameerat-red.webp"
}
,
{
  name: "Asad",
  price: "R220",
  description: "A powerful, masculine fragrance with spicy notes, rich woods, and deep musk — confident, intense, and unforgettable.",
  image: "image/ASAD.jpg"
}
,
{
  name: "Barez Eau de Parfum",
  price: "R180",
  description: "A fresh and invigorating fragrance blending citrus, aromatic herbs, and subtle woody notes — perfect for everyday confidence.",
  image: "image/barez.png"
}
,
{
  name: "Hayati Eau de Parfum",
  price: "R280",
  description: "A vibrant and enchanting fragrance with floral and fruity notes, perfect for everyday elegance and special moments.",
  image: "image/haayati-100ml.png"
}
,
{
  name: "Khamrah Qahwa lataffa",
  price: "R280",
  description: "A rich and warm fragrance blending aromatic coffee notes with spicy and woody undertones — perfect for cozy, elegant moments.",
  image: "image/khamrah-Qahwa.png"
}
,
{
  name: "khamrah lataffa",
  price: "R280",
  description: "A bold and captivating scent with warm spicy, sweet, and woody notes — inspired by luxury and tradition",
  image: "image/khamrah.png"
}
,
{
  name: "Mayar Natural Intense Eau de Parfum",
  price: "R200",
  description: "A vibrant and long-lasting fragrance with fruity, floral, and musky notes — bold yet beautifully feminine",
  image: "image/mayar-natural-intense.jpg"
}
,
{
  name: "Mayar Eau de Parfum",
  price: "R180",
  description: "A soft, romantic blend of fresh florals and sweet fruit notes — feminine, youthful, and perfect for everyday wear.",
  image: "image/mayar-pink.png"
}


,
{
  name: "Rave Now",
  price: "R200",
  description: "Fresh, flirty, and bold — a fruity floral vibe with a seductive twist. Perfect for making your mark.",
  image: "image/now-rave.png"
}
,
{
  name: "Ramz",
  price: "R180",
  description: "A sophisticated fusion of oriental woods, amber, and musk — bold, warm, and made to leave a lasting impression.",
  image: "image/ramz-100ml.png"
}
,
{
  name: "Ramz Gold",
  price: "R180",
  description: "A bold and luxurious scent with warm amber, soft musk, and hints of spice — crafted for those who love elegance with a statement.",
  image: "image/ramz-gold-100ml.png"
}
,
{
  name: "Rose Paris Eau de Parfum",
  price: "R180",
  description: "A delicate bouquet of fresh roses blended with soft musk and a hint of citrus — timeless, romantic, and feminine.",
  image: "image/rose-paris.png"
}
,
{
  name: "Velvet Rose Eau de Parfum",
  price: "R200",
  description: "A luxurious blend of rich rose petals and warm musk — soft, sensual, and timelessly feminine.",
  image: "image/velvet-rose.png"
}
,
{
  name: "keratine shampoo & conditioner set",
  price: "R",
  description: "Strengthen and smooth your hair with this nourishing duo infused with keratin — for frizz-free, silky, and healthy-looking hair.",
  image: "#"
},
{
  name: "Yara Candy Eau de Parfum",
  price: "R210",
  description: "A playful and sweet fragrance bursting with fruity, creamy, and sugary notes — perfect for candy lovers and confident queens.",
  image: "image/yara-candy.jpg"
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
