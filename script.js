
const CONFIG = {
  startDate: '2024-11-06T00:00:00',

  reasons: [
    "За твою усмішку, від якої мені самому хочеться усміхатися.",
    "За те, як ти вимовляєш моє ім’я.",
    "За твої обійми, у яких світ ніби стає тихішим.",
    "За твою ніжність навіть у найзвичайніших дрібницях.",
    "За те, що поруч із тобою я можу бути собою.",
    "За твої очі, у яких я щоразу знаходжу щось нове.",
    "За твій сміх, який хочеться чути знову і знову.",
    "За те, як ти радієш маленьким приємностям.",
    "За твою турботу, яку я помічаю навіть без слів.",
    "За те, що звичайний вечір із тобою стає особливим.",
    "За наші жарти, зрозумілі тільки нам.",
    "За твою щирість і справжність.",
    "За твою здатність робити дім затишнішим.",
    "За те, як ти дивишся на мене, коли думаєш, що я не помічаю.",
    "За твої маленькі звички, які стали мені рідними.",
    "За те, що з тобою навіть мовчання не буває незручним.",
    "За твою сміливість бути собою.",
    "За твої мрії, якими ти зі мною ділишся.",
    "За те, як ти вмієш захоплюватися тим, що любиш.",
    "За кожне наше спонтанне «а давай».",
    "За повідомлення від тебе, які здатні змінити мій настрій.",
    "За те, що я хочу розповідати тобі навіть найменші новини.",
    "За твою доброту до людей і всього живого.",
    "За твою наполегливість, коли щось для тебе важливе.",
    "За те, що ти вмієш бути водночас ніжною і сильною.",
    "За наші прогулянки, навіть якщо ми просто йдемо без мети.",
    "За поцілунки, після яких не хочеться нікуди поспішати.",
    "За те, що мені безмежно подобається займатися з тобою коханням (СЄКСОМ).",
    "За наші ранки й вечори, які належать нам.",
    "За те, що поруч із тобою я відчуваю себе потрібним.",
    "За твою цікавість до світу.",
    "За твою фантазію і незвичайний погляд на речі.",
    "За те, як ти вмієш перетворити дрібницю на пригоду.",
    "За кожне «я скучила» і кожне «я тебе кохаю».",
    "За те, що ми можемо разом сміятися до сліз.",
    "За твою підтримку, коли мені непросто.",
    "За те, що ти не боїшся говорити зі мною відверто.",
    "За бажання разом знаходити вихід, а не шукати винних.",
    "За те, що ми вчимося розуміти одне одного краще.",
    "За всі місця, які тепер асоціюються в мене з тобою.",
    "За фотографії, на яких я бачу наше щастя.",
    "За спогади, які ми створили за ці два роки.",
    "За те, що наша історія має власні слова, жарти й символи.",
    "За твою любов до милих і красивих речей.",
    "За те, як ти можеш зробити день святковим без особливого приводу.",
    "За твої несподівані ідеї.",
    "За твоє вміння помічати красу в деталях.",
    "За те, що ти надихаєш мене ставати кращим.",
    "За те, що я хочу ділитися з тобою своїми перемогами.",
    "За те, що в складні моменти мені важливо тримати тебе за руку.",
    "За кожну мить, коли ми дивимося в одному напрямку.",
    "За твою терплячість до моїх недосконалостей.",
    "За те, що ти можеш сказати правду, навіть коли це непросто.",
    "За твою здатність пробачати й починати розмову знову.",
    "За те, що ми можемо бути командою.",
    "За твою присутність, яка іноді важливіша за будь-які слова.",
    "За те, як ти радієш нашим маленьким перемогам.",
    "За кожну мить, коли я ловлю себе на думці, що мені пощастило.",
    "За те, що мені хочеться берегти твою усмішку.",
    "За твої теплі руки.",
    "За твою сонну усмішку і затишні обійми.",
    "За наші довгі розмови, після яких не хочеться завершувати дзвінок.",
    "За те, що навіть відстань не робить тебе менш близькою.",
    "За очікування зустрічі, яке нагадує, наскільки ти мені дорога.",
    "За кожне наше примирення, після якого ми краще розуміємо одне одного.",
    "За те, що з тобою я відкриваю в собі нові сторони.",
    "За твою індивідуальність — ти не схожа ні на кого.",
    "За те, що я кохаю не вигаданий образ, а справжню тебе.",
    "За твої захоплення, навіть якщо вони відрізняються від моїх.",
    "За те, що ми можемо вчитися одне в одного.",
    "За твою здатність дивувати мене.",
    "За кожну дрібницю, яку ти робиш від щирого серця.",
    "За те, що ти пам’ятаєш важливе для мене.",
    "За те, що я теж хочу пам’ятати важливе для тебе.",
    "За наші спільні плани, навіть найсміливіші.",
    "За майбутні подорожі, які я мрію пережити з тобою.",
    "За думку про те, скільки ще всього ми можемо побачити разом.",
    "За те, що слово «разом» із тобою звучить особливо.",
    "За твою здатність зробити мене спокійнішим одним дотиком.",
    "За те, що я хочу бути твоєю підтримкою, а не лише отримувати її.",
    "За те, що ти довіряєш мені свої переживання.",
    "За кожну нашу маленьку традицію.",
    "За те, що ми створюємо власний світ із простих моментів.",
    "За твою красу — і зовнішню, і ту, що проявляється у вчинках.",
    "За те, що я досі хвилююся перед особливими для нас моментами.",
    "За те, що після двох років мені все ще хочеться залицятися до тебе.",
    "За те, що я хочу знову і знову запрошувати тебе на побачення.",
    "За наші маленькі пригоди, про які знатимемо лише ми.",
    "За те, що ти робиш мої спогади теплішими.",
    "За те, що поруч із тобою хочеться будувати плани, а не просто мріяти.",
    "За те, що я можу уявити з тобою безліч майбутніх свят.",
    "За те, що ти — людина, якій я хочу першій розповідати хороші новини.",
    "За те, що я хочу бути поруч і в прості, і в непрості дні.",
    "За те, що ти вчиш мене уважніше ставитися до почуттів.",
    "За кожну мить, коли ми обираємо одне одного.",
    "За те, що наша любов складається не лише зі свят, а й із буднів.",
    "За те, що я хочу дізнаватися тебе все більше, навіть через багато років.",
    "За ці два роки, які стали важливою частиною мого життя.",
    "За всі історії, які ми ще не встигли прожити.",
    "За те, що це саме ти, Марино. І за те, що це саме ми."
  ],

  letters: {
    sad: [
      'Коли тобі сумно',
      'Якби я міг зараз бути поруч, то міцно обійняв би тебе й нагадав: ти неймовірна. Не потрібно завжди бути сильною. Я поруч, я на твоєму боці, і ти дуже дорога мені.'
    ],
    miss: [
      'Коли сумуєш за мною',
      'Заплющ очі й уяви, що я обіймаю тебе. Відстань не змінює того, як сильно я хочу бути поруч. Скоро будуть наші обійми, поцілунки й звичайні щасливі хвилини разом.'
    ],
    fight: [
      'Коли ми посварилися',
      'Ми можемо не погоджуватися, помилятися й іноді не знаходити потрібних слів. Але для мене важливіші за будь-яку суперечку — ти, ми й те, що ми будуємо разом. Я хочу чути тебе й знаходити рішення поруч із тобою.'
    ],
    random: [
      'Просто так',
      'Немає особливої причини. Просто посеред звичайного дня я знову подумав про тебе й захотів нагадати: я дуже тебе кохаю. Дякую, що ти є в моєму житті.'
    ]
  },

  quiz: [
    { q: 'Коли ми познайомилися?', a: ['06.11.2024', '19.10.2024', '03.03.2025'], correct: 1 },
    { q: 'Коли почалася наша історія?', a: ['06.11.2024', '20.05.2025', '19.10.2024'], correct: 0 },
    { q: 'Коли я зробив тобі пропозицію?', a: ['20.05.2025', '19.10.2024', '03.03.2025'], correct: 2 },
    { q: 'Коли ми розписалися?', a: ['03.03.2025', '20.05.2025', '06.11.2024'], correct: 1 }
  ],

  correctMessages: [
    'Саме так! Ти пам’ятаєш нашу історію. ♥',
    'Моя ти умнічка ♥',
    'Моя солоденька ♥',
    'Ти найкраща ♥'
  ]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function updateCounter() {
  const start = new Date(CONFIG.startDate);
  const now = new Date();
  let diff = Math.max(0, now - start);

  const days = Math.floor(diff / 86400000);
  diff %= 86400000;
  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;
  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  $('#days').textContent = days.toLocaleString('uk-UA');
  $('#hours').textContent = String(hours).padStart(2, '0');
  $('#minutes').textContent = String(minutes).padStart(2, '0');
  $('#seconds').textContent = String(seconds).padStart(2, '0');
}

updateCounter();
setInterval(updateCounter, 1000);

addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  $('#reading-progress').style.width =
    (max > 0 ? scrollY / max * 100 : 0) + '%';
}, { passive: true });

$('#menu-toggle').addEventListener('click', () => {
  $('#main-nav').classList.toggle('open');
});

$$('#main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    $('#main-nav').classList.remove('open');
  });
});

const reasonGrid = $('#heart-grid');
const openedReasons = new Set(
  JSON.parse(localStorage.getItem('our730openedReasons') || '[]')
);

function updateReasonProgress() {
  $('#reason-count').textContent = `Відкрито ${openedReasons.size} із 100`;
  $('#reason-progress-fill').style.width = openedReasons.size + '%';
}

for (let i = 1; i <= 100; i++) {
  const button = document.createElement('button');
  button.className = 'heart-tile';
  button.textContent = '♥';
  button.setAttribute('aria-label', `Відкрити причину ${i}`);

  if (openedReasons.has(i)) button.classList.add('opened');

  button.addEventListener('click', () => {
    $('#reason-title').textContent = `Причина №${i}`;
    $('#reason-text').textContent = CONFIG.reasons[i - 1];
    $('#reason-dialog').showModal();

    if (!openedReasons.has(i)) {
      openedReasons.add(i);
      button.classList.add('opened');
      localStorage.setItem(
        'our730openedReasons',
        JSON.stringify([...openedReasons])
      );
      updateReasonProgress();
    }
  });

  reasonGrid.appendChild(button);
}

updateReasonProgress();

$$('.letter-card').forEach(card => {
  card.addEventListener('click', () => {
    const [title, text] = CONFIG.letters[card.dataset.letter];
    $('#letter-title').textContent = title;
    $('#letter-text').textContent = text;
    $('#letter-dialog').showModal();
  });
});

$$('[data-close]').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('dialog').close();
  });
});

$$('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
});

// ГАЛЕРЕЯ: виправлене завантаження фотографій.
$$('.photo-card').forEach(card => {
  const img = new Image();
  const originalPath = card.dataset.photo;
  const basePath = originalPath.replace(/\.[^.]+$/, '');
  const extensions = ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG', 'webp', 'WEBP'];
  let extensionIndex = 0;

  // Важливо: не використовуємо lazy для зображення,
  // яке ще не додане на сторінку.
  img.loading = 'eager';
  img.decoding = 'async';
  img.alt = card.querySelector('.photo-caption')?.textContent || 'Наш спогад';

  function tryNextImage() {
    if (extensionIndex >= extensions.length) {
      const placeholder = card.querySelector('.photo-placeholder');
      if (placeholder) {
        placeholder.innerHTML = '♡<small>не вдалося завантажити фото</small>';
      }
      return;
    }

    img.src = `${basePath}.${extensions[extensionIndex++]}`;
  }

  img.onload = () => {
    card.querySelector('.photo-placeholder')?.remove();
    card.querySelector('img')?.remove();
    card.prepend(img);
  };

  img.onerror = tryNextImage;

  card.addEventListener('click', () => {
    const current = card.querySelector('img');
    if (!current) return;

    $('#modal-photo').src = current.src;
    $('#modal-photo-caption').textContent =
      card.querySelector('.photo-caption').textContent;
    $('#photo-dialog').showModal();
  });

  tryNextImage();
});

let quizIndex = 0;

$('#start-quiz').addEventListener('click', () => {
  quizIndex = 0;
  $('#quiz-area').hidden = false;
  renderQuestion();
});

function renderQuestion() {
  const area = $('#quiz-area');
  const item = CONFIG.quiz[quizIndex];

  if (!item) {
    area.innerHTML = `
      <p class="quiz-feedback">
        Ти пройшла нашу маленьку вікторину!
        Я пишаюся тобою, Сонечко. ♥
      </p>
      <button class="secondary-button" id="restart-quiz">
        Пройти ще раз ♡
      </button>
    `;

    $('#restart-quiz').addEventListener('click', () => {
      quizIndex = 0;
      renderQuestion();
    });
    return;
  }

  area.innerHTML = `
    <div class="quiz-question">${item.q}</div>
    <div class="quiz-options">
      ${item.a.map((answer, index) =>
        `<button data-answer="${index}">${answer}</button>`
      ).join('')}
    </div>
    <div class="quiz-feedback" aria-live="polite"></div>
  `;

  $$('.quiz-options button', area).forEach(button => {
    button.addEventListener('click', () => {
      const isCorrect = Number(button.dataset.answer) === item.correct;
      const feedback = $('.quiz-feedback', area);

      if (isCorrect) {
        const randomIndex = Math.floor(
          Math.random() * CONFIG.correctMessages.length
        );
        feedback.textContent = CONFIG.correctMessages[randomIndex];
      } else {
        feedback.textContent =
          'Трішечки не так, моя солоденька. Але нічого — спробуй наступне питання. ♥';
      }

      $$('.quiz-options button', area).forEach(option => {
        option.disabled = true;
        if (Number(option.dataset.answer) === item.correct) {
          option.classList.add('correct');
        }
      });

      const next = document.createElement('button');
      next.className = 'secondary-button';
      next.textContent = 'Далі';
      next.style.marginTop = '18px';
      next.addEventListener('click', () => {
        quizIndex++;
        renderQuestion();
      });
      area.appendChild(next);
    });
  });
}

function addDream(text) {
  if (!text.trim()) return;

  const label = document.createElement('label');
  label.className = 'dream-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const mark = document.createElement('span');
  mark.className = 'checkmark';

  const title = document.createElement('span');
  title.textContent = text;

  const tag = document.createElement('small');
  tag.textContent = 'наша мрія';

  label.append(checkbox, mark, title, tag);
  $('.dream-board').insertBefore(label, $('.add-dream'));
  saveDreams();
}

function saveDreams() {
  const dreams = $$('.dream-item').map(item => ({
    text: item.querySelector('span:nth-of-type(2)').textContent,
    done: item.querySelector('input').checked
  }));
  localStorage.setItem('our730dreams', JSON.stringify(dreams));
}

function loadDreams() {
  try {
    const dreams = JSON.parse(
      localStorage.getItem('our730dreams') || '[]'
    );

    dreams.forEach(dream => {
      addDream(dream.text);
      const last = $$('.dream-item').at(-1);
      if (last) last.querySelector('input').checked = dream.done;
    });
  } catch (error) {
    console.warn('Не вдалося завантажити мрії:', error);
  }
}

$('.dream-board').addEventListener('change', event => {
  if (event.target.matches('.dream-item input')) saveDreams();
});

loadDreams();

$('#add-dream').addEventListener('click', () => {
  const input = $('#dream-input');
  addDream(input.value);
  input.value = '';
});

$('#dream-input').addEventListener('keydown', event => {
  if (event.key === 'Enter') $('#add-dream').click();
});

$('#reveal-message').addEventListener('click', () => {
  $('#hidden-message').hidden = false;
  $('#reveal-message').textContent = 'Я кохаю тебе ♥';
  $('#hidden-message').scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
});

const music = $('#background-music');
const musicButton = $('#music-toggle');
let playing = false;

musicButton.addEventListener('click', async () => {
  try {
    if (!playing) {
      await music.play();
      playing = true;
      musicButton.textContent = '♫';
      musicButton.setAttribute('aria-label', 'Вимкнути музику');
    } else {
      music.pause();
      playing = false;
      musicButton.textContent = '♪';
      musicButton.setAttribute('aria-label', 'Увімкнути музику');
    }
  } catch (error) {
    musicButton.title = 'Перевір файл assets/our-song.mp3';
  }
});
