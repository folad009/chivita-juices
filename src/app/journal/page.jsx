import Link from 'next/link';
import React from 'react';

const Journal = () => {
  const posts = [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
      authorImageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.95&w=512&h=512&q=80",
      title: "Enjoying the beach life while on a vacation",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Adam Cuppy",
      authorProfile: "Vlogger",
      url: "https://reddit.com",
      featured: true,
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      title: "Getting the most out of your vacation",
      authorName: "Aaron Patterson",
      url: "https://reddit.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      title: "Choosing the perfect Safaris in Africa",
      authorName: "Sam Phipphen",
      url: "https://reddit.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      title: "Hiking during the monsoon in Asia",
      authorName: "Tony Hawk",
      url: "https://timerse.com",
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80",
      title: "Must carry items while travelling to Thailand",
      authorName: "Himali Turn",
      url: "https://timerse.com",
    },
  ];

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 lg:flex lg:space-x-6">
        {/* Main Content */}
        <div className="lg:w-2/3 space-y-6">
          {/* Featured Post */}
          {posts
            .filter((post) => post.featured)
            .map((post, index) => (
              <a
                key={index}
                rel="noopener noreferrer"
                href={post.url}
                className="block gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
              >
                <img
                  src={post.postImageSrc}
                  alt=""
                  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                />
                <div className="p-6 space-y-2 lg:col-span-5">
                  <h3 className="text-2xl font-semibold sm:text-2xl group-hover:underline group-focus:underline">
                    {post.title}
                  </h3>
                  <p>{post.description}</p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.authorImageSrc}
                      alt={post.authorName}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold">{post.authorName}</p>
                      <p className="text-xs">{post.authorProfile}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}

          {/* Remaining Posts */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {posts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <a
                  key={index}
                  rel="noopener noreferrer"
                  href={post.url}
                  className="block max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                >
                  <img
                    role="presentation"
                    className="object-cover w-full rounded h-44 dark:bg-gray-500"
                    src={post.postImageSrc}
                    alt=""
                  />
                  <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600">{post.authorName}</p>
                  </div>
                </a>
              ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-6 sticky top-0">
          
          {/* Categories */}
          <div className="p-6 bg-gray-50 rounded-lg dark:bg-gray-800">
            <h2 className="text-lg font-semibold">Categories</h2>
            <ul className="space-y-2 mt-4">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Travel
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Adventure
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Photography
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="p-6 bg-gray-50 rounded-lg dark:bg-gray-800">
            <h2 className="text-lg font-semibold">Recent Posts</h2>
            <ul className="space-y-4 mt-4">
              {posts.slice(0, 3).map((post, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <img
                    src={post.postImageSrc}
                    alt=""
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold">
                      <a href={post.url} className="hover:underline">
                        {post.title}
                      </a>
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      By {post.authorName}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Journal;
