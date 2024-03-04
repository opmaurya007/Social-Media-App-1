import express, { json } from "express";
const app=express();
import cors from "cors";
const stripe=require("stripe")("sk_test_51OdtNOSJGQzVMklLCZBBIbaIQAHnzeBRKVqIQA9ZCpbONLbKyvFrwu1k3KkrVW4nTNXgKvkAaJxZQxuwZXIkf5t300ilwszS4f")

app.use(json());
app.use(cors());

//checkout api
app.post("/api/create-checkout-session", async(req, res)=>{
    const {products}=req.body;

    const lineItems=products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.dish,
                images:[product.imgdata]
            },
            unit_amount:product.price * 100,
        },
        quantity:product.qnty
    }));


    const session=await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items: lineItems,
        mode:"payment",
        success_url:"http//localhost:3000/success",
        cancel_url:"http//localhost:3000/cancel",

    });
    res.json({id:session.id})


})

app.listen(7000,()=>{
    console.log("sever started....")
})