import LandingContainer from "@/components/Landing/LandingContainer";

export const metadata = {
  title: "A-Line Brands | Creative Branding & Marketing Agency in Bangladesh",
  description:
    "A-Line is a Dhaka-based creative branding and digital marketing agency trusted by 48+ clients including Bata, Robi, British Council, and Standard Chartered.",
  alternates: { canonical: "https://www.a-linebrands.com" },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50  dark:bg-black">
      <h1 className="sr-only">
        A-Line Brands — Creative Branding & Marketing Agency in Bangladesh
      </h1>
      <LandingContainer />
    </div>
  );
}
