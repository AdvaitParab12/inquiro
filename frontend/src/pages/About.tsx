//TODO:About page to be desingned

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Target, Award } from "lucide-react";

export default function AboutPage() {
  // const teamMembers = [
  //   {
  //     name: "Dr. Sarah Chen",
  //     role: "Founder & CEO",
  //     bio: "Former MIT researcher with 15+ years in academic publishing. PhD in Computer Science.",
  //     image: "/professional-woman-researcher.png",
  //   },
  //   {
  //     name: "Dr. Michael Rodriguez",
  //     role: "Chief Technology Officer",
  //     bio: "Expert in digital platforms and academic databases. Former Google Research scientist.",
  //     image: "/professional-technology-leader.png",
  //   },
  //   {
  //     name: "Dr. Emily Watson",
  //     role: "Head of Academic Relations",
  //     bio: "20+ years in academic publishing. Former editor at Nature and Science journals.",
  //     image: "/academic-editor-woman.png",
  //   },
  //   {
  //     name: "Dr. James Park",
  //     role: "Lead Data Scientist",
  //     bio: "Specializes in research analytics and citation networks. PhD in Information Science.",
  //     image: "/professional-data-scientist.png",
  //   },
  // ];

  const values = [
    {
      icon: BookOpen,
      title: "Open Access",
      description:
        "We believe research should be accessible to everyone, breaking down barriers to knowledge.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building a collaborative platform where researchers can connect and share discoveries.",
    },
    {
      icon: Target,
      title: "Quality",
      description:
        "Maintaining the highest standards in peer review and research integrity.",
    },
    {
      icon: Award,
      title: "Innovation",
      description:
        "Leveraging technology to transform how research is published and discovered.",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-primary/5 to-secondary/5 relative bg-gradient-to-br py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-foreground mb-6 text-4xl font-bold md:text-6xl">
              Advancing Research,
              <span className="text-primary"> Together</span>
            </h1>
            <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
              Inquiro is dedicated to democratizing access to academic research
              and fostering collaboration among scholars worldwide. We're
              building the future of scientific publishing.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                {/* <Link href="/browse">Explore Research</Link> */}
              </Button>
              <Button variant="outline" size="lg" asChild>
                {/* <Link href="/contact">Get in Touch</Link> */}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-8">
                <blockquote className="text-2xl font-medium text-foreground italic leading-relaxed ">
                  "Our mission is to accelerate scientific discovery by creating an open, collaborative platform where
                  researchers can share their work, connect with peers, and build upon each other's findings to solve
                  humanity's greatest challenges."
                </blockquote>
                <footer className="mt-6 text-muted-foreground">— Inquiro Foundation</footer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-xl">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center transition-shadow hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                      <value.icon className="text-primary h-8 w-8 text-emerald-500" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground">
                Passionate researchers and technologists working to transform academic publishing
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
                    <div className="flex justify-center gap-3 mt-4">
                      <Button variant="ghost" size="sm">
                        <Mail className="w-4 h-4 text-emerald-500" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Linkedin className="w-4 h-4 text-emerald-500" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Twitter className="w-4 h-4 text-emerald-500" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl">
              Ready to Share Your Research?
            </h2>
            <p className="text-muted-foreground mb-8 text-xl">
              Join thousands of researchers who trust ResearchHub to publish and
              discover groundbreaking work.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                {/* <Link href="/submit">Submit Your Paper</Link> */}
              </Button>
              <Button variant="outline" size="lg" asChild>
                {/* <Link href="/signup">Create Account</Link> */}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
