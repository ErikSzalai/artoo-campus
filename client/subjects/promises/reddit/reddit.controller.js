angular.module('artoo').controller('RedditCtrl', function ($scope, RedditSrv){
    
    $scope.$watch('search', function (newValue) {
        $scope.loading = true;
        RedditSrv.query(newValue).then((data) => {
            $scope.loading = false;
            $scope.reddits = data.data && data.data.children;
        }).catch();
    }, true);
    
    // $scope.query = (search) => {
        
    //     $scope.loading = true;
    //     RedditSrv.query(newValue).then((data) => {
    //         $scope.loading = false;
    //         $scope.reddits = data.data.children;
            
    // }).catch();
        
    // };
    
    
});