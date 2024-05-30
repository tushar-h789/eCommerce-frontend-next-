import Image from "next/image";

const FeaturedProductsCard = ({ product }) => {
  console.log(product);
  return (
    <div>
      {/* <div classNameName="border text-center p-3 rounded-2xl shadow-lg h-[300px]">
        <Image
          src={`http://localhost:7000${product?.image}`}
          width={300}
          height={500}
          alt="product"
        />
        <p classNameName="align-bottom	">{product.name}</p>
      </div> */}

{/* <div className="row row-cols-1 row-cols-md-3 g-4"> */}
  <div className="col">
    <div className="card h-100">
    <Image
          src={`http://localhost:7000${product?.image}`}
          height={200}
          width={300}
    //   sizes="100vw"
        // Make the image display full width
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover', // cover, contain, none
          borderRadius: '20px'
        }}
          alt="product"
        />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text" dangerouslySetInnerHTML={{ __html: product.description }}></p>
      </div>
      <div className="card-footer text-center">
        <small className="text-body-secondary font-bold hover:text-orange-700">Add To Card</small>
      </div>
    </div>
  </div>
{/* </div> */}
    </div>
  );
};

export default FeaturedProductsCard;
