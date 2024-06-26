import Footer from "@/components/shared/Footer";
import Menubar from "@/components/shared/Menubar";
import Banner from "@/components/ui/Banner";
import FeaturedCategory from "@/components/ui/FeaturedCategory/FeaturedCategory";
import FeaturedProducts from "@/components/ui/FeaturedProducts/FeaturedProducts";
import ViewAllProduct from "@/components/ui/ViewAllProduct";
import ViewAllStore from "@/components/ui/ViewAllStore";
import ViewCategory from "@/components/ui/ViewCategory";
import ViewSubCategory from "@/components/ui/ViewSubCategory";

export default function Home() {
  return (
    <div>
      <Menubar/>
      <ViewCategory/>
      <Banner/>
      <FeaturedCategory/>
      <FeaturedProducts/>

      <Footer/>
      {/* <h2 className="text-4xl font-bold text-center text-gray-700">
        Welcome to Home Page
      </h2>

      <div className="flex gap-5">
        <div className=" w-96 h-[300px]">
          <ViewCategory />
        </div>
        <div className=" w-96 h-[300px]">
          <ViewSubCategory />
        </div>
        <div className=" w-96 h-[300px]">
          <ViewAllProduct />
        </div>
        <div className=" w-96 h-[300px]">
          <ViewAllStore />
        </div>
      </div> */}
    </div>
  );
}
