window.addEventListener('load', () =>{
    // Get all images with data-src attribute
    const imagesToLoad = document.querySelectorAll('img[data-src]');
    
    // Optional parameters for the IntersectionalObject
    const imgOptions = {
        threshold: 0,
        rootMargin: "0px 0px 50px 0px"
    };
    
    const loadImages = (image) => {
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = () => {
            image.removeAttribute('data-src');
        };
    };
    
    // Check if the IntersactionObserver is supported
    if('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((items, observer) => {
            items.forEach((item) => {
                if(item.isIntersecting) {
                    loadImages(item.target);
                    observer.unobserve(item.target);
                }
            });
        }, imgOptions);
        imagesToLoad.forEach((img) => {
            imgObserver.observe(img);
        });
    } else { // just load all images if not supported
        imagesToLoad.forEach((img) => {
            loadImages(img);
        });
    };

})