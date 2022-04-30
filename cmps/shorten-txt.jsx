export function ShortenTxt({ text }) {
    if(text.length<100){
        const dif=100-text.length
       text=text+= (' '*dif)
    } 
    return <span className="body">{text.substring(0,100)}</span>
}