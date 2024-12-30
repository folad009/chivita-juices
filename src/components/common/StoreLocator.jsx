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
    { name: "Abuja Shoppe", address: "Surple Cube Mall, 110 3rd Ave, Gwarinpa Estate, Abuja" },
    { name: "Ago Shoppe", address: "116, 118 Ago Palace Way, Oshodi-Isolo, Lagos, Lagos" },
    { name: "Ajah Shoppe", address: "22 Aiyetoro St, Ajah, Lekki, Lagos" },
    { name: "Ajao Shoppe", address: "5 Alaba Oniru Ave, Isolo, Ajao Estate, Lagos" },
    { name: "Apapa Shoppe", address: "1 Kofo Abayomi Ave, Apapa Quays, Lagos" },
    { name: "Festac Shoppe", address: "12 2nd Ave, Festac Town, Lagos" },
    { name: "Gbagada Shoppe", address: "50 Diya St, Gbagada, Lagos" },
    { name: "Ikeja Shoppe", address: "23, Opebi Road, Pentagon Plaza Ikeja, Lagos" },
    { name: "Ikorodu Shoppe", address: "70 Ayongbure St, Ikorodu, Lagos" },
    { name: "Ikoyi Shoppe", address: "97 Awolowo Rd, Ikoyi, Lagos" },
    { name: "Lekki Shoppe", address: "23 Admiralty Wy, Lekki Phase I, Lagos" },
    { name: "Ogudu Shoppe", address: "118 Ogudu Rd, Ogudu, Lagos" },
    { name: "Surulere Shoppe", address: "80 Adeniran Ogunsanya St, Surulere, Lagos" },
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
      const address = outlet.address;

      // Use Geocoder to get coordinates for the address
      geocoderRef.current.geocode({ address }, (results, status) => {
        if (status === "OK" && results[0]) {
          const position = results[0].geometry.location;

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

          // Display the address in an info window
          const infoWindow = new window.google.maps.InfoWindow({
            content: `<div><strong>${selectedName}</strong><br/>${address}</div>`,
          });
          infoWindow.open(mapInstanceRef.current, markerRef.current);
        } else {
          setErrorMsg("Unable to fetch the location for the selected address.");
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
