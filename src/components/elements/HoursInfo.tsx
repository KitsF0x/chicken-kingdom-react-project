interface OpenedHoursProps {
    firstDay: string,
    secondDay?: string
    startHour: string,
    endHour: string
}

const HoursInfo = (props: OpenedHoursProps) => {
    return (
        <>
            <div className='kf-hours-info-days'>
                {props.firstDay}
                {
                    props.secondDay && <span> - {props.secondDay}</span>
                }
            </div>
            <div className='kf-hours-info-hours'>
                {props.startHour} - {props.endHour}
            </div>
        </>
    )
}

export default HoursInfo