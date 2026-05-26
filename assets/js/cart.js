// Global Cart Badge Syncer
function syncCartBadgeGlobal() {
    const lojiCart = JSON.parse(localStorage.getItem('loji_cart') || '[]');
    const badge = document.getElementById('global-nav-badge');
    if (badge) {
        badge.textContent = lojiCart.length;
    }
}

// Background Automation Engine: WhatsApp + Email Tracking
function dispatchOrderAutomatedNotifications(customerName, customerPhone, customerEmail, grandTotal, currentBag) {
    
    // --- FEATURE A: WhatsApp Status Update Integration ---
    const whatsappApiUrl = "https://graph.facebook.com/v17.0/YOUR_META_PHONE_NUMBER_ID/messages";
    const metaAccessToken = "YOUR_META_PERMANENT_ACCESS_TOKEN"; 

    const whatsappPayload = {
        messaging_product: "whatsapp",
        to: customerPhone.startsWith('91') ? customerPhone : '91' + customerPhone,
        type: "template",
        template: {
            name: "loji_order_success_tracking", 
            language: { code: "en" },
            components: [
                {
                    type: "body",
                    parameters: [
                        { type: "text", text: customerName },
                        { type: "text", text: "₹" + grandTotal },
                        { type: "text", text: "Dispatched via LoJi Express" }
                    ]
                }
            ]
        }
    };

    fetch(whatsappApiUrl, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${metaAccessToken}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(whatsappPayload)
    }).catch(err => console.error("WhatsApp Link Offline:", err));


    // --- FEATURE B: Automated Email Receipt Dispatch ---
    let itemsListText = currentBag.map(item => `${item.productName} (${item.size || 'Standard Fit'})`).join(', ');

    const emailPayload = {
        service_id: "YOUR_EMAILJS_SERVICE_ID",
        template_id: "YOUR_EMAILJS_TEMPLATE_ID",
        user_id: "YOUR_EMAILJS_PUBLIC_KEY",
        template_params: {
            to_name: customerName,
            to_email: customerEmail,
            order_summary: itemsListText,
            amount_paid: "₹" + grandTotal,
            tracking_id: "LOJI-" + Math.floor(100000 + Math.random() * 900000)
        }
    };

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailPayload)
    }).catch(err => console.error("Email Link Offline:", err));
}
