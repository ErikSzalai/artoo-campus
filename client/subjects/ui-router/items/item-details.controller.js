angular.module('artoo').controller('ItemsDetailsCtrl', function (ItemsSrv, $stateParams) {
    this.loading = true;
  ItemsSrv.getDetails($stateParams.code, (item) => {
      this.loading = false;
      this.item = item;
  });  
});