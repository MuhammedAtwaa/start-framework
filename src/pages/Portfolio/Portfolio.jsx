import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PageHeading from "../../components/PageHeading/PageHeading";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";

export default function Portfolio() {
  return <>
  <Navbar/>
  <PageHeading title={'portfolio component'} lineColor={'line-color'} />
  <PortfolioCard />
  <Footer/>
  </>
}
