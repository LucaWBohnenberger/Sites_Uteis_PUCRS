import './style.css'

function Button(props: {text: string, link: string}) {

    return(
        <div>
            <input className="buttonLink" type="button" value={props.text} onClick={() => window.open(props.link)} />
        </div>
    )
}

export default Button