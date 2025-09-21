import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Waves,
  Droplets,
  Building,
  Zap,
  CheckCircle,
  ArrowRight,
  FileText,
  MapPin,
  Settings,
  Shield,
} from "lucide-react";
import SEO from "@/components/common/SEO";

const Services = () => {
  const services = [
    {
      icon: Waves,
      title: "Waterbody Rejuvenation Works",
      shortDesc:
        "Restoration and conservation of waterbodies for sustainability.",
      fullDesc:
        "Execution, DPR preparation, and PMC services for rejuvenation of lakes, ponds, check-dams, kalyanis, open-wells, and rainwater harvesting structures to restore ecological balance and enhance water storage.",
      features: [
        "Lake & pond rejuvenation",
        "Check-dam construction & strengthening",
        "Kalyani and open-well restoration",
        "Rainwater harvesting design",
        "Groundwater recharge support",
      ],
      applications: [
        "Water Conservation",
        "Community Projects",
        "Urban & Rural Development",
      ],
    },
    {
      icon: Droplets,
      title: "Water Supply & Sanitation Works",
      shortDesc: "Reliable drinking water and sanitation infrastructure.",
      fullDesc:
        "DPR preparation and execution of drinking water supply and underground drainage works, ensuring safe water distribution and sustainable sanitation systems for urban and rural communities.",
      features: [
        "Drinking water supply DPRs",
        "Pipeline distribution & storage tanks",
        "Underground drainage design",
        "Wastewater treatment solutions",
        "Compliance with health & safety norms",
      ],
      applications: [
        "Municipal Projects",
        "Rural Development",
        "Housing & Industrial Areas",
      ],
    },
    {
      icon: Zap,
      title: "Storm-Water Design & Flood Studies",
      shortDesc: "Hydrological studies and storm-water management.",
      fullDesc:
        "Comprehensive storm-water design and flood studies with DPR preparation, focusing on flood mitigation, drainage improvement, and climate-resilient urban planning.",
      features: [
        "Hydrological & hydraulic analysis",
        "Flood risk and impact studies",
        "Drainage network design",
        "Eco-friendly storm-water management",
        "Smart city compliance",
      ],
      applications: [
        "Smart Cities",
        "Urban Local Bodies",
        "Disaster Management",
      ],
    },
    {
      icon: Building,
      title: "Building Design & Renovation Works",
      shortDesc: "Innovative building design and sustainable renovation.",
      fullDesc:
        "DPR preparation, execution, and PMC support for new building designs and renovation works, integrating modern engineering practices with eco-friendly and cost-effective solutions.",
      features: [
        "Architectural & structural design",
        "Building renovation plans",
        "Utility & layout planning",
        "Sustainable materials & practices",
        "Project monitoring & compliance",
      ],
      applications: [
        "Residential Projects",
        "Commercial Buildings",
        "Institutions",
      ],
    },
  ];

  const dprServices = [
    {
      icon: FileText,
      title: "Detailed Project Reports (DPR)",
      description:
        "High-quality DPRs with cost estimates, BOQs, and designs for civil & environmental projects.",
    },
    {
      icon: MapPin,
      title: "Site Survey & Investigation",
      description:
        "Topographical surveys, soil testing, and feasibility analysis to ensure project accuracy.",
    },
    {
      icon: Settings,
      title: "Project Management Support",
      description:
        "Assistance in planning, monitoring, and coordinating DPR-based works.",
    },
    {
      icon: Shield,
      title: "Quality & Compliance",
      description:
        "Ensuring DPRs meet guidelines from NGT, KSPCB, and relevant regulatory authorities.",
    },
  ];

  const industries = [
    "Government Departments",
    "Municipal Corporations",
    "NGOs & Environmental Bodies",
    "Water Resource Projects",
    "Infrastructure Development",
    "Urban Local Bodies",
    "Educational Institutions",
    "Community Projects",
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Services - Civil-Tech"
        description="Explore our range of DPR services for storm water drains, lakes & tanks, drinking water supply, underground drainage, and building construction projects."
        keywords={[
          "services civil-tech",
          "services civil-tech karnataka",
          "services civil-tech karnataka karnataka",
          "services civil-tech karnataka karnataka karnataka",
        ]}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Specialized in DPR preparation, Execution works and PMC services for water body rejuvenation , water supply & sanitation works, Strom water management and infrastructure across India
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20">
        <div className="section-container">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-primary">
                      Key Features:
                    </h3>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-primary">
                      Applications:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Card className="card-corporate p-8">
                    <CardContent className="p-0">
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-3xl flex items-center justify-center">
                          <service.icon className="h-12 w-12 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.shortDesc}
                        </p>
                        <Link to="/contact">
                          <Button className="btn-primary">
                            Get Quote
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DPR Services */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Civil-Tech supports clients with comprehensive services that
              strengthen DPR delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dprServices.map((service, index) => (
              <Card key={index} className="card-corporate p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Clients & Collaborators
            </h2>
            <p className="text-xl text-muted-foreground">
              Delivering DPRs and engineering consultancy across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="card-corporate p-4 text-center hover:bg-accent/5"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">
                      {industry
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-primary">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Need a DPR for Your Project?
            </h2>
            <p className="text-xl opacity-90">
              Our experts are ready to prepare sustainable, compliant, and
              cost-effective DPRs for your infrastructure and water projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
