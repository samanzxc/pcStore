<script setup>
import { watch } from 'vue'
import {cart} from './globalVar.js'

function openCart(){
    document.querySelector('.cart').classList.add('active')
    document.querySelector('.cart__overlay').classList.add('active')
    document.body.style.overflow = 'hidden'
}
const closeCart = ()=>{
    document.querySelector('.cart').classList.remove('active')
    document.querySelector('.cart__overlay').classList.remove('active')
    document.body.style.overflow = ''
}

function plus(item){
    item.cardCount++
    item.cardPrice = item.cardStartPrice*item.cardCount
    reducePrice()
}
function minus(item){
    if (item.cardCount >= 2) {
        item.cardCount--
        item.cardPrice = item.cardStartPrice*item.cardCount
    } else{
        item.cardIsAdded = false
        item.cardCount--
        cart.value = cart.value.filter((el)=> item.cardId != el.cardId)    
    }
    reducePrice()
}

function reducePrice(){
    const FinishPrice = cart.value.reduce((acc, el) => acc += el.cardPrice, 0);
    return FinishPrice
}
watch(cart, reducePrice)
</script>

<template>
    <div class="cart__icon" @click="openCart">
        <img src="https://www.svgrepo.com/show/314613/shopping-cart-solid.svg" alt="cart" class="cart__img">
        <p class="length">{{ cart.length }}</p>
    </div>
    <div class="cart__overlay" @click="closeCart"></div>
    <div class="cart">
        <img src="https://matreshka.ox-r.ru/images/2000px-VisualEditor_-_Icon_-_Close_-_white.svg.png" @click="closeCart" alt="close"
            class="close">
        <div class="cart__top">
            <p class="cart__top__title">Корзина товаров</p>
            <div class="cart__items">
                <div class="cart__item" v-for="(item, index) in cart" :key="index">
                    <div class="wrapp">
                        <div class="cart__item__name">{{ item.cardName }}</div>
                        <div class="cart__item__price">
                            <p>{{item.cardPrice}} р</p>x<p>{{ item.cardCount }} шт</p>
                        </div>
                    </div>
                    <div class="cart__item__btn"><button @click="plus(item)">+</button><button @click="minus(item)">-</button></div>
                </div>
            </div>
        </div>
        <div class="cart__bottom">
            <div class="cart__even__price">
                <p>Общая стоимость:</p>
                <p>{{ reducePrice() }} р</p>
            </div>
            <div class="card__btn"><button>Оформить</button></div>
        </div>
    </div>
</template>

<style>
.cart__img {
    width: 50px;
    height: 50px;
    padding: 7px;
    background-color: #fff;
    border-radius: 50%;
    position: fixed;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    z-index: 102;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}
.cart__img:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.cart__overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 14;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}
.cart__overlay.active {
    opacity: 1;
    pointer-events: auto;
}

.cart__top__title {
    font-weight: bold;
    font-size: 28px;
    color: rgba(0, 0, 0, 0.37);
    margin-bottom: 25px;
}

.cart {
    position: fixed;
    right: -400px;
    top: 0;
    bottom: 0;
    width: 375px;
    max-width: 100vw;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 15;
    padding: 20px;
    transition: right 0.4s ease;
}

.cart__items {
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    max-height: 750px;
    overflow: auto;
}

.cart__item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px rgba(0, 0, 0, 0.116) solid;
    padding: 10px 0;
}

.cart__item__name {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.842);
    word-break: break-word;
}

.cart__item__price {
    display: flex;
    font-size: 16px;
    column-gap: 5px;
    color: rgba(0, 0, 0, 0.582);
}

.cart__item__btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 15px;
    flex-shrink: 0;
}

.cart__item__btn button {
    background-color: #000000e7;
    border: none;
    padding: 5px 15px;
    font-size: 15px;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    display: flex;
}

.cart__item__btn button:hover {
    background-color: #000000ce;
}

.cart__even__price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    margin-bottom: 15px;
}

.card__btn button {
    width: 100%;
    background-color: #000000e7;
    color: #fff;
    border: none;
    padding: 15px;
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;
}

.card__btn button:hover {
    background-color: #000000ce;
}

.close {
    width: 35px;
    height: 35px;
    background-color: #000000e7;
    border-radius: 10px;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
}
.active{
    right: 0;
}
.cart__icon{
    position: relative;
}
.cart__icon p {
    position: fixed;
    bottom: 40px;
    right: 40px;
    font-size: 15px;
    color: #fff;
    padding: 4px 10px;
    background-color: black;
    border-radius: 50%;
}

@media (max-width: 420px) {
    .cart {
        width: 100vw;
    }
    .cart__top__title {
        font-size: 22px;
    }
    .cart__item__name {
        font-size: 16px;
    }
    .cart__item__price {
        font-size: 14px;
    }
    .cart__even__price {
        font-size: 17px;
    }
    .card__btn button {
        padding: 12px;
        font-size: 16px;
    }
}
</style>
