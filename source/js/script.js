const navigationToggleOpened = document.querySelector(`.header__toggle-open`);
const navigation = document.querySelector(`.navigation`);
const navigationToggleClosed = document.querySelector(`.navigation__toggle-closed`);
const tourDescriptionList = document.querySelector(`.tour-description__list`)
const countryTitle = document.querySelector(`.countries__title`);
const countryText = document.querySelector(`.countries__text`);
const countriesReviewContent = document.querySelector(`.countries__review-content`);
const countriesReviewName = document.querySelector(`.countries__review-name`);
const countriesPicture = document.querySelector(`.countries__picture`);

const countries = {
  greece: {
    title: `Греция`,
    text: `На севере Греции находится один из крупнейших комплексов монастырей, расположенных на вершинах скал. Название его «Метеора» буквально переводится как «висящие в воздухе». Этот монастырь основная цель нашего путешествия в Греции. После покарения скал из песчанника и обломочной горной породы, достигающих в высоту 600 метров, наградой будет неописуемая красота природы и атмосфера, царящая в монастырях Метеоры.`,
    review: `Метеоры в Греции можно сравнить разве что с Монсерратт в Испании. Такие же высоченные скалы. Но здесь потрясает масштаб. Огромная территория, высоко в горах. Ощущение такое, как будто стоишь на краю света!`,
    name: `Влада Голицина`,
    src:`img/greece.jpg`,
  },
  albania: {
    title: `Албания`,
    text: `В Албании мы посетим Курорт Ксамиль. Этот курорт поразит вас чистейшей водой и удивительным пляжем. Вначале кажется, что на пляже вас встречает обычный, правда невероятно белоснежный и слишком крупный песок. Однако, присмотревшись, можно понять, что это не песок, а камни, перетёртые до такого мелкого состояния. `,
    review: `Замечательный курорт, обязательно стоит посетить. В следующий раз возьму с собой сестру, чтобы тоже смогла вкусить все красоты природы :)`,
    name: `Маришка`,
    src:`img/albania.jpg`,
  },
  macedonia: {
    title: `Македония`,
    text: `В Македонии нашей целью будет посетить Палаошник, который расположился в удивительно красивой лесистой местности возле Охридского озера и Самуиловой твердыни. А также мы заберемся на вершину горы Татичев Камен где находится  археологический памятник Кокино в длину около 100 метров.`,
    review: `Я бы сказал необычное старое здание. В архитектуре я не разбираюсь, но подъем в гору был очень веселым так как люди оказались легкими и заводными. Красота природы впечатлила, особенно после долгого пути в гору.`,
    name: `Михаил Кузьмин`,
    src:`img/macedonia.jpg`,
  },
  montenegro: {
    title: `Черногория`,
    text: `Черногория удивит нас самым большим в Европе каньоном реки Тара, который в некоторых местах высотой берегов доходит до 1300 метров, а шириной не превышает трех. При этом длина каньона составляет 80 км.`,
    review: `Неописуемой красоты каньон! Ничего прекраснее в жизни не видела, разве что в фильмах :) Всем советую`,
    name: `Анастасия Мей`,
    src:`img/montenegro.jpg`,
  },
  сroatia: {
    title: `Хорватия`,
    text: `В Хорватии мы посетим необычайную пещеру названную Бередине. Ее подземный мир увлечет вас на 80-ти метровую глубину через 5 освещенных залов, украшенных удивительными нерукотворными скульптурами —  сталактитами и сталагмитами —  формировавшимися тысячи и тысячи лет.`,
    review: `Мы поехали всей семьей, я, моя жена и родители. Пещера просто незабываема! А то, что все это формировалось тысячелетиями, мега необычно. Первоначально даже не верилось, но натур ни с чем не спутать по итогу :)`,
    name: `Владимир Мулицин`,
    src:`img/сroatia.jpg`,
  },
}

tourDescriptionList.addEventListener('click', (evt) => {
  if (evt.target.hasAttribute('data-country')) {
    const country = evt.target.dataset.country;
    showAnotherCountry(country)
  }
})

const showAnotherCountry = (country) => {
  const { title, text, review, name, src } = countries[country]
  countryText.textContent = text;
  countryTitle.textContent = title;
  countriesReviewContent.textContent = review;
  countriesReviewName.textContent = name;
  countriesPicture.src  = src;
}

navigation.classList.add(`navigation--close`);

const toggleNavDisplay = () => {
  navigation.classList.toggle(`navigation--close`);
  navigation.classList.toggle(`navigation--open`);
}

const navButtonClickHandler = (evt) => {
  evt.preventDefault();
  toggleNavDisplay();
}

navigationToggleOpened.addEventListener(`click`, navButtonClickHandler);
navigationToggleClosed.addEventListener(`click`, navButtonClickHandler);

