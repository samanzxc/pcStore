<script setup>
import { ref, nextTick } from "vue";

const isOpen = ref(false)

const openMenu = async () => {
    isOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeMenu = async () => {
    isOpen.value = false
    document.body.style.overflow = ''
}
</script>

<template>
    <header class="header">
    <div class="header__logo">PC STORE</div>
    <nav class="header__nav__bar">
      <a href="#popular" class="nav">Популярные</a>
      <a href="#banners" class="nav">Информация</a>
      <a href="#catalog" class="nav">Комплектующие</a>
    </nav>
      <img @click="openMenu()" src="https://i.pinimg.com/originals/26/9d/d1/269dd16fa1f5ff51accd09e7e1602267.png" alt="" class="burger__menu__btn">
      <div class="burger__menu" :class="{ active: isOpen }">
        <img @click="closeMenu()" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-1024.png" alt="" class="burger__close__btn">
        <a href="#popular" class="nav" @click="closeMenu()">Популярные</a>
        <a href="#banners" class="nav" @click="closeMenu()">Информация</a>
        <a href="#catalog" class="nav" @click="closeMenu()">Комплектующие</a>
      </div>
  </header>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    background-color: #272727;
    padding: 15px 60px;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}
.header__logo{
    color: #ffffffb2;
    font-weight: bold;
    font-size: 25px;
    cursor: pointer;
    white-space: nowrap;
}

.header__nav__bar {
    display: flex;
    gap: 30px;
    font-size: 20px;
}

.header__nav__bar a {
    text-decoration: none;
    color: #ffffffb2;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: color 0.3s ease;
    padding: 5px 0;
    position: relative;
}
.header__nav__bar a:hover, .header__nav__bar a.active {
    color: #fff;
}
.header__nav__bar a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transition: width 0.3s ease;
}
.header__nav__bar a:hover::after {
    width: 100%;
}

.burger__menu__btn {
    max-width: 40px;
    min-width: 30px;
    height: auto;
    display: none;
    cursor: pointer;
    padding: 10px;
    z-index: 101;
    transition: transform 0.3s ease;
}

.burger__menu {
    background-color: rgb(56, 56, 56);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    z-index: 100;
    padding: 80px 20px;
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
}

.burger__menu.active {
    transform: translateX(0);
    pointer-events: auto;
}

.burger__close__btn {
    max-width: 50px;
    min-width: 40px;
    position: absolute;
    right: 20px;
    top: 20px;
    margin: 0;
    cursor: pointer;
    padding: 10px;
    transition: transform 0.3s ease;
}
.burger__close__btn:hover {
    transform: rotate(90deg);
}

.burger__menu a {
    text-decoration: none;
    color: #ffffffc9;
    font-size: 24px;
    font-weight: 600;
    padding: 15px 20px;
    border-radius: 8px;
    transition: all 0.3s ease;
    width: 100%;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
}
.burger__menu.active a {
    opacity: 1;
    transform: translateY(0);
}
.burger__menu a:nth-child(2) { transition-delay: 0.1s; }
.burger__menu a:nth-child(3) { transition-delay: 0.2s; }
.burger__menu a:nth-child(4) { transition-delay: 0.3s; }
.burger__menu a:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    transform: translateX(10px);
}

@media(max-width: 950px) {
    .header {
        padding: 15px 40px;
    }
    .header__nav__bar {
        display: none;
    }
    .burger__menu__btn {
        display: block;
    }
}
@media(max-width: 600px) {
    .header{
        padding: 12px 15px;
    }
    .header__logo {
        font-size: 20px;
    }
    .burger__menu {
        padding: 60px 10px;
        gap: 20px;
    }
    .burger__menu a {
        font-size: 20px;
        padding: 10px;
    }
    .burger__close__btn {
        max-width: 45px;
        right: 15px;
        top: 15px;
    }
    .burger__menu__btn {
        max-width: 35px;
        min-width: 25px;
    }
}
</style>
