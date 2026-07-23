import { ref } from "vue"

function randomNum() {
    let num = Math.floor(Math.random() * 5000)
    return num
}
export const cardsObj = ref([
    {
        cardImg: 'https://storage-asset.msi.com/global/picture/image/feature/desktop/DT_KBL/GamimgComponents/gaming_graphics.png',
        cardStar: 4.3,
        cardShows: randomNum(),
        cardName: 'Видеокарта Intel ARC A750 Challenger OC',
        cardStartPrice: 16000,
        cardPrice: 16000,
        cardId: 0,
        cardCount: 0,
        cardIsAdded: false
    },
    {
        cardImg: 'https://www.gigabyte.com/FileUpload/RU/KeyFeature/671/img/fan_club/grand_img.png',
        cardStar: 4.8,
        cardShows: randomNum(),
        cardName: 'Видеокарта Palit (NE75090019R5-GB2020G) GeForce RTX 5090 32GB GameRock',
        cardPrice: 14750,
        cardStartPrice: 14750,
        cardId: 1,
        cardCount: 0,
        cardIsAdded: false
    },
    {
        cardImg: 'https://domcomputer.ru/wp-content/uploads/2014/10/geforce-gtx760.png',
        cardStar: 4.8,
        cardShows: randomNum(),
        cardName: 'Видеокарта MSI (G5080-16SPS) GeForce RTX 5080 16G SUPRIM SOC',
        cardPrice: 15250,
        cardStartPrice: 15250,
        cardId: 2,
        cardCount: 0,
        cardIsAdded: false
    },
    {
        cardImg: 'https://комиссионный54.рф/wp-content/uploads/2017/12/videokarty.png',
        cardStar: 4.7,
        cardShows: randomNum(),
        cardName: 'Видеокарта Intel ARC A750 Challenger OC',
        cardPrice: 61000,
        cardStartPrice: 61000,
        cardId: 3,
        cardCount: 0,
        cardIsAdded: false
    },
    {
        cardImg: 'https://www.gigabyte.com/FileUpload/RU/KeyFeature/671/img/fan_club/grand_img.png',
        cardStar: 5.0,
        cardShows: randomNum(),
        cardName: 'Видеокарта MSI (G5080-16SPS) GeForce RTX 5080 16G SUPRIM SOC',
        cardPrice: 17800,
        cardStartPrice: 17800,
        cardId: 4,
        cardCount: 0,
        cardIsAdded: false
    },
    {
        cardImg: 'https://storage-asset.msi.com/global/picture/image/feature/desktop/DT_KBL/GamimgComponents/gaming_graphics.png',
        cardStar: 4.8,
        cardShows: randomNum(),
        cardName: 'Видеокарта Palit (NE75080S19T2-GB2031A) GeForce RTX 5080 16GB GAMINGPRO OC',
        cardPrice: 34520,
        cardStartPrice: 34520,
        cardId: 5,
        cardCount: 0,
        cardIsAdded: false
    },
    {
        cardImg: 'https://www.gigabyte.com/FileUpload/RU/KeyFeature/671/img/fan_club/grand_img.png',
        cardStar: 5.0,
        cardShows: randomNum(),
        cardName: 'Видеокарта MSI (G5080-16SPS) GeForce RTX 5080 16G SUPRIM SOC',
        cardPrice: 41600,
        cardStartPrice: 41600,
        cardId: 6,
        cardCount: 0,
        cardIsAdded: false
    },
    {
        cardImg: 'https://domcomputer.ru/wp-content/uploads/2014/10/geforce-gtx760.png',
        cardStar: 4.4,
        cardShows: randomNum(),
        cardName: 'Видеокарта RX5800 XT',
        cardPrice: 12000,
        cardStartPrice: 12000,
        cardId: 7,
        cardCount: 0,
        cardIsAdded: false
    },
    {
        cardImg: 'https://picsum.photos/seed/slidecard/400/400.jpg',
        cardStar: 4.6,
        cardShows: randomNum(),
        cardName: 'Видеокарта Intel ARC A750 Challenger OC',
        cardPrice: 12000,
        cardStartPrice: 12000,
        cardId: 8,
        cardCount: 0,
        cardIsAdded: false
    },
    {
        cardImg: 'https://picsum.photos/seed/cardImg2/400/400.jpg',
        cardStar: 4.9,
        cardShows: randomNum(),
        cardName: 'Видеокарта Gforce RTX 2070 SUPER',
        cardPrice: 28990,
        cardStartPrice: 28990,
        cardId: 9,
        cardCount: 0,
        cardIsAdded: false
    },
])

export let cart = ref([])
