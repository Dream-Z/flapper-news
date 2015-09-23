angular.module('flapperNews', [])
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
    ]);