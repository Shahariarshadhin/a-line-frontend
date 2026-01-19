const BritishCouncilIELTSBlog = () => (
    <div className="space-y-8">
      <div
        className="w-full h-96 bg-cover bg-center mb-8"
        style={{ backgroundImage: "url('/assets/Blog/IELTS-on-computer.jpg')" }}
      />
  
      <div className="prose max-w-none space-y-6 text-gray-700 leading-relaxed">
      
  
        <p>
          In the high-stakes world of standardised testing, timing and user
          experience can make or break a conversion. For prospective IELTS
          candidates in Bangladesh, the British Council website offered a reliable
          test booking experience — but with a critical flaw. Test dates were only
          shown at the fourth step of the booking journey, significantly delaying
          visibility and planning for users.
        </p>
        <p>
          This not only affected the user experience, but also led to inefficient
          ad spending — sending traffic to a journey that didn&apos;t deliver value
          upfront. We saw an opportunity to make the system smarter, leaner, and
          far more performance-driven.
        </p>
  
        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          The Objective: Make Test Dates Visible, and Make Every Impression Count
        </h3>
        <p>
          Our key goal was to shorten the journey between ad exposure and action.
          Instead of relying on a delayed reveal of test dates, we aimed to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Promote available IELTS test dates upfront in ads to improve planning
            and booking readiness.
          </li>
          <li>
            Automate updates in real-time, eliminating the need for constant
            manual intervention.
          </li>
          <li>Reduce irrelevant traffic and cut media wastage.</li>
          <li>
            Drive higher-quality clicks that convert into confirmed test bookings.
          </li>
        </ul>
        <p>
          To do this, we needed a solution that was adaptive, real-time, and scalable — something that static Facebook creatives simply couldn&apos;t offer.
        </p>
  
        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          The Strategic Insight: Think Like an eCommerce Brand
        </h3>
        <p>
          Rather than solving this through traditional campaign tweaks, we decided
          to change the entire creative and delivery approach. Static ads were out
          of the question — they would&apos;ve required frequent manual updates,
          resubmissions, and delayed approval times, which is unsustainable for
          time-sensitive information like test dates.
        </p>
        <p>Instead, we borrowed from eCommerce strategy.</p>
        <p>
          Facebook Catalog Ads — usually used by retailers to promote dynamic inventories like shoes or electronics — had the perfect architecture. We asked ourselves:
        </p>
        <blockquote className="border-l-4 border-black pl-6 py-4 my-8 italic text-xl">
          What if IELTS test dates were treated like products?
        </blockquote>
        <p>
          This core idea became the foundation for a completely automated, data-driven performance campaign.
        </p>
  
        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Tactical Execution: Building the Engine Behind the Campaign
        </h3>
        <p>Here&apos;s how we brought it all to life:</p>
  
        <h4 className="text-xl font-semibold text-black mt-6 mb-3">
          1. Custom Product Catalog for IELTS Test Dates
        </h4>
        <p>
          We created a custom Facebook Catalog to list IELTS test dates as product SKUs. Each listing included:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Location (Dhaka, Sylhet, Chittagong)</li>
          <li>Available date</li>
          <li>Booking deadline</li>
          <li>A unique redirect link to the booking page</li>
        </ul>
  
        <h4 className="text-xl font-semibold text-black mt-6 mb-3">
          2. Google Sheet as a Live Data Feed
        </h4>
        <p>
          Rather than relying on static uploads or API integrations (which can be resource-intensive), we opted for a real-time Google Sheet, which acted as a dynamic feed source. This allowed us to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Add or remove test dates instantly</li>
          <li>Reflect fully booked or expired dates within minutes</li>
          <li>Sync changes automatically to live ads without campaign disruption</li>
        </ul>
  
        <h4 className="text-xl font-semibold text-black mt-6 mb-3">
          3. Dynamic Templates in Facebook Ads
        </h4>
        <p>
          We built flexible ad templates that pulled in test centre name, test date, and a custom call-to-action like:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>&quot;Book Now — Seats Filling Fast in Dhaka&quot;</li>
          <li>&quot;New IELTS Date Available in Sylhet – Don&apos;t Miss Out&quot;</li>
        </ul>
        <p>
          These creatives were fully dynamic, ensuring freshness and relevance — every time someone saw them.
        </p>
  
        <h4 className="text-xl font-semibold text-black mt-6 mb-3">
          4. Geo-Targeting & Audience Segmentation
        </h4>
        <p>
          We layered the campaign with geographically targeted audiences based on proximity to test centres, combined with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Lookalike audiences of previous IELTS bookers</li>
          <li>Retargeting of website visitors who abandoned the booking process</li>
          <li>Interest-based targeting for students, professionals, and visa aspirants</li>
        </ul>
        <p>
          This allowed us to deliver hyper-personalised ads to the right users, in the right region, at the right time — improving both cost-efficiency and performance.
        </p>
  
        <h4 className="text-xl font-semibold text-black mt-6 mb-3">
          5. Always-On Optimisation
        </h4>
        <p>To ensure continued performance:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>We monitored catalog feed health daily</li>
          <li>A/B tested ad formats (carousel vs. single image)</li>
          <li>Adjusted bidding strategies for high-performing cities</li>
          <li>Paused or adjusted campaigns based on booking volume and date urgency</li>
        </ul>
  
        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Results & Impact: Measurable Wins Across the Funnel
        </h3>
        <p>
          This approach didn&apos;t just improve workflow — it delivered measurable business impact:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Real-time automation reduced the need for ongoing manual ad updates by
            100%
          </li>
          <li>
            Higher quality traffic, with users more likely to convert since they
            saw test dates before clicking.
          </li>
          <li>
            Better media efficiency, as irrelevant traffic dropped significantly.
          </li>
          <li>
            Positive internal feedback from the British Council Bangladesh team, who appreciated both the innovation and operational ease.
          </li>
        </ul>
        <p>
          Most impressively, the campaign&apos;s success led to the adoption of this
          strategy by the British Council India team, with Havas Digital Bangladesh supporting the regional rollout — a strong vote of confidence in both the concept and its execution.
        </p>
  
        <h3 className="text-2xl font-bold text-black mt-8 mb-4">
          Key Takeaway: Innovation Doesn&apos;t Always Mean Reinvention
        </h3>
        <p>
          What made this campaign effective wasn&apos;t flashy technology or a massive budget — it was the strategic repurposing of an existing tool, paired with deep understanding of user behaviour and business needs.
        </p>
        <p>
          By treating test dates like products, and bringing eCommerce-style thinking into the education marketing space, we created a campaign that was:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Scalable</li>
          <li>Real-time</li>
          <li>Media efficient</li>
        </ul>
        <p className="font-semibold text-gray-900">
          Sometimes, the smartest moves in digital marketing are less about reinventing the wheel and more about using the right wheel in the right way.
        </p>
      </div>
    </div>
  );
  
  export default BritishCouncilIELTSBlog;