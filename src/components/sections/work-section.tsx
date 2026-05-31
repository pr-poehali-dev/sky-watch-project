import { useReveal } from "@/hooks/use-reveal"

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-12 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Флаг КРР
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Государственный символ</p>
        </div>

        <div
          className={`flex flex-col gap-8 transition-all duration-700 md:flex-row md:items-center md:gap-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="flex-shrink-0">
            <div className="relative overflow-hidden rounded-xl border border-foreground/20 shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/b8dfbb88-49af-4758-ba1a-24b6d381d811/files/2972c505-5e6f-4186-b15e-22956bf98746.jpg"
                alt="Флаг Квартирной Российской Республики"
                className="h-48 w-72 object-cover md:h-64 md:w-96"
              />
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                symbol: "Фиолетовый фон",
                meaning: "Символизирует независимость, свободу мысли и суверенитет виртуального государства",
              },
              {
                symbol: "9 зелёных труб",
                meaning: "Девять труб — основа инфраструктуры республики, символ стабильности и связи между гражданами",
              },
              {
                symbol: "Солнце в центре",
                meaning: "Жёлтое солнце олицетворяет свет знаний, тепло общества и вечное процветание КРР",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`border-l border-foreground/30 pl-4 transition-all duration-700 md:pl-6 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              >
                <div className="mb-1 font-sans text-base font-medium text-foreground md:text-lg">{item.symbol}</div>
                <div className="font-mono text-xs leading-relaxed text-foreground/60 md:text-sm">{item.meaning}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
