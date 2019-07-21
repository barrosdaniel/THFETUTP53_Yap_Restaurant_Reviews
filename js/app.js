//DONE 1. Hide/show the text inside the #helpText span element when the user's mouse passes over the text "How are these ranked?" (Hint: use the jQuery toggle() method)
$('#helpText').hover(() => {
  $('#helpText span').toggle();
});

//DONE 2. Append a new restaurant to the restaurant list when the user enters a value into the #newRestaurant input and clicks on the #addNew button. 
$('#addNew').click(() => {
  const newItem = $('#newRestaurantInput').val();
  $('ul').append(`<li>${newItem}</li>`);
  $('#newRestaurantInput').val('');
});

//DONE BONUS: Before appending the new restaurant to the list, use string concatentation to make sure the new restaurant name is surrounded by an opening and closing <li> tag. 

//DONE 3. Add the class "strike" to the restaurant name each time it's clicked. Use event delegation on the ul element to listen for a click event on the ul's list items
$('ul').click((event) => {
  $(event.target).toggleClass('strike');
});

//BONUS: Refactor challenge 3 using the "this" keyword. (?)
//DONE BONUS: Look up a jQuery method that will let you toggle the .strike class on and off. 