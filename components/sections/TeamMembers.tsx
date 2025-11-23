"use client";

import Image from "next/image";

import { motion } from "framer-motion";

interface TeamMember {
  id?: string;
  name?: string | null;
  position?: string | null;
  image?: string | null;
}

interface TeamMembersProps {
  members?: TeamMember[];
}

export default function TeamMembers({ members = [] }: TeamMembersProps) {
  return (
    <section className="teams_block padding-section-medium">
      <div className="padding-global">
        <div className="container-large">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="center_title_block"
          >
            <div className="title-small">Team</div>
            <div className="padding-bottom padding-xsmall"></div>
            <h2>Meet Our Experts</h2>
          </motion.div>
          <div className="padding-bottom padding-medium"></div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="four_column_grid"
          >
            {members.map((member, index) => (
              <div key={member.id || index} className="team_member_col">
                <div className="team_thumbnail_wr">
                  <Image
                    src={member.image || "/images/placeholder.jpg"}
                    alt={member.name || "Team Member"}
                    width={300}
                    height={300}
                    className="image_fit"
                  />
                </div>
                <div className="team_member_info">
                  <h4 className="team_member_title">{member.name}</h4>
                  <p className="team_member_pos">{member.position}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
