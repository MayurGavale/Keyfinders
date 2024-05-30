import React from'react';
import './leaflet.css'; // Import Leaflet CSS from react-leaflet package
import { MapContainer, TileLayer } from'react-leaflet';
import './map.scss';
import Pin from '../pin/pin';

const Map = ({ items }) => {
  return (
    <div>
      <MapContainer center={[51.4297, -1.98269]} zoom={7} scrollWheelZoom={false} className='map'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items && items.map((item) => (
          <Pin item={item} key={item.id}/>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;