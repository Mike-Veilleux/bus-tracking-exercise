const locations = {
  // [Latitude, Longitude]
  MIT: [42.358862, -71.091542],
  DB_Home: [22.29576940422957, 114.02200296673068],
  DB_Discovery_College: [22.304030776222813, 114.01441949140292],
  DB_Bus_Cresmont: [22.296498819171585, 114.02314670165978],
}

const getLngLat = (location) => { return [location[1], location[0]] };

export { locations, getLngLat }
