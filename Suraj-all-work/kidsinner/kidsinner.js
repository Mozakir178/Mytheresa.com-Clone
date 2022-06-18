var kidsdata = [{image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e6/P00577458_d2.jpg",
image1:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/45/P00677840_b1.jpg",
                  name:"BURBERRY KIDS",
                  desc:"Baby Vintage Check cotton-blend bucket hat",
                  price:170,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/45/P00677840_b1.jpg",
                  name:"GUCCI KIDS",
                  desc:"Baby Web stripe pleated denim dress",
                  price:380,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/bf/P00686010_b1.jpg",
                  name:"MINI RODINI",
                  desc:"Baby embroidered cotton romper",
                  price:68,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ff/P00655997_b1.jpg",
                  name:"BAPE KIDS",
                  desc:"Striped socks",
                  price:35,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/cd/P00677977_b1.jpg",
                  name:"GUCCI KIDS",
                  desc:"Baby Square G wool cardigan",
                  price:545,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/55/P00543157_d2.jpg",
                  name:"MOSCHINO KIDS",
                  desc:"Baby leather sneakers",
                  price:130,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/72/P00677984_b1.jpg",
                  name:"GUCCI KIDS",
                  desc:"Baby GG intarsia wool pants",
                  price:295,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/10/P00677983_b1.jpg",
                  name:"GUCCI KIDS",
                  desc:"Baby GG intarsia sweater",
                  price:400,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/37/P00682610_b1.jpg",
                  name:"MONNALISA",
                  desc:"Baby floral down coat",
                  price:210,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8a/P00682565_b1.jpg",
                  name:"MONNALISA",
                  desc:"Baby floral neoprene skirt",
                  price:105,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e4/P00711451_d2.jpg",
                  name:"MONCLER ENFANT",
                  desc:"Baby logo wool beanie",
                  price:95,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3b/P00708472_b1.jpg",
                  name:"MONCLER ENFANT",
                  desc:"Baby Macaire quilted coat",
                  price:325,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/0f/P00682559_b1.jpg",
                  name:"MONNALISA",
                  desc:"Baby cotton top and pants set",
                  price:115,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d1/P00682576_b1.jpg",
                  name:"MONNALISA",
                  desc:"Baby tulle-trimmed cotton onesie",
                  price:115,
                },
                
]
var kidsarr = JSON.parse(localStorage.getItem("cartdetail"))|| []
document.querySelector("#filter").addEventListener("change",priceFilter)
priceFilter(kidsdata)
var count = kidsdata.length
console.log(count)


function priceFilter(){
     var selected = document.querySelector("#filter").value;
     if(selected=="lowtohigh"){
      kidsdata.sort(function(a,b){
        if(a.price>b.price) return 1
        if(a.price<b.price) return -1
        return 0
        // console.log(a.price)
          // made by suraj web 19 roll no 1274 
       })
      //  disptable(menarr)
      // console.log(selected)
     } 
     if(selected=="sortby"){
      kidsdata.sort(function(a,b){
        return 
        // console.log(a.price)
       })
      //  disptable(menarr)
      // console.log(selected)
     } 
     if(selected=="hightolow"){
      kidsdata.sort(function(a,b){
        if(a.price>b.price) return -1
        if(a.price<b.price) return 1
        return 0
       })
      //  disptable(menarr)
     }
     disptable(kidsdata) 
    }
  function brandfilter(){

  }
    // made by suraj web 19 roll no 1274 
disptable(kidsdata)
function disptable(k){
    document.getElementById("productlength").innerText = `${count} products `
    document.querySelector("#right_Section").innerHTML="";
   k.forEach(function(el,index){
    
    var div = document.createElement("div")
    var avtar = document.createElement("img")
    // var avtar1 = document.createElement("img")
    avtar.setAttribute("src",el.image)
    // avtar.addEventListener("mouseover",function(){
    //   changeimage(kidsdata,index)
    //   // console.log(el.image)
    // })
    var p1 = document.createElement("p")
    p1.innerText = el.name
    var p2 = document.createElement("p")
    p2.innerText = el.desc
    var h4 = document.createElement("h4")
    h4.innerText = `€ ${el.price}`
    var btn = document.createElement("button")
    btn.innerText = "Add to Cart"
    btn.addEventListener("click",function(){
      addall(el)
   })
    div.append(avtar,p1,p2,h4,btn)
    document.getElementById("right_Section").append(div)
   })
  //  function changeimage(kidsdata,index){
  //   console.log(kidsdata.image1)
     // made by suraj web 19 roll no 1274 
  //  }
}
function addall(el){
  //  el.quantity = 1;
  //  el.total_price = el.price * 1; 

   kidsarr.push(el)
   localStorage.setItem("cartdetail",JSON.stringify(kidsarr))
   
   
 }
 let ArrayData=[];
let allData=document.getElementsByClassName("check");
Array.from(allData).forEach(function(e,i){
  document.getElementsByClassName("check")[i].addEventListener("click",function(){
    let checkbox=document.getElementsByClassName("check")[i]
  
    // console.log(checkbox.value);
    if(checkbox.checked==true){


      ArrayData.push(checkbox.value)
      CheckboxFun(ArrayData);
  
    }
    else{
      let index=ArrayData.indexOf(checkbox.value);
      ArrayData.splice(index,1);
      CheckboxFun(ArrayData);
    
    }
  })
})
  // made by suraj web 19 roll no 1274 
function CheckboxFun(arr){
  let newArray=[];

  if(arr.length==0){
    disptable(kidsdata)
    return;
  }
  arr.forEach(function(e){
    let result=kidsdata.filter(function(x){
      return x.name==e;
    })
    // console.log(result)
   newArray.push(result)
  
  })
  // console.log(newArray);
  let lastArray=[];
  for(let i=0;i<newArray.length;i++){
        for(let j=0;j<newArray[i].length;j++){
          // console.log(newArray[i][j])
          lastArray.push(newArray[i][j])
        }
  }
  disptable(lastArray);
}
// shwocheckbox()
// var show = false;
  // made by suraj web 19 roll no 1274 
// function shwocheckbox(){
//   var checkbo = document.getElementById("hide");
//   if(!show){
//     checkbo.style.display = "block";
//     show=true;
//   } else{
//     checkbo.style.display = "none";
//     show=false;
//   }
// }
  // made by suraj web 19 roll no 1274 
disptable(kidsdata)