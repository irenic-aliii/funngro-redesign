export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "Earn",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Income ladder", href: "/how-it-works#income-ladder" },
      { label: "Task board", href: "/how-it-works#journey" },
      { label: "FAQ", href: "/how-it-works#faq" },
    ],
  },
  {
    title: "Brands",
    links: [
      { label: "Partner with Funngro", href: "/#" },
      { label: "Campus campaigns", href: "/#" },
      { label: "Success stories", href: "/#testimonials" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/#" },
      { label: "Careers", href: "/#" },
      { label: "Contact", href: "/#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", href: "/#" },
      { label: "Privacy policy", href: "/#" },
      { label: "Refund policy", href: "/#" },
    ],
  },
];

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "YouTube", href: "https://youtube.com" },
];
