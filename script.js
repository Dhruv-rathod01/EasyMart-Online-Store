/* =====================================================
   EASYMART PRODUCT DATA
===================================================== */

const products = [

    {
        id: 1,
        name: "Premium Smartphone",
        price: 19999,
        oldPrice: 24999,
        category: "Electronics",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        description: "A powerful smartphone with a premium design and modern features."
    },

    {
        id: 2,
        name: "Smart Watch",
        price: 2999,
        oldPrice: 4999,
        category: "Electronics",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        description: "Track your fitness, notifications and daily activities."
    },

    {
        id: 3,
        name: "Running Shoes",
        price: 1499,
        oldPrice: 2499,
        category: "Fashion",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        description: "Comfortable and stylish running shoes for everyday use."
    },

    {
        id: 4,
        name: "MacBook Pro",
        price: 79999,
        oldPrice: 99999,
        category: "Electronics",
        rating: 4.9,
        image: "https://macfinder.co.uk/wp-content/uploads/2022/12/img-MacBook-Pro-Retina-14-Inch-72383-scaled-1250x1250.jpg",
        description: "Powerful laptop designed for work, development and creativity."
    },

    {
        id: 5,
        name: "Wireless Headphones",
        price: 9999,
        oldPrice: 12999,
        category: "Electronics",
        rating: 4.8,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-blue_FV1?wid=976&hei=916&fmt=jpeg&qlt=90",
        description: "Premium wireless headphones with immersive sound."
    },

    {
        id: 6,
        name: "Travel Backpack",
        price: 1699,
        oldPrice: 2499,
        category: "Accessories",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
        description: "Stylish and spacious backpack for travel and daily use."
    },

    {
        id: 7,
        name: "Android Tablet",
        price: 17999,
        oldPrice: 21999,
        category: "Electronics",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1542751110-97427bbecf20",
        description: "Large display tablet perfect for entertainment and work."
    },

    {
        id: 8,
        name: "Mechanical Keyboard",
        price: 899,
        oldPrice: 1499,
        category: "Accessories",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        description: "Responsive mechanical keyboard for gaming and productivity."
    },

    {
        id: 9,
        name: "Wireless Mouse",
        price: 499,
        oldPrice: 899,
        category: "Accessories",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7",
        description: "Smooth and reliable wireless mouse for everyday work."
    },

    {
        id: 10,
        name: "Full HD Monitor",
        price: 12999,
        oldPrice: 16999,
        category: "Electronics",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
        description: "Crystal clear Full HD display for work and entertainment."
    },

    {
        id: 11,
        name: "Bluetooth Speaker",
        price: 1999,
        oldPrice: 2999,
        category: "Electronics",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
        description: "Portable speaker with powerful sound and modern design."
    },

    {
        id: 12,
        name: "Power Bank",
        price: 1299,
        oldPrice: 1999,
        category: "Accessories",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1609592424840-3e4e9a5c5f5e",
        description: "Fast charging power bank for your everyday devices."
    },

    {
        id: 13,
        name: "Digital Camera",
        price: 25999,
        oldPrice: 32999,
        category: "Electronics",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        description: "Capture high quality photos and videos."
    },

    {
        id: 14,
        name: "Camera Tripod",
        price: 699,
        oldPrice: 1199,
        category: "Accessories",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1606986628253-7c1e3a7b4c8a",
        description: "Stable and lightweight tripod for cameras and phones."
    },

    {
        id: 15,
        name: "Smart TV",
        price: 32999,
        oldPrice: 42999,
        category: "Home",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
        description: "Enjoy movies, shows and entertainment on a large smart display."
    }

];


/* =====================================================
   GLOBAL VARIABLES
===================================================== */

let selectedCategory = "All";


/* =====================================================
   LOCAL STORAGE
===================================================== */

function getOrders() {

    return JSON.parse(
        localStorage.getItem("orders")
    ) || [];

}


function saveOrders(orders) {

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

}


/* =====================================================
   CART
===================================================== */

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


function saveCart(cart) {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (!cartCount) return;

    const cart = getCart();

    const count = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = count;

}


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts() {

    const productList =
        document.getElementById("productList");

    if (!productList) return;


    let filteredProducts = [...products];


    /* CATEGORY */

    if (selectedCategory !== "All") {

        filteredProducts =
            filteredProducts.filter(
                product =>
                    product.category === selectedCategory
            );

    }


    /* SEARCH */

    const searchInput =
        document.getElementById("searchInput");

    const searchValue =
        searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";


    if (searchValue) {

        filteredProducts =
            filteredProducts.filter(product =>

                product.name
                    .toLowerCase()
                    .includes(searchValue)

                ||

                product.category
                    .toLowerCase()
                    .includes(searchValue)

            );

    }


    /* HOME PAGE SHOW ONLY 8 */

    if (
        window.location.pathname.endsWith("index.html")
        ||
        window.location.pathname === "/"
    ) {

        filteredProducts =
            filteredProducts.slice(0, 8);

    }


    productList.innerHTML = "";


    if (filteredProducts.length === 0) {

        productList.innerHTML = `

            <div class="empty-products">

                <div>🔍</div>

                <h3>
                    No products found
                </h3>

                <p>
                    Try searching for something else.
                </p>

            </div>

        `;

        return;

    }


    filteredProducts.forEach(product => {

        const discount =
            Math.round(
                ((product.oldPrice - product.price)
                / product.oldPrice) * 100
            );


        const card =
            document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.src='https://via.placeholder.com/400x300?text=Easymart'"
                >

                <span class="discount">
                    ${discount}% OFF
                </span>

                <button
                    class="quick-view"
                    onclick="showDetails(${product.id})"
                >
                    👁
                </button>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <div class="rating">

                    ⭐ ${product.rating}

                </div>


                <div class="price-row">

                    <div>

                        <span class="price">
                            ₹${product.price.toLocaleString("en-IN")}
                        </span>

                        <span class="old-price">
                            ₹${product.oldPrice.toLocaleString("en-IN")}
                        </span>

                    </div>

                </div>


                <div class="product-buttons">

                    <button
                        class="cart-button"
                        onclick="addToCart(${product.id})"
                    >
                        🛒 Add to Cart
                    </button>

                    <button
                        class="order-button"
                        onclick="showDetails(${product.id})"
                    >
                        Buy Now
                    </button>

                </div>

            </div>

        `;


        productList.appendChild(card);

    });

}


/* =====================================================
   PRODUCT DETAILS
===================================================== */

function showDetails(id) {

    const product =
        products.find(
            product => product.id === id
        );

    if (!product) return;


    const modal =
        document.getElementById("modal");

    const modalContent =
        document.getElementById("modalContent");


    if (!modal || !modalContent) return;


    modalContent.innerHTML = `

        <button
            class="modal-close"
            onclick="closeModal()"
        >
            ×
        </button>


        <img
            src="${product.image}"
            alt="${product.name}"
            class="modal-image"
        >


        <span class="product-category">
            ${product.category}
        </span>


        <h2>
            ${product.name}
        </h2>


        <div class="rating">
            ⭐ ${product.rating} / 5
        </div>


        <p class="modal-description">
            ${product.description}
        </p>


        <div class="modal-price">

            ₹${product.price.toLocaleString("en-IN")}

            <span>
                ₹${product.oldPrice.toLocaleString("en-IN")}
            </span>

        </div>


        <div class="modal-actions">

            <button
                class="cart-button"
                onclick="addToCart(${product.id}); closeModal();"
            >
                🛒 Add to Cart
            </button>

            <button
                class="order-button"
                onclick="orderNow(${product.id})"
            >
                Buy Now
            </button>

        </div>

    `;


    modal.style.display = "flex";

}


function closeModal() {

    const modal =
        document.getElementById("modal");

    if (modal) {

        modal.style.display = "none";

    }

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(id) {

    const product =
        products.find(
            product => product.id === id
        );

    if (!product) return;


    const cart = getCart();


    const existing =
        cart.find(
            item => item.id === id
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            price: product.price,

            image: product.image,

            quantity: 1

        });

    }


    saveCart(cart);

    updateCartCount();

    alert(
        `${product.name} added to cart!`
    );

}


/* =====================================================
   ORDER NOW
===================================================== */

function orderNow(id) {

    const product =
        products.find(
            product => product.id === id
        );

    if (!product) return;


    const orders = getOrders();


    orders.push({

        orderId:
            "EM" +
            Date.now(),

        name:
            product.name,

        price:
            product.price,

        image:
            product.image,

        quantity:
            1,

        date:
            new Date().toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            ),

        status:
            "Placed"

    });


    saveOrders(orders);

    closeModal();

    alert(
        "✅ Your order has been placed successfully!"
    );

}


/* =====================================================
   SEARCH
===================================================== */

function searchProducts() {

    displayProducts();

}


/* =====================================================
   CATEGORY
===================================================== */

function filterCategory(category) {

    selectedCategory = category;

    const productsSection =
        document.getElementById("products");

    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

    displayProducts();

}


function setCategory(category) {

    selectedCategory = category;

    displayProducts();

}


/* =====================================================
   ORDERS PAGE
===================================================== */

function displayOrders() {

    const orderList =
        document.getElementById("orderList");

    if (!orderList) return;


    const orders = getOrders();


    if (orders.length === 0) {

        orderList.innerHTML = `

            <div class="empty-orders">

                <div class="empty-icon">
                    📦
                </div>

                <h2>
                    No Orders Yet
                </h2>

                <p>
                    You haven't placed any orders yet.
                </p>

                <a
                    href="index.html"
                    class="btn btn-primary"
                >
                    Start Shopping →
                </a>

            </div>

        `;

        return;

    }


    orderList.innerHTML = `

        <div class="orders-title">

            <h2>
                Recent Orders
            </h2>

            <span>
                ${orders.length} order(s)
            </span>

        </div>

    `;


    [...orders].reverse().forEach(order => {

        const card =
            document.createElement("div");

        card.className = "order-card";


        card.innerHTML = `

            <div class="order-header">

                <div>

                    <strong>
                        Order #${order.orderId}
                    </strong>

                    <span>
                        ${order.date}
                    </span>

                </div>

                <span class="order-status">
                    ✓ ${order.status}
                </span>

            </div>


            <div class="order-body">

                <img
                    src="${order.image}"
                    alt="${order.name}"
                >


                <div class="order-details">

                    <h3>
                        ${order.name}
                    </h3>

                    <p>
                        Quantity: ${order.quantity || 1}
                    </p>

                    <strong>
                        ₹${order.price.toLocaleString("en-IN")}
                    </strong>

                </div>


                <div class="order-delivery">

                    <span>
                        🚚
                    </span>

                    <p>
                        Order placed
                    </p>

                </div>

            </div>

        `;


        orderList.appendChild(card);

    });

}


/* =====================================================
   LOGIN
===================================================== */

function togglePassword(id, button) {

    const input =
        document.getElementById(id);

    if (!input) return;


    if (input.type === "password") {

        input.type = "text";

        button.textContent = "🙈";

    } else {

        input.type = "password";

        button.textContent = "👁";

    }

}


/* =====================================================
   LOGIN FORM
===================================================== */

function setupLogin() {

    const form =
        document.getElementById("loginForm");

    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const email =
                document.getElementById(
                    "loginEmail"
                ).value.trim();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            if (!email || !password) {

                alert(
                    "Please fill all fields."
                );

                return;

            }


            const users =
                JSON.parse(
                    localStorage.getItem("users")
                ) || [];


            const user =
                users.find(
                    item =>
                        item.email === email
                        &&
                        item.password === password
                );


            if (user) {

                localStorage.setItem(
                    "loggedInUser",
                    JSON.stringify(user)
                );

                alert(
                    "✅ Login successful!"
                );

                window.location.href =
                    "index.html";

            } else {

                alert(
                    "❌ Invalid email or password."
                );

            }

        }
    );

}


/* =====================================================
   CONTACT FORM
===================================================== */

function setupContactForm() {

    const form =
        document.getElementById("contactForm");

    if (!form) return;


    form.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "contactName"
                ).value.trim();


            const email =
                document.getElementById(
                    "contactEmail"
                ).value.trim();


            const message =
                document.getElementById(
                    "contactMessage"
                ).value.trim();


            if (!name || !email || !message) {

                alert(
                    "Please complete all required fields."
                );

                return;

            }


            /*
                Currently this is frontend-only.

                Later we can connect this form
                to EmailJS / Formspree / backend API
                so messages arrive in your email.
            */


            alert(
                "✅ Thank you! Your message has been submitted."
            );


            form.reset();

        }
    );

}


/* =====================================================
   FAQ
===================================================== */

function setupFAQ() {

    const questions =
        document.querySelectorAll(
            ".faq-question"
        );


    questions.forEach(question => {

        question.addEventListener(
            "click",
            function() {

                const item =
                    this.parentElement;


                const answer =
                    item.querySelector(
                        ".faq-answer"
                    );


                const icon =
                    this.querySelector(
                        "strong"
                    );


                document
                    .querySelectorAll(".faq-item")
                    .forEach(other => {

                        if (
                            other !== item
                        ) {

                            other
                                .classList
                                .remove("open");

                            const otherIcon =
                                other.querySelector(
                                    ".faq-question strong"
                                );

                            if (otherIcon) {
                                otherIcon.textContent = "+";
                            }

                        }

                    });


                item.classList.toggle("open");


                if (
                    item.classList.contains("open")
                ) {

                    icon.textContent = "−";

                } else {

                    icon.textContent = "+";

                }

            }
        );

    });

}


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayProducts();

        displayOrders();

        updateCartCount();

        setupLogin();

        setupContactForm();

        setupFAQ();

    }
);


/* =====================================================
   MODAL OUTSIDE CLICK
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("modal");


        if (
            modal
            &&
            event.target === modal
        ) {

            closeModal();

        }

    }
);