'use strict';

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
      question: '“Rudolph The Red-Nosed Reindeer,” “Rockin’ Around The Christmas Tree,” and “Holly Jolly Christmas” are three of the most famous Christmas songs.  Which interesting fact about them below is true?',
      answers: [
        'All three songs were written explicitly for use in plays',
        'All three songs were made famous by Gene Autry',
        'All three songs were written by a Jewish man.',
        'All three songs were originally criticized by Top 40 radio personality "Big Daddy" Tom Donahue for plagarism.'
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

//initialize variables to store current score and question
let score = 0;
let questionNum = 0;

function updateScore () {
  score++;
  $('.js-score').text(score);
  console.log('the `updateScore` function ran');
  console.log(score);
}

function updateQuestionNum () {
  console.log('`updateQuestionNum` ran');
  questionNum++;
  $('.js-questionNum').text(questionNum);
  console.log(questionNum);
}

function renderChristmasTunesQuiz () {
  $('.questions, .score-question, .feedback, .final-view, .js-next-button, .js-submit-button, .js-replay-button').addClass('js-hide');
  $('.instructions, .js-start-button').removeClass("js-hide");
  // $('button.js-start-button').click(function () {
  //   renderQuestionView();
  // });
  console.log('`renderChristmasTunesQuiz` ran');
}


// make Q&A's into a form instead
// form generated based on index in STORE which correlates with questionNum

function generateQuestion () {
  let currentQuestionIndex = questionNum - 1;
  let generated = `<legend class="question">${STORE[currentQuestionIndex]['question']}</legend> <br>
    <input type="radio" name="christmas-tunes-trivia" id="ans-1" value="0" checked>
    <label for="ans-1" class="ans-1">${STORE[questionNum - 1]['answers'][0]}</label>
    <br>
    <input type="radio" name="christmas-tunes-trivia" id="ans-2" value="1">
    <label for="ans-2" class="ans-2">${STORE[questionNum - 1]['answers'][1]}</label>
    <br>
    <input type="radio" name="christmas-tunes-trivia" id="ans-3" value="2">
    <label for="ans-3" class="ans-3">${STORE[questionNum - 1]['answers'][2]}</label>
    <br>
    <input type="radio" name="christmas-tunes-trivia" id="ans-4" value="3">
    <label for="ans-4" class="ans-4">${STORE[questionNum - 1]['answers'][3]}</label>`;
    $('.questions').prepend(generated);
  console.log('`generateQuestion` ran');
}

function renderQuestionView () {
  $('.instructions, .feedback, .final-view, .js-start-button, .js-next-button, .js-replay-button').addClass('js-hide');
  $('.score-question, .questions, .js-submit-button').removeClass("js-hide");
  $('.questions').empty();
  updateQuestionNum();
  generateQuestion();
  // $('button.js-submit-button').click(function () {
  //   event.preventDefault();
  //   renderFeedbackView();
  // });
  console.log('`renderQuestionView` ran');
}

// save the clicked value correctly...

function generateFeedback () {
  let chosen = $('input:checked').val();
  let correct = STORE[questionNum-1]['correctIndex'];
  console.log(`chosen is ${chosen} and correct is ${correct}`);
  let response = STORE[questionNum-1]['correctExplanation'];
  $('span.js-correct-answer').text(response);
  if (chosen == correct) {
    updateScore();
    $('.incorrect').addClass('js-hide');
  } else {
    $('.correct').addClass('js-hide');
  };
}


function renderFeedbackView () {
  $('.instructions, .questions, .final-view, .js-start-button, .js-submit-button, .js-replay-button').addClass('js-hide');
  $('score-question, .feedback, .js-next-button').removeClass("js-hide");
  generateFeedback();
  // $('button.js-next-button').click(function () {
  //   if (questionNum <= STORE.length) {
  //     console.log(`'STORE' length is`);
  //     renderQuestionView ();
  //   } else {
  //     renderFinalView ();
  //   }
  // });
  console.log(`'renderFeedbackView' ran`);
}

function generateFinalRank () {
  $('.js-final-score').replaceWith(`Your final score is ${score} out of 6 possible correct answers.`);
  let finalRank = 0;
  console.log(score);
  if (score > 4) {
    finalRank = rank[2]['feedback'];
  } else if (score > 2) {
    finalRank = rank[1]['feedback'];
  } else {
    finalRank = rank[0]['feedback'];
  };
  $('.js-final-view').replaceWith(finalRank);
  console.log(`'generateFinalRank' ran`);
}

function resetStats () {
  score = 0;
  questionNum= 0;
  $('.score').text(0);
  $('.questionNum').text(0);
}

function replayQuiz () {
  renderChristmasTunesQuiz();
  resetStats();
  resetViews();
}

function renderFinalView () {
  $('.instructions, .questions, .feedback, .final-view, .js-start-button, .js-submit-button, .js-next-button').addClass('js-hide');
  $('.score-question, .final-view, .js-replay-button').removeClass("js-hide");
  generateFinalRank();
  // $('button.js-replay-button').click(function () {
  //   replayQuiz();
  // });
}

function makeQuiz () {
  renderChristmasTunesQuiz();
}

function eventHandlers () {
  $('button.js-start-button').click(function () {
    renderQuestionView();
  });

  $('button.js-submit-button').click(function () {
    event.preventDefault();
    renderFeedbackView();
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

function initializeApp () {
  makeQuiz();
  eventHandlers();
}

$(initializeApp);