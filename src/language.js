// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        logo:"BTI SWAP",
        home:"Home",
        trade: "Trade",
        about: "About",
        connect: "Connect",
        tradenow: "Trade Now",
        powered: "Powered by",
        footer: "© 2024 BTI Group OÜ",
        support: "Support",
        selectchain: "Select a chain",
        join: "Join the DeFi Revolution with BTI Swap!",
        discord: "Discover the power of decentralized trading with BTI Swap.",
        welcome:"Welcome to BTI Swap",
        gateway:"Your Gateway to Decentralized Trading",
        swap: "Swap",
        from: "From",
        balance: "Balance",
        to: "To",
        maxslippage: "Max slippage:",
        rate: "Rate",
        minrecieve: "Minimum Received",
        price: "Price Impact",
        connectwallet: "Connect Wallet",
        setting: "Settings",
        timelimit: "Transaction time limit",
        minute: "Minutes",
        expertmode: "Expert Mode",
        selectwallet: "Select your Wallet",
        walletdescript: "Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely.",
        aboutbti:"About BTI Group OÜ",
        aboutbitdescript: "BTI Group is a pioneering force in blockchain and Web3 technologies, committed to fostering innovation and accessibility in decentralized finance and applications. With a focus on community-driven growth and cutting-edge solutions, we empower individuals and businesses to thrive in the digital economy.",
        unlock: "Unlock Superior Token Swaps with BTI Swap",
        unlockdes1: "Experience unparalleled trading rates with our Dynamic Trade Routing technology, harnessing liquidity from various DEXs to secure the best trade routes for you. Benefit from:",
        unlockdes2:"Guaranteed superior prices",
        unlockdes3:"Minimal slippage",
        unlockdes4:"Time and effort savings",
        contactus: "Contact Us",
        contactdiscript: "Have questions or feedback? Reach out to our team at info@btiswap.com or connect with us on social media. We're here to assist you every step of the way.",
        supportticket: "Support Ticket Form",
        supportdescript: "Please fill out the form below to raise a support ticket. Our team will respond promptly to assist you.",
        fullname: "Full Name",
        email: "Email",
        contactnumber: "Contract Number(Optional)",
        category: "Seclect Category",
        issuedescribe: "Describe Your Issue",
        attach:"Attach File",
        attachfiles: "Attach Files (Optional)",
        submit: "Submit",
        max:"Max",
        sure: "Are you sure?",
        suredescript: "Expert mode turns off the 'Confirm' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.",
        comfirmdescript: "Please type the word Confirm below to enable expert Mode",
        confirm: "Comfirm",
        maxslippagedescript: "During your swap if the price changes by more than this %, your transaction will revert.",
        timelimitdescript:"Transaction will revert if it is pending for longer than the indicated time.",
        expertmodedescript: "Turn this on to make trades with very high price impact or to set very high slippage tolerance. This can result in bad rates and loss of funds. Be cautious.",
        custom: "Custom",
        selecttoken:"Select Token",
        selecttokendescript: "Find a token by searching for its name or symbol or by pasting its address below.",
        searchplaceholder: "search token name or paste address",
        connectedwallet: "Connected Wallet"
    }
  },
  ch: {
    translation: {
      "logo": "BTI SWAP",
      "home": "首页",
      "trade": "交易",
      "about": "关于",
      "connect": "连接",
      "tradenow": "立即交易",
      "powered": "由...提供支持",
      "footer": "© 2024 BTI Group OÜ",
      "support": "支持",
      "selectchain": "选择链",
      "join": "加入BTI Swap的DeFi革命！",
      "discord": "发现BTI Swap去中心化交易的力量。",
      "welcome": "欢迎来到BTI Swap",
      "gateway": "您的去中心化交易门户",
      "swap": "交换",
      "from": "从",
      "balance": "余额",
      "to": "到",
      "maxslippage": "最大滑点：",
      "rate": "汇率",
      "minrecieve": "最低接收",
      "price": "价格影响",
      "connectwallet": "连接钱包",
      "setting": "设置",
      "timelimit": "交易时间限制",
      "minute": "分钟",
      "expertmode": "专家模式",
      "selectwallet": "选择您的钱包",
      "walletdescript": "请先连接以下钱包之一。请务必安全存储您的私钥或种子短语。",
      "aboutbti": "关于BTI Group OÜ",
      "aboutbitdescript": "BTI Group是区块链和Web3技术的先锋力量，致力于促进去中心化金融和应用的创新与可及性。我们专注于社区驱动的增长和尖端解决方案，帮助个人和企业在数字经济中蓬勃发展。",
      "unlock": "通过BTI Swap解锁优质代币交换",
      "unlockdes1": "体验我们动态交易路由技术提供的无与伦比的交易汇率，从各种DEX中获取流动性，为您确保最佳交易路线。受益于：",
      "unlockdes2": "保证优越的价格",
      "unlockdes3": "最小滑点",
      "unlockdes4": "节省时间和精力",
      "contactus": "联系我们",
      "contactdiscript": "有问题或反馈？请通过info@btiswap.com与我们的团队联系，或在社交媒体上与我们联系。我们在这里为您提供帮助。",
      "supportticket": "支持票务表单",
      "supportdescript": "请填写以下表单以提交支持票。我们的团队将及时回复以协助您。",
      "fullname": "全名",
      "email": "电子邮件",
      "contactnumber": "联系电话（可选）",
      "category": "选择类别",
      "issuedescribe": "描述您的问题",
      "attach": "附加文件",
      "attachfiles": "附加文件（可选）",
      "submit": "提交",
      sure: "你确定吗？",
      suredescript: "专家模式关闭“确认”交易提示，并允许高滑点交易，这通常会导致糟糕的汇率和资金损失。",
      comfirmdescript: "请在下面输入单词确认以启用专家模式。",
      confirm: "确认",
      maxslippagedescript: "在您的交换过程中，如果价格变化超过此百分比，您的交易将被撤回。",
      timelimitdescript: "如果交易待处理时间超过所示时间，将会撤回。",
      expertmodedescript: "打开此选项以进行具有非常高价格影响的交易或设置非常高的滑点容忍度。这可能导致糟糕的汇率和资金损失。请谨慎行事。",
      custom: "自定义",
      selecttoken: "选择代币",
      selecttokendescript: "通过搜索名称或符号或粘贴其地址来查找代币。",
      searchplaceholder: "搜索代币名称或粘贴地址"
    }
  },
  hd: {
    translation: {
      "logo": "BTI SWAP",
      "home": "होम",
      "trade": "व्यापार",
      "about": "के बारे में",
      "connect": "जोड़ें",
      "tradenow": "अभी व्यापार करें",
      "powered": "द्वारा संचालित",
      "footer": "© 2024 BTI Group OÜ",
      "support": "सहायता",
      "selectchain": "चेन चुनें",
      "join": "BTI स्वैप के साथ DeFi क्रांति में शामिल हों!",
      "discord": "BTI स्वैप के साथ विकेंद्रीकृत व्यापार की शक्ति का पता लगाएं।",
      "welcome": "BTI स्वैप में आपका स्वागत है",
      "gateway": "विकेंद्रीकृत व्यापार का आपका गेटवे",
      "swap": "स्वैप",
      "from": "से",
      "balance": "संतुलन",
      "to": "तक",
      "maxslippage": "अधिकतम स्लिपेज:",
      "rate": "दर",
      "minrecieve": "न्यूनतम प्राप्त",
      "price": "कीमत प्रभाव",
      "connectwallet": "वॉलेट कनेक्ट करें",
      "setting": "सेटिंग",
      "timelimit": "लेनदेन समय सीमा",
      "minute": "मिनट",
      "expertmode": "विशेषज्ञ मोड",
      "selectwallet": "अपने वॉलेट का चयन करें",
      "walletdescript": "नीचे दिए गए वॉलेट में से एक के साथ कनेक्ट करके शुरू करें। सुनिश्चित करें कि आप अपनी निजी कुंजी या बीज वाक्यांश को सुरक्षित रूप से स्टोर करें।",
      "aboutbti": "BTI Group OÜ के बारे में",
      "aboutbitdescript": "BTI Group ब्लॉकचेन और Web3 तकनीकों में एक अग्रणी शक्ति है, जो विकेंद्रीकृत वित्त और अनुप्रयोगों में नवाचार और पहुंच को बढ़ावा देने के लिए प्रतिबद्ध है। सामुदायिक संचालित विकास और अत्याधुनिक समाधानों पर ध्यान केंद्रित करते हुए, हम व्यक्तियों और व्यवसायों को डिजिटल अर्थव्यवस्था में फलने-फूलने में सक्षम बनाते हैं।",
      "unlock": "BTI Swap के साथ श्रेष्ठ टोकन स्वैप अनलॉक करें",
      "unlockdes1": "हमारी डायनामिक ट्रेड रूटिंग तकनीक के साथ बेजोड़ व्यापार दरों का अनुभव करें, जो आपके लिए सर्वोत्तम व्यापार मार्गों को सुरक्षित करने के लिए विभिन्न DEXs से तरलता को समेकित करता है। लाभ उठाएं:",
      "unlockdes2": "गारंटीकृत श्रेष्ठ मूल्य",
      "unlockdes3": "न्यूनतम स्लिपेज",
      "unlockdes4": "समय और प्रयास की बचत",
      "contactus": "हमसे संपर्क करें",
      "contactdiscript": "क्या आपके पास प्रश्न या फीडबैक है? हमारी टीम से info@btiswap.com पर संपर्क करें या सोशल मीडिया पर हमारे साथ जुड़ें। हम हर कदम पर आपकी सहायता करने के लिए यहां हैं।",
      "supportticket": "सहायता टिकट फॉर्म",
      "supportdescript": "कृपया समर्थन टिकट उठाने के लिए नीचे दिए गए फॉर्म को भरें। हमारी टीम आपकी सहायता के लिए तुरंत प्रतिक्रिया देगी।",
      "fullname": "पूरा नाम",
      "email": "ईमेल",
      "contactnumber": "संपर्क नंबर (वैकल्पिक)",
      "category": "श्रेणी चुनें",
      "issuedescribe": "अपने मुद्दे का वर्णन करें",
      "attach": "फाइल संलग्न करें",
      "attachfiles": "फाइलें संलग्न करें (वैकल्पिक)",
      "submit": "जमा करें",
      max:"मैक्स",
      sure: "क्या आप निश्चित हैं?",
      suredescript: "विशेषज्ञ मोड 'पुष्टि' लेनदेन संकेत को बंद कर देता है, और उच्च स्लिपेज ट्रेडों की अनुमति देता है जो अक्सर खराब दरों और धन के नुकसान का परिणाम होता है।",
      comfirmdescript: "कृपया विशेषज्ञ मोड सक्षम करने के लिए नीचे शब्द पुष्टि टाइप करें।",
      confirm: "पुष्टि करें",
      maxslippagedescript: "आपके स्वैप के दौरान यदि कीमत इस % से अधिक बदलती है, तो आपका लेनदेन वापस हो जाएगा।",
      timelimitdescript: "यदि यह लेनदेन निर्धारित समय से लंबित है, तो यह वापस हो जाएगा।",
      expertmodedescript: "इस विकल्प को चालू करें ताकि बहुत उच्च मूल्य प्रभाव के साथ व्यापार किया जा सके या बहुत उच्च स्लिपेज सहिष्णुता निर्धारित की जा सके। इससे खराब दरें और धन का नुकसान हो सकता है। सावधान रहें।",
      custom: "कस्टम",
      selecttoken: "टोकन चुनें",
      selecttokendescript: "इसके नाम या प्रतीक को खोजकर या नीचे अपना पता चिपकाकर एक टोकन खोजें।",
      searchplaceholder: "टोकन नाम खोजें या पता चिपकाएँ"
    }
  },
  sh: {
    "translation": {
      "logo": "BTI SWAP",
      "home": "Inicio",
      "trade": "Comercio",
      "about": "Acerca de",
      "connect": "Conectar",
      "tradenow": "Comercia Ahora",
      "powered": "Impulsado por",
      "footer": "© 2024 BTI Group OÜ",
      "support": "Soporte",
      "selectchain": "Seleccionar una cadena",
      "join": "¡Únete a la revolución DeFi con BTI Swap!",
      "discord": "Descubre el poder del trading descentralizado con BTI Swap.",
      "welcome": "Bienvenido a BTI Swap",
      "gateway": "Tu puerta de entrada al comercio descentralizado",
      "swap": "Intercambiar",
      "from": "Desde",
      "balance": "Saldo",
      "to": "Hasta",
      "maxslippage": "Deslizamiento máximo:",
      "rate": "Tasa",
      "minrecieve": "Mínimo Recibido",
      "price": "Impacto en el Precio",
      "connectwallet": "Conectar Billetera",
      "setting": "Configuraciones",
      "timelimit": "Límite de tiempo de transacción",
      "minute": "Minutos",
      "expertmode": "Modo Experto",
      "selectwallet": "Selecciona tu Billetera",
      "walletdescript": "Comienza conectando con una de las billeteras a continuación. Asegúrate de almacenar tus claves privadas o frase semilla de manera segura.",
      "aboutbti": "Acerca de BTI Group OÜ",
      "aboutbitdescript": "BTI Group es una fuerza pionera en tecnologías blockchain y Web3, comprometida a fomentar la innovación y accesibilidad en las finanzas descentralizadas y aplicaciones. Con un enfoque en el crecimiento impulsado por la comunidad y soluciones de vanguardia, empoderamos a individuos y empresas para prosperar en la economía digital.",
      "unlock": "Desbloquea intercambios de tokens superiores con BTI Swap",
      "unlockdes1": "Experimenta tasas de comercio inigualables con nuestra tecnología de enrutamiento comercial dinámico, aprovechando la liquidez de varios DEX para asegurar las mejores rutas comerciales para ti. Benefíciate de:",
      "unlockdes2": "Precios superiores garantizados",
      "unlockdes3": "Deslizamiento mínimo",
      "unlockdes4": "Ahorro de tiempo y esfuerzo",
      "contactus": "Contáctanos",
      "contactdiscript": "¿Tienes preguntas o comentarios? Comunícate con nuestro equipo en info@btiswap.com o conéctate con nosotros en redes sociales. Estamos aquí para ayudarte en cada paso del camino.",
      "supportticket": "Formulario de Ticket de Soporte",
      "supportdescript": "Por favor, completa el formulario a continuación para generar un ticket de soporte. Nuestro equipo responderá rápidamente para asistirte.",
      "fullname": "Nombre Completo",
      "email": "Correo Electrónico",
      "contactnumber": "Número de Contacto (Opcional)",
      "category": "Seleccionar Categoría",
      "issuedescribe": "Describe tu Problema",
      "attach": "Adjuntar Archivo",
      "attachfiles": "Adjuntar Archivos (Opcional)",
      "submit": "Enviar",
      max:"Max", 
      sure: "¿Estás seguro?",
      suredescript: "El modo experto desactiva el aviso de 'Confirmar' transacción y permite operaciones con alta slippage que a menudo resultan en malas tasas y pérdida de fondos.",
      comfirmdescript: "Por favor, escribe la palabra Confirmar a continuación para habilitar el modo experto.",
      confirm: "Confirmar",
      maxslippagedescript: "Durante tu intercambio, si el precio cambia más de este %, tu transacción se revertirá.",
      timelimitdescript: "La transacción se revertirá si está pendiente por más tiempo del indicado.",
      expertmodedescript: "Activa esto para realizar operaciones con un impacto en el precio muy alto o para establecer una tolerancia de slippage muy alta. Esto puede resultar en malas tasas y pérdida de fondos. Ten cuidado.",
      custom: "Personalizado",
      selecttoken: "Seleccionar Token",
      selecttokendescript: "Encuentra un token buscando su nombre o símbolo o pegando su dirección a continuación.",
      searchplaceholder: "buscar nombre de token o pegar dirección"   
    }
  },
  ab: {
    "translation": {
      "logo": "BTI SWAP",
      "home": "الرئيسية",
      "trade": "تجارة",
      "about": "حول",
      "connect": "اتصل",
      "tradenow": "تجارة الآن",
      "powered": "مدعوم من",
      "footer": "© 2024 BTI Group OÜ",
      "support": "الدعم",
      "selectchain": "اختر سلسلة",
      "join": "انضم إلى ثورة DeFi مع BTI Swap!",
      "discord": "اكتشف قوة التداول اللامركزي مع BTI Swap.",
      "welcome": "مرحبًا بك في BTI Swap",
      "gateway": "بوابتك إلى التجارة اللامركزية",
      "swap": "تبادل",
      "from": "من",
      "balance": "الرصيد",
      "to": "إلى",
      "maxslippage": "أقصى انزلاق:",
      "rate": "المعدل",
      "minrecieve": "الحد الأدنى المستلم",
      "price": "أثر السعر",
      "connectwallet": "اتصل بمحفظتك",
      "setting": "الإعدادات",
      "timelimit": "حد زمن المعاملة",
      "minute": "دقائق",
      "expertmode": "وضع الخبراء",
      "selectwallet": "اختر محفظتك",
      "walletdescript": "ابدأ بالاتصال بأحد المحافظ أدناه. تأكد من تخزين مفاتيحك الخاصة أو عبارة الاسترداد بأمان.",
      "aboutbti": "حول BTI Group OÜ",
      "aboutbitdescript": "BTI Group هي قوة رائدة في تقنيات البلوكشين وWeb3، ملتزمة بتعزيز الابتكار والوصول في التمويل والتطبيقات اللامركزية. مع التركيز على النمو المدفوع من المجتمع والحلول المتطورة، نُمكّن الأفراد والشركات من الازدهار في الاقتصاد الرقمي.",
      "unlock": "افتح تبادلات الرموز المتفوقة مع BTI Swap",
      "unlockdes1": "اختبر أسعار تداول لا مثيل لها مع تقنية توجيه التجارة الديناميكية لدينا، مستفيدًا من السيولة من مختلف DEXs لتأمين أفضل طرق التجارة لك. استفد من:",
      "unlockdes2": "أسعار متفوقة مضمونة",
      "unlockdes3": "انزلاق الحد الأدنى",
      "unlockdes4": "توفير الوقت والجهد",
      "contactus": "اتصل بنا",
      "contactdiscript": "هل لديك أسئلة أو تعليقات؟ تواصل مع فريقنا على info@btiswap.com أو تواصل معنا على وسائل التواصل الاجتماعي. نحن هنا لمساعدتك في كل خطوة على الطريق.",
      "supportticket": "نموذج تذكرة الدعم",
      "supportdescript": "يرجى ملء النموذج أدناه لرفع تذكرة دعم. سيستجيب فريقنا بسرعة لمساعدتك.",
      "fullname": "الاسم الكامل",
      "email": "البريد الإلكتروني",
      "contactnumber": "رقم الاتصال (اختياري)",
      "category": "اختر الفئة",
      "issuedescribe": "وصف مشكلتك",
      "attach": "إرفاق ملف",
      "attachfiles": "إرفاق ملفات (اختياري)",
      "submit": "إرسال",
      max:"ماكس",
      sure: "هل أنت متأكد؟",
      suredescript: "وضع الخبراء يقوم بإيقاف طلب 'تأكيد' المعاملة، ويسمح بتداولات ذات انزلاق عالي غالبًا ما تؤدي إلى معدلات سيئة وفقدان الأموال.",
      comfirmdescript: "يرجى كتابة كلمة تأكيد أدناه لتمكين وضع الخبراء.",
      confirm: "تأكيد",
      maxslippagedescript: "خلال التبادل الخاص بك، إذا تغير السعر بأكثر من هذه النسبة المئوية، ستتراجع معاملتك.",
      timelimitdescript: "ستتراجع المعاملة إذا كانت قيد الانتظار لفترة أطول من الوقت المحدد.",
      expertmodedescript: "قم بتشغيل هذا لإجراء تداولات ذات تأثير سعر مرتفع جدًا أو لتعيين تحمل انزلاق مرتفع جدًا. قد يؤدي ذلك إلى معدلات سيئة وفقدان الأموال. كن حذرًا.",
      custom: "مخصص",
      selecttoken: "اختر رمز",
      selecttokendescript: "ابحث عن رمز من خلال البحث عن اسمه أو رمزه أو عن طريق لصق عنوانه أدناه.",
      searchplaceholder: "ابحث عن اسم الرمز أو ألصق العنوان"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
