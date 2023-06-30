import Link from "next/link"
export default function AboutMeDescription() {
    return (
        <div className="text-sm space-y-2 text-gray-700 leading-relaxed font-writer tracking-tight">
        <h1 className="font-sans text-4xl font-semibold tracking-tight text-gray-950 pb-2">✌️ Hello, I&apos;m&nbsp;
        <span className="font-sans font-extrabold italic tracking-tighter">Sri!</span></h1>
            <p>My full name is Sriram Venugopal. I&apos;m an Indian 
            <span className="italic">(he/him)</span> living in Berlin, Germany.</p>
            <p> I am a product designer, building delightful consumer &amp; partner experiences at&nbsp;
                <Link href="https://en.zalando.de/?_rfl=de" 
                className= "font-bold text-gray-950 hover:underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">Zalando SE.
                </Link>
            </p>
            <p>Before this, I was crafting exciting employee experiences and productivity tools at&nbsp;
                <Link href="https://www.tcs.com/"
                    className= "font-bold text-gray-950 hover:underline hover:text-blue-600" target="_blank" rel="noopener noreferrer">Tata Consultancy Services&#124;TCS
                </Link>&nbsp;for diverse clientele across the globe.
            </p>
            <p>I believe design can be the fulcrum of change and when executed properly, we can create a positive and lasting impact on the planet we
            live in, the environment, the society, and the humans.
            </p>
        </div>
       
    )
}