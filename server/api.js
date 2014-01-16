Meteor.Router.add('/api/handle_push', function() {
	var secret = this.request.body.secret;

	if (secret != "***REMOVED***") {
		return [403, 'Invalid secret provided'];
	}

	var checkin = JSON.parse(this.request.body.checkin);

	var user = Meteor.users.findOne({"services.foursquare.id": checkin.user.id });

	if (user) {
		var location = checkin.venue.location;

		var result = HTTP.call(
			"GET", 
			"https://api.forecast.io/forecast/***REMOVED***/" + location.lat + "," + location.lng,
			function(error, result){
				if (result.statusCode === 200) {
				}
			}
		);
	}
});