const username = document.querySelector('#username')
const title = document.querySelector('#title')
const content = document.querySelector('#content')


document.querySelector('#form').addEventListener('submit', function(event){
    event.preventDefault()

    if(username.value&&title.value&&content.value){

        const blogpost={
            name: username.value,
            title: title.value,
            content: content.value
        }

        if(localStorage.count){
            localStorage.count++
            localStorage.setItem(localStorage.getItem('count'), JSON.stringify(blogpost))
        }else{
            localStorage.setItem('count', 1)
            localStorage.setItem(localStorage.getItem('count'), JSON.stringify(blogpost))
        }

        window.location.href = "./blog.html"
    }else{
        event.preventDefault()
        bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show()
    }
})