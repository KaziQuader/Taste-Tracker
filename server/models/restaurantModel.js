import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your restaurant name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter Restaurant description"],
  },
  averageOrderValue: {
    type: Number,
    required: [true, "Please enter average order value"],
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  logo: {
    type: String,
  },
  offer:{
    type:String
  },
  category: {
    type: String,
    required: [true, "Please enter restaurant category"],
  },
  capacity: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  numOfReservations: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      img: {
        type: String,
      },
    },
  ],
  complaints: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      complains: {
        type: String,
        required: true,
      },
    },
  ],
});

export const Restaurant = mongoose.model("Restaurant", restaurantSchema);
