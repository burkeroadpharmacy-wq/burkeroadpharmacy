import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { articles, articleCategories } from "@/data/articles";

export default function KnowledgeCentre() {
  const [activeCategory, setActiveCategory] = useState("All");

  const displayArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-[#f9fafb]">
      {/* Header */}
      <div className="brp-gradient py-16 text-white">
        <div className="container">
          <Link href="/" className="text-white/70 hover:text-white text-sm mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Knowledge Centre
          </h1>
          <p className="text-white/85 text-xl max-w-2xl">
            Evidence-based health information from our compounding pharmacists.
          </p>
        </div>
      </div>

      <div className="container py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {articleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                cat === activeCategory
                  ? "bg-[#1a4d2e] text-white"
                  : "bg-white text-gray-700 border border-border hover:border-[#2d6a4f] hover:text-[#1a4d2e]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {displayArticles.map((a) => (
            <div key={a.slug} className="brp-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="brp-badge text-xs">{a.category}</span>
                <span className="text-gray-400 text-xs">{a.readTimeMinutes} min read</span>
              </div>
              <h3
                className="text-xl font-bold text-[#1a4d2e] mb-3 leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {a.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{a.excerpt}</p>
              <button
                onClick={() => {}}
                className="flex items-center gap-1 text-[#2d6a4f] text-sm font-semibold hover:gap-2 transition-all"
              >
                Read article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Practitioners section */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-border mb-12">
          <h2
            className="text-2xl font-bold text-[#1a4d2e] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            For Healthcare Practitioners
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            We maintain a separate clinical resources section for healthcare providers,
            including evidence-based compounding protocols, formulary access, and
            prescription generation tools.
          </p>
          <Link
            href="/practitioners"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a4d2e] hover:bg-[#2d6a4f] text-white font-semibold rounded-xl transition-all text-sm"
          >
            Visit Practitioner Hub <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* CTA */}
        <div className="brp-gradient rounded-2xl p-10 text-white text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Have a question?
          </h2>
          <p className="text-white/85 mb-8">
            Our pharmacists are happy to answer your health questions. Give us a call or
            send us a message.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0398898622"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#84cc16] hover:bg-[#65a30d] text-gray-900 font-bold rounded-xl transition-all"
            >
              Call (03) 9889 8622
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl border border-white/40 transition-all"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
