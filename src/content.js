export const site = {
  name: 'Reuben Tay',
  roles: ['Cybersecurity,', 'Cloud Architecture', '& Software Engineering'],
  tagline: 'CS @ NTU · I build secure, observable cloud systems, and turn hard problems into wins.',
  email: 'reubentaykk@gmail.com',
  linkedin: 'https://www.linkedin.com/in/reubentay/',
  github: 'https://github.com/firepryo',
  secondary: 'https://reubentaykk.wixsite.com/reuben',
}

export const about = {
  short:
    "Reuben is a 2nd-year Computer Science undergraduate at NTU and an aspiring Cybersecurity / Cloud Architect Engineer. He's built production observability at CSIT, placed 1st in a Google hardware CTF, and ships AI-powered products, pairing cloud-and-security depth with a builder's love of hackathons.",
  full: [
    "I'm Reuben, a 2nd Year Computer Science undergraduate at Nanyang Technological University and an aspiring Cybersecurity / Cloud Architect Engineer. My path runs from a Diploma in Computer Engineering and a CSIT cloud infrastructure internship, where I built production Prometheus and Grafana observability that cut incident response time and cloud costs, through national service as a Section 2IC leading a team of seven, to a current Salesforce analyst internship and a run of hackathons and CTFs, including a 1st-place finish at a Google hardware Capture-The-Flag.",
    'Inspired by the belief that "you can never get too comfortable," I keep pushing into new territory: cloud architecture, security, and AI-powered products. Outside tech, I lead orientation for 1,000+ freshmen, program large-scale hall events, play various sports, and consistently volunteer in my community for over a decade and counting.',
  ],
  stats: [
    { value: '1st', label: 'Google Hardware CTF · 20 teams' },
    { value: '30%', label: 'Cloud cost reduction @ CSIT' },
    { value: '10+', label: 'Projects built' },
    { value: '20+', label: 'Hackathons & CTFs, and counting' },
    { value: '1,000+', label: 'Freshmen led in orientation' },
  ],
  education: [
    {
      school: 'Nanyang Technological University',
      degree: 'BComp (Hons), Computer Science',
      period: '2025–2029 (expected)',
      detail: 'OOP (Java) · C & C++ · Data Structures & Algorithms (Python)',
    },
    {
      school: 'Singapore Polytechnic',
      degree: 'Diploma in Computer Engineering',
      period: '2020–2023',
      detail: 'CSIT Diploma Scholarship · AWS Cloud Architecting · Network Fundamentals',
    },
  ],
}

export const experience = [
  {
    id: 'EXP-04',
    org: 'CrimsonWorks Solutions',
    role: 'Salesforce CRM System Analyst (Intern)',
    period: 'May 2026–Present',
    location: 'Singapore · Hybrid',
    points: [
      'Configured 50+ custom objects, workflows and validation rules for scalable Salesforce Cloud solutions.',
      'Cleansed 100+ records with Data Loader / Excel ahead of migration; resolved 50+ bugs in UAT.',
      'Automated leave/off tracking for 30+ staff via Google Apps Script.',
    ],
    tags: ['Salesforce', 'Data Loader', 'Apps Script'],
    active: true,
  },
  {
    id: 'EXP-03',
    org: 'Samsung Electronics Singapore',
    role: 'Campus Ambassador (Contract)',
    period: 'Nov 2025–Feb 2026',
    location: 'Hybrid',
    points: [
      'Produced 1 Instagram post + 7 stories (2,000+ views) with the marketing team.',
      'Drove 20+ education-store signups through a campus activation.',
    ],
    tags: ['Marketing', 'Content'],
  },
  {
    id: 'EXP-02',
    org: 'Singapore Armed Forces',
    role: 'Section 2IC · 3rd Battalion Singapore Guards',
    period: 'Dec 2023–Jul 2025',
    location: 'Singapore',
    points: [
      'Co-led 7 personnel in high-pressure operations with 100% equipment and operational readiness.',
      'Executed mission plans with senior command. Leadership and composure under pressure.',
    ],
    tags: ['Leadership', 'Operations'],
  },
  {
    id: 'EXP-01',
    org: 'Centre for Strategic Infocomm Technologies (CSIT)',
    role: 'Cloud Infrastructure Engineer Intern',
    period: 'Mar 2022–Aug 2022',
    location: 'Singapore',
    points: [
      'Built production Prometheus + Grafana dashboards for microservice observability (99.9% reliability).',
      'Automated Grafana alerts that cut MTTR by 20% and cloud operational costs by 30%.',
      'Received a formal letter of recommendation for technical excellence.',
    ],
    tags: ['Prometheus', 'Grafana', 'Cloud', 'Security'],
  },
]

export const projects = [
  {
    id: 'PRJ-01',
    title: 'Google Hardware CTF',
    subtitle: 'Capture-The-Flag · Google Data Centre',
    year: '2025',
    award: '1st place · 20 teams',
    description:
      'A hardware CTF simulating real Google Data Centre operations. Diagnosed and resolved infrastructure and security challenges under time pressure.',
    tags: ['Hardware', 'Security', 'CTF', 'Systems'],
    links: [],
  },
  {
    id: 'PRJ-02',
    title: 'Stratify',
    subtitle: 'AI-Powered Gamified Career Platform · NTU Techfest',
    year: '2026',
    description:
      'A gamified "career command centre": React + TypeScript + Gemini API for real-time résumé analysis and mock interviews, with streaks, points and live job-market visualisations.',
    tags: ['React', 'TypeScript', 'Gemini API', 'Data Viz'],
    links: [
      { label: 'Live', url: 'https://ai.studio/apps/drive/1sPfBZ84mTdGGsELGg358yRPkUmwFxAKz?fullscreenApplet=true' },
      { label: 'GitHub', url: 'https://github.com/firepryo/TECHFEST-2026-TEAM-4-STRATIFY' },
    ],
  },
  {
    id: 'PRJ-03',
    title: 'AWS Cloud Architecting',
    subtitle: 'Full-Stack Cloud Deployment · SP PBIL',
    year: '2022–23',
    description:
      'Automated infra provisioning with CloudFormation (EC2 + RDS); high-availability MySQL, private subnets + security groups, dynamic config via Parameter Store.',
    tags: ['AWS', 'CloudFormation', 'EC2', 'RDS', 'Security'],
    links: [],
  },
  {
    id: 'PRJ-04',
    title: 'Combat Arena',
    subtitle: 'Turn-Based Battle Game · NTU SC2002',
    year: '2025',
    description:
      'A Java 17 game with one shared engine driving both a CLI and a Swing GUI: full SOLID adherence, Template Method / Strategy / Observer / Bridge patterns, multithreaded GUI.',
    tags: ['Java', 'Swing', 'OOP', 'Design Patterns'],
    links: [{ label: 'GitHub', url: 'https://github.com/firepryo/SC2002-Combat-Arena-Group-5-FCS2' }],
  },
  {
    id: 'PRJ-05',
    title: 'Lumina',
    subtitle: 'Quick-Meet Companion App · Beyond Binary Hackathon',
    year: '2026',
    description:
      'Low-pressure micro-meetup matching for people with social anxiety: activity + time matching with filters and a safety layer of verified profiles and check-ins.',
    tags: ['React', 'TypeScript', 'Gemini API'],
    links: [{ label: 'GitHub', url: 'https://github.com/firepryo/Beyond_Binary_2026_Lumina' }],
  },
]

// Full public repo index (rendered under "Also built"). Featured work above
// is repeated here so every GitHub project is reachable in one place.
export const alsoBuilt = [
  { name: 'Stratify · AI-Powered Career Platform', url: 'https://github.com/firepryo/TECHFEST-2026-TEAM-4-STRATIFY' },
  { name: 'Combat Arena · Turn-Based Battle Game', url: 'https://github.com/firepryo/SC2002-Combat-Arena-Group-5-FCS2' },
  { name: 'Lumina · Quick-Meet Companion App', url: 'https://github.com/firepryo/Beyond_Binary_2026_Lumina' },
  { name: 'MindfulHacks · Gamified Mental-Health Android App', url: 'https://github.com/firepryo/MindfulHacks-2022' },
  { name: 'Food Limits · Food-Waste Marketplace (Android)', url: 'https://github.com/firepryo/Food-Limits-Android-Studio-' },
  { name: '3rd-Year Machine Learning & AI', url: 'https://github.com/firepryo/3rdYrMLAI' },
  { name: 'Data Structures & Algorithms', url: 'https://github.com/firepryo/DataStructAlgo' },
  { name: 'Python Mini-Projects', url: 'https://github.com/firepryo/Python-Mini' },
  { name: 'Google IT Automation with Python · Practice Files', url: 'https://github.com/firepryo/it-cert-automation-practice' },
]

export const skills = [
  { group: 'Languages', items: ['Java', 'C / C++', 'Python', 'SQL', 'JavaScript / TypeScript', 'PowerShell', 'HTML / CSS'] },
  {
    group: 'Cloud & Infrastructure',
    items: ['AWS (CloudFormation, EC2, RDS, VPC)', 'Kubernetes', 'Docker & Containerisation', 'Windows Server Management', 'GCP / Azure', 'Firebase'],
  },
  { group: 'Databases', items: ['MSSQL', 'SQL', 'NoSQL', 'PostgreSQL / MySQL / MongoDB'] },
  { group: 'Networking & Security', items: ['Cisco Packet Tracer', 'DNS · DHCP · NAT', 'IPv4 Subnetting', 'WAN/LAN', 'CTF'] },
  { group: 'Observability', items: ['Prometheus', 'Grafana'] },
  { group: 'Frameworks', items: ['React', 'Node.js / Express', 'Spring Boot', 'TensorFlow / PyTorch', 'scikit-learn'] },
  { group: 'Data & Tooling', items: ['Git / GitHub', 'Linux / Bash', 'Jira', 'Figma', 'Salesforce'] },
]

export const certifications = [
  { name: 'Google AI Essentials', year: '2026' },
  { name: 'Google Cybersecurity', year: '2026' },
  { name: 'Google Digital Marketing & E-Commerce', year: '2026' },
  { name: 'Google Advanced Data Analytics', year: '2026' },
  { name: 'Google Business Intelligence', year: '2026' },
  { name: 'Salesforce Certified Platform Administrator', year: 'est. Jul 2026', pending: true },
  { name: '10-Year Long Service Award · CDAC', year: '2013–Present' },
  { name: 'AWS Certified Cloud Practitioner', year: '2022' },
  { name: 'Google IT Automation with Python', year: '2022' },
  { name: 'Google Project Management', year: '2022' },
  { name: 'Google UX Design', year: '2022' },
  { name: 'Google IT Support', year: '2022' },
  { name: 'CSIT Diploma Scholarship', year: '2021–2023' },
  { name: 'And more · currently pursuing AWS Skill Builder badges', year: 'Ongoing', pending: true },
]

export const leadership = [
  { role: 'Chief Group Leader', org: 'CCDS Transitional Orientation Programme', detail: 'Directs 10 orientation leaders onboarding 1,000+ freshmen.' },
  { role: 'Chief Programmer (Event Logic)', org: 'Hall 6 Night Cycling', detail: 'Event flow + gamification mechanics for 200+ participants.' },
  { role: 'Exco Member', org: 'CDAC Youth Club', detail: 'Jan 2026–Present · youth community programmes and leadership.' },
  { role: 'Class Chairperson', org: 'Singapore Polytechnic', detail: '2020–2021 · represented and coordinated the cohort.' },
  { role: 'Sports & Clubs', org: 'Hall 6 · NTU', detail: 'Ultimate frisbee, floorball, volleyball · Hall 6 JCRC Subcommittee.' },
]
