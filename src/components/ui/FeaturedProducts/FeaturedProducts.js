import { getViewAllProduct } from "@/utils/getViewAllProduct"
import Link from "next/link";
import { Container } from "react-bootstrap"
import FeaturedCategory from "../FeaturedCategory/FeaturedCategory";
import FeaturedProductsCard from "./FeaturedProductsCard";

const FeaturedProducts =async () => {
    const products = await getViewAllProduct()
    console.log(products);
  return (
    <Container>
        <div className="text-center my-10">
      <h2 className="font-semibold ">Featured ProductsCategory</h2>
      <p className="divide-x ">Check & Get Your Desired Product!</p>
      
      </div>

      <div className="grid grid-cols-3 gap-2">
        {
            products.map(product=>(
              <Link className="no-underline text-inherit hover:text-orange-700" key={product._id} href={`/category/${product._id}`}>
              <FeaturedProductsCard product={product}></FeaturedProductsCard>
              </Link>
            ))
        }
      </div>


        
    </Container>
  )
}

export default FeaturedProducts