// Floating Concierge Button Logic
const conciergeHTML = `
<a href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi! I need some assistance while browsing LoJi." 
   target="_blank" 
   id="concierge-btn"
   style="position: fixed; bottom: 24px; right: 24px; z-index: 9999; display: flex; align-items: center; background-color: #000; color: #fff; padding: 12px 20px; border-radius: 50px; text-decoration: none; box-shadow: 0 4px 10px rgba(0,0,0,0.3); font-family: sans-serif; font-weight: bold;">
   💬 <span style="margin-left: 8px;">Personal Stylist</span>
</a>
`;

// Inject the button into the page
document.body.insertAdjacentHTML('beforeend', conciergeHTML);

// Optional: Dynamic message based on page title
const pageTitle = document.title;
const conciergeBtn = document.getElementById('concierge-btn');
conciergeBtn.href = `https://wa.me/YOUR_PHONE_NUMBER?text=Hi, I am looking at ${pageTitle} and need some assistance.`;
