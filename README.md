☂ fourcast
===========

[fourcast](http://fourcast.meteor.com/) is a simple, proof-of-concept foursquare app, built on [Meteor](https://www.meteor.com/), that will post a reply to your check-ins with the current hyper-local weather forecast.
The original idea was to give you an answer to the question "Will it stop raining if I hang out here for a little longer?".
Unfortunately, foursquare has since [retired check-in replies](https://groups.google.com/forum/#!msg/foursquare-api/rpbLHXSNtXk/k3NmcGVp_pIJ), so the app does not function currently.

Deployment-specific configuration
----------
fourcast needs an object with at least the following content to be available in [Meteor.settings](http://docs.meteor.com/#meteor_settings):

    {
      "foursquare": {
        "secret": "Foursquare App Push secret"
      },
      "forecast": {
        "key": "Forecast API key"
      }
    }
