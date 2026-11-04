/* Study set: Sports Medicine, Medical Terminology, Weeks 1 to 3.
   Definitions are copied word for word from the class lecture notes (Utah State Office of
   Education curriculum, Unit Two: Medical Terminology), because the test asks for them word
   for word. Format: see README.md. Check it with: node tools/check-set.mjs */
(function () {
  const W1 = { label: "Class notes: Medical Terminology, Week 1" };
  const W2 = { label: "Class notes: Medical Terminology, Week 2" };
  const W3 = { label: "Class notes: Medical Terminology, Week 3" };

  // [id, term, exact definition from the notes, source, three look-alike terms for matching]
  const TERMS = {
    week1: [
      ["position", "Anatomical position", "standing erect, with the palms and feet facing forward", W1, ["Prone", "Supine", "Frontal plane"]],
      ["planes", "Anatomical planes", "Fixed lines of reference along which the body is often divided or sectioned to facilitate viewing of its structure.", W1, ["Anatomical position", "Transverse plane", "Midsagittal plane"]],
      ["sagittal", "Sagittal plane", "The plane dividing the body into right and left portions.", W1, ["Anatomical planes", "Frontal plane", "Transverse plane"]],
      ["midsagittal", "Midsagittal plane", "when the body is divided into EQUAL right and left portions.", W1, ["Sagittal plane", "Frontal plane", "Bilateral"]],
      ["frontal", "Frontal plane", "The plane dividing the body into front and back portions.", W1, ["Sagittal plane", "Transverse plane", "Midsagittal plane"]],
      ["transverse", "Transverse plane", "The plane dividing the body into upper and lower portions.", W1, ["Frontal plane", "Sagittal plane", "Anatomical planes"]],
      ["superior", "Superior", "refers to a structure being closer to the head or higher than another structure in the body.", W1, ["Inferior", "Proximal", "Anterior"]],
      ["inferior", "Inferior", "refers to a structure being closer to the feet or lower than another structure in the body.", W1, ["Superior", "Distal", "Posterior"]],
    ],
    week2: [
      ["anterior", "Anterior", "refers to a structure being more in front than another structure in the body.", W2, ["Posterior", "Superior", "Medial"]],
      ["posterior", "Posterior", "refers to a structure being more in back than another structure in the body.", W2, ["Anterior", "Inferior", "Deep"]],
      ["medial", "Medial", "refers to a structure being closer to the midline or median plane of the body than another structure of the body.", W2, ["Lateral", "Proximal", "Deep"]],
      ["lateral", "Lateral", "refers to a structure being farther away from the midline than another structure of the body.", W2, ["Medial", "Distal", "Superficial"]],
      ["distal", "Distal", "with reference to the extremities only, refers to a structure being further away from the root of the limb than another structure in that limb.", W2, ["Proximal", "Lateral", "Inferior"]],
      ["proximal", "Proximal", "with reference to the extremities only, refers to a structure being closer to the root of the limb than another structure in that limb.", W2, ["Distal", "Medial", "Superior"]],
      ["superficial", "Superficial", "refers to a structure being closer to the surface of the body than another structure.", W2, ["Deep", "Lateral", "Anterior"]],
      ["deep", "Deep", "refers to a structure being closer to the core of the body than another structure.", W2, ["Superficial", "Medial", "Posterior"]],
    ],
    week3: [
      ["ventral", "Ventral", "toward the front/belly.", W3, ["Dorsal", "Superficial", "Supine"]],
      ["dorsal", "Dorsal", "toward the back.", W3, ["Ventral", "Distal", "Prone"]],
      ["prone", "Prone", "lying face down.", W3, ["Supine", "Ventral", "Inferior"]],
      ["supine", "Supine", "lying face up.", W3, ["Prone", "Dorsal", "Superior"]],
      ["unilateral", "Unilateral", "pertaining to one side of the body.", W3, ["Bilateral", "Lateral", "Medial"]],
      ["bilateral", "Bilateral", "pertaining to both sides of the body.", W3, ["Unilateral", "Lateral", "Midsagittal plane"]],
      ["flexion", "Flexion", "bending at a joint or decreasing the angle between two bones.", W3, ["Extension", "Proximal", "Prone"]],
      ["extension", "Extension", "straightening a joint or increasing the angle between two bones.", W3, ["Flexion", "Distal", "Supine"]],
    ],
  };

  // Each term becomes two questions: type the definition word for word, and match the definition to its term.
  const items = (list) => list.flatMap(([id, term, def, src, others]) => [
    { id: "def-" + id, type: "define", q: term, answer: def, src },
    { id: "match-" + id, type: "mc", q: "Which term matches this definition?", stimulus: def, options: [term, ...others], answer: 0,
      why: `${term}: ${def}`, src },
  ]);

  // A few extra questions the notes add beyond the definitions.
  const extras = [
    { id: "coronal", type: "short", q: "What is another name for the frontal plane?", answer: "Coronal plane", accept: ["coronal", "coronal plane"],
      why: "The frontal plane, which divides the body into front and back portions, is also called the coronal plane.", src: W1 },
    { id: "horizontal", type: "short", q: "What is another name for the transverse plane?", answer: "Horizontal plane", accept: ["horizontal", "horizontal plane"],
      why: "The transverse plane, which divides the body into upper and lower portions, is also called the horizontal plane.", src: W1 },
    { id: "reference", type: "mc", q: "What is anatomical position used for?", options: ["The standard reference point for describing body positions", "The position used to splint an injured arm or leg", "The resting position for an athlete after an injury", "The way a patient should lie during an examination"], answer: 0,
      why: "Anatomical position is the standard reference point in which all positions, movements, and planes are described.", src: W1 },
  ];

  (globalThis.GH_SETS = globalThis.GH_SETS || []).push({
    id: "sm-medterm",
    title: "Sports Medicine: Medical Terminology",
    subtitle: "Weeks 1 to 3: positions, planes, directions and movement",
    testDate: "2026-11-05",
    topics: [
      { id: "week1", name: "Week 1: Position and planes", items: [...items(TERMS.week1), ...extras] },
      { id: "week2", name: "Week 2: Directions", items: items(TERMS.week2) },
      { id: "week3", name: "Week 3: More directions and movement", items: items(TERMS.week3) },
    ],
  });
})();
