class Slider {
  constructor(sliderElem) {
    this.slider = sliderElem;
    this.sliderItems = sliderElem.getElementsByClassName("slider-item");
    this.nextBtn = sliderElem.querySelector(".slider-control-next");
    this.prevBtn = sliderElem.querySelector(".slider-control-prev");
    this.indicators = sliderElem.getElementsByClassName("slide-indicator");
    this.currentIndex = 0;
    this.prevItemIndex = this.sliderItems.length - 1;
    this.nextItemIndex = 1;
    this.isSliding = false;
    this.autoStart();
    this.setEventListeners();
    this.indicators[this.currentIndex].classList.add("active");

    

    
  }

  autoStart() {
    this.autoStartInterval = setInterval(() => {
      this.next();
    }, 5000);
  }

  setEventListeners() {
    this.prevBtn.addEventListener("click", () => {
      this.prev();
    });
    this.nextBtn.addEventListener("click", () => {
      this.next();
    });
    this.slider.addEventListener('mouseenter', () => {
      clearInterval(this.autoStartInterval);
    });
    this.slider.addEventListener('mouseleave', () => {
      this.autoStart();
    });
  }

  next() {
    if (this.isSliding) return;
    this.isSliding = true;
    this.sliderItems[this.nextItemIndex].classList.add("next-item");
    setTimeout(() => {
      this.sliderItems[this.currentIndex].classList.add("slide-next");
      this.sliderItems[this.nextItemIndex].classList.add("slide-end");
      this.sliderItems[this.nextItemIndex].classList.add("active");
    }, 20);
    setTimeout(() => {
      this.sliderItems[this.nextItemIndex].classList.remove(
        "next-item",
        "slide-end"
      );
      this.sliderItems[this.currentIndex].classList.remove(
        "slide-next",
        "active"
      );
      this.isSliding = false;
      this.indicators[this.currentIndex].classList.remove("active");
      this.indicators[this.nextItemIndex].classList.add("active");
      this.setIndices("NEXT");
    }, 400);
  }

  prev() {
    console.log("prev");
    if (this.isSliding) return;
    this.isSliding = true;
    this.sliderItems[this.prevItemIndex].classList.add("prev-item");
    setTimeout(() => {
      this.sliderItems[this.currentIndex].classList.add("slide-prev");
      this.sliderItems[this.prevItemIndex].classList.add("slide-end");
      this.sliderItems[this.prevItemIndex].classList.add("active");
    }, 20);
    setTimeout(() => {
      this.sliderItems[this.prevItemIndex].classList.remove(
        "prev-item",
        "slide-end"
      );
      this.sliderItems[this.currentIndex].classList.remove(
        "slide-prev",
        "active"
      );
      this.isSliding = false;
      this.indicators[this.currentIndex].classList.remove("active");
      this.indicators[this.prevItemIndex].classList.add("active");
      this.setIndices("PREV");
    }, 400);
  }

  setIndices(direction) {
    let index;
    if (direction === "NEXT") {
      index =
        this.currentIndex === this.sliderItems.length - 1
          ? 0
          : this.currentIndex + 1;
    }
    if (direction === "PREV") {
      index =
        this.currentIndex === 0
          ? this.sliderItems.length - 1
          : this.currentIndex - 1;
    }
    if (index === 0) {
      this.currentIndex = index;
      this.nextItemIndex = index + 1;
      this.prevItemIndex = this.sliderItems.length - 1;
    } else if (index === this.sliderItems.length - 1) {
      this.currentIndex = this.sliderItems.length - 1;
      this.nextItemIndex = 0;
      this.prevItemIndex = this.currentIndex - 1;
    } else {
      this.currentIndex = index;
      this.nextItemIndex = index + 1;
      this.prevItemIndex = index - 1;
    }
  }
}
/*const slider1 = new Slider(document.querySelector("#slider-1"));
const slider2 = new Slider(document.querySelector("#slider-2"));*/
