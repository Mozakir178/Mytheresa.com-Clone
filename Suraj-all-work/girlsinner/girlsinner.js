var kidsdata = [{image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/aa/P00650800_d2.jpg",
image1:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/45/P00677840_b1.jpg",
                  name:"MARC JACOBS KIDS",
                  desc:"Leopard-print rucksack",
                  price:79,
                },
                {image:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/fc/P00650805.jpg",
                  name:"MARC JACOBS KIDS",
                  desc:"Printed cotton dress",
                  price:271,
                },
                {image:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/70/P00650807.jpg",
                  name:"MARC JACOBS KIDS",
                  desc:"Cotton dress",
                  price:45,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/bd/P00610485_d2.jpg",
                  name:"NEW BALANCE KIDS",
                  desc:"574 Core suede sneakers",
                  price:45,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/58/P00659568_d2.jpg",
                  name:"THE ANIMALS OBSERVATORY",
                  desc:"Straw hat",
                  price:42,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e9/P00650528_d2.jpg",
                  name:"CHLOÉ KIDS",
                  desc:"Logo backpack",
                  price:143,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/10/P00652023_d2.jpg",
                  name:"KENZO KIDS",
                  desc:"Rubber sandals",
                  price:38,
                },
                {image:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ab/P00651984.jpg",
                  name:"KENZO KIDS",
                  desc:"Printed cotton dress",
                  price:114,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4a/P00652245_d2.jpg",
                  name:"KENZO KIDS",
                  desc:"Logo sandals",
                  price:94,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/8a/P00682565_b1.jpg",
                  name:"MONNALISA",
                  desc:"Baby floral neoprene skirt",
                  price:105,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/01/P00595490_d2.jpg",
                  name:"CHLOÉ KIDS",
                  desc:"Metallic leather ballet flats",
                  price:134,
                },
                {image:"https://img.mytheresa.com/560/560/33/jpeg/catalog/product/48/P00650866_d2.jpg",
                  name:"MARC JACOBS KIDS",
                  desc:"Leopard-print thong sandals",
                  price:325,
                },
                {image:"https://img.mytheresa.com/1088/1088/66/jpeg/catalog/product/ec/P00650816.jpg",
                  name:"MARC JACOBS KIDS",
                  desc:"Pouch-appliqué chambray dress",
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
    // made by suraj web 19 roll no 1274 
  }
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
   
  //  }
}
  // made by suraj web 19 roll no 1274 
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
      // made by suraj web 19 roll no 1274 
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
function CheckboxFun(arr){
  let newArray=[];
  // made by suraj web 19 roll no 1274 
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
  // made by suraj web 19 roll no 1274 
// shwocheckbox()
// var show = false;
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

disptable(kidsdata)