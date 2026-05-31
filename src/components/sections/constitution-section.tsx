import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const CONSTITUTION = [
  {
    chapter: "Глава I",
    title: "Основы государства",
    articles: [
      {
        number: "Статья 1",
        text: "Квартирная Российская Республика (КРР) — суверенное виртуальное государство, основанное на принципах свободы, равенства и братства всех граждан.",
      },
      {
        number: "Статья 2",
        text: "Высшей ценностью КРР является человек, его права и свободы. Признание, соблюдение и защита прав граждан — обязанность республики.",
      },
      {
        number: "Статья 3",
        text: "Носителем суверенитета и единственным источником власти в КРР является её народ. Народ осуществляет свою власть непосредственно, а также через органы государственной власти.",
      },
      {
        number: "Статья 4",
        text: "Столицей Квартирной Российской Республики является Квартира Основателя. Флаг с фиолетовым фоном, девятью трубами и солнцем является официальным символом государства.",
      },
    ],
  },
  {
    chapter: "Глава II",
    title: "Права и свободы граждан",
    articles: [
      {
        number: "Статья 5",
        text: "Каждый гражданин КРР имеет право на жизнь, свободу и личную неприкосновенность. Никто не может быть подвергнут произвольному задержанию или наказанию.",
      },
      {
        number: "Статья 6",
        text: "Все граждане КРР равны перед законом и имеют право на равную защиту закона без какой-либо дискриминации по признаку пола, расы, национальности, языка, религии или убеждений.",
      },
      {
        number: "Статья 7",
        text: "Каждый гражданин имеет право на свободу мысли, совести и слова. Цензура в КРР запрещена. Каждый вправе свободно искать, получать и распространять информацию.",
      },
      {
        number: "Статья 8",
        text: "Каждый гражданин КРР имеет право на неприкосновенность частной жизни, личную и семейную тайну. Тайна переписки и коммуникаций охраняется законом.",
      },
      {
        number: "Статья 9",
        text: "Гражданам КРР гарантируется свобода совести, свобода вероисповедания, включая право исповедовать индивидуально или совместно с другими любую религию или не исповедовать никакой.",
      },
      {
        number: "Статья 10",
        text: "Каждый гражданин вправе свободно участвовать в управлении делами республики, а также получать доступ к государственным службам на общих основаниях.",
      },
      {
        number: "Статья 11",
        text: "Каждый гражданин КРР имеет право на труд, отдых и достойный уровень жизни. Принудительный труд в КРР запрещён.",
      },
      {
        number: "Статья 12",
        text: "Каждый гражданин имеет право на образование. КРР поощряет развитие знаний, науки и культуры среди своих граждан.",
      },
    ],
  },
  {
    chapter: "Глава III",
    title: "Обязанности граждан",
    articles: [
      {
        number: "Статья 13",
        text: "Каждый гражданин КРР обязан соблюдать Конституцию и законы республики, уважать права и свободы других граждан.",
      },
      {
        number: "Статья 14",
        text: "Граждане КРР обязаны сохранять историческое и культурное наследие республики, беречь символы государства: флаг, герб и гимн.",
      },
      {
        number: "Статья 15",
        text: "Каждый гражданин обязан с уважением относиться к другим гражданам КРР вне зависимости от их происхождения, убеждений и образа жизни.",
      },
      {
        number: "Статья 16",
        text: "Гражданин КРР, покидая пределы республики, остаётся под защитой её законов и сохраняет все свои права и обязанности.",
      },
    ],
  },
  {
    chapter: "Глава IV",
    title: "Гражданство",
    articles: [
      {
        number: "Статья 17",
        text: "Гражданство КРР приобретается путём внесения имени в официальный реестр граждан. Процедура получения гражданства бесплатна и доступна каждому.",
      },
      {
        number: "Статья 18",
        text: "Гражданин КРР не может быть лишён гражданства. Гражданство сохраняется пожизненно и передаётся в истории республики навечно.",
      },
      {
        number: "Статья 19",
        text: "КРР признаёт двойное гражданство. Наличие гражданства другого государства не является основанием для ограничения прав гражданина республики.",
      },
    ],
  },
  {
    chapter: "Глава V",
    title: "Заключительные положения",
    articles: [
      {
        number: "Статья 20",
        text: "Конституция КРР имеет высшую юридическую силу. Никакие законы и акты, принятые в республике, не могут противоречить положениям настоящей Конституции.",
      },
      {
        number: "Статья 21",
        text: "Настоящая Конституция вступает в силу с момента её официального опубликования и действует бессрочно на всей территории Квартирной Российской Республики.",
      },
    ],
  },
]

export function ConstitutionSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [openChapter, setOpenChapter] = useState<number | null>(0)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Конституция
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Основной закон Квартирной Российской Республики</p>
        </div>

        <div className="flex h-[calc(100vh-280px)] gap-6 overflow-hidden md:gap-10">
          {/* Chapters list */}
          <div
            className={`flex w-48 shrink-0 flex-col gap-1 transition-all duration-700 md:w-64 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            {CONSTITUTION.map((chapter, i) => (
              <button
                key={i}
                onClick={() => setOpenChapter(i)}
                className={`group flex flex-col gap-0.5 border-l py-3 pl-4 text-left transition-all duration-300 md:pl-6 ${
                  openChapter === i
                    ? "border-foreground/70 bg-foreground/5"
                    : "border-foreground/15 hover:border-foreground/40"
                }`}
              >
                <span className="font-mono text-xs text-foreground/50">{chapter.chapter}</span>
                <span
                  className={`font-sans text-sm font-light leading-tight transition-colors md:text-base ${
                    openChapter === i ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"
                  }`}
                >
                  {chapter.title}
                </span>
              </button>
            ))}
          </div>

          {/* Articles */}
          <div
            className={`flex-1 overflow-y-auto pr-2 transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "300ms", scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.15) transparent" }}
          >
            {openChapter !== null && (
              <div className="space-y-6 pb-8">
                <div className="mb-6 border-b border-foreground/10 pb-4">
                  <p className="font-mono text-xs text-foreground/40">{CONSTITUTION[openChapter].chapter}</p>
                  <h3 className="font-sans text-2xl font-light text-foreground md:text-3xl">
                    {CONSTITUTION[openChapter].title}
                  </h3>
                </div>
                {CONSTITUTION[openChapter].articles.map((article, j) => (
                  <div key={j} className="group flex gap-4 md:gap-6">
                    <div className="flex shrink-0 items-start pt-1">
                      <Icon name="Scale" size={14} className="text-foreground/30 group-hover:text-foreground/60 transition-colors" />
                    </div>
                    <div>
                      <p className="mb-1.5 font-mono text-xs font-medium text-foreground/50">{article.number}</p>
                      <p className="text-sm leading-relaxed text-foreground/85 md:text-base">{article.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
