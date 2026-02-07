import { motion } from "framer-motion";
import { ArrowDown, Leaf, Calendar, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Hardcoded events for a zero-maintenance static experience
const HARDCODED_EVENTS = [
  {
    id: 1,
    title: "Community Cleanup",
    time: "11:00 AM",
    description: "Grab gloves, we’ll provide bags. Help keep the park beautiful.",
    location: "Meet at the north entrance"
  },
  {
    id: 2,
    title: "Picnic & Games",
    time: "12:30 PM",
    description: "Bring a blanket. We’ll have casual lawn games and a snack table.",
    location: "Main Lawn"
  },
  {
    id: 3,
    title: "Sunset Acoustic Set",
    time: "3:00 PM",
    description: "Local musicians, light sound, and a relaxed wind-down.",
    location: "Gazebo"
  }
];

function EventCard({ event, index }: { event: typeof HARDCODED_EVENTS[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-secondary/20">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <span className="text-sm font-bold text-primary px-3 py-1 bg-white rounded-full shadow-sm">
              {event.time}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 font-display">{event.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
            {event.description}
          </p>
          {event.location && (
            <div className="flex items-center text-xs text-muted-foreground/80 mt-auto">
              <MapPin className="w-3 h-3 mr-1" />
              {event.location}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Home() {
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HARDCODED_EVENTS.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURE ICONS --- */}
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
                <Calendar className="w-6 h-6" />
              </div>
              <span className="font-display font-semibold">Events</span>
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
                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground p-4">
                   <div className="w-32 h-32 bg-foreground/5 rounded mb-2" /> 
                   <span className="text-xs">QR Code Placeholder</span>
                   <span className="text-[10px] mt-1">(Upload donate-qr.png to /client/public/)</span>
                </div>
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
