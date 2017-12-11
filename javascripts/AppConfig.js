'use strict';

app.run(function (FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/aboutme", {
      templateUrl: 'partials/aboutme.html',
    })
    .when("/bio/professional", {
      templateUrl: 'partials/professional.html',
    })
    .when("/bio/blog", {
      templateUrl: 'partials/blog.html',
      controller: 'BlogCtrl',
    })
    .when("/bio/contact", {
      templateUrl: 'partials/contact.html',
    })
    .when("/bio/projects", {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectsCtrl',
    })
    .otherwise("/aboutme");
});