class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = this.element.firstElementChild;
        this.rightButton = this.element.lastElementChild;
        this.images = [];
        this.element.childNodes.forEach((child) => {
            debugger;
            if(child.nodeName === "IMG"){
                this.images.push(child);
            }
        });
        this.index = 0;
        this.images[this.index].style.display = "block";
        
        this.leftButton.addEventListener("click", () => this.buttonClick("left"));
        this.rightButton.addEventListener("click", () => this.buttonClick("right"));
    }
    
    buttonClick(button){
        
        this.images[this.index].style.display = "none";
        
        if (button === "left"){
            this.index -= 1;
            if (this.index < 0){
                this.index = this.images.length -1;
            }
        }else {
            this.index += 1;
            if (this.index > this.images.length -1){
                this.index = 0;
            }
        }
        
        this.images[this.index].style.display = "block";
        
    }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/