
    var myapp = angular.module('myapp', ["ui.router"])
    myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /aboutus
      // $urlRouterProvider.otherwise("/aboutus")
      
      $stateProvider
        .state('aboutus', {
            url: "aboutus",
            templateUrl: "../assets/ui-router-includes/aboutus.html"
        })
          .state('aboutus.model', {
              url: "model",
              templateUrl: "../assets/ui-router-includes/model.html",
              // controller: function($scope){
              //   $scope.items = ["A", "List", "Of", "Items"];
              // }
          })
          .state('aboutus.ethos', {
              url: "ethos",
              templateUrl: "../assets/ui-router-includes/ethos.html",
              // controller: function($scope){
              //   $scope.items = ["A", "List", "Of", "Items"];
              // }
          })
          .state('aboutus.vision', {
              url: "vision",
              templateUrl: "../assets/ui-router-includes/vision.html",
          })
          .state('aboutus.team', {
              url: "team",
              templateUrl: "../assets/ui-router-includes/team.html",
          })          
          .state('faq', {
              url: "faq",
              templateUrl: "../assets/ui-router-includes/faq.html"
          })
          .state('faq.general', {
                url: "general",
                templateUrl: "../assets/ui-router-includes/general.html",
            })
          .state('faq.history', {
                url: "history",
                templateUrl: "../assets/ui-router-includes/history.html",
            })
          .state('faq.modelfaq', {
                url: "modelfaq",
                templateUrl: "../assets/ui-router-includes/modelfaq.html",
            })
          .state('faq.applicants', {
                url: "applicants",
                templateUrl: "../assets/ui-router-includes/applicants.html",
            })

          
          // .state('faq.list', {
          //     url: "list",
          //     templateUrl: "../assets/ui-router-includes/faq.list.html",
          //     controller: function($scope){
          //       $scope.things = ["A", "Set", "Of", "Things"];
          //     }
          // })
    })
