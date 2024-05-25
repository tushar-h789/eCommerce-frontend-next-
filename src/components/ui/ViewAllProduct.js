import { getViewAllProduct } from "@/utils/getViewAllProduct"
import Image from "next/image";


const ViewAllProduct = async () => {
    const products = await getViewAllProduct()
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
            <p className="py-2">
              Description: <strong>{product.description}</strong>
            </p>
            <Image src={`http://localhost:7000${product.image}`} width={100} height={100} alt="product"/>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ViewAllProduct