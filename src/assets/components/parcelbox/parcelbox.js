 const contentful = require('contentful')

const client = contentful.createClient({
  space: 'vysv1cf3r2yp', // contentful space_id
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'WGpT0_TrOWO68sirkmZ3zFGdzaCMbZeshsmn7esStck' // contentful access token
})

client.getEntry('2ofPHNBzDPzWbFXPKFGsoc') // entry id
.then((entry) => {
    client.getAsset('YfiQpb8rb8gv4Kj4ljjFy')
    .then((asset) => document.querySelector(".Parcelbox__logo").setAttribute("src", asset.fields.file.url))
    .catch(console.error)
  document.querySelector(".Parcelbox__title").innerHTML = entry.fields.appTitle;
  document.querySelector(".Parcelbox__desc").innerHTML = entry.fields.appDesc;
})
.catch(console.error) 