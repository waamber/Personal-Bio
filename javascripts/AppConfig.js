'use strict';

app.run(function (FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/aboutme", {
      templateUrl: 'partials/aboutme.html',
      controller: 'AboutmeCtrl',
    })
    .when("/bio/professional", {
      templateUrl: 'partials/professional.html',
      controller: 'ProfessionalCtrl',
    })
    .when("/bio/blog", {
      templateUrl: 'partials/blog.html',
      controller: 'BlogCtrl',
    })
    .when("/bio/contact", {
      templateUrl: 'partials/contact.html',
      controller: 'ContactCtrl',
    })
    .when("/bio/projects", {
      templateUrl: 'partials/projects.html',
      controller: 'ProjectsCtrl',
    })
    .otherwise("/aboutme"); //index will be about me
});