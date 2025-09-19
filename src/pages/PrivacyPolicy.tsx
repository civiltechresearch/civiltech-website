import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => (
  <div className="min-h-screen pt-20 bg-background">
    {/* Hero Section */}
    <section className="py-20 bg-gradient-secondary">
      <div className="section-container max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Privacy Policy
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Learn how CivilTech collects, uses, discloses, and protects your
          personal information.
        </p>
      </div>
    </section>

    {/* Content Card */}
    <section className="py-20">
      <div className="section-container max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6 space-y-6 text-muted-foreground">
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Information Collected
              </h2>
              <p>
                CivilTech collects personal and usage information such as your
                name, contact info, project details, and interaction data to
                provide effective consultancy services and improve user
                experience.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Purpose of Collection
              </h2>
              <p>
                Information is used to respond to inquiries, offer proposals,
                deliver consultancy services, comply with regulations, and
                maintain communications.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Data Usage
              </h2>
              <p>
                Your information supports service delivery, billing, website
                improvement, and legal compliance.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Data Disclosure
              </h2>
              <p>
                Data is not sold. It may be shared with partners, regulatory
                bodies, or as legally required.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Security & Compliance
              </h2>
              <p>
                CivilTech employs industry-standard safeguards and complies with
                Indian IT laws and environmental regulations.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Cookies & Analytics
              </h2>
              <p>
                Our website uses cookies and analytics to enhance performance,
                which you may control via browser settings.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                User Rights
              </h2>
              <p>
                You may request access, correction, or deletion of your data by
                contacting civiltech.research@gmail.com.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Policy Updates
              </h2>
              <p>
                We reserve the right to update the policy; major modifications
                will be posted on this page.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Contact Us
              </h2>
              <p>
                For questions about privacy, email civiltech.research@gmail.com
                or call +91-8792440658.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default PrivacyPolicy;
