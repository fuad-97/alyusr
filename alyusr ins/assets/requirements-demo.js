const serviceData = {
  vehicle: {
    label: "تأمين مركبة",
    value: "22,500 ر.ع",
    completion: 78,
    status: "قيد المراجعة",
  },
  property: {
    label: "تأمين عقار",
    value: "85,000 ر.ع",
    completion: 75,
    status: "قيد المراجعة",
  },
  assets: {
    label: "تأمين ممتلكات",
    value: "18,000 ر.ع",
    completion: 70,
    status: "ناقص بيانات",
  },
  finance: {
    label: "تأمين تمويل",
    value: "62,000 ر.ع",
    completion: 68,
    status: "ناقص بيانات",
  },
};

const serviceSelect = document.getElementById("service-type");
const statusSelect = document.getElementById("request-status");
const toast = document.getElementById("toast");

function badgeClass(status) {
  if (status === "ناقص بيانات") return "waiting";
  if (status === "مكتمل") return "done";
  if (status === "جديد") return "new";
  return "review";
}

function setService(service) {
  const data = serviceData[service] || serviceData.property;
  document.querySelectorAll("[data-service-section]").forEach((section) => {
    section.hidden = section.dataset.serviceSection !== service;
  });

  document.getElementById("summary-service").textContent = data.label;
  document.getElementById("summary-value").textContent = data.value;
  document.getElementById("summary-completion").textContent = `${data.completion}%`;
  document.getElementById("completion-text").textContent = `${data.completion}%`;
  document.getElementById("completion-bar").style.width = `${data.completion}%`;

  statusSelect.value = data.status;
  setStatus(data.status);
}

function setStatus(status) {
  const cls = badgeClass(status);
  document.getElementById("summary-status").className = `badge ${cls}`;
  document.getElementById("summary-status").textContent = status;
  document.getElementById("summary-status-cell").innerHTML = `<span class="badge ${cls}">${status}</span>`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

serviceSelect.addEventListener("change", (event) => {
  setService(event.target.value);
  showToast("تم تحديث نوع الخدمة وعرض القسم المناسب تجريبيًا.");
});

statusSelect.addEventListener("change", (event) => {
  setStatus(event.target.value);
});

document.querySelectorAll("[data-demo-action]").forEach((button) => {
  button.addEventListener("click", () => {
    showToast("تم تنفيذ الإجراء بشكل تجريبي فقط.");
  });
});

setService(serviceSelect.value);
