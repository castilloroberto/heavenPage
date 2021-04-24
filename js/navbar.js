
const title = document.title

// verificar si erstamos en el index
let condition = title === 'Home' ? true : false

let paths = {
    index:     condition ? 'index.html'          : '../index.html',
    favorites: condition ? 'pages/favoritos.html': 'favoritos.html' ,
    account:   condition ? 'pages/cuenta.html'   : 'cuenta.html'
}

const navbar = `
 
<nav class="navbar">
        <div class="nav-brand">
            <i class="fas fa-meteor"></i>
            <span>Heaven</span>
        </div>

        <div class="nav-links">
            <a href=${paths.index} class="nav-a">
                <i class="fas fa-home"></i>
                <span>Home</span>
            </a>
            <a href=${paths.favorites} class="nav-a">
                <i class="fas fa-heart"></i>
                <span>Favoritos</span>
            </a>
            <a href=${paths.account} class="nav-a">
                <i class="fas fa-user"></i>
                <span>Cuenta</span>
            </a>
            <a href="" class="nav-a">
                <span>Más</span>
                <i class="fas fa-chevron-down"></i>
            </a>
        </div>
    </nav>

`


const headLinks = `
<link rel="stylesheet" href="../css/navBar.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
`
const pageContent = document.body.innerHTML
document.head.innerHTML += headLinks

document.body.innerHTML = navbar
document.body.innerHTML += pageContent


const aLinks = document.querySelectorAll('a.nav-a span')
console.log(aLinks);
aLinks.forEach(e => {

    if(title == e.textContent){

        e.parentElement.classList.add('link-selected')
        console.log(e.parentElement);
    }
    
});
// const aLinks = document.querySelectorAll('a.nav-a')


// aLinks.forEach(e => {
//     e.onclick = clickedLink
// });


