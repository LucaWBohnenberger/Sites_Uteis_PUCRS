import './style.css'

function Button(props: {text: string, link: string}) {

    return(
            <input className="buttonLink" type="button" value={props.text} onClick={() => window.open(props.link)} />
    )
}

export default Button