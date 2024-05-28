import { getViewAllProduct } from "@/utils/getViewAllProduct";
import Image from "next/image";

const ViewAllProduct = async () => {
  const products = await getViewAllProduct();
  console.log(products);
  return (
    <div>
      <h3 className="text-xl bg-gray-400 text-white font-semibold p-2">
        All Products: {products.length}
      </h3>
      <div className="bg-gray-200 p-2 h-[500px] overflow-scroll overflow-x-hidden">
        {products.map((product) => (
          <div key={product._id}>
            <div className="border border-gray-300 text-center">
              <p className="py-2">
                Name: <strong>{product.name}</strong>
              </p>
              <div>
                <h4>Description:</h4>
                <p
                  className="py-2"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                ></p>
              </div>
              <Image
                src={`http://localhost:7000${product.image}`}
                width={100}
                height={100}
                alt="product"
              />
              {product.salesprice ? (
                <>
                  <p>Sales Price: {product.salesprice}</p>
                  <p>
                    Regular Price: <del>{product.regularprice}</del>
                  </p>
                </>
              ) : (
                <p>
                  Regular Price: <del>{product.regularprice}</del>
                </p>
              )}

              <h4 className="text-xl font-semibold my-2">Variant: </h4>
              {product.variantsId.map((variant) => (
                <div key={variant._id} className="border border-red-300">
                  <p>Variant Name: {variant.name}</p>
                  <div>
                    <h4>Description:</h4>
                    <p
                      className="py-2"
                      // dangerouslySetInnerHTML={{ __html: variant.description }}
                    ></p>
                  </div>
                  <Image
                    src={`http://localhost:7000${variant.image}`}
                    width={100}
                    height={100}
                    alt="product"
                  />
                  {variant.salesprice ? (
                    <>
                      <p>Sales Price: {variant.salesprice}</p>
                      <p>
                        Regular Price: <del>{variant.regularprice}</del>
                      </p>
                    </>
                  ) : (
                    <p>
                      Regular Price: <del>{variant.regularprice}</del>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllProduct;
