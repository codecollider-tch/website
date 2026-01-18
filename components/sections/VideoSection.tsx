"use client";

import Image from "next/image";

import { motion } from "framer-motion";

interface VideoSectionProps {
  badge?: string | null;
  title?: string | null;
  description?: string | null;
  videoUrl?: string | null;
  videoPoster?: string | null;
}

export default function VideoSection({
  badge = "Collaborative Approach",
  title = "Harnessing Team Synergy for Outstanding Outcomes",
  description = "At Zeal Consult, teamwork is at the heart of everything we do. By combining our diverse skills and perspectives, we foster a collaborative environment where innovative solutions thrive. Our team works seamlessly together to ensure every project benefits from a holistic approach, leading to superior outcomes and client satisfaction. Discover how our united efforts drive success and make your vision a reality.",
  videoUrl,
  videoPoster,
}: VideoSectionProps) {
  return (
    <section className="video_comp padding-section-medium">
      <div className="padding-global">
        <div className="container-large">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="title-center"
          >
            <div className="title-small is-neon">{badge}</div>
            <div className="padding-bottom padding-xsmall"></div>
            <h2 className="text-color-white">{title}</h2>
          </motion.div>

          <div className="padding-bottom padding-custom1"></div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="video_wrapper"
          >
            <div className="video_block w-background-video w-background-video-atom">
              {videoUrl ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    backgroundImage: videoPoster
                      ? `url(${videoPoster})`
                      : "url(/images/photos/team-discussion.avif)",
                  }}
                  className="w-full h-full object-cover"
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={videoPoster || "/images/photos/team-discussion.avif"}
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-light text-color-white">{description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
