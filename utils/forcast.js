const request = require('request');

const getForCastDetails = (lat, long, callBack)=>{
    const url = `http://api.weatherstack.com/current?access_key=aadf98f115538d4a2a941f7a19e7fe7d&query=${lat},${long}`;
    request({url, json:true},(err, res)=>{
        if(err){
            callBack('Unable to reach API', undefined);
        }else if(res.body.error){
            callBack('Lattitude and longitude provided are not correct', undefined);
        }else{
            callBack(undefined, res.body.current);
        }

    });
}

module.exports= {
    getForCastDetails,
}