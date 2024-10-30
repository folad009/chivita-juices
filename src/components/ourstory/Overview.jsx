"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
    const OverviewCard = [
        {
            imgSrc: "https://picsum.photos/id/118/800/600",
            title: "Our Brand Promise ",
            description:
              "We meet the needs of everyone looking for a piece of undiluted fruit juice nourishment to empower them for Healthy Living.",
        },
        {
            imgSrc: "https://picsum.photos/id/239/800/600",
            title: "Our Consumers ",
            description:
              "We offer the goodness of fruits, healthy nutrition, and uncompromising quality,  to everyone who seeks a connection to nature from a trusted partner.",
        },
        {
            imgSrc: "https://picsum.photos/id/237/800/600",
            title: "Our Category",
            description:
              "We are leaders of the fruit juice category in Nigeria. We lead the market in innovation, product quality, product range, transparency, honesty, and care for our consumers. We are trailblazers and continually demonstrate excellence in all we do.",
        },
    ];

    useEffect(() => {
        const cardsElements = document.querySelectorAll('.card');
        gsap.from(cardsElements, {
          opacity: 0,
          y: 50,
          stagger: 0.7,
          scrollTrigger: {
            trigger: cardsElements,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
    }, []);

    return (
        <section className="container max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OverviewCard.map((card, index) => (
                <div key={index} className="card flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 mb-4">
                    {/*  <!-- Image --> */}
                
                    {/*  <!-- Body--> */}
                    <div className="flex-1 p-6 sm:mx-6 sm:px-0">
                        <header className="flex gap-4 mb-1">
                            <div>
                                <h3 className="text-[25px] font-bold text-[#e30417]" style={{ fontFamily: "Bebas Neue, sans-serif" }}>{card.title}</h3>
                            </div>
                        </header>
                        <p className='text-gray-800' style={{ fontFamily: "Azo Sans, sans-serif" }}>{card.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Overview;
