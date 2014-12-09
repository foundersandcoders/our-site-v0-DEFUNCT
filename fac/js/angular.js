
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
        .state('curriculum', {
          url: "curriculum",
          templateUrl: "../assets/ui-router-includes/curriculum.html"
        })
          .state('curriculum.precourse', {
                url: "precourseeee",
                templateUrl: "../assets/ui-router-includes/curriculum/precourse.html",
            })
          .state('curriculum.week1', {
                url: "week1",
                templateUrl: "../assets/ui-router-includes/curriculum/week1.html",
            })
          .state('curriculum.week2', {
                url: "week2",
                templateUrl: "../assets/ui-router-includes/curriculum/week2.html",
            })
          .state('curriculum.week3', {
                url: "week3",
                templateUrl: "../assets/ui-router-includes/curriculum/week3.html",
            })
          .state('curriculum.week4', {
                url: "week4",
                templateUrl: "../assets/ui-router-includes/curriculum/week4.html",
            })
          .state('curriculum.week5', {
                url: "week5",
                templateUrl: "../assets/ui-router-includes/curriculum/week5.html",
            })
          .state('curriculum.week6', {
                url: "week6",
                templateUrl: "../assets/ui-router-includes/curriculum/week6.html",
            })
          .state('curriculum.week7', {
                url: "week7",
                templateUrl: "../assets/ui-router-includes/curriculum/week7.html",
            })
          .state('curriculum.week8', {
                url: "week8",
                templateUrl: "../assets/ui-router-includes/curriculum/week8.html",
            })
          .state('curriculum.week9-16', {
                url: "week9-16",
                templateUrl: "../assets/ui-router-includes/curriculum/week9-16.html",
            })

          
          // .state('faq.list', {
          //     url: "list",
          //     templateUrl: "../assets/ui-router-includes/faq.list.html",
          //     controller: function($scope){
          //       $scope.things = ["A", "Set", "Of", "Things"];
          //     }
          // })
    })
