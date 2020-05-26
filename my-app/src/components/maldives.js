const contentful = require('contentful')
const client = contentful.createClient({
  space: '3s5j27n9nypm', // contentful space_id
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'yR2gL3HeWPJLJS2umEzQG38R-N1ACaHaWq4_TVFO5F0' // contentful access token
})
client.getEntry('4vTf1lQMWhQYlyAB7yQott') // entry id
.then((entry) => {
  client.getAsset('6HDweYy522fYN5Dh8EsYI8') // asset id
  .then((asset) => 
  document.querySelector(".App__background").setAttribute("src", asset.fields.file.url))
  document.querySelector(".App__title").innerHTML = entry.fields.title
  document.querySelector(".App__desc").innerHTML = entry.fields.description
})
.catch(console.error)