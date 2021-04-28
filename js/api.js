document.addEventListener('DOMContentLoaded',makeRequest)

const img = document.getElementById('img')

const btnRefresh = document.getElementById('btnrefresh')


btnRefresh.onclick = makeRequest

function makeRequest() {
    
    const api = new XMLHttpRequest()
    api.onload = ()=>{
        const data = JSON.parse(api.response)
        console.log(data);
        img.src = data.image
    }
    api.open('get','https://foodish-api.herokuapp.com/api/')
    api.send()
}
