import Header from "./Header";
import Cards from "./Cards";
import Trend from "./Trend";
import Footer from "./Footer";

const Main = () =>{
    return(
        <main className="main">
            <Header title="Overwiew" />
            <Cards />
            <Trend />
            <Footer />
        </main>
    )
}
export default Main;