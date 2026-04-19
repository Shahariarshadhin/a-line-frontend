import { PortfolioPublic } from "@/components/Pages/Portfolio/PortfolioPublic";


export const metadata = {
  title: "Portfolio",
  description:
    "Browse A-Line's award-winning campaigns for Bata, British Council, Grameenphone, Standard Chartered, and 40+ more top brands.",
  alternates: { canonical: "https://www.a-linebrands.com/portfolio" },
};



export default function Page() {
  return (
    <div>
      <PortfolioPublic />
    </div>
  )
}