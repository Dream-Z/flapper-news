/**
 * Created by lexx on 9/21/15.
 */

angular.module('flapperNews', ['ui.router', 'templates'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider){
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'home/_home.html',
                    controller: 'MainCtrl'
                })
                .state('posts', {
                    url: '/posts/{id}',
                    templateUrl: 'posts/_posts.html',
                    controller: 'PostsCtrl'
                });
            $urlRouterProvider.otherwise('home');

            $locationProvider.html5Mode(true);
        }
    ])
    .factory('posts', [function(){
        // .......

        //gogog
    }])
;