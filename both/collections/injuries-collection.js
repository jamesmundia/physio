Injuries = new Mongo.Collection("injuries");

Injuries.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

Rehab = new SimpleSchema({
  exercise: {
    type:String,
    label: "Rehab Exercise"
  },
  volume: {
    type: String,
    label: "Volume, i.e. 3 sets of 10 squats"
  },
  date: {
    type: String,
    label: "Date of Rehab Exercise"
  }
});


Injuries.attachSchema(new SimpleSchema({
  player: {
    type: String,
    label: "Player",
    max: 50
  },
  desc: {
    type: String,
    label: "Injury"
  },
  rehab: {
    type: [Rehab]
  },

}));