/* ============================================================
   Grade 9 Science — Term 3 EOT Revision
   Bilingual content (English + Arabic). Source of truth only.
   Schema:
     section types: note | list | key | formula | mistake | tryit | diagram
     quiz item: { q:{en,ar}, options:[{en,ar}...], correct:Number, explain:{en,ar}, diagram?:id }
   ============================================================ */

const CONTENT = {
  meta: {
    grade: 9,
    term: 3,
    subject: { en: "Science / Inspire", ar: "العلوم / إنسباير" },
    exam: {
      type: { en: "MCQ only", ar: "اختيار من متعدد فقط" },
      count: 25,
      marksEach: 4,
      total: 100,
      duration: 120,
      calculator: true,
      platform: "SwiftAssess"
    }
  },

  lessons: [
    /* ============== LESSON 1 ============== */
    {
      id: "l1",
      num: 1,
      title: { en: "Kinetic Theory and States of Matter", ar: "النظرية الحركية وحالات المادة" },
      outcomes: {
        en: [
          "Describe the kinetic theory of particles.",
          "Use kinetic molecular theory to explain particle behaviour in different states.",
          "Compare solids, liquids, and gases by shape, volume, particle distance, motion, and forces."
        ],
        ar: [
          "وصف النظرية الحركية للجسيمات.",
          "استخدام النظرية الحركية الجزيئية لتفسير سلوك الجسيمات في الحالات المختلفة.",
          "مقارنة المواد الصلبة والسائلة والغازية من حيث الشكل والحجم والمسافة بين الجسيمات والحركة والقوى."
        ]
      },
      sections: [
        { type: "note",
          heading: { en: "Kinetic theory", ar: "النظرية الحركية" },
          body: {
            en: "Kinetic theory explains the behaviour of matter by describing how particles move. Matter is made of tiny particles such as atoms, molecules, or ions, and these particles are always moving. Their motion explains the properties of solids, liquids, and gases.",
            ar: "تفسّر النظرية الحركية سلوك المادة من خلال حركة الجسيمات. تتكون المادة من جسيمات صغيرة مثل الذرات أو الجزيئات أو الأيونات، وهذه الجسيمات في حركة مستمرة. وتساعد حركتها على تفسير خصائص المواد الصلبة والسائلة والغازية."
          }
        },
        { type: "list",
          heading: { en: "Main assumptions", ar: "أهم الأفكار" },
          items: [
            { en: "Matter is made of tiny particles.", ar: "المادة تتكون من جسيمات صغيرة." },
            { en: "Particles are in constant random motion.", ar: "الجسيمات في حركة عشوائية مستمرة." },
            { en: "Particles collide with each other and with the container walls.", ar: "الجسيمات تصطدم ببعضها وبجدران الوعاء." },
            { en: "Energy can be transferred during collisions.", ar: "يمكن أن تنتقل الطاقة أثناء التصادمات." }
          ]
        },
        { type: "diagram", id: "states",
          caption: { en: "Particle arrangement in solids, liquids, and gases.", ar: "ترتيب الجسيمات في الحالة الصلبة والسائلة والغازية." } },
        { type: "note",
          heading: { en: "Gas state", ar: "الحالة الغازية" },
          body: {
            en: "Gas particles are very far apart and move quickly and randomly in all directions. A gas has no fixed shape and no fixed volume — it spreads out to fill its container. The attractive forces between gas particles are very weak.",
            ar: "جسيمات الغاز متباعدة جدًا وتتحرك بسرعة وبشكل عشوائي في كل الاتجاهات. الغاز ليس له شكل ثابت ولا حجم ثابت، بل ينتشر ليملأ الوعاء. وقوى التجاذب بين جسيمات الغاز ضعيفة جدًا."
          }
        },
        { type: "note",
          heading: { en: "Liquid state", ar: "الحالة السائلة" },
          body: {
            en: "Liquid particles are close together but can slide past each other. A liquid has a fixed volume but no fixed shape, so it takes the shape of its container. Its attractive forces are stronger than a gas but weaker than a solid.",
            ar: "جسيمات السائل قريبة من بعضها لكنها تستطيع الانزلاق فوق بعضها. للسائل حجم ثابت لكن ليس له شكل ثابت، فيأخذ شكل الوعاء. وقوى التجاذب فيه أقوى من الغاز وأضعف من الصلب."
          }
        },
        { type: "note",
          heading: { en: "Solid state", ar: "الحالة الصلبة" },
          body: {
            en: "Solid particles are packed closely together in fixed positions. They vibrate in place but do not move freely. A solid has a fixed shape and fixed volume, and its attractive forces are strong.",
            ar: "جسيمات الصلب متراصة وقريبة جدًا في مواضع ثابتة. تهتز في مكانها ولا تتحرك بحرية. للصلب شكل ثابت وحجم ثابت، وقوى التجاذب فيه قوية."
          }
        },
        { type: "diagram", id: "tempmotion",
          caption: { en: "Higher temperature → faster particles → higher average kinetic energy.", ar: "درجة حرارة أعلى ← جسيمات أسرع ← متوسط طاقة حركية أعلى." } },
        { type: "note",
          heading: { en: "Thermal energy and temperature", ar: "الطاقة الحرارية ودرجة الحرارة" },
          body: {
            en: "Thermal energy is the total energy of the particles in a substance. Temperature measures the average kinetic energy of the particles. When temperature rises, particles move faster on average; when it falls, they move slower.",
            ar: "الطاقة الحرارية هي مجموع طاقة جسيمات المادة. أما درجة الحرارة فتقيس متوسط الطاقة الحركية للجسيمات. عند ارتفاع درجة الحرارة تتحرك الجسيمات أسرع في المتوسط، وعند انخفاضها تتحرك أبطأ."
          }
        },
        { type: "key",
          heading: { en: "Key idea", ar: "فكرة أساسية" },
          body: {
            en: "Solid → fixed shape & volume. Liquid → fixed volume, takes container shape. Gas → no fixed shape or volume. Particles get farther apart and move faster from solid → liquid → gas.",
            ar: "الصلب ← شكل وحجم ثابتان. السائل ← حجم ثابت ويأخذ شكل الوعاء. الغاز ← لا شكل ولا حجم ثابت. تتباعد الجسيمات وتتحرك أسرع من الصلب ← السائل ← الغاز."
          }
        },
        { type: "mistake",
          heading: { en: "Common mistake", ar: "خطأ شائع" },
          body: {
            en: "Temperature is NOT the total energy — that is thermal energy. Temperature is the AVERAGE kinetic energy of the particles.",
            ar: "درجة الحرارة ليست الطاقة الكلية — تلك هي الطاقة الحرارية. درجة الحرارة هي متوسط الطاقة الحركية للجسيمات."
          }
        }
      ],
      quiz: [
        {
          q: { en: "Which state of matter has a fixed volume but takes the shape of its container?", ar: "أي حالة للمادة لها حجم ثابت لكنها تأخذ شكل الوعاء؟" },
          options: [ { en: "Solid", ar: "صلب" }, { en: "Liquid", ar: "سائل" }, { en: "Gas", ar: "غاز" }, { en: "Plasma", ar: "بلازما" } ],
          correct: 1,
          explain: { en: "A liquid keeps a fixed volume because its particles stay close, but it has no fixed shape, so it flows to take the container's shape.", ar: "للسائل حجم ثابت لأن جسيماته تبقى متقاربة، لكنه بلا شكل ثابت فيتدفق ليأخذ شكل الوعاء." }
        },
        {
          q: { en: "Why does a gas spread out to fill its container?", ar: "لماذا ينتشر الغاز ليملأ الوعاء بأكمله؟" },
          options: [
            { en: "Its particles are far apart with very weak attractive forces", ar: "جسيماته متباعدة وقوى التجاذب بينها ضعيفة جدًا" },
            { en: "Its particles are locked in fixed positions", ar: "جسيماته مثبتة في مواضع ثابتة" },
            { en: "Its particles stop moving", ar: "جسيماته تتوقف عن الحركة" },
            { en: "Its particles join together", ar: "جسيماته تتحد معًا" }
          ],
          correct: 0,
          explain: { en: "Gas particles are far apart, move fast and randomly, and have very weak forces between them, so they spread to fill any space available.", ar: "جسيمات الغاز متباعدة وتتحرك بسرعة وعشوائية وقوى التجاذب بينها ضعيفة جدًا، لذلك تنتشر لتملأ أي حيز متاح." }
        },
        {
          q: { en: "Look at the particle diagram. Which box shows a solid?", ar: "انظر إلى الرسم الجسيمي. أي صندوق يمثل مادة صلبة؟" },
          diagram: "states",
          options: [ { en: "The tightly packed, ordered box", ar: "الصندوق المتراص والمرتب" }, { en: "The loosely packed box", ar: "الصندوق المتقارب قليلًا" }, { en: "The widely spaced box", ar: "الصندوق واسع التباعد" }, { en: "None of them", ar: "لا أحد منها" } ],
          correct: 0,
          explain: { en: "Solid particles are packed closely in fixed, ordered positions — the most tightly arranged box.", ar: "جسيمات الصلب متراصة في مواضع ثابتة ومرتبة — وهو الصندوق الأكثر تراصًا." }
        },
        {
          q: { en: "When the temperature of a substance increases, the average kinetic energy of its particles…", ar: "عند ارتفاع درجة حرارة مادة، فإن متوسط الطاقة الحركية لجسيماتها…" },
          options: [ { en: "increases", ar: "يزداد" }, { en: "decreases", ar: "يقل" }, { en: "stays the same", ar: "يبقى ثابتًا" }, { en: "becomes zero", ar: "يصبح صفرًا" } ],
          correct: 0,
          explain: { en: "Temperature measures average kinetic energy. Higher temperature means particles move faster, so average kinetic energy increases.", ar: "درجة الحرارة تقيس متوسط الطاقة الحركية. ارتفاع الدرجة يعني حركة أسرع، فيزداد متوسط الطاقة الحركية." }
        },
        {
          q: { en: "Which statement about kinetic theory is correct?", ar: "أي عبارة عن النظرية الحركية صحيحة؟" },
          options: [
            { en: "Particles are always at rest", ar: "الجسيمات ساكنة دائمًا" },
            { en: "Particles are in constant random motion and can transfer energy when they collide", ar: "الجسيمات في حركة عشوائية مستمرة ويمكنها نقل الطاقة عند التصادم" },
            { en: "Matter is continuous with no particles", ar: "المادة متصلة وليست مكونة من جسيمات" },
            { en: "Only gases are made of particles", ar: "الغازات فقط مكونة من جسيمات" }
          ],
          correct: 1,
          explain: { en: "Kinetic theory states matter is made of tiny particles in constant random motion that collide and can transfer energy.", ar: "تنص النظرية الحركية على أن المادة مكونة من جسيمات صغيرة في حركة عشوائية مستمرة تتصادم ويمكنها نقل الطاقة." }
        },
        {
          q: { en: "Compared with a gas, the attractive forces between liquid particles are…", ar: "مقارنة بالغاز، فإن قوى التجاذب بين جسيمات السائل…" },
          options: [ { en: "weaker", ar: "أضعف" }, { en: "stronger", ar: "أقوى" }, { en: "exactly equal", ar: "متساوية تمامًا" }, { en: "zero", ar: "معدومة" } ],
          correct: 1,
          explain: { en: "Liquid forces are stronger than in a gas (particles stay close) but weaker than in a solid (particles can still slide).", ar: "قوى السائل أقوى من الغاز (الجسيمات تبقى متقاربة) لكنها أضعف من الصلب (تستطيع الجسيمات الانزلاق)." }
        }
      ]
    },

    /* ============== LESSON 2 ============== */
    {
      id: "l2",
      num: 2,
      title: { en: "Changes of State and Heating/Cooling Curves", ar: "تغيّرات الحالة ومنحنيات التسخين والتبريد" },
      outcomes: {
        en: [
          "Interpret heating and cooling curves and their phases.",
          "Use particle behaviour to explain melting, freezing, vaporization, evaporation, boiling, condensation, and sublimation."
        ],
        ar: [
          "تفسير منحنيات التسخين والتبريد ومراحلها.",
          "استخدام سلوك الجسيمات لتفسير الانصهار والتجمد والتبخر والغليان والتكاثف والتسامي."
        ]
      },
      sections: [
        { type: "note",
          heading: { en: "Changes of state", ar: "تغيّرات الحالة" },
          body: {
            en: "A change of state happens when matter changes from one physical state to another. The arrangement and motion of the particles change, but the type of particle does not change — so it is usually a physical change.",
            ar: "يحدث تغير الحالة عندما تتحول المادة من حالة فيزيائية إلى أخرى. يتغير ترتيب الجسيمات وحركتها، لكن نوع الجسيمات لا يتغير، لذلك يكون غالبًا تغيرًا فيزيائيًا."
          }
        },
        { type: "diagram", id: "phasecycle",
          caption: { en: "Phase changes between solid, liquid, and gas.", ar: "تغيّرات الحالة بين الصلب والسائل والغاز." } },
        { type: "list",
          heading: { en: "The six changes of state", ar: "تغيّرات الحالة الست" },
          items: [
            { en: "Melting: solid → liquid (energy absorbed).", ar: "الانصهار: صلب ← سائل (تُمتص طاقة)." },
            { en: "Freezing: liquid → solid (energy released).", ar: "التجمد: سائل ← صلب (تنطلق طاقة)." },
            { en: "Vaporization: liquid → gas (energy absorbed), by evaporation or boiling.", ar: "التحول إلى غاز: سائل ← غاز (تُمتص طاقة)، بالتبخر أو الغليان." },
            { en: "Condensation: gas → liquid (energy released).", ar: "التكاثف: غاز ← سائل (تنطلق طاقة)." },
            { en: "Sublimation: solid → gas directly, e.g. dry ice.", ar: "التسامي: صلب ← غاز مباشرة، مثل الثلج الجاف." }
          ]
        },
        { type: "note",
          heading: { en: "Evaporation vs boiling", ar: "التبخر السطحي والغليان" },
          body: {
            en: "Evaporation happens only at the surface of a liquid and can occur below the boiling point, as the fastest surface particles escape. Boiling happens throughout the whole liquid when the vapour pressure equals the external pressure. Water boils at about 100°C at normal pressure.",
            ar: "يحدث التبخر السطحي عند سطح السائل فقط، وقد يحدث عند درجات أقل من الغليان عندما تهرب أسرع الجسيمات السطحية. أما الغليان فيحدث في جميع أجزاء السائل عندما يتساوى ضغط البخار مع الضغط الخارجي. يغلي الماء عند حوالي 100°C عند الضغط العادي."
          }
        },
        { type: "diagram", id: "evapboil",
          caption: { en: "Evaporation at the surface vs boiling throughout the liquid.", ar: "التبخر عند السطح مقابل الغليان في جميع أجزاء السائل." } },
        { type: "diagram", id: "heatcurve",
          caption: { en: "Heating curve of water with melting and boiling plateaus.", ar: "منحنى تسخين الماء مع ثبات درجة الحرارة عند الانصهار والغليان." } },
        { type: "note",
          heading: { en: "Reading the heating curve", ar: "قراءة منحنى التسخين" },
          body: {
            en: "A sloped line means temperature is rising and particles gain kinetic energy. A flat plateau means temperature stays constant while the state changes. For water, melting is at 0°C and boiling is at 100°C. During a plateau, energy is still added but it is used to overcome attractive forces, not to raise temperature.",
            ar: "الخط المائل يعني ارتفاع درجة الحرارة واكتساب الجسيمات طاقة حركية. والخط الأفقي يعني ثبات درجة الحرارة أثناء تغيّر الحالة. في الماء، الانصهار عند 0°C والغليان عند 100°C. أثناء الجزء الأفقي تُضاف الطاقة لكنها تُستخدم للتغلب على قوى التجاذب لا لرفع درجة الحرارة."
          }
        },
        { type: "diagram", id: "coolcurve",
          caption: { en: "Cooling curve of water with condensation and freezing plateaus.", ar: "منحنى تبريد الماء مع ثبات الحرارة عند التكاثف والتجمد." } },
        { type: "key",
          heading: { en: "Key idea", ar: "فكرة أساسية" },
          body: {
            en: "Flat parts of a heating/cooling curve = a change of state. Temperature does not change there because energy goes into breaking or forming attractive forces.",
            ar: "الأجزاء الأفقية في منحنى التسخين/التبريد = تغيّر في الحالة. لا تتغير درجة الحرارة هناك لأن الطاقة تُستخدم لكسر قوى التجاذب أو تكوينها."
          }
        },
        { type: "mistake",
          heading: { en: "Common mistake", ar: "خطأ شائع" },
          body: {
            en: "During melting or boiling, heat is STILL being added even though the temperature stays the same. The energy changes the state, it does not raise the temperature.",
            ar: "أثناء الانصهار أو الغليان، لا تزال الحرارة تُضاف رغم ثبات درجة الحرارة. الطاقة تغيّر الحالة ولا ترفع درجة الحرارة."
          }
        }
      ],
      quiz: [
        {
          q: { en: "What is the change of state from a gas directly to a solid called? (And from solid directly to gas?)", ar: "ما اسم تحوّل المادة من صلب مباشرة إلى غاز؟" },
          options: [ { en: "Sublimation", ar: "التسامي" }, { en: "Condensation", ar: "التكاثف" }, { en: "Melting", ar: "الانصهار" }, { en: "Freezing", ar: "التجمد" } ],
          correct: 0,
          explain: { en: "Sublimation is solid → gas without passing through the liquid state. Dry ice is a classic example.", ar: "التسامي هو تحوّل الصلب ← غاز دون المرور بالحالة السائلة. الثلج الجاف مثال مشهور." }
        },
        {
          q: { en: "On a heating curve, what does a flat (horizontal) section show?", ar: "في منحنى التسخين، ماذا يدل عليه الجزء الأفقي؟" },
          diagram: "heatcurve",
          options: [
            { en: "Temperature rising quickly", ar: "ارتفاع سريع في درجة الحرارة" },
            { en: "A change of state at constant temperature", ar: "تغيّر في الحالة عند درجة حرارة ثابتة" },
            { en: "No energy being added", ar: "عدم إضافة أي طاقة" },
            { en: "The substance cooling down", ar: "تبريد المادة" }
          ],
          correct: 1,
          explain: { en: "A plateau means the state is changing. Energy is still added but is used to overcome attractive forces, so temperature stays constant.", ar: "الجزء الأفقي يعني تغيّر الحالة. الطاقة لا تزال تُضاف لكنها تُستخدم للتغلب على قوى التجاذب، فتبقى درجة الحرارة ثابتة." }
        },
        {
          q: { en: "Which process releases energy?", ar: "أي عملية تنطلق فيها طاقة؟" },
          options: [ { en: "Melting", ar: "الانصهار" }, { en: "Boiling", ar: "الغليان" }, { en: "Freezing", ar: "التجمد" }, { en: "Sublimation", ar: "التسامي" } ],
          correct: 2,
          explain: { en: "Freezing (and condensation) release energy as particles slow down and form stronger attractions. Melting, boiling, and sublimation absorb energy.", ar: "التجمد (والتكاثف) تنطلق فيهما طاقة عندما تبطؤ الجسيمات وتكوّن قوى تجاذب أقوى. أما الانصهار والغليان والتسامي فتُمتص فيها الطاقة." }
        },
        {
          q: { en: "How is evaporation different from boiling?", ar: "ما الفرق بين التبخر السطحي والغليان؟" },
          diagram: "evapboil",
          options: [
            { en: "Evaporation happens only at the surface and can occur below the boiling point", ar: "التبخر يحدث عند السطح فقط وقد يحدث قبل درجة الغليان" },
            { en: "Evaporation happens throughout the liquid", ar: "التبخر يحدث في جميع أجزاء السائل" },
            { en: "Boiling happens only at the surface", ar: "الغليان يحدث عند السطح فقط" },
            { en: "They are exactly the same", ar: "هما متماثلان تمامًا" }
          ],
          correct: 0,
          explain: { en: "Evaporation occurs only at the surface and can happen below the boiling point. Boiling occurs throughout the liquid at the boiling point.", ar: "يحدث التبخر عند السطح فقط وقد يحدث قبل درجة الغليان، بينما يحدث الغليان في جميع أجزاء السائل عند درجة الغليان." }
        },
        {
          q: { en: "During a change of state, what stays the same?", ar: "أثناء تغيّر الحالة، ما الذي يبقى دون تغيير؟" },
          options: [
            { en: "The type of particles (composition)", ar: "نوع الجسيمات (التركيب)" },
            { en: "The arrangement of particles", ar: "ترتيب الجسيمات" },
            { en: "The motion of particles", ar: "حركة الجسيمات" },
            { en: "The state of matter", ar: "حالة المادة" }
          ],
          correct: 0,
          explain: { en: "A change of state is physical: arrangement and motion change, but the particles themselves stay the same, so composition is unchanged.", ar: "تغيّر الحالة فيزيائي: يتغير الترتيب والحركة، لكن الجسيمات نفسها تبقى كما هي، فلا يتغير التركيب." }
        },
        {
          q: { en: "At normal pressure, at what temperature does water boil?", ar: "عند الضغط العادي، عند أي درجة حرارة يغلي الماء؟" },
          options: [ { en: "0°C", ar: "0°C" }, { en: "50°C", ar: "50°C" }, { en: "100°C", ar: "100°C" }, { en: "212°C", ar: "212°C" } ],
          correct: 2,
          explain: { en: "Water melts at 0°C and boils at about 100°C at normal pressure.", ar: "ينصهر الماء عند 0°C ويغلي عند حوالي 100°C عند الضغط العادي." }
        },
        {
          q: { en: "On a cooling curve, the flat plateau at 0°C represents…", ar: "في منحنى التبريد، الجزء الأفقي عند 0°C يمثّل…" },
          diagram: "coolcurve",
          options: [ { en: "Freezing", ar: "التجمد" }, { en: "Melting", ar: "الانصهار" }, { en: "Boiling", ar: "الغليان" }, { en: "Evaporation", ar: "التبخر" } ],
          correct: 0,
          explain: { en: "When cooling, water turns to ice at 0°C — that is freezing, shown as a flat plateau while heat is removed.", ar: "أثناء التبريد يتحول الماء إلى ثلج عند 0°C، وهذا هو التجمد، ويظهر كخط أفقي أثناء إزالة الحرارة." }
        }
      ]
    }
  ],

  finalQuiz: [] // populated in content-final.js
};

/* ============== LESSON 3 ============== */
CONTENT.lessons.push({
  id: "l3",
  num: 3,
  title: { en: "Fluids, Buoyancy, Pressure, Pascal, and Bernoulli", ar: "الموائع والطفو والضغط ومبدأ باسكال وبرنولي" },
  outcomes: {
    en: [
      "Predict whether an object will float or sink in a fluid.",
      "Calculate pressure in pascals.",
      "Identify applications of Archimedes', Pascal's, and Bernoulli's principles.",
      "Describe Bernoulli's principle."
    ],
    ar: [
      "توقع طفو الجسم أو غوصه في مائع.",
      "حساب الضغط بوحدة الباسكال.",
      "تحديد تطبيقات مبادئ أرخميدس وباسكال وبرنولي.",
      "وصف مبدأ برنولي."
    ]
  },
  sections: [
    { type: "note",
      heading: { en: "Fluids and buoyancy", ar: "الموائع والطفو" },
      body: {
        en: "A fluid is a substance that can flow — both liquids and gases are fluids. Buoyancy is the upward force a fluid exerts on an object placed in it, called the buoyant force. An object floats when the buoyant force is equal to or greater than its weight, and sinks when its weight is greater than the buoyant force.",
        ar: "المائع مادة يمكن أن تتدفق — والسوائل والغازات موائع. الطفو هو القوة التي يؤثر بها المائع إلى أعلى على جسم موضوع فيه، وتسمى قوة الطفو. يطفو الجسم عندما تكون قوة الطفو مساوية لوزنه أو أكبر، ويغوص عندما يكون وزنه أكبر من قوة الطفو."
      }
    },
    { type: "diagram", id: "buoyancy",
      caption: { en: "Buoyant force up vs weight down; floating vs sinking.", ar: "قوة الطفو لأعلى مقابل الوزن لأسفل؛ الطفو مقابل الغوص." } },
    { type: "note",
      heading: { en: "Archimedes' principle & density", ar: "مبدأ أرخميدس والكثافة" },
      body: {
        en: "Archimedes' principle states that the buoyant force on an object equals the weight of the fluid it displaces. Density also predicts floating: if an object is less dense than the fluid it floats; if it is denser it sinks. A solid steel block sinks, but a steel ship floats because its hull holds air, lowering its overall density below water.",
        ar: "ينص مبدأ أرخميدس على أن قوة الطفو في جسم تساوي وزن المائع الذي أزاحه. كما تتوقع الكثافة الطفو: إذا كانت كثافة الجسم أقل من المائع طفا، وإذا كانت أكبر غاص. تغوص قطعة الفولاذ الصلبة، لكن السفينة الفولاذية تطفو لأن هيكلها يحتوي على هواء فيقل متوسط كثافتها عن الماء."
      }
    },
    { type: "diagram", id: "floatsink",
      caption: { en: "Steel block sinks; steel ship floats because of trapped air.", ar: "قطعة الفولاذ تغوص؛ السفينة الفولاذية تطفو بسبب الهواء المحبوس." } },
    { type: "formula",
      heading: { en: "Pressure", ar: "الضغط" },
      body: {
        en: "Pressure is force per unit area.\nP = F / A\nP = pressure in pascals (Pa), F = force in newtons (N), A = area in square metres (m²).\nThe same force over a smaller area gives a higher pressure; over a larger area, a lower pressure.",
        ar: "الضغط هو القوة على وحدة المساحة.\nP = F / A\nP الضغط بالباسكال (Pa)، F القوة بالنيوتن (N)، A المساحة بالمتر المربع (m²).\nالقوة نفسها على مساحة أصغر تعطي ضغطًا أكبر، وعلى مساحة أكبر ضغطًا أقل."
      }
    },
    { type: "diagram", id: "pressure",
      caption: { en: "Same force, smaller area → higher pressure.", ar: "القوة نفسها، مساحة أصغر ← ضغط أعلى." } },
    { type: "formula",
      heading: { en: "Pascal's principle", ar: "مبدأ باسكال" },
      body: {
        en: "Pascal's principle: pressure applied to a confined fluid is transmitted equally throughout the fluid. It is used in hydraulic systems such as hydraulic lifts.\nF1 / A1 = F2 / A2\nA small force on a small piston can lift a heavy load on a larger piston.",
        ar: "مبدأ باسكال: الضغط المؤثر في مائع محصور ينتقل بالتساوي في كل أجزائه. يُستخدم في الأنظمة الهيدروليكية مثل الرافعات الهيدروليكية.\nF1 / A1 = F2 / A2\nيمكن لقوة صغيرة على مكبس صغير أن ترفع حملًا ثقيلًا على مكبس أكبر."
      }
    },
    { type: "diagram", id: "pascal",
      caption: { en: "Hydraulic lift: a small input force lifts a large load.", ar: "الرافعة الهيدروليكية: قوة دخل صغيرة ترفع حملًا كبيرًا." } },
    { type: "note",
      heading: { en: "Bernoulli's principle", ar: "مبدأ برنولي" },
      body: {
        en: "Bernoulli's principle states that as the speed of a fluid increases, the pressure it exerts decreases. Examples: a hose sprayer where fast-moving water creates lower pressure and pulls liquid into the stream; covering part of a hose opening makes the water move faster.",
        ar: "ينص مبدأ برنولي على أنه كلما زادت سرعة المائع قلّ الضغط الذي يؤثر به. أمثلة: بخاخ الخرطوم حيث يسبب الماء السريع ضغطًا أقل فيسحب السائل إلى مجرى الماء؛ وتغطية جزء من فتحة الخرطوم تجعل الماء يتحرك أسرع."
      }
    },
    { type: "diagram", id: "bernoulli",
      caption: { en: "Faster fluid → lower pressure pulls liquid into the stream.", ar: "مائع أسرع ← ضغط أقل يسحب السائل إلى المجرى." } },
    { type: "tryit",
      heading: { en: "Try it", ar: "جرّب بنفسك" },
      body: {
        en: "A force of 50 N is applied to an area of 2 m². Find the pressure.\nP = F / A = 50 / 2 = 25 Pa.",
        ar: "أثرت قوة 50 N على مساحة 2 m². أوجد الضغط.\nP = F / A = 50 ÷ 2 = 25 Pa."
      }
    },
    { type: "mistake",
      heading: { en: "Common mistake", ar: "خطأ شائع" },
      body: {
        en: "Faster fluid does NOT mean higher pressure. Bernoulli's principle says faster fluid means LOWER pressure.",
        ar: "المائع الأسرع لا يعني ضغطًا أعلى. ينص مبدأ برنولي على أن المائع الأسرع يعني ضغطًا أقل."
      }
    }
  ],
  quiz: [
    {
      q: { en: "An object will float in a fluid when…", ar: "يطفو الجسم في مائع عندما…" },
      options: [
        { en: "the buoyant force is equal to or greater than its weight", ar: "تكون قوة الطفو مساوية لوزنه أو أكبر منه" },
        { en: "its weight is greater than the buoyant force", ar: "يكون وزنه أكبر من قوة الطفو" },
        { en: "it has no weight", ar: "لا يكون له وزن" },
        { en: "the fluid stops moving", ar: "يتوقف المائع عن الحركة" }
      ],
      correct: 0,
      explain: { en: "Floating occurs when the upward buoyant force balances or exceeds the downward weight.", ar: "يحدث الطفو عندما توازن قوة الطفو لأعلى الوزن لأسفل أو تتجاوزه." }
    },
    {
      q: { en: "Archimedes' principle states the buoyant force equals…", ar: "ينص مبدأ أرخميدس على أن قوة الطفو تساوي…" },
      diagram: "buoyancy",
      options: [
        { en: "the weight of the fluid displaced by the object", ar: "وزن المائع الذي أزاحه الجسم" },
        { en: "the weight of the object", ar: "وزن الجسم" },
        { en: "the volume of the object", ar: "حجم الجسم" },
        { en: "the density of the fluid", ar: "كثافة المائع" }
      ],
      correct: 0,
      explain: { en: "The buoyant force on an object equals the weight of the fluid that the object pushes out of the way (displaces).", ar: "قوة الطفو في جسم تساوي وزن المائع الذي يزيحه الجسم." }
    },
    {
      q: { en: "A force of 80 N acts on an area of 4 m². What is the pressure?", ar: "تؤثر قوة 80 N على مساحة 4 m². ما الضغط؟" },
      diagram: "pressure",
      options: [ { en: "20 Pa", ar: "20 Pa" }, { en: "320 Pa", ar: "320 Pa" }, { en: "84 Pa", ar: "84 Pa" }, { en: "0.05 Pa", ar: "0.05 Pa" } ],
      correct: 0,
      explain: { en: "P = F / A = 80 / 4 = 20 Pa.", ar: "P = F ÷ A = 80 ÷ 4 = 20 Pa." }
    },
    {
      q: { en: "In a hydraulic lift, a small force on a small piston can lift a heavy load because…", ar: "في الرافعة الهيدروليكية، يمكن لقوة صغيرة على مكبس صغير أن ترفع حملًا ثقيلًا لأن…" },
      diagram: "pascal",
      options: [
        { en: "pressure is transmitted equally through the fluid (Pascal's principle)", ar: "الضغط ينتقل بالتساوي خلال المائع (مبدأ باسكال)" },
        { en: "the fluid disappears", ar: "المائع يختفي" },
        { en: "the load loses its weight", ar: "الحمل يفقد وزنه" },
        { en: "the fluid speeds up", ar: "يتسارع المائع" }
      ],
      correct: 0,
      explain: { en: "Pascal's principle: pressure applied to a confined fluid is transmitted equally, so a large-area piston produces a large output force.", ar: "مبدأ باسكال: الضغط المؤثر في مائع محصور ينتقل بالتساوي، فيعطي المكبس ذو المساحة الكبيرة قوة خرج كبيرة." }
    },
    {
      q: { en: "According to Bernoulli's principle, as a fluid moves faster, its pressure…", ar: "وفق مبدأ برنولي، كلما تحرك المائع أسرع فإن ضغطه…" },
      diagram: "bernoulli",
      options: [ { en: "decreases", ar: "يقل" }, { en: "increases", ar: "يزداد" }, { en: "stays the same", ar: "يبقى ثابتًا" }, { en: "becomes infinite", ar: "يصبح لا نهائيًا" } ],
      correct: 0,
      explain: { en: "Faster fluid → lower pressure. This is why a hose sprayer pulls liquid into a fast stream.", ar: "مائع أسرع ← ضغط أقل. لذلك يسحب بخاخ الخرطوم السائل إلى مجرى الماء السريع." }
    },
    {
      q: { en: "A solid steel block sinks in water, but a steel ship floats. Why?", ar: "تغوص قطعة فولاذ صلبة في الماء، لكن السفينة الفولاذية تطفو. لماذا؟" },
      diagram: "floatsink",
      options: [
        { en: "The ship's shape holds air, lowering its overall density below water", ar: "شكل السفينة يحتوي هواءً فيقل متوسط كثافتها عن الماء" },
        { en: "Steel becomes lighter in a ship", ar: "يصبح الفولاذ أخف في السفينة" },
        { en: "Water pushes harder on bigger objects only", ar: "الماء يدفع الأجسام الكبيرة فقط بقوة أكبر" },
        { en: "Ships have no weight", ar: "السفن بلا وزن" }
      ],
      correct: 0,
      explain: { en: "The hull traps air so the ship's average density is less than water, allowing it to float even though steel alone is denser than water.", ar: "يحبس الهيكل الهواء فيصبح متوسط كثافة السفينة أقل من الماء، فتطفو رغم أن الفولاذ وحده أكثف من الماء." }
    },
    {
      q: { en: "If the same force is applied over a smaller area, the pressure will…", ar: "إذا أثرت القوة نفسها على مساحة أصغر، فإن الضغط…" },
      options: [ { en: "increase", ar: "يزداد" }, { en: "decrease", ar: "يقل" }, { en: "stay the same", ar: "يبقى ثابتًا" }, { en: "become zero", ar: "يصبح صفرًا" } ],
      correct: 0,
      explain: { en: "Because P = F / A, a smaller area with the same force gives a larger pressure.", ar: "لأن P = F ÷ A، فإن مساحة أصغر مع القوة نفسها تعطي ضغطًا أكبر." }
    }
  ]
});

/* ============== LESSON 4 ============== */
CONTENT.lessons.push({
  id: "l4",
  num: 4,
  title: { en: "Properties of Matter and Chemical Changes", ar: "خصائص المادة والتغيّرات الكيميائية" },
  outcomes: {
    en: [
      "Differentiate between extensive and intensive properties using examples.",
      "Define chemical property and list examples.",
      "Define chemical change and list examples.",
      "List evidence (indicators) of a chemical change."
    ],
    ar: [
      "التمييز بين الخصائص الممتدة والمكثفة بأمثلة.",
      "تعريف الخاصية الكيميائية مع ذكر أمثلة.",
      "تعريف التغير الكيميائي مع ذكر أمثلة.",
      "ذكر دلائل التغير الكيميائي."
    ]
  },
  sections: [
    { type: "note",
      heading: { en: "Physical properties", ar: "الخصائص الفيزيائية" },
      body: {
        en: "A physical property can be observed or measured without changing the substance into a different substance. Examples: colour, state at 25°C, melting point, boiling point, density, malleability, ductility, and conductivity.",
        ar: "الخاصية الفيزيائية يمكن ملاحظتها أو قياسها دون تحويل المادة إلى مادة مختلفة. أمثلة: اللون، الحالة عند 25°C، درجة الانصهار، درجة الغليان، الكثافة، قابلية الطرق، قابلية السحب، التوصيل."
      }
    },
    { type: "diagram", id: "extint",
      caption: { en: "Extensive properties depend on amount; intensive properties do not.", ar: "الخصائص الممتدة تعتمد على الكمية؛ والمكثفة لا تعتمد عليها." } },
    { type: "note",
      heading: { en: "Extensive vs intensive", ar: "الممتدة مقابل المكثفة" },
      body: {
        en: "Extensive properties depend on the amount of substance — for example mass, volume, and length. Intensive properties do not depend on the amount — for example density, melting point, boiling point, colour, and conductivity. A small and a large sample of the same pure substance have the same intensive properties.",
        ar: "الخصائص الممتدة تعتمد على كمية المادة — مثل الكتلة والحجم والطول. أما الخصائص المكثفة فلا تعتمد على الكمية — مثل الكثافة ودرجة الانصهار ودرجة الغليان واللون والتوصيل. والعينة الصغيرة والكبيرة من المادة النقية نفسها لهما الخصائص المكثفة ذاتها."
      }
    },
    { type: "note",
      heading: { en: "Chemical properties", ar: "الخصائص الكيميائية" },
      body: {
        en: "A chemical property describes a substance's ability to change into a new substance. Examples: ability to rust, to burn, to react with oxygen, to react with acid, or to tarnish/corrode. For example, copper can form a green coating when it reacts with substances in the air — that is a chemical property.",
        ar: "الخاصية الكيميائية تصف قدرة المادة على التحول إلى مادة جديدة. أمثلة: القدرة على الصدأ، الاحتراق، التفاعل مع الأكسجين، التفاعل مع الحمض، أو التآكل. مثلًا، قد يكوّن النحاس طبقة خضراء عند تفاعله مع مواد في الهواء — وهذه خاصية كيميائية."
      }
    },
    { type: "diagram", id: "physchem",
      caption: { en: "Physical change: same substance. Chemical change: new substance forms.", ar: "التغير الفيزيائي: المادة نفسها. التغير الكيميائي: تتكون مادة جديدة." } },
    { type: "note",
      heading: { en: "Physical vs chemical change", ar: "التغير الفيزيائي والكيميائي" },
      body: {
        en: "A physical change alters the form, shape, size, or state but not the composition — for example cutting paper, melting ice, freezing water, crushing a can, or dissolving salt. A chemical change produces one or more new substances with new properties (also called a chemical reaction) — for example rusting iron, burning fuel, rotting food, cooking an egg, or tarnishing silver.",
        ar: "التغير الفيزيائي يغيّر الشكل أو الحجم أو الحالة دون تغيير التركيب — مثل قص الورق، انصهار الثلج، تجمد الماء، سحق علبة، أو ذوبان الملح. أما التغير الكيميائي فينتج مادة جديدة أو أكثر بخصائص جديدة (ويسمى تفاعلًا كيميائيًا) — مثل صدأ الحديد، احتراق الوقود، تعفن الطعام، طهي البيض، أو تأكسد الفضة."
      }
    },
    { type: "diagram", id: "evidence",
      caption: { en: "Signs that may indicate a chemical change.", ar: "العلامات التي قد تدل على تغير كيميائي." } },
    { type: "list",
      heading: { en: "Evidence of chemical change", ar: "دلائل التغير الكيميائي" },
      items: [
        { en: "Colour change", ar: "تغيّر اللون" },
        { en: "Gas production (bubbles)", ar: "إنتاج غاز (فقاعات)" },
        { en: "Formation of a solid (precipitate)", ar: "تكوّن مادة صلبة (راسب)" },
        { en: "Temperature or energy change", ar: "تغيّر في درجة الحرارة أو الطاقة" },
        { en: "Light produced", ar: "إنتاج ضوء" },
        { en: "A new odour", ar: "ظهور رائحة جديدة" }
      ]
    },
    { type: "key",
      heading: { en: "Key idea", ar: "فكرة أساسية" },
      body: {
        en: "The test for a chemical change is whether a NEW substance with new properties has formed. Signs are useful clues but, on their own, do not always prove a chemical change.",
        ar: "اختبار التغير الكيميائي هو هل تكوّنت مادة جديدة بخصائص جديدة. العلامات أدلة مفيدة لكنها وحدها لا تثبت دائمًا حدوث تغير كيميائي."
      }
    },
    { type: "mistake",
      heading: { en: "Common mistake", ar: "خطأ شائع" },
      body: {
        en: "Melting ice is a PHYSICAL change (still water). Rusting iron is a CHEMICAL change (a new substance forms). Do not confuse a state change with a reaction.",
        ar: "انصهار الثلج تغير فيزيائي (يبقى ماءً). أما صدأ الحديد فتغير كيميائي (تتكوّن مادة جديدة). لا تخلط بين تغيّر الحالة والتفاعل."
      }
    }
  ],
  quiz: [
    {
      q: { en: "Which of these is an intensive property?", ar: "أي مما يلي خاصية مكثفة؟" },
      diagram: "extint",
      options: [ { en: "Density", ar: "الكثافة" }, { en: "Mass", ar: "الكتلة" }, { en: "Volume", ar: "الحجم" }, { en: "Length", ar: "الطول" } ],
      correct: 0,
      explain: { en: "Density does not depend on the amount of substance, so it is intensive. Mass, volume, and length are extensive.", ar: "الكثافة لا تعتمد على كمية المادة فهي مكثفة. أما الكتلة والحجم والطول فهي ممتدة." }
    },
    {
      q: { en: "Which is a chemical property?", ar: "أي مما يلي خاصية كيميائية؟" },
      options: [
        { en: "Ability to rust", ar: "القدرة على الصدأ" },
        { en: "Colour", ar: "اللون" },
        { en: "Melting point", ar: "درجة الانصهار" },
        { en: "Density", ar: "الكثافة" }
      ],
      correct: 0,
      explain: { en: "Rusting changes a substance into a new one, so the ability to rust is a chemical property. Colour, melting point, and density are physical.", ar: "الصدأ يحوّل المادة إلى مادة جديدة، فالقدرة على الصدأ خاصية كيميائية. أما اللون ودرجة الانصهار والكثافة فخصائص فيزيائية." }
    },
    {
      q: { en: "Which of the following is a chemical change?", ar: "أي مما يلي تغير كيميائي؟" },
      diagram: "physchem",
      options: [
        { en: "Burning fuel", ar: "احتراق الوقود" },
        { en: "Melting ice", ar: "انصهار الثلج" },
        { en: "Cutting paper", ar: "قص الورق" },
        { en: "Dissolving salt in water", ar: "ذوبان الملح في الماء" }
      ],
      correct: 0,
      explain: { en: "Burning produces new substances (e.g. carbon dioxide and water), so it is chemical. The others only change form or state.", ar: "الاحتراق ينتج مواد جديدة (مثل ثاني أكسيد الكربون والماء) فهو كيميائي. أما البقية فتغيّر الشكل أو الحالة فقط." }
    },
    {
      q: { en: "Which is the BEST evidence that a chemical change has happened?", ar: "ما الدليل الأفضل على حدوث تغير كيميائي؟" },
      diagram: "evidence",
      options: [
        { en: "A new substance with new properties forms", ar: "تكوّن مادة جديدة بخصائص جديدة" },
        { en: "The shape changed", ar: "تغيّر الشكل" },
        { en: "The size got smaller", ar: "صغر الحجم" },
        { en: "It changed from solid to liquid", ar: "تحوّلت من صلب إلى سائل" }
      ],
      correct: 0,
      explain: { en: "Signs like colour change or gas are clues, but the defining evidence is the formation of a new substance with new properties.", ar: "العلامات مثل تغيّر اللون أو الغاز أدلة، لكن الدليل الحاسم هو تكوّن مادة جديدة بخصائص جديدة." }
    },
    {
      q: { en: "Why is rusting a chemical change but melting is physical?", ar: "لماذا الصدأ تغير كيميائي بينما الانصهار فيزيائي؟" },
      options: [
        { en: "Rusting forms a new substance; melting only changes state", ar: "الصدأ يكوّن مادة جديدة؛ والانصهار يغيّر الحالة فقط" },
        { en: "Both form new substances", ar: "كلاهما يكوّن مادة جديدة" },
        { en: "Melting forms a new substance; rusting does not", ar: "الانصهار يكوّن مادة جديدة؛ والصدأ لا" },
        { en: "Neither changes the substance", ar: "لا يغيّر أيٌّ منهما المادة" }
      ],
      correct: 0,
      explain: { en: "Rusting creates a new compound with new properties (a reaction). Melting keeps the same substance, only changing its state.", ar: "الصدأ يكوّن مركبًا جديدًا بخصائص جديدة (تفاعل). أما الانصهار فيبقي المادة نفسها ويغيّر حالتها فقط." }
    },
    {
      q: { en: "Mass and volume are examples of which kind of property?", ar: "الكتلة والحجم مثالان على أي نوع من الخصائص؟" },
      options: [ { en: "Extensive", ar: "ممتدة" }, { en: "Intensive", ar: "مكثفة" }, { en: "Chemical", ar: "كيميائية" }, { en: "None", ar: "لا شيء" } ],
      correct: 0,
      explain: { en: "Mass and volume depend on how much matter there is, so they are extensive properties.", ar: "تعتمد الكتلة والحجم على كمية المادة، فهما خاصيتان ممتدتان." }
    }
  ]
});

/* ============== LESSON 5 ============== */
CONTENT.lessons.push({
  id: "l5",
  num: 5,
  title: { en: "Conservation of Mass, Elements, Compounds, and Mixtures", ar: "حفظ الكتلة والعناصر والمركبات والمخاليط" },
  outcomes: {
    en: [
      "State and apply the law of conservation of mass.",
      "Classify pure substances into elements and compounds with examples and particle diagrams.",
      "Classify mixtures into homogeneous and heterogeneous with examples and particle diagrams."
    ],
    ar: [
      "ذكر قانون حفظ الكتلة وتطبيقه.",
      "تصنيف المواد النقية إلى عناصر ومركبات بالأمثلة والرسوم الجسيمية.",
      "تصنيف المخاليط إلى متجانسة وغير متجانسة بالأمثلة والرسوم الجسيمية."
    ]
  },
  sections: [
    { type: "formula",
      heading: { en: "Law of conservation of mass", ar: "قانون حفظ الكتلة" },
      body: {
        en: "Mass is not created or destroyed during a chemical reaction. The total mass of reactants equals the total mass of products.\nmass of reactants = mass of products\nIn a closed system, the mass before a reaction equals the mass after it.",
        ar: "الكتلة لا تُستحدث ولا تفنى أثناء التفاعل الكيميائي. مجموع كتل المتفاعلات يساوي مجموع كتل النواتج.\nكتلة المتفاعلات = كتلة النواتج\nفي النظام المغلق، الكتلة قبل التفاعل تساوي الكتلة بعده."
      }
    },
    { type: "diagram", id: "consmass",
      caption: { en: "Mass of reactants = mass of products (balanced).", ar: "كتلة المتفاعلات = كتلة النواتج (متوازنة)." } },
    { type: "tryit",
      heading: { en: "Try it", ar: "جرّب بنفسك" },
      body: {
        en: "10.00 g of a substance reacts. One product has mass 9.26 g and the other is unknown.\n10.00 g = 9.26 g + unknown → unknown = 0.74 g.",
        ar: "تتفاعل 10.00 g من مادة. أحد النواتج كتلته 9.26 g والآخر مجهول.\n10.00 g = 9.26 g + المجهول ← المجهول = 0.74 g."
      }
    },
    { type: "note",
      heading: { en: "Elements and compounds", ar: "العناصر والمركبات" },
      body: {
        en: "A pure substance has a fixed composition and can be an element or a compound. An element cannot be separated into simpler substances (e.g. copper Cu, mercury Hg, helium He, oxygen O₂). A compound is two or more different elements chemically combined in a fixed ratio (e.g. water H₂O, sodium chloride NaCl, carbon dioxide CO₂). A compound can be separated by chemical means — for example electrolysis breaks water into hydrogen and oxygen.",
        ar: "المادة النقية لها تركيب ثابت، وقد تكون عنصرًا أو مركبًا. العنصر لا يمكن فصله إلى مواد أبسط (مثل النحاس Cu والزئبق Hg والهيليوم He والأكسجين O₂). أما المركب فهو عنصران مختلفان أو أكثر متحدان كيميائيًا بنسبة ثابتة (مثل الماء H₂O وكلوريد الصوديوم NaCl وثاني أكسيد الكربون CO₂). ويمكن فصل المركب بطرق كيميائية — مثل التحليل الكهربائي الذي يفصل الماء إلى هيدروجين وأكسجين."
      }
    },
    { type: "diagram", id: "ecm",
      caption: { en: "Element, compound, and mixture at the particle level.", ar: "العنصر والمركب والمخلوط على مستوى الجسيمات." } },
    { type: "note",
      heading: { en: "Mixtures: homogeneous vs heterogeneous", ar: "المخاليط: متجانسة وغير متجانسة" },
      body: {
        en: "A mixture is a physical combination of substances that are not chemically joined and can usually be separated by physical methods. A heterogeneous mixture does not have a uniform composition (e.g. salad dressing, soil, sand and iron filings). A homogeneous mixture (a solution) has a uniform composition and a single phase (e.g. air, salt water, vinegar, steel).",
        ar: "المخلوط اتحاد فيزيائي بين مواد غير متحدة كيميائيًا، ويمكن غالبًا فصله بطرق فيزيائية. المخلوط غير المتجانس ليس له تركيب موحد (مثل صلصة السلطة والتربة والرمل وبرادة الحديد). أما المخلوط المتجانس (المحلول) فله تركيب موحد وطور واحد (مثل الهواء والماء المالح والخل والفولاذ)."
      }
    },
    { type: "diagram", id: "homohetero",
      caption: { en: "Homogeneous: evenly mixed. Heterogeneous: unevenly mixed.", ar: "متجانس: موزع بانتظام. غير متجانس: موزع بغير انتظام." } },
    { type: "key",
      heading: { en: "Key idea", ar: "فكرة أساسية" },
      body: {
        en: "Pure substance = element or compound (fixed composition). Mixture = physically combined, separable by physical methods. Homogeneous = uniform throughout; heterogeneous = parts can be seen.",
        ar: "المادة النقية = عنصر أو مركب (تركيب ثابت). المخلوط = اتحاد فيزيائي يمكن فصله بطرق فيزيائية. المتجانس = موحد في كل أجزائه؛ وغير المتجانس = يمكن رؤية أجزائه."
      }
    },
    { type: "mistake",
      heading: { en: "Common mistake", ar: "خطأ شائع" },
      body: {
        en: "In conservation-of-mass problems, the missing mass is found by SUBTRACTING, not ignoring it: total reactants − known product = unknown product.",
        ar: "في مسائل حفظ الكتلة، تُوجد الكتلة المفقودة بالطرح وليس بإهمالها: مجموع المتفاعلات − الناتج المعلوم = الناتج المجهول."
      }
    }
  ],
  quiz: [
    {
      q: { en: "In a closed system, 14 g of reactants react. What is the total mass of the products?", ar: "في نظام مغلق، تفاعلت 14 g من المتفاعلات. ما مجموع كتلة النواتج؟" },
      diagram: "consmass",
      options: [ { en: "14 g", ar: "14 g" }, { en: "7 g", ar: "7 g" }, { en: "28 g", ar: "28 g" }, { en: "It cannot be known", ar: "لا يمكن معرفتها" } ],
      correct: 0,
      explain: { en: "By conservation of mass, mass of products = mass of reactants = 14 g.", ar: "وفق حفظ الكتلة، كتلة النواتج = كتلة المتفاعلات = 14 g." }
    },
    {
      q: { en: "8.00 g of a substance reacts to give 5.40 g of one product and an unknown mass of another. The unknown mass is…", ar: "تتفاعل 8.00 g من مادة لتعطي 5.40 g من ناتج وكتلة مجهولة من ناتج آخر. الكتلة المجهولة…" },
      options: [ { en: "2.60 g", ar: "2.60 g" }, { en: "13.40 g", ar: "13.40 g" }, { en: "5.40 g", ar: "5.40 g" }, { en: "8.00 g", ar: "8.00 g" } ],
      correct: 0,
      explain: { en: "8.00 = 5.40 + unknown → unknown = 8.00 − 5.40 = 2.60 g.", ar: "8.00 = 5.40 + المجهول ← المجهول = 8.00 − 5.40 = 2.60 g." }
    },
    {
      q: { en: "Which of these is a compound?", ar: "أي مما يلي مركب؟" },
      diagram: "ecm",
      options: [ { en: "Water (H₂O)", ar: "الماء (H₂O)" }, { en: "Copper (Cu)", ar: "النحاس (Cu)" }, { en: "Helium (He)", ar: "الهيليوم (He)" }, { en: "Oxygen (O₂)", ar: "الأكسجين (O₂)" } ],
      correct: 0,
      explain: { en: "Water is made of two different elements (hydrogen and oxygen) chemically combined, so it is a compound. The others are elements.", ar: "الماء مكوّن من عنصرين مختلفين (هيدروجين وأكسجين) متحدين كيميائيًا فهو مركب. أما البقية فعناصر." }
    },
    {
      q: { en: "Which is a homogeneous mixture (solution)?", ar: "أي مما يلي مخلوط متجانس (محلول)؟" },
      diagram: "homohetero",
      options: [ { en: "Salt water", ar: "الماء المالح" }, { en: "Soil", ar: "التربة" }, { en: "Salad dressing", ar: "صلصة السلطة" }, { en: "Sand and iron filings", ar: "الرمل وبرادة الحديد" } ],
      correct: 0,
      explain: { en: "Salt water is uniform throughout (single phase), so it is homogeneous. The others have visibly different parts, so they are heterogeneous.", ar: "الماء المالح موحد في كل أجزائه (طور واحد) فهو متجانس. أما البقية فأجزاؤها مرئية ومختلفة فهي غير متجانسة." }
    },
    {
      q: { en: "How can water be separated into hydrogen and oxygen?", ar: "كيف يمكن فصل الماء إلى هيدروجين وأكسجين؟" },
      options: [
        { en: "By a chemical method such as electrolysis", ar: "بطريقة كيميائية مثل التحليل الكهربائي" },
        { en: "By filtering", ar: "بالترشيح" },
        { en: "By letting it settle", ar: "بتركه ليترسّب" },
        { en: "It cannot be separated at all", ar: "لا يمكن فصله إطلاقًا" }
      ],
      correct: 0,
      explain: { en: "Water is a compound, so it is separated by chemical means. Electrolysis splits it into hydrogen and oxygen gas.", ar: "الماء مركب، فيُفصل بطرق كيميائية. والتحليل الكهربائي يفصله إلى غازي الهيدروجين والأكسجين." }
    },
    {
      q: { en: "A particle diagram shows boxes of identical single atoms only. This represents an…", ar: "يُظهر رسم جسيمي صناديق بها ذرات مفردة متطابقة فقط. هذا يمثّل…" },
      diagram: "ecm",
      options: [ { en: "element", ar: "عنصرًا" }, { en: "compound", ar: "مركبًا" }, { en: "heterogeneous mixture", ar: "مخلوطًا غير متجانس" }, { en: "solution of two compounds", ar: "محلولًا من مركبين" } ],
      correct: 0,
      explain: { en: "One type of atom only = an element. A compound would show two or more different atoms joined together.", ar: "نوع واحد من الذرات فقط = عنصر. أما المركب فيُظهر ذرتين مختلفتين أو أكثر متحدتين معًا." }
    }
  ]
});

/* ============== LESSON 6 ============== */
CONTENT.lessons.push({
  id: "l6",
  num: 6,
  title: { en: "Energy Resources and the Environment", ar: "مصادر الطاقة والبيئة" },
  outcomes: {
    en: [
      "Identify energy resources in daily life and describe fossil-fuel formation.",
      "Identify renewable and nonrenewable resources and the need for sustainability.",
      "Describe how renewable resources are converted into electrical energy.",
      "Describe how human population affects carrying capacity and how to conserve resources."
    ],
    ar: [
      "تحديد مصادر الطاقة في الحياة اليومية ووصف تكوّن الوقود الأحفوري.",
      "تحديد الموارد المتجددة وغير المتجددة وأهمية الاستدامة.",
      "وصف كيفية تحويل الموارد المتجددة إلى طاقة كهربائية.",
      "وصف تأثير عدد السكان في القدرة الاستيعابية وطرق حفظ الموارد."
    ]
  },
  sections: [
    { type: "note",
      heading: { en: "Energy resources and transformations", ar: "مصادر الطاقة وتحولاتها" },
      body: {
        en: "Energy is used daily for lighting, cooking, heating, cooling, transport, factories, and devices. Energy is not created or destroyed; it is only transformed. For example: chemical energy in gasoline → mechanical energy in a car; chemical energy in coal → thermal → electrical; radiant energy from the Sun → electrical in solar cells; moving water or wind → mechanical → electrical.",
        ar: "تُستخدم الطاقة يوميًا في الإضاءة والطهي والتدفئة والتبريد والنقل والمصانع والأجهزة. والطاقة لا تُستحدث ولا تفنى بل تتحول فقط. مثلًا: طاقة كيميائية في البنزين ← طاقة ميكانيكية في السيارة؛ طاقة كيميائية في الفحم ← حرارية ← كهربائية؛ طاقة إشعاعية من الشمس ← كهربائية في الخلايا الشمسية؛ ماء أو رياح متحركة ← ميكانيكية ← كهربائية."
      }
    },
    { type: "diagram", id: "energyflow",
      caption: { en: "Energy transformations in cars, power stations, solar cells, and turbines.", ar: "تحولات الطاقة في السيارات والمحطات والخلايا الشمسية والتوربينات." } },
    { type: "note",
      heading: { en: "Fossil fuels and combustion", ar: "الوقود الأحفوري والاحتراق" },
      body: {
        en: "Fossil fuels — coal, oil/petroleum, and natural gas — formed from the remains of ancient plants and animals buried and changed by heat and pressure over millions of years. They are nonrenewable because they cannot be replaced quickly. When they burn, they react with oxygen and release energy: fuel + oxygen → carbon dioxide + water + energy. This gives useful energy but also produces carbon dioxide and pollutants.",
        ar: "الوقود الأحفوري — الفحم والنفط/البترول والغاز الطبيعي — تكوّن من بقايا نباتات وحيوانات قديمة دُفنت وتغيّرت بالحرارة والضغط عبر ملايين السنين. وهو غير متجدد لأنه لا يُستبدل بسرعة. وعند احتراقه يتفاعل مع الأكسجين وتنطلق طاقة: وقود + أكسجين ← ثاني أكسيد الكربون + ماء + طاقة. ويوفّر طاقة مفيدة لكنه ينتج ثاني أكسيد الكربون وملوثات."
      }
    },
    { type: "diagram", id: "renewvs",
      caption: { en: "Renewable resources replace quickly; nonrenewable ones do not.", ar: "الموارد المتجددة تتجدد بسرعة؛ وغير المتجددة لا." } },
    { type: "list",
      heading: { en: "Renewable vs nonrenewable", ar: "متجددة مقابل غير متجددة" },
      items: [
        { en: "Renewable: sunlight, wind, moving water, geothermal, biomass.", ar: "متجددة: ضوء الشمس، الرياح، الماء المتحرك، الطاقة الجوفية، الكتلة الحيوية." },
        { en: "Nonrenewable: coal, oil/petroleum, natural gas.", ar: "غير متجددة: الفحم، النفط/البترول، الغاز الطبيعي." }
      ]
    },
    { type: "note",
      heading: { en: "Generating electricity from renewables", ar: "توليد الكهرباء من المصادر المتجددة" },
      body: {
        en: "Solar cells (photovoltaic cells) convert radiant energy directly into electrical energy using semiconductors. Hydroelectric power uses moving water to spin turbines: gravitational potential → kinetic → mechanical → electrical. Wind turbines convert the motion of air: kinetic → mechanical → electrical. Geothermal energy uses Earth's internal heat to make steam that spins a turbine: thermal energy inside Earth → steam → mechanical → electrical.",
        ar: "الخلايا الشمسية (الكهروضوئية) تحوّل الطاقة الإشعاعية مباشرة إلى كهربائية باستخدام مواد شبه موصلة. والطاقة الكهرومائية تستخدم الماء المتحرك لتدوير التوربينات: طاقة وضع ← حركية ← ميكانيكية ← كهربائية. وتوربينات الرياح تحوّل حركة الهواء: حركية ← ميكانيكية ← كهربائية. والطاقة الجوفية تستخدم حرارة باطن الأرض لتكوين بخار يدير توربينًا: حرارية داخل الأرض ← بخار ← ميكانيكية ← كهربائية."
      }
    },
    { type: "diagram", id: "renewables4",
      caption: { en: "Solar, hydroelectric, wind, and geothermal energy.", ar: "الطاقة الشمسية والكهرومائية والرياح والجوفية." } },
    { type: "note",
      heading: { en: "People, pollution, and carrying capacity", ar: "الإنسان والتلوث والقدرة الاستيعابية" },
      body: {
        en: "Human activities can pollute air, water, and land. Photochemical smog forms when pollutants react in sunlight, and acid precipitation forms when sulfur, nitrogen, and carbon compounds react with moisture in the air, harming plants, water, animals, and buildings. Carrying capacity is the maximum number of organisms an environment can support with available resources. Population growth increases demand for food, water, land, and energy.",
        ar: "قد تلوّث الأنشطة البشرية الهواء والماء واليابسة. يتكوّن الضباب الدخاني الكيميائي الضوئي عند تفاعل الملوثات في ضوء الشمس، ويتكوّن الهطول الحمضي عند تفاعل مركبات الكبريت والنيتروجين والكربون مع الرطوبة في الهواء، فيضر النباتات والمياه والحيوانات والمباني. والقدرة الاستيعابية هي أكبر عدد من الكائنات تستطيع البيئة دعمه بالموارد المتاحة. وزيادة السكان تزيد الطلب على الغذاء والماء والأرض والطاقة."
      }
    },
    { type: "diagram", id: "carrying",
      caption: { en: "Population rises then levels off at the carrying capacity.", ar: "يرتفع عدد السكان ثم يستقر عند القدرة الاستيعابية." } },
    { type: "key",
      heading: { en: "Key idea", ar: "فكرة أساسية" },
      body: {
        en: "Conserve resources by saving water and electricity, recycling, reducing waste, using renewable energy, protecting habitats, and reducing pollution.",
        ar: "تُحفظ الموارد بترشيد الماء والكهرباء، وإعادة التدوير، وتقليل النفايات، واستخدام الطاقة المتجددة، وحماية المواطن البيئية، وتقليل التلوث."
      }
    },
    { type: "mistake",
      heading: { en: "Common mistake", ar: "خطأ شائع" },
      body: {
        en: "Biomass and moving water ARE renewable, while natural gas is NOT. 'Renewable' means it is replaced faster than we use it, not just that it is clean.",
        ar: "الكتلة الحيوية والماء المتحرك متجددة، أما الغاز الطبيعي فغير متجدد. 'متجدد' يعني أنه يتجدد أسرع من استهلاكنا له، لا مجرد أنه نظيف."
      }
    }
  ],
  quiz: [
    {
      q: { en: "Which list contains only renewable resources?", ar: "أي قائمة تحتوي موارد متجددة فقط؟" },
      diagram: "renewvs",
      options: [
        { en: "Sunlight, wind, moving water", ar: "ضوء الشمس، الرياح، الماء المتحرك" },
        { en: "Coal, oil, natural gas", ar: "الفحم، النفط، الغاز الطبيعي" },
        { en: "Coal, wind, oil", ar: "الفحم، الرياح، النفط" },
        { en: "Natural gas, sunlight, coal", ar: "الغاز الطبيعي، ضوء الشمس، الفحم" }
      ],
      correct: 0,
      explain: { en: "Sunlight, wind, and moving water are all renewable. Coal, oil, and natural gas are fossil fuels and are nonrenewable.", ar: "ضوء الشمس والرياح والماء المتحرك كلها متجددة. أما الفحم والنفط والغاز الطبيعي فوقود أحفوري غير متجدد." }
    },
    {
      q: { en: "What is the energy transformation in a hydroelectric dam?", ar: "ما تحوّل الطاقة في السد الكهرومائي؟" },
      diagram: "renewables4",
      options: [
        { en: "Gravitational potential → kinetic → mechanical → electrical", ar: "طاقة وضع ← حركية ← ميكانيكية ← كهربائية" },
        { en: "Chemical → thermal → electrical", ar: "كيميائية ← حرارية ← كهربائية" },
        { en: "Radiant → electrical", ar: "إشعاعية ← كهربائية" },
        { en: "Electrical → chemical", ar: "كهربائية ← كيميائية" }
      ],
      correct: 0,
      explain: { en: "Stored water has gravitational potential energy; falling water becomes kinetic, spins a turbine (mechanical), and a generator makes electricity.", ar: "للماء المخزّن طاقة وضع؛ والماء الساقط يصبح حركيًا فيدير توربينًا (ميكانيكية) ويولّد مولّد الكهرباء." }
    },
    {
      q: { en: "Fossil fuels formed from…", ar: "تكوّن الوقود الأحفوري من…" },
      options: [
        { en: "the remains of ancient plants and animals changed by heat and pressure over millions of years", ar: "بقايا نباتات وحيوانات قديمة تغيّرت بالحرارة والضغط عبر ملايين السنين" },
        { en: "rainwater stored underground", ar: "مياه أمطار مخزّنة تحت الأرض" },
        { en: "melted rocks cooling quickly", ar: "صخور منصهرة تبرد بسرعة" },
        { en: "compressed air", ar: "هواء مضغوط" }
      ],
      correct: 0,
      explain: { en: "Coal, oil, and gas formed from buried ancient organisms transformed by heat and pressure over millions of years.", ar: "تكوّن الفحم والنفط والغاز من كائنات قديمة مدفونة تحوّلت بالحرارة والضغط عبر ملايين السنين." }
    },
    {
      q: { en: "When a fossil fuel burns completely, the products are mainly…", ar: "عند احتراق الوقود الأحفوري كاملًا، تكون النواتج أساسًا…" },
      options: [
        { en: "carbon dioxide, water, and energy", ar: "ثاني أكسيد الكربون والماء والطاقة" },
        { en: "oxygen and hydrogen only", ar: "أكسجين وهيدروجين فقط" },
        { en: "only water", ar: "ماء فقط" },
        { en: "metal and salt", ar: "معدن وملح" }
      ],
      correct: 0,
      explain: { en: "fuel + oxygen → carbon dioxide + water + energy. Burning also releases pollutants.", ar: "وقود + أكسجين ← ثاني أكسيد الكربون + ماء + طاقة. كما يطلق الاحتراق ملوثات." }
    },
    {
      q: { en: "A solar cell mainly converts…", ar: "تحوّل الخلية الشمسية أساسًا…" },
      diagram: "renewables4",
      options: [
        { en: "radiant energy into electrical energy", ar: "الطاقة الإشعاعية إلى كهربائية" },
        { en: "thermal energy into chemical energy", ar: "الطاقة الحرارية إلى كيميائية" },
        { en: "kinetic energy into thermal energy", ar: "الطاقة الحركية إلى حرارية" },
        { en: "electrical energy into sound", ar: "الطاقة الكهربائية إلى صوت" }
      ],
      correct: 0,
      explain: { en: "Photovoltaic (solar) cells use semiconductors to turn sunlight (radiant energy) directly into electrical energy.", ar: "الخلايا الكهروضوئية تستخدم مواد شبه موصلة لتحويل ضوء الشمس (طاقة إشعاعية) مباشرة إلى طاقة كهربائية." }
    },
    {
      q: { en: "Carrying capacity is best described as…", ar: "تُوصف القدرة الاستيعابية بأنها…" },
      diagram: "carrying",
      options: [
        { en: "the maximum number of organisms an environment can support with available resources", ar: "أكبر عدد من الكائنات تستطيع البيئة دعمه بالموارد المتاحة" },
        { en: "the total number of factories in an area", ar: "إجمالي عدد المصانع في منطقة" },
        { en: "the speed of population growth", ar: "سرعة نمو السكان" },
        { en: "the amount of fossil fuel left", ar: "كمية الوقود الأحفوري المتبقية" }
      ],
      correct: 0,
      explain: { en: "Carrying capacity is the largest population an environment can sustain with its available resources; growth beyond it strains those resources.", ar: "القدرة الاستيعابية هي أكبر عدد سكان تستطيع البيئة إعالته بمواردها المتاحة؛ والنمو فوقها يرهق تلك الموارد." }
    },
    {
      q: { en: "Which action helps conserve Earth's natural resources?", ar: "أي إجراء يساعد على حفظ الموارد الطبيعية؟" },
      options: [
        { en: "Recycling and reducing waste", ar: "إعادة التدوير وتقليل النفايات" },
        { en: "Leaving lights on all day", ar: "ترك الأضواء مضاءة طوال اليوم" },
        { en: "Wasting water", ar: "إهدار الماء" },
        { en: "Burning more fossil fuels", ar: "حرق مزيد من الوقود الأحفوري" }
      ],
      correct: 0,
      explain: { en: "Recycling, reducing waste, saving water and electricity, and using renewables all conserve resources.", ar: "إعادة التدوير وتقليل النفايات وترشيد الماء والكهرباء واستخدام المتجددة كلها تحفظ الموارد." }
    }
  ]
});

/* ============== FINAL MOCK EXAM — 25 MCQ × 4 = 100 ============== */
CONTENT.finalQuiz = [
  /* --- L1: Kinetic theory & states (4) --- */
  { topic:1,
    q:{en:"Which state has no fixed shape AND no fixed volume?",ar:"أي حالة ليس لها شكل ثابت ولا حجم ثابت؟"},
    options:[{en:"Gas",ar:"غاز"},{en:"Liquid",ar:"سائل"},{en:"Solid",ar:"صلب"},{en:"All of them",ar:"جميعها"}],
    correct:0, explain:{en:"A gas fills its container, so it has neither a fixed shape nor a fixed volume.",ar:"الغاز يملأ وعاءه فلا شكل له ولا حجم ثابت."}},
  { topic:1,
    q:{en:"In which state are particles packed in fixed, ordered positions?",ar:"في أي حالة تكون الجسيمات في مواضع ثابتة ومرتبة؟"},
    options:[{en:"Solid",ar:"صلب"},{en:"Liquid",ar:"سائل"},{en:"Gas",ar:"غاز"},{en:"None",ar:"لا شيء"}],
    correct:0, explain:{en:"Solid particles are tightly packed in fixed positions and only vibrate in place.",ar:"جسيمات الصلب متراصة في مواضع ثابتة وتهتز في مكانها فقط."}},
  { topic:1,
    q:{en:"Temperature is a measure of the…",ar:"درجة الحرارة هي مقياس لـ…"},
    options:[{en:"average kinetic energy of particles",ar:"متوسط الطاقة الحركية للجسيمات"},{en:"total energy of all particles",ar:"الطاقة الكلية لكل الجسيمات"},{en:"number of particles",ar:"عدد الجسيمات"},{en:"mass of the substance",ar:"كتلة المادة"}],
    correct:0, explain:{en:"Temperature measures the average kinetic energy of particles; total energy is thermal energy.",ar:"تقيس درجة الحرارة متوسط الطاقة الحركية للجسيمات؛ والطاقة الكلية هي الطاقة الحرارية."}},
  { topic:1, diagram:"states",
    q:{en:"Which describes liquid particles?",ar:"أي وصف يناسب جسيمات السائل؟"},
    options:[{en:"Close together but able to slide past each other",ar:"متقاربة لكنها تستطيع الانزلاق فوق بعضها"},{en:"Far apart and fast",ar:"متباعدة وسريعة"},{en:"Fixed and only vibrating",ar:"ثابتة وتهتز فقط"},{en:"Not moving at all",ar:"لا تتحرك إطلاقًا"}],
    correct:0, explain:{en:"Liquid particles stay close (fixed volume) but can slide, so the liquid takes the container's shape.",ar:"جسيمات السائل تبقى متقاربة (حجم ثابت) لكنها تنزلق، فيأخذ السائل شكل الوعاء."}},

  /* --- L2: Changes of state & curves (4) --- */
  { topic:2, diagram:"heatcurve",
    q:{en:"A flat plateau on a heating curve means…",ar:"الجزء الأفقي في منحنى التسخين يعني…"},
    options:[{en:"a change of state at constant temperature",ar:"تغيّر حالة عند درجة حرارة ثابتة"},{en:"the substance is cooling",ar:"المادة تبرد"},{en:"no energy is added",ar:"لا تُضاف طاقة"},{en:"temperature rising fast",ar:"ارتفاع سريع للحرارة"}],
    correct:0, explain:{en:"Energy keeps entering but goes into changing state, so temperature stays constant.",ar:"تستمر الطاقة في الدخول لكنها تُستخدم لتغيير الحالة، فتبقى درجة الحرارة ثابتة."}},
  { topic:2,
    q:{en:"Solid → gas directly (without becoming liquid) is called…",ar:"تحوّل الصلب ← غاز مباشرة (دون أن يصبح سائلًا) يسمى…"},
    options:[{en:"Sublimation",ar:"التسامي"},{en:"Melting",ar:"الانصهار"},{en:"Condensation",ar:"التكاثف"},{en:"Vaporization",ar:"التبخر"}],
    correct:0, explain:{en:"Sublimation is the direct solid-to-gas change; dry ice is an example.",ar:"التسامي هو التحول المباشر من صلب إلى غاز؛ والثلج الجاف مثال عليه."}},
  { topic:2,
    q:{en:"Which change of state RELEASES energy?",ar:"أي تغيّر حالة تنطلق فيه طاقة؟"},
    options:[{en:"Condensation",ar:"التكاثف"},{en:"Melting",ar:"الانصهار"},{en:"Boiling",ar:"الغليان"},{en:"Sublimation",ar:"التسامي"}],
    correct:0, explain:{en:"Condensation (and freezing) release energy as particles slow and come together.",ar:"التكاثف (والتجمد) تنطلق فيه طاقة عندما تبطؤ الجسيمات وتتقارب."}},
  { topic:2, diagram:"evapboil",
    q:{en:"Which is true about evaporation?",ar:"أي عبارة صحيحة عن التبخر السطحي؟"},
    options:[{en:"It happens at the surface and can occur below boiling point",ar:"يحدث عند السطح وقد يحدث قبل درجة الغليان"},{en:"It happens throughout the liquid only at boiling point",ar:"يحدث في كل السائل عند الغليان فقط"},{en:"It releases energy",ar:"تنطلق فيه طاقة"},{en:"It is a chemical change",ar:"إنه تغير كيميائي"}],
    correct:0, explain:{en:"Evaporation occurs only at the surface and can happen below the boiling point.",ar:"يحدث التبخر عند السطح فقط وقد يحدث قبل درجة الغليان."}},

  /* --- L3: Fluids, pressure, buoyancy, Pascal, Bernoulli (5) --- */
  { topic:3,
    q:{en:"A force of 100 N acts on an area of 5 m². The pressure is…",ar:"تؤثر قوة 100 N على مساحة 5 m². الضغط…"},
    options:[{en:"20 Pa",ar:"20 Pa"},{en:"500 Pa",ar:"500 Pa"},{en:"105 Pa",ar:"105 Pa"},{en:"0.05 Pa",ar:"0.05 Pa"}],
    correct:0, explain:{en:"P = F / A = 100 / 5 = 20 Pa.",ar:"P = F ÷ A = 100 ÷ 5 = 20 Pa."}},
  { topic:3, diagram:"buoyancy",
    q:{en:"An object sinks when…",ar:"يغوص الجسم عندما…"},
    options:[{en:"its weight is greater than the buoyant force",ar:"يكون وزنه أكبر من قوة الطفو"},{en:"the buoyant force is greater than its weight",ar:"تكون قوة الطفو أكبر من وزنه"},{en:"there is no fluid",ar:"لا يوجد مائع"},{en:"the fluid is moving fast",ar:"يتحرك المائع بسرعة"}],
    correct:0, explain:{en:"If weight exceeds the buoyant force, the net force is downward and the object sinks.",ar:"إذا تجاوز الوزن قوة الطفو، تكون المحصلة لأسفل فيغوص الجسم."}},
  { topic:3, diagram:"pascal",
    q:{en:"Pascal's principle is used in…",ar:"يُستخدم مبدأ باسكال في…"},
    options:[{en:"hydraulic lifts",ar:"الرافعات الهيدروليكية"},{en:"solar panels",ar:"الألواح الشمسية"},{en:"wind turbines",ar:"توربينات الرياح"},{en:"thermometers",ar:"مقاييس الحرارة"}],
    correct:0, explain:{en:"Hydraulic lifts use Pascal's principle: pressure is transmitted equally through a confined fluid.",ar:"تستخدم الرافعات الهيدروليكية مبدأ باسكال: ينتقل الضغط بالتساوي خلال مائع محصور."}},
  { topic:3, diagram:"bernoulli",
    q:{en:"A hose sprayer pulls liquid into a fast water stream because the fast fluid has…",ar:"يسحب بخاخ الخرطوم السائل إلى مجرى ماء سريع لأن المائع السريع له…"},
    options:[{en:"lower pressure",ar:"ضغط أقل"},{en:"higher pressure",ar:"ضغط أعلى"},{en:"more mass",ar:"كتلة أكبر"},{en:"no motion",ar:"لا حركة"}],
    correct:0, explain:{en:"Bernoulli's principle: faster fluid has lower pressure, which draws the liquid in.",ar:"مبدأ برنولي: المائع الأسرع له ضغط أقل، فيسحب السائل إلى الداخل."}},
  { topic:3, diagram:"floatsink",
    q:{en:"An object floats if its density is…",ar:"يطفو الجسم إذا كانت كثافته…"},
    options:[{en:"less than the fluid's density",ar:"أقل من كثافة المائع"},{en:"greater than the fluid's density",ar:"أكبر من كثافة المائع"},{en:"equal to its mass",ar:"مساوية لكتلته"},{en:"zero",ar:"صفرًا"}],
    correct:0, explain:{en:"Less dense than the fluid → floats; denser than the fluid → sinks.",ar:"أقل كثافة من المائع ← يطفو؛ أكثف من المائع ← يغوص."}},

  /* --- L4: Properties & chemical change (4) --- */
  { topic:4,
    q:{en:"Which is a PHYSICAL change?",ar:"أي مما يلي تغير فيزيائي؟"},
    options:[{en:"Crushing an aluminium can",ar:"سحق علبة ألومنيوم"},{en:"Rusting iron",ar:"صدأ الحديد"},{en:"Burning wood",ar:"احتراق الخشب"},{en:"Cooking an egg",ar:"طهي البيض"}],
    correct:0, explain:{en:"Crushing changes shape only — no new substance. The others form new substances (chemical).",ar:"السحق يغيّر الشكل فقط دون مادة جديدة. أما البقية فتكوّن مواد جديدة (كيميائية)."}},
  { topic:4, diagram:"extint",
    q:{en:"Which property does NOT depend on the amount of substance?",ar:"أي خاصية لا تعتمد على كمية المادة؟"},
    options:[{en:"Boiling point",ar:"درجة الغليان"},{en:"Mass",ar:"الكتلة"},{en:"Volume",ar:"الحجم"},{en:"Length",ar:"الطول"}],
    correct:0, explain:{en:"Boiling point is intensive (independent of amount). Mass, volume, and length are extensive.",ar:"درجة الغليان خاصية مكثفة (لا تعتمد على الكمية). أما الكتلة والحجم والطول فممتدة."}},
  { topic:4, diagram:"evidence",
    q:{en:"Which is evidence of a chemical change?",ar:"أي مما يلي دليل على تغير كيميائي؟"},
    options:[{en:"Gas bubbles and a new odour appear",ar:"ظهور فقاعات غاز ورائحة جديدة"},{en:"Ice melts into water",ar:"انصهار الثلج إلى ماء"},{en:"Sugar dissolves",ar:"ذوبان السكر"},{en:"A wire is bent",ar:"ثني سلك"}],
    correct:0, explain:{en:"Gas production and a new smell are signs a new substance formed. The others are physical changes.",ar:"إنتاج الغاز والرائحة الجديدة من علامات تكوّن مادة جديدة. أما البقية فتغيرات فيزيائية."}},
  { topic:4,
    q:{en:"The ability of iron to react with oxygen is a…",ar:"قدرة الحديد على التفاعل مع الأكسجين هي…"},
    options:[{en:"chemical property",ar:"خاصية كيميائية"},{en:"physical property",ar:"خاصية فيزيائية"},{en:"extensive property",ar:"خاصية ممتدة"},{en:"state of matter",ar:"حالة للمادة"}],
    correct:0, explain:{en:"Reacting with oxygen changes iron into a new substance, so it is a chemical property.",ar:"التفاعل مع الأكسجين يحوّل الحديد إلى مادة جديدة، فهي خاصية كيميائية."}},

  /* --- L5: Conservation of mass, elements/compounds/mixtures (4) --- */
  { topic:5, diagram:"consmass",
    q:{en:"In a closed reaction, reactants total 25 g. The products total…",ar:"في تفاعل مغلق، مجموع المتفاعلات 25 g. مجموع النواتج…"},
    options:[{en:"25 g",ar:"25 g"},{en:"50 g",ar:"50 g"},{en:"12.5 g",ar:"12.5 g"},{en:"0 g",ar:"0 g"}],
    correct:0, explain:{en:"Conservation of mass: products = reactants = 25 g.",ar:"حفظ الكتلة: النواتج = المتفاعلات = 25 g."}},
  { topic:5, diagram:"ecm",
    q:{en:"Which is an ELEMENT?",ar:"أي مما يلي عنصر؟"},
    options:[{en:"Oxygen (O₂)",ar:"الأكسجين (O₂)"},{en:"Water (H₂O)",ar:"الماء (H₂O)"},{en:"Carbon dioxide (CO₂)",ar:"ثاني أكسيد الكربون (CO₂)"},{en:"Sodium chloride (NaCl)",ar:"كلوريد الصوديوم (NaCl)"}],
    correct:0, explain:{en:"Oxygen is one type of atom, so it is an element. The others are compounds of different elements.",ar:"الأكسجين نوع واحد من الذرات فهو عنصر. أما البقية فمركبات من عناصر مختلفة."}},
  { topic:5, diagram:"homohetero",
    q:{en:"Which is a HETEROGENEOUS mixture?",ar:"أي مما يلي مخلوط غير متجانس؟"},
    options:[{en:"Sand and iron filings",ar:"الرمل وبرادة الحديد"},{en:"Air",ar:"الهواء"},{en:"Salt water",ar:"الماء المالح"},{en:"Vinegar",ar:"الخل"}],
    correct:0, explain:{en:"Sand and iron filings have visibly different parts, so the mixture is heterogeneous.",ar:"الرمل وبرادة الحديد لهما أجزاء مرئية مختلفة، فالمخلوط غير متجانس."}},
  { topic:5,
    q:{en:"7.0 g of A reacts with 3.0 g of B in a closed container. The product mass is…",ar:"تتفاعل 7.0 g من A مع 3.0 g من B في وعاء مغلق. كتلة الناتج…"},
    options:[{en:"10.0 g",ar:"10.0 g"},{en:"4.0 g",ar:"4.0 g"},{en:"21.0 g",ar:"21.0 g"},{en:"7.0 g",ar:"7.0 g"}],
    correct:0, explain:{en:"Total reactants = 7.0 + 3.0 = 10.0 g, so the product mass is 10.0 g.",ar:"مجموع المتفاعلات = 7.0 + 3.0 = 10.0 g، فكتلة الناتج 10.0 g."}},

  /* --- L6: Energy resources & environment (4) --- */
  { topic:6, diagram:"renewvs",
    q:{en:"Which is a NONRENEWABLE resource?",ar:"أي مما يلي مورد غير متجدد؟"},
    options:[{en:"Natural gas",ar:"الغاز الطبيعي"},{en:"Wind",ar:"الرياح"},{en:"Sunlight",ar:"ضوء الشمس"},{en:"Moving water",ar:"الماء المتحرك"}],
    correct:0, explain:{en:"Natural gas is a fossil fuel — nonrenewable. Wind, sunlight, and moving water are renewable.",ar:"الغاز الطبيعي وقود أحفوري غير متجدد. أما الرياح والشمس والماء المتحرك فمتجددة."}},
  { topic:6, diagram:"renewables4",
    q:{en:"A wind turbine converts the kinetic energy of wind into…",ar:"يحوّل توربين الرياح الطاقة الحركية للرياح إلى…"},
    options:[{en:"mechanical then electrical energy",ar:"طاقة ميكانيكية ثم كهربائية"},{en:"chemical energy",ar:"طاقة كيميائية"},{en:"only thermal energy",ar:"طاقة حرارية فقط"},{en:"radiant energy",ar:"طاقة إشعاعية"}],
    correct:0, explain:{en:"Wind turns the blades (mechanical), and a generator converts this into electrical energy.",ar:"تدير الرياح الشفرات (ميكانيكية)، ويحوّل المولّد ذلك إلى طاقة كهربائية."}},
  { topic:6,
    q:{en:"Burning fossil fuels mainly produces carbon dioxide, water, and…",ar:"ينتج حرق الوقود الأحفوري أساسًا ثاني أكسيد الكربون والماء و…"},
    options:[{en:"energy (plus pollutants)",ar:"طاقة (مع ملوثات)"},{en:"pure oxygen",ar:"أكسجين نقي"},{en:"metal",ar:"معدن"},{en:"ice",ar:"ثلج"}],
    correct:0, explain:{en:"fuel + oxygen → carbon dioxide + water + energy; pollutants are also released.",ar:"وقود + أكسجين ← ثاني أكسيد الكربون + ماء + طاقة؛ وتُطلق ملوثات أيضًا."}},
  { topic:6, diagram:"carrying",
    q:{en:"How does a growing human population affect Earth's carrying capacity?",ar:"كيف يؤثر نمو عدد السكان في القدرة الاستيعابية للأرض؟"},
    options:[{en:"It increases demand for resources and can reduce what is available",ar:"يزيد الطلب على الموارد وقد يقلل المتاح منها"},{en:"It has no effect at all",ar:"لا أثر له إطلاقًا"},{en:"It always increases resources",ar:"يزيد الموارد دائمًا"},{en:"It removes the need for energy",ar:"يلغي الحاجة للطاقة"}],
    correct:0, explain:{en:"More people need more food, water, land, and energy, which can strain and reduce available resources.",ar:"المزيد من الناس يحتاج مزيدًا من الغذاء والماء والأرض والطاقة، مما قد يرهق الموارد ويقللها."}}
];

CONTENT.topicNames = [
  null,
  { en:"Kinetic theory & states", ar:"النظرية الحركية والحالات" },
  { en:"Changes of state & curves", ar:"تغيّرات الحالة والمنحنيات" },
  { en:"Fluids, pressure & buoyancy", ar:"الموائع والضغط والطفو" },
  { en:"Properties & chemical change", ar:"الخصائص والتغير الكيميائي" },
  { en:"Mass, elements & mixtures", ar:"الكتلة والعناصر والمخاليط" },
  { en:"Energy resources & environment", ar:"مصادر الطاقة والبيئة" }
];
