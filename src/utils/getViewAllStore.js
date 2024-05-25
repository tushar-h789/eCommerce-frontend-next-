export const getViewAllStore = async () => {
  const res = await fetch("http://localhost:7000/api/v1/products/viewstore");

  return res.json();
};
