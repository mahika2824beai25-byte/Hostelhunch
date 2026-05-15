const CE = {
  dairy:      '🥛',
  veggies:    '🥦',
  fruits:     '🍎',
  grains:     '🍞',
  protein:    '🥚',
  condiments: '🧴',
  snacks:     '🍿',
  drinks:     '🧃',
  other:      '📦'
};


const QUICK = [
  { name: 'Eggs',     cat: 'protein',    qty: '6',   unit: 'pcs'  },
  { name: 'Bread',    cat: 'grains',     qty: '1',   unit: 'loaf' },
  { name: 'Milk',     cat: 'dairy',      qty: '500', unit: 'ml'   },
  { name: 'Butter',   cat: 'dairy',      qty: '100', unit: 'g'    },
  { name: 'Onion',    cat: 'veggies',    qty: '2',   unit: 'pcs'  },
  { name: 'Tomato',   cat: 'veggies',    qty: '3',   unit: 'pcs'  },
  { name: 'Cheese',   cat: 'dairy',      qty: '200', unit: 'g'    },
  { name: 'Maggi',    cat: 'grains',     qty: '2',   unit: 'pcs'  },
  { name: 'Rice',     cat: 'grains',     qty: '500', unit: 'g'    },
  { name: 'Dal',      cat: 'protein',    qty: '200', unit: 'g'    },
  { name: 'Banana',   cat: 'fruits',     qty: '4',   unit: 'pcs'  },
  { name: 'Potato',   cat: 'veggies',    qty: '3',   unit: 'pcs'  },
  { name: 'Paneer',   cat: 'dairy',      qty: '200', unit: 'g'    },
  { name: 'Curd',     cat: 'dairy',      qty: '200', unit: 'ml'   },
  { name: 'Oats',     cat: 'grains',     qty: '200', unit: 'g'    },
  { name: 'Sooji',    cat: 'grains',     qty: '200', unit: 'g'    },
  { name: 'Poha',     cat: 'grains',     qty: '200', unit: 'g'    },
  { name: 'Atta',     cat: 'grains',     qty: '500', unit: 'g'    },
  { name: 'Ghee',     cat: 'dairy',      qty: '100', unit: 'g'    },
  { name: 'Garlic',   cat: 'condiments', qty: '1',   unit: 'head' },
];



const SYNONYMS = {

  "anda": "egg",    "ande": "egg",    "anday": "egg",
  "egg":  "egg",    "eggs": "egg",


  "aloo": "potato",   "aaloo": "potato",  "alloo": "potato",
  "aalu": "potato",   "potato": "potato", "potatoes": "potato",


  "pyaz": "onion",  "pyaaz": "onion", "kanda": "onion",
  "piaz": "onion",  "onion": "onion", "onions": "onion",


  "tamatar": "tomato",  "tamaatar": "tomato",
  "tamoto":  "tomato",  "tomato": "tomato", "tomatoes": "tomato",


  "chawal":  "rice",  "chaawal": "rice",
  "chaval":  "rice",  "basmati": "rice",  "rice": "rice",


  "doodh": "milk",  "dudh": "milk",  "milk": "milk",


  "dahi": "curd",  "daahi": "curd",  "curd": "curd",
  "yogurt": "curd",  "yoghurt": "curd",


  "makhan": "butter",  "makkhan": "butter",  "butter": "butter",


  "roti": "bread",  "chapati": "bread",  "chapatti": "bread",
  "pav":  "bread",  "toast": "bread",    "double roti": "bread",
  "bread": "bread",


  "cheese": "cheese",  "paneer cheese": "cheese",


  "paneer": "paneer",  "cottage cheese": "paneer",


  "dal": "dal",  "daal": "dal",  "dhal": "dal",
  "lentil": "dal",  "lentils": "dal",
  "moong dal": "dal",  "masoor dal": "dal",
  "chana dal": "dal",  "toor dal": "dal",  "arhar": "dal",


  "kela": "banana",  "kele": "banana",
  "banana": "banana",  "bananas": "banana",


  "oats": "oats",  "oatmeal": "oats",  "javi": "oats",  "jaie": "oats",


  "shimla mirch": "capsicum",  "shimlamirch": "capsicum",
  "bell pepper": "capsicum",   "green pepper": "capsicum",
  "capsicum": "capsicum",


  "cheeni": "sugar",  "chini": "sugar",
  "shakkar": "sugar",  "shakar": "sugar",  "sugar": "sugar",


  "namak": "salt",  "noon": "salt",  "salt": "salt",


  "tel": "oil",  "sarson tel": "oil",
  "mustard oil": "oil",  "cooking oil": "oil",  "oil": "oil",


  "maggi": "maggi",  "maagi": "maggi",
  "noodles": "maggi",  "instant noodles": "maggi",  "top ramen": "maggi",


  "atta": "flour",  "aata": "flour",
  "maida": "flour",  "wheat flour": "flour",  "gehun": "flour",  "flour": "flour",


  "lehsun": "garlic",  "lahsun": "garlic",
  "lasan": "garlic",   "garlic": "garlic",


  "adrak": "ginger",  "aadrak": "ginger",
  "adrakk": "ginger",  "ginger": "ginger",


  "hari mirch":  "chilli",  "hari mirchi": "chilli",
  "green chilli": "chilli", "mirchi": "chilli",
  "chilli": "chilli",  "chili": "chilli",


  "gajar": "carrot",  "gazar": "carrot",
  "carrot": "carrot",  "carrots": "carrot",


  "palak": "spinach",  "paalak": "spinach",  "spinach": "spinach",


  "gobhi": "cauliflower",  "gobi": "cauliflower",
  "phool gobhi": "cauliflower",  "phool gobi": "cauliflower",
  "cauliflower": "cauliflower",


  "matar": "peas",  "mattar": "peas",  "mutter": "peas",
  "green peas": "peas",  "peas": "peas",


  "nimbu": "lemon",  "nimboo": "lemon",  "neembu": "lemon",
  "lemon": "lemon",  "lime": "lemon",


  "dhaniya": "coriander",  "dhania": "coriander",
  "coriander": "coriander",  "cilantro": "coriander",

 
  "jeera": "cumin",  "zeera": "cumin",  "jira": "cumin",  "cumin": "cumin",


  "haldi": "turmeric",  "haladi": "turmeric",  "turmeric": "turmeric",


  "rai": "mustard",  "sarson": "mustard",
  "mustard": "mustard",  "mustard seeds": "mustard",


  "chana": "chickpea",  "chole": "chickpea",
  "kabuli chana": "chickpea",  "chickpea": "chickpea",  "chickpeas": "chickpea",


  "seb": "apple",  "sev": "apple",  "apple": "apple",  "apples": "apple",

  
  "aam": "mango",  "mango": "mango",  "mangoes": "mango",

  
  "santra": "orange",  "narangi": "orange",
  "orange": "orange",  "oranges": "orange",

  
  "poha": "poha",  "pohe": "poha",  "chivda": "poha",
  "flattened rice": "poha",  "beaten rice": "poha",

 
  "sooji": "sooji",  "suji": "sooji",  "rava": "sooji",
  "rawa": "sooji",  "semolina": "sooji",


  "coffee": "coffee",  "kaafi": "coffee",  "cafe": "coffee",


  "chai": "tea",  "chay": "tea",  "chaa": "tea",  "tea": "tea",


  "nariyal": "coconut",  "coconut": "coconut",
  "nariyal pani": "coconut",  "coconut milk": "coconut",

 
  "shahad": "honey",  "shahed": "honey",  "honey": "honey",


  "ghee": "ghee",  "desi ghee": "ghee",  "clarified butter": "ghee",
};



const RECIPES = [

  
  {
    title: "Classic Egg Omelette",
    mealType: "breakfast", time: "10 mins", difficulty: "Easy", servings: "1",
    description: "Fluffy golden omelette — the ultimate hostel protein fix.",
    tags: ["Quick", "High-Protein", "Beginner"],
    required: ["egg"],
    optional: ["onion", "tomato", "cheese", "capsicum", "butter", "chilli"],
    ingredients: [
      { name: "Eggs",       amount: "2 pcs",   k: "egg"    },
      { name: "Onion",      amount: "1 small", k: "onion"  },
      { name: "Tomato",     amount: "½",       k: "tomato" },
      { name: "Cheese",     amount: "1 slice", k: "cheese" },
      { name: "Butter/Oil", amount: "1 tsp",   k: "butter" },
    ],
    steps: [
      { text: "Beat 2 eggs with salt, pepper, and a splash of milk if available until frothy.", tip: "The more you beat, the fluffier the omelette!" },
      { text: "Heat pan on medium flame. Add butter and let it melt.", tip: "Medium heat is key — too high burns the outside while inside stays raw." },
      { text: "Pour in egg mixture. Let it set 30 seconds without touching.", tip: null },
      { text: "Add chopped onion, tomato, and cheese on one half. Cook 1 more min.", tip: "Cover with a lid — steam cooks the top perfectly." },
      { text: "Fold in half and slide onto plate. Serve hot with bread.", tip: null },
    ]
  },

  {
    title: "Cheese Omelette Sandwich",
    mealType: "breakfast", time: "12 mins", difficulty: "Easy", servings: "1",
    description: "Hot egg-and-cheese stuffed sandwich — filling enough for a full morning.",
    tags: ["High-Protein", "Filling", "Quick"],
    required: ["egg", "bread"],
    optional: ["cheese", "onion", "tomato", "butter", "capsicum"],
    ingredients: [
      { name: "Eggs",         amount: "2 pcs",  k: "egg"    },
      { name: "Bread",        amount: "2 slices", k: "bread" },
      { name: "Cheese",       amount: "1 slice",  k: "cheese" },
      { name: "Onion+Tomato", amount: "small",    k: "onion"  },
      { name: "Butter",       amount: "1 tsp",    k: "butter" },
    ],
    steps: [
      { text: "Beat 2 eggs with salt, pepper, finely chopped onion and tomato.", tip: null },
      { text: "Make a thin omelette sized to fit your bread.", tip: "Keep it thin so it fits in the sandwich." },
      { text: "Place cheese on omelette while still in pan. Let it melt.", tip: null },
      { text: "Toast bread slices separately until golden.", tip: null },
      { text: "Place cheesy omelette between toast. Press and eat hot!", tip: "Press with your palm for 10 sec — heat fuses everything together." },
    ]
  },

  {
    title: "Bread Butter Toast",
    mealType: "breakfast", time: "5 mins", difficulty: "Easy", servings: "1",
    description: "Crispy buttered toast — quickest hostel breakfast, zero skill needed.",
    tags: ["5-Minute", "Zero Skill", "Budget"],
    required: ["bread"],
    optional: ["butter", "cheese", "egg", "banana"],
    ingredients: [
      { name: "Bread",       amount: "2-3 slices", k: "bread"  },
      { name: "Butter",      amount: "1 tbsp",     k: "butter" },
      { name: "Cheese slice", amount: "1-2",       k: "cheese" },
    ],
    steps: [
      { text: "Place bread on a tawa over low-medium heat.", tip: "No tawa? Use direct flame with tongs for a charred effect." },
      { text: "Toast each side 1-2 mins until golden and crispy.", tip: null },
      { text: "Spread butter generously while still hot so it melts in.", tip: null },
      { text: "Top with cheese and cover 30 sec to melt.", tip: null },
    ]
  },

  {
    title: "Banana Milk Smoothie",
    mealType: "breakfast", time: "5 mins", difficulty: "Easy", servings: "1",
    description: "Thick creamy no-blender smoothie — mash it and drink it!",
    tags: ["No Cooking", "Healthy", "Energy Boost"],
    required: ["banana", "milk"],
    optional: ["oats", "curd", "honey", "sugar"],
    ingredients: [
      { name: "Banana (kela)",  amount: "2 pcs",  k: "banana" },
      { name: "Milk (doodh)",   amount: "1 cup",  k: "milk"   },
      { name: "Oats",           amount: "2 tbsp", k: "oats"   },
      { name: "Honey/Sugar",    amount: "1 tsp",  k: "honey"  },
    ],
    steps: [
      { text: "Peel bananas and mash thoroughly in a bowl with a fork.", tip: "The more you mash, the smoother the final drink." },
      { text: "Add milk gradually while mashing and mixing.", tip: null },
      { text: "Stir in oats if using — soak 2 minutes for extra thickness.", tip: "Soaked oats = great pre-study energy." },
      { text: "Add honey or sugar to taste. Drink immediately.", tip: null },
    ]
  },

  {
    title: "Milk Oatmeal",
    mealType: "breakfast", time: "8 mins", difficulty: "Easy", servings: "1",
    description: "Creamy warm oat porridge — proper nutrition under 10 minutes.",
    tags: ["Healthy", "High-Fibre", "Filling"],
    required: ["oats", "milk"],
    optional: ["banana", "honey", "sugar"],
    ingredients: [
      { name: "Oats",           amount: "½ cup", k: "oats"   },
      { name: "Milk (doodh)",   amount: "1 cup", k: "milk"   },
      { name: "Banana (kela)",  amount: "1 pcs", k: "banana" },
      { name: "Honey/Sugar",    amount: "1 tsp", k: "honey"  },
    ],
    steps: [
      { text: "Pour milk into pan and bring to a gentle simmer.", tip: "Don't boil hard — milk overflows quickly!" },
      { text: "Add oats and stir continuously for 3-4 mins on low heat.", tip: null },
      { text: "Cook until thick and creamy. Add sugar/honey to taste.", tip: "It thickens as it cools — take off heat a little early." },
      { text: "Top with sliced banana and serve warm.", tip: null },
    ]
  },

  {
    title: "Oats Upma",
    mealType: "breakfast", time: "15 mins", difficulty: "Easy", servings: "1",
    description: "Savory oats — high-fibre, filling, and done in minutes.",
    tags: ["Healthy", "High-Fibre", "Quick"],
    required: ["oats"],
    optional: ["onion", "tomato", "butter", "chilli", "mustard"],
    ingredients: [
      { name: "Oats",              amount: "½ cup",  k: "oats"   },
      { name: "Onion (pyaz)",      amount: "1 small", k: "onion"  },
      { name: "Tomato (tamatar)",  amount: "1 small", k: "tomato" },
      { name: "Oil/Butter",        amount: "1 tsp",   k: "butter" },
    ],
    steps: [
      { text: "Dry roast oats in pan for 2-3 mins until slightly golden.", tip: "Roasting removes raw taste and adds depth of flavour." },
      { text: "Add oil, sauté onion 2 mins, add tomato, cook 2 more mins.", tip: null },
      { text: "Add 1 cup water, bring to boil. Add salt and spices.", tip: null },
      { text: "Add roasted oats and stir continuously on low heat 3-4 mins.", tip: "Keep stirring — oats absorb water fast and can stick." },
      { text: "Serve hot with curd or a drizzle of butter.", tip: null },
    ]
  },

  {
    title: "Sooji Halwa",
    mealType: "breakfast", time: "15 mins", difficulty: "Easy", servings: "1-2",
    description: "Sweet semolina halwa — quick, warm, and surprisingly satisfying.",
    tags: ["Sweet", "Quick", "Comfort"],
    required: ["sooji"],
    optional: ["sugar", "ghee", "butter", "milk"],
    ingredients: [
      { name: "Sooji/Rava",  amount: "½ cup",    k: "sooji"  },
      { name: "Sugar (cheeni)", amount: "3 tbsp", k: "sugar"  },
      { name: "Ghee/Butter", amount: "2 tbsp",   k: "ghee"   },
      { name: "Water/Milk",  amount: "1.5 cups", k: "milk"   },
    ],
    steps: [
      { text: "Heat ghee or butter in a pan. Add sooji and roast on low flame, stirring for 5-7 mins until golden and fragrant.", tip: "Don't rush — properly roasted sooji is the key to good halwa." },
      { text: "Meanwhile, heat water or milk in a separate vessel until hot.", tip: null },
      { text: "Carefully add hot water/milk to the roasted sooji — it will splutter.", tip: "Stand back when adding liquid — the steam is very hot!" },
      { text: "Add sugar and stir on low heat until thick and it leaves the sides.", tip: null },
      { text: "Serve hot. Optionally garnish with raisins or cashews.", tip: null },
    ]
  },

  {
    title: "Poha",
    mealType: "breakfast", time: "15 mins", difficulty: "Easy", servings: "1-2",
    description: "Light flattened rice dish — Maharashtra's favourite quick breakfast.",
    tags: ["Light", "Traditional", "Quick"],
    required: ["poha"],
    optional: ["onion", "potato", "peas", "lemon", "mustard", "chilli"],
    ingredients: [
      { name: "Poha (chivda)",   amount: "1 cup",  k: "poha"   },
      { name: "Onion (pyaz)",    amount: "1 pcs",  k: "onion"  },
      { name: "Potato (aloo)",   amount: "1 small", k: "potato" },
      { name: "Lemon (nimbu)",   amount: "½",      k: "lemon"  },
      { name: "Oil",             amount: "1 tsp",  k: "oil"    },
    ],
    steps: [
      { text: "Rinse poha in water for 30 seconds until soft but not mushy. Drain well.", tip: "Don't soak too long — it becomes mushy and sticky." },
      { text: "Heat oil in pan. Add mustard seeds and let them splutter.", tip: null },
      { text: "Add onion and potato cubes. Cook until potato is tender (5-6 mins).", tip: "Cut potato very small so it cooks quickly." },
      { text: "Add softened poha, salt, and turmeric. Toss gently on low heat 2-3 mins.", tip: "Toss gently — don't stir too hard or poha breaks apart." },
      { text: "Squeeze lemon juice on top. Serve hot with coriander if available.", tip: null },
    ]
  },


  {
    title: "Dal Rice",
    mealType: "lunch", time: "30 mins", difficulty: "Medium", servings: "2",
    description: "Nutritious dal with fluffy rice — the complete hostel meal.",
    tags: ["High-Protein", "Complete Meal", "Classic"],
    required: ["dal", "rice"],
    optional: ["onion", "tomato", "butter", "ghee", "turmeric", "garlic"],
    ingredients: [
      { name: "Dal (daal)",       amount: "½ cup", k: "dal"    },
      { name: "Rice (chawal)",    amount: "½ cup", k: "rice"   },
      { name: "Onion (pyaz)",     amount: "1 pcs", k: "onion"  },
      { name: "Tomato (tamatar)", amount: "1 pcs", k: "tomato" },
      { name: "Ghee/Butter",      amount: "1 tsp", k: "ghee"   },
    ],
    steps: [
      { text: "Wash dal and rice separately 2-3 times until water runs clear.", tip: null },
      { text: "Rice: Add 1 cup water per ½ cup rice. Boil covered on low heat 15-18 mins.", tip: "Don't lift the lid — steam cooks rice evenly." },
      { text: "Dal: Add 1.5 cups water, salt and turmeric. Boil 20 mins until soft.", tip: "Dal is done when you can crush a grain between two fingers." },
      { text: "Fry onion until golden, add tomato, cook 3 mins. Pour over dal as tadka.", tip: null },
      { text: "Serve dal over rice. Add ghee on top if available.", tip: "A squeeze of lemon transforms the flavour completely!" },
    ]
  },

  {
    title: "Curd Rice",
    mealType: "lunch", time: "5 mins", difficulty: "Easy", servings: "1",
    description: "Cooling probiotic curd rice — South Indian comfort in 5 minutes.",
    tags: ["No Cooking", "Probiotic", "Cooling"],
    required: ["curd", "rice"],
    optional: ["onion", "mustard", "salt", "chilli"],
    ingredients: [
      { name: "Rice (chawal)",  amount: "1 cup cooked", k: "rice" },
      { name: "Curd (dahi)",    amount: "½ cup",        k: "curd" },
      { name: "Salt (namak)",   amount: "to taste",     k: "salt" },
    ],
    steps: [
      { text: "Take cooked/leftover rice in a bowl. Mash slightly with a spoon.", tip: "Works best with slightly warm rice — curd mixes more evenly." },
      { text: "Add curd and mix thoroughly. Add salt to taste.", tip: null },
      { text: "Optionally heat oil, add mustard seeds + curry leaves for tempering.", tip: null },
      { text: "Serve immediately or chill for 10 mins for a cold version.", tip: null },
    ]
  },

  {
    title: "Tomato Egg Scramble",
    mealType: "lunch", time: "10 mins", difficulty: "Easy", servings: "1",
    description: "Juicy scrambled eggs with tomato — eat with rice or bread.",
    tags: ["Quick", "High-Protein"],
    required: ["egg", "tomato"],
    optional: ["onion", "butter", "cheese", "chilli"],
    ingredients: [
      { name: "Eggs (anda)",      amount: "2 pcs",  k: "egg"    },
      { name: "Tomato (tamatar)", amount: "1 pcs",  k: "tomato" },
      { name: "Onion (pyaz)",     amount: "½ pcs",  k: "onion"  },
      { name: "Oil/Butter",       amount: "1 tsp",  k: "butter" },
    ],
    steps: [
      { text: "Dice tomato and onion finely.", tip: null },
      { text: "Heat oil. Sauté onion 2 mins, add tomato and cook until soft.", tip: null },
      { text: "Beat eggs with salt. Pour into pan and stir gently.", tip: "Low heat + slow stir = large soft curds. High heat = rubbery." },
      { text: "Remove from heat while eggs are still slightly wet.", tip: "Residual heat finishes cooking perfectly." },
      { text: "Serve with bread or rice.", tip: null },
    ]
  },

  {
    title: "Aloo Stir-fry",
    mealType: "lunch", time: "20 mins", difficulty: "Easy", servings: "1-2",
    description: "Simple spiced potato stir-fry — perfect with rice, roti, or bread.",
    tags: ["Veg", "Filling", "Budget"],
    required: ["potato"],
    optional: ["onion", "tomato", "butter", "capsicum", "chilli", "turmeric"],
    ingredients: [
      { name: "Potato (aloo)", amount: "2-3 pcs", k: "potato" },
      { name: "Onion (pyaz)",  amount: "1 pcs",   k: "onion"  },
      { name: "Salt & Spices", amount: "to taste", k: "salt"   },
      { name: "Oil/Butter",    amount: "1 tsp",   k: "butter" },
    ],
    steps: [
      { text: "Wash and cut potatoes into 1cm cubes.", tip: "Smaller cubes = faster cooking. Pre-boil 5 mins to speed up further." },
      { text: "Heat oil. Add onion and sauté until golden.", tip: null },
      { text: "Add potato cubes, salt, and any available spices.", tip: "Turmeric + cumin = classic Indian flavour." },
      { text: "Cover and cook on low-medium heat 12-15 mins, stirring occasionally.", tip: null },
      { text: "Cook until soft inside and slightly crispy outside.", tip: null },
    ]
  },

  {
    title: "Chana Masala",
    mealType: "lunch", time: "20 mins", difficulty: "Medium", servings: "2",
    description: "Spiced chickpea curry — protein-packed, filling, and delicious.",
    tags: ["High-Protein", "Veg", "Classic"],
    required: ["chickpea"],
    optional: ["onion", "tomato", "garlic", "ginger", "chilli", "oil"],
    ingredients: [
      { name: "Chana/Chickpeas",  amount: "1 cup",  k: "chickpea" },
      { name: "Onion (pyaz)",     amount: "1 pcs",  k: "onion"    },
      { name: "Tomato (tamatar)", amount: "1 pcs",  k: "tomato"   },
      { name: "Garlic (lehsun)",  amount: "3 cloves", k: "garlic" },
      { name: "Oil",              amount: "1 tbsp", k: "oil"      },
    ],
    steps: [
      { text: "If using raw chana, soak overnight and boil until soft. Canned = use directly.", tip: null },
      { text: "Heat oil. Fry onion until dark golden — this is key to the flavour base.", tip: "Take time here — darker the onion, richer the gravy." },
      { text: "Add garlic, ginger, tomato and cook until oil separates from mixture.", tip: null },
      { text: "Add boiled chana, salt and spices. Simmer 10 mins.", tip: "Mash a few chickpeas with a spoon to thicken the gravy." },
      { text: "Serve hot with bread, rice, or roti.", tip: "Top with raw onion rings and a squeeze of lemon!" },
    ]
  },

  {
    title: "Palak Dal",
    mealType: "lunch", time: "25 mins", difficulty: "Easy", servings: "2",
    description: "Iron-rich spinach and lentils — simple, nutritious, filling.",
    tags: ["Iron-Rich", "Healthy", "Veg"],
    required: ["dal", "spinach"],
    optional: ["onion", "garlic", "tomato", "ghee", "turmeric"],
    ingredients: [
      { name: "Dal (moong/masoor)", amount: "½ cup",   k: "dal"     },
      { name: "Palak/Spinach",      amount: "1 bunch", k: "spinach" },
      { name: "Onion (pyaz)",       amount: "1 pcs",   k: "onion"   },
      { name: "Ghee/Oil",           amount: "1 tsp",   k: "ghee"    },
    ],
    steps: [
      { text: "Wash and boil dal with turmeric and salt until soft (15-20 mins).", tip: null },
      { text: "Wash spinach leaves and chop roughly.", tip: null },
      { text: "Add chopped spinach to cooked dal and simmer 5 mins until wilted.", tip: "Don't overcook spinach — it should stay bright green." },
      { text: "For tadka: heat ghee, add garlic and onion, fry until golden. Pour over dal.", tip: null },
      { text: "Serve hot with rice or bread.", tip: null },
    ]
  },


  {
    title: "Paneer Bhurji",
    mealType: "dinner", time: "15 mins", difficulty: "Easy", servings: "1-2",
    description: "Crumbled paneer stir-fried with onion-tomato — restaurant taste at home.",
    tags: ["High-Protein", "Veg", "Quick"],
    required: ["paneer"],
    optional: ["onion", "tomato", "capsicum", "butter", "chilli", "garlic"],
    ingredients: [
      { name: "Paneer",           amount: "100-150g", k: "paneer" },
      { name: "Onion (pyaz)",     amount: "1 pcs",    k: "onion"  },
      { name: "Tomato (tamatar)", amount: "1 pcs",    k: "tomato" },
      { name: "Butter/Oil",       amount: "1 tsp",    k: "butter" },
    ],
    steps: [
      { text: "Crumble paneer coarsely by hand into varied-size pieces.", tip: "Hand-crumbled gives better texture than grated." },
      { text: "Heat butter. Add onion and cook until golden (3-4 mins).", tip: null },
      { text: "Add tomato and cook until soft and mushy.", tip: null },
      { text: "Add crumbled paneer and spices. Stir-fry on HIGH heat 3-4 mins.", tip: "High heat gives a slight char — tastes like restaurant bhurji." },
      { text: "Serve hot with bread or roti.", tip: null },
    ]
  },

  {
    title: "Egg Fried Rice",
    mealType: "dinner", time: "15 mins", difficulty: "Easy", servings: "1-2",
    description: "Quick Indo-Chinese fried rice — best made with cold leftover rice.",
    tags: ["Leftover Hack", "Filling", "Tasty"],
    required: ["rice"],
    optional: ["egg", "onion", "capsicum", "butter", "garlic"],
    ingredients: [
      { name: "Cooked Rice (chawal)",   amount: "1 cup",  k: "rice"     },
      { name: "Egg (anda)",             amount: "1 pcs",  k: "egg"      },
      { name: "Onion (pyaz)",           amount: "1 pcs",  k: "onion"    },
      { name: "Capsicum (shimla mirch)", amount: "½ pcs", k: "capsicum" },
      { name: "Oil/Butter",             amount: "1 tsp",  k: "butter"   },
    ],
    steps: [
      { text: "Heat oil in pan on HIGH flame. Add onion and capsicum, stir-fry 2 mins.", tip: "High flame = smoky flavour — the secret to good fried rice." },
      { text: "Push veggies to side. Crack in egg and scramble quickly.", tip: null },
      { text: "Add cold cooked rice and mix everything together.", tip: "Cold/leftover rice is perfect — fresh rice turns mushy." },
      { text: "Add salt, stir-fry on high heat 3-4 mins.", tip: "Keep tossing constantly so nothing burns." },
      { text: "Serve hot.", tip: null },
    ]
  },

  {
    title: "Aloo Matar",
    mealType: "dinner", time: "25 mins", difficulty: "Easy", servings: "2",
    description: "Classic potato and peas curry — goes with anything.",
    tags: ["Veg", "Classic", "Filling"],
    required: ["potato", "peas"],
    optional: ["onion", "tomato", "garlic", "ginger", "oil", "turmeric"],
    ingredients: [
      { name: "Potato (aloo)",    amount: "2 pcs",  k: "potato" },
      { name: "Peas (matar)",     amount: "½ cup",  k: "peas"   },
      { name: "Onion (pyaz)",     amount: "1 pcs",  k: "onion"  },
      { name: "Tomato (tamatar)", amount: "1 pcs",  k: "tomato" },
      { name: "Oil",              amount: "1 tbsp", k: "oil"    },
    ],
    steps: [
      { text: "Cut potatoes into cubes. Chop onion and tomato.", tip: null },
      { text: "Heat oil, fry onion until golden. Add garlic and ginger if available, cook 1 min.", tip: null },
      { text: "Add tomato and cook until soft. Add turmeric, salt, and other spices.", tip: null },
      { text: "Add potatoes and peas, mix well. Add ½ cup water.", tip: null },
      { text: "Cover and cook 15 mins on low heat until potatoes are tender.", tip: "Check by pressing a potato cube with a spoon — it should break easily." },
    ]
  },

  {
    title: "Garlic Butter Rice",
    mealType: "dinner", time: "20 mins", difficulty: "Easy", servings: "1-2",
    description: "Fragrant garlic butter rice — simple comfort food that feels fancy.",
    tags: ["Comfort", "Quick", "Tasty"],
    required: ["rice", "garlic"],
    optional: ["butter", "ghee", "onion", "salt"],
    ingredients: [
      { name: "Rice (chawal)",    amount: "½ cup",    k: "rice"   },
      { name: "Garlic (lehsun)",  amount: "4-5 cloves", k: "garlic" },
      { name: "Butter/Ghee",      amount: "1 tbsp",   k: "butter" },
      { name: "Salt",             amount: "to taste", k: "salt"   },
    ],
    steps: [
      { text: "Cook rice normally (1:2 water ratio, 15-18 mins).", tip: null },
      { text: "While rice cooks, finely mince the garlic cloves.", tip: null },
      { text: "Heat butter or ghee in a pan. Fry minced garlic on low heat until golden and fragrant.", tip: "Watch closely — garlic goes from golden to burnt in seconds." },
      { text: "Pour the garlic butter over the cooked rice and toss well.", tip: null },
      { text: "Serve hot. Goes great with dal or any curry.", tip: null },
    ]
  },

  {
    title: "Ghee Dal",
    mealType: "dinner", time: "25 mins", difficulty: "Easy", servings: "2",
    description: "Simple dal finished with fragrant ghee tadka — pure comfort.",
    tags: ["High-Protein", "Comforting", "Classic"],
    required: ["dal", "ghee"],
    optional: ["garlic", "onion", "turmeric", "cumin", "salt"],
    ingredients: [
      { name: "Dal",            amount: "½ cup", k: "dal"    },
      { name: "Ghee",           amount: "2 tsp", k: "ghee"   },
      { name: "Garlic (lehsun)", amount: "4 cloves", k: "garlic" },
      { name: "Cumin (jeera)",  amount: "½ tsp", k: "cumin"  },
      { name: "Turmeric (haldi)", amount: "¼ tsp", k: "turmeric" },
    ],
    steps: [
      { text: "Boil dal with water, turmeric and salt until completely soft.", tip: "More water than you think — dal absorbs a lot." },
      { text: "Heat ghee in a small pan until very hot (almost smoking).", tip: "Hot ghee is the secret — it should sizzle immediately when you add spices." },
      { text: "Add cumin seeds — let them splutter. Add crushed garlic and fry until golden.", tip: null },
      { text: "Pour this hot ghee tadka over the cooked dal. It will sizzle dramatically.", tip: null },
      { text: "Mix lightly and serve hot with rice or bread.", tip: null },
    ]
  },


  {
    title: "Maggi Noodles",
    mealType: "snack", time: "10 mins", difficulty: "Easy", servings: "1",
    description: "The hostel classic — upgraded with whatever's in your fridge.",
    tags: ["Comfort Food", "Quick", "Hostel Classic"],
    required: ["maggi"],
    optional: ["egg", "onion", "tomato", "potato", "capsicum", "cheese"],
    ingredients: [
      { name: "Maggi packet",    amount: "1-2 pcs",  k: "maggi" },
      { name: "Water",           amount: "1.5 cups", k: null    },
      { name: "Egg (anda)",      amount: "1 pcs",    k: "egg"   },
      { name: "Onion+Tomato",    amount: "small",    k: "onion" },
    ],
    steps: [
      { text: "Boil 1.5 cups water. Add chopped onion and tomato if using.", tip: null },
      { text: "Add Maggi masala tastemaker and stir well.", tip: "Add masala to water before noodles for better flavour." },
      { text: "Break noodle cake and add to boiling water.", tip: null },
      { text: "Cook 2 minutes stirring. Crack in egg and stir immediately if using.", tip: "Egg adds protein and makes it more filling." },
      { text: "Remove when still slightly saucy — thickens as it cools.", tip: null },
    ]
  },

  {
    title: "Aloo Toast",
    mealType: "snack", time: "15 mins", difficulty: "Easy", servings: "1",
    description: "Spiced mashed potato stuffed toast — Mumbai street food in your hostel.",
    tags: ["Street Food", "Filling", "Tasty"],
    required: ["potato", "bread"],
    optional: ["onion", "butter", "chilli", "salt"],
    ingredients: [
      { name: "Potato (aloo)", amount: "1-2 pcs",   k: "potato" },
      { name: "Bread",         amount: "2 slices",  k: "bread"  },
      { name: "Onion (pyaz)",  amount: "½ small",   k: "onion"  },
      { name: "Butter",        amount: "1 tsp",     k: "butter" },
    ],
    steps: [
      { text: "Boil or microwave potatoes until soft. Peel and mash well.", tip: "Mash while hot — cold potatoes get lumpy." },
      { text: "Mix mashed potato with finely chopped onion, salt, chilli, and any spices.", tip: null },
      { text: "Spread the potato mixture generously on a bread slice. Close with another slice.", tip: null },
      { text: "Toast on a buttered pan until golden brown on both sides.", tip: "Press down gently with a spatula for better browning." },
      { text: "Serve hot with ketchup or green chutney.", tip: null },
    ]
  },

  {
    title: "Egg Bhurji on Toast",
    mealType: "snack", time: "10 mins", difficulty: "Easy", servings: "1",
    description: "Spicy Indian scrambled eggs on toast — the perfect evening snack.",
    tags: ["High-Protein", "Quick", "Spicy"],
    required: ["egg", "bread"],
    optional: ["onion", "tomato", "chilli", "butter", "capsicum"],
    ingredients: [
      { name: "Eggs (anda)",              amount: "2 pcs",  k: "egg"    },
      { name: "Bread",                    amount: "2 slices", k: "bread" },
      { name: "Onion (pyaz)",             amount: "½ pcs",  k: "onion"  },
      { name: "Green Chilli (hari mirch)", amount: "1 pcs",  k: "chilli" },
      { name: "Oil/Butter",               amount: "1 tsp",  k: "butter" },
    ],
    steps: [
      { text: "Heat oil in pan. Add finely chopped onion and chilli. Fry 2 mins.", tip: null },
      { text: "Add finely chopped tomato if available. Cook 2 mins.", tip: null },
      { text: "Beat eggs with salt. Pour in and stir constantly on medium heat.", tip: "Stir in big slow circles — gives you chunky, fluffy bhurji." },
      { text: "Toast bread separately until crispy.", tip: null },
      { text: "Pile egg bhurji on toast and eat immediately.", tip: null },
    ]
  },

  {
    title: "Banana Peanut Toast",
    mealType: "snack", time: "5 mins", difficulty: "Easy", servings: "1",
    description: "Sweet banana on toast — healthy, filling 2-minute snack.",
    tags: ["No Cooking", "Healthy", "Sweet"],
    required: ["banana", "bread"],
    optional: ["butter", "honey", "sugar"],
    ingredients: [
      { name: "Banana (kela)", amount: "1 pcs",  k: "banana" },
      { name: "Bread",         amount: "2 slices", k: "bread" },
      { name: "Butter",        amount: "1 tsp",  k: "butter" },
      { name: "Honey/Sugar",   amount: "drizzle", k: "honey"  },
    ],
    steps: [
      { text: "Toast bread until golden and crispy.", tip: null },
      { text: "Spread butter on hot toast.", tip: null },
      { text: "Slice banana and arrange on top.", tip: null },
      { text: "Drizzle honey or sprinkle sugar on top.", tip: "Add a pinch of cinnamon if available — transforms the flavour!" },
    ]
  },

  {
    title: "Sooji Cheela",
    mealType: "snack", time: "15 mins", difficulty: "Easy", servings: "1-2",
    description: "Crispy semolina pancakes — savoury and filling with minimal ingredients.",
    tags: ["Crispy", "Quick", "Filling"],
    required: ["sooji"],
    optional: ["onion", "tomato", "chilli", "curd", "salt"],
    ingredients: [
      { name: "Sooji/Rava",  amount: "½ cup",  k: "sooji" },
      { name: "Curd (dahi)", amount: "2 tbsp", k: "curd"  },
      { name: "Onion (pyaz)", amount: "½ pcs", k: "onion" },
      { name: "Salt",        amount: "to taste", k: "salt"  },
    ],
    steps: [
      { text: "Mix sooji with curd, salt, and finely chopped onion. Add water to make a thick pourable batter.", tip: "Let batter rest 5 mins — sooji absorbs water and thickens." },
      { text: "Add more water if too thick — should coat the back of a spoon.", tip: null },
      { text: "Heat a pan and grease with oil. Pour a ladle of batter and spread in a circle.", tip: null },
      { text: "Cook on medium heat 2-3 mins until edges lift. Flip and cook other side 2 mins.", tip: "Don't rush flipping — wait until edges are fully set." },
      { text: "Serve hot with curd or ketchup.", tip: null },
    ]
  },

  {
    title: "Masala Chai",
    mealType: "snack", time: "8 mins", difficulty: "Easy", servings: "2",
    description: "Perfectly spiced Indian chai — hostel essential, non-negotiable.",
    tags: ["Hot Drink", "Classic", "Comforting"],
    required: ["tea", "milk"],
    optional: ["sugar", "ginger"],
    ingredients: [
      { name: "Tea leaves/bag (chai)", amount: "2 tsp",  k: "tea"    },
      { name: "Milk (doodh)",          amount: "1 cup",  k: "milk"   },
      { name: "Water",                 amount: "1 cup",  k: null     },
      { name: "Sugar (cheeni)",        amount: "2 tsp",  k: "sugar"  },
      { name: "Ginger (adrak)",        amount: "small piece", k: "ginger" },
    ],
    steps: [
      { text: "Bring 1 cup water to boil in a vessel.", tip: null },
      { text: "Add tea leaves, grated ginger, and sugar. Boil 1-2 mins.", tip: "More boil time = stronger, more flavourful tea." },
      { text: "Add milk and bring back to a boil. Let it rise up once.", tip: "Watch carefully — it can overflow very fast!" },
      { text: "Strain into cups and serve hot.", tip: "For extra richness, let the tea simmer on low heat 2-3 more mins after adding milk." },
    ]
  },

  {
    title: "Bread Upma",
    mealType: "breakfast", time: "10 mins", difficulty: "Easy", servings: "1",
    description: "Stale bread transformed into a spiced crumble — zero-waste hostel classic.",
    tags: ["Zero Waste", "Quick", "Budget"],
    required: ["bread", "onion"],
    optional: ["tomato", "butter", "egg", "chilli", "mustard"],
    ingredients: [
      { name: "Bread (roti/double roti)", amount: "3-4 slices", k: "bread"  },
      { name: "Onion (pyaz)",             amount: "1 pcs",      k: "onion"  },
      { name: "Tomato (tamatar)",         amount: "1 pcs",      k: "tomato" },
      { name: "Oil/Butter",               amount: "1 tsp",      k: "butter" },
    ],
    steps: [
      { text: "Tear bread into small rough pieces.", tip: "Slightly stale bread works better — fresh bread can get soggy." },
      { text: "Heat oil. Add mustard seeds if available. Add onion and cook until golden.", tip: null },
      { text: "Add tomato and cook until soft.", tip: null },
      { text: "Add bread pieces, salt, and spices. Toss on HIGH heat 2-3 mins.", tip: "High heat crisps up the bread — avoid over-stirring." },
      { text: "Serve hot. Top with a fried egg for extra protein.", tip: null },
    ]
  },

];


// 26   recipes



let fridge         = JSON.parse(localStorage.getItem('hostelhunch_v1') || '[]');
let activeFilter   = 'all';
let currentRecipes = [];



function init() {
  renderQuickChips();
  renderFilterBar();
  renderItems();
  updateStats();
  document.getElementById('item-expiry').min = new Date().toISOString().split('T')[0];
  document.getElementById('item-name').addEventListener('keydown', e => {
    if (e.key === 'Enter') addItem();
  });
}

function save() {
  localStorage.setItem('hostelhunch_v1', JSON.stringify(fridge));
  updateStats();
}

function updateStats() {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const exp = fridge.filter(i => {
    if (!i.expiry) return false;
    const d = new Date(i.expiry); d.setHours(0, 0, 0, 0);
    const diff = Math.ceil((d - today) / 86400000);
    return diff >= 0 && diff <= 3;
  });
  document.getElementById('total-count').textContent  = fridge.length;
  document.getElementById('expiry-count').textContent = exp.length;
}



function resolveToKeyword(name) {
  const clean = name.toLowerCase().trim().replace(/[^a-z\s]/g, '');


  if (SYNONYMS[clean]) return SYNONYMS[clean];

  
  for (const word of clean.split(/\s+/)) {
    if (SYNONYMS[word]) return SYNONYMS[word];
  }

 
  for (const [key, val] of Object.entries(SYNONYMS)) {
    if (clean.includes(key) || key.includes(clean)) return val;
  }

  
  return clean.replace(/s$/, '');
}


function showSynonymHint() {
  const val  = document.getElementById('item-name').value.trim();
  const hint = document.getElementById('synonym-hint');
  if (!val) { hint.textContent = ''; return; }

  const resolved     = resolveToKeyword(val);
  const originalClean = val.toLowerCase().replace(/[^a-z\s]/g, '').replace(/s$/, '');

  hint.textContent = (resolved !== originalClean)
    ? `✓ Recognized as: ${resolved}`
    : '';
}


function fridgeHas(keyword) {
  const target = resolveToKeyword(keyword);
  return fridge.some(f => {
    const resolved = resolveToKeyword(f.name);
    return resolved === target || resolved.includes(target) || target.includes(resolved);
  });
}



function renderQuickChips() {
  document.getElementById('quick-chips').innerHTML = QUICK.map(i =>
    `<button class="quick-chip" onclick='quickAdd(${JSON.stringify(i)})'>
      ${CE[i.cat]} ${i.name}
    </button>`
  ).join('');
}

function quickAdd(item) {
  if (fridge.find(f => resolveToKeyword(f.name) === resolveToKeyword(item.name))) {
    showToast('Already in fridge!', 'warn'); return;
  }
  fridge.push({ id: Date.now(), ...item, expiry: '' });
  save(); renderItems(); renderFilterBar();
  showToast(`${CE[item.cat]} ${item.name} added!`, 'success');
}


function renderFilterBar() {
  const used = ['all', ...new Set(fridge.map(i => i.cat))];
  document.getElementById('filter-bar').innerHTML = used.map(c =>
    `<button class="filter-chip ${activeFilter === c ? 'active' : ''}" onclick="setFilter('${c}')">
      ${c === 'all' ? 'All' : CE[c] + ' ' + c.charAt(0).toUpperCase() + c.slice(1)}
    </button>`
  ).join('');
}

function setFilter(c) { activeFilter = c; renderFilterBar(); renderItems(); }



function addItem() {
  const name = document.getElementById('item-name').value.trim();
  if (!name) { showToast('Enter an item name', 'warn'); return; }

  const resolved = resolveToKeyword(name);
  if (fridge.find(f => resolveToKeyword(f.name) === resolved)) {
    showToast('Already in fridge!', 'warn'); return;
  }

  fridge.push({
    id:     Date.now(),
    name,
    cat:    document.getElementById('item-cat').value,
    qty:    document.getElementById('item-qty').value.trim()  || '—',
    unit:   document.getElementById('item-unit').value.trim(),
    expiry: document.getElementById('item-expiry').value,
  });

  save(); renderItems(); renderFilterBar();
  ['item-name', 'item-qty', 'item-unit', 'item-expiry'].forEach(id =>
    document.getElementById(id).value = ''
  );
  document.getElementById('synonym-hint').textContent = '';

  const rLabel = (resolved !== name.toLowerCase().replace(/[^a-z\s]/g, '').replace(/s$/, ''))
    ? ` (${resolved})` : '';
  showToast(`${CE[document.getElementById('item-cat').value] || '📦'} ${name}${rLabel} added!`, 'success');
}

function removeItem(id) {
  fridge = fridge.filter(i => i.id !== id);
  save(); renderItems(); renderFilterBar();
}

function clearAll() {
  if (!fridge.length) return;
  if (confirm('Clear all fridge items?')) {
    fridge = []; save(); renderItems(); renderFilterBar();
    activeFilter = 'all';
    showToast('Fridge cleared', 'warn');
  }
}



function getExpiryStatus(expiry) {
  if (!expiry) return null;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const d     = new Date(expiry); d.setHours(0, 0, 0, 0);
  const diff  = Math.ceil((d - today) / 86400000);

  if (diff < 0)  return { label: 'Expired',     cls: 'danger', diff };
  if (diff === 0) return { label: 'Today!',      cls: 'danger', diff };
  if (diff <= 3)  return { label: `${diff}d left`, cls: 'warn',   diff };
  return              { label: `${diff}d left`, cls: 'ok',     diff };
}


function renderItems() {
  const list     = document.getElementById('items-list');
  const filtered = activeFilter === 'all' ? fridge : fridge.filter(i => i.cat === activeFilter);

  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state">
      <span class="emoji">${activeFilter === 'all' ? '🛒' : CE[activeFilter]}</span>
       <p>Your fridge is empty.<br>Add some items to get started!</p>
    </div>`;
    return;
  }


  const sorted = [...filtered].sort((a, b) => {
    const sa = getExpiryStatus(a.expiry), sb = getExpiryStatus(b.expiry);
    if (sa && sb)  return sa.diff - sb.diff;
    if (sa)        return -1;
    if (sb)        return 1;
    return a.name.localeCompare(b.name);
  });

  list.innerHTML = sorted.map(item => {
    const es  = getExpiryStatus(item.expiry);
    const cls = es ? (es.cls === 'danger' ? 'expired' : es.cls === 'warn' ? 'expiring-soon' : '') : '';
    const resolved    = resolveToKeyword(item.name);
    const showAlias   = resolved !== item.name.toLowerCase().replace(/[^a-z\s]/g, '').replace(/s$/, '');

    return `<div class="item-card ${cls}">
      <div class="item-emoji">${CE[item.cat]}</div>
      <div class="item-info">
        <div class="item-name">
          ${item.name}
          ${showAlias ? `<span style="font-size:10px;color:rgb(92, 184, 92);font-family:'DM Mono',monospace;">(${resolved})</span>` : ''}
        </div>
        <div class="item-meta">
          <span class="item-qty">${item.qty}${item.unit ? ' ' + item.unit : ''}</span>
          <span class="item-cat">${item.cat}</span>
          ${es ? `<span class="expiry-badge ${es.cls}">${es.label}</span>` : ''}
        </div>
      </div>
      <div>
        <button class="icon-btn del" onclick="removeItem(${item.id})" title="Remove">✕</button>
      </div>
    </div>`;
  }).join('');
}


function scoreRecipe(recipe, mealFilter) {
  if (mealFilter !== 'any' && recipe.mealType !== mealFilter) return null;

  const hasRequired = recipe.required.some(r => fridgeHas(r));
  if (!hasRequired) return null;

  const matchedOpt = recipe.optional.filter(o => fridgeHas(o));
  const total      = recipe.required.length + recipe.optional.length;
  const matched    = (hasRequired ? 1 : 0) + matchedOpt.length;
  const score      = Math.round((matched / Math.max(total, 1)) * 100);

  
  const today    = new Date(); today.setHours(0, 0, 0, 0);
  const expNames = fridge
    .filter(i => {
      if (!i.expiry) return false;
      const d = new Date(i.expiry); d.setHours(0, 0, 0, 0);
      return Math.ceil((d - today) / 86400000) <= 3;
    })
    .map(i => resolveToKeyword(i.name));

  const usesSoon = [...recipe.required, ...recipe.optional]
    .some(r => expNames.includes(resolveToKeyword(r)));

  return { ...recipe, score, usesSoon };
}

function getRecipes() {
  if (!fridge.length) { showToast('Add items to your fridge first!', 'warn'); return; }

  const mealType = document.getElementById('meal-type').value;
  const scored   = RECIPES.map(r => scoreRecipe(r, mealType)).filter(Boolean);

  
  scored.sort((a, b) => {
    if (a.usesSoon && !b.usesSoon) return -1;
    if (!a.usesSoon && b.usesSoon) return 1;
    return b.score - a.score;
  });

  currentRecipes = scored.slice(0, 6);

  if (!currentRecipes.length) {
    document.getElementById('recipe-panel').innerHTML = `<div class="no-match">
      <span style="font-size:36px;display:block;margin-bottom:14px">🤔</span>
      <strong style="color:rgb(58, 125, 58);font-size:15px;">No matching recipes found</strong><br><br>
      Try switching to <strong style="color:rgb(245, 166, 35)">Any Meal</strong> or add more items like:<br>
      <span style="color:rgb(58, 125, 58)">Eggs / Anda &bull; Bread / Roti &bull; Rice / Chawal &bull; Dal &bull; Potato / Aloo &bull; Maggi</span>
    </div>`;
    return;
  }

  renderRecipeGrid();
}



function renderRecipeGrid() {
  const panel  = document.getElementById('recipe-panel');
  const today  = new Date(); today.setHours(0, 0, 0, 0);

  const expItems = fridge.filter(i => {
    if (!i.expiry) return false;
    const d    = new Date(i.expiry); d.setHours(0, 0, 0, 0);
    const diff = Math.ceil((d - today) / 86400000);
    return diff >= 0 && diff <= 3;
  });

  const alert  = expItems.length
    ? `<div class="expiry-alert">
        <span style="font-size:18px">⚠️</span>
        <span><strong style="color:rgb(245, 166, 35)">${expItems.map(i => i.name).join(', ')}</strong>
        expiring soon — recipes using them are marked 🔥</span>
      </div>` : '';

  const urgent = currentRecipes.filter(r => r.usesSoon);
  const normal = currentRecipes.filter(r => !r.usesSoon);

  let html = alert;
  if (urgent.length) html += `
    <div class="section-label">🔥 Use Before Expiry</div>
    <div class="suggestions-grid">${urgent.map((r, i) => recipeCard(r, i)).join('')}</div>`;
  if (normal.length) html += `
    <div class="section-label" style="margin-top:${urgent.length ? '8' : '0'}px">✨ Best Matches</div>
    <div class="suggestions-grid">${normal.map((r, i) => recipeCard(r, i + urgent.length)).join('')}</div>`;

  html += `<div class="waste-tip">
    <span>♻️</span>
    <span><strong>Minimize waste:</strong> Stale bread → Bread Upma. Leftover rice → Fried Rice or Dahi Rice. Expiring veggies → any stir-fry.</span>
  </div>`;

  panel.innerHTML = html;
}

function recipeCard(r, idx) {
  const mealEmoji = { breakfast: '🌅', lunch: '☀️', dinner: '🌙', snack: '🍿' }[r.mealType] || '🍽';
  const diffColor = r.difficulty === 'Easy' ? 'rgb(92, 184, 92)' : 'rgb(245, 166, 35)';

  return `<div class="suggestion-card" onclick="showDetail(${idx})">
    <div class="match-bar-wrap">
      <div class="match-bar-label">
        <span>Ingredient match</span>
        <span style="color:rgb(245, 166, 35)">${r.score}%</span>
      </div>
      <div class="match-bar">
        <div class="match-bar-fill" style="width:${r.score}%"></div>
      </div>
    </div>
    <div class="card-meal-tag">${mealEmoji} ${(r.mealType || '').toUpperCase()} ${r.usesSoon ? '🔥' : ''}</div>
    <div class="card-title">${r.title}</div>
    <div class="card-desc">${r.description}</div>
    <div class="card-tags">${(r.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <div class="card-meta">
      <span>⏱ ${r.time}</span>
      <span style="color:${diffColor}">● ${r.difficulty}</span>
      <span>👤 ${r.servings}</span>
    </div>
  </div>`;
}



function showDetail(idx) {
  const r     = currentRecipes[idx];
  const panel = document.getElementById('recipe-panel');
  const mealEmoji = { breakfast: '🌅', lunch: '☀️', dinner: '🌙', snack: '🍿' }[r.mealType] || '🍽';

  const ingRows = r.ingredients.map((ing, i) => {
    const inFridge = ing.k ? fridgeHas(ing.k) : false;
    return `<div class="ingredient-item">
      <span class="have-badge ${inFridge ? 'have' : 'need'}" title="${inFridge ? 'In your fridge' : 'May need to buy'}"></span>
      <div class="ingredient-check" id="ichk-${i}" onclick="toggleCheck(${i})">
        <span class="chk-icon"></span>
      </div>
      <span>${ing.name}</span>
      <span class="ingredient-amt">${ing.amount}</span>
    </div>`;
  }).join('');

  const stepRows = r.steps.map((s, i) => `
    <div class="step-item" style="animation-delay:${i * 0.06}s">
      <div class="step-num">${i + 1}</div>
      <div class="step-content">
        <div class="step-text">${s.text}</div>
        ${s.tip ? `<div class="step-tip">💡 ${s.tip}</div>` : ''}
      </div>
    </div>`
  ).join('');

  panel.innerHTML = `<div style="animation:fadeUp 0.3s ease">
    <div class="detail-back" onclick="renderRecipeGrid()">← Back to suggestions</div>
    <div class="detail-meal-tag">${mealEmoji} ${(r.mealType || '').toUpperCase()} — ${r.score}% match</div>
    <div class="detail-title">${r.title}</div>
    <div class="detail-desc">${r.description}</div>
    <div class="detail-stats">
      <div class="dstat">⏱ <strong>${r.time}</strong></div>
      <div class="dstat">📊 <strong>${r.difficulty}</strong></div>
      <div class="dstat">👤 <strong>${r.servings}</strong> serving(s)</div>
    </div>
    <div class="detail-body">
      <div class="ingredients-box">
        <div class="box-title"><span class="dot"></span> Ingredients</div>
        <div style="font-size:10px;font-family:'DM Mono',monospace;color:rgb(138, 158, 140);margin-bottom:10px;">
          🟢 in fridge &nbsp; ⚫ may need
        </div>
        ${ingRows}
      </div>
      <div>
        <div class="box-title"><span class="dot"></span> How to Make</div>
        ${stepRows}
        <div class="waste-tip" style="margin-top:20px;">
          ♻️ <strong>Done cooking?</strong> Remove used items from your fridge tracker to keep it accurate!
        </div>
      </div>
    </div>
  </div>`;
}

function toggleCheck(idx) {
  const el = document.getElementById(`ichk-${idx}`);
  el.classList.toggle('checked');
  el.querySelector('.chk-icon').textContent = el.classList.contains('checked') ? '✓' : '';
}



let toastTimer;

function showToast(msg, type = 'success') {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const icons = { success: '✓', warn: '⚠', error: '✕' };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<span class="toast-icon">${icons[type]}</span> ${msg}`;
  document.body.appendChild(t);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.remove(), 2800);
}


init();
