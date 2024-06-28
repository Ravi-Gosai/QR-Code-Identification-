// let imgBox = document.getElementById("imgBox");
// let qrImg = document.getElementById("qrImg");
// let qrText = document.getElementById("qrText");

// console.log(qrText);

// function generate(){
//     qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
// }



// new model

let imgsrc = document.getElementById("imgsrc1");
let name1 = document.getElementById("name1");
let contact = document.getElementById("contact1");
let emecontact = document.getElementById("emecontact1");
let vehicleno = document.getElementById("vehicleno");
let resetbtn = document.getElementById("rbtn");
let bdg = document.getElementById("exampleFormControlSelect1");
// console.log(name1.length)    








function generate(){
    if(name1.value.length > 0 && emecontact1.value.length > 9 && vehicleno.value.length > 0){
        imgsrc.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Name:-${name1.value}%0AEmail:-${contact.value}%0AEmergency Contact no:-${emecontact.value}%0AVehicle number plate:-${vehicleno.value}%0ABlood Group:- ${bdg.value}`;
        
        imgsrc.style.visibility = "visible";
        downbtn.classList.remove("downbtn1");
        imgsrc.style.border = "thick solid black";
        imgsrc.style.padding ="4px";
        imgsrc.style.width = "150px"

        // let tr = document.createElement('tr');
        // i++
        // tr.innerHTML = `<th scope="col">${i}</th>
        // <th scope="col">${name1.value}</th>
        // <th scope="col">${vehicleno.value}</th>
        // <th scope="col">${emecontact.value}</th>`;
        // thead.appendChild(tr);

        

    }
    else{
        imgsrc.style.visibility = "visible";
        imgsrc.src ="error.png";
        downbtn.classList.add("downbtn1");
        imgsrc.style.width = "180px"
    }


}
let downbtn = document.getElementById("downbtn");

downbtn.addEventListener("click", e =>{
    // console.log(e.preventDefault());
    if(imgsrc.src != "error.png"){
        e.preventDefault();
        fetchFile(imgsrc.src)
    }
   
   
    // console.log(imgsrc.src);
})

function fetchFile(url){
    fetch(url).then((res)=>res.blob().then((file)=>{
        // console.log(file)
        let tempUrl = URL.createObjectURL(file);
        console.log(tempUrl)
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = `${name1.value} QR Code`;
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        
    }))
}

resetbtn.addEventListener("click",()=>{
    
    downbtn.classList.add("downbtn1");
    imgsrc.src ="";
    imgsrc.style.visibility = "hidden";
})




;
// let imgsrc = document.getElementById("imgsrc1");
// let name1 = document.getElementById("name1");
// let contact = document.getElementById("contact1");
// let emecontact = document.getElementById("emecontact1");
// let vehicleno = document.getElementById("vehicleno");
// let resetbtn = document.getElementById("rbtn");
// // console.log(name1.length)    
;
// exports = {name1, contact, vehicleno, ravi};