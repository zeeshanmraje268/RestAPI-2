
const Product=require('../models/product');
const getAllProduct=async(req,res)=>{
    const {name , company , price , rating ,sort ,select}=req.query;
    const queryObject={};
    let myApiData=Product.find(queryObject);
    if(name){
        queryObject.name=name;
    }

    if(company){
        queryObject.company=company;
    }
   
    if(rating){
        queryObject.rating=rating;
    }

    if(price){
        queryObject.price=price;
    }

   
    if(sort){
        let sortFix=sort.replace(","," ");
        myApiData=myApiData.sort(sortFix);
    }

    if(select){
        let selectFix=select.replace(","," ");
        myApiData=myApiData.select(selectFix);
    }

    let page=Number(req.query.page) ||1;
    let limit=Number(req.query.limit) ||3;
    let skip=(page-1)*limit;
    myApiData=myApiData.skip(skip).limit(limit);
    


    const myData=await myApiData;
    res.status(200).json({per_page:myData.length,page,totalObject:"13",myData})
}

const getAllProductTesting=async(req,res)=>{
    const {name ,company ,price ,rating ,sort ,select}=req.query;
    const queryObject={};
    let myApiData=Product.find(queryObject);
    if(name){
        queryObject.name=name;
    }

    if(company){
        queryObject.company=company;
    }

    if(price){
        queryObject.price=price;
    }
   
    if(rating){
        queryObject.rating=rating;
    }

    if(sort){
        let sortFix=sort.replace(","," ");
        myApiData=myApiData.sort(sortFix);
    }

    if(select){
        let selectFix=select.replace(","," ");
        myApiData=myApiData.select(selectFix);
    }

    let page=Number(req.query.page) ||1;
    let limit=Number(req.query.limit) ||3;
    let skip=(page-1)*limit;
    myApiData=myApiData.skip(skip).limit(limit);
    

    const myData=await myApiData;
    res.status(200).json({per_page:myData.length,page,totalObject:"13",myData});
}

module.exports={getAllProduct,getAllProductTesting}