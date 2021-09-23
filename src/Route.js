;(function(){
	module.exports=function(_g){

		var app = _g.app;
		var http = _g.http;

		function route(){
			app.get('/',function(req,res){
				res.render('index.html',{});
			});
			app.get('/chat',function(req,res){
				res.render('chat.html',{});
			});

			app.get('/shop',function(req,res){
				res.render('shopping.html',{});
			});

			//1. enetry point
			app.listen(9924,function(){
			  preLoad();
			  console.log('rrr# Server listen on *:9924');
			});
		}

		function preLoad(){
			//to-do
		}

		var publicReturn = {
			route:route,
		}
		return publicReturn;
	}

})();



