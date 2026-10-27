const menu = [
  { category: "Pizzas", name: "Margherita (base)", description: "Tomate, mozzarella, origan", price: "7,50 €" },
  { category: "Pizzas", name: "Reine", description: "Base + jambon, champignons", price: "10 €" },
  { category: "Pizzas", name: "Oranaise", description: "Base + merguez, oignons", price: "11 €" },
  { category: "Pizzas", name: "Sicilienne", description: "Base + chorizo, poivrons", price: "10,50 €" },
  { category: "Pizzas", name: "Paysanne", description: "Base + chorizo, lardons, œuf", price: "10,50 €" },
  { category: "Pizzas", name: "Napolitaine", description: "Base + olives, câpres, anchois", price: "10 €" },
  { category: "Pizzas", name: "Quatre Saisons", description: "Base + jambon, champignons, artichaut", price: "11 €" },
  { category: "Pizzas", name: "Neptune", description: "Base + thon, crème", price: "10 €" },
  { category: "Pizzas", name: "Calabraise", description: "Base + thon, câpres, olives, anchois", price: "11 €" },
  { category: "Pizzas", name: "Saumon fumé", description: "Base + saumon fumé", price: "12 €" },
  { category: "Pizzas", name: "Crustacée", description: "Base + queues de crevettes, beurre d'ail, tomates séchées", price: "12 €" },
  { category: "Pizzas", name: "Gorgonzola", description: "Base + gorgonzola + crème", price: "11 €" },
  { category: "Pizzas", name: "Hollandaise", description: "Base + mimolette", price: "10 €" },
  { category: "Pizzas", name: "Berger", description: "Base + chèvre", price: "10 €" },
  { category: "Pizzas", name: "Cht'i", description: "Base + maroilles", price: "10 €" },
  { category: "Pizzas", name: "Moulin", description: "Base + mimolette, jambon, œuf", price: "11 €" },
  { category: "Pizzas", name: "Cévenole", description: "Base + chèvres, lardons", price: "11 €" },
  { category: "Pizzas", name: "3 fromages", description: "Base + maroilles, chèvre", price: "11 €" },
  { category: "Pizzas", name: "4 fromages", description: "Base + maroilles, chèvre, mimolette", price: "11,50 €" },
  { category: "Pizzas", name: "Terroir", description: "Base + tomme d'Orchies, bacon, œuf", price: "12,50 €" },
  { category: "Pizzas", name: "Chef", description: "Base + thon, artichaut, champignons, poivrons, œuf", price: "11,50 €" },
  { category: "Pizzas", name: "Ananas", description: "Base + jambon, ananas", price: "11 €" },
  { category: "Pizzas", name: "Bolognaise", description: "Viande pur bœuf, sauce maison", price: "11 €" },
  { category: "Pizzas", name: "Chausson", description: "Base + jambon, thon, chorizo, champignons, œuf", price: "11 €" },
  { category: "Pizzas", name: "Flam", description: "Base + lardons, crème fraîche", price: "10,50 €" },
  { category: "Pizzas", name: "Végétarienne", description: "Base + champignons, câpres, olives, artichaut, poivrons, oignons.", price: "11 €" },
  { category: "Pizzas", name: "Alsacienne", description: "Crème fraîche, lardons, oignons, emmental", price: "10,50 €" },
  { category: "Pizzas", name: "Forestière", description: "Alsacienne + champignons", price: "11,50 €" },
  { category: "Pizzas", name: "Savoyarde", description: "Crème fraîche, lardons, oignons, pommes de terre, mozzarella, reblochon", price: "12 €" },
  { category: "Flammekueches", name: "Alsacienne", description: "Crème fraîche, lardons, oignons, emmental · +1 € sur place / en livraison", price: "10 €" },
  { category: "Flammekueches", name: "Forestière", description: "Alsacienne + champignons · +1 € sur place / en livraison", price: "10,50 €" },
  { category: "Flammekueches", name: "Savoyarde", description: "Crème fraîche, lardons, oignons, pomme de terre, mozzarella, reblochon · +1 € sur place / en livraison", price: "11 €" },
  { category: "Pâtes maison", name: "Lasagnes à la crème", description: "", price: "10 €" },
  { category: "Pâtes maison", name: "Tortellonis", description: "Pâte farcie, sauce bolognaise crémée, champignons, jambon, parmesan", price: "11 €" },
  { category: "Pâtes maison", name: "Tagliatelles fraîches maison à la Carbonara", description: "Lardons, crème, parmesan", price: "10 €" },
  { category: "Pâtes maison", name: "Spaghettis Bolognaise", description: "", price: "10 €" },
  { category: "Pâtes maison", name: "Penne Rigate du Chef", description: "Bolognaise, crème, champignons, jambon, chorizo, parmesan", price: "10,50 €" },
  { category: "Pâtes maison", name: "Tagliatelles fraîches maison au saumon", description: "Branches d'épinards frais, sauce riesling maison", price: "10 €" },
  { category: "Menus", name: "Menu Nounours", description: "Pizza ou spaghetti bolognaise enfant, 1 boisson, 1 dessert, friandises et cadeau", price: "9 €" },
  { category: "Menus", name: "Menu Duo", description: "2 pizzas + 1 Pat'à suc = 1 cidre offert (uniquement en vente à emporter). Prix des 2 pizzas + de la Pat'à suc.", price: "Cidre offert" },
  { category: "Menus", name: "Formule du midi", description: "L'entrée du jour + 1 pizza ou pâte à la carte + 1 café + la gourmandise du jour", price: "18 €" },
  { category: "Desserts", name: "Tiramisu", description: "Dessert maison", price: "3,50 €" },
  { category: "Desserts", name: "Panna cotta", description: "Dessert maison", price: "3,50 €" },
  { category: "Desserts", name: "Mousse au chocolat", description: "Dessert maison", price: "3,50 €" },
  { category: "Desserts", name: "Dessert maison", description: "Selon l'inspiration du jour", price: "3,50 €" },
  { category: "Desserts", name: "Pat'à suc Normande", description: "Pomme-cannelle", price: "10 €" },
  { category: "Desserts", name: "Pat'à suc Banana 'choc", description: "Bananes-chocolat", price: "10 €" },
  { category: "Desserts", name: "Pat'à suc Antillaise", description: "Ananas-amandes", price: "10 €" },
  { category: "Boissons", name: "Sodas 33 cl", description: "Ice Tea pêche, Fanta orange et citron, Coca Cola, Cola Cola zéro", price: "1,50 €" },
  { category: "Boissons", name: "Eau plate 50 cl", description: "", price: "1,50 €" },
  { category: "Boissons", name: "Jus de fruit 25 cl", description: "Pomme, orange, ananas", price: "2 €" },
  { category: "Boissons", name: "San Pellegrino", description: "", price: "2 €" },
  { category: "Boissons", name: "Kronenbourg 33 cl", description: "", price: "2 €" },
  { category: "Boissons", name: "Stella Artois 25 cl", description: "", price: "2,20 €" },
  { category: "Boissons", name: "Hoegaarden 25 cl", description: "", price: "2,50 €" },
  { category: "Boissons", name: "Leffe blonde 25 cl", description: "", price: "2,50 €" },
  { category: "Boissons", name: "Moretti 33 cl (italienne)", description: "", price: "3,50 €" },
  { category: "Boissons", name: "La Chouffe blonde 33 cl", description: "", price: "4 €" },
  { category: "Boissons", name: "Bardolino rosé 1/2", description: "", price: "6 €" },
  { category: "Boissons", name: "Bardolino rosé 75 cl", description: "", price: "8 €" },
  { category: "Boissons", name: "Lacryma rosé 75 cl", description: "", price: "10 €" },
  { category: "Boissons", name: "Lambrusco rosé 75 cl", description: "", price: "9 €" },
  { category: "Boissons", name: "Lacryma rouge 1/2", description: "", price: "6 €" },
  { category: "Boissons", name: "Lacryma 75 rouge 75 cl", description: "", price: "13 €" },
  { category: "Boissons", name: "Lambrusco rouge 75 cl", description: "Pétillant, sec ou doux", price: "7 €" },
  { category: "Boissons", name: "Spumante 75 cl", description: "Pétillant blanc", price: "7 €" },
  { category: "Boissons", name: "Riesling 75 cl", description: "", price: "8 €" },
  { category: "Boissons", name: "Cidre doux 75 cl", description: "", price: "5 €" },
  { category: "Boissons", name: "Cidre brut 75 cl", description: "", price: "5 €" },
  { category: "Boissons", name: "Champagne 75 cl", description: "", price: "19 €" }
];

const categories = ["Tout voir", ...new Set(menu.map((item) => item.category))];
const tabs = document.querySelector("#category-tabs");
const grid = document.querySelector("#menu-grid");
const count = document.querySelector("#menu-count");
const search = document.querySelector("#menu-search");
let activeCategory = "Tout voir";

function renderTabs() {
  tabs.innerHTML = categories.map((category) => `<button class="category-tab" role="tab" aria-selected="${category === activeCategory}" type="button">${category}</button>`).join("");
  tabs.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    activeCategory = button.textContent;
    renderTabs();
    renderMenu();
  }));
}

function renderMenu() {
  const query = search.value.trim().toLocaleLowerCase("fr");
  const filtered = menu.filter((item) => (activeCategory === "Tout voir" || item.category === activeCategory) && `${item.name} ${item.description}`.toLocaleLowerCase("fr").includes(query));
  count.textContent = `${filtered.length} ${filtered.length > 1 ? "références" : "référence"}`;
  if (!filtered.length) {
    grid.innerHTML = '<p class="empty-state">Aucun plat ne correspond à cette recherche.<br>Essayez un autre mot ou une autre catégorie.</p>';
    return;
  }
  grid.innerHTML = filtered.map((item, index) => `<article class="menu-card" style="animation-delay:${Math.min(index % 8, 7) * 35}ms"><div class="card-top"><h3>${item.name}</h3><span class="card-dots"></span><span class="card-price">${item.price}</span></div>${item.description ? `<p>${item.description}</p>` : ""}</article>`).join("");
}

renderTabs();
renderMenu();
search.addEventListener("input", renderMenu);

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open", !expanded);
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".intro-grid,.values,.menu-heading,.menu-controls,.feature-photo,.feature-copy,.gallery-grid,.visit-heading,.visit-grid").forEach((node) => node.classList.add("reveal"));
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}
