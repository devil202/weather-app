var request=require('request');
function forecast(lng,lat,callback) 
{
	request({
				url:`https://api.darksky.net/forecast/eb20f128824c2512f98ac8a4b4c13cc6/${lng},${lat} `,
				json:true
			},function(err,response,body) 
			{
				if(!err&&response.statusCode==200)
				{
					callback(undefined,body.currently.temperature);	
				}
				else{
					callback('Sorry Unable get forecast request.');
				}
				
	});
}
module.exports={forecast};