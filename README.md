fourcast
========

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
