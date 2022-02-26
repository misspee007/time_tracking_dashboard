let currentWork = document.getElementById("currentWork");
let prevWork = document.getElementById("prevWork");

let currentPlay = document.getElementById("currentPlay");
let prevPlay = document.getElementById("prevPlay");

let currentStudy= document.getElementById("currentStudy");
let prevStudy = document.getElementById("prevStudy");

let currentExercise = document.getElementById("currentExercise");
let prevExercise = document.getElementById("prevExercise");

let currentSocial = document.getElementById("currentSocial");
let prevSocial = document.getElementById("prevSocial");

let currentSelfcare = document.getElementById("currentSelfcare");
let prevSelfcare = document.getElementById("prevSelfcare");


// onclick event handler
const onBtnClick = (report) => {
  const data = fetch("./data.json")
  .then((response) => {
    return response.json();
  }).then((data) =>{
    const dailyData = data.map(i => {
      return i.timeframes.daily;
    })
    const weeklyData = data.map(i => {
      return i.timeframes.weekly;
    })
    const monthlyData = data.map(i => {
      return i.timeframes.monthly;
    })
    
    //check which button (daily, weekly or monthly) is active, then render the corresponding data
    if (report === 'daily') {
      currentWork.innerHTML = `${dailyData[0].current}${dailyData[0].current === 1 ? "hr" : "hrs"}`;
      prevWork.innerHTML = `Previous - ${dailyData[0].previous}${dailyData[0].previous === 1 ? "hr" : "hrs"}`;
      currentPlay.innerHTML = `${dailyData[1].current}${dailyData[1].current === 1 ? "hr" : "hrs"}`;
      prevPlay.innerHTML = `Previous - ${dailyData[1].previous}${dailyData[1].previous === 1 ? "hr" : "hrs"}`;
      currentStudy.innerHTML = `${dailyData[2].current}${dailyData[2].current === 1 ? "hr" : "hrs"}`;
      prevStudy.innerHTML = `Previous - ${dailyData[2].previous}${dailyData[2].previous === 1 ? "hr" : "hrs"}`;
      currentExercise.innerHTML = `${dailyData[3].current}${dailyData[3].current === 1 ? "hr" : "hrs"}`;
      prevExercise.innerHTML = `Previous - ${dailyData[3].previous}${dailyData[3].previous === 1 ? "hr" : "hrs"}`;
      currentSocial.innerHTML = `${dailyData[4].current}${dailyData[4].current === 1 ? "hr" : "hrs"}`;
      prevSocial.innerHTML = `Previous - ${dailyData[4].previous}${dailyData[4].previous === 1 ? "hr" : "hrs"}`;
      currentSelfcare.innerHTML = `${dailyData[5].current}${dailyData[5].current === 1 ? "hr" : "hrs"}`;
      prevSelfcare.innerHTML = `Previous - ${dailyData[5].previous}${dailyData[5].previous === 1 ? "hr" : "hrs"}`;
    }
    if (report === 'weekly'){
      currentWork.innerHTML = `${weeklyData[0].current}${weeklyData[0].current === 1 ? "hr" : "hrs"}`;
      prevWork.innerHTML = `Previous - ${weeklyData[0].previous}${weeklyData[0].current === 1 ? "hr" : "hrs"}`;
      currentPlay.innerHTML = `${weeklyData[1].current}${weeklyData[1].current === 1 ? "hr" : "hrs"}`;
      prevPlay.innerHTML = `Previous - ${weeklyData[1].previous}${weeklyData[1].current === 1 ? "hr" : "hrs"}`;
      currentStudy.innerHTML = `${weeklyData[2].current}${weeklyData[2].current === 1 ? "hr" : "hrs"}`;
      prevStudy.innerHTML = `Previous - ${weeklyData[2].previous}${weeklyData[2].current === 1 ? "hr" : "hrs"}`;
      currentExercise.innerHTML = `${weeklyData[3].current}${weeklyData[3].current === 1 ? "hr" : "hrs"}`;
      prevExercise.innerHTML = `Previous - ${weeklyData[3].previous}${weeklyData[3].current === 1 ? "hr" : "hrs"}`;
      currentSocial.innerHTML = `${weeklyData[4].current}${weeklyData[4].current === 1 ? "hr" : "hrs"}`;
      prevSocial.innerHTML = `Previous - ${weeklyData[4].previous}${weeklyData[4].current === 1 ? "hr" : "hrs"}`;
      currentSelfcare.innerHTML = `${weeklyData[5].current}${weeklyData[5].current === 1 ? "hr" : "hrs"}`;
      prevSelfcare.innerHTML = `Previous - ${weeklyData[5].previous}${weeklyData[5].current === 1 ? "hr" : "hrs"}`;
    }
    if (report === 'monthly'){
      currentWork.innerHTML = `${monthlyData[0].current}${monthlyData[0].current === 1 ? "hr" : "hrs"}`;
      prevWork.innerHTML = `Previous - ${monthlyData[0].previous}${monthlyData[0].current === 1 ? "hr" : "hrs"}`;
      currentPlay.innerHTML = `${monthlyData[1].current}${monthlyData[1].current === 1 ? "hr" : "hrs"}`;
      prevPlay.innerHTML = `Previous - ${monthlyData[1].previous}${monthlyData[1].current === 1 ? "hr" : "hrs"}`;
      currentStudy.innerHTML = `${monthlyData[2].current}${monthlyData[2].current === 1 ? "hr" : "hrs"}`;
      prevStudy.innerHTML = `Previous - ${monthlyData[2].previous}${monthlyData[2].current === 1 ? "hr" : "hrs"}`;
      currentExercise.innerHTML = `${monthlyData[3].current}${monthlyData[3].current === 1 ? "hr" : "hrs"}`;
      prevExercise.innerHTML = `Previous - ${monthlyData[3].previous}${monthlyData[3].current === 1 ? "hr" : "hrs"}`;
      currentSocial.innerHTML = `${monthlyData[4].current}${monthlyData[4].current === 1 ? "hr" : "hrs"}`;
      prevSocial.innerHTML = `Previous - ${monthlyData[4].previous}${monthlyData[4].current === 1 ? "hr" : "hrs"}`;
      currentSelfcare.innerHTML = `${monthlyData[5].current}${monthlyData[5].current === 1 ? "hr" : "hrs"}`;
      prevSelfcare.innerHTML = `Previous - ${monthlyData[5].previous}${monthlyData[5].current === 1 ? "hr" : "hrs"}`;
    }
  })
}

