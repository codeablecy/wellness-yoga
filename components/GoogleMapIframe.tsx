"use client";

interface GoogleMapIframeProps {
  height?: string;
  className?: string;
}

export default function GoogleMapIframe({
  height = "400px",
  className = "",
}: GoogleMapIframeProps) {
  return (
    <div className={`relative ${className}`} style={{ height }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.665430623327!2d33.0295248!3d34.6883926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e733a68df4c5bb%3A0x6a42ac494fdb9ba5!2sFeidiou%2014%2C%20Lemesos%203075!5e0!3m2!1sen!2s!4v1753096537707!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "8px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Cores of Light - Spiritual Awakening & Holistic Wellness"
      />
    </div>
  );
}
