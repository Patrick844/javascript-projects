// const correctAnswers = ["B", "B", "B", "B"];
// const quiz_form = document.querySelector(".quiz-form");

// quiz_form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let sum_results = 0;
//   const answer1 = quiz_form.q1.value;
//   const answer2 = quiz_form.q2.value;
//   const answer3 = quiz_form.q3.value;
//   const answer4 = quiz_form.q4.value;
//   const answers = [answer1, answer2, answer3, answer4];

//   for (i = 0; i < correctAnswers.length; i++) {
//     if (correctAnswers[i] == answers[i]) {
//       sum_results += 1;
//     }
//   }

//   const final_result = (sum_results * 100) / correctAnswers.length;
//   console.log(final_result);
// });

const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const spanResult = document.querySelector(".result span");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const answer1 = form.q1.value;
  const answer2 = form.q2.value;
  const answer3 = form.q3.value;
  const answer4 = form.q4.value;
  const userAnswers = [answer1, answer2, answer3, answer4];

  userAnswers.forEach((answer, index) => {
    if (answer == correctAnswers[index]) {
      score += 1;
    }
  });
  result.classList.replace("d-none", "d-block");
  score = (score * 100) / correctAnswers.length;

  scrollTo(0, 0);
  let output = 0;
  const timer = setInterval(() => {
    spanResult.textContent = `${output}%`;
    if (output == score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});
