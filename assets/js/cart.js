function toggleCartDrawer() {
  const modalCanvasDrawer = document.getElementById('loji-cart-drawer');
  const conciergeShell = document.getElementById('concierge-chat-shell');
  
  if (!modalCanvasDrawer) return;
  modalCanvasDrawer.classList.toggle('hidden');
  
  // Clean UI: Hide the concierge text panel if the cart drawer is being opened
  if (!modalCanvasDrawer.classList.contains('hidden') && conciergeShell) {
    conciergeShell.classList.add('hidden');
    CartEngine.renderDrawerInterfaceElements();
  }
}
