import HomeContainer from "@/components/Pages/Home/HomeContainer"


export const metadata = {
  title: "Home",
  description:
    "A-Line is a bold branding and marketing agency in Dhaka. We think, plan, create, and deliver measurable brand results for 48+ industry leaders.",
  alternates: { canonical: "https://www.a-linebrands.com/home" },
};


const page = () => {
  return (
    <div>
      <HomeContainer
       />
    </div>
  )
}

export default page
 