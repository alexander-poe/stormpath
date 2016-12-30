// import React from 'react';
import 'isomorphic-fetch'


// var Yelp = require('yelpv3'); 

// var yelp = new Yelp ({
//   app_id: 'USwwY8oe_EPJHgmgNAFJrA',
//   app_secret: '28AP3YcIOadjSNasanXU8pPt0e0JBzH8ar8Ndbdz6MUPzG36OBjIW6fTbhJsRouI'
// })

// yelp.search({term: 'food', location: '95348', limit: 10})
// .then(function(data) {
//   console.log(data)
// })
// .catch(function(err) {
//   console.error(err)
// })

// import oauthSignature from 'oauth-signature'
// var n = require('nonce')()
// import request from 'request'
// import qs from 'querystring'
// import _ from 'lodash'

// export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
// export const getDataSuccess = data => ({
//   type: GET_DATA_SUCCESS, 
//   data
// })

// var consumerKey = 'jyQL9WjBSztxK9Hjec1yrQ'   
// var consumerSecret = 'Ebz4pnMKFZYAUujKU5jNU4U5hPM'
// var token = 'q68AzroqStQAwijZk7w12Q8zrBE_rL6Y'
// var tokenSecret = 'dpCZPXBpGYTcscWoilv82RXbK_c'

// var httpMethod = 'GET'

// var url = 'https://api.yelp.com/v2/search' 

// var default_parameters = {
//   location: 'San+Francisco', 
//   sort: '2'
// }

// var required_parameters = {
//   oauth_consumer_key: consumerKey, 
//   oauth_token: token, 
//   oauth_nonce: n(), 
//   oauth_timestamp: n().toString().substr(0,10), 
//   oauth_signature_method: 'HMAC-SHA1', 
//   oauth_version: '1.3.1'
// }

// var parameters = _.assign(default_parameters, required_parameters)

// var signatures = oauthSignature.generate(httpMethod, url, parameters, consumerSecret, tokenSecret, {
//   encodeSignature: false})

// parameters.oauth_signature = signatures

// var paramURL = qs.stringify(parameters)

// var apiURL = url+'?'+paramURL

// export const getData = () => {
//   return dispatch => {
//     return fetch(apiURL)
//     .then(response => {
//       if (!response.ok) {
//         const error = new Error(response.statusText)
//         error.response = response
//         throw error
//       }
//        return response.json()
//      })
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => console.log("Error:", error))
//      }
//   }