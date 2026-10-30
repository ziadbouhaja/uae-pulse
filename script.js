


const colorData = {
  red: {
    title: "الأحمر — تضحيات التأسيس",
    description:
      "يرمز اللون الأحمر إلى عطاءات جيل تأسيس الاتحاد، وتضحيات شهداء الوطن الذين قدموا أرواحهم لحماية منجزاته ومكتسباته. ويحمل هذا اللون معنى عميقًا يرتبط بتاريخ قيام دولة الإمارات، وبالجهود والتضحيات التي أسهمت في بناء الاتحاد والمحافظة على مكتسباته. ويظهر الشريط الأحمر في الجانب العمودي من العلم، بالقرب من السارية، رابطًا بصريًا بين الأشرطة الأفقية الثلاثة.",
    hex: "#C8102E",
    fact:
      "هل تعلم؟ اللون الأحمر في العلم الإماراتي هو الشريط العمودي الذي يصل بصريًا بين الألوان الثلاثة الأخرى."
  },

  green: {
    title: "الأخضر — النماء والازدهار",
    description:
      "يرمز اللون الأخضر إلى النماء والازدهار والبيئة الخضراء، كما يعبر عن النهضة الثقافية والحضارية في دولة الإمارات. ويعكس هذا اللون صورة وطن يواصل مسيرة التنمية والتقدم، ويهتم بالبيئة وبناء مستقبل مزدهر للأجيال القادمة. ويقع الشريط الأخضر في الجزء العلوي من العلم، ليكون أحد العناصر الأساسية في تصميمه الوطني.",
    hex: "#00843D",
    fact:
      "هل تعلم؟ اللون الأخضر هو الشريط العلوي من العلم، ويرتبط بمعاني التنمية والازدهار."
  },

  white: {
    title: "الأبيض — الخير والسلام",
    description:
      "يرمز اللون الأبيض إلى عمل الخير والعطاء، وإلى منهج دولة الإمارات الداعم للسلام والأمن في العالم. وتعكس هذه الدلالة القيم الإنسانية التي تحرص الدولة على تعزيزها، ومساهماتها في المبادرات الإنسانية والتنموية. ويقع الشريط الأبيض في منتصف العلم، بين الأخضر والأسود، ليشكل جزءًا من الترتيب الرسمي لألوان الاتحاد.",
    hex: "#FFFFFF",
    fact:
      "هل تعلم؟ اللون الأبيض هو الشريط الأوسط في العلم الإماراتي، ويرتبط بالعطاء والسلام."
  },

  black: {
    title: "الأسود — القوة والعزيمة",
    description:
      "يرمز اللون الأسود إلى قوة أبناء الدولة ومنعتهم وعزيمتهم، وإلى رفض الظلم والتطرف. ويعبر عن الثبات والإصرار في حماية الوطن والمحافظة على أمنه ومكتسباته. ويقع الشريط الأسود في الجزء السفلي من العلم، ويكمل مع الأخضر والأبيض والأحمر التصميم الوطني الذي يمثل دولة الإمارات.",
    hex: "#000000",
    fact:
      "هل تعلم؟ اللون الأسود هو الشريط السفلي من العلم، ويرتبط بالقوة والعزيمة ورفض الظلم."
  }
};



const colorParts = document.querySelectorAll("[data-color]");
const colorTitle = document.getElementById("colorTitle");
const colorDescription = document.getElementById("colorDescription");
const colorDot = document.getElementById("colorDot");

function selectColor(color) {
  const info = colorData[color];
  if (!info) return;

  colorTitle.textContent = info.title;
  colorDescription.textContent = info.description;
  colorDot.style.backgroundColor = info.hex;

  colorParts.forEach((part) => {
    part.classList.toggle("selected", part.dataset.color === color);
  });
}


const colorModal = document.getElementById("colorModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalPreview = document.getElementById("modalPreview");
const closeModalButton = document.getElementById("closeModal");
const modalConfirm = document.getElementById("modalConfirm");

let lastFocusedColor = null;

function openColorModal(color, trigger) {
  const info = colorData[color];
  if (!info) return;

  selectColor(color);

  modalTitle.textContent = info.title;
  modalDescription.textContent = info.description;
  modalPreview.style.backgroundColor = info.hex;

  lastFocusedColor = trigger;
  colorModal.classList.add("is-open");
  colorModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeModalButton.focus();
}

function closeColorModal() {
  colorModal.classList.remove("is-open");
  colorModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedColor) lastFocusedColor.focus();
}

colorParts.forEach((part) => {
  part.addEventListener("mouseenter", () => {
    selectColor(part.dataset.color);
  });

  part.addEventListener("focus", () => {
    selectColor(part.dataset.color);
  });

  part.addEventListener("click", () => {
    openColorModal(part.dataset.color, part);
  });

  part.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openColorModal(part.dataset.color, part);
    }
  });
});

closeModalButton.addEventListener("click", closeColorModal);
modalConfirm.addEventListener("click", closeColorModal);

colorModal.addEventListener("click", (event) => {
  if (event.target === colorModal) closeColorModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && colorModal.classList.contains("is-open")) {
    closeColorModal();
  }
});



const historyStations = [
  {
    kicker: "المحطة الأولى",
    year: "1971",
    title: "من فكرة إلى علم",
    lead:
      "قبل أن يصبح العلم رمزًا يرفرف فوق مؤسسات الدولة ومناسباتها، بدأت حكايته بمسابقة لتصميم علم الدولة الجديدة.",
    paragraphs: [
      "في أواخر عام 1971، نظّمت صحيفة الاتحاد مسابقة لتصميم علم دولة الإمارات العربية المتحدة. شارك عبدالله محمد المعينة في هذه المسابقة، وأصبح تصميمه العلم الذي ارتبط بقيام الاتحاد.",
      "توضح هذه القصة كيف يمكن لتصميم بصري بسيط أن يحمل معنى يتجاوز شكله؛ فالعلم ليس مجرد ألوان مرتبة، بل رمز رسمي لهوية الدولة، يظهر في مؤسساتها ومناسباتها الوطنية ويمثلها أمام العالم.",
      "ومن التفاصيل اللافتة أن ألوان العلم الأربعة استُلهمت من بيت شعر للشاعر صفي الدين الحلي. وهكذا ارتبط تصميم العلم أيضًا بمرجع أدبي عربي قديم، يجمع بين الهوية الوطنية والتراث الثقافي."
    ],
    highlight:
      "المعلومة الأساسية: صمّم عبدالله محمد المعينة العلم بعد مشاركته في مسابقة نظّمتها صحيفة الاتحاد.",
    source:
      "المصدر: الدليل الإرشادي الرسمي لعلم دولة الإمارات"
  },
  {
    kicker: "المحطة الثانية",
    year: "2 ديسمبر 1971",
    title: "لحظة الاتحاد",
    lead:
      "في الثاني من ديسمبر عام 1971، بدأت مرحلة جديدة في تاريخ المنطقة بإعلان قيام دولة الإمارات العربية المتحدة.",
    paragraphs: [
      "في ذلك اليوم، رُفع علم دولة الإمارات للمرة الأولى خلال الاحتفال بإعلان قيام الاتحاد. وارتبطت هذه اللحظة بجهود الآباء المؤسسين، الذين عملوا على جمع الإمارات في دولة اتحادية واحدة.",
      "أصبح العلم منذ تلك اللحظة رمزًا للدولة الجديدة، ودلالة بصرية على الانتقال من فكرة الاتحاد إلى كيان وطني مستقل. ولم تكن أهمية المناسبة في رفع العلم وحده، بل في المعنى الذي مثّله: بداية مسار مشترك يجمع الإمارات في إطار اتحادي.",
      "تكتمل قصة الاتحاد لاحقًا بانضمام إمارة رأس الخيمة في 10 فبراير 1972، ليصبح الاتحاد مكوّنًا من الإمارات السبع التي نعرفها اليوم."
    ],
    highlight:
      "المعلومة الأساسية: رُفع العلم للمرة الأولى في 2 ديسمبر 1971، يوم إعلان قيام دولة الإمارات العربية المتحدة.",
    source:
      "المصدر: البوابة الرسمية لحكومة الإمارات — تاريخ الدولة"
  },
  {
    kicker: "المحطة الثالثة",
    year: "اليوم",
    title: "أربعة ألوان، ورمز واحد",
    lead:
      "ما زال العلم بتصميمه المعروف يمثل دولة الإمارات، وتمنح ألوانه الأربعة الزائر مدخلًا لفهم رمزيته الوطنية.",
    paragraphs: [
      "يتكوّن العلم من شريط أحمر عمودي بجانب السارية، وثلاثة أشرطة أفقية متساوية: الأخضر في الأعلى، والأبيض في الوسط، والأسود في الأسفل. هذه هي البنية الرسمية للعلم، وهي التي يجب الحفاظ على نسبها وترتيبها عند تمثيله رقميًا.",
      "وفق المنصة الرسمية لحكومة الإمارات، يرتبط الأخضر بالأمل والفرح والتفاؤل والحب، ويمكن أن يرمز إلى ازدهار الدولة. ويرتبط الأبيض بالسلام والصدق، بينما يشير الأسود إلى قوة العقل وهزيمة الأعداء، ويرمز الأحمر إلى الشجاعة والقوة والبسالة.",
      "عند استكشاف ألوان العلم، من المهم التمييز بين المعاني الواردة في المصادر الرسمية والتفسيرات الشخصية. لذلك يستند هذا القسم إلى الوصف المنشور في البوابة الحكومية، مع إتاحة المصادر للزائر حتى يستطيع متابعة القراءة والتحقق بنفسه."
    ],
    highlight:
      "المعلومة الأساسية: العلم مستطيل، طوله ضعف عرضه، ويجمع أربعة ألوان ضمن ترتيب ونسب محددة.",
    source:
      "المصدر: البوابة الرسمية لحكومة الإمارات — حقائق عن الدولة والعلم"
  }
];

const journeyTabs = document.querySelectorAll(".journey-tab");
const detailKicker = document.getElementById("detailKicker");
const detailYear = document.getElementById("detailYear");
const detailTitle = document.getElementById("detailTitle");
const detailLead = document.getElementById("detailLead");
const detailBody = document.getElementById("detailBody");
const detailHighlight = document.getElementById("detailHighlight");
const detailSourceLabel = document.getElementById("detailSourceLabel");
const journeyProgressText = document.getElementById("journeyProgressText");
const progressFill = document.getElementById("progressFill");
const previousStation = document.getElementById("previousStation");
const nextStation = document.getElementById("nextStation");
const journeyDetail = document.querySelector(".journey-detail");

let currentStation = 0;

function showStation(index) {
  if (index < 0 || index >= historyStations.length) return;

  currentStation = index;
  const station = historyStations[index];

  detailKicker.textContent = station.kicker;
  detailYear.textContent = station.year;
  detailTitle.textContent = station.title;
  detailLead.textContent = station.lead;
  detailHighlight.textContent = station.highlight;
  detailSourceLabel.textContent = station.source;

  // Build the paragraphs as text, not HTML, for safer rendering.
  detailBody.replaceChildren();

  station.paragraphs.forEach((paragraphText) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    detailBody.appendChild(paragraph);
  });

  journeyTabs.forEach((tab, tabIndex) => {
    const isActive = tabIndex === index;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });

  journeyProgressText.textContent =
    `المحطة ${index + 1} من ${historyStations.length}`;

  progressFill.style.width =
    `${((index + 1) / historyStations.length) * 100}%`;

  previousStation.disabled = index === 0;

  if (index === historyStations.length - 1) {
    nextStation.innerHTML = "العودة إلى البداية <span>↻</span>";
  } else {
    nextStation.innerHTML = "المحطة التالية <span>←</span>";
  }

  // Replay the subtle entrance animation on each station change.
  journeyDetail.style.animation = "none";
  void journeyDetail.offsetWidth;
  journeyDetail.style.animation = "";
}

journeyTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    showStation(Number(tab.dataset.station));
  });
});

previousStation.addEventListener("click", () => {
  showStation(currentStation - 1);
});

nextStation.addEventListener("click", () => {
  if (currentStation === historyStations.length - 1) {
    showStation(0);
  } else {
    showStation(currentStation + 1);
  }
});

// Set the first station when the page loads.
showStation(0);
