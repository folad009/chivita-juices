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
    { name: "Abuja Retail Store", lat: 9.063593498830759, lng: 7.394575665829518 },
    { name: "Ago Retail Store", lat: 6.502373949739234, lng: 3.30457123696112 },
    { name: "Ajah Retail Store", lat: 6.4658830418171425, lng: 3.5598206523044253 },
    { name: "Ajao Retail Store", lat: 6.543057890484462, lng: 3.3254382946333965 },
    { name: "Apapa Retail Store", lat: 6.445556836009527, lng: 3.371603109976025 },
    { name: "Festac Retail Store", lat: 6.462573564124769, lng: 3.2874732792888284 },
    { name: "Gbagada Retail Store", lat: 6.555264295628385, lng: 3.3894335657975816 },
    { name: "Ikeja Retail Store", lat: 6.5952815501416895, lng: 3.3561054927824805 },
    { name: "Ikorodu Retail Store", lat: 6.6202633441640355, lng: 3.5104383087167923 },
    { name: "Ikoyi Retail Store", lat: 6.4432670424316, lng: 3.420948894632309 },
    { name: "Lekki Retail Store", lat: 6.448907669493031, lng: 3.4735432932044863 },
    { name: "Ogudu Retail Store", lat: 6.57657905367744, lng: 3.390844485391692 },
    { name: "Surulere Retail Store", lat: 6.4926513940454225, lng: 3.3565408946328454 },
  ];


  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 6,
        center: { lat: 6.5244, lng: 3.3792 },
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
          Chivita|Hollandia Shoppe Retail Stores Locator
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
