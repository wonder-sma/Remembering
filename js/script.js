const voc = {'for': 'для, на, за, в, к, в течение, ради', 'ill': 'больной, плохо, дурно', 'way': 'способ, путь, дорога, метод', 'lie': 'лежать, лгать, находиться', 'joy': 'радость, утеха, удовольствие, веселье', 'via': 'через', 'let': 'препятствовать, позволять, пускать, давать', 'hit': 'хит, удар, попадание, успех, ударять, бить, поражать, отправиться, прибыть, доехать, добраться, появиться', 'out': 'из, вне, за', 'too': 'тоже, слишком, также, очень, чересчур', 'fee': 'плата, платеж, гонорар, сбор, пошлина, взнос', 'that': 'то, тот, который, что, чтобы, так, до такой степени', 'fill': 'заполнение, заполнять', 'grab': 'схватить, захватывать, захват', 'calm': 'спокойствие, спокойный, успокаивать', 'mean': 'означать, значить, среднее значение, средний', 'then': 'тогда, затем, потом', 'than': 'чем, кроме, как', 'tend': 'склоняться, иметь тенденцию', 'even': 'даже, ровно, точно, выровнять, выравнивать', 'pass': 'проходить, проход, пас, передача', 'seek': 'искать, стремиться, добиваться, просить, обращаться', 'pain': 'боль, страдание', 'wear': 'износ, одежда, носить, одевать', 'some': 'некоторые(мест.), несколько, немного, некоторый(прилаг.)', 'whom': 'кого, кому, которого', 'join': 'присоединиться, вступать, соединять, соединение', 'over': 'над, за, по, на, свыше, через', 'mood': 'настроение', 'none': 'никто, ни один, ничто, совсем не', 'bill': 'счет, законопроект', 'obey': 'повиноваться, подчиняться, слушаться', 'tail': 'хвост, хвостовой, задний', 'such': 'такие, такой', 'same': 'тот же, то же, та же, то же самое, тот же самый, одинаковый, так же', 'hire': 'прокат, наем, нанимать', 'mess': 'беспорядок, бардак, путаница', 'lend': 'давать в долг, предоставлять, давать, одалживать', 'rude': 'грубый, неприличный, невежливый, невоспитанный', 'face': 'лицо, грань, лик, сталкиваться', 'near': 'возле, около, у, близ, недалеко, почти', 'sore': 'больной, воспаленный, рана, тяжко', 'pity': 'жалость, сострадание, сожаление, жалеть', 'urge': 'побуждать, убеждать, побуждение', 'hope': 'надежда, надеяться', 'sick': 'больной, больные, болезнь', 'type': 'тип, модель, напечатать', 'care': 'заботиться, ухаживать, уход, забота', 'yard': 'двор, ярд', 'mind': 'ум, разум, возражать', 'last': 'последний, прошлый, длиться, продолжаться, продлиться, в последний раз, на последнем месте', 'seem': 'казаться', 'poor': 'бедные, беднота, жалкий, убогий, бедняк', 'sigh': 'вздох, вздыхать', 'loaf': 'буханка, каравай, булка, склоняться, бездельничать', 'meal': 'еда, блюдо', 'feed': 'кормить, питаться, корм', 'earn': 'зарабатывать', 'hint': 'намек, подсказка, намекать', 'fire': 'пожар, огонь, стрелять, выстрелить, увольнять', 'pant': 'штаны, тяжелое дыхание, пыхтение, задыхаться, пыхтеть', 'crap': 'дерьмо, чепуха, гадить, срать', 'sack': 'мешок, увольнять, постель', 'dirt': 'грязь', 'once': 'однажды, один раз, как только', 'else': 'еще, иначе', 'late': 'поздно, поздний, опаздывающий', 'kind': 'своего рода, добрый, вид, тип, род, разновидность', 'wish': 'желание, пожелание, желать, захотеть', 'fair': 'справедливый, ярмарка', 'term': 'срок, условие, термин', 'gulp': 'глоток, глотать, глотательное движение', 'dawn': 'рассвет, заря, светать, рассветать', 'odor': 'запах, душок', 'rely': 'полагаться', 'serve': 'служить, обслуживать, подавать', 'pride': 'гордость, гордиться', 'reach': 'охват, досягаемость, достигать, связаться, доходить', 'fully': 'от корки до корки, полностью', 'loud ': 'громкий, громко', 'creep': 'ползать, ползти, ползучесть', 'enjoy': 'наслаждаться, пользоваться', 'early': 'рано, преждевременно, ранний', 'doubt': 'сомневаться, усомниться, проблемы', 'fetch': 'принести, выбирать, получать', 'merge': 'сливаться, сливать, соединять', 'expel': 'изгонять, высылать, исключать, выгонять', 'shout': 'крик, кричать', 'cause': 'причина, дело, повод, вызывать', 'avoid': 'избегать, избежать, избежание', 'tough': 'жесткий, крутой, грубый, трудный, жестко, грубо', 'alone': 'только, в одиночестве, наедине, одиноко', 'argue': 'спорить, аргументировать, доказывать', 'quite': 'довольно, совсем, совершенно, очень, полностью', 'truly': 'действительно, поистине, истинно, искренне, верно', 'worse': 'хуже, худший, худшее', 'carry': 'нести, проводить, носить, перенос', 'while': 'в то время как, пока, тогда как', 'float': 'плавать, всплывать, поплавок, плавающий', 'allow': 'позволять, допускать, разрешать', 'issue': 'проблема, выпуск, выдавать, издавать', 'bring': 'приносить, приводить, доводить,', 'renew': 'возобновить, обновлять, возобновлять, продлить срок действия, перезаключать, заменять новым', 'awake': 'проснуться, пробудиться, бодрствующий', 'dirty': 'грязный', 'hurry': 'торопиться, торопить, спешка, торопливость', 'which': 'который, какой, каковой', 'raise': 'подъем, повышение, поднимать, повышать, растить', 'blind': 'слепой, слепить, ослеплять', 'whole': 'целый, весь, целое, все', 'along': 'вдоль, вместе, с собой, по', 'laugh': 'смеяться, смех', 'spill': 'пролить, проливать, пролитие', 'order': 'заказ, приказ, распоряжение, порядок', 'spare': 'запасной, свободный, лишний, щадить, жалеть', 'aware': 'осведомленный', 'found': 'основывать, основываться, обосновывать, закладывать, учреждать, найденный', 'as if': 'будто, как будто, словно', 'apart': 'отдельно, обособленно, на части, порознь', 'aloof': 'в стороне, поодаль, отчужденно, в отдалении, отчужденный', 'worry': 'волноваться, беспокоиться, беспокоить, беспокойство', 'hover': 'зависать, колебаться, парение', 'asset': 'ресурс, актив', 'waste': 'трата, отходы, терять, тратить впустую', 'below': 'ниже, под, внизу', 'above': 'выше, над, свыше', 'state': 'состояние, государство, государственный, констатировать', 'claim': 'требовать, претендовать, утверждать, требование, иск', 'handy': 'удобный для использования, доступный, легко управляемый, полезный, портативный', 'taste': 'вкус, пробовать на вкус, отведывать, дегустировать', 'stare': 'пялиться, глазеть, пристальный взгляд', 'decent': 'приличный, достойный', 'likely': 'вероятно, вероятный', 'advice': 'совет, консультация', 'remain': 'оставаться, продержаться, пребывать на прежнем месте', 'direct': 'непосредственный, прямой, направлять, прямо', 'scream': 'вопль, крикнуть', 'branch': 'филиал, ветвь, отделение, разветвляться, расширяться', 'though': 'хотя, однако, несмотря на, если бы, даже, тем не менее', 'insane': 'безумный, душевнобольной, ненормальный', 'refuse': 'мусор, отходы, отбросы, отказывать, отказываться', 'escape': 'побег, выход, бегство, бежать', 'borrow': 'заимствовать, занимать', 'insult': 'оскорблять, обижать, оскорбление, инсульт, обида', 'famous': 'известный, знаменитый', 'couple': 'пара, два', 'retire': 'уходить, удаляться, уходить в отставку', 'abroad': 'за границу, заграница', 'no one': 'ни один, никто, никого', 'barely': 'едва, только, лишь, просто', 'hardly': 'вряд ли, чуть, едва, едва ли, с трудом, еле', 'seldom': 'редко', 'buried': 'похороненный, похоронен', 'behave': 'вести себя, поступать', 'jungle': 'джунгли, дебри', 'unless': 'если только, если не, пока не', 'almost': 'почти, едва не', 'guilty': 'виновный, виноватый', 'candle': 'свеча, свечка', 'prefer': 'предпочитаю, предпочтительный', 'pretty': 'довольно, достаточно, вполне, хорошенький, прелестный', 'booked': 'забронированный, заказанный', 'spread': 'распространение, распространять, распространенный', 'salary': 'зарплата, оклад, жалованье', 'enough': 'достаточно, довольно, достаточное количество', 'affair': 'дело', 'manage': 'управлять, руководить, справляться', 'demand': 'потребность, спрос, требование, требовать', 'proper': 'надлежащий, правильный, собственный, подходящий', 'entire': 'весь, целый, полный, целое', 'afford': 'позволить себе', 'punish': 'наказать, наказывать, карать', 'target': 'цель, мишень', 'assign': 'назначать, присваивать', 'expect': 'ожидать, рассчитывать', 'inform': 'сообщить, информировать', 'severe': 'суровый', 'gather': 'собирать, собираться, почерпнуть', 'afraid': 'боюсь, боящийся', 'sudden': 'внезапный', 'exceed': 'превышать, превосходить', 'notice': 'замечать, уведомление, извещение', 'quirky': 'странный, необычный, причудливый, изворотливый', 'attend': 'присутствовать, посещать', 'rather': 'скорее, довольно, вернее', 'desert': 'пустыня, пустынный, необитаемый', 'rescue': 'спасение, спасание, спасать', 'bundle': 'пучок, вязанка, сверток', 'amount': 'количество, сумма', 'offset': 'смещение, офсет, компенсировать', 'speech': 'речь, речевой, слова, выступление', 'honest': 'честный, откровенный, искренний', 'beyond': 'за пределами, за, вне', 'revoke': 'отозвать, аннулировать, отменять, брать назад', 'depend': 'зависеть, полагаться, рассчитывать', 'mutual': 'взаимный, общий, обоюдный', 'agency': 'агенство, орган, представительство', 'indeed': 'действительно', 'aspire': 'стремиться', 'deeper': 'глубже, более глубокий', 'evenly': 'гладко, ровно, равномерно', 'flavor': 'вкус, аромат, привкус', 'appeal': 'апелляция, обращение, призыв, обжалование, обращаться, апеллировать, взывать', 'put up': 'мириться, терпеть, вкладывать, ставить', 'belief': 'вера, убеждение, мнение, верование', 'chamber': 'камера, заключать в камеру', 'society': 'общество, организация', 'convict': 'признать виновным, осужденный, осуждать', 'suppose': 'предполагать, полагать, допускать', 'concern': 'беспокойство, забота, касаться, относиться', 'used to': 'привык к', 'certain': 'определенный, некоторый, некий', 'inhabit': 'заселять, обитать, населять', 'go over': 'переходить', 'destiny': 'судьба, предназначение, удел', 'express': 'выражать, экспресс', 'improve': 'улучшать, совершенствовать, улучшаться', 'in fact': 'фактически, на самом деле, по сути', 'abandon': 'отказываться от', 'through': 'через, посредством, сквозь, благодаря', 'furious': 'яростный, бешенный', 'neither': 'ни один, никто, никакой, также не, тоже не', 'nothing': 'ничего, ничто', 'journey': 'путешествие, поездка', 'exactly': 'ровно, точно, именно, как раз', 'ancient': 'древний, старинный, старый, античный', 'quarrel': 'ссориться, спорить, ссора', 'set off': 'отправляться, намереваться, выделять, компенсировать', 'charity': 'благотворительность, милосердие', 'pick up': 'подбирать, забрать, подобрать, поднимать, подхватить', 'luggage': 'багаж, багажный (именно про поклажу)', 'take up': 'начать, занимать, браться за, поднимать', 'jealous': 'ревнивый, завистливый', 'meet up': 'встретиться', 'another': 'другой, иной, еще один', 'as well': 'также, кроме того, с таким же успехом', 'provide': 'предоставлять, обеспечивать, предусматривать', 'exclaim': 'воскликнуть, воскликать, ахать', 'receive': 'получать, принимать', 'peasant': 'крестьянин, крестьянский', 'inquire': 'спрашивать, исследовать', 'suggest': 'предложить, предлагать', 'instead': 'вместо, взамен', 'citizen': 'гражданин, горожанин', 'bizarre': 'ненормальный, причудливый, странный, эксцентричный', 'cuisine': 'кухня, кулинарное искусство', 'initial': 'исходный, первоначальный', 'subject': 'подвергать, предмет', 'give up': 'сдаться, отказываться, бросать', 'at once': 'сразу, тотчас, разом', 'mention': 'упомянуть, упоминать, упоминание', 'plumber': 'сантехник, паяльщик', 'deceive': 'обманывать, вводить в заблуждение', 'capture': 'захватывать, взять в плен, захват, поимка, пленение', 'consume': 'потреблять, поглощать', 'respond': 'отвечать, реагировать', 'purpose': 'цель, назначение', 'beneath': 'под, ниже', 'kind of': 'что-то вроде, вроде, типа', 'produce': 'производить, продукт', 'deserve': 'заслуживать, быть достойным', 'careful': 'осторожный, внимательный', 'advance': 'продвигать, продвигаться, двинуться, авансовый, продвижение, наступление, аванс', 'suspend': 'приостановить', 'inspire': 'вдохновлять, воодушевлять, внушать, вселять', 'prevent': 'предотвращать, не допускать', 'achieve': 'достигать, добиваться, успешно выполнять', 'inherit': 'наследовать, унаследовать, перенять, быть наследником', 'foreign': 'иностранный, внешний, зарубежный, чужой', 'harmful': 'вредный, пагубный, губительный', 'further': 'далее, дальше, способствовать, содействовать, дальнейший, добавочный, затем, сверх того, более того', 'perhaps': 'возможно, может быть, пожалуй, авось', 'look-up': 'поиск, просмотр (в словаре, в инструкции, в таблице)', 'look up': 'посмотреть, поискать, поднять глаза, смотреть вверх', 'consent': 'согласие, разрешение, соглашаться, давать согласие', 'passion': 'страсть, увлечение, пыл', 'disease': 'болезнь, заболевание, недуг, вызывать заболевание', 'despite': 'несмотря, вопреки, несмотря на', 'decision': 'решение', 'increase': 'увеличение, рост, увеличивать, расти', 'grow old': 'состариться', 'far away': 'далеко', 'discover': 'открывать, обнаруживать, находить', 'prisoner': 'заключенный, узник, арестованный', 'scarcely': 'едва, едва ли, вряд ли, с трудом, еле', 'find out': 'выяснять, узнавать, понять', 'cemetery': 'кладбище', 'armchair': 'кресло', 'terrible': 'ужасный, страшный', 'relative': 'родственник, родной, относительный', 'postpone': 'откладывать, отсрочивать', 'handsome': 'красивый, статный, щедрый', 'stranger': 'незнакомец, чужой, посторонний человек', 'get lost': 'теряться, заблудиться', 'head out': 'выходить', 'approach': 'подход, подходить, приближаться, приближение', 'carry on': 'вести, продолжать, заниматься', 'knapsack': 'ранец, рюкзак', 'distinct': 'отчетливый, особый, отдельный', 'at least': 'по меньшей мере, по крайней мере', 'announce': 'объявить, огласить, анонсировать', 'universe': 'вселенная, мир', 'obsessed': 'одержимый, помешанный', 'distract': 'отвлекать, уводить в сторону, смущать', 'look for': 'искать, надеяться на, ожидать', 'suddenly': 'вдруг, внезапно', 'midnight': 'полночь, полуночный', 'collapse': 'крах, обвал, крушение, рухнуть', 'lot like': 'очень похоже', 'distrust': 'недоверие, не доверять', 'criminal': 'преступник, преступный, уголовный', 'swindler': 'мошенник, жулик', 'suitable': 'подходящий, соответствующий', 'dedicate': 'посвящать, посветить', 'behavior': 'поведение, режим, поступки', 'polarize': 'поляризовать, разделять на группы / разбивать на противоположные части общество / политику', 'treasure': 'сокровище, хранить как сокровище, высоко ценить', 'complain': 'жаловаться, пожаловаться', 'honestly': 'честно, искренне, правдиво', 'actually': 'фактически, на самом деле', 'exchange': 'обменный, обменивать, обмен, биржа, замена', 'relation': 'связь, отношение, соотношение, зависимость', 'employee': 'работник, служащий', 'ancestor': 'прародитель, предок', 'truncate': 'обрезать, усекать, урезать, сокращать, укорачивать', 'reckless': 'безрассудный, бесшабашный, отчаянный', 'literate': 'грамотный', 'endeavor': 'стараться, прилагать усилия, пытаться, стремление, попытка', 'maintain': 'поддерживать, сохранять (в состоянии), содержать в исправности, удерживать, защищать, отстаивать', 'basically': 'в основном, по существу', 'coherence': 'согласованность, слаженность, связность', 'necessity': 'необходимость', 'as though': 'как будто, как если бы', 'apologize': 'извиняться, просить прощения (официально)', 'got to be': 'должен быть', 'take part': 'принимать участие, участвовать', 'meanwhile': 'тем временем, между тем', 'childhood': 'детство', 'difficult': 'трудно, трудный', 'foreigner': 'иностранец, чужеземец', 'attentive': 'внимательный', 'buckle up': 'пристегнитесь', 'implement': 'осуществлять, выполнять, реализовать', 'treatment': 'обработка, обращение, лечение', 'reference': 'справка, ссылка, упоминание', 'deprecate': 'осуждать, выступать против, протестовать', 'authority': 'орган власти, власть, авторитет, полномочие', 'disappear': 'исчезать, пропадать', 'rejection': 'отказ', 'outskirts': 'окраина', 'conscious': 'сознательный, сознание', 'extensive': 'обширный, подробный', 'necessary': 'нужно, необходимое, необходимый', 'rainy day': 'черный день', 'put apart': 'сберегать, отложить деньги / время', 'dedicated': 'преданный, посвятивший себя', 'gradually': 'постепенно, понемногу', 'undermine': 'подрывать', 'obsession': 'навязчивая идея, одержимость', 'recognize': 'распознавать, признавать', 'statement': 'заявление, утверждение', 'frustrate': 'расстраивать', 'forbidden': 'запретный, запрещенный', 'highlight': 'основной / запоминающийся момент, выделять', 'point out': 'указывать, показывать, обращать внимание', 'influence': 'влияние, воздействие, оказывать влияние, влиять', 'advantage': 'преимущество, перевес, достоинство, превосходство', 'definition': 'определение, четкость, описание, резкость', 'obligation': 'обязательство, обязанность', 'suggestion': 'предложение, внушение, совет', 'excitement': 'волнение, возбуждение', 'by the way': 'кстати, между прочим', 'originally': 'изначально', 'expression': 'выражение', 'each other': 'друг друга', 'be used to': 'иметь привычку (обыкновение) к чему', 'apparently': 'по всей видимости, видимо, очевидно, явно, вероятно', 'beforehand': 'заранее, заблаговременно, наперед', 'invitation': 'приглашение', 'unforeseen': 'непредвиденный', 'courageous': 'смелый, храбрый, отважный', 'deployment': 'развертывание, размещение', 'fractional': 'дробный, фракционный, частичный', 'possession': 'владение, обладание', 'refinement': 'уточнение, изысканность, утонченность', 'respective': 'соответствующий', 'persistent': 'настойчивый, постоянный, стойкий, упорный', 'unemployed': 'безработный, безработные', 'completely': 'полностью, совершенно', 'accidental': 'случайный', 'let you go': 'отпустить тебя', 'well-being': 'благосостояние, благополучие', 'particular': 'редкий, особенный, специфический', 'dedication': 'преданность, самоотверженность', 'themselves': 'сами, себя, себе', 'ridiculous': 'смешной, нелепый, смехотворный', 'unsuitable': 'неподходящий, неподобающий', 'conversion': 'преобразование, превращение, конверсия, переход, изменение, конвертация, пересчет, конверсионный', 'resistible': 'сопротивляемый, отразимый', 'straight up': 'говорить правду, не скрывая ничего / б*я буду / это выражение является утверждением, и показывает, что человек не обманывает', 'many a time': 'много раз', 'hardly ever': 'почти никогда, очень редко', 'considerate': 'внимательный', 'looking for': 'ищущий, находящийся в поиске', 'candlelight': 'при свечах', 'give a lift': 'подвезти', 'be promoted': 'пойти на повышение', 'countryside': 'сельская местность, деревня', 'fortunately': 'к счастью, по счастливой случайности', 'attentively': 'внимательно', 'for a while': 'какое', 'possibility': 'возможность, вероятность', 'affirmative': 'утвердительный, положительный, утверждение', 'handicapped': 'инвалид', 'disappeared': 'исчез, исчезнувший', 'come across': 'натолкнуться', 'went insane': 'сошел с ума', 'taking away': 'забирая, лишая, отнимая', 'another way': 'по-другому, другим способом, другим путем', 'participate': 'принимать участие, участвовать', 'necessarily': 'обязательно, неизбежно, непременно', 'expectation': 'ожидание, надежда', 'recognition': 'признание, распознавание, опознавание, узнавание', 'consecutive': 'последовательный', 'investigate': 'расследовать, исследовать, изучать', 'confidently': 'уверенно', 'distraction': 'отвлечение, рассеянность', 'another one': 'еще один', ' this is it': 'это оно, вот оно, началось, вот и все, больше к этом нечего добавить', 'the same as': 'такой же как', 'my pleasure': 'не за что, мне очень приятно, мне только в радость', 'convenience': 'удобство, комфорт', 'wake-up call': 'будильник', 'good-looking': 'хорошо выглядит', 'relationship': 'отношения, связь, взаимоотношения', 'dissatisfied': 'недовольный, неудовлетворенный', 'the same way': 'таким же образом, тем же путем, того же мнения', 'troubleshoot': 'устранять неполадки, разрешать проблемы', 'on the whole': 'в целом, в общем', 'incorrigible': 'неисправимый, неисправимо', "i don't hurt": 'мне не больно', 'conversation': 'разговор, беседа, переговоры', 'given amount': 'определенный период, определенное количество', 'human beings': 'люди', 'particularly': 'особенно, в частности, в особенности', 'according to': 'согласно, в соответствии с', 'requirements': 'требования', 'disappointed': 'расстроенный, разочарованный, разочаровавшийся', 'all the same': 'все так же, все равно, все-таки', 'whether or no': 'так или иначе, в любом случае', 'i have to say': 'я должен сказать', 'about whether': 'о том, есть ли', 'true strength': 'истинная сила', 'to get better': 'поправляться, улучшаться', 'would do well': 'было бы хорошо', 'circumstances': 'обстоятельства, условия', 'unfortunately': 'к сожалению, к несчастью', 'revolutionary': 'революционный, революционер', 'embarrassment': 'смущение', 'investigation': 'изучение, расследование, следствие', 'the same here': 'то же самое', 'heartbreaking': 'душераздирающий', 'just the same': 'все равно, точно также', "someone else's": 'чужой', 'responsibility': 'обязанность, ответственность', 'have a good one': 'всего хорошего, желаю вам хорошего дня', "let's go for it": 'давай сделаем это', 'i was wondering': 'мне интересно', 'all of a sudden': 'вдруг, внезапно, неожиданно', 'essential thing': 'важная / существенная вещь', 'harder to become': 'труднее стать', 'predetermination': 'предопределение', 'get into trouble': 'попасть в беду', 'going to have to': 'придется', 'stay for a while': 'останься ненадолго', 'residential area': 'жилой район', "I'll do my best to": 'я сделаю все возможное, чтобы', 'get a point across': 'иметь точку зрения, выражать суть, излагать позицию, доносить и выражать мнение', 'has just taken part': 'только что принял участие', 'what are you up to?': 'что ты задумал, что ты делаешь', 'storm out of a room': 'выбегать из комнаты', 'get / become used to': 'привыкнуть к чему', 'get wind of something': 'узнать что', 'things are different now': 'все изменилось с тех пор, сейчас все по-другому', 'what shall we start with': 'с чего бы нам начать', 'as for me / for all i care': 'что касается меня', 'this is what this is about': 'это то о чем идет речь, так вот что это значит, так вот в чем дело', 'that has a decent fat content': 'с приличным содержанием жира', 'not to put too fine a point on': 'откровенно говоря, выражаясь совсем прямо, скажу как есть'};
const arr = ['for', 'ill', 'way', 'lie', 'joy', 'via', 'let', 'hit', 'out', 'too', 'fee', 'that', 'fill', 'grab', 'calm', 'mean', 'then', 'than', 'tend', 'even', 'pass', 'seek', 'pain', 'wear', 'some', 'whom', 'join', 'over', 'mood', 'none', 'bill', 'obey', 'tail', 'such', 'same', 'hire', 'mess', 'lend', 'rude', 'face', 'near', 'sore', 'pity', 'urge', 'hope', 'sick', 'type', 'care', 'yard', 'mind', 'last', 'seem', 'poor', 'sigh', 'loaf', 'meal', 'feed', 'earn', 'hint', 'fire', 'pant', 'crap', 'sack', 'dirt', 'once', 'else', 'late', 'kind', 'wish', 'fair', 'term', 'gulp', 'dawn', 'odor', 'rude', 'rely', 'serve', 'pride', 'reach', 'fully', 'loud ', 'creep', 'enjoy', 'early', 'doubt', 'fetch', 'merge', 'expel', 'shout', 'cause', 'avoid', 'tough', 'alone', 'argue', 'quite', 'truly', 'worse', 'carry', 'while', 'float', 'allow', 'issue', 'serve', 'bring', 'renew', 'awake', 'dirty', 'hurry', 'which', 'raise', 'blind', 'whole', 'along', 'laugh', 'spill', 'order', 'spare', 'aware', 'found', 'as if', 'apart', 'aloof', 'worry', 'hover', 'asset', 'waste', 'below', 'above', 'state', 'claim', 'handy', 'taste', 'stare', 'decent', 'likely', 'advice', 'remain', 'direct', 'scream', 'branch', 'though', 'insane', 'refuse', 'escape', 'borrow', 'insult', 'famous', 'couple', 'retire', 'abroad', 'no one', 'barely', 'hardly', 'seldom', 'borrow', 'buried', 'behave', 'jungle', 'unless', 'almost', 'guilty', 'candle', 'prefer', 'pretty', 'booked', 'behave', 'spread', 'salary', 'enough', 'affair', 'manage', 'demand', 'proper', 'entire', 'afford', 'punish', 'target', 'assign', 'expect', 'inform', 'severe', 'gather', 'afraid', 'sudden', 'exceed', 'notice', 'quirky', 'attend', 'rather', 'desert', 'rescue', 'bundle', 'amount', 'offset', 'speech', 'honest', 'beyond', 'revoke', 'depend', 'mutual', 'agency', 'indeed', 'aspire', 'deeper', 'evenly', 'flavor', 'appeal', 'remain', 'put up', 'belief', 'chamber', 'society', 'convict', 'suppose', 'concern', 'used to', 'certain', 'inhabit', 'go over', 'destiny', 'express', 'improve', 'in fact', 'abandon', 'through', 'furious', 'neither', 'nothing', 'journey', 'exactly', 'ancient', 'quarrel', 'set off', 'charity', 'pick up', 'luggage', 'take up', 'jealous', 'meet up', 'another', 'as well', 'provide', 'exclaim', 'receive', 'peasant', 'inquire', 'suggest', 'suppose', 'instead', 'citizen', 'bizarre', 'cuisine', 'initial', 'subject', 'give up', 'at once', 'mention', 'plumber', 'deceive', 'capture', 'consume', 'respond', 'purpose', 'beneath', 'kind of', 'produce', 'deserve', 'careful', 'advance', 'suspend', 'inspire', 'prevent', 'achieve', 'inherit', 'foreign', 'harmful', 'further', 'perhaps', 'look-up', 'look up', 'consent', 'passion', 'disease', 'despite', 'decision', 'increase', 'grow old', 'far away', 'discover', 'prisoner', 'scarcely', 'find out', 'cemetery', 'armchair', 'terrible', 'relative', 'postpone', 'handsome', 'stranger', 'get lost', 'head out', 'approach', 'carry on', 'knapsack', 'distinct', 'at least', 'announce', 'universe', 'obsessed', 'distract', 'look for', 'suddenly', 'midnight', 'collapse', 'lot like', 'distrust', 'criminal', 'swindler', 'suitable', 'dedicate', 'behavior', 'polarize', 'treasure', 'complain', 'honestly', 'actually', 'exchange', 'relation', 'employee', 'ancestor', 'truncate', 'reckless', 'literate', 'endeavor', 'maintain', 'basically', 'coherence', 'necessity', 'as though', 'apologize', 'got to be', 'take part', 'meanwhile', 'childhood', 'difficult', 'foreigner', 'attentive', 'buckle up', 'implement', 'treatment', 'reference', 'deprecate', 'authority', 'disappear', 'rejection', 'outskirts', 'conscious', 'extensive', 'necessary', 'rainy day', 'put apart', 'dedicated', 'gradually', 'undermine', 'obsession', 'recognize', 'statement', 'frustrate', 'forbidden', 'highlight', 'point out', 'influence', 'advantage', 'definition', 'obligation', 'suggestion', 'excitement', 'by the way', 'originally', 'expression', 'each other', 'be used to', 'apparently', 'beforehand', 'invitation', 'unforeseen', 'courageous', 'deployment', 'fractional', 'possession', 'refinement', 'respective', 'persistent', 'unemployed', 'completely', 'accidental', 'let you go', 'well-being', 'particular', 'dedication', 'themselves', 'ridiculous', 'unsuitable', 'conversion', 'resistible', 'straight up', 'many a time', 'hardly ever', 'considerate', 'looking for', 'candlelight', 'give a lift', 'be promoted', 'countryside', 'fortunately', 'attentively', 'for a while', 'possibility', 'affirmative', 'handicapped', 'disappeared', 'come across', 'went insane', 'taking away', 'another way', 'participate', 'necessarily', 'expectation', 'recognition', 'consecutive', 'investigate', 'considerate', 'confidently', 'distraction', 'another one', ' this is it', 'the same as', 'my pleasure', 'convenience', 'wake-up call', 'good-looking', 'relationship', 'dissatisfied', 'the same way', 'troubleshoot', 'on the whole', 'incorrigible', "i don't hurt", 'conversation', 'given amount', 'human beings', 'particularly', 'according to', 'requirements', 'disappointed', 'all the same', 'whether or no', 'i have to say', 'about whether', 'true strength', 'to get better', 'would do well', 'circumstances', 'unfortunately', 'revolutionary', 'embarrassment', 'investigation', 'the same here', 'heartbreaking', 'just the same', "someone else's", 'responsibility', 'have a good one', "let's go for it", 'i was wondering', 'all of a sudden', 'essential thing', 'harder to become', 'predetermination', 'get into trouble', 'going to have to', 'stay for a while', 'residential area', "I'll do my best to", 'get a point across', 'has just taken part', 'what are you up to?', 'storm out of a room', 'get / become used to', 'get wind of something', 'things are different now', 'what shall we start with', 'as for me / for all i care', 'this is what this is about', 'that has a decent fat content', 'not to put too fine a point on'];

const word = document.querySelector('#word');

document.querySelector('#word').addEventListener("click", () => {
    document.querySelectorAll('.card').forEach(card => card.style.background = '#1685a3');

    let items_arr = [1, 2, 3, 4];

    let item = arr[Math.floor(Math.random() * arr.length)]; // Берем рандомное слово из массива arr

    let random_item = (() => {
        // let rand = min + Math.random() * (max + 1 - min);
        let rand = (Math.random() * 1000) % 4;                  // Берем рандомное число от 1 до 4
        return Math.ceil(rand);
    })();

    let card_text_atr =                                      // Берем текст рандомной card в зависимости от random_item
        document.querySelector(`#cards > div:nth-child(${random_item})`);
    let index_random_item = items_arr.indexOf(random_item);

    items_arr.splice(index_random_item, 1);

    word.textContent = item;
    card_text_atr.textContent = voc[item];
    let rand_words = [];
    while (items_arr) {
        let rand_word = () => {
            let rand = Math.floor(Math.random() * arr.length);
            if (rand_words.includes(arr[rand])) rand_word();
            else {
                rand_words += [arr[rand]];
                return arr[rand];
            }
        };
        document.querySelector(`#cards > div:nth-child(${items_arr.pop()})`).textContent = voc[rand_word()];
    }
});

let pos = 0;
let neg = 0;

document.querySelector('#cards').addEventListener("click", (event) => {
    let target = event.target;
    let start_func = () => {
        word.click()
    }
    if (word.textContent !== 'Click Here to Get Started' && target.getAttribute('class') !== 'row') {
        if (target.textContent === voc[word.textContent]) {
            target.style.background = '#2E8B57';
            pos += 1;
            document.querySelector('.positive').textContent = pos;
            setTimeout(start_func, 300);
        } else if (target.textContent !== voc[word.textContent]) {
            target.style.background = '#DC143C';
            neg += 1;
            document.querySelector('.negative').textContent = neg;
        }
    }
});