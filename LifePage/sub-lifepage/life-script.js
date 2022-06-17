var showdesigner = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!showdesigner) {
        checkboxes.style.display = "block";
        showdesigner = true;
    } else {
        checkboxes.style.display = "none";
        showdesigner = false;
    }
}

var showcolor = false;

function showColors() {
    var color = document.getElementById("color");
    if (!showcolor) {
        color.style.display = "block";
        showcolor = true;
    } else {
        color.style.display = "none";
        showcolor = false;

    }

}
let lifeData = [{
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d0/P00679222_d2.jpg",
        name: "Abd El Kader Classic candle",
        price: "€ 85",
        strikedoffprice: "€ 100",
        designer: "CIRE TRUDON"
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d0/P00679343_d2.jpg",
        name: "Cire Classic candle",
        price: "€ 90",
        strikedoffprice: "€ 119",
        designer: "CIRE TRUDON",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/44/P00678396_d2.jpg",
        name: "x Versace Alphabet set of 7",
        price: "€ 270",
        strikedoffprice: "€ 554",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/86/P00678090_d2.jpg",
        name: "Nera Small bowl",
        price: "€ 110",
        strikedoffprice: "€ 212",
        designer: "ZANAT",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/26/P00679376_d2.jpg",
        name: "Abd El Kader alabaster candle",
        price: "€ 160",
        strikedoffprice: "€ 242",
        designer: "CIRE TRUDON",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/af/P00679280_d2.jpg",
        name: "St. Tropez Soleil book",
        price: "€ 95",
        strikedoffprice: "€ 150",
        designer: "ASSOULINE",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e7/P00679311_d2.jpg",
        name: "x Comme des candle",
        price: "€ 290",
        strikedoffprice: "€ 444",
        designer: "FORNASETTI PROFUMI",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/6f/P00679217_d2.jpg",
        name: "Bo Maki Small vase",
        price: "€ 265",
        strikedoffprice: "€ 555",
        designer: "CASSINA",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/cc/P00678143_d2.jpg",
        name: "Lampe De Bureau table lamp",
        price: "€ 265",
        strikedoffprice: "€ 444",
        designer: "VITRA",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2b/P00678300_d2.jpg",
        name: "Jean-Michel Basquiat book",
        price: "€ 150",
        strikedoffprice: "€ 322",
        designer: "TASCHEN",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/5c/P00678133_d2.jpg",
        name: "Chronopak desk clock",
        price: "€ 490",
        strikedoffprice: "€ 987",
        designer: "CIRE TRUDON"
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/95/P00678272_d2.jpg",
        name: "Swirl Medium vase",
        price: "€ 565",
        strikedoffprice: "€ 876",
        designer: "CIRE TRUDON"
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1b/P00678842_d2.jpg",
        name: "Botanical Large tablecloth",
        price: "€ 315",
        strikedoffprice: "€ 666",
        designer: "CIRE TRUDON"
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9c/P00678563_d2.jpg",
        name: "Idra set of 6 water glasses",
        price: "€ 240",
        strikedoffprice: "€ 444",
        designer: "CIRE TRUDON"
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1a/P00678093_d2.jpg",
        name: "Nera Large bowl",
        price: "€ 175",
        strikedoffprice: "€ 300",
        designer: "CIRE TRUDON"
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/51/P00678392_d2.jpg",
        name: "x Versace Baroque Bianco",
        price: "€ 70",
        strikedoffprice: "€ 100",
        designer: "CIRE TRUDON"
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/2e/P00679310_d2.jpg",
        name: "Capri Dolce Vita book",
        price: "€ 95",
        strikedoffprice: "€ 231",
        designer: "CIRE TRUDON"
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/51/P00678791_d2.jpg",
        name: "Iron tray",
        price: "€ 115",
        strikedoffprice: "€ 170",
        designer: "CIRE TRUDON"
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/cc/P00679374_d2.jpg",
        name: "Ernesto alabaster candle",
        price: "€ 160",
        strikedoffprice: "€ 240",
        designer: "CIRE TRUDON"
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/d6/P00678858_d2.jpg",
        name: "Libellula set plates",
        price: "€ 110",
        strikedoffprice: "€ 180",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/83/P00679349_d2.jpg",
        name: "Margot set of 2 red wine",
        price: "€ 220",
        strikedoffprice: "€ 340",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/28/P00678179_d2.jpg",
        name: "Panton Junior chair",
        price: "€ 200",
        strikedoffprice: "€ 300",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/dc/P00678063_d2.jpg",
        name: "Unity stool",
        price: "€ 1.335",
        strikedoffprice: "€ 3",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/1c/P00678714_d2.jpg",
        name: "Lazy Susan tray",
        price: "€ 600",
        strikedoffprice: "€ 900",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/7c/P00703800_d2.jpg",
        name: "Small printed silk twill cushio",
        price: "€ 395",
        strikedoffprice: "€ 456",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/4b/P00703770_d2.jpg",
        name: "Porcelain charger plate",
        price: "€ 225",
        strikedoffprice: "€ 300",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9f/P00678599_d2.jpg",
        name: "Humbert wool-blend cushio",
        price: "€ 135",
        strikedoffprice: "€ 200",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/14/P00678075_d2.jpg",
        name: "Nera stool",
        price: "€ 670",
        strikedoffprice: "€ 890",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/21/P00703798_d2.jpg",
        name: "Medium printed cushion",
        price: "€ 395",
        strikedoffprice: "€ 549",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/13/P00703752_d2.jpg",
        name: "dolce red wine-glass",
        price: "€ 350",
        strikedoffprice: "€ 600",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/48/P00703766_d2.jpg",
        name: "Set of 2 porcel plates",
        price: "€ 265",
        strikedoffprice: "€ 500",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/12/P00678168_d2.jpg",
        name: "Chaise Tout Bois chair",
        price: "€ 770",
        strikedoffprice: "€ 1111",
        designer: "ROSENTHAL",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/04/P00678885_d2.jpg",
        name: "Aphrodite cushion",
        price: "€ 350",
        strikedoffprice: "€ 543",
        designer: "ZANAT",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/48/P00678609_d2.jpg",
        name: "Totem High candle",
        price: "€ 370",
        strikedoffprice: "€ 555",
        designer: "ZANAT",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/ee/P00679226_d2.jpg",
        name: "Il Viaggio set of 4 bread plates",
        price: "€ 185",
        strikedoffprice: "€ 222",
        designer: "ZANAT",
    }, {
        image_url: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c3/P00678447_d2.jpg",
        name: "Ascot set of 2 crystal glasses",
        price: "€ 585",
        strikedoffprice: "€ 700",
        designer: "ZANAT",
    },

];


let show = lifeData;

function pricesort(lifeArray) {
    let selected = document.getElementById('pricesort').value;

    sorted = lifeData.sort(function(a, b) {
        first = "";
        second = "";

        for (let i = 2; i < a.price.length; i++) {
            first += a.price[i];
        }
        for (let i = 2; i < b.price.length; i++) {
            second += b.price[i];
        }
        first = Number(first);
        second = Number(second);
        if (selected == "lth") {
            return first - second
        } else if (selected == "htl") {
            return second - first;
        } else
        if (selected == "new") {
            if (a.name > b.name)
                return 1;
            else if (a.name < b.name)
                return -1;
            else
                return 0;
        }
    });
    console.log(sorted);
    console.log(selected);

    document.getElementById('content').innerHTML = "";

    sorted.map(mapping);


}





// var lifeArray = JSON.parse(localStorage.getItem("cartdetail")) || [];
lifeData.map(mapping);


function mapping(data) {

    var div = document.createElement("div");
    div.setAttribute("class", "content-div")
    var img = document.createElement("img");
    img.setAttribute("src", data.image_url);
    var name = document.createElement("p");
    name.textContent = data.name;
    var category = document.createElement("p");
    category.textContent = data.designer;
    var price = document.createElement("p");
    price.textContent = `${data.price}`;
    var btn = document.createElement("button");
    btn.textContent = "Add to Cart";
    btn.addEventListener("click", function() {
        addToCart(data);
    });

    div.append(img, category, name, price, btn);
    document.querySelector("#content").append(div);
};

function addToCart(data) {
    console.log(data);
    lifeArray.push(data);
    // localStorage.setItem("cartdetail", JSON.stringify(lifeArray));
}


function showall() {
    console.log(show);
    document.getElementById('content').innerHTML = "";
    show.forEach(mapping);

}

function filtering(lifeData) {
    let value = document.getElementById('cire').value;

    let count = 0;

    let filtered = lifeData.filter(function() {
        filterdata(el)
    });

    console.llog(filtered);

}

function filterdata(el) {
    return el.designer === value;
}