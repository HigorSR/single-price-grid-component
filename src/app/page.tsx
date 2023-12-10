import JoinOurCommunity from "@/components/join-our-community"
import MonthlySubscription from "@/components/monthly-subscription"
import WhyUs from "@/components/why-us"

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-Light-Gray">
      <div className="h-screen"></div>
      <div className="w-[320px] my-10 shadow-2xl md:w-[610px]">
        <JoinOurCommunity />

        {/* Responsive Desktop */}
        <div className="md:flex">
          <MonthlySubscription />

          <WhyUs />
        </div>
      </div>
    </main>
  )
}
