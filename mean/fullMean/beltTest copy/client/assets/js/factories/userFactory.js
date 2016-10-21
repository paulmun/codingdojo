app.factory('userFactory', ['$http', '$cookies', function($http, $cookies){
	var user = {},
		sessionObj;

	function UserFactory(){
		this.create = function(user, callback){
			$http.post('/users', user).then(function(returnData){
				if(returnData.data.errors){
					callback(returnData.data);
				}
				else{
					$cookies.put('sessionObj', returnData.data._id);
					sessionObj = $cookies.get('sessionObj');
					user = returnData.data;
					callback(user);				
				}
			});
		}
		this.sync = function(callback){

		}
		this.cookieJar = {
			sync: function(callback){
				if(sessionObj){
					$http.get('/users/'+sessionObj).then(function(returnedData){
						user = returnedData.data;
						callback(user);
					})
				}
				else if(!sessionObj && user){
					user = {};
				}
			},
			check: function(){
				if(sessionObj){
					return true;
				}
				else{
					user = {};
					return false;
				}
			},
			clear: function(){
				sessionObj = '';
				user = {};
			}
		}
	}

	return new UserFactory();
}]);
		
		