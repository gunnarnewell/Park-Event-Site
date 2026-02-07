import { useEvents } from "@/hooks/use-events";
import { EventCard } from "@/components/EventCard";
import { motion } from "framer-motion";
import { ArrowDown, Leaf, Music, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { data: events, isLoading, error } = useEvents();

  const scrollToDonate = () => {
    document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-secondary/30 px-4 pt-10 pb-20">
        <div className="container-tight text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 text-primary text-sm font-medium tracking-wide bg-white/50 backdrop-blur-sm">
              Saturday, May 18 • 11:00 AM – 4:00 PM
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-foreground mb-6 leading-[0.95]">
              Greenwood <br />
              <span className="text-primary italic font-serif">Park Day</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 text-balance leading-relaxed">
              A low-key afternoon of community, music, and nature at the Main Lawn. Everyone is welcome to join the celebration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToDonate}
                size="lg" 
                className="rounded-full px-8 text-base bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-1"
              >
                Donate
                <Heart className="ml-2 w-4 h-4 fill-current" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Decorative subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-40">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-200/30 rounded-full blur-[100px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] bg-yellow-100/40 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* --- HIGHLIGHTS SECTION --- */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Today's Highlights</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have a packed schedule of events designed to bring neighbors together.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-secondary/50 rounded-xl animate-pulse" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12 bg-red-50 rounded-xl border border-red-100">
              <p className="text-red-600">Failed to load schedule. Please try refreshing.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events?.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </div>
          )}

          {(!events || events.length === 0) && !isLoading && !error && (
            <div className="text-center py-20 bg-secondary/20 rounded-xl border border-dashed border-border">
              <p className="text-muted-foreground">Schedule coming soon...</p>
            </div>
          )}
        </div>
      </section>

      {/* --- FEATURE ICONS (Visual Break) --- */}
      <section className="py-12 border-y border-border/50 bg-secondary/10">
        <div className="container-tight">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-display font-semibold">Nature</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                <Music className="w-6 h-6" />
              </div>
              <span className="font-display font-semibold">Music</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                <Heart className="w-6 h-6" />
              </div>
              <span className="font-display font-semibold">Community</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- DONATION SECTION --- */}
      <section id="donate" className="py-24 px-4 bg-white">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Support the Park</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
              Your donations help fund daily maintenance, new plantings, and future community gatherings like this one.
            </p>

            <div className="bg-secondary/30 p-8 rounded-2xl max-w-sm mx-auto border border-border/50 shadow-sm">
              <div className="aspect-square bg-white rounded-xl mb-6 flex items-center justify-center border-2 border-dashed border-border overflow-hidden relative group">
                {/* QR Code Placeholder - In a real app, this would be an image tag */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground p-4">
                   <div className="w-32 h-32 bg-foreground/5 rounded mb-2" /> 
                   <span className="text-xs">QR Code</span>
                </div>
                {/* Fallback image logic would go here: <img src="/donate-qr.png" alt="Donate QR" className="absolute inset-0 w-full h-full object-cover" /> */}
              </div>
              
              <p className="font-display font-bold text-xl mb-2">Scan to Donate</p>
              <p className="text-sm text-muted-foreground mb-6">Venmo, Cash App, or PayPal</p>
              
              <Button variant="outline" className="w-full rounded-full border-primary/20 text-primary hover:bg-primary/5 hover:text-primary-dark">
                Donate via Link
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-foreground text-background mt-auto">
        <div className="container-tight text-center">
          <h4 className="font-display text-2xl font-bold mb-4">Greenwood Park</h4>
          <p className="text-background/60 mb-8 max-w-md mx-auto text-sm">
            Please help us keep the park clean by packing out what you pack in.
            <br />
            Let's keep our green space beautiful.
          </p>
          
          <div className="flex justify-center gap-6 text-sm text-background/40">
            <span>© 2024 Park Committee</span>
            <a href="#" className="hover:text-background/80 transition-colors">Contact</a>
            <a href="#" className="hover:text-background/80 transition-colors">Volunteer</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
