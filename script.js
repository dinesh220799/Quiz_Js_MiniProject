const quizData = [
  {
    question: "Who was the first President of the United States?",
    a: "George Washington",
    b: "John Adams",
    c: "Thomas Jefferson",
    d: "James Madison",
    correct: "a"
  },
  {
    question: "Who is the only President to serve more than two terms?",
    a: "Theodore Roosevelt",
    b: "Woodrow Wilson",
    c: "Franklin D. Roosevelt",
    d: "Harry S. Truman",
    correct: "c"
  },
  {
    question: "Who was the first President to live in the White House?",
    a: "George Washington",
    b: "John Adams",
    c: "James Monroe",
    d: "Thomas Jefferson",
    correct: "b"
  },
  {
    question: "Which President issued the Emancipation Proclamation?",
    a: "Abraham Lincoln",
    b: "Andrew Johnson",
    c: "Ulysses S. Grant",
    d: "James A. Garfield",
    correct: "a"
  },
  {
    question: "Which President was involved in the Watergate scandal?",
    a: "John F. Kennedy",
    b: "Richard Nixon",
    c: "Gerald Ford",
    d: "Jimmy Carter",
    correct: "b"
  },
  {
    question: "Who was the youngest elected President?",
    a: "Theodore Roosevelt",
    b: "John F. Kennedy",
    c: "Bill Clinton",
    d: "Barack Obama",
    correct: "b"
  },
  {
    question: "Which President is on the $20 bill?",
    a: "Abraham Lincoln",
    b: "Thomas Jefferson",
    c: "Andrew Jackson",
    d: "Alexander Hamilton",
    correct: "c"
  },
  {
    question: "Who was President during World War I?",
    a: "Theodore Roosevelt",
    b: "Woodrow Wilson",
    c: "Warren G. Harding",
    d: "Calvin Coolidge",
    correct: "b"
  },
  {
    question: "Which President delivered the Gettysburg Address?",
    a: "George Washington",
    b: "Ulysses S. Grant",
    c: "Abraham Lincoln",
    d: "James Buchanan",
    correct: "c"
  },
  {
    question: "Who was the only President to resign from office?",
    a: "Gerald Ford",
    b: "Richard Nixon",
    c: "Jimmy Carter",
    d: "Ronald Reagan",
    correct: "b"
  },
  {
    question: "Who was the first President to be impeached?",
    a: "Andrew Johnson",
    b: "Richard Nixon",
    c: "Bill Clinton",
    d: "Donald Trump",
    correct: "a"
  },
  {
    question: "Which President purchased the Louisiana Territory?",
    a: "James Madison",
    b: "James Monroe",
    c: "Thomas Jefferson",
    d: "John Quincy Adams",
    correct: "c"
  },
  {
    question: "Who was the President during the Cuban Missile Crisis?",
    a: "Dwight D. Eisenhower",
    b: "John F. Kennedy",
    c: "Lyndon B. Johnson",
    d: "Richard Nixon",
    correct: "b"
  },
  {
    question: "Which President signed the Civil Rights Act of 1964?",
    a: "John F. Kennedy",
    b: "Lyndon B. Johnson",
    c: "Harry S. Truman",
    d: "Dwight D. Eisenhower",
    correct: "b"
  },
  {
    question: "Which President said 'Speak softly and carry a big stick'?",
    a: "Franklin D. Roosevelt",
    b: "Woodrow Wilson",
    c: "Theodore Roosevelt",
    d: "Herbert Hoover",
    correct: "c"
  },
  {
    question: "Who was the first President to be assassinated?",
    a: "Abraham Lincoln",
    b: "James A. Garfield",
    c: "William McKinley",
    d: "John F. Kennedy",
    correct: "a"
  },
  {
    question: "Which President was known for the New Deal?",
    a: "Herbert Hoover",
    b: "Harry S. Truman",
    c: "Franklin D. Roosevelt",
    d: "Lyndon B. Johnson",
    correct: "c"
  },
  {
    question: "Which President was in office during the 9/11 attacks?",
    a: "Bill Clinton",
    b: "George W. Bush",
    c: "Barack Obama",
    d: "Ronald Reagan",
    correct: "b"
  },
  {
    question: "Who was the first African American President of the United States?",
    a: "Barack Obama",
    b: "Bill Clinton",
    c: "Joe Biden",
    d: "George W. Bush",
    correct: "a"
  },
  {
    question: "Which President was known for his role in drafting the Declaration of Independence?",
    a: "George Washington",
    b: "John Adams",
    c: "Thomas Jefferson",
    d: "James Madison",
    correct: "c"
  },
  {
    question: "Who was the only President to serve two non-consecutive terms?",
    a: "Grover Cleveland",
    b: "Ulysses S. Grant",
    c: "Woodrow Wilson",
    d: "William Taft",
    correct: "a"
  },
  {
    question: "Which President signed the Affordable Care Act (Obamacare) into law?",
    a: "Bill Clinton",
    b: "Barack Obama",
    c: "George W. Bush",
    d: "Joe Biden",
    correct: "b"
  },
  {
    question: "Which President was a general during World War II?",
    a: "Dwight D. Eisenhower",
    b: "Harry S. Truman",
    c: "Franklin D. Roosevelt",
    d: "Richard Nixon",
    correct: "a"
  },
  {
    question: "Who was the only bachelor President?",
    a: "James Buchanan",
    b: "Franklin Pierce",
    c: "Andrew Johnson",
    d: "Martin Van Buren",
    correct: "a"
  },
  {
    question: "Which President famously said 'The buck stops here'?",
    a: "Harry S. Truman",
    b: "Franklin D. Roosevelt",
    c: "Dwight D. Eisenhower",
    d: "Lyndon B. Johnson",
    correct: "a"
  }
];

const userSelected = {}

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const labelEls = document.querySelectorAll('.op_label');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const submitBtn = document.getElementById('submit');
const reloadBtn = document.getElementById('reload');
const scoreEle = document.getElementById('score');
const resultEle = document.getElementById('result');
let currentQtn = 0;
let score = 0;
let submitted = false;

loadQtn();

function loadQtn() {
    const currentQtnData = quizData[currentQtn];
    questionEl.innerText = currentQtnData.question;
    a_text.innerText = currentQtnData.a;
    b_text.innerText = currentQtnData.b;
    c_text.innerText = currentQtnData.c;
    d_text.innerText = currentQtnData.d;
    if (submitted) {
        let actualAns = currentQtnData.correct;
        let userAns = userSelected[currentQtn];
        labelEls.forEach(labelEl => {
            labelEl.classList.remove("correct");
            labelEl.classList.remove("wrong");


        });
        if (actualAns == userAns) {
            let correct = actualAns + "_text";
            document.getElementById(correct).classList.add("correct")

        }
        else {
            let correct = actualAns + "_text";
            let wrong = userAns + "_text";

            document.getElementById(correct).classList.add("correct")

            document.getElementById(wrong).classList.add("wrong")

        }
    }
    else {
        deselectAnswer();
    }
    if (currentQtn == quizData.length - 1) {
        nextBtn.style.display = "none";
        if (submitted) {
            reloadBtn.style.display = "block";
            submitBtn.style.display = "none";
        }
        else {
            reloadBtn.style.display = "none";
            submitBtn.style.display = "block";


        }
    }
    if (userSelected[currentQtn]) {
        let selected = userSelected[currentQtn];
        document.getElementById(selected).checked = true
    }

}

function deselectAnswer() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
            userSelected[currentQtn] = answer

        }
    });

    return answer;
}
prevBtn.addEventListener('click', () => {
    getSelected()
    if (currentQtn > 0) {
        currentQtn--;
        if (currentQtn == 0) {
            prevBtn.disabled = true;
            prevBtn.classList.add('disabled')
        }
        loadQtn();
    }


})

nextBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (!submitted) {
        if (answer) {
            if (answer === quizData[currentQtn].correct) {
                score++;
            }
            currentQtn++;
            if (currentQtn < quizData.length) {
                loadQtn();
                prevBtn.disabled = false;
                prevBtn.classList.remove('disabled')
            }
        }
    }
    else {
        currentQtn++;
        loadQtn()
    }
})
submitBtn.addEventListener('click', () => {
    if (getSelected()) {
        submitted = true
        quiz.style.display = "none";
        resultEle.style.display = "block";
        scoreEle.innerHTML = `${score}/${quizData.length} questions answered correctly`


    }


})

function loadAnswers() {
    currentQtn = 0
    quiz.style.display = "block";
    resultEle.style.display = "none";
    answerEls.forEach(answerEl => {
        answerEl.disabled = true;

    });
    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
    loadQtn();

}