"use client";

import React, { useEffect, useRef, useState } from "react";

const StoreLocator = () => {
  const [selectedStore, setSelectedStore] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const geocoderRef = useRef(null);

  const outlets = [
    { name: "Abuja Shoppe", lat: 9.063593498830759, lng: 7.394575665829518 },
    { name: "Ago Shoppe", lat: 6.509313450511393, lng: 3.3056226707978653 }, 
    { name: "Ajah Shoppe", lat: 6.473238802311059, lng: 3.560485848037415 }, 
    { name: "Ajao Shoppe", lat: 6.547769189821159, lng: 3.3266649778098754 }, 
    { name: "Apapa Shoppe", lat: 6.452177285007954, lng: 3.3702136557549713 },
    { name: "Festac Shoppe", lat: 6.469566915472456, lng: 3.2885461707978725 },
    { name: "Gbagada Shoppe", lat: 6.56279994111109, lng: 3.389599695424405 },
    { name: "Ikeja Shoppe", lat: 6.59961115175215, lng: 3.3558474124489415 },
    { name: "Ikorodu Shoppe", lat: 6.627254821477074, lng: 3.509752156995575 }, 
    { name: "Ikoyi Shoppe", lat: 6.450502639432522, lng: 3.4216387480374055 }, 
    { name: "Lekki Shoppe", lat: 6.455616363711553, lng: 3.474974270797866 },
    { name: "Ogudu Shoppe", lat: 6.582377438592391, lng: 3.390630402516488 }, 
    { name: "Surulere Shoppe", lat: 6.49788044339135, lng: 3.3565240773688734 },
  ];


  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 6,
        center: { lat: 6.59961115175215, lng: 3.3558474124489415 },
      });
      mapInstanceRef.current = map;
      geocoderRef.current = new window.google.maps.Geocoder(); // Initialize Geocoder
    };

    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCi0pHU-BvjoyTA0NVKCPH6Ad3GOkZSl0Q&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      script.onload = initMap;
    };

    loadGoogleMapsScript();
  }, []);

  const handleStoreSelect = (e) => {
    setErrorMsg("");
    const selectedName = e.target.value;
    setSelectedStore(selectedName);

    const outlet = outlets.find((o) => o.name === selectedName);
    if (outlet) {
      const position = { lat: outlet.lat, lng: outlet.lng };

      // Update the map
      mapInstanceRef.current.setCenter(position);
      mapInstanceRef.current.setZoom(16);

      // Remove the previous marker if it exists
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }

      // Add a new marker
      markerRef.current = new window.google.maps.Marker({
        position,
        map: mapInstanceRef.current,
      });

      // Fetch and display the address
      geocoderRef.current.geocode({ location: position }, (results, status) => {
        if (status === "OK" && results[0]) {
          const infoWindow = new window.google.maps.InfoWindow({
            content: `<div><strong>${selectedName}</strong><br/>${results[0].formatted_address}</div>`,
          });
          infoWindow.open(mapInstanceRef.current, markerRef.current);
        } else {
          setErrorMsg("Unable to fetch the address for the selected location.");
        }
      });
    } else {
      setErrorMsg("Outlet not found!");
    }
  };

  return (
    <div style={{ height: "80vh", position: "relative", marginTop: '20px' }}>
      {/* Dropdown */}
      <div
        style={{
          position: "absolute",
          top: "12%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          backgroundColor: "white",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
        }}
      >
        <label
          htmlFor="storeSelect"
          className="text-xl font-bold text-[#e30417] font-sans"
        >
          Chivita|Hollandia Shoppe Locator
        </label>
        <select
          id="storeSelect"
          value={selectedStore}
          onChange={handleStoreSelect}
          className="mt-2 w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm focus:border-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          <option value="">Choose a store</option>
          {outlets.map((outlet) => (
            <option key={outlet.name} value={outlet.name}>
              {outlet.name}
            </option>
          ))}
        </select>
        {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
      </div>

      {/* Map */}
      <div ref={mapRef} style={{ height: "100%", width: "100%" }}></div>
    </div>
  );
};

export default StoreLocator;
