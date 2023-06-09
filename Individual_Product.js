
// footer

let A_Read_more_Btn = document.getElementById("A_Read_more");

let A_Button_Read_More_Info = document.getElementById("A_Button_Read_More_Info");

A_Read_more_Btn.addEventListener("click", function () {

    A_Button_Read_More_Info.innerHTML = null;
    DisplayMoreInfo();
})
function DisplayMoreInfo() {
    let para = document.createElement("p");

    let Header = document.createElement("h2");
    Header.innerText = "India’s biggest Online Supermarket";
    para.innerHTML = "bigbasket.com believes in providing the highest level of customer service and is continuously innovating to meet customer expectations. Our On-time Guarantee is one such <br> assurance where we refund 5% of the bill value if the delivery is delayed (however, due to the pandemic caused by Covid-19 our delivery might get delayed. Delivery Guarantee <br>will not be applicable). For all your order values above Rs. 1200, we provide free delivery. A wide range of imported and gourmet products are available through our express <br>delivery and slotted delivery service. If you ever find an item missing on delivery or want to return a product, you can report it to us within 48 hours for a ‘no-questions-asked’ refund. <br><br>Best quality products for our quality-conscious customers. <br>bigbasket.com is synonymous with superior quality and continues to strive for higher levels of customer trust and confidence, by taking feedback and giving our customers what <br>they want. We have added the convenience of pre-cut fruits in our Fresho range. If it’s a product category you’re looking to shop from, we’ve made it convenient for you to access all <br>products in a section easily. For instance, if you’re looking for beverages, you can order from a long list of beverages that include cool drinks, hot teas, fruit juices and more. <br><br>We are proud to be associated closely with the farmers from whom we source our fresh products. Most of our farm-fresh products are sourced directly from farmers, which not only <br>ensures the best prices and freshest products for our customers but also helps the farmers get better prices. With more than 80 Organic Fruits and Vegetables and a wide range of <br>organic staples, bigbasket has the largest range in the organic products category. <br><br> When it comes to payment, we have made it easy for our customers can pay through multiple payment channels like Credit and Debit cards, Internet Banking, e-wallets and Sodexo <br>passes or simply pay Cash on Delivery (COD).The convenience of shopping for home and daily needs, while not compromising on quality, has made bigbasket.com the online <br>supermarket of choice for thousands of happy customers across India.<br><br>"

    A_Button_Read_More_Info.append(Header, para);
}


// product Detailes
let A_ProductNum = document.getElementById("A_ProductNum") ;
 
let ItId = localStorage.getItem("itemid") || 1;
//  console.log(typeof(ItId));
render(ItId)
function render(hi){
   
    let apiurl=`http://localhost:3000/grocery/${hi}`
    fetch(apiurl)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
    //    console.log(data)
       Display(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}


let Lsdata = JSON.parse(localStorage.getItem("BasketProducts")) || [];
function Display(data) {

    
    let A_Category = document.getElementById("A_Category");

     let P1 = document.createElement("h4");
     P1.innerText = data.category;
    
     let P2 = document.createElement("h4");
     P2.innerText = `Children `

     let P3 = document.createElement("h4");
     P3.innerText = `Men & Women`;

    A_Category.append(P1,P2,P3)


    let A_Brands = document.getElementById("A_Brands");

    let B = document.createElement("h4");

    B.innerText = data.brand;
    A_Brands.append(B)
    
    let A_imageOfProduct = document.getElementById("A_imageOfProduct");
    let imge = document.createElement("img");
    imge.setAttribute("id",`A_Product_img`);
    imge.src = `${data.image}`;
    A_imageOfProduct.append(imge);


    let A_Bottom_Heading = document.getElementById("A_Bottom_Heading");
    let A_B_Heading = document.createElement("h2");
    A_B_Heading.innerText = data.title;
    
    A_Bottom_Heading.append(A_B_Heading);


    let ProductInfo = document.getElementById("ProductInfo");
    //console.log(data.title);
    let name = document.createElement(`h1`)
    name.innerText  = data.title;

    let price = document.createElement("h2");
    price.innerText =`MRP : ${data.price}`;

    let category = document.createElement("p");
    category.innerText = `category : ${data.category}`;


    let brand = document.createElement("h2");
    brand.innerText = `brand : ${data.brand}`;


    let seasonal =document.createElement("h4");
    seasonal.innerText = `Seasonal : ${data.seasonal}`;

    let description = document.createElement("h4");
    description.innerText = `Offer : ${data.description}`;

    let country = document.createElement("h4");
    country.innerText = `Country : ${data.country}`;


    let Rating  = document.createElement("h4");
    Rating.innerHTML = `4.2 <img src="./Bornvita_images/star.png" alt=""> 1556 Ratings & 35 Reviews</p>`;

    let btdiv=document.createElement("div")
    btdiv.classList.add("bts")

    let A_Remove_Product = document.createElement("button");
    A_Remove_Product.classList.add("A_Btn_design");
    A_Remove_Product.innerText = `-`;
    A_Remove_Product.classList.add("bt")
   

    let A_ProductNum = document.createElement("button");
    A_ProductNum.classList.add("A_Btn_design");
    A_ProductNum.innerText = data.quantity;
    A_ProductNum.classList.add("bt")
    

    let A_Add_Product = document.createElement("button");
    A_Add_Product.classList.add("A_Btn_design")
    A_Add_Product.innerText = "+";
    A_Add_Product.classList.add("bt")

    let Addto_Basket = document.createElement("button");
    Addto_Basket.classList.add("A_Btn_design")
    Addto_Basket.setAttribute("id",`AddToBasket`);
    Addto_Basket.innerText = `ADD TO BASKET`
    Addto_Basket.style = "color : black";

    btdiv.append( A_Remove_Product,A_ProductNum,A_Add_Product, Addto_Basket)

    Addto_Basket.addEventListener("click",function(){
        let c= 0;
        for(let i=0;i<Lsdata.length;i++)
        {
            if(Lsdata[i] == data.id)
            {
                c++;
            }
        }
        if(c == 0)
        {
            Lsdata.push(data.id);
        }
        localStorage.setItem("BasketProducts",JSON.stringify(Lsdata));
    })

    let SaveBth = document.createElement("button");
    SaveBth.classList.add("A_Btn_design");
    SaveBth.setAttribute("id","SaveBtn");
    SaveBth.innerText = `Save`;
    SaveBth.style = "color : orange";

    let DeliveryTime = document.createElement("p");
    DeliveryTime.innerHTML = `<img src="./Bornvita_images/DeliveryTimeIMG.png" alt="">Standard: Tomorrow 9:00AM - 1:30PM</p>`

    ProductInfo.append(name,price,seasonal,description,Rating,btdiv);



    A_Remove_Product.addEventListener("click", function () {
        if (data.quantity < 1) {
            data.quantity = 0;
        }
        else {
            data.quantity = data.quantity - 1;
        }
        A_ProductNum.innerText = data.quantity;
    })
    A_Add_Product.addEventListener("click", function () {
        data.quantity = data.quantity + 1;
        A_ProductNum.innerText = data.quantity;
    })
    localStorage.removeItem("itemid")
}




        let container=document.getElementById("products")
        let apiurl="http://localhost:3000/grocery?_page=1&_limit=8"
        fetch(apiurl)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
           console.log(data)
           display(data)
        })
        .catch((err)=>{
            console.log(err)
        })
       
        function display(data){
            container.innerHTML=null
            data.forEach((item) => {

                let id=document.createElement("div")
                id.setAttribute("id",item.id)

                let main=document.createElement("div")
                main.classList.add("dmain")
                let main2=document.createElement("div")
                main2.classList.add("dmain2")

                let offer=document.createElement("h4")
                offer.innerText="GET 24% OFF"
                offer.classList.add("offer")

                let image1=document.createElement("img")
                image1.setAttribute("src",item.image)
                image1.classList.add("image")

                let anchortag=document.createElement("a")
                anchortag.setAttribute("href","Individual_Product.html")

                anchortag.append(image1)

              



                let fresho=document.createElement("p")
                fresho.innerText=item.brand
                fresho.classList.add("fresho")

                let title=document.createElement("h3")
                title.innerText=item.title
                title.classList.add("title")

               

                let select=document.createElement("select")
                let option1=document.createElement("option")
                option1.innerHTML=`500g-Rs${(Math.ceil(item.price.trim().split(" ").map(Number)[0]/2))}`
                let option2=document.createElement("option")
                option2.innerText=`1kg-Rs${item.price.trim().split(" ").map(Number)[0]}`
                let option3=document.createElement("option")
                option3.innerText=`2kg-Rs${item.price.trim().split(" ").map(Number)[0]*2}`
                select.append(option1,option2,option3)
                
                let mrp=document.createElement("p")
                mrp.innerHTML=`<b>Price-  ${item.price}<b>`
                mrp.classList.add("mrp")
               
                let car=document.createElement("div")
                car.classList.add("car")
              

                let delivery=document.createElement("div")
                delivery.classList.add("delivery")


                let delivery1=document.createElement("div")
                delivery1.classList.add("delivery1")

                let carimg=document.createElement("img")
                carimg.classList.add("carimg")
                carimg.src="images/car.png"

                let delivery2=document.createElement("div")
                delivery2.classList.add("delivery2")

                let del=document.createElement("p")
                del.innerText=`Standard Delivery 30Mar,9:00AM-1:30PM`
                del.classList.add("del")
                
                let delivery3=document.createElement("div")
                delivery3.classList.add("delivery3")

                let qty=document.createElement("h3")
                qty.innerText="Qty"  
                qty.classList.add("qty")  
                
                let qinput=document.createElement("input")
                qinput.setAttribute("type","number") 
                qinput.classList.add("qinput")
                let btn1=document.createElement("button")
                btn1.classList.add("btn1")
                btn1.innerText="ADD"

                    delivery3.append(qty,qinput,btn1)
                delivery2.append(del)
                delivery1.append(carimg)
                delivery.append(delivery1,delivery2,)
                    
          main.append(offer,anchortag,fresho,title,select,main2)

                main2.append(mrp,delivery,delivery3)
                container.append(main)
            });
        }
        document.querySelector('#hamburger-icon').addEventListener('click', function() {
    document.querySelector('#menu-wrapper').classList.toggle('is-open');
  });
