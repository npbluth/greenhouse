/* Study set: Sports Medicine, Medical Terminology, Weeks 1 to 13.
   Definitions are copied word for word from the class lecture notes (Utah State Office of
   Education curriculum, Unit Two: Medical Terminology), because the tests ask for them word
   for word. Weeks follow the handwritten week marks in her notes.
   Tests are every Thursday and cover every week so far, so the app unlocks one week each
   Monday (see `weekly`) and she can adjust it if the class is ahead or behind.
   Format: see README.md. Check it with: node tools/check-set.mjs */
(function () {
  const src = (n) => ({ label: `Class notes: Medical Terminology, Week ${n}` });

  // Per week: [id, term, exact definition from the notes, three look-alike terms for matching].
  // Look-alikes are never synonyms, so only one term fairly fits each definition.
  const WEEKS = {
    1: ["Position and planes", [
      ["position", "Anatomical position", "standing erect, with the palms and feet facing forward", ["Prone", "Supine", "Frontal plane"]],
      ["planes", "Anatomical planes", "Fixed lines of reference along which the body is often divided or sectioned to facilitate viewing of its structure.", ["Anatomical position", "Transverse plane", "Midsagittal plane"]],
      ["sagittal", "Sagittal plane", "The plane dividing the body into right and left portions.", ["Anatomical planes", "Frontal plane", "Transverse plane"]],
      ["midsagittal", "Midsagittal plane", "when the body is divided into EQUAL right and left portions.", ["Sagittal plane", "Frontal plane", "Bilateral"]],
      ["frontal", "Frontal plane", "The plane dividing the body into front and back portions.", ["Sagittal plane", "Transverse plane", "Midsagittal plane"]],
      ["transverse", "Transverse plane", "The plane dividing the body into upper and lower portions.", ["Frontal plane", "Sagittal plane", "Anatomical planes"]],
      ["superior", "Superior", "refers to a structure being closer to the head or higher than another structure in the body.", ["Inferior", "Proximal", "Anterior"]],
      ["inferior", "Inferior", "refers to a structure being closer to the feet or lower than another structure in the body.", ["Superior", "Distal", "Posterior"]],
    ]],
    2: ["Directions", [
      ["anterior", "Anterior", "refers to a structure being more in front than another structure in the body.", ["Posterior", "Superior", "Medial"]],
      ["posterior", "Posterior", "refers to a structure being more in back than another structure in the body.", ["Anterior", "Inferior", "Deep"]],
      ["medial", "Medial", "refers to a structure being closer to the midline or median plane of the body than another structure of the body.", ["Lateral", "Proximal", "Deep"]],
      ["lateral", "Lateral", "refers to a structure being farther away from the midline than another structure of the body.", ["Medial", "Distal", "Superficial"]],
      ["distal", "Distal", "with reference to the extremities only, refers to a structure being further away from the root of the limb than another structure in that limb.", ["Proximal", "Lateral", "Inferior"]],
      ["proximal", "Proximal", "with reference to the extremities only, refers to a structure being closer to the root of the limb than another structure in that limb.", ["Distal", "Medial", "Superior"]],
      ["superficial", "Superficial", "refers to a structure being closer to the surface of the body than another structure.", ["Deep", "Lateral", "Anterior"]],
      ["deep", "Deep", "refers to a structure being closer to the core of the body than another structure.", ["Superficial", "Medial", "Posterior"]],
    ]],
    3: ["More directions and movement", [
      ["ventral", "Ventral", "toward the front/belly.", ["Dorsal", "Superficial", "Supine"]],
      ["dorsal", "Dorsal", "toward the back.", ["Ventral", "Distal", "Prone"]],
      ["prone", "Prone", "lying face down.", ["Supine", "Ventral", "Inferior"]],
      ["supine", "Supine", "lying face up.", ["Prone", "Dorsal", "Superior"]],
      ["unilateral", "Unilateral", "pertaining to one side of the body.", ["Bilateral", "Lateral", "Medial"]],
      ["bilateral", "Bilateral", "pertaining to both sides of the body.", ["Unilateral", "Lateral", "Midsagittal plane"]],
      ["flexion", "Flexion", "bending at a joint or decreasing the angle between two bones.", ["Extension", "Proximal", "Prone"]],
      ["extension", "Extension", "straightening a joint or increasing the angle between two bones.", ["Flexion", "Distal", "Supine"]],
    ]],
    4: ["Movements", [
      ["hyperextension", "Hyperextension", "excessive extension of the parts at a joint beyond anatomical position.", ["Flexion", "Abduction", "Protraction"]],
      ["adduction", "Adduction", "moving a body part toward the midline of the body.", ["Abduction", "Retraction", "Medial"]],
      ["abduction", "Abduction", "moving a body part away from the midline of the body.", ["Adduction", "Protraction", "Lateral"]],
      ["pronation", "Pronation", "turning the arm or foot downward (palm or sole of the foot - down).", ["Supination", "Depression", "Prone"]],
      ["supination", "Supination", "turning the arm or foot upward (palm or sole of the foot - up).", ["Pronation", "Elevation", "Supine"]],
      ["retraction", "Retraction", "moving a part backward.", ["Protraction", "Extension", "Depression"]],
      ["protraction", "Protraction", "moving a part forward.", ["Retraction", "Flexion", "Elevation"]],
      ["elevation", "Elevation", "raising a part.", ["Protraction", "Supination", "Retraction"]],
    ]],
    5: ["More movements", [
      ["depression", "Depression", "lowering a part.", ["Elevation", "Retraction", "Pronation"]],
      ["rotation", "Rotation", "turning on a single axis.", ["Circumduction", "Elevation", "Lateral Flexion"]],
      ["circumduction", "Circumduction", "tri-planar, circular motion at the hip or shoulder.", ["Rotation", "Abduction", "Hyperextension"]],
      ["external-rotation", "External Rotation", "rotation of the hip or shoulder away from the midline.", ["Internal Rotation", "Depression", "Eversion"]],
      ["internal-rotation", "Internal Rotation", "rotation of the hip or shoulder toward the midline.", ["External Rotation", "Elevation", "Inversion"]],
      ["lateral-flexion", "Lateral Flexion", "Side-bending left or right.", ["Rotation", "Hyperextension", "Circumduction"]],
      ["inversion", "Inversion", "turning the sole of the foot inward.", ["Eversion", "Pronation", "Internal Rotation"]],
      ["eversion", "Eversion", "turning the sole of the foot outward.", ["Inversion", "Supination", "External Rotation"]],
    ]],
    6: ["Ankle, wrist and thumb, first vocabulary", [
      ["dorsiflexion", "Dorsiflexion", "ankle movement bringing the foot toward the shin.", ["Plantarflexion", "Inversion", "Retraction"]],
      ["plantarflexion", "Plantarflexion", "ankle movement pointing the foot downward.", ["Dorsiflexion", "Eversion", "Retraction"]],
      ["radial-deviation", "Radial Deviation", "Movement of the wrist towards the radius or lateral side.", ["Ulnar Deviation", "Supination", "Opposition"]],
      ["ulnar-deviation", "Ulnar Deviation", "Movement of the wrist towards the ulna or medial side.", ["Radial Deviation", "Pronation", "Opposition"]],
      ["opposition", "Opposition", "Movement of the thumb across the palm of the hand.", ["Radial Deviation", "Elevation", "Circumduction"]],
      ["abrasion", "Abrasion", "minor wound in which the skin's surface is rubbed or scraped away.", ["Avulsion", "Contusion", "Acclimatization"]],
      ["acclimatization", "Acclimatization", "the process of the body physiologically adapting to an unfamiliar environment (altitude or temperature).", ["Aerobic", "Acute", "Abrasion"]],
      ["acute", "Acute", "sudden onset, abrupt.", ["Chronic", "Atrophy", "Avulsion"]],
    ]],
    7: ["Vocabulary: aerobic to bursa", [
      ["aerobic", "Aerobic", "work or exercise requiring oxygen. (endurance, long in duration yet low in intensity)", ["Anaerobic", "Acclimatization", "Articulation"]],
      ["amnesia", "Amnesia", "lack or loss of memory usually due to head injury, shock, fatigue, or illness.", ["Analgesic", "Atrophy", "Acute"]],
      ["anaerobic", "Anaerobic", "work or exercise not requiring oxygen. (sprints, short in duration and high in intensity)", ["Aerobic", "Acute", "Avulsion"]],
      ["analgesic", "Analgesic", "an agent for producing insensibility to pain.", ["Amnesia", "Avulsion", "Anaerobic"]],
      ["articulation", "Articulation", "the site at which bones meet to form a joint.", ["Bursa", "Avulsion", "Atrophy"]],
      ["atrophy", "Atrophy", "wasting away of organ or tissue; a decrease in muscle or tissue size, usually caused by disease, injury, or loss of innervation.", ["Avulsion", "Amnesia", "Articulation"]],
      ["avulsion", "Avulsion", "tearing or pulling away of part of a structure.", ["Atrophy", "Bursa", "Articulation"]],
      ["bursa", "Bursa", "a fluid-filled sac at a joint that prevents friction.", ["Articulation", "Analgesic", "Atrophy"]],
    ]],
    8: ["Vocabulary: bursitis to contusion", [
      ["bursitis", "Bursitis", "inflammation of a bursa.", ["Bursa", "Contusion", "Constriction"]],
      ["cartilage", "Cartilage", "gristle-like padding that lies on or between bones.", ["Bursa", "Articulation", "Contusion"]],
      ["chronic", "Chronic", "of long duration or frequent recurrence.", ["Acute", "Constriction", "Contralateral"]],
      ["concentric", "Concentric", "positive work; when the muscle shortens", ["Constriction", "Contralateral", "Anaerobic"]],
      ["constriction", "Constriction", "state of being pinched off or smaller than normal.", ["Concentric", "Atrophy", "Contusion"]],
      ["contraindicate", "Contraindicate", "to advise against.", ["Contralateral", "Constriction", "Chronic"]],
      ["contralateral", "Contralateral", "on the opposite side.", ["Bilateral", "Contraindicate", "Unilateral"]],
      ["contusion", "Contusion", "a bruise to a bone or muscle from an outside force causing tissue damage and internal bleeding.", ["Bursitis", "Constriction", "Avulsion"]],
    ]],
    9: ["Vocabulary: crepitus to eccentric", [
      ["crepitus", "Crepitus", "crackling sound or feeling.", ["Cyanosis", "Dilation", "Cryotherapy"]],
      ["cryotherapy", "Cryotherapy", "treatment by use of cold.", ["Crepitus", "Diagnosis", "Cyanosis"]],
      ["cyanosis", "Cyanosis", "blue skin from lack of oxygen.", ["Crepitus", "Contusion", "Dilation"]],
      ["diagnosis", "Diagnosis", "the name of the disease or condition a person is believed to have.", ["Cryotherapy", "Dislocation", "Dilation"]],
      ["dilation", "Dilation", "state of being enlarged.", ["Constriction", "Dislocation", "Crepitus"]],
      ["dislocation", "Dislocation", "complete displacement of a bone from its normal position in a joint", ["Dilation", "Avulsion", "Diagnosis"]],
      ["eccentric", "Eccentric", "Negative work; when the muscle lengthens", ["Concentric", "Dilation", "Aerobic"]],
    ]],
    10: ["Vocabulary: ecchymosis to indicate", [
      ["ecchymosis", "Ecchymosis", "bleeding visible beneath the skin as a blue or purple patch.", ["Hydrotherapy", "Incision", "Fracture"]],
      ["edema", "Edema", "swelling due to abnormal accumulation of fluid in tissues or cavities.", ["Ecchymosis", "Hydrotherapy", "Fracture"]],
      ["effusion", "Effusion", "swelling in a joint.", ["Fracture", "Incision", "Ecchymosis"]],
      ["fracture", "Fracture", "a break or crack in a bone.", ["Incision", "Effusion", "Dislocation"]],
      ["hematoma", "Hematoma", "swelling composed of blood; internal bleeding associated with a contusion.", ["Hydrotherapy", "Indicate", "Fracture"]],
      ["hydrotherapy", "Hydrotherapy", "treatment by use of water.", ["Cryotherapy", "Hematoma", "Indicate"]],
      ["incision", "Incision", "a cut made surgically with a sharp knife.", ["Fracture", "Effusion", "Abrasion"]],
      ["indicate", "Indicate", "to advise the use of.", ["Contraindicate", "Incision", "Diagnosis"]],
    ]],
    11: ["Vocabulary: inflammation to palpation", [
      ["inflammation", "Inflammation", "the body's reaction to injury; involves redness, swelling, heat, pain, and sometimes loss of function.", ["Innervate", "Palpation", "Modality"]],
      ["innervate", "Innervate", "to supply with nerves.", ["Inflammation", "Palpation", "Indicate"]],
      ["joint-laxity", "Joint Laxity", "looseness of joint due to loose ligaments.", ["Ligament", "Laceration", "Modality"]],
      ["laceration", "Laceration", "a jagged cut or tear in the skin.", ["Joint Laxity", "Palpation", "Ligament"]],
      ["ligament", "Ligament", "tissue that connects bone to bone.", ["Joint Laxity", "Palpation", "Laceration"]],
      ["mechanism", "Mechanism of Injury", "the circumstance in which an injury occurs, for example, sudden deceleration, wounding by a projectile, or crushing by a heavy object.", ["Modality", "Inflammation", "Diagnosis"]],
      ["modality", "Modality", "method or apparatus used for healing an injury.", ["Mechanism of Injury", "Palpation", "Innervate"]],
      ["palpation", "Palpation", "examination by touch.", ["Modality", "Innervate", "Diagnosis"]],
    ]],
    12: ["Vocabulary: point tenderness to shock", [
      ["point-tenderness", "Point Tenderness", "pain at the sorest spot of an injury.", ["Referred Pain", "Prognosis", "Reduction"]],
      ["prognosis", "Prognosis", "prediction of the course and end of a disease or eventual outcome of an injury.", ["Diagnosis", "Reduction", "Proprioception"]],
      ["proprioception", "Proprioception", "is the sense of the bodies position in space.", ["Range of Motion", "Prognosis", "Point Tenderness"]],
      ["range-of-motion", "Range of Motion", "movement of a joint around a central point.", ["Proprioception", "Reduction", "Separation"]],
      ["reduction", "Reduction", "to bring back to the normal position.", ["Separation", "Range of Motion", "Prognosis"]],
      ["referred-pain", "Referred Pain", "pain that occurs away from the injury site.", ["Point Tenderness", "Shock", "Separation"]],
      ["separation", "Separation", "pulling apart of a generally non-moveable joint.", ["Reduction", "Referred Pain", "Range of Motion"]],
      ["shock", "Shock", "potentially fatal reaction of the body to injury; failure of the cardiovascular system to circulate enough blood to the body.", ["Referred Pain", "Separation", "Proprioception"]],
    ]],
    13: ["Vocabulary: sprain to vasodilator", [
      ["sprain", "Sprain", "stretching or tearing of ligaments.", ["Strain", "Subluxation", "Tendon"]],
      ["strain", "Strain", "stretching or tearing of muscle or tendon.", ["Sprain", "Subluxation", "Thermotherapy"]],
      ["subluxation", "Subluxation", "incomplete or partial dislocation of a joint.", ["Sprain", "Valgus", "Strain"]],
      ["tendon", "Tendon", "tissue that connects muscle to bone.", ["Sprain", "Subluxation", "Varus"]],
      ["thermotherapy", "Thermotherapy", "treatment by the use of heat.", ["Valgus", "Strain", "Subluxation"]],
      ["valgus", "Valgus", "distal aspect of limb forced away from the midline.", ["Varus", "Subluxation", "Sprain"]],
      ["varus", "Varus", "distal aspect of limb forced toward the midline.", ["Valgus", "Strain", "Tendon"]],
      ["vasoconstrictor", "Vasoconstrictor", "an agent causing the constriction or closing of blood vessels.", ["Vasodilator", "Thermotherapy", "Valgus"]],
      ["vasodilator", "Vasodilator", "an agent causing the dilation or opening of blood vessels.", ["Vasoconstrictor", "Thermotherapy", "Varus"]],
    ]],
  };

  // Each term becomes two questions: type the definition word for word, and match the definition to its term.
  const items = (week, list) => list.flatMap(([id, term, def, others]) => [
    { id: "def-" + id, type: "define", q: term, answer: def, src: src(week) },
    { id: "match-" + id, type: "mc", q: "Which term matches this definition?", stimulus: def, options: [term, ...others], answer: 0,
      why: `${term}: ${def}`, src: src(week) },
  ]);

  // A few extra Week 1 questions the notes add beyond the definitions.
  const extras = [
    { id: "coronal", type: "short", q: "What is another name for the frontal plane?", answer: "Coronal plane", accept: ["coronal", "coronal plane"],
      why: "The frontal plane, which divides the body into front and back portions, is also called the coronal plane.", src: src(1) },
    { id: "horizontal", type: "short", q: "What is another name for the transverse plane?", answer: "Horizontal plane", accept: ["horizontal", "horizontal plane"],
      why: "The transverse plane, which divides the body into upper and lower portions, is also called the horizontal plane.", src: src(1) },
    { id: "reference", type: "mc", q: "What is anatomical position used for?", options: ["The standard reference point for describing body positions", "The position used to splint an injured arm or leg", "The resting position for an athlete after an injury", "The way a patient should lie during an examination"], answer: 0,
      why: "Anatomical position is the standard reference point in which all positions, movements, and planes are described.", src: src(1) },
  ];

  (globalThis.GH_SETS = globalThis.GH_SETS || []).push({
    id: "sm-medterm",
    title: "Sports Medicine: Medical Terminology",
    subtitle: "Weekly vocabulary tests",
    // Week 3 is the week of Monday, November 2, 2026. Each Monday unlocks the next week; tests are Thursdays.
    weekly: { week: 3, monday: "2026-11-02", testWeekday: 4 },
    topics: Object.entries(WEEKS).map(([n, [name, list]]) => ({
      id: "week" + n, week: +n, name: `Week ${n}: ${name}`,
      items: [...items(n, list), ...(n === "1" ? extras : [])],
    })),
  });
})();
