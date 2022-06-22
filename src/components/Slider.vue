<template>
  <div class="h-fit">
    <!-- <div class="carousel-holder">
      <div class="carousel-container">
        <div class="carousel relative border-2 border-blue-500">
          <div
            class="flex border-2 border-red-500"
            v-for="(slide, idx) in slideArray"
            :key="slide.id"
          >
            <div
              v-show="slide.id === activeSlideId"
              class="slide w-full h-full grid md:grid-cols-2 md:gap-5 md:px-5 md:items-center border-2 border-green-500"
            >
              <div class="slide-image flex justify-center">
                <img
                  v-if="slide.id === activeSlideId"
                  src="../assets/logo.png"
                  alt=""
                />
              </div>

              <div class="slide-content">
                <p
                  v-if="slide.id === activeSlideId"
                  class="text-2xl font-semibold text-center md:text-left"
                >
                  {{ slide.title }}
                </p>

                <p
                  v-if="slide.id === activeSlideId"
                  class="mt-8 uppercase text-center md:text-left"
                >
                  {{ slide.desc }}
                </p>

                <div class="link mt-5 flex justify-center md:justify-start">
                  <a
                    v-if="slide.id === activeSlideId"
                    :href="slide.link"
                    class="capitalize py-2 px-3 border border-black"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            v-for="(slide, idx) in slideArray"
            :key="idx"
            class="carousel-controls w-full absolute top-1/3 flex justify-between items-center"
          >
            <button
              class="carousel-controls__button-left bg-slate-300 w-11 h-11 p-3 rounded-full cursor-pointer md:ml-3"
              @click="move(-1)"
            >
              <i class="fa fa-chevron-left"></i>
            </button>
            <button
              class="carousel-controls__button-right bg-slate-300 w-11 h-11 p-3 rounded-full cursor-pointer md:mr-3"
              @click="move(1)"
            >
              <i class="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div> -->

    <div class="slideshow-container w-full">
      <!-- Full-width images with number and caption text -->
      <div class="mySlides fade relative">
        <div class="numbertext">1 / 4</div>
        <img
          src="https://media.istockphoto.com/photos/beauty-young-girl-outdoors-enjoying-nature-picture-id618553342?b=1&k=20&m=618553342&s=170667a&w=0&h=5xwOPsHhP3s8CdiG69_iuymGF8mTKTQ0G1cLvMsQNww="
          class="w-full h-80 md:h-96 lg:h-[500px] object-cover"
        />
        <div class="caption grid gap-5">
          <p class="text-2xl md:text-3xl lg:text-4xl uppercase font-bold">
            Summer sale
          </p>
          <p class="uppercase font-medium">
            don't compromise on style. get flat 30% off for new arrivals
          </p>
        </div>
      </div>

      <div class="mySlides fade relative">
        <div class="numbertext">2 / 4</div>
        <img
          src="https://media.istockphoto.com/photos/concept-of-mothers-day-holiday-greeting-with-yellow-tulip-bouquet-on-picture-id1310430272?b=1&k=20&m=1310430272&s=170667a&w=0&h=lUz8ysRMR7Jny4dQGhixwEzQJi37tu8cR6AQ55zLmTc="
          class="w-full h-80 md:h-96 lg:h-[500px] object-cover"
        />
        <div class="caption grid gap-5">
          <p class="text-2xl md:text-3xl lg:text-4xl uppercase font-bold">
            Beautiful items
          </p>
          <p class="uppercase font-medium">
            Put a smile on your loved one's face with beautiful products
          </p>
        </div>
      </div>

      <div class="mySlides fade relative">
        <div class="numbertext">3 / 4</div>
        <img
          src="https://media.istockphoto.com/photos/golden-yellow-orange-red-maple-leaves-closeup-shabby-wooden-bright-picture-id1271533438?b=1&k=20&m=1271533438&s=170667a&w=0&h=d1q1k4Hr-9NoiBQo0Y7wI1zUvLnayYjNW0G1UPBmdNA="
          class="w-full h-80 md:h-96 lg:h-[500px] object-cover"
        />
        <div class="caption grid gap-5">
          <p class="text-2xl md:text-3xl lg:text-4xl uppercase font-bold">
            Autumn sale
          </p>
          <p class="uppercase font-medium">
            looking for the perfect gift? Look no further
          </p>
        </div>
      </div>

      <div class="mySlides fade relative">
        <div class="numbertext">4 / 4</div>
        <img
          src="https://media.istockphoto.com/photos/seasonal-sales-happy-woman-holds-shopping-bags-sitting-on-yellow-and-picture-id1342220181?b=1&k=20&m=1342220181&s=170667a&w=0&h=Ka0e_ah8edQLfA8u3cQ_yHLaeyEo7oJkgQr-w5Eixsw="
          class="w-full h-80 md:h-96 lg:h-[500px] object-cover"
        />
        <div class="caption grid gap-5">
          <p class="text-2xl md:text-3xl lg:text-4xl uppercase font-bold">
            shop without hassle
          </p>
          <p class="uppercase font-medium">
            shop with ease from anypart of the world
          </p>
        </div>
      </div>

      <!-- TEMPORAL REMOVAL -->

      <!-- Next and previous buttons -->
      <!-- <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a> -->
    </div>
    <br />

    <!-- The dots/circles -->
    <div style="text-align: center">
      <!-- TEMPORAL REMOVAL -->

      <!-- <span class="dot" @click="currentSlide(1)"></span>
      <span class="dot" @click="currentSlide(2)"></span>
      <span class="dot" @click="currentSlide(3)"></span>
      <span class="dot" @click="currentSlide(4)"></span> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Slider",

  setup() {
    onMounted(() => {
      show.value = true;
      // showSlides(slideIndex.value);
      showSlides();
    });

    const slideIndex = ref(0);

    const plusSlides = (n: number) => {
      // showSlides((slideIndex.value += n));
    };

    const currentSlide = (n: number) => {
      // showSlides((slideIndex.value = n));
    };

    // const showSlides = (n: number) => {
    //   let i;
    //   let slides: any = document.getElementsByClassName("mySlides");
    //   let dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) {
    //     slideIndex.value = 1;
    //   }
    //   if (n < 1) {
    //     slideIndex.value = slides.length;
    //   }
    //   for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    //   }
    //   //
    //   slideIndex.value++;
    //   //
    //   if (slideIndex.value > slides.length) slideIndex.value = 0;

    //   for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    //   }
    //   slides[slideIndex.value - 1].style.display = "block";
    //   dots[slideIndex.value - 1].className += " active";

    //   setTimeout(showSlides, 2000);
    // };

    const showSlides = () => {
      let i;
      let slides: any = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex.value++;
      if (slideIndex.value > slides.length) {
        slideIndex.value = 1;
      }
      slides[slideIndex.value - 1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 2 seconds
    };

    const activeSlideId = ref<number>(1);

    const slideArray = ref([
      {
        id: 1,
        title: "Summer Sale",
        desc: "m dolor sit amet consectetur adipisicing elit. Sapiente officia harum, vita",
        link: "/summer-sales",
        img: "src/assets/logo.png",
      },
      {
        id: 2,
        title: "Autumn Sale",
        desc: "Lorem ipsuQuod, neque animi! Minima provident",
        link: "/autumn-sales",
        img: "src/assets/logo.png",
      },
      {
        id: 3,
        title: "Spring Sale",
        desc: " cum inventore, nulla qui illum sequi.",
        link: "/spring-sales",
        img: "src/assets/logo.png",
      },
      {
        id: 4,
        title: "Winter Sale",
        desc: "Lorem dolor sit amet consectetur adipisicing elit. Sapiente officia harum, vita",
        link: "/winter-sales",
        img: "src/assets/logo.png",
      },
    ]);

    setInterval(() => {
      activeSlideId.value++;
      if (activeSlideId.value > 4) activeSlideId.value = 1;
    }, 5000);

    const setAsActiveSlide = (slide: any) => {
      activeSlideId.value = slide.id;
    };

    const move = (amount: number) => {
      let newActive;

      const newIndex = activeSlideId.value + amount;
      newActive = newIndex;

      if (newActive < slideArray.value.length) activeSlideId.value = newActive;

      if (newActive === slideArray.value.length)
        activeSlideId.value = newActive;

      if (newActive > slideArray.value.length) activeSlideId.value = 1;

      if (newActive < 0) activeSlideId.value = slideArray.value.length - 1;
    };

    const current = ref(0);
    const direction = ref(1);
    const transitionName = ref("fade");
    const show = ref(false);

    // const slides = [{ className: "blue" },
    //   { className: "red" },
    //   { className: "yellow" }]

    const slide = (dir: number) => {
      direction.value = dir;

      dir === 1
        ? (transitionName.value = "slide-next")
        : (transitionName.value = "slide-prev");

      var len = slideArray.value.length;

      current.value = (current.value + (dir % len) + len) % len;
    };

    // https://media.istockphoto.com/photos/collage-with-female-and-male-legs-in-colored-sneakers-trainers-over-picture-id1337214807?b=1&k=20&m=1337214807&s=170667a&w=0&h=JLKBSuAs2HoqcT9b6NlMXdymaG4sjP6FNE7Q8T2OMpA=

    // spring
    //https://media.istockphoto.com/photos/beauty-young-girl-outdoors-enjoying-nature-picture-id618553342?b=1&k=20&m=618553342&s=170667a&w=0&h=5xwOPsHhP3s8CdiG69_iuymGF8mTKTQ0G1cLvMsQNww=
    return {
      activeSlideId,
      slideArray,
      // slides,

      transitionName,
      show,
      current,
      slide,
      setAsActiveSlide,
      move,
      plusSlides,
      currentSlide,
    };
  },
});
</script>

<style scoped>
/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDES CLASSES */

.blue {
  background: #4a69bd;
}

.red {
  background: #e55039;
}

.yellow {
  background: #f6b93b;
}

/* SLIDER STYLES */
body {
  overflow: hidden;
  margin: 0;
  font-size: 50px;
  font-family: "Crimson Text", sans-serif;
  color: #fff;
}
/* .carousel {
  border: 3px solid red;
} */

#slider {
  width: 100%;
  height: 100vh;
  position: relative;
}

/* .slide {
  width: 100%;
  height: 100vh;
  position: absolute;
  // position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid blue;
} */

/* .btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
} */

/* .btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}

.carousel-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
} */
/* 
.carousel-controls__button-left {
  cursor: pointer;
  border: 0;
  background-color: rgba(0, 0, 0, 0.01);
  color: #fff;
  border-radius: 50%;
  padding: 10px 15px;
  font-size: 18px;
  position: absolute;
  // top: 42%;
  top: 17%;
  left: 0;
  margin-left: 1rem;
}

.carousel-controls__button-right {
  right: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.01);
  border: 0;
  color: #fff;
  border-radius: 50%;
  padding: 10px 15px;
  font-size: 18px;
  position: absolute;
  // top: 42%;
  top: 17%;
  margin-right: 1rem;
} */

* {
  box-sizing: border-box;
}

/* Slideshow container */
.slideshow-container {
  /* max-width: 1000px; */
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: -22px; */
  padding: 10px 12px;
  color: white;
  background-color: gray;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.prev {
  border-radius: 50%;
  top: 50%;
  left: 0;
  transform: translate(50%, -50%);
}

/* Position the "next button" to the right */

.next {
  border-radius: 50%;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
