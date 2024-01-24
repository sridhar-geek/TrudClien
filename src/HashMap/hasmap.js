import ApiData from '../assets/ApiData.json'

// const results = [
//   // your data here...
// ];

 export const hashMap = ApiData.results.reduce((map, obj) => {
  map[obj.id] = obj;
  return map;
}, {});

// console.log(hashMap);