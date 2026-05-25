/**
 * LoJi Core Commerce Engine Logic
 */
let lojiCart = [];

function initializeCart() {
    const savedCart = localStorage.getItem('loji_cart');
    if (savedCart) {
        lojiCart = JSON.parse(savedCart);
        updateCartIndicators();
    }
    console.log("LoJi Cart Architecture Online.");
}

function addToCart(productName, price, category = "General") {
    const product = { productName, price, category, timestamp: new Date().toISOString() };
    lojiCart.push(product);
    localStorage.setItem('loji_cart', JSON.stringify(lojiCart));
    
    // Sync action matrix back to core dashboard
    if (typeof logEvent === 'function') {
        logEvent("Cart Addition", `${productName} - ₹${price}`);
    }
    
    updateCartIndicators();
    showToastNotification(`${productName} curated to your session bag.`);
}

function updateCartIndicators() {
    const cartCounts = document.querySelectorAll('.cart-count-badge');
    cartCounts.forEach(el => {
        el.textContent = lojiCart.length;
        el.classList.remove('hidden');
    });
}

function showToastNotification(message) {
    const toast = document.createElement('div');
    toast.className = "fixed bottom-8 left-8 bg-[#0F0F11] border border-[#B8860B] text-white px-6 py-3 rounded text-xs uppercase tracking-widest z-[999999] shadow-2xl transition-all duration-500 opacity-0 transform translate-y-2";
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.remove('opacity-0', 'translate-y-2'), 100);
    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 500);
    }, 3500);
}

window.addEventListener('DOMContentLoaded', initializeCart);
