angular.module('artoo').controller('RedditCtrl', function ($scope, RedditSrv) {
    
    $scope.$watch('search', (newValue) => {
        $scope.loading = true;
        RedditSrv.query(newValue).then((data) => {
            $scope.loading = false;
            console.log(data);
            $scope.reddits = data.data && data.data.children;
        }).catch();
    }, true);
});