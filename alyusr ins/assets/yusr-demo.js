/* ═══════════════════════════════════════════════
   yusr-demo.js — نسخة تجريبية نظام يُسُر للتأمين
   ═══════════════════════════════════════════════ */

const MSG_DEMO = "هذا الإجراء تجريبي وسيتم تفعيله بعد اعتماد المشروع وتوقيع العقد.";
const MSG_CHOOSE = "تم اختيار العرض بشكل تجريبي. سيتم استكمال إجراءات إصدار الوثيقة لاحقاً.";

const P = {
  intro:     "insurance_demo_intro.html",
  guided:    "insurance_guided_demo.html",
  home:      "insurance_home.html",
  portals:   "insurance_portals.html",
  customer:  "insurance_customer_portal.html",
  valuation: "insurance_valuation_staff_portal.html",
  staff:     "insurance_staff_portal.html",
  company:   "insurance_company_portal.html",
  admin:     "insurance_admin_portal.html",
  claims:    "insurance_claim_tracking.html",
  flow:      "insurance_demo_flow.html"
};

const SP = {
  customerRequests:       "insurance_customer_requests.html",
  customerQuotes:         "insurance_customer_quotes.html",
  customerDocuments:      "insurance_customer_documents.html",
  customerClaims:         "insurance_customer_claims.html",
  customerNotifications:  "insurance_customer_notifications.html",
  valuationTransactions:  "insurance_valuation_transactions.html",
  valuationRequirements:  "insurance_valuation_requirements.html",
  staffRequests:          "insurance_staff_requests.html",
  staffReview:            "insurance_staff_request_review.html",
  staffOffers:            "insurance_staff_offers.html",
  companyRequests:        "insurance_company_requests.html",
  companyDetails:         "insurance_company_request_details.html",
  companyQuote:           "insurance_company_quote_form.html",
  adminCustomers:         "insurance_admin_customers.html",
  adminCompanies:         "insurance_admin_companies.html",
  adminRequests:          "insurance_admin_requests.html",
  adminOffers:            "insurance_admin_offers.html",
  adminClaims:            "insurance_admin_claims.html",
  adminReports:           "insurance_admin_reports.html",
  adminSettings:          "insurance_admin_settings.html"
};

const D = {
  customer:    "أحمد بن سعيد البلوشي",
  phone:       "9XXXXXXX",
  civil:       "12345678",
  valuation:   "VAL-2026-0045",
  request:     "INS-2026-0007",
  insurance:   "تأمين عقار",
  asset:       "فيلا سكنية",
  value:       "85,000 ر.ع",
  bank:        "بنك مسقط",
  location:    "مسقط - المعبيلة",
  status:      "بانتظار اختيار العميل",
  claim:       "CLM-2026-0012",
  claimStatus: "قيد المراجعة"
};

const OFFERS = [
  {
    company: "الشركة العمانية للتأمين",
    type: "وثيقة عقار شاملة",
    price: "185", unit: "ر.ع",
    monthly: "16 ر.ع", deductible: "100 ر.ع",
    tag: "موازنة جيدة", cls: "green", recommended: true,
    cover: ["الحريق والأضرار العرضية", "المسؤولية المدنية", "تلف المياه"]
  },
  {
    company: "تأمين الخليج",
    type: "وثيقة تغطية موسعة",
    price: "230", unit: "ر.ع",
    monthly: "20 ر.ع", deductible: "75 ر.ع",
    tag: "تغطية أعلى", cls: "gold", recommended: false,
    cover: ["الحريق والكوارث الطبيعية", "تلف المياه الكامل", "المسؤولية الموسعة"]
  },
  {
    company: "الوطنية للتأمين",
    type: "وثيقة عقار أساسية",
    price: "160", unit: "ر.ع",
    monthly: "—", deductible: "150 ر.ع",
    tag: "الأقل سعراً", cls: "blue", recommended: false,
    cover: ["الحريق الأساسي", "أضرار محدودة", "دعم المطالبات"]
  }
];

/* ─── Helpers ─── */
function badge(text, cls = "default") {
  return `<span class="badge ${cls}">${text}</span>`;
}

function btn(text, cls = "", attrs = "data-demo") {
  return `<button class="btn ${cls}" ${attrs}>${text}</button>`;
}

function kv(label, value) {
  return `<div class="kv"><span>${label}</span><strong>${value}</strong></div>`;
}

function statCard(label, value, icon, iconCls = "si-blue") {
  return `<article class="card">
    <div class="stat-card">
      <div class="stat-icon ${iconCls}">${icon}</div>
      <div>
        <div class="stat-num">${value}</div>
        <div class="stat-lbl">${label}</div>
      </div>
    </div>
  </article>`;
}

function sectionHead(title, sub = "", action = "") {
  return `<div class="section-title">
    <div><h2>${title}</h2>${sub ? `<p class="sub">${sub}</p>` : ""}</div>
    ${action ? `<div class="actions">${action}</div>` : ""}
  </div>`;
}

/* ─── Header ─── */
function header(active) {
  const links = [
    [P.intro,   "دليل النظام",             "intro"],
    [P.guided,  "التجربة الموجهة",          "guided"],
    [P.home,    "الرئيسية",          "home"],
    [P.portals, "البوابات",           "portals"],
    [P.flow,    "رحلة الطلب",        "flow"],
    [P.claims,  "تتبع مطالبة",       "claims"]
  ];
  return `
    <div class="demo-badge">نسخة تجريبية للعرض فقط — Demo Version</div>
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="${P.home}">
          <span class="brand-mark">يسر</span>
          <span>نظام يُسُر للتأمين<small>Frontend Demo</small></span>
        </a>
        <nav class="nav-links">
          ${links.map(([href, label, key]) =>
            `<a class="${active === key ? "active" : ""}" href="${href}">${label}</a>`
          ).join("")}
        </nav>
        <div class="nav-cta">
          <a class="btn" href="${P.portals}">استعراض البوابات</a>
        </div>
      </div>
    </header>`;
}

/* ─── Footer ─── */
function footer() {
  return `
    <footer class="footer">
      <div class="container footer-inner">
        <div><strong>نظام يُسُر للتأمين</strong> — نسخة عرض تجريبية Frontend فقط. جميع البيانات Mock Data.</div>
        <div style="font-size:12px;opacity:.7">إصدار 1.0 Demo • 2026</div>
      </div>
    </footer>
    <div id="toast" class="toast"></div>`;
}

/* ─── Page head ─── */
function pageHead(title, desc, backHref = "", backLabel = "") {
  return `<div class="page-head">
    ${badge("نسخة تجريبية للعرض فقط", "gold")}
    <h1 style="margin-top:10px">${title}</h1>
    ${desc ? `<p>${desc}</p>` : ""}
    ${backHref ? `<a class="btn ghost" href="${backHref}" style="margin-top:8px">← ${backLabel}</a>` : ""}
  </div>`;
}

/* ─── Portal cards ─── */
const PORTALS = [
  { title: "بوابة العميل",          role: "للعملاء",               desc: "متابعة الطلبات، مقارنة عروض الأسعار، وتتبع الوثائق والمطالبات.", href: P.customer,  icon: "عم" },
  { title: "بوابة موظف التثمين",    role: "لموظفي نظام التثمين",   desc: "تحويل بيانات معاملة التثمين إلى طلب تأمين جاهز.",              href: P.valuation, icon: "تث" },
  { title: "بوابة موظف شركة اليسر",    role: "للموظفين الداخليين",    desc: "مراجعة الطلبات، إرفاق عروض الشركات، ومشاركة رابط المقارنة مع العميل.",             href: P.staff,     icon: "مو" },
  { title: "قسم عروض الشركات",      role: "داخل بوابة شركة اليسر",     desc: "إدارة داخلية لإدخال أسعار الشركات وإرفاق مستند كل عرض لنفس المعاملة.",         href: P.staff,   icon: "عر" },
  { title: "بوابة الإدارة",         role: "للمديرين والإدارة",     desc: "متابعة الأداء العام، التقارير، وإدارة الشركات.",               href: P.admin,     icon: "إد" }
];

function portalGrid() {
  return `<div class="grid grid-5">
    ${PORTALS.map(p => `
      <article class="portal-card">
        <div class="portal-icon">${p.icon}</div>
        <div class="portal-lbl">${p.role}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="actions" style="margin-top:4px">
          <a class="btn" href="${p.href}">دخول تجريبي</a>
        </div>
      </article>`).join("")}
  </div>`;
}

/* ══════════════════════════════════════════
   PAGES
   ══════════════════════════════════════════ */

/* ─── Home ─── */
function renderHome() {
  return `${header("home")}
    <section class="hero">
      <div class="container">
        <div class="hero-inner">
          <div>
            <span class="eyebrow">منصة تأمين رقمية تجريبية</span>
            <h1>نظام يُسُر للتأمين</h1>
            <p>نسخة تجريبية لإدارة طلبات التأمين، عروض الأسعار، المطالبات، والربط مع نظام التثمين.</p>
            <div class="actions">
              <a class="btn" href="${P.portals}">استعراض البوابات</a>
              <a class="btn secondary" href="${P.flow}">مشاهدة رحلة الطلب</a>
            </div>
          </div>
          <div class="hero-preview">
            <h4>رحلة طلب تأمين — مثال تجريبي</h4>
            <div class="preview-step"><div class="preview-dot done"></div><span>معاملة تثمين مكتملة</span></div>
            <div class="preview-step"><div class="preview-dot done"></div><span>طلب تأمين مرسل للمراجعة</span></div>
            <div class="preview-step"><div class="preview-dot done"></div><span>3 عروض أسعار مستلمة</span></div>
            <div class="preview-step"><div class="preview-dot active"></div><span style="font-weight:800;color:#0b5f8a">بانتظار اختيار العميل</span></div>
            <div class="preview-step"><div class="preview-dot pending"></div><span style="opacity:.5">إصدار الوثيقة</span></div>
          </div>
        </div>
      </div>
    </section>
    <main class="container">
      <section class="section">
        <div class="alert">
          هذه النسخة التجريبية توضح فكرة نظام يُسُر للتأمين بهدف اعتماد المشروع وتوقيع عقد التنفيذ. جميع البيانات المعروضة للتوضيح فقط.
        </div>
      </section>
      <section class="section">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:32px">
          <article class="card" style="border-top:3px solid var(--blue)">
            <div class="stat-icon si-blue" style="margin-bottom:10px">ربط</div>
            <h3>ربط مع نظام التثمين</h3>
            <p class="muted" style="font-size:13px">يستقبل النظام بيانات العميل والأصل تلقائياً من معاملات التثمين.</p>
          </article>
          <article class="card" style="border-top:3px solid var(--teal)">
            <div class="stat-icon si-green" style="margin-bottom:10px">عرض</div>
            <h3>مقارنة عروض الأسعار</h3>
            <p class="muted" style="font-size:13px">يتلقى العميل عروض متعددة من شركات تأمين مختلفة ويختار المناسب.</p>
          </article>
          <article class="card" style="border-top:3px solid var(--gold)">
            <div class="stat-icon si-gold" style="margin-bottom:10px">تتبع</div>
            <h3>تتبع المطالبات</h3>
            <p class="muted" style="font-size:13px">يتابع العميل حالة مطالباته التأمينية من بوابة موحدة.</p>
          </article>
        </div>
        ${sectionHead("البوابات الرئيسية", "كل مستخدم له بوابة مخصصة بصلاحيات واضحة.")}
        ${portalGrid()}
      </section>
      <section class="section">
        ${sectionHead("رحلة طلب التأمين", "من التثمين إلى إصدار الوثيقة.")}
        <div style="display:flex;flex-wrap:wrap;gap:0;background:#fff;border:1px solid var(--line);border-radius:var(--radius);overflow:hidden">
          ${["تثمين الأصل","طلب تأمين","مراجعة الموظف","عروض الشركات","اختيار العميل","إصدار الوثيقة"].map((s, i, arr) => `
            <div style="flex:1;min-width:120px;padding:16px 14px;text-align:center;position:relative${i < arr.length-1 ? ";border-inline-end:1px solid var(--line)" : ""}">
              <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--teal));color:#fff;font-size:12px;font-weight:900;display:grid;place-items:center;margin:0 auto 8px">${i+1}</div>
              <div style="font-size:12px;font-weight:800;color:var(--ink)">${s}</div>
            </div>`).join("")}
        </div>
        <div class="actions" style="margin-top:14px">
          <a class="btn" href="${P.flow}">عرض المسار التفصيلي</a>
        </div>
      </section>
    </main>${footer()}`;
}

/* ─── Portals ─── */
function renderPortals() {
  return `${header("portals")}
    <main class="container">
      ${pageHead("اختر البوابة التجريبية", "النظام مخصص لشركة اليسر للتأمين كوسيط تأمين واحد؛ عروض الشركات تُدار داخلياً بواسطة موظف شركة اليسر ولا توجد بوابة خارجية لشركات التأمين.")}
      <section class="section">${portalGrid()}</section>
    </main>${footer()}`;
}

/* ─── Customer Portal ─── */
function renderCustomer() {
  return `${header("portals")}
    <main class="container">
      ${pageHead("بوابة العميل", "")}
      <div style="margin-bottom:20px">
        <div style="font-size:22px;font-weight:900">مرحباً، أحمد 👋</div>
        <p class="muted">تابع طلبات التأمين والعروض المتاحة من مكان واحد.</p>
      </div>
      <section class="section grid grid-4">
        ${statCard("طلبات التأمين",          "3",  "طل", "si-blue")}
        ${statCard("عروض بانتظار الاختيار",  "1",  "عر", "si-orange")}
        ${statCard("وثائق نشطة",             "2",  "وث", "si-green")}
        ${statCard("مطالبات قيد المراجعة",   "1",  "مط", "si-red")}
      </section>
      <section class="section">
        <div class="featured-card">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
            <div>
              <div style="font-size:12px;color:var(--orange);font-weight:900;margin-bottom:4px">⚠ يتطلب إجراءً منك</div>
              <h3>عرض تأمين بانتظار اختيارك</h3>
              <p class="muted" style="margin:4px 0 0;font-size:13px">لديك 3 عروض أسعار من شركات تأمين مختلفة — يُرجى المراجعة والاختيار.</p>
            </div>
            <div style="text-align:center;padding:12px 24px;background:var(--blue-bg);border-radius:var(--radius-sm)">
              <div style="font-size:11px;color:var(--muted);font-weight:800">أقل سعر متاح</div>
              <div style="font-size:28px;font-weight:900;color:var(--blue)">160 ر.ع</div>
              <div style="font-size:11px;color:var(--muted)">سنوياً</div>
            </div>
          </div>
          <hr class="divider">
          <div class="kv-grid" style="grid-template-columns:repeat(4,1fr)">
            ${kv("نوع التأمين",   D.insurance)}
            ${kv("قيمة الأصل",    D.value)}
            ${kv("عدد العروض",    "3 عروض")}
            ${kv("رقم الطلب",     D.request)}
          </div>
          <div class="actions" style="margin-top:14px">
            <a class="btn success" href="${SP.customerQuotes}">مقارنة العروض والاختيار</a>
            <button class="btn ghost" data-demo>تفاصيل الطلب</button>
          </div>
        </div>
      </section>
      <section class="section">
        ${sectionHead("طلباتي الأخيرة", "", `<a class="btn ghost" href="${SP.customerRequests}">عرض الكل</a>`)}
        <div class="grid grid-3">
          ${[
            [D.request,         D.insurance,        D.value,       D.status,      "orange", "2026-05-12"],
            ["INS-2026-0008",   "تأمين مركبة",      "22,500 ر.ع",  "ناقص بيانات", "orange", "2026-05-11"],
            ["INS-2026-0009",   "تأمين ممتلكات",    "18,000 ر.ع",  "مرسل للشركات","blue",   "2026-05-10"]
          ].map(([num, type, val, status, cls, date]) => `
            <article class="request-card">
              <div class="request-card-row">
                <strong style="font-size:13px">${num}</strong>
                ${badge(status, cls)}
              </div>
              <div style="font-size:13px;color:var(--muted)">${type} · ${val}</div>
              <div class="request-card-row">
                <span style="font-size:12px;color:var(--muted)">${date}</span>
                <button class="btn ghost" style="min-height:32px;font-size:12px;padding:4px 10px" data-demo>عرض</button>
              </div>
            </article>`).join("")}
        </div>
      </section>
      <section class="section">
        ${sectionHead("مطالماتي", "", `<a class="btn ghost" href="${SP.customerClaims}">عرض الكل</a>`)}
        <article class="card" style="display:grid;grid-template-columns:1fr auto;gap:16px;align-items:center">
          <div>
            <div style="font-size:13px;font-weight:900;margin-bottom:6px">${D.claim}</div>
            <div class="kv-grid kv-grid-2" style="gap:8px">
              ${kv("نوع التأمين", D.insurance)}
              ${kv("آخر تحديث",   "2026-05-12")}
            </div>
          </div>
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
            ${badge(D.claimStatus, "orange")}
            <a class="btn ghost" href="${P.claims}" style="font-size:12px;min-height:32px">تتبع المطالبة</a>
          </div>
        </article>
      </section>
    </main>${footer()}`;
}

/* ─── Valuation Staff ─── */
function renderValuation() {
  const rows = [
    [D.valuation, D.customer, D.asset, D.value, D.bank, "مكتملة جزئياً", "green"],
    ["VAL-2026-0046", "مريم السيابية", "مركبة", "22,500 ر.ع", "بنك صحار", "ناقص مرفق", "orange"]
  ];
  return `${header("portals")}
    <main class="container">
      ${pageHead("بوابة موظف التثمين", "تحويل بيانات معاملة التثمين إلى طلب تأمين جاهز.")}
      <section class="section grid grid-4">
        ${statCard("معاملات جاهزة للتأمين", "12", "جه", "si-green")}
        ${statCard("طلبات ناقصة بيانات",    "3",  "نق", "si-orange")}
        ${statCard("مرسلة لموظف شركة اليسر",   "8",  "مر", "si-blue")}
        ${statCard("نسبة اكتمال البيانات",  "75%", "٪",  "si-gold")}
      </section>
      <section class="section">
        ${sectionHead("معاملات التثمين", "اختر معاملة لعرض متطلبات التأمين أو إنشاء طلب.",
          btn("إنشاء طلب تأمين من معاملة", "success"))}
        <article class="card table-card">
          <div class="table-scroll">
            <table>
              <thead><tr>
                <th>رقم التثمين</th><th>العميل</th><th>نوع الأصل</th>
                <th>قيمة التثمين</th><th>البنك</th><th>حالة المتطلبات</th><th>الإجراء</th>
              </tr></thead>
              <tbody>
                ${rows.map(r => `<tr>
                  <td><strong>${r[0]}</strong></td>
                  <td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td>
                  <td>${badge(r[5], r[6])}</td>
                  <td>${btn("عرض المتطلبات", "secondary")}</td>
                </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </article>
      </section>
      <section class="section">
        ${sectionHead("بيانات معاملة: " + D.valuation)}
        <div class="grid grid-2">
          <article class="card">
            <div class="tabs" id="val-tabs">
              <button class="tab active" data-tab="client">بيانات العميل</button>
              <button class="tab" data-tab="asset">بيانات الأصل</button>
              <button class="tab" data-tab="bank">بيانات البنك</button>
              <button class="tab" data-tab="docs">المرفقات</button>
            </div>
            <div class="tab-content active" id="tab-client">
              <div class="kv-grid kv-grid-2">
                ${kv("اسم العميل",    D.customer)}
                ${kv("رقم الهاتف",    D.phone)}
                ${kv("الرقم المدني",  D.civil)}
                ${kv("جهة العمل",     "شركة خاصة")}
              </div>
            </div>
            <div class="tab-content" id="tab-asset">
              <div class="kv-grid kv-grid-2">
                ${kv("نوع الأصل",   D.asset)}
                ${kv("الموقع",      D.location)}
                ${kv("قيمة التثمين", D.value)}
                ${kv("رقم التقرير", D.valuation)}
              </div>
            </div>
            <div class="tab-content" id="tab-bank">
              <div class="kv-grid kv-grid-2">
                ${kv("البنك",       D.bank)}
                ${kv("نوع التمويل", "تمويل عقاري")}
                ${kv("مدة التمويل", "15 سنة")}
                ${kv("قيمة التمويل","68,000 ر.ع")}
              </div>
            </div>
            <div class="tab-content" id="tab-docs">
              <div class="kv-grid kv-grid-2">
                ${kv("تقرير التثمين",   "✓ مرفق")}
                ${kv("الصور",           "✓ 6 صور")}
                ${kv("الكروكي",         "✓ مرفق")}
                ${kv("هوية العميل",     "⚠ ناقص")}
              </div>
            </div>
          </article>
          <article class="card">
            <h3 style="margin-bottom:14px">نسبة اكتمال المتطلبات</h3>
            <div style="font-size:32px;font-weight:900;color:var(--blue);margin-bottom:6px">75%</div>
            <div class="progress"><span style="width:75%"></span></div>
            <p class="muted" style="font-size:12px;margin-top:8px">مطلوب: هوية العميل لاستكمال الطلب</p>
            <hr class="divider">
            <div class="actions" style="flex-direction:column;align-items:stretch">
              ${btn("إرسال إلى موظف شركة اليسر", "success")}
              ${btn("طلب استكمال بيانات",     "warning")}
              ${btn("حفظ كمسودة",             "ghost")}
            </div>
          </article>
        </div>
      </section>
    </main>${footer()}`;
}

/* ─── Staff Portal ─── */
function renderStaff() {
  return `${header("portals")}
    <main class="container">
      ${pageHead("بوابة موظف شركة اليسر", "مراجعة الطلبات، إرسالها لمصادر عروض التأمين، ومتابعة عروض الأسعار.")}
      <section class="section grid grid-4">
        ${statCard("طلبات جديدة",              "8",  "جد", "si-blue")}
        ${statCard("قيد المراجعة",             "3",  "مر", "si-orange")}
        ${statCard("مرسلة للشركات",            "12", "مس", "si-green")}
        ${statCard("بانتظار اختيار العميل",    "5",  "عر", "si-gold")}
      </section>
      <section class="section">
        ${sectionHead("طلبات التأمين", "", `<a class="btn ghost" href="${SP.staffRequests}">الجدول الكامل</a>`)}
        <article class="card table-card">
          <div class="filter-bar">
            <label class="field"><span>الحالة</span>
              <select><option>الكل</option><option>جديد</option><option>قيد المراجعة</option><option>مرسل للشركات</option></select>
            </label>
            <label class="field"><span>نوع التأمين</span>
              <select><option>الكل</option><option>عقار</option><option>مركبة</option><option>ممتلكات</option></select>
            </label>
            <label class="field"><span>البحث</span>
              <input placeholder="رقم الطلب أو اسم العميل…">
            </label>
          </div>
          <div class="table-scroll">
            <table>
              <thead><tr>
                <th>رقم الطلب</th><th>العميل</th><th>نوع التأمين</th>
                <th>قيمة الأصل</th><th>الحالة</th><th>آخر تحديث</th><th>الإجراء</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td><strong>${D.request}</strong></td>
                  <td>${D.customer}</td>
                  <td>${D.insurance}</td>
                  <td>${D.value}</td>
                  <td>${badge(D.status, "orange")}</td>
                  <td>2026-05-12</td>
                  <td><a class="btn secondary" href="${SP.staffReview}" style="min-height:32px;font-size:12px">مراجعة</a></td>
                </tr>
                <tr>
                  <td><strong>INS-2026-0008</strong></td>
                  <td>مريم السيابية</td>
                  <td>تأمين مركبة</td>
                  <td>22,500 ر.ع</td>
                  <td>${badge("ناقص بيانات", "orange")}</td>
                  <td>2026-05-11</td>
                  <td>${btn("مراجعة", "secondary", "data-demo")}</td>
                </tr>
                <tr>
                  <td><strong>INS-2026-0009</strong></td>
                  <td>خالد المعمري</td>
                  <td>تأمين ممتلكات</td>
                  <td>18,000 ر.ع</td>
                  <td>${badge("بانتظار عروض الشركات", "blue")}</td>
                  <td>2026-05-10</td>
                  <td>${btn("مراجعة", "secondary", "data-demo")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
      <section class="section">
        ${sectionHead("تفاصيل الطلب: " + D.request)}
        <div class="detail-layout">
          <div class="grid" style="gap:14px">
            <article class="card">
              <h3 style="margin-bottom:12px">بيانات الطلب</h3>
              <div class="kv-grid">
                ${kv("العميل",        D.customer)}
                ${kv("نوع التأمين",   D.insurance)}
                ${kv("الأصل",         D.asset)}
                ${kv("قيمة الأصل",    D.value)}
                ${kv("البنك",         D.bank)}
                ${kv("مصدر الطلب",   "نظام التثمين")}
                ${kv("رقم التثمين",   D.valuation)}
                ${kv("تاريخ الطلب",   "2026-05-10")}
              </div>
            </article>
            <article class="card">
              <h3 style="margin-bottom:12px">عروض الأسعار المستلمة</h3>
              <div class="table-scroll">
                <table>
                  <thead><tr><th>الشركة</th><th>السعر</th><th>الحالة</th></tr></thead>
                  <tbody>
                    ${OFFERS.map(o => `<tr>
                      <td>${o.company}</td>
                      <td><strong>${o.price} ${o.unit}</strong></td>
                      <td>${badge("مستلم", "green")}</td>
                    </tr>`).join("")}
                  </tbody>
                </table>
              </div>
              <div class="actions" style="margin-top:12px">
                ${btn("إرسال العروض للعميل", "success")}
              </div>
            </article>
          </div>
          <div class="grid" style="gap:14px">
            <article class="card">
              <h3 style="margin-bottom:12px">الحالة والإجراءات</h3>
              <div style="margin-bottom:14px">${badge(D.status, "orange")}</div>
              <div style="margin-bottom:8px">
                <div style="font-size:12px;color:var(--muted);font-weight:800;margin-bottom:6px">اكتمال البيانات</div>
                <div class="progress"><span style="width:86%"></span></div>
                <div style="font-size:12px;color:var(--muted);margin-top:4px">86%</div>
              </div>
              <hr class="divider">
              <div class="actions" style="flex-direction:column;align-items:stretch">
                ${btn("اعتماد الطلب",             "success")}
                ${btn("طلب عروض من الشركات",     "")}
                ${btn("طلب استكمال بيانات",       "ghost")}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>${footer()}`;
}

/* ─── Company Portal ─── */
function renderCompany() {
  return `${header("portals")}
    <main class="container">
      ${pageHead("قسم عروض الشركات", "قسم داخلي لموظف شركة اليسر لإدخال عروض الشركات وإرفاق مستنداتها. لا توجد بوابة خارجية لشركات التأمين في هذه النسخة.")}
      <section class="section grid grid-4">
        ${statCard("طلبات جديدة",         "6",  "جد", "si-blue")}
        ${statCard("قيد التسعير",         "4",  "تس", "si-orange")}
        ${statCard("عروض مرسلة",          "18", "مر", "si-green")}
        ${statCard("عروض تم اختيارها",    "5",  "مخ", "si-gold")}
      </section>
      <section class="section">
        ${sectionHead("الطلبات الواردة", "طلبات التأمين المستلمة من شركة اليسر للتأمين.",
          `<a class="btn ghost" href="${SP.companyRequests}">الجدول الكامل</a>`)}
        <article class="card table-card">
          <div class="table-scroll">
            <table>
              <thead><tr>
                <th>رقم الطلب</th><th>نوع التأمين</th><th>قيمة الأصل</th>
                <th>البنك</th><th>تاريخ الطلب</th><th>الحالة</th><th>الإجراء</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td><strong>${D.request}</strong></td>
                  <td>${D.insurance}</td>
                  <td>${D.value}</td>
                  <td>${D.bank}</td>
                  <td>2026-05-12</td>
                  <td>${badge("قيد التسعير", "blue")}</td>
                  <td><a class="btn secondary" href="${SP.companyDetails}" style="min-height:32px;font-size:12px">تفاصيل الطلب</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
      <section class="section">
        ${sectionHead("نموذج إضافة عرض السعر — " + D.request)}
        <article class="card">
          <div class="step-indicators">
            <div class="step-ind done">
              <div class="step-circle">✓</div>
              <span>بيانات الوثيقة</span>
            </div>
            <div class="step-ind active">
              <div class="step-circle">2</div>
              <span>التسعير</span>
            </div>
            <div class="step-ind">
              <div class="step-circle">3</div>
              <span>التغطيات</span>
            </div>
            <div class="step-ind">
              <div class="step-circle">4</div>
              <span>مراجعة وإرسال</span>
            </div>
          </div>
          <div class="form-grid">
            <label class="field"><span>رقم العرض</span>
              <input value="Q-2026-104"></label>
            <label class="field"><span>نوع الوثيقة</span>
              <input value="وثيقة عقار شاملة"></label>
            <label class="field"><span>مدة التأمين</span>
              <input value="12 شهر"></label>
            <label class="field"><span>السعر الإجمالي</span>
              <input value="185 ر.ع"></label>
            <label class="field"><span>القسط الشهري</span>
              <input value="16 ر.ع"></label>
            <label class="field"><span>نسبة التحمل</span>
              <input value="100 ر.ع"></label>
            <label class="field wide"><span>التغطيات المشمولة</span>
              <textarea>الحريق، الأضرار العرضية، المسؤولية المدنية</textarea></label>
            <label class="field wide"><span>الاستثناءات</span>
              <textarea>الأضرار المتعمدة، الكوارث غير المشمولة</textarea></label>
          </div>
          <div class="actions" style="margin-top:16px">
            ${btn("إرسال عرض السعر", "success")}
            ${btn("طلب مستندات إضافية", "warning")}
            ${btn("رفض الطلب", "ghost")}
          </div>
        </article>
      </section>
    </main>${footer()}`;
}

/* ─── Admin Portal ─── */
function renderAdmin() {
  return `${header("portals")}
    <main class="container">
      ${pageHead("بوابة الإدارة", "متابعة الأداء العام واتخاذ القرارات الإدارية.")}
      <section class="section grid grid-4">
        ${statCard("إجمالي الطلبات",        "128", "طل", "si-blue")}
        ${statCard("عروض الأسعار",          "246", "عر", "si-green")}
        ${statCard("طلبات مكتملة",          "74",  "مك", "si-gold")}
        ${statCard("شركات التأمين",         "9",   "شر", "si-orange")}
      </section>
      <section class="section">
        <div class="grid grid-3" style="margin-bottom:14px">
          <article class="card">
            <div style="font-size:12px;color:var(--muted);font-weight:800;margin-bottom:10px">الطلبات حسب الحالة</div>
            ${[
              ["مكتملة",             "74", "58%", "var(--teal)"],
              ["بانتظار العميل",     "38", "30%", "var(--orange)"],
              ["ناقصة بيانات",       "16", "12%", "var(--red)"]
            ].map(([l, n, p, c]) => `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--line);font-size:13px">
                <span>${l}</span>
                <div style="display:flex;align-items:center;gap:8px">
                  <div style="width:60px;height:6px;background:var(--line);border-radius:999px;overflow:hidden">
                    <div style="width:${p};height:100%;background:${c};border-radius:inherit"></div>
                  </div>
                  <strong style="font-size:12px;color:var(--muted)">${n}</strong>
                </div>
              </div>`).join("")}
          </article>
          <article class="card">
            <div style="font-size:12px;color:var(--muted);font-weight:800;margin-bottom:10px">أكثر أنواع التأمين طلباً</div>
            ${[
              ["تأمين عقار",    "68", "53%"],
              ["تأمين مركبة",   "42", "33%"],
              ["تأمين ممتلكات", "18", "14%"]
            ].map(([l, n, p]) => `
              <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px solid var(--line);font-size:13px">
                <span>${l}</span>
                <div style="display:flex;align-items:center;gap:8px">
                  <div style="width:60px;height:6px;background:var(--line);border-radius:999px;overflow:hidden">
                    <div style="width:${p};height:100%;background:var(--blue);border-radius:inherit"></div>
                  </div>
                  <strong style="font-size:12px;color:var(--muted)">${n}</strong>
                </div>
              </div>`).join("")}
          </article>
          <article class="card">
            <div style="font-size:12px;color:var(--muted);font-weight:800;margin-bottom:10px">مؤشرات الأداء</div>
            <div class="kv-grid kv-grid-2" style="gap:8px">
              ${kv("معدل اختيار العروض",    "62%")}
              ${kv("متوسط سعر العرض",       "192 ر.ع")}
              ${kv("متوسط وقت الاستجابة",  "2.4 يوم")}
              ${kv("المطالبات المفتوحة",   "12")}
            </div>
          </article>
        </div>
      </section>
      <section class="section">
        ${sectionHead("أداء شركات التأمين", "", `
          ${btn("إضافة شركة تأمين")}
          ${btn("تصدير تقرير PDF", "ghost")}
        `)}
        <article class="card table-card">
          <div class="table-scroll">
            <table>
              <thead><tr>
                <th>الشركة</th><th>عدد العروض</th><th>معدل الاختيار</th>
                <th>متوسط السعر</th><th>الحالة</th><th>الإجراء</th>
              </tr></thead>
              <tbody>
                ${OFFERS.map((o, i) => `<tr>
                  <td><strong>${o.company}</strong></td>
                  <td>${[42, 31, 27][i]}</td>
                  <td>${["43%", "39%", "33%"][i]}</td>
                  <td>${o.price} ${o.unit}</td>
                  <td>${badge("نشطة", "green")}</td>
                  <td>${btn("عرض الأداء", "ghost", "data-demo")}</td>
                </tr>`).join("")}
              </tbody>
            </table>
          </div>
        </article>
      </section>
      <section class="section">
        ${sectionHead("أقسام الإدارة")}
        <div class="grid grid-4">
          ${[
            ["إدارة العملاء",        SP.adminCustomers,  "عم"],
            ["إدارة الشركات",        SP.adminCompanies,  "شر"],
            ["إدارة الطلبات",        SP.adminRequests,   "طل"],
            ["التقارير والتحليلات",  SP.adminReports,    "تق"]
          ].map(([title, href, icon]) => `
            <article class="portal-card">
              <div class="portal-icon">${icon}</div>
              <h3>${title}</h3>
              <div class="actions" style="margin-top:4px">
                <a class="btn ghost" href="${href}" style="font-size:12px;min-height:34px">فتح</a>
              </div>
            </article>`).join("")}
        </div>
      </section>
    </main>${footer()}`;
}

/* ─── Claims ─── */
function renderClaims() {
  return `${header("claims")}
    <main class="container">
      ${pageHead("تتبع المطالبة", "أدخل رقم المطالبة ورقم الهاتف لعرض الحالة.")}
      <section class="section grid grid-2" style="align-items:start">
        <article class="card">
          <h3 style="margin-bottom:16px">بحث عن مطالبة</h3>
          <form id="claim-form" class="grid" style="gap:12px">
            <label class="field"><span>رقم المطالبة</span>
              <input value="${D.claim}" placeholder="CLM-XXXX-XXXX"></label>
            <label class="field"><span>رقم الهاتف</span>
              <input value="${D.phone}" placeholder="9XXXXXXX"></label>
            <div class="actions">
              <button class="btn success" type="submit">تتبع المطالبة</button>
            </div>
          </form>
        </article>
        <article class="card" id="claim-result">
          <h3 style="color:var(--muted);font-weight:700">نتيجة البحث</h3>
          <p class="muted" style="font-size:13px">أدخل بيانات المطالبة ثم اضغط تتبع.</p>
        </article>
      </section>
      <section class="section">
        <article class="card">
          <h3 style="margin-bottom:16px">مسار المطالبة</h3>
          <div class="claim-timeline">
            ${[
              ["تم استلام المطالبة",                  "تم تسجيل المطالبة وإحالتها للمراجعة.", false],
              ["جاري مراجعة المستندات",               "المستندات قيد الفحص من قِبل فريق التأمين.", false],
              ["بانتظار قرار مصدر العرض",             "الحالة الحالية — ينتظر رد مصدر التأمين.", true],
              ["الموافقة أو الرفض",                   "سيتم إخطارك بالقرار عبر فريق شركة اليسر.", true],
              ["إغلاق المطالبة وصرف التعويض",         "المرحلة النهائية بعد الموافقة.", true]
            ].map(([title, desc, pending]) => `
              <div class="tl-item">
                <div class="tl-col">
                  <div class="tl-dot${pending ? " pending" : ""}"></div>
                  <div class="tl-line"></div>
                </div>
                <div class="tl-body">
                  <strong>${title}</strong>
                  <p>${desc}</p>
                </div>
              </div>`).join("")}
          </div>
        </article>
      </section>
    </main>${footer()}`;
}

/* ─── Flow ─── */
function renderFlow() {
  const steps = [
    { n: "1", title: "معاملة تثمين جاهزة",        role: "موظف التثمين",        desc: "يكتمل تقرير التثمين ويُحدَّد الأصل وقيمته.", href: P.valuation },
    { n: "2", title: "تحويلها إلى طلب تأمين",      role: "موظف التثمين",        desc: "يُنشئ الموظف طلب تأمين من بيانات التثمين مباشرة.", href: P.valuation },
    { n: "3", title: "مراجعة موظف شركة اليسر",         role: "موظف شركة اليسر",        desc: "يراجع الموظف البيانات والمرفقات ويعتمد الطلب.", href: P.staff },
    { n: "4", title: "إرسال الطلب للشركات",         role: "موظف شركة اليسر",        desc: "يُرسل الطلب لمصادر عروض التأمين المسجلة في المنصة.", href: P.staff },
    { n: "5", title: "موظف شركة اليسر يرفق عروض الشركات",   role: "موظف شركة اليسر",        desc: "يدخل الموظف سعر كل شركة والتغطيات وشروط الوثيقة ويرفق مستند العرض.", href: P.staff },
    { n: "6", title: "العميل يقارن ويختار",          role: "العميل",              desc: "يطّلع العميل على العروض ويختار الأنسب له.", href: P.customer },
    { n: "7", title: "إصدار الوثيقة",               role: "موظف شركة اليسر",        desc: "يُصدر الموظف الوثيقة الرسمية بعد تأكيد اختيار العميل.", href: P.staff },
    { n: "8", title: "تتبع المطالبة عند الحاجة",    role: "العميل / فريق شركة اليسر", desc: "يتابع العميل حالة مطالبته عبر بوابة مستقلة.", href: P.claims }
  ];
  const roleCls = { "موظف التثمين": "gold", "موظف شركة اليسر": "blue", "العميل": "orange", "العميل / فريق شركة اليسر": "default" };
  return `${header("flow")}
    <main class="container">
      ${pageHead("رحلة طلب التأمين", "من معاملة التثمين إلى إصدار الوثيقة — عرض تجريبي للشرح والإقناع.")}
      <section class="section">
        <div class="journey">
          ${steps.map(s => `
            <article class="journey-item">
              <div class="journey-num">${s.n}</div>
              <div>
                <h3>${s.title}</h3>
                <p>${s.desc}</p>
                <div class="journey-role">
                  ${badge("المسؤول: " + s.role, roleCls[s.role] || "default")}
                </div>
              </div>
              <a class="btn secondary" href="${s.href}" style="white-space:nowrap">مشاهدة البوابة</a>
            </article>`).join("")}
        </div>
      </section>
      <section class="section">
        <div class="alert">
          هذه الصفحة مخصصة للعرض أمام الإدارة. كل خطوة مرتبطة ببوابتها التجريبية مباشرة.
        </div>
      </section>
    </main>${footer()}`;
}

/* ─── Claim result (form submit) ─── */
function claimResult() {
  return `<h3 style="margin-bottom:14px">بطاقة المطالبة</h3>
    <div class="kv-grid kv-grid-2" style="gap:8px">
      ${kv("رقم المطالبة",    D.claim)}
      ${kv("اسم العميل",      D.customer)}
      ${kv("نوع التأمين",     D.insurance)}
      ${kv("الشركة",          "الشركة العمانية للتأمين")}
      ${kv("تاريخ المطالبة",  "2026-05-10")}
      ${kv("آخر تحديث",       "2026-05-12")}
    </div>
    <div style="margin-top:12px">${badge(D.claimStatus, "orange")}</div>`;
}

/* ─── Sub-pages ─── */
function renderSection(kind) {
  const quoteCards = () => OFFERS.map(o => `
    <article class="quote-card${o.recommended ? " recommended" : ""}">
      <div class="quote-top">
        <div>
          <h3 style="font-size:15px">${o.company}</h3>
          <p class="muted" style="font-size:12px;margin:0">${o.type}</p>
        </div>
        ${badge(o.tag, o.cls)}
      </div>
      <div class="quote-price">${o.price} <span style="font-size:14px">${o.unit}</span><small> / سنوياً</small></div>
      <div class="quote-meta">
        ${[["مدة التأمين","12 شهر"],["القسط الشهري",o.monthly],["نسبة التحمل",o.deductible],["نوع الوثيقة",o.type.split(" ")[0]]].map(([l,v]) => `<div class="qm"><span>${l}</span><strong>${v}</strong></div>`).join("")}
      </div>
      <ul class="coverage-list">${o.cover.map(c => `<li>${c}</li>`).join("")}</ul>
      <div class="actions">
        ${btn("اختيار العرض", "success", `data-select-offer="${o.company}"`)}
        ${btn("عرض التفاصيل", "ghost")}
      </div>
    </article>`).join("");

  const requestTable = () => `<article class="card table-card"><div class="table-scroll"><table>
    <thead><tr><th>رقم الطلب</th><th>نوع التأمين</th><th>قيمة الأصل</th><th>البنك</th><th>الحالة</th><th>التاريخ</th><th>الإجراء</th></tr></thead>
    <tbody>
      ${[[D.request, D.insurance, D.value, D.bank, D.status, "orange", "2026-05-12"],
         ["INS-2026-0008","تأمين مركبة","22,500 ر.ع","بنك صحار","ناقص بيانات","orange","2026-05-11"],
         ["INS-2026-0009","تأمين ممتلكات","18,000 ر.ع","البنك الوطني","بانتظار عروض الشركات","blue","2026-05-10"]]
        .map(r => `<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${badge(r[4], r[5])}</td><td>${r[6]}</td><td>${btn("عرض","ghost","data-demo")}</td></tr>`).join("")}
    </tbody>
  </table></div></article>`;

  const map = {
    customerRequests: { title: "طلباتي التأمينية", desc: "قائمة طلبات التأمين وحالتها.", back: P.customer, backLabel: "بوابة العميل",
      body: requestTable() },
    customerQuotes: { title: "عروض الأسعار", desc: "قارن بين العروض المتاحة واختر الأنسب.", back: P.customer, backLabel: "بوابة العميل",
      body: `
        <div class="summary-card" style="margin-bottom:14px">
          ${[["نوع التأمين",D.insurance],["قيمة الأصل",D.value],["البنك",D.bank],["رقم الطلب",D.request],["الحالة",D.status]].map(([l,v])=>`<div class="summary-item"><span>${l}</span><strong>${v}</strong></div>`).join("")}
        </div>
        <div class="compare-bar" style="margin-bottom:16px">
          <span>عدد العروض:</span><strong>3</strong>
          <span>أقل سعر:</span><strong>160 ر.ع</strong>
          <span>أعلى تغطية:</span><strong>تأمين الخليج</strong>
          <span>المقترح:</span><strong>الشركة العمانية للتأمين</strong>
        </div>
        <div class="grid grid-3">${quoteCards()}</div>` },
    customerDocuments: { title: "الوثائق التأمينية", desc: "الوثائق الصادرة وتفاصيلها.", back: P.customer, backLabel: "بوابة العميل",
      body: `<div class="grid grid-2"><article class="card">
        <h3 style="margin-bottom:12px">POL-2026-0091</h3>
        <div class="kv-grid kv-grid-2">${kv("شركة التأمين","الشركة العمانية للتأمين")}${kv("نوع الوثيقة",D.insurance)}${kv("تاريخ الإصدار","2026-05-13")}${kv("انتهاء الوثيقة","2027-05-12")}</div>
        <div class="actions" style="margin-top:12px">${btn("تحميل الوثيقة","secondary")}${btn("مشاركة الرابط","ghost")}</div>
      </article></div>` },
    customerClaims: { title: "مطالماتي", desc: "متابعة المطالبات وحالتها.", back: P.customer, backLabel: "بوابة العميل",
      body: `<div class="grid grid-2">
        <article class="card">
          <h3 style="margin-bottom:12px">${D.claim}</h3>
          <div class="kv-grid kv-grid-2">${kv("نوع التأمين",D.insurance)}${kv("الحالة",D.claimStatus)}${kv("تاريخ المطالبة","2026-05-10")}${kv("آخر تحديث","2026-05-12")}</div>
          <div class="actions" style="margin-top:12px">
            <a class="btn secondary" href="${P.claims}">تتبع عبر صفحة التتبع</a>
          </div>
        </article>
      </div>` },
    customerNotifications: { title: "الإشعارات", desc: "تنبيهاتك ومتابعة الإجراءات.", back: P.customer, backLabel: "بوابة العميل",
      body: `<div class="grid grid-3">${[
        ["وصلت 3 عروض أسعار جديدة","يرجى المراجعة والاختيار.","orange"],
        ["المطالبة CLM-2026-0012 قيد المراجعة","جاري فحص المستندات.","blue"],
        ["الوثيقة POL-2026-0091 صادرة","يمكنك تحميلها من قسم الوثائق.","green"]
      ].map(([title,desc,cls])=>`<article class="card"><div style="display:flex;justify-content:space-between;margin-bottom:8px"><h3 style="font-size:14px">${title}</h3>${badge("جديد",cls)}</div><p class="muted" style="font-size:12px;margin:0">${desc}</p></article>`).join("")}</div>` },
    valuationTransactions: { title: "معاملات التثمين", desc: "المعاملات المرتبطة بالتأمين.", back: P.valuation, backLabel: "بوابة موظف التثمين",
      body: `<article class="card table-card"><div class="table-scroll"><table>
        <thead><tr><th>رقم المعاملة</th><th>العميل</th><th>نوع الأصل</th><th>القيمة</th><th>البنك</th><th>الحالة</th><th>الإجراء</th></tr></thead>
        <tbody><tr><td><strong>${D.valuation}</strong></td><td>${D.customer}</td><td>${D.asset}</td><td>${D.value}</td><td>${D.bank}</td><td>${badge("جاهزة","green")}</td><td>${btn("إنشاء طلب تأمين","success")}</td></tr></tbody>
      </table></div></article>` },
    valuationRequirements: { title: "متطلبات التأمين", desc: "البيانات القادمة من نظام التثمين.", back: P.valuation, backLabel: "بوابة موظف التثمين",
      body: `<div class="grid grid-2">
        <article class="card"><h3 style="margin-bottom:12px">بيانات العميل والأصل</h3>
          <div class="kv-grid kv-grid-2">${kv("الاسم",D.customer)}${kv("الهاتف",D.phone)}${kv("الرقم المدني",D.civil)}${kv("البنك",D.bank)}${kv("الأصل",D.asset)}${kv("القيمة",D.value)}</div>
        </article>
        <article class="card"><h3 style="margin-bottom:12px">اكتمال المتطلبات</h3>
          <div style="font-size:28px;font-weight:900;color:var(--blue)">75%</div>
          <div class="progress" style="margin:8px 0"><span style="width:75%"></span></div>
          <p class="muted" style="font-size:12px">مطلوب: هوية العميل</p>
          <div class="actions" style="margin-top:14px;flex-direction:column;align-items:stretch">
            ${btn("إرسال إلى موظف شركة اليسر","success")}${btn("حفظ كمسودة","ghost")}
          </div>
        </article>
      </div>` },
    staffRequests: { title: "طلبات التأمين", desc: "جميع الطلبات الواردة.", back: P.staff, backLabel: "بوابة موظف شركة اليسر",
      body: requestTable() },
    staffReview: { title: "مراجعة الطلب", desc: "تفاصيل الطلب والإجراءات المتاحة.", back: P.staff, backLabel: "بوابة موظف شركة اليسر",
      body: `<div class="grid grid-2"><article class="card">
        <h3 style="margin-bottom:12px">بيانات الطلب ${D.request}</h3>
        <div class="kv-grid kv-grid-2">${kv("العميل",D.customer)}${kv("نوع التأمين",D.insurance)}${kv("الأصل",D.asset)}${kv("القيمة",D.value)}${kv("البنك",D.bank)}${kv("مصدر الطلب","نظام التثمين")}</div>
        <div class="actions" style="margin-top:14px">
          ${btn("اعتماد الطلب","success")}${btn("طلب عروض من الشركات","")}${btn("طلب استكمال بيانات","ghost")}
        </div>
      </article></div>` },
    staffOffers: { title: "العروض المستلمة", desc: "عروض شركات التأمين الواردة.", back: P.staff, backLabel: "بوابة موظف شركة اليسر",
      body: `<article class="card table-card"><div class="table-scroll"><table>
        <thead><tr><th>شركة التأمين</th><th>السعر</th><th>نوع الوثيقة</th><th>انتهاء العرض</th><th>الحالة</th></tr></thead>
        <tbody>${OFFERS.map(o=>`<tr><td><strong>${o.company}</strong></td><td>${o.price} ${o.unit}</td><td>${o.type}</td><td>2026-05-25</td><td>${badge("مستلم","green")}</td></tr>`).join("")}</tbody>
      </table></div></article>
      <div class="actions" style="margin-top:12px">${btn("إرسال العروض للعميل","success")}</div>` },
    companyRequests: { title: "الطلبات الواردة", desc: "طلبات التأمين المستلمة من يُسُر.", back: P.company, backLabel: "قسم عروض الشركات",
      body: `<article class="card table-card"><div class="table-scroll"><table>
        <thead><tr><th>رقم الطلب</th><th>النوع</th><th>القيمة</th><th>البنك</th><th>الحالة</th><th>الإجراء</th></tr></thead>
        <tbody><tr><td><strong>${D.request}</strong></td><td>${D.insurance}</td><td>${D.value}</td><td>${D.bank}</td><td>${badge("قيد التسعير","blue")}</td><td><a class="btn secondary" style="min-height:32px;font-size:12px" href="${SP.companyDetails}">تفاصيل</a></td></tr></tbody>
      </table></div></article>` },
    companyDetails: { title: "تفاصيل الطلب", desc: "بيانات العميل والأصل المطلوب تأمينه.", back: P.company, backLabel: "قسم عروض الشركات",
      body: `<div class="grid grid-2"><article class="card">
        <h3 style="margin-bottom:12px">بيانات الطلب</h3>
        <div class="kv-grid kv-grid-2">${kv("العميل",D.customer)}${kv("نوع التأمين",D.insurance)}${kv("الأصل",D.asset)}${kv("قيمة التثمين",D.value)}${kv("البنك",D.bank)}${kv("المرفقات","تقرير تثمين، هوية، مستند بنك")}</div>
        <div class="actions" style="margin-top:14px">
          <a class="btn success" href="${SP.companyQuote}">إضافة عرض السعر</a>
        </div>
      </article></div>` },
    companyQuote: { title: "نموذج عرض السعر", desc: "أدخل سعر العرض والتغطيات والشروط.", back: P.company, backLabel: "قسم عروض الشركات",
      body: `<article class="card"><div class="form-grid">
        ${["رقم العرض","نوع الوثيقة","مدة التأمين","السعر الإجمالي","القسط الشهري","نسبة التحمل"].map((l,i)=>`<label class="field"><span>${l}</span><input value="${["Q-2026-104","وثيقة عقار شاملة","12 شهر","185 ر.ع","16 ر.ع","100 ر.ع"][i]}"></label>`).join("")}
        <label class="field wide"><span>التغطيات</span><textarea>الحريق، الأضرار العرضية، المسؤولية المدنية</textarea></label>
        <label class="field wide"><span>الاستثناءات</span><textarea>الأضرار المتعمدة، الكوارث غير المشمولة</textarea></label>
      </div><div class="actions" style="margin-top:14px">
        ${btn("إرسال عرض السعر","success")}${btn("طلب مستندات إضافية","warning")}
      </div></article>` },
    adminCustomers: { title: "إدارة العملاء", desc: "العملاء المسجلون في النظام.", back: P.admin, backLabel: "بوابة الإدارة",
      body: `<article class="card table-card"><div class="table-scroll"><table>
        <thead><tr><th>اسم العميل</th><th>عدد الطلبات</th><th>الطلبات المكتملة</th><th>الحالة</th><th>الإجراء</th></tr></thead>
        <tbody>${[[D.customer,"3","1"],[" مريم السيابية","1","0"]].map(r=>`<tr><td><strong>${r[0]}</strong></td><td>${r[1]}</td><td>${r[2]}</td><td>${badge("نشط","green")}</td><td>${btn("عرض","ghost","data-demo")}</td></tr>`).join("")}</tbody>
      </table></div></article>` },
    adminCompanies: { title: "إدارة شركات التأمين", desc: "الشركات المسجلة وأداؤها.", back: P.admin, backLabel: "بوابة الإدارة",
      body: `<article class="card table-card"><div class="table-scroll"><table>
        <thead><tr><th>الشركة</th><th>عدد العروض</th><th>معدل الاختيار</th><th>متوسط السعر</th><th>الحالة</th></tr></thead>
        <tbody>${OFFERS.map((o,i)=>`<tr><td><strong>${o.company}</strong></td><td>${[42,31,27][i]}</td><td>${["43%","39%","33%"][i]}</td><td>${o.price} ${o.unit}</td><td>${badge("نشطة","green")}</td></tr>`).join("")}</tbody>
      </table></div></article>` },
    adminRequests: { title: "إدارة الطلبات", desc: "متابعة جميع طلبات التأمين.", back: P.admin, backLabel: "بوابة الإدارة",
      body: requestTable() },
    adminOffers: { title: "إدارة العروض", desc: "تحليل عروض الأسعار.", back: P.admin, backLabel: "بوابة الإدارة",
      body: `<div class="grid grid-3">${quoteCards()}</div>` },
    adminClaims: { title: "إدارة المطالبات", desc: "متابعة المطالبات المفتوحة.", back: P.admin, backLabel: "بوابة الإدارة",
      body: `<article class="card table-card"><div class="table-scroll"><table>
        <thead><tr><th>رقم المطالبة</th><th>العميل</th><th>نوع التأمين</th><th>الحالة</th><th>الإجراء</th></tr></thead>
        <tbody><tr><td><strong>${D.claim}</strong></td><td>${D.customer}</td><td>${D.insurance}</td><td>${badge(D.claimStatus,"orange")}</td><td>${btn("عرض","ghost","data-demo")}</td></tr></tbody>
      </table></div></article>` },
    adminReports: { title: "التقارير والتحليلات", desc: "مؤشرات أداء النظام.", back: P.admin, backLabel: "بوابة الإدارة",
      body: `<div class="grid grid-4">${[
        ["أكثر أنواع التأمين طلباً","تأمين عقار",80],
        ["متوسط سعر العروض","192 ر.ع",62],
        ["الطلبات المكتملة","74 من 128",58],
        ["معدل اختيار العروض","62%",62]
      ].map(([t,v,p])=>`<article class="card"><div style="font-size:12px;color:var(--muted);font-weight:800;margin-bottom:6px">${t}</div><div style="font-size:22px;font-weight:900;margin-bottom:8px">${v}</div><div class="progress"><span style="width:${p}%"></span></div></article>`).join("")}</div>` },
    adminSettings: { title: "إعدادات النظام", desc: "إعدادات الصلاحيات والإشعارات.", back: P.admin, backLabel: "بوابة الإدارة",
      body: `<div class="grid grid-3">${["إعدادات الصلاحيات","إعدادات الشركات","إعدادات الإشعارات"].map(t=>`<article class="card"><h3>${t}</h3><p class="muted" style="font-size:13px">إعدادات تجريبية للعرض فقط.</p>${btn("تعديل","ghost")}</article>`).join("")}</div>` }
  };

  const c = map[kind];
  if (!c) return renderPortals();
  return `${header("portals")}
    <main class="container">
      ${pageHead(c.title, c.desc, c.back, c.backLabel)}
      <section class="section">${c.body}</section>
    </main>${footer()}`;
}

/* ═══════════════════════════════════════════════
   Events
   ═══════════════════════════════════════════════ */
function bindEvents() {
  document.addEventListener("click", e => {
    const offerBtn = e.target.closest("[data-select-offer]");
    if (offerBtn) {
      e.preventDefault();
      toast(MSG_CHOOSE);
      offerBtn.textContent = "✓ تم اختيار العرض";
      offerBtn.disabled = true;
      return;
    }
    if (e.target.closest("[data-demo]")) {
      e.preventDefault();
      toast(MSG_DEMO);
    }
    const tabBtn = e.target.closest(".tab[data-tab]");
    if (tabBtn) {
      const container = tabBtn.closest(".card");
      container.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      container.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));
      tabBtn.classList.add("active");
      const target = container.querySelector(`#tab-${tabBtn.dataset.tab}`);
      if (target) target.classList.add("active");
    }
  });
  document.addEventListener("submit", e => {
    if (e.target.id === "claim-form") {
      e.preventDefault();
      document.getElementById("claim-result").innerHTML = claimResult();
      toast("تم عرض حالة المطالبة ببيانات تجريبية.");
    }
  });
}

function toast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 3500);
}

/* ═══════════════════════════════════════════════
   Router
   ═══════════════════════════════════════════════ */
function render() {
  const page = document.body.dataset.page || "home";
  const map = {
    home: renderHome, portals: renderPortals, customer: renderCustomer,
    valuation: renderValuation, staff: renderStaff, company: renderCompany,
    admin: renderAdmin, claims: renderClaims, flow: renderFlow
  };
  const fn = map[page] || (() => renderSection(page));
  document.getElementById("app").innerHTML = fn();
  bindEvents();
}

render();
