// BRO you don't need to use Firebase or any database, really. Just make a local JSON with all the cities. Can do a for loop for test each object (city)
// Create an array for bestCities. You'll extrapolate the best cities from the allCities array, which will be in a separte JSON
bestCities = [];
let testSubmit = document.getElementById("btn");
let testOutput = document.getElementById("testOutput");
let testForm = document.getElementById("testForm");

//
testSubmit.onclick = () => {
  //  testOutput.innerHTML = "";
  alert(bestCities.length);
  // Need to also check for result before defining this
  let testResult = document.querySelector('input[name="state_answer"]:checked').value;

  // Use a LONG for-loop to analyze each city and determine scores.
  // In thoery, this should test: If city matches user preferences, calculate score and then push top 100 scores to the bestCities array
  for (let i = 0; i < allCities.length; i++) {
    if (testResult == allCities[i].state_name) {
      bestCities.push(allCities[i]);
      alert(bestCities.length);
      alert(allCities[i].city);
    }
  }
}
