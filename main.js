let input = document.getElementById('JsInput');
let btn = document.getElementById('JsBtn');
let bottom = document.getElementById('box');
let todos = [];

//add event listener = add
btn.addEventListener("click", function (e) {
    todos.push(input.value);
    input.value = '';
    bottom.innerHTML = '';
    // elements create in JS
    for (let i = 0; i < todos.length ; i++) {
        let card = document.createElement('div');
        card.classList.add('card', 'text-left');
        bottom.appendChild(card);

        let cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body d-flex justify-content-between')
        card.appendChild(cardBody);

        let title = document.createElement('h4');
        title.classList.add('card-title');
        title.textContent =`${todos[i]}`;
        cardBody.appendChild(title);
        // Delete btn create 

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn__delete', 'btn-danger');
        deleteBtn.textContent = 'Delete';
        deleteBtn.dataset.id = i;   
        cardBody.appendChild(deleteBtn);
    }
})

bottom.addEventListener('click',function(e){
    let deleteIndex = Number(e.target.dataset.id);
    console.log(deleteIndex);
})



