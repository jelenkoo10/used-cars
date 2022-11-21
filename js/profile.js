const profileAds = document.querySelector(".car-ads")
const savedSearches = document.querySelector(".saved-searches")
const profileData = document.querySelector(".profile-data")

if (window.innerWidth > 1000) {
    document.querySelector(".new-ad").classList.add("profile-btn")
}

function showAds() {
    if (profileAds.style.display == "none") {
        profileAds.style.display = "block"
    } else if (profileAds.style.display = "block") {
        profileAds.style.display = "none"
    } else {

    }
}

function showSearches() {
    if (savedSearches.style.display == "none") {
        savedSearches.style.display = "block"
    } else if (savedSearches.style.display = "block") {
        savedSearches.style.display = "none"
    } else {
        
    }
}

function showProfileData() {
    if (profileData.style.display == "none") {
        profileData.style.display = "block"
    } else if (profileData.style.display = "block") {
        profileData.style.display = "none"
    } else {
        
    }
}