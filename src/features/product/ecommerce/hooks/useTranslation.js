import { useState } from 'react';

// Tamil translation dictionary
const TAMIL_TRANSLATIONS = {
  "PRADEEP": "பிரதீப்",
  "VEGETABLES": "காய்கறிகள்",
  "Pradeep Vegetables": "பிரதீப் காய்கறிகள்",
  "Sambar Onion Peeled": "சின்ன வெங்காயம் (உரித்தது)",
  "Peeled Garlic": "பூண்டு (உரித்தது)",
  "Carrot Cut": "கேரட் நறுக்கியது",
  "Beans Cut": "பீனிஸ் நறுக்கியது",
  "Sambar Mix": "சாம்பார் கலவை",
  "Cauliflower Florets": "காலிஃபிளவர் துண்டுகள்",
  "Broccoli & Sprouts Health Mix": "புரோக்கோலி & முளைப்பயிறு",
  "Drumstick Cut": "முருங்கைக்காய் நறுக்கியது",
  "Lady Finger Diced": "வெண்டைக்காய் நறுக்கியது",
  "Peeled Ginger": "இஞ்சி (தோல் உரித்தது)",
  "Pumpkin Diced": "பரங்கிக்காய் நறுக்கியது",
  "Elephant Yam Cut": "சேனைக்கிழங்கு நறுக்கியது",
  "Potato Diced": "உருளைக்கிழங்கு நறுக்கியது",
  "Coconut Grated": "தேங்காய் துருவல்",
  "Chilli & Curry Leaves Pack": "மிளகாய் & கறிவேப்பிலை",
  "Mushroom Cut Pack": "காளான் நறுக்கியது",
  "Soup Mix Veggies": "சூப் காய்கறி கலவை",
  "Avial Mix Vegetables": "அவியல் காயறி கலவை",
  "Lemon & Ginger Detox Pack": "எலுமிச்சை & இஞ்சி கலவை",
  "Salad Fresh Veggie Mix": "பச்சை காய்கறி சாலட்",
  
  "Sambar onion": "சின்ன வெங்காயம்",
  "Garlic": "பூண்டு",
  "Carrot": "கேரட்",
  "Green beans": "பீன்ஸ்",
  "Drumstick": "முருங்கைக்காய்",
  "Brinjal": "கத்தரிக்காய்",
  "Tomato": "தக்காளி",
  "Onion": "வெங்காயம்",
  "Cauliflower": "காலிஃபிளவர்",
  "Broccoli": "புரோக்கோலி",
  "Mixed sprouts": "முளைப்பயிறு",
  "Lady finger (okra)": "வெண்டைக்காய்",
  "Ginger": "இஞ்சி",
  "Pumpkin": "பூசணிக்காய்",
  "Yam (Senai)": "சேனைக்கிழங்கு",
  "Potato": "உருளைக்கிழங்கு",
  "Coconut": "தேங்காய்",
  "Green Chilli": "பச்சை மிளகாய்",
  "Curry Leaves": "கறிவேப்பிலை",
  "Button Mushroom": "காளான்",
  "Cabbage": "முட்டைக்கோஸ்",
  "Spring Onion": "வெங்காயத்தாள்",
  "Raw Banana": "வாழைக்காய்",
  "Lemon": "எலுமிச்சை",
  "Mint": "புதினா",
  "Cucumber": "வெள்ளரிக்காய்",
  "Beetroot": "பீட்ரூட்",
  "Cherry Tomato": "செர்ரி தக்காளி",

  "Cut Vegetables": "நறுக்கிய காய்கறிகள்",
  "Combo offers": "கூட்டு சலுகைகள்",
  "Health Packs": "ஆரோக்கிய பேக்குகள்",
  "All": "அனைத்தும்",
  "Select Portion": "அளவை தேர்வு செய்",
  "Add": "சேர்",
  "Bestseller": "பிரபலமானது",
  "Ingredients": "தேவையானவை",
  "Your Cart": "உங்கள் கூடை",
  "Browse Products": "தயாரிப்புகளை பார்க்க",
  "Subtotal": "மொத்த தொகை",
  "Order via WhatsApp": "வாட்ஸ்அப் மூலம் ஆர்டர் செய்",
  "Clear Cart": "கூடையை காலியாக்கு",
  
  "Chennai's Freshest Kitchen Partner": "சென்னையின் புதிய சமையல் கூட்டாளி",
  "Healthy · Fresh · Ready to Cook": "ஆரோக்கியமான · புதிய · சமைக்க தயார்",
  "FSSAI-certified fresh cut fruits and vegetables. RO water washed, AC room processed, no preservatives. Delivered to your doorstep.": "FSSAI சான்றளிக்கப்பட்ட புதிய நறுக்கிய பழங்கள் மற்றும் காய்கறிகள். RO நீர் சுத்திகரிக்கப்பட்டு, ஏசி அறையில் பதப்படுத்தப்பட்டது, பாதுகாப்புகள் இல்லாதது. உங்கள் வீட்டு வாசலில் விநியோகிக்கப்படும்.",
  "Trusted by 500+ Chennai families": "500+ சென்னை குடும்பங்களின் நம்பிக்கை",
  
  "FSSAI Certified": "FSSAI சான்றிதழ்",
  "RO Water Washed": "RO நீர் சுத்திகரிப்பு",
  "Cold Chain Stored": "குளிர்சாதன சேமிப்பு",
  "AC Room Processed": "ஏசி அறை பதப்படுத்துதல்",
  "Search farm fresh cut vegetables...": "புதிய நறுக்கிய காய்கறிகளைத் தேடுக...",
  "Back to Portfolio": "போர்ட்ஃபோலியோ திரும்புக",
  "Google Sheet Loading Error": "கூகுள் ஷீட் ஏற்றுதல் பிழை",
  "How to resolve this:": "இதை எவ்வாறு சரிசெய்வது:"
};

export function useTranslation() {
  const [lang, setLang] = useState('EN');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'EN' ? 'TA' : 'EN'));
  };

  const t = (str) => {
    if (lang === 'TA' && TAMIL_TRANSLATIONS[str]) {
      return TAMIL_TRANSLATIONS[str];
    }
    return str;
  };

  return {
    lang,
    toggleLanguage,
    t
  };
}
