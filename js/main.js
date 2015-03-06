

//--------------------------Model--------------------------------//

var Employee = Backbone.Model.extend({
  // url: "js/data.json"
});

//--------------------------Collection--------------------------------//


var EmployeesCollection = Backbone.Collection.extend({
  url: "js/data.json",
  model: Employee
});

var FilteredEmployeesCollection = EmployeesCollection.extend({
  
});
//--------------------------View--------------------------------//

//table rows for contact information
var EmployeeView = Backbone.View.extend({

  tagName: "tr",

  template: JST["contactsRow"],

  render: function() {
    var markup = this.template( this.model.toJSON() );
    this.$el.html(markup);
    return this;
  },

});

var CheckboxView = Backbone.View.extend({

  tagName: "li",
  template: JST["checkbox"],

  render: function() {
    var markup = this.template( this.model.toJSON() );
    this.$el.html(markup);
    return this;
  },
});
//--------------------------Functions--------------------------------//

  // 4. `function you create`
  // 5. goes through your list of departments and sees whats checked
  // 6. filters the EmployeeCollection
  // 7. sets those results on the FilteredEmployeesCollection
  // WIN.


function formatTimes() {
  _.each($("time[datetime]"), function(e) { 
    var $el = $(e); 
    $el.text(moment($el.attr('datetime'))
    .format("MMMM Do, YYYY")) });
}

$(function() {

  var employees = new EmployeesCollection();
  var filtered = new FilteredEmployeesCollection();

  
  employees.on("add", function(model){
    var employeeView = new EmployeeView({model: model});
    $("#contacts tbody").append(employeeView.render().el);
  });
    // console.log(employees)

  employees.fetch().done(function() {
    var headings = employees.first().keys();
    _.each(headings, function(heading){
    $("thead tr").append($("<th />").text(heading));
      
    });
  // line above is similar to saying var headings = Object.keys(data[0]);
    
    formatTimes();


  // var ee = employees;
    _.uniq(employees.map(function(e) { 
      console.log(e.attributes.Dept)
      // return e.attributes.Dept; 
  }))

    // 1. map employee departments, uniq
    // 2. for each department, create the filter checkbox (probably its own template)
      // 3. it'll handle an on change event that calls a `function you create`
    // for each employee, 
      // format the date
      // set the FormattedStart attribute to the formatted date.
  });

});