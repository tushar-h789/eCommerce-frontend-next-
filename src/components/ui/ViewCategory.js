import { getViewCategory } from "@/utils/getViewCategory";
import Link from "next/link";
import { Container } from "react-bootstrap";

const ViewCategory = async () => {
  const categories = await getViewCategory();
  return (
    <Container>
      <div className="flex gap-3">
        {categories.data.map((category) => (
          <div key={category._id}>
            <div className="mb-10">
              <Link
                href={`/category/${category._id}`}
                className="no-underline text-inherit hover:text-orange-700"
              >
                <strong>{category.name}</strong>
              </Link>
            </div>

            {/* SubCategory */}
            {/* {category.subCategoryId.length > 0 &&
            category.subCategoryId.map((subCategory) => (
              <div key={subCategory._id}>
                <p className="my-2 text-white">{subCategory.name}</p>
              </div>
            ))} */}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ViewCategory;
