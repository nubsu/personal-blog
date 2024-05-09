//dark mode
document.querySelector('#body').setAttribute('data-bs-theme', localStorage.getItem('ldmode'))

if(document.querySelector('#body').getAttribute('data-bs-theme')=='dark'){
    document.querySelector('.btn-dark').textContent='light mode'
}

document.querySelector('.btn-dark').addEventListener('click', function(){
    if(document.querySelector('#body').getAttribute('data-bs-theme')=='light'||document.querySelector('#body').getAttribute('data-bs-theme')=='null'){
        document.querySelector('#body').setAttribute('data-bs-theme', 'dark')
        document.querySelector('.btn-dark').textContent='light mode'
        localStorage.setItem('ldmode', 'dark')
    }else{
        document.querySelector('#body').setAttribute('data-bs-theme', 'light')
        document.querySelector('.btn-dark').textContent='dark mode'
        localStorage.setItem('ldmode' , 'light')
    }
})
//