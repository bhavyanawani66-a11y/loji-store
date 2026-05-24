(function() {
    // 1. Create and Inject Styles
    const style = document.createElement('style');
    style.innerHTML = `
        #ai-assistant-btn { position: fixed; bottom: 24px; right: 24px; z-index: 2147483647; padding: 12px 24px; border-radius: 50px; background-color: #000; color: #fff; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.3); font-family: sans-serif; font-weight: 600; display: flex; align-items: center; }
        #ai-assistant-popup { position: fixed; bottom: 85px; right: 24px; width: 340px; height: 450px; background: #fff; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); z-index: 2147483647; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #ddd; }
        .ai-header { padding: 16px; background: #000; color: #fff; display: flex; justify-content: space-between; align-items: center; font-weight: bold; }
        .ai-close { background: none; border: none; color: #fff; cursor: pointer; font-size: 18px; }
        .ai-body { flex: 1; padding: 20px; font-family: sans-serif; color: #333; }
        .hidden { display: none !important; }
    `;
    document.head.appendChild(style);

    // 2. Create the HTML Structure
    const container = document.createElement('div');
    container.innerHTML = `
        <button id="ai-assistant-btn">💬 Personal Assistant</button>
        <div id="ai-assistant-popup" class="hidden">
            <div class="ai-header">
                <span>Personal Assistant</span>
                <button class="ai-close">✕</button>
            </div>
            <div class="ai-body">How can I help you with your shopping today?</div>
        </div>
    `;
    document.body.appendChild(container);

    // 3. Add Logic
    const btn = document.getElementById('ai-assistant-btn');
    const popup = document.getElementById('ai-assistant-popup');
    const close = document.querySelector('.ai-close');

    btn.addEventListener('click', () => popup.classList.toggle('hidden'));
    close.addEventListener('click', () => popup.classList.add('hidden'));
})();
