let collection = [];
function addToCollection(title, artist, yearPublished){
  return `${title + artist + yearPublished}`; // should return with title, art.,year..
};

const texaasLive = {
  title : 'boot scoot boogie',// created pseudo music info to test.
  artist:' Texas man',
  yearPublished: 2012,
};

const godmadedirt = {
  title: 'You and me and her and her',
  artist:' Texas man',
  yearPublished: 2012,
};

const shedidmedirty = {
  title : ' I cant not stop lovin You',// created pseudo music info to test.
  artist: 'Texas Man',
  yearPublished: 2012,
};

const boyeatsworld = {
  title : 'Sammy is dead',// created pseudo music info to test.
  artist: 'Dude, your a girl',
  yearPublished: 2012,
};
const sayitdontsprayit = {
  title : 'Drink my sorrows',// created pseudo music info to test.
  artist: 'Red man group',
  yearPublished: 2020,
};
const litterbug = {
  title : 'What them hands do',// created pseudo music info to test.
  artist: 'Dillary Huff',
  yearPublished: 2006,
};
const stonecoldsaidso = {
  title : 'Say it to my face',// created pseudo music info to test.
  artist: 'Cher',
  yearPublished: 2012,
};

collection.push(texaasLive, godmadedirt, shedidmedirty, boyeatsworld, sayitdontsprayit, litterbug,stonecoldsaidso);
for (props in texaasLive,godmadedirt,shedidmedirty,boyeatsworld,sayitdontsprayit,litterbug,stonecoldsaidso){
  console.log(texaasLive,godmadedirt,shedidmedirty,boyeatsworld,sayitdontsprayit,litterbug,stonecoldsaidso[props]);
}// console log the properties in all 7 objects...
console.log(collection.length);// console log length of array

function showCollection(){

}

function findByArtist(artist){
  let array = []

}
