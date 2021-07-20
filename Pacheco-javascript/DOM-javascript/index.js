// document




//const divi = document.querySelector('div.error');
//const uli = document.querySelector('ul.wizards');
//grab multiole elements
//const paras = document.querySelectorAll('p');



//console.log(til);
//console.log(uli);
//console.log(divi);

//const wizards 

// const mssg = document.querySelector('p');
// mssg.classList.add('error');
// mssg.array.forEach(element => {
    
// });




//mssg.classList.add('success')

// const til = document.querySelector('#page-title');
// console.log(til);

// const mssg = document.querySelectorAll('p');
// mssg.forEach(para =>{
//     //console.log(para.innerText);
//     // para.innerText += ' error';
//     // console.log(para.innerText);
//     //para.textContent +='error';
//     document.querySelector('p').innerText;
//     console.log(para.textContent);
// })

//const mssg = document.querySelector('p');
//mssg.classList.add('error');


// const til = document.querySelector('body > div.content > p');
//  str = til.innerText;
//  let b= str.includes('error');
//  if (b== true){
//   til.classList.add('error');
// }
// let d = str.includes('success')
// if(d == true){
//    til.classList.add('success');
//  }


//  const ulit = document.querySelectorAll('li');
// // console.log(ulit);

// ulit.forEach(singleElement => {
//     str = singleElement.innerText;
//     let b= str.includes('error');
//     if (b== true){
//     singleElement.classList.add('error');
//     }
//     let d = str.includes('success')
//     if(d == true){
//     singleElement.classList.add('success');
// }
// });

// let fruits = ['pineapple', 'banana', 'strawberry', 'apple', 'orange'];

// ul = document.createElement('ul');
// fruits.forEach(function(fruit) {
//     var li = document.createElement('li');
//     li.innerHTML = fruit; 
//     li.className = "fruity " + fruit;
//     ul.appendChild(li);
// });
// document.body.appendChild(ul);
// let htmTemplate = `<li>I'm a sunflower.</li>`



// const spannn =  document.querySelectorAll('span.error')
// spannn.forEach(singleElements => {
//     document.querySelector('span.error').innerText;
//     console.log(singleElements.innerText);
// });

const error = document.querySelectorAll('span');
const content = (add) =>
{
    if(add.className == 'error')
    {
        add.textContent += ' error';
    }
    else if(add.className == 'success')
    {
        add.textContent += ' success';
    }
}
console.log(error);
error.forEach(content);