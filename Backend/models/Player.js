import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },

    age: {
      type: Number,
      min: 0,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },

    sport: {
      type: String,
      required: true,
      trim: true,
    },

    position: {
      type: String,
      required: true,
    },

    team: {
      type: String,
      default: null,
    },

    jerseyNumber: {
      type: Number,
      min: 0,
    },

    country: {
      type: String,
    },

    city: {
      type: String,
    },

    profileImage: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    experienceYears: {
      type: Number,
      min: 0,
      default: 0,
    },

    // Flexible statistics for different sports
    stats: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
      ref:"sport"
    },

    skills: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
      ref:"Skill"
    },

    // Key-value pair for player points
    points: {
      type: mongoose.Schema.Types.Mixed,
      default: {
        total: 0,
      },
    },

    availability: {
      type: String,
      enum: ["Available", "Unavailable", "Injured"],
      default: "Available",
    },

    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Player", playerSchema);