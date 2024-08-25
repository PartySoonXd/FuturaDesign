import PageLayout from "./layout"
import Intro from "../app/ui/Home/Intro/Intro.jsx"
import About from "@/app/ui/Home/About/About"
import Portfolio from "@/app/ui/Home/Portfolio/Portfolio"
import Services from "@/app/ui/Home/Services/Services"
import Contacts from "@/app/ui/Home/Contacts/Contacts"
import { useSearchParams } from "next/navigation"

const HomePage = () => {
    const searchParams = useSearchParams()
    const element = searchParams.get("element")
    
    return (
        <PageLayout>
            <Intro/>
            <div className="about-and-portfolio-container" style={{display: "flex", margin: '0 -60px', flexWrap: "wrap", overflow: "hidden"}}>
                <About/>
                <Portfolio/>
            </div>
            <Services element={element}/>
            <Contacts element={element}/>
        </PageLayout> 
    )
}

export default HomePage