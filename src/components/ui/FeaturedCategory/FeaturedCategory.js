import { getViewCategory } from "@/utils/getViewCategory";
import React from "react";
import FeacuredCategoryCard from "./FeacuredCategoryCard";
import { Container } from "react-bootstrap";
import Link from "next/link";

const FeaturedCategory =async () => {
    const categories = await getViewCategory()
    // console.log("aaaaaaaaaaaaaaaaa",categories.data);
  return (
    <Container>
      <div className="text-center my-10">
      <h2 className="font-semibold ">Featured Category</h2>
      <p>Get Your Desired Product from Featured Category!</p>
      </div>

      <div className="grid grid-cols-6 gap-2 mb-20">
        {
            categories.data.map(category=>(
              <Link className="no-underline text-inherit hover:text-orange-700" key={category._id} href={`/category/${category._id}`}>
              <FeacuredCategoryCard category={category}></FeacuredCategoryCard>
              </Link>
            ))
        }
      </div>


    </Container>
  );
};

export default FeaturedCategory;
