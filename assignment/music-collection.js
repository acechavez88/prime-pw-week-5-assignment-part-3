const collection = [];
function addToCollection(title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
  return album; // should return with title, art.,year..
}

console.log(addToCollection('texaasLive','bart scott','2010'));
console.log(addToCollection('tex','eddie V','2001'));
console.log(addToCollection('txLive','that guy joe','2002'));
console.log(addToCollection('texasLive','this guy','2012'));
console.log(addToCollection('live','gabroniee','2006'));
console.log(addToCollection('texas','the what','2012'));


function showCollection(array){
  console.log(array.length);
  for (let i = 0; i < array.length; i++)
    console.log(array[i].title,'by',array[i].artist,'published in', array[i].yearPublished);
    return true
  }
console.log(showCollection(collection));


function findByArtist(artist){
  let anything = ['texaasLive','bart scott','2010']
  for (var i = 0; i < collection.length; i++) {
    if (collection.length == anything.length) {
      anything.push(artist)
      return true
    }
  }
}
console.log(findByArtist('texaasLive','bart scott','2010'));
console.log(findByArtist(''));
