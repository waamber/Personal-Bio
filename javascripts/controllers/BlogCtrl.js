'use strict';

app.controller("BlogCtrl", function ($location, $rootScope, $scope, PersonalSiteService) {

  $scope.blogs = [];

  const getBlogs = () => {
    PersonalSiteService.getBlogs().then((results) => {
      $scope.blogs = results;
    }).catch((error) => {
      console.log("Error in ContactService", error);
    });
  };

  getBlogs();




});