import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Droplets,
  Building,
  Waves,
  Zap,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useMotionValue, useTransform, animate } from "framer-motion";
import SEO from "@/components/common/SEO";
import HeroImageCarousel from "@/components/home/HeroImageCarousel";
import ClientsCarousel from "@/components/home/ClientsCarousel";

type CountUpStatProps = {
  target: number;
};

const CountUpStat = forwardRef(({ target }: CountUpStatProps, ref) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useImperativeHandle(ref, () => ({
    start() {
      // Reset to 0 each time we trigger
      count.set(0);
      animate(count, target, {
        duration: 1,
        ease: "easeOut",
      });
    },
  }));

  return <motion.span>{rounded}</motion.span>;
});

const Home = () => {
  const services = [
    {
      icon: Waves,
      title: "Storm Water & Flood Studies",
      description:
        "DPR, PMC, and execution services for storm water drainage, flood control, and sustainable urban design.",
    },
    {
      icon: Droplets,
      title: "Waterbody Rejuvenation",
      description:
        "Reviving lakes, ponds, and tanks with eco-friendly DPRs and execution for storage, ecology, and groundwater recharge.",
    },
    {
      icon: Building,
      title: "Water Supply & Sanitation",
      description:
        "Comprehensive DPRs and execution for drinking water supply, treatment plants, and underground drainage networks.",
    },
    {
      icon: Zap,
      title: "Buildings & Infrastructure",
      description:
        "Planning, DPRs, and execution for building design, renovation, and sustainable infrastructure works.",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Hosakote Lake Rejuvenation",
      category: "Government",
      image: project1,
      description:
        "Rejuvenation DPR and execution with bund strengthening and ecological restoration in Hoskote, Karnataka.",
    },
    {
      id: 2,
      title: "Kodihalli Lake DPR & Rejuvenation",
      category: "Government",
      image: project2,
      description:
        "Comprehensive DPR and on-ground rejuvenation works including DGPS survey and flood resilience measures.",
    },
    {
      id: 3,
      title: "Halekere Lake Rejuvenation",
      category: "Government",
      image: project3,
      description:
        "Lake rejuvenation project in Ramanagara district with ecological restoration, and community-driven conservation.",
    },
  ];

  const stats = [
    { number: 10, suffix: "+", label: "DPRs Delivered" },
    { number: 3, suffix: "+", label: "Ongoing Project" },
    { number: 10, suffix: "+", label: "Years of Expertise" },
    { number: 20, suffix: "+", label: "Engineers & Specialists" },
    // { number: 100, suffix: "%", label: "Client Satisfaction" },
  ];

  const clients = [
    "Government of Karnataka",
    "Urban Local Bodies",
    "NGOs & Trusts",
    "Municipal Corporations",
    "Water Resource Departments",
    "Private Developers",
  ];
  const statRefs = useRef<any[]>([]);
  const { ref: sectionRef, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      statRefs.current.forEach((stat) => stat?.start());
    }
  }, [inView]);

  return (
    <div className="min-h-screen">
      <SEO
        title="CivilTech"
        description="CivilTech: Experts in environmental and civil engineering consultancy specializing in DPR services for Storm Water Drains, Lakes, Tanks, and Drinking Water Supply across Karnataka."
        keywords={[
          "environmental engineering",
          "civil engineering consultancy",
          "DPR preparation",
          "storm water drains",
          "lake rejuvenation",
          "water supply",
          "hydrology",
          "ecology",
          "landscape architecture",
          "Karnataka engineering consultants",
        ]}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Image */}
        <HeroImageCarousel />

        <div className="relative section-container text-center text-primary-foreground z-10">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
              Civil-Tech
            </h1>

            <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-accent-light tracking-wide">
              Civil & Environmental Engineering Experts
            </span>

            <p className="text-lg hidden sm:block md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed font-light">
              Delivering{" "}
              <span className="font-semibold text-accent-light">DPR, PMC </span>
              and{" "}
              <span className="font-semibold text-accent-light">
                execution services{" "}
              </span>
              for waterbody rejuvenation, sanitation, storm-water management,
              and sustainable infrastructure across Karnataka.
            </p>
            {/* <p className="text-lg  sm:hidden md:text-2xl text-primary-foreground/85 max-w-3xl mx-auto leading-relaxed font-light">
  DPR, PMC, and execution for waterbody and infrastructure projects in Karnataka.
</p> */}


            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              <Link to="/services">
                <Button
                  size="lg"
                  className="btn-hero shadow-lg hover:scale-105 transition-transform"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors shadow-md"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={sectionRef} className="py-16 bg-secondary">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <CountUpStat
                    ref={(el) => (statRefs.current[index] = el)}
                    target={stat.number}
                  />
                  {stat.suffix}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized in preparing DPRs for water, environment, and
              infrastructure projects across Karnataka and beyond
            </p>
          </div>

          {/* Animate the grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 100 }} // start below and hidden
            whileInView={{ opacity: 1, y: 0 }} // slide in
            exit={{ opacity: 0, y: 100 }} // slide out when leaving
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }} // triggers every time in/out of view
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <Card className="card-corporate p-6 text-center group">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="btn-primary">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our DPR Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Highlighting our contributions in water resource, drainage, and
              lake rejuvenation DPRs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link to="/projects">
                <Card
                  key={project.id}
                  className="card-corporate overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" className="btn-primary">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 overflow-hidden">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Trusted by Institutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Government departments, NGOs, and urban bodies choose Civil-Tech
              for reliable DPR consultancy
            </p>
          </div>

          {/* Carousel Container */}
          <ClientsCarousel clients={clients} />
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
              Our consultants deliver cost-effective, compliant, and sustainable
              DPRs for water and infrastructure projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
