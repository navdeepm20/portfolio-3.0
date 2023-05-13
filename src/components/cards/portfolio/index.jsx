//internal components
import ImageWrapper from "@components/image_wrapper";
import Badge from "@components/badges";
//assets
import ProjectImage from "@assets/portfolio/project-1.svg";
function index({ ...props }) {
  return (
    <div className="p-[3rem] rounded-[1.6rem] border border-primary-bg-light flex flex-col items-center">
      <div className="mb-[1.6rem]">
        <p className="mb-[0.8rem] font-bold text-[2rem] leading-[2.3rem]">
          Move.it
        </p>
        <p className="text-[1.4rem] leading-[1.6rem] text-customGrey">
          Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma
          de Pomodoro com exercícios.
        </p>
      </div>
      <div className="w-full">
        <div className="flex w-full mb-[2.2rem] flex-wrap gap-y-2">
          <Badge tailwindStyles="[&>span]:text-[1.6rem] mr-[.8rem] rounded-[.8rem]" />
          <Badge tailwindStyles="[&>span]:text-[1.6rem] rounded-[.8rem]" />
        </div>
        <ImageWrapper icon={ProjectImage} />
      </div>
    </div>
  );
}

export default index;
