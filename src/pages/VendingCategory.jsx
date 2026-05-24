import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import SEO from '../components/ui/SEO';
import { vendingCategories, vendingProducts } from '../data/vendingData';
import AnimatedSection from '../components/ui/AnimatedSection';

const categoryConfig = {
    'educational-campuses': {
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=85',
        accent: '#818cf8',
        productsBg: 'bg-transparent relative z-10',
        whyStyle: 'light',
    },
    'corporate-offices': {
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85',
        accent: '#3b82f6',
        productsBg: 'bg-transparent border border-white/5 relative z-10',
        whyStyle: 'light',
    },
    'public-spaces': {
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=85',
        accent: '#06b6d4',
        productsBg: 'bg-transparent border border-white/5 relative z-10',
        whyStyle: 'light',
    },
};

const VendingCategory = () => {
    const { categorySlug } = useParams();
    const category = vendingCategories[categorySlug];
    const [hoveredCard, setHoveredCard] = useState(null);

    if (!category) return <Navigate to="/sanitary-vending" replace />;

    const products = category.products.map((id) => vendingProducts[id]).filter(Boolean);
    const cfg = categoryConfig[categorySlug] || categoryConfig['educational-campuses'];

    const taglineWords = category.tagline.split(' ');
    const lastWord = taglineWords[taglineWords.length - 1];
    const restWords = taglineWords.slice(0, -1).join(' ');

    return (
        <main className="min-h-screen font-sans selection:bg-[#8E2DE2] selection:text-white text-white bg-[#0A0F1C] relative overflow-x-hidden">
            {/* Global Ambient Premium Glows (Fixed Background) */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#00C6FF]/5 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-[20%] right-[-10%] w-[1000px] h-[1000px] bg-[#8E2DE2]/10 rounded-full blur-[150px]"></div>
                <div className="absolute top-[40%] left-[20%] w-[600px] h-[600px] bg-[#0072FF]/5 rounded-full blur-[100px]"></div>
            </div>

            <SEO
                title={`${category.name} | Smart Sanitary Vending | Mehza SmartTech`}
                description={category.description}
                canonical={`https://mehzasmarttechsolutions.com/sanitary-vending/${category.slug}`}
            />

            {/* ── HERO ── */}
            <section className="relative w-full min-h-screen md:h-screen flex flex-col justify-center md:justify-end bg-black overflow-hidden py-16 md:py-0">
                <div className="absolute inset-0 z-0">
                    <img src={cfg.image} alt={category.name} className="w-full h-full object-cover opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
                </div>

                <AnimatedSection direction="down" className="absolute top-20 md:top-28 left-0 right-0 z-10 px-8 md:px-20">
                    <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm font-label text-white/40">
                        <Link to="/sanitary-vending" className="hover:text-white/70 transition-colors">
                            Smart Sanitary Vending
                        </Link>
                        <span className="text-white/20 mx-1">/</span>
                        <span className="text-white/60">{category.name}</span>
                    </div>
                </AnimatedSection>

                {/* Text — centered on mobile, bottom left on desktop */}
                <AnimatedSection direction="up" className="relative z-10 px-6 md:px-20 pb-8 md:pb-14 pt-12 md:pt-24 max-w-7xl mx-auto w-full flex-1 md:flex-none flex flex-col justify-center md:justify-start">
                    {/* Clean label — no pill, no border */}
                    <p
                        className="text-[10px] md:text-[11px] font-label font-semibold tracking-[0.22em] uppercase mb-4 md:mb-5"
                        style={{ color: cfg.accent }}
                    >
                        {category.name}
                    </p>

                    <h1
                        className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 md:mb-6 max-w-2xl"
                        style={{ fontFamily: '"Sora Variable", "Sora", sans-serif' }}
                    >
                        {restWords}{' '}
                        <span className="relative inline-block">
                            {lastWord}
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 200 10"
                                preserveAspectRatio="none"
                                style={{ height: '7px' }}
                            >
                                <path
                                    d="M2,6 Q40,1 80,6 T160,5 T198,6"
                                    stroke={cfg.accent}
                                    strokeWidth="2.5"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-md mb-12 md:mb-8 font-body">
                        {category.description}
                    </p>

                    <div className="flex flex-col gap-4 md:gap-4 md:flex-row">
                        <Link
                            to="/contact"
                            className="tech-gradient text-on-primary px-6 md:px-7 py-4 md:py-3.5 rounded-xl font-label font-semibold text-sm md:text-base hover:shadow-[0_16px_40px_rgba(0,109,245,0.3)] transition-all duration-300 text-center w-full md:w-auto"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            to="/contact"
                            className="border border-white/15 text-white/75 px-6 md:px-7 py-4 md:py-3.5 rounded-xl font-label font-semibold text-sm md:text-base hover:bg-[#0A0F1C]/8 hover:text-white transition-all duration-300 text-center w-full md:w-auto"
                        >
                            Talk to Sales
                        </Link>
                    </div>
                </AnimatedSection>
            </section>

            {/* ── PRODUCTS — equal 50/50, hover expands one ── */}
            <section className={`py-16 px-8 md:px-20 ${cfg.productsBg}`}>
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection direction="up" className="flex items-end justify-between mb-10">
                        <h2
                            className="text-2xl font-extrabold text-white"
                            style={{ fontFamily: '"Sora Variable", "Sora", sans-serif' }}
                        >
                            Our machines for this space
                        </h2>
                        <p className="text-xs font-label text-gray-400 hidden md:block">
                            Hover to explore
                        </p>
                    </AnimatedSection>

                    <div className="flex flex-col gap-10">
                        {products.map((product, index) => {
                            const isHovered = hoveredCard === index;

                            return (
                                <AnimatedSection
                                    key={product.id}
                                    direction="up"
                                    delay={0.1 * index}
                                    className="w-full"
                                >
                                    <div
                                        onMouseEnter={() => setHoveredCard(index)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                        className="relative rounded-[1.75rem] overflow-hidden border border-white/5 flex flex-col md:flex-row bg-[#1A1A25] w-full"
                                        style={{
                                            transition: 'box-shadow 0.3s, border-color 0.3s',
                                            boxShadow: isHovered
                                                ? `0 32px 80px rgba(22,27,41,0.18), 0 0 0 1px ${cfg.accent}28`
                                                : '0 2px 16px rgba(22,27,41,0.05)',
                                        }}
                                    >
                                        {/* Visual top/left */}
                                        <div className="relative shrink-0 overflow-hidden w-full md:w-80 h-[210px] md:h-auto" style={{ backgroundColor: '#0d0f18' }}>
                                            {/* grid */}
                                            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <pattern id={`g${index}`} width="28" height="28" patternUnits="userSpaceOnUse">
                                                        <path d="M 28 0 L 0 0 0 28" fill="none" stroke="white" strokeWidth="0.25" opacity="0.1" />
                                                    </pattern>
                                                </defs>
                                                <rect width="100%" height="100%" fill={`url(#g${index})`} />
                                                <line x1="0" y1="100%" x2="100%" y2="0" stroke={cfg.accent} strokeWidth="0.4" opacity="0.12" />
                                            </svg>

                                            {/* glow on hover */}
                                            <div
                                                className="absolute inset-0 transition-opacity duration-500"
                                                style={{
                                                    background: `radial-gradient(circle at 50% 65%, ${cfg.accent}20 0%, transparent 65%)`,
                                                    opacity: isHovered ? 1 : 0,
                                                }}
                                            />

                                            {/* Vending machine silhouette */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div
                                                    style={{ transform: isHovered ? 'scale(1.06) translateY(-3px)' : 'scale(1)', transition: 'transform 0.4s ease' }}
                                                >
                                                    <div
                                                        className="w-[52px] h-[76px] rounded-xl flex flex-col items-center justify-around py-2 border"
                                                        style={{ borderColor: `${cfg.accent}30`, backgroundColor: `${cfg.accent}07` }}
                                                    >
                                                        <div className="w-8 h-5 rounded border" style={{ borderColor: `${cfg.accent}35`, backgroundColor: `${cfg.accent}10` }} />
                                                        <div className="w-6 h-1 rounded-full" style={{ backgroundColor: `${cfg.accent}45` }} />
                                                        <div className="w-7 h-2.5 rounded border" style={{ borderColor: `${cfg.accent}25`, backgroundColor: `${cfg.accent}06` }} />
                                                    </div>
                                                    <p className="text-center text-white/18 text-[9px] font-label mt-1.5">Image soon</p>
                                                </div>
                                            </div>

                                            {/* Badge */}
                                            <div className="absolute top-4 left-5">
                                                <span
                                                    className="text-[9px] font-label font-bold tracking-[0.18em] uppercase"
                                                    style={{ color: cfg.accent }}
                                                >
                                                    {product.badge}
                                                </span>
                                            </div>

                                            {/* Price */}
                                            <div className="absolute bottom-4 right-5 text-right">
                                                <p className="font-headline text-lg font-bold text-white leading-none">{product.price}</p>
                                                <p className="font-label text-[9px] text-white/35 mt-0.5">{product.priceNote}</p>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <h3
                                                className="text-lg font-bold text-white mb-1"
                                                style={{ fontFamily: '"Sora Variable", "Sora", sans-serif' }}
                                            >
                                                {product.name}
                                            </h3>
                                            <p className="text-xs font-body text-gray-400 mb-4 leading-relaxed">{product.tagline}</p>

                                            {/* Spec pills */}
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {[product.capacity, product.connectivity, product.display].map((val) => (
                                                    <span key={val} className="text-[10px] font-label px-2 py-1 rounded-lg bg-[#1A1A25] text-gray-400">
                                                        {val}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Features — always show all, CTA pinned to bottom */}
                                            <ul className="space-y-1.5 mb-5">
                                                {product.features.map((f) => (
                                                    <li key={f} className="flex items-start gap-2 text-xs font-body text-white">
                                                        <span
                                                            className="shrink-0 mt-[2px] w-3.5 h-3.5 rounded-full flex items-center justify-center"
                                                            style={{ backgroundColor: `${cfg.accent}18` }}
                                                        >
                                                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                                                                <path d="M1 3L2.5 4.5L5 1.5" stroke={cfg.accent} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </span>
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* CTAs */}
                                            <div className="flex gap-2 pt-4 mt-auto border-t border-white/5">
                                                <Link
                                                    to={`/contact?product=${product.id}&enquiry=true`}
                                                    className="flex-1 text-center py-2.5 rounded-xl font-label font-semibold text-xs text-white transition-all duration-300"
                                                    style={{ background: `linear-gradient(135deg, ${cfg.accent}dd, #0072FF)` }}
                                                >
                                                    Get a Quote
                                                </Link>
                                                <Link
                                                    to={`/contact?product=${product.id}`}
                                                    className="flex-1 text-center py-2.5 rounded-xl font-label font-semibold text-xs text-white border border-white/10-variant/25 bg-[#1A1A25] hover:bg-[#252535] transition-colors duration-300"
                                                >
                                                    Inquire Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── WHY — light style ── */}
            {cfg.whyStyle === 'light' ? (
                <section className="relative z-10 py-20 px-8 md:px-20 bg-transparent">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                        <AnimatedSection direction="left" className="lg:col-span-4">
                            <p className="text-[10px] font-label font-bold tracking-[0.2em] uppercase mb-4" style={{ color: cfg.accent }}>
                                Why it matters
                            </p>
                            <h2 className="text-3xl font-extrabold text-white leading-tight mb-5" style={{ fontFamily: '"Sora Variable", "Sora", sans-serif' }}>
                                {category.whySection.heading}
                            </h2>
                            <div className="h-0.5 w-8" style={{ backgroundColor: cfg.accent }} />
                        </AnimatedSection>
                        <div className="lg:col-span-8">
                            {category.whySection.points.map((point, i) => (
                                <AnimatedSection key={point.title} direction="up" delay={0.1 * i} className={`flex gap-6 py-7 ${i !== 0 ? 'border-t border-white/10-variant/15' : ''}`}>
                                    <span className="text-xs font-label font-bold shrink-0 mt-0.5 w-5" style={{ color: cfg.accent }}>0{i + 1}</span>
                                    <div>
                                        <h3 className="font-headline text-base font-bold text-white mb-1.5">{point.title}</h3>
                                        <p className="font-body text-sm text-gray-400 leading-relaxed">{point.body}</p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            ) : (
                <section className="relative z-10 pt-20 pb-10 px-8 md:px-20 bg-transparent">
                    <div className="max-w-7xl mx-auto">
                        <AnimatedSection direction="up">
                            <p className="text-[10px] font-label font-bold tracking-[0.2em] uppercase mb-4" style={{ color: cfg.accent }}>Why it matters</p>
                            <h2 className="text-3xl font-extrabold text-white leading-tight mb-8" style={{ fontFamily: '"Sora Variable", "Sora", sans-serif' }}>
                                {category.whySection.heading}
                            </h2>
                        </AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {category.whySection.points.map((point, i) => (
                                <AnimatedSection key={point.title} direction="up" delay={0.1 * i} className="border-t pt-6" style={{ borderColor: `${cfg.accent}35` }}>
                                    <span className="text-[10px] font-label font-bold tracking-widest mb-4 block" style={{ color: cfg.accent }}>0{i + 1}</span>
                                    <h3 className="font-headline text-base font-bold text-white mb-2">{point.title}</h3>
                                    <p className="font-body text-sm text-white/45 leading-relaxed">{point.body}</p>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── SPECS TABLE ── */}
            <section className="relative z-10 py-20 px-8 md:px-20 bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <AnimatedSection direction="up" className="flex items-end justify-between mb-12">
                        <h2 className="text-2xl font-extrabold text-white" style={{ fontFamily: '"Sora Variable", "Sora", sans-serif' }}>Full specifications</h2>
                        <p className="text-xs text-white/30 font-body hidden md:block">Compare both models side by side.</p>
                    </AnimatedSection>
                    <AnimatedSection direction="up" delay={0.1}>
                    <div className="overflow-x-auto rounded-2xl border border-white/8">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/8">
                                    <th className="text-left font-label text-white/25 font-medium px-6 py-4 w-1/3 text-xs uppercase tracking-widest">Spec</th>
                                    {products.map((p) => (
                                        <th key={p.id} className="text-left px-6 py-4">
                                            <span className="font-label text-white font-semibold block text-sm">{p.name}</span>
                                            <span className="text-[9px] font-label tracking-[0.18em] uppercase" style={{ color: cfg.accent }}>{p.badge}</span>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {products[0]?.specs.map((spec, i) => (
                                    <tr key={spec.label} className={`border-b border-white/[0.04] ${i % 2 === 0 ? 'bg-[#0A0F1C]/[0.012]' : ''}`}>
                                        <td className="px-6 py-3.5 font-label text-white/30 text-xs uppercase tracking-widest">{spec.label}</td>
                                        {products.map((p) => (
                                            <td key={p.id} className="px-6 py-3.5 font-body text-white/60 text-sm">
                                                {p.specs.find((s) => s.label === spec.label)?.value ?? '—'}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* ── IMAGES ROW ── */}
            {/* Full bleed continuous row of images */}
            <div className="relative z-10 flex w-full overflow-hidden h-56 sm:h-72 md:h-96 lg:h-[450px]">
                {category.images.map((src, i) => (
                    <div key={i} className="flex-1 overflow-hidden relative">
                        <img
                            src={src}
                            alt={`${category.name} ${i + 1}`}
                            className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
                        />
                    </div>
                ))}
            </div>

            {/* ── CTA ── */}
            <section className="relative z-10 py-20 px-8 md:px-20 border-t border-white/5 bg-transparent">
                <AnimatedSection direction="up" className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white mb-3" style={{ fontFamily: '"Sora Variable", "Sora", sans-serif' }}>
                        Ready to deploy?
                    </h2>
                    <p className="font-body text-gray-400 mb-8 text-sm leading-relaxed">
                        Site survey, installation, IoT setup, and ongoing support — we handle everything.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/contact" className="tech-gradient text-on-primary px-7 py-3.5 rounded-xl font-label font-semibold text-sm hover:shadow-[0_16px_40px_rgba(0,109,245,0.25)] transition-all duration-300">
                            Get in Touch
                        </Link>
                        <Link to="/contact" className="bg-[#252535] text-primary px-7 py-3.5 rounded-xl font-label font-semibold text-sm hover:bg-[#252535] transition-colors duration-300">
                            Contact Sales
                        </Link>
                    </div>
                </AnimatedSection>
            </section>
        </main>
    );
};

export default VendingCategory;