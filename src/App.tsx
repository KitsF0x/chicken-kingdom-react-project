import TitleSection from './components/sections/TitleSection'
import AboutUsSection from './components/sections/AboutUsSection'
import MenuSection from './components/sections/MenuSection';
import ContactSection from './components/sections/ContactSection';
import OrderOnlineSection from './components/sections/OrderOnlineSection';

import './scss/Section.scss';
import './scss/Text.scss';
import './scss/Main.scss';

const App = () => {
    return (
        <div>
            <TitleSection />
            <AboutUsSection />
            <MenuSection />
            <OrderOnlineSection />
            <ContactSection />
        </div>
    )
}

export default App