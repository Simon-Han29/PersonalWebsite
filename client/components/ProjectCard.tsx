import Image from "next/image";

interface Props {
  title: string;
  image: string;
  color: string;
  link: string;
}

const ProjectCard: React.FC<Props> = ({ title, image, color, link }) => {
  return (
    <div
      className="flex flex-col items-center
      w-[100px] h-[125px] rounded-tr-[10px] rounded-bl-[10px] mx-6 my-5
      sm:w-[100px] sm:h-[125px] sm:rounded-tr-[10px] sm:rounded-bl-[10px] sm:mx-6
      md:w-[150px] md:h-[200px] md:rounded-tr-[30px] md:rounded-bl-[30px] md:mx-8
      lg:w-[200px] lg:h-[250px] lg:rounded-tr-[40px] lg:rounded-bl-[40px] lg:mx-10 
      overflow-hidden
      transform transition-transform duration-100 ease-in hover:scale-[1.1]"
    >
      <a href={link} target="_blank" className="w-full h-full flex flex-col">
        <div className="relative w-full flex-1">
          <Image
            src={image}
            alt="No Project Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
        <div
          className={`${color} w-full text-center p-2 sm:text-[10px] md:text-lg`}
        >
          {title}
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
