<div class="p-3 border-t border-brandBorder bg-white space-y-2">
  <div class="flex flex-wrap gap-1 pb-1">
    <button onclick="ConciergeLogic.postAutomatedQuery('Suggest Men\'s Fits')" class="bg-brandCard hover:bg-goldAccent/10 border border-brandBorder text-zinc-700 text-[9px] font-medium px-2 py-1 rounded">Trending Men's</button>
    <button onclick="ConciergeLogic.postAutomatedQuery('Check Store Availability')" class="bg-brandCard hover:bg-goldAccent/10 border border-brandBorder text-zinc-700 text-[9px] font-medium px-2 py-1 rounded">Showroom Hours</button>
  </div>
  
  <div class="flex items-center gap-1">
    <input type="text" id="concierge-custom-input" placeholder="Ask a question..." class="w-full bg-brandCard border border-brandBorder px-3 py-2 text-xs rounded outline-none focus:border-goldAccent" onkeypress="if(event.key === 'Enter') { ConciergeLogic.handleCustomInput(); }">
    <button onclick="ConciergeLogic.handleCustomInput()" class="bg-brandDark hover:bg-goldAccent text-white hover:text-brandDark px-3 py-2 text-xs rounded transition-colors font-bold">Send</button>
  </div>
</div>
