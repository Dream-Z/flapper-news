angular.module('flapperNews', [])
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