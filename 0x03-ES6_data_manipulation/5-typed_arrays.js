export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  if (value < -128 || value > 127) {
    throw new Error('Value out of range for Int8');
  }

  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the buffer
  const dataView = new DataView(buffer);

  // Set the value at the specified position
  dataView.setInt8(position, value);

  return dataView;
}
