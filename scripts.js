const questions = [
  {
    question: "What is the most common cause of dry socket?",
    choices: ["Poor blood clot formation", "Excessive rinsing post-op", "Infection", "Use of smoking post-extraction"],
    correctAnswer: "Poor blood clot formation",
    explanation: "Dry socket occurs when the blood clot in the extraction site is lost or doesn't form properly."
  },
  {
    question: "Which is the first step in the basic life support algorithm?",
    choices: ["Start chest compressions", "Open the airway", "Call for help", "Check responsiveness"],
    correctAnswer: "Check responsiveness",
    explanation: "The first step is to check if the patient is responsive before calling for help."
  },
  {
    question: "What is the recommended fluoride concentration in toothpaste for an adult with high caries risk?",
    choices: ["500 ppm", "1000 ppm", "2800 ppm", "5000 ppm"],
    correctAnswer: "5000 ppm",
    explanation: "A higher fluoride concentration (5000 ppm) is recommended for adults at high risk of caries."
  },
    {
    question: "Which type of caries is typically seen in older adults?",
    choices: ["Enamel caries", "Root caries", "Fissure caries", "Incisal caries"],
    correctAnswer: "Root caries",
    explanation: "Root caries is more common in older adults due to gum recession exposing the root surfaces."
  },
  {
    question: "Which of the following is a sign of temporomandibular joint dysfunction (TMD)?",
    choices: ["Clicking sound", "Swelling", "Pain in the lower teeth", "Tongue ulcers"],
    correctAnswer: "Clicking sound",
    explanation: "A clicking sound in the temporomandibular joint is a common sign of TMD."
  },
  {
    question: "Which condition is commonly associated with bruxism?",
    choices: ["Sleep apnea", "GERD", "Oral candidiasis", "Cleft palate"],
    correctAnswer: "Sleep apnea",
    explanation: "Bruxism is often associated with sleep disorders such as obstructive sleep apnea."
  },
  {
    question: "Which instrument is used to remove subgingival calculus?",
    choices: ["Curette", "Scaler", "Explorer", "Mirror"],
    correctAnswer: "Curette",
    explanation: "Curettes are used to remove subgingival calculus during periodontal scaling and root planing."
  },
  {
    question: "Which bacteria are most commonly implicated in dental caries?",
    choices: ["Streptococcus mutans", "Lactobacillus", "Staphylococcus aureus", "Porphyromonas gingivalis"],
    correctAnswer: "Streptococcus mutans",
    explanation: "Streptococcus mutans are the primary bacteria involved in the initiation of dental caries."
  },
  {
    question: "What is the main cause of halitosis?",
    choices: ["Oral bacteria", "Tooth decay", "Gum disease", "Xerostomia"],
    correctAnswer: "Oral bacteria",
    explanation: "Oral bacteria, particularly those in anaerobic conditions, are the primary cause of bad breath."
  },
  {
    question: "What is the proper treatment for a patient with a chipped tooth involving the enamel only?",
    choices: ["Crown", "Filling", "Bonding", "Extraction"],
    correctAnswer: "Bonding",
    explanation: "Dental bonding is a common treatment for minor enamel chips."
  },
  {
    question: "Which muscle is primarily responsible for jaw closure?",
    choices: ["Masseter", "Temporalis", "Lateral pterygoid", "Medial pterygoid"],
    correctAnswer: "Masseter",
    explanation: "The masseter muscle is one of the main muscles responsible for closing the jaw."
  },
  {
    question: "Which condition is characterized by inflammation of the mucous membranes of the mouth?",
    choices: ["Stomatitis", "Glossitis", "Gingivitis", "Periodontitis"],
    correctAnswer: "Stomatitis",
    explanation: "Stomatitis refers to inflammation of the mucous membranes lining the mouth."
  },
  {
    question: "What is the first stage of plaque formation?",
    choices: ["Pellicle formation", "Colonization by bacteria", "Maturation of plaque", "Mineralization"],
    correctAnswer: "Pellicle formation",
    explanation: "The first stage of plaque formation involves the formation of a pellicle, a protein film on the tooth surface."
  },
   {
    question: "What is the most common complication of wisdom tooth extraction?",
    choices: ["Dry socket", "Infection", "Nerve injury", "Excessive bleeding"],
    correctAnswer: "Dry socket",
    explanation: "Dry socket occurs when the blood clot at the extraction site dislodges or dissolves."
  },
  {
    question: "What is the recommended concentration of fluoride in drinking water to prevent dental caries?",
    choices: ["0.5 ppm", "1.0 ppm", "1.5 ppm", "2.0 ppm"],
    correctAnswer: "1.0 ppm",
    explanation: "The optimal fluoride concentration in drinking water for caries prevention is around 1.0 ppm."
  },
  {
    question: "Which bacteria is primarily associated with dental caries?",
    choices: ["Streptococcus mutans", "Porphyromonas gingivalis", "Lactobacillus acidophilus", "Fusobacterium nucleatum"],
    correctAnswer: "Streptococcus mutans",
    explanation: "Streptococcus mutans plays a major role in the formation of dental caries."
  },
  {
    question: "Which of the following is the first sign of gingivitis?",
    choices: ["Bleeding gums", "Gum recession", "Tooth mobility", "Bone loss"],
    correctAnswer: "Bleeding gums",
    explanation: "Bleeding gums during brushing or spontaneously is an early sign of gingivitis."
  },
  {
    question: "What is the term for inflammation of the tongue?",
    choices: ["Glossitis", "Stomatitis", "Gingivitis", "Pericoronitis"],
    correctAnswer: "Glossitis",
    explanation: "Glossitis refers to inflammation of the tongue, often characterized by swelling, pain, or changes in color."
  },
  {
    question: "Which of the following is the best imaging method for detecting interproximal caries?",
    choices: ["Bitewing radiographs", "Periapical radiographs", "Panoramic radiographs", "Occlusal radiographs"],
    correctAnswer: "Bitewing radiographs",
    explanation: "Bitewing radiographs are the most effective for detecting interproximal caries between teeth."
  },
  {
    question: "Which is the first stage in plaque formation?",
    choices: ["Pellicle formation", "Bacterial colonization", "Mineralization", "Maturation"],
    correctAnswer: "Pellicle formation",
    explanation: "Pellicle formation is the first stage of plaque development, where a protein film forms on the tooth surface."
  },
  {
    question: "What is the recommended treatment for a small cavity in the enamel?",
    choices: ["Filling", "Crown", "Root canal", "No treatment"],
    correctAnswer: "Filling",
    explanation: "A filling is typically used to restore small cavities in the enamel."
  },
  {
    question: "Which of the following is the main cause of bad breath (halitosis)?",
    choices: ["Oral bacteria", "Tooth decay", "Tonsillitis", "Dry mouth"],
    correctAnswer: "Oral bacteria",
    explanation: "The anaerobic bacteria in the mouth break down food and produce sulfur compounds that cause bad breath."
  },
  {
    question: "What is the proper management for an avulsed permanent tooth?",
    choices: ["Reimplant immediately", "Place in water", "Wait for swelling to subside", "Cover with gauze and visit the dentist"],
    correctAnswer: "Reimplant immediately",
    explanation: "An avulsed permanent tooth should be reimplanted immediately if possible, or stored in milk until a dentist can reimplant it."
  },
  {
    question: "What is the most common site for oral cancer?",
    choices: ["Tongue", "Gingiva", "Buccal mucosa", "Hard palate"],
    correctAnswer: "Tongue",
    explanation: "The tongue, particularly the lateral borders, is the most common site for oral cancer."
  },
  {
    question: "Which condition is characterized by the absence of several teeth from birth?",
    choices: ["Hypodontia", "Hyperdontia", "Amelogenesis imperfecta", "Oligodontia"],
    correctAnswer: "Hypodontia",
    explanation: "Hypodontia refers to the congenital absence of fewer than six teeth."
  },
  {
    question: "What is the most common cause of pulpitis?",
    choices: ["Dental caries", "Gum disease", "Trauma", "Oral infection"],
    correctAnswer: "Dental caries",
    explanation: "Pulpitis is commonly caused by deep caries that reach the pulp of the tooth, resulting in inflammation."
  },
  {
    question: "Which of the following is most commonly associated with periodontal disease?",
    choices: ["Plaque", "Tooth decay", "Bruxism", "Dry mouth"],
    correctAnswer: "Plaque",
    explanation: "Plaque accumulation on teeth and gums is the primary cause of periodontal disease."
  },
  {
    question: "What is the function of a dental dam during a procedure?",
    choices: ["Isolate the tooth", "Prevent infection", "Reduce bleeding", "Protect the gums"],
    correctAnswer: "Isolate the tooth",
    explanation: "A dental dam isolates the tooth being treated to prevent saliva contamination and improve visibility."
  },
  {
    question: "Which instrument is used to measure pocket depth around a tooth?",
    choices: ["Periodontal probe", "Scaler", "Curette", "Explorer"],
    correctAnswer: "Periodontal probe",
    explanation: "A periodontal probe is used to measure the depth of the gum pockets to assess periodontal health."
  },
  {
    question: "What is the recommended treatment for pericoronitis?",
    choices: ["Irrigation and antibiotics", "Extraction", "Filling", "Root canal"],
    correctAnswer: "Irrigation and antibiotics",
    explanation: "Pericoronitis is often treated with irrigation of the infected area and antibiotics to clear the infection."
  },
  {
    question: "What is the most common type of oral fungal infection?",
    choices: ["Candidiasis", "Leukoplakia", "Lichen planus", "Pemphigus vulgaris"],
    correctAnswer: "Candidiasis",
    explanation: "Oral candidiasis, or thrush, is the most common fungal infection in the mouth."
  },
  {
    question: "Which of the following is a common symptom of temporomandibular joint dysfunction (TMD)?",
    choices: ["Jaw pain", "Toothache", "Gum swelling", "Bleeding gums"],
    correctAnswer: "Jaw pain",
    explanation: "TMD often presents as jaw pain, clicking, and restricted movement of the jaw."
  },
  {
    question: "What is the primary role of fluoride in preventing dental caries?",
    choices: ["Remineralization", "Whitening", "Desensitizing", "Stain removal"],
    correctAnswer: "Remineralization",
    explanation: "Fluoride helps remineralize enamel and prevent decay by making teeth more resistant to acid attacks."
  },
  {
    question: "Which tooth is typically referred to as the 'cornerstone' of the dental arch?",
    choices: ["Central incisor", "Canine", "Premolar", "Molar"],
    correctAnswer: "Canine",
    explanation: "The canine is often referred to as the 'cornerstone' of the dental arch because of its prominent position and long root."
  },
  {
    question: "Which nerve innervates the maxillary teeth?",
    choices: ["Inferior alveolar nerve", "Maxillary nerve", "Mandibular nerve", "Facial nerve"],
    correctAnswer: "Maxillary nerve",
    explanation: "The maxillary nerve, a branch of the trigeminal nerve (cranial nerve V), innervates the upper (maxillary) teeth."
  },
  {
    question: "Which is the hardest tissue in the human body?",
    choices: ["Dentin", "Enamel", "Cementum", "Bone"],
    correctAnswer: "Enamel",
    explanation: "Enamel is the hardest tissue in the human body, covering the outer surface of teeth and providing protection against decay."
  },

  // Oral Pathology
  {
    question: "What is the primary cause of oral leukoplakia?",
    choices: ["Chronic irritation", "Viral infection", "Fungal infection", "Autoimmune disease"],
    correctAnswer: "Chronic irritation",
    explanation: "Oral leukoplakia is often caused by chronic irritation, including tobacco use or poorly fitting dentures."
  },
  {
    question: "Which of the following is a common precursor to oral cancer?",
    choices: ["Leukoplakia", "Oral lichen planus", "Aphthous ulcers", "Herpes labialis"],
    correctAnswer: "Leukoplakia",
    explanation: "Leukoplakia is considered a potentially malignant lesion and can be a precursor to oral squamous cell carcinoma."
  },

  // Preventive Dentistry
  {
    question: "Which of the following is the primary aim of applying dental sealants?",
    choices: ["To prevent tooth sensitivity", "To prevent dental caries", "To improve tooth aesthetics", "To reduce enamel wear"],
    correctAnswer: "To prevent dental caries",
    explanation: "Dental sealants are applied to the chewing surfaces of molars to prevent dental caries, especially in children."
  },
  {
    question: "What is the ideal frequency of fluoride varnish application in children at high risk of caries?",
    choices: ["Every 3 months", "Every 6 months", "Annually", "Every 2 years"],
    correctAnswer: "Every 3 months",
    explanation: "For children at high risk of caries, fluoride varnish should be applied every 3 months to maximize protection."
  },

  // Restorative Dentistry
  {
    question: "Which material is commonly used for dental fillings due to its durability and strength?",
    choices: ["Amalgam", "Composite resin", "Glass ionomer", "Porcelain"],
    correctAnswer: "Amalgam",
    explanation: "Dental amalgam has been widely used for fillings because of its durability, strength, and cost-effectiveness."
  },
  {
    question: "Which of the following is the first step in performing a root canal procedure?",
    choices: ["Removing decay", "Locating the root canals", "Opening the pulp chamber", "Filling the canals"],
    correctAnswer: "Opening the pulp chamber",
    explanation: "In root canal treatment, the first step is to access the pulp chamber to remove infected pulp and relieve pain."
  },

  // Pharmacology
  {
    question: "Which of the following is a common analgesic prescribed for dental pain?",
    choices: ["Aspirin", "Ibuprofen", "Paracetamol", "Codeine"],
    correctAnswer: "Ibuprofen",
    explanation: "Ibuprofen is an NSAID commonly prescribed for dental pain due to its anti-inflammatory properties."
  },
  {
    question: "What is the antibiotic of choice for treating a dental abscess in a patient allergic to penicillin?",
    choices: ["Clindamycin", "Amoxicillin", "Erythromycin", "Metronidazole"],
    correctAnswer: "Clindamycin",
    explanation: "Clindamycin is often prescribed for dental abscesses in patients allergic to penicillin due to its effectiveness against anaerobic bacteria."
  },

  // Radiology
  {
    question: "Which radiographic view is typically used to evaluate the entire tooth and surrounding bone?",
    choices: ["Bitewing", "Periapical", "Panoramic", "Occlusal"],
    correctAnswer: "Periapical",
    explanation: "A periapical radiograph shows the entire tooth and surrounding bone, making it useful for detecting root and bone pathology."
  },
  {
    question: "Which of the following radiographic views is best for assessing the maxillary sinus?",
    choices: ["Occlusal", "Bitewing", "Panoramic", "Lateral cephalometric"],
    correctAnswer: "Panoramic",
    explanation: "Panoramic radiographs are used to assess the entire maxilla and mandible, including the maxillary sinuses."
  },
  
  // Oral Surgery
  {
    question: "What is the most common cause of mandibular fractures?",
    choices: ["Trauma", "Cyst formation", "Infection", "Osteoporosis"],
    correctAnswer: "Trauma",
    explanation: "Mandibular fractures most commonly result from trauma, such as car accidents, sports injuries, or physical assaults."
  },
  {
    question: "What is the standard treatment for an impacted third molar?",
    choices: ["Observation", "Extraction", "Crown placement", "Root canal therapy"],
    correctAnswer: "Extraction",
    explanation: "Impacted third molars are typically extracted to prevent complications like infection, cyst formation, or damage to adjacent teeth."
  },
  {
    question: "What is the recommended post-operative care for a patient following tooth extraction?",
    choices: ["Avoid rinsing for 24 hours", "Apply warm compresses", "Brush immediately around the site", "Eat solid foods"],
    correctAnswer: "Avoid rinsing for 24 hours",
    explanation: "After tooth extraction, it is important to avoid rinsing the mouth for 24 hours to allow the blood clot to form properly."
  }
  // Dental Anatomy
  {
    question: "Which tooth is most commonly involved in dental impaction?",
    choices: ["Canine", "Second molar", "Third molar", "Central incisor"],
    correctAnswer: "Third molar",
    explanation: "Third molars, or wisdom teeth, are the most commonly impacted teeth due to lack of space in the dental arch."
  },
  {
    question: "How many roots does a typical mandibular molar have?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "2",
    explanation: "Mandibular molars typically have two roots: a mesial root and a distal root."
  },
  {
    question: "What is the name of the tissue that covers the root of the tooth?",
    choices: ["Enamel", "Cementum", "Dentin", "Pulp"],
    correctAnswer: "Cementum",
    explanation: "Cementum is a calcified tissue that covers the roots of teeth and helps anchor them to the periodontal ligament."
  },
  
  // Oral Pathology
  {
    question: "Which of the following is a common symptom of Sjögren’s syndrome?",
    choices: ["Xerostomia", "Leukoplakia", "Ulceration", "Halitosis"],
    correctAnswer: "Xerostomia",
    explanation: "Sjögren’s syndrome is an autoimmune disease that affects the salivary glands, leading to dry mouth (xerostomia)."
  },
  {
    question: "What is the primary feature of oral lichen planus?",
    choices: ["White striations", "Red patches", "Vesicles", "Ulcers"],
    correctAnswer: "White striations",
    explanation: "Oral lichen planus is characterized by white, lacy striations on the buccal mucosa or other oral surfaces."
  },
  {
    question: "Which of the following is associated with the Epstein-Barr virus?",
    choices: ["Oral hairy leukoplakia", "Geographic tongue", "Erythroplakia", "Leukemia"],
    correctAnswer: "Oral hairy leukoplakia",
    explanation: "Oral hairy leukoplakia is caused by the Epstein-Barr virus and commonly seen in immunocompromised patients."
  },
  
  // Preventive Dentistry
  {
    question: "Which vitamin deficiency is commonly associated with angular cheilitis?",
    choices: ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin E"],
    correctAnswer: "Vitamin B12",
    explanation: "Angular cheilitis can be caused by a deficiency of vitamin B12, often accompanied by anemia."
  },
  {
    question: "Which method is most effective for cleaning interproximal spaces between teeth?",
    choices: ["Flossing", "Tooth brushing", "Mouthwash", "Chewing gum"],
    correctAnswer: "Flossing",
    explanation: "Flossing is the most effective method for removing plaque and debris from between teeth, where toothbrush bristles cannot reach."
  },
  {
    question: "What is the primary purpose of using a fluoride mouth rinse?",
    choices: ["To whiten teeth", "To prevent dental caries", "To freshen breath", "To reduce gum inflammation"],
    correctAnswer: "To prevent dental caries",
    explanation: "Fluoride mouth rinses are used to strengthen enamel and prevent dental caries by increasing fluoride exposure."
  },

  // Restorative Dentistry
  {
    question: "Which material is commonly used for temporary crowns?",
    choices: ["Stainless steel", "Amalgam", "Acrylic resin", "Composite"],
    correctAnswer: "Acrylic resin",
    explanation: "Acrylic resin is often used to make temporary crowns because it is quick to fabricate and inexpensive."
  },
  {
    question: "Which type of restoration is used to cover the entire surface of a tooth?",
    choices: ["Inlay", "Onlay", "Veneer", "Crown"],
    correctAnswer: "Crown",
    explanation: "A crown is a type of restoration that covers the entire surface of a tooth, restoring its form and function."
  },
  {
    question: "What is the primary cause of post-operative sensitivity after a dental filling?",
    choices: ["Incorrect occlusion", "Excessive tooth structure removal", "Exposed dentin", "Cement leakage"],
    correctAnswer: "Exposed dentin",
    explanation: "Post-operative sensitivity is often caused by exposed dentin, which can transmit sensations to the tooth's nerve."
  },
  
  // Pharmacology
  {
    question: "Which local anesthetic is commonly used in dentistry for patients who are allergic to esters?",
    choices: ["Lidocaine", "Procaine", "Mepivacaine", "Bupivacaine"],
    correctAnswer: "Lidocaine",
    explanation: "Lidocaine, an amide-type local anesthetic, is commonly used for patients allergic to ester-based anesthetics."
  },
  {
    question: "Which analgesic is contraindicated in patients with asthma?",
    choices: ["Aspirin", "Paracetamol", "Codeine", "Ibuprofen"],
    correctAnswer: "Aspirin",
    explanation: "Aspirin is contraindicated in patients with asthma as it can trigger bronchoconstriction in some individuals."
  },
  {
    question: "What is the maximum recommended dose of ibuprofen for adults in a 24-hour period?",
    choices: ["800 mg", "1600 mg", "2400 mg", "3200 mg"],
    correctAnswer: "3200 mg",
    explanation: "The maximum recommended dose of ibuprofen for adults is 3200 mg per 24-hour period, divided into doses."
  },

  // Radiology
  {
    question: "Which radiograph is best for visualizing a horizontal fracture of the mandible?",
    choices: ["Occlusal", "Periapical", "Panoramic", "Bitewing"],
    correctAnswer: "Panoramic",
    explanation: "A panoramic radiograph provides a broad view of the mandible and is useful for diagnosing fractures."
  },
  {
    question: "Which radiographic technique is used to assess impacted third molars?",
    choices: ["Panoramic", "Cephalometric", "Occlusal", "Lateral oblique"],
    correctAnswer: "Panoramic",
    explanation: "Panoramic radiographs are commonly used to assess the position and angulation of impacted third molars."
  },
  {
    question: "What is the primary concern when using radiographs on a pregnant patient?",
    choices: ["Exposure to ionizing radiation", "Risk of infection", "Increased pain sensitivity", "Altered tooth structure"],
    correctAnswer: "Exposure to ionizing radiation",
    explanation: "The primary concern is exposure to ionizing radiation, especially during the first trimester, which is why proper shielding is important."
  },
  
  // Oral Surgery
  {
    question: "What is the most common complication following a tooth extraction?",
    choices: ["Dry socket", "Infection", "Excessive bleeding", "Fractured tooth"],
    correctAnswer: "Dry socket",
    explanation: "Dry socket, or alveolar osteitis, is the most common post-extraction complication, especially with mandibular molar extractions."
  },
  {
    question: "Which of the following is the first step in the management of a patient with an avulsed tooth?",
    choices: ["Rinse the tooth and reimplant immediately", "Place the tooth in water", "Wait for dental assistance", "Cover the tooth with a clean gauze"],
    correctAnswer: "Rinse the tooth and reimplant immediately",
    explanation: "An avulsed tooth should be rinsed in saline or milk and reimplanted immediately to improve the chances of reattachment."
  },
  {
    question: "Which condition requires immediate surgical intervention?",
    choices: ["Mandibular fracture", "Dry socket", "Periapical abscess", "Impacted third molar"],
    correctAnswer: "Mandibular fracture",
    explanation: "Mandibular fractures often require immediate surgical intervention to stabilize the fracture and prevent further complications."
  }
// Dental Anatomy
  {
    question: "Which nerve provides sensory innervation to the lower lip?",
    choices: ["Inferior alveolar nerve", "Lingual nerve", "Buccal nerve", "Mental nerve"],
    correctAnswer: "Mental nerve",
    explanation: "The mental nerve, a branch of the inferior alveolar nerve, provides sensory innervation to the lower lip."
  },
  {
    question: "How many roots does a typical maxillary first molar have?",
    choices: ["1", "2", "3", "4"],
    correctAnswer: "3",
    explanation: "The maxillary first molar typically has three roots: two buccal and one palatal."
  },
  {
    question: "Which muscle is primarily responsible for closing the mouth?",
    choices: ["Masseter", "Buccinator", "Temporalis", "Lateral pterygoid"],
    correctAnswer: "Masseter",
    explanation: "The masseter is a powerful muscle that elevates the mandible to close the mouth."
  },
  {
    question: "Which tooth is most commonly congenitally missing?",
    choices: ["Maxillary lateral incisor", "Mandibular canine", "Maxillary first premolar", "Mandibular second molar"],
    correctAnswer: "Maxillary lateral incisor",
    explanation: "The maxillary lateral incisor is one of the most commonly congenitally missing teeth."
  },
  {
    question: "Which part of the tooth contains the blood vessels and nerves?",
    choices: ["Enamel", "Dentin", "Pulp", "Cementum"],
    correctAnswer: "Pulp",
    explanation: "The pulp chamber contains the tooth's blood vessels, nerves, and connective tissue."
  },
  
  // Oral Pathology
  {
    question: "Which of the following is a premalignant condition of the oral cavity?",
    choices: ["Oral leukoplakia", "Aphthous ulcers", "Oral lichen planus", "Candidiasis"],
    correctAnswer: "Oral leukoplakia",
    explanation: "Leukoplakia is considered a premalignant lesion that can potentially progress to oral cancer."
  },
  {
    question: "Which virus is associated with hand, foot, and mouth disease?",
    choices: ["Herpes simplex virus", "Coxsackievirus", "Epstein-Barr virus", "Human papillomavirus"],
    correctAnswer: "Coxsackievirus",
    explanation: "Hand, foot, and mouth disease is caused by the coxsackievirus, presenting with oral ulcers and rash on hands and feet."
  },
  {
    question: "Which condition is characterized by red, swollen gums that bleed easily?",
    choices: ["Gingivitis", "Periodontitis", "Glossitis", "Leukoplakia"],
    correctAnswer: "Gingivitis",
    explanation: "Gingivitis is inflammation of the gums that results in redness, swelling, and easy bleeding, usually due to plaque buildup."
  },
  {
    question: "Which of the following is most commonly associated with oral thrush?",
    choices: ["Candida albicans", "Streptococcus mutans", "Herpes simplex", "Human papillomavirus"],
    correctAnswer: "Candida albicans",
    explanation: "Oral thrush is a fungal infection caused by Candida albicans, particularly in immunocompromised individuals."
  },
  {
    question: "What is the primary cause of halitosis?",
    choices: ["Bacterial breakdown of food particles", "Oral candidiasis", "Gingival inflammation", "Dry mouth"],
    correctAnswer: "Bacterial breakdown of food particles",
    explanation: "Bad breath (halitosis) is commonly caused by anaerobic bacteria in the mouth breaking down food particles."
  },

  // Preventive Dentistry
  {
    question: "Which of the following is the most effective method for preventing interproximal caries?",
    choices: ["Toothbrushing", "Mouthwash", "Flossing", "Sugar-free gum"],
    correctAnswer: "Flossing",
    explanation: "Flossing is the most effective way to clean interproximal spaces, where toothbrushing may not reach, preventing interproximal caries."
  },
  {
    question: "What is the recommended fluoride concentration in toothpaste for adults with moderate to high caries risk?",
    choices: ["1000 ppm", "1450 ppm", "5000 ppm", "6000 ppm"],
    correctAnswer: "5000 ppm",
    explanation: "For adults with moderate to high caries risk, fluoride toothpaste with a concentration of 5000 ppm is recommended."
  },
  {
    question: "What is the primary benefit of sealants on molars?",
    choices: ["Whitening", "Cavity prevention", "Sensitivity reduction", "Gum protection"],
    correctAnswer: "Cavity prevention",
    explanation: "Sealants are applied to the chewing surfaces of molars to prevent cavities by creating a barrier over pits and fissures."
  },
  {
    question: "Which vitamin is essential for preventing gingival bleeding?",
    choices: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correctAnswer: "Vitamin C",
    explanation: "Vitamin C is essential for maintaining healthy connective tissue and preventing gingival bleeding."
  },
  {
    question: "What is the optimal frequency for dental check-ups in patients with good oral health?",
    choices: ["Every 3 months", "Every 6 months", "Annually", "Every 2 years"],
    correctAnswer: "Every 6 months",
    explanation: "For patients with good oral health, routine dental check-ups every 6 months are recommended for preventive care."
  },
  
  // Restorative Dentistry
  {
    question: "Which dental material is most commonly used for posterior restorations due to its strength and durability?",
    choices: ["Composite resin", "Amalgam", "Gold", "Porcelain"],
    correctAnswer: "Amalgam",
    explanation: "Dental amalgam is widely used for posterior restorations because of its strength, durability, and ability to withstand occlusal forces."
  },
  {
    question: "Which is the primary reason for a root canal treatment?",
    choices: ["To treat an infected or necrotic pulp", "To place a dental crown", "To close gaps between teeth", "To whiten teeth"],
    correctAnswer: "To treat an infected or necrotic pulp",
    explanation: "Root canal treatment is performed to remove infected or necrotic pulp tissue and save the tooth."
  },
  {
    question: "Which restorative material is best suited for esthetic anterior restorations?",
    choices: ["Composite resin", "Amalgam", "Gold", "Porcelain"],
    correctAnswer: "Composite resin",
    explanation: "Composite resin is commonly used for anterior restorations due to its esthetic properties, blending with natural tooth color."
  },
  {
    question: "What is the purpose of a dental liner?",
    choices: ["To protect the pulp", "To fill the tooth", "To bond the restoration", "To polish the restoration"],
    correctAnswer: "To protect the pulp",
    explanation: "Dental liners are used to protect the pulp from thermal and chemical irritation caused by restorative materials."
  },
  {
    question: "Which dental procedure involves the removal of decayed tooth material and the placement of a restorative material?",
    choices: ["Cavity preparation and filling", "Crown placement", "Root canal treatment", "Dental extraction"],
    correctAnswer: "Cavity preparation and filling",
    explanation: "Cavity preparation involves the removal of decayed tooth structure, followed by the placement of a restorative material to restore function."
  },

  // Pharmacology
  {
    question: "Which antibiotic is most commonly prescribed for bacterial dental infections?",
    choices: ["Amoxicillin", "Ciprofloxacin", "Metronidazole", "Tetracycline"],
    correctAnswer: "Amoxicillin",
    explanation: "Amoxicillin is the most commonly prescribed antibiotic for bacterial dental infections due to its broad-spectrum effectiveness."
  },
  {
    question: "What is the most common side effect of prolonged corticosteroid use in dental patients?",
    choices: ["Immunosuppression", "Hypertension", "Candidiasis", "Xerostomia"],
    correctAnswer: "Candidiasis",
    explanation: "Prolonged corticosteroid use can lead to oral candidiasis due to the immunosuppressive effects of the medication."
  },
  {
    question: "Which medication is typically used to manage severe dental pain?",
    choices: ["Ibuprofen", "Acetaminophen", "Oxycodone", "Aspirin"],
    correctAnswer: "Oxycodone",
    explanation: "Oxycodone is an opioid analgesic used for managing severe dental pain when non-opioid medications are insufficient."
  },
  {
    question: "Which local anesthetic has the longest duration of action?",
    choices: ["Lidocaine", "Procaine", "Mepivacaine", "Bupivacaine"],
    correctAnswer: "Bupivacaine",
    explanation: "Bupivacaine has the longest duration of action among local anesthetics, making it ideal for procedures requiring extended pain control."
  },
  // Add more questions following the same structure, up to 50 questions
];

// Function to shuffle questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Function to display the quiz
function displayQuiz() {
  shuffleArray(questions);  // Shuffle questions
  const quizForm = document.getElementById('quizForm');
  quizForm.innerHTML = '';  // Clear previous content
  
  // Display only the first 50 questions (or all if fewer than 50)
  questions.slice(0, 50).forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    
    const questionTitle = document.createElement('h2');
    questionTitle.textContent = `${index + 1}. ${question.question}`;
    questionDiv.appendChild(questionTitle);
    
    question.choices.forEach(choice => {
      const label = document.createElement('label');
      label.innerHTML = `<input type="radio" name="q${index}" value="${choice}"> ${choice}`;
      questionDiv.appendChild(label);
      questionDiv.appendChild(document.createElement('br'));
    });
    
    quizForm.appendChild(questionDiv);
  });

  // Add submit button
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';
  quizForm.appendChild(submitButton);

  document.getElementById('result').textContent = '';  // Clear result
  document.getElementById('retakeButton').style.display = 'none';  // Hide retake button
}

// Function to grade the quiz
function gradeQuiz(event) {
  event.preventDefault();
  
  let score = 0;
  let explanations = "";
  const formData = new FormData(document.getElementById('quizForm'));
  
  questions.slice(0, 50).forEach((question, index) => {
    const userAnswer = formData.get(`q${index}`);
    if (userAnswer === question.correctAnswer) {
      score++;
    } else {
      explanations += `<p>Question ${index + 1}: The correct answer is <strong>${question.correctAnswer}</strong>. ${question.explanation}</p>`;
    }
  });
  
  const totalQuestions = questions.length > 50 ? 50 : questions.length;
  const result = document.getElementById('result');
  result.innerHTML = `You scored ${score} out of ${totalQuestions}. ${explanations}`;
  
  document.getElementById('retakeButton').style.display = 'block';  // Show retake button
}

// Function to retake the quiz
function retakeQuiz() {
  displayQuiz();  // Re-randomize and redisplay questions
}

// Initialize the quiz
document.getElementById('quizForm').addEventListener('submit', gradeQuiz);
document.getElementById('retakeButton').addEventListener('click', retakeQuiz);

// Load the quiz initially
displayQuiz();
