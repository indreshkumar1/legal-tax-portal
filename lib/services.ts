import type { PracticeIconName } from "@/components/icons";

export type PracticeCategory = "Law & Legal" | "SEBI & Capital Markets" | "Taxation" | "Advisory";

export type PracticeArea = {
  number: string;
  title: string;
  category: PracticeCategory;
  subtitle: string;
  details: string[];
  icon: PracticeIconName;
};

export const practiceCategories: ("All" | PracticeCategory)[] = ["All", "Law & Legal", "SEBI & Capital Markets", "Taxation", "Advisory"];

export const practiceAreas: PracticeArea[] = [
  {
    number: "01",
    title: "Business Structuring & Registration",
    category: "Law & Legal",
    subtitle: "Corporate Foundation & Entity Setup",
    details: [
      "Incorporation of Companies, LLPs, Partnerships, Trusts, and Societies in India",
      "Advisory on entity structuring, regulatory approvals, and FEMA compliance"
    ],
    icon: "building"
  },
  {
    number: "02",
    title: "Corporate Secretarial & Legal Support",
    category: "Law & Legal",
    subtitle: "Governance, Board Advisory & Compliance",
    details: [
      "Support for M&A, buybacks, and restructuring events",
      "Compliance for group entities, JVs, subsidiaries, and governance advisory",
      "Secretarial support for Board and General Meetings",
      "Legal review of shareholder, employment & commercial contracts",
      "Drafting and vetting of board/shareholder resolutions, agreements, notices & policies",
      "Preparation and filing of forms / returns with MCA, ROC & other authorities",
      "Changes in directors, capital structure, registered office, etc.",
      "Maintenance of statutory registers, records, and minutes",
      "CSR compliance and reporting under Section 135 of the Companies Act, 2013",
      "Buyback of shares and reduction of share capital advisory"
    ],
    icon: "scale"
  },
  {
    number: "03",
    title: "Corporate Restructuring",
    category: "Law & Legal",
    subtitle: "Mergers, Demergers & Amalgamations",
    details: [
      "Structuring and execution of mergers, demergers, and amalgamations under Sections 230–232 of the Companies Act, 2013",
      "Coordination of NCLT scheme approvals, creditor/shareholder meetings, and regulatory filings"
    ],
    icon: "merge"
  },
  {
    number: "04",
    title: "Oppression & Mismanagement (O&M)",
    category: "Law & Legal",
    subtitle: "Dispute Resolution & NCLT Representation",
    details: [
      "Representation in petitions under Sections 241–242 of the Companies Act, 2013 for relief against oppression and mismanagement before the NCLT",
      "Advisory and strategic support in shareholder disputes and minority-shareholder protection matters"
    ],
    icon: "shield"
  },
  {
    number: "05",
    title: "Tax Advisory & Compliance",
    category: "Taxation",
    subtitle: "Direct & Indirect Tax Architecture",
    details: [
      "Income Tax and GST advisory, planning, and filings",
      "Representation before tax and appellate authorities"
    ],
    icon: "receipt"
  },
  {
    number: "06",
    title: "Labour & Employment Law Compliance",
    category: "Law & Legal",
    subtitle: "Workforce Regulations & HR Audits",
    details: [
      "PF, ESI, Shops & Establishment Act compliance",
      "Advisory on employee benefits and HR documentation"
    ],
    icon: "users"
  },
  {
    number: "07",
    title: "Intellectual Property Rights (IPR)",
    category: "Law & Legal",
    subtitle: "Trademarks, Copyrights & Patents",
    details: [
      "Filing and protection of trademarks, copyrights, patents, and designs",
      "IP portfolio management in India and internationally"
    ],
    icon: "fingerprint"
  },
  {
    number: "08",
    title: "FEMA & RBI Advisory",
    category: "Advisory",
    subtitle: "Cross-Border Remittances & FDI",
    details: [
      "FDI structuring, foreign remittance compliance, RBI filings",
      "Advisory under FEMA and allied regulations"
    ],
    icon: "globe"
  },
  {
    number: "09",
    title: "SEBI (LODR) Regulations",
    category: "SEBI & Capital Markets",
    subtitle: "Continuous Listing Compliance",
    details: [
      "Continuous compliance for listed entities: financial disclosures, corporate governance report, and regulatory filings with stock exchanges",
      "Board & committee composition advisory (Audit Committee, NRC, Stakeholders' Relationship Committee)",
      "Related Party Transaction disclosures, policy drafting, and Secretarial Audit / Annual Secretarial Compliance Report support"
    ],
    icon: "chart"
  },
  {
    number: "10",
    title: "SEBI (ICDR) Regulations",
    category: "SEBI & Capital Markets",
    subtitle: "Capital Issuances, IPOs & ESOPs",
    details: [
      "Advisory support for IPOs, rights issues, preferential allotments, and QIPs",
      "Compliance under SEBI (Share Based Employee Benefits & Sweat Equity) Regulations for ESOP/ESPS schemes"
    ],
    icon: "briefcase"
  },
  {
    number: "11",
    title: "SEBI (SAST) Regulations",
    category: "SEBI & Capital Markets",
    subtitle: "Takeover Code & Open Offers",
    details: [
      "Advisory on open offers, creeping acquisition limits, and takeover code compliance",
      "Shareholding disclosures under Regulations 29/30/31 and other substantial-acquisition filings"
    ],
    icon: "layers"
  },
  {
    number: "12",
    title: "SEBI (PIT) Regulations",
    category: "SEBI & Capital Markets",
    subtitle: "Insider Trading & SDD Compliance",
    details: [
      "Code of Conduct implementation, trading window management, and Structured Digital Database (SDD) compliance",
      "Advisory on disclosure obligations for designated persons and connected entities"
    ],
    icon: "eyeOff"
  },
  {
    number: "13",
    title: "Capital Market Services",
    category: "SEBI & Capital Markets",
    subtitle: "Delisting & Investor Grievances",
    details: [
      "Delisting Regulations advisory and Depositories & Participants compliance",
      "Investor grievance redressal support, including SCORES platform coordination"
    ],
    icon: "clipboard"
  },
  {
    number: "14",
    title: "Adjudication & Compounding",
    category: "Law & Legal",
    subtitle: "Regulatory Offence Settlement",
    details: [
      "Representation in adjudication proceedings for procedural defaults under the Companies Act, FEMA, and SEBI regulations",
      "Compounding of offences before the Regional Director, NCLT, RBI, and other competent authorities"
    ],
    icon: "stamp"
  },
  {
    number: "15",
    title: "Liaisoning Services",
    category: "Advisory",
    subtitle: "Regulatory Body Coordination",
    details: [
      "Liaisoning with ROC, RD, MCA, SEBI, Stock Exchanges, RBI and other regulatory bodies",
      "End-to-end follow-up for approvals, registrations, and regulatory correspondence"
    ],
    icon: "link"
  },
  {
    number: "16",
    title: "Due Diligence & Governance Audits",
    category: "Advisory",
    subtitle: "Investor & Regulatory Health Checks",
    details: [
      "Legal due diligence and documentation audits",
      "Corporate governance health checks for investors and regulators"
    ],
    icon: "search"
  },
  {
    number: "17",
    title: "Collaborative Solutions",
    category: "Advisory",
    subtitle: "Multi-Disciplinary Professional Tie-ups",
    details: [
      "Strategic tie-ups with legal, tax, and financial professionals",
      "Scalable solutions for evolving business needs"
    ],
    icon: "network"
  }
];
