const express = require('express');
const ejs = require('ejs')
const bodyParser = require('body-parser');
const Product = require('./schema');
const port =  process.env.PORT || 5000;
const app = express();
const mongoose = require('mongoose');
const product = require('product');

app.use(bodyParser.json());


app.use(express.static('views/static'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine','ejs');
    

// Connect to MongoDB
mongoose.connect('mongodb://localhost/products', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// // View products
// app.get('/products', async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     const savedProduct = await product.save();
//     res.json(savedProduct);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// Add a product
app.get('/products/add',async(req,res)=>{
        res.render('add',{})
})

// Add a product
app.post('/products/add',async(req,res)=>{
    try{
    const product= new Product({
        productId:req.body.id,
        name:req.body.name,
        price:req.body.price,
        featured:   Boolean(req.body.featured),
        rating:req.body.rating,
        createdAt:req.body.createdAt,
        company:req.body.company
    })
    product.save();
    res.redirect('/products')
}
catch(err){
    res.send(err.message)
}
})


 // Fetch products
 app.get('/products',async (req,res)=>{
    try{
    var products;
    const price = req.query.price;
    const rating = req.query.rating;
    console.log("Price is " + price)
    if(price!=undefined&&rating!=undefined){
     products = await Product.find({price:{$lt:price},rating:{$gt:rating}})
    }
    else if(rating!=undefined){
     products = await Product.find({rating:{$gt:req.params.price}});
    }
    else if(products!=undefined){
     products = await Product.find({price:{$lt:rating}})
    }
    else {
         products=await Product.find();
    }
    res.render('main',{
        products:products
    })
    // res.json(products);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})


// Update a product
app.patch('/products/:id', async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate({productId:req.params.id},{
        productId : req.body.productId,
        name : req.body.name,
        price : req.body.price,
        featured : req.body.featured,
        rating : req.body.rating,
        company : req.body.company
    });

    const updatedProduct = await product.save();
   // await product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a product
app.delete('/products/:id', async (req, res) => {
  try {
    const product = await Product.findOne({productId:req.params.id});
    await product.remove();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fetch featured products
app.get('/products/featured', async (req, res) => {
  try {
    const products = await Product.find({ featured: true });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//

app.listen(port,()=>{
    
})