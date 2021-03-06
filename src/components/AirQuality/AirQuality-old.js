import React, {useEffect, useRef, useState} from 'react'
import mapboxgl from 'mapbox-gl'
import './AirQuality.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2tyeXBueWtvdiIsImEiOiJja2ZsYTdkbzEwZGdqMnFwc2dyMHBnZTl0In0.XQ6qUunUpxoUThIMrGLbPQ';

const AirQuality = () => {
	const mapContainer = useRef(null);
	const [locationInfo] = useState({
		lng: 31,
		lat: 48.55,
		zoom: 5,
		scrollZoom: false
	});

	
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainer.current,
			style: 'mapbox://styles/mapbox/outdoors-v11',
			center: [locationInfo.lng, locationInfo.lat],
			zoom: locationInfo.zoom,
			scrollZoom: locationInfo.scrollZoom
		});

		map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

		// markers 
		var marker = new mapboxgl.Marker({ color: 'red' })
		.setLngLat([37.55, 47.15])
		.addTo(map);

		marker = new mapboxgl.Marker( { color: 'red' })
		.setLngLat([37.8, 48.05])
		.addTo(map);

		marker = new mapboxgl.Marker({ color: 'green' })
		.setLngLat([36.25, 50])
		.addTo(map);

		marker = new mapboxgl.Marker({ color: 'green' })
		.setLngLat([30.51, 50.47])
		.addTo(map);

		marker = new mapboxgl.Marker({ color: 'gold' })
		.setLngLat([24.7, 48.95])
		.addTo(map);

		marker = new mapboxgl.Marker({ color: 'green' })
		.setLngLat([30.7, 46.5])
		.addTo(map);

		marker = new mapboxgl.Marker({ color: 'green' })
		.setLngLat([31.98, 47])
		.addTo(map);

		marker = new mapboxgl.Marker({ color: 'gold' })
		.setLngLat([35.35, 46.9])
		.addTo(map);
	
	}, [])
	render() {
		return (
			<section className={'air-q container'} id="quality">
				<h2 className="air-q-title">Индекс качества воздуха в режиме реального времени</h2>
				
				<div className="air-q-map" ref={mapContainer}/>
				
				<p className="air-q-text">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
			</section>
		);
	}
}

export default AirQuality;