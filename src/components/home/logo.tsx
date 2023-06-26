import Image from "next/image"
import logo from "../../assets/logo.svg"

export default function Logo() {
    return(
        <div className="pb-4">
        <Image
            src={logo}
            alt="Sri&apos;s Logo!"
            width={40}
            height={40}
            />
        </div>
    )

}