import { portfolioStore, PortoflioStoreValues } from "../../../store/PortfolioStore";
import { useStore } from "@nanostores/preact";
import Projects from "./Projects";
import Skills from "./Skills";

const Content = () => {

    // Listen changes from store.
    const StoreValue = useStore(portfolioStore);


    return StoreValue === PortoflioStoreValues.projects ? <Projects/> : <Skills/>
}
export default Content