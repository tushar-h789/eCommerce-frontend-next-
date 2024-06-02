import Image from "next/image";

const FeaturedProductsCard = ({ product }) => {
  // console.log(product);
  return (
    <div className="col">
      <div className=" card h-10 ">
        <div className=" flex justify-center">
        <Image
          src={`http://localhost:7000${product?.image}`}
          height={100}
          width={300}
          //   sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "200px",
            // objectFit: "cover", // cover, contain, none
            borderRadius: "20px",
          }}
          alt="product"
        />
        </div>
        <div className="card-body">
          <h5 className="card-title my-8">{product.name}</h5>
          {/* <p
            className="card-text h-36"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></p> */}
        </div>
        <div className="card-footer text-center">
          <small className="text-body-secondary font-bold hover:text-orange-700">
            Add To Card
          </small>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductsCard;
