import Image from "next/image"
import MotionTransition from "./transition-component"
import avatarimg from "../public/avatar-1.png"

const Avatar = () => {
  return (
     <MotionTransition position="bottom" className="hidden md:inline-block md:absolute bottom-0 right-0">
        <div>
        <Image 
        src={avatarimg} width={200} height={200}
        className="w-full h-full"
        alt="Avatar"
        />
        </div>


    </MotionTransition>
)
}

export default Avatar