# README
Find the default readme [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md)

## Caching
Use `window.sessionStorage` in order to store requests to the API.  However, ensure that the session is cleared on page refresh.  Use a Hash and Range Key, ie: userID-session.
- https://stackoverflow.com/questions/39257740/how-to-access-state-inside-redux-reducer
- https://stackoverflow.com/questions/38405700/getstate-in-redux-saga

Use `window.localStorage` to save the token to persist for the entirety of the length of the user test.  Clear on force refresh (not possible) and expiration time.  Clicking on the Logo should take you back to the index where you can say whether the existing logged in user is you or clear token.

## Moment.js
Set the time to calculate from via the [from prop](https://github.com/headzoo/react-moment#from).  Thus, you can [disable the interval](https://github.com/headzoo/react-moment#interval).

## Old References
updateComponent
withAuth
ProtectedRoute
StoreFactory
