var accept = document.querySelector('#connectAmount').innerText 
var decline = document.querySelector(`#connectReq`).innerText

function remove(name){
    
    document.querySelector(name).remove(); 

    decline--
    document.querySelector(`#connectReq`).innerText = decline


}

function add(name){
    document.querySelector(name).remove(); 

    accept++ 
    document.querySelector(`#connectAmount`).innerText = accept 

    decline--
    document.querySelector(`#connectReq`).innerText = decline
}

function changeName(name){ 

    document.querySelector(`#proName`).innerText = name

}