angular.module('artoo').controller('UsersCtrl', function ($scope, UsersSrv) {
    $scope.loading = true;
    UsersSrv.query().then((data) => {
        //console.log(data);
        $scope.users = data;
        $scope.loading = false;
    }).catch((err) => {
        console.error(err);
    });
    
    $scope.getDetails = (id) => {
        $scope.loading = true;
        UsersSrv.get({id: id}).then((data)=> {
            $scope.loading = false;
            $scope.userDetails = data;
            $scope.user = data;
        });
    };
    
    $scope.user = UsersSrv.create();
    
    $scope.remove = (user) => {
        $scope.loading = true;
        user.$remove({id: user.id}).then((data) => {
            console.info('Removed: ' + data);
            $scope.loading = false;
        }).catch();
    };
    
    $scope.save = (user, form) => {
        $scope.loading = true;
    user.$save().then((data) => {
        $scope.user = UsersSrv.create();
        form.$setPristine();
        $scope.loading = false;
        console.info(data);
    //newUser.name = 'John Doe';
        }).catch();
    };
});