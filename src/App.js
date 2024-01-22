import "./App.css";
import Mapbox from "./components/map";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

function App() {
	return (
		<div className="">
			<Mapbox />
		</div>
	);
}

export default App;
