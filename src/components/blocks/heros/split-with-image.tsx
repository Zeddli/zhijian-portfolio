export default function SplitWithImage() {
    return (
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
            <div className="mx-auto max-w-lg lg:mx-0">
              {/* Remove company logo for developer portfolio */}
              
              <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-muted-foreground ring-1 ring-border hover:ring-primary/20">
                  Available for new opportunities and exciting projects.{' '}
                  <a href="#" className="font-semibold whitespace-nowrap text-accent">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Let&apos;s connect <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="mt-24 text-5xl font-semibold tracking-tight text-pretty text-primary sm:mt-10 sm:text-7xl font-[var(--font-inter)]">
                Full-Stack Developer & Problem Solver
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8 font-[var(--font-inter)]">
                I build scalable web applications and elegant user experiences using modern technologies. Passionate about clean code, innovative solutions, and continuous learning.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-accent-foreground shadow-xs hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent font-[var(--font-inter)]"
                >
                  View My Work
                </a>
                <a href="#" className="text-sm/6 font-semibold text-primary font-[var(--font-inter)]">
                  Download Resume <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              alt="Developer workspace"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              className="aspect-3/2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
      </div>
    )
  }