document.addEventListener('DOMContentLoaded', function () {    
    let hamburger = document.getElementById('hamburger');
    let profileHam = document.getElementById('ham');
    let profile = document.querySelector('.profile');
    let hamburgerDetails = document.querySelector('.links');
    
    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle("change");
        if (hamburgerDetails.style.display === "block") {
            hamburgerDetails.style.display = "none";
          } else {
            hamburgerDetails.style.display = "block";
            hamburgerDetails.style.zIndex = 1;
          }
    
    })
    
    profileHam.addEventListener('click', function(){
        profile.classList.toggle("show")

    })

})
