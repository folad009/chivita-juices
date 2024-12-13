"use client"
import { useState, useEffect } from 'react';
import InstagramGallery from "@/components/common/InstagramCommunity";
import ChivitaTrads from "@/components/home/ChivitaTrads";
import HomeProducts from "@/components/home/HomeProducts";
import HomeSlider from "@/components/home/HomeSlider";
import LoadingScreen from "@/components/common/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Simulate a loading effect
    const timer = setTimeout(() => setLoading(false), 1500); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <HomeSlider />
      <HomeProducts />
      <ChivitaTrads />
      <InstagramGallery />
    </>
  );
}
