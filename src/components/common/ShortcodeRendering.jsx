"use client"

import React, { useEffect, useState } from 'react';

const ShortcodeComponent = () => {
  const [shortcodeContent, setShortcodeContent] = useState('');

  useEffect(() => {
    // Fetch shortcode content from WordPress REST API
    const fetchShortcode = async () => {
      const response = await fetch('https://a40.355.mytemp.website/chivita-juices-backend/wp-json/custom/v1/shortcode/?shortcode=[instagram-feed%20feed=1]');
      const data = await response.json();
      if (response.ok) {
        setShortcodeContent(data); // Set the shortcode content to the state
      } else {
        console.error('Failed to load shortcode');
      }
    };

    fetchShortcode();
  }, []);

  return (
    <div>
      <h1>Shortcode Content</h1>
      {/* Render the fetched shortcode content using dangerouslySetInnerHTML */}
      <div dangerouslySetInnerHTML={{ __html: shortcodeContent }} />
    </div>
  );
};

export default ShortcodeComponent;

