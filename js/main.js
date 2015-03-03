var Contact = Backbone.Model.extend({
  url: "js/data.json"
});

var ContactView = (function() {
  var template = JST["contactsRow"];

  function ContactView(model) {
    this.model = model;
    this.$el = $("<table />");
  }

  ContactView.prototype = {
    render: function() {
      var markup = template( this.model.toJSON() )
      return this.$el.html( markup );
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