const demoNote = "نسخة عرض تجريبية - البيانات المعروضة غير حقيقية";

const statusClasses = {
  "جديد": "new",
  "قيد المراجعة": "review",
  "بانتظار تقرير التثمين": "waiting",
  "بانتظار مستندات": "waiting",
  "بانتظار صور المركبة": "waiting",
  "مكتمل": "done",
  "وثائق جاهزة": "done",
  "تم اعتماد المطالبة": "approved",
  "تم رفض المطالبة": "rejected",
  "تم إغلاق المطالبة": "closed",
  "تم استلام المطالبة": "new",
  "Under Review": "review",
  "Waiting Documents": "waiting",
  "Approved": "approved",
  "Rejected": "rejected",
  "Closed": "closed",
};

const valuationReports = {
  "VAL-2026-0012": {
    no: "VAL-2026-0012",
    asset: "Villa",
    amount: "85,000 OMR",
    company: "شركة اليسر للتثمين",
    date: "2026-04-18",
    status: "Completed",
    location: "Muscat - Bousher",
  },
  "CAR-VAL-2026-034": {
    no: "CAR-VAL-2026-034",
    asset: "Toyota Land Cruiser 2022",
    amount: "22,500 OMR",
    company: "شركة اليسر لتثمين المركبات",
    date: "2026-04-22",
    status: "Completed",
    location: "Muscat",
  },
  "PROP-VAL-2026-019": {
    no: "PROP-VAL-2026-019",
    asset: "Villa",
    amount: "120,000 OMR",
    company: "شركة اليسر للتثمين العقاري",
    date: "2026-04-28",
    status: "Completed",
    location: "Muscat - Bousher",
  },
};

const loanRequests = [
  {
    id: "LI-2026-001",
    customer: "أحمد البلوشي",
    phone: "91234567",
    bank: "بنك مسقط",
    asset: "فيلا",
    report: "VAL-2026-0012",
    valuation: "85,000 OMR",
    loan: "62,000 OMR",
    status: "قيد المراجعة",
  },
  {
    id: "LI-2026-002",
    customer: "مريم السيابية",
    phone: "92345678",
    bank: "البنك الوطني العماني",
    asset: "أرض سكنية",
    report: "VAL-2026-0015",
    valuation: "48,000 OMR",
    loan: "35,000 OMR",
    status: "بانتظار تقرير التثمين",
  },
];

const vehicleRequests = [
  {
    id: "VI-2026-001",
    customer: "خالد المعمري",
    vehicle: "Toyota Land Cruiser",
    plate: "M 45621",
    year: "2022",
    report: "CAR-VAL-2026-034",
    value: "22,500 OMR",
    type: "تأمين شامل",
    status: "وثائق جاهزة",
  },
  {
    id: "VI-2026-002",
    customer: "سارة الهنائية",
    vehicle: "Lexus ES",
    plate: "B 22190",
    year: "2021",
    report: "CAR-VAL-2026-041",
    value: "15,800 OMR",
    type: "تأمين تمويلي للمركبة",
    status: "بانتظار صور المركبة",
  },
];

const propertyRequests = [
  {
    id: "PI-2026-001",
    customer: "أحمد البلوشي",
    property: "فيلا",
    location: "مسقط - بوشر",
    report: "PROP-VAL-2026-019",
    value: "120,000 OMR",
    type: "تأمين عقاري شامل",
    status: "قيد المراجعة",
  },
  {
    id: "PI-2026-002",
    customer: "مريم السيابية",
    property: "مبنى تجاري",
    location: "صحار",
    report: "PROP-VAL-2026-022",
    value: "210,000 OMR",
    type: "تأمين ضد الحريق",
    status: "بانتظار مراجعة المخاطر",
  },
];

const claims = [
  {
    id: "CLM-2026-001",
    customer: "أحمد البلوشي",
    type: "تأمين المركبات",
    date: "2026-04-29",
    value: "2,800 OMR",
    status: "Under Review",
    publicStatus: "قيد المراجعة",
    officer: "سالم الرواحي",
    updated: "2026-05-07",
    notes: "تم استلام تقرير الحادث وجار مراجعة الصور.",
  },
  {
    id: "CLM-2026-002",
    customer: "مريم السيابية",
    type: "تأمين العقارات",
    date: "2026-04-18",
    value: "9,500 OMR",
    status: "Waiting Documents",
    publicStatus: "بانتظار مستندات إضافية",
    officer: "نورة الكندية",
    updated: "2026-05-04",
    notes: "مطلوب تقرير الدفاع المدني وصور إضافية للموقع.",
  },
  {
    id: "CLM-2026-003",
    customer: "خالد المعمري",
    type: "تأمين القروض",
    date: "2026-03-30",
    value: "4,100 OMR",
    status: "Closed",
    publicStatus: "تم إغلاق المطالبة",
    officer: "مازن الحارثي",
    updated: "2026-04-21",
    notes: "تمت معالجة المطالبة وإغلاقها في النظام التجريبي.",
  },
];

const recentRequests = [
  ["REQ-2026-104", "أحمد البلوشي", "تأمين القروض", "بنك", "نعم", "قيد المراجعة", "2026-05-08"],
  ["REQ-2026-105", "مريم السيابية", "تأمين العقارات", "بوابة العميل", "نعم", "بانتظار مستندات", "2026-05-09"],
  ["REQ-2026-106", "خالد المعمري", "تأمين المركبات", "فرع مسقط", "نعم", "وثائق جاهزة", "2026-05-10"],
  ["REQ-2026-107", "سارة الهنائية", "تأمين المركبات", "بوابة العميل", "لا", "جديد", "2026-05-11"],
];

function badge(status) {
  return `<span class="badge ${statusClasses[status] || ""}">${status}</span>`;
}

function button(label, attrs = "") {
  return `<button class="btn small secondary" ${attrs}>${label}</button>`;
}

function appHeader() {
  return `
    <div class="demo-strip">⚡ ${demoNote}</div>
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="/insurance-home/">
          <span class="brand-mark">يس</span>
          <span>شركة يُسُر للوساطة التأمينية<small>Al Yusr Insurance System</small></span>
        </a>
        <nav class="nav" aria-label="التنقل الرئيسي">
          <a href="/insurance-home/">الرئيسية</a>
          <a href="/claim-tracking/">تتبع مطالبة</a>
          <a href="/insurance_requirements_demo.html">متطلبات التأمين</a>
          <a href="/customer/portal/">بوابة العميل</a>
          <a href="/login/" class="btn small" style="margin-inline-start:6px">تسجيل الدخول</a>
        </nav>
      </div>
    </header>
  `;
}

function renderHome() {
  return `
    <div class="app-shell">
      ${appHeader()}
      <main>
        <section class="hero">
          <div class="container hero-grid">
            <div>
              <span class="notice">${demoNote}</span>
              <h1>شركة يُسُر للوساطة التأمينية</h1>
              <p>حلول تأمينية ذكية للأفراد والشركات مرتبطة بخدمات التثمين العقاري وتثمين المركبات.</p>
              <div class="hero-actions">
                <a class="btn" href="/login/">تسجيل الدخول</a>
                <a class="btn secondary" href="/claim-tracking/">تتبع مطالبة</a>
                <button class="btn success" data-action="تم فتح طلب خدمة تأمين تجريبيًا">طلب خدمة تأمين</button>
              </div>
            </div>
            <div class="hero-visual" aria-label="معاينة لوحة النظام">
              <div class="visual-top">
                <span style="font-weight:900">لوحة اليسر للتأمين</span>
                <span style="font-size:11px;opacity:0.7">Demo v1.0</span>
              </div>
              <div class="visual-body">
                <div class="visual-stats">
                  <div class="visual-stat"><strong>54</strong><span>الطلبات</span></div>
                  <div class="visual-stat"><strong style="color:var(--brand-2)">12</strong><span>العروض</span></div>
                  <div class="visual-stat"><strong style="color:var(--accent)">9</strong><span>المطالبات</span></div>
                  <div class="visual-stat"><strong style="color:var(--success)">31</strong><span>مكتملة</span></div>
                </div>
                <div class="visual-rows">
                  <div class="visual-row">
                    <div class="visual-row-info">
                      <b>أحمد البلوشي — تأمين عقار</b>
                      <s>LI-2026-001 · بنك مسقط</s>
                    </div>
                    ${badge("قيد المراجعة")}
                  </div>
                  <div class="visual-row">
                    <div class="visual-row-info">
                      <b>خالد المعمري — تأمين مركبة</b>
                      <s>VI-2026-001 · Toyota Land Cruiser</s>
                    </div>
                    ${badge("وثائق جاهزة")}
                  </div>
                  <div class="visual-row">
                    <div class="visual-row-info">
                      <b>مريم السيابية — مطالبة</b>
                      <s>CLM-2026-002 · بانتظار مستندات</s>
                    </div>
                    ${badge("بانتظار مستندات")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="section-header">
              <div>
                <h2>تعريف بالشركة</h2>
                <p>شركة يُسُر للوساطة التأمينية تقدم حلولًا تأمينية منظمة للأفراد والشركات، مع واجهات رقمية تساعد على متابعة الطلبات والمطالبات وربط خدمات التأمين بنتائج التثمين عند الحاجة.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="section-header"><h2>الخدمات الرئيسية</h2></div>
            <div class="grid grid-4">
              ${serviceCard("ق", "تأمين القروض", "تغطيات مرتبطة بالتمويل وضمانات الأصول.", "/dashboard/loan-insurance/")}
              ${serviceCard("م", "تأمين المركبات", "إدارة وثائق المركبات وربطها بتثمين السيارة.", "/dashboard/vehicle-insurance/")}
              ${serviceCard("ع", "تأمين العقارات", "تغطية العقارات السكنية والتجارية حسب المخاطر.", "/dashboard/property-insurance/")}
              ${serviceCard("ط", "تتبع المطالبات", "متابعة حالة المطالبة من الاستلام حتى الإغلاق.", "/claim-tracking/")}
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="section-header"><h2>كيف تعمل الخدمة؟</h2></div>
            <div class="grid grid-5 steps">
              ${["إدخال بيانات العميل", "اختيار نوع التأمين", "ربط الطلب بنتيجة التثمين إن وجدت", "مراجعة الطلب من موظف شركة اليسر", "إصدار عرض أو متابعة المطالبة"].map((x) => `<div class="card step"><h3>${x}</h3><p>خطوة عرض تجريبية ضمن رحلة الخدمة.</p></div>`).join("")}
            </div>
          </div>
        </section>

        <section class="section">
          <div class="container">
            <div class="section-header"><h2>بوابة تسجيل الدخول</h2></div>
            <div class="grid grid-4">
              ${portalCard("تسجيل دخول العملاء", "/customer/portal/")}
              ${portalCard("تسجيل دخول موظفي الشركة", "/login/")}
              ${portalCard("تسجيل دخول الإدارة", "/login/")}
              ${portalCard("تسجيل دخول قسم المطالبات", "/login/")}
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

function serviceCard(icon, title, desc, href) {
  return `<article class="card" style="border-top:3px solid var(--brand);transition:box-shadow 0.2s,transform 0.2s">
    <div class="icon blue">${icon}</div>
    <h3>${title}</h3>
    <p>${desc}</p>
    <div class="modal-actions" style="margin-top:14px">
      <a class="btn small" href="${href}">الدخول</a>
      <a class="btn small secondary" href="${href}">التفاصيل</a>
    </div>
  </article>`;
}

function portalCard(title, href) {
  return `<a class="card" href="${href}"><div class="icon">د</div><h3>${title}</h3><p>دخول تجريبي حسب نوع المستخدم.</p></a>`;
}

function renderClaimTracking() {
  return `
    <div class="app-shell">
      ${appHeader()}
      <main class="section">
        <div class="container">
          <div class="section-header">
            <div>
              <h2>تتبع المطالبات للعملاء</h2>
              <p>أدخل رقم المطالبة ورقم الهاتف أو الرقم المدني لعرض الحالة التجريبية.</p>
            </div>
          </div>
          <div class="card">
            <form id="claim-search" class="grid grid-3">
              <div class="field"><label>رقم المطالبة</label><input name="claim" value="CLM-2026-001" placeholder="CLM-2026-001"></div>
              <div class="field"><label>رقم الهاتف أو الرقم المدني</label><input name="identity" value="91234567" placeholder="91234567"></div>
              <div class="field"><label>&nbsp;</label><button class="btn" type="submit">تتبع</button></div>
            </form>
            <div id="claim-result" class="claim-result"></div>
          </div>
        </div>
      </main>
    </div>
  `;
}

function renderLogin() {
  return `
    <main class="login-page">
      <section class="login-card">
        <div style="text-align:center;margin-bottom:28px">
          <div style="width:52px;height:52px;display:inline-grid;place-items:center;border-radius:14px;background:linear-gradient(135deg,var(--brand),#1480c0);color:#fff;font-weight:900;font-size:18px;box-shadow:0 6px 18px rgba(11,95,138,0.35);margin-bottom:12px">يس</div>
          <h2 style="margin:0 0 4px;font-size:22px;font-weight:900">شركة يُسُر للوساطة التأمينية</h2>
          <p style="margin:0;color:var(--muted);font-size:13px">Al Yusr Insurance System</p>
        </div>
        <div class="notice" style="width:100%;justify-content:center;margin-bottom:20px;border-radius:8px">${demoNote}</div>
        <form id="login-form" class="form-grid">
          <div class="field">
            <label>نوع المستخدم</label>
            <select name="role">
              <option value="admin">الإدارة العامة - Admin</option>
              <option value="loan">موظف تأمين القروض - Loan Insurance Officer</option>
              <option value="vehicle">موظف تأمين المركبات - Vehicle Insurance Officer</option>
              <option value="property">موظف تأمين العقارات والمطالبات - Property & Claims Officer</option>
            </select>
          </div>
          <div class="field"><label>اسم المستخدم</label><input name="user" value="demo.user" placeholder="demo.user"></div>
          <div class="field"><label>كلمة المرور</label><input name="pass" type="password" value="demo" placeholder="••••••"></div>
          <button class="btn" type="submit" style="margin-top:4px">تسجيل الدخول</button>
          <a class="btn secondary" href="/insurance-home/">العودة للرئيسية</a>
        </form>
      </section>
    </main>
  `;
}

const sidebarItems = [
  ["/dashboard/admin/", "الرئيسية"],
  ["/dashboard/loan-insurance/", "تأمين القروض"],
  ["/dashboard/vehicle-insurance/", "تأمين المركبات"],
  ["/dashboard/property-insurance/", "تأمين العقارات"],
  ["/dashboard/claims/", "المطالبات"],
  ["/insurance_requirements_demo.html", "متطلبات التأمين"],
  ["/customer/portal/", "العملاء"],
  ["/dashboard/reports/", "التقارير"],
  ["/dashboard/settings/", "الإعدادات"],
];

function dashboardLayout(activePath, account, content) {
  return `
    <div class="dashboard">
      <aside class="sidebar">
        <a class="brand" href="/dashboard/admin/">
          <span class="brand-mark">يس</span>
          <span>نظام اليسر للتأمين<small>Al Yusr Insurance</small></span>
        </a>
        <nav class="side-nav" aria-label="القائمة الجانبية">
          <div class="side-nav-section">الرئيسي</div>
          ${sidebarItems.slice(0, 2).map(([href, label]) => `<a class="${href === activePath ? "active" : ""}" href="${href}">${label}</a>`).join("")}
          <div class="side-nav-section">الأقسام</div>
          ${sidebarItems.slice(2, 6).map(([href, label]) => `<a class="${href === activePath ? "active" : ""}" href="${href}">${label}</a>`).join("")}
          <div class="side-nav-section">الإدارة</div>
          ${sidebarItems.slice(6).map(([href, label]) => `<a class="${href === activePath ? "active" : ""}" href="${href}">${label}</a>`).join("")}
        </nav>
        <div style="margin-top:auto;padding-top:20px;border-top:1px solid rgba(255,255,255,0.1);margin-top:24px">
          <a href="/login/" class="btn secondary small" style="width:100%;justify-content:center">تسجيل الخروج</a>
        </div>
      </aside>
      <main class="dash-main">
        <header class="topbar">
          <div>
            <strong style="font-size:15px">${account}</strong>
            <div class="status-note">Frontend Demo · Mock Data · بدون Backend</div>
          </div>
          <div style="display:flex;align-items:center;gap:10px">
            <span class="notice" style="font-size:11px">نسخة تجريبية</span>
            <div class="user-chip">
              <span class="avatar">يس</span>
              <span style="font-size:13px;font-weight:800">${account.split(" ")[0]}<br><small style="color:var(--muted);font-weight:600">حساب تجريبي</small></span>
            </div>
          </div>
        </header>
        <section class="dash-content">${content}</section>
      </main>
    </div>
  `;
}

function pageTitle(title, desc) {
  return `<div class="page-title"><h1>${title}</h1><p>${desc}</p></div>`;
}

function statCards(items) {
  const colors = ["blue","teal","gold","green","blue","teal"];
  return `<div class="grid grid-6">${items.map(([label, value], i) => `
    <div class="card">
      <span class="muted" style="font-size:12px;font-weight:700;display:block;margin-bottom:6px">${label}</span>
      <strong style="font-size:28px;font-weight:900;color:var(--brand);line-height:1">${value}</strong>
    </div>`).join("")}</div>`;
}

function chartCard(title, rows) {
  return `<div class="card"><h3>${title}</h3><div class="chart">${rows.map(([label, value, color = ""]) => `<div class="chart-row"><span>${label}</span><div class="bar-track"><div class="bar-fill ${color}" style="width:${value}%"></div></div><strong>${value}%</strong></div>`).join("")}</div></div>`;
}

function renderAdmin() {
  const content = `
    ${pageTitle("لوحة الإدارة العامة", "متابعة مؤشرات خدمات التأمين والمطالبات والربط التجريبي مع نظام التثمين.")}
    <div class="section">
      ${statCards([["طلبات تأمين القروض", 18], ["طلبات تأمين المركبات", 24], ["طلبات تأمين العقارات", 12], ["المطالبات المفتوحة", 9], ["المطالبات المغلقة", 31], ["إجمالي الطلبات هذا الشهر", 54]])}
    </div>
    <div class="grid grid-3">
      ${chartCard("الطلبات حسب النوع", [["قروض", 62], ["مركبات", 78, "green"], ["عقارات", 44, "gold"]])}
      ${chartCard("المطالبات حسب الحالة", [["مراجعة", 58], ["مستندات", 36, "gold"], ["مغلقة", 82, "green"]])}
      ${chartCard("أداء الأقسام", [["القروض", 74], ["المركبات", 81, "green"], ["العقارات", 69, "gold"]])}
    </div>
    <div class="section">
      <div class="card table-card">
        <div class="table-scroll">
          <table>
            <thead><tr><th>رقم الطلب</th><th>اسم العميل</th><th>نوع التأمين</th><th>مصدر الطلب</th><th>مرتبط بالتثمين؟</th><th>الحالة</th><th>تاريخ الإنشاء</th><th>إجراء</th></tr></thead>
            <tbody>${recentRequests.map((r) => `<tr>${r.map((c, i) => `<td>${i === 5 ? badge(c) : c}</td>`).join("")}<td>${button("عرض", `data-action="تم عرض الطلب ${r[0]} تجريبيًا"`)}</td></tr>`).join("")}</tbody>
          </table>
        </div>
      </div>
    </div>
    ${integrationBlock("النظام مرتبط مع نظام شركة التثمين لاستقبال بيانات التثمين المرتبطة بالقروض، المركبات، والعقارات.", valuationReports["VAL-2026-0012"])}
  `;
  return dashboardLayout("/dashboard/admin/", "الإدارة العامة - Admin", content);
}

function integrationBlock(text, report) {
  return `
    <div class="card integration">
      <h3>الربط مع نظام شركة التثمين</h3>
      <p>${text}</p>
      <div class="integration-grid">
        ${kv("رقم تقرير التثمين", report.no)}
        ${kv("نوع الأصل", report.asset)}
        ${kv("قيمة التثمين", report.amount)}
        ${kv("اسم شركة التثمين", report.company)}
        ${kv("تاريخ التقرير", report.date)}
        ${kv("حالة الربط", "مرتبط تجريبيًا")}
      </div>
      <div class="modal-actions">
        <button class="btn small" data-report="${report.no}">عرض تقرير التثمين</button>
      </div>
      <p class="status-note">هذه البيانات تجريبية لغرض العرض فقط، وسيتم ربطها لاحقًا مع نظام شركة التثمين عبر API.</p>
    </div>
  `;
}

function kv(label, value) {
  return `<div class="kv"><span>${label}</span><strong>${value}</strong></div>`;
}

function renderLoan() {
  const content = `
    ${pageTitle("قسم تأمين القروض", "إدارة طلبات تأمين القروض المرتبطة بتقارير التثمين العقاري أو أصول الضمان.")}
    <div class="section">${statCards([["طلبات جديدة", 6], ["قيد المراجعة", 8], ["بانتظار تقرير التثمين", 4], ["مكتملة", 12]])}</div>
    ${requestTable(["رقم الطلب", "اسم العميل", "رقم الهاتف", "البنك أو الجهة الممولة", "نوع الأصل", "رقم تقرير التثمين", "قيمة التثمين", "مبلغ القرض", "حالة الطلب", "إجراء"], loanRequests.map((r) => [r.id, r.customer, r.phone, r.bank, r.asset, r.report, r.valuation, r.loan, badge(r.status), button("عرض", `data-detail="loan" data-id="${r.id}"`)]))}
    <div class="section">${integrationBlock("تم جلب بيانات تقرير التثمين من نظام شركة التثمين.", valuationReports["VAL-2026-0012"])}</div>
  `;
  return dashboardLayout("/dashboard/loan-insurance/", "موظف تأمين القروض", content);
}

function renderVehicle() {
  const content = `
    ${pageTitle("قسم تأمين المركبات", "إدارة طلبات تأمين المركبات وربطها بقيمة التثمين وتفاصيل المركبة.")}
    <div class="section">${statCards([["طلبات جديدة", 9], ["بانتظار صور المركبة", 5], ["بانتظار تقرير التثمين", 3], ["وثائق جاهزة للإصدار", 7]])}</div>
    <div class="card"><h3>أنواع التأمين</h3><div class="modal-actions">${["تأمين شامل", "تأمين طرف ثالث", "تأمين ضد الحوادث", "تأمين تمويلي للمركبة"].map((x) => `<span class="badge">${x}</span>`).join("")}</div></div>
    <div class="section">${requestTable(["رقم الطلب", "اسم العميل", "نوع المركبة", "رقم اللوحة", "سنة الصنع", "رقم تقرير التثمين", "قيمة المركبة", "نوع التأمين", "الحالة", "إجراء"], vehicleRequests.map((r) => [r.id, r.customer, r.vehicle, r.plate, r.year, r.report, r.value, r.type, badge(r.status), button("عرض", `data-detail="vehicle" data-id="${r.id}"`)]))}</div>
    ${integrationBlock("تم ربط طلب التأمين بتقرير تثمين المركبة.", valuationReports["CAR-VAL-2026-034"])}
  `;
  return dashboardLayout("/dashboard/vehicle-insurance/", "موظف تأمين المركبات", content);
}

function renderProperty() {
  const content = `
    ${pageTitle("قسم تأمين العقارات", "إدارة طلبات تأمين العقارات وربطها بتقارير التثمين العقاري.")}
    <div class="section">${statCards([["طلبات جديدة", 5], ["بانتظار تقرير التثمين", 4], ["بانتظار مراجعة المخاطر", 6], ["وثائق جاهزة", 8]])}</div>
    <div class="grid grid-2">
      <div class="card"><h3>أنواع العقارات</h3><div class="modal-actions">${["أرض", "فيلا", "شقة", "مبنى تجاري", "عقار قيد الإنشاء"].map((x) => `<span class="badge">${x}</span>`).join("")}</div></div>
      <div class="card"><h3>أنواع التأمين</h3><div class="modal-actions">${["تأمين ضد الحريق", "تأمين ضد الكوارث", "تأمين عقاري شامل", "تأمين عقار مرهون للبنك"].map((x) => `<span class="badge">${x}</span>`).join("")}</div></div>
    </div>
    <div class="section">${requestTable(["رقم الطلب", "اسم العميل", "نوع العقار", "الموقع", "رقم تقرير التثمين", "قيمة العقار", "نوع التأمين", "الحالة", "إجراء"], propertyRequests.map((r) => [r.id, r.customer, r.property, r.location, r.report, r.value, r.type, badge(r.status), button("عرض", `data-detail="property" data-id="${r.id}"`)]))}</div>
    ${integrationBlock("تم جلب بيانات العقار من نظام شركة التثمين.", valuationReports["PROP-VAL-2026-019"])}
  `;
  return dashboardLayout("/dashboard/property-insurance/", "موظف تأمين العقارات والمطالبات", content);
}

function renderClaims() {
  const content = `
    ${pageTitle("تتبع المطالبات التأمينية", "لوحة لإدارة ومتابعة مطالبات العملاء من الاستلام حتى الإغلاق.")}
    <div class="section">${statCards([["مطالبات جديدة", 4], ["قيد المراجعة", 7], ["بانتظار مستندات", 3], ["معتمدة", 12], ["مرفوضة", 2], ["مغلقة", 21]])}</div>
    ${requestTable(["رقم المطالبة", "اسم العميل", "نوع التأمين", "تاريخ المطالبة", "قيمة المطالبة", "الحالة", "الموظف المسؤول", "آخر تحديث", "إجراء"], claims.map((c) => [c.id, c.customer, c.type, c.date, c.value, badge(c.status), c.officer, c.updated, button("عرض", `data-detail="claim" data-id="${c.id}"`)]))}
  `;
  return dashboardLayout("/dashboard/claims/", "موظف المطالبات", content);
}

function requestTable(headers, rows) {
  return `
    <div class="card table-card">
      <div class="table-scroll">
        <table>
          <thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
          <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    </div>
  `;
}

function renderCustomerPortal() {
  return `
    <div class="app-shell">
      ${appHeader()}
      <main class="section">
        <div class="container">
          ${pageTitle("مرحبًا بك في بوابة عملاء شركة يُسُر للوساطة التأمينية", "تابع مطالباتك ووثائقك وطلباتك من مكان واحد.")}
          <div class="section">
            <div class="grid grid-4">
              ${["مطالباتي", "وثائقي التأمينية", "طلب خدمة جديدة", "الدعم"].map((x) => `<button class="card" data-action="${x} - إجراء تجريبي"><div class="icon">${x.slice(0, 1)}</div><h3>${x}</h3><p>واجهة عرض فقط بدون حفظ حقيقي.</p></button>`).join("")}
            </div>
          </div>
          ${requestTable(["رقم المطالبة", "نوع التأمين", "تاريخ التقديم", "الحالة", "آخر تحديث", "عرض التفاصيل"], claims.map((c) => [c.id, c.type, c.date, badge(c.publicStatus), c.updated, `<a class="btn small secondary" href="/customer/claim-details/">عرض التفاصيل</a>`]))}
        </div>
      </main>
    </div>
  `;
}

function renderCustomerClaimDetails() {
  const c = claims[0];
  return `
    <div class="app-shell">
      ${appHeader()}
      <main class="section">
        <div class="container">
          ${pageTitle("تفاصيل مطالبة العميل", "عرض تجريبي لحالة المطالبة والمستندات المطلوبة.")}
          <div class="detail-panel">
            <div class="card">
              <h3>رقم المطالبة ${c.id}</h3>
              <div class="integration-grid">
                ${kv("الحالة", c.publicStatus)}
                ${kv("نوع التأمين", c.type)}
                ${kv("آخر تحديث", c.updated)}
                ${kv("المستندات المطلوبة", "صور إضافية وتقرير الحادث")}
                ${kv("ملاحظات الشركة", c.notes)}
                ${kv("قيمة المطالبة", c.value)}
              </div>
              <div class="modal-actions">
                <button class="btn" data-action="تم رفع المستند تجريبيًا في نسخة العرض.">رفع مستند</button>
                <button class="btn secondary" data-action="تم فتح طلب التواصل مع الدعم تجريبيًا">التواصل مع الدعم</button>
              </div>
            </div>
            <div class="card"><h3>الخط الزمني</h3>${timeline()}</div>
          </div>
        </div>
      </main>
    </div>
  `;
}

function renderReports() {
  const content = `
    ${pageTitle("التقارير", "مؤشرات عرض تجريبية للأقسام والمطالبات والربط مع التثمين.")}
    <div class="grid grid-3 section">
      ${chartCard("طلبات التأمين", [["قروض", 62], ["مركبات", 78, "green"], ["عقارات", 44, "gold"]])}
      ${chartCard("المطالبات", [["New", 30], ["Under Review", 58], ["Closed", 82, "green"]])}
      ${chartCard("مصادر الطلبات", [["بوابة العميل", 70], ["البنوك", 54, "gold"], ["الفروع", 42, "green"]])}
    </div>
  `;
  return dashboardLayout("/dashboard/reports/", "الإدارة العامة - Reports", content);
}

function renderSettings() {
  const content = `
    ${pageTitle("الإعدادات", "إعدادات شكلية للعرض فقط ولا يتم حفظ أي تغييرات.")}
    <div class="grid grid-2 section">
      <div class="card"><h3>إعدادات النظام</h3><p>اسم النظام، الشعار، وأدوار المستخدمين ضمن نسخة العرض.</p><div class="modal-actions"><button class="btn" data-action="تم حفظ الإعدادات تجريبيًا">حفظ تجريبي</button></div></div>
      <div class="card integration"><h3>API التثمين لاحقًا</h3><p>سيتم ربطها لاحقًا مع نظام شركة التثمين عبر API. لا يوجد ربط حقيقي في هذه النسخة.</p></div>
    </div>
  `;
  return dashboardLayout("/dashboard/settings/", "الإدارة العامة - Settings", content);
}

function timeline() {
  return `<div class="timeline">${["تم استلام المطالبة", "تم تعيين موظف", "قيد المراجعة", "تم طلب مستندات", "تم اتخاذ القرار", "تم الإغلاق"].map((x) => `<div class="timeline-item"><strong>${x}</strong><p class="status-note">تحديث تجريبي ضمن سجل المطالبة.</p></div>`).join("")}</div>`;
}

function openDetail(type, id) {
  if (type === "loan") {
    const r = loanRequests.find((x) => x.id === id) || loanRequests[0];
    return openModal("تفاصيل طلب تأمين القرض", `
      <div class="integration-grid">
        ${kv("بيانات العميل", `${r.customer} - ${r.phone}`)}
        ${kv("بيانات القرض", `${r.bank} - ${r.loan}`)}
        ${kv("بيانات الأصل", r.asset)}
        ${kv("تقرير التثمين", r.report)}
        ${kv("قيمة التثمين", r.valuation)}
        ${kv("مستندات مطلوبة", "الهوية، خطاب البنك، تقرير التثمين")}
      </div>
      <div class="field" style="margin-top:14px"><label>ملاحظات الموظف</label><textarea rows="3">طلب مرتبط بتقرير تثمين مكتمل.</textarea></div>
      ${modalActions(["قبول مبدئي", "طلب مستندات", "تحويل للمراجعة", "رفض"])}
    `);
  }
  if (type === "vehicle") {
    const r = vehicleRequests.find((x) => x.id === id) || vehicleRequests[0];
    return openModal("تفاصيل طلب تأمين المركبة", `
      <div class="integration-grid">
        ${kv("بيانات العميل", r.customer)}
        ${kv("بيانات المركبة", `${r.vehicle} - ${r.year}`)}
        ${kv("صور المركبة", "4 صور مرفوعة تجريبيًا")}
        ${kv("نتيجة التثمين", r.report)}
        ${kv("شركة التثمين", "شركة اليسر لتثمين المركبات")}
        ${kv("قيمة المركبة", r.value)}
      </div>
      <div class="field" style="margin-top:14px"><label>ملاحظات</label><textarea rows="3">الطلب جاهز لإصدار عرض تأمين.</textarea></div>
      ${modalActions(["إصدار عرض", "طلب صور إضافية", "تحويل للمراجعة", "رفض الطلب"])}
    `);
  }
  if (type === "property") {
    const r = propertyRequests.find((x) => x.id === id) || propertyRequests[0];
    return openModal("تفاصيل طلب تأمين العقار", `
      <div class="integration-grid">
        ${kv("بيانات العميل", r.customer)}
        ${kv("بيانات العقار", r.property)}
        ${kv("موقع العقار", r.location)}
        ${kv("تقرير التثمين", r.report)}
        ${kv("قيمة العقار", r.value)}
        ${kv("مستوى المخاطر", "متوسط")}
      </div>
      <div class="field" style="margin-top:14px"><label>ملاحظات</label><textarea rows="3">تم ربط الطلب ببيانات التثمين العقاري.</textarea></div>
      ${modalActions(["إصدار عرض", "طلب مستندات", "تحويل للمراجعة", "رفض"])}
    `);
  }
  const c = claims.find((x) => x.id === id) || claims[0];
  return openModal("تفاصيل المطالبة", `
    <div class="detail-panel">
      <div>
        <div class="integration-grid">
          ${kv("بيانات العميل", c.customer)}
          ${kv("نوع الوثيقة", c.type)}
          ${kv("سبب المطالبة", "حادث أو ضرر مسجل")}
          ${kv("قيمة المطالبة", c.value)}
          ${kv("المستندات المطلوبة", "صور، تقرير، هوية")}
          ${kv("ملاحظات داخلية", c.notes)}
        </div>
        ${modalActions(["تحديث الحالة", "طلب مستندات", "اعتماد", "رفض", "إغلاق المطالبة"])}
      </div>
      <div class="card"><h3>Timeline</h3>${timeline()}</div>
    </div>
  `);
}

function modalActions(labels) {
  return `<div class="modal-actions">${labels.map((x) => `<button class="btn small ${x.includes("رفض") ? "danger" : x.includes("طلب") ? "warning" : ""}" data-action="${x} - العملية تجريبية في نسخة العرض">${x}</button>`).join("")}</div>`;
}

function openReport(no) {
  const report = valuationReports[no] || {
    no,
    asset: "أصل تجريبي",
    amount: "50,000 OMR",
    company: "شركة اليسر للتثمين",
    date: "2026-05-01",
    status: "Completed",
    location: "Oman",
  };
  openModal("تقرير التثمين", `
    <div class="integration-grid">
      ${kv("Report No", report.no)}
      ${kv("Asset Type", report.asset)}
      ${kv("Valuation Amount", report.amount)}
      ${kv("Report Status", report.status)}
      ${kv("Valuation Company", report.company)}
      ${kv("Location", report.location)}
    </div>
    <p class="status-note">هذه البيانات تجريبية لغرض العرض فقط، وسيتم ربطها لاحقًا مع نظام شركة التثمين عبر API.</p>
  `);
}

function openModal(title, body) {
  document.getElementById("modal-root").innerHTML = `
    <div class="modal-backdrop" data-close-modal>
      <section class="modal" role="dialog" aria-modal="true" aria-label="${title}" onclick="event.stopPropagation()">
        <div class="modal-head">
          <h3>${title}</h3>
          <button class="close-x" data-close-modal aria-label="إغلاق">✕</button>
        </div>
        <div class="modal-body">${body}</div>
      </section>
    </div>
  `;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message || "تم تنفيذ الإجراء تجريبيًا في نسخة العرض.";
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const close = event.target.closest("[data-close-modal]");
    if (close) {
      document.getElementById("modal-root").innerHTML = "";
      return;
    }
    const report = event.target.closest("[data-report]");
    if (report) {
      openReport(report.dataset.report);
      return;
    }
    const detail = event.target.closest("[data-detail]");
    if (detail) {
      openDetail(detail.dataset.detail, detail.dataset.id);
      return;
    }
    const action = event.target.closest("[data-action]");
    if (action) {
      event.preventDefault();
      showToast(action.dataset.action || "تم تنفيذ الإجراء تجريبيًا في نسخة العرض.");
    }
  });

  const claimForm = document.getElementById("claim-search");
  if (claimForm) {
    claimForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const fd = new FormData(claimForm);
      const id = String(fd.get("claim") || "").trim();
      const claim = claims.find((c) => c.id.toLowerCase() === id.toLowerCase()) || claims[0];
      document.getElementById("claim-result").innerHTML = `
        <div class="card integration">
          <h3>نتيجة التتبع</h3>
          <div class="integration-grid">
            ${kv("رقم المطالبة", claim.id)}
            ${kv("نوع المطالبة", claim.type)}
            ${kv("الحالة الحالية", claim.publicStatus)}
            ${kv("تاريخ التقديم", claim.date)}
            ${kv("آخر تحديث", claim.updated)}
            ${kv("الموظف المسؤول", claim.officer)}
          </div>
          <p class="status-note">${claim.notes}</p>
        </div>
      `;
      showToast("تم عرض نتيجة المطالبة ببيانات وهمية.");
    });
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const role = new FormData(loginForm).get("role");
      const targets = {
        admin: "/dashboard/admin/",
        loan: "/dashboard/loan-insurance/",
        vehicle: "/dashboard/vehicle-insurance/",
        property: "/dashboard/property-insurance/",
      };
      window.location.href = targets[role] || "/dashboard/admin/";
    });
  }
}

function route() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const routes = {
    "/": renderHome,
    "/insurance-home": renderHome,
    "/claim-tracking": renderClaimTracking,
    "/login": renderLogin,
    "/customer/portal": renderCustomerPortal,
    "/customer/claim-details": renderCustomerClaimDetails,
    "/dashboard/admin": renderAdmin,
    "/dashboard/loan-insurance": renderLoan,
    "/dashboard/vehicle-insurance": renderVehicle,
    "/dashboard/property-insurance": renderProperty,
    "/dashboard/claims": renderClaims,
    "/dashboard/reports": renderReports,
    "/dashboard/settings": renderSettings,
  };
  const render = routes[path] || renderHome;
  document.getElementById("app").innerHTML = render();
  bindEvents();
}

route();
