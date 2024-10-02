import TransitionPage from "@/app/components/transition-page"
import ContainerPage from "@/app/components/container"
import Avatar from "@/app/components/avatar"
import CounterServices from "@/app/components/counter-services"
import TimeLine from "@/app/components/time-line"

const PageAboutMe = () => {
  return (
    <>
    <TransitionPage/>
    <ContainerPage>
    <Avatar/>
    <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Toda mi  <br></br>
<span className="font-bold text-secondary">Trayectoria personal</span>
    </h1>
    <CounterServices />
    <TimeLine/>
    </ContainerPage>
    
    </>
  )
}

export default PageAboutMe


