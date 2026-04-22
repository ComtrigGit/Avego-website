const GITHUB = "https://raw.githubusercontent.com/ComtrigGit/Avego-website/main/avergo-homepage-v5-acumin/images";
const img = (name: string) => `${GITHUB}/${name}`;

const StarIcon = () => (
  <svg className="w-4 h-4 fill-current" style={{ color: "#8BAF6A" }} viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>
);

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => <StarIcon key={i} />)}
  </div>
);

const ChevronRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
  </svg>
);

const LeafIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 3s0 8 5 13c2.5 2.5 6 4 10 4S5 3 5 3z"/>
  </svg>
);

function AnnouncementBar() {
  return (
    <div className="w-full text-center py-2.5 text-xs tracking-widest uppercase" style={{ background: "#4A5D23", color: "rgba(255,255,255,0.9)", letterSpacing: "0.1em" }}>
      Free shipping on orders over €45 &nbsp;·&nbsp; 50,000 trees planted
    </div>
  );
}

function Nav() {
  return (
    <nav className="w-full sticky top-0 z-50" style={{ background: "#FAF6EE", borderBottom: "1px solid #E8DECE", height: 72 }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative flex items-center justify-between h-full">
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium" style={{ color: "#1E1611", letterSpacing: "0.04em" }}>
          {["Shop", "Kits", "Planters", "Learn"].map(l => (
            <a key={l} href="#" className="transition-colors hover:text-[#4A5D23]">{l}</a>
          ))}
        </div>
        <button className="lg:hidden" style={{ color: "#1E1611" }} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <a href="#" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src={img("avergo-logo.png")} alt="Avergo" style={{ maxHeight: 52, width: "auto" }} />
        </a>
        <div className="flex items-center gap-5" style={{ color: "#1E1611" }}>
          <button className="hidden md:block hover:text-[#4A5D23] transition-colors" aria-label="Search">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
          <button className="hover:text-[#4A5D23] transition-colors" aria-label="Cart">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 11H4L5 9z"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function PillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-widest" style={{ color: "#4A5D23", border: "1px solid rgba(74,93,35,0.35)", borderRadius: 100, padding: "4px 14px", letterSpacing: "0.12em" }}>
      {children}
    </span>
  );
}

function HeroSection() {
  return (
    <section style={{ background: "#FAF6EE" }} className="py-16 md:py-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-0">
          <div className="md:w-1/2 md:py-28 md:pr-16">
            <PillBadge>New — Flower Kit</PillBadge>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6 font-serif" style={{ color: "#1E1611" }}>
              Grow something<br />
              <em style={{ color: "#4A5D23" }}>beautiful.</em>
            </h1>
            <p className="text-lg font-light leading-relaxed mb-10" style={{ color: "rgba(30,22,17,0.65)", maxWidth: 400 }}>
              Beautifully crafted growing kits and accessories that make it easy to bring something alive into your home — or the home of someone you love.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium uppercase text-white hover:opacity-90 transition-opacity" style={{ background: "#4A5D23", letterSpacing: "0.1em" }}>
                Shop the Collection <ChevronRight />
              </a>
              <a href="#" className="text-sm font-medium underline underline-offset-4 hover:text-[#4A5D23] transition-colors" style={{ color: "#1E1611" }}>
                Our story
              </a>
            </div>
            <div className="flex items-center gap-6 mt-12 pt-10" style={{ borderTop: "1px solid #E8DECE" }}>
              {[["12k+", "Kits sold"], ["4.9", "Avg. rating"], ["50k", "Trees planted"]].map(([val, label], i) => (
                <div key={val} className="flex items-center gap-6">
                  {i > 0 && <div style={{ width: 1, height: 36, background: "#E8DECE" }} />}
                  <div className="text-center">
                    <p className="font-serif text-2xl" style={{ color: "#1E1611" }}>{val}</p>
                    <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "rgba(30,22,17,0.45)", letterSpacing: "0.1em" }}>{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5", background: "#F2E8D5" }}>
              <img src={img("avergo-hero.jpg")} alt="Avergo growing kit on a sunny windowsill" className="w-full h-full object-cover" />
            </div>
            <div className="absolute hidden md:block rounded-xl px-6 py-5 shadow-sm" style={{ bottom: "2rem", left: "-2rem", background: "white", border: "1px solid #E8DECE", maxWidth: 200 }}>
              <div className="flex items-center gap-2 mb-2">
                <LeafIcon className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "#4A5D23", letterSpacing: "0.1em" }}>Growing</span>
              </div>
              <p className="font-serif text-sm leading-snug" style={{ color: "#1E1611" }}>Bonsai Kit — Week 6</p>
              <div className="flex items-center gap-1 mt-2">
                <div className="h-1.5 rounded-full flex-1" style={{ background: "#C8DAB0" }}>
                  <div className="h-1.5 rounded-full" style={{ width: "65%", background: "#4A5D23" }} />
                </div>
                <span className="text-xs" style={{ color: "rgba(30,22,17,0.5)" }}>65%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  const pillars = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M5 3s0 8 5 13c2.5 2.5 6 4 10 4S5 3 5 3z"/>
        </svg>
      ),
      title: "Beginner-friendly",
      desc: "Simple setup with everything you need to grow and enjoy beautiful blooms.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
      ),
      title: "Brightens your space",
      desc: "Adds a natural pop of color and life to any room or windowsill.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" strokeWidth={1.75}/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 5c0 0-3 3-3 7s3 7 3 7M12 5c0 0 3 3 3 7s-3 7-3 7M5 12h14"/>
        </svg>
      ),
      title: "Beautiful blooms",
      desc: "Enjoy a charming mix of wildflowers that bring joy all season long.",
    },
  ];

  return (
    <section style={{ background: "#C8DAB0" }} className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="flex-1 h-px" style={{ background: "rgba(74,93,35,0.25)", maxWidth: 80 }} />
          <LeafIcon />
          <div className="flex-1 h-px" style={{ background: "rgba(74,93,35,0.25)", maxWidth: 80 }} />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-center tracking-tight mb-14" style={{ color: "#1E1611" }}>
          Why you'll love it
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {pillars.map(({ icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center">
              <div className="mb-6 flex items-center justify-center" style={{ width: 72, height: 72, borderRadius: "50%", background: "white", border: "1.5px solid rgba(74,93,35,0.2)", color: "#4A5D23" }}>
                {icon}
              </div>
              <h3 className="font-serif text-xl mb-3" style={{ color: "#1E1611" }}>{title}</h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(30,22,17,0.65)", maxWidth: 220, margin: "0 auto" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoriesSection() {
  const cats = [
    { src: img("avergo-kits.jpg"), label: "Growing Kits" },
    { src: img("avergo-planters.jpg"), label: "Wall Planters" },
    { src: img("avergo-accessories.jpg"), label: "Accessories" },
  ];
  return (
    <section style={{ background: "#FAF6EE" }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <PillBadge>Collections</PillBadge>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mt-4" style={{ color: "#1E1611" }}>
              Everything you need<br />to grow.
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest pb-1 hover:text-[#4A5D23] transition-colors" style={{ borderBottom: "1.5px solid #1E1611", color: "#1E1611", letterSpacing: "0.1em" }}>
            Explore All <ChevronRight />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {cats.map(({ src, label }) => (
            <a key={label} href="#" className="group relative block overflow-hidden rounded-2xl" style={{ aspectRatio: "3/4", background: "#F2E8D5" }}>
              <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,22,17,0.55) 0%, rgba(30,22,17,0.05) 55%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-7 flex justify-between items-end">
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.65)", letterSpacing: "0.1em" }}>Category</p>
                  <h3 className="font-serif text-2xl text-white">{label}</h3>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ background: "rgba(255,255,255,0.18)", backdropFilter: "blur(8px)" }}>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function MadeToGrowSection() {
  return (
    <section style={{ background: "#F2E8D5" }} className="py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5", background: "#E8DECE" }}>
            <img src={img("avergo-ls-bonsai-table.jpg")} alt="Avergo bonsai kit on a wooden table" className="w-full h-full object-cover" />
          </div>
          <div>
            <PillBadge>Our approach</PillBadge>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight mt-6 mb-6" style={{ color: "#1E1611" }}>
              Made to grow<br />beautifully.
            </h2>
            <p className="text-base font-light leading-relaxed mb-6" style={{ color: "rgba(30,22,17,0.65)", maxWidth: 400 }}>
              Avergo combines easy growing with warm natural materials, so you can grow something beautiful and bring a touch of nature into your home. Thoughtful, sustainable, and perfect for gifting.
            </p>
            <p className="text-base font-light leading-relaxed mb-10" style={{ color: "rgba(30,22,17,0.65)", maxWidth: 400 }}>
              We tested every seed, soil ratio, and guide until it worked the first time, every time. No green thumb required — just follow the steps and watch something come alive.
            </p>
            <a href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:opacity-80 transition-opacity" style={{ border: "1.5px solid #4A5D23", color: "#4A5D23", letterSpacing: "0.1em" }}>
              Our Story <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ src, title, price, reviews, rating = 5 }: { src: string; title: string; price: string; reviews: number; rating?: number }) {
  return (
    <div className="group rounded-2xl overflow-hidden" style={{ background: "#FAF6EE", border: "1px solid #E8DECE" }}>
      <div className="relative overflow-hidden" style={{ aspectRatio: "1/1", background: "#F2E8D5" }}>
        <img src={src} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250">
          <button className="w-full py-3 rounded-full text-white text-sm font-medium uppercase tracking-widest hover:opacity-90" style={{ background: "#4A5D23", letterSpacing: "0.08em" }}>
            Quick Add
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl" style={{ color: "#1E1611" }}>{title}</h3>
          <span className="font-medium text-base" style={{ color: "#4A5D23" }}>{price}</span>
        </div>
        <div className="flex items-center gap-1.5 mt-4">
          <Stars count={rating} />
          <span className="text-xs" style={{ color: "rgba(30,22,17,0.45)" }}>({reviews})</span>
        </div>
      </div>
    </div>
  );
}

function ProductsSection() {
  return (
    <section style={{ background: "white" }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <PillBadge>Products</PillBadge>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mt-4" style={{ color: "#1E1611" }}>Signature Collection</h2>
          <p className="text-base font-light mt-4" style={{ color: "rgba(30,22,17,0.55)" }}>Grow kits designed to work. Every time.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          <ProductCard src={img("avergo-product-bonsai.jpg")} title="Bonsai Starter Kit" price="€49" reviews={128} />
          <ProductCard src={img("avergo-product-herb.jpg")} title="Herb Trio Kit" price="€39" reviews={87} />
          <ProductCard src={img("avergo-product-planter.jpg")} title="Walnut Wall Planter" price="€59" reviews={54} rating={4} />
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest" style={{ border: "1.5px solid #E8DECE", color: "#1E1611", letterSpacing: "0.1em" }}>
            View All Products <ChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  const steps = [
    { n: 1, label: "Hydrate", desc: "Moisten the growing medium.", src: img("avergo-how-it-works.jpg") },
    { n: 2, label: "Sow", desc: "Sprinkle the seeds evenly over the surface.", src: img("avergo-ls-bonsai-hands.jpg") },
    { n: 3, label: "Bloom", desc: "Place in bright light and watch it bloom.", src: img("avergo-ls-bonsai-table.jpg") },
  ];
  return (
    <section style={{ background: "#C8DAB0" }} className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-center gap-4 mb-14">
          <LeafIcon />
          <h2 className="font-serif text-4xl md:text-5xl text-center tracking-tight" style={{ color: "#1E1611" }}>Grow in 3 easy steps</h2>
          <LeafIcon />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map(({ n, label, desc, src }) => (
            <div key={n} className="text-center">
              <div className="rounded-2xl overflow-hidden mb-6" style={{ aspectRatio: "4/3", background: "#E8DECE" }}>
                <img src={src} alt={label} className="w-full h-full object-cover object-center" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="flex items-center justify-center font-serif text-sm text-white" style={{ width: 32, height: 32, borderRadius: "50%", background: "#4A5D23", flexShrink: 0 }}>
                  {n}
                </div>
                <h3 className="font-serif text-xl" style={{ color: "#1E1611" }}>{label}</h3>
              </div>
              <p className="text-sm font-light leading-relaxed" style={{ color: "rgba(30,22,17,0.60)", maxWidth: 220, margin: "0 auto" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BundleSection() {
  return (
    <section style={{ background: "#F2E8D5" }} className="py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2" style={{ background: "#FAF6EE", border: "1px solid #E8DECE" }}>
          <div style={{ aspectRatio: "4/3", background: "#E8DECE" }} className="overflow-hidden">
            <img src={img("avergo-bundle.jpg")} alt="Avergo Starter Bundle" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center p-10 md:p-14">
            <PillBadge>Perfect Gift</PillBadge>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight mt-6 mb-5" style={{ color: "#1E1611" }}>
              The Starter<br />Bundle.
            </h2>
            <p className="text-base font-light leading-relaxed mb-8" style={{ color: "rgba(30,22,17,0.60)", maxWidth: 340 }}>
              Our most loved combination: a growing kit, matching planter, and a grow light — everything someone needs to start. Ready to gift.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-serif text-3xl" style={{ color: "#1E1611" }}>€89</span>
              <span className="text-sm line-through" style={{ color: "rgba(30,22,17,0.35)" }}>€118</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "#C8DAB0", color: "#4A5D23" }}>Save €29</span>
            </div>
            <a href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest text-white hover:opacity-90 transition-opacity self-start" style={{ background: "#4A5D23", letterSpacing: "0.1em" }}>
              Shop the Bundle <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ quote, name, location }: { quote: string; name: string; location: string }) {
  return (
    <div className="rounded-2xl p-8 flex flex-col gap-5" style={{ background: "#F2E8D5", border: "1px solid #E8DECE" }}>
      <Stars />
      <p className="text-base font-light leading-relaxed flex-1" style={{ color: "rgba(30,22,17,0.75)", fontStyle: "italic" }}>"{quote}"</p>
      <div>
        <p className="font-medium text-sm" style={{ color: "#1E1611" }}>{name}</p>
        <p className="text-xs mt-0.5" style={{ color: "rgba(30,22,17,0.40)" }}>{location}</p>
      </div>
    </div>
  );
}

function ReviewsSection() {
  return (
    <section style={{ background: "#FAF6EE" }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <PillBadge>Reviews</PillBadge>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mt-4" style={{ color: "#1E1611" }}>What people are saying</h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <Stars />
            <span className="text-sm font-medium" style={{ color: "#1E1611" }}>4.9 / 5</span>
            <span className="text-sm" style={{ color: "rgba(30,22,17,0.4)" }}>from 1,200+ reviews</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ReviewCard quote="I've killed every plant I've ever owned. The Avergo herb kit has been alive for four months and I'm genuinely proud of it." name="Maya R." location="Brooklyn, NY" />
          <ReviewCard quote="The bonsai kit with the stand and grow light looks like a piece of art in my apartment. I get compliments every single time someone visits." name="James T." location="San Francisco, CA" />
          <ReviewCard quote="I bought it as a gift and my sister cried. The packaging, the quality, everything — it felt like a luxury gift that actually does something." name="Priya M." location="Chicago, IL" />
        </div>
      </div>
    </section>
  );
}

function BrandStorySection() {
  return (
    <section style={{ background: "#FAF6EE" }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4", background: "#F2E8D5" }}>
              <img src={img("avergo-founder.jpg")} alt="Avergo founder" className="w-full h-full object-cover" />
            </div>
            <div className="absolute hidden lg:block rounded-xl px-7 py-5 shadow-sm" style={{ bottom: "-1.5rem", right: "-1.5rem", background: "#F2E8D5", border: "1px solid #E8DECE", maxWidth: 220 }}>
              <p className="font-serif text-xl leading-snug" style={{ color: "#1E1611" }}>"Grow something."</p>
              <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "rgba(30,22,17,0.40)", letterSpacing: "0.1em" }}>Avergo's one-liner</p>
            </div>
          </div>
          <div className="lg:pl-8">
            <PillBadge>Our story</PillBadge>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight mt-6 mb-8" style={{ color: "#1E1611" }}>
              Two years of testing until it worked. Every time.
            </h2>
            <div className="space-y-5 text-base font-light leading-relaxed mb-10" style={{ color: "rgba(30,22,17,0.65)" }}>
              <p>Avergo started with a simple frustration: growing plants should feel good, but for most people it doesn't — because the kits, soil, and tools they've been given weren't designed well enough. So we fixed that.</p>
              <p>Two years of testing seeds, soil ratios, and step-by-step guides until it worked the first time, every time. Today Avergo makes growing kits that take anyone from seed to thriving plant with zero guesswork.</p>
            </div>
            <div className="flex flex-wrap gap-8 mb-10 pb-10" style={{ borderBottom: "1px solid #E8DECE" }}>
              {[["2021", "Founded"], ["Amsterdam", "Based in"], ["50,000+", "Trees planted"]].map(([val, label]) => (
                <div key={val}>
                  <p className="font-serif text-2xl" style={{ color: "#1E1611" }}>{val}</p>
                  <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "rgba(30,22,17,0.45)", letterSpacing: "0.1em" }}>{label}</p>
                </div>
              ))}
            </div>
            <a href="#" className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium uppercase tracking-widest hover:opacity-80 transition-opacity" style={{ border: "1.5px solid #1E1611", color: "#1E1611", letterSpacing: "0.1em" }}>
              Read the full story <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: "#1E1611", color: "#FAF6EE" }} className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="font-serif text-4xl tracking-tight mb-5">A living thing<br />in every home.</h2>
            <p className="text-base font-light mb-8" style={{ color: "rgba(250,246,238,0.60)", maxWidth: 360 }}>
              Growing tips, new arrivals, and the occasional reminder that something alive in your home changes everything.
            </p>
            <form className="flex gap-4 max-w-sm" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent pb-3 focus:outline-none text-sm"
                style={{ borderBottom: "1px solid rgba(250,246,238,0.3)", color: "#FAF6EE" }}
              />
              <button type="submit" className="text-sm font-medium uppercase tracking-widest pb-3 hover:text-[#8BAF6A] transition-colors" style={{ letterSpacing: "0.1em" }}>
                Subscribe
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { heading: "Shop", links: ["Growing Kits", "Wall Planters", "Accessories", "Gift Cards"] },
              { heading: "Learn", links: ["Care Library", "Journal", "Our Story", "Sustainability"] },
              { heading: "Support", links: ["FAQ", "Shipping", "Returns", "Contact"] },
            ].map(({ heading, links }) => (
              <div key={heading} className="flex flex-col gap-4 text-sm" style={{ color: "rgba(250,246,238,0.55)" }}>
                <h4 className="font-medium uppercase tracking-widest text-xs mb-1" style={{ color: "#FAF6EE", letterSpacing: "0.1em" }}>{heading}</h4>
                {links.map(l => <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>)}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8" style={{ borderTop: "1px solid rgba(250,246,238,0.10)" }}>
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <img src={img("avergo-logo.png")} alt="Avergo" style={{ maxHeight: 28, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.5 }} />
            <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(250,246,238,0.35)", letterSpacing: "0.1em" }}>© 2025 Avergo. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-xs uppercase tracking-widest" style={{ color: "rgba(250,246,238,0.35)", letterSpacing: "0.1em" }}>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Source Sans 3', 'Acumin Pro', system-ui, sans-serif", background: "#FAF6EE", color: "#1E1611" }}>
      <AnnouncementBar />
      <Nav />
      <HeroSection />
      <WhySection />
      <CategoriesSection />
      <MadeToGrowSection />
      <ProductsSection />
      <StepsSection />
      <BundleSection />
      <ReviewsSection />
      <BrandStorySection />
      <Footer />
    </div>
  );
}
