import React from 'react';

const recipes = [
  {
    id: 1,
    title: "Forest Greens & Tempeh Bowl",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu-Q8JncQikEYNzo-5UNatVSHxUeSKQsqvdw0b8TCznj05VvE881BXe_ZXpQQv1DeTlTw6nJsiAULPBr6SXNh2LqOEA2fLn4tPAFTIuJYxBa6LU9WjDg8tdwBxW59riuSe3bXqg0cZB4-zyzObZh6op0b2U0GBgjrg6PJ_hrpIUlP006Kor7Cl4VWkLjXItixnWrbeWRNOav47Fb1HHnFiJS1hAtk1sNEmKbRuzkyejEiNwDtdHQQL1hoP3c0gM8hIYxx9r0IzEQE",
    tag: "Keto Friendly",
    tagColor: "text-primary",
    stats: "420 kcal • 32g Protein • 12m Prep"
  },
  {
    id: 2,
    title: "Wild Salmon w/ Asparagus",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-OXb3Ep_nTg8znf_wPUBXKbEQLHQsjMzI4IrbreVorcyRBL-llCBNEWxcJv_cxoPvQx3rxBj0J7t9oQMl5k59jrzjhxLxIPsXiOgXH-iEb7te2us9Apb5GpKpPLDz1lNe89rNvJN0j6I5Xg0SqctSsoSqoBB6WF9frAeEGmE_ds2BKAz0XLlxW_74eO-H_Rjg1ohOJ37_jScXqlrrAuYsAzhMxgZVhyZOO_O7t3Gzo8qmNjc4FvrUYwczJa2PLLRbRKTqnT2i7so",
    tag: "High Omega-3",
    tagColor: "text-secondary",
    stats: "510 kcal • 45g Protein • 20m Prep"
  },
  {
    id: 3,
    title: "Midnight Berry Power Bowl",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFTpkApDnz2S8WcsI6Sjn5HLcvevJ0a-rFAPcoqvD-aikGqrcZgdIiiQ3CaARTAH-aWQkvt11rnxhm0D9CYEznNd8Bq2lfI92eBrsK6DBeYkIy6deNvaEW_S9p1nwg5yNVsfSp2TPaqhNF5MZJdRGrQs7Qf1wcvcyKNefDqUJRlv8Op5Ct825vC-3tMSeGLkGmrbGBmmv0SrxXcdPrlGOVsgGGKgqOTzkm4jCVkoh33Ew0pp6QdT5az6T_wchDCHTyGM1m9chSiIs",
    tag: "Antioxidant Rich",
    tagColor: "text-tertiary",
    stats: "340 kcal • 18g Protein • 5m Prep"
  }
];

export default function RecipeDiscovery() {
  return (
    <section className="md:col-span-12 mt-6">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold font-[Manrope]">Trending Lab-Approved Meals</h2>
        <button className="text-primary-fixed-variant text-sm font-bold underline underline-offset-8 hover:text-primary transition-colors cursor-pointer">
          Explore All Recipes
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <div key={recipe.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-5 shadow-lg shadow-[#00110F]/30">
              <img 
                alt={recipe.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src={recipe.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className={`absolute top-4 left-4 glass-card px-3 py-1.5 rounded-full text-[10px] font-bold ${recipe.tagColor} uppercase tracking-wider backdrop-blur-md bg-surface-container-highest/60 border border-white/5`}>
                {recipe.tag}
              </div>
            </div>
            <h4 className="text-xl font-bold mb-1.5 font-[Manrope] group-hover:text-primary transition-colors">{recipe.title}</h4>
            <p className="text-on-surface-variant text-sm">{recipe.stats}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
