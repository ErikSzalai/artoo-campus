angular.module('artoo', [
  'appbar',
  'ui.router',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'UI Router', url: 'subjects/ui-router'});
  })
  
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
    .state('home',{
      controller: function () {console.log('Honey, I\'m home')},
      template:'<h1>Home</h1>',
      url: '/'
    })
    
    .state('items', {
      templateUrl:'subjects/ui-router/items/items.html',
      controller: 'ItemsCtrl',
      controllerAs: 'ItemsCtrl',
      url: '/items',
    })
    
    .state('items-details', {
      controller: 'ItemsDetailsCtrl',
      templateUrl: 'subjects/ui-router/items/items-details.html',
      url: '/items/:code',
      // resolve: {
      //   item: function ($stateParams, ItemSrv) {
      //     return ItemsSrv.getDetails($stateParams.code);
      //   },
      // },
      // onEnter: function () {
      //   if (!item) $state.go('items');
      // },
    })
    
    .state('contacts', {
      abstract: true,
      controller: 'ContactsCtrl',
      controllerAs: 'ContactsCtrl',
      data: {
        color: 'red',
      },
      resolve: {
        color: function($rootScope, $timeout) {
          //console.log('comincia il resolve');
          $rootScope.loading = true;
          return $timeout(function() {
            //console.log('finisce il resolve');
            $rootScope.loading = false;
            return 'blue';
          }, 1500);
        },
      },
      onEnter: function ($state, color){
        //console.log('on enter funct');
        if (color !== 'blue') $state.go('home');
      },
      templateUrl: 'subjects/ui-router/contacts/contacts.html',
      url: '/contacts',
      })
      
    .state('contacts.list', {
      templateUrl: 'subjects/ui-router/contacts/list/list.html',
      url: '/list'
    });
    $urlRouterProvider.when('/asd', '/contacts/list');
    $urlRouterProvider.otherwise('/');
  })
  
    // .run(($rootScope) => {
    //   // $rootScope.$on('$stateChangeStart', function (event, toState, fromState) {
    //   //   $rootScope.loading = true;
    //   //   fromState.name = fromState.name || 'nowhere';
    //     //console.log('transition starts from state: ' + fromState.name + ' to state ' + toState.name + '...');
    //   });
      
    //   $rootScope.$on('$stateChangeSuccess', function (event, toState, fromState) {
    //     $rootScope.loading = false;
    //     toState.name = toState.name || 'nowhere';
    //     //console.log('transition succeeded');
    //   });
    //});