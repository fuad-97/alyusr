const introDemoSections = {
  loans: {
    title: "قسم تأمين القروض",
    label: "تأمين القروض",
    badge: "تمويل وقروض",
    summary: "يوضح هذا المسار كيف تصل معاملة مرتبطة بتمويل من نظام التثمين، ثم يراجع الموظف المتطلبات ويضيف عروض أسعار من أكثر من شركة ويشارك رابط المقارنة مع العميل.",
    request: "LOAN-INS-2026-0019",
    asset: "تمويل عقاري",
    value: "85,000 ر.ع",
    route: "web/pages/insurance_staff_dashboard.html?section=loans",
    nextAction: "افتح المعاملة ثم راجع المتطلبات قبل إضافة عروض الأسعار.",
    steps: [
      ["استلام الطلب", "تصل بيانات العميل والتمويل من نظام التثمين إلى قسم تأمين القروض."],
      ["عرض المعاملة كاملة", "يفتح الموظف الطلب لمراجعة بيانات العميل، البنك، مدة التمويل، قيمة الأصل، والمرفقات."],
      ["إرفاق عروض الشركات", "يضيف الموظف عروض أكثر من شركة مع السعر والمستند المرفق لكل عرض."],
      ["مشاركة رابط العميل", "يتم إنشاء رابط مقارنة العروض وإرساله للعميل لاختيار العرض المناسب."],
      ["متابعة القرار", "بعد اختيار العميل يتم نقل الطلب إلى مرحلة إصدار الوثيقة التجريبية."]
    ]
  },
  vehicles: {
    title: "قسم تأمين المركبات",
    label: "تأمين المركبات",
    badge: "مركبات",
    summary: "يعرض هذا المسار طريقة استقبال معاملة مركبة، مراجعة بيانات المركبة وقيمتها، ثم إضافة عروض متعددة ومشاركة رابط الأسعار مع العميل.",
    request: "VEH-INS-2026-0034",
    asset: "مركبة خاصة",
    value: "12,800 ر.ع",
    route: "web/pages/insurance_staff_dashboard.html?section=vehicles",
    nextAction: "جرّب فتح تفاصيل المركبة ثم إضافة عرض سعر مرفق بالمستند.",
    steps: [
      ["استلام بيانات المركبة", "تظهر بيانات المركبة وقيمة التثمين والبنك وبيانات العميل."],
      ["مراجعة المتطلبات", "يتأكد الموظف من الرخصة، الملكية، صور المركبة، وتقرير التثمين."],
      ["إضافة عروض متعددة", "يمكن إدخال سعر كل شركة وإرفاق ملف عرض السعر الخاص بها."],
      ["إرسال رابط المقارنة", "يحصل العميل على رابط يوضح الأسعار والتغطيات ونسبة التحمل."],
      ["تحديث حالة الطلب", "يتابع الموظف حالة اختيار العميل وإصدار الوثيقة."]
    ]
  },
  properties: {
    title: "قسم تأمين العقارات",
    label: "تأمين العقارات",
    badge: "عقار",
    summary: "هذا هو المسار الرئيسي للعرض التجريبي: معاملة تثمين عقار تتحول إلى طلب تأمين، ثم يتم جمع عروض الشركات ومشاركتها مع العميل.",
    request: "INS-2026-0007",
    asset: "فيلا سكنية",
    value: "85,000 ر.ع",
    route: "web/pages/insurance_staff_dashboard.html?section=properties",
    nextAction: "ابدأ بفتح المعاملة العقارية ثم راجع المتطلبات قبل إرسال العروض.",
    steps: [
      ["معاملة تثمين جاهزة", "المعاملة VAL-2026-0045 تحتوي على بيانات أحمد بن سعيد البلوشي والأصل العقاري."],
      ["تحويلها لطلب تأمين", "يتم إنشاء طلب التأمين INS-2026-0007 من بيانات التثمين."],
      ["مراجعة المتطلبات", "يفتح الموظف بيانات العميل، البنك، الموقع، قيمة التثمين، التقرير، والمرفقات."],
      ["إضافة عروض الشركات", "تضاف عروض الشركة العمانية للتأمين، تأمين الخليج، والوطنية للتأمين مع مستند لكل عرض."],
      ["مشاركة رابط العميل", "يرى العميل صفحة مقارنة الأسعار ويختار العرض المناسب."]
    ]
  },
  claims: {
    title: "قسم تتبع المطالبات",
    label: "تتبع المطالبات",
    badge: "مطالبات",
    summary: "يوضح هذا القسم كيف تتم متابعة مطالبة تأمينية، تحديث حالتها، وإظهار آخر تحديث للعميل من خلال رابط تتبع مباشر.",
    request: "CLM-2026-0012",
    asset: "مطالبة تأمين عقار",
    value: "قيد المراجعة",
    route: "web/pages/insurance_staff_dashboard.html?section=claims",
    nextAction: "افتح المطالبة ثم جرّب تحديث الحالة ومشاركة رابط التتبع.",
    steps: [
      ["استلام المطالبة", "يتم تسجيل المطالبة وربطها بطلب التأمين ومصدر عرض التأمين."],
      ["مراجعة المستندات", "يتحقق الموظف من المستندات المرفقة والبيانات الناقصة."],
      ["تحديث الحالة", "يمكن تغيير الحالة إلى قيد المراجعة، بانتظار رد مصدر العرض، أو مطلوب استكمال بيانات."],
      ["مشاركة رابط التتبع", "يحصل العميل على رابط لمعرفة حالة المطالبة وآخر تحديث."],
      ["إغلاق المطالبة", "بعد القرار النهائي يتم إغلاق المطالبة في النظام الفعلي."]
    ]
  }
};

const offerRows = [
  ["الشركة العمانية للتأمين", "185 ر.ع", "عرض السعر - PDF"],
  ["تأمين الخليج", "230 ر.ع", "عرض السعر - PDF"],
  ["الوطنية للتأمين", "160 ر.ع", "عرض السعر - PDF"]
];

function showIntroToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showIntroToast.timer);
  showIntroToast.timer = setTimeout(() => toast.classList.remove("show"), 3200);
}

function sectionCards() {
  return Object.entries(introDemoSections).map(([key, item]) => `
    <button class="choice-card" type="button" data-demo-section="${key}">
      <span>${item.badge}</span>
      <strong>${item.label}</strong>
      <small>${item.summary}</small>
    </button>
  `).join("");
}

function ensureInteractiveDemo() {
  if (document.getElementById("interactive-demo")) return;
  const main = document.querySelector("main.container");
  if (!main) return;
  main.insertAdjacentHTML("afterbegin", `
    <section id="interactive-demo" class="section interactive-section">
      <div class="section-head">
        <div>
          <h2>اختر القسم الذي تريد تجربته</h2>
          <p>هذه هي نقطة البداية للعرض. اختر القسم، وسيظهر أمامك شرح المسار والخطوات وروابط التجربة مباشرة بدون البحث داخل الصفحات.</p>
        </div>
      </div>
      <div class="section-picker">${sectionCards()}</div>
      <div class="guided-board" id="guidedBoard" aria-live="polite">
        <aside class="guided-summary" id="guidedSummary"></aside>
        <div class="guided-detail" id="guidedDetail"></div>
      </div>
    </section>
  `);
}

function renderSectionDemo(key) {
  const item = introDemoSections[key] || introDemoSections.properties;
  document.querySelectorAll("[data-demo-section]").forEach((button) => {
    button.classList.toggle("active", button.dataset.demoSection === key);
  });

  const summary = document.getElementById("guidedSummary");
  const detail = document.getElementById("guidedDetail");
  if (!summary || !detail) return;

  summary.innerHTML = `
    <span class="badge">${item.badge}</span>
    <h3>${item.title}</h3>
    <p>${item.summary}</p>
    <div class="mini-row"><span>رقم المعاملة</span><strong>${item.request}</strong></div>
    <div class="mini-row"><span>العميل</span><strong>أحمد بن سعيد البلوشي</strong></div>
    <div class="mini-row"><span>الأصل / الخدمة</span><strong>${item.asset}</strong></div>
    <div class="mini-row"><span>القيمة / الحالة</span><strong>${item.value}</strong></div>
    <div class="mini-row"><span>البنك</span><strong>بنك مسقط</strong></div>
    <div class="callout">${item.nextAction}</div>
  `;

  detail.innerHTML = `
    <div class="guided-toolbar">
      <a class="btn" href="${item.route}">تجربة هذا القسم الآن</a>
      <a class="btn secondary" href="insurance_quotes_customer.html">فتح رابط العميل</a>
      <button class="btn ghost" type="button" data-copy-link="insurance_quotes_customer.html">نسخ رابط مشاركة العميل</button>
    </div>
    <div class="guided-steps">
      ${item.steps.map((step, index) => `
        <article class="guided-step">
          <b>${index + 1}</b>
          <div>
            <h4>${step[0]}</h4>
            <p>${step[1]}</p>
            <button type="button" class="link-button" data-demo-step="${step[0]}">تطبيق هذه الخطوة تجريبياً</button>
          </div>
        </article>
      `).join("")}
    </div>
    <div class="quote-sample">
      <div>
        <h4>نموذج إرفاق عروض أكثر من شركة</h4>
        <p>موظف شركة اليسر يستطيع إدخال مبلغ العرض وإرفاق مستند لكل شركة لنفس المعاملة، ثم مشاركة رابط المقارنة مع العميل. الشركات هنا مصادر عروض وليست بوابات دخول للنظام.</p>
      </div>
      <div class="offer-mini-table">
        ${offerRows.map((row) => `
          <div><strong>${row[0]}</strong><span>${row[1]}</span><em>${row[2]}</em></div>
        `).join("")}
      </div>
    </div>
  `;
}

function openEntryGuide() {
  if (document.getElementById("entryGuide")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="entry-guide" id="entryGuide" role="dialog" aria-modal="true" aria-labelledby="entryGuideTitle">
      <div class="entry-panel">
        <div class="entry-head">
          <span class="badge">تجربة تفاعلية مباشرة</span>
          <h2 id="entryGuideTitle">أي قسم تريدون تجربته الآن؟</h2>
          <p>اختاروا القسم وسيظهر الشرح العملي أمامكم مباشرة مع زر الدخول للبوابة المناسبة ورابط مشاركة العميل.</p>
        </div>
        <div class="entry-choices">${sectionCards()}</div>
        <button class="entry-close" type="button" data-close-entry>تصفح الدليل بدون اختيار</button>
      </div>
    </div>
  `);
}

function chooseDemoSection(key, shouldScroll = true) {
  ensureInteractiveDemo();
  renderSectionDemo(key);
  const overlay = document.getElementById("entryGuide");
  if (overlay) overlay.remove();
  if (shouldScroll) {
    document.getElementById("interactive-demo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  showIntroToast("تم تجهيز شرح القسم المختار. يمكنكم الآن تطبيق الخطوات من الأزرار الظاهرة.");
}

document.addEventListener("DOMContentLoaded", () => {
  ensureInteractiveDemo();
  renderSectionDemo("properties");
  openEntryGuide();
});

document.addEventListener("click", async (event) => {
  const sectionButton = event.target.closest("[data-demo-section]");
  if (sectionButton) {
    event.preventDefault();
    chooseDemoSection(sectionButton.dataset.demoSection);
    return;
  }

  const closeEntry = event.target.closest("[data-close-entry]");
  if (closeEntry) {
    event.preventDefault();
    document.getElementById("entryGuide")?.remove();
    document.getElementById("interactive-demo")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const copy = event.target.closest("[data-copy-link]");
  if (copy) {
    event.preventDefault();
    const url = new URL(copy.dataset.copyLink, window.location.href).href;
    try {
      await navigator.clipboard.writeText(url);
      showIntroToast("تم نسخ رابط مشاركة العميل تجريبياً.");
    } catch {
      showIntroToast("رابط مشاركة العميل التجريبي: " + url);
    }
    return;
  }

  const step = event.target.closest("[data-demo-step]");
  if (step) {
    event.preventDefault();
    showIntroToast(`تم تطبيق خطوة "${step.dataset.demoStep}" بشكل تجريبي. في النسخة الفعلية سيتم حفظ الحالة داخل النظام.`);
    return;
  }

  const demo = event.target.closest("[data-intro-demo]");
  if (!demo) return;
  event.preventDefault();
  const type = demo.dataset.introDemo;
  if (type === "notes") showIntroToast("تم حفظ الملاحظات بشكل تجريبي. في النسخة الفعلية سيتم إرسالها إلى فريق يسر.");
  else if (type === "pdf") showIntroToast("تصدير PDF غير مفعل في النسخة التجريبية، وسيتم تفعيله في مرحلة التنفيذ.");
  else if (type === "send") showIntroToast("تم إرسال الملاحظات تجريبياً. في النسخة الفعلية سيتم إشعار فريق يسر.");
  else showIntroToast("هذا إجراء تجريبي للعرض فقط.");
});
