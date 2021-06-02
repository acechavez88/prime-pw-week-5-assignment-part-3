let collection = [];
function addToCollection(title, artist, yearPublished){
  return true
}
const texaaasLive = {
  title : 'boot scoot boogie',// created pseudo music info to test.
  artist:' Texas man',
  yearPublished: 2012,
};
collection.push(texaaasLive);// attempted to push object to array..
console.log(collection);// console log collection and object was displayed..

// attempting to create 4 objects to represent 6 albums per instructions..
const godmadedirt = {
  title: 'You and me and her and her',
  artist:' Texas man ft. shakira',
  yearPublished: 2012,
};
const shedidmedirty = {
  title : ' I cant not look at you',// created pseudo music info to test.
  artist: 'bert and ernie live',
  yearPublished: 2018
};

const boyeatsworld = {
  title : 'boot scoot boogie',// created pseudo music info to test.
  artist: 'Dude, your a Girl',
  yearPublished: 2020,
  album: '1+1 = Love',
};
collection.push(godmadedirt); //attempting to push object to array..
console.log(collection);
collection.push(shedidmedirty); //attempting to push object to array..
console.log(collection);
collection.push(boyeatsworld); //attempting to push object to array..
console.log(collection);
// console log reads [{...}].. with list of artists when expanded..
