import Image from "next/image";

const Icon = ({ icon }) => {
  return (
    <div>
      <Image src={icon} alt="" />
    </div>
  );
};

export default Icon;
