let post = document.getElementById('post');
let post_autor = document.getElementById('post-autor');
let img2 = document.getElementById('img2');
let urlForImg = "https://dog.ceo/api/breeds/image/random"
let url = "https://type.fit/api/quotes"

  getData();
setInterval( getData, 4000) 
getDataImg()
setInterval( getDataImg, 4000) 

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    printPost(data[random (data)])

  }

  function random (max){
        return Math.floor(Math.random() * (Object.keys(max).length - 0) + 0)
  }

  function printPost(text){
    post.textContent = text.text;
    let text_autor = text.author.slice(0, -10)
    if(text_autor.length > 0)
    post_autor.textContent = text_autor;
    else 
    post_autor.textContent = "no author";
  }

  async function getDataImg() {
    const res = await fetch(urlForImg);
    const data = await res.json();
    console.log(data.message);
    // img2.style.backgroundColor = "red"
    img2.style.backgroundImage ="url("+"'"+data.message+"'"+")"; 

  }


  