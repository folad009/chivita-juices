import React from 'react'

const CoreValues = () => {
  return (
    <section className="py-32 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('/assets/images/pattern-cut-fruit-berries.png')] before:opacity-10 dark:before:bg-[url('/assets/images/pattern-cut-fruit-berries.png')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
  <div className="container">
    <div className="flex flex-col items-center gap-6">
      <div
        style={{ fontFamily: "Bebas Neue, sans-serif" }}
        className="inline-flex items-center rounded-full border px-20 py-2.5 text-[25px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
        OUR CORE VALUES
      </div>
      <h2 className="mb-2 text-center text-3xl font-semibold lg:text-4xl text-[#e30417]" style={{ fontFamily: "Bebas Neue, sans-serif" }}>
        We are leaders in the Fruit Juice Category in Nigeria.
      </h2>
      <div className="mt-6 flex flex-col gap-6 lg:flex-row max-w-6xl">
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between gap-5 lg:w-1/3">
          <div className="px-5 py-5 text-lg lg:text-lg" style={{ fontFamily: "Azo Sans, sans-serif" }}>
            Rich in dietary fiber, and other nutrients, fruits and vegetables support the optimum functioning of body organs and processes.
          </div>

          <div className="px-5 py-5 text-lg lg:text-lg" style={{ fontFamily: "Azo Sans, sans-serif" }}>
            Fruits keep the skin hydrated, supple, and radiant by nourishing it with essential fluids, vitamins, minerals, and antioxidants.
          </div>

        </div>
        <div className="lg:w-1/3">
          <img src="/assets/images/fruits-1.jpg" alt=""
            className="rounded-md object-cover pt-10" />
        </div>
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col justify-between gap-5 lg:w-1/3">
          <div className="px-5 py-5 text-lg lg:text-lg" style={{ fontFamily: "Azo Sans, sans-serif" }}>
            Because fruits contain the right nutrients your body needs, they are your perfect partner in your goal to achieving optimum health and well-being.
          </div>

          <div className="px-5 py-5 text-lg lg:text-lg" style={{ fontFamily: "Azo Sans, sans-serif" }}>
            The daily consumption of fresh fruits and vegetables could help lower the risk of some chronic diseases.
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default CoreValues