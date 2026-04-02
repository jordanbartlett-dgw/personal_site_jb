export type TimelineCategory =
  | "business"
  | "product"
  | "impact"
  | "personal";

export type TimelineEntry = {
  id: string;
  year: number;
  quarter?: 1 | 2 | 3 | 4;
  title: string;
  description: string;
  category: TimelineCategory;
  tags?: string[];
  highlight?: boolean;
};

export const timeline: TimelineEntry[] = [
  // ─── 2014 ───
  {
    id: "2014-q1-corner-bakery",
    year: 2014,
    quarter: 1,
    title: "Corner Bakery With Scott",
    description:
      "Jordan meets Scott at Corner Bakery Cafe in Irvine. Over coffee, they sketch out a business that would fund foster care programs through commercial revenue. Doing Good Works is born.",
    category: "business",
    tags: ["founding", "partnership"],
    highlight: true,
  },
  {
    id: "2014-q3-ashley-and-morris",
    year: 2014,
    quarter: 3,
    title: "First Hires",
    description:
      "The first two team members join DGW from the Tuesday sessions at the nonprofit resource center. One was a foster care alum with a marketing degree who could cold call past gatekeepers to C-suite execs. The other ran digital and creative. The mission had its first team.",
    category: "business",
    tags: ["hiring", "foster-care", "early-team"],
  },
  {
    id: "2014-q4-gelshell-launch",
    year: 2014,
    quarter: 4,
    title: "GelShell Goes Live",
    description:
      "On November 13, DGW launched GelShell.net, a customizable phone case e-commerce site. Within hours: first order processed, PayPal bugs squashed, a promo code giving 100% off instead of 20%, and someone uploading Oregon Ducks logos.",
    category: "product",
    tags: ["launch", "e-commerce"],
  },
  {
    id: "2014-q4-nonprofit-dna",
    year: 2014,
    quarter: 4,
    title: "Foster Care DNA From Day One",
    description:
      "Partnerships with Safe Families for Children, Orangewood Foundation, and Foster Care Alumni of America established the model: commercial activity funds programs for young people aging out of care.",
    category: "impact",
    tags: ["foster-care", "nonprofit", "model"],
  },

  // ─── 2015 ───
  {
    id: "2015-q1-cause-kups",
    year: 2015,
    quarter: 1,
    title: "Cause Kups: The Coffee Business",
    description:
      "DGW launched a branded coffee subscription business through Solid Coffee Roasters. K-cups in three roasts, a 200 Cup Challenge marketing campaign, and corporate custom-labeled bags. The second revenue vertical after GelShell.",
    category: "product",
    tags: ["coffee", "e-commerce", "subscription"],
  },
  {
    id: "2015-q2-promote4good",
    year: 2015,
    quarter: 2,
    title: "Promote4Good: The Corporate Play",
    description:
      "Promote4Good became the enterprise-facing brand for promotional products. The pitch: same products, same quality, but a portion funds job training for at-risk youth. Corporate company stores for Chipotle, Keller Williams, and Jimmy John's were explored or built.",
    category: "business",
    tags: ["corporate", "company-stores", "CSR"],
  },
  {
    id: "2015-q2-lyft-for-youth",
    year: 2015,
    quarter: 2,
    title: "6AM Lyft Rides to Compton",
    description:
      "When a partner organization got 16-18 foster youth hired at Ralph's stores but couldn't get them to orientation in Compton by 8AM, Jordan mapped every pickup address in Google Maps and coordinated seven teammates as drivers. The first Lyft For Youth pilot in LA.",
    category: "impact",
    tags: ["foster-care", "transportation", "problem-solving"],
  },
  {
    id: "2015-q4-hubspot-investment",
    year: 2015,
    quarter: 4,
    title: "HubSpot: Professionalizing Sales",
    description:
      "DGW invested in HubSpot Professional. Jordan negotiated quarterly payments. The shift from Google Sheets and manual tracking to a real CRM signaled the company was ready to professionalize.",
    category: "business",
    tags: ["CRM", "infrastructure", "sales"],
  },

  // ─── 2016 ───
  {
    id: "2016-q2-sevenly-acquisition",
    year: 2016,
    quarter: 2,
    title: "The Sevenly Rescue",
    description:
      "DGW took on Sevenly, a cause-based e-commerce apparel brand with a collapsed supply chain. Thousands of unfulfilled orders. By late June, Jordan was managing 1,675 open refund tickets.",
    category: "business",
    tags: ["acquisition", "e-commerce", "operations"],
    highlight: true,
  },
  {
    id: "2016-q3-return-on-impact",
    year: 2016,
    quarter: 3,
    title: "Return on Impact Framework",
    description:
      "Jordan built custom reports quantifying the social impact of a client's spend: youth trained, jobs created, dollars contributed. The framework became a core differentiator.",
    category: "product",
    tags: ["measurement", "impact", "corporate"],
  },
  {
    id: "2016-q4-olive-crest-ilp",
    year: 2016,
    quarter: 4,
    title: "Olive Crest Hands Over ILP",
    description:
      "Olive Crest asked DGW to take over their entire Independent Living Program for foster youth. Three full-year programs confirmed for 2017. The model was validated.",
    category: "impact",
    tags: ["foster-care", "programs", "validation"],
  },
  {
    id: "2016-q4-social-enterprise-cert",
    year: 2016,
    quarter: 4,
    title: "Social Enterprise Identity",
    description:
      "DGW pursued LA County Social Enterprise Certification, applied for USC Pro Bono Consulting through LACI, and visited Greystone Bakery in New York to learn from a proven model.",
    category: "business",
    tags: ["certification", "identity", "social-enterprise"],
  },

  // ─── 2017 ───
  {
    id: "2017-q2-print-shop-opens",
    year: 2017,
    quarter: 2,
    title: "In-House Print Shop Opens",
    description:
      "DGW launched its own print shop with the goal of hiring foster youth to work the printers. The social enterprise model became tangible: the business was building infrastructure to create jobs for the young people it served.",
    category: "product",
    tags: ["print-shop", "production", "jobs"],
    highlight: true,
  },
  {
    id: "2017-q3-peace-briefs",
    year: 2017,
    quarter: 3,
    title: "Peace Briefs in Five Days",
    description:
      "Saturday Morning, a creative collective connected to CAA, needed boxer briefs with peace messages designed, produced, and sold online. Jordan went from first email to hand-delivering prototypes at Creative Artists Agency in five days.",
    category: "product",
    tags: ["creative", "CAA", "speed"],
  },
  {
    id: "2017-q3-resume-nights",
    year: 2017,
    quarter: 3,
    title: "Resume Nights at Orangewood",
    description:
      "Jordan was personally helping foster youth write resumes and apply for jobs at Disney, Panera, and Sodexo during Tuesday volunteer nights. One young person at a time.",
    category: "impact",
    tags: ["foster-care", "direct-service", "mentoring"],
  },
  {
    id: "2017-q4-drew-born",
    year: 2017,
    quarter: 4,
    title: "Drew Bartlett Is Born",
    description:
      "Jordan's son was born in December 2017. He was still taking meetings and troubleshooting Shopify integrations. Fatherhood arrived alongside the busiest quarter DGW had ever had.",
    category: "personal",
    tags: ["family", "milestone"],
  },

  // ─── 2018 ───
  {
    id: "2018-q1-platform-year",
    year: 2018,
    quarter: 1,
    title: "The Platform Year Begins",
    description:
      "DGW migrated to WebJaguar as its e-commerce engine and launched over a dozen storefronts by year end. Each client got its own Shopify site, Order Desk instance, and fulfillment pipeline. No longer running a business. Running a platform.",
    category: "business",
    tags: ["platform", "e-commerce", "scale"],
  },
  {
    id: "2018-q3-direct-fund-program",
    year: 2018,
    quarter: 3,
    title: "Direct Fund Hits $10K in a Quarter",
    description:
      "The Direct Fund Program returned 10% of every college purchase to that school's Guardian Scholar Program. Ten colleges enrolled. Close to $10,000 returned in a single quarter. Universities became DGW's biggest customer category.",
    category: "impact",
    tags: ["education", "guardian-scholars", "giving-back"],
    highlight: true,
  },
  {
    id: "2018-q3-bcg-partnership",
    year: 2018,
    quarter: 3,
    title: "Boston Consulting Group Calls",
    description:
      "BCG was exploring a screen printing facility in Chicago staffed by young men coming out of prison through an organization called CRED. They wanted DGW as the sales and marketing arm. The network had reached a different league.",
    category: "business",
    tags: ["partnership", "BCG", "workforce"],
  },
  {
    id: "2018-q3-learning-to-code",
    year: 2018,
    quarter: 3,
    title: "Jordan Starts Coding",
    description:
      "Jordan hired a developer on Upwork to help with a BigCommerce API upload. He was using PyCharm and told the developer he would 'play around with it this week.' First evidence of engaging with code as a tool rather than something other people wrote.",
    category: "personal",
    tags: ["coding", "self-taught", "technical"],
  },

  // ─── 2019 ───
  {
    id: "2019-q1-gses-ucla",
    year: 2019,
    quarter: 1,
    title: "Speaking at the Global Social Enterprise Summit",
    description:
      "DGW was both a speaker and exhibitor at the GSES at UCLA. Five years of compounding work became visible from the outside.",
    category: "business",
    tags: ["speaking", "visibility", "social-enterprise"],
  },
  {
    id: "2019-q3-inc-5000",
    year: 2019,
    quarter: 3,
    title: "Inc. 5000",
    description:
      "DGW made the Inc. 5000 list of fastest-growing private companies. Five years of phone cases, coffee subscriptions, company stores, and foster youth programs had compounded into national recognition.",
    category: "business",
    tags: ["award", "growth", "recognition"],
    highlight: true,
  },
  {
    id: "2019-q3-talk-python",
    year: 2019,
    quarter: 3,
    title: "The Flask App That Wouldn't Run",
    description:
      "Jordan enrolled in Talk Python courses and started building Flask apps with SQLAlchemy. He emailed the instructor: 'Feels like I've been making progress, but today has bummed me out.' That frustration was the seed of everything that came later: the agents, the MCP servers, Claude Code.",
    category: "personal",
    tags: ["coding", "python", "self-taught"],
    highlight: true,
  },

  // ─── 2020 ───
  {
    id: "2020-q1-covid-pivot",
    year: 2020,
    quarter: 1,
    title: "The COVID Pivot",
    description:
      "Within days of lockdown, the team set up a dedicated email, built a one-sheeter for mask sales, and started sourcing PPE from Greater China. Other promo companies asked how to sell more merch. DGW asked how to keep the mission alive.",
    category: "business",
    tags: ["covid", "pivot", "PPE"],
    highlight: true,
  },
  {
    id: "2020-q2-ashbury-acquisition",
    year: 2020,
    quarter: 2,
    title: "Ashbury Images Acquisition",
    description:
      "DGW acquired Ashbury Images, a San Francisco screen printing social enterprise employing formerly incarcerated and at-risk youth. The acquisition added a couple million in revenue and accounts from Pixar, Habitat for Humanity, and SF Department of Public Health.",
    category: "business",
    tags: ["acquisition", "social-enterprise", "scale"],
    highlight: true,
  },
  {
    id: "2020-q3-18-interns",
    year: 2020,
    quarter: 3,
    title: "18 Interns, Not 5",
    description:
      "DGW planned for 5 interns. 18 applied. Jordan didn't want to say no to anyone. All 18 started. He personally mentored three, including one who asked to be called by her chosen name. Jordan told the team: use it on everything that doesn't have a legal requirement.",
    category: "impact",
    tags: ["interns", "foster-care", "inclusion"],
  },
  {
    id: "2020-q3-sephora-program",
    year: 2020,
    quarter: 3,
    title: "Sephora Employee Gift Program",
    description:
      "DGW built and managed a gift program for 1,400+ Sephora employees. Enterprise-level ops from a social enterprise.",
    category: "business",
    tags: ["sephora", "enterprise", "operations"],
  },

  // ─── 2021 ───
  {
    id: "2021-q2-texas-move",
    year: 2021,
    quarter: 2,
    title: "California to Texas",
    description:
      "The Bartlett family relocated to Georgetown, Texas. Jordan drove 20 hours solo with the dog. Rachel and the kids flew separately. Jessie was born around late July. Two kids, a new state, and a business to run remotely.",
    category: "personal",
    tags: ["relocation", "family", "texas"],
  },
  {
    id: "2021-q2-purpose-printery",
    year: 2021,
    quarter: 2,
    title: "Purpose Printery Takes Shape",
    description:
      "A print-on-demand and custom apparel shop designed to be replicated in different cities, each hiring young people from local youth organizations. Real customers were placing orders.",
    category: "product",
    tags: ["print-shop", "replicable", "social-enterprise"],
  },
  {
    id: "2021-q2-masks-to-india",
    year: 2021,
    quarter: 2,
    title: "700,000 Masks to India",
    description:
      "Through a Kaiser Permanente contact, DGW coordinated the donation of approximately 700,000 masks to India through MedShare. The connection came through an existing client.",
    category: "impact",
    tags: ["covid", "donation", "global"],
  },
  {
    id: "2021-q4-capital-group",
    year: 2021,
    quarter: 4,
    title: "Capital Group ESG Approval",
    description:
      "DGW completed Capital Group's ESG vendor evaluation and was approved. The B Corp certification was becoming a strategic asset for landing enterprise accounts.",
    category: "business",
    tags: ["ESG", "enterprise", "B-Corp"],
  },

  // ─── 2022 ───
  {
    id: "2022-q2-ridgewood-building",
    year: 2022,
    quarter: 2,
    title: "100 East Ridgewood",
    description:
      "Jordan acquired a commercial property in Georgetown, Texas through an SBA loan. The vision: a vocational training center where foster youth could learn the promotional products trade. Not just an office. A place.",
    category: "business",
    tags: ["real-estate", "texas", "vocational"],
  },
  {
    id: "2022-q2-foster-greatness-ein",
    year: 2022,
    quarter: 2,
    title: "Foster Greatness Gets Its EIN",
    description:
      "The Foster Greatness entity was officially formed in June 2022. The name, the legal entity, and the mission were crystallizing into something separate from DGW.",
    category: "business",
    tags: ["foster-greatness", "nonprofit", "founding"],
    highlight: true,
  },
  {
    id: "2022-q3-kaiser-scrub-portal",
    year: 2022,
    quarter: 3,
    title: "Kaiser Permanente Scrub Portal",
    description:
      "Jordan built a custom scrub ordering portal for Kaiser with 24 department variations, each with unique embroidery and patch decorations. Not just sourcing products anymore. Building enterprise fulfillment pipelines.",
    category: "product",
    tags: ["healthcare", "enterprise", "technical"],
  },

  // ─── 2023 ───
  {
    id: "2023-q2-circle-app-contract",
    year: 2023,
    quarter: 2,
    title: "Foster Greatness App: Contract Signed",
    description:
      "Jordan signed the Circle Plus contract for a white-label mobile app. Real money committed to building a digital community by and for people with lived foster care experience. A designer led UX while Jordan handled product decisions.",
    category: "product",
    tags: ["app", "circle", "community"],
  },
  {
    id: "2023-q3-app-goes-live",
    year: 2023,
    quarter: 3,
    title: "FG App Hits the App Stores",
    description:
      "On August 7, the Foster Greatness app appeared in the Apple and Android stores. The community was no longer just a Circle web page. It was in people's pockets.",
    category: "product",
    tags: ["app", "launch", "mobile"],
    highlight: true,
  },
  {
    id: "2023-q4-findhelp-partnership",
    year: 2023,
    quarter: 4,
    title: "Findhelp Partnership Signed",
    description:
      "The findhelp resource search engine was embedded into the FG app. The app now had a backbone for connecting foster youth to local services across the country.",
    category: "product",
    tags: ["findhelp", "resources", "infrastructure"],
  },
  {
    id: "2023-q4-mass-outreach",
    year: 2023,
    quarter: 4,
    title: "Every Past Participant Gets an Email",
    description:
      "Jordan emailed every former DGW intern, workshop participant, and packout volunteer. The first real user acquisition push. Members started joining.",
    category: "impact",
    tags: ["community", "outreach", "launch"],
  },
  {
    id: "2023-q4-jpmorgan-icons",
    year: 2023,
    quarter: 4,
    title: "JPMorgan Chase Small Business Icons",
    description:
      "DGW was selected as a JPMorgan Chase Community Icon and won its third Real Leaders Impact Award.",
    category: "business",
    tags: ["award", "recognition", "JPMorgan"],
  },

  // ─── 2024 ───
  {
    id: "2024-q1-tax-credit-campaign",
    year: 2024,
    quarter: 1,
    title: "65 Tax Credit Sessions",
    description:
      "The Foster Youth Tax Credit campaign became FG's first true community-driven service initiative. 65 one-on-one meetings, helping young people claim a tax credit many didn't know existed.",
    category: "impact",
    tags: ["tax-credit", "direct-service", "community"],
  },
  {
    id: "2024-q2-fcam-panels",
    year: 2024,
    quarter: 2,
    title: "Foster Care Awareness Month Panels",
    description:
      "FG's first live community events. Three panels in May featuring people with lived experience, nonprofit leaders, and workforce advocates.",
    category: "impact",
    tags: ["panels", "community", "lived-experience"],
  },
  {
    id: "2024-q2-scholarships",
    year: 2024,
    quarter: 2,
    title: "11 Scholarships Awarded",
    description:
      "Working with Scholarships360, FG awarded eleven $500 scholarships timed to Foster Care Awareness Month. Jordan personally sent each notification by name.",
    category: "impact",
    tags: ["scholarships", "education", "community"],
  },
  {
    id: "2024-q3-rett-diagnosis",
    year: 2024,
    quarter: 3,
    title: "Jessie's Rett Syndrome Diagnosis",
    description:
      "In September, Jordan learned his daughter Jessie had Rett Syndrome, a rare genetic disorder. A season of holding both: building a community for young people who deserve belonging while processing a diagnosis that would reshape his family's life.",
    category: "personal",
    tags: ["family", "diagnosis", "resilience"],
  },
  {
    id: "2024-q4-community-800",
    year: 2024,
    quarter: 4,
    title: "FG Community Crosses 1,000 Members",
    description:
      "From 500 members in May to over 1,000 by December. CASA systems, community colleges, and organizations nationwide were sending members. Circle recognized FG as a top 50 community on the platform.",
    category: "impact",
    tags: ["growth", "community", "milestone"],
    highlight: true,
  },

  // ─── 2025 ───
  {
    id: "2025-q1-ai-email-triage",
    year: 2025,
    quarter: 1,
    title: "AI Email Triage Goes Live",
    description:
      "Jordan's email triage agent began processing inbound DGW emails. Classified urgency, action type, and customer information, then routed to the right team member. The operator was becoming an architect.",
    category: "product",
    tags: ["AI", "automation", "operations"],
  },
  {
    id: "2025-q2-resource-search-agent",
    year: 2025,
    quarter: 2,
    title: "Custom Resource Search Agent",
    description:
      "Jordan built a resource search tool on Pydantic AI and FastAPI, pulling programs from the Findhelp ecosystem. Building it in-house cut the cost by 90% compared to the off-the-shelf API deal.",
    category: "product",
    tags: ["AI", "pydantic-ai", "findhelp", "infrastructure"],
    highlight: true,
  },
  {
    id: "2025-q2-staffmark-pipeline",
    year: 2025,
    quarter: 2,
    title: "National Employment Pipeline",
    description:
      "Staffmark Group became FG's first scalable employment partner. For the first time, FG could connect members to jobs nationwide through a single partnership.",
    category: "impact",
    tags: ["employment", "scale", "partnership"],
  },
  {
    id: "2025-q2-vibe-coding",
    year: 2025,
    quarter: 2,
    title: "What Does Vibe Coding Mean?",
    description:
      "On April 1, Jordan asked a team member what 'vibe coding' meant. That question sent him down the rabbit hole: v0, n8n, Lovable, and eventually to Claude Code, Pydantic AI, and Supabase. The tools that would reshape how he built everything.",
    category: "personal",
    tags: ["coding", "AI", "tools", "inflection"],
    highlight: true,
  },
  {
    id: "2025-q3-eatwell-thanksgiving",
    year: 2025,
    quarter: 3,
    title: "Thanksgiving Meal Kits Nationwide",
    description:
      "FG coordinated a nationwide meal kit distribution with EatWell, managing FedEx logistics and shipping timelines to get Thanksgiving meals to foster youth across the country.",
    category: "impact",
    tags: ["community", "direct-service", "holiday"],
  },
  {
    id: "2025-q4-circle-top-50",
    year: 2025,
    quarter: 4,
    title: "Circle Top 50 Community",
    description:
      "Circle recognized Foster Greatness as a top 50 community on the platform. Regular programming was running on cadence: writing workshops, game nights, vision board parties, resource browsing events.",
    category: "impact",
    tags: ["community", "recognition", "platform"],
  },
  {
    id: "2025-q4-findhelp-mcp",
    year: 2025,
    quarter: 4,
    title: "Findhelp MCP Server Deployed",
    description:
      "Launched an MCP server for SMS-based resource search, powered by the Findhelp API. Members could text a query and get matched to local services. Infrastructure built in-house, not bought off the shelf.",
    category: "product",
    tags: ["AI", "MCP", "findhelp", "infrastructure"],
  },
  {
    id: "2025-q4-2000-members",
    year: 2025,
    quarter: 4,
    title: "FG Passes 2,000 Members",
    description:
      "Foster Greatness crossed 2,000 members in December. From zero to two thousand in just over two years. CASA systems, colleges, and organizations nationwide were the growth engine. The community was no longer an experiment.",
    category: "impact",
    tags: ["growth", "community", "milestone"],
    highlight: true,
  },
];
