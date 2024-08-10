function setProgress(value) {
  const progressCircle = document.querySelector(".circular-progress .progress")
  const progressValue = document.querySelector(".progress-value")

  const radius = progressCircle.r.baseVal.value
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  progressCircle.style.strokeDashoffset = offset
  progressValue.textContent = `${value}%`
}

document.addEventListener("DOMContentLoaded", function () {
  localStorage.getItem("finalScore")
    ? setProgress(localStorage.getItem("finalScore"))
    : setProgress(0)
})

// ----------------------------
function createQuestionElement(questionText) {
  const container = document.createElement('div');
  container.style.marginTop = '20px';

  const questionTitle = document.createElement('h1');
  questionTitle.style.fontSize = '20px';
  questionTitle.style.color = '#ec3e92';
  questionTitle.textContent = 'Question 1';
  container.appendChild(questionTitle);

  const question = document.createElement('h1');
  question.style.fontSize = '25px';
  question.textContent = questionText;
  container.appendChild(question);

  const optionsContainer = document.createElement('div');
  optionsContainer.style.display = 'grid';
  optionsContainer.style.gridTemplateColumns = '1fr 1fr';
  optionsContainer.style.gap = '40px';
  optionsContainer.style.justifyContent = 'space-between';
  optionsContainer.style.flexWrap = 'wrap';
  optionsContainer.style.marginTop = '20px';

  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 3'];
  options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.style.padding = '10px 50px';
    optionElement.style.borderRadius = '10px';
    optionElement.style.backgroundColor = 'bisque';
    optionElement.style.color = 'black';
    optionElement.style.cursor = 'pointer';
    optionElement.textContent = option;
    optionsContainer.appendChild(optionElement);
  });

  container.appendChild(optionsContainer);

  return container;
}

