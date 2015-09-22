/**
 * Created by lexx on 9/21/15.
 */

angular.module('flapperNews', ['ui.router'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider){
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'MainCtrl'
                })
                .state('posts', {
                    url: '/posts/{id}',
                    templateUrl: '/posts.html',
                    controller: 'PostsCtrl'
                });
            $urlRouterProvider.otherwise('home');
        }
    ])
    .factory('posts', [function(){
        // .......
        var o = {
            posts: []
        };
        return o;
    }])

    .controller('PostsCtrl', [
        '$scope',
        '$stateParams',
        'posts',
        function($scope, $stateParams, posts){
            // ...
            $scope.posts = posts.posts[$stateParams.id];

            $scope.addComment = function(){
                if($scope.body === '') { return; }
                $scope.posts.comments.push({   // $scope.post.comments.push({
                    body: $scope.body,
                    author: 'user',
                    upvotes: 0
                });
                $scope.body = '';
            };
        }
    ])

    .controller('MainCtrl', [
        '$scope',
        'posts',
        function($scope, posts){
            $scope.posts = posts.posts;

            //$scope.posts = [
            //    { title: 'post1', upvotes: 5 },
            //    { title: 'post2', upvotes: 2 },
            //    { title: 'post3', upvotes: 15 },
            //    { title: 'post4', upvotes: 9 },
            //    { title: 'post5', upvotes: 4 },
            //    { title: 'post6', upvotes: 51 }
            //];

            $scope.addPost = function(){
                if(!$scope.title || $scope.title === '') { return; }
                $scope.posts.push({
                    title: $scope.title,
                    link: $scope.link,
                    upvotes: Math.round(Math.random()*10),
                    comments: [
                        {author: 'Joe', body: 'Cool post', upvotes: 0},
                        {author: 'Bob', body: 'Great idea but everything is wrong', upvotes: 0}
                    ]
                });
                $scope.title = '';
                $scope.link = '';
            };

            $scope.incrementUpvotes = function(post){
              post.upvotes += 1;
            };
            $scope.decrementUpvotes = function(post){
                  post.upvotes -= 1;
            };
        }
    ]
);