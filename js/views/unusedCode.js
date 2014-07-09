  tomorrowMaker: function () {
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var exportArray = [];
    var date = new Date();
    for (var i=0; i < week.length; i++){
      if ((date.getDay() + i) <= 6){
        exportArray.push(week[date.getDay() + i]);
      } else if ((date.getDay() + i) == 7) {
        for (var k=0; k < date.getDay();) {
         exportArray.push(week[k]);
         k++;
       }
     }
   }
   return exportArray;
 },

 tempGetter: function () {
  var daily = this.model.get('daily');
  var tempArray = [];

  var myDate = daily.time;

   // this.on('change', daily, concatenator());

    var concatenator = function () {

      for (i = 0; i <= 20;) {
        tempArray.push(daily[i].apparentTemperatureMin + "/" + daily[i].apparentTemperatureMax);
        i++;
      }
    }
  return tempArray;
},

objInfoMaker: function () {
  var weekObj = {};
  var supaTemp = [];
  var tempArray = this.tempGetter();
  var dayArray = this.tomorrowMaker();

  for (var i = 0; i<=7; i++) {
    weekObj[dayArray[i]] = tempArray[i];
    //supaTemp.push(dayArray[i] + ": " + tempArray[i]);
      } 
  // for (var i = 0; i < supaTemp.length;) {
  //   weekObj += supaTemp[i];
  //   i++;
  // }
  return weekObj;
}

////from forecast view



//   tomorrowMaker: function () {
//     var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     var exportArray = [];
//     var date = new Date();
//     for (var i=0; i < week.length; i++){
//       if ((date.getDay() + i) <= 6){
//         exportArray.push(week[date.getDay() + i]);
//       } else if ((date.getDay() + i) == 7) {
//         for (var k=0; k < date.getDay();) {
//          exportArray.push(week[k]);
//          k++;
//        }
//      }
//    }
//    return exportArray;
//  },

//  tempGetter: function () {
//   var daily = this.model.get('daily');
//   var tempArray = [];

//   var myDate = daily.time;

//    // this.on('change', daily, concatenator());

//     var concatenator = function () {

//       for (i = 0; i <= 20;) {
//         tempArray.push(daily[i].apparentTemperatureMin + "/" + daily[i].apparentTemperatureMax);
//         i++;
//       }
//     }
//   return tempArray;
// },

// objInfoMaker: function () {
//   var weekObj = {};
//   var supaTemp = [];
//   var tempArray = this.tempGetter();
//   var dayArray = this.tomorrowMaker();

//   for (var i = 0; i<=7; i++) {
//     weekObj[dayArray[i]] = tempArray[i];
//     //supaTemp.push(dayArray[i] + ": " + tempArray[i]);
//       } 
//   // for (var i = 0; i < supaTemp.length;) {
//   //   weekObj += supaTemp[i];
//   //   i++;
//   // }
//   return weekObj;
// }

