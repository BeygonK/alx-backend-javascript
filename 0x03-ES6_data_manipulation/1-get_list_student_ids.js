export default function getListStudentsIds(array) {
  if (Array.isArray(array)) {
    return (
      array.map((a) => a.id)
    );
  }

  return [];
}
