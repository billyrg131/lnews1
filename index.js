var searchInput = document.querySelector('.search');
var btn = document.getElementById('btn-search');
var news = document.getElementById('news');
var politics = document.getElementById('politics');
var video = document.getElementById('videos');
var tech = document.getElementById('tech');
var list = document.getElementById('newsList');

btn.addEventListener('click', enter)
function enter(){
    fetch('https://newsapi.org/v2/everything?q='+
    searchInput.value+'&apiKey=10509121f8ba4f998f7d43c436836cf5')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.articles.forEach(article=>{

            const img = document.createElement("img");
            img.setAttribute("src", article.urlToImage);
            img.style.width="380px";
            img.style.height="340px";
            img.style.display="flex";
            img.style.alignItems="center";
            list.appendChild(img);

            const a = document.createElement("a");
            const p1 = document.createElement("p");
            a.setAttribute('_target', 'self');
            a.setAttribute('href', article.url);
            a.textContent = article.title;
            a.style.fontSize = "24px";
            p1.appendChild(a)
            list.appendChild(p1);

            const p = document.createElement("p");
            p.textContent = article.description;
            p.style.fontSize = "21px";
            p.style.textDecoration = "italic";
            list.appendChild(p);
            
            
        })
    })
    .catch(err => {
        alert(err)
    })
}
news.addEventListener('click', newsFunc)
function newsFunc(){
    fetch('https://newsapi.org/v2/everything?q=world-news&apiKey=10509121f8ba4f998f7d43c436836cf5')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.articles.forEach(article=>{

            const img = document.createElement("img");
            img.setAttribute("src", article.urlToImage);
            img.style.width="380px";
            img.style.height="340px";
            img.style.display="flex";
            img.style.alignItems="center";
            list.appendChild(img);

            const a = document.createElement("a");
            const p1 = document.createElement("p");
            a.setAttribute('_target', 'self');
            a.setAttribute('href', article.url);
            a.textContent = article.title;
            a.style.fontSize = "24px";
            p1.appendChild(a)
            list.appendChild(p1);

            const p = document.createElement("p");
            p.textContent = article.description;
            p.style.fontSize = "21px";
            p.style.textDecoration = "italic";
            list.appendChild(p);
            
            
        })
    })
    .catch(err => {
        alert(err)
    })
}
politics.addEventListener('click', pFunc)
function pFunc(){
    fetch('https://newsapi.org/v2/everything?q=world-politics&apiKey=10509121f8ba4f998f7d43c436836cf5')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.articles.forEach(article=>{

            const img = document.createElement("img");
            img.setAttribute("src", article.urlToImage);
            img.style.width="380px";
            img.style.height="340px";
            img.style.display="flex";
            img.style.alignItems="center";
            list.appendChild(img);

            const a = document.createElement("a");
            const p1 = document.createElement("p");
            a.setAttribute('_target', 'self');
            a.setAttribute('href', article.url);
            a.textContent = article.title;
            a.style.fontSize = "24px"
            p1.appendChild(a)
            list.appendChild(p1);

            const p = document.createElement("p");
            p.textContent = article.description;
            p.style.fontSize = "21px";
            p.style.textDecoration = "italic";
            list.appendChild(p);
            
            
        })
    })
    .catch(err => {
        alert(err)
    })
}
video.addEventListener('click', vFunc)
function vFunc(){
    fetch('https://newsapi.org/v2/everything?q=whatsapp-videos&apiKey=10509121f8ba4f998f7d43c436836cf5')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.articles.forEach(article=>{

            const img = document.createElement("img");
            img.setAttribute("src", article.urlToImage);
            img.style.width="380px";
            img.style.height="340px";
            img.style.display="flex";
            img.style.alignItems="center";
            list.appendChild(img);

            const a = document.createElement("a");
            const p1 = document.createElement("p");
            a.setAttribute('_target', 'self');
            a.setAttribute('href', article.url);
            a.textContent = article.title;
            a.style.fontSize = "24px";
            p1.appendChild(a)
            list.appendChild(p1);

            const p = document.createElement("p");
            p.textContent = article.description;
            p.style.fontSize = "21px";
            p.style.textDecoration = "italic";
            list.appendChild(p);
            
            
        })
    })
    .catch(err => {
        alert(err)
    })
}
tech.addEventListener('click', techFunc)
function techFunc(){
    fetch('https://newsapi.org/v2/everything?q=tech-news&apiKey=10509121f8ba4f998f7d43c436836cf5')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.articles.forEach(article=>{
            const img = document.createElement("img");
            img.setAttribute("src", article.urlToImage);
            img.style.width="380px";
            img.style.height="340px";
            img.style.display="flex";
            img.style.alignItems="center";
            list.appendChild(img);

            const a = document.createElement("a");
            const p1 = document.createElement("p");
            a.setAttribute('_target', 'self');
            a.setAttribute('href', article.url);
            a.textContent = article.title;
            a.style.fontSize = "24px";
            p1.appendChild(a)
            list.appendChild(p1);

            const p = document.createElement("p");
            p.textContent = article.description;
            p.style.fontSize = "21px";
            p.style.textDecoration = "italic";
            list.appendChild(p);
        })
    })
    .catch(err => {
        alert(err)
    })
}