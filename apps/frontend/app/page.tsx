import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, Clock, Globe, LineChart, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Monitor Your Website Uptime with Confidence
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Decentralized monitoring platform that ensures your websites are always up and running. Get instant
                    alerts when issues arise.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Start Monitoring <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View Demo
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                  <span className="mx-2">•</span>
                  <Check className="h-4 w-4 text-primary" />
                  <span>14-day free trial</span>
                  <span className="mx-2">•</span>
                  <Check className="h-4 w-4 text-primary" />
                  <span>Cancel anytime</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] overflow-hidden rounded-lg border bg-background p-2 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    width={600}
                    height={400}
                    alt="Dashboard Preview"
                    className="rounded-md object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 border-y bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">Trusted by companies worldwide</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <div className="h-8 w-32 bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                      Logo {i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to monitor your website
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our platform provides comprehensive monitoring tools to ensure your websites are always performing at
                  their best.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  icon: <Globe className="h-10 w-10 text-primary" />,
                  title: "Global Monitoring",
                  description:
                    "Monitor your websites from multiple locations around the world for accurate uptime data.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-primary" />,
                  title: "Instant Alerts",
                  description:
                    "Receive immediate notifications via email, SMS, Slack, or Discord when issues are detected.",
                },
                {
                  icon: <LineChart className="h-10 w-10 text-primary" />,
                  title: "Detailed Analytics",
                  description: "Get comprehensive performance metrics and historical data to optimize your websites.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-primary" />,
                  title: "SSL Monitoring",
                  description:
                    "Track SSL certificate expiration and get alerts before they expire to prevent security issues.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-primary" />,
                  title: "Response Time Tracking",
                  description: "Monitor page load times and get alerted when performance degrades below thresholds.",
                },
                {
                  icon: <Check className="h-10 w-10 text-primary" />,
                  title: "Content Verification",
                  description:
                    "Verify that specific content appears on your pages to ensure everything is working correctly.",
                },
              ].map((feature, i) => (
                <Card key={i} className="group relative overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/0 transition-all group-hover:bg-primary/100" />
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Simple setup, powerful monitoring
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Get started in minutes and let our decentralized network handle the rest.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Add your website",
                  description: "Enter your website URL and configure monitoring settings to your preferences.",
                },
                {
                  step: "02",
                  title: "Set up alerts",
                  description: "Choose how you want to be notified when issues are detected with your website.",
                },
                {
                  step: "03",
                  title: "Monitor & optimize",
                  description: "Track performance metrics and make improvements based on detailed analytics.",
                },
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    <span className="text-2xl font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                  {i < 2 && (
                    <ChevronRight className="hidden lg:block absolute -right-8 top-10 h-8 w-8 text-muted-foreground/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Choose the plan that's right for you and start monitoring your websites today.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-5xl">
              <Tabs defaultValue="monthly" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="annually">Annually (Save 20%)</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="monthly">
                  <div className="grid gap-6 lg:grid-cols-3">
                    {[
                      {
                        name: "Starter",
                        price: "$19",
                        description: "Perfect for small websites and personal projects.",
                        features: [
                          "5 websites",
                          "Checks every 5 minutes",
                          "Email notifications",
                          "7-day data retention",
                          "Basic reporting",
                        ],
                        popular: false,
                      },
                      {
                        name: "Professional",
                        price: "$49",
                        description: "Ideal for businesses with multiple websites.",
                        features: [
                          "20 websites",
                          "Checks every 1 minute",
                          "Email, SMS & Slack notifications",
                          "30-day data retention",
                          "Advanced reporting",
                          "API access",
                        ],
                        popular: true,
                      },
                      {
                        name: "Enterprise",
                        price: "$99",
                        description: "For large organizations with complex needs.",
                        features: [
                          "Unlimited websites",
                          "Checks every 30 seconds",
                          "All notification channels",
                          "1-year data retention",
                          "Custom reporting",
                          "Priority support",
                          "Dedicated account manager",
                        ],
                        popular: false,
                      },
                    ].map((plan, i) => (
                      <Card
                        key={i}
                        className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                            Most Popular
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{plan.name}</CardTitle>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground">/month</span>
                          </div>
                          <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <ul className="space-y-2">
                            {plan.features.map((feature, j) => (
                              <li key={j} className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                            Get Started
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="annually">
                  <div className="grid gap-6 lg:grid-cols-3">
                    {[
                      {
                        name: "Starter",
                        price: "$15",
                        description: "Perfect for small websites and personal projects.",
                        features: [
                          "5 websites",
                          "Checks every 5 minutes",
                          "Email notifications",
                          "7-day data retention",
                          "Basic reporting",
                        ],
                        popular: false,
                      },
                      {
                        name: "Professional",
                        price: "$39",
                        description: "Ideal for businesses with multiple websites.",
                        features: [
                          "20 websites",
                          "Checks every 1 minute",
                          "Email, SMS & Slack notifications",
                          "30-day data retention",
                          "Advanced reporting",
                          "API access",
                        ],
                        popular: true,
                      },
                      {
                        name: "Enterprise",
                        price: "$79",
                        description: "For large organizations with complex needs.",
                        features: [
                          "Unlimited websites",
                          "Checks every 30 seconds",
                          "All notification channels",
                          "1-year data retention",
                          "Custom reporting",
                          "Priority support",
                          "Dedicated account manager",
                        ],
                        popular: false,
                      },
                    ].map((plan, i) => (
                      <Card
                        key={i}
                        className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                            Most Popular
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle>{plan.name}</CardTitle>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold">{plan.price}</span>
                            <span className="text-muted-foreground">/month</span>
                          </div>
                          <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <ul className="space-y-2">
                            {plan.features.map((feature, j) => (
                              <li key={j} className="flex items-center gap-2">
                                <Check className="h-4 w-4 text-primary" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                            Get Started
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What our customers say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Don't just take our word for it. Here's what our customers have to say about UptimeGuard.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  quote:
                    "UptimeGuard has been a game-changer for our business. We've reduced our downtime by 95% since implementing their monitoring solution.",
                  author: "Sarah Johnson",
                  role: "CTO, TechCorp",
                },
                {
                  quote:
                    "The instant alerts have saved us countless hours of troubleshooting. We know about issues before our customers do.",
                  author: "Michael Chen",
                  role: "DevOps Lead, E-commerce Plus",
                },
                {
                  quote:
                    "Setting up UptimeGuard was incredibly easy, and the detailed analytics have helped us optimize our website performance significantly.",
                  author: "Emma Rodriguez",
                  role: "Web Developer, Creative Agency",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="text-center">
                  <CardHeader>
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-xl font-bold text-primary">"</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 italic">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently asked questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Find answers to common questions about our uptime monitoring service.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 max-w-3xl space-y-4">
              {[
                {
                  question: "How does UptimeGuard monitor my websites?",
                  answer:
                    "UptimeGuard uses a decentralized network of monitoring nodes located around the world to check your websites at regular intervals. This ensures accurate uptime data and minimizes false positives.",
                },
                {
                  question: "What happens when my website goes down?",
                  answer:
                    "When our system detects that your website is down, it performs additional checks to confirm the issue. Once confirmed, you'll receive instant notifications through your chosen channels (email, SMS, Slack, etc.).",
                },
                {
                  question: "Can I monitor websites behind a firewall?",
                  answer:
                    "Yes, we offer private monitoring agents that can be installed within your network to monitor internal websites and services that are not publicly accessible.",
                },
                {
                  question: "How accurate are your uptime statistics?",
                  answer:
                    "Our uptime statistics are highly accurate thanks to our global network of monitoring nodes. We perform multiple checks from different locations to ensure that reported downtime is genuine and not due to local network issues.",
                },
                {
                  question: "Do you offer a free trial?",
                  answer:
                    "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start your trial.",
                },
              ].map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to ensure your website never goes down?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed opacity-90">
                  Join thousands of satisfied customers who trust UptimeGuard to monitor their websites.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1">
                  Start Your Free Trial <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </div>
              <p className="text-sm opacity-80">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-muted/50 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">UptimeGuard</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Decentralized website monitoring platform that ensures your websites are always up and running.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 2H2v10h10V2zM22 2h-10v10h10V2zM12 12H2v10h10V12zM22 12h-10v10h10V12z"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Product</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Features
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  API
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Integrations
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Status
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Resources</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Guides
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Support
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} UptimeGuard. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

