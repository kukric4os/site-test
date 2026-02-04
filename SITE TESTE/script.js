let list  = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// count = 3
// 0, 1, 2
//
let count = list.length;
let active = 0 

next.onclick = function() {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    // 0 >= 2 ? 0 : 0 + 1 = 1
    // 1 >= 2 ? 0 : 1 + 1 = 2
    // 2 >= 2 ? 0 : 2 + 1 = 0

    //
    active = active >= count -1 ? 0 : active + 1;

    console.log("teste avançar", active); 

    active = active >= -1 ? 0 : active + 1;
    list[active].classList.add('active');
}


prev.onclick = function() {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');
    
    console.log("teste voltar", active);

    active = active <= 0 ? count -1 : active - 1; 
    list[active].classList.add('active');
    

}