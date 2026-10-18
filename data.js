/* =====================================================================
   SITE CONTENT: edit this file for all content changes.
   After editing, upload data.js to github.com/bikashbiophy/Webpage.
   index.html only holds layout and rarely needs to change.

   Rules
   - Newest first in: pubs, news, path, experience.
   - Fields ending in "Html" may contain <em> and <a> tags. All other
     fields are plain text (write & as normal, it is escaped for you).
   - Numbers beside publications and conferences are added automatically.
   ===================================================================== */
window.SITE = {

  // ---------- Basics ----------
  name: "Bikash Chandra Swain",
  degree: "(Ph.D.)",
  tagline: "Single-Molecule Biophysicist",
  email: "mailofbikash@gmail.com",
  updated: "August 2026",      // footer "Updated ..." text
  copyrightYear: "2026",

  introHtml: "I'm a biophysicist interested in studying <em>biomolecular interactions using ensemble and single-molecule biophysics</em>. I work mainly on intrinsically disordered proteins: their conformational dynamics, their self-association, and how they drive the formation of biomolecular condensates.",

  portrait: { src: "assets/bikash-portrait.jpg", alt: "Dr. Bikash Chandra Swain" },
  role: "Guest Faculty, Physics",
  affiliation: { name: "Vikram Dev University", url: "https://vikramdevuniversity.ac.in/#/home", place: "Jayapur, Odisha" },
  formerly: {
    links: [
      { name: "ARNA Lab", url: "https://arna.cnrs.fr/en/home-page/" },
      { name: "IECB", url: "https://www.iecb.u-bordeaux.fr/en" }
    ],
    place: "Bordeaux"
  },

  // Social / profile links. hero:true shows the icon under the intro paragraph.
  // Footer shows all of them (plus email). Known keys: orcid, linkedin, bluesky, x, scholar
  social: [
    { key: "orcid",    url: "https://orcid.org/0000-0001-6002-8652", hero: true },
    { key: "linkedin", url: "https://www.linkedin.com/in/bikash-chandra-swain-68862425/", hero: true },
    { key: "bluesky",  url: "https://bsky.app/profile/bikashphy.bsky.social", hero: true },
    { key: "x",        url: "https://x.com/bikashphy", hero: true },
    { key: "scholar",  url: "https://scholar.google.com/citations?user=85MmpgkAAAAJ&hl=en", hero: false }
  ],

  // ---------- Section lead paragraphs ----------
  researchLeadHtml: "How do proteins with <em>no fixed shape</em> still manage to do precise biological work? Most of my work has circled that question. I began with ensemble spectroscopy of protein–ligand interactions, then moved to single-molecule measurements of disordered proteins and the condensates they form. I would like to build a lab around what comes next.",

  peopleLeadHtml: "Most of what I know I learned <em>from other people</em>: the mentors who trained me, the labmates and collaborators I've worked beside, and the students I've helped along the way. Many of them have become friends.",

  outreachLeadHtml: "Disordered proteins and condensates are counter-intuitive, which is what makes them fun to explain. I'm putting together a set of <em>animations and plain-language pieces</em> to make single-molecule biophysics accessible beyond the lab.",

  footer: {
    heading: "Get in touch.",
    sub: "Single-molecule biophysics · IDPs · biomolecular condensates"
  },

  // ---------- What I'm curious about (numbered automatically) ----------
  focus: [
    { title: "Biomolecular interactions", body: "Binding, stability and conformational change in proteins, measured by ensemble fluorescence, CD and computation." },
    { title: "Protein–ligand interactions", body: "How small molecules, vitamins and nanoparticles reshape a protein's structure and dynamics." },
    { title: "IDP conformational dynamics", body: "Conformational ensembles and chain reconfiguration of disordered regions, by smFRET and nanosecond FCS." },
    { title: "Self-association & condensates", body: "Dynamic oligomerisation, phase diagrams and the condensates disordered proteins build." },
    { title: "Single-molecule tool development", body: "Building and aligning home-built FCS instrumentation, and developing measurement and analysis workflows for it." }
  ],

  // ---------- Publications (newest first) ----------
  pubs: [
    { year: "2024", title: "Disordered regions of human eIF4B orchestrate a dynamic self-association landscape", authors: "Swain B.C., Sarkis P., Ung V., Rousseau S., Fernandez L., Meltonyan A., Aho V.E., Mercadante D., Mackereth C.D., Aznauryan M.", venue: "Nature Communications, 15(1), 8766", doi: "https://doi.org/10.1038/s41467-024-53136-1" },
    { year: "2022", title: "Z-scan analysis and theoretical studies of dopamine under physiological conditions", authors: "Sakshi, Swain B.C., Das A.K., Pathak N.K., Tripathy U.", venue: "Spectrochimica Acta Part A, 271, 120890", doi: "https://doi.org/10.1016/j.saa.2022.120890" },
    { year: "2022", title: "In silico investigation of spice molecules as potent inhibitor of SARS-CoV-2", authors: "Rout J., Swain B.C., Tripathy U.", venue: "Journal of Biomolecular Structure and Dynamics, 40(2), 860–874", doi: "https://doi.org/10.1080/07391102.2020.1819879" },
    { year: "2022", title: "Interaction of vitamin B12 with β-lactoglobulin: a computational study", authors: "Swain B.C.*, Rout J.*, Tripathy U. (*equal contribution)", venue: "Journal of Biomolecular Structure and Dynamics, 40(5), 2146–2155", doi: "https://doi.org/10.1080/07391102.2020.1835731" },
    { year: "2021", title: "Norepinephrine exhibits thermo-optical nonlinearity under physiological conditions", authors: "Sakshi, Swain B.C., Das A.K., Pathak N.K., Tripathy U.", venue: "Physical Chemistry Chemical Physics, 23(41), 23473–23477", doi: "https://doi.org/10.1039/D1CP03534G" },
    { year: "2021", title: "Conformational dynamics of myoglobin in the presence of vitamin B12: a spectroscopic and in silico investigation", authors: "Rout J., Swain B.C., Subadini S., Mishra P.P., Sahoo H., Tripathy U.", venue: "International Journal of Biological Macromolecules, 192, 564–573", doi: "https://doi.org/10.1016/j.ijbiomac.2021.10.030" },
    { year: "2021", title: "Spectroscopic and computational insight into the conformational dynamics of hemoglobin in the presence of vitamin B12", authors: "Rout J., Swain B.C., Subadini S., Mishra P.P., Sahoo H., Tripathy U.", venue: "International Journal of Biological Macromolecules, 189, 306–315", doi: "https://doi.org/10.1016/j.ijbiomac.2021.08.096" },
    { year: "2020", title: "Effect of micro-environment on protein conformation studied by fluorescence-based techniques", authors: "Millan S., Swain B.C., Mishra P.P., Tripathy U., Sahoo H.", venue: "Journal of Molecular Liquids, 320, 114489", doi: "https://doi.org/10.1016/j.molliq.2020.114489" },
    { year: "2020", title: "A novel tool to investigate the early and late stages of α-synuclein aggregation", authors: "Ghosh S., Sakshi, Swain B.C., Chakraborty R., Tripathy U., Chattopadhyay K.", venue: "ACS Chemical Neuroscience, 11(11), 1610–1619", doi: "https://doi.org/10.1021/acschemneuro.0c00068" },
    { year: "2020", title: "A spectroscopic and computational intervention of the interaction of lysozyme with 6-mercaptopurine", authors: "Swain B.C., Mukherjee S.K., Rout J., Sakshi, Mishra P.P., Mukherjee M., Tripathy U.", venue: "Analytical and Bioanalytical Chemistry, 412, 2565–2577", doi: "https://doi.org/10.1007/s00216-020-02483-1" },
    { year: "2020", title: "Spectroscopic insight into the interaction of dopamine with spherical gold nanoparticles", authors: "Rout J., Swain B.C., Mishra P.P., Tripathy U.", venue: "Journal of Photochemistry and Photobiology B: Biology, 203, 111770", doi: "https://doi.org/10.1016/j.jphotobiol.2019.111770" },
    { year: "2020", title: "Biophysical study on complex formation between β-lactoglobulin and vitamin B12", authors: "Swain B.C., Subadini S., Rout J., Sakshi, Mishra P.P., Sahoo H., Tripathy U.", venue: "Food Chemistry, 312, 126064", doi: "https://doi.org/10.1016/j.foodchem.2019.126064" },
    { year: "2020", title: "Analyzing nonlinear trends in curcumin: a comparative study", authors: "Sakshi, Pathak N.K., Swain B.C., Tripathy U.", venue: "Optics & Laser Technology, 121, 105822", doi: "https://doi.org/10.1016/j.optlastec.2019.105822" },
    { year: "2020", title: "A simulation study on the influence of energy migration and relative interaction strengths of homo- and hetero-FRET on the net FRET efficiency", authors: "Rout J., Swain B.C., Sakshi, Biswas S., Das A.K., Tripathy U.", venue: "Spectrochimica Acta Part A, 226, 117599", doi: "https://doi.org/10.1016/j.saa.2019.117599" },
    { year: "2019", title: "Probing third-order nonlinearity in serotonin: a Z-scan study", authors: "Sakshi, Swain B.C., Das A.K., Tripathy U.", venue: "Spectrochimica Acta Part A, 223, 117319", doi: "https://doi.org/10.1016/j.saa.2019.117319" },
    { year: "2018", title: "Monitoring the binding of serotonin to silver nanoparticles: a fluorescence spectroscopic investigation", authors: "Swain B.C., Mishra P.P., Mishra H., Tripathy U.", venue: "Journal of Photochemistry and Photobiology A: Chemistry, 367, 219–225", doi: "https://doi.org/10.1016/j.jphotochem.2018.08.041" }
  ],

  chapters: [
    { year: "2022", title: "Fluorescence correlation spectroscopy: a highly sensitive tool for probing intracellular molecular dynamics and disease diagnosis", authors: "Swain B.C., Das A.K., Rout J., Biswas S., Tripathy U.", venue: "In: Optical Spectroscopic and Microscopic Techniques, pp. 177–195. Springer, Singapore", doi: "https://doi.org/10.1007/978-981-16-4550-1_8" }
  ],

  // ---------- Conferences & Seminars (newest first). date = "Mon YYYY" ----------
  news: [
    { date: "Dec 2025", text: "National Workshop on Fluorescence and Raman Spectroscopy (FCS XVI), Saha Institute of Nuclear Physics, Kolkata", type: "Oral" },
    { date: "Nov 2024", text: "International Conference on Optics Within Life Sciences (OWLS-17), IIT Bombay", type: "Poster" },
    { date: "Sep 2024", text: "Chemistry Meets Biology seminar series, IECB Bordeaux", type: "Oral" },
    { date: "Jan 2024", text: "Biennial ARNA Lab meeting, Cauterets, France", type: "Oral" },
    { date: "Nov 2023", text: "Chemistry Biology Interface Day (CBID), Bordeaux", type: "Flash talk + poster" },
    { date: "Sep 2023", text: "28th International Workshop on Single Molecule Spectroscopy and Super-resolution Microscopy, Berlin", type: "Poster" },
    { date: "Dec 2019", text: "National Symposium on Light–Matter Interactions (NSLIMI), IIT Madras", type: "Poster" },
    { date: "Dec 2019", text: "National Workshop on Fluorescence and Raman Spectroscopy (FCS 2019), TIFR Hyderabad", type: "Poster" },
    { date: "Feb 2019", text: "13th National Symposium on Radiation and Photochemistry (NSRP), Visva-Bharati Santiniketan", type: "Poster" },
    { date: "Dec 2018", text: "International Conference on Fiber Optics and Photonics, IIT Delhi", type: "Poster" },
    { date: "Nov 2018", text: "National Workshop on Fluorescence and Raman Spectroscopy (FCS 2018), JNU and IIT Delhi", type: "Poster" },
    { date: "Dec 2017", text: "National Workshop on Fluorescence and Raman Spectroscopy (FCS 2017), IIT Guwahati", type: "Poster" }
  ],

  // ---------- People & path (timeline, newest first) ----------
  // placeUrl, labName, labUrl are optional.
  path: [
    { year: "Today", place: "", tag: "Now", text: "Looking for the group where I can keep asking these questions, and for the next people to be curious about disordered proteins with." },
    { year: "2021–2024", place: "IECB · Bordeaux", placeUrl: "https://www.iecb.u-bordeaux.fr/en", tag: "Postdoc", text: "Grew into single-molecule biophysics with Dr. Mikayel Aznauryan, learning how to think critically about a problem and how to keep learning, alongside labmates in the ARNA lab.", labName: "Aznauryan Lab", labUrl: "https://www.aznauryan-lab.com/" },
    { year: "2021–2024", place: "IECB · Bordeaux", placeUrl: "https://www.iecb.u-bordeaux.fr/en", tag: "Teaching", text: "Co-supervised a Master's student and ran the annual smFRET practical for Master's students. That is where I learned how to communicate science, and how to work with young minds just starting out." },
    { year: "2015–2020", place: "IIT (ISM) Dhanbad", tag: "Ph.D.", text: "Found my footing in spectroscopy and single-molecule instrumentation with Prof. Umakanta Tripathy, assembling a home-built FCS setup to study how biomolecules bind, and learning the nonlinear optical tool Z-scan from labmates who became close friends.", labName: "Biophysics Lab, IIT (ISM)", labUrl: "https://biophysicsiitism.wixsite.com/website-1" },
    { year: "2013–2014", place: "Utkal University", tag: "M.Phil.", text: "Worked on the synthesis and characterization of ferrofluids under the supervision of Prof. Naresh Chandra Mishra." }
  ],

  // ---------- CV ----------
  experience: [
    { role: "Guest Faculty in Physics", years: "Aug 2026 – present", org: "Department of Physics, Vikram Dev University, Jayapur, Odisha, India" },
    { role: "Postdoctoral Researcher", years: "2021 – 2024", org: "Aznauryan group, ARNA Lab (INSERM U1212 / CNRS UMR5320), IECB / University of Bordeaux, France" },
    { role: "Ph.D. Researcher", years: "2015 – 2020", org: "Department of Physics, IIT (ISM) Dhanbad, India. Supervisor: Prof. Umakanta Tripathy" }
  ],

  education: [
    { degree: "Ph.D. in Physics", school: "IIT (ISM) Dhanbad", years: "2015 – 2020" },
    { degree: "M.Phil. in Physics (Ferrofluids)", school: "Utkal University", years: "2013 – 2014" },
    { degree: "M.Sc. in Physics (Condensed Matter specialization)", school: "Utkal University", years: "2011 – 2013" },
    { degree: "B.Sc. Physics (Hons.)", school: "S.V.M. (Autonomous) College, Jagatsinghpur · Utkal University", years: "2008 – 2011" }
  ],

  teaching: [
    { level: "B.Sc.", courses: ["Quantum Mechanics and Application", "Digital Systems (Minor)", "Practical: Mechanics", "Practical: Digital Systems"] },
    { level: "M.Sc. (PG)", courses: ["Indian Knowledge System in Physics"] }
  ],

  awards: [
    { title: "FRM Postdoctoral Fellowship", org: "Fondation pour la Recherche Médicale, France. Competitive national fellowship", url: "https://www.frm.org/" },
    { title: "MSCA Seal of Excellence", org: "Marie Skłodowska-Curie Actions, European Commission (2022)", url: "https://marie-sklodowska-curie-actions.ec.europa.eu/" }
  ],

  skills: ["smFRET", "nanosecond FCS", "FCS", "RASP", "LLPS phase diagrams", "DIC & fluorescence microscopy", "Protein purification", "RP-HPLC", "Cys-maleimide labeling", "Circular dichroism", "Time-resolved fluorescence", "Mathematica (Fretica)", "Origin", "PyMOL"],

  memberships: [
    { role: "Life member", name: "Fluorescence Society", url: "https://fluorescenceindia.org/" },
    { role: "Life member", name: "Indian Biophysical Society", url: "https://biophysicsindia.org/" },
    { role: "Life member", name: "Odisha Physical Society", url: "http://www.orissaphysicalsociety.org/about_us.php" }
  ],

  // ---------- Elsewhere on the web ----------
  links: [
    { name: "Phase Separation (Animation Lab, University of Utah)", desc: "Janet Iwasa's animated explainer of biomolecular condensates and liquid–liquid phase separation.", url: "https://animationlab.utah.edu/phase-separation", tag: "Teaching" },
    { name: "Condensates.com", desc: "A community hub for the biomolecular-condensate field, with primers, reviews and news on phase separation in biology.", url: "https://condensates.com/", tag: "Condensates" },
    { name: "DisProt", desc: "The curated reference database of experimentally validated intrinsically disordered proteins and regions.", url: "https://disprot.org/", tag: "Database" },
    { name: "IUPred3", desc: "Web server for predicting intrinsically disordered regions from sequence. A first stop for any new IDP.", url: "https://iupred.elte.hu/", tag: "Prediction" },
    { name: "D²P²", desc: "Database of disordered protein predictions, aggregating multiple predictors with post-translational modification data.", url: "https://d2p2.pro/", tag: "Database" },
    { name: "ExPASy ProtParam", desc: "Computes physico-chemical parameters from a protein sequence: MW, pI, extinction coefficient and more.", url: "https://web.expasy.org/protparam/", tag: "Sequence" },
    { name: "AlphaSync (St. Jude)", desc: "Explore AlphaFold models alongside disorder and conformational properties across the proteome.", url: "https://alphasync.stjude.org/", tag: "Structure" },
    { name: "SPRpages", desc: "A community reference for surface plasmon resonance: theory, experimental design and data analysis.", url: "https://www.sprpages.nl/", tag: "SPR" },
    { name: "FRET community", desc: "The single-molecule FRET community hub, with benchmarks, standards and resources for reliable smFRET.", url: "https://fret.community/", tag: "smFRET" },
    { name: "Spectragryph", desc: "All-round optical spectroscopy software. Opens, processes, compares and converts spectra from almost any instrument format.", url: "https://www.effemm2.de/spectragryph/about.html", tag: "Spectra" },
    { name: "FluorTools", desc: "Free software for fluorescence data: spectral analysis, quantum yields, anisotropy and FRET calculations.", url: "https://www.fluortools.com/home", tag: "Fluorescence" },
    { name: "Buffer Calculator (University of Liverpool)", desc: "Work out the pH and ionic strength of a buffer before you make it. Recipes for any buffer, concentration and temperature.", url: "https://www.liverpool.ac.uk/pfg//Tools/BuffferCalc/Buffer.html", tag: "Buffers" },
    { name: "IDT OligoAnalyzer", desc: "Standard calculator for oligo Tm, hairpins and self-dimers. Handy for labelling and cloning design.", url: "https://sg.idtdna.com/pages/tools/oligoanalyzer", tag: "Lab tool" },
    { name: "ATDBio Oligo Calculator", desc: "Quick oligo properties for DNA and RNA: molecular weight, Tm and extinction coefficient.", url: "https://atdbio.com/tools/oligo-calculator", tag: "Lab tool" }
  ],

  // ---------- Gallery ----------
  // bg = colour shown behind the image while it loads
  gallery: [
    { src: "assets/gallery-ferrofluid.jpg", alt: "Ferrofluid Rosensweig spikes in a petri dish", bg: "#0c0c0c", captionHtml: "Ferrofluid spikes, the Rosensweig instability, from my M.Phil. work on ferrofluids · <a href=\"https://www.youtube.com/watch?v=sd9EZ0CuTv4\" target=\"_blank\" rel=\"noopener\" class=\"hv-dark-b\" style=\"color:#2f6f6a;border-bottom:1px solid #b6d0cc\">▶ watch them form</a>" },
    { src: "assets/gallery-purification.jpg", alt: "Fluorescently labelled protein purified on a Sephadex G-25 column", bg: "#ece7dd", captionHtml: "Fluorescently labelled protein purified on a Sephadex G-25 column, PhD" },
    { src: "assets/gallery-laser-focus.jpg", alt: "Green laser beam focused by a microscope objective into a cuvette", bg: "#0c0c0c", captionHtml: "A green laser focused into a cuvette by a microscope objective" },
    { src: "assets/gallery-fcs-setup-v2.jpg", alt: "Home-built FCS single-molecule setup", bg: "#ece7dd", captionHtml: "Home-built FCS / single-molecule setup, PhD, IIT (ISM) Dhanbad (2019)" },
    { src: "assets/gallery-fcs-screen.jpg", alt: "FCS acquisition, autocorrelation and fitting software", bg: "#ece7dd", captionHtml: "Live FCS acquisition, autocorrelation and fitting on the home-built setup" },
    { src: "assets/gallery-condensates3.jpg", alt: "Two protein condensate droplets fusing into one", bg: "#3a3f3c", captionHtml: "Two protein condensate droplets fusing into one: liquid–liquid phase separation under the microscope" }
  ],

  // ---------- Beyond the lab: gardening ----------
  garden: {
    blurb: "Wherever I've worked there's been a garden nearby, and friends to tend it with.",
    groups: [
      { label: "P.G. Dept. of Physics, Utkal University · 2011–2014", items: [
        { src: "assets/garden-hibiscus.jpg", alt: "Hibiscus in bloom", caption: "Hibiscus" },
        { src: "assets/garden-rose-orange.jpg", alt: "Orange rose", caption: "Rose" },
        { src: "assets/garden-rose-red.jpg", alt: "Red rose", caption: "Rose" },
        { src: "assets/garden-marigold.jpg", alt: "Marigold", caption: "Marigold" }
      ] },
      { label: "Dept. of Physics, IIT (ISM) Dhanbad · 2019", items: [
        { src: "assets/garden-dhanbad-white.jpg", alt: "White hibiscus", caption: "White hibiscus" },
        { src: "assets/garden-dhanbad-pink1.jpg", alt: "Pink hibiscus", caption: "Hibiscus" },
        { src: "assets/garden-dhanbad-pink2.jpg", alt: "Pink hibiscus in bloom", caption: "Hibiscus" },
        { src: "assets/garden-dhanbad-pots.jpg", alt: "Potted hibiscus plants", caption: "The pots" }
      ] }
    ]
  },

  // ---------- Science communication cards ----------
  outreach: [
    { slot: "animation still", tag: "In progress", title: "What is a disordered protein?", body: "A short animation on proteins that work without a fixed shape." },
    { slot: "article cover", tag: "Planned", title: "When proteins form droplets", body: "A plain-language piece on liquid–liquid phase separation in cells." },
    { slot: "talk photo", tag: "Ongoing", title: "Talks & seminars", body: "Explaining single-molecule biophysics at conferences, seminars and practicals." }
  ]
};
