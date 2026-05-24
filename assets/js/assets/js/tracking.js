/**
 * LoJi Web Tracking System - Control Tower Link
 */
function logEvent(eventName, eventDetails = "") {
    const webAppUrl = "https://script.google.com/macros/s/AKfycbyOWHE2g_D3XwdJMLmBhIZesuHadhW1UARiSGXFrcdD_elIMdtNFgZPPnLL5-5Bgtlp/exec"; 
    
    const payload = { 
        event: eventDetails ? `${eventName} (${eventDetails})` : eventName, 
        page: document.title || "LoJi Storefront"
    };

    if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(webAppUrl, blob);
    } else {
        fetch(webAppUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        }).catch(err => console.debug("Sync delayed:", err));
    }
}

// Automatically log initial floor entry
window.addEventListener('DOMContentLoaded', () => {
    logEvent("Page Visit");
});
