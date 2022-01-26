const button=()=>{
    const burger = document.querySelector('.btn_sitemap');
    burger.addEventListener('click', () =>{
        burger.classList.toggle('toggle');
    });
}
button();