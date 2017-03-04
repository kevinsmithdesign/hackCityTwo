// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
var Users = require("./users.js")

// Creates a "event" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    creator: {
      type: Sequelize.INTEGER
    },
    // Status: {
    //   type: Sequelize.STRING,
    //   defaultValue: "Host"
    // },
    event_Name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    when_at: {
      type: Sequelize.DATE
    },
    time: {
      type: Sequelize.TIME
    },
    // attendee: {
    //   type: Sequelize.INTEGER
    // },
    street_number: {
      type: Sequelize.INTEGER
    },
    street: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    }

  }, {
    timestamps: false,
    // Links the events table with the user and teams tables
    classMethods: {
      associate: function (models) {
        Events.belongsToMany(models.Users, {
          through: "userEvents"
        });
        Events.hasMany(models.Teams, {
          // through: eventTeams
          foreignKey: "event_id"
        })
      }
    }
  });
  return Events;
};