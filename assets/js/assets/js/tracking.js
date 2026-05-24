function logEvent(eventName) {
    const webAppUrl = "https://script.google.com/macros/s/AKfycbyOWHE2g_D3XwdJMLmBhIZesuHadhW1UARiSGXFrcdD_elIMdtNFgZPPnLL5-5Bgtlp/exec"; 
    
    fetch(webAppUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            event: eventName, 
            page: document.title 
        })
    });
}

// Automatically log the visit
logEvent("Page Visit");
