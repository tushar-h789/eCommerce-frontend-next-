import { getSingleCategory } from "@/utils/getSingleCategory";

const SingleCategory = async ({ params }) => {
  const singleCategory = await getSingleCategory(params.slug);
  // console.log("snsnsnsnsnsnsn", singleCategory);

  return <div>
    <p>SingleCategory: {params.slug}</p>
    {
      singleCategory.map(category=>(
        <div key={category._id}>
          <p>{category.name}</p>
        </div>
      ))
    }
    </div>;
};

export default SingleCategory;
