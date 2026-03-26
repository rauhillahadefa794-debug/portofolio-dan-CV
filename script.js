
console.log("JS jalan");
// ANIMASI SCROLL (fade up)
const items = document.querySelectorAll('.item');

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < triggerBottom){
            item.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();


// NAVBAR SHADOW SAAT SCROLL
const navbar = document.querySelector('.atas');

window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "none";
    }
});

document.querySelectorAll('.card').forEach((card, index) => {
    card.addEventListener('contextmenu', function(e) {
        e.preventDefault();

        let url = "";

        if(index === 0){
            url = "https://www.instagram.com/adrazr_/";
        } else if(index === 1){
            url = "https://www.youtube.com/@adefarazka1221";
        } else if(index === 2){
            url = "https://www.tiktok.com/@bptslmn?_r=1&_t=ZS-950C0Gmnsyl";
        }

        if(confirm("Mau buka link sosial media?")){
            window.open(url, "_blank");
        }
    });
});
