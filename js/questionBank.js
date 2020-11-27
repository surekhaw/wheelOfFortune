// Create a bank of possible questions by writing a construction function 
// that you can call multiple times to create many objects
function Question(question, array, answerArray) {
    this.questionText = question; 
    this.answers = array;
    this.correctAnswer = answerArray;
}

// Push each of these question objects into a questionBank array
var questionBank = [];

// Create new question
var question1 = new Question ('What Italian city gave birth to pizza?', 
    ['Rome', 'Milan', 'Florence', 'Naples'], [3])

// Push new question object into questionBank array
questionBank.push(question1);

// Create new question
var question2 = new Question ('What kind of cheese is traditionally used on pizza?', 
    ['Cheddar', 'Edam', 'Mozzarella', 'Parmesan'], [2])

// Push new question object into questionBank array
questionBank.push(question2);

// Create new question
var question3 = new Question ('What fruit is pizza sauce made out of?', 
    ['Apple', 'Tomato', 'Strawberry', 'Zucchini'], [1])

// Push new question object into questionBank array
questionBank.push(question3);

// Create new question
var question4 = new Question ('What American city is renowned for its deep dish pizza?', 
    ['Chicago', 'Miami', 'Los Angeles', 'New York City'], [0])

// Push new question object into questionBank array
questionBank.push(question4);

// Create new question
var question5 = new Question ('What city is home to the famous Mulberry Street, known for its pizzerias?', 
    ['New York City', 'Los Angeles', 'Miami', 'Chicago'], [0])

// Push new question object into questionBank array
questionBank.push(question5);

// Create new question
var question6 = new Question ('What is the most popular pizza topping?', 
    ['Sausage', 'Pepperoni', 'Bell Pepper', 'Eggplant'], [1])

// Push new question object into questionBank array
questionBank.push(question6);

// Create new question
var question7 = new Question ('What do American college students predominantly live on?', 
    ['Salad', 'French Fries', 'Pizza', 'Hamburgers'], [2])

// Push new question object into questionBank array
questionBank.push(question7);

// Create new question
var question8 = new Question ('In the movie "Reality Bites," what was the most popular answer for "The meaning of life"?', 
    ['Education', 'Family', 'Faith', 'Pizza'], [3])

// Push new question object into questionBank array
questionBank.push(question8);

// Create new question
var question9 = new Question ('Which of the following pizza chains has a game piece for its trademark?', 
    ['Papa John\'s', 'Chuck E. Cheese', 'Pizza Hut', 'Dominos'], [3])

// Push new question object into questionBank array
questionBank.push(question9);

// Create new question
var question10 = new Question ('Which of the following is not a popular pizza crust?', 
    ['Deep Dish', 'Stuffed', 'Zucchini', 'Thin'], [2])

// Push new question object into questionBank array
questionBank.push(question10);

// Create new question with multiple possible answers
var question11 = new Question ('What are two pizza options that contain sausage?', 
    ['Meat Lover\'s', 'Margherita', 'Vegetarian', 'Supreme'], [0,3])

// Push new question object into questionBank array
questionBank.push(question11);