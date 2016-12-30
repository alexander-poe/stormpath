// import React from 'react';
import OAuthSimple from 'oauthsimple'
import 'isomorphic-fetch'

export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const getDataSuccess = data => ({
  type: GET_DATA_SUCCESS, 
  data
})

var consumerKey = 'jyQL9WjBSztxK9Hjec1yrQ';    
var consumerSecret = 'Ebz4pnMKFZYAUujKU5jNU4U5hPM';
var token = 'q68AzroqStQAwijZk7w12Q8zrBE_rL6Y';
var tokenSecret = 'dpCZPXBpGYTcscWoilv82RXbK_c';

 var oauth = new OAuthSimple(consumerKey, tokenSecret)
 
   var request = oauth.sign({
     action: "GET",
     path: "https://api.yelp.com/v2/search",
     signatures: {api_key: consumerKey, shared_secret: consumerSecret, access_token: token,
access_secret: tokenSecret},

   })

export const getData = () => {
  return dispatch => {
    return fetch(request.signed_url)
    .then(response => {
      if (!response.ok) {
        const error = new Error(response.statusText)
        error.response = response
        throw error
      }
       return response.json()
     })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log("Error:", error))
     }
  }