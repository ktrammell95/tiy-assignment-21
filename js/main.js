var Employee = Backbone.Model.extend({
  // url: "js/data.json"
});


var EmployeesCollection = Backbone.Collection.extend({
  url: "js/data.json",
  model: Employee
});

// var FilteredEmployeesCollection = EmployeesCollection.extend({

// });





//table rows for contact information
var EmployeeView = Backbone.View.extend({

  tagName: "tr",

  template: JST["contactsRow"],

  render: function() {
    var markup = this.template( this.model.toJSON() );
    this.$el.html(markup);
    return this;
  };

  var startDate = new Date(userData.start);
    var m = moment(startDate);
    var formattedDate = m.format("MMM D, YYYY");
    userData.formattedDate = formattedDate;
});

// table headers for columns

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


$(function() {

  var employees = new EmployeesCollection();
  // var filtered = new FilteredEmployeesCollection();

  employees.on("add", function(model){
    var employeeView = new EmployeeView({model: model});
    $("#contacts tbody").append(employeeView.render().el);
  });
    console.log(employees)

  employees.fetch().done(function() {
    var headings = employees.first().keys();
  // line above is similar to saying var headings = Object.keys(data[0]);
    var headView = new HeaderView(headings);
    $("#contacts thead").html(headView.render());
    
  });
});