export function searchInTree<T extends { id: number; children: T[] }>(
  element: T,
  id: number
): null | T {
  if (element.id === id) {
    return element;
  } else if (element.children != null) {
    let i;
    let result = null;
    for (i = 0; result == null && i < element.children.length; i++) {
      result = searchInTree(element.children[i], id);
    }
    return result;
  }
  return null;
}
