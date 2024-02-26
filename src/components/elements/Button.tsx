interface ButtonProps {
    text: string;
    href: string;
}

const Button = (props: ButtonProps) => {
    return (
        <a href={props.href} className="kf-button-link">
            <button className="kf-button">{props.text}</button>
        </a>
    )
}

export default Button;