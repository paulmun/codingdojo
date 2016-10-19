app.factory('productFactory', ['$http', function($http){

	function ProductFactory(){

		this.sync = function(callback){
			$http.get('/products').then(function(returnData){
				callback(returnData.data);
			});
		}

		this.create = function(product, callback){
			$http.post('/products', product).then(function(returnData){
				callback(returnData.data);
			});
		}

		this.destroy = function(id, callback){
			$http.delete('/products/'+id).then(function(returnData){
				callback(returnData.data);
			});
		}

	}

	return new ProductFactory();

}]);