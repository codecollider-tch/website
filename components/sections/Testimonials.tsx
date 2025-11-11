'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Testimonial {
  id?: string;
  name?: string | null;
  position?: string | null;
  company?: string | null;
  content?: string | null;
  image?: string | null;
  rating?: number | null;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export default function Testimonials({ testimonials = [] }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (testimonials.length === 0) return;

    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex, nextTestimonial, testimonials.length]);

  if (testimonials.length === 0) return null;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 1,
    }),
  };

  return (
    <section className="testimonial_comp background-color-grey">
      <div className="padding-section-medium">
        <div className="padding-global">
          <div className="container-large is-larger">
            <div className="testimonial-slider w-slider">
              <div className="testimonial_slider_mask w-slider-mask" style={{ position: 'relative', overflow: 'hidden', minHeight: '400px' }}>
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "tween", duration: 0.5, ease: "easeInOut" },
                    }}
                    className="testimonial_slide w-slide"
                    style={{ position: 'absolute', width: '100%', left: 0, top: 0 }}
                  >
                    <div className="testimonial_slide-inner">
                      <div className="testimonial_thumbnail_wr">
                        <Image
                          src={testimonials[currentIndex].image || ''}
                          alt={testimonials[currentIndex].name || ''}
                          className="image_fit"
                          width={500}
                          height={500}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="testimonial_content_wr">
                        <h2>Voices of Our Satisfied Clients</h2>
                        <p className="paragraph text-lighter">
                          {testimonials[currentIndex].content}
                        </p>
                        <div className="testimonial_author-content">
                          <div className="heading-style-h5">
                            {testimonials[currentIndex].name}
                          </div>
                          <div className="paragraph-small text-lighter">
                            {testimonials[currentIndex].position} / {testimonials[currentIndex].company}
                          </div>
                        </div>
                      </div>
                      <Image
                        src="/images/icons/quotes.svg"
                        alt="Quote"
                        className="quote_icon"
                        width={80}
                        height={80}
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
