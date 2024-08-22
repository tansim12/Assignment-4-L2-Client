export interface TSetProductsLocalStorageData {
  _id: string;
  name: string;
  price: number;
  buyQuantity: number;
  image: string;
}

export const handleAddToCart = (
  data: Partial<TSetProductsLocalStorageData>
) => {
  // Retrieve the current cart data from local storage
  const getAddToCartData = localStorage.getItem("addToCart");

  // Initialize the cart with existing data or an empty array if none exists
  const cartItems: TSetProductsLocalStorageData[] = getAddToCartData
    ? JSON.parse(getAddToCartData)
    : [];

 
  // Check if the item is already in the cart
  const existingProductIndex = cartItems.findIndex(
    (item) => item._id === data._id
  );

  if (existingProductIndex >= 0) {
    // If the item is already in the cart, update the quantity
    cartItems[existingProductIndex].buyQuantity += data.buyQuantity || 1;
  } else {

    if (cartItems?.length > 2) {
      return {
        message: "Already 3 Product Added Cart",
      };
    }
  
    // If the item is not in the cart, add it
    cartItems.push({
      _id: data?._id as string,
      name: data?.name as string,
      price: data?.price as number,
      buyQuantity: data?.buyQuantity || 1,
      image: data?.image as string,
    });
  }

  // Save the updated cart back to local storage
   localStorage.setItem("addToCart", JSON.stringify(cartItems));
};
