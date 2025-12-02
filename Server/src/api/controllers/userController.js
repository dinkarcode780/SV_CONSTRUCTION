import asyncHandler from "../../utils/asyncHandler.js";
import userModel from "../../models/userModel.js";
import jwt from "jsonwebtoken";
import { compareValue, hashValue } from "../../utils/hashValue.js";

export const userRegister = asyncHandler(async (req, res) => {
  const { name, phone, email, password } = req.body;
  if (!name || !phone || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const existingUser = await userModel.findOne({ email, phone });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  const hashedPassword = await hashValue(password);

  const user = await userModel.create({
    name,
    phone,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: user,
  });
});

export const userLogin = asyncHandler(async (req, res) => {
  const { phone, password } = req.body;

  if (!phone || !password) {
    return res.status(400).json({
      success: false,
      message: "Phone and Password are required",
    });
  }

  const user = await userModel.findOne({ phone });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not exists",
    });
  }

  const isMatch = await compareValue(password, user.password);
  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  const token = jwt.sign(
    { id: user._id, userType: user.userType },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  user._doc.token=token;

  res.status(200).json({
    success:true,
    message:"User logged in successfully",
    data:user
  })
});

export const userUpdateProfile = asyncHandler(async(req,res)=>{
 
  const {userId,name,phone,email}= req.body;

  if(!userId){
    return res.status(400).json({
      success:false,
      message:"userId is required"
    })
  }

  const updateUser = await userModel.findByIdAndUpdate(userId,{ name,phone,email},{new:true})

  if(!updateUser){
    return res.status(404).json({
      success:false,
      message:"User not found"
    })
  }

  res.status(200).json({
    success:true,
    message:"User profile updated successfully",
    data:updateUser
  })

});


export const getUserById = asyncHandler(async(req,res)=>{
 
  const {userId} = req.query;
 
  if(!userId){
    return res.status(400).json({
      success:false,
      message:"userId is required"
    })
  }

  const user = await userModel.findById(userId);

  if(!user){
    return res.status(404).json({
      success:false,
      message:"User not found"
    })
  }

  res.status(200).json({
    success:true,
    message:"User fetched successfully",
    data:user
  })

})

export const deleteUser = asyncHandler(async(req,res)=>{
  const {userId} = req.query;
 
  if(!userId){
    return res.status(400).json({
      success:false,
      message:"userId is required"
    })
  }

  const removeData = await userModel.findByIdAndDelete(userId);

   res.status(200).json({
    success:true,
    message:"User delete successfully",
    data:removeData
  })
  
})

export const getUserByFilter = asyncHandler(async (req, res) => {
  const { search, gender, status, page = 1, limit = 10 } = req.query;

  let filter = {};

  if (search) {
    filter.$or = [
      { name:   { $regex: search, $options: "i" } },
      { email:  { $regex: search, $options: "i" } },
      { phone:  { $regex: search, $options: "i" } },
    ];
  }

 
  if (gender) filter.gender = gender;
  if (status) filter.status = status;

 
  const skip = (page - 1) * limit;

  const users = await userModel.find(filter)
    .skip(skip)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  const totalUsers = await userModel.countDocuments(filter);

  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users,
    page: Number(page),
    limit: Number(limit),
    totalUsers,
    totalPages: Math.ceil(totalUsers / limit),
  });

});
