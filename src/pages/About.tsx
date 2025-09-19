import TeamCarousel from "@/components/about/TeamCarousel";
import SEO from "@/components/common/SEO";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Target,
  Eye,
  Award,
  Briefcase,
  GraduationCap,
  Leaf,
  Droplets,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description:
        "Delivering tailored DPR solutions that address complex civil and environmental challenges.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Partnering with government, NGOs, and communities to deliver sustainable outcomes.",
    },
    {
      icon: Award,
      title: "Integrity",
      description:
        "Maintaining compliance with NGT, KSPCB, and national standards with ethical practices.",
    },
    {
      icon: Eye,
      title: "Sustainability",
      description:
        "Restoring and conserving natural resources with eco-friendly engineering solutions.",
    },
  ];

  const team = [
    {
      name: "Mr. Awais",
      position: "Civil Engineer",
      education: "B.E. Civil Engineering",
      experience: "8+ Years",
      specialization: "Site Supervision & Execution",
    },
    {
      name: "Mr. P. Halsur",
      position: "Senior Consultant",
      education: "Water Resources Specialist",
      experience: "20+ Years",
      specialization: "Storm Water & Hydrology",
    },
    {
      name: "Mr. M. Rajput",
      position: "Technical Expert",
      education: "Water Resources Engineering",
      experience: "15+ Years",
      specialization: "Drainage & Water Systems",
    },
    {
      name: "Mr. Veerabadra",
      position: "Environmental Specialist",
      education: "Environmental Sciences",
      experience: "12+ Years",
      specialization: "Ecology & Impact Assessments",
    },
    {
      name: "Mr. Zubair",
      position: "Survey Engineer",
      education: "Diploma in Surveying",
      experience: "7+ Years",
      specialization: "DGPS & Topographic Survey",
    },
    {
      name: "Mr. Lalsab",
      position: "Hydraulic Modeller",
      education: "Civil Engineering",
      experience: "10+ Years",
      specialization: "Hydrological & Hydraulic Studies",
    },
    {
      name: "Mr. Abbas",
      position: "Project Manager",
      education: "M.Tech Civil Engineering",
      experience: "13+ Years",
      specialization: "Project Coordination & Compliance",
    },
    {
      name: "Mr. Asif",
      position: "Field Engineer",
      education: "B.E. Civil Engineering",
      experience: "6+ Years",
      specialization: "On-site Execution",
    },
    {
      name: "Mr. Mallikarjun",
      position: "Land Surveyor",
      education: "Diploma in Land Survey",
      experience: "9+ Years",
      specialization: "Topographic & Boundary Survey",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="About Civil-Tech"
        description="Learn about Civil-Tech, our mission, values, and team. Discover our journey in providing high-quality DPR services for storm water drains, lakes & tanks, drinking water supply, underground drainage, and building construction projects."
        keywords={[
          "about civil-tech",
          "about civil-tech karnataka",
          "about civil-tech karnataka karnataka",
          "about civil-tech karnataka karnataka karnataka",
        ]}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              About Civil-Tech
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Civil-Tech is a consultancy firm delivering high-quality Detailed
              Project Reports (DPR) for storm water drains, lakes & tanks,
              drinking water supply, underground drainage, and building
              construction projects across Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Comprehensive DPR, PMC & Execution Experts
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-muted-foreground leading-relaxed">
                  Civil-Tech specializes in <strong>DPR preparation</strong>,
                  <strong> project management</strong>, and{" "}
                  <strong>execution services</strong>
                  for sustainable water and infrastructure projects. Our work
                  spans <strong>waterbody rejuvenation</strong>,
                  <strong> drinking water & sanitation</strong>,
                  <strong> storm-water design</strong>, and
                  <strong> building works</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With 10+ years of combined expertise, we deliver projects that
                  are
                  <strong> community-focused</strong>,
                  <strong> environmentally compliant</strong>, and{" "}
                  <strong>built to last</strong>.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-corporate p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <div className="text-muted-foreground">
                    Years of Experience
                  </div>
                </CardContent>
              </Card>
              <Card className="card-corporate p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <div className="text-muted-foreground">
                    Projects Delivered
                  </div>
                </CardContent>
              </Card>
              <Card className="card-corporate p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">
                    20+
                  </div>
                  <div className="text-muted-foreground">
                    Engineers & Specialists
                  </div>
                </CardContent>
              </Card>
              <Card className="card-corporate p-6 text-center">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">
                    100%
                  </div>
                  <div className="text-muted-foreground">
                    Regulatory Compliance
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="card-corporate p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Eye className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Our Vision
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To be a trusted consultancy delivering sustainable DPR
                  solutions for water systems, infrastructure, and environmental
                  conservation across India.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="card-corporate p-8">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Our Mission
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accurate, high-quality project reports that meet
                  client needs, comply with environmental standards, and deliver
                  lasting community benefits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our consultancy practice and project
              delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-corporate p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}

      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated professionals who drive our success
            </p>
          </div>
          <TeamCarousel team={team} />
        </div>
      </section>

      {/* Certifications & Recognition */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-muted-foreground">
              Ensuring quality and compliance with national and state-level
              standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-corporate p-6 text-center">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  GSTIN: 29AKCPI1957N1ZP
                </h3>
                <p className="text-muted-foreground">
                  Registered under Government of India for consultancy services
                </p>
              </CardContent>
            </Card>

            <Card className="card-corporate p-6 text-center">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Reg. No: 42/24/CE/0225/2023
                </h3>
                <p className="text-muted-foreground">
                  Recognized for professional civil & environmental consultancy
                </p>
              </CardContent>
            </Card>

            <Card className="card-corporate p-6 text-center">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  NGT & KSPCB Compliance
                </h3>
                <p className="text-muted-foreground">
                  Fully compliant with environmental and legal guidelines for
                  DPR works
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
