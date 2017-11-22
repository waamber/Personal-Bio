'use strict';

app.controller("ProjectsCtrl", function ($scope, PersonalSiteService) {

  $scope.projects = [];

  const getProjects = () => {
    PersonalSiteService.getProjects().then((results) => {
      $scope.projects = results;
    }).catch((error) => {
      console.log("Error in ContactService", error);
    });
  };

  getProjects();

});