(function(){
    'use strict'
   /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
    function directorioCtrl(directorioServ,$mdSidenav, $mdBottomSheet, $log, $resource ) {

     var ag = this;

    ag.selected = [];
    //ag.selected     = null;
    ag.selectUser   = selectUser;
    ag.toggleList   = toggleUsersList;
    ag.share        = share;



     ag.users        = [ ];
     ag.ubicacion = [];
     ag.pageSize     = 10;
     ag.currentPage  = 0;
     ag.users = directorioServ.query();

     console.log(ag.env);

     ag.users.$promise.then(function(usrs) {
        ag.numberOfUsers = usrs.length;

        ag.numberOfPages= function () {
         return Math.ceil( ag.numberOfUsers / ag.pageSize);
       }

     });


    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser ( user ) {
      ag.selected = angular.isNumber(user) ? $scope.users[user] : user;
      ag.toggleList();
    }

  }

    /**
     * Show the bottom sheet
     */
    function share($event) {
        var user = ag.selected;

        $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          template: '<md-bottom-sheet class="md-list md-has-header">'+
                        '<md-subheader>Settings</md-subheader>'+
                          '<md-list>'+
                            '<md-item ng-repeat="item in bt.items">'+
                              '<md-item-content md-ink-ripple flex class="inset">'+
                                    '<a flex aria-label="{{item.name}}" ng-click="listItemClick($index)">'+
                                     '<span class="md-inline-list-icon-label">{{ item.name }}</span> </a>'+
                              '</md-item-content>'+
                            '</md-item>'+
                          '</md-list>'+
                      '</md-bottom-sheet>',
          controller: [ '$mdBottomSheet', UserSheetController],
          controllerAs: "bt",
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });
  }
        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function UserSheetController ( $mdBottomSheet ) {
          this.user = user;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.performAction = function(action) {
            $mdBottomSheet.hide(action);
          };
  }




      angular.module('App')
             .controller('directorioCtrl',['directorioServ', '$mdSidenav', '$mdBottomSheet', '$log','$resource', directorioCtrl ])
             .controller('$mdBottomSheet',['$mdBottomSheet',UserSheetController]);
})();
