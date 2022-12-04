var {google} = require('googleapis');
var TOKEN_DIR ='qwiklabs-gcp-04-93f3c8611971'
var SCOPES = ['https://www.googleapis.com/auth/youtube'];


async function getNewToken(oauth2Client, callback) {
    let headersList = {
        "Accept": "/",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "query":`${query}`
       });
       
       let response = await fetch("https://www.thunderclient.com/welcome", { 
         method: "GET",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.text();
       console.log(data);
       
       
}
