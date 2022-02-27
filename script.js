const APIURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=b';

const main = document.getElementById('main');
const body = document.getElementsByTagName('body');

getFood(APIURL);

async function getFood(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);
   

   // return respData;

	showFood(respData.meals);
	
}


function showFood(foods) {

foods.forEach(food => {
	const {strMeal,
		 strMealThumb, 
		 strIngredient1, 
		 strIngredient2, 
		 strIngredient3, 
		 strIngredient4, 
		 strIngredient5, 
		 strIngredient6, 
		 strIngredient7, 
		 strIngredient8, 
		 strIngredient9, 
		 strIngredient10,
		strArea} = food;

	const myFoods = document.createElement('div');
	myFoods.setAttribute('id', 'foodEl');
	myFoods.setAttribute('class', 'foodEl');

	myFoods.innerHTML = '<img src="' + strMealThumb + '">\
						<h3> Name: ' + strMeal + ' </h3> \
						<div class ="food-info"> \
						<div class = "foodie"> \
						<p> Nationality : ' + strArea  + '</p> \
						<p> Ingredients:</p>  \
						<ul> \
						<li>' + strIngredient1 + '<li> \
						<li>' + strIngredient2 + '<li> \
						<li>' + strIngredient3 + '<li> \
						<li>' + strIngredient4 + '<li> \
						<li>' + strIngredient5 + '<li> \
						<li>' + strIngredient6 + '<li> \
						<li>' + strIngredient7 + '<li> \
						<li>' + strIngredient8 + '<li> \
						<li>' + strIngredient9 + '<li> \
						<li>' + strIngredient10 + '<li> \
						</ul>\
						</div>\
						</div>'

	main.appendChild(myFoods);

});

}


/*function showInfo(myFoods) {

	myFoods.forEach(myFood => {
		const {strMeal,
			strMealThumb, 
			strIngredient1, 
			strIngredient2, 
			strIngredient3, 
			strIngredient4, 
			strIngredient5, 
			strIngredient6, 
			strIngredient7, 
			strIngredient8, 
			strIngredient9, 
			strIngredient10,
		   strArea} = myFood;


	


	const close = document.getElementById('close');
	close.addEventListener('close', ()=> {
		foodInfo.remove();
	});

	});

}
*/

/*

1.Using Multiple APIs, create that Traversy Challenge you couldn't complete, where each API will fill their content into various sections of the page..
2.It will have a search feature that will be able to look at the food items of each section and return results
3.You should have a section called Favorites where you can add favorite foods and you should be able to remove the favorite food you stored. 
4. Make it responsive.
5. When each food is hovered, it should generate an info section with a white background in the center of the foodEl and the info will have the following
 ii. Will display the image in the center
 iii. Will list the ingredients, the nationality and perharps how to cook it.

*/

/*  
		 !!!!!!! Final Challenge !!!!
		 Create A Login page.
		 It should have Username, Email and Password.
		 Javascript should check the value inputed whether it is appropriate for each section.
		 If Not, It should return an error message at the bottom of the input field.
		 If Yes, It should mark the input field as green.
		 When Submit button is clicked, if all the Fields obey the appropriate input values, it should simply say "Login successful"
		 The Input should check itself as each character is inputted into the field and should return the error or green message.



		 Then Proceed to Learn REACTJS
	 */