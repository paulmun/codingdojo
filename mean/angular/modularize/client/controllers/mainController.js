/*
      Our controllers: Modularize these into a folder called:
      'controllers' within 'client' (you can further organize all these if you desire: e.g. client/assets/js/controllers)
    */
    app.controller('indexController', ['$scope', 'userFactory', '$location', function($scope, userFactory, $location) {
      /* Private Methods */
      var usersIndex = function() {
          userFactory.index(function beingPassedToTheFactoryIndexByThisController(usersFromTheFactory) {
            $scope.users = usersFromTheFactory;
          } /* end args passed to userFactor index */ ); //end userFactory method invokation
        } //end usersIndex

      /* Scope Methods */
      $scope.show = function(user_id) {
          $location.url('/edit/' + user_id);
        }
        /* on load time */
      console.log("loading the controller");
      console.log(userFactory);
      console.log(this);
      usersIndex();
    }]);

/* EDIT CONTROLLER: this controller uses 'this', and the controlValue seems to not update (a bug for you to fix! possibly one new line of code ~ 14 characters, and one modification of something that already exists)*/
    app.controller('editController', ['$scope', 'userFactory', '$location', '$routeParams', function($scope, userFactory, $location, rParams) {
      /* Public Properties */
      $scope.controlValue = "Current Name:";
      /* Public Methods */
      $scope.getUser = function() {
        userFactory.show(rParams.id, function passedToUserFactoryShow(user) {
          $scope.user = user;
        })
      }

      $scope.updateUser = function(){
        userFactory.update($scope.users, rParams.id, function passedToUserFactoryUpdate(userFromFactory){
          $scope.user = userFromFactory;
          // what is this?
          $scope.controlValue = "Updated Name: "
        });
      }
      /* on load time */
      $scope.getUser();
      console.log(this);
    }]);
    app.controller('newController', ['$scope','userFactory', '$location', function($scope, userFactory, $location) {
      $scope.addUser = function(){
        userFactory.create({name:$scope.user.name}, function passedToUserFactoryShow(user) {
          $scope.user = user;
        });
        $location.url('/');
      }
    }]);