export default function Post({head, body}){

    return(
        <div class = "rounded-lg mx-auto text-white w-2/3 backdrop-blur bg-white/25">
            
            <div 
            class = "flex justify-start text-5xl capitalize p-5"
            >
                <p>{head}</p>
            </div>
            <div 
            class = "flex justify-start text-left text-xl p-5"
            >
                <p>{body}</p>
            </div>
        </div>
    );
}