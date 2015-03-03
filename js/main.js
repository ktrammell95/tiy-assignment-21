var Employee = Backbone.Model.extend({
  // url: "js/data.json"
});

//table rows for contact information

var EmployeeView = (function() {
  var template = JST["contactsRow"];

  function EmployeeView(model) {
    _.extend(this, Backbone.Events)
    this.model = model;
    this.$el = $("<tr />");
    this.$el.addClass("tableRow");
    this.listenTo(this.model, "change", function() {
      this.render();
    });
  }

  EmployeeView.prototype = {
    render: function() {
      var markup = template( this.model.toJSON() )
      return this.$el.html( markup );
    }
  }

  return EmployeeView;

})();

//table headers for columns

var HeaderView = (function() {
  var template = JST["contactsHead"];

  function HeaderView(headings) {      
    _.extend(this, Backbone.Events);
      this.headings = headings;
      this.$el = $("<tr />");
      this.$el.addClass("tableHead"); 
    }

  HeaderView.prototype = {
    render:function() {
      // map headings into objects that look like { name: "Name"}
      var data = _.map(this.headings, function(heading){
          return {name: heading};
      });
      // loop through them
      _.each(data, function(datum){
        // append th template to tr (this.$el)
        this.$el.append(template(datum)) 
      }, this);
      return this.$el;
    }
  }
  return HeaderView;

})();

//ajax function

$(function() {
  $.ajax("js/data.json").done(function(data){
    var headings = Object.keys(data[0]);
    var headView = new HeaderView(headings);
    $("#contacts thead").html(headView.render());

    _.each(data, function(datum){
      var employeeModel = new Employee(datum);
      var employeeView = new EmployeeView(employeeModel);
      $("#contacts tbody").append(employeeView.render());
    });
  });
});