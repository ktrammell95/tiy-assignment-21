

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

//--------------------------Functions--------------------------------//
  
function formatTimes() {
  _.each($("time[datetime]"), function(e) { 
    var $el = $(e); 
    $el.text(moment($el.attr('datetime'))
    .format("MMMM Do, YYYY")) });
}

$(function() {

  var employees = new EmployeesCollection();
  var filtered = new FilteredEmployeesCollection();

  
  filtered.on("add", function(model){
    var employeeView = new EmployeeView({model: model});
    employeeView.listenTo(model, "remove", employeeView.remove);
    $("#contacts tbody").append(employeeView.render().el);
  });
    // console.log(employees)

  employees.fetch().done(function() {
    var headings = employees.first().keys();
    _.each(headings, function(heading){
    $("thead tr").append($("<th />").text(heading));   
    })

  var checkboxes = 
    _.uniq(employees.map(function(e) {
    return e.attributes.Dept; 
  }));

    _.each(checkboxes, function(dept){
    var markup = JST["checkbox"]({name: dept});
    $("ul").append($("<li />").html(markup));
        
    });
    checkAllFilters();
    
    // 1. map employee departments, uniq
    // 2. for each department, create the filter checkbox (probably its own template)
      // 3. it'll handle an on change event that calls a `function you create`
    // for each employee,   
  });

  $(document).on("change", "input.dept", function() {
    checkAllFilters();
  })
  function checkAllFilters() {
    var checked = _.map($("input.dept:checked"), function(e){
      return $(e).attr("name");
    })

    if (checked.length === 0) {
      filtered.set(employees.models);
    } else {
      var myChoice = employees.filter(function(employee) {
        return _.contains(checked, employee.get("Dept"));
      });
      filtered.set(myChoice);
    };

    formatTimes();
  };

});