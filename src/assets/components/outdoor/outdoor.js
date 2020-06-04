 const contentful = require('contentful')

const client = contentful.createClient({
  space: 'vysv1cf3r2yp', // contentful space_id
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'WGpT0_TrOWO68sirkmZ3zFGdzaCMbZeshsmn7esStck' // contentful access token
})

client.getEntry('2lGu043rR1O1seAoEH08PS') // entry id
.then((entry) => {
client.getAsset('2LaRO5RIxg9SFsPOuilPfm')
.then((asset) => document.querySelector(".Outdoor__background").setAttribute("src", asset.fields.file.url))
.catch(console.error)
client.getAsset('2Jt2JqzVeRmwYCYwYVWACK')
.then((asset) => document.querySelector(".Outdoor__smallimg1").setAttribute("src", asset.fields.file.url))
.catch(console.error)
client.getAsset('6JzhUAwjt3ZXRQMRZfd0HG')
.then((asset) => document.querySelector(".Outdoor__smallimg2").setAttribute("src", asset.fields.file.url))
.catch(console.error)
client.getAsset('K5EbGnt8lSjQC0n7QGFcR')
.then((asset) => document.querySelector(".Outdoor__smallimg3").setAttribute("src", asset.fields.file.url))

.catch(console.error)
  document.querySelector(".Outdoor__title").innerHTML = entry.fields.appTitle;
  document.querySelector(".Outdoor__desc").innerHTML = entry.fields.appDesc;
})
.catch(console.error) 