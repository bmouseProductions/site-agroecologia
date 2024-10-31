
interface BtnProps {
  text: string;
  tipo: "tipo1" | "tipo2";
  link: string;
}


export const Botao = ({ text, tipo, link }: BtnProps) => {
  
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const getBackgroundColor = () => {
    if (tipo === "tipo1") {
      return "bg-[#760BFF]  text-white shadow-botao";
    } else if (tipo === "tipo2") {
      return "bg-white text-black shadow-botao2 "; // Note que você deve fornecer uma cor válida aqui
    }
  };

  return (
    <a
      href={link}
      onClick={handleBackToTop}
      className={`!h-[80px] w-full flex justify-center items-center text-xl font-semibold text-center rounded-[57px] font-montserrat transition-all ${getBackgroundColor()}`}
    >
      {text}
    </a>
  );
};
