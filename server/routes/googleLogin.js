const express = require('express');
const passport = require('passport');
const router = express.Router();
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

router.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/login' }),
  (request, response) => {
    console.log(response.req.query.code);
    response.redirect(`http://localhost:3000?code=${response.req.query.code}`);
  }
);

router.post('/google/isTokenValid', 
  (response, request) => {
    console.log(response.body.token);
    // const oauth2Endpoint = 'https://www.googleapis.com/oauth2/v3/tokeninfo';
    // fetch(`${oauth2Endpoint}?access_token=${response.body.token}`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     username
    //   }),
    //   headers: new Headers({
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json',
    //   })
    // })
    //   .then(res => console.log(res.json()))

    /* Validate the access token received on the query string. */
    // const exchangeOAuth2Token = (token) => {
    //   const oauth2Endpoint = 'https://www.googleapis.com/oauth2/v3/tokeninfo';
    //   if (token) {
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('POST', `${oauth2Endpoint}?access_token=${token}`);
    //     xhr.onreadystatechange = (e) => {
    //       console.log('xhr response', xhr.response);
    //       const response = JSON.parse(xhr.response);
    //       // Verify that the 'aud' property in the response matches YOUR_CLIENT_ID.
    //       if (xhr.readyState === 4 &&
    //           xhr.status === 200 &&
    //           response['aud'] &&
    //           response['aud'] === process.env.CLIENT_ID) {
    //         localStorage.setItem('oauth2-test-params', JSON.stringify(token) );
    //       } else if (xhr.readyState === 4) {
    //         console.log('There was an error processing the token, another ' +
    //                     'response was returned, or the token was invalid.')
    //       }
    //     };
    //     xhr.send(null);
    //   }
    // }
    // const result = exchangeOAuth2Token(response.body.token);
    // console.log(result);
  }
);
module.exports = router;
