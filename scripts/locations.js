const locations = {
  // [Latitude, Longitude]
  MIT: [42.358862, -71.091542],
}

const getLngLat = (location) => { return [location[1], location[0]] };

export { locations, getLngLat }
