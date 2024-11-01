"use client"
import React, { useEffect, useRef, useState } from 'react';

const StoreLocator = () => {
    const [selectedStore, setSelectedStore] = useState(''); 
    const [errorMsg, setErrorMsg] = useState(''); 
    const mapRef = useRef(null); 
    const mapInstanceRef = useRef(null); 
    const geocoderRef = useRef(null); 

    // Define 13 outlets with their names and coordinates
    const outlets = [
      { name: 'Gbagada Retail Store', lat: 6.5549552, lng: 3.3868694 },
      { name: 'Abuja Retail Store', lat: 9.1022755, lng: 7.4073023 },
      { name: 'Ikoyi Retail Store', lat: 6.4429792, lng: 3.418374 },
      { name: 'Surulere Retail Store', lat: 6.4924382, lng: 3.353966 },
      { name: 'Festac Retail Store', lat: 6.462299, lng: 3.2783391 },
      { name: 'Ajah Retail Store', lat: 6.4514589, lng: 3.5149542 },
      { name: 'Lekki Retail Store', lat: 6.4481851, lng: 3.4780503 },
      { name: 'Ogudu Retail Store', lat: 6.578830, lng: 3.387470 },
      { name: 'Ikeja Retail Store', lat: 6.5935606, lng: 3.3554485 },
      { name: 'Apapa Retail Store', lat: 6.4447801, lng: 3.3689611 },
      { name: 'Ago Retail Store', lat: 6.5021488, lng: 3.3020167 },
      { name: 'Ikorodu Retail Store', lat: 6.6152568, lng: 3.4406124 },
      { name: 'Ajao Retail Store', lat: 6.5428234, lng: 3.3228634 }
    ];

    useEffect(() => {
      const initMap = () => {
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 6, // Adjust zoom level
          center: { lat: 6.5244, lng: 3.3792 }, // Center at a default location
        });
        mapInstanceRef.current = map; 
        geocoderRef.current = new window.google.maps.Geocoder(); // Initialize Geocoder
      };

      const loadGoogleMapsScript = () => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAnEpnr_wimbmWRMv9l62R-5dEX8pQro1k&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = initMap;
      };

      loadGoogleMapsScript();
    }, []);
  
    // Function to handle dropdown selection and show selected store on the map
    const handleStoreSelect = (e) => {
      setErrorMsg('');
      const selectedName = e.target.value;
      setSelectedStore(selectedName);
      
      const outlet = outlets.find(o => o.name === selectedName);
      if (outlet) {
        const position = { lat: outlet.lat, lng: outlet.lng };
        mapInstanceRef.current.setCenter(position);
        mapInstanceRef.current.setZoom(16);

        new window.google.maps.Marker({
          position,
          map: mapInstanceRef.current
        });
      } else {
        setErrorMsg('Outlet not found!');
      }
    };

    return (
      <div style={{ height: '80vh', position: 'relative' }}>
        <div 
          style={{ 
            position: 'absolute', 
            top: '10%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            zIndex: 10, 
            backgroundColor: 'white', 
            padding: '15px', 
            borderRadius: '8px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)' 
          }}
        >
          <label htmlFor="storeSelect" className="text-xl font-bold text-[#e30417] text-center" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Chivita Retail Stores Locator</label>
          <select
            id="storeSelect"
            value={selectedStore}
            onChange={handleStoreSelect}
            className='mt-2 w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm focus:border-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400'
          >
            <option value="">Choose a store</option>
            {outlets.map(outlet => (
              <option key={outlet.name} value={outlet.name}>{outlet.name}</option>
            ))}
          </select>
          {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
        </div>
        <div ref={mapRef} style={{ height: '100%', width: '100%' }}></div>
      </div>
    );
};

export default StoreLocator;
