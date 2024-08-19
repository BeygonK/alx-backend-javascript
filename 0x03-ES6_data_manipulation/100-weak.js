// Export a constant instance of WeakMap
export const weakMap = new WeakMap();

// Export a function named queryAPI
export function queryAPI(endpoint) {
  // Get the current count for the endpoint
  const currentCount = weakMap.get(endpoint) || 0;

  // Update the count in the WeakMap
  weakMap.set(endpoint, currentCount + 1);

  // Check if the count is >= 5 and throw an error if so
  if (currentCount + 1 >= 5) {
    throw new Error('Endpoint load is high');
  }
}
