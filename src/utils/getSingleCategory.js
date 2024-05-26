export const getSingleCategory = async (id) => {
  console.log("id", id);
  const res = await fetch(
    `http://localhost:7000/api/v1/products/singlecategory?slug=${id}`
  );
  //   console.log(res);

  return res.json();
};
