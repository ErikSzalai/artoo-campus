angular.module('artoo').service('UsersSrv', function ($resource) {
    var User = $resource('http://jsonplaceholder.typicode.com/users/:id', {
        id: '@id',
    }, {
        // retrieve: {
        //     isArray: true,
        //     method: 'GET',
        //     params: {
        //         typology: 'posts'
        //     }
        // }
    });
    
    this.create = () => {
        return new User();
    };
    
    this.get = (params) => {
        return User.get(params).$promise;
    };
    
    this.query = () => {
        return User.query().$promise;
    };
});