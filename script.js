console.log("hello");

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)

    const weight = parseInt(document.querySelector('#weight').value)
    
    const results = document.querySelector('#results')
console.log(height)
console.log(weight)

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please give a valid height ${height}` ;

    }    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please give a valid weight ${weight}` ;

    } else {
        let h = height * height ;
        let w = h/10000;
        let a = weight/w;
        a.toFixed(2);

        // weight / ((height*height)/10000).toFixed(2)
        // show the result
        results.innerHTML = `<span>${a}</span>`;
    }

});