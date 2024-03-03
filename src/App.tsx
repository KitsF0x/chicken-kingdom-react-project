import TitleSection from './components/sections/TitleSection'
import AboutUsSection from './components/sections/AboutUsSection'
import MenuSection from './components/sections/MenuSection';
import ContactSection from './components/sections/ContactSection';
import OrderOnlineSection from './components/sections/OrderOnlineSection';
import Navigation from './components/navigation/Navigation';

import './scss/Section.scss';
import './scss/Text.scss';
import './scss/Main.scss';
import './scss/Elements.scss';
import './scss/Navigation.scss';

const App = () => {
    return (
        <div>
            <Navigation />
            <TitleSection />
            <AboutUsSection />
            <MenuSection />
            <OrderOnlineSection />
            <ContactSection />
        </div>
    )
}

export default App