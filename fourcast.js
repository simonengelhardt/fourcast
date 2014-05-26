if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to Fourcast.";
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
