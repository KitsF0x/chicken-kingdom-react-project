import NavigationItem from '../../elements/NavigationItem'

const Navigation = () => {


    const switchOrdersPanelVisibility = () => {
        const ordersPanel = document.getElementById('orders-panel');
        if (ordersPanel) {
            ordersPanel.style.display = ordersPanel.style.display === 'none' ? 'block' : 'none';
        }
    }

    return (
        <nav className='kf-navigation'>
            <NavigationItem text='Home' onclick={() => window.location.href = '#'} />
            <NavigationItem text='Your order' onclick={switchOrdersPanelVisibility} />
        </nav>
    )
}

export default Navigation