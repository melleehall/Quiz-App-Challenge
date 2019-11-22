'use strict';

// Question and answer bank
const STORE = [
  {
    question: 'In the original "How the Grinch Stole Christmas", voice actor, Thurl Ravenscroft, performed all of the musical numbers even though Boris Karloff narrated the story.  Ravenscroft also provided the voice of what famous TV commercial character?',
    answers: [
      'Toucan Sam',
      'Chester Cheetah',
      'Tony the Tiger',
      'Kool-Aid Man'
    ],
    correctIndex: 
      2,
    correctExplanation:
      'Ravenscroft voiced Tony the Tiger for Kellogg\'s Frosted Flakes commercials - isn\'t that greaaaatttttt?'
  },
  {
      question: 'In December of 1965, astronauts Walter “Wally” Schirra Jr. and Thomas P. Stafford took out a harmonica and played the first song to be performed in space.  What holiday tune did they play?',
      answers: [
        'Jingle Bells',
        'Frosty the Snowman',
        'Rudolf, the Red-nosed Reindeer',
        'Let It Snow! Let It Snow! Let It Snow!'
      ],
      correctIndex: 
        0,
      correctExplanation:
        'After meeting for multiple practice sessions on planet Earth, Schirra and Stafford sang Jingle Bells while orbiting Gemini 6 much to the surprise of Mission Control.'
  },
  {
      question: 'What was \'Do You Hear What I Hear?\' inspired by?',
      answers: [
        'An approaching band of drummers announcing the commencement of battle',
        'An old astrological tale',
        'The Fourth of July',
        'The Cuban Missile Crisis'
      ],
      correctIndex: 
        3,
      correctExplanation:
        '\'Do You Hear What I Hear\' was originally written by a husband and wife as a \'prayer for peace\' during the Cuban Missile Crisis and the \'star as big as a kite\' line was written in reference to a missile.'
  },
  {
      question: 'Select the interesting fact below that is true about these songs: "Rudolph The Red-Nosed Reindeer”, “Rockin’ Around The Christmas Tree”, and “Holly Jolly Christmas”.',
      answers: [
        'All were written explicitly for use in plays',
        'All were made famous by Gene Autry',
        'All were written by a Jewish man.',
        'All were criticized by Top 40 radio personality "Big Daddy" Tom Donahue.'
      ],
      correctIndex: 
        2,
      correctExplanation:
        'Johnny Marks is most famously remembered for writing all three songs.  He was Jewish and not exactly thrilled about this being his claim to fame.  He got his first songwriting gig, because his brother-in-law wrote the original Rudolf story.'
  },
  {
      question: 'The first song to mention Santa Claus was which of the following?',
      answers: [
        'Here Comes Santa Claus',
        'Santa Baby',
        'Up On The House Top',
        'Santa Claus Is Comin\' To Town'
      ],
      correctIndex: 
        2,
      correctExplanation:
        'Written in 1864, \'Up On The House Top \' mentions \'St. Nick\' aka Santa Claus.  Before that, Christmas carols were mostly about Jesus\' birth.'
  },
  {
      question: 'What was the profession of the man who in the husband/wife due who originally sang \'Grandma Got Run Over By A Reindeer\'?',
      answers: [
        'Zoologist',
        'Marine Biologist',
        'Animal Nutritionist',
        'Veterinarian'
      ],
      correctIndex: 
        3,
      correctExplanation:
        'Ironically, Elmo Shropshire, who was asked to sing \'Grandma Got Run Over By A Reindeer\' by writter, Randy Brooks along with his wife, Patsy, was a licensed veterinarian.'
  },
];

// Performance feedback displayed in Final View based on quiz score
let rank = [
{
  score: 'low',
  feedback: 'Based on your Christmas Tunes Trivia knowledge, you seem like a bit of a Scrooge.  Hopefully, you learned something and your love of tunes grew three sizes today - just like the Grinch\'s heart.'
},
{
  score: 'average',
  feedback: 'When it comes to Christmas Tunes Trivia, you\'re an average bear...or, well, reindeer... but you\'ve got potential, kid!'
},
{
  score: 'high',
  feedback: 'Move over Saint Nick, there\'s a new king of Christmas in town!  You must live and breathe the sounds of the season - congratulations!'
},
];

// Initialize variables to hold score and current question number
let score = 0;
let questionNum = 0;

// Called when correct answer is submitted
function updateScore () {
  score++;
  $('.js-score').text(`${score}      `);
  console.log(`updateScore ran and the score is ${score}`);
}

// Called each time a new question is rendered
function updateQuestionNum () {
  questionNum++;
  $('.js-questionNum').text(questionNum);
}

// Displays elements of the Start View
function renderChristmasTunesQuiz () {
  $('.questions, .score-question, .feedback, .final-view, .js-next-button, .js-submit-button, .js-replay-button').addClass('js-hide');
  $('.instructions, .js-start-button').removeClass("js-hide");
}

// Generates the radio buttons and answer selections and inserts them in the form created in the HTML file
function generateQuestion () {
  let currentQuestionIndex = questionNum - 1;
  let generated = `<div class="q-and-a rounded-corner">
      <fieldset> 
      <legend class="question">${STORE[currentQuestionIndex]['question']}</legend> 
      <label class="ans-1 radio">
        <input type="radio" name="christmas-tunes-trivia" id="ans-1" value="0" required="required">
        <span>${STORE[questionNum - 1]['answers'][0]}</span>
      </label>
      <label class="ans-2 radio">
        <input type="radio" name="christmas-tunes-trivia" id="ans-2" value="1">
        <span>${STORE[questionNum - 1]['answers'][1]}</span>
      </label>
      <label class="ans-3 radio">
        <input type="radio" name="christmas-tunes-trivia" id="ans-3" value="2">
        <span>${STORE[questionNum - 1]['answers'][2]}</span>
      </label>
      <label class="ans-4 radio">
        <input type="radio" name="christmas-tunes-trivia" id="ans-4" value="3">
        <span>${STORE[questionNum - 1]['answers'][3]}</span>
      </label>
    </fieldset> </div>`;
    $('.questions').prepend(generated);
    $(`<button type="submit" class="button js-submit-button blue rounded-corner"> SUBMIT </button > `).appendTo('.questions');
}

// Calls the functions that increase current question number by one and generate a new questions; also displays elements of the Question View
function renderQuestionView () {
  $('.variable-content-container, .instructions, .feedback, .final-view, .js-start-button, .js-next-button, .js-replay-button').addClass('js-hide');
  $('.score-question, .questions, .js-submit-button').removeClass("js-hide");
  $('.questions').empty();
  updateQuestionNum();
  generateQuestion();
}

// Compares the index of the selected answer to the correct one stored in the "correctIndex" key of each Q&A object
// Displays the explanation of the correct answer and either a happy or sad tree depending on whether correct answer was selected
function generateFeedback () {
  let chosen = $('input:checked').val();
  let correct = STORE[questionNum-1]['correctIndex'];
  let response = STORE[questionNum-1]['correctExplanation'];
  $('span.js-correct-answer').text(response);
  if (chosen == correct) {
    updateScore();
    $('.incorrect').addClass('js-hide');
  } else {
    $('.correct').addClass('js-hide');
  };
}

// Displays elements of the Feedback View and calls the function that determines what feedback to give user
function renderFeedbackView () {
  $('.instructions, .questions, .final-view, .js-start-button, .js-submit-button, .js-replay-button').addClass('js-hide');
  $('.variable-content-container, score-question, .feedback, .js-next-button').removeClass("js-hide");
  generateFeedback();
}

// Depending on final score achieved, displays one of three feedback choices which are stored as objects in "rank" array
function generateFinalRank () {
  $('.js-final-score').replaceWith(`Your final score is ${score} out of 6 possible correct answers.`);
  let finalRank = 0;
  if (score > 4) {
    finalRank = rank[2]['feedback'];
  } else if (score > 2) {
    finalRank = rank[1]['feedback'];
  } else {
    finalRank = rank[0]['feedback'];
  };
  $('.js-final-view').replaceWith(finalRank);
}

// Resets current score and question number to zero and displays them in the heading
function resetStats () {
  score = 0;
  questionNum = 0;
  $('.js-score').text(0);
  $('.js-questionNum').text(0);
  console.log(`The score was reset to ${score}`);
}

// Starts the quiz over by calling the functions that set score and question number to zero and display the start screen
function replayQuiz () {
  renderChristmasTunesQuiz();
  resetStats();
}

// Displays the elements of the Final View where feedback is given
function renderFinalView () {
  $('.instructions, .questions, .feedback, .final-view, .js-start-button, .js-submit-button, .js-next-button').addClass('js-hide');
  $('.score-question, .final-view, .js-replay-button').removeClass("js-hide");
  generateFinalRank();
}

// Listen for clicks on the 4 buttons below created in the html file and when clicked, call the specified functions
function eventHandlers () {
  $('button.js-start-button').click(function () {
    renderQuestionView();
  });

  $('form').on('submit', function () {
    event.preventDefault();
    renderFeedbackView();

    // var isChecked = $('input').is(':checked');
    // if (isChecked) {
    //   renderFeedbackView();
    // } else {
    //   alert('Please select one of the four possible answers before submitting.')
    // };
  });

  $('button.js-next-button').click(function () {
    if (questionNum < STORE.length) {
      renderQuestionView ();
    } else {
      renderFinalView ();
    }
  });

  $('button.js-replay-button').click(function () {
    replayQuiz();
  });
}

// Call the function that displays elements of the Start View
function makeQuiz () {
    renderChristmasTunesQuiz();
  }

// When the browser loads, call the functions that will handle user events and display the Start View
function initializeApp () {
  makeQuiz();
  eventHandlers();
}

$(initializeApp);