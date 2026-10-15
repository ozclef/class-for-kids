

const app = document.getElementById("app");

async function loadJSON(path){
  const res = await fetch(path);
  return res.json();
}

async function render(){
  const hash = location.hash || "#/feed";
  const [_, route] = hash.split("/");

//   const profile = await loadJSON("data/profile.json");
const profile = await loadJSON("data/profile.json") || {
    theme:"dark",
    name:"oz clef",
    bio:"Blog website online posting",
    avatar:"/img/ico instituto abi.jpg",
    cover:""
};
	
async function loadJSON(path){
  try{
    const res = await fetch(path);

    if(!res.ok){
      throw new Error(`${path} ${res.status}`);
    }

    return await res.json();

  }catch(err){
    console.warn("No pude cargar:", path);
    return null;
  }
}

  document.documentElement.className = profile.theme === "light" ? "light" : "";

  let html = `
  <header>
    	<div>
		<strong>
			<a href="https://ozclef.github.io/class-for-kids/">
			<img class="logo" src="css/Captura de pantalla_29-6-2026_15819_ozclef.github.io.jpeg"
					alt="logo org" transform="escale:0.19" width="40px" height="40px">
					Kids-Gaming</a>
					</strong>
					</div>
						<nav>
							<a href="#/feed">Feed</a>
							<a href="#/profile">Perfil</a>
							<a href="#/galery">Post</a>
							<a href="#/photos">Fotos</a>
							<a href="#/videos">Videos</a>
							<a href="#/settings">Ajustes</a>
						</nav>
					</header>
				<div class="container">
				`;
	
  if(route === "feed") html += await viewFeed();
  if(route === "profile") html += viewProfile(profile);	
  if(route === "galery") html += await viewGalery();
  if(route === "photos") html += viewPhotos();
  if(route === "videos") html += viewVideos();
  if(route === "settings") html += viewSettings(profile);

  html += `</div>`;
  app.innerHTML = html;
}

async function viewFeed(){
  const feed = await loadJSON("data/feed.json");
  let out = `<div class="card-post"><h2>POSTs</h2>`;
 feed.forEach(p=>{
    out += `
      <div class="card">
    <div class="feed-item">
	  <br>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
		<br>
      <img class="thumb" loading="lazy"  width="80%"  src="${p.img}">
	  <br>
        <a class="btn" href="${p.url}">Abrir</a>
		</div>
      </div>
	  `;
  });
  return out + `</div>`;
}


function viewProfile(p){
  return `
<div class="cover" style="background-image:url('${p.cover}')"></div>
  <div class="card-post">
    <img class="profile-pic" src="${p.avatar}">
    <h2>${p.name}</h2>
    <p>${p.bio}</p>
  </div>	
  
  `;
}



async function viewGalery(){

  return `
    <div class="card-post">	
  	<!---<p> imagenes sobre lo visto en clase</p>
      <h2> pics  posts</h2>
      <iframe src="feed/index.html"
        width="90%"
        height="10000"
        style="border:none;"
        loading="lazy">
      </iframe>---->
      <div class="card">
		  <p>"Durante un taller con estudiantes de 10 a 12 años descubrí que las actividades prácticas con Arduino mantenían mucho mejor la atención que una clase expositiva. Una dinámica de preguntas improvisadas me permitió evaluar comprensión en tiempo real."</p>
	    </div>
	
      <div class="card">
		  <h2>AJEDREZ & Studient</h2>
		  <p>"Uno de los momentos que más recuerdo fue 
			  jugar ajedrez con un estudiante que tenía un talento natural para el juego. <br>
			  Más que ganar o perder, 
			  me hizo recordar que un docente también aprende de sus alumnos."</p>
	    </div>
	
      <div class="card">
	<p>
		 "Lo único que me molesta es que no me 
		agreguen al grupo para ver mis propios memes." 
		😂Suena a que había buena convivencia. Y sí,
		es normal que los alumnos hagan stickers o memes
		del profe cuando hay confianza.
	</p>
      </div>
	
      <div class="card">
		  <h3></h3>
		  <p></p>
      </div>
			<br><br>
      <div class="card">
        <h2>ESTE LOBO ES DE ALGUIEN QUE CONOZCO</h2>
        <p>Hecho por ella-ARTE</p>
        <img src="https://uploads.onecompiler.io/43sfe2g4e/43uaxht5p/Screenshot_20250808-025347.png"
          style="max-width:180px; border:3px solid pink;">
        <p>Comenta!</p>
      </div>
      <div class="card">
        <h3>niños pequeños aprendieron en computación a diseñar un personaje para un videojuego</h3>
        <img src="https://uploads.onecompiler.io/43sfe2g4e/43uaxht5p/image_1756007342901.png">
      </div>

	
      <div class="card">
        <h3>Alumnos de Verano</h3>
        <p>Pre-view del juego creado en GDevelop.io</p>
		  
        <a href="https://game-previews.gdevelop.io/1755844196785-371778/index.html">Pantalla Completa</a>
		  <p>https://flappybird.io/</p>
		  <iframe src="https://flappybird.io/"></iframe>
        <h3>FLAPPY BIRD a DINO</h3>
       <!----- 		  --->
        <a href="">Jugar</a>
      </div>
	
    </div>
  `;
}



function viewPhotos(){
  return ` 
	  <br>
	  <div class="card-post">
	  <h2> AUN SIGO TOMANDO EN CUENTA CADA DETALLE! </h2>
	  <p> PERSONAJES, Softwares, gaming, Colors </p>
	  <iframe src="feed/fotos.html" 
	  width="400px" height="6000"></iframe>	
	  </div>
	  `;
}

function viewVideos(){
  return `
  
  <div class="card">
        <h2>Videos devs en facebook/youtube... </h2>

      <iframe src="feed/videos.html"
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



/*
  <div class="card-post">
  <img src="/css/Captura de pantalla_29-6-2026_15819_ozclef.github.io.jpeg">
  <iframe src="/feed/profile.html" width="97%" height="1503px"></iframe>
  </div>
     <div class="card-post">
		<iframe src="img/index.html"
        width="100%"
        height="600"
        style="border:none;"
        loading="lazy">
      </iframe>
	  </div>
*/
