"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        mainImage: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: 3.9,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        mainImage:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: 4.1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
          "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        mainImage: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: 4.7,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
          "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        mainImage: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: 2.1,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title:
          "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        mainImage:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: 4.6,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
          "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        mainImage:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: 3.9,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        description:
          "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        mainImage:
          "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        rating: 2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description:
          "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        mainImage:
          "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        rating: 1.9,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        description:
          "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
        mainImage: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: 3.3,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description:
          "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        mainImage: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating: 2.9,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        title:
          "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        description:
          "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        mainImage: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        rating: 4.8,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        title:
          "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        description:
          "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        mainImage: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        rating: 4.8,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        title:
          "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description:
          "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        mainImage: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: 2.9,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        title:
          "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 999.99,
        description:
          "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        mainImage: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: 2.2,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        title:
          "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description:
          "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        mainImage: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: 2.9,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        description:
          "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        mainImage: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating: 3.8,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description:
          "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        mainImage: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        rating: 4.7,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description:
          "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        mainImage: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: 4.5,
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
