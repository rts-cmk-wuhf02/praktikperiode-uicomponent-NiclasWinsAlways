/* const contentful = require('contentful')

const client = contentful.createClient({
  space: '3s5j27n9nypm', // contentful space_id
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'yR2gL3HeWPJLJS2umEzQG38R-N1ACaHaWq4_TVFO5F0' // contentful access token
})

client.getEntry('') // entry id
.then((entry) => {
client.getAsset('')
.then((asset) => document.querySelector(".Outdoor__background").setAttribute("src", asset.fields.file.url))
.catch(console.error)
client.getAsset('')
.then((asset) => document.querySelector(".Outdoor__smallimg1").setAttribute("src", asset.fields.file.url))
.catch(console.error)
client.getAsset('')
.then((asset) => document.querySelector(".Outdoor__smallimg2").setAttribute("src", asset.fields.file.url))
.catch(console.error)
client.getAsset('')
.then((asset) => document.querySelector(".Outdoor__smallimg3").setAttribute("src", asset.fields.file.url))
.catch(console.error)
  document.querySelector(".Outdoor__title").innerHTML = entry.fields.title;
  document.querySelector(".Outdoor__desc").innerHTML = entry.fields.description;
})
.catch(console.error) */