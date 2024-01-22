import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

mapboxgl.accessToken =
	"";

const Mapbox = () => {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(-84.518641);
	const [lat, setLat] = useState(39.13427);
	const [zoom, setZoom] = useState(12);
	// const [geojson, setGeojson] = useState([]);
	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});
		// Roombae part
		// map.current.on("load", () => {
		// 	const style = [
		// 		{
		// 			id: "directions-route-line-alt",
		// 			type: "line",
		// 			source: "directions",
		// 			layout: {
		// 				"line-cap": "round",
		// 				"line-join": "round",
		// 			},
		// 			paint: {
		// 				"line-color": "#bbb",
		// 				"line-width": 4,
		// 			},
		// 			filter: [
		// 				"all",
		// 				["in", "$type", "LineString"],
		// 				["in", "route", "alternate"],
		// 			],
		// 		},
		// 		{
		// 			id: "directions-route-line-casing",
		// 			type: "line",
		// 			source: "directions",
		// 			layout: {
		// 				"line-cap": "round",
		// 				"line-join": "round",
		// 			},
		// 			paint: {
		// 				"line-color": "#2d5f99",
		// 				"line-width": 12,
		// 			},
		// 			filter: [
		// 				"all",
		// 				["in", "$type", "LineString"],
		// 				["in", "route", "selected"],
		// 			],
		// 		},
		// 		{
		// 			id: "directions-route-line",
		// 			type: "line",
		// 			source: "directions",
		// 			layout: {
		// 				"line-cap": "butt",
		// 				"line-join": "round",
		// 			},
		// 			paint: {
		// 				"line-color": {
		// 					property: "congestion",
		// 					type: "categorical",
		// 					default: "#4882c5",
		// 					stops: [
		// 						["unknown", "#4882c5"],
		// 						["low", "#4882c5"],
		// 						["moderate", "#f09a46"],
		// 						["heavy", "#e34341"],
		// 						["severe", "#8b2342"],
		// 					],
		// 				},
		// 				"line-width": 7,
		// 			},
		// 			filter: [
		// 				"all",
		// 				["in", "$type", "LineString"],
		// 				["in", "route", "selected"],
		// 			],
		// 		},
		// 		{
		// 			id: "directions-hover-point-casing",
		// 			type: "circle",
		// 			source: "directions",
		// 			paint: {
		// 				"circle-radius": 8,
		// 				"circle-color": "#fff",
		// 			},
		// 			filter: ["all", ["in", "$type", "Point"], ["in", "id", "hover"]],
		// 		},
		// 		{
		// 			id: "directions-hover-point",
		// 			type: "circle",
		// 			source: "directions",
		// 			paint: {
		// 				"circle-radius": 6,
		// 				"circle-color": "#3bb2d0",
		// 			},
		// 			filter: ["all", ["in", "$type", "Point"], ["in", "id", "hover"]],
		// 		},
		// 		{
		// 			id: "directions-waypoint-point-casing",
		// 			type: "circle",
		// 			source: "directions",
		// 			paint: {
		// 				"circle-radius": 8,
		// 				"circle-color": "#fff",
		// 			},
		// 			filter: ["all", ["in", "$type", "Point"], ["in", "id", "waypoint"]],
		// 		},
		// 		{
		// 			id: "directions-waypoint-point",
		// 			type: "circle",
		// 			source: "directions",
		// 			paint: {
		// 				"circle-radius": 6,
		// 				"circle-color": "#8a8bc9",
		// 			},
		// 			filter: ["all", ["in", "$type", "Point"], ["in", "id", "waypoint"]],
		// 		},
		// 		{
		// 			id: "directions-origin-point",
		// 			type: "circle",
		// 			source: "directions",
		// 			paint: {
		// 				"circle-radius": 18,
		// 				"circle-color": "#3bb2d0",
		// 			},
		// 			filter: [
		// 				"all",
		// 				["in", "$type", "Point"],
		// 				["in", "marker-symbol", "A"],
		// 			],
		// 		},
		// 		{
		// 			id: "directions-origin-label",
		// 			type: "symbol",
		// 			source: "directions",
		// 			layout: {
		// 				"text-field": "Unit",
		// 				"text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
		// 				"text-size": 12,
		// 			},
		// 			paint: {
		// 				"text-color": "#fff",
		// 			},
		// 			filter: [
		// 				"all",
		// 				["in", "$type", "Point"],
		// 				["in", "marker-symbol", "A"],
		// 			],
		// 		},
		// 		{
		// 			id: "directions-destination-point",
		// 			type: "circle",
		// 			source: "directions",
		// 			paint: {
		// 				"circle-radius": 18,
		// 				"circle-color": "#8a8bc9",
		// 			},
		// 			filter: [
		// 				"all",
		// 				["in", "$type", "Point"],
		// 				["in", "marker-symbol", "B"],
		// 			],
		// 		},
		// 		{
		// 			id: "directions-destination-label",
		// 			type: "symbol",
		// 			source: "directions",
		// 			layout: {
		// 				"text-field": "NEU",
		// 				"text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
		// 				"text-size": 12,
		// 			},
		// 			paint: {
		// 				"text-color": "#fff",
		// 			},
		// 			filter: [
		// 				"all",
		// 				["in", "$type", "Point"],
		// 				["in", "marker-symbol", "B"],
		// 			],
		// 		},
		// 	];
		// });
		const directions = new MapboxDirections({
			accessToken:
				"",
			unit: "metric",
			profile: "mapbox/cycling",
			controls: {
				inputs: false,
				instructions: false,
			},
			alternatives: false,
		});
		map.current.addControl(directions, "top-left");
		directions.setOrigin([-84.518641, 39.13427]);
		directions.setDestination([-84.512023, 39.13427]);

		// map.current.on("move", () => {
		// 	setLng(map.current.getCenter().lng.toFixed(4));
		// 	setLat(map.current.getCenter().lat.toFixed(4));
		// 	setZoom(map.current.getZoom().toFixed(2));
		// });

		const fetchData = async () => {
			// try {
			// 	const url = `https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=`;
			// 	const headers = {
			// 		"Content-Type": "application/json",
			// 		Accept: "application/json",
			// 	};
			// 	const response = await fetch(url, { headers });
			// 	const json = await response.json();
			// 	// setGeojson(json);
			// 	console.log(json);
			// } catch (error) {
			// 	console.log("error", error);
			// }
		};
		fetchData();
	}, []);

	return <div ref={mapContainer} className="map-container" />;
};
export default Mapbox;
