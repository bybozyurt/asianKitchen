const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
    {
      id: 10,
      title: "Künefe",
      category: "Turkey",
      price: 14.99,
      img:
        "https://cdn.yemek.com/mncrop/940/625/uploads/2015/05/kunefe-tarifi.jpg",
      desc: `A traditional Middle Eastern dessert.`,
    },
    
    {
      id: 11,
      title: "Lahmacun",
      category: "Turkey",
      price: 8.99,
      img:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
      desc: `It is a kind of Middle Eastern style pide.`,
    },  

];


var divim = document.getElementById("menum");
function item() {
    divim.innerHTML="";

    
    for (var i = 0; i < menu.length; i++) {
        var resim = document.createElement("img");
        resim.src = menu[i].img;
        resim.className = "photo";
        resim.alt = menu[i].title;
        var div = document.createElement("div");
        div.className = "menu-items col-lg-6 col-sm-12";
        var div2 = document.createElement("div");
        div2.className = "menu-info";
        var div3 = document.createElement("div");
        div3.className = "menu-title";
        var baslik = document.createElement("h4");
        baslik.textContent = menu[i].title;
        var fiyat = document.createElement("h4");
        fiyat.textContent = menu[i].price;
        var div4 = document.createElement("div");
        div4.className = "menu-text";
        div4.textContent = menu[i].desc;

        div3.appendChild(baslik);
        div3.appendChild(fiyat);
        div2.appendChild(div3);
        div2.appendChild(div4);
        div.appendChild(resim);
        div.appendChild(div2);
        divim.appendChild(div);
    }
    
}

item();

var Korea = [];
var China = [];
var Japan = [];
var Turkey = [];

menu.map(function(value, index){
  if(menu[index].category == "Korea"){
    Korea[index] = value;
  }
});

menu.map(function(value, index){
  if(menu[index].category == "China"){
    China[index] = value;
  }
});

menu.map(function(value, index){
  if(menu[index].category == "Japan"){
    Japan[index] = value;
  }
})

menu.map(function(value, index){
  if(menu[index].category == "Turkey"){
    Turkey[index] = value;
  }
})




var btn_div = document.getElementById("btn_menu");

var btn_all = document.createElement("button");
btn_all.className ="btn btn-outline-dark btn-item";
btn_all.textContent = "All";
var btn_kore = document.createElement("button");
btn_kore.className ="btn btn-outline-dark btn-item";
btn_kore.textContent = "Korea";
var btn_japan = document.createElement("button");
btn_japan.className ="btn btn-outline-dark btn-item";
btn_japan.textContent = "Japan";
var btn_china = document.createElement("button");
btn_china.className ="btn btn-outline-dark btn-item";
btn_china.textContent = "China";
var btn_turkey = document.createElement("button");
btn_turkey.className ="btn btn-outline-dark btn-item";
btn_turkey.textContent = "Turkey";




btn_div.appendChild(btn_all);
btn_div.appendChild(btn_kore);
btn_div.appendChild(btn_japan);
btn_div.appendChild(btn_china);
btn_div.appendChild(btn_turkey);

btn_all.addEventListener("click",item);
btn_kore.addEventListener("click",Kore);
btn_china.addEventListener("click",Chi);
btn_japan.addEventListener("click",Jap);
btn_turkey.addEventListener("click",Turkish)



function red(){
  return null;
}

function Jap(){
  divim.innerHTML="";

  for (var i = 0; i < Japan.length; i++) {

    if (Japan[i] == null) {
      Japan.reduce(red,0);
  }
  else{
    var resim = document.createElement("img");
    resim.src = Japan[i].img;
    resim.className = "photo";
    resim.alt = Japan[i].title;
    var div = document.createElement("div");
    div.className = "menu-items col-lg-6 col-sm-12";
    var div2 = document.createElement("div");
    div2.className = "menu-info";
    var div3 = document.createElement("div");
    div3.className = "menu-title";
    var baslik = document.createElement("h4");
    baslik.textContent = Japan[i].title;
    var fiyat = document.createElement("h4");
    fiyat.textContent = Japan[i].price;
    var div4 = document.createElement("div");
    div4.className = "menu-text";
    div4.textContent = Japan[i].desc;

    div3.appendChild(baslik);
    div3.appendChild(fiyat);
    div2.appendChild(div3);
    div2.appendChild(div4);
    div.appendChild(resim);
    div.appendChild(div2);
    divim.appendChild(div);

  }
    
}


}


function Chi(){
  divim.innerHTML="";

  for (var i = 0; i < China.length; i++) {

    if (China[i] == null) {
      China.reduce(red,0);
    }
  else{
    var resim = document.createElement("img");
    resim.src = China[i].img;
    resim.className = "photo";
    resim.alt = China[i].title;
    var div = document.createElement("div");
    div.className = "menu-items col-lg-6 col-sm-12";
    var div2 = document.createElement("div");
    div2.className = "menu-info";
    var div3 = document.createElement("div");
    div3.className = "menu-title";
    var baslik = document.createElement("h4");
    baslik.textContent = China[i].title;
    var fiyat = document.createElement("h4");
    fiyat.textContent = China[i].price;
    var div4 = document.createElement("div");
    div4.className = "menu-text";
    div4.textContent = China[i].desc;

    div3.appendChild(baslik);
    div3.appendChild(fiyat);
    div2.appendChild(div3);
    div2.appendChild(div4);
    div.appendChild(resim);
    div.appendChild(div2);
    divim.appendChild(div);

    }
  }

}

function Kore(){

  divim.innerHTML="";

  for (var i = 0; i < Korea.length; i++) {

    if (Korea[i] == null) {
      Korea.reduce(red,0);
    }
  else{
    var resim = document.createElement("img");
    resim.src = Korea[i].img;
    resim.className = "photo";
    resim.alt = Korea[i].title;
    var div = document.createElement("div");
    div.className = "menu-items col-lg-6 col-sm-12";
    var div2 = document.createElement("div");
    div2.className = "menu-info";
    var div3 = document.createElement("div");
    div3.className = "menu-title";
    var baslik = document.createElement("h4");
    baslik.textContent = Korea[i].title;
    var fiyat = document.createElement("h4");
    fiyat.textContent = Korea[i].price;
    var div4 = document.createElement("div");
    div4.className = "menu-text";
    div4.textContent = Korea[i].desc;

    div3.appendChild(baslik);
    div3.appendChild(fiyat);
    div2.appendChild(div3);
    div2.appendChild(div4);
    div.appendChild(resim);
    div.appendChild(div2);
    divim.appendChild(div);

    }
  }

}

function Turkish(){
  divim.innerHTML="";

  for (var i = 0; i < Turkey.length; i++) {

    if (Turkey[i] == null) {
      Turkey.reduce(red,0);
  }
  else{
    var resim = document.createElement("img");
    resim.src = Turkey[i].img;
    resim.className = "photo";
    resim.alt = Turkey[i].title;
    var div = document.createElement("div");
    div.className = "menu-items col-lg-6 col-sm-12";
    var div2 = document.createElement("div");
    div2.className = "menu-info";
    var div3 = document.createElement("div");
    div3.className = "menu-title";
    var baslik = document.createElement("h4");
    baslik.textContent = Turkey[i].title;
    var fiyat = document.createElement("h4");
    fiyat.textContent = Turkey[i].price;
    var div4 = document.createElement("div");
    div4.className = "menu-text";
    div4.textContent = Turkey[i].desc;

    div3.appendChild(baslik);
    div3.appendChild(fiyat);
    div2.appendChild(div3);
    div2.appendChild(div4);
    div.appendChild(resim);
    div.appendChild(div2);
    divim.appendChild(div);

  }
    
}


}




