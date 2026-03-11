import { motion } from "framer-motion";
import {
  ArrowDown,
  Calendar,
  ExternalLink,
  FileText,
  Heart,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const flyerUrl = new URL("../../../Yakima.pdf", import.meta.url).href;
const parkAddress = "2101 Tieton Dr, Yakima, WA 98902";
const eventDate = "Saturday, April 25";

const officialLinks = [
  {
    label: "Leadership Yakima",
    href: "https://www.yakima.org/programs/leadership-yakima/",
  },
  {
    label: "Yakima Parks and Recreation",
    href: "https://yakimaparks.com/",
  },
  {
    label: "Franklin Park",
    href: "https://yakimaparks.com/parks/franklin/",
  },
];

const events = [
  {
    id: 1,
    title: "Yoga",
    time: "10:00 AM - 11:00 AM",
    description: "Start the day with a community yoga session in the park.",
  },
  {
    id: 2,
    title: "Story Time",
    time: "11:00 AM - 11:30 AM",
    description: "Gather for a family-friendly story time session.",
  },
  {
    id: 3,
    title: "Airplanes",
    time: "11:30 AM - 1:00 PM",
    description: "Drop in to enjoy the airplane activity block.",
  },
  {
    id: 4,
    title: "Pickle Ball",
    time: "1:00 PM - 3:00 PM",
    description: "Free play in the afternoon. Join anytime.",
  },
  {
    id: 5,
    title: "Treasure Hunt",
    time: "10:00 AM - 3:00 PM",
    description: "Pick up a treasure hunt sheet and play throughout the day.",
  },
  {
    id: 6,
    title: "Music",
    time: "10:00 AM - 3:00 PM",
    description: "Live music throughout the event.",
  },
];

function EventCard({
  event,
  index,
}: {
  event: (typeof events)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
    >
      <Card className="h-full border-white/40 bg-white/88 shadow-lg shadow-black/5 backdrop-blur">
        <CardContent className="flex h-full flex-col p-6">
          <span className="mb-4 inline-flex w-fit rounded-full bg-[#f4ead9] px-3 py-1 text-sm font-bold text-[#6b5b3e]">
            {event.time}
          </span>
          <h3 className="mb-2 text-xl font-bold font-display text-[#203124]">
            {event.title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-[#4c5a4f]">
            {event.description}
          </p>
          <div className="mt-auto flex items-center text-xs text-[#5e6e61]">
            <MapPin className="mr-1 h-3 w-3" />
            Franklin Park, Yakima
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f2e8] text-[#203124]">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="text-left"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/75">
              Leadership Yakima
            </p>
            <p className="text-lg font-bold text-white sm:text-xl">Yakima Parks Day</p>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
              {eventDate}
            </p>
          </button>

          <nav className="hidden items-center gap-6 text-sm font-medium text-white/85 md:flex">
            <button type="button" onClick={() => scrollToSection("about")} className="transition hover:text-white">
              About
            </button>
            <button type="button" onClick={() => scrollToSection("schedule")} className="transition hover:text-white">
              Schedule
            </button>
            <button type="button" onClick={() => scrollToSection("donate")} className="transition hover:text-white">
              Donate
            </button>
            <a href={flyerUrl} target="_blank" rel="noreferrer" className="transition hover:text-white">
              Flyer
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className="relative flex min-h-screen items-end overflow-hidden bg-[#29402f] px-4 pb-10 pt-28 sm:px-6 lg:px-8"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/franklin-park-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,25,18,0.35),rgba(15,25,18,0.82))]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(247,242,232,0.92))]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="mb-6 inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-sm">
              {eventDate} | 10:00 AM to 3:00 PM
            </span>
            <h1 className="mb-6 text-5xl font-bold leading-[0.92] text-white sm:text-7xl md:text-8xl">
              Yakima <br />
              <span className="font-serif italic text-[#f4ead9]">Parks Day</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white md:text-xl">
              A free community event at Franklin Park focused on raising awareness
              of Yakima parks and what is being cut with the current budget.
            </p>

            <div className="mb-8 grid max-w-2xl gap-4 rounded-[2rem] border border-white/15 bg-[#fff9f0]/90 p-6 text-[#203124] shadow-2xl shadow-black/20 backdrop-blur sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="mb-1 text-2xl font-bold text-[#2d5b40] md:text-3xl">
                  FREE EVENT
                </p>
                <p className="text-sm leading-relaxed text-[#4c5a4f] md:text-base">
                  Donations support the park, but everyone is invited whether they
                  donate or not. Join us on {eventDate}.
                </p>
              </div>
              <div className="rounded-2xl bg-[#edf3ea] px-4 py-3 text-sm font-semibold text-[#2d5b40]">
                Open to all
              </div>
            </div>

            <div className="mb-10 space-y-2 text-white/90">
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-white/70">
                <MapPin className="h-4 w-4" />
                Franklin Park
              </div>
              <p className="text-base md:text-lg">{parkAddress}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                type="button"
                size="lg"
                onClick={() => scrollToSection("schedule")}
                className="rounded-full bg-[#f4ead9] px-8 text-base font-semibold text-[#203124] shadow-lg shadow-black/20 hover:bg-[#efe1c8]"
              >
                See Schedule
                <Calendar className="ml-2 h-4 w-4" />
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/35 bg-white/10 px-8 text-base text-white backdrop-blur hover:bg-white/18 hover:text-white"
              >
                <a href={flyerUrl} target="_blank" rel="noreferrer">
                  See Flyer
                  <FileText className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                type="button"
                size="lg"
                onClick={() => scrollToSection("donate")}
                className="rounded-full bg-[#2d5b40] px-8 text-base text-white shadow-lg shadow-black/20 hover:bg-[#244c35]"
              >
                Donate
                <Heart className="ml-2 h-4 w-4 fill-current" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="justify-self-end rounded-[2rem] border border-white/15 bg-white/12 p-6 text-white shadow-2xl shadow-black/25 backdrop-blur-md lg:max-w-md"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
              What to Expect
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-xl font-bold">Family-friendly activities all day</p>
                <p className="text-sm leading-relaxed text-white/78">
                  Yoga, story time, airplanes, pickle ball, treasure hunt, and music.
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">A clearer message about the parks</p>
                <p className="text-sm leading-relaxed text-white/78">
                  The event helps people understand the value of Yakima parks and
                  what current budget cuts mean for the community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
        >
          <span>Scroll for details</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </button>
      </section>

      <section id="about" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div
          className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-18 lg:block"
          style={{ backgroundImage: "url('/franklin-park-pavilion.jpg')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,223,187,0.5),transparent_45%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#7d6740]">
              Why This Event Exists
            </p>
            <p className="mb-4 inline-flex rounded-full bg-[#f4ead9] px-4 py-2 text-sm font-bold text-[#6b5b3e]">
              Happening {eventDate}
            </p>
            <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
              More than a park event
            </h2>
            <p className="mb-6 max-w-xl text-lg leading-relaxed text-[#465448]">
              Yakima Parks Day is meant to raise awareness of the parks, the role
              they play in daily life, and what is being cut with the current
              budget. The event gives people a reason to show up, spend time in the
              park, and connect that experience to why these spaces matter.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Card className="border-[#d7ccb6] bg-[#fffaf2] shadow-lg shadow-black/5">
              <CardContent className="p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#7d6740]">
                  Event Focus
                </p>
                <p className="text-lg font-bold text-[#203124]">
                  Free attendance, clear community purpose
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#5a665d]">
                  The site now leads with event details first and keeps donations as
                  supporting information.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#c9d7cb] bg-[#edf3ea] shadow-lg shadow-black/5">
              <CardContent className="p-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#48644e]">
                  Official Links
                </p>
                <div className="space-y-3">
                  {officialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-medium text-[#203124] transition hover:bg-[#f7f2e8]"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="h-4 w-4 text-[#48644e]" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="schedule" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[#dde6d9]" />
        <div
          className="absolute inset-y-0 left-0 w-full bg-cover bg-center opacity-[0.10]"
          style={{ backgroundImage: "url('/franklin-park-hero.jpg')" }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#48644e]">
                Event Schedule
              </p>
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Saturday at Franklin Park
              </h2>
              <p className="text-base leading-relaxed text-[#4c5a4f]">
                {eventDate} from 10:00 AM to 3:00 PM at {parkAddress}. All activities
                are part of the free public event.
              </p>
            </div>

            <Card className="max-w-md border-white/50 bg-white/80 shadow-lg shadow-black/5 backdrop-blur">
              <CardContent className="p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7d6740]">
                  Quick Note
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#5a665d]">
                  Donations support the park, but the event itself is free and open
                  to all visitors on {eventDate}.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fffaf2,#f1e7d6)]" />
        <div
          className="absolute inset-y-0 right-0 hidden w-[38%] bg-cover bg-center opacity-15 lg:block"
          style={{ backgroundImage: "url('/franklin-park-pavilion.jpg')" }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#7d6740]">
              Support the Park
            </p>
            <h2 className="mb-5 text-4xl font-bold tracking-tight md:text-5xl">
              Optional donations, not admission
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-[#4c5a4f]">
              The event is free on {eventDate}. If you want to contribute,
              donations help support the park and future community events like this
              one.
            </p>
          </div>

          <Card className="mx-auto w-full max-w-sm border-[#d7ccb6] bg-white/92 shadow-xl shadow-black/10">
            <CardContent className="p-8 text-center">
              <div className="relative mb-6 flex aspect-square items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-[#d7ccb6] bg-white">
                <img
                  src="/donate-qr.png"
                  alt="Scan this QR code to donate"
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="mb-2 text-xl font-bold font-display text-[#203124]">
                Scan to Donate
              </p>
              <p className="mb-6 text-sm leading-relaxed text-[#5a665d]">
                Every contribution helps care for Franklin Park and supports future
                community events.
              </p>

              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-[#2d5b40]/20 text-[#2d5b40] hover:bg-[#edf3ea] hover:text-[#2d5b40]"
              >
                <a href="https://bit.ly/4qtaG9O" target="_blank" rel="noreferrer">
                  Donate via Link
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-[#203124] px-4 py-12 text-[#f7f2e8] sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/55">
              Yakima Parks Day | {eventDate}
            </p>
            <h3 className="mb-3 text-2xl font-bold text-white">At Franklin Park</h3>
            <p className="max-w-md text-sm leading-relaxed text-white/85">
              Please help keep the park clean, welcome new visitors, and continue
              supporting public spaces that matter to Yakima.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {officialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/82 transition hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
