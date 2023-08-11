import './App.css'
import { Card, Drawer, Button } from 'antd'
import Map from './pages/Map'
import PlacesAutocomplete from 'react-places-autocomplete'
import { handleSuggestion } from './pages/AutoComplete/AutoComplete.logic'
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'
import { useAppDispatch, useAppSelector } from './hooks/ReduxHook'
import {
  setSuggestion,
  setAddress,
  setListPlaces,
  setCoord,
  setShowHistory,
} from './pages/AutoComplete/AutoComplete.reducer'

function App() {
  const state = useAppSelector((state) => state.autoComplete)
  const dispatch = useAppDispatch()

  const handleSelect = (value, placeId, s) => {
    geocodeByPlaceId(placeId).then((res) => {
      dispatch(setAddress(`${s.formattedSuggestion.mainText}, ${res[0].formatted_address}`))
      dispatch(
        setListPlaces({
          address: `${s.formattedSuggestion.mainText}, ${res[0].formatted_address})`,
          location: { lat: res[0].geometry.location.lat(), lng: res[0].geometry.location.lng() },
        })
      )
    })
    dispatch(setSuggestion(value))
    geocodeByAddress(value)
      .then((results) => {
        return getLatLng(results[0])
      })
      .then((latLng) => dispatch(setCoord(latLng)))
      .catch((error) => console.error('Error', error))
    dispatch(setSuggestion(''))
  }

  const handleChange = (value) => {
    dispatch(setSuggestion(value))
  }

  return (
    <Card
      style={{
        width: 400,
        color: 'black',
      }}
    >
      <h3>Map</h3>
      <Map lat={state.coord.lat} lng={state.coord.lng} />
      <div
        style={{
          textAlign: 'center',
          fontSize: 'large',
          fontWeight: 'bold',
          marginTop: '1rem',
        }}
      >
        Current Place
      </div>
      <div
        style={{
          margin: '1rem',
        }}
      >
        {state.address}
      </div>
      <PlacesAutocomplete value={state.suggestion} onChange={handleChange} onSelect={handleSelect}>
        {handleSuggestion()}
      </PlacesAutocomplete>
      <Button onClick={() => dispatch(setShowHistory(true))}>Find History</Button>
      <Drawer
        title={'History'}
        placement='right'
        onClose={() => dispatch(setShowHistory(false))}
        open={state.showHistory}
      >
        {state.listPlaces?.map((item, index) => {
          return (
            <div
              style={{
                margin: '1rem',
                color: 'black',
                cursor: 'pointer',
              }}
              key={index}
              onClick={() => {
                dispatch(setAddress(item.address))
                dispatch(setCoord(item.location))
              }}
            >
              {index + 1}. {item.address}
            </div>
          )
        })}
      </Drawer>
    </Card>
  )
}

export default App
