import Content from "./Portfolio/Content";
import SwitchButton from "./Portfolio/SwitchButton";

const Portfolio = () => {
    return (
        <div 
            className="max-w-lg mx-auto pt-9 pb-5
                md:max-w-none md:pt-12"
        >
            <SwitchButton/>
            <Content/>
        </div>
    )
}
export default Portfolio;