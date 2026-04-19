import AboutPagePublic from "@/components/Pages/AboutUsPublic/AboutUsPublicPage";


export const metadata = {
  title: "Who We Are",
  description:
    "Learn about A-Line Brands — our team, philosophy, and how we help brands grow through creative thinking and strategic execution in Bangladesh.",
  alternates: { canonical: "https://www.a-linebrands.com/about" },
};

const page = () => {
  return (
    <div>
      <AboutPagePublic />
    </div>
  );
};

export default page;
