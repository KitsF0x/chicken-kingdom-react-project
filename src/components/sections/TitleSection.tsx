import bgvideo from '../../assets/bgvideo.mp4';
import Button from '../elements/Button';

const TitleSection = () => {
    return (
        <>
            <section className='d-flex flex-column align-items-center justify-content-center kf-section kf-title-section' id='title'>
                <video muted loop autoPlay className='kf-title-background-video'>
                    <source src={bgvideo} type="video/mp4" />
                </video>
                <div className='d-flex flex-column align-items-center justify-content-center  kf-title-section-content'>
                    <div>
                        <h1 className='display-1 text-center'>Chicken Kingdom</h1>
                        <h2 className='display-2 text-center'>Restaurant & Bar</h2>
                    </div>
                    <div>
                        <div>Monday - Friday</div>
                        <div>8:00 AM - 9:00 PM</div>
                    </div>
                    <div>
                        <div>Saturday</div>
                        <div>10:00 AM - 10:00 PM</div>
                    </div>
                    <div>
                        <div>Sunday</div>
                        <div>10:00 AM - 7:00 PM</div>
                    </div>
                    <div>
                        <div>
                            <Button text='About us' href='#about-us' />
                            <Button text='Menu' href='#menu' />
                            <Button text='Order online' href='#order-online' />
                            <Button text='Contact' href='#contact' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TitleSection;