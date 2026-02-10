import {
  Wrench,
  Cog,
  Zap,
  Cpu,
  PaintRoller,
  ShieldCheck,
  Truck,
} from 'lucide-react';

export const services = [
  {
    title: 'قسم الميكانيك',
    icon: Wrench,
    shortDescription:
      'خبرة واسعة في جميع أعمال الميكانيكا للسيارات الألمانية والأوروبية والصينية.',
    aiExplanation:
      'في قسم الميكانيك بمركز اوتو كرافت، نفخر بتقديم خدمات ميكانيكية شاملة ومتخصصة. فريقنا من الفنيين المهرة مجهز بأحدث الأدوات والمعرفة التقنية للتعامل مع كافة التحديات الميكانيكية، من المحركات وناقلات الحركة إلى أنظمة التعليق والمكابح، مع ضمان أعلى مستويات الدقة والجودة.',
    image: 'mechanics',
  },
  {
    title: 'توضيب المكائن والجيربوكس',
    icon: Cog,
    shortDescription: 'إعادة بناء وتوضيب المحركات وناقلات الحركة للسيارات الألمانية والأوروبية والصينية بأعلى دقة.',
    aiExplanation:
      'نتفهم أن المحرك وناقل الحركة هما قلب السيارة. لهذا، نقدم خدمة توضيب شاملة تعيد لهما الحياة. باستخدام قطع غيار أصلية ومعايير تصنيع دقيقة، نضمن استعادة الأداء الأمثل والكفاءة الكاملة لسيارتك.',
    image: 'engine-repair',
  },
  {
    title: 'قسم الأعطال الكهربائية',
    icon: Zap,
    shortDescription: 'تشخيص وإصلاح كافة الأعطال والأنظمة الكهربائية المعقدة.',
    aiExplanation:
      'السيارات الحديثة تعتمد بشكل كبير على الأنظمة الكهربائية المعقدة. يمتلك خبراؤنا المهارة والأجهزة المتقدمة لتشخيص وإصلاح أي عطل كهربائي، من مشاكل الأسلاك والبطارية إلى أعطال الحساسات والأنظمة الإلكترونية المساعدة للسائق.',
    image: 'electrical-faults',
  },
  {
    title: 'برمجة كمبيوتر السيارة',
    icon: Cpu,
    shortDescription: 'إصلاح وبرمجة وحدات التحكم الإلكترونية (ECU) باحترافية.',
    aiExplanation:
      'عقل سيارتك هو وحدة التحكم الإلكترونية. نحن متخصصون في برمجة وإصلاح هذه الوحدات، بما في ذلك تحديثات البرامج، وإعادة البرمجة بعد استبدال المكونات، وحل المشاكل البرمجية التي تؤثر على أداء السيارة.',
    image: 'ecu-programming',
  },
  {
    title: 'قسم السمكرة والدهان',
    icon: PaintRoller,
    shortDescription:
      'إصلاحات هيكل احترافية ودهان عالي الجودة مطابق لمواصفات المصنع.',
    aiExplanation:
      'من الخدوش البسيطة إلى الأضرار الهيكلية الكبيرة، يعيد قسم السمكرة والدهان لسيارتك مظهرها الأصلي. نستخدم أفران دهان متطورة وتقنيات مطابقة الألوان بالكمبيوتر لضمان لمسة نهائية خالية من العيوب ومتينة.',
    image: 'bodywork-paint',
  },
  {
    title: 'الصيانة الدورية',
    icon: ShieldCheck,
    shortDescription:
      'جداول صيانة شاملة للحفاظ على أداء سيارتك وموثوقيتها.',
    aiExplanation:
      'الصيانة الدورية هي مفتاح طول عمر سيارتك وأدائها الأمثل. نتبع جداول الصيانة الموصى بها من الشركة المصنعة، مع إجراء فحوصات شاملة وتغيير الزيوت والسوائل والفلاتر اللازمة لضمان بقاء سيارتك في أفضل حالة.',
    image: 'routine-maintenance',
  },
  {
    title: 'ورشة متنقلة',
    icon: Truck,
    shortDescription:
      'خدمات صيانة وإصلاح سريعة تصل إلى باب منزلك أو مكان عملك.',
    aiExplanation:
      'لأننا نقدر وقتك، نقدم خدمة الورشة المتنقلة المجهزة بالكامل للتعامل مع الأعطال الشائعة والصيانة الدورية في موقعك. سواء كنت في المنزل أو العمل، يصلك فريقنا لتقديم خدمة سريعة وموثوقة دون الحاجة لزيارة المركز.',
    image: 'mobile-workshop',
  },
];

export const brands: {
  name: string;
  type: 'component' | 'image';
  src?: string;
}[] = [
  { name: 'Mercedes', src: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/mercedes.svg', type: 'image' },
  { name: 'BMW', src: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/bmw.svg', type: 'image' },
  { name: 'Audi', src: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/audi.svg', type: 'image' },
  { name: 'Porsche', src: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/porsche.svg', type: 'image' },
  { name: 'Land Rover', src: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/landrover.svg', type: 'image' },
  { name: 'Jaguar', src: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/شعار_شركة_جاغوار.png', type: 'image' },
  { name: 'Rolls Royce', src: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/rolls-royce-svgrepo-com.svg', type: 'image' },
  { name: 'Mini', src: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/pngegg.png', type: 'image' },
  { name: 'Changan', src: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/Changan-Symbol-scaled.png', type: 'image' },
  { name: 'BYD', src: 'https://xn--ogbhrq.vip/wp-content/uploads/2026/02/Byd-Logo-01.png', type: 'image' },
];

export const bodyworkImages = [
  { id: 'bodywork-before-1' },
  { id: 'bodywork-after-1' },
  { id: 'bodywork-before-2' },
  { id: 'bodywork-after-2' },
];
