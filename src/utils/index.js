export const formatPrice = (price) => {
  let priceString = parseFloat(price).toString();
  return priceString.includes("e")
    ? parseFloat(price).toFixed(
        parseInt(priceString[priceString.length - 1]) + 2
      )
    : parseFloat(price).toFixed(3);
};
