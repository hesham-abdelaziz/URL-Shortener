const input = document.querySelector('.input-field');
const btn = document.querySelector('.submitBtn');
const actualLink = document.querySelector('.actual-link');
const shortenedLink = document.querySelector('.shorten-link a');
const linksContainer = document.querySelector('.entered-sites');

linksContainer.style.display = 'none'
const params = new URLSearchParams();




input.addEventListener('keydown' , (e) => {
  if(e.keyCode == 13){
    shorten();
  }
  else {
    return
  }
})


function shorten() {
params.append("url" , input.value);
const options = {
  method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '49e22361e7mshfafb5e1d1fdd143p175c7cjsnfe2629b3c185',
		'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
	},
  body : params
}
  fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
  .then(res => res.json())
  .then(res => {
    actualLink.innerHTML = input.value;
    shortenedLink.innerHTML = res.result_url;
    shortenedLink.setAttribute('href' ,res.result_url );
    linksContainer.style.display = 'block'
    console.log(res);
  })
  .catch(err => console.log(err))
};


function copyLink(){
 navigator.clipboard.writeText(shortenedLink.innerHTML);
 alert('Link Copied!')
}