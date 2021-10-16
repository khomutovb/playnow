const products = [
    {
        name: "Playstation",
        type: "playstation",
        productsList: [
            {
                _id: "88f62d67-da1f",
                name: "Sony PlayStation 5 White Digital Edition + доп. джойстик",
                description: "PLAYSTATION 5 Digital Edition новая модель компьютерной приставки и это не просто очередной гаджет в доме - это новая ступень в мир развлечений и искусства. Кроме обязательного обновления прошивки, которое можно отложить, через считанные минуты можно уже начать игру. В качестве альтернативы онлайн игр, может быть подключения жесткого диска через USB, и можно воспользоваться играми с предыдущей консоли.PS5 может мгновенно получить доступ к вашим существующих цифровых игр.",
                price: 27599,
                img: "/img/playstation5_2.png",
                favorite: false,
                category: "Playstation"
            },
            {
                _id: "257c330f-3807",
                name: "Sony PlayStation 5 Digital Edition White",
                description: "PLAYSTATION 5 Digital Edition новая модель компьютерной приставки и это не просто очередной гаджет в доме - это новая ступень в мир развлечений и искусства. Кроме обязательного обновления прошивки, которое можно отложить, через считанные минуты можно уже начать игру. В качестве альтернативы онлайн игр, может быть подключения жесткого диска через USB, и можно воспользоваться играми с предыдущей консоли.PS5 может мгновенно получить доступ к вашим существующих цифровых игр.",
                price: 22499,
                img: "/img/playstation5.png",
                favorite: false,
                category: "Playstation"
            },
            {
                _id: "6fcf9f1e-fb9a",
                name: "Sony Playstation 5 White 825GB + Ratchet & Clank: Rift Apart",
                description: "PLAYSTATION 5 Digital Edition новая модель компьютерной приставки и это не просто очередной гаджет в доме - это новая ступень в мир развлечений и искусства. Кроме обязательного обновления прошивки, которое можно отложить, через считанные минуты можно уже начать игру. В качестве альтернативы онлайн игр, может быть подключения жесткого диска через USB, и можно воспользоваться играми с предыдущей консоли.PS5 может мгновенно получить доступ к вашим существующих цифровых игр.",
                price: 26498,
                oldPrice: 26698,
                img: "/img/playstation5_with-game.png",
                favorite: false,
                category: "Playstation"
            },
            {
                _id: "4c721981-13a5",
                name: "Sony PlayStation 5 White",
                description: "PLAYSTATION 5 новая модель компьютерной приставки и это не просто очередной гаджет в доме - это новая ступень в мир развлечений и искусства. Кроме обязательного обновления прошивки, которое можно отложить, через считанные минуты можно уже начать игру. В качестве альтернативы онлайн игр, может быть подключения жесткого диска через USB, и можно воспользоваться играми с предыдущей консоли.PS5 может мгновенно получить доступ к вашим существующих цифровых игр.",
                price: 24999,
                img: "/img/playstation5.png",
                favorite: false,
                category: "Playstation"
            },
            {
                _id: "ebdd33bb-e5e1",
                name: "Sony PlayStation 4 Slim Black 500GB",
                description: "Консоль восьмого поколения от компании Sony, которая откроет доступ к лучшим развлечений, которые существуют сегодня. В ее системе используется специально разработанный 8-ядерный чип. Его отлично дополняют современный графический процессор с высокой производительностью и сверхбыстрая единственная системная память.",
                price: 11499,
                img: "/img/playstation4.png",
                favorite: false,
                category: "Playstation"
            },
        ]
    },
    {
        name: "Игры",
        type: "games",
        productsList: [
            {
                _id: "88f62d67-da1g",
                name: "Marvel's Spider- Man: Miles Morales Ultimate",
                description: "В последнем на данный момент происшествии во вселенной Marvel's Spider-Man подросток Майлз Моралес приспосабливается к своему новому дому, следуя по стопам наставника Питера Паркера в качестве нового Человека-паука. Но когда ожесточенная борьба за влияние угрожает разрушить его новый дом, начинающий герой понимает, что с большой силой должна приходить и большая ответственность. Чтобы спасти Нью-Йорк Marvel, Майлз должен принять роль Человека-паука и научиться отвечать ей.",
                price: 1899,
                img: "/img/game1.png",
                favorite: false,
                category: "Игры"
            },
            {
                _id: "257c330f-380g",
                name: "Mortal Kombat 11: Ultimate",
                description: "Сюжетная линия в МК 11 на Playstation 4 развивается после окончания событий последней части. С того момента прошло два года. Главарь Нижнего Мира по имени Шиннок потерпел поражение в схватке с Кэсси Кейдж. Теперь же его судьба в руках самого бога грома - Рэйден. Рэйден, в свою очередь, продолжает активно заниматься тем, что ему предначертано судьбой и предками: очищать источник энергии Земного Царства и выполнять свой долг защитника перед Царством. Однако многочисленные битвы повлияли на судьбу не только Шиннока, но и Рэйден. Он впитал в себя много демонического и изменился. Теперь он предпочитает более агрессивным способам и путям выполнения своего долга перед Царством.",
                price: 1149,
                img: "/img/game2.png",
                favorite: false,
                category: "Игры"
            },
            {
                _id: "6fcf9f1e-fb9g",
                name: "FIFA 21",
                description: "Продемонстрируйте свои футбольные способности в FIFA 21 Standard Edition для PlayStation 4. Уличный футбол или матчи на больших стадионах позволяют вам выбирать, где играть в мировую игру. ФИФА 21 Standard с мощными игровыми технологиями позволяет почувствовать пульс событий, а режим карьеры предлагает вам шанс подняться на вершину славы.",
                price: 1499,
                img: "/img/game3.png",
                favorite: false,
                category: "Игры"
            },
            {
                _id: "4c721981-13ag",
                name: "The Last Of Us Part II",
                description: "The Last of Us 2 PS4 Part II - через пять лет после страшной путешествия по охваченной эпидемией Америке Элли и Джоэл осели в Джексоне, штат Вайоминг. Устроившись в процветающей общине, они нашли желаемую стабильность, несмотря на постоянную угрозу нападения зараженных и потерявших смысл жизни выживших. Но однажды жестокие события разрушают этот покой, и Элли снова отправляется в путь, чтобы восстановить справедливость. Идя по следу тех, кто нарушил мир, она сталкивается с тяжелыми физическими и эмоциональными последствиями своих собственных действий.",
                price: 1899,
                img: "/img/game4.png",
                favorite: false,
                category: "Игры"
            },
            {
                _id: "ebdd33bb-e5eg",
                name: "The Witcher 3: Wild Hunt",
                description: "The Witcher 3: Wild Hunt - ролевая игра, действие которой разворачивается в удивительном фэнтезийном мире, где необходимо принимать сложные решения и отвечать за их последствия. Мир охвачен войной. Армия империи Нильфгаард стирает все на своем пути, стремясь добраться до самого сердца Северных королевств. Подвижной глубоко личными мотивами знаменитый колдун, Геральт из Ривии, не остановится ни перед чем, чтобы найти и защитить какую-то персону, о которой говорится в древнем пророчестве. Между тем за ним самим по пятам следует враг, не знает страха и жалости, самый невероятный кошмар - Дикая охота, кавалькада призрачных всадников, предсказателей судьбы и гибели, способных за одну ночь не оставить и следа от целых поселений... Ведьмак 3: Дикая охота предлагает нелинейную, взрослую, насыщенную историю и не имеющую аналогов боевую систему без использования QTE, которая сочетает широкий выбор тактических элементов, присущих ролевых игр, с динамическими и зрелищными битвами, достойными лучших игр жанра экшн.",
                price: 899,
                img: "/img/game5.png",
                favorite: false,
                category: "Игры"
            },
            {
                _id: "g8f62d67-da1g",
                name: "Watch Dogs: Legion",
                description: "Watch Dogs: Legion - это боевик и третья часть серии Watch Dogs, а также продолжение Watch Dogs 2. Игра размещена в открытом мире, придуманном представительстве Лондона, и имеет возможность взять в контроль любого персонажа встречающееся. Персонажи могут быть набраны в настройках игры и могут быть навсегда потеряны во время прохождения, если для игроков включен опцию permadeath. Каждый персонаж имеет разную историю и способности, позволяющие применять большое количество различных подходов к выполнению миссий, работающих для хакерской группы DedSec, с рассказом, сосредоточенной на борьбе с государством наблюдения. В игре есть действия как пешком, так и с помощью транспортных средств. В игре представлена ​​совместная многопользовательская игра, которая позволяет до четырех игроков работать вместе.",
                price: 1199,
                img: "/img/game6.png",
                favorite: false,
                category: "Игры"
            },
            {
                _id: "g57c330f-380g",
                name: "Control",
                description: "Сверхъестественный экшн-приключение от 3 лица. После того, как в секретную агентство в Нью-Йорке вторглась потусторонняя угроза, вы становитесь новым директором, который пытается восстановить контроль. От разработчика Remedy Entertainment, эта сверхъестественная экшн-приключение от третьего лица вызовет вас овладеть сочетанием сверхъестественных способностей, модификуваних нагрузок и реактивного среды, одновременно сражаясь в глубоком и непредсказуемом мире. Control - это история Джесси Фаденса. Основной сюжет сосредоточен на ее личном поиске ответов, когда она перерастает в роль режиссера. Мир контроля имеет свою собственную историю, как и союзники, с которыми Джесси встречается на пути. Побочные квесты и секреты есть везде. Джесси работает с другими агентами Бюро, расшифровывает загадочные шифры и обнаруживает странные эксперименты Бюро.",
                price: 1199,
                img: "/img/game7.png",
                favorite: false,
                category: "Игры"
            },
            {
                _id: "gfcf9f1e-fb9g",
                name: "Bloodborne",
                description: "Хидетака Миядзаки и FromSoftware - создатели легендарных ролевых экшенов Demon's Souls, Dark Souls и Dark Soul II - представляют Bloodborne: щедро приправленную ужасом ролевую игру с элементами экшена, эксклюзивно для PlayStation 4. Посмотрите в лицо своим страхам, пытаясь найти ответы в древнем городе Ихарнами, в котором свирепствует странная эпидемия, распространяется по улицам со скоростью лесного пожара. Тень накрыла охвачен ужасом город, и вам придется узнать ее мрачные секреты, чтобы выжить.",
                price: 1199,
                img: "/img/game8.png",
                favorite: false,
                category: "Игры"
            },
            {
                _id: "gc721981-13ag",
                name: "Death Stranding Director's Cut",
                description: "Death Stranding, что бросает вызов жанра, - это совершенно новая игра от Hideo Kojima. В мире на грани исчезновения, где цивилизация, которую мы знаем, уже разрушилась, Сэм Бриджес должно отправиться в путешествие, чтобы спасти человечество. От легендарного создателя игр Hideo Kojima получается совершенно новая жанрово-страстная экшн-приключение для PS4, в которой сыграли Норман Ридус, Мадс Миккельсен, Сейду и Линдсей Вагнер. В ближайшее время взрывы опустошили планету, начав цепь сверхъестественных событий Смерть.",
                price: 1799,
                img: "/img/game9.png",
                favorite: false,
                category: "Игры"
            },
            {
                _id: "gbdd33bb-e5eg",
                name: "God of War",
                description: "God of War (Бог Войны) - отомстив богам Олимпа, Кратос живет в царстве скандинавских божеств и чудовищ. В этом суровом и беспощадном мире он должен не только самостоятельно бороться за выживание, но и научить этому своего сына ... пытаясь не дать ему повторить запятнаны кровью ошибки, совершенные самым Призраком Спарты. Это поразительно переосмысления истории God of War объединяет в себе все отличительные черты культовой серии - сильные схватки, эпические сражения с боссами и захватывающий масштаб происходящего - и подкрепляет их мощным и трогательным сюжетом, привносит новые краски в мир Кратоса.",
                price: 699,
                img: "/img/game10.png",
                favorite: false,
                category: "Игры"
            },
        ]
    },
    {
        name: "Аксессуары",
        type: "accessories",
        productsList: [
            {
                _id: "88f62d67-da1a",
                name: "Sony PlayStation 5 DualSense White",
                price: 1999,
                img: "/img/accessor1.png",
                favorite: false,
                category: "Аксессуары"
            },
            {
                _id: "257c330f-380a",
                name: "Sony PlayStation 5 Pulse 3D White",
                price: 3599,
                img: "/img/accessor2.png",
                favorite: false,
                category: "Аксессуары"
            },
            {
                _id: "6fcf9f1e-fb9w",
                name: "Sony PlayStation 5 HD Camera White",
                price: 1599,
                img: "/img/accessor3.png",
                favorite: false,
                category: "Аксессуары"
            },
            {
                _id: "4c721981-13aa",
                name: "Очки Виртуальной Реальности VR Sony PlayStation",
                price: 10899,
                img: "/img/accessor4.png",
                favorite: false,
                category: "Аксессуары"
            },
            {
                _id: "ebdd33bb-e5ea",
                name: "Контроллеры Движения Sony PlayStation",
                price: 3499,
                img: "/img/accessor5.png",
                favorite: false,
                category: "Аксессуары"
            },
        ]
    },
    {
        name: "Ваучеры",
        type: "vouchers",
        productsList: [
            {
                _id: "88f62d27-da1a",
                name: "Подписка Playstation Plus на 12 месяцев Украина",
                price: 1249,
                img: "/img/vouchers1.png",
                favorite: false,
                category: "Ваучеры"
            },
            {
                _id: "257c330f-382a",
                name: "Подписка Playstation Plus на 6 месяцев Украина",
                price: 759,
                img: "/img/vouchers2.png",
                favorite: false,
                category: "Ваучеры"
            },
            {
                _id: "6fcf2f1e-fb9w",
                name: "Подписка Playstation Plus на 3 месяцев Украина",
                price: 549,
                img: "/img/vouchers3.png",
                favorite: false,
                category: "Ваучеры"
            },
        ]

    }
];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(products);
        }, 1000);
    });
const getProduct = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve([].concat(...products.map(product => product.productsList)).find((item) => item._id === id));
        }, 1000);
    });
export default {
    fetchAll,
    getProduct,
};