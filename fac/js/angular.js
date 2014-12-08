
    var myapp = angular.module('myapp', ["ui.router"])
    myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      // $urlRouterProvider.otherwise("/route1")
      
      $stateProvider
        .state('route1', {
            url: "route1",
            templateUrl: "../assets/ui-router-includes/route1.html"
        })
          .state('route1.model', {
              url: "model",
              templateUrl: "../assets/ui-router-includes/model.html",
              // controller: function($scope){
              //   $scope.items = ["A", "List", "Of", "Items"];
              // }
          })
          .state('route1.ethos', {
              url: "ethos",
              templateUrl: "../assets/ui-router-includes/ethos.html",
              // controller: function($scope){
              //   $scope.items = ["A", "List", "Of", "Items"];
              // }
          })
          .state('route1.vision', {
              url: "vision",
              templateUrl: "../assets/ui-router-includes/vision.html",
          })
          .state('route2', {
              url: "route2",
              templateUrl: "../assets/ui-router-includes/route2.html"
          })
          .state('route2.general', {
                url: "general",
                templateUrl: "../assets/ui-router-includes/general.html",
            })
          .state('route2.history', {
                url: "history",
                templateUrl: "../assets/ui-router-includes/history.html",
            })
          .state('route2.modelfaq', {
                url: "modelfaq",
                templateUrl: "../assets/ui-router-includes/modelfaq.html",
            })
          .state('route2.applicants', {
                url: "applicants",
                templateUrl: "../assets/ui-router-includes/applicants.html",
            })

          
          // .state('route2.list', {
          //     url: "list",
          //     templateUrl: "../assets/ui-router-includes/route2.list.html",
          //     controller: function($scope){
          //       $scope.things = ["A", "Set", "Of", "Things"];
          //     }
          // })
    })
