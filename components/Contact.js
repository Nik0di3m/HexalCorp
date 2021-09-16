const Contact = ({ children, title, secTitle }) => {
    return (
        <div className="bg-secoundary py-24">
            <div className="flex flex-col w-4/5 max-w-[1536px] mx-auto space-y-4">
                <div>
                    <h1 className="text-4xl text-white capitalize">{title}</h1>
                    <h2 className="text-2xl text-white font-light">
                        {secTitle}
                    </h2>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Contact
