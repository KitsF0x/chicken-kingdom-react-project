import bgvideo from '../../../assets/bgvideo.mp4';
import Button from '../../elements/Button';
import HoursInfo from '../../elements/HoursInfo';

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
                    <HoursInfo firstDay='Monday' secondDay='Thursday' startHour='10:00 AM' endHour='8:00 PM' />
                    <HoursInfo firstDay='Friday' secondDay='Saturday' startHour='10:00 AM' endHour='10:00 PM' />
                    <HoursInfo firstDay='Sunday' startHour='3:00 PM' endHour='8:00 PM' />

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