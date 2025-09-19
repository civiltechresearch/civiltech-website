import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => (
  <div className="min-h-screen pt-20 bg-background">
    {/* Hero Section */}
    <section className="py-20 bg-gradient-secondary">
      <div className="section-container max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Terms of Service
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Please read these terms carefully before using CivilTech’s website and
          services.
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
                Acceptance of Terms
              </h2>
              <p>
                Using our services means agreeing to comply with these terms and
                applicable laws.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Our Services
              </h2>
              <p>
                CivilTech offers consultancy in DPR preparation for water
                infrastructure, environmental studies, and civil engineering
                solutions. Service terms can vary based on project scope.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                User Conduct
              </h2>
              <p>
                Users must act lawfully and responsibly. Unauthorized actions or
                misuse that damage CivilTech or others are prohibited.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Intellectual Property
              </h2>
              <p>
                All CivilTech content and materials are protected under
                intellectual property laws and may not be reused without
                permission.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Regulatory Compliance
              </h2>
              <p>
                Consultancy activities follow regulations set by NGT, KSPCB,
                Karnataka Tank Conservation Authority, and others.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Limitation of Liability
              </h2>
              <p>
                CivilTech disclaims liability for damages related to website use
                or consultancy results beyond legal requirements.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">
                Changes to Terms
              </h2>
              <p>
                Terms may be updated; continued use constitutes acceptance of
                changes.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">Contact</h2>
              <p>
                Questions about these terms can be sent to
                civiltech.research@gmail.com or +91-8792440658.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>
);

export default TermsOfService;
