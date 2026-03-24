let questions = [
  {q:"What is time complexity of binary search?", options:["O(n)","O(log n)","O(n log n)","O(1)"], ans:1, skill:"DSA"},
  {q:"Which data structure uses FIFO?", options:["Stack","Queue","Tree","Graph"], ans:1, skill:"DSA"},
  {q:"What is worst case of quicksort?", options:["O(n^2)","O(n log n)","O(log n)","O(n)"], ans:0, skill:"DSA"},
  {q:"Which is not linear DS?", options:["Array","Stack","Tree","Queue"], ans:2, skill:"DSA"},
  {q:"DFS uses?", options:["Queue","Stack","Heap","Tree"], ans:1, skill:"DSA"},
];

// duplicate to make 20
while(questions.length < 20){
  questions.push(...questions);
}
questions = questions.slice(0,20);

let index = 0;
let score = 0;
let time = 60;
let timerInterval;
let selectedCompany = "";

function startTest(company){
  selectedCompany = company;
  document.getElementById("companyName").innerText = "Test: " + company;
  index = 0;
  score = 0;
  time = 60;

  clearInterval(timerInterval);
  timerInterval = setInterval(()=>{
    time--;
    document.getElementById("timer").innerText = time;
    if(time<=0){
      endTest();
    }
  },1000);

  loadQuestion();
}

function loadQuestion(){
  let q = questions[index];
  let html = `<p>${index+1}. ${q.q}</p>`;
  q.options.forEach((opt,i)=>{
    html += `<button onclick="checkAnswer(${i})">${opt}</button><br><br>`;
  });
  document.getElementById("questionBox").innerHTML = html;
}

function checkAnswer(ans){
  if(ans === questions[index].ans){
    score++;
  }
}

function nextQuestion(){
  index++;
  if(index >= 20){
    endTest();
  } else {
    loadQuestion();
  }
}

function endTest(){
  clearInterval(timerInterval);
  document.getElementById("result").innerText =
    `✅ Score: ${score}/20 | ⏱ Time Used: ${60-time}s`;

  // Save performance
  localStorage.setItem("score", score);
}