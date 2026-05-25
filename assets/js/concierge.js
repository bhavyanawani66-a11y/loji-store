/**
 * LoJi Autonomous Personal Stylist AI Module with Auto-Redirection
 */
(function() {
    const style = document.createElement('style');
    style.innerHTML = `
        #loji-ai-widget { position: fixed; bottom: 24px; right: 24px; z-index: 99999; font-family: 'Plus Jakarta Sans', sans-serif; }
        .ai-trigger-btn { background: #0F0F11; color: #B8860B; border: 1px solid #B8860B; padding: 14px 24px; border-radius: 4px; cursor: pointer; font-weight: 700; font-size: 11px; text-transform: uppercase; tracking-wider; box-shadow: 0 10px 30px rgba(0,0,0,0.3); transition: all 0.3s ease; display: flex; align-items: center; gap: 10px; }
        .ai-trigger-btn:hover { background: #B8860B; color: #0F0F11; transform: translateY(-2px); }
        .ai-window { position: fixed; bottom: 90px; right: 24px; width: 360px; height: 500px; background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px; box-shadow: 0 20px 50px rgba(0,0,0,0.15); display: flex; flex-direction: column; overflow: hidden; transition: all 0.4s ease; }
        .ai-window-header { background: #0F0F11; padding: 16px; border-bottom: 1px solid #2A2A2E; display: flex; justify-content: space-between; align-items: center; }
        .ai-chat-history { flex: 1; padding: 16px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px; background: #F8F9FA; }
        .ai-msg { max-width: 85%; padding: 10px 14px; font-size: 13px; border-radius: 6px; line-height: 1.5; }
        .ai-msg-bot { background: #FFFFFF; color: #1F2937; border: 1px solid #E5E7EB; align-self: flex-start; }
        .ai-msg-user { background: #0F0F11; color: #FFFFFF; border: 1px solid #B8860B; align-self: flex-end; }
        .ai-chip-panel { padding: 8px 16px; background: #F8F9FA; display: flex; gap: 8px; flex-wrap: wrap; border-top: 1px solid #E5E7EB; }
        .ai-chip { background: #FFFFFF; border: 1px solid #D1D5DB; padding: 6px 12px; border-radius: 20px; font-size: 11px; cursor: pointer; color: #4B5563; font-weight: 500; transition: all 0.2s; }
        .ai-chip:hover { border-color: #B8860B; color: #B8860B; background: #0F0F11; }
        .ai-input-area { background: #FFFFFF; border-top: 1px solid #E5E7EB; display: flex; padding: 12px; }
        .ai-input { flex: 1; border: 1px solid #E5E7EB; border-radius: 4px; padding: 10px; font-size: 13px; outline: none; }
        .ai-input:focus { border-color: #B8860B; }
        .ai-send-btn { background: #0F0F11; border: 1px solid #B8860B; color: #B8860B; padding: 0 16px; margin-left: 8px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 12px; }
        .hidden { display: none !important; }
    `;
    document.head.appendChild(style);

    const baseWidget = document.createElement('div');
    baseWidget.id = "loji-ai-widget";
    baseWidget.innerHTML = `
        <button class="ai-trigger-btn" id="ai-open-trigger">✨ LOJI PRIVATE CONCIERGE</button>
        <div class="ai-window hidden" id="ai-display-window">
            <div class="ai-window-header">
                <div>
                    <h3 class="text-white text-xs uppercase font-bold tracking-[0.2em]">LoJi AI Stylist</h3>
                    <p class="text-[9px] text-[#B8860B] uppercase tracking-widest mt-0.5">Personal Showroom Assistant</p>
                </div>
                <button id="ai-close-trigger" class="text-zinc-400 hover:text-white text-sm">✕</button>
            </div>
            <div class="ai-chat-history" id="ai-chat-stream"></div>
            <div class="ai-chip-panel" id="ai-chips-container"></div>
            <div class="ai-input-area">
                <input type="text" class="ai-input" id="ai-text-field" placeholder="Ask about sizing, trends, or wedding fits..." />
                <button class="ai-send-btn" id="ai-submit-btn">SEND</button>
            </div>
        </div>
    `;
    document.body.appendChild(baseWidget);

    const openBtn = document.getElementById('ai-open-trigger');
    const closeBtn = document.getElementById('ai-close-trigger');
    const windowFrame = document.getElementById('ai-display-window');
    const chatStream = document.getElementById('ai-chat-stream');
    const chipsContainer = document.getElementById('ai-chips-container');
    const textField = document.getElementById('ai-text-field');
    const submitBtn = document.getElementById('ai-submit-btn');

    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning";
        if (hour < 17) return "Good afternoon";
        return "Good evening";
    };

    const initialPrompts = [
        { text: "👑 Wedding Kurtas", reply: "Connecting you to our custom tailoring studio to evaluate measurements...", queryContext: "Premium Wedding Kurta Collections" },
        { text: "👗 Women's Co-Ords", reply: "Pulling up coordination records and lookbooks for fabric profiles...", queryContext: "Luxury Linen Co-Ord Set" },
        { text: "👟 Shoe Counter Sizes", reply: "Checking current shoe size inventory limits on our stock floor...", queryContext: "Shoe Counter Fit Availability" }
    ];

    // Elegant Direct WhatsApp Routing Matrix
    function executeRedirect(userQuery) {
        const phoneNumber = "919411300440";
        const customMessage = `Hello LoJi Concierge! I am browsing through your online storefront and am very interested in: "${userQuery}". Could you please help me with custom sizing, pricing, and available showroom colors?`;
        
        const encodedText = encodeURIComponent(customMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
        
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
        }, 1200);
    }

    const evaluateAIResponse = (input) => {
        const query = input.toLowerCase();
        if (query.includes('kurta') || query.includes('wedding') || query.includes('ethnic')) {
            return "Beautiful choice. Routing your style portfolio directly to our Master Draper's WhatsApp terminal for immediate custom tailoring alignments...";
        }
        if (query.includes('shoe') || query.includes('footwear') || query.includes('size') || query.includes('fit') || query.includes('crocs')) {
            return "Opening structural connection to our inventory manager to confirm exact fit balances and physical catalog counts instantly...";
        }
        return "Understood perfectly. Passing your exact request options straight to our floor concierge desk to process your personalized recommendations...";
    };

    function postBotMessage(text) {
        const msg = document.createElement('div');
        msg.className = "ai-msg ai-msg-bot";
        msg.innerHTML = text;
        chatStream.appendChild(msg);
        chatStream.scrollTop = chatStream.scrollHeight;
    }

    function postUserMessage(text) {
        const msg = document.createElement('div');
        msg.className = "ai-msg ai-msg-user";
        msg.textContent = text;
        chatStream.appendChild(msg);
        chatStream.scrollTop = chatStream.scrollHeight;
    }

    function renderChips() {
        chipsContainer.innerHTML = '';
        initialPrompts.forEach(p => {
            const chip = document.createElement('button');
            chip.className = "ai-chip";
            chip.textContent = p.text;
            chip.onclick = () => {
                postUserMessage(p.text);
                if (typeof logEvent === 'function') logEvent("AI Prompt Clicked", p.text);
                
                setTimeout(() => {
                    postBotMessage(p.reply);
                    executeRedirect(p.queryContext);
                }, 400);
            };
            chipsContainer.appendChild(chip);
        });
    }

    function handleOutgoingMessage() {
        const text = textField.value.trim();
        if(!text) return;
        postUserMessage(text);
        textField.value = '';
        
        if (typeof logEvent === 'function') logEvent("AI Custom Text Field", text);
        
        setTimeout(() => {
            const aiReply = evaluateAIResponse(text);
            postBotMessage(aiReply);
            executeRedirect(text);
        }, 600);
    }

    openBtn.onclick = () => {
        windowFrame.classList.remove('hidden');
        openBtn.classList.add('hidden');
        if (chatStream.children.length === 0) {
            postBotMessage(`${getGreeting()}! Welcome to LoJi Footwear & Apparel. I am your premium AI Concierge. Choose an option or query me below to instantly link up with our live operators via WhatsApp.`);
            renderChips();
        }
        if (typeof logEvent === 'function') logEvent("AI Interface Opened");
    };

    closeBtn.onclick = () => {
        windowFrame.classList.add('hidden');
        openBtn.classList.remove('hidden');
    };

    submitBtn.onclick = handleOutgoingMessage;
    textField.onkeydown = (e) => { if(e.key === 'Enter') handleOutgoingMessage(); };
})();
