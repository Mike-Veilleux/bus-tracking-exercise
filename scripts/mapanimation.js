import { locations, getLngLat } from "./locations.js";
import { Bus } from "./Bus.js"

const busIcon = 'images/bus-solid.svg';
let map;
let busFleet = [];

async function initializeMap(start_location) {
  mapboxgl.accessToken = 'pk.eyJ1IjoibXZ4ZGVzaWduIiwiYSI6ImNsYWY3bXk5ajEyMDYzb2xkd2F5YjRqZHUifQ.Z9zTd7XAbFqsvsc1iwwnLw';
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: getLngLat(start_location),
    zoom: 13
  });
  // Add marker for MIT
  new mapboxgl.Marker().setLngLat(getLngLat(start_location)).addTo(map);

  await UpdateBusFleet();

  setInterval(async () => {
    await UpdateBusFleet();
  }, 5000);
}


// Request bus data from MBTA
async function FetchMbtaData() {
  const url = 'https://api-v3.mbta.com/vehicles?api_key=ca34f7b7ac8a445287cab52fb451030a&filter[route]=1&include=trip';
  const response = await fetch(url);
  const json = await response.json();
  console.log(json.data);
  return json.data;
}


async function UpdateBusFleet() {
  const bussesData = await FetchMbtaData()
  CheckForBusLeavingOrJoiningFleet(bussesData)
  UpdateBussesDataAndMove(bussesData);
  console.log('Number of busses in fleet: ', busFleet.length);
}


function CheckForBusLeavingOrJoiningFleet(bussesData) {
  for (const busData of bussesData) {
    var indexBusToAdd = busFleet.findIndex(x => x.json.id == busData.id);
    if (indexBusToAdd == -1) {
      const newBus = new Bus(map, busData);
      busFleet.push(newBus);
    }
  }
  // Use reversed iteration to safely remove elements 
  // from an array while iterating over it.
  for (let i = busFleet.length - 1; i >= 0; i--) {
    const indexBusToRemove = bussesData.findIndex(x => x.id == busFleet[i].json.id);
    if (indexBusToRemove == -1) {
      busFleet[i].RemoveMarker();
      busFleet.splice(i, 1);
    }
  }
}


function UpdateBussesDataAndMove(bussesData) {
  for (const busData of bussesData) {
    var indexBusToUpdate = busFleet.findIndex(x => x.json.id == busData.id);
    if (indexBusToUpdate != -1) {
      busFleet[indexBusToUpdate]
        .UpdateJson(busData)
        .MoveMarker()
        .CheckDirection();
    }
  }
}


//Launch the main loop
initializeMap(locations.MIT);





