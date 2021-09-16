import { motion } from 'framer-motion'
import Image from 'next/image'

const Hexagon = ({ onClick, img }) => {
    return (
        <div>
            <motion.div
                className="m-4 1xl:m-0 w-64 h-72 lg:w-56 lg:h-64 1xl:w-64 1xl:h-72 bg-secoundaryText hexagon relative hover:scale-110 duration-150 ease-in cursor-pointer active:scale-95"
                onClick={onClick}
            >
                <Image src={img} alt="" layout="fill" objectFit="cover" />
            </motion.div>
        </div>
    )
}

export default Hexagon
