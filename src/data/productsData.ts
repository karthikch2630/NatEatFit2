export interface ProductItem {
  name: string;
  desc: string;
  price: string;
  image: string;
  protein: string;
  carbs: string;
  calories: string;
  weight: string;
  fiber?: string;         // e.g. "12g"
  preparation?: string;   // step‑by‑step text (use \n for line breaks)
  benefits?: string;
}

export interface MenuData {
  Oats: ProductItem[];
  Bowls: ProductItem[];
  Salads: ProductItem[];
  Juices: ProductItem[];
  Sandwiches: ProductItem[];
}

// --- ENRICHED MENU DATA ---
export const menuItems: MenuData = {
  // ========================= OVERNIGHT OATS BOWLS =========================
  Oats: [
    {
      name: "Strawberry Oats Bowl",
      desc: "Original Price: ₹355. Creamy buffalo milk oats with fresh strawberries, honey, almonds, walnuts, and seeds.",
      price: "₹299",
      image: "/Oats/strawberry-oats.webp",
      protein: "16-18g",
      carbs: "60-65g",
      calories: "480-510",
      weight: "550g",
      fiber: "11-13g",
      preparation: "1. Soak oats in milk.\n2. Mix with honey, almonds, walnuts, anjeer, kismis, dates, sunflower & pumpkin seeds.\n3. Top with fresh strawberries.\n4. Chill overnight.",
      benefits: "Rich in antioxidants from strawberries, high fiber for digestion, and healthy fats from seeds and nuts."
    },
    {
      name: "Banana Oats Bowl",
      desc: "Original Price: ₹275. Energy-boosting bananas layered over thick overnight oats with nuts and dates.",
      price: "₹209",
      image: "/Oats/Banana-Oats.webp",
      protein: "14-16g",
      carbs: "75-80g",
      calories: "510-530",
      weight: "550g",
      fiber: "11-15g",
      preparation: "1. Soak oats in milk.\n2. Mix with honey, almonds, walnuts, anjeer, kismis, dates, sunflower & pumpkin seeds.\n3. Top with fresh bananas.\n4. Chill overnight.",
      benefits: "Great source of potassium for muscle recovery, high energy from complex carbs."
    },
    {
      name: "Pomegranate Oats Bowl",
      desc: "Original Price: ₹295. Antioxidant-rich pomegranate arils with honey-kissed oats and crunchy seeds.",
      price: "₹229",
      image: "/Oats/pomegranate-oats.webp",
      protein: "15-18g",
      carbs: "65-75g",
      calories: "500-540",
      weight: "550g",
      fiber: "11-13g",
      preparation: "1. Soak oats in milk.\n2. Mix with honey, almonds, walnuts, anjeer, kismis, dates, sunflower & pumpkin seeds.\n3. Top with pomegranate arils.\n4. Chill overnight.",
      benefits: "Packed with immune-boosting antioxidants and vitamins."
    },
    {
      name: "Apple Oats Bowl",
      desc: "Original Price: ₹295. Diced fresh apple with cinnamon, walnuts, and wholesome overnight oats.",
      price: "₹229",
      image: "/Oats/apple-oats.webp",
      protein: "23-25g",
      carbs: "95-105g",
      calories: "720-780",
      weight: "550g",
      fiber: "15-17g",
      preparation: "1. Soak oats in milk.\n2. Mix with honey, almonds, walnuts, anjeer, kismis, dates, sunflower & pumpkin seeds.\n3. Top with fresh diced apples.\n4. Chill overnight.",
      benefits: "High fiber and energy-dense for a perfect pre-workout meal."
    },
    {
      name: "Kiwi Oats Bowl",
      desc: "Original Price: ₹355. Tangy kiwi slices on a bed of rich buffalo milk oats, figs, and almonds.",
      price: "₹269",
      image: "/Oats/kiwi-oats.webp",
      protein: "19-22g",
      carbs: "75-85g",
      calories: "580-630",
      weight: "550g",
      fiber: "11-13g",
      preparation: "1. Soak oats in milk.\n2. Mix with honey, almonds, walnuts, anjeer, kismis, dates, sunflower & pumpkin seeds.\n3. Top with fresh kiwi slices.\n4. Chill overnight.",
      benefits: "High Vitamin C for immunity, aids in healthy digestion."
    },
    {
      name: "Green Grapes Oats Bowl",
      desc: "Original Price: ₹295. Sweet green grapes combined with creamy oats, sunflower seeds, and pumpkin seeds.",
      price: "₹229",
      image: "/Oats/green-grapes-oats.webp",
      protein: "15-17g",
      carbs: "72-75g",
      calories: "500-540",
      weight: "550g",
      fiber: "10-12g",
      preparation: "1. Soak oats in milk.\n2. Mix with honey, almonds, walnuts, anjeer, kismis, dates, sunflower & pumpkin seeds.\n3. Top with fresh green grapes.\n4. Chill overnight.",
      benefits: "Hydrating and loaded with essential vitamins and natural sugars for instant energy."
    },
    {
      name: "Mulberry Oats Bowl",
      desc: "Original Price: ₹385. Exotic mulberries loaded with antioxidants, paired with nutty oats and honey.",
      price: "₹299",
      image: "/Oats/mulberry-oats.webp",
      protein: "42-45g",
      carbs: "160-170g",
      calories: "1300-1350",
      weight: "550g",
      fiber: "30-35g",
      preparation: "1. Soak oats in milk.\n2. Mix with honey, almonds, walnuts, anjeer, kismis, dates, sunflower & pumpkin seeds.\n3. Top with exotic mulberries.\n4. Chill overnight.",
      benefits: "Massive calorie and protein boost for intense bulking and recovery, extremely rich in fiber."
    },
    {
      name: "Blueberry Oats Bowl",
      desc: "Original Price: ₹385. Antioxidant powerhouse with fresh blueberries, seeds, and thick overnight oats.",
      price: "₹299",
      image: "/Oats/blueberry-oats.webp",
      protein: "14-16g",
      carbs: "65-75g",
      calories: "490-520",
      weight: "550g",
      fiber: "11-13g",
      preparation: "1. Soak oats in milk.\n2. Mix with honey, almonds, walnuts, anjeer, kismis, dates, sunflower & pumpkin seeds.\n3. Top with fresh blueberries.\n4. Chill overnight.",
      benefits: "Superfood rich in antioxidants, helps improve brain function and muscle recovery."
    },
    {
      name: "Oats Meal",
      desc: "Original Price: ₹265. Our signature plain base—milk, rolled oats, honey, almonds, walnuts, figs, raisins, dates, and seeds.",
      price: "₹199",
      image: "/Oats/oats-meal.webp",
      protein: "22-25g",
      carbs: "65-75g",
      calories: "700-730",
      weight: "550g",
      fiber: "14-16g",
      preparation: "1. Soak oats in milk.\n2. Mix with honey, almonds, walnuts, anjeer, kismis, dates, sunflower & pumpkin seeds.\n3. Chill overnight.",
      benefits: "Complete wholesome meal packed with protein, healthy fats, and sustained energy."
    },
    {
      name: "Dragon Fruit Oats Bowl",
      desc: "Original Price: ₹305. Vibrant pink dragon fruit cubes over prebiotic-rich oats with nutty crunch.",
      price: "₹249",
      image: "/Oats/dragon-fruit-oats.webp",
      protein: "13-15g",
      carbs: "65-75g",
      calories: "470-510",
      weight: "550g",
      fiber: "11-13g",
      preparation: "1. Soak oats in milk.\n2. Mix with honey, almonds, walnuts, anjeer, kismis, dates, sunflower & pumpkin seeds.\n3. Top with diced dragon fruit.\n4. Chill overnight.",
      benefits: "Supports gut health and immune system with rich prebiotics and Vitamin C."
    }
  ],

  // ================== ALL HIGH PROTEIN BOWLS (Quinoa + Brown Rice) ==================
  Bowls: [
    // ----- High Protein Quinoa Bowls -----
    {
      name: "HP Butter Chicken Quinoa Bowl",
      desc: "Quinoa with butter chicken (succulent pieces in tomato-cream gravy), bell peppers, onions, and broccoli.",
      price: "₹329",
      image: "/quinoa-bowl/butter-chicken-quinoa-bowl.webp",
      protein: "40g",
      carbs: "50-55g",
      calories: "700",
      weight: "450g",
      fiber: "12g",
      preparation: "1. Cook 200g quinoa base.\n2. Prepare 100g butter chicken stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "High lean protein for muscle building paired with low glycemic index carbs."
    },
    {
      name: "HP Soya Chunks Quinoa Bowl",
      desc: "Quinoa with spiced soya chunks masala, sautéed capsicum, zucchini, carrots, and spring onion.",
      price: "₹265",
      image: "/quinoa-bowl/soyachunks-quinoa-bowl.webp",
      protein: "35-37g",
      carbs: "75-80g",
      calories: "540-550",
      weight: "450g",
      fiber: "18g",
      preparation: "1. Cook 200g quinoa base.\n2. Prepare 100g spiced soya chunks.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "Excellent plant-based protein source, very high in fiber for digestion."
    },
    {
      name: "HP Paneer Quinoa Bowl",
      desc: "Quinoa with grilled paneer cubes in spiced tomato-onion masala, bell peppers, broccoli, and corn.",
      price: "₹299",
      image: "/quinoa-bowl/paneer-quinoa-bowl.webp",
      protein: "34-36g",
      carbs: "65-75g",
      calories: "680-710",
      weight: "450g",
      fiber: "10g",
      preparation: "1. Cook 200g quinoa base.\n2. Prepare 100g paneer stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "Rich in casein protein and calcium for bone strength and muscle recovery."
    },
    {
      name: "HP Boiled Egg Quinoa Bowl",
      desc: "Quinoa with boiled egg halves, sautéed spinach, cherry tomatoes, onions, and a light chaat masala sprinkle.",
      price: "₹219",
      image: "/quinoa-bowl/boiled-egg-quinoa-bowl.webp",
      protein: "30-32g",
      carbs: "55-60g",
      calories: "570-590",
      weight: "450g",
      fiber: "10g",
      preparation: "1. Cook 200g quinoa base.\n2. Prepare 100g boiled egg stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "High biological value protein and essential amino acids for fast recovery."
    },
    {
      name: "HP Chicken Quinoa Bowl",
      desc: "Quinoa with herb-grilled chicken breast strips, sautéed zucchini, carrots, and bell peppers.",
      price: "₹299",
      image: "/quinoa-bowl/chicken-quinoa-bowl.webp",
      protein: "52-57g",
      carbs: "55-60g",
      calories: "600-620",
      weight: "450g",
      fiber: "10g",
      preparation: "1. Cook 200g quinoa base.\n2. Prepare 100g grilled chicken stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "Maximum protein lean meal, perfect for strict bodybuilders."
    },
    {
      name: "HP Palak Paneer Quinoa Bowl",
      desc: "Quinoa with creamy spinach purée and soft paneer cubes, flavoured with mild spices.",
      price: "₹329",
      image: "/quinoa-bowl/palak-paneer-quinoa-bowl.webp",
      protein: "25g",
      carbs: "55-60g",
      calories: "570",
      weight: "450g",
      fiber: "11g",
      preparation: "1. Cook 200g quinoa base.\n2. Prepare 100g palak paneer stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "Rich in iron from spinach and calcium from paneer."
    },
    {
      name: "HP Curd Quinoa Bowl",
      desc: "Quinoa mixed with thick hung curd, grated cucumber, carrots, pomegranate, and roasted cumin.",
      price: "₹199",
      image: "/quinoa-bowl/curd-quinoa-bowl.webp",
      protein: "14-18g",
      carbs: "67g",
      calories: "400",
      weight: "450g",
      fiber: "18-20g",
      preparation: "1. Cook 200g quinoa base.\n2. Prepare 100g curd stuffing.\n3. Add 150g fresh veggies/fruits.\n4. Combine in a 450g bowl.",
      benefits: "Cooling and probiotic-rich for excellent gut health and digestion."
    },
    {
      name: "HP Mudda Pappu Quinoa Bowl",
      desc: "Quinoa with hearty toor dal tadka, sautéed beans, carrots, and onions—homestyle comfort.",
      price: "₹209",
      image: "/quinoa-bowl/mudda-pappu-quinoa-bowl.webp",
      protein: "22-25g",
      carbs: "75-80g",
      calories: "540-550",
      weight: "450g",
      fiber: "15-17g",
      preparation: "1. Cook 200g quinoa base.\n2. Prepare 100g mudda pappu (dal) stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "Traditional wholesome comfort food packed with plant-based protein."
    },
    {
      name: "HP Rajma Quinoa Bowl",
      desc: "Quinoa topped with rajma curry (kidney beans in onion-tomato gravy) and fresh coriander.",
      price: "₹229",
      image: "/quinoa-bowl/rajma-quinoa-bowl.webp",
      protein: "24-26g",
      carbs: "75-80g",
      calories: "550-560",
      weight: "450g",
      fiber: "20g",
      preparation: "1. Cook 200g quinoa base.\n2. Prepare 100g rajma stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "High in fiber and complex carbohydrates for long-lasting energy."
    },
    {
      name: "HP Butter Egg Bhurji Quinoa Bowl",
      desc: "Quinoa loaded with buttery scrambled eggs, onions, tomatoes, green chillies, and fresh coriander.",
      price: "₹249",
      image: "/quinoa-bowl/butter-egg-bhurji-quinoa-bowl.webp",
      protein: "30-32g",
      carbs: "45-50g",
      calories: "550-560",
      weight: "450g",
      fiber: "11g",
      preparation: "1. Cook 200g quinoa base.\n2. Prepare 100g egg bhurji stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "Delicious protein-dense meal providing vital amino acids and healthy fats."
    },

    // ----- High Protein Brown Rice Bowls -----
    {
      name: "HP Butter Chicken Brown Rice Bowl",
      desc: "Steamed brown rice with butter chicken, sautéed carrots, beans, and peppers.",
      price: "₹299",
      image: "/brown-rice/brown-rice-butter-chicken-bowl.webp",
      protein: "45g",
      carbs: "85g",
      calories: "640-660",
      weight: "450g",
      fiber: "12g",
      preparation: "1. Steam 200g brown rice base.\n2. Prepare 100g butter chicken stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "High protein and sustained energy release from complex carbs."
    },
    {
      name: "HP Soya Chunks Brown Rice Bowl",
      desc: "Brown rice with spicy soya chunks masala, mixed peppers, and onions.",
      price: "₹199",
      image: "/brown-rice/brown-rice-soyachunks-bowl.webp",
      protein: "33-35g",
      carbs: "75g",
      calories: "510-530",
      weight: "450g",
      fiber: "15g",
      preparation: "1. Steam 200g brown rice base.\n2. Prepare 100g soya chunks stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "Budget-friendly, high plant protein option with excellent fiber content."
    },
    {
      name: "HP Paneer Brown Rice Bowl",
      desc: "Brown rice with paneer in a rich buttery gravy, bell peppers, and sweet corn.",
      price: "₹249",
      image: "/brown-rice/brown-rice-paneer-bowl.webp",
      protein: "30-35g",
      carbs: "90g",
      calories: "750-760",
      weight: "450g",
      fiber: "15g",
      preparation: "1. Steam 200g brown rice base.\n2. Prepare 100g paneer stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "Rich in calcium and energy, ideal post-workout recovery meal."
    },
    {
      name: "HP Boiled Egg Brown Rice Bowl",
      desc: "Brown rice with boiled eggs, sautéed spinach, cherry tomatoes, and a pinch of chaat masala.",
      price: "₹199",
      image: "/brown-rice/brown-rice-boiled-egg.webp",
      protein: "20-25g",
      carbs: "75-80g",
      calories: "480-500",
      weight: "450g",
      fiber: "30g",
      preparation: "1. Steam 200g brown rice base.\n2. Prepare 100g boiled egg stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "Clean proteins and extremely high fiber for optimal digestion."
    },
    {
      name: "HP Chicken Brown Rice Bowl",
      desc: "Brown rice with grilled chicken breast, zucchini, bell peppers, and light herb dressing.",
      price: "₹239",
      image: "/brown-rice/brown-rice-chicken-bowl.webp",
      protein: "40-45g",
      carbs: "75-80g",
      calories: "580-600",
      weight: "450g",
      fiber: "30g",
      preparation: "1. Steam 200g brown rice base.\n2. Prepare 100g chicken stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "Perfect lean muscle building meal with a great macro profile."
    },
    {
      name: "HP Palak Paneer Brown Rice Bowl",
      desc: "Brown rice with palak paneer (spinach & cottage cheese) and sautéed onions and tomatoes.",
      price: "₹259",
      image: "/brown-rice/brown-rice-palak-paneer-bowl.webp",
      protein: "30-35g",
      carbs: "70g",
      calories: "560-590",
      weight: "450g",
      fiber: "12g",
      preparation: "1. Steam 200g brown rice base.\n2. Prepare 100g palak paneer stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "Excellent source of Iron, Calcium, and vegetarian protein."
    },
    {
      name: "HP Curd Brown Rice Bowl",
      desc: "Brown rice with thick curd, cucumber, carrots, pomegranate, and a mild tempering.",
      price: "₹199",
      image: "/brown-rice/brown-rice-curd-bowl.webp",
      protein: "20-22g",
      carbs: "65g",
      calories: "430-440",
      weight: "450g",
      fiber: "10g",
      preparation: "1. Steam 200g brown rice base.\n2. Mix 100g thick curd.\n3. Add 150g fresh veggies/fruits.\n4. Combine in a 450g bowl.",
      benefits: "Soothes the stomach and provides gut-friendly probiotics."
    },
    {
      name: "HP Mudda Pappu Brown Rice Bowl",
      desc: "Brown rice with classic toor dal tadka and mixed vegetables—simple and wholesome.",
      price: "₹199",
      image: "/brown-rice/brown-rice-Mudda-pappu-bowl.webp",
      protein: "20-25g",
      carbs: "75-80g",
      calories: "480-500",
      weight: "450g",
      fiber: "30g",
      preparation: "1. Steam 200g brown rice base.\n2. Prepare 100g dal stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "Easily digestible and provides a complete vegetarian amino acid profile."
    },
    {
      name: "HP Rajma Brown Rice Bowl",
      desc: "Brown rice with kidney bean curry, onion, tomato, and fresh coriander.",
      price: "₹209",
      image: "/brown-rice/brown-rice-rajma-bowl.webp",
      protein: "20-25g",
      carbs: "30g",
      calories: "540-550",
      weight: "450g",
      fiber: "25g",
      preparation: "1. Steam 200g brown rice base.\n2. Prepare 100g rajma stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "High fiber keeps you full longer, excellent for cardiovascular health."
    },
    {
      name: "HP Butter Egg Bhurji Brown Rice Bowl",
      desc: "Brown rice with buttery egg bhurji, onions, tomatoes, green chilli, and coriander.",
      price: "₹249",
      image: "/brown-rice/brown-rice-egg-burji-bowl.webp",
      protein: "27-30g",
      carbs: "80g",
      calories: "600-620",
      weight: "450g",
      fiber: "12g",
      preparation: "1. Steam 200g brown rice base.\n2. Prepare 100g egg bhurji stuffing.\n3. Sauté 150g mixed veggies.\n4. Combine in a 450g bowl.",
      benefits: "High energy output and rich in Choline and Vitamin D from eggs."
    }
  ],

  // ========================= LEAN LIFE SALADS =========================
  Salads: [
    {
      name: "Paneer Salad",
      desc: "Grilled paneer cubes, mixed greens, cherry tomatoes, cucumber, onion with lemon-herb dressing.",
      price: "₹249",
      image: "/salaads/panner-salaad.webp",
      protein: "27g",
      carbs: "18g",
      calories: "510",
      weight: "300g",
      fiber: "7g",
      preparation: "1. Chop fresh veggies.\n2. Grill paneer lightly.\n3. Toss with dressing.\n4. Serve fresh.",
      benefits: "Low carb, high protein option for ketogenic or low-carb diets."
    },
    {
      name: "Chicken Salad",
      desc: "Shredded grilled chicken, crisp lettuce, bell peppers, sweet corn, and light vinaigrette.",
      price: "₹249",
      image: "/salaads/chicken-salaad.webp",
      protein: "38g",
      carbs: "18g",
      calories: "400",
      weight: "300g",
      fiber: "7g",
      preparation: "1. Grill and shred chicken breast.\n2. Mix with fresh greens and corn.\n3. Toss in vinaigrette.",
      benefits: "Extremely lean, perfect for cutting phases and fat loss."
    },
    {
      name: "Corn Salad",
      desc: "Steamed sweet corn tossed with capsicum, tomato, onion, coriander, and lemon.",
      price: "₹199",
      image: "/salaads/corn-salaad.webp",
      protein: "6g",
      carbs: "40g",
      calories: "260",
      weight: "300g",
      fiber: "9g",
      preparation: "1. Steam sweet corn.\n2. Dice veggies finely.\n3. Toss with lemon juice and spices.",
      benefits: "Refreshing and rich in Vitamin C and fiber."
    },
    {
      name: "Veg Salad",
      desc: "Crunchy cucumber, carrot, lettuce, onion, beetroot—pure garden freshness with zero-sugar dressing.",
      price: "₹189",
      image: "/salaads/veg-salaad.webp",
      protein: "4g",
      carbs: "25g",
      calories: "220",
      weight: "300g",
      fiber: "10-12g",
      preparation: "1. Chop all raw vegetables.\n2. Mix thoroughly.\n3. Toss with zero-sugar dressing.",
      benefits: "Ultra-low calorie, highly detoxifying and rich in micronutrients."
    },
    {
      name: "Rajma Salad",
      desc: "Boiled kidney beans with fresh tomato, onion, cucumber, coriander, and zesty lemon juice.",
      price: "₹199",
      image: "/salaads/rajma-salaad.webp",
      protein: "8g",
      carbs: "35g",
      calories: "320",
      weight: "300g",
      fiber: "11g",
      preparation: "1. Boil kidney beans until tender.\n2. Chop fresh veggies.\n3. Mix with lemon juice and herbs.",
      benefits: "Heart-healthy and keeps you satiated for hours due to high fiber."
    },
    {
      name: "Egg Bhurji Salad",
      desc: "Warm spiced scrambled eggs served over a bed of crunchy garden greens.",
      price: "₹229",
      image: "/salaads/egg-bhurji-salaad.webp",
      protein: "22g",
      carbs: "22g",
      calories: "360",
      weight: "300g",
      fiber: "8g",
      preparation: "1. Prepare warm egg bhurji.\n2. Prepare bed of fresh greens.\n3. Top greens with warm bhurji.",
      benefits: "Balanced macro profile for a light but fulfilling meal."
    },
    {
      name: "Mushroom Salad",
      desc: "Sautéed earthy mushrooms with spinach, arugula, garlic, and balsamic glaze.",
      price: "₹269",
      image: "/salaads/mushroom-salaad.webp",
      protein: "6g",
      carbs: "20g",
      calories: "160",
      weight: "300g",
      fiber: "7g",
      preparation: "1. Sauté mushrooms with garlic.\n2. Toss spinach and arugula.\n3. Drizzle balsamic glaze.",
      benefits: "Immune-boosting and extremely low calorie."
    },
    {
      name: "Peanut Salad",
      desc: "Roasted peanuts combined with chopped cucumber, tomato, onion, chaat masala, and lemon.",
      price: "₹209",
      image: "/salaads/peanut-salaad.webp",
      protein: "13g",
      carbs: "28g",
      calories: "370",
      weight: "300g",
      fiber: "14-16g",
      preparation: "1. Roast peanuts lightly.\n2. Chop veggies.\n3. Toss with lemon and chaat masala.",
      benefits: "Rich in healthy fats, niacin, and satisfying crunch."
    },
    {
      name: "Soya Chunks Salad",
      desc: "High-protein soya chunks tossed with crunchy peppers, onion, and tangy lime dressing.",
      price: "₹199",
      image: "/salaads/soyachunks-salaad.webp",
      protein: "25-27g",
      carbs: "10-25g",
      calories: "320-340",
      weight: "300g",
      fiber: "10-12g",
      preparation: "1. Boil and squeeze soya chunks.\n2. Toss with fresh veggies.\n3. Add tangy lime dressing.",
      benefits: "Vegan muscle-builder, very high protein density."
    },
    {
      name: "Broccoli Salad",
      desc: "Blanched broccoli florets, cherry tomatoes, toasted seeds, and light lemon vinaigrette.",
      price: "₹285",
      image: "/salaads/broccoil-salaad.webp",
      protein: "6g",
      carbs: "30g",
      calories: "190",
      weight: "300g",
      fiber: "11g",
      preparation: "1. Blanch broccoli briefly.\n2. Toss with cherry tomatoes and seeds.\n3. Dress with vinaigrette.",
      benefits: "Loaded with Vitamin K, folate, and cancer-fighting antioxidants."
    }
  ],  

  // ========================= COLD PRESSED JUICES =========================
  Juices : [
  {
    name: "Cold Pressed Pineapple Juice",
    desc: "Fresh cold-pressed pineapple juice—rich in digestive enzymes and tropical sweetness.",
    price: "₹149",
    image: "/juice/pine-apple-juice.webp",
    protein: "0.5g",
    carbs: "32g",
    calories: "130",
    weight: "300ml",
    preparation: "Cold-pressed fresh pineapple to retain maximum enzymes and nutrients.",
    benefits: "Cold-pressed pineapple juice contains bromelain, aiding digestion and reducing inflammation."
  },
  {
    name: "Cold Pressed Green Grape Juice",
    desc: "Pure cold-pressed green grape juice, naturally sweet with no added sugar.",
    price: "₹159",
    image: "/juice/green-grapes-juice.webp",
    protein: "0.5g",
    carbs: "35g",
    calories: "140",
    weight: "300ml",
    preparation: "Cold-pressed fresh green grapes for maximum freshness.",
    benefits: "Cold-pressed green grape juice provides natural energy and is rich in resveratrol."
  },
  {
    name: "Cold Pressed Apple Juice",
    desc: "Crisp cold-pressed Himalayan apple juice—refreshing and naturally delicious.",
    price: "₹189",
    image: "/juice/apple-juice.webp",
    protein: "0.2g",
    carbs: "30g",
    calories: "120",
    weight: "300ml",
    preparation: "Cold-pressed Himalayan apples to preserve natural flavor and nutrients.",
    benefits: "Supports heart health, hydration, and provides natural antioxidants."
  },
  {
    name: "Cold Pressed Orange Juice",
    desc: "Vitamin C-packed cold-pressed orange juice made fresh daily from premium oranges.",
    price: "₹159",
    image: "/juice/orange-juice.webp",
    protein: "1g",
    carbs: "26g",
    calories: "110",
    weight: "300ml",
    preparation: "Cold-pressed premium oranges without heat processing.",
    benefits: "Boosts immunity, supports healthy skin, and provides powerful antioxidants."
  },
  {
    name: "Cold Pressed Carrot Juice",
    desc: "Cold-pressed carrot juice—naturally sweet and packed with Vitamin A and antioxidants.",
    price: "₹129",
    image: "/juice/carrot-juice.webp",
    protein: "2g",
    carbs: "18g",
    calories: "80",
    weight: "300ml",
    preparation: "Cold-pressed fresh carrots to preserve essential nutrients.",
    benefits: "Supports eye health, glowing skin, and provides beta-carotene."
  },
  {
    name: "Cold Pressed Beetroot Juice",
    desc: "Cold-pressed beetroot juice—earthy, refreshing, and naturally rich in iron.",
    price: "₹99",
    image: "/juice/beetroot-juice.webp",
    protein: "2g",
    carbs: "16g",
    calories: "70",
    weight: "300ml",
    preparation: "Cold-pressed fresh beetroots for maximum nutrient retention.",
    benefits: "Improves blood circulation, boosts stamina, and supports heart health."
  },
  {
    name: "Cold Pressed Watermelon Juice",
    desc: "Ultra-hydrating cold-pressed watermelon juice with a hint of mint—summer in a bottle.",
    price: "₹129",
    image: "/juice/water-melon-juice.webp",
    protein: "1g",
    carbs: "20g",
    calories: "80",
    weight: "300ml",
    preparation: "Cold-pressed fresh watermelon and mint for a refreshing taste.",
    benefits: "Keeps you hydrated, supports recovery, and is rich in lycopene."
  },
  {
    name: "Cold Pressed ABC Juice",
    desc: "Cold-pressed Apple + Beetroot + Carrot blend—a detoxifying, energy-boosting antioxidant powerhouse.",
    price: "₹149",
    image: "/juice/abc-juice.webp",
    protein: "1.5g",
    carbs: "23g",
    calories: "100",
    weight: "300ml",
    preparation: "Cold-pressed blend of fresh Apple, Beetroot, and Carrot.",
    benefits: "Supports detoxification, promotes glowing skin, and boosts overall vitality."
  }
],

  // ========================= SANDWICHES =========================
 
  Sandwiches: [
    {
      name: "Chicken Sandwich",
      desc: "Grilled chicken breast, lettuce, tomato, onion, and light mayo on whole-wheat bread.",
      price: "₹249",
      image: "/sandwich/chicken-sandwich.webp",
      protein: "30g",
      carbs: "40g",
      calories: "450",
      weight: "250g",
      fiber: "5g",
      preparation: "1. Grill chicken breast.\n2. Toast whole-wheat bread.\n3. Layer with lettuce, tomato, onion, and light mayo.",
      benefits: "High protein, convenient on-the-go meal."
    },
    {
      name: "Paneer Sandwich",
      desc: "Grilled spiced paneer, bell peppers, onion, and mint chutney on multigrain bread.",
      price: "₹249",
      image: "/sandwich/paneer-sandwich.webp",
      protein: "22g",
      carbs: "42g",
      calories: "480",
      weight: "250g",
      fiber: "6g",
      preparation: "1. Grill spiced paneer slices.\n2. Toast multigrain bread.\n3. Layer with mint chutney, peppers, and onions.",
      benefits: "Vegetarian protein source with complex carbohydrates from multigrain bread."
    },
    {
      name: "Vegetable Sandwich",
      desc: "Fresh garden vegetables including cucumber, tomato, and onion slices with a light green chutney.",
      price: "₹179",
      image: "/sandwich/veg-sandwich.webp",
      protein: "7.3g",
      carbs: "36.5g",
      calories: "219",
      weight: "250g",
      fiber: "6g",
      preparation: "1. Slice fresh vegetables.\n2. Toast bread slices lightly.\n3. Apply green chutney and layer veggies evenly.",
      benefits: "Low calorie, rich in micronutrients and a great light snack."
    },
    {
      name: "Egg Sandwich",
      desc: "Protein-packed boiled egg slices with a hint of pepper and light dressing on toasted bread.",
      price: "₹195",
      image: "/sandwich/egg-sandwich.webp",
      protein: "14-16g",
      carbs: "24-27g",
      calories: "265-285",
      weight: "250g",
      fiber: "5g",
      preparation: "1. Boil and slice eggs.\n2. Toast bread slices.\n3. Layer eggs with a pinch of black pepper and greens.",
      benefits: "Excellent source of high-quality protein and essential amino acids."
    },
    {
      name: "Corn Sandwich",
      desc: "Sweet corn kernels mixed with mild spices and herbs, stuffed in crisp toasted bread.",
      price: "₹195",
      image: "/sandwich/corn-sandwich.webp",
      protein: "8.9g",
      carbs: "4.4-9g",
      calories: "250",
      weight: "250g",
      fiber: "6.6g",
      preparation: "1. Steam sweet corn and mix with herbs.\n2. Fill between bread slices.\n3. Grill until golden and crisp.",
      benefits: "High in dietary fiber for digestion and rich in Vitamin C."
    },
    {
      name: "Peanut Butter Sandwich",
      desc: "Thick, creamy, protein-rich peanut butter spread generously on whole-wheat toast.",
      price: "₹195",
      image: "/sandwich/peanut-butter-sandwich.webp",
      protein: "18-20g",
      carbs: "33-36g",
      calories: "500-530",
      weight: "250g",
      fiber: "8-10g",
      preparation: "1. Toast whole-wheat bread slices.\n2. Spread a generous layer of natural peanut butter.\n3. Serve warm.",
      benefits: "Loaded with healthy fats and plant-based protein for sustained energy."
    },
    {
      name: "Nutella Chocolate Sandwich",
      desc: "A delightful treat featuring rich hazelnut chocolate spread between soft toasted bread.",
      price: "₹195",
      image: "/sandwich/nutella-sandwich.webp",
      protein: "8-9g",
      carbs: "52-56g",
      calories: "430-450",
      weight: "250g",
      fiber: "6-7g",
      preparation: "1. Toast bread slices lightly.\n2. Spread a thick layer of Nutella chocolate.\n3. Slice and serve.",
      benefits: "A quick energy-boosting sweet treat to satisfy your cravings."
    },
    {
      name: "Butter Paneer Cheese Sandwich",
      desc: "Rich makhani paneer slices topped with melted cheese in a toasted multigrain bread.",
      price: "₹279",
      image: "/sandwich/butter-paneer-cheese-sandwich.webp",
      protein: "26-28g",
      carbs: "45g",
      calories: "550-580",
      weight: "275g",
      fiber: "6g",
      preparation: "1. Prepare buttery paneer filling.\n2. Layer filling and cheese slices on bread.\n3. Grill until cheese melts completely.",
      benefits: "A delicious indulgence packing solid vegetarian protein and calcium."
    },
    {
      name: "Chicken Cheese Sandwich",
      desc: "Juicy grilled chicken slices smothered with melted cheese and fresh veggies on toasted bread.",
      price: "₹289",
      image: "/sandwich/chicken-cheese-sandwich.webp",
      protein: "35-38g",
      carbs: "42g",
      calories: "520-550",
      weight: "275g",
      fiber: "5g",
      preparation: "1. Grill chicken breast to perfection.\n2. Layer chicken, veggies, and cheese on bread.\n3. Toast in a press until golden and gooey.",
      benefits: "Exceptional protein content for muscle building, with a satisfying cheesy twist."
    }
  ]
};

// ======================== EXISTING TYPE HELPERS ========================
export type CategoryFilter = 'all' | 'Oats' | 'Bowls' | 'Salads' | 'Juices' | 'Sandwiches';
export type DietFilter = 'all' | 'veg' | 'non-veg';
export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'protein-desc' | 'calories-asc';

export interface MenuPageItem extends ProductItem {
  id: string;
  category: CategoryFilter;
  dietType: 'veg' | 'non-veg';
}

const determineDietType = (name: string, desc: string): 'veg' | 'non-veg' => {
  const text = (name + " " + desc).toLowerCase();
  if (text.includes('chicken') || text.includes('egg') || text.includes('mutton') || text.includes('fish') || text.includes('turkey')) {
    return 'non-veg';
  }
  return 'veg';
};

export const FLAT_MENU_ITEMS: MenuPageItem[] = Object.entries(menuItems).flatMap(([category, items]) =>
  (items as ProductItem[]).map((item: ProductItem, index: number) => ({
    ...item,
    id: `${category}-${index}`,
    category: category as CategoryFilter,
    dietType: determineDietType(item.name, item.desc),
  }))
);

const slugify = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');

export interface MenuDetailItem extends MenuPageItem {
  slug: string;
}

export const ALL_PRODUCTS: MenuDetailItem[] = FLAT_MENU_ITEMS.map((item) => ({
  ...item,
  slug: slugify(item.name),
}));

export const getProductById = (id: string): MenuDetailItem | undefined =>
  ALL_PRODUCTS.find((item) => item.id === id);

export const getProductBySlug = (slug: string): MenuDetailItem | undefined =>
  ALL_PRODUCTS.find((item) => item.slug === slug);

export const getRelatedProducts = (category: CategoryFilter, excludeId: string, count = 4): MenuDetailItem[] =>
  ALL_PRODUCTS.filter((item) => item.category === category && item.id !== excludeId).slice(0, count);

export const ALL_CATEGORIES: Exclude<CategoryFilter, 'all'>[] = ['Oats', 'Bowls', 'Salads', 'Juices', 'Sandwiches'];

// ======================== NEW DISPLAY NAME MAPPER ========================
// IMPORT AND USE THIS in your components whenever you want to display the category name to the user.
export const CATEGORY_DISPLAY_NAMES: Record<Exclude<CategoryFilter, 'all'>, string> = {
  Oats: "Overnight Oats",
  Juices: "Cold Pressed Juices",
  Salads: "Fresh Salads",
  Bowls: "Protein Bowls",
  Sandwiches: "Sandwiches"
};

// If you have a filter button for "all", you can use this extended one:
export const FILTER_DISPLAY_NAMES: Record<CategoryFilter, string> = {
  all: "All Items",
  ...CATEGORY_DISPLAY_NAMES
};