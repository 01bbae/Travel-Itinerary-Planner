import './App.css';
import Map from './Map';
import { useState,useEffect } from 'react';
import { GoogleMapProvider, userGoogleMap } from '@ubilabs/google-maps-react-hooks';
// import { GoogleMap, userLoadScript, Marker, useLoadScript } from '@react-google-maps/api'


function App() {

  const mapOptions = {
    zoom: 12,
    center: {
      lat: 33.79,
      lng: -117.85
    }
  }


  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  // });

  // if(!isLoaded) {
  //     return <div> Loading... </div>
  // }

  const [mapContainer, setMapContainer] = useState(null);


  
  return (
    <GoogleMapProvider googleMapsAPIKey= {process.env.REACT_APP_GOOGLE_MAPS_API_KEY} 
    options = {mapOptions}
    mapContainer={mapContainer}>
      <div ref={(dom) => setMapContainer(dom)} style={{height: "100vh"}} />
    </GoogleMapProvider>
  );
}

export default App;
