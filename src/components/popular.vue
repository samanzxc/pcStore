<script setup>
</script>

<template>
    <div class="popular">
        <p class="popular__title">Популярные товары</p>
        <div class="popular__items">
            <div class="popular__item">
                <div class="popular__item__img"><img src="/src/assets/img/proc.png" alt="pimg"></div>
                <div class="popular__item__name">Процессоры Ryzen</div>
                <div class="popular__item__sells">
                    <p>Продано: 112 шт</p>
                </div>
            </div>
            <div class="popular__item">
                <div class="popular__item__img"><img src="/src/assets/img/ozu.png" alt="pimg"></div>
                <div class="popular__item__name">Оперативная память 32ГБ</div>
                <div class="popular__item__sells">
                    <p>Продано: 194 шт</p>
                </div>
            </div>
            <div class="popular__item">
                <div class="popular__item__img"><img src="/src/assets/img/fun.png" alt="pimg"></div>
                <div class="popular__item__name">RGB Куллеры</div>
                <div class="popular__item__sells">
                    <p>Продано: 82 шт</p>
                </div>
            </div>
            <div class="popular__item">
                <div class="popular__item__img"><img src="/src/assets/img/korpus.png" alt="pimg"></div>
                <div class="popular__item__name">Готовые ПК</div>
                <div class="popular__item__sells">
                    <p>Продано: 137 шт</p>
                </div>
            </div>
            <div class="popular__item">
                <div class="popular__item__img"><img src="/src/assets/img/card.png" alt="pimg"></div>
                <div class="popular__item__name">Видеокарты Intel ARC</div>
                <div class="popular__item__sells">
                    <p>Продано: 160 шт</p>
                </div>
            </div>
        </div>
        <div class="popular__btn">
            <a href="#catalog"><button class="popular__btn__btn">Перейти в каталог</button></a>
        </div>
    </div>
</template>

<style scoped>
.popular {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    margin-bottom: 80px;
}

.popular__items {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.popular__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #272727;
    border-radius: 10px;
    row-gap: 35px;
    padding: 45px 70px;
    text-align: center;
    flex: 1 1 auto;
    min-width: 0;
    max-width: 400px;
}

.popular__item__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.popular__title {
    margin-bottom: 30px;
    color: #ffffff9c;
    font-size: 30px;
}

.popular__item__name {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff9c;
}

.popular__item__sells p {
    font-size: 13px;
    font-weight: 400;
    color: #ffffff62;
}

.popular__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}

.popular__btn__btn {
    width: 350px;
    max-width: 100%;
    height: 40px;
    background-color: #2b2b2b;
    border-radius: 10px;
    border: none;
    color: #ffffffbe;
    font-size: 14px;
    cursor: pointer;
}

.popular__btn__btn:hover {
    background-color: #383838;
}

@media (max-width: 1450px) {
    .popular__item {
        max-width: 250px;
        padding: 35px 40px;
        row-gap: 25px;
    }
}

@media (max-width: 992px) {
    .popular {
        margin-top: 60px;
        margin-bottom: 60px;
    }
    .popular__items {
        gap: 15px;
    }
    .popular__item {
        max-width: calc(50% - 10px);
        padding: 30px 30px;
        row-gap: 20px;
    }
    .popular__title {
        font-size: 24px;
    }
}

@media (max-width: 600px) {
    .popular {
        margin-top: 40px;
        margin-bottom: 40px;
    }
    .popular__item {
        max-width: 100%;
        padding: 25px 20px;
        row-gap: 15px;
    }
    .popular__title {
        font-size: 20px;
    }
    .popular__item__name {
        font-size: 14px;
    }
    .popular__btn__btn {
        width: 100%;
        height: 36px;
        font-size: 13px;
    }
}
</style>
