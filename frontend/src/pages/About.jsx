//TODO:About page to be desingned

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Target, Award } from "lucide-react";

export default function AboutPage() {
  const values = [
    { icon: BookOpen, title: "Open Access", description: "We believe research should be accessible to everyone, breaking down barriers to knowledge." },
    { icon: Users, title: "Community", description: "Building a collaborative platform where researchers can connect and share discoveries." },
    { icon: Target, title: "Quality", description: "Maintaining the highest standards in peer review and research integrity." },
    { icon: Award, title: "Innovation", description: "Leveraging technology to transform how research is published and discovered." },
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="from-primary/5 to-secondary/5 relative bg-gradient-to-br py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-foreground mb-6 text-4xl font-bold md:text-6xl">
              Advancing Research,
              <span className="text-primary"> Together</span>
            </h1>
            <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
              Inquiro is dedicated to democratizing access to academic research and fostering collaboration among scholars worldwide. We're building the future of scientific publishing.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">{/* <Link href="/browse">Explore Research</Link> */}</Button>
              <Button variant="outline" size="lg" asChild>{/* <Link href="/contact">Get in Touch</Link> */}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">Our Core Values</h2>
              <p className="text-muted-foreground text-xl">The principles that guide everything we do</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="text-center transition-shadow hover:shadow-lg">
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

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-foreground mb-6 text-3xl font-bold md:text-4xl">Ready to Share Your Research?</h2>
            <p className="text-muted-foreground mb-8 text-xl">Join thousands of researchers who trust ResearchHub to publish and discover groundbreaking work.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>{/* <Link href="/submit">Submit Your Paper</Link> */}</Button>
              <Button variant="outline" size="lg" asChild>{/* <Link href="/signup">Create Account</Link> */}</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


