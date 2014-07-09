var ForecastView = Backbone.View.extend({
  el: '#forecast', 

  template: require('../../templates/forecast.hbs'),

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },

  render: function () {
    var self = this;
    var context = {};
    var daily = this.model.get('daily') || {data: []};
    context.sevenDayForecast = [];
    console.log(daily);

    daily.data.forEach(function (day) {
      var contextData = {};
      var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var timeStamp = new Date(day.time * 1000);
      // var sunrise = new Date(day.sunriseTime * 1000);
      // var sunset = new Date(day.sunsetTime * 1000);
      contextData.summary = day.summary;
      contextData.date = week[timeStamp.getDay()] + '(' + (timeStamp.getMonth() + 1) + '/' + timeStamp.getDate() + ')';
      contextData.maxTemp = day.temperatureMax;
      contextData.minTemp = day.temperatureMin;
      contextData.sunriseDude = self.sunTime(day.sunriseTime); //sunrise.getHours() + ':' + sunrise.getMinutes();
      contextData.sunsetDude = self.sunTime(day.sunsetTime); //sunset.getHours() + ':' + sunset.getMinutes();
      context.sevenDayForecast.push(contextData);
    });

    console.log(context);
    //console.dir(typeof context.week);
    this.$el.html(this.template(context));
    return this;
    
  },

  sunTime: function (sunAction) {
    // week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var timeStamp = new Date(sunAction);
    var hours = timeStamp.getHours();
    var mins = ":" + timeStamp.getMinutes();
    var time;
    if (hours > 12) {
      time = hours - 12 + mins + " PM";
    } else {
      time = hours + mins + " AM";
    }
    console.log(time);
    //obj = week[timeStamp.getDay()] + " " + (timeStamp.getMonth() + 1) + '/' + timeStamp.getDate() + ' at ' + time;
    return time;
  }
});

module.exports = ForecastView;