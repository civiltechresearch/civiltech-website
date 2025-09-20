import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Users,
  Factory,
  Calendar,
  MapPin,
  DollarSign,
  Filter,
  IndianRupee,
  ArrowLeft,
  ImageIcon,
} from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project20 from "@/assets/projects/Kodihalli_lake_survery/bannerImage.jpeg";
import project21 from "@/assets/projects/Kodihalli_lake_survery/Kodihalli Lake-CP.jpg";
import project22 from "@/assets/projects/Kodihalli_lake_survery/Capture.jpeg";
import project23 from "@/assets/projects/Kodihalli_lake_survery/Kodihalli Lake-TP.jpg";
import project10 from "@/assets/projects/Hosakote_chikkere/project-10.jpg";
import project11 from "@/assets/projects/Hosakote_chikkere/Cathment_map.jpeg";
import project12 from "@/assets/projects/Hosakote_chikkere/Hoskote_chikkere_Tank_TP.jpg";
import project13 from "@/assets/projects/Hosakote_chikkere/Hoskote_chikkere_lake_CP.jpg";
import project41 from "@/assets/projects/Halikere_Lake/project-31.jpg";
import project42 from "@/assets/projects/Halikere_Lake/Halekere-Concept-plan-CP.jpg";
import project43 from "@/assets/projects/Halikere_Lake/Halekere_plan-TP.jpg";
import project31 from "@/assets/projects/Kodihalli_lake/project-31.jpeg";
import project32 from "@/assets/projects/Kodihalli_lake/project-32.jpeg";
import project33 from "@/assets/projects/Kodihalli_lake/project-33.jpeg";
import SEO from "@/components/common/SEO";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Hosakote-Chikkakere Lake Rejuvenation",
      category: "Government",
      client: "Minor Irrigation Department, Hoskote",
      location: "Hoskote, Karnataka",
      duration: "18 months",
      budget: "25 Crores",
      image: project10,
      description:
        "Rejuvenation of Hosakote-Chikkakere Lake with bund formation, waste-weir improvements, and ecological restoration.",
      detailedDescription:
        "Comprehensive rejuvenation plan including peripheral and main bund construction, improvement of waste-weir, sediment control, and ecological restoration to improve water retention and biodiversity.",
      services: [
        "Lake Rejuvenation",
        "Topographic Survey",
        "Ecological Impact Assessment",
      ],
      status: "Completed",
      year: "2023",
      highlights: [
        "Peripheral and main bund construction",
        "Improved water retention capacity",
        "Enhanced biodiversity and groundwater recharge",
        "Community-driven lake conservation",
      ],
      gallery: [project11, project12, project13],
    },
    {
      id: 2,
      title: "Kodihalli Lake Survey & DPR",
      category: "Government",
      client: "Minor Irrigation Department, Hoskote",
      location: "Hoskote, Karnataka",
      duration: "6 months",
      budget: "5 Crores",
      image: project20,
      description:
        "Topographic and hydrological survey with DPR preparation for Kodihalli Lake rejuvenation.",
      detailedDescription:
        "DGPS survey, hydrological studies, and DPR preparation for Kodihalli Lake rejuvenation, focusing on accurate data collection, hydraulic analysis, and regulatory compliance.",
      services: ["DGPS Survey", "Hydrological Study", "DPR Preparation"],
      status: "Completed",
      year: "2022",
      highlights: [
        "Detailed DPR for lake rejuvenation",
        "Accurate hydrological modeling",
        "Water quality assessment",
        "Baseline ecological study",
      ],
      gallery: [project21, project22, project23],
    },
    {
      id: 3,
      title: "Kodihalli Lake Rejuvenation",
      category: "Government",
      client: "Minor Irrigation Department, Hoskote",
      location: "Hoskote, Karnataka",
      duration: "12 months",
      budget: "15 Crores",
      image: project31,
      description:
        "Execution of DPR recommendations for Kodihalli Lake including bund strengthening and flood management.",
      detailedDescription:
        "Strengthening of bunds, waste-weir improvements, sediment management, and flood resilience measures to restore Kodihalli Lake’s ecological balance and water quality.",
      services: [
        "Lake Rejuvenation",
        "Flood Management",
        "Water Quality Improvement",
      ],
      status: "Ongoing",
      year: "2024",
      highlights: [
        "Bund strengthening and waste-weir development",
        "Sedimentation management",
        "Flood resilience measures",
        "Improved water quality",
      ],
      gallery: [project31, project32, project33],
    },
    {
      id: 4,
      title: "Halekere Lake Rejuvenation",
      category: "Government",
      client: "Zilla Panchayath, Ramanagara District",
      location: "Ramanagara, Karnataka",
      duration: "10 months",
      budget: "12 Crores",
      image: project41,
      description:
        "Rejuvenation of Halekere Lake with structural and ecological interventions.",
      detailedDescription:
        "Works included ecological restoration, bund strengthening, improved water storage, and community participation in conservation efforts.",
      services: [
        "Lake Rejuvenation",
        "Ecological Restoration",
        "Community Engagement",
      ],
      status: "Completed",
      year: "2023",
      highlights: [
        "Enhanced groundwater recharge",
        "Improved lake storage capacity",
        "Community-driven conservation",
        "Habitat restoration for native species",
      ],
      gallery: [project41, project42, project43],
    },
    {
      id: 5,
      title: "Chakanahalli Lake Rejuvenation",
      category: "Government",
      client: "Zilla Panchayath, Ramanagara District",
      location: "Ramanagara, Karnataka",
      duration: "14 months",
      budget: "18 Crores",
      image: project2,
      description:
        "Detailed DPR and rejuvenation of Chakanahalli Lake with sustainable and compliant solutions.",
      detailedDescription:
        "Preparation of DPR, regulatory compliance with NGT and KSPCB norms, and execution focusing on flood mitigation and ecological improvement.",
      services: [
        "Lake Rejuvenation",
        "Regulatory Compliance",
        "Hydraulic Studies",
      ],
      status: "Completed",
      year: "2023",
      highlights: [
        "Compliance with environmental norms",
        "Flood risk reduction",
        "Improved aquatic ecosystem",
        "Sustainable waste-weir improvements",
      ],
      gallery: [project1, project2, project3],
    },
    {
      id: 6,
      title: "Malur Lake Rejuvenation",
      category: "Government",
      client: "Zilla Panchayath, Bengaluru Rural",
      location: "Bengaluru Rural, Karnataka",
      duration: "16 months",
      budget: "20 Crores",
      image: project3,
      description:
        "Comprehensive DPR and rejuvenation plan for Malur Lake focusing on sustainability and recharge.",
      detailedDescription:
        "Preparation of DPR, bund formation, ecological studies, and sedimentation management for long-term sustainability of Malur Lake.",
      services: [
        "Lake Rejuvenation",
        "Water Quality Analysis",
        "Bund Formation",
      ],
      status: "Planning",
      year: "2024",
      highlights: [
        "DPR prepared and approved",
        "Focus on groundwater recharge",
        "Sedimentation control measures",
        "Planned ecological restoration",
      ],
      gallery: [project1, project2, project3],
    },
  ];

  const categories = ["All", "Government"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Government":
        return Building;
      case "NGO":
        return Users;
      case "Corporate":
        return Factory;
      default:
        return Building;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Ongoing":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Projects - Civil-Tech"
        description="Explore our portfolio of lake rejuvenation and water infrastructure DPR projects across India, executed in partnership with government agencies and communities."
        keywords={[
          "projects civil-tech",
          "projects civil-tech karnataka",
          "projects civil-tech karnataka karnataka",
          "projects civil-tech karnataka karnataka karnataka",
        ]}
      />

      {!selectedProject && (
        <div>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-secondary">
            <div className="section-container">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Our Project Portfolio
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Explore our portfolio of lake rejuvenation and water
                  infrastructure DPR projects across India, executed in
                  partnership with government agencies and communities.
                </p>
              </div>
            </div>
          </section>

          {/* Filter Section */}
          {/* <section className="py-12 bg-background border-b">
          <div className="section-container">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="flex items-center space-x-4">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium text-foreground">
                  Filter by Category:
                </span>
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        activeFilter === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setActiveFilter(category)}
                      className={activeFilter === category ? "btn-primary" : ""}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="text-muted-foreground">
                Showing {filteredProjects.length} of {projects.length} projects
              </div>
            </div>
          </div>
        </section> */}

          {/* Projects Grid */}
          <section className="py-20">
            <div className="section-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredProjects.map((project) => {
                  const CategoryIcon = getCategoryIcon(project.category);

                  return (
                    <Card
                      key={project.id}
                      className="card-corporate overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 flex space-x-2">
                          <Badge
                            className={`${getStatusColor(
                              project.status
                            )} border-0`}
                          >
                            {project.status}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="bg-primary text-primary-foreground"
                          >
                            {project.year}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6 space-y-4">
                        {/* Project Title & Category */}
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CategoryIcon className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium text-accent">
                              {project.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-primary">
                            {project.title}
                          </h3>
                        </div>

                        {/* Project Details */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              {project.client}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                              {project.location}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        {/* Services */}
                        <div className="space-y-2">
                          <span className="text-sm font-medium text-primary">
                            Services Provided:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.services.map((service, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Project Stats */}
          <section className="py-20 bg-secondary">
            <div className="section-container">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Project Impact
                </h2>
                <p className="text-xl text-muted-foreground">
                  Delivering sustainable water and infrastructure solutions
                  across India
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <div className="text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    3+
                  </div>
                  <div className="text-muted-foreground">Ongoing Project</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    20+
                  </div>
                  <div className="text-muted-foreground">
                    Engineers & Specialists
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <div className="text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      {selectedProject && (
        <section className="pb-20 pt-10 bg-background">
          <div className="section-container max-w-5xl">
            {/* Go Back Button */}
            <Button
              variant="outline"
              onClick={() => setSelectedProject(null)}
              className="mb-8 gap-2 hover:bg-primary/10 hover:text-primary/80 transition"
            >
              <ArrowLeft className="w-4 h-4" /> back to projects
            </Button>
            <Button
              onClick={() => setSelectedProject(null)}
              className="fixed bottom-6 left-6 rounded-full shadow-lg bg-primary text-white p-3 hover:scale-110 transition z-20"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                {selectedProject.title}
              </h2>

              <p className="text-muted-foreground">
                {selectedProject.detailedDescription}
              </p>

              {/* Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedProject.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedProject.location}</span>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-semibold text-primary mb-2">
                  Key Highlights:
                </h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  {selectedProject.highlights.map((h: string, idx: number) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>

              {/* Gallery */}
              {selectedProject.gallery &&
                selectedProject.gallery.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <ImageIcon className="h-5 w-5" /> Project Gallery
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedProject.gallery.map(
                        (img: string, idx: number) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`gallery-${idx}`}
                            className="w-full h-48 object-cover rounded-md shadow hover:scale-105 transition-transform"
                          />
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Have a DPR Project in Mind?
            </h2>
            <p className="text-xl opacity-90">
              Let's discuss how CivilTech can help rejuvenate lakes, manage
              water resources, and deliver sustainable infrastructure solutions.
            </p>
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href="/contact">Start Your Project Today</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
