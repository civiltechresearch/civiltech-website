import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Building,
  Users,
  MessageSquare,
} from "lucide-react";
import SEO from "@/components/common/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);

    // Replace these with your EmailJS credentials
    const SERVICE_ID = "service_7yc56aj";
    const TEMPLATE_ID = "template_v7v7nff";
    const USER_ID = "k_z99tWtSYiEhViHq";

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID);
      toast({
        title: "Message Sent Successfully!",
        description:
          "Thank you for contacting Civil-Tech. Our team will get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: [
        "# 141, Ramaiah garden, Kadugodi",
        "Bengaluru – 560067",
        "Karnataka, India",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 8792440658"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["civiltech.research@gmail.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const projectTypes = [
    "Storm Water Drainage",
    "Lakes & Tanks Rejuvenation",
    "Drinking Water Supply",
    "Underground Drainage Works",
    "Building Constructions",
    "Other",
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "Proven Expertise",
      description:
        "Decades of combined experience in civil and environmental engineering.",
    },
    {
      icon: Users,
      title: "Specialized Team",
      description:
        "Multidisciplinary experts in hydrology, ecology, and landscape design.",
    },
    {
      icon: Building,
      title: "Trusted Projects",
      description:
        "Rejuvenation of lakes, storm water systems, and government infrastructure.",
    },
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (
      !formData.phone.trim() &&
      formData.phone &&
      !/^[0-9]{10}$/.test(formData.phone)
    ) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!formData.message.trim())
      newErrors.message = "Project details are required.";
    return newErrors;
  };

  return (
    <div className="min-h-screen pt-20">
      <SEO
        title="Contact Civil-Tech"
        description="Contact Civil-Tech for DPR services, consultations, and project execution. Reach out to our team of experts in civil and environmental engineering."
        keywords={[
          "contact civil-tech",
          "contact civil-tech karnataka",
          "contact civil-tech karnataka karnataka",
          "contact civil-tech karnataka karnataka karnataka",
        ]}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Contact Civil-Tech
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Looking for experts in civil and environmental engineering? Reach
              out to us for DPR services, consultations, and project execution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-corporate">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl text-primary">
                    <MessageSquare className="h-6 w-6" />
                    <span>Send Us a Message</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will respond within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm">{errors.phone}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    {/* Project Type */}
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your project requirements..."
                        rows={6}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="btn-primary w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className={`${
                    info.title === "Email Addresses" ||
                    info.title === "Phone Numbers"
                      ? "hover:text-primary-foreground cursor-pointer"
                      : ""
                  }`}
                  onClick={() => {
                    if (info.title === "Email Addresses") {
                      window.location.href = `mailto:${info.details[0]}`;
                    } else if (info.title === "Phone Numbers") {
                      window.location.href = `tel:${info.details[0]}`;
                    }
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-primary">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className={`text-sm text-muted-foreground ${
                              info.title === "Email Addresses" ||
                              info.title === "Phone Numbers"
                                ? "hover:underline"
                                : ""
                            }`}
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Civil-Tech?
            </h2>
            <p className="text-xl text-muted-foreground">
              Sustainable solutions, experienced professionals, and
              government-trusted expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="card-corporate p-6 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Visit Our Office
            </h2>
          </div>

          <Card className="card-corporate overflow-hidden">
            <div className="h-96 bg-gradient-secondary flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-16 w-16 text-primary mx-auto" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Interactive Map Coming Soon
                  </h3>
                  <p className="text-muted-foreground">
                    #141, Ramaiah garden,Kadugodi
                    <br />
                    Bengaluru – 560067, Karnataka, India
                  </p>
                </div>
                {/* <Button variant="outline" className="btn-secondary">
                  Get Directions
                </Button> */}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl opacity-90">
              Our consultants are available for urgent project discussions and
              technical support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <a href="tel:+918792440658">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91 8792440658
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="mailto:civiltech.research@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
