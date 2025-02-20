import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Box } from '@mui/material';

const GoogleMap = () => {
  return (
    <>
    <Box sx={{
      width: '100%',
      height: '400px',
    }}>
   <MapContainer center={[30.6387, 76.8233]} zoom={13} scrollWheelZoom={true}
   style={{ height: '100%', width: '100%', borderRadius: "20px" }}
   >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[30.6387, 76.8233]}>
    <Popup>
      <span style={{color: "brown", fontWeight: "bold"}}>V Recruiter, Sushma Infinium, <br /> Zirakpur, Tri City Chandigarh.</span>
    </Popup>
  </Marker>
</MapContainer>
</Box>
    </>
  )
}

export default GoogleMap