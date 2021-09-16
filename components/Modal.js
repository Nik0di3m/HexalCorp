import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { modalData } from './ModalData'
const Modal = ({ showModal, onClick, imgId }) => {
    const animation = {
        visible: {
            opacity: 1,
        },
        hidden: {
            opacity: 0,
        },
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                <motion.div
                    onClick={onClick}
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0 }}
                    className="h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-5 flex justify-center items-center backdrop-blur-[2px] cursor-pointer"
                >
                    <div>
                        <Image
                            src={modalData[imgId].img}
                            alt=""
                            width={350}
                            height={350}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal
