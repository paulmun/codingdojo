app.controller('orderController', ['$scope', '$location', 'userFactory', 'productFactory', 'orderFactory', function($scope, $location, userFactory, productFactory, orderFactory){

	userFactory.sync(function(data){
		$scope.users = data;
	});

	var productSync = function(){
		productFactory.sync(function(data){
			$scope.products = data;
		});
	}

	var orderSync = function(){
		orderFactory.sync(function(data){
			$scope.orders = data;
		});
	}

	orderSync();
	productSync();

	$scope.products;

	$scope.range = function(){
		var numbers = [];
		for(var i = 1; i<=$scope.order.product.quantity; i++){
			numbers.push(i);
		}
		console.log(numbers)
		$scope.quantity = numbers
	}

	$scope.createOrder = function(){
		orderFactory.create($scope.order, function(data){
			if(data.errors){
				console.log(data.errors);
			}
			else{
				orderSync();
				$scope.products = {};
				productSync();
				$scope.order = {};
			}
		})
	}

}]);