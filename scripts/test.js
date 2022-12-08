// BRO you don't need to use Firebase or any database, really. Just make a local JSON with all the cities. Can do a for loop for test each object (city)
// Create an array for bestCities. You'll extrapolate the best cities from the allCities array, which will be in a separte JSON
bestCities = [];
let testSubmit = document.getElementById("btn");
let testOutput = document.getElementById("testOutput");
let testForm = document.getElementById("testForm");
let testTemp = 65;

testSubmit.onclick = () => {
  //  testOutput.innerHTML = "";
  alert(bestCities.length);
  // Need to also check for result before defining this
  let testResult = document.querySelector('input[name="state_answer"]:checked').value;

  // For each weather day, check if ideal and then add a point if ideal
  for (let i = 0; i < testWeather.length; i++) {
    for (let z = 0; z < allCities.length; z++) {
      if (testWeather[i].name == allCities[z].city) {
        if (testWeather[i].temp == testTemp) {
          //  idealDaysCount += 1; // This value should be within each object
        }
      }
    }
  }

  // Use a LONG for-loop to analyze each city and determine scores.
  // In thoery, this should test: If city matches user preferences, calculate score and then push top 100 scores to the bestCities array
  for (let i = 0; i < allCities.length; i++) {

    // Test
    if (testResult == allCities[i].state_name) {
      // bestCities.push(allCities[i]);
      //    alert(bestCities.length);
      //    alert(allCities[i].city);
    }

  }
}

// Grouping objects by value code from: https://dmitripavlutin.com/javascript-array-group/
let groupedWeather = testWeather.reduce((group, product) => {
  let {
    name
  } = product;
  group[name] = group[name] ?? [];
  group[name].push(product);
  return group;
}, {});
// console.log(groupedWeather);

function downloadObjectAsJson(exportObj, exportName) {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".js");
  // document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}
