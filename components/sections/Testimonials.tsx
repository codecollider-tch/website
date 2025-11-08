'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: 'Working with Zeal Consulting was a game-changer for our healthcare practice. Their tailored strategies improved our operational efficiency and patient satisfaction.',
    name: 'Alex Johnson',
    position: 'CEO / Innovate Tech',
    image: '/images/photos/testimonial-alex.avif',
  },
  {
    id: 2,
    quote: 'Working with Zeal Consulting was a game-changer for our healthcare practice. Their tailored strategies improved our operational efficiency and patient satisfaction.',
    name: 'Maria Lopez',
    position: 'Founder / HealthFirst Clinics',
    image: '/images/photos/testimonial-maria.avif',
  },
  {
    id: 3,
    quote: 'Zeal Consulting provided us with cutting-edge solutions that optimized our investment strategies. Their professional approach and detailed analysis were invaluable.',
    name: 'David Kim',
    position: 'CFO / EcoEnergy Solutions',
    image: '/images/photos/testimonial-david.avif',
  },
  {
    id: 4,
    quote: 'Zeal Consulting\'s expertise in the retail sector helped us enhance our customer experience and streamline operations. Their recommendations have had a lasting impact on our business.',
    name: 'Emily Chen',
    position: 'Director / Retail Innovations',
    image: '/images/photos/testimonial-emily.avif',
  },
  {
    id: 5,
    quote: 'The team at Zeal Consulting offered exceptional guidance for our real estate projects. Their strategic insights and industry knowledge were crucial to our success.',
    name: 'Ryan Patel',
    position: 'Managing Director / Urban Real Estate',
    image: '/images/photos/testimonial-ryan.avif',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="testimonial_comp background-color-grey">
      <div className="padding-section-medium">
        <div className="padding-global">
          <div className="container-large is-larger">
            <div className="testimonial-slider w-slider">
              <div className="testimonial_slider_mask w-slider-mask">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    className="testimonial_slide w-slide"
                  >
                    <div className="testimonial_slide-inner">
                      <div className="testimonial_thumbnail_wr">
                        <img
                          loading="lazy"
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="image_fit"
                        />
                      </div>
                      <div className="testimonial_content_wr">
                        <h2>Voices of Our Satisfied Clients</h2>
                        <p className="paragraph text-lighter">
                          {testimonials[currentIndex].quote}
                        </p>
                        <div className="testimonial_author-content">
                          <div className="heading-style-h5">
                            {testimonials[currentIndex].name}
                          </div>
                          <div className="paragraph-small text-lighter">
                            {testimonials[currentIndex].position}
                          </div>
                        </div>
                      </div>
                      <img
                        src="/images/icons/quotes.svg"
                        loading="lazy"
                        alt="Quote"
                        className="quote_icon"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Dots */}
              <div className="testimonial_slider-pagination w-slider-nav w-slider-nav-invert w-round">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-slider-dot ${index === currentIndex ? 'w-active' : ''}`}
                    style={{ marginLeft: '10px', marginRight: '10px', cursor: 'pointer' }}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <div
                className="hide w-slider-arrow-left"
                onClick={prevTestimonial}
                style={{ cursor: 'pointer' }}
              >
                <div className="w-icon-slider-left"></div>
              </div>
              <div
                className="hide w-slider-arrow-right"
                onClick={nextTestimonial}
                style={{ cursor: 'pointer' }}
              >
                <div className="w-icon-slider-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
