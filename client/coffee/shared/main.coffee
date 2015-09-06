'use strict';

angular.module('app.controllers', [])

# overall control
.controller('AppCtrl', [
    '$scope', '$location'
    ($scope, $location) ->
        $scope.isSpecificPage = ->
            path = $location.path()
            return _.contains( [
                '/404'
                '/pages/500'
                '/pages/login'
                '/pages/signin'
                '/pages/signin1'
                '/pages/signin2'
                '/pages/signup'
                '/pages/signup1'
                '/pages/signup2'
                '/pages/forgot'
                '/pages/lock-screen'
            ], path )

        $scope.main =
            brand: 'Intranet'
            name: 'Andres David Jimenez' # those which uses i18n can not be replaced for now.
            logo: 'img/logo.png'
])

.controller('NavCtrl', [
    '$scope', 'taskStorage', 'filterFilter'
    ($scope, taskStorage, filterFilter) ->
        # init
        tasks = $scope.tasks = taskStorage.get()
        $scope.taskRemainingCount = filterFilter(tasks, {completed: false}).length

        $scope.$on('taskRemaining:changed', (event, count) ->
            $scope.taskRemainingCount = count
        )
])

.controller('DashboardCtrl', [
    '$scope'
    ($scope) ->

])
# Controlador de la agenda de la pantalla principal
.controller('ModalAgendaCtrl', [
    '$scope', '$modal', '$log'
    ($scope, $modal, $log) ->
        $scope.items = [
            "item1"
            "item2"
            "item3"
        ]

        $scope.contacts = []

        $scope.saveContact = ->
          if $scope.newcontact.id == null
            #if this is new contact
            $scope.newcontact.id = uid++
            $scope.contacts.push $scope.newcontact
          else
            for i of $scope.contacts
              if $scope.contacts[i].id == $scope.newcontact.id
                $scope.contacts[i] = $scope.newcontact
          $scope.newcontact = {}
          # this will clear the form
          return

        $scope.delete = (id) ->
          #search contact with given id and delete it
          for i of $scope.contacts
            if $scope.contacts[i].id == id
              $scope.contacts.splice i, 1
              $scope.newcontact = {}
          return

        $scope.edit = (id) ->
          #search contact with given id and update it
          for i of $scope.contacts
            if $scope.contacts[i].id == id
              #we use angular.copy() method to create
              #copy of originial object
              $scope.newcontact = angular.copy($scope.contacts[i])
          return
          
        $scope.open = ->
            modalInstance = $modal.open(
                templateUrl: "myModalContent.html"
                controller: 'ModalInstanceCtrl'
                resolve:
                    items: ->
                        $scope.items
            )
            modalInstance.result.then ((selectedItem) ->
                $scope.selected = selectedItem
                return
            ), ->
                $log.info "Modal dismissed at: " + new Date()
                return

            return

        return

])
