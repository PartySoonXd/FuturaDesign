
import PageLayout from "../layout"
import PageTitle from "@/app/lib/PageTitle/PageTitle"
import CategorySelector from "@/app/ui/Portfolio/CategorySelector/CategorySelector"
import PortfolioMasonry from "@/app/ui/Portfolio/Images/PortfolioImages"

const PortfolioPage = () => {
    return (
        <PageLayout>
            <PageTitle title="Portfolio"/>
            <CategorySelector/>
            <PortfolioMasonry/>
        </PageLayout>
    )
}

export default PortfolioPage