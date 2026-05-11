import { useState } from "react";
import Icon from "@/components/ui/icon";

const recipes = [
  {
    id: 1,
    name: "Паста аль Помодоро",
    category: "Итальянская кухня",
    emoji: "🍝",
    image: "https://cdn.poehali.dev/projects/b76d4371-5050-496e-8feb-c83dfe8aaaf7/files/3b4b3ba9-bfaa-4e3c-8454-3ff20e9b0847.jpg",
    description:
      "Классическая итальянская паста с насыщенным томатным соусом — простота, доведённая до совершенства. Это блюдо любят от Сицилии до Милана.",
    history:
      "Паста аль Помодоро появилась на юге Италии в конце XVIII века, когда томаты перестали считаться ядовитыми и начали завоёвывать кухни простых крестьян. В Неаполе говорят: настоящий соус помодоро варится не дольше 20 минут — только тогда сохраняется живость томата. Со временем рецепт разошёлся по всему полуострову, и каждый регион добавил свою нотку: базилик, оливки, каперсы.",
    time: "25 мин",
    servings: 4,
    difficulty: "Просто",
    calories: 380,
    nutrition: { protein: 14, fat: 9, carbs: 62, fiber: 4 },
    ingredients: [
      "Спагетти — 400 г",
      "Томаты в собственном соку — 800 г",
      "Чеснок — 3 зубчика",
      "Оливковое масло Extra Virgin — 4 ст.л.",
      "Базилик свежий — пучок",
      "Соль, сахар по вкусу",
    ],
  },
  {
    id: 2,
    name: "Медовик",
    category: "Русская выпечка",
    emoji: "🍯",
    image: "https://cdn.poehali.dev/projects/b76d4371-5050-496e-8feb-c83dfe8aaaf7/files/373be290-af82-438d-b4fe-d841de2bda2b.jpg",
    description:
      "Нежный торт с тонкими медовыми коржами и сметанным кремом — символ русского домашнего уюта. Каждый кусочек тает во рту.",
    history:
      "По легенде, медовик был создан в начале XIX века при дворе Александра I. Молодой придворный кондитер испёк торт с мёдом, не зная, что императрица терпеть его не могла. Но торт так понравился, что его подали на высочайший стол — и медовик обрёл бессмертие. В народе рецепт упростился и обосновался в каждом доме. Сегодня медовик — неотъемлемая часть русских праздников и семейных посиделок.",
    time: "3 часа",
    servings: 10,
    difficulty: "Средне",
    calories: 420,
    nutrition: { protein: 7, fat: 18, carbs: 58, fiber: 1 },
    ingredients: [
      "Мука — 500 г",
      "Мёд натуральный — 3 ст.л.",
      "Сахар — 200 г",
      "Яйца — 3 шт",
      "Сода — 1 ч.л.",
      "Сметана 30% — 800 г (для крема)",
      "Сахарная пудра — 200 г",
    ],
  },
  {
    id: 3,
    name: "Крем-суп из белых грибов",
    category: "Европейская кухня",
    emoji: "🍄",
    image: "https://cdn.poehali.dev/projects/b76d4371-5050-496e-8feb-c83dfe8aaaf7/files/4b430621-8b0f-4987-97c8-365a6c384bec.jpg",
    description:
      "Бархатистый суп с насыщенным ароматом белых грибов и нотками сливок. Согревает и наполняет дом запахом осеннего леса.",
    history:
      "Грибные супы-пюре пришли в Россию из французской высокой кухни в XVIII веке — именно тогда велюте и биск стали обязательными блюдами аристократических столов. Но в отличие от Европы, где использовали шампиньоны, русские повара предпочли белые грибы — боровики. Их богатый лесной аромат сделал этот суп особым. В монастырских кухнях крем-суп из грибов подавали в постные дни как торжественное блюдо.",
    time: "45 мин",
    servings: 6,
    difficulty: "Просто",
    calories: 210,
    nutrition: { protein: 6, fat: 14, carbs: 16, fiber: 3 },
    ingredients: [
      "Белые грибы — 500 г",
      "Лук репчатый — 2 шт",
      "Сливки 20% — 300 мл",
      "Бульон куриный — 800 мл",
      "Масло сливочное — 50 г",
      "Тимьян — 3 веточки",
      "Соль, белый перец",
    ],
  },
];

const NutritionBar = ({
  label,
  value,
  max,
  color,
}: {
  label: string;
  value: number;
  max: number;
  color: string;
}) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1">
      <span className="text-xs font-body text-muted-foreground uppercase tracking-wide">{label}</span>
      <span className="text-xs font-body font-semibold" style={{ color }}>
        {value} г
      </span>
    </div>
    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{ width: `${Math.min((value / max) * 100, 100)}%`, backgroundColor: color }}
      />
    </div>
  </div>
);

export default function Index() {
  const [activeRecipe, setActiveRecipe] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"history" | "recipe" | "nutrition">("history");

  const selectedRecipe = recipes.find((r) => r.id === activeRecipe);

  return (
    <div className="min-h-screen" style={{ background: "hsl(35, 30%, 96%)" }}>
      {/* Header */}
      <header className="relative overflow-hidden" style={{ background: "hsl(15, 45%, 36%)" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(40,70%,70%) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 20%, hsl(30,60%,60%) 0%, transparent 40%)`,
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-16 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-body font-medium"
            style={{ background: "rgba(255,255,255,0.15)", color: "hsl(40,60%,90%)" }}
          >
            <span>🌿</span> Рецепты с душой и историей
          </div>
          <h1
            className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight"
            style={{ color: "hsl(40, 60%, 92%)" }}
          >
            Кухня с душой
          </h1>
          <p
            className="font-body text-lg md:text-xl max-w-lg mx-auto leading-relaxed"
            style={{ color: "hsl(35, 30%, 78%)" }}
          >
            Каждое блюдо — это история, переданная через поколения. Готовьте с любовью.
          </p>
        </div>
      </header>

      {/* Recipe Cards */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-px" style={{ background: "hsl(15, 60%, 42%)" }} />
          <h2 className="font-display text-3xl font-semibold" style={{ color: "hsl(20, 25%, 18%)" }}>
            Избранные рецепты
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recipes.map((recipe, i) => (
            <button
              key={recipe.id}
              onClick={() => {
                setActiveRecipe(recipe.id);
                setActiveTab("history");
              }}
              className="animate-fade-in-up text-left rounded-2xl overflow-hidden transition-all duration-300 group shadow-sm hover:shadow-lg hover:scale-[1.01]"
              style={{
                animationDelay: `${i * 0.15}s`,
                opacity: 0,
                background: "hsl(35, 25%, 98%)",
                outline: activeRecipe === recipe.id ? "2px solid hsl(15, 60%, 42%)" : "none",
                transform: activeRecipe === recipe.id ? "scale(1.02)" : undefined,
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(30,15,5,0.5) 0%, transparent 60%)" }}
                />
                <span className="absolute top-3 right-3 text-2xl">{recipe.emoji}</span>
                <div className="absolute bottom-3 left-3">
                  <span
                    className="inline-block px-2 py-1 rounded-full text-xs font-body font-medium"
                    style={{ background: "rgba(255,255,255,0.9)", color: "hsl(15, 60%, 38%)" }}
                  >
                    {recipe.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: "hsl(20, 25%, 18%)" }}>
                  {recipe.name}
                </h3>
                <p className="font-body text-sm leading-relaxed mb-4" style={{ color: "hsl(20, 15%, 45%)" }}>
                  {recipe.description.slice(0, 90)}…
                </p>
                <div className="flex items-center gap-4 text-xs font-body" style={{ color: "hsl(20, 15%, 50%)" }}>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={13} /> {recipe.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Users" size={13} /> {recipe.servings} порц.
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Flame" size={13} /> {recipe.calories} ккал
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Detail Panel */}
        {selectedRecipe && (
          <div
            className="mt-10 rounded-3xl overflow-hidden shadow-xl animate-fade-in-up"
            style={{ background: "hsl(35, 25%, 98%)", animationDelay: "0s", opacity: 0 }}
          >
            <div className="md:flex">
              {/* Image side */}
              <div className="md:w-80 h-64 md:h-auto relative flex-shrink-0">
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(30,15,5,0.4) 0%, transparent 70%)" }}
                />
                <div className="absolute top-5 left-5">
                  <span className="text-4xl">{selectedRecipe.emoji}</span>
                </div>
              </div>

              {/* Content side */}
              <div className="flex-1 p-7">
                <div className="flex items-start justify-between mb-1">
                  <span
                    className="text-xs font-body uppercase tracking-widest"
                    style={{ color: "hsl(15, 60%, 42%)" }}
                  >
                    {selectedRecipe.category}
                  </span>
                  <button
                    onClick={() => setActiveRecipe(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon name="X" size={18} />
                  </button>
                </div>
                <h2
                  className="font-display text-4xl font-bold mb-4"
                  style={{ color: "hsl(20, 25%, 18%)" }}
                >
                  {selectedRecipe.name}
                </h2>

                {/* Tabs */}
                <div
                  className="flex gap-1 mb-6 p-1 rounded-xl"
                  style={{ background: "hsl(38, 25%, 90%)" }}
                >
                  {(["history", "recipe", "nutrition"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="flex-1 py-2 px-3 rounded-lg text-sm font-body font-medium transition-all duration-200"
                      style={
                        activeTab === tab
                          ? { background: "hsl(15, 60%, 42%)", color: "hsl(35, 30%, 96%)" }
                          : { color: "hsl(20, 15%, 48%)" }
                      }
                    >
                      {tab === "history" ? "История" : tab === "recipe" ? "Рецепт" : "Питание"}
                    </button>
                  ))}
                </div>

                {/* Tab content */}
                {activeTab === "history" && (
                  <div className="animate-fade-in">
                    <p
                      className="font-body text-sm leading-relaxed mb-4"
                      style={{ color: "hsl(20, 15%, 40%)" }}
                    >
                      {selectedRecipe.description}
                    </p>
                    <div className="rounded-2xl p-4" style={{ background: "hsl(38, 35%, 92%)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="BookOpen" size={15} />
                        <span
                          className="font-body text-xs uppercase tracking-widest font-semibold"
                          style={{ color: "hsl(15, 50%, 40%)" }}
                        >
                          История блюда
                        </span>
                      </div>
                      <p
                        className="font-body text-sm leading-relaxed italic"
                        style={{ color: "hsl(20, 20%, 38%)" }}
                      >
                        {selectedRecipe.history}
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "recipe" && (
                  <div className="animate-fade-in">
                    <div className="flex gap-4 mb-5">
                      <div
                        className="flex items-center gap-2 text-sm font-body"
                        style={{ color: "hsl(20, 15%, 48%)" }}
                      >
                        <Icon name="Clock" size={15} /> {selectedRecipe.time}
                      </div>
                      <div
                        className="flex items-center gap-2 text-sm font-body"
                        style={{ color: "hsl(20, 15%, 48%)" }}
                      >
                        <Icon name="Users" size={15} /> {selectedRecipe.servings} порций
                      </div>
                      <div
                        className="flex items-center gap-2 text-sm font-body"
                        style={{ color: "hsl(20, 15%, 48%)" }}
                      >
                        <Icon name="ChefHat" size={15} /> {selectedRecipe.difficulty}
                      </div>
                    </div>
                    <h4
                      className="font-body text-xs uppercase tracking-widest font-semibold mb-3"
                      style={{ color: "hsl(15, 50%, 40%)" }}
                    >
                      Ингредиенты
                    </h4>
                    <ul className="space-y-2">
                      {selectedRecipe.ingredients.map((ing, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 font-body text-sm"
                          style={{ color: "hsl(20, 20%, 35%)" }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: "hsl(15, 60%, 42%)" }}
                          />
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "nutrition" && (
                  <div className="animate-fade-in">
                    <div
                      className="flex items-center gap-4 mb-6 p-4 rounded-2xl"
                      style={{ background: "hsl(15, 60%, 42%)", color: "hsl(35, 30%, 96%)" }}
                    >
                      <div className="text-center flex-1">
                        <div className="font-display text-3xl font-bold">{selectedRecipe.calories}</div>
                        <div className="font-body text-xs opacity-80 uppercase tracking-wide">ккал / порция</div>
                      </div>
                      <div className="w-px h-12 opacity-30" style={{ background: "hsl(35, 30%, 96%)" }} />
                      <div className="flex-1 text-center">
                        <Icon name="Flame" size={20} className="mx-auto mb-1 opacity-70" />
                        <div className="font-body text-xs opacity-80">Энергетическая ценность</div>
                      </div>
                    </div>
                    <NutritionBar label="Белки" value={selectedRecipe.nutrition.protein} max={40} color="hsl(200, 60%, 50%)" />
                    <NutritionBar label="Жиры" value={selectedRecipe.nutrition.fat} max={40} color="hsl(35, 80%, 55%)" />
                    <NutritionBar label="Углеводы" value={selectedRecipe.nutrition.carbs} max={80} color="hsl(15, 60%, 50%)" />
                    <NutritionBar label="Клетчатка" value={selectedRecipe.nutrition.fiber} max={15} color="hsl(140, 45%, 50%)" />
                    <p className="font-body text-xs mt-4" style={{ color: "hsl(20, 15%, 60%)" }}>
                      * Пищевая ценность указана на одну порцию при среднем способе приготовления
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className="text-center py-10 px-6 mt-8 border-t"
        style={{ borderColor: "hsl(35, 20%, 84%)" }}
      >
        <p className="font-display text-2xl mb-2" style={{ color: "hsl(20, 25%, 28%)" }}>
          Кухня с душой
        </p>
        <p className="font-body text-sm" style={{ color: "hsl(20, 15%, 55%)" }}>
          Готовьте с любовью — и ваши блюда будут незабываемы
        </p>
        <p className="font-body text-sm mt-3" style={{ color: "hsl(20, 15%, 50%)" }}>
          Связаться:{" "}
          <a href="tel:89027642600" className="font-medium hover:underline" style={{ color: "hsl(15, 60%, 42%)" }}>
            8 (902) 764-26-00
          </a>
        </p>
      </footer>
    </div>
  );
}