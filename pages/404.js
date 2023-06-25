import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        let timer = setTimeout(()=>{
            //router.go(-1)     goes back one page
            router.push("../") // sends to home page
        },3000)
        //to clean up, if you dont it will cause an error and page will still change if you go to another page within 3 seconds
        return() => window.clearTimeout(timer)
    }, [])
    
    // For future : Add count down timer to "You will be redirected in x seconds"

    return ( 
       <div className="not-found">
        <h1>Oooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>Go back to the <Link href="/">Homepage</Link></p>
        <hr />
        <h2>You will be redirected in 3 seconds</h2>
       </div> 
     );
}
 
export default NotFound;