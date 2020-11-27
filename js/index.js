$(document).ready(function() {
    
    // run function upon clicking "Let's Play"
    $('#startGame').click(function() {
        runNewQues();   // run question function to display quiz question
        $('.instructions').hide();
    });

    var correct = 0;    // initialize variable to hold number of correctly answered questions
    var incorrect = 0;  // initialize variable to hold number of incorrectly answered questions  
    var correctAnswer;  // initialize variable to hold array of correct answers

    function runNewQues() {
        // Each question displayed will be removed from the questionBank.  Keep displaying questions as long as there are questions left in the bank
        $('#randomQuestion').show();
        if(questionBank.length > 0) {     
            var randomQuestionIdx = Math.floor(Math.random() * questionBank.length); // randomly choose index for questionBank array
            var quesAnsObj = questionBank[randomQuestionIdx]; // access object at random index of questionBank array
            var question = quesAnsObj['questionText']; // access question inside object at randomly chosen index number of questionBank
            var answerText1 = quesAnsObj['answers'][0]; // access first answer option inside object at randomly chosen index number of questionBank
            var answerText2 = quesAnsObj['answers'][1]; // access second answer option inside object at randomly chosen index number of questionBank
            var answerText3 = quesAnsObj['answers'][2]; // access third answer option inside object at randomly chosen index number of questionBank
            var answerText4 = quesAnsObj['answers'][3]; // access fourth answer option inside object at randomly chosen index number of questionBank
            correctAnswer = quesAnsObj['correctAnswer'];  // access correctAnswer inside object at randomly chosen index number of questionBank
            
            $('#randomQuestion').text(question); // display random question
            $('label[for=answerText1]').text(answerText1);  // display first answer option of respective question
            $('label[for=answerText2]').text(answerText2);  // display second answer option of respective question
            $('label[for=answerText3]').text(answerText3);  // display third answer option of respective question
            $('label[for=answerText4]').text(answerText4);  // display fourth answer option of respective question
            questionBank.splice(randomQuestionIdx, 1); // remove displayed question from possible future questions

            // radio button if only one correct answer, checkbox if more than one correct answer
            if(correctAnswer.length > 1) {
                $('input').prop('type', 'checkbox')
            } else {
                $('input').prop('type', 'radio')
            }
            $('#answerOptions').show(); // show answer options for each question
            answerTimer();  // run timer for how long user has to answer question
        } 
    }

    // User has 10 seconds to answer question
    var countDown;  // initialize variable for setInterval to allow for clearInterval when clicking on submit button 
    function answerTimer() {
        var counter = 10;   // start count at 10 since user has 10 seconds to answer       
        $('#timer').text('You have 10 seconds remaining');   // reset countdown message for each new question
        countDown = setInterval(function() {  //  timer     
            counter--;
            if(counter > 0) {   // as long as there is time remaining to answer
                if(counter !== 1) {
                    $('#timer').text('You have ' + counter + ' seconds remaining.'); // advise user of time remaining to answer question            
                } else {
                    $('#timer').text('You have ' + counter + ' second remaining.')
                }
            }
            if(counter === 0) { // if user fails to answer question in time
                clearInterval(countDown);    // stop timer
                $('#timer').text('Time\'s Up!');  // advise user time is up
                incorrect++;  // unanswered question qualifies as incorrectly answered quesion
                $('#results').html('')   // clear results message after each question
                resultsDisplay(); // display results for current question if time runs out
                if(questionBank.length > 0) {
                    displayNextQuestion();  // move on to next question
                }  
            }
        }, 1000);   // one second intervals    
    }

    // When user submits answer to question
    $('#submit').click(function(event) {   
        event.preventDefault();
        clearInterval(countDown);    // stop timer
        $('#timer').text('');   //  clear timer message
        answerQuestion();   // function for comparing user input with answer in questionBank and returning results   
    });

    function answerQuestion() {
        var userAnswer = [];
        $('input:checked').each(function() {
            userAnswer.push(parseInt($(this).val()));   // gather user input and push into array
        });
        var result = true;  // initialize result to true
        if(userAnswer.length === 0) {// return incorrect if user does not input an answer
            result = false;
        } else {
            for(var i = 0; i < userAnswer.length; i++) {
                // compare user input to answer of respective question - must be same number of answers and same content to be correct
                if(userAnswer.length !== correctAnswer.length || userAnswer[i] !== correctAnswer[i]) {  
                    result = false;
                } 
            }
        }
        if(result === true) {  
            correct++  // increase tally of correctly answered questions
                $('#results').html('Correct!');  //  if the user is correct
        } else {
            incorrect++;    // increase tally of incorrectly answered questions
            $('#results').html('Sorry, that\'s incorrect.');  // if the user is incorrect  
        }
        resultsDisplay();   // display results
        if(questionBank.length > 0) {
            displayNextQuestion();  // move on to next question as long as there are questions left in the questionBank
        }        
    }

    var displayNextQuestion = function() {
        $('#nextQuestion').click(function() {
            $('#results').hide();  // hide the current results
            $('#nextQuestion').remove();  // remove the button because it will append when the function runs again
            $('input:checked').prop('checked', false);  // clear all radio inputs
            runNewQues();  // run the function again to display a new question
        });
    }

    var resultsDisplay = function() {
        $('#randomQuestion').hide(); // remove question display
        $('#answerOptions').hide(); // remove answers so user cannot submit another answer to the same question
        var tallyMessage = 'You have answered ' + correct + ' correctly and ' 
        + incorrect + ' incorrectly.'   // Message to user of how many questions were answered correctly and incorrectly
        if(questionBank.length > 0) {   //  Display results and move on to next question as long as there are questions left in the questionBank        
            $('#results').append('<p>' + tallyMessage + '<br>Try the next one!</p>').append('<button id="nextQuestion">Next!</button>').show();  // add message and button to move on to the next question; display the results
            $('#nextQuestion').css({    // style button for next question
                "margin-left": "10px",
                "padding": "5px" 
            });
        } else if(questionBank.length === 0) { // when on the last question in the questionBank have been answered
            $('#results').append('<p>Congratulations! You have completed the game! <br>' + tallyMessage + '</p>').show(); // display results and advise user game is over
            $('#playAgainBtn').show().click(function() {
                location.reload();  // give user option of reloading game to play again
            })
        }  
    }
});