const c = console.log,
$contenedor = document.getElementById('contenedor__cursos'),
url = 'https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories',
fragmento = document.createDocumentFragment();

/* function obtenerTarjetas(){
  fetch(url)
  .then((res)=>{
    //c(res)
    return res.json()
  })
  .then((json)=>{
    //c(json)
    c(json.communityCategories)
    json.communityCategories.forEach(e => {
      const div=document.createElement('div')
      div.classList.add('tarjeta')
      div.innerHTML=`
      <div class="tarjeta__imagen">
        <img src="${e.background || 'https://storage.googleapis.com/bucket-larnu/media/business/142/images/2P6FENBB.png'}" 
        alt="${e.name}" class="tarjeta__imagen-background">
        <img src="${e.icon}" alt="${e.name}" class="tarjeta__imagen-icono">
      </div>
      <div class="tarjeta__texto">
        <h3 class="tarjeta__titulo">${e.name}</h3>
        <p class="tarjeta__texto">Total Quizzes: ${e.totalQuizzes}</p>
        <p class="tarjeta__texto">User: ${e.users}</p>
        <a href="https://larnu.app/" target="_blank" class="btn">Go to Larnu</a>
      </div>
      
      `;
      fragmento.appendChild(div);
    });
    $contenedor.appendChild(fragmento);
  })
}
obtenerTarjetas() */

/* const obtenerTarjetas=async()=>{
  try {
    const res = await axios.get(url);
    return res.data.communityCategories;

    
  } catch (err) {
    console.log(err);
  }
};

const mostrarCursos = async() => {
  const data = await obtenerTarjetas();
  
  data.forEach((e) => {
    const div=document.createElement('div')
      div.classList.add('tarjeta')
      div.innerHTML=`
      <div class="tarjeta__imagen">
        <img src="${e.background || 'https://storage.googleapis.com/bucket-larnu/media/business/142/images/2P6FENBB.png'}" 
        alt="${e.name}" class="tarjeta__imagen-background">
        <img src="${e.icon}" alt="${e.name}" class="tarjeta__imagen-icono">
      </div>
      <div class="tarjeta__texto">
        <h3 class="tarjeta__titulo">${e.name}</h3>
        <p class="tarjeta__texto">Total Quizzes: ${e.totalQuizzes}</p>
        <p class="tarjeta__texto">User: ${e.users}</p>
        <a href="https://larnu.app/" target="_blank" class="btn">Go to Larnu</a>
      </div>
      
      `;
      fragmento.appendChild(div);
  });
  $contenedor.appendChild(fragmento);
};

mostrarCursos();
*/

const obtenerTarjetas=async()=>{
  try {
    const res = await axios.get(url);
    const data = res.data.communityCategories;

    data.forEach((e) => {
      const div=document.createElement('div')
        div.classList.add('tarjeta')
        div.innerHTML=`
        <div class="tarjeta__imagen">
          <img src="${e.background || 'https://storage.googleapis.com/bucket-larnu/media/business/142/images/2P6FENBB.png'}" 
          alt="${e.name}" class="tarjeta__imagen-background">
          <img src="${e.icon}" alt="${e.name}" class="tarjeta__imagen-icono">
        </div>
        <div class="tarjeta__texto">
          <h3 class="tarjeta__titulo">${e.name}</h3>
          <p class="tarjeta__texto">Total Quizzes: ${e.totalQuizzes}</p>
          <p class="tarjeta__texto">User: ${e.users}</p>
          <a href="https://larnu.app/" target="_blank" class="btn">Go to Larnu</a>
        </div>
        
        `;
        fragmento.appendChild(div);
    });
    $contenedor.appendChild(fragmento);
  } catch (err) {
    console.log(err);
  }
}; 

obtenerTarjetas();