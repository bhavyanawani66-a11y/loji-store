// api/checkout.js (Node.js API Route)
const twilio = require('twilio');

module.exports = async (req, res) => {
  // Setup Cross-Origin Resource Sharing (CORS) permissions for your frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method implementation architecture invalid' });
  }

  try {
    const { orderId, trackingId, amount, itemsSummary, email } = req.body;
    
    // Fallback or explicit routing set to your terminal contact number
    const destinationNumber = 'whatsapp:+918171264966';

    // Intialize Twilio context utilizing your managed cloud environment variables
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    const messageTemplatePayload = `*LoJi Order Confirmed!* 🎉\n\n📦 *Order ID:* ${orderId || 'LOJI-982134'}\n💵 *Total Price:* ₹${amount}\n📍 *Inventory:* ${itemsSummary}\n🚀 *Courier AWB Track ID:* ${trackingId}\n\nAn automated order dispatch manifest has been dispatched to ${email}.`;

    // Fire outbound automated message trigger parameters
    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886',
      to: destinationNumber,
      body: messageTemplatePayload
    });

    return res.status(200).json({ success: true, message: "Pipeline processed successfully." });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
