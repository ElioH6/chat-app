function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative w-40 h-40">
                <div className="w-full h-full border-8 border-t-transparent border-info rounded-full animate-spin"></div>
                <span className="absolute inset-0 flex justify-center items-center text-xl text-white">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;
