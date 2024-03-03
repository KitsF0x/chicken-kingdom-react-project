import Navigation from './components/layout/navigation/Navigation';

import './scss/Section.scss';
import './scss/Text.scss';
import './scss/Main.scss';
import './scss/Elements.scss';
import './scss/Navigation.scss';
import Main from './components/layout/main/Main';
import Orders from './components/elements/Orders';

const App = () => {
    return (
        <div>
            <Orders />
            <Navigation />
            <Main />
        </div>
    )
}

export default App