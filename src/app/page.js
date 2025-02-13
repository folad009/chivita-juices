"use client"
import { useState, useEffect } from 'react';
import ChivitaTrads from "@/components/home/ChivitaTrads";
import HomeProducts from "@/components/home/HomeProducts";
import HomeSlider from "@/components/home/HomeSlider";
import LoadingScreen from "@/components/common/LoadingScreen";
import ProductCarousel from '@/components/home/ProductsCarousel';
import InstagramEmbed from '@/components/common/InstagramEmbed';
import Head from 'next/head';


export default function Home() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Simulate a loading effect
    const timer = setTimeout(() => setLoading(false), 1500); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      <Head>
        <title>Chivita Juices</title>
        <meta name='description' content='Welcome to Chivita Juices. Everyone has a Chivita!!' />
        <meta name='robot' content='index, follow' />
        <link rel='canonical' href='https://chivitajuices.com' />
      </Head>
      {loading && <LoadingScreen />}
      <HomeSlider />
      <HomeProducts />
      <ProductCarousel />
      <ChivitaTrads />
      <InstagramEmbed />
    </>
  );
}
