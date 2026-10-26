/* Edit this file to update your profile or add the next project. No build needed. */
window.PORTFOLIO = {
  name: "Anmol Saluja",
  location: "Toronto, ON",
  email: "anmolsaluja045@gmail.com",
  linkedin: "https://www.linkedin.com/in/anmol-saluja",
  github: "https://github.com/anmol1722",
  headline: "Data Analytics · Business Analysis · Business Intelligence",
  resume: "assets/Anmol-Saluja-Resume-2026-10-26.pdf",
  bio: "I bring together a business foundation, fintech delivery experience at FIS Global and analytics training at UBC Sauder. My work connects business questions with reliable reporting, thoughtful analysis and recommendations that stakeholders can use.",
  summary: "Business analytics professional with UBC Sauder training and experience in fintech delivery and growth strategy. Uses SQL, Python, R, Tableau, Power BI and Excel for data analysis, reporting and stakeholder communication. Built and deployed Laptop Intelligence: an AI research agent combining ETL, semantic search, competitor benchmarking, NLP sentiment, retrieval-augmented generation and data-backed visualizations.",
  personalStory: "Originally from India, my journey has taken me through Seattle to Canada. I chose the MBAN at UBC to deepen my analytical skills and explore how AI can support better business decisions. Now based in Toronto, I’m interested in work that connects data, people and practical outcomes.",
  aboutShort: "Based in Toronto, I combine UBC Sauder analytics training with fintech delivery and growth experience. I enjoy turning business questions into clear dashboards and practical recommendations. Outside work, I’m usually reading, spending time outdoors, or watching a Disney or Pixar film.",
  interests: [
    { title: "A good book, always", label: "BOOKS & CURIOSITY", description: "Reading is my way to unwind and see things from a different perspective.", image: "assets/photos/anmol-reading.jpg", width: 1152, height: 2048, alt: "Anmol holding a book, from the personal introduction presentation", className: "reading-photo" },
    { title: "A little time outdoors", label: "NATURE & PERSPECTIVE", description: "Time in nature helps me slow down, stay grounded and recharge.", image: "assets/photos/waterfront-evening.jpg", width: 2048, height: 1536, alt: "A waterfront at sunset with mountains, trees and city lights, from Anmol’s presentation", className: "nature-photo" },
    { title: "Room for a little magic", label: "DISNEY & PIXAR", description: "I’m a Disney and Pixar fan. There’s always room for a well-told story.", image: "assets/photos/anmol-at-disney.jpg", width: 1152, height: 2048, alt: "Anmol visiting Disney with the castle behind her", className: "disney-photo" }
  ],
  skills: [
    { title: "Analytics & programming", items: ["SQL", "Python", "R", "Advanced Excel", "pandas", "ETL / Parquet"] },
    { title: "Business intelligence", items: ["Tableau", "Power BI", "KPI reporting", "Data visualization", "Stakeholder communication"] },
    { title: "Applied AI & modelling", items: ["Prompt engineering", "Agentic AI", "LLMs", "RAG", "Precision / recall / F1", "Confusion matrices", "RAG answer audits", "XGBoost", "Regression"] }
  ],
  experience: [
    {
      company: "UBC Experiential Learning",
      role: "Business Analytics Internship",
      dates: "May – Aug 2026",
      location: "Vancouver, BC",
      focus: "Applied AI · competitive intelligence",
      metric: "25,841 products · 456,395 reviews",
      bullets: [
        "Built Laptop Intelligence, a live AI research agent for competitor benchmarking, pricing analytics and customer insights across 25,841 laptop listings, 456,395 reviews and 294 brands.",
        "Streamed 27.9 GB of Amazon data into pandas and Parquet datasets. Combined MiniLM embeddings with hardware features; the project guard audit reported 100% segment consistency across 5,000 recommendations.",
        "Evaluated DistilBERT sentiment against a 6,000-review star-label benchmark at 89.0% accuracy, identifying customer support and battery feedback as improvement themes.",
        "Integrated a Groq-hosted GPT-OSS-120B RAG assistant with intent routing, evidence citations, answer checks and natural-language chart tools. Deployed the FastAPI / JavaScript application using Docker, Caddy and HTTPS on Oracle Cloud."
      ]
    },
    {
      company: "FIS Global",
      role: "Engineer",
      dates: "Apr 2022 – Apr 2023",
      location: "India",
      focus: "Fintech implementation · business intelligence",
      metric: "25 → 3 minutes to generate reports",
      bullets: [
        "Coordinated cross-functional teams implementing large financial technology projects and supported collaboration across business and delivery teams.",
        "Designed and implemented an interactive Power BI dashboard that reduced report generation time from 25 minutes to 3 minutes.",
        "Used reporting and visualization to improve transparency and support stakeholder decision-making."
      ]
    },
    {
      company: "Conquering My Own Everest / GoGhumantu",
      role: "Growth Manager",
      dates: "Jan 2021 – Mar 2022",
      location: "India",
      focus: "Growth analytics · pricing strategy",
      metric: "100% increase in online engagement",
      bullets: [
        "Developed and executed a growth strategy that increased online engagement by 100%.",
        "Led a digital outreach campaign that increased customer acquisition from 2% to 10%.",
        "Developed subscription pricing recommendations using demand, market trends and revenue drivers."
      ]
    }
  ],
  education: [
    { school: "UBC Sauder School of Business", qualification: "Master of Business Analytics", year: "2026", location: "Vancouver, BC", note: "Degree conferral: November 2026" },
    { school: "Sharda University", qualification: "Master of Business Administration", year: "2020", location: "Noida, India" }
  ],
  certifications: [],
  additionalProjects: [
    {
      id: "yelp-analytics", number: "02",
      title: "Yelp restaurant & customer analytics",
      category: "Business intelligence", date: "Academic project", institution: "Individual project",
      question: "Where is attention concentrated, and how does it change?",
      metric: "7,493 restaurants", tools: ["Tableau", "KPI dashboards", "Geospatial analysis", "Cohort analysis"],
      summary: "Built a Tableau restaurant overview and review / user storyboards. Combined cuisine filters, map-based selection, popularity rankings, rating distributions and time-series views to explore Greater Vancouver’s restaurant landscape.",
      contribution: "Designed linked dashboard views, percent-of-total calculations, three-month moving averages and joining-year cohorts to turn review activity into a clear business narrative.",
      evidence: "The analysis separates a sharp review-volume decline around March 2020 from comparatively stable average ratings, and highlights concentrated reviewer influence. Review counts measure platform activity, not sales or customer footfall.",
      provenance: "Figures from the supplied Tableau assignment PDF, pages 1 and 3–7. Three screenshot views crop out desktop panels while retaining the chart, axes, legend and annotations.",
      visuals: [
        { image: "assets/projects/yelp/restaurant-dashboard.png", width: 1919, height: 1047, title: "The restaurant overview", alt: "Original Tableau dashboard showing a Greater Vancouver restaurant map, 7,493-restaurant KPI, popular restaurants and rating distribution", caption: "Assignment PDF, p. 1 · Cuisine and geographic selections connect the map, rankings and rating distribution." },
        { image: "assets/projects/yelp/rating-mix-chart.svg", width: 1059, height: 628, title: "Rating composition over time", alt: "Tableau 100 percent stacked bars showing the share of each star rating by review year", caption: "Assignment PDF, p. 3 · Percent-of-total bars compare rating mix within each year rather than raw review volume. Chart area cropped from the original screenshot; its eight-month filter exclusion remains visible." },
        { image: "assets/projects/yelp/review-volume-chart.svg", width: 1059, height: 628, title: "Attention before and after 2020", alt: "Monthly Yelp review volume with a three-month moving average and a March 2020 reference marker", caption: "Assignment PDF, p. 4 · Chart area cropped from the original screenshot. Review activity drops around the March 2020 marker; the chart describes a pattern, not a causal estimate." },
        { image: "assets/projects/yelp/rating-trend-chart.svg", width: 1059, height: 628, title: "Ratings alongside volume", alt: "Average monthly star-rating trend split into pre-COVID and post-COVID panes", caption: "Assignment PDF, p. 5 · Chart area cropped from the original screenshot. Average ratings are more stable than review volumes over the displayed period." },
        { image: "assets/projects/yelp/reviewer-influence.png", width: 1432, height: 729, title: "Who attracts a following?", alt: "Yelp user scatter plot comparing review count on a logarithmic scale with fan count, colored by average stars", caption: "Assignment PDF, p. 6 · Review-count and fan-count patterns reveal a small group of highly active, highly followed users." },
        { image: "assets/projects/yelp/cohort-activity.png", width: 1432, height: 729, title: "Activity by joining cohort", alt: "Tableau bar chart of average reviews per user by joining year, with cohort-size labels", caption: "Assignment PDF, p. 7 · Older joining-year cohorts have higher accumulated reviews per user; account tenure matters when interpreting the comparison." }
      ]
    },
    {
      id: "pricing-analytics", number: "03",
      title: "Pricing strategy & demand elasticity",
      category: "Statistical analysis", date: "Academic project", institution: "Individual project",
      question: "Which product is most price-sensitive, and who competes?",
      metric: "86 stores · 3 products", tools: ["R", "Log–log regression", "Price elasticity", "Marketing analytics"],
      summary: "Estimated own- and cross-price elasticities for Tide 128 oz, Tide 64 oz and Wisk 64 oz using weekly store-level grocery data. Excluded promotional weeks and controlled for store effects and a weekly time trend.",
      contribution: "Specified three regression models in R and interpreted price sensitivity, substitution patterns and unexpected cross-price signs for a pricing decision.",
      evidence: "All three reported own-price elasticities are below −1. Wisk 64 oz is most price-sensitive (≈ −2.98); Tide 64 oz is least sensitive (≈ −1.49). These are observational estimates, not measured effects of a pricing experiment.",
      provenance: "Chart recreated from the approximate coefficients in the supplied presentation, slide 4. The input grocery CSV was not supplied, so regressions were not rerun.",
      downloads: [ { label: "R analysis", href: "assets/projects/pricing/base-price-analysis.R" }, { label: "Chart data · CSV", href: "assets/projects/pricing/price-elasticities.csv" } ],
      visuals: [
        { image: "assets/projects/pricing/price-elasticities.svg", width: 900, height: 510, title: "Price sensitivity across three products", alt: "Own-price elasticity estimates: Wisk 64 ounces minus 2.98, Tide 128 ounces minus 2.38, and Tide 64 ounces minus 1.49; all are below minus 1", caption: "Recreated from Presentation.pptx, slide 4 · Approximate log–log regression coefficients: Wisk 64 oz −2.98, Tide 128 oz −2.38, Tide 64 oz −1.49." }
      ]
    },
    {
      id: "petfinder-prediction", number: "04",
      title: "PetFinder adoption-speed prediction",
      category: "Machine learning", date: "Feb 2026", institution: "UBC Sauder · Group 9",
      question: "Which listings need attention before adoption slows?",
      metric: "14,993 pet listings", tools: ["Python", "scikit-learn", "XGBoost", "Text features", "Model evaluation"],
      summary: "Compared five classifiers for adoption-speed prediction using pet characteristics and listing information. Merged the two fastest original categories into four classes and used stratified train / validation / test splits.",
      contribution: "Co-authored methodology and results: preprocessing pipelines, model comparison and evaluation with macro-F1, balanced accuracy, quadratic weighted kappa and confusion matrices.",
      evidence: "The final report records 42.85% test accuracy and 0.4175 macro-F1 for XGBoost + TF-IDF on 2,999 held-out listings. Intermediate speed classes remain difficult; listing-improvement recommendations are hypotheses, not measured adoption gains.",
      provenance: "Results and original figures: Final_Report.docx, §3.2, §5.2 and Appendix Figure 6. Saved notebook runs differ slightly; the metrics here follow the final report.",
      visuals: [
        { image: "assets/projects/petfinder/test-confusion-matrix.png", width: 517, height: 470, title: "Where the model gets confused", alt: "Four-class held-out confusion matrix for XGBoost plus TF-IDF, with 278, 312, 189 and 506 correct classifications on the diagonal", caption: "Final report, Appendix Figure 6 · 1,285 correct predictions out of 2,999 test listings (42.85% accuracy). Adjacent speed categories remain difficult to distinguish." },
        { image: "assets/projects/petfinder/adoption-by-animal.png", width: 1080, height: 1386, title: "Adoption speed by animal type", alt: "Original report bar charts showing counts of dog and cat listings across five original adoption-speed categories", caption: "Final report, §3.2 · Exploratory distribution before merging original categories 0 and 1 for modelling." },
        { image: "assets/projects/petfinder/state-adoption-heatmap.png", width: 950, height: 624, title: "Geography and adoption patterns", alt: "Original report heatmap showing adoption-speed percentages by Malaysian state and animal type", caption: "Final report, §3.2 · State-level comparisons show different distributions; small subgroups require care." }
      ]
    }
  ],
  projectAchievements: [
    { value: "27.9 GB", label: "source data streamed", detail: "Python, pandas and Parquet pipeline" },
    { value: "100%", label: "reported segment consistency", detail: "5,000 recommendations in the project’s guard audit" },
    { value: "89.0%", label: "sentiment benchmark accuracy", detail: "6,000 reviews · binary star-derived labels" },
    { value: "HTTPS", label: "live application", detail: "FastAPI + JavaScript · Docker + Caddy" }
  ],
  projects: [
    {
      id: "laptop-intelligence",
      number: "01",
      category: "AI research agent",
      title: "Laptop Intelligence",
      summary: "An AI research agent for competitor benchmarking, pricing analytics and customer insights.",
      detail: "Built the complete workflow: a 27.9 GB ETL pipeline, semantic search, hybrid product matching, review sentiment, retrieval-augmented generation and natural-language charts. Deployed with FastAPI, Docker and HTTPS on Oracle Cloud.",
      tags: ["Python / ETL", "Prompt engineering", "Agentic AI / RAG", "Data visualization"],
      caseStudy: "laptop-intelligence.html",
      section: "#project-method",
      live: "https://laptop.40.233.82.229.sslip.io/",
      source: "https://github.com/anmol1722/laptop-competitor-intelligence",
      image: "assets/screenshots/application-landing.png",
      imageWidth: 2912,
      imageHeight: 1620,
      imageAlt: "Laptop Intelligence application with research metrics, catalogue filters, pricing benchmarks and the AI analyst",
      metrics: [{ value: "25,841", label: "laptop listings" }, { value: "456k+", label: "reviews analysed" }, { value: "294", label: "brands" }]
    }
  ]
};
