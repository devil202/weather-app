var request=require('request'),
	express=require('express'),
	parser=require('body-parser'),
	geo=require('./geocode'),
	yargs=require('yargs'),
	forecast=require('./forecast'),
	port=process.env.PORT || 3000;
	app=express(),
	arg=yargs.options({
		a:{
			demand:true,
			alias:"address",
			discription:"Address For Weather To Fetch.",
			string:true
		}
	}).help().argv;
	console.log(arg.a);
	geo.geocode(arg,(err,result)=>
	{
		if (err) {
			console.log(err);
		}
		else{
				forecast.forecast(result.longitude,result.latitude,function (err,temperature) 
				{
					if(err)
					{
						console.log(err);
					}
					else{
						console.log(temperature);
					}
				});
		}
		
	});
	app.get('/',function(req,res)
	{
		res.send("<h1>Welcome To Home Page.</h1>")
	}) ;
app.listen(port,function(){
	console.log(`Server Started at ${port} Port`);
});