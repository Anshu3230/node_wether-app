// This is the client side JS.


// fetch('https://puzzle.mead.io/puzzle').then(response=>{
//     response.json().then((data)=>{

//         console.log('data', data)

//     })
// })

// fetch('http://localhost:3000/wether?lat=37.8267&long=-122.4233').then(response=>{
//     response.json().then(data=>{
//         console.log('data', data)

//     });
// });

const wetherForm = document.querySelector('form');
const lat = document.getElementById('lat');
const long = document.getElementById('long');


wetherForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    fetch(`http://localhost:3000/wether?lat=${lat.value}&long=${long.value}`).then(response=>{
    response.json().then(data=>{
        console.log('data', data)

    });
});
    // console.log('Listner is running', long.value, lat.value);
})

