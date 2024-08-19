import Header from "../components/Layout/Header"
import { ClientPlans } from "../components/Dashboard/adminLayouts/Investments"
import Footer from "../components/Layout/Footer"

const OVERFLOW = "visible"
const LOGGED_IN = false

const InvestmentPlans = () => {
  return (
    <div className="relative pt-[60px]">
      <Header />
      <div className={`w-full h-full overflow-${OVERFLOW} p-[30px] flex flex-col items-center bg-[#f1f1f1] justify-start gap-[30px]`}>
      <ClientPlans OVERFLOW={OVERFLOW} />
      </div>
      <Footer />
    </div>
  )
}

export default InvestmentPlans
