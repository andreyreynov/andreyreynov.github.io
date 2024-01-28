// Создаем массив ответов
var magicConchAnswers = [
  { text: "Да", sound: "yesAudio" },
  { text: "Нет", sound: "noAudio" },
  { text: "Да, конечно!", sound: "yesOfCourseAudio" },
  { text: "Нет, сегодня не ваш день.", sound: "noTodayIsNotYourDayAudio" },
  { text: "Возможно, в будущем.", sound: "maybeInTheFutureAudio" },
  { text: "Попробуйте спросить еще раз.", sound: "tryAskingAgainAudio" },
  { text: "Мне кажется, что это маловероятно.", sound: "iDontThinkSoAudio" },
  { text: "Категорически нет.", sound: "definitelyNotAudio" },
  { text: "Без сомнения!", sound: "withoutADoubtAudio" },
  { text: "Лучше не рассказывать.", sound: "betterNotToTellAudio" },
  { text: "Не стоит надеяться.", sound: "notWorthHopingForAudio" },
  { text: "Шансы хорошие!", sound: "chancesAreGoodAudio" },
  { text: "Это не исключено.", sound: "itsNotExcludedAudio" },
  { text: "Спроси позже.", sound: "askAgainLaterAudio" },
  { text: "Не могу сказать точно.", sound: "cantSayForSureAudio" },
  { text: "Спокойно относитесь.", sound: "takeItEasyAudio" },
  { text: "Звезды говорят - да!", sound: "theStarsSayYesAudio" },
  {
    text: "Интересный вопрос, давайте подумаем.",
    sound: "interestingQuestionLetsThinkAudio",
  },
  { text: "Это зависит от вас.", sound: "itDependsOnYouAudio" },
  { text: "Лучше бы вам этого не знать.", sound: "betterIfYouDontKnowAudio" },
  { text: "Не стоит беспокоиться об этом.", sound: "dontWorryAboutItAudio" },
  { text: "Весьма вероятно.", sound: "quiteLikelyAudio" },
  { text: "Смотря как посмотреть.", sound: "dependingOnHowYouLookAtItAudio" },
  { text: "Да, но будьте осторожны.", sound: "yesButBeCarefulAudio" },
  {
    text: "Нет, но есть альтернативы.",
    sound: "noButThereAreAlternativesAudio",
  },
  { text: "Никаких сомнений.", sound: "noDoubtsAudio" },
  { text: "Слушайте свое сердце.", sound: "listenToYourHeartAudio" },
  { text: "Лучше бы вам не узнавать.", sound: "betterIfYouDontFindOutAudio" },
  { text: "Да, но под вопросом.", sound: "yesButQuestionableAudio" },
  { text: "Не рассчитывайте на это.", sound: "dontCountOnItAudio" },
  {
    text: "Это возможно только в фантазиях.",
    sound: "possibleOnlyInFantasiesAudio",
  },
  {
    text: "Сложно сказать, но попробуйте.",
    sound: "hardToSayButWorthATryAudio",
  },
];

// Функция для получения случайного ответа
function getMagicConchAnswer() {
  // Генерируем случайный индекс из массива
  var randomIndex = Math.floor(Math.random() * magicConchAnswers.length);
  // Возвращаем соответствующий объект ответа
  return magicConchAnswers[randomIndex];
}

// Находим контейнер и изображение "Conch" по id
var conchContainer = document.getElementById("conchContainer");
var questionPrompt = document.getElementById("questionPrompt");

// Добавляем обработчик события для клика на изображение
conchContainer.addEventListener("click", function () {
  // Получаем случайный ответ
  var magicConchAnswer = getMagicConchAnswer();
  // Выводим ответ вместо текста вопроса
  questionPrompt.textContent = "Ответ: " + magicConchAnswer.text;
  // Воспроизводим соответствующий звук
  document.getElementById(magicConchAnswer.sound).play();
});
