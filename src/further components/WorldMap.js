import React from 'react'
import { Map, TileLayer } from 'react-leaflet'

export default function WorldMap() {
    return (
        <Map className='map' center={[0,20]} zoom={1.5}>
            <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
        </Map>
    )
}

