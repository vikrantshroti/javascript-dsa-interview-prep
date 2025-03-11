/**
 * Problem: Complete function "displayBlackFridayProducts()"
 * Description: Given a list of products and deals [fn getProductsAndDeals()], display the products that are part of Black Friday deals.
 * The products should be sorted by the total count in descending order.
 */
async function displayBlackFridayProducts() {
  const { products, offers } = await getProductsAndDeals();

  // Extract product IDs that are part of Black Friday deals
  const blackFridayProductIds = new Set(
    offers
      .filter((offer) => offer.title === "Black Friday Deals")
      .map((offer) => offer.product)
  );

  // Filter and transform the products based on Black Friday product IDs
  const blackFridayProducts = products
    .filter((product) => blackFridayProductIds.has(product.id))
    .map((product) => ({
      title: product.title,
      price: product.price,
      totalCount: Object.values(product.count).reduce(
        (sum, val) => sum + val,
        0
      ),
    }))
    .sort((a, b) => b.totalCount - a.totalCount); // Sort by total count in descending order

  // Display the results
  blackFridayProducts.forEach((product) => {
    console.log(`* ${product.title} $${product.price}`);
  });
}

displayBlackFridayProducts();

// do not modify this function
function getProductsAndDeals() {
  return new Promise((resolve, reject) => {
    resolve({
      products: [
        {
          id: "product_1",
          title: "Baker",
          category: "kitchen",
          price: 12,
          discount: 0,
          count: {
            warehouse: 2,
            store: 3,
            reserve: 5,
          },
        },
        {
          id: "product_2",
          title: "1984",
          category: "books",
          discount: 22,
          price: 22,
          count: {
            warehouse: 2,
          },
        },
        {
          id: "product_3",
          title: "T-Shirt",
          category: "clothing",
          discount: 5,
          price: 35,
          count: {
            store: 3,
            reserve: 5,
          },
        },
        {
          id: "product_4",
          title: "Boots",
          category: "clothing",
          discount: 34,
          price: 11,
          count: {
            warehouse: 6,
            store: 1,
            reserve: 3,
          },
        },
        {
          id: "product_5",
          title: "Chess Board",
          category: "games",
          discount: 0,
          price: 19,
          count: {
            warehouse: 2,
            store: 3,
          },
        },
        {
          id: "product_6",
          title: "Fifa 2023",
          category: "games",
          price: 64,
          discount: 12,
          count: {
            warehouse: 2,
            store: 3,
            reserve: 5,
          },
        },
        {
          id: "product_7",
          title: "God of War",
          category: "games",
          discount: 22,
          price: 44,
          count: {
            warehouse: 2,
            store: 3,
            reserve: 5,
          },
        },
      ],
      offers: [
        {
          id: "offer_1",
          title: "Black Friday Deals",
          code: "BF_2023",
          product: "product_5",
        },
        {
          id: "offer_2",
          title: "Black Friday Deals",
          code: "BF_2023",
          product: "product_2",
        },
        {
          id: "offer_3",
          title: "Black Friday Deals",
          code: "BF_2023",
          product: "product_4",
        },
        {
          id: "offer_4",
          title: "Christmas Deals",
          code: "CH_2023",
          product: "product_1",
        },
        {
          id: "offer_5",
          title: "Black Friday Deals",
          code: "BF_2023",
          product: "product_3",
        },
        {
          id: "offer_6",
          title: "Black Friday Deals",
          code: "BF_2023",
          product: "product_5",
        },
        {
          id: "offer_7",
          title: "Cyber Monday Deals",
          code: "CM_2023",
          product: "product_7",
        },
        {
          id: "offer_8",
          title: "Cyber Monday Deals",
          code: "CM_2023",
          product: "product_5",
        },
      ],
    });
  });
}
