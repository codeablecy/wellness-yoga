"use client";

import GoogleMapIframe from "./GoogleMapIframe";

interface InteractiveMapProps {
  height?: string;
}

export default function InteractiveMap({
  height = "384px",
}: InteractiveMapProps) {
  const handleMapClick = () => {
    const address = "Feidiou 14, Lemesos 3075, Cyprus";
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  return (
    <div
      className="h-96 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={handleMapClick}
      title="Click to open in Google Maps"
    >
      <GoogleMapIframe height={height} />
    </div>
  );
}
