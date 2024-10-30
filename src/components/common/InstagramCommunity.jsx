import Image from "next/image";
import styles from '@/css/JoinCommunity.module.css';

const InstagramGallery = () => {
  return (
    <section className={styles.instagramGallery} aria-labelledby="instagram-gallery-heading">
      <header className={styles.header}>
        <h2 id="instagram-gallery-heading" className={styles.heading} style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
          Join Our Community
        </h2>
        <p className={styles.subheading} style={{ fontFamily: 'Azo Sans, sans-serif' }}>
        Follow us on our social media channels to know about upcoming events, promotions, & news as they happen
        </p>
                        {/* Social Brands */}
                        <div className="space-x-10">
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
              href="https://www.instagram.com/chivitajuices/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 132.004 132"
                width="32"
                height="32"
              >
                <defs>
                  <linearGradient id="b">
                    <stop offset="0" stopColor="#3771c8" />
                    <stop offset=".128" stopColor="#3771c8" />
                    <stop offset="1" stopColor="#60f" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="a">
                    <stop offset="0" stopColor="#fd5" />
                    <stop offset=".1" stopColor="#fd5" />
                    <stop offset=".5" stopColor="#ff543e" />
                    <stop offset="1" stopColor="#c837ab" />
                  </linearGradient>
                  <radialGradient
                    id="c"
                    cx="158.429"
                    cy="578.088"
                    r="65"
                    href="#a"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)"
                    fx="158.429"
                    fy="578.088"
                  />
                  <radialGradient
                    id="d"
                    cx="147.694"
                    cy="473.455"
                    r="65"
                    href="#b"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)"
                    fx="147.694"
                    fy="473.455"
                  />
                </defs>
                <path
                  fill="url(#c)"
                  d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
                  transform="translate(1.004 1)"
                />
                <path
                  fill="url(#d)"
                  d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
                  transform="translate(1.004 1)"
                />
                <path
                  fill="#fff"
                  d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.838-3.59 5.517-1.68 1.68-3.28 2.72-5.52 3.592-1.69.658-4.23 1.44-8.91 1.654-5.06.23-6.58.276-19.396.276-12.818 0-14.336-.046-19.396-.276-4.68-.214-7.22-.996-8.91-1.654-2.24-.87-3.837-1.91-5.516-3.59-1.68-1.68-2.72-3.278-3.59-5.517-.658-1.69-1.44-4.23-1.654-8.91-.23-5.06-.276-6.58-.276-19.39s.046-14.33.276-19.39c.214-4.68.996-7.22 1.654-8.91.87-2.24 1.91-3.84 3.59-5.52 1.68-1.68 3.278-2.72 5.516-3.59 1.69-.658 4.23-1.44 8.91-1.654 5.06-.23 6.58-.276 19.396-.276z"
                  transform="translate(1.004 1)"
                />
              </svg>
            </a>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
              href="https://www.youtube.com/user/chivitajuices/featured"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 333333 333333" width="32" height="32" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
                <path d="M329930 100020s-3254-22976-13269-33065c-12691-13269-26901-13354-33397-14124-46609-3396-116614-3396-116614-3396h-122s-69973 0-116608 3396c-6522 793-20712 848-33397 14124C6501 77044 3316 100020 3316 100020S-1 126982-1 154001v25265c0 26962 3315 53979 3315 53979s3254 22976 13207 33082c12685 13269 29356 12838 36798 14254 26685 2547 113354 3315 113354 3315s70065-124 116675-3457c6522-770 20706-848 33397-14124 10021-10089 13269-33090 13269-33090s3319-26962 3319-53979v-25263c-67-26962-3384-53979-3384-53979l-18 18-2-2zM132123 209917v-93681l90046 46997-90046 46684z" fill="red"/>
              </svg>
            </a>
            <a
              className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-black hover:bg-white/10 focus:outline-none focus:bg-white/10 disabled:opacity-50 disabled:pointer-events-none"
              href="https://www.facebook.com/ChivitaJuices/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                width="32"
                height="32"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 509 509"
              >
                <g fillRule="nonzero">
                  <path
                    fill="#0866FF"
                    d="M509 254.5C509 113.94 395.06 0 254.5 0S0 113.94 0 254.5C0 373.86 82.17 474 193.02 501.51V332.27h-52.48V254.5h52.48v-33.51c0-86.63 39.2-126.78 124.24-126.78 16.13 0 43.95 3.17 55.33 6.33v70.5c-6.01-.63-16.44-.95-29.4-.95-41.73 0-57.86 15.81-57.86 56.91v27.5h83.13l-14.28 77.77h-68.85v174.87C411.35 491.92 509 384.62 509 254.5z"
                  />
                  <path
                    fill="#fff"
                    d="M354.18 332.27l14.28-77.77h-83.13V227c0-41.1 16.13-56.91 57.86-56.91 12.96 0 23.39.32 29.4.95v-70.5c-11.38-3.16-39.2-6.33-55.33-6.33-85.04 0-124.24 40.16-124.24 126.78v33.51h-52.48v77.77h52.48v169.24c19.69 4.88 40.28 7.49 61.48 7.49 10.44 0 20.72-.64 30.83-1.86V332.27h68.85z"
                  />
                </g>
              </svg>
            </a>
          </div>
          {/* End Social Brands */}
      </header>


     
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {[
            { alt: "A dog sitting on a couch", src: "/assets/images/instagram/chivita-1.webp" },
            { alt: "A smiling girl holding a juice", src: "/assets/images/instagram/chivita-IG-2.webp" },
            { alt: "Two men posing with Chivita products", src: "/assets/images/instagram/chivita-IG-3.webp" },
            { alt: "Two puppies sitting on a couch", src: "/assets/images/instagram/chivita-IG-4.webp" },
          ].map(({ alt, src }, index) => (
            <article key={index} className={styles.marqueeItem}>
              <Image src={src} alt={alt} width={500} height={500} quality={80} />
            </article>
          ))}
        </div>
        {/* Duplicate for smooth scrolling */}
        <div className={styles.marqueeContent} aria-hidden="true">
          {[
            { alt: "A dog sitting on a couch", src: "/assets/images/instagram/chivita-1.webp" },
            { alt: "A smiling girl holding a juice", src: "/assets/images/instagram/chivita-IG-2.webp" },
            { alt: "Two men posing with Chivita products", src: "/assets/images/instagram/chivita-IG-3.webp" },
            { alt: "Two puppies sitting on a couch", src: "/assets/images/instagram/chivita-IG-4.webp" },
          ].map(({ alt, src }, index) => (
            <article key={index + 4} className={styles.marqueeItem}>
              <Image src={src} alt={alt} width={500} height={500} quality={80} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
