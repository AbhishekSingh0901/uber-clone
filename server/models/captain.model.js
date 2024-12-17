const mongoose = require("mongoose");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [2, "First name must be at least 2 characters"],
    },
    lastname: {
      type: String,
      minlength: [2, "First name must be at least 2 characters"],
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
      },
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
    select: false, // Don't include password in the response
  },
  socketId: {
    type: String,
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      minlength: [3, "Color must be atleast 3 characters"],
      required: true,
    },
    plate: {
      type: String,
      minlength: [4, "Plate must be at least 6 characters"],
      required: true,
    },
    capacity: {
      type: Number,
      min: [1, "Capacity must be atleast 1"],
      required: true,
    },
    vehicleType: {
      type: String,
      enum: ["car", "bike", "truck"],
      required: true,
    },
  },

  location: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

captainSchema.methods.getJWTToken = async function () {
  return await jwt.sign({ _id: this._id }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

captainSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("Captain", captainSchema);

module.exports = captainModel;
