function LoadCategories(){

    fetch(`https://fakestoreapi.com/products/categories`)

    .then(function(response){

        return response.json();

    })

    .then(function(categories){

        categories.unshift('all');

        categories.map(function(category){

            var option = document.createElement("option");

            option.text = category.toUpperCase();

            option.value = category;

            document.getElementById("lstCategories").appendChild(option);

        })

    })

}



function LoadProducts(url){

    document.querySelector("main").innerHTML = "";

    fetch(url)

    .then(function(response){

        return response.json();

    })

    .then(function(products){

        products.map(function(product){



            var div = document.createElement("div");

            div.className = "card m-2 p-2";

            div.style.width = "200px";

            div.innerHTML = `

                <img class="card-img-top" height="120" src=${product.image}>

                <div class="card-header overflow-auto" style="height:100px">

                ${product.title}

                </div>

                <div class="card-body">

                <dl>

                    <dt>Price</dt>

                    <dd>${product.price}</dd>

                    <dt>Rating</dt>

                    <dd>${product.rating.rate} <span class="bi bi-star-fill text-success"></span> </dd>

                </dl>

                </div>

                <div class="card-footer">

                    <button onclick="AddClick(${product.id})" class="btn btn-warning w-100 bi bi-cart4"> Add to Cart </button>

                </div>

            `;



            document.querySelector("main").appendChild(div);



        })

    })

}



function bodyload(){

    LoadCategories();

    LoadProducts('https://fakestoreapi.com/products&#39');

    GetCartCount();

}



function handleCategoryChange(){

    var categoryName = document.getElementById("lstCategories").value;

    if(categoryName==='all'){

        LoadProducts('https://fakestoreapi.com/products');

    } else {

        LoadProducts(`https://fakestoreapi.com/products/category/${categoryName}`);

    }

}



function SearchClick(){

    var categoryname = document.getElementById("txtSearch").value;

    if(categoryname===""){

        LoadProducts('https://fakestoreapi.com/products&#39');

    } else {

        LoadProducts(`https://fakestoreapi.com/products/category/${categoryname}`);

    }

}



var cartItems = [];



function GetCartCount(){

    document.getElementById("lblCount").innerHTML = cartItems.length;

}



function AddClick(id){

    fetch(`https://fakestoreapi.com/products/${id}`)

    .then(function(response){

        return response.json();

    })

    .then(function(product){

        cartItems.push(product);

        alert(`${product.title}\nAdded to Cart`);

        GetCartCount();

    })

}



function ShowCartItems(){

    document.querySelector("tbody").innerHTML = "";

    cartItems.map(function(item){

        var tr = document.createElement("tr");

        var tdTitle = document.createElement("td");

        var tdImage = document.createElement("td");

        tdTitle.innerHTML = item.title;

        tdImage.innerHTML = `<img width="50" height="50" src=${item.image}>`;

        tr.appendChild(tdTitle);

        tr.appendChild(tdImage);

        document.querySelector("tbody").appendChild(tr);

    })

}