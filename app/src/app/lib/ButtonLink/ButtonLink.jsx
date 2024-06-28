const ButtonLink = ({text, href, customClass = ""}) => {
    return (
        <a className={`button-link button-text ${customClass}`} href={href}>
            <div className="button-link-text">{text}</div>
            <span className="button-link-decoration">
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="8" viewBox="0 0 31 8" fill="none">
                    <path d="M30.3536 4.35368C30.5488 4.15841 30.5488 3.84183 30.3536 3.64657L27.1716 0.464588C26.9763 0.269326 26.6597 0.269326 26.4645 0.464588C26.2692 0.65985 26.2692 0.976433 26.4645 1.17169L29.2929 4.00012L26.4645 6.82855C26.2692 7.02381 26.2692 7.34039 26.4645 7.53566C26.6597 7.73092 26.9763 7.73092 27.1716 7.53566L30.3536 4.35368ZM0 4.50012H30V3.50012H0V4.50012Z" fill="white"/>
                </svg>
            </span>
        </a>
    )
}

export default ButtonLink