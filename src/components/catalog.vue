<script setup>
import { ref } from 'vue';
import {cardsObj} from './globalVar' 
import {cart} from './globalVar' 

let filter = ref('popular')
let popularCard = ref(JSON.parse(JSON.stringify(cardsObj.value)))

function filterCardPopular() {
    let cardCopy = JSON.parse(JSON.stringify(cardsObj.value))
    popularCard.value = cardCopy.sort((a, b) => b.cardStar - a.cardStar)
}
filterCardPopular()
function filterCardNew() {
    popularCard.value = cardsObj.value
}

function addCart(card){
    if (card.cardIsAdded) {
        card.cardIsAdded = false
        card.cardCount--
        cart.value = cart.value.filter((el)=> card.cardId != el.cardId)
    }
    else{
        card.cardIsAdded = true
        card.cardCount++
        cart.value.push(card)
    }
}
</script>

<template>
    <div class="catalog__wrapp" id="catalog">
        <div class="catalog">
            <div class="catalog__head">
                <div class="catalog__title">Популярные</div>
                <div class="catalog__filters">
                    <p @click="filter = 'popular', filterCardPopular()" :class="{ active: filter == 'popular' }"
                        class="catalog__filter">Популярные товары</p>
                    <p @click="filter = 'new', filterCardNew()" :class="{ active: filter == 'new' }"
                        class="catalog__filter">Новинки</p>
                </div>
            </div>
            <div class="catalog__main">
                <div class="catalog__main__card" v-for="(card, index) in popularCard" :key="index">
                    <div v-show="card.cardStar >= 4.9" class="hott"><img
                            src="https://i.pinimg.com/originals/89/0c/2a/890c2a8dcf40893963e64c35419a2744.png"
                            alt="flamme">
                        <p>hot</p>
                    </div>
                    <div class="catalog__main__card__img"><img :src=card.cardImg alt="fun"></div>
                    <div class="catalog__main__card__info">
                        <div class="catalog__main__card__info__stars"><img src="/src/assets/img/star.png" alt="star">
                            <p>{{ card.cardStar }}<span
                                    v-show="card.cardStar === 5 || card.cardStar === 4 || card.cardStar === 3 || card.cardStar === 2 || card.cardStar === 1">.0</span>
                            </p>
                        </div>
                        <div class="catalog__main__card__info__shows"><img src="/src/assets/img/eye.png" alt="eye">
                            <p>{{ card.cardShows }}</p>
                        </div>
                    </div>
                    <div class="catalog__main__card__name">
                        <p>{{ card.cardName }}</p>
                    </div>
                    <div class="catalog__main__card__value"><span class="dot"></span>В наличии</div>
                    <div class="catalog__main__card__price">
                        <p>{{ card.cardStartPrice }} &#8381;</p>
                    </div>
                    <div class="catalog__main__card__btn"><button @click="addCart(card)"><p v-if="!card.cardIsAdded">купить</p><p v-else>удалить</p></button></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.catalog__wrapp {
    margin-top: 80px;
    color: #ffffffa6;
}

.catalog {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
}

.catalog__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
}

.catalog__title {
    font-size: 31px;
    color: #ffffff98;
}

.catalog__filters {
    display: flex;
    column-gap: 10px;
    flex-wrap: wrap;
}

.catalog__filter {
    background-color: #ffffff1a;
    color: #ffffffa6;
    padding: 10px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
}

.catalog__filter:hover {
    background-color: #ffffff28;
}

.active {
    background-color: #ffffff36;
}

.catalog__main {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}

.catalog__main__card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
    min-height: 450px;
    background-color: #242424;
    width: 325px;
    max-width: 100%;
    word-break: break-all;
    position: relative;
    border-radius: 10px;
}

.catalog__main__card__img img {
    width: 185px;
    height: 135px;
}

.catalog__main__card__img {
    display: flex;
    align-items: center;
    justify-content: center;
}

.catalog__main__card__info {
    display: flex;
    column-gap: 10px;
    justify-content: start;
}

.catalog__main__card__info__stars,
.catalog__main__card__info__shows {
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 13px;
}

.catalog__main__card__info__stars img,
.catalog__main__card__info__shows img {
    width: 14px;
    height: 14px;
}

.catalog__main__card__name {
    font-size: 25px;
    color: #dbdbdb;
}

.catalog__main__card__value {
    display: flex;
    align-items: center;
    column-gap: 7px;
    color: rgb(18, 146, 18);
}

.catalog__main__card__value .dot {
    width: 12px;
    height: 12px;
    background-color: rgb(26, 153, 26);
    border-radius: 50%;
}

.catalog__main__card__price {
    font-size: 28px;
}

.catalog__main__card__btn {
    display: flex;
    justify-content: center;
}

.catalog__main__card__btn button {
    background-color: #353535;
    padding: 7px 0;
    width: 100%;
    border-radius: 15px;
    font-size: 17px;
    color: #ffffffc2;
    border: none;
    cursor: pointer;
}

.catalog__main__card__btn button:hover {
    background-color: #424242;
}

.hott {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    position: absolute;
    right: -25px;
    top: -5px;
    background-color: #353535;
    padding: 7px;
    font-weight: bold;
    border-radius: 15px;
    rotate: 35deg;
}

.hott img {
    width: 20px;
}

@media (max-width: 1248px) {
    .catalog__main__card__img img{
        width: 155px;
        height: 105px;
    }
    .catalog__main__card__name{
        font-size: 20px;
    }
    .catalog__main__card__price{
        font-size: 23px;
    }
}

@media (max-width: 992px) {
    .catalog__wrapp {
        margin-top: 60px;
    }
    .catalog__main {
        gap: 20px;
    }
    .catalog__main__card {
        width: calc(50% - 10px);
        min-height: 400px;
        padding: 20px;
    }
    .catalog__main__card__name {
        font-size: 18px;
    }
}

@media (max-width: 600px) {
    .catalog__title {
        font-size: 23px;
    }
    .catalog__filter {
        font-size: 12px;
        padding: 8px 12px;
    }
    .catalog__main {
        gap: 15px;
    }
    .catalog__main__card {
        width: 100%;
        min-height: 380px;
        padding: 18px;
    }
    .catalog__main__card__img img {
        width: 130px;
        height: 90px;
    }
    .catalog__main__card__name {
        font-size: 16px;
    }
    .catalog__main__card__price {
        font-size: 20px;
    }
    .catalog__main__card__btn button {
        font-size: 15px;
        padding: 8px 0;
    }
}

@media (max-width: 480px) {
    .catalog__head {
        flex-direction: column;
        row-gap: 15px;
        align-items: flex-start;
    }
    .catalog__wrapp {
        margin-top: 40px;
    }
    .hott {
        right: -15px;
        top: -5px;
        padding: 5px;
        font-size: 12px;
    }
    .hott img {
        width: 15px;
    }
}
</style>
