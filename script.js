
const searchInput = document.getElementById('searchInput');
const mainContent = document.getElementById('mainContent');
const favoritesList = document.getElementById('favoritesList');


if(localStorage.getItem("fav")==null){
  document.getElementById('value').innerHTML =  `<a href="favarite.html" class="nav-link"> <p > FavoritesList &nbsp </p></a>`;
}else{
  document.getElementById('value').innerHTML =  `<a href="favarite.html" class="nav-link"> <p > FavoritesList &nbsp ${localStorage.getItem("fav")}</p></a>`;
}



let favorites = [];
localStorage.setItem("start",1);




async function searchMeals(query) {
  mainContent.innerHTML = '';
  // fatching data by name
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  const data = await response.json();

  if (data) {
    // console.log(data.meals);
    data.meals.forEach(meal => {
      const mealItem = document.createElement('div');
      mealItem.classList.add('meal-item');
      mealItem.innerHTML = `
      <a href="dish.html?=${meal.idMeal}">  <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <div style=" text-align: center;" >  <h3 >${meal.strMeal}</h3>   </a>
     </a>
  </div>
 <div style="display: flex;
        flex-wrap: wrap;" id="detail">  
    
    <a href="dish.html?=${meal.idMeal}" id="recipe" class="btn btn-primary" style="width:10em;" >Recipe</a>
        <button class="favorite-btn3 btn btn-primary" type="button" style="width:10em;">Favorites</button>  </div> `;

      mainContent.appendChild(mealItem);
      const favoriteBtn = mealItem.querySelector('.favorite-btn3');
      favoriteBtn.addEventListener('click', () => addToFavorites(meal));
    });
  }
}





var f=0;
function addToFavorites(meal){
// console.log((localStorage.getItem("start")));
// localStorage.setItem(meal.idMeal,JSON.stringify(meal));
  if (!favorites.includes(meal)) {
    favorites.push(meal);
    localStorage.setItem(meal.idMeal,JSON.stringify(meal));
    const data = localStorage.getItem(f);
    f++;
    // console.log("data: ", JSON.parse(data));
    updateFavoritesList();

   
  }
}



function updateFavoritesList() {
  var favlength=0;
  for(var a=0;a<localStorage.length;a++){
    const key=localStorage.key(a);
    if(!isNaN(key)){
      favlength++;
      // console.log(favlength);
    }
  }
  // document.getElementById('value').innerHTML=count;
  document.getElementById('value').innerHTML = '';
  favorites.forEach(meal => {
    favoriteItem.textContent =favlength;
    document.getElementById('value').appendChild(favoriteItem);
    localStorage.setItem("fav",favlength);

document.getElementById('value').innerHTML =  `<a href="favarite.html" class="nav-link"> <p > FavoritesList &nbsp ${localStorage.getItem("fav")}</p></a>`;
  });
}



const favoriteItem = document.createElement('p');


if(mainContent){
  searchInput.addEventListener('input', (event) => {
    const query = event.target.value;
    searchMeals(query);
  });
searchMeals('');
}


