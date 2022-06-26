<template>
  <div class="h-fit">
    <div class="slideshow-container w-full">
      <div class="mySlides fade relative">
        <div class="numbertext">{{ slideArray[activeSlideIndex].id}} / 4</div>
        <img
          :src="slideArray[activeSlideIndex].img"
          class="w-full h-80 md:h-96 lg:h-[500px] object-cover"
        />
        <div class="caption grid gap-5">
          <p class="text-2xl md:text-3xl lg:text-4xl uppercase font-bold">
            {{ slideArray[activeSlideIndex].title }}
          </p>
          <p class="uppercase font-medium">
            {{ slideArray[activeSlideIndex].desc }}
          </p>
          <div class="link mt-5 flex justify-center md:justify-start">
            <a class="capitalize py-2 px-3 border border-black hover:bg-white hover:border-white cursor-pointer"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <a class="prev bg-n-gray hover:bg-green-400" @click="prevSlide">&#10094;</a>
      <a class="next bg-n-gray hover:bg-green-400" @click="nextSlide">&#10095;</a>
    </div>

    <br />

    <div style="text-align: center">      
      <span v-for="(slide, idx) in slideArray" :key="idx" class="dot bg-n-gray hover:bg-green-400" @click="currentSlide(idx)"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Slider",

  setup() {
    const activeSlideIndex = ref(0);

    const slideArray = ref([
      {
        id: 1,
        title: "Summer Sale",
        desc: "don't compromise on style. get flat 30% off for new arrivals",
        link: "/summer-sales",
        img: "https://media.istockphoto.com/photos/beauty-young-girl-outdoors-enjoying-nature-picture-id618553342?b=1&k=20&m=618553342&s=170667a&w=0&h=5xwOPsHhP3s8CdiG69_iuymGF8mTKTQ0G1cLvMsQNww=",
      },
      {
        id: 2,
        title: "Beautiful items",
        desc: "Put a smile on your loved one's face with beautiful products",
        link: "/autumn-sales",
        img: "https://media.istockphoto.com/photos/concept-of-mothers-day-holiday-greeting-with-yellow-tulip-bouquet-on-picture-id1310430272?b=1&k=20&m=1310430272&s=170667a&w=0&h=lUz8ysRMR7Jny4dQGhixwEzQJi37tu8cR6AQ55zLmTc=",
      },
      {
        id: 3,
        title: "Autumn sale",
        desc: "looking for the perfect gift? Look no further",
        link: "/spring-sales",
        img: "https://media.istockphoto.com/photos/golden-yellow-orange-red-maple-leaves-closeup-shabby-wooden-bright-picture-id1271533438?b=1&k=20&m=1271533438&s=170667a&w=0&h=d1q1k4Hr-9NoiBQo0Y7wI1zUvLnayYjNW0G1UPBmdNA=",
      },
      {
        id: 4,
        title: "shop without hassle",
        desc: "shop with ease from anypart of the world",
        link: "/winter-sales",
        img: "https://media.istockphoto.com/photos/seasonal-sales-happy-woman-holds-shopping-bags-sitting-on-yellow-and-picture-id1342220181?b=1&k=20&m=1342220181&s=170667a&w=0&h=Ka0e_ah8edQLfA8u3cQ_yHLaeyEo7oJkgQr-w5Eixsw=",
      },
    ]);

    const prevSlide = () => {
      if(activeSlideIndex.value === 0) {
        activeSlideIndex.value = slideArray.value.length -1
      }else{
        activeSlideIndex.value--
      }
    }

    const nextSlide = () => {
      if(activeSlideIndex.value < slideArray.value.length) activeSlideIndex.value++
      if(activeSlideIndex.value === 4) activeSlideIndex.value = 0
      if (activeSlideIndex.value > slideArray.value.length - 1)  activeSlideIndex.value = 0
    }

    const currentSlide = (n: number) => {
      activeSlideIndex.value = n
    };

    setInterval(() => {
      activeSlideIndex.value++;
      if (activeSlideIndex.value === 4) activeSlideIndex.value = 0;
    }, 5000); 

    return {
      activeSlideIndex,
      slideArray,
      currentSlide,
      prevSlide,
      nextSlide
    };
  },
});
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

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

body {
  overflow: hidden;
  margin: 0;
  font-size: 50px;
  font-family: "Crimson Text", sans-serif;
  color: #fff;
}

#slider {
  width: 100%;
  height: 100vh;
  position: relative;
}

* {
  box-sizing: border-box;
}


.slideshow-container {
  position: relative;
  margin: auto;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  color: white;
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

.next {
  border-radius: 50%;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
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
