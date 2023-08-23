export default function Post({head, body}){

    return(
        <div class = "container mx-auto text-black box-border w-1/2 divide-y-4 bg-white">
            <div 
            class = "flex justify-start text-5xl capitalize p-5"
            >
                <p>{head}</p>
            </div>
            <div 
            className = "flex justify-start post-body p-5"
            >
                <p>{body}</p>
            </div>
        </div>
    );
}