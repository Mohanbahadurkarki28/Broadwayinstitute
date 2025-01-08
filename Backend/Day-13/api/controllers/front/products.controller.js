import {Product} from "@/models";

class ProductsController{
    latest=async(req,res,next)=>{
    try{
        const products=await Product.find({status:true}).sort({'createdAt'})
    }}
}