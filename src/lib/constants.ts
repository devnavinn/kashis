// Central place to edit business & contact details.
// Replace the placeholders below with your real details.

export const site = {
  name: "Kashis Mehndi Studio",
  shortName: "Kashis Mehndi",
  tagline: "Kashis artistry for your most beautiful moments",
  city: "Kolkata, India",
  founder: "Kashis Shaw",
  instagram: "https://instagram.com/kashismehendi_artist__",
  email: "kashisshaw697@gmail.com",
};

// Digits only, with country code, no spaces or symbols — used for the WhatsApp deep link.
export const whatsappNumber = "+919088806596";
// Human-friendly display format.
export const phoneDisplay = "+91 90888 06596";
// Used for the tel: link — digits and leading + only.
export const phoneHref = "+91 90888 06596";

export const whatsappDefaultMessage =
  "Hi Kashis! I'd like to enquire about booking mehndi. Could you share your availability?";

export function buildWhatsappLink(message: string = whatsappDefaultMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
