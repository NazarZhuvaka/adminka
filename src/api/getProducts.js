export default async function getProducts() {
  const response = await fetch("/guitarsProduct.json");
  return response.json();
}