"use client";

import Carousel from "../ui/Carousal";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  education: string;
  experience: string;
  specialization: string;
}

const TeamCarousel = ({ team }: { team: TeamMember[] }) => {
  const items = team.map((member, index) => (
    <Card key={index} className="card-corporate p-6 text-center h-full">
      <CardContent className="p-0">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-primary-foreground">
            {member.name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-primary mb-1">
          {member.name}
        </h3>
        <p className="text-sm text-accent font-medium mb-3">{member.position}</p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center justify-center space-x-2">
            <GraduationCap className="h-4 w-4" />
            <span>{member.education}</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Briefcase className="h-4 w-4" />
            <span>{member.experience}</span>
          </div>
          <p className="font-medium text-primary">{member.specialization}</p>
        </div>
      </CardContent>
    </Card>
  ));

  return <Carousel items={items} />;
};

export default TeamCarousel;
