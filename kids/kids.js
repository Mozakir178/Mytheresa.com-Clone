let arrData=[
     {image_url:"https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_gucci_2x_20220501225102.jpg" ,
       name: "GUCHHI KIDS" },
       {image_url:"https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_burberry-kids_2x_20220501225104.jpg" ,
       name: "BURRBARY KIDS" },

       {image_url:"https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_golden-goose_2x_20220501225101.jpg" ,
       name: " GOOLDEN GOOSE KIDS " },
       {image_url:"https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_moncler-enfant_2x_20220501225104.jpg" ,
       name: "MONCLEAR ENFONT" },
       {image_url:"https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_loro-piana_2x_20220501225103.jpg" ,
       name: "LORO PINNIA" },
       {image_url:"https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_camilla_2x_20220501225103.jpg" ,
       name: "CAMILA KIDS" },
       {image_url:"https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_vacation-shop_2x_20220501225104.jpg" ,
       name: "HUMZA DI KIDS" },
       {image_url:"https://img.mytheresa.com/media/static/raw/cms/l/SM_Monetate_Images/08_Carousel/Kids_SE_Carousel_SS22/May/Crosslink-Carousel_Vilebrequin_2x_20220501225104.jpg" ,
       name: "VILLABRANA KIDS" },
       
    ];
    let num=5;
    let i=0;
    let button2=document.querySelector("#button2") 
    button2.addEventListener("click",myfuction)
     function myfuction(){
      i=i+4;
      num=num+4
      console.log("right")
      for(i;i<num;i++){
        let di1=document.createElement("div")
           let im=document.createElement("img")
           im.setAttribute("src",arrData[i].image_url)
          let p=document.createElement("p")
           p.innerText=arrData[i].name
        di1.append(im,p)
        document.querySelector("#send").append(di1)
        }
     }
    let button1=document.querySelector("#button1").addEventListener("click",buttonfuction)
   function  buttonfuction(){
      i=i-4;
      num=num-4
      console.log(i)
      console.log("left")
      for(i;i<num;i++){
          let di1=document.createElement("div")
             let im=document.createElement("img")
             im.setAttribute("src",arrData[i].image_url)
            let p=document.createElement("p")
             p.innerText=arrData[i].name
          di1.append(im,p)
          document.querySelector("#send").append(di1)
          }
    }


    for(i;i<num;i++){
      let di1=document.createElement("div")
         let im=document.createElement("img")
         im.setAttribute("src",arrData[i].image_url)
        let p=document.createElement("p")
         p.innerText=arrData[i].name
      di1.append(im,p)
      document.querySelector("#send").append(di1)
      }
    
      