import React from "react";
import styles from "@/css/BrandValue.module.css";

const CoreValues = () => {
  return (
    <section className="py-32 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('/assets/images/pattern-cut-fruit-berries.png')] before:opacity-10 dark:before:bg-[url('/assets/images/pattern-cut-fruit-berries.png')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div>
        <div className="flex flex-col items-center gap-6">
          <h2
            className="mb-2 mx-5 text-center text-5xl font-semibold text-[#e30417]"
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
          >
            We are leaders in the Fruit Juice Category in Nigeria
          </h2>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row max-w-6xl">
            <div className="flex flex-col justify-between gap-14 lg:w-1/3">
              <div className={styles.card}>
                <div className={styles.content}>
                  <p
                    className={styles.para}
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                    Rich in dietary fiber, and other nutrients, fruits and
                    vegetables support the optimum functioning of body organs
                    and processes.
                  </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.content}>
                  <p
                    className={styles.para}
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                    Fruits keep the skin hydrated, supple, and radiant by
                    nourishing it with essential fluids, vitamins, minerals, and
                    antioxidants.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3">
              <img
                src="/assets/images/fruits-1.jpg"
                alt=""
                className="pt-14 pb-10 w-full"
              />
            </div>
            <div className="flex flex-col justify-between gap-14 lg:w-1/3">
              <div className={styles.card}>
                <div className={styles.content}>
                  <p
                    className={styles.para}
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                    Because fruits contain the right nutrients your body needs,
                    they are your perfect partner in your goal to achieving
                    optimum health and well-being.
                  </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.content}>
                  <p
                    className={styles.para}
                    style={{ fontFamily: "Azo Sans, sans-serif" }}
                  >
                    The daily consumption of fresh fruits and vegetables could
                    help lower the risk of some chronic diseases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
