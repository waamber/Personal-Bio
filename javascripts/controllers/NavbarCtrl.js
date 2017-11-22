'use strict';

app.controller("NavbarCtrl", function ($location, $rootScope, $scope, $window, PersonalSiteService) {

  $(".menu-collapsed").click(function () {
    $(this).toggleClass("menu-expanded");
  });

});