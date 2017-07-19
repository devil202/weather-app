var request=require('request'),
	geo=require('./geocode'),
	yargs=require('yargs'),
	forecast=require('./forecast');
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
