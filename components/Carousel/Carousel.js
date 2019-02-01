class Carousel {
    // create carousel object.
    constructor(element){
        //set element, left and right buttons
        this.element = element;
        this.leftButton = this.element.firstElementChild;
        this.rightButton = this.element.lastElementChild;
        
        //create array for images.
        this.images = [];
        // fet images from elements child nodes>
        this.element.childNodes.forEach((child) => {
            // check if the node is actually a img tag
            if(child.nodeName === "IMG"){
                //add image to the the array. Place class of notActive on all images
                child.classList.add("notActive");
                this.images.push(child);
            }
        });
        //set index and prev index start points.
        this.index = 0;
        this.prevIndex = -1;
        
        // set the first image as active
        this.images[this.index].classList.remove('notActive');
        this.images[this.index].classList.add("active");
        
        // add event handlers for left and right button clicks.
        // pass into the function if the button click was left or right.
        this.leftButton.addEventListener("click", () => this.buttonClick("left"));
        this.rightButton.addEventListener("click", () => this.buttonClick("right"));
    }
    
    // handle button click.
    buttonClick(button){
        // set prev index = to this index
        this.prevIndex = this.index;
        // remove class of active from active image.
        this.images[this.index].classList.remove('active');
        
        // check if button click was left or right.
        if (button === "left"){
            //-1 from index and then check if index is less than 0
            this.index -= 1;
            if (this.index < 0){
                // if less than 0 then set it equal to the last image in the array
                this.index = this.images.length -1;
            }
        }else {
            // add one to the index
            this.index += 1;
            //check if the index is past the last image in the array.
            if (this.index > this.images.length -1){
                // if bigger than last image index change index to 0
                this.index = 0;
            }
        }
        // set a timeout for 1s to allow for the img transition to happen.
        window.setTimeout(() => {
            // after one second call apply inactive
            this.applyInactive();
        }, 1000);
        
    }
    
    applyInactive(){
        
        // remove notActive from new image to set display to block and set opacity to 0
        this.images[this.index].classList.remove('notActive');
        
        // set last active image to not active to set display to none
        this.images[this.prevIndex].classList.add("notActive");
        //wait 1/100 of a second for the switch to happen between the images.
        window.setTimeout(() => {
            // then call apply active
            this.applyActive();
        }, 100)
    }
    
    applyActive() {
        // set the active class to the new selected image. new image transition will now begin.
        this.images[this.index].classList.add("active");
    }
}

// get the carousel item from the DOM.
let carousel = document.querySelector(".carousel");
// create new carousel
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/