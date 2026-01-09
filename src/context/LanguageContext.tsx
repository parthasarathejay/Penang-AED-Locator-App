import React, { useState, createContext, useContext } from 'react';
type Language = 'en' | 'ms' | 'zh' | 'ta';
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}
const translations = {
  en: {
    appName: 'Penang AED Locator',
    home: 'Home',
    submitAED: 'Submit AED',
    reportIssue: 'Report Issue',
    cprGuide: 'CPR Guide',
    training: 'Training',
    contact: 'Contact',
    emergency: 'Emergency Call',
    nearbyAEDs: 'Nearby AEDs',
    aedStatus: 'AED Status',
    available24_7: 'Available 24/7',
    limitedHours: 'Limited Hours',
    outOfService: 'Out of Service',
    cprSteps: 'CPR Steps',
    step1: '1. Check responsiveness',
    step2: '2. Call for help (999)',
    step3: '3. Start chest compressions',
    step4: '4. Give rescue breaths',
    step5: '5. Continue CPR until help arrives',
    startMetronome: 'Start Metronome',
    stopMetronome: 'Stop Metronome',
    upcomingTraining: 'Upcoming Training',
    submitNewAED: 'Submit New AED',
    location: 'Location',
    accessHours: 'Access Hours',
    photo: 'Photo',
    submit: 'Submit',
    reportMissingAED: 'Report Missing or Damaged AED',
    description: 'Description',
    feedbackForm: 'Feedback Form',
    message: 'Message',
    send: 'Send',
    languageSelector: 'Language',
    getDirections: 'Get Directions',
    googleMaps: 'Google Maps',
    waze: 'Waze',
    distance: 'Distance',
    youAreHere: 'You are here'
  },
  ms: {
    appName: 'Penang AED Locator',
    home: 'Laman Utama',
    submitAED: 'Hantar AED',
    reportIssue: 'Laporkan Isu',
    cprGuide: 'Panduan CPR',
    training: 'Latihan',
    contact: 'Hubungi',
    emergency: 'Panggilan Kecemasan',
    nearbyAEDs: 'AED Berhampiran',
    aedStatus: 'Status AED',
    available24_7: 'Tersedia 24/7',
    limitedHours: 'Waktu Terhad',
    outOfService: 'Tidak Beroperasi',
    cprSteps: 'Langkah-langkah CPR',
    step1: '1. Periksa tindak balas',
    step2: '2. Hubungi bantuan (999)',
    step3: '3. Mulakan kompresi dada',
    step4: '4. Berikan nafas bantuan',
    step5: '5. Teruskan CPR sehingga bantuan tiba',
    startMetronome: 'Mulakan Metronome',
    stopMetronome: 'Hentikan Metronome',
    upcomingTraining: 'Latihan Akan Datang',
    submitNewAED: 'Hantar AED Baru',
    location: 'Lokasi',
    accessHours: 'Waktu Akses',
    photo: 'Gambar',
    submit: 'Hantar',
    reportMissingAED: 'Laporkan AED Hilang atau Rosak',
    description: 'Penerangan',
    feedbackForm: 'Borang Maklum Balas',
    message: 'Mesej',
    send: 'Hantar',
    languageSelector: 'Bahasa',
    getDirections: 'Dapatkan Arah',
    googleMaps: 'Google Maps',
    waze: 'Waze',
    distance: 'Jarak',
    youAreHere: 'Anda di sini'
  },
  zh: {
    appName: '槟城AED定位器',
    home: '主页',
    submitAED: '提交AED',
    reportIssue: '报告问题',
    cprGuide: 'CPR指南',
    training: '培训',
    contact: '联系',
    emergency: '紧急呼叫',
    nearbyAEDs: '附近的AED',
    aedStatus: 'AED状态',
    available24_7: '24/7可用',
    limitedHours: '有限时间',
    outOfService: '停止服务',
    cprSteps: 'CPR步骤',
    step1: '1. 检查反应',
    step2: '2. 寻求帮助 (999)',
    step3: '3. 开始胸部按压',
    step4: '4. 进行人工呼吸',
    step5: '5. 继续CPR直到帮助到达',
    startMetronome: '启动节拍器',
    stopMetronome: '停止节拍器',
    upcomingTraining: '即将举行的培训',
    submitNewAED: '提交新AED',
    location: '位置',
    accessHours: '开放时间',
    photo: '照片',
    submit: '提交',
    reportMissingAED: '报告丢失或损坏的AED',
    description: '描述',
    feedbackForm: '反馈表',
    message: '信息',
    send: '发送',
    languageSelector: '语言',
    getDirections: '获取路线',
    googleMaps: '谷歌地图',
    waze: 'Waze',
    distance: '距离',
    youAreHere: '您在这里'
  },
  ta: {
    appName: 'பெனாங் AED கண்டுபிடிப்பான்',
    home: 'முகப்பு',
    submitAED: 'AED சமர்ப்பிக்க',
    reportIssue: 'சிக்கலை புகாரளிக்க',
    cprGuide: 'CPR வழிகாட்டி',
    training: 'பயிற்சி',
    contact: 'தொடர்பு',
    emergency: 'அவசர அழைப்பு',
    nearbyAEDs: 'அருகிலுள்ள AEDகள்',
    aedStatus: 'AED நிலை',
    available24_7: '24/7 கிடைக்கும்',
    limitedHours: 'வரையறுக்கப்பட்ட நேரங்கள்',
    outOfService: 'சேவையில் இல்லை',
    cprSteps: 'CPR படிகள்',
    step1: '1. பதிலளிப்பை சரிபார்க்கவும்',
    step2: '2. உதவிக்கு அழைக்கவும் (999)',
    step3: '3. மார்பு அழுத்தங்களைத் தொடங்குங்கள்',
    step4: '4. மீட்பு மூச்சுக்களைக் கொடுங்கள்',
    step5: '5. உதவி வரும் வரை CPR தொடரவும்',
    startMetronome: 'மெட்ரோனோம் தொடங்க',
    stopMetronome: 'மெட்ரோனோம் நிறுத்த',
    upcomingTraining: 'வரவிருக்கும் பயிற்சி',
    submitNewAED: 'புதிய AED சமர்ப்பிக்க',
    location: 'இடம்',
    accessHours: 'அணுகல் நேரங்கள்',
    photo: 'புகைப்படம்',
    submit: 'சமர்ப்பிக்க',
    reportMissingAED: 'காணாமல் போன அல்லது சேதமடைந்த AED அறிக்கை',
    description: 'விளக்கம்',
    feedbackForm: 'கருத்து படிவம்',
    message: 'செய்தி',
    send: 'அனுப்பு',
    languageSelector: 'மொழி',
    getDirections: 'வழிகளைப் பெறுங்கள்',
    googleMaps: 'கூகுள் மேப்ஸ்',
    waze: 'Waze',
    distance: 'தூரம்',
    youAreHere: 'நீங்கள் இங்கே இருக்கிறீர்கள்'
  }
};
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
export const LanguageProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [language, setLanguage] = useState<Language>('en');
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key;
  };
  return <LanguageContext.Provider value={{
    language,
    setLanguage,
    t
  }}>
      {children}
    </LanguageContext.Provider>;
};
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};