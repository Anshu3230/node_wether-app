const path = require('path');
const express = require('express');
const { join } = require('path');
const hbs = require('hbs');

const {getForCastDetails} = require('../utils/forcast');

const app =express();

// Path module
// It is  a core module.
// It can we used to make paths 
console.log(path.join(__dirname, '../Public'));
const publicDirectoryPath = path.join(__dirname, '../Public');
// const viewsPath = path.join(__dirname, '../view');  // It can be used to provide views path if needed
const partialsPath = path.join(__dirname, '../views/partials');




// Setting the default path here to make a directory a default directory
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);
// app.set('view', viewsPath); // Setting views path if views are in some differenr folder name or not at default location.

app.use(express.static(publicDirectoryPath));

app.get('',(req, res)=>{
    res.render('index',{
        titleRender: 'Testing Titles',
        desc: 'description',
        footerText: 'Home Footer Text'
    })
});

app.get('/about',(req, res)=>{
    res.render('about',{
        titleRender: 'Testing Titles',
        desc: 'description',
        footerText: 'About us Footer Text'

    })
});

app.get('/wether',(req, res)=>{

    if(!req.query.lat || !req.query.long){
       return res.send({error:'please provide correct lattitute and longitude.'})
    }
    console.log('2',req.query);

    getForCastDetails(req.query.lat, req.query.long,(err, response)=>{
        if(err){
           return res.send({error:err});
        }else{
            res.send({...response})
        }
    })
});

// app.get('/wether',(req, res)=>{

//     if(!req.query.lat || !req.query.long){
//        return res.send({error:'please provide correct lattitute and longitude.'})
//     }
//     console.log('2',req.query);

//     getForCastDetails(req.query.lat, req.query.long,(err, response)=>{
//         if(err){
//             res.send(err);
//         }else{
//             console.log(response)
//             res.send(response);
//         }


//     })

// });


// app.get('',(req, res)=>{
//     res.send('Hello express!')
// });

// app.get('/help',(req, res)=>{
//     res.send('<h1>Hellos jasmine</h1>');
// })

app.get('*',(req, res)=>{
    res.send('<h2>My 404 Page</h2>');
})


app.listen(3000,()=>{
    console.log('Server is up on port 3000');
})