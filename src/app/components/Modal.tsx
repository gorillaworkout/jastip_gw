import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image_1 from "../assets/photos/bayu.jpg";
import Image, { StaticImageData } from "next/image";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok, FaInstagramSquare  } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  dataPlayer: {
    image: StaticImageData;
    name: string;
    angkatan: string;
    position: string;
    instagram: string;
    tiktok: string;
  }
}

const backdropVariant = {
  hidden: {
    opacity: 0,
    transition: {
        duration: 1,
        delayChildren: 0.2,
      },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.2,
    },
  },
};

const modalVariant = {
  hidden: {
    y: "-100vh",
    transition: {
        type: "spring",
        stiffness: 70,
      },
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
    },
  },
};

export const Modal: FC<Props> = ({ isOpen, setIsOpen,dataPlayer }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal-container" variants={modalVariant}>
          <Image src={dataPlayer.image} alt="test_01" className="active_image header-area h-[400px] mb-4"/>
            <p className="text-gray-500 font-bold text-lg">
              {dataPlayer.name}
            </p>
            <p className="text-red-500 mb-2 text-md">
              {dataPlayer.position}
            </p>
            <p className="absolute top-10 font-bold text-red-500 left-5 text-[60px]">{dataPlayer.angkatan}</p>
            <div className="flex flex-row gap-x-2">
                <FaInstagramSquare  className="text-blue-800 text-3xl hover:pointer " />
                <FaTiktok className="text-blue-800 text-3xl hover:pointer" />
            </div>
            <motion.div
              whileHover={{ rotate: 45 }}
              className="close"
              onClick={() => setIsOpen(false)}
            >
              <div></div>
              <div></div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
