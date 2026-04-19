import BlogSystem from "@/components/Pages/BlogsPublic/BlogsPublicPage";


export const metadata = {
  title: "Blog",
  description:
    "Insights on branding, digital marketing, and creative strategy from the A-Line team in Dhaka, Bangladesh.",
  alternates: { canonical: "https://www.a-linebrands.com/blogs" },
};

const page = () => {
  return (
    <div>
      <BlogSystem />
    </div>
  );
};

export default page;
