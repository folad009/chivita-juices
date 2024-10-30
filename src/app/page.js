import InstagramGallery from "@/components/common/InstagramCommunity";
import StoreLocator from "@/components/common/StoreLocator";
import ChivitaTrads from "@/components/home/ChivitaTrads";
//import HomeFeature from "@/components/home/HomeFeature";
import HomeProducts from "@/components/home/HomeProducts";
import HomeSlider from "@/components/home/HomeSlider";


export default function Home() {
  return (
    <>
      <HomeSlider />
      <HomeProducts />
      <ChivitaTrads/>
      <InstagramGallery />
      <StoreLocator />
    </>
  );
}
