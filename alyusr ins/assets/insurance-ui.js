const P = "/web/pages/";

const mock = {
  customer: "أحمد بن سعيد البلوشي",
  phone: "9XXXXXXX",
  bank: "بنك مسقط",
  valuation: "VAL-2026-0045",
  request: "INS-2026-0007",
  claim: "CLM-2026-0012",
  insuranceType: "تأمين عقار",
  assetValue: "85,000 ر.ع",
  location: "مسقط - المعبيلة",
  status: "بانتظار اختيار العميل",
};

const offers = [
  {
    company: "الشركة العمانية للتأمين",
    logo: "ع",
    number: "Q-2026-101",
    type: "تأمين عقار شامل",
    duration: "12 شهر",
    price: "185 ر.ع",
    monthly: "16 ر.ع",
    deductible: "100 ر.ع",
    tag: "الأفضل سعراً",
    tagClass: "best",
    expiry: "2026-05-25",
    includes: ["الحريق", "الأضرار العرضية", "المسؤولية المدنية"],
    excludes: ["الأضرار المتعمدة", "الحروب والكوارث غير المشمولة"],
  },
  {
    company: "تأمين الخليج",
    logo: "خ",
    number: "Q-2026-102",
    type: "تغطية عقارية موسعة",
    duration: "12 شهر",
    price: "230 ر.ع",
    monthly: "20 ر.ع",
    deductible: "75 ر.ع",
    tag: "تغطية أعلى",
    tagClass: "high",
    expiry: "2026-05-27",
    includes: ["الحريق", "الكوارث الطبيعية", "تلف المياه", "المسؤولية المدنية"],
    excludes: ["الإهمال الجسيم", "الأصول غير المصرح بها"],
  },
  {
    company: "الوطنية للتأمين",
    logo: "و",
    number: "Q-2026-103",
    type: "تأمين عقار أساسي",
    duration: "12 شهر",
    price: "160 ر.ع",
    monthly: "لا يوجد",
    deductible: "150 ر.ع",
    tag: "متاح",
    tagClass: "new",
    expiry: "2026-05-23",
    includes: ["الحريق", "أضرار محدودة", "دعم المطالبات"],
    excludes: ["الكوارث الطبيعية", "تلف المحتويات الداخلية"],
  },
];

const insuranceStatuses = {
  "جديد": "new",
  "ناقص بيانات": "missing",
  "قيد المراجعة": "review",
  "بانتظار عروض الشركات": "sent",
  "وصلت العروض": "quotes",
  "بانتظار اختيار العميل": "pending",
  "تم اختيار العرض": "selected",
  "قيد إصدار الوثيقة": "review",
  "مكتمل": "done",
  "ملغي": "cancelled",
  "الأفضل سعراً": "best",
  "تغطية أعلى": "high",
  "متاح": "new",
  "ينتهي قريباً": "expiring",
  "مطلوب مستندات": "missing",
  "بانتظار رد مصدر العرض": "pending",
  "تمت الموافقة": "approved",
  "مرفوضة": "rejected",
  "مغلقة": "done",
};

const nav = [
  ["insurance_home.html",                "الرئيسية"],
  ["insurance_services.html",            "الخدمات"],
  ["insurance_request.html",             "طلب تأمين"],
  ["insurance_quotes_customer.html",     "عروض الأسعار"],
  ["insurance_claim_tracking.html",      "المطالبات"],
  ["insurance_customer_dashboard.html",  "بوابة العميل"],
  ["insurance_staff_dashboard.html",     "بوابة الموظف"],
  ["insurance_requirements_demo.html",   "متطلبات التأمين"],
  ["insurance_valuation_integration.html","ربط التثمين"],
];

/* ── Icons ────────────────────────────────────────────────── */
const icons = {
  shield: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  car:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="11" width="22" height="7" rx="2"/><path d="M5 11l2.5-5h9L19 11"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>`,
  home:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  box:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>`,
  bank:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`,
  chart:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6"  y1="20" x2="6"  y2="14"/><line x1="2"  y1="20" x2="22" y2="20"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  check:  `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  link:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>`,
  compare:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  clock:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  star:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  file:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  up:     `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>`,
};

/* ── Helpers ──────────────────────────────────────────────── */
function badge(text, cls) {
  return `<span class="badge ${cls || insuranceStatuses[text] || ""}">${text}</span>`;
}

function kv(label, value) {
  return `<div class="kv"><span>${label}</span><strong>${value}</strong></div>`;
}

/* ── Shell & Footer ──────────────────────────────────────── */
function pageShell(active, content) {
  return `
    <div class="demo-strip">نسخة عرض تجريبية — البيانات المعروضة للتوضيح فقط</div>
    <header class="top-nav">
      <div class="container nav-inner">
        <a class="brand" href="${P}insurance_home.html">
          <span class="brand-mark">يس</span>
          <span class="brand-name">شركة يُسُر للتأمين<small>Yusr Digital Insurance</small></span>
        </a>
        <nav class="nav-links" aria-label="التنقل الرئيسي">
          ${nav.map(([href, label]) =>
            `<a class="${active === href ? "active" : ""}" href="${P}${href}">${label}</a>`
          ).join("")}
        </nav>
      </div>
    </header>
    ${content}
    ${renderFooter()}
    <div id="toast" class="toast" role="status" aria-live="polite"></div>
    <div id="modal-root"></div>
  `;
}

function renderFooter() {
  return `
    <footer class="page-foot">
      <div class="container">
        <div class="foot-grid">
          <div>
            <div class="foot-brand-mark">يس</div>
            <strong style="font-size:16px;font-weight:900;">شركة يُسُر للتأمين</strong>
            <p class="foot-desc">منصة تأمين رقمية مرتبطة بنظام التثمين. نوفّر حلولاً تأمينية متكاملة للعقارات والمركبات والتمويل.</p>
          </div>
          <div class="foot-col">
            <h4>الخدمات</h4>
            <ul>
              <li><a href="${P}insurance_finance.html">تأمين التمويل</a></li>
              <li><a href="${P}insurance_vehicle.html">تأمين المركبات</a></li>
              <li><a href="${P}insurance_property.html">تأمين العقارات</a></li>
              <li><a href="${P}insurance_assets.html">تأمين الممتلكات</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h4>المنصة</h4>
            <ul>
              <li><a href="${P}insurance_request.html">طلب تأمين جديد</a></li>
              <li><a href="${P}insurance_quotes_customer.html">عروض الأسعار</a></li>
              <li><a href="${P}insurance_claim_tracking.html">تتبع المطالبات</a></li>
              <li><a href="${P}insurance_valuation_integration.html">ربط التثمين</a></li>
            </ul>
          </div>
          <div class="foot-col">
            <h4>بوابات المستخدمين</h4>
            <ul>
              <li><a href="${P}insurance_customer_dashboard.html">بوابة العميل</a></li>
              <li><a href="${P}insurance_staff_dashboard.html">بوابة الموظف</a></li>
              <li><a href="${P}insurance_requirements_demo.html">متطلبات التأمين</a></li>
            </ul>
          </div>
        </div>
        <div class="foot-bottom">
          <span>© 2026 شركة يُسُر للتأمين. نسخة عرض تجريبية Frontend فقط.</span>
          <div class="foot-badges">
            <span class="foot-badge">Demo v1.0</span>
            <span class="foot-badge">HTML · CSS · JS</span>
            <span class="foot-badge">RTL Arabic</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function actionLinks(primary = true) {
  return `
    <div class="actions">
      <a class="btn large" href="${P}insurance_request.html">${icons.shield} اطلب تأمين الآن</a>
      <a class="btn secondary large" href="${P}insurance_claim_tracking.html">تتبع مطالبة</a>
      ${primary ? `<a class="btn secondary large" href="${P}insurance_services.html">عرض الخدمات</a>` : ""}
      <a class="btn success large" href="${P}insurance_customer_dashboard.html">دخول العملاء</a>
    </div>
  `;
}

function serviceCard(title, desc, icon, linked = true, href = "insurance_request.html") {
  return `<article class="card service-card">
    <div class="icon blue">${icon}</div>
    <h3>${title}</h3>
    <p>${desc}</p>
    <div class="actions">
      <a class="btn small" href="${P}${href}">ابدأ الآن</a>
      <button class="btn secondary small" data-demo>تفاصيل</button>
      ${linked ? badge("مرتبط بالتثمين", "review") : badge("مستقل", "")}
    </div>
  </article>`;
}

/* ── Hero Dashboard Mockup ────────────────────────────────── */
function heroMockup() {
  return `
    <div class="hero-art">
      <div class="dash-mockup">
        <div class="dash-mock-top">
          <span>${icons.shield} لوحة تحكم يُسُر</span>
          <div class="mock-dots"><i></i><i></i><i></i></div>
        </div>
        <div class="dash-mock-body">
          <div class="mock-stats">
            <div class="mock-stat"><strong>12</strong><span>طلبات نشطة</span></div>
            <div class="mock-stat"><strong style="color:var(--teal)">7</strong><span>عروض جديدة</span></div>
            <div class="mock-stat"><strong style="color:var(--gold)">4</strong><span>بانتظار الاختيار</span></div>
            <div class="mock-stat"><strong style="color:var(--green)">23</strong><span>وثائق مكتملة</span></div>
          </div>
          <div class="mock-rows">
            <div class="mock-row">
              <div class="mock-row-left">
                <div class="mock-avatar">أ</div>
                <div class="mock-row-text">
                  <b>أحمد البلوشي — تأمين عقار</b>
                  <s>INS-2026-0007 · مسقط</s>
                </div>
              </div>
              <span class="mock-pill green">وصلت العروض</span>
            </div>
            <div class="mock-row">
              <div class="mock-row-left">
                <div class="mock-avatar">م</div>
                <div class="mock-row-text">
                  <b>مريم السيابية — تأمين مركبة</b>
                  <s>INS-2026-0010 · صحار</s>
                </div>
              </div>
              <span class="mock-pill orange">ناقص بيانات</span>
            </div>
            <div class="mock-row">
              <div class="mock-row-left">
                <div class="mock-avatar">خ</div>
                <div class="mock-row-text">
                  <b>خالد المعمري — تأمين تمويل</b>
                  <s>INS-2026-0011 · مسقط</s>
                </div>
              </div>
              <span class="mock-pill blue">قيد المراجعة</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ── Home Page ────────────────────────────────────────────── */
function renderHome() {
  return pageShell("insurance_home.html", `
    <main>
      <section class="hero">
        <div class="container hero-grid">
          <div>
            <span class="eyebrow">${icons.shield} منصة تأمين رقمية مرتبطة بالتثمين</span>
            <h1>تأمينك <span>أسهل…</span><br>من الطلب إلى الوثيقة</h1>
            <p>قدّم طلب التأمين، قارن العروض، اختر السعر المناسب، وتابع حالة طلبك أو مطالبتك — كل ذلك من منصة واحدة.</p>
            ${actionLinks()}
          </div>
          ${heroMockup()}
        </div>
      </section>

      <section class="section container">
        <div class="section-title">
          <div><h2>لماذا يُسُر للتأمين؟</h2><p>تجربة رقمية بسيطة وموثوقة للحصول على التأمين المناسب.</p></div>
        </div>
        <div class="grid grid-4">
          ${why("مقارنة عروض متعددة", "شاهد عروضاً من أكثر من شركة تأمين في صفحة واحدة واختر الأنسب.", icons.compare, "blue")}
          ${why("ربط مباشر بالتثمين", "تُستخدم بيانات التثمين تلقائياً لتسريع طلبات التأمين.", icons.link, "teal")}
          ${why("متابعة فورية للطلب", "تابع كل خطوة من خطوات الطلب أو المطالبة بشكل واضح.", icons.clock, "gold")}
          ${why("تجربة رقمية سلسة", "نماذج واضحة، مرفقات منظمة، وإشعارات بحالة الطلب.", icons.star, "green")}
        </div>
      </section>

      <section class="section container">
        <div class="section-title">
          <div><h2>خدماتنا التأمينية</h2><p>خدمات مرتبطة بالعميل والأصل والتمويل والمطالبات.</p></div>
          <a class="btn secondary small" href="${P}insurance_services.html">عرض الكل</a>
        </div>
        <div class="grid grid-5">
          ${serviceCard("تأمين التمويل", "حلول مرتبطة بطلبات التمويل البنكي.", icons.bank, true, "insurance_finance.html")}
          ${serviceCard("تأمين المركبات", "شامل أو طرف ثالث مع بيانات التثمين.", icons.car, true, "insurance_vehicle.html")}
          ${serviceCard("تأمين العقارات", "ربط قيمة العقار بتقرير التثمين.", icons.home, true, "insurance_property.html")}
          ${serviceCard("تأمين الممتلكات", "تأمين المحتويات حسب القيمة والموقع.", icons.box, false, "insurance_assets.html")}
          ${serviceCard("تتبع المطالبات", "آخر تحديث لحالة المطالبة التأمينية.", icons.search, false, "insurance_claim_tracking.html")}
        </div>
      </section>

      <section class="section container">
        <div class="section-title"><h2>كيف تعمل الخدمة؟</h2></div>
        <div class="grid grid-3 stepper">
          ${["يُرسَل طلب التأمين من العميل أو موظف التثمين", "تُجهَّز المتطلبات والمرفقات الخاصة بالأصل", "يتواصل موظف شركة اليسر مع مصادر العروض المعتمدة", "تصل عروض الأسعار للعميل للمقارنة", "العميل يختار العرض الأنسب من المنصة", "يُستكمَل إصدار الوثيقة وتُسلَّم للعميل"].map((s, i) => `<div class="card step"><h3>${s}</h3><p>خطوة ${i + 1} من رحلة التأمين الرقمية.</p></div>`).join("")}
        </div>
      </section>

      <section class="section container">
        <div class="grid grid-2">
          <div class="card">
            <h3>التكامل مع نظام التثمين</h3>
            <p>عند وجود معاملة تثمين، تنتقل بيانات الأصل تلقائياً إلى طلب التأمين، مما يختصر الوقت ويقلل الأخطاء.</p>
            <div class="summary-band" style="margin-top:16px;grid-template-columns:1fr 1fr">
              ${kv("رقم معاملة التثمين", mock.valuation)}
              ${kv("نوع الأصل", "عقار سكني")}
              ${kv("قيمة الأصل", mock.assetValue)}
              ${kv("الحالة", "جاهز للإرسال")}
            </div>
            <div class="actions"><a class="btn small" href="${P}insurance_valuation_integration.html">عرض صفحة الربط</a></div>
          </div>
          <div class="card">
            <h3>عروض الأسعار</h3>
            <p style="margin-bottom:14px">مقارنة فورية بين عروض الشركات المرفقة.</p>
            <div class="grid">
              ${offers.map((o) => `
                <div class="kv" style="display:flex;justify-content:space-between;align-items:center;gap:10px">
                  <span style="font-weight:800;color:var(--ink);font-size:13px">${o.company}</span>
                  <div style="display:flex;gap:8px;align-items:center">
                    <strong style="color:var(--blue)">${o.price}</strong>
                    ${badge(o.tag, o.tagClass)}
                  </div>
                </div>`).join("")}
            </div>
            <div class="actions"><a class="btn small" href="${P}insurance_quotes_customer.html">مقارنة العروض الكاملة</a></div>
          </div>
        </div>
      </section>

      <section class="section container">
        <div class="cta-band">
          <div>
            <h3>جاهز لطلب التأمين؟</h3>
            <p>أرسل طلبك الآن وستصلك العروض خلال وقت قصير.</p>
          </div>
          <a class="btn" href="${P}insurance_request.html">${icons.shield} ابدأ طلبك الآن</a>
        </div>
      </section>

      <section class="section container">
        <div class="grid grid-2">
          <div class="card">
            <h3>تتبع المطالبات</h3>
            <div class="form-grid" style="grid-template-columns:1fr 1fr auto;margin-top:14px">
              <label class="field">رقم المطالبة<input value="${mock.claim}"></label>
              <label class="field">رقم الهاتف<input value="${mock.phone}"></label>
              <button class="btn" data-demo style="align-self:end">${icons.search} تتبع</button>
            </div>
            <p class="alert" style="margin-top:14px">مطالبتك قيد المراجعة لدى فريق شركة اليسر.</p>
          </div>
          <div class="card">
            <h3>الأسئلة الشائعة</h3>
            ${faqList()}
          </div>
        </div>
      </section>
    </main>
  `);
}

function why(title, desc, icon, colorClass = "blue") {
  return `<article class="card why-card">
    <div class="icon ${colorClass}">${icon}</div>
    <h3>${title}</h3>
    <p>${desc}</p>
  </article>`;
}

function faqList() {
  return `<div class="grid">${[
    "هل اختيار العرض يعني إصدار الوثيقة مباشرة؟",
    "هل يمكن مقارنة أكثر من شركة تأمين؟",
    "هل يتم استخدام تقرير التثمين في طلب التأمين؟",
    "كيف أعرف حالة طلبي؟",
    "هل أستطيع رفع مستندات ناقصة لاحقاً؟",
  ].map((q) => `<details class="kv"><summary><strong>${q}</strong></summary><p class="muted">إجابة تجريبية: يتم توضيح الخطوة التالية داخل شركة اليسر للتأمين حسب حالة الطلب والمتطلبات المطلوبة.</p></details>`).join("")}</div>`;
}

/* ── Services ─────────────────────────────────────────────── */
function renderServices() {
  return pageShell("insurance_services.html", `
    <main class="container">
      ${head("خدمات التأمين", "اختر نوع التأمين المناسب وأرسل طلبك بسهولة عبر شركة اليسر للتأمين.")}
      <section class="section grid grid-3">
        ${serviceCard("تأمين التمويل والقروض", "حلول تأمين مرتبطة بطلبات التمويل البنكي مع ربط بيانات العميل والبنك.", icons.bank, true, "insurance_finance.html")}
        ${serviceCard("تأمين المركبات", "تأمين شامل أو طرف ثالث مع إمكانية استخدام بيانات تقرير التثمين.", icons.car, true, "insurance_vehicle.html")}
        ${serviceCard("تأمين العقارات", "تأمين العقارات السكنية والتجارية وربط قيمة العقار بتقرير التثمين.", icons.home, true, "insurance_property.html")}
        ${serviceCard("تأمين الممتلكات", "تأمين المحتويات والممتلكات حسب القيمة والموقع ونوع الأصل.", icons.box, false, "insurance_assets.html")}
        ${serviceCard("تتبع المطالبات", "متابعة حالة المطالبات التأمينية ومعرفة آخر تحديث.", icons.search, false, "insurance_claim_tracking.html")}
      </section>
    </main>
  `);
}

function head(title, desc) {
  return `<section class="page-head">
    <span class="eyebrow">${icons.shield} شركة اليسر للتأمين</span>
    <h1>${title}</h1>
    <p>${desc}</p>
  </section>`;
}

/* ── Request Form ─────────────────────────────────────────── */
function renderRequest() {
  return pageShell("insurance_request.html", `
    <main class="container">
      ${head("طلب تأمين جديد", "نموذج احترافي لتقديم طلب التأمين وتجهيز البيانات قبل إرسالها لمصادر عروض التأمين.")}
      <section class="card" style="margin-bottom:18px">
        <div class="section-title">
          <div><h2>اكتمال النموذج</h2><p>نسبة مبنية على بيانات تجريبية.</p></div>
          <strong id="request-progress-label" style="font-size:20px;color:var(--teal)">72%</strong>
        </div>
        <div class="progress"><span id="request-progress-bar" style="width:72%"></span></div>
      </section>
      <form class="section grid" id="request-form">
        ${formSection("بيانات العميل", [
          ["الاسم الكامل", mock.customer],
          ["رقم الهاتف", mock.phone],
          ["الرقم المدني", "12345678"],
          ["البريد الإلكتروني", ""],
          ["جهة العمل", "شركة خاصة"],
          ["المسمى الوظيفي", "مدير عمليات"],
        ])}
        <section class="card">
          <div class="section-title"><h2>نوع التأمين</h2></div>
          <div class="form-grid">
            <label class="field">نوع التأمين
              <select id="request-type">
                <option value="finance">تأمين تمويل</option>
                <option value="vehicle">تأمين مركبة</option>
                <option value="property" selected>تأمين عقار</option>
                <option value="assets">تأمين ممتلكات</option>
              </select>
            </label>
          </div>
        </section>
        ${formSection("بيانات البنك أو التمويل", [
          ["اسم البنك", mock.bank],
          ["مبلغ التمويل", "62,000 ر.ع"],
          ["مدة التمويل", "15 سنة"],
          ["الغرض من التمويل", "شراء عقار"],
        ])}
        <section class="card">
          <div class="section-title"><h2>بيانات الأصل المؤمن عليه</h2></div>
          <div id="asset-fields" class="form-grid"></div>
        </section>
        <section class="card">
          <div class="section-title"><h2>المرفقات المطلوبة</h2></div>
          <div class="upload-grid">
            ${["البطاقة الشخصية", "تقرير التثمين إن وجد", "صور الأصل", "مستندات البنك", "مستندات إضافية"].map((u, i) => `
              <div class="upload ${i === 4 ? "missing" : ""}">
                <span>${icons.file} ${u}</span>
                ${i === 4 ? `<span class="required">مطلوب</span>` : `<span style="color:var(--teal);font-size:12px">${icons.check}</span>`}
              </div>`).join("")}
          </div>
        </section>
        <section class="card">
          <label class="field wide">ملاحظات العميل
            <textarea rows="4">أرغب بالحصول على أفضل عرض تأمين مرتبط ببيانات التثمين.</textarea>
          </label>
        </section>
        <div class="actions">
          <button type="button" class="btn secondary" data-demo>حفظ كمسودة</button>
          <button type="button" class="btn success" data-demo>${icons.check} إرسال الطلب</button>
          <a class="btn ghost" href="${P}insurance_home.html">رجوع</a>
        </div>
      </form>
    </main>
  `);
}

function formSection(title, fields) {
  return `<section class="card">
    <div class="section-title"><h2>${title}</h2></div>
    <div class="form-grid">
      ${fields.map(([label, value]) => `
        <label class="field ${value === "" ? "missing" : ""}">
          ${label}
          ${value === "" ? `<span class="required">مطلوب</span>` : ""}
          <input value="${value}">
        </label>`).join("")}
    </div>
  </section>`;
}

/* ── Quotes ───────────────────────────────────────────────── */
function renderQuotes() {
  return pageShell("insurance_quotes_customer.html", `
    <main class="container">
      ${head("عروض أسعار التأمين", "قارن العروض المستلمة من عدة شركات واختر العرض الأنسب قبل إصدار الوثيقة.")}
      <div class="alert" style="margin-bottom:18px">اختيار العرض لا يعني إصدار الوثيقة مباشرة. سيتم مراجعة الطلب واستكمال إجراءات الدفع والموافقة النهائية.</div>
      <section class="card" style="margin-bottom:18px">
        <div class="section-title"><h2>ملخص الطلب</h2></div>
        <div class="summary-band">
          ${kv("رقم الطلب", mock.request)}
          ${kv("العميل", mock.customer)}
          ${kv("نوع التأمين", mock.insuranceType)}
          ${kv("قيمة الأصل", mock.assetValue)}
        </div>
      </section>
      <section class="section">
        <div class="section-title">
          <div><h2>العروض المتاحة</h2><p>يمكن الفرز والفلترة بصرياً.</p></div>
          <div class="filter-row">
            <select id="quote-sort">
              <option value="price">الأقل سعراً</option>
              <option value="coverage">التغطية الأعلى</option>
              <option value="expiry">الأقرب انتهاءً</option>
            </select>
            <select>
              <option>كل الشركات</option>
              <option>الأفضل سعراً</option>
              <option>تغطية أعلى</option>
            </select>
          </div>
        </div>
        <div class="grid grid-3" id="quotes-list">${quoteCards(offers)}</div>
      </section>
      <section class="section card table-card">
        <div class="section-title" style="padding:20px 20px 0"><h2>جدول المقارنة</h2></div>
        <div class="table-scroll">
          <table>
            <thead><tr><th>الشركة</th><th>رقم العرض</th><th>الوثيقة</th><th>السعر</th><th>القسط الشهري</th><th>التحمل</th><th>الحالة</th></tr></thead>
            <tbody>${offers.map((o) => `<tr><td><strong>${o.company}</strong></td><td>${o.number}</td><td>${o.type}</td><td><strong style="color:var(--blue)">${o.price}</strong></td><td>${o.monthly}</td><td>${o.deductible}</td><td>${badge(o.tag, o.tagClass)}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </section>
      <section class="section card" id="selected-offer">
        <h3>العرض المختار</h3>
        <p class="muted">لم يتم اختيار عرض بعد. اختر من الكروت أعلاه.</p>
      </section>
    </main>
  `);
}

function quoteCards(list) {
  return list.map((o) => `<article class="card quote-card">
    <div class="quote-head">
      <div class="logo-badge">${o.logo}</div>
      ${badge(o.tag, o.tagClass)}
    </div>
    <h3>${o.company}</h3>
    <span class="muted" style="font-size:13px">${o.number} · ${o.type}</span>
    <div class="price">${o.price} <small>سنوياً</small></div>
    <div class="summary-band" style="grid-template-columns:1fr 1fr;margin-top:4px">
      ${kv("المدة", o.duration)}
      ${kv("القسط الشهري", o.monthly)}
      ${kv("نسبة التحمل", o.deductible)}
      ${kv("ينتهي", o.expiry)}
    </div>
    <p style="margin-top:6px"><strong>التغطيات:</strong> ${o.includes.join("، ")}</p>
    <p class="muted"><strong>الاستثناءات:</strong> ${o.excludes.join("، ")}</p>
    <div class="actions">
      <button class="btn small secondary" data-offer-details="${o.number}">التفاصيل</button>
      <button class="btn small success" data-select-offer="${o.company}|${o.price}">${icons.check} اختيار</button>
    </div>
  </article>`).join("");
}

/* ── Claim Tracking ───────────────────────────────────────── */
function renderClaimTracking() {
  return pageShell("insurance_claim_tracking.html", `
    <main class="container">
      ${head("تتبع المطالبات التأمينية", "ابحث عن مطالبتك واعرف آخر حالة وتحديث والمستندات المطلوبة.")}
      <section class="card" style="margin-bottom:18px">
        <form class="form-grid" id="claim-form">
          <label class="field">رقم المطالبة<input value="${mock.claim}"></label>
          <label class="field">رقم الهاتف<input value="${mock.phone}"></label>
          <label class="field">الرقم المدني <small style="font-weight:600;color:var(--muted)">(اختياري)</small><input value=""></label>
          <button class="btn" type="submit" style="align-self:end">${icons.search} تتبع المطالبة</button>
        </form>
      </section>
      <section class="section grid grid-2" id="claim-result">${claimResult()}</section>
    </main>
  `);
}

function claimResult() {
  return `
    <div class="card">
      <h3>حالة المطالبة</h3>
      <div class="summary-band" style="margin-top:14px;grid-template-columns:1fr 1fr">
        ${kv("رقم المطالبة", mock.claim)}
        ${kv("نوع التأمين", mock.insuranceType)}
        ${kv("اسم العميل", mock.customer)}
        ${kv("شركة التأمين", "الشركة العمانية للتأمين")}
        ${kv("تاريخ التقديم", "2026-05-02")}
        ${kv("الحالة الحالية", badge("قيد المراجعة"))}
        ${kv("آخر تحديث", "2026-05-10")}
        ${kv("المبلغ التقديري", "4,800 ر.ع")}
      </div>
      <div class="actions">
        <button class="btn small" data-demo>رفع مستند ناقص</button>
        <button class="btn secondary small" data-demo>تواصل مع خدمة العملاء</button>
      </div>
    </div>
    <div class="card">
      <h3>سجل الحالات</h3>
      ${timeline(["تم استلام المطالبة", "جارٍ مراجعة المستندات", "بانتظار رد مصدر العرض", "مطلوب استكمال بيانات", "تم إغلاق المطالبة"])}
    </div>
    <div class="card" style="grid-column:1/-1">
      <h3>المرفقات المطلوبة</h3>
      <div class="upload-grid" style="margin-top:14px">
        ${["تقرير الحادث أو الضرر", "صور الضرر", "الهوية الشخصية", "الوثيقة التأمينية", "مستندات إضافية"].map((x, i) => `
          <div class="upload ${i === 4 ? "missing" : ""}">
            <span>${icons.file} ${x}</span>
            ${i === 4 ? `<span class="required">مطلوب</span>` : `<span style="color:var(--teal)">${icons.check}</span>`}
          </div>`).join("")}
      </div>
    </div>`;
}

function timeline(items) {
  return `<div class="timeline">${items.map((x) => `
    <div class="timeline-item">
      <strong>${x}</strong>
      <p class="muted">تحديث تجريبي ضمن رحلة المطالبة.</p>
    </div>`).join("")}</div>`;
}

/* ── Customer Dashboard ───────────────────────────────────── */
function renderCustomerDashboard() {
  return pageShell("insurance_customer_dashboard.html", `
    <main class="container">
      ${head("بوابة العميل", "ملخص طلبات التأمين والعروض والوثائق والمطالبات في مكان واحد.")}
      <section class="section grid grid-4">
        ${statCard("طلبات التأمين النشطة",   3,  icons.shield, "blue",  "↑ 2 هذا الشهر")}
        ${statCard("عروض بانتظار الاختيار",  2,  icons.compare,"gold",  "آخر عرض منذ يومين")}
        ${statCard("مطالبات قيد المراجعة",   1,  icons.clock,  "orange","مفتوحة منذ 10 أيام")}
        ${statCard("وثائق نشطة",             4,  icons.file,   "teal",  "تنتهي أقربها في 2026-11")}
      </section>
      <section class="grid grid-2" style="margin-bottom:18px">
        <div class="card">
          <h3>الإشعارات</h3>
          <div class="grid" style="margin-top:12px">
            <div class="alert">وصلت 3 عروض سعر لطلب ${mock.request} — اختر العرض المناسب الآن.</div>
            <div class="alert" style="background:var(--orange-light);border-color:#f5c6a0;color:#7a3510">يوجد مستند إضافي مطلوب لمطالبة ${mock.claim}.</div>
          </div>
        </div>
        <div class="card">
          <h3>إجراءات سريعة</h3>
          <div class="actions">
            <a class="btn" href="${P}insurance_request.html">${icons.shield} طلب تأمين جديد</a>
            <a class="btn secondary" href="${P}insurance_quotes_customer.html">عرض العروض</a>
            <a class="btn secondary" href="${P}insurance_claim_tracking.html">تتبع مطالبة</a>
            <button class="btn ghost" data-demo>رفع مستندات</button>
          </div>
        </div>
      </section>
      <section class="card table-card">
        <div class="section-title" style="padding:20px 20px 0"><h2>طلباتي</h2></div>
        <div class="table-scroll">
          <table>
            <thead><tr><th>رقم الطلب</th><th>نوع التأمين</th><th>الشركة المقدمة للعرض</th><th>الحالة</th><th>التاريخ</th><th>الإجراء</th></tr></thead>
            <tbody>${customerRows()}</tbody>
          </table>
        </div>
      </section>
    </main>
  `);
}

function customerRows() {
  const rows = [
    [mock.request, "تأمين عقار", "عدة شركات", "بانتظار اختيار العميل", "2026-05-08", "عرض العروض"],
    ["INS-2026-0008", "تأمين مركبة", "تأمين الخليج", "قيد إصدار الوثيقة", "2026-05-09", "متابعة"],
    ["INS-2026-0009", "تأمين ممتلكات", "الوطنية للتأمين", "مكتمل", "2026-04-28", "عرض الوثيقة"],
  ];
  return rows.map((r) => `<tr>
    ${r.slice(0, 5).map((c, i) => `<td>${i === 3 ? badge(c) : (i === 0 ? `<strong>${c}</strong>` : c)}</td>`).join("")}
    <td><button class="btn small secondary" data-demo>${r[5]}</button></td>
  </tr>`).join("");
}

function statCard(label, value, icon, color, trend) {
  return `<div class="card">
    <div class="stat-card">
      <div class="stat-icon icon ${color}">${icon}</div>
      <div class="stat-body">
        <span>${label}</span>
        <strong>${value}</strong>
        <div class="stat-trend neutral">${trend}</div>
      </div>
    </div>
  </div>`;
}

/* ── Staff Dashboard ──────────────────────────────────────── */
function renderStaffDashboard() {
  return pageShell("insurance_staff_dashboard.html", `
    <main class="container">
      ${head("بوابة موظف شركة اليسر", "واجهة تجريبية احترافية مقسمة حسب نوع الخدمة، وتوضح كيف تصل المعاملة، وكيف يتم إدخال عرض السعر، ثم مشاركة رابط السعر مع العميل.")}
      <section class="staff-hero-card">
        <div>
          <span class="eyebrow">${icons.shield} مساحة عمل موظف شركة اليسر</span>
          <h2>إدارة المعاملة من وصولها حتى مشاركة عروض الأسعار مع العميل</h2>
          <p>اختر القسم المناسب، راجع متطلبات المعاملة، أرفق عروض أكثر من شركة، ثم شارك رابط المقارنة مع العميل بواجهة جاهزة للجوال.</p>
        </div>
        <div class="staff-hero-actions">
          <div>${badge("Frontend Demo", "new")}</div>
          <button class="btn" data-tour-open>${icons.search} شرح المنصة</button>
          <a class="btn secondary" href="${P}insurance_customer_shared_quote.html?request=${mock.request}">معاينة رابط عميل</a>
        </div>
      </section>

      ${staffIntroTour()}

      <section class="staff-compact-metrics">
        <div><span>القروض</span><strong>8</strong><small>طلبات</small></div>
        <div><span>المركبات</span><strong>6</strong><small>طلبات</small></div>
        <div><span>العقارات</span><strong>9</strong><small>طلبات</small></div>
        <div><span>المطالبات</span><strong>5</strong><small>مفتوحة</small></div>
      </section>

      <section class="section">
        <div class="staff-switch" aria-label="أقسام بوابة موظف شركة اليسر">
          <button class="active" data-staff-section="loans"><span>${icons.bank}</span><strong>تأمين القروض</strong><small>تمويل وبنوك</small></button>
          <button data-staff-section="vehicles"><span>${icons.car}</span><strong>تأمين المركبات</strong><small>بيانات المركبة</small></button>
          <button data-staff-section="properties"><span>${icons.home}</span><strong>تأمين العقارات</strong><small>مرتبط بالتثمين</small></button>
          <button data-staff-section="claims"><span>${icons.search}</span><strong>تتبع المطالبات</strong><small>حالة ومرفقات</small></button>
        </div>
      </section>

      ${insuranceLinePanel({
        key: "loans",
        title: "قسم تأمين القروض",
        desc: "هذا القسم يستقبل طلبات التأمين المرتبطة بالتمويل البنكي، مثل التمويل العقاري أو الشخصي، ثم يتم تسعيرها وإرسال رابط العرض للعميل.",
        requestNo: "LOAN-INS-2026-0021",
        source: "بنك مسقط / طلب تمويل",
        type: "تأمين قرض عقاري",
        asset: "تمويل بقيمة 62,000 ر.ع",
        customer: mock.customer,
        value: "62,000 ر.ع",
        bank: mock.bank,
        received: "2026-05-13",
        quoteNo: "Q-LOAN-2026-018",
        price: "145 ر.ع",
        monthly: "12.1 ر.ع",
        duration: "12 شهر",
        deductible: "لا يوجد",
        link: "https://demo.yusr-insurance.om/quotes/LOAN-INS-2026-0021",
        status: "جاهز للتسعير"
      })}

      ${insuranceLinePanel({
        key: "vehicles",
        hidden: true,
        title: "قسم تأمين المركبات",
        desc: "هذا القسم يعرض معاملة تأمين مركبة، وكيف تصل بيانات المركبة، ثم يتم إدخال عرض السعر ومشاركة رابط المقارنة مع العميل.",
        requestNo: "VEH-INS-2026-0034",
        source: "بوابة العميل / نموذج مركبة",
        type: "تأمين مركبة شامل",
        asset: "Toyota Land Cruiser 2022",
        customer: "مريم السيابية",
        value: "22,500 ر.ع",
        bank: "بنك صحار",
        received: "2026-05-13",
        quoteNo: "Q-VEH-2026-044",
        price: "310 ر.ع",
        monthly: "25.8 ر.ع",
        duration: "12 شهر",
        deductible: "150 ر.ع",
        link: "https://demo.yusr-insurance.om/quotes/VEH-INS-2026-0034",
        status: "بانتظار عرض السعر"
      })}

      ${insuranceLinePanel({
        key: "properties",
        hidden: true,
        title: "قسم تأمين العقارات",
        desc: "هذا القسم يستقبل طلبات تأمين العقارات القادمة من نظام التثمين، ويظهر قيمة الأصل والمرفقات ثم نموذج عرض السعر.",
        requestNo: mock.request,
        source: "نظام التثمين / " + mock.valuation,
        type: mock.insuranceType,
        asset: "فيلا سكنية",
        customer: mock.customer,
        value: mock.assetValue,
        bank: mock.bank,
        received: "2026-05-13",
        quoteNo: "Q-PROP-2026-101",
        price: "185 ر.ع",
        monthly: "16 ر.ع",
        duration: "12 شهر",
        deductible: "100 ر.ع",
        link: "https://demo.yusr-insurance.om/quotes/INS-2026-0007",
        status: "بانتظار عروض الشركات"
      })}

      ${claimsLinePanel()}
    </main>
  `);
}

function staffIntroTour() {
  const section = "loans";
  const steps = getStaffTourSteps(section);
  const profile = getStaffTourProfile(section);

  return `<section class="tour-overlay" data-tour-overlay>
    <div class="tour-card" role="dialog" aria-modal="true" aria-label="شرح تفاعلي لبوابة موظف شركة اليسر">
      <div class="tour-side">
        <span class="eyebrow">${icons.shield} شرح تفاعلي</span>
        <h2 data-tour-heading>اختر القسم المطلوب شرحه</h2>
        <p data-tour-subheading>ابدأ العرض باختيار القسم الذي تريد الشركة فهم آلية عمله، ثم انتقل خطوة بخطوة داخل البوابة.</p>
        <div class="tour-rail" data-tour-rail>
          <button class="active"><span>1</span>اختيار القسم</button>
        </div>
      </div>
      <div class="tour-main">
        <div class="tour-picker" data-tour-picker>
          <div class="tour-count">بداية الشرح</div>
          <h3>أي قسم تريدون مشاهدة شرحه؟</h3>
          <p>اختروا القسم، وسيقوم النظام بفتح واجهته ثم شرح طريقة وصول المعاملة، مراجعة المتطلبات، إرفاق عروض الأسعار، ومشاركة الرابط مع العميل.</p>
          <div class="tour-section-grid">
            <button data-tour-choose="loans"><span>${icons.bank}</span><strong>تأمين القروض</strong><small>طلبات التمويل والبنوك</small></button>
            <button data-tour-choose="vehicles"><span>${icons.car}</span><strong>تأمين المركبات</strong><small>بيانات المركبة وعروضها</small></button>
            <button data-tour-choose="properties"><span>${icons.home}</span><strong>تأمين العقارات</strong><small>طلب قادم من التثمين</small></button>
            <button data-tour-choose="claims"><span>${icons.search}</span><strong>تتبع المطالبات</strong><small>تحديث الحالة والرابط</small></button>
          </div>
        </div>
        <div data-tour-steps class="is-hidden">${renderStaffTourSteps(steps)}</div>
        <div class="tour-actions is-hidden" data-tour-actions>
          <button class="btn secondary" data-tour-close>تخطي الشرح</button>
          <button class="btn secondary" data-tour-prev>السابق</button>
          <button class="btn success" data-tour-next>التالي</button>
        </div>
      </div>
    </div>
  </section>`;
}

function getStaffTourProfile(section) {
  const profiles = {
    loans: {
      label: "قسم تأمين القروض",
      requestNo: "LOAN-INS-2026-0021",
      source: "بنك مسقط / طلب تمويل",
      heading: "شرح قسم تأمين القروض",
      subheading: "رحلة طلب القرض من البنك إلى مراجعة المتطلبات ثم مشاركة عرض السعر مع العميل.",
      item: "طلب تمويل",
    },
    vehicles: {
      label: "قسم تأمين المركبات",
      requestNo: "VEH-INS-2026-0034",
      source: "بوابة العميل / نموذج مركبة",
      heading: "شرح قسم تأمين المركبات",
      subheading: "رحلة بيانات المركبة من الطلب إلى عرض السعر ومشاركة رابط المقارنة.",
      item: "مركبة العميل",
    },
    properties: {
      label: "قسم تأمين العقارات",
      requestNo: mock.request,
      source: "نظام التثمين / " + mock.valuation,
      heading: "شرح قسم تأمين العقارات",
      subheading: "رحلة طلب العقار من شركة التثمين إلى عروض شركات التأمين ورابط العميل.",
      item: "العقار المثمن",
    },
    claims: {
      label: "قسم تتبع المطالبات",
      requestNo: mock.claim,
      source: "صفحة تتبع المطالبات العامة",
      heading: "شرح قسم تتبع المطالبات",
      subheading: "رحلة المطالبة من إدخال العميل إلى تحديث الحالة ومشاركة رابط التتبع.",
      item: "المطالبة",
    },
  };
  return profiles[section] || profiles.loans;
}

function getStaffTourSteps(section) {
  const profile = getStaffTourProfile(section);
  if (section === "claims") {
    return [
      { title: "فكرة قسم المطالبات", text: "هذا القسم لا يكتب عروض أسعار، بل يتابع المطالبات بعد إصدار الوثيقة.", note: "يرى الموظف رقم المطالبة، العميل، الشركة المقدمة للعرض، والحالة الحالية.", action: "افتح قسم المطالبات", target: "section:claims" },
      { title: "كيف تصل المطالبة؟", text: "يدخل العميل رقم المطالبة ورقم الهاتف من صفحة التتبع، فتظهر المطالبة لموظف شركة اليسر.", note: "مثال المطالبة في العرض: " + mock.claim, action: "اعرض بطاقة المطالبة", target: "section:claims" },
      { title: "كيف يراجعها الموظف؟", text: "يراجع الموظف المستندات، يحدد الحالة الحالية، ثم يضيف ملاحظة تظهر للعميل.", note: "التحديثات تكون مثل قيد المراجعة، بانتظار رد مصدر العرض، أو مطلوب استكمال بيانات.", action: "افتح نموذج تحديث الحالة", target: "claims-update" },
      { title: "كيف يتابع العميل؟", text: "يتم إرسال رابط تتبع المطالبة للعميل، فيرى آخر حالة بدون دخول البوابة.", note: "في التنفيذ الفعلي يمكن حماية الرابط برمز تحقق.", action: "افتح رابط التتبع", target: "link:claims" },
    ];
  }
  return [
    { title: "فكرة " + profile.label, text: "هذا القسم يستقبل " + profile.item + " ويتابعها حتى يتم تجهيز عرض السعر ومشاركته مع العميل.", note: "كل قسم له نفس الفكرة التشغيلية لكن البيانات تختلف حسب نوع التأمين.", action: "افتح " + profile.label, target: "section:" + section },
    { title: "كيف تصل المعاملة؟", text: "تصل المعاملة من " + profile.source + " وتظهر للموظف برقم " + profile.requestNo + ".", note: section === "properties" ? "هذا المثال يوضح الربط مع شركة التثمين." : "مصدر المعاملة يظهر للموظف حتى يعرف من أين بدأ الطلب.", action: "اذهب للمعاملة", target: "section:" + section },
    { title: "كيف يطلع الموظف على المتطلبات؟", text: "يضغط الموظف على عرض المعاملة كاملة ليرى بيانات العميل، الأصل، البنك، المرفقات، ونسبة اكتمال المتطلبات.", note: "هذه خطوة إلزامية قبل كتابة عرض السعر.", action: "اعرض المعاملة كاملة", target: "view:" + section },
    { title: "كيف يرفق عروض الشركات؟", text: "يفتح الموظف نموذج إرفاق العروض، يختار الشركة المقدمة للعرض، يكتب مبلغ العرض، ويرفق مستند السعر.", note: "يمكن إرفاق أكثر من عرض لنفس المعاملة حتى يقارن العميل بينها.", action: "افتح نموذج إرفاق العروض", target: "attach:" + section },
    { title: "كيف يصل السعر للعميل؟", text: "بعد حفظ العروض، يشارك الموظف رابط مقارنة الأسعار مع العميل.", note: "الرابط يفتح صفحة عميل تعرض كل الشركات والأسعار والمستندات.", action: "افتح رابط العميل", target: "link:" + section },
  ];
}

function renderStaffTourRail(steps) {
  return steps.map((step, index) => `<button class="${index === 0 ? "active" : ""}" data-tour-jump="${index}"><span>${index + 1}</span>${step.title}</button>`).join("");
}

function renderStaffTourSteps(steps) {
  return steps.map((step, index) => `<article class="tour-step ${index === 0 ? "active" : ""}" data-tour-step="${index}">
    <div class="tour-count">الخطوة ${index + 1} من ${steps.length}</div>
    <h3>${step.title}</h3>
    <p>${step.text}</p>
    <div class="tour-note">${step.note}</div>
    <button class="btn success tour-apply" data-tour-apply="${step.target}">${step.action}</button>
  </article>`).join("");
}

function staffRows() {
  const rows = [
    [mock.request, mock.customer, "تأمين عقار", mock.assetValue, mock.bank, "بانتظار اختيار العميل", 86, "2026-05-10"],
    ["INS-2026-0010", "مريم السيابية", "تأمين مركبة", "22,500 ر.ع", "بنك صحار", "ناقص بيانات", 62, "2026-05-11"],
    ["INS-2026-0011", "خالد المعمري", "تأمين تمويل", "45,000 ر.ع", "البنك الوطني", "بانتظار عروض الشركات", 78, "2026-05-09"],
  ];
  return rows.map((r) => `<tr>
    <td><strong>${r[0]}</strong></td>
    <td>${r[1]}</td><td>${r[2]}</td><td><strong style="color:var(--blue)">${r[3]}</strong></td><td>${r[4]}</td>
    <td>${r[0] === mock.request ? "نظام التثمين" : "بوابة العميل"}</td>
    <td>${badge(r[5])}</td>
    <td>
      <div style="display:flex;align-items:center;gap:8px">
        <div class="progress" style="flex:1;min-width:70px"><span style="width:${r[6]}%"></span></div>
        <span style="font-size:12px;font-weight:800;color:var(--teal)">${r[6]}%</span>
      </div>
    </td>
    <td>${r[7]}</td>
    <td>
      <div class="actions" style="margin:0;gap:6px">
        <button class="btn small secondary" data-demo>مراجعة</button>
        <button class="btn small" data-demo>إضافة عرض</button>
        <button class="btn small warning" data-demo>طلب بيانات</button>
      </div>
    </td>
  </tr>`).join("");
}

function insuranceLinePanel(item) {
  const shareLink = customerShareLink(item.requestNo);
  return `<section class="staff-panel ${item.hidden ? "is-hidden" : ""}" data-staff-panel="${item.key}">
    <div class="section-title">
      <div>
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
      </div>
      ${badge(item.status, item.status.includes("بانتظار") ? "pending" : "review")}
    </div>

    <div class="staff-flow">
      <div class="done"><span>1</span><strong>وصول المعاملة</strong><small>${item.source}</small></div>
      <div><span>2</span><strong>مراجعة المتطلبات</strong><small>قبل التسعير</small></div>
      <div><span>3</span><strong>إرفاق عروض الشركات</strong><small>أكثر من عرض</small></div>
      <div><span>4</span><strong>مشاركة رابط العميل</strong><small>مقارنة واختيار</small></div>
    </div>

    <div class="staff-workspace">
      <section class="staff-main-pane">
        <div class="pane-head">
          <div>
            <h3>المعاملة الحالية</h3>
            <p>عرض مختصر فقط. التفاصيل تظهر عند الضغط على عرض المعاملة كاملة.</p>
          </div>
          <strong>${item.requestNo}</strong>
        </div>
        <div class="summary-band" style="grid-template-columns:1fr 1fr;margin-top:14px">
          ${kv("رقم الطلب", item.requestNo)}
          ${kv("اسم العميل", item.customer)}
          ${kv("نوع التأمين", item.type)}
          ${kv("الأصل / التمويل", item.asset)}
          ${kv("القيمة", item.value)}
          ${kv("البنك", item.bank)}
          ${kv("تاريخ الوصول", item.received)}
          ${kv("الحالة", badge(item.status, "review"))}
        </div>
        <div class="actions">
          <button class="btn success" data-view-transaction="${item.key}">${icons.search} عرض المعاملة كاملة</button>
          <button class="btn secondary" data-demo>طلب استكمال بيانات</button>
        </div>
      </section>

      <aside class="staff-side-pane">
        <h3>رابط العميل</h3>
        <p>يستخدم بعد إرفاق العروض، ويفتح صفحة مقارنة الأسعار للعميل.</p>
        <label class="field" style="margin-top:14px">
          رابط مشاركة العرض
          <input readonly value="${shareLink}">
        </label>
        <div class="actions">
          <button class="btn success" data-share-link="${shareLink}">مشاركة الرابط مع العميل</button>
          <a class="btn secondary" href="${shareLink}">معاينة صفحة العميل</a>
        </div>
      </aside>
    </div>

    <section class="card transaction-details is-hidden review-card" data-transaction-details="${item.key}" style="margin-top:18px">
      <div class="section-title">
        <div>
          <h2>عرض المعاملة كاملة قبل كتابة عرض السعر</h2>
          <p>هذه الشاشة تمثل ما يراه الموظف عند الضغط على زر المعاملة لمراجعة كامل المتطلبات قبل إدخال السعر.</p>
        </div>
        ${badge("مراجعة قبل التسعير", "review")}
      </div>
      ${transactionRequirementView(item)}
    </section>

    <details class="staff-accordion" style="margin-top:18px">
      <summary>كتابة عرض سعر أساسي</summary>
      <div class="accordion-body">
      <div class="form-grid">
        <label class="field">رقم العرض<input value="${item.quoteNo}"></label>
        <label class="field">نوع الوثيقة<input value="${item.type}"></label>
        <label class="field">مدة التأمين<input value="${item.duration}"></label>
        <label class="field">السعر الإجمالي<input value="${item.price}"></label>
        <label class="field">القسط الشهري<input value="${item.monthly}"></label>
        <label class="field">نسبة التحمل<input value="${item.deductible}"></label>
        <label class="field wide">التغطيات المشمولة<textarea>تغطية أساسية حسب نوع التأمين، دعم المطالبات، إصدار وثيقة رقمية بعد اختيار العميل.</textarea></label>
        <label class="field wide">الشروط والاستثناءات<textarea>عرض تجريبي قابل للمراجعة النهائية بعد اعتماد المشروع وربطه بمصادر عروض التأمين.</textarea></label>
      </div>
      <div class="actions">
        <button class="btn success" data-demo>${icons.check} حفظ عرض السعر</button>
        <button class="btn" data-share-link="${shareLink}">${icons.link} توليد رابط العميل</button>
        <button class="btn secondary" data-demo>إرسال للمراجعة</button>
      </div>
      </div>
    </details>

    <details class="staff-accordion" data-attach-offers-panel="${item.key}" style="margin-top:12px" open>
      <summary>إرفاق عروض أسعار من عدة شركات لنفس المعاملة</summary>
      <div class="accordion-body">
      <p class="muted" style="margin-bottom:14px">إضافة أكثر من عرض سعر لنفس رقم الطلب، مع المبلغ ومستند العرض لكل شركة.</p>
      <div class="form-grid">
        <label class="field">
          شركة التأمين
          <select>
            <option>الشركة العمانية للتأمين</option>
            <option>تأمين الخليج</option>
            <option>الوطنية للتأمين</option>
          </select>
        </label>
        <label class="field">مبلغ عرض السعر<input value="${item.price}" placeholder="مثال: 185 ر.ع"></label>
        <label class="field">مدة صلاحية العرض<input value="2026-05-30"></label>
        <label class="field">رقم العرض<input value="${item.quoteNo}"></label>
        <label class="field">القسط الشهري<input value="${item.monthly}"></label>
        <label class="field">نسبة التحمل<input value="${item.deductible}"></label>
        <label class="field wide">
          مستند عرض السعر
          <input type="file" accept=".pdf,.jpg,.jpeg,.png" data-offer-file>
        </label>
        <label class="field wide">ملاحظات العرض<textarea>عرض سعر مرفق لنفس المعاملة، وسيظهر للعميل ضمن صفحة مقارنة الأسعار.</textarea></label>
      </div>
      <div class="actions">
        <button class="btn success" data-attach-offer="${item.requestNo}">${icons.file} حفظ وإرفاق العرض</button>
        <button class="btn" data-share-link="${shareLink}">${icons.link} تحديث رابط مقارنة الأسعار</button>
        <button class="btn secondary" data-demo>إرسال جميع العروض للعميل</button>
      </div>
      </div>
    </details>

    <details class="staff-accordion" style="margin-top:12px">
      <summary>العروض المرفقة للمعاملة</summary>
      <div class="accordion-body table-card">
      <div class="table-scroll">
        <table>
          <thead><tr><th>رقم الطلب</th><th>الشركة المقدمة للعرض</th><th>مبلغ العرض</th><th>القسط الشهري</th><th>المستند</th><th>الحالة</th><th>الإجراء</th></tr></thead>
          <tbody>
            ${multiCompanyQuoteRows(item, shareLink)}
          </tbody>
        </table>
      </div>
      </div>
    </details>

    <section class="card table-card" style="margin-top:18px">
      <div class="section-title" style="padding:20px 20px 0">
        <h2>قائمة معاملات ${item.title}</h2>
        <div class="filter-row">
          <input placeholder="بحث بالرقم أو العميل..." style="min-width:220px">
          <select><option>كل الحالات</option><option>جاهز للتسعير</option><option>قيد المراجعة</option><option>تمت مشاركة الرابط</option></select>
        </div>
      </div>
      <div class="table-scroll">
        <table>
          <thead><tr><th>رقم الطلب</th><th>العميل</th><th>نوع التأمين</th><th>القيمة</th><th>مصدر المعاملة</th><th>السعر المقترح</th><th>حالة الرابط</th><th>الإجراء</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>${item.requestNo}</strong></td>
              <td>${item.customer}</td>
              <td>${item.type}</td>
              <td>${item.value}</td>
              <td>${item.source}</td>
              <td><strong style="color:var(--blue)">${item.price}</strong></td>
              <td>${badge("جاهز للمشاركة", "done")}</td>
              <td><button class="btn small success" data-share-link="${shareLink}">مشاركة السعر</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </section>`;
}

function claimsLinePanel() {
  return `<section class="staff-panel is-hidden" data-staff-panel="claims">
    <div class="section-title">
      <div>
        <h2>قسم تتبع المطالبات</h2>
        <p>هذا القسم مخصص لمتابعة المطالبة بعد إصدار الوثيقة، ويعرض كيف تصل المطالبة وكيف يتم تحديث العميل بالرابط.</p>
      </div>
      ${badge("قيد المراجعة", "pending")}
    </div>
    <div class="grid grid-3">
      <article class="card">
        <div class="icon blue">${icons.search}</div>
        <h3>كيف تصل المطالبة؟</h3>
        ${timeline([
          "يدخل العميل رقم المطالبة ورقم الهاتف من صفحة التتبع",
          "تظهر المطالبة لموظف شركة اليسر برقم " + mock.claim,
          "يراجع الموظف المستندات ويتابعها مع مصدر العرض",
          "يتم تحديث الرابط العام حتى يرى العميل آخر حالة"
        ])}
      </article>
      <article class="card">
        <div class="icon orange">${icons.clock}</div>
        <h3>بطاقة المطالبة</h3>
        <div class="summary-band" style="grid-template-columns:1fr 1fr;margin-top:14px">
          ${kv("رقم المطالبة", mock.claim)}
          ${kv("اسم العميل", mock.customer)}
          ${kv("نوع التأمين", mock.insuranceType)}
          ${kv("شركة التأمين", "الشركة العمانية للتأمين")}
          ${kv("تاريخ المطالبة", "2026-05-12")}
          ${kv("الحالة الحالية", badge("قيد المراجعة", "pending"))}
        </div>
      </article>
      <article class="card">
        <div class="icon teal">${icons.link}</div>
        <h3>رابط تتبع المطالبة</h3>
        <p>يتم إرسال رابط متابعة المطالبة للعميل بدون الحاجة للدخول إلى البوابة.</p>
        <label class="field" style="margin-top:14px">
          رابط التتبع
          <input readonly value="https://demo.yusr-insurance.om/claims/${mock.claim}">
        </label>
        <div class="actions">
          <button class="btn success" data-share-link="https://demo.yusr-insurance.om/claims/${mock.claim}">مشاركة رابط التتبع</button>
          <a class="btn secondary" href="${P}insurance_claim_tracking.html">فتح صفحة التتبع</a>
        </div>
      </article>
    </div>
    <section class="card" style="margin-top:18px">
      <h3>تحديث حالة المطالبة</h3>
      <div class="form-grid" style="margin-top:12px">
        <label class="field">الحالة الحالية<select><option>قيد المراجعة</option><option>بانتظار رد مصدر العرض</option><option>مطلوب استكمال بيانات</option><option>تمت الموافقة</option><option>تم الرفض</option></select></label>
        <label class="field">آخر تحديث<input value="2026-05-13"></label>
        <label class="field">الموظف المسؤول<input value="موظف شركة اليسر"></label>
        <label class="field wide">ملاحظة تظهر للعميل<textarea>تم استلام المطالبة وجاري مراجعة المستندات مع مصدر العرض.</textarea></label>
      </div>
      <div class="actions">
        <button class="btn success" data-demo>حفظ التحديث</button>
        <button class="btn" data-share-link="https://demo.yusr-insurance.om/claims/${mock.claim}">إرسال التحديث للعميل</button>
        <button class="btn secondary" data-demo>طلب مستندات إضافية</button>
      </div>
    </section>
  </section>`;
}

function transactionRequirementView(item) {
  const requirementRows = [
    ["بيانات العميل", "مكتمل", "الاسم، الهاتف، الرقم المدني، جهة العمل"],
    ["بيانات البنك / التمويل", "مكتمل", item.bank + "، مصدر المعاملة: " + item.source],
    ["بيانات الأصل أو التمويل", "مكتمل", item.asset + "، القيمة: " + item.value],
    ["مرفقات الهوية", "مكتمل", "البطاقة المدنية / بيانات التواصل"],
    ["مستند البنك", item.key === "vehicles" ? "غير مطلوب" : "مكتمل", "خطاب التمويل أو طلب البنك"],
    ["تقرير التثمين", item.key === "properties" ? "مكتمل" : "غير مطلوب", item.key === "properties" ? mock.valuation : "لا ينطبق على هذا النوع"],
    ["صور الأصل", item.key === "vehicles" || item.key === "properties" ? "مكتمل" : "غير مطلوب", item.key === "vehicles" ? "صور المركبة ورقم اللوحة" : item.key === "properties" ? "صور العقار والموقع" : "لا ينطبق"],
    ["ملاحظات المراجعة", "بانتظار الموظف", "يتم اعتماد المعاملة بعد مراجعة المتطلبات"],
  ];

  return `<div class="grid grid-2">
    <div class="card" style="box-shadow:none">
      <h3>بيانات المعاملة</h3>
      <div class="summary-band" style="grid-template-columns:1fr 1fr;margin-top:14px">
        ${kv("رقم المعاملة", item.requestNo)}
        ${kv("نوع التأمين", item.type)}
        ${kv("اسم العميل", item.customer)}
        ${kv("مصدر المعاملة", item.source)}
        ${kv("القيمة", item.value)}
        ${kv("تاريخ الوصول", item.received)}
      </div>
    </div>
    <div class="card" style="box-shadow:none">
      <h3>نسبة اكتمال المتطلبات</h3>
      <p>يستخدم الموظف هذه النسبة للتأكد من جاهزية المعاملة قبل التسعير.</p>
      <div style="display:flex;align-items:center;gap:10px;margin-top:14px">
        <div class="progress" style="flex:1"><span style="width:${item.key === "vehicles" ? 82 : 92}%"></span></div>
        <strong style="color:var(--teal)">${item.key === "vehicles" ? 82 : 92}%</strong>
      </div>
      <div class="actions">
        <button class="btn success" data-demo>اعتماد المتطلبات</button>
        <button class="btn warning" data-demo>طلب استكمال بيانات</button>
      </div>
    </div>
    <div class="card table-card" style="grid-column:1 / -1;box-shadow:none">
      <div class="table-scroll">
        <table>
          <thead><tr><th>المتطلب</th><th>الحالة</th><th>التفاصيل</th><th>المرفق</th><th>الإجراء</th></tr></thead>
          <tbody>
            ${requirementRows.map((row, index) => `<tr>
              <td><strong>${row[0]}</strong></td>
              <td>${badge(row[1], row[1] === "مكتمل" ? "done" : row[1] === "غير مطلوب" ? "" : "pending")}</td>
              <td>${row[2]}</td>
              <td>${index < 7 ? badge(index % 2 === 0 ? "مرفق PDF" : "مرفق صورة", "review") : "-"}</td>
              <td><button class="btn small secondary" data-demo>عرض</button></td>
            </tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
    <div class="card" style="grid-column:1 / -1;box-shadow:none">
      <h3>ملاحظات قبل التسعير</h3>
      <div class="form-grid" style="margin-top:12px">
        <label class="field wide">ملاحظات موظف المراجعة<textarea>تمت مراجعة بيانات المعاملة والمرفقات. يمكن إدخال عرض السعر بعد اعتماد المتطلبات.</textarea></label>
      </div>
      <div class="actions">
        <button class="btn success" data-demo>${icons.check} جاهز لكتابة عرض السعر</button>
        <button class="btn secondary" data-demo>حفظ المراجعة</button>
      </div>
    </div>
  </div>`;
}

function customerShareLink(requestNo) {
  const origin = window.location.origin || "";
  return `${origin}${P}insurance_customer_shared_quote.html?request=${encodeURIComponent(requestNo)}`;
}

function multiCompanyQuoteRows(item, shareLink = customerShareLink(item.requestNo)) {
  const rows = [
    ["الشركة العمانية للتأمين", item.price, item.monthly, "oman-insurance-offer.pdf", "مرفق"],
    ["تأمين الخليج", item.key === "vehicles" ? "335 ر.ع" : item.key === "loans" ? "158 ر.ع" : "230 ر.ع", item.key === "vehicles" ? "27.9 ر.ع" : item.key === "loans" ? "13.2 ر.ع" : "20 ر.ع", "gulf-insurance-offer.pdf", "بانتظار مراجعة"],
    ["الوطنية للتأمين", item.key === "vehicles" ? "295 ر.ع" : item.key === "loans" ? "139 ر.ع" : "160 ر.ع", item.key === "vehicles" ? "24.6 ر.ع" : item.key === "loans" ? "11.6 ر.ع" : "لا يوجد", "national-insurance-offer.pdf", "جاهز للمشاركة"],
  ];

  return rows.map((row) => `<tr>
    <td><strong>${item.requestNo}</strong></td>
    <td>${row[0]}</td>
    <td><strong style="color:var(--blue)">${row[1]}</strong></td>
    <td>${row[2]}</td>
    <td>${badge(row[3], "review")}</td>
    <td>${badge(row[4], row[4] === "مرفق" || row[4] === "جاهز للمشاركة" ? "done" : "pending")}</td>
    <td>
      <div class="actions" style="margin:0;gap:6px">
        <button class="btn small secondary" data-demo>عرض المستند</button>
        <button class="btn small success" data-share-link="${shareLink}">مشاركة مع العميل</button>
      </div>
    </td>
  </tr>`).join("");
}

function companySendCard(company, status, cls, note) {
  return `<article class="card service-card">
    <div class="quote-head">
      <div>
        <div class="logo-badge">${company.slice(0, 1)}</div>
        <h3 style="margin-top:12px">${company}</h3>
        <p>${note}</p>
      </div>
      ${badge(status, cls)}
    </div>
    <div class="actions">
      <button class="btn small secondary" data-demo>عرض ملف الشركة</button>
      <button class="btn small" data-demo>اختيار للإرسال</button>
    </div>
  </article>`;
}

function staffOfferCard(company, price, coverage, duration, deductible, tag) {
  return `<article class="card quote-card">
    <div class="quote-head">
      <div>
        <div class="logo-badge">${company.slice(0, 1)}</div>
        <h3 style="margin-top:12px">${company}</h3>
        <p>${coverage}</p>
      </div>
      ${badge(tag, tag.includes("الأقل") ? "best" : "high")}
    </div>
    <div class="price">${price}<small> سنوياً</small></div>
    <div class="summary-band" style="grid-template-columns:1fr 1fr">
      ${kv("مدة التأمين", duration)}
      ${kv("نسبة التحمل", deductible)}
    </div>
    <div class="actions">
      <button class="btn small secondary" data-demo>عرض التفاصيل</button>
      <button class="btn small success" data-demo>إرسال للعميل</button>
    </div>
  </article>`;
}

/* ── Valuation Integration ────────────────────────────────── */
function renderIntegration() {
  return pageShell("insurance_valuation_integration.html", `
    <main class="container">
      ${head("ربط التأمين مع نظام التثمين", "واجهة توضح كيف تنتقل بيانات الأصل من معاملة التثمين إلى شركة اليسر للتأمين.")}
      <section class="section grid grid-2">
        <div class="card">
          <h3>معاملة التثمين</h3>
          <div class="summary-band" style="margin-top:14px;grid-template-columns:1fr 1fr">
            ${kv("رقم المعاملة", mock.valuation)}
            ${kv("نوع الأصل", "عقار سكني")}
            ${kv("قيمة الأصل", mock.assetValue)}
            ${kv("الموقع", mock.location)}
            ${kv("شركة التثمين", "شركة يُسُر للتثمين")}
            ${kv("حالة الربط", badge("جاهز لإرسال الطلب", "done"))}
          </div>
          <div class="actions">
            <a class="btn" href="${P}insurance_requirements_demo.html">${icons.file} متطلبات التأمين</a>
            <button class="btn secondary" data-demo>${icons.link} طلب عروض من الشركات</button>
            <a class="btn ghost" href="${P}insurance_quotes_customer.html">عروض الأسعار</a>
          </div>
        </div>
        <div class="card">
          <h3>مسار الربط</h3>
          ${timeline(["فتح معاملة التثمين وتسجيل بيانات الأصل", "تحويل بيانات الأصل تلقائياً إلى طلب تأمين", "تجهيز المرفقات والمتطلبات اللازمة", "طلب عروض من مصادر التأمين المعتمدة", "استلام عروض الأسعار ومقارنتها"])}
        </div>
      </section>
    </main>
  `);
}

/* ── Service Detail ───────────────────────────────────────── */
function renderServiceDetail(kind) {
  const details = {
    finance:  ["تأمين التمويل والقروض",  "حلول تأمين مرتبطة بطلبات التمويل البنكي مع بيانات العميل والبنك.",        icons.bank, [["اسم البنك", mock.bank], ["مبلغ التمويل", "62,000 ر.ع"], ["مدة التمويل", "15 سنة"], ["نوع التمويل", "تمويل عقاري"]]],
    vehicle:  ["تأمين المركبات",          "تأمين شامل أو طرف ثالث مع إمكانية استخدام تقرير تثمين المركبة.",          icons.car,  [["نوع المركبة", "سيارة دفع رباعي"], ["الماركة", "Toyota"], ["الموديل", "Land Cruiser"], ["قيمة المركبة", "22,500 ر.ع"]]],
    property: ["تأمين العقارات",          "تأمين العقارات السكنية والتجارية وربط قيمة العقار بتقرير التثمين.",        icons.home, [["نوع العقار", "فيلا سكنية"], ["الموقع", mock.location], ["قيمة العقار", mock.assetValue], ["رقم التثمين", mock.valuation]]],
    assets:   ["تأمين الممتلكات",         "تأمين الممتلكات والمحتويات حسب القيمة والموقع ونوع الأصل.",                icons.box,  [["نوع الممتلكات", "معدات ومحتويات"], ["الموقع", "مسقط - الخوير"], ["القيمة", "18,000 ر.ع"], ["مدة التأمين", "12 شهر"]]],
  }[kind];
  return pageShell(`insurance_${kind}.html`, `
    <main class="container">
      ${head(details[0], details[1])}
      <section class="section grid grid-2">
        <div class="card">
          <div class="icon blue" style="margin-bottom:16px">${details[2]}</div>
          <h3>بيانات تجريبية</h3>
          <div class="summary-band" style="margin-top:14px;grid-template-columns:1fr 1fr">
            ${details[3].map(([a, b]) => kv(a, b)).join("")}
          </div>
          <div class="actions">
            <a class="btn" href="${P}insurance_request.html">${icons.shield} طلب الخدمة</a>
            <button class="btn secondary" data-demo>معرفة المزيد</button>
          </div>
        </div>
        <div class="card">
          <h3>رحلة الخدمة</h3>
          ${timeline(["تعبئة نموذج الطلب", "مراجعة المتطلبات والمرفقات", "طلب عروض من مصادر التأمين", "استلام عروض الأسعار ومقارنتها", "اختيار العرض وإصدار الوثيقة"])}
        </div>
      </section>
    </main>
  `);
}

/* ── Requirements ─────────────────────────────────────────── */
function renderRequirements() {
  return pageShell("insurance_requirements_demo.html", `
    <main class="container">
      ${head("متطلبات إصدار التأمين", "نموذج تجريبي يوضح متطلبات التأمين القادمة من نظام التثمين.")}
      <div class="alert" style="margin-bottom:18px">هذه نسخة تجريبية لعرض متطلبات التأمين المرتبطة بمعاملة التثمين.</div>
      <section class="card" style="margin-bottom:18px">
        <div class="section-title">
          <div><h2>ملخص الطلب</h2><p>بيانات واردة من معاملة التثمين.</p></div>
          ${badge("قيد المراجعة")}
        </div>
        <div class="summary-band">
          ${kv("رقم المعاملة", mock.valuation)}
          ${kv("اسم العميل", mock.customer)}
          ${kv("نوع التأمين", mock.insuranceType)}
          ${kv("قيمة الأصل", mock.assetValue)}
          ${kv("اسم البنك", mock.bank)}
          ${kv("نسبة الاكتمال", "75%")}
        </div>
      </section>
      ${formSection("بيانات العميل", [
        ["الاسم الكامل", mock.customer],
        ["رقم الهاتف", mock.phone],
        ["الرقم المدني", "12345678"],
        ["البريد الإلكتروني", ""],
      ])}
      ${formSection("بيانات الأصل", [
        ["نوع العقار", "فيلا سكنية"],
        ["الموقع", mock.location],
        ["قيمة العقار", mock.assetValue],
        ["رقم التثمين", mock.valuation],
      ])}
      <div class="actions" style="margin-top:8px">
        <button class="btn success" data-demo>${icons.check} طلب عروض من الشركات</button>
        <a class="btn secondary" href="${P}insurance_quotes_customer.html">عرض عروض الأسعار</a>
        <a class="btn ghost" href="${P}insurance_valuation_integration.html">رجوع إلى معاملة التثمين</a>
      </div>
    </main>
  `);
}

function renderSharedQuote() {
  const requestNo = new URLSearchParams(window.location.search).get("request") || mock.request;
  const isVehicle = requestNo.includes("VEH");
  const isLoan = requestNo.includes("LOAN");
  const requestType = isVehicle ? "تأمين مركبة شامل" : isLoan ? "تأمين قرض عقاري" : "تأمين عقار";
  const requestValue = isVehicle ? "22,500 ر.ع" : isLoan ? "62,000 ر.ع" : mock.assetValue;
  const customerName = isVehicle ? "مريم السيابية" : mock.customer;
  const customerAsset = isVehicle ? "Toyota Land Cruiser 2022" : isLoan ? "تمويل عقاري" : "فيلا سكنية";
  const link = `${window.location.origin}${window.location.pathname}${window.location.search}`;

  return pageShell("insurance_quotes_customer.html", `
    <main class="container">
      <section class="customer-share-hero">
        <div>
          <span class="eyebrow">${icons.link} رابط مشاركة عروض الأسعار</span>
          <h1>عروض الأسعار الخاصة بالمعاملة</h1>
          <p>هذه صفحة تجريبية يفتحها العميل من الرابط المرسل له لمراجعة عروض الأسعار المرفقة لنفس المعاملة واختيار العرض المناسب.</p>
        </div>
        <div class="customer-share-status">
          ${badge("بانتظار اختيار العميل", "pending")}
          <strong>${requestNo}</strong>
          <span>${requestType}</span>
        </div>
      </section>

      <section class="section">
        <div class="share-preview">
          <div>
            <h2>ملخص المعاملة</h2>
            <p>الرابط جاهز للمشاركة مع العميل عبر واتساب أو رسالة نصية أو البريد الإلكتروني.</p>
          </div>
          <div class="share-link-box">
            <input readonly value="${link}">
            <button class="btn success" data-share-link="${link}">نسخ الرابط</button>
          </div>
        </div>
      </section>

      <section class="section grid grid-4 customer-summary-strip">
        ${kv("رقم المعاملة", requestNo)}
        ${kv("اسم العميل", customerName)}
        ${kv("نوع التأمين", requestType)}
        ${kv("القيمة", requestValue)}
        ${kv("الأصل / التمويل", customerAsset)}
        ${kv("الحالة", badge("بانتظار اختيار العميل", "pending"))}
        ${kv("تاريخ مشاركة الرابط", "2026-05-13")}
        ${kv("صلاحية العروض", "حتى 2026-05-30")}
      </section>

      <section class="section">
        <div class="section-title">
          <div>
            <h2>مقارنة عروض الشركات</h2>
            <p>كل عرض مرفق من شركة مختلفة لنفس المعاملة، ويمكن للعميل اختيار العرض المناسب.</p>
          </div>
        </div>
        <div class="grid grid-3 customer-quotes-grid">
          ${sharedQuoteCard("الشركة العمانية للتأمين", isVehicle ? "310 ر.ع" : isLoan ? "145 ر.ع" : "185 ر.ع", isVehicle ? "25.8 ر.ع" : isLoan ? "12.1 ر.ع" : "16 ر.ع", "تغطية شاملة", "oman-insurance-offer.pdf", "الأكثر توازناً")}
          ${sharedQuoteCard("تأمين الخليج", isVehicle ? "335 ر.ع" : isLoan ? "158 ر.ع" : "230 ر.ع", isVehicle ? "27.9 ر.ع" : isLoan ? "13.2 ر.ع" : "20 ر.ع", "تغطية موسعة", "gulf-insurance-offer.pdf", "تغطية أعلى")}
          ${sharedQuoteCard("الوطنية للتأمين", isVehicle ? "295 ر.ع" : isLoan ? "139 ر.ع" : "160 ر.ع", isVehicle ? "24.6 ر.ع" : isLoan ? "11.6 ر.ع" : "لا يوجد", "تغطية أساسية", "national-insurance-offer.pdf", "الأقل سعراً")}
        </div>
      </section>

      <section class="section grid grid-2">
        <article class="card">
          <h3>ماذا يحدث بعد اختيار العرض؟</h3>
          ${timeline(["اختيار العميل لأحد العروض", "إشعار موظف شركة اليسر بالاختيار", "مراجعة بيانات الإصدار", "إصدار الوثيقة وإرسالها للعميل"])}
        </article>
        <article class="card">
          <h3>ملاحظات مهمة</h3>
          <p>هذه صفحة تجريبية للعرض فقط. في التنفيذ الفعلي سيتم حماية الرابط برقم هاتف أو رمز تحقق، وربطه بقاعدة البيانات ومصادر العروض حسب التكامل المعتمد.</p>
          <div class="actions">
            <a class="btn secondary" href="${P}insurance_staff_dashboard.html">رجوع لبوابة الموظف</a>
            <button class="btn" data-demo>طلب تواصل</button>
          </div>
        </article>
      </section>
    </main>
  `);
}

function sharedQuoteCard(company, price, monthly, coverage, documentName, tag) {
  return `<article class="card quote-card customer-quote-card">
    <div class="quote-head">
      <div>
        <div class="logo-badge">${company.slice(0, 1)}</div>
        <h3 style="margin-top:12px">${company}</h3>
        <p>${coverage}</p>
      </div>
      ${badge(tag, tag.includes("الأقل") ? "best" : "high")}
    </div>
    <div class="price">${price}<small> سنوياً</small></div>
    <div class="summary-band" style="grid-template-columns:1fr 1fr">
      ${kv("القسط الشهري", monthly)}
      ${kv("مدة التأمين", "12 شهر")}
      ${kv("مستند العرض", badge(documentName, "review"))}
      ${kv("الحالة", badge("متاح", "new"))}
    </div>
    <div class="actions">
      <button class="btn small secondary" data-demo>عرض مستند العرض</button>
      <button class="btn small success" data-demo>اختيار هذا العرض</button>
    </div>
  </article>`;
}

/* ── Events ───────────────────────────────────────────────── */
function bind() {
  document.addEventListener("click", (event) => {
    const tourOpen = event.target.closest("[data-tour-open]");
    if (tourOpen) {
      event.preventDefault();
      openStaffTour();
      return;
    }

    const tourClose = event.target.closest("[data-tour-close]");
    if (tourClose) {
      event.preventDefault();
      closeStaffTour();
      return;
    }

    const tourNext = event.target.closest("[data-tour-next]");
    if (tourNext) {
      event.preventDefault();
      moveStaffTour(1);
      return;
    }

    const tourPrev = event.target.closest("[data-tour-prev]");
    if (tourPrev) {
      event.preventDefault();
      moveStaffTour(-1);
      return;
    }

    const tourJump = event.target.closest("[data-tour-jump]");
    if (tourJump) {
      event.preventDefault();
      setStaffTourStep(Number(tourJump.dataset.tourJump || 0));
      return;
    }

    const tourChoose = event.target.closest("[data-tour-choose]");
    if (tourChoose) {
      event.preventDefault();
      startStaffTourForSection(tourChoose.dataset.tourChoose);
      return;
    }

    const tourApply = event.target.closest("[data-tour-apply]");
    if (tourApply) {
      event.preventDefault();
      applyStaffTourAction(tourApply.dataset.tourApply);
      return;
    }

    const staffSection = event.target.closest("[data-staff-section]");
    if (staffSection) {
      event.preventDefault();
      const target = staffSection.dataset.staffSection;
      activateStaffSection(target);
      renderStaffTour(target);
      showToast("تم عرض قسم بوابة الموظف بشكل تجريبي.");
      return;
    }

    const viewTransaction = event.target.closest("[data-view-transaction]");
    if (viewTransaction) {
      event.preventDefault();
      const key = viewTransaction.dataset.viewTransaction;
      const details = document.querySelector(`[data-transaction-details="${key}"]`);
      if (details) {
        details.classList.toggle("is-hidden");
        details.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      showToast("تم عرض كامل متطلبات المعاملة قبل كتابة عرض السعر.");
      return;
    }

    const shareLink = event.target.closest("[data-share-link]");
    if (shareLink) {
      event.preventDefault();
      const link = shareLink.dataset.shareLink;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(link).catch(() => {});
      }
      showToast("تم تجهيز رابط العميل تجريبياً: " + link);
      return;
    }

    const attachOffer = event.target.closest("[data-attach-offer]");
    if (attachOffer) {
      event.preventDefault();
      const panel = attachOffer.closest("[data-staff-panel]");
      const fileInput = panel ? panel.querySelector("[data-offer-file]") : null;
      const fileName = fileInput && fileInput.files && fileInput.files[0] ? fileInput.files[0].name : "مستند عرض سعر تجريبي";
      showToast("تم إرفاق عرض سعر للمعاملة " + attachOffer.dataset.attachOffer + " مع المستند: " + fileName);
      return;
    }

    const demo = event.target.closest("[data-demo]");
    if (demo) {
      event.preventDefault();
      showToast("تم تنفيذ الإجراء بشكل تجريبي فقط.");
    }
    const offer = event.target.closest("[data-select-offer]");
    if (offer) {
      const [company, price] = offer.dataset.selectOffer.split("|");
      document.getElementById("selected-offer").innerHTML = `
        <h3>العرض المختار</h3>
        <p>تم اختيار عرض <strong>${company}</strong> بسعر <strong style="color:var(--blue)">${price}</strong> تجريبياً.</p>
        ${badge("تم اختياره", "selected")}
        <div class="actions"><button class="btn secondary small" data-demo>تغيير الاختيار</button></div>`;
      showToast("تم تأكيد اختيار العرض تجريبياً.");
    }
    const details = event.target.closest("[data-offer-details]");
    if (details) openOffer(details.dataset.offerDetails);
    const close = event.target.closest("[data-close-modal]");
    if (close) document.getElementById("modal-root").innerHTML = "";
  });

  document.addEventListener("submit", (event) => {
    if (event.target.id === "claim-form") {
      event.preventDefault();
      document.getElementById("claim-result").innerHTML = claimResult();
      showToast("تم عرض حالة المطالبة ببيانات تجريبية.");
    }
  });

  const requestType = document.getElementById("request-type");
  if (requestType) {
    requestType.addEventListener("change", () => setAssetFields(requestType.value));
    setAssetFields(requestType.value);
  }

  if (document.querySelector("[data-tour-overlay]")) {
    const section = getRequestedStaffSection() || getActiveStaffSection();
    activateStaffSection(section);
    showStaffTourPicker();
  }
}

function openStaffTour() {
  const overlay = document.querySelector("[data-tour-overlay]");
  if (!overlay) return;
  showStaffTourPicker();
  overlay.classList.remove("is-hidden");
}

function closeStaffTour() {
  const overlay = document.querySelector("[data-tour-overlay]");
  if (!overlay) return;
  overlay.classList.add("is-hidden");
}

function getStaffTourIndex() {
  const active = document.querySelector("[data-tour-step].active");
  return active ? Number(active.dataset.tourStep || 0) : 0;
}

function moveStaffTour(direction) {
  const steps = document.querySelectorAll("[data-tour-step]");
  if (!steps.length) return;
  const next = Math.max(0, Math.min(steps.length - 1, getStaffTourIndex() + direction));
  setStaffTourStep(next);
}

function setStaffTourStep(index) {
  const steps = document.querySelectorAll("[data-tour-step]");
  const buttons = document.querySelectorAll("[data-tour-jump]");
  if (!steps.length) return;
  const safeIndex = Math.max(0, Math.min(steps.length - 1, index));
  steps.forEach((step) => step.classList.toggle("active", Number(step.dataset.tourStep) === safeIndex));
  buttons.forEach((button) => button.classList.toggle("active", Number(button.dataset.tourJump) === safeIndex));
  const prev = document.querySelector("[data-tour-prev]");
  const next = document.querySelector("[data-tour-next]");
  if (prev) prev.disabled = safeIndex === 0;
  if (next) next.textContent = safeIndex === steps.length - 1 ? "إنهاء الشرح" : "التالي";
  if (next) next.onclick = safeIndex === steps.length - 1 ? closeStaffTour : null;
}

function showStaffTourPicker() {
  const profile = { heading: "اختر القسم المطلوب شرحه", subheading: "ابدأ العرض باختيار القسم الذي تريد الشركة فهم آلية عمله، ثم انتقل خطوة بخطوة داخل البوابة." };
  const heading = document.querySelector("[data-tour-heading]");
  const subheading = document.querySelector("[data-tour-subheading]");
  const rail = document.querySelector("[data-tour-rail]");
  const picker = document.querySelector("[data-tour-picker]");
  const steps = document.querySelector("[data-tour-steps]");
  const actions = document.querySelector("[data-tour-actions]");
  if (heading) heading.textContent = profile.heading;
  if (subheading) subheading.textContent = profile.subheading;
  if (rail) rail.innerHTML = `<button class="active"><span>1</span>اختيار القسم</button>`;
  if (picker) picker.classList.remove("is-hidden");
  if (steps) steps.classList.add("is-hidden");
  if (actions) actions.classList.add("is-hidden");
}

function startStaffTourForSection(section) {
  activateStaffSection(section);
  renderStaffTour(section);
  const picker = document.querySelector("[data-tour-picker]");
  const steps = document.querySelector("[data-tour-steps]");
  const actions = document.querySelector("[data-tour-actions]");
  if (picker) picker.classList.add("is-hidden");
  if (steps) steps.classList.remove("is-hidden");
  if (actions) actions.classList.remove("is-hidden");
  setStaffTourStep(0);
}

function applyStaffTourAction(action) {
  closeStaffTour();
  const [kind, section = getActiveStaffSection()] = String(action || "").split(":");

  if (kind === "section") {
    activateStaffSection(section);
    renderStaffTour(section);
    highlightElement(`[data-staff-panel="${section}"] .staff-workspace, [data-staff-panel="${section}"]`);
    return;
  }

  if (kind === "view") {
    activateStaffSection(section);
    renderStaffTour(section);
    const details = document.querySelector(`[data-transaction-details="${section}"]`);
    if (details) {
      details.classList.remove("is-hidden");
      highlightElementElement(details);
    }
    return;
  }

  if (kind === "attach") {
    activateStaffSection(section);
    renderStaffTour(section);
    const details = document.querySelector(`[data-attach-offers-panel="${section}"]`);
    if (details) {
      details.open = true;
      details.scrollIntoView({ behavior: "smooth", block: "start" });
      highlightElementElement(details);
    }
    return;
  }

  if (kind === "claims-update") {
    activateStaffSection("claims");
    renderStaffTour("claims");
    highlightElement('[data-staff-panel="claims"] .card:last-child');
    return;
  }

  if (kind === "link") {
    activateStaffSection(section);
    renderStaffTour(section);
    const link = section === "claims"
      ? document.querySelector('[data-staff-panel="claims"] [data-share-link]')
      : document.querySelector(`[data-staff-panel="${section}"] .staff-side-pane a.btn.secondary`);
    if (link) {
      highlightElementElement(link);
      setTimeout(() => link.click(), 700);
    }
  }
}

function activateStaffSection(section) {
  const safeSection = getStaffTourProfile(section) ? section : "loans";
  document.querySelectorAll("[data-staff-section]").forEach((button) => {
    button.classList.toggle("active", button.dataset.staffSection === safeSection);
  });
  document.querySelectorAll("[data-staff-panel]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.staffPanel !== safeSection);
  });
}

function getActiveStaffSection() {
  return document.querySelector("[data-staff-section].active")?.dataset.staffSection || "loans";
}

function getRequestedStaffSection() {
  const section = new URLSearchParams(window.location.search).get("section");
  return ["loans", "vehicles", "properties", "claims"].includes(section) ? section : "";
}

function renderStaffTour(section) {
  const profile = getStaffTourProfile(section);
  const steps = getStaffTourSteps(section);
  const heading = document.querySelector("[data-tour-heading]");
  const subheading = document.querySelector("[data-tour-subheading]");
  const rail = document.querySelector("[data-tour-rail]");
  const stepsTarget = document.querySelector("[data-tour-steps]");
  if (heading) heading.textContent = profile.heading;
  if (subheading) subheading.textContent = profile.subheading;
  if (rail) rail.innerHTML = renderStaffTourRail(steps);
  if (stepsTarget) stepsTarget.innerHTML = renderStaffTourSteps(steps);
  setStaffTourStep(0);
}

function highlightElement(selector) {
  const element = selector.includes(",")
    ? selector.split(",").map((part) => document.querySelector(part.trim())).find(Boolean)
    : document.querySelector(selector);
  if (element) highlightElementElement(element);
}

function highlightElementElement(element) {
  element.scrollIntoView({ behavior: "smooth", block: "center" });
  element.classList.add("tour-highlight");
  clearTimeout(highlightElementElement.timer);
  highlightElementElement.timer = setTimeout(() => {
    element.classList.remove("tour-highlight");
  }, 2200);
}

function setAssetFields(type) {
  const target = document.getElementById("asset-fields");
  if (!target) return;
  const fields = {
    vehicle:  [["نوع المركبة", "سيارة دفع رباعي"], ["الماركة", "Toyota"], ["الموديل", "Land Cruiser"], ["سنة الصنع", "2022"], ["رقم اللوحة", "M 45621"], ["رقم الشاصي", "JTEXAMPLE2026"], ["قيمة المركبة", "22,500 ر.ع"]],
    property: [["نوع العقار", "فيلا"], ["المحافظة", "مسقط"], ["الولاية", "السيب"], ["رقم القطعة", "245"], ["رقم المربع", "MAB-12"], ["رقم الكروكي", ""], ["قيمة العقار", mock.assetValue]],
    assets:   [["نوع الممتلكات", "معدات مكتبية"], ["الوصف", "محتويات وأجهزة"], ["الموقع", "مسقط - الخوير"], ["القيمة التقديرية", "18,000 ر.ع"]],
    finance:  [["نوع التمويل", "تمويل عقاري"], ["الأصل المرتبط", "فيلا سكنية"], ["قيمة الأصل", mock.assetValue], ["رقم معاملة التثمين", mock.valuation]],
  }[type];
  target.innerHTML = fields.map(([label, value]) => `
    <label class="field ${value === "" ? "missing" : ""}">
      ${label}
      ${value === "" ? `<span class="required">مطلوب</span>` : ""}
      <input value="${value}">
    </label>`).join("");
}

function openOffer(number) {
  const offer = offers.find((o) => o.number === number) || offers[0];
  document.getElementById("modal-root").innerHTML = `
    <div class="modal-backdrop" data-close-modal>
      <section class="modal" onclick="event.stopPropagation()">
        <div class="modal-head">
          <div style="display:flex;align-items:center;gap:12px">
            <div class="logo-badge">${offer.logo}</div>
            <div><h3 style="margin:0">${offer.company}</h3><span style="font-size:13px;color:var(--muted)">${offer.type}</span></div>
          </div>
          <button class="close-x" data-close-modal>✕</button>
        </div>
        <div class="modal-body">
          <div class="summary-band">
            ${kv("رقم العرض", offer.number)}
            ${kv("السعر السنوي", offer.price)}
            ${kv("القسط الشهري", offer.monthly)}
            ${kv("نسبة التحمل", offer.deductible)}
          </div>
          <p style="margin-top:16px"><strong>التغطيات المشمولة:</strong> ${offer.includes.join("، ")}</p>
          <p class="muted"><strong>الاستثناءات:</strong> ${offer.excludes.join("، ")}</p>
          <div class="actions">
            <button class="btn success" data-select-offer="${offer.company}|${offer.price}">${icons.check} اختيار هذا العرض</button>
            <button class="btn secondary" data-demo>تواصل مع خدمة العملاء</button>
          </div>
        </div>
      </section>
    </div>`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2800);
}

/* ── Render ───────────────────────────────────────────────── */
function render() {
  const page = document.body.dataset.page;
  const map = {
    home:        renderHome,
    services:    renderServices,
    request:     renderRequest,
    requirements:renderRequirements,
    quotes:      renderQuotes,
    claims:      renderClaimTracking,
    customer:    renderCustomerDashboard,
    staff:       renderStaffDashboard,
    sharedQuote: renderSharedQuote,
    integration: renderIntegration,
    finance:     () => renderServiceDetail("finance"),
    vehicle:     () => renderServiceDetail("vehicle"),
    property:    () => renderServiceDetail("property"),
    assets:      () => renderServiceDetail("assets"),
  };
  document.getElementById("insurance-app").innerHTML = (map[page] || renderHome)();
  bind();
}

render();
