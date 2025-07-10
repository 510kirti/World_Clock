import L from 'leaflet';

export const createFlagIcon = (emoji) => {
  return L.divIcon({
    className: 'custom-flag-icon',
    html: `<div style="font-size: 24px;">${emoji}</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
};
