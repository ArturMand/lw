const form = document.querySelector('.question__form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const userName = e.target.name.value;
  const number = e.target.number.value;
  const question = e.target.question.value;
  const formData = {userName, number, question}
  e.currentTarget.reset();
}
