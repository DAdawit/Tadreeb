import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
// import iconUrl from "leaflet/dist/images/marker-icon.png";
// import iconUrl from "/";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import PropTypes from "prop-types";
import { LocationIcon } from "@/assets/icons/LocationIcon";
const pinColor = "#F67A3C";
const icon = L.icon({
  iconUrl: `https://api.iconify.design/mdi:map-marker.svg?color=darkorange`,

  iconSize: [40, 40], // size of the icon
  shadowSize: [41, 41], // size of the shadow
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
});

const singleLocation = {
  id: 1,
  city: "Pinned City",
  address: "Tadreeb Training and Consultancy",
  postalCode: "+971 000 0000",
  position: [25.21737445789416, 55.271326462929984],
};

const ContactUsMap = () => {
  return (
    <div className="py-1">
      <div className="flex justify-center py-8">
        <MapContainer
          center={singleLocation.position as L.LatLngTuple}
          zoom={10}
          scrollWheelZoom={false}
          style={{ width: "90%", height: "60vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=ZnN8gQd7XQkez6kftyD7"
          />
          <Marker
            title={singleLocation.city + " " + singleLocation.address}
            position={singleLocation.position as L.LatLngTuple}
            icon={icon}
          >
            <Popup>
              Tadreeb Training and Consultancy
              <br />
              +971 000 0000
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactUsMap;
