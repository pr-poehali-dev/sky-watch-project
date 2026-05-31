import { useReveal } from "@/hooks/use-reveal"
import { useState, type FormEvent } from "react"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)
  const [citizenName, setCitizenName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [registeredName, setRegisteredName] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!citizenName.trim()) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setRegisteredName(citizenName.trim())
    setIsSubmitting(false)
    setCitizenName("")
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Гражданство
                <br />
                КРР
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Реестр граждан республики</p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <p className="max-w-sm text-sm leading-relaxed text-foreground/80 md:text-base">
                  Получить гражданство КРР может любой желающий. Никаких экзаменов, никаких очередей — только ваше имя в реестре республики.
                </p>
              </div>

              <div
                className={`space-y-3 transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                {[
                  { icon: "CheckCircle", text: "Бесплатно и навсегда" },
                  { icon: "Globe", text: "Признаётся всеми гражданами КРР" },
                  { icon: "Star", text: "Вы станете частью истории" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Icon name={item.icon} size={14} className="text-foreground/60" />
                    <span className="font-mono text-xs text-foreground/70 md:text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {registeredName ? (
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
              >
                <div className="rounded-xl border border-foreground/20 bg-foreground/10 p-6 backdrop-blur-md md:p-8">
                  <div className="mb-4 flex items-center gap-3">
                    <Icon name="BadgeCheck" size={24} className="text-foreground" />
                    <span className="font-mono text-xs text-foreground/60 md:text-sm">Документ гражданина</span>
                  </div>
                  <p className="mb-2 font-mono text-xs text-foreground/60">Настоящим удостоверяется, что</p>
                  <p className="mb-2 font-sans text-3xl font-light text-foreground md:text-4xl">{registeredName}</p>
                  <p className="mb-6 font-mono text-xs text-foreground/60">
                    является полноправным гражданином<br />Квартирной Российской Республики
                  </p>
                  <div className="border-t border-foreground/20 pt-4">
                    <p className="font-mono text-xs text-foreground/40">КРР · {new Date().getFullYear()}</p>
                  </div>
                </div>
                <button
                  onClick={() => setRegisteredName("")}
                  className="mt-4 font-mono text-xs text-foreground/50 underline hover:text-foreground/80"
                >
                  Зарегистрировать ещё одного гражданина
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <label className="mb-2 block font-mono text-xs text-foreground/60 md:mb-3">
                    Ваше имя для реестра граждан
                  </label>
                  <input
                    type="text"
                    value={citizenName}
                    onChange={(e) => setCitizenName(e.target.value)}
                    required
                    className="w-full border-b border-foreground/30 bg-transparent py-2 text-lg text-foreground placeholder:text-foreground/30 focus:border-foreground/60 focus:outline-none md:text-2xl"
                    placeholder="Введите своё имя..."
                  />
                </div>

                <div
                  className={`transition-all duration-700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    className="w-full disabled:opacity-50"
                  >
                    {isSubmitting ? "Оформляем гражданство..." : "Вступить в КРР"}
                  </MagneticButton>
                  <p className="mt-3 text-center font-mono text-xs text-foreground/40">
                    Нажимая кнопку, вы принимаете Конституцию КРР
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
