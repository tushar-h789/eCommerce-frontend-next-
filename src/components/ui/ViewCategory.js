import { getViewCategory } from "@/utils/getViewCategory";
import Link from "next/link";
import { Container } from "react-bootstrap";

const ViewCategory = async () => {
  const categories = await getViewCategory();

  return (
    <div className="drop-shadow-lg bg-white mb-10 relative z-20">
      <Container>
        <div className="flex gap-3 items-center flex-wrap relative">
          {categories.data.map((category) => (
            <div key={category._id} className="relative group my-3">
              <Link
                href={`/category/${category._id}`}
                className="no-underline text-inherit hover:text-orange-700"
              >
                <strong className="block group-hover:underline">
                  {category.name}
                </strong>
              </Link>

              {/* SubCategory */}
              {category.subCategoryId.length > 0 && (
                <div className="absolute left-0 hidden group-hover:block bg-gray-200 p-2 rounded shadow-lg z-30 border-t-4 border-t-orange-700">
                  {category.subCategoryId.map((subCategory) => (
                    <div key={subCategory._id} className="my-1">
                      <Link href={`/subcategory/${subCategory._id}`} className="no-underline">
                        <p className="text-gray-950 hover:text-white hover:bg-orange-700 cursor-pointer w-[200px] rounded-sm my-2">
                          {subCategory.name}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ViewCategory;
