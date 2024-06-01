
const FeaturedCategoryCard = ({category}) => {
  console.log(category);
  return (
    <div className="border text-center flex justify-center items-center p-14 rounded-2xl shadow-lg">
        <p>{category.name}</p>

        {/* {
          category.subCategoryId.map(subCategory=>(
            <div key={subCategory._id}>
              <p>{subCategory.name}</p>
            </div>
          ))
        } */}
    </div>
  )
}

export default FeaturedCategoryCard