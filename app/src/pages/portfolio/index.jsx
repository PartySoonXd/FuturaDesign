
import PageLayout from "../layout"
import PageTitle from "@/app/lib/PageTitle/PageTitle"
import Portfolio from "@/app/ui/Portfolio/Portfolio"

const PortfolioPage = () => {
    return (
        <PageLayout>
            <PageTitle title="Portfolio"/>
            <Portfolio/>
        </PageLayout>
    )
}

export default PortfolioPage