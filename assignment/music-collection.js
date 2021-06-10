const collection = [];
function addToCollection(title, artist, yearPublished){
  //making album object with parameters..
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album); //pushing album to collection array..
  return album;
}

console.log("****** addToCollection Test*******");
console.log(addToCollection('texaasLive','bart scott','2010'));
console.log(addToCollection('tex','eddie V','2001'));
console.log(addToCollection('txLive','bart scott','2002')); // changed artist to test..
console.log(addToCollection('texasLive','this guy','2012'));
console.log(addToCollection('live','gabroniee','2006'));
console.log(addToCollection('texas','the what','2012'));

//logs my collection to the console using specified format..
console.log("****** showCollection Test*******");
//changed name array to album to define..
function showCollection(albumArray){
  console.log(albumArray.length); // console log # of items in an array..
  for (const album of albumArray){ // for of loop to log each item in an albumArray..
    console.log (`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  } // console results from loop to show collection of albums  using specified format..
} // end showCollection
showCollection(collection); //call showCollectionfunction and run collection array.. 


function findByArtist(artist){
  let anything = [] //empty array..
  for (let thisAlbum of collection) { //for of loop properties of collection..
    if (thisAlbum.artist === artist) {//testing for matching artists in collection..
      anything.push(thisAlbum);// will push any matching albums to anything array..
    }
  }
  return anything; // function to return anything after loop completes..
}
console.log("****** findByArtist Test*******");
console.log(findByArtist('bart scott'));//test should output (2) array..
console.log(findByArtist());// test should return empty []..
