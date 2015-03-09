var Contact = Backbone.Model.extend({
  
  url: "js/contact.json"

});

var ContactView = (function(){

  var template = JST["contact"];

  function ContactView(model) {
    this.model = model;
    this.$el = $("<div />");
  }

  ContactView.prototype = {
    render: function() {
      var markup = template( this.model.toJSON() )
      return this.$el.html( markup ) ;
    }
  }

  return ContactView;

})();

$(function() {
  var contactModel = new Contact();

  var contactView = new ContactView(contactModel);

  contactModel.fetch().done(function() {
    $("body").append(contactView.render());
    
  });
  

});