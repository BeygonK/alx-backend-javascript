export default function updateUniqueItems(groceriesMap) {
  // Check if the argument is a Map
  if (!(groceriesMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the map and update items with quantity 1 to 100
  groceriesMap.forEach((quantity, item) => {
    if (quantity === 1) {
      groceriesMap.set(item, 100);
    }
  });

  return groceriesMap;
}
