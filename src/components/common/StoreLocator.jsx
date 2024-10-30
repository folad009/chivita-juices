"use client"
import React, { useEffect, useRef, useState } from 'react';

const StoreLocator = () => {
    const [searchQuery, setSearchQuery] = useState(''); 
    const [errorMsg, setErrorMsg] = useState(''); 
    const mapRef = useRef(null); 
    const geocoderRef = useRef(null); 
    const mapInstanceRef = useRef(null); 
    const [tabSelected, setTabSelected] = useState({
      currentTab: 1,
      noTabs: 2,
    })

    const wrapperRef = useRef(null)

    const handleKeyDown = e => {
      if (e.keyCode === 39) {
        if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
          if (
            tabSelected.currentTab >= 1 &&
            tabSelected.currentTab < tabSelected.noTabs
          ) {
            setTabSelected({
              ...tabSelected,
              currentTab: tabSelected.currentTab + 1,
            })
          } else {
            setTabSelected({
              ...tabSelected,
              currentTab: 1,
            })
          }
        }
      }
  
      if (e.keyCode === 37) {
        if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
          if (
            tabSelected.currentTab > 1 &&
            tabSelected.currentTab <= tabSelected.noTabs
          ) {
            setTabSelected({
              ...tabSelected,
              currentTab: tabSelected.currentTab - 1,
            })
          } else {
            setTabSelected({
              ...tabSelected,
              currentTab: tabSelected.noTabs,
            })
          }
        }
      }
    }
  
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
  
    // Initialize the map and add a default marker (e.g., New York)
    useEffect(() => {
      const initMap = () => {
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 6, // Adjust zoom level
          center: { lat: 0, lng: 0 }, // Center at world initially
        });
        mapInstanceRef.current = map; // Store the map instance
  
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

      window.addEventListener("keydown", handleKeyDown)
      return () => {
        window.removeEventListener("keydown", handleKeyDown)
     }
    }, []);
  
    // Function to handle outlet search and show it on the map
    const handleSearch = () => {
      setErrorMsg(''); // Clear any previous errors
  
      const outlet = outlets.find(o => o.name.toLowerCase() === searchQuery.toLowerCase());
  
      if (outlet) {
        // If outlet is found, center map to outlet's location and add a marker
        const position = { lat: outlet.lat, lng: outlet.lng };
        mapInstanceRef.current.setCenter(position);
        mapInstanceRef.current.setZoom(16); // Zoom in to the location
  
        new window.google.maps.Marker({
          position,
          map: mapInstanceRef.current
        });
      } else {
        setErrorMsg('Outlet not found!'); // Show error if outlet not found
      }
    };
  
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <section className='overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2'>
            <div className='p-8 md:p-12 lg:px-16 lg:py-10'>
                <div className='mx-auto max-w-xl text-left'>
                    <div className="mt-4 md:mt-8">
                        <label htmlFor="search" className='text-xl font-bold text-gray-900 md:text-xl' style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Search Outlet</label>
                        <input
                        id="search"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Enter retail store name"
                        className='my-2 w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400'
                        />
                        <button type="button" onClick={handleSearch} className='my-2 inline-block rounded bg-[#e30417] px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'>LOCATE STORE</button>
                        <p id="error-msg">{errorMsg}</p>
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900 md:text-3xl mt-5' style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                        Chivita Shoppe Retail Outlets
                    </h2>
                    <div className="max-w-full" aria-multiselectable="false">
                      <ul className="flex items-center gap-2" role="tablist" ref={wrapperRef}>
                        <li className="" role="presentation">
                          <button
                            className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                              tabSelected.currentTab === 1
                                ? "bg-red-500 text-white hover:bg-red-600 focus:bg-red-700 disabled:bg-red-300"
                                : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-red-50 hover:stroke-red-500 hover:text-red-500 focus:bg-red-50 focus:stroke-red-600 focus:text-red-600 disabled:text-red-300"
                            }`}
                            id="tab-label-1e"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="1"
                            tabindex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
                            aria-controls="tab-panel-1e"
                            aria-selected={`${
                              tabSelected.currentTab === 1 ? "true" : "false"
                            }`}
                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
                          >
                            <span>Lagos</span>
                          </button>
                        </li>
                        <li className="" role="presentation">
                          <button
                            className={`inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${
                              tabSelected.currentTab === 2
                                ? "bg-red-500 text-white hover:bg-red-600 focus:bg-red-700 disabled:bg-red-300"
                                : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-red-50 hover:stroke-red-500 hover:text-red-500 focus:bg-red-50 focus:stroke-red-600 focus:text-red-600 disabled:text-red-300"
                            }`}
                            id="tab-label-2e"
                            role="tab"
                            aria-setsize="3"
                            aria-posinset="2"
                            tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
                            aria-controls="tab-panel-2e"
                            aria-selected={`${
                              tabSelected.currentTab === 2 ? "true" : "false"
                            }`}
                            onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
                          >
                            <span>Abuja</span>
                          </button>
                        </li>
                      </ul>
                      <div className="">
                        <div
                          className={`px-6 py-4 ${
                            tabSelected.currentTab === 1 ? "" : "hidden"
                          }`}
                          id="tab-panel-1e"
                          aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
                          role="tabpanel"
                          aria-labelledby="tab-label-1e"
                          tabindex="-1"
                        >
                          <p className='hidden font-bold text-gray-800 md:mt-4 md:block text-[20px] tracking-wider' style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                            Gbagada Retail Store, Ikoyi Retail Store, Surulere Retail Store, Surulere Retail Store,
                            Festac Retail Store, Ajah Retail Store, Lekki Retail Store, Ogudu Retail Store, Ikeja Retail Store,
                            Apapa Retail Store, Ago Retail Store, Ikorodu Retail Store, Ajao Retail Store
                          </p>
                        </div>
                        <div
                          className={`px-6 py-4 ${
                            tabSelected.currentTab === 2 ? "" : "hidden"
                          }`}
                          id="tab-panel-2e"
                          aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
                          role="tabpanel"
                          aria-labelledby="tab-label-2e"
                          tabindex="-1"
                        >
                           <p className='hidden font-bold text-gray-800 md:mt-4 md:block text-[20px] tracking-wider' style={{ fontFamily: "Bebas Neue, sans-serif" }}>
                            Abuja Retail Store
                          </p>
                        </div>
                      </div>
                    </div>
                   
                    
                </div>
            </div>
            <div ref={mapRef} style={{ height: '800px', width: '100%' }}></div>
        </section>
      </form>
    );
  };
  
  export default StoreLocator;