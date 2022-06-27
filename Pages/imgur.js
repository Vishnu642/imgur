
    let display_div = document.getElementById("displayImg")
     
    async function imgurImage(){
        try{
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        let photos = data;
        displayImage(photos)
        console.log("data:",data);
        }
        catch(err){
            console.log("error:",err);
        }
    
    }
    imgurImage()
    
    function displayImage(array){
        array.forEach(function(photos){
            var div = document.createElement("div")
            div.setAttribute("class","flex-div")
            var img = document.createElement("img")
            img.setAttribute("class","image")
            img.src = photos.image;
    
            div.append(img)
    
            display_div.append(div)
    
        });
    }