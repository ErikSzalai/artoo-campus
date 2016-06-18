angular.module('artoo').service('UsersSrv', function ($resource) {
    var User = $resource('http://jsonplaceholder.typicode.com/users/:id', { //URI 
        //typology: 'users', // questo parametro mi serve per definire un default, al momento non ho cambiato niente
    }, {
        // retrieve: {
        //     isArray: true,
        //     method: 'GET',
        //     params: {
        //         typology: 'posts',
        //     }
        //}
    });  
    
    this.create = () => {
        return new User ();
    };

    this.get = (params) => {
        return User.get(params).$promise;
    };
    
    this.query =  () => {
        return User.query().$promise; // la query si aspetta un array, la GET un oggetto
    }
    
})