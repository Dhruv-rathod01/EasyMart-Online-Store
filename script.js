/* =========================
   PRODUCT DATA
========================= */
const products = [
  { id: 1, name: "Phone", price: 19999, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9", description: "High quality smartphone" },
  { id: 2, name: "Smart Watch", price: 2999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30", description: "Fitness smart watch" },
  { id: 3, name: "Shoes", price: 1499, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff", description: "Comfortable running shoes" },
  { id: 4, name: "Laptop", price: 79999, image: "https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-72383-scaled-1250x1250.jpg", description: "Powerful laptop for work" },
  { id: 5, name: "Headphones", price: 9999, image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-blue_FV1?wid=976&hei=916&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmaVZsckZUTTZZd1pFb3lRTGNlYkF0Yy9BSXRGSWdwVEs0NXdLd3JPRVQ3TGROL2hTdHRlcnVBMFhCNlFSVHgrS01jL2RQeWJYZ1FmWXUzRFBMSzJrTlJTZy9JeUNjV2pzbzd6anYzTldHVWw", description: "Noise cancelling headphones" },
   { id: 6, name: "Backpack", price: 16999, image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-montsouris-backpack--M46683_PM2_Front%20view.png?wid=1090&hei=1090", description: "Stylish travel backpack" },
  { id: 7, name: "Tablet", price: 17999, image: "https://images.unsplash.com/photo-1542751110-97427bbecf20", description: "Android tablet" },
  { id: 8, name: "Keyboard", price: 899, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3", description: "Mechanical keyboard" },
  { id: 9, name: "Mouse", price: 499, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7", description: "Wireless mouse" },
  { id: 10, name: "Monitor", price: 12999, image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04", description: "Full HD monitor" },
  { id: 11, name: "Bluetooth Speaker", price: 1999, image: "https://www.harmanaudio.in/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd19b466e/JBL_GO_4_3_4_LEFT_BLUE_48173_x1.png?sw=535&sh=535", description: "Portable Bluetooth speaker" },
  { id: 12, name: "Power Bank", price: 1299, image: "https://m.media-amazon.com/images/I/41BQL6N1wKL._AC_.jpg", description: "Fast charging power bank" },
  { id: 13, name: "Camera", price: 25999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiTpWbSNwU8tINxdVB308V2kKs57_eI6tpWg&s", description: "DSLR camera" },
  { id: 14, name: "Tripod", price: 699, image: "https://studiobackdrops.com/wp-content/uploads/2024/10/AriesX-Ace-Professional-Camera-Tripod-Stand-D-777K-8.jpg", description: "Camera tripod" },
  { id: 15, name: "Smart TV", price: 32999, image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1", description: "43 inch Smart TV" }
];

/* =========================
   LOCAL STORAGE HELPERS
========================= */
function getOrders() {
  return JSON.parse(localStorage.getItem("orders")) || [];
}

function saveOrders(orders) {
  localStorage.setItem("orders", JSON.stringify(orders));
}

/* =========================
   DOM ELEMENTS
========================= */
const productList = document.getElementById("productList");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");

/* =========================
   DISPLAY PRODUCTS
========================= */
function displayProducts() {
  productList.innerHTML = "";

  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${p.image}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="showDetails(${p.id})">Order</button>
    `;

    productList.appendChild(div);
  });
}

/* =========================
   SHOW DETAILS
========================= */
function showDetails(id) {
  const product = products.find(p => p.id === id);

  modalContent.innerHTML = `
    <img src="${product.image}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p><b>₹${product.price}</b></p>
    <button onclick="orderNow(${product.id})">Order Now</button>
    <button onclick="closeModal()">Cancel</button>
  `;

  modal.style.display = "flex";
}

/* =========================
   ORDER NOW (FIXED)
========================= */
function orderNow(id) {
  const orders = getOrders();
  const product = products.find(p => p.id === id);

  orders.push({
    orderId: "OD" + Date.now(),
    name: product.name,
    price: product.price,
    image: product.image,
    date: new Date().toDateString(),
    status: "Placed"
  });

  saveOrders(orders);

  alert("✅ Order placed successfully!");
  closeModal();
}

/* =========================
   CLOSE MODAL
========================= */
function closeModal() {
  modal.style.display = "none";
}

modal.addEventListener("click", closeModal);

/* =========================
   INIT
========================= */
displayProducts();
