"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

const InstagramEmbed = () => {
    const [instagramFeed, setInstagramFeed] = useState(null);
    const [after, setAfter] = useState(null);
    const [error, setError] = useState(null);

    const fetchFeed = async (after = null) => {
        try {
            let url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type,timestamp,permalink&access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN}`;
            if (after) {
                url += `&after=${after}`;
            }
            const data = await fetch(url);

            if (!data.ok) {
                throw new Error('Failed to fetch Instagram feed');
            }

            const feed = await data.json();
            console.log(feed);

            setInstagramFeed(feed);
            setAfter(feed.paging?.cursors?.after || null);
        } catch (err) {
            console.error('Error fetching Instagram feed:', err.message);
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchFeed();
    }, []);

    return (
        <>
            {error && <p className='text-red-500'>{error}</p>}
            {instagramFeed && (
                <section className='w-full flex flex-col justify-center items-center mb-10'>
                    <Swiper
                        navigation={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={10}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className='w-full'
                    >
                        {instagramFeed.data.map((post) => (
                            <SwiperSlide key={post.id} className='flex justify-center'>
                                <Link
                                    href={post.permalink}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='relative block w-full h-[300px]'
                                >
                                    {post.media_type === 'VIDEO' ? (
                                        <video
                                            src={post.media_url}
                                            controls
                                            className='object-cover w-full h-full'
                                        />
                                    ) : (
                                        <Image
                                            src={post.media_url}
                                            alt={post.caption ?? ''}
                                            className='object-cover w-full h-full'
                                            width={400}
                                            height={400}
                                            style={{ maxWidth: '100%', height: '100%' }}
                                        />
                                    )}
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            )}
        </>
    );
};

export default InstagramEmbed;
