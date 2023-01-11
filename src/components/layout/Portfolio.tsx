import { useStore } from "@nanostores/preact";
import { portfolioStore, PortoflioStoreValues } from "../../store/PortfolioStore";
import SwitchButton from "./Portfolio/SwitchButton";
import Projects from "./Portfolio/Projects";
import Skills from "./Portfolio/Skills";

const Portfolio = () => {

    const store = useStore(portfolioStore);

    return (
        <div 
            className="max-w-lg mx-auto pt-9 pb-5
                md:max-w-none md:pt-12"
        >
            <SwitchButton/>
            {
                store === PortoflioStoreValues.projects ? <Projects/> : <Skills/>
            }
        </div>
    )
}
export default Portfolio;