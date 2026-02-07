import { motion } from "framer-motion";
import { type Event } from "@shared/schema";
import { MapPin, Clock } from "lucide-react";

interface EventCardProps {
  event: Event;
  index: number;
}

export function EventCard({ event, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-start justify-between mb-4">
            <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 w-fit">
              <Clock className="w-3 h-3" />
              {event.time}
            </div>
            {event.location && (
              <span className="text-muted-foreground text-xs flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {event.location}
              </span>
            )}
          </div>
          
          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
