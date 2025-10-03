import { Code2, Calendar, MapPin } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"
import Image from "next/image"

export default function ComingSoon() {
  return (
    <div className="dark min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            <span className="font-mono text-xs sm:text-sm font-semibold">xlprocommunity.in</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="#about"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-20 pb-8">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-mono border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Coming Soon
                </span>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-tight">
                  Codeathon
                  <span className="block text-primary">2.0</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground text-pretty max-w-xl">
                  The ultimate coding competition where innovation meets excellence. Get ready to code, compete, and
                  conquer.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 pt-2 sm:pt-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-sm font-mono text-foreground">Registration: October 4, 2025</span>
                    <span className="text-xs sm:text-sm font-mono text-foreground">Event: October 7, 2025</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-foreground">Srinivas Institute of Technology</span>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <h3 className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 sm:mb-4">
                  Registration Opens In
                </h3>
                <CountdownTimer targetDate="2025-10-04T05:30:00" />
              </div>

              {/* Notify Form */}
              <div className="pt-2 sm:pt-4">
                <form className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </form>
                <p className="text-xs text-muted-foreground mt-2">Be the first to know when registration opens.</p>
              </div>
            </div>

            {/* Right Content - Geometric Design with Logo */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Animated geometric shapes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-primary/30 rounded-3xl rotate-45 animate-spin-slow" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-2 border-accent/40 rounded-2xl -rotate-12 animate-pulse" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary/10 backdrop-blur-sm rounded-xl flex items-center justify-center p-4">
                    <Image
                      src="https://dcroqfvqfbqwneibzjki.supabase.co/storage/v1/object/public/xlpro/WhatsApp%20Image%202025-09-30%20at%2014.01.29_d62e2043.svg"
                      alt="XL Pro Logo"
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <p className="text-center sm:text-left">© 2025 XL Pro Community. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
