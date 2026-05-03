import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const recipes = [
  {
    id: 1,
    title: "Forest Greens & Tempeh Bowl",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu-Q8JncQikEYNzo-5UNatVSHxUeSKQsqvdw0b8TCznj05VvE881BXe_ZXpQQv1DeTlTw6nJsiAULPBr6SXNh2LqOEA2fLn4tPAFTIuJYxBa6LU9WjDg8tdwBxW59riuSe3bXqg0cZB4-zyzObZh6op0b2U0GBgjrg6PJ_hrpIUlP006Kor7Cl4VWkLjXItixnWrbeWRNOav47Fb1HHnFiJS1hAtk1sNEmKbRuzkyejEiNwDtdHQQL1hoP3c0gM8hIYxx9r0IzEQE",
    tag: "Keto Friendly",
    tagColor: "text-primary",
    stats: "420 kcal • 32g Protein • 12m Prep",
    ingredients: ["200g Tempeh", "2 cups Spinach", "1 Avocado", "2 tbsp Olive Oil"],
    instructions: "Marinate tempeh in soy sauce and pan-fry. Serve over fresh spinach with sliced avocado and a drizzle of olive oil."
  },
  {
    id: 2,
    title: "Wild Salmon w/ Asparagus",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-OXb3Ep_nTg8znf_wPUBXKbEQLHQsjMzI4IrbreVorcyRBL-llCBNEWxcJv_cxoPvQx3rxBj0J7t9oQMl5k59jrzjhxLxIPsXiOgXH-iEb7te2us9Apb5GpKpPLDz1lNe89rNvJN0j6I5Xg0SqctSsoSqoBB6WF9frAeEGmE_ds2BKAz0XLlxW_74eO-H_Rjg1ohOJ37_jScXqlrrAuYsAzhMxgZVhyZOO_O7t3Gzo8qmNjc4FvrUYwczJa2PLLRbRKTqnT2i7so",
    tag: "High Omega-3",
    tagColor: "text-secondary",
    stats: "510 kcal • 45g Protein • 20m Prep",
    ingredients: ["1 Salmon Fillet", "1 bunch Asparagus", "Lemon wedges", "Garlic herb butter"],
    instructions: "Roast salmon and asparagus together on a sheet pan at 400°F for 15 mins. Top with herb butter and lemon."
  },
  {
    id: 3,
    title: "Midnight Berry Power Bowl",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFTpkApDnz2S8WcsI6Sjn5HLcvevJ0a-rFAPcoqvD-aikGqrcZgdIiiQ3CaARTAH-aWQkvt11rnxhm0D9CYEznNd8Bq2lfI92eBrsK6DBeYkIy6deNvaEW_S9p1nwg5yNVsfSp2TPaqhNF5MZJdRGrQs7Qf1wcvcyKNefDqUJRlv8Op5Ct825vC-3tMSeGLkGmrbGBmmv0SrxXcdPrlGOVsgGGKgqOTzkm4jCVkoh33Ew0pp6QdT5az6T_wchDCHTyGM1m9chSiIs",
    tag: "Antioxidant Rich",
    tagColor: "text-tertiary",
    stats: "340 kcal • 18g Protein • 5m Prep",
    ingredients: ["1 cup Mixed Berries", "1/2 cup Greek Yogurt", "1 tbsp Chia seeds", "A handful of nuts"],
    instructions: "Blend half the berries with yogurt. Top with remaining berries, chia seeds, and assorted nuts for crunch."
  }
];

export default function RecipeDiscovery() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const navigate = useNavigate();

  const openRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipe = () => {
    setSelectedRecipe(null);
  };

  return (
    <section className="md:col-span-12 mt-6 relative">
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold font-[Manrope]">Trending Lab-Approved Meals</h2>
        <button 
          onClick={() => navigate('/recipes')}
          className="text-primary-fixed-variant text-sm font-bold underline underline-offset-8 hover:text-primary transition-colors cursor-pointer active:scale-95"
        >
          Explore All Recipes
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <div 
            key={recipe.id} 
            className="group cursor-pointer rounded-2xl transition-all duration-300 hover:bg-white/5 hover:-translate-y-1 p-2"
            onClick={() => openRecipe(recipe)}
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-5 shadow-lg shadow-[#00110F]/30 group-hover:shadow-primary/20 transition-all duration-500">
              <img 
                alt={recipe.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                src={recipe.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <span className="bg-primary text-on-primary font-bold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  View Recipe
                </span>
              </div>
              <div className={`absolute top-4 left-4 glass-card px-3 py-1.5 rounded-full text-[10px] font-bold ${recipe.tagColor} uppercase tracking-wider backdrop-blur-md bg-surface-container-highest/60 border border-white/5`}>
                {recipe.tag}
              </div>
            </div>
            <h4 className="text-xl font-bold mb-1.5 font-[Manrope] group-hover:text-primary transition-colors">{recipe.title}</h4>
            <p className="text-on-surface-variant text-sm">{recipe.stats}</p>
          </div>
        ))}
      </div>

      {/* Recipe Modal Overlay */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={closeRecipe}
          ></div>
          <div className="relative w-full max-w-2xl bg-surface-container-high border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform scale-100 animate-in zoom-in-95 duration-300">
            
            {/* Image Section */}
            <div className="w-full md:w-2/5 h-48 md:h-auto relative">
              <img 
                src={selectedRecipe.image} 
                alt={selectedRecipe.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 glass-card px-3 py-1.5 rounded-full text-[10px] font-bold bg-surface-container-highest/80 border border-white/10">
                <span className={selectedRecipe.tagColor}>{selectedRecipe.tag}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-3/5 p-8 flex flex-col">
              <button 
                onClick={closeRecipe}
                className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <h3 className="text-2xl font-bold font-[Manrope] mb-2">{selectedRecipe.title}</h3>
              <p className="text-primary text-sm font-bold mb-6">{selectedRecipe.stats}</p>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-on-surface-variant mb-3 uppercase tracking-wider">Ingredients</h4>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 flex-1">
                <h4 className="text-sm font-bold text-on-surface-variant mb-3 uppercase tracking-wider">Instructions</h4>
                <p className="text-sm leading-relaxed text-on-surface/90">
                  {selectedRecipe.instructions}
                </p>
              </div>

              <div className="flex gap-4 mt-auto">
                <button 
                  onClick={() => {
                    alert(`Added ${selectedRecipe.title} to your Meal Plan!`);
                    closeRecipe();
                  }}
                  className="flex-1 primary-gradient text-on-primary font-bold py-3 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                  Meal Plan
                </button>
                <button 
                  onClick={() => alert(`Saved ${selectedRecipe.title} to favorites!`)}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface border border-white/10 hover:bg-white/5 active:scale-95 transition-all text-on-surface"
                >
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
