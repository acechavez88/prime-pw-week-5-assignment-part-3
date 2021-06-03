let collection = [];
function addToCollection(title, artist, yearPublished){
  return `${title + artist + yearPublished}`;
};
console.log(addToCollection('you me and her and her','Texas Man', 2012));
console.log(addToCollection('I cant not stop lovin You','Texas Man', 2012));
console.log(addToCollection('Sammy is dead','Dude, your a girl', 2012));
console.log(addToCollection('Drink my sorrows','Red man group', 2020));
console.log(addToCollection('What them hands do','Dillary Huff', 2006));
console.log(addToCollection('Say it to my face','Cher', 2012));

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

collection.push(texaasLive,godmadedirt, shedidmedirty, boyeatsworld, sayitdontsprayit, litterbug,stonecoldsaidso);
console.log(collection); // moved push after executing objects.. hope it works..
