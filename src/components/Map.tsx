import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ showOverlay = true }) {
  return (
    <div className="relative h-screen w-full">

      {/* MAP */}
      <MapContainer
        center={[60.1699, 24.9384]}
        zoom={12}
        zoomControl={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="bottomright" />
      </MapContainer>

      {/* ✅ Overlay condition */}
      {showOverlay && (
        <div className="absolute top-6 left-6 z-[1000] w-[280px] bg-white rounded-2xl shadow-xl overflow-hidden">
          
          <div className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center text-white">
              🍴
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Selected Result
              </p>
              <h2 className="text-lg font-semibold">Sultan’s Feast</h2>
            </div>
          </div>

          <div className="px-4 pb-3 space-y-2 text-sm text-gray-600">
            <p>🕒 Open until 22:00</p>
            <p>📞 +358 40 123 4567</p>
            <p>📍 4 min • 1.2 km</p>
          </div>

          <button className="w-full bg-green-800 hover:bg-green-900 text-white py-3 font-medium">
            ➤ Get Directions
          </button>
        </div>
      )}

    </div>
  );
}