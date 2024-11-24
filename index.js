const navBar = document.getElementById('nav-bar')

document.addEventListener('DOMContentLoaded', () => {
    
    if(window.innerWidth > 700){
        navBar.innerHTML = 
            `
                <ul>
                    <li>Home</li>
                    <li>ٔNew</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Catagories</li>
                </ul>
            `
    }
    else {
        
        navBar.innerHTML = 
        `
        <img
        id="icon-menu" 
        src="assets/images/icon-menu.svg" 
        alt="icon-menu">
        <div class="nav-mobile" id="nav-mobile">
        <span class="x" id="x">X</span>
            <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
            </ul>
            </div>
            `
        }
        
    const x = document.getElementById('x')
    const iconMenu = document.getElementById("icon-menu")
    const navMobile = document.getElementById('nav-mobile')
    
    x.addEventListener('click', () => {
        navMobile.style.display = 'none'
    })    
    
    iconMenu.addEventListener('click', () => {
        navMobile.style.display = 'flex'
    })    

})    


