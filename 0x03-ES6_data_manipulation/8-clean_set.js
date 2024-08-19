export default function cleanSet(set, startString) {
  const filteredValues = [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return filteredValues.join('-');
}
