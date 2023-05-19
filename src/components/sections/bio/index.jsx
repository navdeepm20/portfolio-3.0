//internal components
import ImageWrapper from "@components/image_wrapper";
import Badge from "@components/badges";
//assets
import Avatar from "@assets/avatar/AvatarAndIcons.svg";

function index({ ...props }) {
  return (
    <div className="bio-section py-[14.1rem] flex items-center justify-center flex-wrap ">
      <ImageWrapper alt="avatar" icon={Avatar} tailwindStyles="max-w-[46rem]" />
      <div className="bio-section__content-container mb-[2.4rem]">
        <Badge icon={"🤔"} text="About Me" tailwindStyles="mb-[2.4rem]" />
        <div className="bio-section__content-container-content">
          <p className="text-[4.8rem] font-extrabold mb-[2.4rem]">
            Washington Henrique
            <br /> Fernandes de Sousas
          </p>
          <p className="text-customGrey text-[1.8rem] leading-[2.5rem]">
            👋 Me chamo Washington Henrique Fernandes de Sousa, mas pode me
            chamar apenas de Henrique. Prazer! <br />
            👨‍💻 Há mais de 2 anos desenvolvendo e programando interfaces com
            JavaScript, React JS e Typescript. <br />
            🎓 Graduado em Análise e Desenvolvimento de Sistemas pela Fatec de
            São José dos Campos <br />
            💡 Interesses em desenvolvimento Front-end com React, React Native,
            VueJS e UX/UI Design. <br />
            🚀 Tentando ser um pouquinho melhor do que ontem todos dias.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
