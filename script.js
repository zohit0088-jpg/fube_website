console.log("Website ishga tushdi");

const translations = {
    uz: {
        brand_subtitle: "MCHJ Qurilish Tashkiloti",
        nav_home: "Bosh sahifa",
        nav_about: "Biz haqimizda",
        nav_services: "Xizmatlar",
        nav_projects: "Loyihalar",
        nav_advantages: "Afzalliklar",
        nav_stats: "Natijalar",
        nav_contact: "Aloqa",

        hero_badge: "Sifat • Ishonch • Mustahkamlik",
        hero_title: "Zamonaviy va ishonchli qurilish yechimlari",
        hero_text: "FAR UCHK BINOKOR ELIT MCHJ turar joy, tijorat obyektlari, kapital ta’mirlash, ichki va tashqi pardozlash hamda loyiha boshqaruvi yo‘nalishlarida faoliyat yuritadi. Biz har bir loyihaga professional yondashuv, puxta rejalashtirish va sifat nazorati bilan yondashamiz.",
        hero_btn_contact: "Bog‘lanish",
        hero_btn_services: "Xizmatlarimiz",
        hero_stat_1_title: "Professional",
        hero_stat_1_text: "Yondashuv",
        hero_stat_2_title: "Mustahkam",
        hero_stat_2_text: "Natija",
        hero_stat_3_title: "Ishonchli",
        hero_stat_3_text: "Hamkorlik",

        hero_card_title: "Kompaniyamiz haqida",
        hero_card_text: "FAR UCHK BINOKOR ELIT MCHJ qurilish sohasida zamonaviy standartlar asosida faoliyat olib boruvchi tashkilot bo‘lib, sifat, mas’uliyat va ishonchni o‘zining asosiy ustuvor yo‘nalishi deb biladi.",
        hero_list_1: "Turar joy va tijorat obyektlari qurilishi",
        hero_list_2: "Kapital va joriy ta’mirlash ishlari",
        hero_list_3: "Ichki va tashqi pardozlash xizmatlari",
        hero_list_4: "Loyiha boshqaruvi va nazorat",

        about_tag: "Biz haqimizda",
        about_title: "Qurilishda sifat, tartib va ishonchni qadrlaydigan kompaniya",
        about_text: "FAR UCHK BINOKOR ELIT MCHJ o‘z faoliyatida har bir obyektga alohida mas’uliyat bilan yondashadi. Bizning maqsadimiz — buyurtmachiga nafaqat bino yoki ta’mirlangan obyekt topshirish, balki uzoq muddat xizmat qiladigan, estetik va mustahkam yechim yaratishdir.",
        about_card_1_title: "Missiyamiz",
        about_card_1_text: "Zamonaviy va sifatli qurilish xizmatlarini taqdim etish, mijozlar ehtiyojiga mos yechimlar ishlab chiqish va har bir loyihada ishonchni mustahkamlash.",
        about_card_2_title: "Maqsadimiz",
        about_card_2_text: "Qurilish sohasida professional yondashuv, sifatli natija va halol hamkorlik asosida o‘z o‘rniga ega bo‘lgan ishonchli kompaniyaga aylanish.",
        about_card_3_title: "Afzalligimiz",
        about_card_3_text: "Biz har bir jarayonda sifat nazorati, aniq rejalashtirish, muddatga rioya qilish va zamonaviy ko‘rinishga katta e’tibor qaratamiz.",

        services_tag: "Xizmatlarimiz",
        services_title: "Qurilish bo‘yicha keng ko‘lamli xizmatlar",
        services_text: "Kompaniyamiz turli turdagi obyektlar uchun kompleks qurilish va ta’mirlash xizmatlarini taklif etadi.",
        service_1_title: "Turar joy binolari",
        service_1_text: "Ko‘p qavatli uylar, hovli joylar va turar joy obyektlarini qurish.",
        service_2_title: "Tijorat obyektlari",
        service_2_text: "Do‘kon, ofis, savdo va xizmat ko‘rsatish obyektlari qurilishi.",
        service_3_title: "Kapital ta’mirlash",
        service_3_text: "Mavjud obyektlarni yangilash, mustahkamlash va zamonaviylashtirish.",
        service_4_title: "Ichki pardozlash",
        service_4_text: "Interyer ishlari, bezatish, qulay va estetik makon yaratish.",
        service_5_title: "Tashqi pardozlash",
        service_5_text: "Fasad, tashqi ko‘rinish va umumiy arxitektura uslubini shakllantirish.",
        service_6_title: "Loyiha boshqaruvi",
        service_6_text: "Rejalashtirish, nazorat, ish jarayonlarini samarali boshqarish.",

        projects_tag: "Loyihalar",
        projects_title: "Faoliyatimiz yo‘nalishlari",
        projects_text: "Biz turli yo‘nalishdagi obyektlar bilan ishlaymiz va har bir loyihaga individual yondashamiz.",
        project_1_title: "Turar joy loyihalari",
        project_1_text: "Zamonaviy, qulay va uzoq muddatli foydalanishga mo‘ljallangan obyektlar.",
        project_2_title: "Biznes va ofis obyektlari",
        project_2_text: "Faoliyat yuritish uchun zamonaviy va qulay infratuzilma.",
        project_3_title: "Ta’mirlash va rekonstruksiya",
        project_3_text: "Mavjud bino va inshootlarni yangilash hamda qayta shakllantirish ishlari.",

        advantages_tag: "Afzalliklarimiz",
        advantages_title: "Nega aynan FAR UCHK BINOKOR ELIT MCHJ?",
        advantages_text: "Biz uchun asosiy mezon — sifatli natija, halol hamkorlik va professional yondashuv.",
        advantage_1_title: "01. Sifat nazorati",
        advantage_1_text: "Har bir bosqichda sifatga alohida e’tibor qaratiladi.",
        advantage_2_title: "02. Aniq rejalashtirish",
        advantage_2_text: "Ish jarayonlari bosqichma-bosqich va tartibli olib boriladi.",
        advantage_3_title: "03. Professional jamoa",
        advantage_3_text: "Tajriba va mas’uliyatga tayangan holda ish yuritamiz.",
        advantage_4_title: "04. Ishonchli hamkorlik",
        advantage_4_text: "Mijoz bilan uzoq muddatli va mustahkam aloqani qadrlaymiz.",

        stats_tag: "Natijalar",
        stats_title: "Bizning yondashuvimiz raqamlarda",
        stats_text: "Quyidagi ko‘rsatkichlar kompaniyamizning asosiy qadriyatlarini ifodalaydi.",
        stat_1: "Sifatga intilish",
        stat_2: "Nazorat va e’tibor",
        stat_3: "Mijozga yo‘naltirilganlik",
        stat_4: "Doimiy rivojlanish",

        cta_tag: "Hamkorlik",
        cta_title: "Qurilish bo‘yicha ishonchli hamkor qidiryapsizmi?",
        cta_text: "FAR UCHK BINOKOR ELIT MCHJ bilan bog‘laning va loyihangizni zamonaviy, sifatli va puxta tarzda amalga oshiring.",
        cta_button: "Hozir bog‘lanish",

        contact_tag: "Aloqa",
        contact_title: "Biz bilan bog‘laning",
        contact_text: "Hamkorlik, buyurtma va ma’lumot olish uchun quyidagi ma’lumotlar orqali murojaat qiling.",
        contact_company: "Kompaniya",
        contact_phone: "Telefon",
        contact_address: "Manzil",
        contact_address_value: "Farg‘ona viloyati, Uchko‘prik tumani",

        form_name: "Ismingiz",
        form_phone: "Telefon raqamingiz",
        form_subject: "Mavzu",
        form_message: "Xabaringizni yozing...",
        form_button: "Xabar yuborish",
        form_fill_all: "Iltimos, barcha maydonlarni to‘ldiring.",
        form_success: "Xabaringiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.",

        footer_text: "Zamonaviy qurilish, sifatli ta’mirlash, professional boshqaruv va ishonchli hamkorlik sari birgalikda.",
        footer_bottom: "© 2026 FAR UCHK BINOKOR ELIT MCHJ. Barcha huquqlar himoyalangan."
    },

    ru: {
        brand_subtitle: "Строительная организация ООО",
        nav_home: "Главная",
        nav_about: "О нас",
        nav_services: "Услуги",
        nav_projects: "Проекты",
        nav_advantages: "Преимущества",
        nav_stats: "Результаты",
        nav_contact: "Контакты",

        hero_badge: "Качество • Доверие • Надёжность",
        hero_title: "Современные и надёжные строительные решения",
        hero_text: "FAR UCHK BINOKOR ELIT MCHJ работает в направлениях жилого строительства, коммерческих объектов, капитального ремонта, внутренней и внешней отделки, а также управления проектами. Мы подходим к каждому проекту профессионально, с тщательным планированием и контролем качества.",
        hero_btn_contact: "Связаться",
        hero_btn_services: "Наши услуги",
        hero_stat_1_title: "Профессиональный",
        hero_stat_1_text: "Подход",
        hero_stat_2_title: "Надёжный",
        hero_stat_2_text: "Результат",
        hero_stat_3_title: "Долгосрочное",
        hero_stat_3_text: "Сотрудничество",

        hero_card_title: "О нашей компании",
        hero_card_text: "FAR UCHK BINOKOR ELIT MCHJ — строительная организация, работающая по современным стандартам, для которой качество, ответственность и доверие являются главными приоритетами.",
        hero_list_1: "Строительство жилых и коммерческих объектов",
        hero_list_2: "Капитальный и текущий ремонт",
        hero_list_3: "Внутренняя и внешняя отделка",
        hero_list_4: "Управление проектами и контроль",

        about_tag: "О нас",
        about_title: "Компания, которая ценит качество, порядок и доверие в строительстве",
        about_text: "FAR UCHK BINOKOR ELIT MCHJ подходит к каждому объекту с особой ответственностью. Наша цель — не просто сдавать здание или отремонтированный объект, а создавать эстетичное, прочное и долговечное решение.",
        about_card_1_title: "Наша миссия",
        about_card_1_text: "Предоставлять современные и качественные строительные услуги, разрабатывать решения под потребности клиентов и укреплять доверие в каждом проекте.",
        about_card_2_title: "Наша цель",
        about_card_2_text: "Стать надёжной компанией, имеющей своё место в строительной сфере благодаря профессиональному подходу, качественному результату и честному сотрудничеству.",
        about_card_3_title: "Наше преимущество",
        about_card_3_text: "Мы уделяем большое внимание контролю качества, точному планированию, соблюдению сроков и современному внешнему виду на каждом этапе.",

        services_tag: "Наши услуги",
        services_title: "Широкий спектр строительных услуг",
        services_text: "Наша компания предлагает комплексные строительные и ремонтные услуги для различных типов объектов.",
        service_1_title: "Жилые здания",
        service_1_text: "Строительство многоквартирных домов, частных домов и жилых объектов.",
        service_2_title: "Коммерческие объекты",
        service_2_text: "Строительство магазинов, офисов, торговых и сервисных объектов.",
        service_3_title: "Капитальный ремонт",
        service_3_text: "Обновление, укрепление и модернизация существующих объектов.",
        service_4_title: "Внутренняя отделка",
        service_4_text: "Интерьерные работы, оформление, создание удобного и эстетичного пространства.",
        service_5_title: "Внешняя отделка",
        service_5_text: "Фасадные работы, внешний вид и формирование общего архитектурного стиля.",
        service_6_title: "Управление проектом",
        service_6_text: "Планирование, контроль и эффективное управление рабочими процессами.",

        projects_tag: "Проекты",
        projects_title: "Направления нашей деятельности",
        projects_text: "Мы работаем с объектами разных направлений и применяем индивидуальный подход к каждому проекту.",
        project_1_title: "Жилые проекты",
        project_1_text: "Современные, удобные и рассчитанные на долгий срок эксплуатации объекты.",
        project_2_title: "Бизнес и офисные объекты",
        project_2_text: "Современная и удобная инфраструктура для эффективной деятельности.",
        project_3_title: "Ремонт и реконструкция",
        project_3_text: "Обновление и переустройство существующих зданий и сооружений.",

        advantages_tag: "Наши преимущества",
        advantages_title: "Почему именно FAR UCHK BINOKOR ELIT MCHJ?",
        advantages_text: "Для нас главный критерий — качественный результат, честное сотрудничество и профессиональный подход.",
        advantage_1_title: "01. Контроль качества",
        advantage_1_text: "На каждом этапе уделяется особое внимание качеству.",
        advantage_2_title: "02. Точное планирование",
        advantage_2_text: "Рабочие процессы ведутся поэтапно и организованно.",
        advantage_3_title: "03. Профессиональная команда",
        advantage_3_text: "Мы работаем, опираясь на опыт и ответственность.",
        advantage_4_title: "04. Надёжное сотрудничество",
        advantage_4_text: "Мы ценим долгосрочные и крепкие отношения с клиентами.",

        stats_tag: "Результаты",
        stats_title: "Наш подход в цифрах",
        stats_text: "Эти показатели отражают основные ценности нашей компании.",
        stat_1: "Стремление к качеству",
        stat_2: "Контроль и внимание",
        stat_3: "Ориентация на клиента",
        stat_4: "Постоянное развитие",

        cta_tag: "Сотрудничество",
        cta_title: "Ищете надёжного партнёра в строительстве?",
        cta_text: "Свяжитесь с FAR UCHK BINOKOR ELIT MCHJ и реализуйте свой проект современно, качественно и профессионально.",
        cta_button: "Связаться сейчас",

        contact_tag: "Контакты",
        contact_title: "Свяжитесь с нами",
        contact_text: "Для сотрудничества, заказа и получения информации воспользуйтесь следующими контактными данными.",
        contact_company: "Компания",
        contact_phone: "Телефон",
        contact_address: "Адрес",
        contact_address_value: "Ферганская область, Учкуприкский район",

        form_name: "Ваше имя",
        form_phone: "Ваш номер телефона",
        form_subject: "Тема",
        form_message: "Напишите ваше сообщение...",
        form_button: "Отправить сообщение",
        form_fill_all: "Пожалуйста, заполните все поля.",
        form_success: "Ваше сообщение принято. Мы свяжемся с вами в ближайшее время.",

        footer_text: "Современное строительство, качественный ремонт, профессиональное управление и надёжное сотрудничество.",
        footer_bottom: "© 2026 FAR UCHK BINOKOR ELIT MCHJ. Все права защищены."
    },

    zh: {
        brand_subtitle: "建筑公司",
        nav_home: "首页",
        nav_about: "关于我们",
        nav_services: "服务",
        nav_projects: "项目",
        nav_advantages: "优势",
        nav_stats: "成果",
        nav_contact: "联系",

        hero_badge: "质量 • 信任 • 稳固",
        hero_title: "现代且可靠的建筑解决方案",
        hero_text: "FAR UCHK BINOKOR ELIT MCHJ 从事住宅建筑、商业项目、大修、室内外装饰以及项目管理。我们以专业态度、周密规划和严格质量控制对待每一个项目。",
        hero_btn_contact: "联系我们",
        hero_btn_services: "我们的服务",
        hero_stat_1_title: "专业",
        hero_stat_1_text: "方法",
        hero_stat_2_title: "稳固",
        hero_stat_2_text: "结果",
        hero_stat_3_title: "可靠",
        hero_stat_3_text: "合作",

        hero_card_title: "关于公司",
        hero_card_text: "FAR UCHK BINOKOR ELIT MCHJ 是一家按照现代标准开展业务的建筑公司，把质量、责任和信任作为最重要的原则。",
        hero_list_1: "住宅和商业项目建设",
        hero_list_2: "大修和日常维修工程",
        hero_list_3: "室内与室外装饰服务",
        hero_list_4: "项目管理与监督",

        about_tag: "关于我们",
        about_title: "一家重视建筑质量、秩序和信任的公司",
        about_text: "FAR UCHK BINOKOR ELIT MCHJ 对每一个项目都高度负责。我们的目标不仅是交付建筑或翻新的项目，更是创造美观、坚固并可长期使用的解决方案。",
        about_card_1_title: "我们的使命",
        about_card_1_text: "提供现代化、高质量的建筑服务，根据客户需求制定方案，并在每个项目中建立信任。",
        about_card_2_title: "我们的目标",
        about_card_2_text: "凭借专业方法、优质成果和诚实合作，成为建筑领域值得信赖的公司。",
        about_card_3_title: "我们的优势",
        about_card_3_text: "我们在每个阶段都高度重视质量控制、精确规划、工期执行和现代外观。",

        services_tag: "我们的服务",
        services_title: "广泛的建筑服务",
        services_text: "本公司为各类项目提供综合建筑和维修服务。",
        service_1_title: "住宅建筑",
        service_1_text: "建设多层住宅、独立住宅和各类居住项目。",
        service_2_title: "商业项目",
        service_2_text: "建设商店、办公室、商业和服务类项目。",
        service_3_title: "大修工程",
        service_3_text: "更新、加固和现代化现有项目。",
        service_4_title: "室内装饰",
        service_4_text: "室内工程、装饰设计，打造舒适美观空间。",
        service_5_title: "外部装饰",
        service_5_text: "立面工程、外观设计和整体建筑风格塑造。",
        service_6_title: "项目管理",
        service_6_text: "规划、监督并高效管理施工流程。",

        projects_tag: "项目",
        projects_title: "我们的业务方向",
        projects_text: "我们承接不同类型的项目，并对每一个项目采取个性化方法。",
        project_1_title: "住宅项目",
        project_1_text: "现代、舒适并适合长期使用的建筑项目。",
        project_2_title: "商业与办公项目",
        project_2_text: "适合高效运营的现代化便利基础设施。",
        project_3_title: "维修与重建",
        project_3_text: "对现有建筑和设施进行更新与改造。",

        advantages_tag: "我们的优势",
        advantages_title: "为什么选择 FAR UCHK BINOKOR ELIT MCHJ？",
        advantages_text: "对我们来说，最重要的是高质量成果、诚信合作和专业态度。",
        advantage_1_title: "01. 质量控制",
        advantage_1_text: "在每个阶段都特别重视质量。",
        advantage_2_title: "02. 精确规划",
        advantage_2_text: "施工流程分阶段、有秩序地进行。",
        advantage_3_title: "03. 专业团队",
        advantage_3_text: "我们依靠经验和责任心开展工作。",
        advantage_4_title: "04. 可靠合作",
        advantage_4_text: "我们重视与客户长期稳固的关系。",

        stats_tag: "成果",
        stats_title: "我们的理念以数字体现",
        stats_text: "以下指标体现了我们公司的核心价值。",
        stat_1: "追求质量",
        stat_2: "监督与关注",
        stat_3: "以客户为中心",
        stat_4: "持续发展",

        cta_tag: "合作",
        cta_title: "您在寻找可靠的建筑合作伙伴吗？",
        cta_text: "请联系 FAR UCHK BINOKOR ELIT MCHJ，让您的项目以现代化、高质量和专业方式实现。",
        cta_button: "立即联系",

        contact_tag: "联系",
        contact_title: "联系我们",
        contact_text: "如需合作、下单或获取信息，请通过以下联系方式与我们联系。",
        contact_company: "公司",
        contact_phone: "电话",
        contact_address: "地址",
        contact_address_value: "费尔干纳州，乌奇库普里克区",

        form_name: "您的姓名",
        form_phone: "您的电话号码",
        form_subject: "主题",
        form_message: "请输入您的留言...",
        form_button: "发送留言",
        form_fill_all: "请填写所有字段。",
        form_success: "您的留言已收到，我们将尽快与您联系。",

        footer_text: "现代建筑、高质量维修、专业管理和可靠合作。",
        footer_bottom: "© 2026 FAR UCHK BINOKOR ELIT MCHJ。版权所有。"
    }
};

let currentLang = localStorage.getItem("siteLanguage") || "uz";

function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem("siteLanguage", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll("[data-placeholder]").forEach(element => {
        const key = element.getAttribute("data-placeholder");
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
}

document.querySelectorAll(".lang-btn").forEach(button => {
    button.addEventListener("click", function () {
        applyTranslations(this.dataset.lang);
    });
});

applyTranslations(currentLang);

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const scrollTopBtn = document.getElementById("scrollTop");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
}

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(el => observer.observe(el));

const counters = document.querySelectorAll(".counter");
let countersStarted = false;

function runCounters() {
    if (countersStarted) return;
    countersStarted = true;

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let current = 0;
        const increment = Math.max(1, Math.ceil(target / 80));

        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                counter.innerText = target + "+";
            } else {
                counter.innerText = current;
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    });
}

const statsSection = document.getElementById("stats");

if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounters();
            }
        });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
}

if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !phone || !subject || !message) {
            formStatus.textContent = translations[currentLang].form_fill_all;
            formStatus.style.color = "#ffb3b3";
            return;
        }

        formStatus.textContent = "Yuborilmoqda...";
        formStatus.style.color = "#8cd0ff";

        try {
            const response = await fetch("/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    subject: subject,
                    message: message
                })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                formStatus.textContent = translations[currentLang].form_success;
                formStatus.style.color = "#9cffb0";
                contactForm.reset();
            } else {
                formStatus.textContent = result.error || "Xatolik yuz berdi.";
                formStatus.style.color = "#ffb3b3";
            }
        } catch (error) {
            formStatus.textContent = "Server bilan bog‘lanishda xatolik yuz berdi.";
            formStatus.style.color = "#ffb3b3";
            console.error(error);
        }
    });
}

const modalButtons = document.querySelectorAll("[data-open-modal]");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".modal-close");

modalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-open-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add("show");
            document.body.classList.add("modal-open");
        }
    });
});

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        modal.classList.remove("show");
        document.body.classList.remove("modal-open");
    });
});

modals.forEach(modal => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
            document.body.classList.remove("modal-open");
        }
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modals.forEach(modal => modal.classList.remove("show"));
        document.body.classList.remove("modal-open");
    }
});

const timelineButtons = document.querySelectorAll(".timeline-btn");

timelineButtons.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const isOpen = content.classList.contains("show");

        content.classList.toggle("show");
        button.classList.toggle("active");

        if (isOpen) {
            content.classList.remove("show");
            button.classList.remove("active");
        } else {
            content.classList.add("show");
            button.classList.add("active");
        }
    });
});
// LIGHTBOX GALLERY
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxLocation = document.getElementById("lightboxLocation");
const lightboxCounter = document.getElementById("lightboxCounter");

let currentGalleryImages = [];
let currentImageIndex = 0;
let isZoomed = false;
let startX = 0;
let endX = 0;

function openLightbox(images, index) {
    currentGalleryImages = images;
    currentImageIndex = index;
    updateLightboxImage();
    lightbox.classList.add("show");
    document.body.classList.add("lightbox-open");
}

function updateLightboxImage() {
    if (currentGalleryImages.length > 0) {
        const currentImg = currentGalleryImages[currentImageIndex];

        lightboxImage.src = currentImg.src;
        lightboxImage.alt = currentImg.alt || "Katta rasm";

        if (lightboxTitle) {
            lightboxTitle.textContent = currentImg.dataset.title || "Loyiha rasmi";
        }

        if (lightboxLocation) {
            lightboxLocation.textContent = currentImg.dataset.location || "Manzil ko‘rsatilmagan";
        }

        if (lightboxCounter) {
            lightboxCounter.textContent = `${currentImageIndex + 1} / ${currentGalleryImages.length}`;
        }

        lightboxImage.classList.remove("zoomed");
        isZoomed = false;
    }
}

function closeLightbox() {
    lightbox.classList.remove("show");
    document.body.classList.remove("lightbox-open");
    lightboxImage.src = "";
    lightboxImage.classList.remove("zoomed");
    isZoomed = false;
}

function showPrevImage() {
    if (currentGalleryImages.length === 0) return;
    currentImageIndex =
        (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
    updateLightboxImage();
}

function showNextImage() {
    if (currentGalleryImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
    updateLightboxImage();
}

document.querySelectorAll(".gallery").forEach(gallery => {
    const images = Array.from(gallery.querySelectorAll("img"));

    images.forEach((img, index) => {
        img.addEventListener("click", () => {
            openLightbox(images, index);
        });
    });
});

if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
}

if (lightboxPrev) {
    lightboxPrev.addEventListener("click", showPrevImage);
}

if (lightboxNext) {
    lightboxNext.addEventListener("click", showNextImage);
}

if (lightboxImage) {
    lightboxImage.addEventListener("click", () => {
        isZoomed = !isZoomed;

        if (isZoomed) {
            lightboxImage.classList.add("zoomed");
        } else {
            lightboxImage.classList.remove("zoomed");
        }
    });
}

if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    lightbox.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    lightbox.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
}

function handleSwipe() {
    let diff = startX - endX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            showNextImage();
        } else {
            showPrevImage();
        }
    }
}

document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("show")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrevImage();
    if (e.key === "ArrowRight") showNextImage();
});