import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/b76d4371-5050-496e-8feb-c83dfe8aaaf7/files/87ee6024-bc25-47e0-8257-aea3f46adde4.jpg";
const PREP_IMG = "https://cdn.poehali.dev/projects/b76d4371-5050-496e-8feb-c83dfe8aaaf7/files/7190225c-2a44-487b-9761-d1c12916a6e1.jpg";

const ingredients = [
  { amount: "500 мл", name: "молоко" },
  { amount: "2 шт", name: "яйца" },
  { amount: "200 г", name: "мука пшеничная" },
  { amount: "1 ст.л.", name: "сахар" },
  { amount: "½ ч.л.", name: "соль" },
  { amount: "2 ст.л.", name: "растительное масло" },
  { amount: "30 г", name: "сливочное масло — для смазки" },
];

const steps = [
  {
    num: 1,
    title: "Взбиваем яйца",
    text: "Разбейте яйца в глубокую миску, добавьте сахар и соль. Взбейте венчиком до лёгкой пены — около 1 минуты.",
    tip: "Яйца должны быть комнатной температуры — тесто получится однороднее.",
    icon: "Egg",
  },
  {
    num: 2,
    title: "Добавляем молоко и муку",
    text: "Влейте половину молока, постепенно добавьте муку, помешивая, чтобы не было комков. Затем влейте оставшееся молоко и растительное масло.",
    tip: "Просейте муку заранее — блины будут нежнее.",
    icon: "Milk",
  },
  {
    num: 3,
    title: "Даём тесту отдохнуть",
    text: "Накройте миску полотенцем и оставьте тесто на 15–20 минут. За это время клейковина набухнет, и блины не будут рваться.",
    tip: "Можно убрать тесто в холодильник на ночь — утром блины выйдут идеальными.",
    icon: "Clock",
  },
  {
    num: 4,
    title: "Разогреваем сковороду",
    text: "Хорошо разогрейте сковороду на среднем огне. Смажьте кусочком сливочного масла на вилке или бумажным полотенцем с маслом.",
    tip: "Первый блин всегда «комом» — он нужен, чтобы настроить температуру.",
    icon: "Flame",
  },
  {
    num: 5,
    title: "Выпекаем блины",
    text: "Налейте половник теста и быстро наклоняйте сковороду круговыми движениями, чтобы тесто равномерно распределилось. Жарьте 1–1,5 минуты с каждой стороны до золотистого цвета.",
    tip: "Края начинают подсыхать — пора переворачивать!",
    icon: "ChefHat",
  },
  {
    num: 6,
    title: "Подаём на стол",
    text: "Складывайте готовые блины стопкой, смазывая каждый сливочным маслом. Подавайте горячими со сметаной, мёдом, вареньем или икрой.",
    tip: "Накройте стопку тарелкой — блины дольше останутся горячими.",
    icon: "UtensilsCrossed",
  },
];

export default function Index() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen font-body" style={{ background: "hsl(38, 35%, 95%)" }}>

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Блины"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20,10,0,0.25) 0%, rgba(20,10,0,0.65) 100%)",
          }}
        />
        <div className="relative h-full flex flex-col items-center justify-end pb-14 px-6 text-center">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-4 animate-fade-in-up"
            style={{ background: "rgba(255,255,255,0.18)", color: "hsl(40,80%,92%)", animationDelay: "0.1s", opacity: 0 }}
          >
            🥞 Классический рецепт
          </span>
          <h1
            className="font-display text-6xl md:text-8xl font-bold leading-tight mb-3 animate-fade-in-up"
            style={{ color: "hsl(40, 60%, 94%)", animationDelay: "0.2s", opacity: 0 }}
          >
            Русские блины
          </h1>
          <p
            className="text-base md:text-lg max-w-md leading-relaxed animate-fade-in-up"
            style={{ color: "hsl(35, 30%, 82%)", animationDelay: "0.35s", opacity: 0 }}
          >
            Тонкие, золотистые, с хрустящими краями — таких блинов вы ещё не пробовали
          </p>

          {/* Quick stats */}
          <div
            className="flex gap-6 mt-8 animate-fade-in-up"
            style={{ animationDelay: "0.5s", opacity: 0 }}
          >
            {[
              { icon: "Clock", label: "35 мин" },
              { icon: "Users", label: "4 порции" },
              { icon: "ChefHat", label: "Просто" },
              { icon: "Flame", label: "185 ккал" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <Icon name={s.icon} size={16} style={{ color: "hsl(40,80%,90%)" }} />
                </div>
                <span className="text-xs font-medium" style={{ color: "hsl(35,30%,85%)" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Ingredients */}
        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <div className="flex items-center gap-3 mb-7">
            <div className="w-7 h-px" style={{ background: "hsl(15, 60%, 42%)" }} />
            <h2 className="font-display text-3xl font-semibold" style={{ color: "hsl(20, 25%, 20%)" }}>
              Ингредиенты
            </h2>
          </div>

          <div
            className="rounded-3xl overflow-hidden md:flex gap-0 shadow-sm"
            style={{ background: "hsl(35, 25%, 98%)" }}
          >
            <div className="md:w-56 h-44 md:h-auto flex-shrink-0 overflow-hidden">
              <img src={PREP_IMG} alt="Ингредиенты" className="w-full h-full object-cover" />
            </div>
            <ul className="flex-1 p-6 divide-y" style={{ divideColor: "hsl(35, 20%, 90%)" }}>
              {ingredients.map((ing, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
                >
                  <span className="text-sm" style={{ color: "hsl(20, 20%, 35%)" }}>
                    {ing.name}
                  </span>
                  <span
                    className="text-sm font-semibold px-3 py-0.5 rounded-full"
                    style={{ background: "hsl(38, 40%, 90%)", color: "hsl(15, 55%, 38%)" }}
                  >
                    {ing.amount}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Steps */}
        <section className="animate-fade-in-up" style={{ animationDelay: "0.25s", opacity: 0 }}>
          <div className="flex items-center gap-3 mb-7">
            <div className="w-7 h-px" style={{ background: "hsl(15, 60%, 42%)" }} />
            <h2 className="font-display text-3xl font-semibold" style={{ color: "hsl(20, 25%, 20%)" }}>
              Пошаговый рецепт
            </h2>
          </div>

          <div className="space-y-4">
            {steps.map((step) => {
              const isOpen = activeStep === step.num;
              return (
                <div
                  key={step.num}
                  className="rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                  style={{
                    background: isOpen ? "hsl(15, 60%, 42%)" : "hsl(35, 25%, 98%)",
                  }}
                >
                  <button
                    className="w-full flex items-center gap-4 p-5 text-left transition-colors duration-200"
                    onClick={() => setActiveStep(isOpen ? null : step.num)}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display text-lg font-bold transition-colors duration-300"
                      style={
                        isOpen
                          ? { background: "rgba(255,255,255,0.25)", color: "hsl(40,70%,95%)" }
                          : { background: "hsl(38, 40%, 88%)", color: "hsl(15, 55%, 38%)" }
                      }
                    >
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <span
                        className="font-semibold text-base"
                        style={{ color: isOpen ? "hsl(40,60%,94%)" : "hsl(20, 25%, 18%)" }}
                      >
                        {step.title}
                      </span>
                    </div>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                      style={
                        isOpen
                          ? { background: "rgba(255,255,255,0.2)" }
                          : { background: "hsl(38, 30%, 90%)" }
                      }
                    >
                      <Icon
                        name={isOpen ? "ChevronUp" : "ChevronDown"}
                        size={15}
                        style={{ color: isOpen ? "hsl(40,60%,94%)" : "hsl(20,15%,50%)" }}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 animate-fade-in">
                      <p
                        className="text-sm leading-relaxed mb-3"
                        style={{ color: "hsl(38, 40%, 90%)" }}
                      >
                        {step.text}
                      </p>
                      <div
                        className="flex items-start gap-2 rounded-xl p-3"
                        style={{ background: "rgba(255,255,255,0.15)" }}
                      >
                        <span className="text-base mt-0.5">💡</span>
                        <p className="text-xs leading-relaxed italic" style={{ color: "hsl(40, 50%, 88%)" }}>
                          {step.tip}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Final note */}
        <div
          className="mt-14 rounded-3xl p-8 text-center animate-fade-in-up"
          style={{ background: "hsl(35, 25%, 98%)", animationDelay: "0.4s", opacity: 0 }}
        >
          <span className="text-4xl block mb-3">🧈</span>
          <h3 className="font-display text-2xl font-semibold mb-2" style={{ color: "hsl(20, 25%, 20%)" }}>
            Приятного аппетита!
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "hsl(20, 15%, 50%)" }}>
            Подавайте со сметаной, вареньем, мёдом или икрой.<br />
            Блины лучше всего есть сразу — горячими, с любовью.
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer
        className="text-center py-8 px-6 border-t"
        style={{ borderColor: "hsl(35, 20%, 87%)" }}
      >
        <p className="font-display text-xl mb-1" style={{ color: "hsl(20, 25%, 32%)" }}>
          Кухня с душой
        </p>
        <p className="text-sm" style={{ color: "hsl(20, 15%, 58%)" }}>
          Готовьте с любовью — и ваши блюда будут незабываемы
        </p>
        <p className="text-sm mt-2" style={{ color: "hsl(20, 15%, 55%)" }}>
          Связаться:{" "}
          <a
            href="tel:89027642600"
            className="font-medium hover:underline"
            style={{ color: "hsl(15, 60%, 42%)" }}
          >
            8 (902) 764-26-00
          </a>
        </p>
      </footer>
    </div>
  );
}
