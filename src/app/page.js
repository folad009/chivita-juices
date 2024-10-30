import InstagramGallery from "@/components/common/InstagramCommunity";
import StoreLocator from "@/components/common/StoreLocator";
import ChivitaTrads from "@/components/home/ChivitaTrads";
import HomeProducts from "@/components/home/HomeProducts";
import HomeSlider from "@/components/home/HomeSlider";
import LoadingScreen from "@/components/common/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Simulate a loading effect
    const timer = setTimeout(() => setLoading(false), 1500); // Adjust timeout as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <HomeSlider />
      <HomeProducts />
      <ChivitaTrads />
      <InstagramGallery />
      <StoreLocator />
    </>
  );
}
