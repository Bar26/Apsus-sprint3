

export function NoteImg (props){
    console.log(props)
    const title = props.note.info.title
    const url = props.note.info.url
    console.log(title)
    // const txt = props.note.info.txt
    
    function titleCheck(){
        if(title) return <h1>{title}</h1>
    }

    return <section className={props.note.id}>
        {titleCheck()}
        <img src={url}/>
        {/* <h3>{txt}</h3> */}
    </section>
}