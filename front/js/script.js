
          const addArticle = document.querySelector(`#items`);
            
      
                fetch("http://localhost:3000/api/products")
                .then(data => data.json())
                .then(products =>{



        
            for(let product of products){
            console.log(product.name);
        //insertion des produits-page d'acceuil
        const newProduct = document.createElement("a");
        newProduct.setAttribute("href", `product.html?id=${product._id}`);
        newProduct.innerHTML =`
        <article>
              <img src="${product.imageURL}" alt="${product.altTxt}">
              <h3 class"productName">${product.name}</h3>
              <p class"productDesciption">${product.description}</p> 
        </article>`;
        addArticle.appendChild


        }

        

        })

         
          .catch(erreur =>  console.log(erreur));

