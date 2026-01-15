import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Camera,
  Sparkles,
  Search,
  ShoppingBag,
  Eye,
  MessageSquare,
  Shirt,
  Tags,
  MapPin,
  Users,
  TrendingUp,
  Menu,
  X,
  Check,
  Quote,
} from 'lucide-react'
import dressImg from './assets/dress.png'
import bagImg from './assets/bag.png'
import shoesImg from './assets/shoes.png'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tight">KhojIQ</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              <a href="#problem" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                The Problem
              </a>
              <a href="#how-it-works" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                How It Works
              </a>
              <a href="#features" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#use-cases" className="text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                Use Cases
              </a>
            </div>


            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="px-6 py-6 space-y-4">
              <a href="#problem" className="block text-lg font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                The Problem
              </a>
              <a href="#how-it-works" className="block text-lg font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </a>
              <a href="#features" className="block text-lg font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#use-cases" className="block text-lg font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Use Cases
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-mesh overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="text-sm font-medium px-4 py-1.5 rounded-full">
                  Vision-based search for boutiques
                </Badge>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-balance">
                  Sell by <span className="italic text-primary">vibe.</span>
                  <br />
                  Not by filters.
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                  KhojIQ turns photos of clothing, shoes, and bags into instant, natural-language search—so you find the perfect match in seconds.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="outline" className="gap-2 text-base" asChild>
                  <a href="#how-it-works">See How It Works</a>
                </Button>
              </div>

              {/* Quick Flow */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">Snap inventory</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">Auto-describe</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">Search naturally</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-secondary/50 to-muted/50 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-border/50 shadow-sm">
                {/* Search Demo Card */}
                <Card className="shadow-2xl border-none bg-white dark:bg-card">
                  <CardContent className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-secondary/50 rounded-xl border border-border/50">
                      <Search className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
                      <span className="text-sm sm:text-base text-foreground/70 font-medium">
                        "A dress for a winter wedding—elegant, not too formal"
                      </span>
                    </div>
                    <Separator />
                    <div className="space-y-3 sm:space-y-4">
                      <p className="text-xs sm:text-sm font-bold text-muted-foreground uppercase tracking-widest">
                        Top matches
                      </p>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        <div className="aspect-[3/4] bg-secondary/30 rounded-xl overflow-hidden border border-border/50 group/item">
                          <img src={dressImg} alt="Dress Match" className="w-full h-full object-cover opacity-90 group-hover/item:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="aspect-[3/4] bg-secondary/30 rounded-xl overflow-hidden border border-border/50 group/item">
                          <img src={bagImg} alt="Bag Match" className="w-full h-full object-cover opacity-90 group-hover/item:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="aspect-[3/4] bg-secondary/30 rounded-xl overflow-hidden border border-border/50 group/item">
                          <img src={shoesImg} alt="Shoes Match" className="w-full h-full object-cover opacity-90 group-hover/item:scale-110 transition-transform duration-500" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Floating Badge */}
                <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full shadow-[0_10px_30px_rgba(var(--primary),0.3)] border border-white/20 flex items-center gap-1.5 sm:gap-2 animate-bounce-subtle z-10">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  <span className="text-xs sm:text-sm font-bold tracking-wider uppercase">AI-Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 sm:py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-base font-semibold text-primary uppercase tracking-widest">
                  The boutique problem
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium leading-tight text-balance">
                  Customers speak in{' '}
                  <span className="italic">occasions</span> and{' '}
                  <span className="italic">feelings</span>—not dropdowns.
                </h2>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>Inventory is unique and constantly changing—new drops, limited sizes, one-off bags.</p>
                <p>Static fields miss what matters: silhouette, vibe, pairing, and occasion.</p>
                <p>Staff lose time hunting racks while the customer's attention fades.</p>
                <p>Great items stay hidden because you can't remember every piece.</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* What customers say */}
              <Card className="border-l-4 border-l-primary shadow-lg border-y-none border-r-none">
                <CardContent className="p-5 sm:p-8">
                  <p className="text-base font-bold text-muted-foreground mb-6 uppercase tracking-widest">
                    What customers say
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl">
                      <Quote className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <p className="text-lg italic text-foreground/80 leading-relaxed">"I need a dress that feels elegant but not too formal."</p>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-xl">
                      <Quote className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <p className="text-lg italic text-foreground/80 leading-relaxed">"Comfortable shoes for a long day that still look stylish."</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What software asks */}
              <Card className="bg-muted/30 border-dashed border-2">
                <CardContent className="p-5 sm:p-8">
                  <p className="text-base font-bold text-muted-foreground mb-6 uppercase tracking-widest">
                    What software asks
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['Category', 'Color', 'Size', 'Brand', 'Price'].map(tag => (
                      <Badge key={tag} variant="outline" className="px-4 py-2 text-sm border-muted-foreground/30 bg-background/50">
                        {tag}?
                      </Badge>
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground mt-6 font-medium">
                    That's not how boutique selling works.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20">
            <p className="text-sm sm:text-base font-semibold text-primary uppercase tracking-widest mb-3 sm:mb-4">
              Meet KhojIQ
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-5 sm:mb-8">
              A visual brain for your boutique
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Built for clothing, shoes, and bags. No tedious cataloging. No endless dropdowns.
              Just photos → meaning → instant search.
            </p>
          </div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Capture', desc: 'Snap or upload items', icon: Camera },
              { step: 2, title: 'Auto-describe', desc: 'Generates rich, searchable copy', icon: Sparkles },
              { step: 3, title: 'Tag', desc: 'Add quick store tags & notes', icon: Tags },
              { step: 4, title: 'Search', desc: 'Intent search + photo similarity', icon: Search },
              { step: 5, title: 'Sell', desc: 'Recommend & close the sale', icon: ShoppingBag },
            ].map(({ step, title, desc, icon: Icon }) => (
              <Card key={step} className="relative group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    {step}
                  </div>
                  <div className="w-14 h-14 mx-auto bg-secondary rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 sm:py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20">
            <p className="text-sm sm:text-base font-semibold text-primary uppercase tracking-widest mb-3 sm:mb-4">
              Powerful Features
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium">
              Search the way customers ask
            </h2>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Natural Language Search */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-5 sm:p-6 lg:p-8 space-y-5 sm:space-y-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Natural Language Search</h3>
                    <p className="text-lg text-muted-foreground">
                      Search across clothing, shoes, and bags using natural queries.
                    </p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { category: 'Clothing', query: '"A dress for a winter wedding—elegant, not too formal."' },
                      { category: 'Shoes', query: '"Comfortable white sneakers that still look clean and premium."' },
                      { category: 'Bags', query: '"A small shoulder bag that feels expensive under $150."' },
                    ].map(({ category, query }) => (
                      <div key={category} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                        <Badge variant="outline" className="shrink-0">{category}</Badge>
                        <p className="text-sm italic text-muted-foreground">{query}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Auto-descriptions */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-5 sm:p-6 lg:p-8 space-y-5 sm:space-y-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">Auto-descriptions That Sell</h3>
                    <p className="text-lg text-muted-foreground">
                      AI generates searchable, stylist-friendly descriptions from photos.
                    </p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                    <p className="text-sm font-medium">Example: AI-generated</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        Black midi dress with defined waist and soft drape
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        Silhouette: fitted bodice, A-line skirt
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        Style: modern minimal / evening
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        Occasion: cocktail, dinner, wedding guest
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visual Similarity */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-secondary/20">
              <CardContent className="p-6 sm:p-10 lg:p-12 space-y-6 sm:space-y-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Eye className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Visual Similarity Search</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Bring a reference photo → find the closest matches in your store instantly. No tagging required.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Styling Assistance */}
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-secondary/20">
              <CardContent className="p-6 sm:p-10 lg:p-12 space-y-6 sm:space-y-8">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Shirt className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Built-in Styling Assistance</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Turn inventory into outfits and recommendations—AI understands what goes together.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ops Features */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-lg sm:text-xl font-semibold text-center mb-6 sm:mb-8">Ops features that prevent "oops" moments</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Tags, title: 'Availability Status', desc: 'Available • Reserved • Sold' },
                { icon: MapPin, title: 'Location Notes', desc: 'Floor • Backroom • Rack/Section' },
                { icon: Users, title: 'Customer Shortlist', desc: 'Save picks, mark try-on, note preferences' },
                { icon: TrendingUp, title: 'Smart Analytics', desc: 'See what customers ask for most' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 sm:gap-4 p-4 bg-background rounded-lg">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{title}</p>
                    <p className="text-sm sm:text-base text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20">
            <p className="text-sm sm:text-base font-semibold text-primary uppercase tracking-widest mb-3 sm:mb-4">
              Real Results
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-5 sm:mb-8">
              Faster matches → better service → more sales
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                metric: 'Speed',
                title: 'Faster Discovery',
                desc: "Cut 'searching the racks' time dramatically. Keep the customer engaged.",
              },
              {
                metric: 'Conversion',
                title: "More 'Yes' Moments",
                desc: 'More closes by matching intent—occasion, vibe, and fit.',
              },
              {
                metric: 'Basket Size',
                title: 'Higher Average Order',
                desc: 'Pairing suggestions help recommend shoes, bags, and accessories.',
              },
              {
                metric: 'Onboarding',
                title: 'Staff Ready Faster',
                desc: 'New staff can sell like a senior stylist—without memorizing inventory.',
              },
              {
                metric: 'Buying',
                title: 'Smarter Purchasing',
                desc: 'See what customers ask for: "wedding guest," "travel shoes," "minimal bags."',
              },
              {
                metric: 'Export',
                title: 'Multi-channel Ready',
                desc: 'Descriptions work for listings, social captions, email, and more.',
              },
            ].map(({ metric, title, desc }) => (
              <Card key={metric} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-5 sm:p-8 space-y-4 sm:space-y-5">
                  <Badge variant="secondary" className="font-bold text-xs uppercase tracking-widest">{metric}</Badge>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-16 sm:py-24 lg:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20">
            <p className="text-sm sm:text-base font-semibold text-primary uppercase tracking-widest mb-3 sm:mb-4">
              Designed for fashion retail
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-5 sm:mb-8">
              Perfect for businesses with curated inventory
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              If your store wins on taste, KhojIQ helps you find that taste instantly and repeatably.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Clothing Boutiques', desc: 'Dresses, tops, outerwear, denim, occasion edits' },
              { title: 'Sneaker & Shoe Shops', desc: 'Comfort vs style, profile, use-cases, alternatives' },
              { title: 'Bag Stores', desc: 'Size feel, structure, strap style, occasions' },
              { title: 'Consignment Shops', desc: 'Unique pieces that need rich descriptions' },
              { title: 'Pop-up Stores', desc: 'Quick setup, immediate search capability' },
              { title: 'Stylists', desc: 'Inventory closets with instant client matching' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-5 sm:p-8 bg-background rounded-xl sm:rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-5 sm:mb-8 leading-tight text-balance">
            Turn your clothing, shoes, and bags into instant, natural-language search
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Best for boutiques selling apparel, shoes, and bags.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tight">KhojIQ</span>
            </div>

            <p className="text-base text-muted-foreground font-medium">
              Vision-based product search for boutiques
            </p>

            <p className="text-base text-muted-foreground">
              © {new Date().getFullYear()} KhojIQ. Built for retail.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
