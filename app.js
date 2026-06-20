/* ============================================================
   Grade 9 Science EOT Revision — application logic
   Vanilla JS. Depends on CONTENT (content.js) and DIAGRAMS (diagrams.js).
   ============================================================ */
(function () {
  "use strict";

  var LS_KEY = "g9sci_t3_eot_v1";
  var app = document.getElementById("app");

  /* ---------- icons (inline SVG, currentColor) ---------- */
  var ICON = {
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    key: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="3.5"/><path d="M10 13 20 3M17 6l2 2M14 9l2 2"/></svg>',
    formula: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16M9 4v16M4 12h10"/></svg>',
    mistake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg>',
    tryit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2Z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
  };

  var BOX_ICON = { key: ICON.key, formula: ICON.formula, mistake: ICON.mistake, tryit: ICON.tryit };
  var BOX_LABEL = {
    key: { en: "Key idea", ar: "فكرة أساسية" },
    formula: { en: "Formula", ar: "القانون" },
    mistake: { en: "Common mistake", ar: "خطأ شائع" },
    tryit: { en: "Try it", ar: "جرّب بنفسك" }
  };

  /* ---------- state / persistence ---------- */
  function loadState() {
    try {
      var s = JSON.parse(localStorage.getItem(LS_KEY));
      if (s && typeof s === "object") return s;
    } catch (e) {}
    return { lang: "both", done: {}, best: {} };
  }
  function saveState() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (e) {}
  }
  var state = loadState();
  if (["en", "ar", "both"].indexOf(state.lang) === -1) state.lang = "both";

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  // escape + convert newlines to <br>, and bold any standalone formula-like line (contains "=")
  function mlEsc(s) {
    var parts = String(s == null ? "" : s).split("\n");
    return parts.map(function (line) {
      var e = esc(line);
      if (/[=]/.test(line) && line.trim().length < 60 && /[A-Za-z]\s*=/.test(line)) {
        return '<span class="eqline" dir="ltr">' + e + '</span>';
      }
      return e;
    }).join("<br>");
  }
  function el(html) { var d = document.createElement("div"); d.innerHTML = html.trim(); return d.firstChild; }
  function lessonById(id) { for (var i = 0; i < CONTENT.lessons.length; i++) if (CONTENT.lessons[i].id === id) return CONTENT.lessons[i]; return null; }

  // bilingual pair: shows EN and AR; CSS hides per language mode
  function pair(enHtml, arHtml, tag) {
    tag = tag || "p";
    return '<div class="pair">' +
      '<' + tag + ' class="en" data-lang="en">' + enHtml + '</' + tag + '>' +
      '<' + tag + ' class="ar" data-lang="ar" lang="ar" dir="rtl">' + arHtml + '</' + tag + '>' +
      '</div>';
  }

  function applyLangClass() {
    document.body.classList.remove("lang-en", "lang-ar", "lang-both");
    document.body.classList.add("lang-" + state.lang);
  }

  /* ---------- diagram rendering ---------- */
  function diagramFigure(id, capEn, capAr) {
    var svg = (typeof DIAGRAMS !== "undefined" && DIAGRAMS[id]) ? DIAGRAMS[id] : "";
    var alt = (capEn || "") + (capAr ? " — " + capAr : "");
    // inject role/aria onto the svg via a labelled wrapper
    return '<figure class="diagram">' +
      '<div class="svg-wrap" role="img" aria-label="' + esc(alt) + '">' + svg + '</div>' +
      (capEn || capAr ? '<figcaption>' +
        '<span class="en" data-lang="en">' + esc(capEn || "") + '</span>' +
        '<span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(capAr || "") + '</span>' +
        '</figcaption>' : "") +
      '</figure>';
  }

  /* ============================================================
     HOME
     ============================================================ */
  function viewHome() {
    var m = CONTENT.meta, ex = m.exam;
    var doneCount = CONTENT.lessons.filter(function (l) { return state.done[l.id]; }).length;

    var facts =
      fact(ex.count, "Questions", "أسئلة") +
      fact(ex.total, "Total marks", "الدرجة الكلية") +
      fact(ex.marksEach, "Marks each", "لكل سؤال") +
      fact(ex.duration + "m", "Minutes", "دقيقة") +
      fact(ex.calculator ? "Yes" : "No", "Calculator", "آلة حاسبة") +
      fact("MCQ", "Question type", "نوع الأسئلة");

    var howto =
      step("01", "Study each lesson", "ادرس كل درس", "Read the bilingual notes and study the diagrams.", "اقرأ الملاحظات باللغتين وادرس الرسوم.") +
      step("02", "Take the quiz", "حل الاختبار", "Answer the questions and read every explanation.", "أجب عن الأسئلة واقرأ كل تفسير.") +
      step("03", "Sit the mock exam", "اجلس للاختبار التجريبي", "Try all 25 questions like the real EOT.", "جرّب جميع الأسئلة الـ25 كالاختبار الحقيقي.");

    var cards = CONTENT.lessons.map(function (l, i) {
      var done = state.done[l.id] ? " is-done" : "";
      return '<button class="lcard' + done + '" data-go="#lesson-' + l.id + '">' +
        '<span class="badge">' + l.num + '</span>' +
        '<h3>' + esc(l.title.en) + '</h3>' +
        '<span class="ar-title" lang="ar" dir="rtl">' + esc(l.title.ar) + '</span>' +
        '<span class="meta">' +
          '<span class="done">' + ICON.check + '<span data-lang="en">Done</span><span class="ar" data-lang="ar" lang="ar"> تم</span></span>' +
          '<span class="qn">' + l.quiz.length + ' Q</span>' +
        '</span>' +
        '</button>';
    }).join("");

    var bestFinal = state.best.final;
    var finalCard =
      '<div class="final-card' + (bestFinal != null ? " has-best" : "") + '">' +
        '<div class="fc-text">' +
          '<h3>Final Mock Exam <span class="ar" lang="ar" dir="rtl">الاختبار التجريبي النهائي</span></h3>' +
          '<p data-lang="en">25 mixed questions across all six lessons, marked out of 100 — just like the real End-of-Term exam on SwiftAssess.</p>' +
          '<p class="ar" data-lang="ar" lang="ar" dir="rtl">25 سؤالاً متنوعاً من الدروس الستة، من 100 درجة — تماماً مثل اختبار نهاية الفصل على منصة SwiftAssess.</p>' +
          (bestFinal != null ? '<div class="best">Best score: ' + bestFinal + ' / 100</div>' : "") +
        '</div>' +
        '<button class="btn btn-light btn-lg" data-go="#final">Start mock exam ' + ICON.arrow + '</button>' +
      '</div>';

    var html =
      '<div class="view">' +
        '<section class="hero">' +
          '<canvas id="particles" aria-hidden="true"></canvas>' +
          '<div class="hero-content">' +
            '<span class="eyebrow">Grade ' + m.grade + ' · Term ' + m.term + ' · Revision</span>' +
            '<h1>' + esc(m.subject.en) + '</h1>' +
            '<div class="h1-ar" lang="ar" dir="rtl">' + esc(m.subject.ar) + '</div>' +
            '<p class="lede" data-lang="en">Everything you need for the End-of-Term exam: clear bilingual notes, labelled diagrams, lesson quizzes and a full mock exam.</p>' +
            '<p class="lede ar" data-lang="ar" lang="ar" dir="rtl">كل ما تحتاجه لاختبار نهاية الفصل: ملاحظات واضحة بلغتين، ورسوم موضّحة، واختبارات لكل درس، واختبار تجريبي كامل.</p>' +
          '</div>' +
        '</section>' +

        '<div class="facts">' + facts + '</div>' +

        '<div class="sec-h"><h2>How to use this site</h2><span class="ar" lang="ar" dir="rtl">كيف تستخدم الموقع</span><span class="rule"></span></div>' +
        '<div class="howto">' + howto + '</div>' +

        '<div class="sec-h"><h2>Lessons</h2><span class="ar" lang="ar" dir="rtl">الدروس</span><span class="rule"></span></div>' +
        '<div class="lesson-grid">' + cards + '</div>' +

        '<div class="sec-h"><h2>Put it all together</h2><span class="ar" lang="ar" dir="rtl">اختبر نفسك</span><span class="rule"></span></div>' +
        finalCard +
      '</div>';

    app.innerHTML = html;
    startParticles();
    updateTopProgress(doneCount, CONTENT.lessons.length);
  }

  function fact(v, ken, kar) {
    return '<div class="fact"><div class="v">' + esc(v) + '</div>' +
      '<div class="k"><span data-lang="en">' + esc(ken) + '</span>' +
      '<span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(kar) + '</span></div></div>';
  }
  function step(n, hen, har, pen, par) {
    return '<div class="step"><div class="n">' + n + '</div>' +
      '<h3><span data-lang="en">' + esc(hen) + '</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(har) + '</span></h3>' +
      '<p data-lang="en">' + esc(pen) + '</p>' +
      '<p class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(par) + '</p></div>';
  }

  /* ============================================================
     LESSON
     ============================================================ */
  function viewLesson(id) {
    var l = lessonById(id);
    if (!l) { location.hash = "#home"; return; }

    var body = l.sections.map(function (s) {
      switch (s.type) {
        case "note":
          return '<div class="block prose">' +
            (s.heading ? '<h3 class="sec-h" style="margin:18px 0 10px"><span data-lang="en">' + esc(s.heading.en) + '</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(s.heading.ar) + '</span></h3>' : "") +
            pair(mlEsc(s.body.en), mlEsc(s.body.ar)) + '</div>';
        case "key": case "mistake": case "tryit":
          return boxBlock(s.type, s);
        case "formula":
          return formulaBlock(s);
        case "list":
          return listBlock(s);
        case "diagram":
          return diagramFigure(s.id, s.caption ? s.caption.en : "", s.caption ? s.caption.ar : "");
        default:
          return "";
      }
    }).join("");

    var outcomes = "";
    if (l.outcomes && l.outcomes.en && l.outcomes.en.length) {
      var lis = l.outcomes.en.map(function (o, i) {
        var ar = (l.outcomes.ar && l.outcomes.ar[i]) || "";
        return '<li><span data-lang="en">' + esc(o) + '</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(ar) + '</span></li>';
      }).join("");
      outcomes = '<div class="outcomes"><div class="lbl">Learning outcomes · نواتج التعلّم</div><ul>' + lis + '</ul></div>';
    }

    var nextLesson = CONTENT.lessons[l.num] ? CONTENT.lessons[l.num] : null; // num is 1-based -> next index = num

    var html =
      '<div class="view">' +
        '<div class="crumbs"><button data-go="#home">Home · الرئيسية</button> ' + ICON_sep() + ' <span>Lesson ' + l.num + '</span></div>' +
        '<header class="lesson-head">' +
          '<div class="kicker">Lesson ' + l.num + '</div>' +
          '<h1>' + esc(l.title.en) + '</h1>' +
          '<div class="ar-title" lang="ar" dir="rtl">' + esc(l.title.ar) + '</div>' +
          outcomes +
        '</header>' +
        body +
        '<div class="lesson-actions">' +
          '<button class="btn btn-primary btn-lg grow" data-go="#quiz-' + l.id + '">' + ICON.book + ' Take Lesson ' + l.num + ' quiz <span class="ar" lang="ar" dir="rtl" style="margin-inline-start:6px">· اختبار الدرس</span></button>' +
          (nextLesson ? '<button class="btn btn-ghost" data-go="#lesson-' + nextLesson.id + '">Next lesson ' + ICON.arrow + '</button>' : '<button class="btn btn-ghost" data-go="#final">Mock exam ' + ICON.arrow + '</button>') +
        '</div>' +
      '</div>';

    app.innerHTML = html;
    window.scrollTo(0, 0);
  }

  function ICON_sep() { return '<span aria-hidden="true">›</span>'; }

  function boxBlock(type, s) {
    return '<div class="box ' + type + '">' +
      '<div class="box-h"><span class="ic">' + (BOX_ICON[type] || "") + '</span>' +
        '<span data-lang="en">' + esc(s.heading ? s.heading.en : BOX_LABEL[type].en) + '</span>' +
        '<span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(s.heading ? s.heading.ar : BOX_LABEL[type].ar) + '</span>' +
      '</div>' +
      pair(mlEsc(s.body.en), mlEsc(s.body.ar)) +
      '</div>';
  }

  function formulaBlock(s) {
    var eq = s.eq ? '<div class="formula-eq" dir="ltr">' + esc(s.eq) + '</div>' : "";
    return '<div class="box formula">' +
      '<div class="box-h"><span class="ic">' + ICON.formula + '</span>' +
        '<span data-lang="en">' + esc(s.heading ? s.heading.en : BOX_LABEL.formula.en) + '</span>' +
        '<span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(s.heading ? s.heading.ar : BOX_LABEL.formula.ar) + '</span>' +
      '</div>' +
      pair(mlEsc(s.body.en), mlEsc(s.body.ar)) + eq +
      '</div>';
  }

  function listBlock(s) {
    var items = (s.items || []).map(function (it) {
      return '<li><span data-lang="en">' + esc(it.en) + '</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(it.ar) + '</span></li>';
    }).join("");
    return '<div class="listblock">' +
      (s.heading ? '<h4><span data-lang="en">' + esc(s.heading.en) + '</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(s.heading.ar) + '</span></h4>' : "") +
      '<ul>' + items + '</ul></div>';
  }

  /* ============================================================
     QUIZ ENGINE (shared by lesson quiz + final exam)
     ============================================================ */
  var quiz = null;

  function startLessonQuiz(id) {
    var l = lessonById(id);
    if (!l) { location.hash = "#home"; return; }
    quiz = {
      mode: "lesson", lessonId: id,
      title: { en: "Lesson " + l.num + " Quiz", ar: "اختبار الدرس " + l.num },
      sub: { en: l.title.en, ar: l.title.ar },
      items: l.quiz.map(shuffleOptions),
      i: 0, answers: [], correctCount: 0, marksEach: 1
    };
    renderQuestion();
  }

  function startFinal() {
    var items = CONTENT.finalQuiz.map(shuffleOptions);
    shuffle(items);
    quiz = {
      mode: "final",
      title: { en: "Final Mock Exam", ar: "الاختبار التجريبي النهائي" },
      sub: { en: "All lessons · 25 questions", ar: "كل الدروس · 25 سؤالاً" },
      items: items,
      i: 0, answers: [], correctCount: 0, marksEach: CONTENT.meta.exam.marksEach
    };
    renderQuestion();
  }

  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // return a copy of a quiz item with its options shuffled and `correct` remapped
  function shuffleOptions(item) {
    var paired = item.options.map(function (o, idx) { return { o: o, orig: idx }; });
    shuffle(paired);
    var newCorrect = 0;
    var opts = paired.map(function (p, idx) { if (p.orig === item.correct) newCorrect = idx; return p.o; });
    var copy = {};
    for (var k in item) if (Object.prototype.hasOwnProperty.call(item, k)) copy[k] = item[k];
    copy.options = opts;
    copy.correct = newCorrect;
    return copy;
  }

  function renderQuestion() {
    var q = quiz.items[quiz.i];
    var n = quiz.items.length;
    var pct = Math.round((quiz.i) / n * 100);
    var letters = ["A", "B", "C", "D"];

    var topicTag = "";
    if (quiz.mode === "final" && q.topic && CONTENT.topicNames[q.topic]) {
      var tn = CONTENT.topicNames[q.topic];
      topicTag = ' · <span data-lang="en">' + esc(tn.en) + '</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(tn.ar) + '</span>';
    }

    var dia = q.diagram ? diagramFigure(q.diagram, "", "") : "";

    var opts = q.options.map(function (o, idx) {
      return '<li><button class="opt" data-idx="' + idx + '">' +
        '<span class="lett">' + letters[idx] + '</span>' +
        '<span class="otext"><span data-lang="en">' + esc(o.en) + '</span>' +
          '<span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(o.ar) + '</span></span>' +
        '<span class="tag"></span>' +
        '<span class="mark" aria-hidden="true"></span>' +
        '</button></li>';
    }).join("");

    var html =
      '<div class="view quiz-shell">' +
        '<div class="crumbs"><button data-go="' + (quiz.mode === "lesson" ? "#lesson-" + quiz.lessonId : "#home") + '">' +
          (quiz.mode === "lesson" ? "Back to lesson · عودة للدرس" : "Home · الرئيسية") + '</button></div>' +
        '<div class="quiz-top">' +
          '<span class="qmeta"><span data-lang="en">Q ' + (quiz.i + 1) + ' / ' + n + '</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">سؤال ' + (quiz.i + 1) + ' / ' + n + '</span></span>' +
          '<div class="quiz-bar"><i style="width:' + pct + '%"></i></div>' +
        '</div>' +
        '<div class="qcard">' +
          '<div class="qnum"><span data-lang="en">Question ' + (quiz.i + 1) + '</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">السؤال ' + (quiz.i + 1) + '</span>' + topicTag + '</div>' +
          '<div class="qtext" data-lang="en">' + esc(q.q.en) + '</div>' +
          '<div class="qtext-ar" data-lang="ar" lang="ar" dir="rtl">' + esc(q.q.ar) + '</div>' +
          dia +
          '<ul class="options">' + opts + '</ul>' +
          '<div class="explain" id="explain" role="status" aria-live="polite"></div>' +
          '<div class="quiz-foot">' +
            '<span class="grow"></span>' +
            '<button class="btn btn-primary" id="nextBtn" disabled>' +
              '<span data-lang="en">' + (quiz.i + 1 === n ? "Finish" : "Next") + '</span>' +
              '<span class="ar" data-lang="ar" lang="ar" dir="rtl">' + (quiz.i + 1 === n ? "إنهاء" : "التالي") + '</span>' +
              ' ' + ICON.arrow +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>';

    app.innerHTML = html;
    window.scrollTo(0, 0);

    var answered = false;
    var optButtons = app.querySelectorAll(".opt");
    var nextBtn = document.getElementById("nextBtn");
    var explain = document.getElementById("explain");

    optButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var chosen = parseInt(btn.getAttribute("data-idx"), 10);
        var correct = q.correct;
        quiz.answers[quiz.i] = chosen;
        var isRight = chosen === correct;
        if (isRight) quiz.correctCount++;

        optButtons.forEach(function (b) {
          var bi = parseInt(b.getAttribute("data-idx"), 10);
          b.setAttribute("disabled", "true");
          if (bi === correct) {
            b.classList.add("correct");
            b.querySelector(".mark").innerHTML = ICON.check;
            b.querySelector(".tag").textContent = "Correct";
          }
          if (bi === chosen && !isRight) {
            b.classList.add("wrong");
            b.querySelector(".mark").innerHTML = ICON.x;
            b.querySelector(".tag").textContent = "Your answer";
          }
        });

        explain.className = "explain show " + (isRight ? "right" : "wrong-x");
        var verdictEn = isRight ? "Correct!" : "Not quite.";
        var verdictAr = isRight ? "إجابة صحيحة!" : "ليست صحيحة.";
        explain.innerHTML =
          '<div class="verdict">' + (isRight ? ICON.check : ICON.x) +
            '<span data-lang="en">' + verdictEn + '</span>' +
            '<span class="ar" data-lang="ar" lang="ar" dir="rtl">' + verdictAr + '</span>' +
          '</div>' +
          pair(mlEsc(q.explain.en), mlEsc(q.explain.ar));

        nextBtn.removeAttribute("disabled");
        nextBtn.focus();
      });
    });

    nextBtn.addEventListener("click", function () {
      if (quiz.answers[quiz.i] == null) return;
      if (quiz.i + 1 >= n) { finishQuiz(); }
      else { quiz.i++; renderQuestion(); }
    });
  }

  function finishQuiz() {
    var n = quiz.items.length;
    var correct = quiz.correctCount;
    var pct = Math.round(correct / n * 100);

    if (quiz.mode === "lesson") {
      state.done[quiz.lessonId] = true;
      var prev = state.best[quiz.lessonId];
      if (prev == null || pct > prev) state.best[quiz.lessonId] = pct;
      saveState();
    } else {
      var marks = correct * quiz.marksEach; // out of 100
      if (state.best.final == null || marks > state.best.final) state.best.final = marks;
      saveState();
    }
    renderScore();
  }

  /* ---------- bands ---------- */
  function band(pct) {
    if (pct >= 85) return { key: "ace", en: "Excellent — you're exam ready!", ar: "ممتاز — أنت جاهز للاختبار!", col: "var(--green)" };
    if (pct >= 70) return { key: "good", en: "Good work — a little more polish.", ar: "عمل جيد — تحتاج مراجعة بسيطة.", col: "var(--teal)" };
    if (pct >= 50) return { key: "mid", en: "Getting there — review the tricky parts.", ar: "في الطريق — راجع النقاط الصعبة.", col: "var(--amber)" };
    return { key: "low", en: "Keep going — revisit the lesson notes.", ar: "واصل — أعد قراءة ملاحظات الدرس.", col: "var(--coral)" };
  }

  function renderScore() {
    var n = quiz.items.length;
    var correct = quiz.correctCount;
    var wrong = n - correct;
    var pct = Math.round(correct / n * 100);
    var b = band(pct);
    var isFinal = quiz.mode === "final";
    var bigNum = isFinal ? (correct * quiz.marksEach) : pct;
    var bigDen = isFinal ? 100 : 100;

    // ring
    var R = 78, CIRC = 2 * Math.PI * R;
    var off = CIRC * (1 - pct / 100);

    var review = "";
    if (isFinal) {
      var letters = ["A", "B", "C", "D"];
      var rows = quiz.items.map(function (q, i) {
        var chosen = quiz.answers[i];
        var ok = chosen === q.correct;
        var youEn = chosen != null ? (letters[chosen] + ". " + q.options[chosen].en) : "—";
        var solEn = letters[q.correct] + ". " + q.options[q.correct].en;
        return '<div class="rev-item' + (ok ? "" : " bad") + '">' +
          '<div class="rq"><span data-lang="en">' + (i + 1) + '. ' + esc(q.q.en) + '</span>' +
            '<span class="ar" data-lang="ar" lang="ar" dir="rtl">' + (i + 1) + '. ' + esc(q.q.ar) + '</span></div>' +
          (ok ? "" : '<div class="ra you bad-a"><span class="k" data-lang="en">Your answer: </span><span class="k ar" data-lang="ar" lang="ar" dir="rtl">إجابتك: </span>' + esc(youEn) + '</div>') +
          '<div class="ra sol"><span class="k" data-lang="en">Correct: </span><span class="k ar" data-lang="ar" lang="ar" dir="rtl">الصحيحة: </span>' + esc(solEn) + '</div>' +
          '<div class="rexp"><span data-lang="en">' + esc(q.explain.en) + '</span>' +
            '<span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(q.explain.ar) + '</span></div>' +
          '</div>';
      }).join("");
      review = '<div class="review"><h2><span data-lang="en">Review all questions</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">مراجعة كل الأسئلة</span></h2>' + rows + '</div>';
    }

    var againTarget = isFinal ? "#final" : "#quiz-" + quiz.lessonId;
    var backTarget = isFinal ? "#home" : "#lesson-" + quiz.lessonId;

    var html =
      '<div class="view score-shell">' +
        '<div class="score-card">' +
          '<div class="score-ring">' +
            '<svg viewBox="0 0 180 180" aria-hidden="true">' +
              '<circle cx="90" cy="90" r="' + R + '" fill="none" stroke="var(--bg-2)" stroke-width="14"/>' +
              '<circle cx="90" cy="90" r="' + R + '" fill="none" stroke="' + b.col + '" stroke-width="14" stroke-linecap="round" stroke-dasharray="' + CIRC.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/>' +
            '</svg>' +
            '<div class="num"><b>' + bigNum + (isFinal ? '' : '%') + '</b><span>' + (isFinal ? '/ 100 marks' : correct + ' / ' + n + ' correct') + '</span></div>' +
          '</div>' +
          '<h1><span data-lang="en">' + esc(quiz.title.en) + '</span><span class="ar-title" data-lang="ar" lang="ar" dir="rtl">' + esc(quiz.title.ar) + '</span></h1>' +
          '<p class="band-msg"><span data-lang="en">' + esc(b.en) + '</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">' + esc(b.ar) + '</span></p>' +
          '<div class="score-stats">' +
            '<div class="s ok"><b>' + correct + '</b><span data-lang="en">Correct</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">صحيحة</span></div>' +
            '<div class="s no"><b>' + wrong + '</b><span data-lang="en">Incorrect</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">خاطئة</span></div>' +
            (isFinal ? '<div class="s"><b>' + pct + '%</b><span data-lang="en">Percentage</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">النسبة</span></div>' : '') +
          '</div>' +
          '<div class="score-actions">' +
            '<button class="btn btn-primary" data-go="' + againTarget + '"><span data-lang="en">Try again</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">أعد المحاولة</span></button>' +
            '<button class="btn btn-ghost" data-go="' + backTarget + '"><span data-lang="en">' + (isFinal ? "Home" : "Back to lesson") + '</span><span class="ar" data-lang="ar" lang="ar" dir="rtl">' + (isFinal ? "الرئيسية" : "عودة للدرس") + '</span></button>' +
          '</div>' +
        '</div>' +
        review +
      '</div>';

    app.innerHTML = html;
    window.scrollTo(0, 0);
    var dc = CONTENT.lessons.filter(function (l) { return state.done[l.id]; }).length;
    updateTopProgress(dc, CONTENT.lessons.length);
  }

  /* ============================================================
     Top progress bar
     ============================================================ */
  function updateTopProgress(done, total) {
    var bar = document.getElementById("tp-fill");
    var lbl = document.getElementById("tp-label");
    if (!bar) return;
    var pct = total ? Math.round(done / total * 100) : 0;
    bar.style.width = pct + "%";
    if (lbl) lbl.textContent = done + " / " + total;
  }

  /* ============================================================
     Particle motif (kinetic theory nod) — respects reduced motion
     ============================================================ */
  var particleRAF = null;
  function startParticles() {
    if (particleRAF) { cancelAnimationFrame(particleRAF); particleRAF = null; }
    var mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    var canvas = document.getElementById("particles");
    if (!canvas || mq.matches) return;
    var ctx = canvas.getContext("2d");
    var w, h, parts;
    function size() {
      var r = canvas.getBoundingClientRect();
      w = canvas.width = r.width; h = canvas.height = r.height;
    }
    size();
    var N = Math.max(18, Math.min(46, Math.round(w / 26)));
    parts = [];
    for (var i = 0; i < N; i++) {
      parts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5, r: 2 + Math.random() * 2.5 });
    }
    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        for (var j = i + 1; j < parts.length; j++) {
          var q = parts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.strokeStyle = "rgba(255,255,255," + (0.16 * (1 - d / 90)) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(255,255,255,.55)";
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      particleRAF = requestAnimationFrame(tick);
    }
    window.addEventListener("resize", size, { passive: true });
    tick();
  }

  /* ============================================================
     Router
     ============================================================ */
  function route() {
    var h = location.hash || "#home";
    if (particleRAF && h !== "#home") { cancelAnimationFrame(particleRAF); particleRAF = null; }

    if (h === "#home") return viewHome();
    if (h.indexOf("#lesson-") === 0) return viewLesson(h.slice(8));
    if (h.indexOf("#quiz-") === 0) return startLessonQuiz(h.slice(6));
    if (h === "#final") return startFinal();
    // fallback: correct the hash and render home now
    if (location.hash !== "#home") location.hash = "#home";
    return viewHome();
  }

  /* ---------- global click delegation for data-go ---------- */
  document.addEventListener("click", function (e) {
    var t = e.target.closest ? e.target.closest("[data-go]") : null;
    if (t) { e.preventDefault(); var dest = t.getAttribute("data-go"); if (location.hash === dest) route(); else location.hash = dest; }
  });

  /* ---------- language toggle ---------- */
  function bindLangToggle() {
    var wrap = document.getElementById("langtoggle");
    if (!wrap) return;
    wrap.addEventListener("click", function (e) {
      var b = e.target.closest("button[data-lang-set]");
      if (!b) return;
      state.lang = b.getAttribute("data-lang-set");
      saveState();
      applyLangClass();
      syncLangButtons();
    });
    syncLangButtons();
  }
  function syncLangButtons() {
    var btns = document.querySelectorAll("#langtoggle button[data-lang-set]");
    btns.forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang-set") === state.lang ? "true" : "false");
    });
  }

  /* ---------- reset ---------- */
  function bindReset() {
    var r = document.getElementById("resetBtn");
    if (!r) return;
    r.addEventListener("click", function () {
      state = { lang: state.lang, done: {}, best: {} };
      saveState();
      route();
      updateTopProgress(0, CONTENT.lessons.length);
    });
  }

  /* ---------- boot ---------- */
  function boot() {
    applyLangClass();
    bindLangToggle();
    bindReset();
    window.addEventListener("hashchange", route);
    route();
    var dc = CONTENT.lessons.filter(function (l) { return state.done[l.id]; }).length;
    updateTopProgress(dc, CONTENT.lessons.length);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
