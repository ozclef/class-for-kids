

//  ///  

const app = document.getElementById("app");

async function loadJSON(path){
  const res = await fetch(path);
  return res.json();
}

async function render(){
  const hash = location.hash || "#/feed";
  const [_, route] = hash.split("/");

  const profile = await loadJSON("data/profile.json");

  document.documentElement.className = profile.theme === "light" ? "light" : "";

  let html = `
  <header>
    <div><strong><a href="/">Kids-Gaming</a></strong></div>
    <nav>
    <a href="#/feed">Feed</a>
    <a href="#/profile">Perfil</a>
    <a href="#/cv">Portafolio-cv</a>
      <a href="#/photos">Fotos</a>
      <a href="#/videos">Videos</a>
      <a href="#/settings">Ajustes</a>
    </nav>
  </header>
  <div class="container">
  `;
/*

	 <header style="background: #16a34a(⁰%):blue{100%);"> 
			<div style="font-weight:700">
				<img class="logo" 
					src="https://uploads.onecompiler.io/43sfe2g4e/43uaxht5p/Screenshot_20250808-025347.png"
					alt="logo org" transform="escale:0.9" width="40px" height="40px"/>
	  <a href="index.html">WEB KID TECH</a>
			</div>
    <!---
 ---->	
    <span>
      <input type="text" id="searchInput" placeholder="Buscar...">
      <button onclick="searchContent()">Buscar</button>
    </span>
		</header>
	*/

  if(route === "feed") html += await viewFeed();
  if(route === "profile") html += viewProfile(profile);	
  if(route === "cv") html += await viewCv();
  if(route === "photos") html += viewPhotos();
  if(route === "videos") html += viewVideos();
  if(route === "settings") html += viewSettings(profile);

  html += `</div>`;
  app.innerHTML = html;
}

async function viewFeed(){
  const feed = await loadJSON("data/feed.json");
  let out = `<div class="card-post"><h2>Feed</h2>`;
 feed.forEach(p=>{
    out += `
    <div class="feed-item">
      <img class="thumb" loading="lazy" src="${p.img}">
      <div>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
        <a class="btn" href="${p.url}">Abrir</a>
		</div>
      </div>

	  <div class="card-post">
	  	<p> imagenes sobre lo visto en clase</p>
	  </div>
	  `;
  });
  return out + `</div>`;
}

function viewProfile(p){
  return `
<!---
<div class="cover" style="background-image:url('${p.cover}')"></div>
  <div class="card">
    <img class="profile-pic" src="${p.avatar}">
    <h2>${p.name}</h2>
    <p>${p.bio}</p>
  </div>
----->

  <div class="card-post">
  <iframe src="/feed/profile.html" width="97%" height="1503px"></iframe>
  </div>
  `;
}



async function viewCv(){

  return `
    
	<div class="card-post">	
      <h2>CV</h2>
      <iframe src="/feed/cv.html"
        width="100%"
        height="3000px"
        style="border:none;"
        loading="lazy">
      </iframe>
    </div>
  `;
}


function viewPhotos(){
  return `
        <iframe src="/feed/fotos.html"
        width="100%"
        height="3000"
        style="border:none;"
        loading="lazy">
      </iframe>
	  `;
}

function viewVideos(){
  return `
  
  <div class="card">
        <h2>Videos devs en facebook/youtube... </h2>

      <iframe src="/feed/videos.html"
        width="100%"
        height="3000"
        style="border:none;"
        loading="lazy">
      </iframe>
</div>
  `;
}

function viewSettings(p){
  return `
  <div class="card-post"><h2>Ajustes</h2>
    <p>Tema actual: <strong>${p.theme}</strong></p>
    <p>(En próxima versión editable desde UI)</p>
  </div>`;
}

window.addEventListener("hashchange", render);
render();
