
 // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    //   apiVersion: "2022-08-01",
    // });
    
    
    // Price ID for product on Stripe Coffee 
    // price_1N9PgGECwV7seobl06CfD61Z

    const express = require('express');
    var cors = require('cors');
    
    
    // This key might be causing some trouble 
    // const stripe = require('stripe')('sk_test_51N2Y57ECwV7seobl6k3Axyy2vVA0xv0ZArsrdPSuMqJrkOEuMOfwSXoZxMkfCkWhYycGnCvYelFc77gZ9rilAfng00IUGBpXkI');
    
    // THIS USES THE KEY FROM THE TUTORIAL EXAMPLE
    const stripe = require('stripe')('sk_test_51N2Y57ECwV7seobl6k3Axyy2vVA0xv0ZArsrdPSuMqJrkOEuMOfwSXoZxMkfCkWhYycGnCvYelFc77gZ9rilAfng00IUGBpXkI');
    
    const app = express();
    app.use(cors());
    app.use(express.static("public"));
    app.use(express.json());
    
    app.post("/checkout", async (req, res) => {
        /*
        req.body.items
        [
            {
                id: 1,
                quantity: 3
            }
        ]
    
        stripe wants
        [
            {
                price: 1,
                quantity: 3
            }
        ]
        */
        console.log(req.body);
        const items = req.body.items;
        let lineItems = [];
        items.forEach((item)=> {
            lineItems.push(
                {
                    price: item.id,
                    quantity: item.quantity
                }
            )
        });
    
        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
        });
    
        res.send(JSON.stringify({
            url: session.url
        }));
    });
    
    app.listen(4000, () => console.log("Listening on port 4000!"));