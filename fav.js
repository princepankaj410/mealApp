const mainContent = document.getElementById('mainContent');


// Initialize an empty array to store the data with numeric keys
const numericDataArray = [];
// Loop through all keys in localStorage
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    // Check if the key is a number
    if (!isNaN(key)) {
        const value = localStorage.getItem(key);

        // Create an object with key and value, then push it into the array
        numericDataArray.push({ key, value });
    }
}



// console.log(numericDataArray);
for(var a=0;a<numericDataArray.length;a++){
 const jsonData =JSON.parse(numericDataArray[a].value);  
    const mealItem = document.createElement('div');
    mealItem.classList.add('meal-item');
    console.log(jsonData.idMeal);
    mealItem.innerHTML = `
    <a href="dish.html?=${jsonData.idMeal}">  <img src="${jsonData.strMealThumb}" alt="${jsonData.strMeal}">
    <div style=" text-align: center;" >  <h3 >${jsonData.strMeal}</h3>   </a>
   </a>
   <div style="display:flex;flex-wrap: wrap;">  
   <a href="dish.html?=${jsonData.idMeal}" id="recipe" class="btn btn-primary" style="width:10em;" >Recipe</a>
   <a href="#" id="recipe" class="btn btn-primary" style="width:10em;" onclick="removefromfav(${jsonData.idMeal})" >Romove fav</a>
     </div>
</div>`;
mainContent.appendChild(mealItem);
}


function removefromfav(id){
  localStorage.removeItem(id);
  const c=localStorage.getItem("fav");
// parseInt(c);

localStorage.setItem("fav",parseInt(c)-1);
  console.log(localStorage.getItem("fav"));
//   console.log()
  window.location.reload();
}

