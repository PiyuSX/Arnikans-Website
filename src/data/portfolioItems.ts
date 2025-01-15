interface PortfolioItem {
  domain: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    domain: 'https://piyux.xyz',
    image: '/images/portfolio/piyux.png',
  },
  {
    domain: 'https://another-website.com',
    image: '/images/portfolio/another-website.png',
  },
  // Add more items as needed
];

export default portfolioItems;