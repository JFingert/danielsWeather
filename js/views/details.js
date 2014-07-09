var DetailView = Backbone.View.extend({
	el: '#details',

	template: require('../../templates/details.hbs'),

	initialize: function () {
		this.listenTo(this.model, 'change', this.render);
		this.render();
	},

	  render: function () {
	    var context = {}
	    context.currently = this.model.get('currently') || {};
	    context.today = this.model.get('daily') || {};
	    this.$el.html(this.template(context));
	    console.log(context.today);
	    return this;
	  }

});


module.exports = DetailView;