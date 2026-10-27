/*
 ZiA - ملف المنتجات السهل
 لإضافة منتج: انسخ قالب منتج كامل، غيّر id إلى رقم جديد، وعدّل الاسم والسعر والصور.
 ارفع صورك داخل مجلد images في GitHub، ثم اكتب مساراتها مثل images/hoodie-05-front.jpg
 لو لم تضف صورًا، سيظهر رسم تجريبي بدلًا منها.
*/
window.ZIA_PRODUCTS = [
  {
    id: 1,
    name: "Classic Logo Hoodie",
    price: 450,
    tag: "جديد",
    desc: "هودي كلاسيك بشعار ZiA",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "أسود", hex: "#101216" },
      { name: "كحلي", hex: "#25394e" },
      { name: "رمادي فاتح", hex: "#d9dfe6" }
    ],
    images: [
      "images/hoodie-01-front.jpg",
      "images/hoodie-01-back.jpg",
      "images/hoodie-01-detail.jpg"
    ]
  },
  {
    id: 2,
    name: "Minimal Hoodie",
    price: 450,
    tag: "جديد",
    desc: "تصميم بسيط يناسب كل يوم",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "رمادي", hex: "#9aa4ae" },
      { name: "أسود", hex: "#101216" },
      { name: "أبيض", hex: "#f4f4f4" }
    ],
    images: []
  },
  {
    id: 3,
    name: "Blue Vibes Hoodie",
    price: 450,
    tag: "جديد",
    desc: "لمسة زرقاء بطابع عصري",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "كحلي", hex: "#071426" },
      { name: "أزرق", hex: "#087ef0" },
      { name: "أبيض", hex: "#f4f4f4" }
    ],
    images: []
  },
  {
    id: 4,
    name: "Shadow Hoodie",
    price: 500,
    tag: "مميز",
    desc: "ستايل داكن ومميز",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "أسود", hex: "#101216" },
      { name: "رمادي غامق", hex: "#4c5967" },
      { name: "أزرق رمادي", hex: "#b4c8dd" }
    ],
    images: []
  }
];
