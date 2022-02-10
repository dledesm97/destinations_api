const destinations = [
  {
    destination: "Eiffel Tower",
    location: "Paris",
  },
];

//export
//exports becomes what gets passed in
// console.log(module); before: exports:{}
//module.exports = destinations;
//console.log(module); after exports:[{}]

//module.exports.destinations=destinations; is the
//same as below
module.exports = {
  destinations,
};
