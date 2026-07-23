<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import popular from './popular.vue';
import banners from './banners.vue';
import catalog from './catalog.vue';
import cart from './cart.vue';

let banner = ref(1)
let interval = null

onMounted(() => {
    interval = setInterval(()=>{
        banner.value++
        if (banner.value > 2) {
            banner.value = 1
        }
    }, 10000)
})

onUnmounted(() => {
    if (interval) clearInterval(interval)
})
</script>

<template>
<main>
<div class="banners">
    <div class="banner one" :class="{active: banner == 1}">
        <p class="banner__tittle">Готовые ПК</p>
        <p class="banner__text">Вы можете приобрести у нас уже готовые Компьютеры, полностью настроенные и готовые к боевым задачам.</p>
        <button class="banner__btn">В каталог</button>
    </div>
    <div class="banner two" :class="{active: banner == 2}">
        <p class="banner__tittle">Комплектующие</p>
        <p class="banner__text">Есть возможность покупки отдельных комплектующих для своего пк, будьте творцом своего искуства.</p>
        <button class="banner__btn">В каталог</button>
    </div>
</div>
<popular id="popular"/>
<banners id="banners"/>
<catalog id="catalog"/>
<cart/>
</main>
</template>

<style scoped>
main {
    background-color: #1f1f1f;
    padding: 50px 60px;
}
.banners{
    width: 100%;
    height: 550px;
    position: relative;
}
.banner.one{
    width: 100%;
    height: 550px;
    background: url('/src/assets/img/pc1.jpg') 50% / cover no-repeat;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    row-gap: 25px;
    color: #fff;
    padding-left: 50px;
    transition: all 1s ease;
    opacity: 0;
    position: absolute;
    will-change: transform, opacity;
    backface-visibility: hidden;
}
.banner.two{
    width: 100%;
    height: 550px;
    background: url('https://hyperpc.ru/images/support/warranty/hpc-standard-service-banner-alt-b.jpg') 50% / cover no-repeat;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    row-gap: 25px;
    color: #fff;
    padding-left: 50px;
    transition: all 1s ease;
    opacity: 0;
    position: absolute;
    will-change: transform, opacity;
    backface-visibility: hidden;
}
.banner.one.active {
    opacity: 1;
    z-index: 2;
}
.banner.two.active {
    opacity: 1;
    z-index: 2;
}
.banner__tittle {
    font-size: 45px;
    font-weight: bold;
}
.banner__text {
    font-size: 20px;
    width: 50%;
}
.banner__btn {
    background-color: transparent;
    border: 1px #fff solid;
    color: #fff;
    padding: 10px 25px;
    font-size: 20px;
    border-radius: 15px;
    transition: .4s;
    cursor: pointer;
}
.banner__btn:hover{
    background-color: #fff;
    color: black;
}

@media (max-width: 1200px) {
    main {
        padding: 50px 40px;
    }
    .banners,
    .banner.one,
    .banner.two {
        height: 400px;
        padding-left: 30px;
    }
    .banner__tittle {
        font-size: 32px;
    }
    .banner__text {
        font-size: 16px;
        width: 70%;
    }
    .banner__btn {
        font-size: 16px;
        padding: 8px 18px;
    }
}

@media (max-width: 866px) {
    .banner.one,
    .banners,
    .banner.two {
        height: 280px;
        padding-left: 15px;
        border-radius: 10px;
    }
    .banner__tittle {
        font-size: 22px;
    }
    .banner__text {
        font-size: 13px;
        width: 90%;
    }
    .banner__btn {
        font-size: 13px;
        padding: 6px 12px;
        border-radius: 8px;
    }
}

@media (max-width: 600px) {
    main {
        padding: 30px 15px;
    }
    .banners,
    .banner.one,
    .banner.two {
        height: 220px;
        padding-left: 12px;
        border-radius: 8px;
    }
    .banner__tittle {
        font-size: 16px;
    }
    .banner__text {
        font-size: 11px;
        width: 95%;
    }
    .banner__btn {
        font-size: 11px;
        padding: 5px 10px;
        border-radius: 6px;
    }
}

@media (max-width: 400px) {
    .banners,
    .banner.one,
    .banner.two {
        height: 180px;
        padding-left: 8px;
        border-radius: 6px;
    }
    .banner__tittle {
        font-size: 14px;
    }
    .banner__text {
        font-size: 10px;
        width: 100%;
    }
    .banner__btn {
        font-size: 10px;
        padding: 4px 8px;
        border-radius: 5px;
    }
}
</style>
