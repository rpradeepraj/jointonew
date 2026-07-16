export const DEFAULT_PRODUCTS = [
  {
    id: "pradeep-vegetables",
    title: "Pradeep Vegetables",
    subtitle: "On-demand Fresh Vegetable & Fruits Delivery SaaS",
    description: "FSSAI-certified ready-to-cook fresh cut vegetables and fruits delivered to Chennai doorsteps. Featuring RO water washed, AC room processed ingredients without preservatives. Seamless ordering via WhatsApp and customizable portions.",
    category: "E-commerce",
    pricing: "₹199 Min Order",
    link: "#",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1574325131876-a7999d3d5182?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&w=600&q=80"
    ],
    tags: ["React", "TailwindCSS", "WhatsApp API", "FSSAI Certified", "Same-Day Delivery"],
    features: [
      "FSSAI Certified processing & safety",
      "Washed in RO purified water",
      "Processed in climate-controlled AC environment",
      "Completely preservative-free food prep"
    ],
    isFeatured: true
  }
];

export const GOOGLE_SHEET_CONFIG = {
  // Template sheet ID (can be customized by user)
  spreadsheetId: "",
  // Whether to default to sheet fetching
  enabled: false
};
