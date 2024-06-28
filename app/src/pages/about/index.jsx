import PageTitle from "@/app/lib/PageTitle/PageTitle"
import PageLayout from "../layout"
import Approach from "@/app/ui/About/Approach/Approach"
import Team from "@/app/ui/About/Team/Team"

const AboutPage = () => {
    return (
        <PageLayout>
            <PageTitle title="About us"/>
            <Approach/>
            <Team/>
        </PageLayout>
    )
}

export default AboutPage