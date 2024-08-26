import Header from "../components/Layout/Header"
import { ClientPlans } from "../components/Dashboard/adminLayouts/Investments"
import Footer from "../components/Layout/Footer"
import FAQS from "../components/Layout/FAQS"

const OVERFLOW = "visible"

const InvestmentPlans = () => {
  return (
    <div className="relative pt-[60px]">
      <Header />
      <div className={`relative w-full h-full overflow-${OVERFLOW} py-[30px] mt-[50px] px-10 flex flex-col items-center bg-[#fbfbfb] justify-start gap-[30px]`}>
      <ClientPlans OVERFLOW={OVERFLOW} />
      </div>
      <FAQS/>
      <Footer />
    </div>
  )
}

export default InvestmentPlans
