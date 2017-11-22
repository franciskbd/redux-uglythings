export function addItem(text) {
  return{
    type: "ADD_ITEM",
    text
  }
}

export function removeItem(index) {
  return{
    type: "REMOVE_ITEM",
    index
  }
}
