function showMessage(){
    alert("Thank you for visiting my portfolio!");
}

function openCertificate(imagePath){

    document.getElementById("popup").style.display = "block";

    document.getElementById("popup-data").innerHTML = `
        <img src="${imagePath}">
    `;
}

function showEducation(){

    document.getElementById("popup").style.display = "block";

    document.getElementById("popup-data").innerHTML = `
        <h2>MCA</h2>

        <p><b>College:</b> XYZ College</p>

        <p><b>Course:</b> MCA - AIML</p>

        <p><b>CGPA:</b> 8.5</p>

        <p><b>Result:</b> First Class</p>
    `;
}

function closePopup(){

    document.getElementById("popup").style.display = "none";
}
function toggleDarkMode(){

    document.body.classList.toggle("dark");
}