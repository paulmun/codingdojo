app.factory('orderFactory', ['$http', function($http){

	function OrderFactory(){

		this.sync = function(callback){
			$http.get('/orders').then(function(returnData){
				callback(returnData.data);
			});
		}

		this.create = function(order, callback){
			$http.post('/orders', order).then(function(returnData){
				callback(returnData.data);
			});
		}

	}

	return new OrderFactory();

}]);