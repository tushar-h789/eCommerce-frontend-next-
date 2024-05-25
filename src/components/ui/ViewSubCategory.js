import { getViewSubCategory } from "@/utils/getViewSubCategory"

const ViewSubCategory =async () => {
    const subCategories = await getViewSubCategory()
    console.log(subCategories.data);
  return (
    <div>
      <h3 className="text-xl bg-gray-400 text-white font-semibold p-2">
        All Sub Category: {subCategories.data.length}
      </h3>
      <div className="bg-gray-200 p-2 h-[500px] overflow-scroll overflow-x-hidden">
        {subCategories.data.map((subCategory) => (
          <div key={subCategory._id}>
            <div className="border border-gray-300 text-center">
              <p className="py-2">
                Sub Category: <strong>{subCategory.name}</strong>
              </p>
              <p className="py-2">
                Category: <strong>{subCategory?.categoryId?.name}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewSubCategory