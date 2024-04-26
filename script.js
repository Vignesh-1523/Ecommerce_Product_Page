console.log('====================================');
console.log("Connected");
console.log('====================================');
//-------------------------------------------------------------

// message object is used to store all the selected product details which will be used in messagee box..
let messageObj = {
    'items' : "",
    'name' : "",
    'color' : "",
    'size' : ""
};
let productName = document.querySelector('h1').innerHTML; // our product name..
console.log(productName);
messageObj.name = productName;

// ----------------------------------------------------------------
// Selecting subImages to see as main image...

let mainImg = document.querySelector('.mainImg img');
let subImg = document.querySelectorAll('.imgBox img');
subImg.forEach((img) => {
    img.addEventListener('click', () => {
        mainImg.src = img.src;
    })
})

// -----------------------------------------------------
// Selecting the size of product...

let radios = document.querySelectorAll('.radio');
let texts = document.querySelectorAll('.sizes label p');
let selectedSize = "";

radios.forEach((radio, index) => {
    radio.addEventListener('click', () => {
        texts[index].style.color = "rgb(35, 59, 163)";
        selectedSize = texts[index].innerHTML;
        if (!radio.checked) {
            radio.checked = true; // Check the radio button if it's not already checked
        } else {
            // Iterate through all radio buttons in the same group and uncheck them
            radios.forEach((otherRadio, index) => {
                if (otherRadio !== radio) {
                    otherRadio.checked = false;
                    texts[index].style.color = "black";
                }
            });
        }
    });
});

// -------------------------------------------------------------
// Selecting no.of products we want....

let incre = document.getElementById('incre');
let decre = document.getElementById('decre');
let value = document.getElementById('value');
let count = 1;
incre.addEventListener('click', () => {
    if(count >= 1){
        count++;
        value.innerHTML = count;
    }
})
decre.addEventListener('click', () => {
    if(count > 1){
        count--;
        value.innerHTML = count;
    }else{
        value.innerHTML = '1';
    }
})

// ---------------------------------------------------------------
// color choosing...
let labels = document.querySelectorAll('.colors label');
let colorBoxes = document.querySelectorAll('.square');
let checks = document.querySelectorAll('#check');
let color = "";

colorBoxes.forEach((colorBox, index) => {
    let getColor = colorBox.getAttribute("data-color");
    colorBox.style.color = getColor;

    labels[index].addEventListener('click', () => {
        labels.forEach((lable, i) => {
            if(index != i){
                lable.style.border = "3px solid transparent";
                checks[i].style.color = "transparent";
            }else{
                lable.style.border = `3px solid ${getColor}`;
                console.log(getColor);
                color = getColor;
                checks[i].style.color = "white";
            }
        })
    })
    
});

// ---------------------------------------------------------------
// add to cart...

let add = document.querySelector('.add');
let messageBox = document.querySelector('.messageBox');
let message = document.querySelector('.message');

function addToCart() {
    
    messageBox.style.display = "block";
    message.innerHTML = `${count} pieces of ${productName} of color ${color} with ${selectedSize} size is successfully added to cart !`;

    radios.forEach(radio => {
        radio.checked = false;  
    });
    texts.forEach(text => {
        text.style.color = "black";
    })
    labels.forEach(label => {
        label.style.border = "3px solid transparent";
    })
    checks.forEach(check => {
        check.style.color = "transparent";
    })
    
    // Make everything to deffault...
    getColor = "";
    selectedSize = "";
    count = 1;
    value.innerHTML = count;
}
add.addEventListener('click', () => {
    if(count >= 1 && selectedSize != "" && color != ""){
        addToCart();
    }else{
        messageBox.style.display = "none";
        alert("Please Select all the details (Size, Color and Number of items) to proceed further !");
    } 
})