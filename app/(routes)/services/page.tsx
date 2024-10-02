import TransitionPage from "@/app/components/transition-page";
import CircleImage from "@/app/components/circle-image";
import AvatarServices from "@/app/components/avatar-services";
import SliderServices from "@/app/components/slider-services";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />
      <AvatarServices />
      <div className="grid items-center justify-center h-screen max-w-4xl gap-6 mx-auto md:grid-cols-2 md:px-20 ">
        <div className="max-w-[450px] mt-20 md:mt-0">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:md-5">
            Mis {" "}
            <span className="font-bold text-secondary">Servicios. </span>
            <p className="mb-3 text-xl text-gray-300">
            Ofrezco servicios de desarrollo web frontend especializados en la creacion de sitios web y aplicaciones atractivas y funcionales.
            Utilizando las ultimas tecnologias como HTML, CSS y Javascript enfocado en react y supabase, soy un desarrollador full stack para crear cualquier tipo de aplicativo para tu sistema de informacion y bases de datos.
            </p>
            <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">Contacta conmigo</button>
          </h1>
        </div>
        <div>
        <SliderServices/>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
