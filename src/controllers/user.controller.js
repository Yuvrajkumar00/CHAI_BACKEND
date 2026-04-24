import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import User from "../models/User.models.js";
import uploadOnCloudinary from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
    // get data from user
    // validate data
    // check user is existing or not
    // send message if user already existing
    // check for images, check for avatar
    // upload them to cloudinary
    // create user if user not existing
    // send message if user not created
    // remove password and refresh token field from response 
    //  return response

    const { fullname, username, email, password } = req.body;
    console.log("fullname", fullname, "email", email);

    if (
        [fullname, email, username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "all fields are required")
    }

    const existingUser = await User.findOne({
        $or: [{ email }, { username }]
    })

    if (existingUser) {
        throw new ApiError(409, "User with email or username already exist")
    }

    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar image is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
        throw new ApiError(500, "Failed to upload avatar image")
    }

    const user = await User.create({
        fullname,
        username: username.toLowerCase(),
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || null
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if (!createdUser) {     
        throw new ApiError(500, "Failed to create user")
    }

    res.status(201).json(new ApiResponse(200, "User registered successfully", createdUser))

})

export { registerUser };