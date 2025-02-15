"use client"
import Link from 'next/link';

const Card = ({ imgSrc, title, ingredients, link }) => {
  return (
    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow">
      <div className="relative">
        <img
          className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
          src={imgSrc}
          alt={title}
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
      </div>
      <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{title}</h5>
        <p className="mb-5 text-gray-700 text-[15px]" style={{ fontFamily: 'Azo Sans, sans-serif'}}><span className='font-bold'>Ingredients:</span><br/>{ingredients}</p>
        <Link href={link} passHref target='_blank'>
          <button className="mt-4 px-4 py-2 font-medium text-[12px] tracking-wide uppercase text-white transition duration-200 rounded shadow-md bg-[#e30417] hover:bg-[#0c8241] focus:shadow-outline focus:outline-none" style={{ fontFamily: 'Azo Sans, sans-serif', fontWeight: 'bold' }}>
            Mix It Up
          </button>
        </Link>
      </div>
    </div>
  );
};

const StickyButton = () => {
  return (
    <Link href="#" passHref>
      <button
        className="fixed bottom-8 right-8 z-50 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#e30417] hover:bg-[#0c8241] focus:shadow-outline focus:outline-none"
        style={{ fontFamily: 'Azo Sans, sans-serif', fontWeight: 'bold' }}
      >
        Buy Now
      </button>
    </Link>
  );
};

const RecipeOverview = () => {
  const cardsData = [
    {
      imgSrc: '/assets/images/chivita-recipes-image-1.jpg',
      title: 'TEQUILA SUNRISE',
      ingredients: 'Chivita Orange juice, Grenadine, Lemon soda, Vodka.',
      link: '/recipes/tequila-sunrise'
    },
    {
      imgSrc: '/assets/images/chivita-recipes-image-2.jpg',
      title: 'COCONUT MARGARITAS',
      ingredients: 'Ginger beer, Chivita Exotic, Violet syrup, Lemon soda, Gin.',
      link: '/recipes/coconut-margaritas'
    },
    {
      imgSrc: '/assets/images/chivita-recipes-image-3.jpg',
      title: 'CHAPMAN',
      ingredients: 'Chivita Orange juice, Lemon soda, Grenadine, Lemons, Mint leaves.',
      link: '/recipes/chapman'
    },
  ];

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-3">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <StickyButton />
    </>
  );
};

export default RecipeOverview;
