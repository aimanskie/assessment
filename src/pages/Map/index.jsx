import { GoogleMap, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px',
}

export default function Map({ lat, lng }) {
  const center = {
    lat: lat,
    lng: lng,
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16} options={{ disableDefaultUI: true }}>
      <Marker position={center} />
    </GoogleMap>
  )
}
