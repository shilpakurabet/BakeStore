const btns = document.querySelectorAll(".button");
const storeProducts = document.querySelectorAll(".item");

for(i=0;i<btns.length;i++){

    btns[i].addEventListener("click",(e)=>{
        e.preventDefault();

        const filter = e.target.dataset.filter;
        storeProducts.forEach((product)=>{
            if(filter == "all"){
                product.style.display = "block";
            }else{
                if(product.classList.contains(filter)){
                    product.style.display = "block";
                }else{
                    product.style.display = "none";
                }
            }
        })
    })
}

// search filter
    const searchProduct = () =>{
      const input = document.getElementById("search").value.toUpperCase();
      const proContainer = document.getElementById("product-list");
      const product = proContainer.getElementsByClassName("item");
        // console.log(product)

        for(let i=0;i<product.length;i++){
            let title = product[i].querySelector("h4");
            // console.log(title)

            if(title.innerText.toUpperCase().indexOf(input) > -1){  
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";
            }
        }

    }

