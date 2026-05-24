<!-- Trigger Button -->
<button id="concierge-trigger" aria-label="Open Personal Assistant">
  💬 <span style="margin-left: 8px;">Personal Assistant</span>
</button>

<!-- Chat Pop-up Window -->
<div id="chat-popup" class="hidden">
  <div class="chat-header">
    <span>Personal Assistant</span>
    <button id="close-chat" aria-label="Close Assistant">✕</button>
  </div>
  <div class="chat-body">
    <p style="padding: 20px; color: #555; font-family: sans-serif;">
      Hello! How can I assist you today?
    </p>
  </div>
</div>

<style>
  /* Button Styling */
  #concierge-trigger {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 9999;
    padding: 12px 24px;
    border-radius: 50px;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    font-family: sans-serif;
    font-weight: 600;
    transition: transform 0.2s ease, background-color 0.2s ease;
  }
  #concierge-trigger:hover { transform: scale(1.05); background-color: #333; }

  /* Pop-up Container */
  #chat-popup {
    position: fixed;
    bottom: 85px;
    right: 24px;
    width: 340px;
    height: 450px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #eee;
  }
  #chat-popup.hidden { 
  display: none !important; 
}

#chat-popup {
  display: flex !important; /* Force it to show if needed for testing */
}

  /* Header Styling */
  .chat-header {
    padding: 16px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: sans-serif;
    font-weight: bold;
  }
  .chat-header button {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    line-height: 1;
  }

  .chat-body { flex: 1; overflow-y: auto; }

  /* Mobile Optimization */
  @media (max-width: 480px) {
    #chat-popup { width: 90vw; right: 5vw; bottom: 80px; }
  }
</style>

<script>
  (function() {
    const trigger = document.getElementById('concierge-trigger');
    const popup = document.getElementById('chat-popup');
    const closeBtn = document.getElementById('close-chat');

    // Toggle pop-up
    trigger.addEventListener('click', () => {
      popup.classList.toggle('hidden');
    });

    // Close button
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      popup.classList.add('hidden');
    });
  })();
</script>
