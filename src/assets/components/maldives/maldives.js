const contentful = require('contentful')


const client = contentful.createClient({
  space: 'vysv1cf3r2yp', // contentful space_id
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'WGpT0_TrOWO68sirkmZ3zFGdzaCMbZeshsmn7esStck' // contentful access token
})


client.getEntry('12vyIdBXEyGTTI6YuaWB57') // entry id
.then((entry) => {
  console.log(entry)
  document.querySelector(".App__title").innerHTML = entry.fields.appTitle;
  document.querySelector(".App__subtitle").innerHTML = entry.fields.appSubtitle;
  document.querySelector(".App__desc").innerHTML = entry.fields.appDesc;
  client.getAsset('6Z9XBf9XO0OQY7Jx5xqvut') // asset id
  .then((asset) => 
  document.querySelector(".App__background").setAttribute("src", asset.fields.file.url)
  );
})
.catch(console.error)  