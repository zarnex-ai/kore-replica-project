import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    company: "Morgan Stanley",
    quote: "What I was really trying to solve was how to give 15–20 minutes back each day to our financial advisors. That extra time lets them reach out to customers more quickly, more effectively, or even make one additional phone call — and that's a real revenue driver for us.",
    author: "Shailesh Gavankar",
    title: "Head, AI Strategy + Execution",
  },
  {
    company: "Pfizer",
    quote: "Since we started with Zarnex, we've deployed 60 AI agents across the enterprise—covering research, development, medical, commercial, and manufacturing across global markets and multiple languages.",
    author: "Vik Kapoor",
    title: "Head of GenAI Platforms & Products",
  },
  {
    company: "Microsoft",
    quote: "Our strategic partnership with Zarnex marks a significant milestone in our mission to accelerate enterprise AI transformation.",
    author: "Puneet Chandok",
    title: "President, India and South Asia",
  },
  {
    company: "AMD",
    quote: "In the moments that matter most, of course, employees want to connect with people. GenAI frees HR professionals to engage with the employees they serve and be present in the interactions that deliver higher satisfaction.",
    author: "Mark Jackson",
    title: "Director, Global HR Technology",
  },
  {
    company: "Deutsche Bank",
    quote: "I have the honour of representing Deutsche Bank HR, sharing our AI journey—from a humble FAQ chatbot in one region back in 2020 to a multi-jurisdiction automation strategy by 2025.",
    author: "Paul Hewitt",
    title: "Head of AI Innovation & Digital Employee Experience, HR",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-kore bg-background">
      <div className="container-kore">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section mb-4"
          >
            Customer testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-body"
          >
            Discover how organizations deliver AI value with Zarnex.
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-muted/50 rounded-3xl p-8 lg:p-12"
          >
            <div className="flex items-center gap-2 mb-6">
              <Quote className="w-8 h-8 text-muted-foreground" />
              <span className="text-lg font-semibold">{testimonials[currentIndex].company}</span>
            </div>
            <blockquote className="text-lg lg:text-xl text-foreground mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div>
              <p className="font-semibold">{testimonials[currentIndex].author}</p>
              <p className="text-small">{testimonials[currentIndex].title}</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-foreground" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* More Stories CTA */}
        <div className="text-center mt-12">
          <a href="#" className="btn-kore-outline">
            More Customer Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
