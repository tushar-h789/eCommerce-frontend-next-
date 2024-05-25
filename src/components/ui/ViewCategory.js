import { getViewCategory } from "@/utils/getViewCategory";

const ViewCategory = async () => {
  const categories = await getViewCategory();
//   console.log(categories.data);
  return (
    <div>
      <h3 className="text-xl bg-gray-400 text-white font-semibold p-2">
        All Category: {categories.data.length}
      </h3>
      <div className="bg-gray-200 p-2 h-[500px] overflow-scroll overflow-x-hidden">
        {categories.data.map((category) => (
          <div key={category._id}>
            <div className="border border-gray-300 text-center">
              <p className="py-2">
                Category: <strong>{category.name}</strong>
              </p>
              <p className="py-2">
                Sub Category: <strong>{category?.ownerId?.name}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCategory;
