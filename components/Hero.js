import { useState } from 'react'
import Hexagon from './Hexagon'
import Modal from './Modal'

const Hero = () => {
    const [showModal, setShowModal] = useState(false)
    const [imgId, setImgId] = useState()

    return (
        <div className=" pt-36 flex flex-col justify-center max-w-[1920px] mx-auto">
            <div className="flex lg:space-x-5 justify-center items-center flex-wrap space-y-8 md:space-y-0">
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(0)}
                    img="/images/1.png"
                />
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(1)}
                    img="/images/2.png"
                />
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(2)}
                    img="/images/3.png"
                />
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(3)}
                    img="/images/4.png"
                />
            </div>
            <div className="flex lg:-mt-14 1xl:space-x-5 justify-center items-center flex-wrap space-y-8 md:space-y-0">
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(4)}
                    img="/images/5.png"
                />
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(5)}
                    img="/images/6.png"
                />
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(6)}
                    img="/images/7.png"
                />
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(7)}
                    img="/images/8.png"
                />
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(8)}
                    img="/images/9.png"
                />
            </div>
            <div className="flex lg:-mt-14 1xl:space-x-5 justify-center items-center flex-wrap space-y-8 md:space-y-0">
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(9)}
                    img="/images/10.png"
                />
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(10)}
                    img="/images/11.png"
                />
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(11)}
                    img="/images/12.png"
                />
                <Hexagon
                    onClick={() => setShowModal(true) & setImgId(12)}
                    img="/images/13.png"
                />
            </div>
            <Modal
                showModal={showModal}
                imgId={imgId}
                onClick={() => setShowModal(false)}
            />
        </div>
    )
}

export default Hero
