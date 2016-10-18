app.controller('productController', ['$scope', '$location', 'productFactory', function($scope, $location, productFactory){

	var sync = function(){
		productFactory.sync(function(data){
		$scope.products = data;
		});
	}

	sync();
	
	$scope.range = function(min, max, step){
		var numbers = [];
		for(var i = min; i <= max; i += step){
			numbers.push(i);
		}
		return numbers;
	}

	$scope.addProduct = function(){
		productFactory.create($scope.product, function(data){
			if(data.errors){
				$scope.errors=data.errors
			}
			else{
				$scope.newProduct = data;
				sync();
				$scope.product = {};
			}
		})
	}

	$scope.removeProduct = function(id){
		productFactory.destroy(id, function(data){
			if(data.errors){
				$scope.errors = data.errors;
			}
			else{
				sync();
			}
		});
	}


}])