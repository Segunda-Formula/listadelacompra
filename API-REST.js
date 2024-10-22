export async function getItemsFromApi() {
  const response = await fetch(
    "https://6716056f33bc2bfe40bc0567.mockapi.io/items"
  );
  const itemsData = await response.json();
  return itemsData;
}

export async function createDataApi(newItem) {
  const response = await fetch(
    "https://6716056f33bc2bfe40bc0567.mockapi.io/items",
    {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    }
  );
  const newItemAPI = await response.json();
  return newItemAPI;
}