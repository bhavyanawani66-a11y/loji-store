// 1. Create the Styles
const style = document.createElement('style');
style.innerHTML = `
  #concierge-trigger { position: fixed; bottom: 24px; right: 24px; z-index: 9999; padding: 12px 24px; border-radius: 50px; background-color: #000; color: #fff; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.3); font-family: sans-serif; font-weight: 600; }
  #chat-popup { position: fixed; bottom: 85px; right: 24px; width: 340px; height: 450px; background: #fff; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); z-index: 9999; display: flex; flex-direction: column; overflow: hidden; border: 1px solid #eee; }
  .chat-header { padding: 16px; background: #000; color: #fff; display: flex; justify-content: space-between; align-items: center; }
  .hidden { display: none !important; }
`;
document.head.appendChild(style);

// 2. Create the HTML
const widgetHTML = `
  <button id="concierge-trigger">💬 Personal Assistant</button>
  <div id="chat-popup" class="hidden">
    <div class="chat-header">
      <span>Personal Assistant</span>
      <button id="close-chat">✕</button>
    </div>
    <div class="chat-body" style="padding: 20px;">Hello! How can I assist you?</div>
  </div>
`;
document.body.insertAdjacentHTML('beforeend', widgetHTML);

// 3. Add the Logic
const trigger = document.getElementById('concierge-trigger');
const popup = document.getElementById('chat-popup');
const closeBtn = document.getElementById('close-chat');

trigger.addEventListener('click', () => popup.classList.toggle('hidden'));
closeBtn.addEventListener('click', () => popup.classList.add('hidden'));

console.log("Concierge Widget Injected!");
