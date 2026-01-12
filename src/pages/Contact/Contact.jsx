import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Navbar from "../../components/Navbar/Navbar";
import PageHeading from "../../components/PageHeading/PageHeading";

export default function Contact() {
  return (
    <>
      <Navbar />
      <PageHeading title={'conatct section'}  lineColor={'line-color'} />
      <Form/>
      <Footer />
    </>
  );
}
