import { portfolioStore, PortoflioStoreValues } from '../../../store/PortfolioStore';
import { useStore } from "@nanostores/preact";

const PortfolioSwitchButton = () => {
    const store = useStore(portfolioStore);
    const handleProjects = () => { portfolioStore.set(PortoflioStoreValues.projects) }
    const handleSkills = () => { portfolioStore.set(PortoflioStoreValues.skills) }

    //TODO: Add dark theme background
    const ButtonActiveStyle: string = "bg-[#D7D7D7]";
    
    return (
        <div 
            className="flex p-2 rounded-2xl bg-white mb-10
                md:p-4 md:mb-20"
        >
            
            <button 
                className={`flex-1 py-4 rounded-xl text-base font-medium text-[#19191B] 
                md:py-6 md:text-xl
                ${store === PortoflioStoreValues.projects ? ButtonActiveStyle : ''}`}
                onClick={() => handleProjects()}
            >Proyectos</button>

            <button 
                className={`flex-1 py-4 rounded-xl text-base font-medium text-[#19191B] 
                md:py-6 md:text-xl
                ${store === PortoflioStoreValues.skills ? ButtonActiveStyle : ''}`}
                onClick={() => handleSkills()}
            >Habilidades</button>

        </div>
    )
}
export default PortfolioSwitchButton;