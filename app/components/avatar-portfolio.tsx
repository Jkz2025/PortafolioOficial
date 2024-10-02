import MotionTransition from "./transition-component"
import Image from "next/image"
import AvatarWorks from '../public/avatar-works.png'

const AvatarPortfolio = () => {
  return (

    <MotionTransition
    position="bottom"
    className="bottom-0
    left-0 hidden md:inline-block md:absolute"
    >
        <Image src={AvatarWorks}
        width={300}
        height={300}
        className="m-full h-full"
        alt="Avatar"
/>
    </MotionTransition>

)
}

export default AvatarPortfolio