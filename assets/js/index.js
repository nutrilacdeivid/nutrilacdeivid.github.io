(() => {
    const btnVisita = document.querySelector("#visit");
    
    if(btnVisita){
        btnVisita.addEventListener('click', () => {
            window.open('../assets/html/home.html', '_self');
        })
    }
})()