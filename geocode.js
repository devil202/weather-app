var request=require('request');

function geocode(arg,callback)
{
	request({
		url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(arg.a)}`,
		json:true
	},function(error,response,body) 
	{
		if (error) {
			callback('Unable to connect the server.');	
		}
		else if(body.status!="OK"){
			callback('Unable to Find the address.');	
		}
		else
		{
			callback(undefined,{
				address:body.results[0].formatted_address,
				latitude:body.results[0].geometry.location.lat,
				longitude:body.results[0].geometry.location.lng
			});	
		}
	});
}
module.exports={geocode};
//https://api.darksky.net/forecast/eb20f128824c2512f98ac8a4b4c13cc6/37.8267,-122.4233