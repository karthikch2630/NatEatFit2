import { type CartItem } from '../store/cartStore';

// Define the interface for the new delivery details
export interface UserDeliveryDetails {
  name: string;
  address: string;
  timeSlot: string;
}

export const sendOrderToWhatsApp = (items: CartItem[], userDetails: UserDeliveryDetails) => {
  const BUSINESS_NUMBER = '919959425322'; // replace with real number, no +

  if (!items || items.length === 0) return;

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 49 : 0;
  const taxes = subtotal * 0.05;
  const total = subtotal + deliveryFee + taxes;

  // Build the message string
  let message = `*🥗 NEW ORDER — NAT EAT FIT*\n\n`;
  
  // Add Customer Details section
  message += `*📝 CUSTOMER DETAILS*\n`;
  message += `Name: ${userDetails.name}\n`;
  message += `Address: ${userDetails.address}\n`;
  message += `Time Slot: ${userDetails.timeSlot}\n\n`;

  // Add Order Details section
  message += `*🛒 ORDER SUMMARY*\n`;
  message += '```\n';

  items.forEach((item, index) => {
    const lineTotal = item.unitPrice * item.quantity;
    message += `${index + 1}. ${item.name} x${item.quantity}\n`;

    const groupedAddOns = (item.addOns || []).reduce((acc, addon) => {
      if (!acc[addon.groupName]) acc[addon.groupName] = [];
      acc[addon.groupName].push(addon.name);
      return acc;
    }, {} as Record<string, string[]>);

    Object.entries(groupedAddOns).forEach(([groupName, options]) => {
      message += `   - ${groupName}: ${options.join(', ')}\n`;
    });

    message += `   Amount: Rs.${lineTotal}\n`;
    if (index < items.length - 1) message += `\n`;
  });

  message += '\n------------------------\n';
  message += `Subtotal:      Rs.${subtotal.toFixed(2)}\n`;
  message += `GST (5%):      Rs.${taxes.toFixed(2)}\n`;
  message += `Delivery Fee:  Rs.${deliveryFee.toFixed(2)}\n`;
  message += `TOTAL:         Rs.${total.toFixed(2)}\n`;
  message += '```\n\n';
  message += `Please confirm my order and share the payment details. Thank you! 🙏`;

  // Open WhatsApp with pre-filled message
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${BUSINESS_NUMBER}?text=${encodedMessage}`, '_blank');
};