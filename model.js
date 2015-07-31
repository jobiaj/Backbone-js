var Human = Backbone.Model.extend({
  initialize: function(){
      alert("Welcome to this world");
  }
});

var human = new Human({ name: "Thomas", age: 67, child: 'Ryan'});
//getting atribute..... from model
human.get("age"); // 67
human.get("name"); // "Thomas"
human.get("child"); // 'Ryan'
