import { useState, ReactNode } from "react";

interface modalProps {
    buttonModal: ReactNode,
    contentModal: ReactNode
}

export default function Modal({ buttonModal, contentModal }:modalProps) {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

    const toggleModal = () => {
        setIsOpenModal(prev => !prev);
    };

    return (
        <>
            <button 
                onClick={toggleModal}
            >
                {buttonModal}
            </button>

            {isOpenModal && (
                <div className="fixed z-[100000] inset-0 pt-[20%] md:pt-[3%] px-5 bg-black/60 flex items-start justify-center">
                    <div className="w-full">
                        <div className="mb-5  w-full flex justify-end">
                            <button onClick={() => {setIsOpenModal(false)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 ">
                                    <path className="text-red-600" strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {contentModal}
                    </div>
                </div>
            )}
        </>
    )
}