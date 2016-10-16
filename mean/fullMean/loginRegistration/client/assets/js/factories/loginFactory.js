app.factory('loginFactory', ['$http', '$cookies', function($http, $cookies){
	var user = {},
		sessionObj;

	function LoginFactory(){
		
		this.create = function(newUser, callback){
			console.log('Factory')
			$http.post('/users', newUser).then(
				function(returnedData){
					sessionObj = $cookies.get('sessionObj');
					$cookies.put('sessionObj', returnedData.data._id);
					console.log(returnedData.data._id);
					console.log(sessionObj);

					user = returnedData;
					console.log(user);
					if(typeof(callback) == 'function'){
						callback(returnedData.data);
					}
				}
			)

		}

		this.show = function(user, callback){
			$http.post('/users/'+user.email, user).then(function(returnedData){
				user = returnedData.data;
				callback(user);
				$cookies.put('sessionObj', returnedData.data._id);
				sessionObj = $cookies.get('sessionObj');
				console.log(returnedData.data);
				console.log(sessionObj);
			});
		}

		this.cookieJar = {
			sync: function(callback){
				if(sessionObj){
					$http.get('/users'+sessionObj).then(function(returnedData){
						user = returnedData.data;
						callback(user);
					})
				}
				if(!sessionObj && user){
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

	return new LoginFactory();
}])