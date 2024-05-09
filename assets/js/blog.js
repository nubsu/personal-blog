for(let i=1;i<=localStorage.count;i++){
    if(localStorage[i]){
        const h2 = document.createElement('h2')
        const h5 = document.createElement('h5')
        const p = document.createElement('p')
        const div = document.createElement('div')
        const start = document.querySelector('#start')
        const blog = start.appendChild(div)
        const shlawgpost = JSON.parse(localStorage.getItem([i]))
    
        h2.textContent=shlawgpost.title
        h5.textContent=shlawgpost.content
        p.textContent=shlawgpost.name
    
        blog.appendChild(h2)
        blog.appendChild(h5)
        blog.appendChild(p)
    
        blog.setAttribute('class', 'p-4 m-2 border border-secondary border-2 rounded text-break')
        p.setAttribute('class', 'mb-0 mt-3')
    
        console.log(i)
    }
}