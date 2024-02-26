import TitleSection from './components/sections/TitleSection'
import AboutUsSection from './components/sections/AboutUsSection'
import MenuSection from './components/sections/MenuSection';

import './scss/Section.scss';
import './scss/Text.scss';
import './scss/Main.scss';
import ContactSection from './components/sections/ContactSection';

const App = () => {
    return (
        <div>
            <TitleSection />
            <AboutUsSection />
            <MenuSection />
            <ContactSection />
        </div>
    )
}

export default App