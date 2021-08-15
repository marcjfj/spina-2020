import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState, useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFyY2pmaiIsImEiOiJjandwc3NxZHAwdnJkNDlta3R3czBqNWF5In0.ovwj4cjXmJCb9-VTIMEUFQ";

export default function Map({ address }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-121.73566810387916);
  const [lat, setLat] = useState(37.20075291625134);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/marcjfj/cks9qo0tn0cg917qu8lsv1945",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.scrollZoom.disable();
    // Create a default Marker and add it to the map.
    const marker1 = new mapboxgl.Marker({ color: "#52643c" })
      .setLngLat([-121.73566810387916, 37.20075291625134])
      .addTo(map.current);
  }, []);

  return (
    <section className="map">
      <div ref={mapContainer} className="map-container"></div>
    </section>
  );
}
