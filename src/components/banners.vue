<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const slides = ref([
  {
    id: 1,
    title: "Новые игровые Видеокарты по адекватным ценам",
    subtitle: "Мощность и производительность для любых задач",
    description: "Соберите свой идеальный ПК с нашими комплектующими",
    image: "/src/assets/img/slideCard.png",
    bgColor: "linear-gradient(143deg,rgba(194, 136, 242, 1) 10%, rgba(91, 0, 181, 1) 71%)"
  },
  {
    id: 2,
    title: "Скидки до 30% на большинство товаров",
    subtitle: "На все комплектующие",
    description: "Успейте купить по выгодным ценам",
    image: "https://storage-asset.msi.com/global/picture/image/feature/desktop/DT_KBL/GamimgComponents/gaming_graphics.png",
    bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    id: 3,
    title: "Бесплатная, быстрая и надёжная доставка",
    subtitle: "По всей России в любые города",
    description: "При заказе от 50 000 ₽",
    image: "https://pc-bu.ru/wp-content/uploads/2019/11/prodat-videokartu.png",
    bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  }
])

let interval = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 
    ? slides.value.length - 1 
    : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<template>
    <div class="banner-container">
      <div class="slider">
        <div 
          class="slide" 
          v-for="(slide, index) in slides" 
          :key="slide.id"
          :class="{ active: index === currentSlide }"
          :style="{ background: slide.bgColor }"
        >
          <div class="slide-content">
            <div class="slide-text">
              <h1 class="slide-title">{{ slide.title }}</h1>
              <h2 class="slide-subtitle">{{ slide.subtitle }}</h2>
              <p class="slide-description">{{ slide.description }}</p>
            </div>
            <div class="slide-image">
              <img :src="slide.image" :alt="slide.title">
            </div>
          </div>
        </div>
      </div>

      <div class="slider-nav">
        <button class="nav-btn prev" @click="prevSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        
        <div class="dots">
          <button 
            v-for="(slide, index) in slides" 
            :key="slide.id"
            class="dot"
            :class="{ active: index === currentSlide }"
            @click="goToSlide(index)"
          ></button>
        </div>

        <button class="nav-btn next" @click="nextSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
</template>

<style scoped>
.banner-container {
  position: relative;
}

.slider {
  position: relative;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  padding: 40px;
}

.slide.active {
  opacity: 1;
}

.slide-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.slide-text {
  flex: 1;
  color: white;
  z-index: 2;
}

.slide-title {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  width: 95%;
}

.slide-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 15px;
  opacity: 0.9;
}

.slide-description {
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.8;
  max-width: 400px;
}

.slide-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3));
}

.slider-nav {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 10;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.dots {
  display: flex;
  gap: 10px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: white;
  transform: scale(1.2);
}

@media (max-width: 992px) {
  .slider {
    height: 450px;
  }
  .slide-title {
    font-size: 2rem;
  }
  .slide-subtitle {
    font-size: 1.2rem;
  }
  .slide {
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .slide-content {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 20px;
  }
  .slide-title {
    font-size: 1.5rem;
  }
  .slide-subtitle {
    font-size: 1rem;
  }
  .slide-description {
    font-size: 0.9rem;
    max-width: 100%;
  }
  .slider {
    height: 400px;
  }
  .slide {
    padding: 20px;
    align-items: center;
  }
  .slide-image img {
    max-height: 150px;
  }
  .nav-btn {
    width: 40px;
    height: 40px;
  }
  .slider-nav {
    gap: 12px;
    bottom: 15px;
  }
}

@media (max-width: 480px) {
  .slide-title {
    font-size: 1.1rem;
  }
  .slide-subtitle {
    font-size: 0.8rem;
    margin-bottom: 8px;
  }
  .slide-description {
    font-size: 0.8rem;
    margin-bottom: 15px;
  }
  .slider {
    height: 300px;
    border-radius: 12px;
  }
  .slide {
    padding: 15px;
  }
  .slide-image img {
    max-height: 100px;
  }
  .nav-btn {
    width: 34px;
    height: 34px;
  }
  .nav-btn svg {
    width: 18px;
    height: 18px;
  }
  .dot {
    width: 8px;
    height: 8px;
  }
  .slider-nav {
    gap: 8px;
    bottom: 10px;
  }
}
</style>
