(function() {
    // 1. Create and inject Styles
    const style = document.createElement('style');
    style.innerHTML = `
        #ai-assistant-btn { 
            position: fixed; bottom: 24px; right: 24px; z-index: 999999; 
            padding: 12px 24px; border-radius: 50px; background-color: #000; 
            color: #fff; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.3); 
            font-family: sans-serif; font-weight: 600; display: flex; align-items: center; 
        }
        #ai-assistant-popup { 
            position: fixed; bottom: 85px; right: 24px; width: 340px; height: 450px; 
            background: #fff; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); 
            z-index: 999999; display: flex; flex-direction: column; 
            overflow: hidden; border: 1px solid #ddd; 
        }
        .ai-header { 
            padding: 16px; background: #000; color: #fff; 
            display: flex; justify-content: space-between; align-items: center; 
            font-family: sans-serif; font-weight: bold; 
        }
        .ai-close { background: none; border: none; color: #fff; cursor: pointer; font-size: 18px; }
        .ai-body { flex: 1; padding: 20px; color: #333; overflow-y: auto; }
        .hidden { display: none !important; }
    `;
    document.head.appendChild(style);

    // 2. Inject HTML
    const container = document.createElement('div');
    container.innerHTML = `
        <button id="ai-assistant-btn">💬 Personal Assistant</button>
        <div id="ai-assistant-popup" class="hidden">
            <div class="ai-header">
                <span>Personal Assistant</span>
                <button id="close-ai-btn" class="ai-close">✕</button>
            </div>
            <div class="ai-body">
                <p>Hello! How can I assist you today?</p>
            </div>
        </div>
    `;
    document.body.appendChild(container);

    // 3. EVENT DELEGATION (This is the fix)
    document.addEventListener('click', function(e) {
        const popup = document.getElementById('ai-assistant-popup');
        
        // If the button clicked is the trigger
        if (e.target && e.target.id === 'ai-assistant-btn') {
            popup.classList.remove('hidden');
        }
        
        // If the button clicked is the close 'X'
        if (e.target && e.target.id === 'close-ai-btn') {
            popup.classList.add('hidden');
        }
    });
})();
