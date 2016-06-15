angular.module('artoo').controller('ItemsCtrl', function ($scope, ItemsSrv) {
  
  $scope.ItemsSrv = ItemsSrv;
  var master;

  
  $scope.selectItem = function(code) {
   var master = $scope.item = angular.copy(ItemsSrv.find(code));
  };
  
  $scope.selectedItem = ItemsSrv.get()[0].code;
  $scope.selectItem($scope.selectedItem);
  
  $scope.insert = function(item, form){
      ItemsSrv.add(item);
      $scope.resetForm(form);
      //$scope.resetForm(form);
  };
 
  $scope.resetForm = function (form){
      $scope.item = angular.copy(master);
        // $scope.item = {};
        // $scope.item = angular.copy(master);
    }; 
    
    
    $scope.update = function (item, form) {
       ItemsSrv.update(item);
       master = angular.copy(item);
    };    
        
    
    
   
});
