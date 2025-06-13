"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Define the props for the map component
interface LiveMapProps {
  vehicles: {
    id: string;
    name: string;
    driver: string;
    lat: number;
    lng: number;
    speed: number;
    status: string;
  }[];
}

// Fix for default Leaflet icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Set the default map center to Jakarta, Indonesia
const defaultCenter: L.LatLngExpression = [-6.2088, 106.8456];

export function LiveMap({ vehicles }: LiveMapProps) {
  return (
    <MapContainer center={defaultCenter} zoom={12} style={{ height: '450px', width: '100%', borderRadius: '0.5rem' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {vehicles.map(vehicle => (
        <Marker key={vehicle.id} position={[vehicle.lat, vehicle.lng]}>
          <Popup>
            <div className="p-1">
              <h4 className="font-bold">{vehicle.id} - {vehicle.name}</h4>
              <p className="text-sm">Driver: {vehicle.driver}</p>
              <p className="text-sm">Speed: {vehicle.speed} mph</p>
              <p className="text-sm">Status: {vehicle.status}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}