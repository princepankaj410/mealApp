// const searchInput = document.getElementById('searchInput');
// // document.getElementById('value').innerHTML =localStorage.getItem("fav");

if(localStorage.getItem("fav")==null){
  document.getElementById('value').innerHTML =  `<a href="favarite.html" class="nav-link"> <p > FavoritesList &nbsp </p></a>`;
}else{
  document.getElementById('value').innerHTML =  `<a href="favarite.html" class="nav-link"> <p > FavoritesList &nbsp ${localStorage.getItem("fav")}</p></a>`;
}

const id= window.location.search.substring(2);
// console.log(id);

console.log(localStorage.getItem("fav"));

  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => {
          const meal = data.meals[0];
       
          mealDetails.innerHTML =`
          <div class="imgpart" > <img src="${meal.strMealThumb}" id="recipeImg">  
            <div  style="margin-top:150px"  > <h1> ${meal.strMeal}</h1>  <button id="favbtn" class="favorite-btn3 btn btn-primary" onclick="addToFavorites(${meal.idMeal})" type="button"  style=" height: fit-content;">Favorites</button>    </div>

           <p" style="width:1200px;margin:25px;margin-top:26px"  >${meal.strInstructions}</p>   
            </div>

           </div>
          `;
        
      });

      var p=true;




      function addToFavorites(mealid){
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        .then(response => response.json())
        .then(data => {
            const meal = data.meals[0];



            if(!localStorage.getItem(mealid)){
              console.log("sdf");
              const c=localStorage.getItem("fav");  
              localStorage.setItem(meal.idMeal,JSON.stringify(meal));

              if(c==null){
                  localStorage.setItem("fav",1);
              }else{
               localStorage.setItem("fav",parseInt(c)+1);
              }
          
              
              
              
                  }

document.getElementById('value').innerHTML =  `<a href="favarite.html" class="nav-link"> <p > FavoritesList &nbsp ${localStorage.getItem("fav")}</p></a>`;
      
       

      });
       
  
    }