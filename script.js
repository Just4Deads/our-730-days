// Персоналізація сайту зібрана тут: дата, імена, причини, листи та запитання.
const CONFIG = {
  startDate: '2024-11-06T00:00:00',
  displayNames: { you: 'Іван', partner: 'Марина' },
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
    "За те, як ти притуляєшся до мене.",
    "За наші ранки й вечори, які належать нам.",
    "За те, що поруч із тобою я відчуваю себе потрібним.",
    "За твою цікавість до світу.",
    "За твою фантазію і незвичайний погляд на речі.",
    "За те, як ти вмієш перетворити дрібницю на пригоду.",
    "За кожне «я скучила» і кожне «я тебе люблю».",
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
    "За те, що я люблю не вигаданий образ, а справжню тебе.",
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
    sad: ['Коли тобі сумно', 'Якби я міг зараз бути поруч, то міцно обійняв би тебе й нагадав: ти неймовірна. Не потрібно завжди бути сильною. Я поруч, я на твоєму боці, і ти дуже-дуже люблена.'],
    miss: ['Коли сумуєш за мною', 'Заплющ очі й уяви, що я обіймаю тебе. Відстань не змінює того, як сильно я хочу бути поруч. Скоро будуть наші обійми, поцілунки й звичайні щасливі хвилини разом.'],
    fight: ['Коли ми посварилися', 'Ми можемо не погоджуватися, помилятися й іноді не знаходити потрібних слів. Але для мене важливіші за будь-яку суперечку — ти, ми й те, що ми будуємо разом. Я хочу чути тебе й знаходити рішення поруч із тобою.'],
    random: ['Просто так', 'Немає особливої причини. Просто посеред звичайного дня я знову подумав про тебе й захотів нагадати: я дуже тебе люблю. Дякую, що ти є в моєму житті.']
  },
  quiz: [
    { q: 'Яка дата стала початком нашої історії?', a: ['06.11.2024', '14.02.2025', '01.01.2024'], correct: 0 }
  ]
};

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

function updateCounter(){
  const start = new Date(CONFIG.startDate);
  const now = new Date();
  let diff = Math.max(0, now - start);
  const days = Math.floor(diff / 86400000); diff %= 86400000;
  const hours = Math.floor(diff / 3600000); diff %= 3600000;
  const minutes = Math.floor(diff / 60000); const seconds = Math.floor((diff % 60000) / 1000);
  $('#days').textContent = days.toLocaleString('uk-UA');
  $('#hours').textContent = String(hours).padStart(2,'0');
  $('#minutes').textContent = String(minutes).padStart(2,'0');
  $('#seconds').textContent = String(seconds).padStart(2,'0');
}
updateCounter(); setInterval(updateCounter,1000);

// Плавний індикатор прокручування.
addEventListener('scroll',()=>{
  const max=document.documentElement.scrollHeight-innerHeight;
  $('#reading-progress').style.width=(max>0?scrollY/max*100:0)+'%';
},{passive:true});

// Мобільне меню.
$('#menu-toggle').addEventListener('click',()=>$('#main-nav').classList.toggle('open'));
$$('#main-nav a').forEach(a=>a.addEventListener('click',()=>$('#main-nav').classList.remove('open')));

// Причини кохання: перші 10 текстів можна персоналізувати в CONFIG.reasons.
const reasonGrid=$('#heart-grid'); let opened=0; const openedReasons=new Set(JSON.parse(localStorage.getItem('our730openedReasons')||'[]'));
function updateReasonProgress(){opened=openedReasons.size;$('#reason-count').textContent=`Відкрито ${opened} із 100`;$('#reason-progress-fill').style.width=opened+'%';}
for(let i=1;i<=100;i++){
  const b=document.createElement('button'); b.className='heart-tile'; b.textContent='♥'; b.setAttribute('aria-label',`Відкрити причину ${i}`);
  b.addEventListener('click',()=>{
    const text=CONFIG.reasons[i-1];
    $('#reason-title').textContent=`Причина №${i}`; $('#reason-text').textContent=text;
    $('#reason-dialog').showModal();
    if(!b.classList.contains('opened')){b.classList.add('opened');openedReasons.add(i);localStorage.setItem('our730openedReasons',JSON.stringify([...openedReasons]));updateReasonProgress();}
  }); if(openedReasons.has(i))b.classList.add('opened'); reasonGrid.appendChild(b);
}
updateReasonProgress();

// Листи.
$$('.letter-card').forEach(card=>card.addEventListener('click',()=>{
  const [title,text]=CONFIG.letters[card.dataset.letter]; $('#letter-title').textContent=title; $('#letter-text').textContent=text; $('#letter-dialog').showModal();
}));
$$('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
$$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close();}));

// Галерея: якщо покласти фото в assets із зазначеними назвами, вони з'являться замість макетів.
$$('.photo-card').forEach((card,index)=>{
  const path=card.dataset.photo; const img=new Image(); img.loading='lazy'; img.decoding='async'; img.alt=card.querySelector('.photo-caption').textContent; img.src=path;
  img.onload=()=>{card.querySelector('.photo-placeholder')?.remove();card.prepend(img);};
  img.onerror=()=>{const placeholder=card.querySelector('.photo-placeholder'); if(placeholder) placeholder.innerHTML='♡<small>не вдалося завантажити фото</small>';};
  card.addEventListener('click',()=>{
    const current=card.querySelector('img'); if(!current)return;
    $('#modal-photo').src=current.src; $('#modal-photo-caption').textContent=card.querySelector('.photo-caption').textContent; $('#photo-dialog').showModal();
  });
});

// Вікторина.
let quizIndex=0;
$('#start-quiz').addEventListener('click',()=>{quizIndex=0;$('#quiz-area').hidden=false;renderQuestion();});
function renderQuestion(){
  const area=$('#quiz-area'); const item=CONFIG.quiz[quizIndex];
  if(!item){area.innerHTML='<p class="quiz-feedback">Ти пройшла нашу маленьку вікторину! А справжніх спогадів у нас іще більше. ♥</p>';return;}
  area.innerHTML=`<div class="quiz-question">${item.q}</div><div class="quiz-options">${item.a.map((x,i)=>`<button data-answer="${i}">${x}</button>`).join('')}</div><div class="quiz-feedback" aria-live="polite"></div>`;
  $$('.quiz-options button',area).forEach(btn=>btn.addEventListener('click',()=>{
    const good=Number(btn.dataset.answer)===item.correct; $('.quiz-feedback',area).textContent=good?'Саме так! Ти пам’ятаєш нашу історію. ♥':'Не страшно — головне, що ми створюємо її разом. ♡';
    $$('.quiz-options button',area).forEach(x=>x.disabled=true);
    const next=document.createElement('button');next.className='secondary-button';next.textContent='Далі';next.style.marginTop='18px';next.onclick=()=>{quizIndex++;renderQuestion();};area.appendChild(next);
  }));
}

// Список мрій зберігається в браузері на цьому пристрої.
function addDream(text){
  if(!text.trim())return;const label=document.createElement('label');label.className='dream-item';
  const input=document.createElement('input');input.type='checkbox';const mark=document.createElement('span');mark.className='checkmark';const title=document.createElement('span');title.textContent=text;const tag=document.createElement('small');tag.textContent='наша мрія';
  label.append(input,mark,title,tag);$('.dream-board').insertBefore(label,$('.add-dream'));saveDreams();
}
function saveDreams(){localStorage.setItem('our730dreams',JSON.stringify($$('.dream-item').map(x=>({text:x.querySelector('span:nth-of-type(2)').textContent,done:x.querySelector('input').checked}))));}
function loadDreams(){try{const data=JSON.parse(localStorage.getItem('our730dreams')||'[]');data.forEach(d=>{addDream(d.text);const last=$$('.dream-item').at(-1);last.querySelector('input').checked=d.done;});}catch{}}
$('.dream-board').addEventListener('change',e=>{if(e.target.matches('.dream-item input'))saveDreams();});loadDreams();
$('#add-dream').addEventListener('click',()=>{const input=$('#dream-input');addDream(input.value);input.value='';});
$('#dream-input').addEventListener('keydown',e=>{if(e.key==='Enter')$('#add-dream').click();});

// Фінальне послання.
$('#reveal-message').addEventListener('click',()=>{$('#hidden-message').hidden=false;$('#reveal-message').textContent='Я люблю тебе ♥';$('#hidden-message').scrollIntoView({behavior:'smooth',block:'center'});});

// Фонова музика запускається лише після натискання користувача.
const music=$('#background-music');const musicButton=$('#music-toggle');let playing=false;
musicButton.addEventListener('click',async()=>{try{if(!playing){await music.play();playing=true;musicButton.textContent='♫';musicButton.setAttribute('aria-label','Вимкнути музику');}else{music.pause();playing=false;musicButton.textContent='♪';musicButton.setAttribute('aria-label','Увімкнути музику');}}catch{musicButton.title='Додай файл assets/our-song.mp3';}});


// Таємна кімната: дата початку стосунків відкриває полювання на три зірочки.
const secretForm=$('#secret-code-form');
secretForm.addEventListener('submit',e=>{
  e.preventDefault();
  const code=$('#secret-code').value.replace(/\D/g,'');
  if(code==='06112024'){
    $('#secret-lock').hidden=true;
    $('#secret-unlocked').hidden=false;
    localStorage.setItem('our730secretUnlocked','yes');
    refreshSecretStars();
  }else{
    $('#secret-code-feedback').textContent='Майже! Згадай день, коли ми стали «ми». ♥';
  }
});
if(localStorage.getItem('our730secretUnlocked')==='yes'){
  $('#secret-lock').hidden=true;$('#secret-unlocked').hidden=false;
}
const foundStars=new Set(JSON.parse(localStorage.getItem('our730stars')||'[]'));
function refreshSecretStars(){
  $$('[data-secret-star]').forEach(btn=>{const id=Number(btn.dataset.secretStar);if(foundStars.has(id))btn.classList.add('found');});
  $('#star-count').textContent=`Знайдено ${foundStars.size} із 3`;
  $('#star-progress-fill').style.width=(foundStars.size/3*100)+'%';
  if(foundStars.size===3){$('#secret-prize').hidden=false;$('#star-feedback').textContent='Усі зірочки на місці. Цей сюрприз — твій!';}
}
$$('[data-secret-star]').forEach(btn=>btn.addEventListener('click',()=>{
  if($('#secret-unlocked').hidden){btn.classList.add('star-hint');return;}
  foundStars.add(Number(btn.dataset.secretStar));
  localStorage.setItem('our730stars',JSON.stringify([...foundStars]));
  refreshSecretStars();
  btn.classList.add('found');
}));
refreshSecretStars();

const promises=[
  'Обіцяю й надалі знаходити час лише для нас, навіть серед найзавантаженіших днів.',
  'Обіцяю частіше нагадувати тобі, яка ти прекрасна для мене.',
  'Обіцяю слухати тебе уважно — не лише слова, а й те, що за ними.',
  'Обіцяю не забувати про маленькі побачення без особливого приводу.',
  'Обіцяю підтримувати твої мрії так само щиро, як свої.',
  'Обіцяю берегти наші традиції й вигадувати нові.',
  'Обіцяю частіше обіймати тебе просто так.',
  'Обіцяю пам’ятати, що ми — одна команда.',
  'Обіцяю не припиняти дізнаватися тебе й закохуватися в тебе по-новому.',
  'Обіцяю обирати нас не лише у свята, а й у звичайні дні.'
];
$('#promise-button').addEventListener('click',()=>{
  const last=Number(sessionStorage.getItem('our730promise')||-1);
  let next=Math.floor(Math.random()*promises.length);
  if(promises.length>1&&next===last)next=(next+1)%promises.length;
  sessionStorage.setItem('our730promise',String(next));
  $('#promise-text').textContent=promises[next];
});
