import { portfolioStore, PortoflioStoreValues } from "../../../store/PortfolioStore";
import { useStore } from "@nanostores/preact";
import Projects from "./Projects";
import Skills from "./Skills";

const Content = () => {

    // Listen changes from store.
    const store = useStore(portfolioStore);
    return store === PortoflioStoreValues.projects ? <Projects/> : <Skills/>
}
export default Content;