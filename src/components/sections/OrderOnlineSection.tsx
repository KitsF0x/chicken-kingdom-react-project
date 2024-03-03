import PageUpButton from "../elements/PageUpButton"

const MenuSection = () => {
    return (
        <section className='d-flex flex-column align-items-center justify-content-center kf-section kf-order-online-section' id='order-online'>
            <PageUpButton />
            <h2 className='display-2'>
                Order Online
            </h2>
        </section>
    )
}

export default MenuSection