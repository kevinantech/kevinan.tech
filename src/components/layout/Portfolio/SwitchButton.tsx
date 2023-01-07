import { portfolioStore, PortoflioStoreValues } from '../../../store/PortfolioStore';
import { useStore } from "@nanostores/preact";

const PortfolioSwitchButton = () => {
    const store = useStore(portfolioStore);
    const handleProjects = () => { portfolioStore.set(PortoflioStoreValues.projects) }
    const handleSkills = () => { portfolioStore.set(PortoflioStoreValues.skills) }

    return (
        <div 
            className="flex p-2 rounded-2xl bg-white mb-10
                md:p-4 md:mb-20"
        >
            <button 
                className="flex-1 py-4 rounded-xl text-base font-medium text-neutral-900 bg-neutral-300
                    md:py-6 md:text-xl"
                onClick={() => handleProjects()}
            >Proyectos</button>
            <button 
                className="flex-1 py-4 rounded-xl text-base font-medium text-neutral-900 bg-white
                    md:py-6 md:text-xl"
                onClick={() => handleSkills()}
            >Habilidades</button>
        </div>
    )
}
export default PortfolioSwitchButton;