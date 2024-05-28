import { getViewCategory } from "@/utils/getViewCategory";
import Link from "next/link";

const ViewCategory = async () => {
  const categories = await getViewCategory();
  console.log(categories.data);
  return (
    <div>
      <h3 className="text-xl bg-gray-400 text-white font-semibold p-2">
        All Category: {categories.data.length}
      </h3>
      <div className="bg-gray-200 p-2 h-[500px] overflow-scroll overflow-x-hidden">
        {categories.data.map((category) => (
          <div key={category._id}>
            <div className="border border-gray-300 text-center dropdown">
              <p className="py-2">
                Category:{" "}
                <Link href={`/category/${category._id}`}>
                  <strong>{category.name}</strong>
                </Link>
              </p>
              {category.subCategoryId.length > 0 &&
                category.subCategoryId.map((subCategory) => (
                  <div key={subCategory._id}>
                    <p className="my-2 text-white">{subCategory.name}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewCategory;
