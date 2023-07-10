import Image from "next/image"
import CS1 from "../../assets/reporting.svg"
import CS2 from "../../assets/incentives.svg"
import Link from "next/link"

export default function SelectedWorks () {
    return (
        <div className="space-y-8">
            {/*Selected Work 1 */}
            <div className="max-w-screen lg:grid grid-cols-4 border-2 border-gray-950">
                <div className="col-span-2">
                    <Image
                        src={CS1}
                        alt="Pic of the first case study"
                        className="min-h-fit w-fit"
                    />
                </div>
                <div className="col-span-2 space-y-4 p-6  border-t-2 lg:border-t-0 lg:border-l-2 border-gray-950">
                    <h4 className="text-2xl font-bold font-sans tracking-tight">Unified Reporting Experience</h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-writer tracking-tight">Conceptualised and designed an unified and personalised reporting 
                    experience, tailored to meet the needs of all partners types.</p>
                    <div className="space-x-4 text-xs border-t border-b border-gray-950 text-gray-950 tracking-wider font-sans font-medium flex flex-row py-2 uppercase items-center">
                        <p>2022 - 2023</p>
                        <p className="text-base font-semibold">&middot;</p>
                        <p className="tracking-widest font-semibold">#Product Strategy</p>
                    </div>
                    <Link href={"/incentives.tsx"} className="px-8 py-2 border-2 border-gray-950 text-sm font-semibold text-gray-950 space-x-2 items-center flex flex-row w-fit">
                        <p>Read On</p>
                        <div className="border border-gray-950 rounded-full p-1 leading-none items-center">&rarr;</div>
                    </Link>
                </div>
            </div>

            {/*Selected Work 2 */}
            <div className="max-w-screen lg:grid grid-cols-4 border-2 border-gray-950">
                <div className="col-span-2">
                    <Image
                        src={CS2}
                        alt="Pic of the second case study"
                        className="min-h-fit w-fit"
                    />
                </div>
                <div className="col-span-2 space-y-4 p-6 border-t-2 lg:border-t-0 lg:border-l-2 border-gray-950">
                    <h4 className="text-2xl font-bold font-sans tracking-tight">Commercial Incentives</h4>
                    <p className="text-sm text-gray-700 leading-relaxed font-writer tracking-tight">A comprehensive qualitative research study to understand the pain points 
                    of the current incentive experience of our marketing partners.</p>
                    <div className="space-x-4 text-xs border-t border-b border-gray-950 text-gray-950 tracking-wider font-sans font-medium flex flex-row py-2 uppercase items-center">
                    <p>2023</p>
                    <p className="text-base font-semibold">&middot;</p>
                    <p className="tracking-widest font-semibold">#Product Research</p>
                    </div>
                    <div className="px-8 py-2 border-2 border-gray-950 text-sm font-semibold text-gray-950 space-x-2 items-center flex flex-row w-fit">
                        <p>Read On</p>
                        <div className="border border-gray-950 rounded-full p-1 leading-none items-center">&rarr;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}