 import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../middlewares/userModel.js";
 
 export const registerController = async(req,res) =>{
    try {
        const{name,email,password,phone,gender} =req.body;
        //Validations
        if(!name){
            return res.send({error:"Name is required"})
        }
        if(!email){
            return res.send({error:"Email is required"})
        }
        if(!password){
            return res.send({error:"Password is required"})
        }
        if(!phone){
            return res.send({error:"Phone Number is required"})
        }
        if(!gender){
            return res.send({error:"Gender is required"})
        }

        //check user
        const checkExisitingUser = await userModel.findOne({email})
        //existing user
        if(checkExisitingUser){
            return res.status(201).send({
                success:true,
                message:'Already Registered , Please Login'
            })
        }

        //register user
        const hashpswd = await hashPassword(password);

        //save
        const user = await new userModel({name, email,phone,gender, password:hashpswd}).save
        res.status(200).send({
            success:true,
            message:'User Register successfully',
            user
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).send(
            {
                success:false,
                message:'Error in registeration',
                error
            }
        )
    }
 };

