const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const Funding = require("../models/Funding");


// ================================
// CREATE PAYMENT INTENT
// POST /api/funding/create-payment-intent
// ================================

const createPaymentIntent = async (req, res) => {

  try {

    const { amount } = req.body;


    const paymentIntent = await stripe.paymentIntents.create({

      amount: amount * 100, // dollar/taka convert to smallest unit

      currency: "usd",

      payment_method_types: [
        "card"
      ],

    });



    res.status(200).json({

      clientSecret: paymentIntent.client_secret

    });



  } catch(error){

    res.status(500).json({

      success:false,

      message:error.message

    });

  }

};




// ================================
// SAVE FUNDING RECORD
// POST /api/funding
// ================================

const createFunding = async(req,res)=>{


  try{


    const funding = await Funding.create({

      name:req.body.name,

      email:req.body.email,

      amount:req.body.amount,

      paymentIntentId:req.body.paymentIntentId,

    });



    res.status(201).json({

      success:true,

      message:"Funding saved successfully",

      funding

    });



  }catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }


};





// ================================
// GET ALL FUNDINGS
// GET /api/funding
// ================================


const getAllFundings = async(req,res)=>{


  try{


    const fundings = await Funding.find()
    .sort({
      createdAt:-1
    });



    res.status(200).json(fundings);



  }catch(error){


    res.status(500).json({

      success:false,

      message:error.message

    });


  }


};




module.exports = {

  createPaymentIntent,

  createFunding,

  getAllFundings,

};