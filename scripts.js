const questions = [
  {
    question: "What is the most common cause of dry socket?",
    choices: ["Poor blood clot formation", "Excessive rinsing post-op", "Infection", "Use of smoking post-extraction"],
    correctAnswer: "Poor blood clot formation",
    explanation: "Dry socket occurs when the blood clot in the extraction site is lost or doesn't form properly."
  },
  {
    question: "Which is the first step in the basic life support algorithm?",
    choices: ["Start chest compressions", "Open the airway", "Call for help", "Check responsiveness"],
    correctAnswer: "Check responsiveness",
    explanation: "The first step is to check if the patient is responsive before calling for help."
  },
  {
    question: "What is the recommended fluoride concentration in toothpaste for an adult with high caries risk?",
    choices: ["500 ppm", "1000 ppm", "2800 ppm", "5000 ppm"],
    correctAnswer: "5000 ppm",
    explanation: "A higher fluoride concentration (5000 ppm) is recommended for adults at high risk of caries."
  },
    {
    question: "Which type of caries is typically seen in older adults?",
    choices: ["Enamel caries", "Root caries", "Fissure caries", "Incisal caries"],
    correctAnswer: "Root caries",
    explanation: "Root caries is more common in older adults due to gum recession exposing the root surfaces."
  },
  {
    question: "Which of the following is a sign of temporomandibular joint dysfunction (TMD)?",
    choices: ["Clicking sound", "Swelling", "Pain in the lower teeth", "Tongue ulcers"],
    correctAnswer: "Clicking sound",
    explanation: "A clicking sound in the temporomandibular joint is a common sign of TMD."
  },
  {
    question: "Which condition is commonly associated with bruxism?",
    choices: ["Sleep apnea", "GERD", "Oral candidiasis", "Cleft palate"],
    correctAnswer: "Sleep apnea",
    explanation: "Bruxism is often associated with sleep disorders such as obstructive sleep apnea."
  },
  {
    question: "Which instrument is used to remove subgingival calculus?",
    choices: ["Curette", "Scaler", "Explorer", "Mirror"],
    correctAnswer: "Curette",
    explanation: "Curettes are used to remove subgingival calculus during periodontal scaling and root planing."
  },
  {
    question: "Which bacteria are most commonly implicated in dental caries?",
    choices: ["Streptococcus mutans", "Lactobacillus", "Staphylococcus aureus", "Porphyromonas gingivalis"],
    correctAnswer: "Streptococcus mutans",
    explanation: "Streptococcus mutans are the primary bacteria involved in the initiation of dental caries."
  },
  {
    question: "What is the main cause of halitosis?",
    choices: ["Oral bacteria", "Tooth decay", "Gum disease", "Xerostomia"],
    correctAnswer: "Oral bacteria",
    explanation: "Oral bacteria, particularly those in anaerobic conditions, are the primary cause of bad breath."
  },
  {
    question: "What is the proper treatment for a patient with a chipped tooth involving the enamel only?",
    choices: ["Crown", "Filling", "Bonding", "Extraction"],
    correctAnswer: "Bonding",
    explanation: "Dental bonding is a common treatment for minor enamel chips."
  },
  {
    question: "Which muscle is primarily responsible for jaw closure?",
    choices: ["Masseter", "Temporalis", "Lateral pterygoid", "Medial pterygoid"],
    correctAnswer: "Masseter",
    explanation: "The masseter muscle is one of the main muscles responsible for closing the jaw."
  },
  {
    question: "Which condition is characterized by inflammation of the mucous membranes of the mouth?",
    choices: ["Stomatitis", "Glossitis", "Gingivitis", "Periodontitis"],
    correctAnswer: "Stomatitis",
    explanation: "Stomatitis refers to inflammation of the mucous membranes lining the mouth."
  },
  {
    question: "What is the first stage of plaque formation?",
    choices: ["Pellicle formation", "Colonization by bacteria", "Maturation of plaque", "Mineralization"],
    correctAnswer: "Pellicle formation",
    explanation: "The first stage of plaque formation involves the formation of a pellicle, a protein film on the tooth surface."
  }
  // Add more questions following the same structure, up to 50 questions
];

// Function to shuffle questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to display the quiz
function displayQuiz() {
  shuffleArray(questions);  // Shuffle questions
  const quizForm = document.getElementById('quizForm');
  quizForm.innerHTML = '';  // Clear previous content
  
  // Display only the first 50 questions (or all if fewer than 50)
  questions.slice(0, 50).forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    
    const questionTitle = document.createElement('h2');
    questionTitle.textContent = `${index + 1}. ${question.question}`;
    questionDiv.appendChild(questionTitle);
    
    question.choices.forEach(choice => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name="q${index}" value="${choice}"> ${choice}`;
      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement('br'));
    });
    
    quizForm.appendChild(questionDiv);
  });

  // Add submit button
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  quizForm.appendChild(submitButton);

  document.getElementById('result').textContent = '';  // Clear result
  document.getElementById('retakeButton').style.display = 'none';  // Hide retake button
}

// Function to grade the quiz
function gradeQuiz(event) {
  event.preventDefault();
  
  let score = 0;
  let explanations = "";
  const formData = new FormData(document.getElementById('quizForm'));
  
  questions.slice(0, 50).forEach((question, index) => {
    const userAnswer = formData.get(`q${index}`);
    if (userAnswer === question.correctAnswer) {
      score++;
    } else {
      explanations += `<p>Question ${index + 1}: The correct answer is <strong>${question.correctAnswer}</strong>. ${question.explanation}</p>`;
    }
  });
  
  const totalQuestions = questions.length > 50 ? 50 : questions.length;
  const result = document.getElementById('result');
  result.innerHTML = `You scored ${score} out of ${totalQuestions}. ${explanations}`;
  
  document.getElementById('retakeButton').style.display = 'block';  // Show retake button
}

// Function to retake the quiz
function retakeQuiz() {
  displayQuiz();  // Re-randomize and redisplay questions
}

// Initialize the quiz
document.getElementById('quizForm').addEventListener('submit', gradeQuiz);
document.getElementById('retakeButton').addEventListener('click', retakeQuiz);

// Load the quiz initially
displayQuiz();
