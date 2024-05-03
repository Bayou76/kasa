import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Banner from "../../components/Banner/Banner"
import HomePageCard from "../../components/HomePageCard/HomePageCard"

function Home(){
    return (
        <div>
            <Header/>
            <Banner/>
            <HomePageCard/>
            <Footer/>
        </div>
    )
}

export default Home