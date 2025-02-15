
import styles from "@/css/GeneralStyle.module.css"

const Chivita100 = () => {


  return (
    <>
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
    <div className="absolute inset-0">
        <img className="object-cover w-full h-full md:object-right md:scale-100 md:origin-top-right" src="/assets/images/chivita-orange-juice-banner.jpg" alt="" />
    </div>

    <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

    <div className="absolute inset-0 block bg-black/70 md:hidden"></div>

    <div className="relative px-2 mx-8 sm:px-4 lg:px-2 max-w-5xl h-96 py-10">
        <div className="md:w-2/3 lg:w-1/2 xl:w-1/2 md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Chivita Fruit Juice</h2>
            <p className="mt-4 text-base text-gray-200">Chivita Fruit Juice is Mother Nature’s gift of juices made from
            fresh fruits and packed in aseptic packaging. It is fruit juice in
            its wholesome form, containing all the goodness and nutrients of
            nature’s fruits with no preservatives, artificial colours,
            artificial flavours, or added sugar. With Chivita every moment
            becomes special, good living becomes achievable, and milestones
            become memorable. With every sip, you're embracing a healthy
            lifestyle and creating moments to cherish. Enjoy a glass of Chivita
            Fruit Juice today!</p>

        
        </div>
    </div>
</section>
      {/*<section className="bg-center bg-no-repeat bg-cover bg-[url('/assets/images/chivita-juices-bg-pages-1.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4  max-w-lg text-left py-24 lg:py-24">
          <h1
            className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Fruit Juice
          </h1>
          <p
            className="mb-8 text-[16px] font-normal text-gray-300 lg:text-[16px] leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            Chivita Fruit Juice is Mother Nature’s gift of juices made from
            fresh fruits and packed in aseptic packaging. It is fruit juice in
            its wholesome form, containing all the goodness and nutrients of
            nature’s fruits with no preservatives, artificial colours,
            artificial flavours, or added sugar. With Chivita every moment
            becomes special, good living becomes achievable, and milestones
            become memorable. With every sip, you're embracing a healthy
            lifestyle and creating moments to cherish. Enjoy a glass of Chivita
            Fruit Juice today!
          </p>
        </div>
      </section>*/}

      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 md:p-12 ">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img
              src="/assets/images/product-image-dp/chivita-orange-juice.png"
              alt="Chivita Orange Juice"
              className="object-contain"
            />
            <div className={styles.btnContainer}>
              <button className={styles.btn}>Buy Now</button>
            </div>
            
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-4 pl-10">
          <h2
            className="text-3xl font-bold text-gray-800"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Orange Juice Blend
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            Chivita Orange Juice Blend is a burst of sunshine in every glass.
            Whether you’re fueling up for a busy day or simply enjoying a moment
            of calm, Chivita Orange Juice delivers the perfect balance of fruity
            zest and sweetness. Get transported into the luscious world of
            natural, fresh, ripe fruits with no added preservatives, artificial
            colours, artificial flavours, or sugar. Make your day complete with
            Chivita Orange Juice Blend.
          </p>

          <div className="flex items-center">
            <span
              className="mr-3 font-bold"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Size:
            </span>
            <div
              className="relative"
              style={{
                fontFamily: "Azo Sans, sans-serif",
                fontWeight: "bold",
              }}
            >
              1 Litre
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 md:p-12 ">
        <div className="md:w-1/2 flex flex-col space-y-4 pr-10">
          <h2
            className="text-3xl font-bold text-gray-800"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Pineapple Juice Blend
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            Our Chivita Pineapple Fruit Juice Blend is a testament to nature’s
            sweetness, made from juicy, ripe pineapples picked at the height of
            their season. With every sip, you taste the perfect balance of a
            refreshing burst of taste that awakens your senses. This isn’t just
            juice, it’s a moment of escape, an invitation to slow down, relax,
            and savor the natural goodness that only our Chivita Pineapple Fruit
            Juice Blend can offer. Perfect for any occasion – whether enjoyed as
            a refreshing breakfast boost, a midday pick-me-up, or a delightful
            addition to your favorite cocktails or mocktails – Chivita Pineapple
            Fruit Juice Blend is always ready to bring a taste of the tropics to
            your day.
          </p>

          <div className="flex items-center">
            <span
              className="mr-3 font-bold"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Size:
            </span>
            <div
              className="relative"
              style={{
                fontFamily: "Azo Sans, sans-serif",
                fontWeight: "bold",
              }}
            >
              1 Litre
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img
              src="/assets/images/product-image-dp/chivita-pinapple-juice.png"
              alt="Chivita Pinapple Juice"
              className="w-80"
            />
              <div className={styles.btnContainer}>
              <button className={styles.btn}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 md:p-12 ">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img
              src="/assets/images/product-image-dp/chivita-apple-juice1.png"
              alt="Chivita Apple Juice"
              className="object-contain"
            />
              <div className={styles.btnContainer}>
              <button className={styles.btn}>Buy Now</button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col space-y-4 pl-10">
          <h2
            className="text-3xl font-bold text-gray-800"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Apple Juice
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            Enjoy the timeless goodness of our rich, golden Chivita Apple Juice.
            Made with care from meticulously selected apples, it’s a pure and
            wholesome delight. Our apple juice is a celebration of simplicity
            and quality that nurtures your body and brightens your day. Chivita
            Apple Juice is free from artificial flavours, colours, or
            preservatives, and is the perfect choice for those seeking a
            natural, delicious, and nutritious fruit juice.
          </p>

          <div className="flex items-center">
            <span
              className="mr-3 font-bold"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Size:
            </span>
            <div
              className="relative"
              style={{
                fontFamily: "Azo Sans, sans-serif",
                fontWeight: "bold",
              }}
            >
              1 Litre
            </div>
          </div>

          {/*<a
              href="#"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
              className="inline-flex items-center justify-center whitespace-nowrap text-[20px] font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#e30417] text-white hover:bg-[#007d26]/90 h-11 rounded-md px-8"
            >
              Buy Now
            </a>*/}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start bg-gray-50 p-6 md:p-12 ">
        <div className="md:w-1/2 flex flex-col space-y-4 pr-10">
          <h2
            className="text-3xl font-bold text-gray-800"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            Chivita Red Grape Juice Blend
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed"
            style={{ fontFamily: "Azo Sans, sans-serif" }}
          >
            Chivita Red Grape Juice Blend delivers a sensory experience that
            transports you to a picturesque field of verdant vineyards with
            delicate red grapes basking in the sun. One sip of this rich
            luxurious juice, and you are delightfully hooked. No artificial
            flavours, colours, preservatives or added sugar, only the wholesome
            goodness of Red Grape juice.
          </p>

          <div className="flex items-center">
            <span
              className="mr-3 font-bold"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Size:
            </span>
            <div
              className="relative"
              style={{
                fontFamily: "Azo Sans, sans-serif",
                fontWeight: "bold",
              }}
            >
              1 Litre
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0 bg-white rounded-2xl">
          <div className="w-64 h-auto">
            <img
              src="/assets/images/product-image-dp/chivita-red-grape-juice.png"
              alt="Chivita Grape Juice"
              className="object-contain"
            />
              <div className={styles.btnContainer}>
              <button className={styles.btn}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chivita100;
