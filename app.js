/* ==================================================================
   ParkEasy - Car Parking Management System
   ================================================================== */

const DB_KEY = 'parkeasy_db';
const SESSION_KEY = 'parkeasy_session';

/* ==================================================================
   LANGUAGE STRINGS
   ================================================================== */
const STRINGS = {
  en: {
    active_vehicles: 'Active Vehicles',
    todays_revenue: "Today's Revenue",
    total_tickets: 'Total Tickets',
    today: 'Today',
    todays_activity: "Today's Activity",
    ticket_no: 'Ticket #',
    vehicle: 'Vehicle',
    type: 'Type',
    entry: 'Entry',
    exit: 'Exit',
    status: 'Status',
    fee: 'Fee',
    vehicle_number: 'Vehicle Number *',
    vehicle_type: 'Vehicle Type *',
    owner_name: 'Owner Name (Optional)',
    owner: 'Owner',
    phone: 'Phone (Optional)',
    generate_ticket: 'Generate Ticket',
    clear: 'Clear',
    duration: 'Duration',
    est_fee: 'Est. Fee',
    action: 'Action',
    history: 'Ticket History',
    rate_management: 'Vehicle Rate Management',
    hourly_rate: 'Hourly Rate',
    daily_max: 'Daily Max',
    actions: 'Actions',
    backup: 'Backup Data',
    download_backup: 'Download Backup',
    restore: 'Restore Data',
    restore_backup: 'Restore Backup',
    clear_data: 'Clear Data',
    settings: 'Application Settings',
    currency: 'Currency',
    receipt_header: 'Receipt Header / Company Name',
    receipt_footer: 'Receipt Footer Message',
    address: 'Address / Contact',
    theme: 'Theme',
    save_settings: 'Save Settings',
    reset: 'Reset to Default',
    help_title: 'Help & User Guide',
    receipt: 'Receipt',
    ticket_issued: 'Ticket issued',
    ticket_closed: 'Ticket closed',
    settings_saved: 'Settings saved',
    settings_reset: 'Settings reset',
    backup_downloaded: 'Backup downloaded',
    backup_restored: 'Backup restored',
    rate_updated: 'Rate updated',
    cleared: 'Cleared',
    account_created: 'Account created! Welcome',
    invalid_login: 'Invalid username or password',
    issue_ticket: 'Issue New Parking Ticket',
  },
  hi: {
    active_vehicles: 'सक्रिय वाहन',
    todays_revenue: 'आज की आय',
    total_tickets: 'कुल टिकट',
    today: 'आज',
    todays_activity: 'आज की गतिविधि',
    ticket_no: 'टिकट #',
    vehicle: 'वाहन',
    type: 'प्रकार',
    entry: 'प्रवेश',
    exit: 'निकास',
    status: 'स्थिति',
    fee: 'शुल्क',
    vehicle_number: 'वाहन नंबर *',
    vehicle_type: 'वाहन प्रकार *',
    owner_name: 'मालिक का नाम (वैकल्पिक)',
    owner: 'मालिक',
    phone: 'फ़ोन (वैकल्पिक)',
    generate_ticket: 'टिकट बनाएँ',
    clear: 'साफ़ करें',
    duration: 'अवधि',
    est_fee: 'अनुमानित शुल्क',
    action: 'कार्य',
    history: 'टिकट इतिहास',
    rate_management: 'वाहन दर प्रबंधन',
    hourly_rate: 'प्रति घंटा दर',
    daily_max: 'दैनिक अधिकतम',
    actions: 'क्रियाएँ',
    backup: 'डेटा बैकअप',
    download_backup: 'बैकअप डाउनलोड',
    restore: 'डेटा पुनर्स्थापित',
    restore_backup: 'बैकअप पुनर्स्थापित',
    clear_data: 'डेटा साफ़ करें',
    settings: 'एप्लिकेशन सेटिंग्स',
    currency: 'मुद्रा',
    receipt_header: 'रसीद शीर्षक / कंपनी का नाम',
    receipt_footer: 'रसीद फुटर संदेश',
    address: 'पता / संपर्क',
    theme: 'थीम',
    save_settings: 'सेटिंग्स सहेजें',
    reset: 'डिफ़ॉल्ट पर रीसेट',
    help_title: 'सहायता और उपयोगकर्ता गाइड',
    receipt: 'रसीद',
    ticket_issued: 'टिकट जारी',
    ticket_closed: 'टिकट बंद',
    settings_saved: 'सेटिंग्स सहेजी गईं',
    settings_reset: 'सेटिंग्स रीसेट',
    backup_downloaded: 'बैकअप डाउनलोड',
    backup_restored: 'बैकअप पुनर्स्थापित',
    rate_updated: 'दर अपडेट',
    cleared: 'साफ़',
    account_created: 'खाता बनाया! स्वागत',
    invalid_login: 'अमान्य उपयोगकर्ता नाम या पासवर्ड',
    issue_ticket: 'नया पार्किंग टिकट जारी करें',
  },
  es: {
    active_vehicles: 'Vehículos Activos',
    todays_revenue: 'Ingresos de Hoy',
    total_tickets: 'Tickets Totales',
    today: 'Hoy',
    todays_activity: 'Actividad de Hoy',
    ticket_no: 'Ticket #',
    vehicle: 'Vehículo',
    type: 'Tipo',
    entry: 'Entrada',
    exit: 'Salida',
    status: 'Estado',
    fee: 'Tarifa',
    vehicle_number: 'Número de Vehículo *',
    vehicle_type: 'Tipo de Vehículo *',
    owner_name: 'Nombre (Opcional)',
    owner: 'Dueño',
    phone: 'Teléfono (Opcional)',
    generate_ticket: 'Generar Ticket',
    clear: 'Limpiar',
    duration: 'Duración',
    est_fee: 'Tarifa Est.',
    action: 'Acción',
    history: 'Historial',
    rate_management: 'Gestión de Tarifas',
    hourly_rate: 'Tarifa por Hora',
    daily_max: 'Máx. Diario',
    actions: 'Acciones',
    backup: 'Respaldo',
    download_backup: 'Descargar Respaldo',
    restore: 'Restaurar',
    restore_backup: 'Restaurar Respaldo',
    clear_data: 'Borrar Datos',
    settings: 'Configuración',
    currency: 'Moneda',
    receipt_header: 'Encabezado del Recibo',
    receipt_footer: 'Pie del Recibo',
    address: 'Dirección / Contacto',
    theme: 'Tema',
    save_settings: 'Guardar',
    reset: 'Restablecer',
    help_title: 'Ayuda',
    receipt: 'Recibo',
    ticket_issued: 'Ticket emitido',
    ticket_closed: 'Ticket cerrado',
    settings_saved: 'Configuración guardada',
    settings_reset: 'Configuración restablecida',
    backup_downloaded: 'Respaldo descargado',
    backup_restored: 'Respaldo restaurado',
    rate_updated: 'Tarifa actualizada',
    cleared: 'Borrado',
    account_created: '¡Cuenta creada! Bienvenido',
    invalid_login: 'Usuario o contraseña inválidos',
    issue_ticket: 'Emitir Nuevo Ticket',
  },
  fr: {
    active_vehicles: 'Véhicules Actifs',
    todays_revenue: "Revenu d'Aujourd'hui",
    total_tickets: 'Tickets Total',
    today: "Aujourd'hui",
    todays_activity: "Activité d'Aujourd'hui",
    ticket_no: 'Ticket #',
    vehicle: 'Véhicule',
    type: 'Type',
    entry: 'Entrée',
    exit: 'Sortie',
    status: 'Statut',
    fee: 'Tarif',
    vehicle_number: 'Immatriculation *',
    vehicle_type: 'Type de Véhicule *',
    owner_name: 'Propriétaire (Optionnel)',
    owner: 'Propriétaire',
    phone: 'Téléphone (Optionnel)',
    generate_ticket: 'Générer Ticket',
    clear: 'Effacer',
    duration: 'Durée',
    est_fee: 'Tarif Est.',
    action: 'Action',
    history: 'Historique',
    rate_management: 'Gestion des Tarifs',
    hourly_rate: 'Tarif Horaire',
    daily_max: 'Max Journalier',
    actions: 'Actions',
    backup: 'Sauvegarde',
    download_backup: 'Télécharger',
    restore: 'Restaurer',
    restore_backup: 'Restaurer Sauvegarde',
    clear_data: 'Effacer Données',
    settings: 'Paramètres',
    currency: 'Devise',
    receipt_header: 'En-tête du Reçu',
    receipt_footer: 'Pied du Reçu',
    address: 'Adresse / Contact',
    theme: 'Thème',
    save_settings: 'Enregistrer',
    reset: 'Réinitialiser',
    help_title: 'Aide',
    receipt: 'Reçu',
    ticket_issued: 'Ticket émis',
    ticket_closed: 'Ticket fermé',
    settings_saved: 'Paramètres enregistrés',
    settings_reset: 'Paramètres réinitialisés',
    backup_downloaded: 'Sauvegarde téléchargée',
    backup_restored: 'Sauvegarde restaurée',
    rate_updated: 'Tarif mis à jour',
    cleared: 'Effacé',
    account_created: 'Compte créé ! Bienvenue',
    invalid_login: 'Identifiants invalides',
    issue_ticker: 'Émettre un Nouveau Ticket',
    issue_ticket: 'Émettre un Nouveau Ticket',
  },
  ar: {
    active_vehicles: 'المركبات النشطة',
    todays_revenue: 'إيرادات اليوم',
    total_tickets: 'إجمالي التذاكر',
    today: 'اليوم',
    todays_activity: 'نشاط اليوم',
    ticket_no: 'تذكرة #',
    vehicle: 'مركبة',
    type: 'نوع',
    entry: 'دخول',
    exit: 'خروج',
    status: 'الحالة',
    fee: 'رسم',
    vehicle_number: 'رقم المركبة *',
    vehicle_type: 'نوع المركبة *',
    owner_name: 'اسم المالك (اختياري)',
    owner: 'المالك',
    phone: 'الهاتف (اختياري)',
    generate_ticket: 'إنشاء تذكرة',
    clear: 'مسح',
    duration: 'المدة',
    est_fee: 'الرسوم المقدرة',
    action: 'إجراء',
    history: 'السجل',
    rate_management: 'إدارة الأسعار',
    hourly_rate: 'السعر بالساعة',
    daily_max: 'الحد اليومي',
    actions: 'الإجراءات',
    backup: 'نسخ احتياطي',
    download_backup: 'تنزيل النسخة',
    restore: 'استعادة',
    restore_backup: 'استعادة النسخة',
    clear_data: 'مسح البيانات',
    settings: 'الإعدادات',
    currency: 'العملة',
    receipt_header: 'ترويسة الإيصال',
    receipt_footer: 'تذييل الإيصال',
    address: 'العنوان / الاتصال',
    theme: 'المظهر',
    save_settings: 'حفظ',
    reset: 'إعادة تعيين',
    help_title: 'المساعدة',
    receipt: 'إيصال',
    ticket_issued: 'تم إصدار التذكرة',
    ticket_closed: 'تم إغلاق التذكرة',
    settings_saved: 'تم حفظ الإعدادات',
    settings_reset: 'تمت إعادة تعيين الإعدادات',
    backup_downloaded: 'تم تنزيل النسخة',
    backup_restored: 'تمت استعادة النسخة',
    rate_updated: 'تم تحديث السعر',
    cleared: 'تم المسح',
    account_created: 'تم إنشاء الحساب! مرحبا',
    invalid_login: 'اسم مستخدم أو كلمة مرور غير صحيحة',
    issue_ticket: 'إصدار تذكرة جديدة',
  },
  zh: {
    active_vehicles: '在场车辆',
    todays_revenue: '今日收入',
    total_tickets: '总票数',
    today: '今天',
    todays_activity: '今日活动',
    ticket_no: '票号',
    vehicle: '车辆',
    type: '类型',
    entry: '入场',
    exit: '出场',
    status: '状态',
    fee: '费用',
    vehicle_number: '车牌号 *',
    vehicle_type: '车辆类型 *',
    owner_name: '车主(可选)',
    owner: '车主',
    phone: '电话(可选)',
    generate_ticket: '生成票',
    clear: '清空',
    duration: '时长',
    est_fee: '预计费用',
    action: '操作',
    history: '历史记录',
    rate_management: '费率管理',
    hourly_rate: '每小时费率',
    daily_max: '每日上限',
    actions: '操作',
    backup: '备份',
    download_backup: '下载备份',
    restore: '恢复',
    restore_backup: '恢复备份',
    clear_data: '清除数据',
    settings: '设置',
    currency: '货币',
    receipt_header: '收据标题',
    receipt_footer: '收据页脚',
    address: '地址/联系方式',
    theme: '主题',
    save_settings: '保存设置',
    reset: '重置',
    help_title: '帮助',
    receipt: '收据',
    ticket_issued: '已发券',
    ticket_closed: '已关单',
    settings_saved: '设置已保存',
    settings_reset: '设置已重置',
    backup_downloaded: '已下载备份',
    backup_restored: '已恢复备份',
    rate_updated: '已更新费率',
    cleared: '已清除',
    account_created: '账户已创建!欢迎',
    invalid_login: '用户名或密码错误',
    issue_ticket: '发放新停车票',
  },
  bn: {
    active_vehicles: 'সক্রিয় যানবাহন',
    todays_revenue: 'আজকের আয়',
    total_tickets: 'মোট টিকিট',
    today: 'আজ',
    todays_activity: 'আজকের কার্যকলাপ',
    ticket_no: 'টিকিট #',
    vehicle: 'যানবাহন',
    type: 'ধরন',
    entry: 'প্রবেশ',
    exit: 'প্রস্থান',
    status: 'অবস্থা',
    fee: 'ফি',
    vehicle_number: 'গাড়ির নম্বর *',
    vehicle_type: 'যানবাহনের ধরন *',
    owner_name: 'মালিকের নাম (ঐচ্ছিক)',
    owner: 'মালিক',
    phone: 'ফোন (ঐচ্ছিক)',
    generate_ticket: 'টিকিট তৈরি করুন',
    clear: 'মুছুন',
    duration: 'সময়কাল',
    est_fee: 'আনুমানিক ফি',
    action: 'কর্ম',
    history: 'ইতিহাস',
    rate_management: 'রেট ব্যবস্থাপনা',
    hourly_rate: 'প্রতি ঘণ্টার রেট',
    daily_max: 'দৈনিক সর্বোচ্চ',
    actions: 'কর্ম',
    backup: 'ব্যাকআপ',
    download_backup: 'ব্যাকআপ ডাউনলোড',
    restore: 'পুনরুদ্ধার',
    restore_backup: 'ব্যাকআপ পুনরুদ্ধার',
    clear_data: 'ডেটা মুছুন',
    settings: 'সেটিংস',
    currency: 'মুদ্রা',
    receipt_header: 'রসিদ শিরোনাম',
    receipt_footer: 'রসিদ ফুটার',
    address: 'ঠিকানা / যোগাযোগ',
    theme: 'থিম',
    save_settings: 'সেটিংস সংরক্ষণ',
    reset: 'রিসেট',
    help_title: 'সাহায্য',
    receipt: 'রসিদ',
    ticket_issued: 'টিকিট ইস্যু',
    ticket_closed: 'টিকিট বন্ধ',
    settings_saved: 'সেটিংস সংরক্ষিত',
    settings_reset: 'সেটিংস রিসেট',
    backup_downloaded: 'ব্যাকআপ ডাউনলোড',
    backup_restored: 'ব্যাকআপ পুনরুদ্ধার',
    rate_updated: 'রেট আপডেট',
    cleared: 'মুছে ফেলা',
    account_created: 'অ্যাকাউন্ট তৈরি! স্বাগতম',
    invalid_login: 'ভুল ইউজারনেম বা পাসওয়ার্ড',
    issue_ticket: 'নতুন পার্কিং টিকিট ইস্যু করুন',
  },
};

function t(key) {
  const lang = db.settings.language || 'en';
  return (STRINGS[lang] && STRINGS[lang][key]) || (STRINGS.en[key] || key);
}

function applyLanguage() {
  document.documentElement.lang = db.settings.language || 'en';
  document.documentElement.dir = db.settings.language === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = t(key);
    // Preserve any leading emoji/icon (e.g. "🎫 Generate Ticket")
    const original = el.textContent.trim();
    const emojiMatch = original.match(/^(\S+\s)/);
    el.textContent = (emojiMatch ? emojiMatch[1] : '') + txt;
  });
  if ($('loginLang')) $('loginLang').value = db.settings.language || 'en';
  if ($('appLang')) $('appLang').value = db.settings.language || 'en';
}

/* ==================================================================
   STORAGE
   ================================================================== */
const defaultDB = () => ({
  users: [],
  rates: [
    { type: 'Motorcycle', hourlyRate: 10, dailyMax: 80 },
    { type: 'Car', hourlyRate: 20, dailyMax: 150 },
    { type: 'SUV', hourlyRate: 30, dailyMax: 200 },
    { type: 'Truck', hourlyRate: 50, dailyMax: 400 },
    { type: 'Bus', hourlyRate: 80, dailyMax: 600 }
  ],
  tickets: [],
  settings: {
    currency: '$',
    header: 'ParkEasy Parking',
    footer: 'Thank you for parking with us!',
    address: '123 Main Street, City',
    theme: 'default',
    language: 'en'
  }
});

function loadDB() {
  const raw = localStorage.getItem(DB_KEY);
  if (!raw) return defaultDB();
  try { return { ...defaultDB(), ...JSON.parse(raw) }; }
  catch { return defaultDB(); }
}

function saveDB() { localStorage.setItem(DB_KEY, JSON.stringify(db)); }

let db = loadDB();
// Ensure settings object always has all keys (for upgrades)
db.settings = { ...defaultDB().settings, ...db.settings };

function getSession() { return localStorage.getItem(SESSION_KEY); }
function setSession(u) { localStorage.setItem(SESSION_KEY, u); }
function clearSession() { localStorage.removeItem(SESSION_KEY); }

/* ==================================================================
   HELPERS
   ================================================================== */
const $ = id => document.getElementById(id);
const fmtDate = iso => new Date(iso).toLocaleString();
const fmtShortDate = iso => new Date(iso).toLocaleDateString() + ' ' + new Date(iso).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function calcDuration(startISO, endISO) {
  const ms = new Date(endISO) - new Date(startISO);
  const mins = Math.floor(ms / 60000);
  return { hours: Math.floor(mins / 60), minutes: mins % 60, totalMins: mins, totalHours: mins / 60 };
}

function calcFee(vehicleType, totalHours) {
  const rate = db.rates.find(r => r.type === vehicleType) || { hourlyRate: 20, dailyMax: 150 };
  let fee;
  if (totalHours < 1) fee = rate.hourlyRate;
  else {
    fee = Math.ceil(totalHours) * rate.hourlyRate;
    if (rate.dailyMax && fee > rate.dailyMax) fee = rate.dailyMax;
  }
  return fee;
}

function showToast(msg, type = 'success') {
  const el = $('toast');
  el.textContent = msg;
  el.className = `text-white ${type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-gray-700'}`;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 2500);
}

/* ==================================================================
   AUTH
   ================================================================== */
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = ((h << 5) - h) + s.charCodeAt(i); h |= 0; }
  return 'h_' + Math.abs(h).toString(36) + '_' + s.length;
}

function showScreen(id) {
  ['loginScreen', 'signupScreen', 'forgotScreen'].forEach(s => {
    const el = $(s);
    el.classList.add('hidden');
    el.classList.remove('flex');
  });
  $(id).classList.remove('hidden');
  $(id).classList.add('flex');
}

$('showSignup').onclick = () => showScreen('signupScreen');
$('showForgot').onclick = () => showScreen('forgotScreen');
$('backToLogin').onclick = () => showScreen('loginScreen');
$('backToLogin2').onclick = () => showScreen('loginScreen');

$('loginForm').onsubmit = e => {
  e.preventDefault();
  const u = $('loginUsername').value.trim();
  const p = $('loginPassword').value;
  const user = db.users.find(x => x.username === u && x.password === hash(p));
  if (user) {
    setSession(u);
    launchApp();
  } else {
    const err = $('loginError');
    err.textContent = t('invalid_login');
    err.classList.remove('hidden');
  }
};

$('signupForm').onsubmit = e => {
  e.preventDefault();
  const err = $('signupError');
  err.classList.add('hidden');

  const username = $('suUsername').value.trim();
  const password = $('suPassword').value;
  const confirm = $('suConfirm').value;
  const fullName = $('suFullName').value.trim();
  const q1 = $('suQ1').value, a1 = $('suA1').value.trim().toLowerCase();
  const q2 = $('suQ2').value, a2 = $('suA2').value.trim().toLowerCase();
  const q3 = $('suQ3').value, a3 = $('suA3').value.trim().toLowerCase();

  if (username.length < 3) return showErr('Username must be at least 3 chars');
  if (password.length < 6) return showErr('Password must be at least 6 chars');
  if (password !== confirm) return showErr('Passwords do not match');
  if (!q1 || !q2 || !q3) return showErr('Please select all 3 security questions');
  if (!a1 || !a2 || !a3) return showErr('Please answer all 3 questions');
  if (db.users.some(x => x.username === username)) return showErr('Username already exists');

  db.users.push({
    username, password: hash(password), fullName,
    questions: [{ q: q1, a: hash(a1) }, { q: q2, a: hash(a2) }, { q: q3, a: hash(a3) }]
  });
  saveDB();
  setSession(username);
  launchApp();
  showToast(t('account_created') + ', ' + fullName);

  function showErr(m) { err.textContent = m; err.classList.remove('hidden'); }
};

let loadedQuestions = null;
$('loadQuestions').onclick = () => {
  const u = $('fpUsername').value.trim();
  const user = db.users.find(x => x.username === u);
  if (!user) {
    $('forgotMsg').textContent = 'Username not found';
    $('forgotMsg').className = 'text-red-500 text-sm text-center';
    return;
  }
  loadedQuestions = user.questions;
  const c = $('questionsContainer');
  c.innerHTML = '<p class="text-xs font-semibold text-muted mb-2">Answer these questions:</p>';
  user.questions.forEach((qq, i) => {
    c.innerHTML += `<div><label class="block text-xs text-muted mb-1">${qq.q}</label>
      <input type="text" id="fpA${i}" class="w-full px-3 py-2 rounded-lg text-sm" placeholder="Your answer"></div>`;
  });
  c.classList.remove('hidden');
  $('newPassword').classList.remove('hidden');
  $('resetSubmit').classList.remove('hidden');
  $('forgotMsg').textContent = 'Please answer the questions above';
  $('forgotMsg').className = 'text-sm text-center';
  $('forgotMsg').style.color = 'var(--primary)';
};

$('forgotForm').onsubmit = e => {
  e.preventDefault();
  if (!loadedQuestions) { $('forgotMsg').textContent = 'Click "Load Security Questions" first'; return; }
  const ok = loadedQuestions.every((qq, i) => hash($(`fpA${i}`).value.trim().toLowerCase()) === qq.a);
  if (!ok) {
    $('forgotMsg').textContent = '❌ One or more answers are incorrect';
    $('forgotMsg').className = 'text-red-500 text-sm text-center';
    return;
  }
  const newP = $('newPassword').value;
  if (newP.length < 6) { $('forgotMsg').textContent = 'New password too short (min 6)'; return; }
  const u = $('fpUsername').value.trim();
  db.users.find(x => x.username === u).password = hash(newP);
  saveDB();
  $('forgotMsg').textContent = '✅ Password reset! Please login.';
  $('forgotMsg').className = 'text-green-600 text-sm text-center';
  setTimeout(() => showScreen('loginScreen'), 1500);
};

/* ==================================================================
   APP LAUNCH & NAV
   ================================================================== */
function launchApp() {
  ['loginScreen', 'signupScreen', 'forgotScreen'].forEach(s => {
    $(s).classList.add('hidden');
    $(s).classList.remove('flex');
  });
  $('mainApp').classList.remove('hidden');
  const user = db.users.find(x => x.username === getSession());
  $('welcomeUser').textContent = `${t('vehicle_type').includes('Vehicle') ? 'Hello' : ''}, ${user?.fullName || 'User'}`;
  applyTheme(db.settings.theme);
  applyLanguage();
  populateRateTypes();
  refreshAll();
  loadSettings();
  showView('dashboard');
}

$('logoutBtn').onclick = () => { clearSession(); location.reload(); };

function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  const v = $('view-' + name);
  if (v) v.classList.remove('hidden');
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.nav-btn[data-view="${name}"]`);
  if (btn) btn.classList.add('active');
}

document.querySelectorAll('.nav-btn').forEach(b => b.onclick = () => showView(b.dataset.view));

/* ==================================================================
   LANGUAGE SWITCH
   ================================================================== */
['loginLang', 'appLang'].forEach(id => {
  const el = $(id);
  if (!el) return;
  el.onchange = () => {
    db.settings.language = el.value;
    saveDB();
    if ($('loginScreen') && !$('loginScreen').classList.contains('hidden')) applyLanguage();
    if ($('mainApp') && !$('mainApp').classList.contains('hidden')) {
      const user = db.users.find(x => x.username === getSession());
      $('welcomeUser').textContent = `Hello, ${user?.fullName || 'User'}`;
      applyLanguage();
      populateRateTypes();
      refreshAll();
    }
  };
});

/* ==================================================================
   RATE TYPES
   ================================================================== */
function populateRateTypes() {
  const sel = $('ntVehicleType');
  if (!sel) return;
  const cur = sel.value;
  const symbol = db.settings.currency;
  sel.innerHTML = db.rates.map(r => `<option value="${r.type}">${r.type} (${symbol}${r.hourlyRate}/hr)</option>`).join('');
  if (cur) sel.value = cur;
}

/* ==================================================================
   NEW TICKET
   ================================================================== */
$('newTicketForm').onsubmit = e => {
  e.preventDefault();
  const vehicleNo = $('ntVehicleNo').value.trim().toUpperCase();
  const vehicleType = $('ntVehicleType').value;
  const owner = $('ntOwner').value.trim();
  const phone = $('ntPhone').value.trim();
  if (!vehicleNo || !vehicleType) return;
  const ticket = {
    id: 'TKT-' + Date.now().toString().slice(-7),
    vehicleNo, vehicleType, owner, phone,
    entryTime: new Date().toISOString(),
    exitTime: null, fee: null, status: 'active'
  };
  db.tickets.push(ticket);
  saveDB();
  showReceipt(ticket, 'ENTRY');
  e.target.reset();
  refreshAll();
  showToast(`${t('ticket_issued')}: ${ticket.id}`);
};

/* ==================================================================
   ACTIVE VEHICLES
   ================================================================== */
function refreshActive() {
  const search = ($('activeSearch')?.value || '').toUpperCase();
  const tbody = $('activeTable');
  const symbol = db.settings.currency;
  const active = db.tickets.filter(t => t.status === 'active').filter(t => !search || t.vehicleNo.includes(search));
  if (active.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="p-4 text-center text-muted">No active vehicles</td></tr>`;
    return;
  }
  tbody.innerHTML = active.map(t => {
    const d = calcDuration(t.entryTime, new Date().toISOString());
    const fee = calcFee(t.vehicleType, d.totalHours);
    return `<tr>
      <td class="p-2 font-mono">${t.id}</td>
      <td class="p-2 font-bold">${t.vehicleNo}</td>
      <td class="p-2">${t.vehicleType}</td>
      <td class="p-2">${t.owner || '-'}</td>
      <td class="p-2">${fmtShortDate(t.entryTime)}</td>
      <td class="p-2">${d.hours}h ${d.minutes}m</td>
      <td class="p-2 font-bold text-green-600">${symbol}${fee}</td>
      <td class="p-2">
        <button onclick="exitTicket('${t.id}')" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs">Exit &amp; Print</button>
      </td>
    </tr>`;
  }).join('');
}

function exitTicket(id) {
  const t = db.tickets.find(x => x.id === id);
  if (!t) return;
  if (!confirm(`Close ticket ${t.id} for ${t.vehicleNo}?`)) return;
  t.exitTime = new Date().toISOString();
  const d = calcDuration(t.entryTime, t.exitTime);
  t.fee = calcFee(t.vehicleType, d.totalHours);
  t.status = 'completed';
  saveDB();
  showReceipt(t, 'EXIT');
  refreshAll();
  showToast(`${t('ticket_closed')}. ${t('fee')}: ${db.settings.currency}${t.fee}`);
}

/* ==================================================================
   HISTORY
   ================================================================== */
function refreshHistory() {
  const from = $('histFrom')?.value;
  const to = $('histTo')?.value;
  const search = ($('histSearch')?.value || '').toUpperCase();
  const symbol = db.settings.currency;
  const completed = db.tickets.filter(t => t.status === 'completed').filter(t => {
    if (from && new Date(t.exitTime) < new Date(from)) return false;
    if (to && new Date(t.exitTime) > new Date(to + 'T23:59:59')) return false;
    if (search && !t.vehicleNo.includes(search)) return false;
    return true;
  });
  const tbody = $('historyTable');
  if (completed.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="p-4 text-center text-muted">No history found</td></tr>`;
    return;
  }
  tbody.innerHTML = completed.map(t => {
    const d = calcDuration(t.entryTime, t.exitTime);
    return `<tr>
      <td class="p-2 font-mono">${t.id}</td>
      <td class="p-2 font-bold">${t.vehicleNo} <span class="text-xs text-muted">(${t.vehicleType})</span></td>
      <td class="p-2">${fmtShortDate(t.entryTime)}</td>
      <td class="p-2">${fmtShortDate(t.exitTime)}</td>
      <td class="p-2">${d.hours}h ${d.minutes}m</td>
      <td class="p-2 font-bold text-green-600">${symbol}${t.fee}</td>
      <td class="p-2">
        <button onclick="showReceiptById('${t.id}')" class="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs">Print</button>
      </td>
    </tr>`;
  }).join('');
}

['histFrom', 'histTo', 'histSearch'].forEach(id => { const el = $(id); if (el) el.oninput = refreshHistory; });
['activeSearch'].forEach(id => { const el = $(id); if (el) el.oninput = refreshActive; });

function showReceiptById(id) {
  const t = db.tickets.find(x => x.id === id);
  if (t) showReceipt(t, 'EXIT');
}

/* ==================================================================
   RECEIPT
   ================================================================== */
function showReceipt(ticket, type) {
  const d = ticket.exitTime ? calcDuration(ticket.entryTime, ticket.exitTime) : null;
  const fee = ticket.fee || (d ? calcFee(ticket.vehicleType, d.totalHours) : 0);
  const symbol = db.settings.currency;
  $('receiptContent').innerHTML = `
    <div style="text-align:center; border-bottom:2px dashed #333; padding-bottom:8px; margin-bottom:8px;">
      <h2 style="margin:0; font-size:18px;">${db.settings.header}</h2>
      <p style="margin:2px 0; font-size:11px;">${db.settings.address}</p>
      <p style="margin:2px 0; font-size:11px;">${type === 'ENTRY' ? 'PARKING ENTRY SLIP' : 'PARKING RECEIPT'}</p>
    </div>
    <div style="font-size:13px; line-height:1.8;">
      <div style="display:flex; justify-content:space-between;"><span>Ticket #:</span><span>${ticket.id}</span></div>
      <div style="display:flex; justify-content:space-between;"><span>Vehicle No:</span><span><b>${ticket.vehicleNo}</b></span></div>
      <div style="display:flex; justify-content:space-between;"><span>Vehicle Type:</span><span>${ticket.vehicleType}</span></div>
      ${ticket.owner ? `<div style="display:flex; justify-content:space-between;"><span>Owner:</span><span>${ticket.owner}</span></div>` : ''}
      <div style="display:flex; justify-content:space-between;"><span>Date:</span><span>${new Date(ticket.entryTime).toLocaleDateString()}</span></div>
      <div style="display:flex; justify-content:space-between;"><span>Entry Time:</span><span>${new Date(ticket.entryTime).toLocaleTimeString()}</span></div>
      ${ticket.exitTime ? `
        <div style="display:flex; justify-content:space-between;"><span>Exit Time:</span><span>${new Date(ticket.exitTime).toLocaleTimeString()}</span></div>
        <div style="display:flex; justify-content:space-between;"><span>Duration:</span><span>${d.hours}h ${d.minutes}m</span></div>
      ` : ''}
    </div>
    <div style="border-top:2px dashed #333; margin-top:8px; padding-top:8px;">
      ${type === 'EXIT' ? `<div style="display:flex; justify-content:space-between; font-size:18px; font-weight:bold;"><span>TOTAL FEE:</span><span>${symbol}${fee}</span></div>` : ''}
    </div>
    <div style="text-align:center; margin-top:12px; font-size:11px; border-top:1px dashed #999; padding-top:8px;">
      ${db.settings.footer}
      <p style="margin-top:4px;">Issued by: ${db.settings.header}</p>
    </div>
  `;
  $('receiptModal').classList.remove('hidden');
  $('receiptModal').classList.add('flex');
}

$('closeReceipt').onclick = $('closeReceipt2').onclick = () => {
  $('receiptModal').classList.add('hidden');
  $('receiptModal').classList.remove('flex');
};
$('printReceipt').onclick = () => window.print();

/* ==================================================================
   RATES MANAGEMENT
   ================================================================== */
function refreshRates() {
  const symbol = db.settings.currency;
  const tbody = $('ratesTable');
  tbody.innerHTML = db.rates.map((r, i) => `
    <tr>
      <td class="p-2"><input value="${r.type}" data-i="${i}" data-f="type" class="rate-edit px-2 py-1 rounded w-full"></td>
      <td class="p-2"><input type="number" min="0" value="${r.hourlyRate}" data-i="${i}" data-f="hourlyRate" class="rate-edit px-2 py-1 rounded w-24"></td>
      <td class="p-2"><input type="number" min="0" value="${r.dailyMax}" data-i="${i}" data-f="dailyMax" class="rate-edit px-2 py-1 rounded w-24"></td>
      <td class="p-2"><button onclick="deleteRate(${i})" class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs">Delete</button></td>
    </tr>
  `).join('');
  document.querySelectorAll('.rate-edit').forEach(inp => {
    inp.onchange = () => {
      const i = +inp.dataset.i, f = inp.dataset.f;
      db.rates[i][f] = inp.type === 'number' ? +inp.value : inp.value;
      saveDB();
      populateRateTypes();
      showToast(t('rate_updated'));
    };
  });
}

$('addRateBtn').onclick = () => {
  const type = prompt('Enter vehicle type name (e.g. Auto):');
  if (!type) return;
  const symbol = db.settings.currency;
  const rate = parseFloat(prompt(`Hourly rate (${symbol}):`) || '0');
  const max = parseFloat(prompt(`Daily max (${symbol}):`) || '0');
  db.rates.push({ type, hourlyRate: rate, dailyMax: max });
  saveDB(); populateRateTypes(); refreshRates();
};

function deleteRate(i) {
  if (!confirm('Delete this rate?')) return;
  db.rates.splice(i, 1);
  saveDB(); populateRateTypes(); refreshRates();
}

/* ==================================================================
   BACKUP & RESTORE
   ================================================================== */
$('backupBtn').onclick = () => {
  const data = JSON.stringify(db, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `parkeasy_backup_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast(t('backup_downloaded'));
};

$('restoreBtn').onclick = () => {
  const file = $('restoreFile').files[0];
  if (!file) return showToast('Select a file first', 'error');
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.rates || !data.tickets) throw new Error('Invalid backup file');
      if (!confirm('Restoring will replace current data. Continue?')) return;
      db = { ...defaultDB(), ...data };
      db.settings = { ...defaultDB().settings, ...(db.settings || {}) };
      saveDB();
      populateRateTypes(); refreshAll(); loadSettings();
      applyTheme(db.settings.theme); applyLanguage();
      showToast(t('backup_restored'));
    } catch (err) {
      $('restoreMsg').textContent = '❌ ' + err.message;
      $('restoreMsg').className = 'text-red-500 text-sm text-center mt-2';
    }
  };
  reader.readAsText(file);
};

document.querySelectorAll('[data-clear]').forEach(btn => {
  btn.onclick = () => {
    const type = btn.dataset.clear;
    let msg = '';
    if (type === 'tickets') msg = 'Delete all ticket records (keeps rates & settings)?';
    else if (type === 'active') msg = 'Delete all ACTIVE tickets only?';
    else msg = '⚠️ Delete EVERYTHING? This cannot be undone!';
    if (!confirm(msg)) return;
    if (type === 'tickets') db.tickets = [];
    else if (type === 'active') db.tickets = db.tickets.filter(x => x.status !== 'active');
    else db = defaultDB();
    saveDB();
    populateRateTypes(); loadSettings(); applyTheme(db.settings.theme); applyLanguage();
    refreshAll();
    showToast(t('cleared'));
  };
});

/* ==================================================================
   SETTINGS
   ================================================================== */
function loadSettings() {
  const symbol = db.settings.currency;
  // Update currency preset to match current value
  const preset = $('setCurrencyPreset');
  preset.value = Object.keys(preset.options).find(k => preset.options[k].value === symbol) ? symbol : 'custom';
  const customInput = $('setCurrency');
  if (preset.value === 'custom') {
    customInput.classList.remove('hidden');
    customInput.value = symbol;
  } else {
    customInput.classList.add('hidden');
  }

  $('setHeader').value = db.settings.header;
  $('setFooter').value = db.settings.footer;
  $('setAddress').value = db.settings.address;
  renderThemes();
}

$('setCurrencyPreset').onchange = (e) => {
  if (e.target.value === 'custom') {
    $('setCurrency').classList.remove('hidden');
    $('setCurrency').focus();
  } else {
    $('setCurrency').classList.add('hidden');
  }
};

const themes = [
  { id: 'default', label: '🌊 Ocean', color: 'linear-gradient(135deg, #2563eb, #1e40af)' },
  { id: 'sunset', label: '🌅 Sunset', color: 'linear-gradient(135deg, #f97316, #ea580c)' },
  { id: 'forest', label: '🌲 Forest', color: 'linear-gradient(135deg, #16a34a, #15803d)' },
  { id: 'royal', label: '👑 Royal', color: 'linear-gradient(135deg, #7c3aed, #6d28d9)' },
  { id: 'rose', label: '🌹 Rose', color: 'linear-gradient(135deg, #e11d48, #be123c)' },
  { id: 'midnight', label: '🌙 Midnight', color: 'linear-gradient(135deg, #6366f1, #312e81)' }
];

function renderThemes() {
  $('themeGrid').innerHTML = themes.map(th => `
    <div class="theme-swatch ${db.settings.theme === th.id ? 'active' : ''}" data-theme="${th.id}" style="background:${th.color}">${th.label}</div>
  `).join('');
  document.querySelectorAll('.theme-swatch').forEach(s => {
    s.onclick = () => {
      db.settings.theme = s.dataset.theme;
      saveDB();
      applyTheme(s.dataset.theme);
      renderThemes();
    };
  });
}

function applyTheme(t) {
  document.body.setAttribute('data-theme', t);
}

$('saveSettings').onclick = () => {
  // Determine currency from preset or custom
  const preset = $('setCurrencyPreset').value;
  if (preset === 'custom') {
    const custom = $('setCurrency').value.trim();
    if (!custom) { showToast('Enter a custom currency symbol', 'error'); return; }
    db.settings.currency = custom;
  } else {
    db.settings.currency = preset;
  }
  db.settings.header = $('setHeader').value || 'ParkEasy Parking';
  db.settings.footer = $('setFooter').value || '';
  db.settings.address = $('setAddress').value || '';
  saveDB();
  populateRateTypes();
  refreshAll();
  showToast(t('settings_saved'));
};

$('resetSettings').onclick = () => {
  if (!confirm('Reset settings to default?')) return;
  db.settings = defaultDB().settings;
  saveDB();
  loadSettings();
  applyTheme(db.settings.theme);
  applyLanguage();
  populateRateTypes();
  refreshAll();
  showToast(t('settings_reset'));
};

/* ==================================================================
   REFRESH ALL
   ================================================================== */
function refreshAll() {
  refreshActive();
  refreshHistory();
  refreshRates();
  refreshStats();
}

function refreshStats() {
  const today = new Date().toDateString();
  const symbol = db.settings.currency;
  const active = db.tickets.filter(t => t.status === 'active').length;
  const todayTickets = db.tickets.filter(t => new Date(t.entryTime).toDateString() === today);
  const revenue = db.tickets
    .filter(t => t.status === 'completed' && new Date(t.exitTime).toDateString() === today)
    .reduce((sum, t) => sum + (t.fee || 0), 0);
  $('statActive').textContent = active;
  $('statRevenue').textContent = symbol + revenue;
  $('statTotal').textContent = db.tickets.length;
  $('statDate').textContent = new Date().toLocaleDateString();

  $('todayTable').innerHTML = todayTickets.length ? todayTickets.map(t => {
    const d = t.exitTime ? calcDuration(t.entryTime, t.exitTime) : calcDuration(t.entryTime, new Date().toISOString());
    return `<tr>
      <td class="p-2 font-mono">${t.id}</td>
      <td class="p-2 font-bold">${t.vehicleNo}</td>
      <td class="p-2">${t.vehicleType}</td>
      <td class="p-2">${fmtShortDate(t.entryTime)}</td>
      <td class="p-2"><span class="px-2 py-0.5 rounded text-xs ${t.status === 'active' ? 'bg-green-500' : 'bg-gray-500'} text-white">${t.status}</span></td>
      <td class="p-2">${t.fee ? symbol + t.fee : '-'}</td>
    </tr>`;
  }).join('') : `<tr><td colspan="6" class="p-4 text-center text-muted">No tickets today</td></tr>`;
}

/* ==================================================================
   AUTO-REFRESH
   ================================================================== */
setInterval(() => {
  if (!$('mainApp').classList.contains('hidden')) refreshActive();
}, 60000);

/* ==================================================================
   BOOT
   ================================================================== */
if (getSession() && db.users.find(u => u.username === getSession())) {
  launchApp();
} else {
  showScreen('loginScreen');
  applyLanguage();
}
