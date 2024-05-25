export const getViewAllProduct = async () => {
  const res = await fetch("http://localhost:7000/api/v1/products/viewproducts");

  return res.json();
};
