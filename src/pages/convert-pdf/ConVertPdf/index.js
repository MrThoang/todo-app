import { useState } from "react"
import FileIcon from "~/components/Icon/FileIcon"
import MergeIcon from "~/components/Icon/MergeIcon"
import UpLoadIcon from "~/components/Icon/UpLoadIcon"
import { MergePDF } from "../MergPdf"
import EditIcon from "~/components/Icon/EditIcon"
import DownLoadIconIcon from "~/components/Icon/DownLoadIcon"
import ViewIcon from "~/components/Icon/ViewIcon"
import RestartIcon from "~/components/Icon/RestartIcon"
import LoGo from "~/components/Icon/LoGo"
import { Footer } from "../FooterPdf"

export const ConVertPdf = () => {
    const [isMerge, setIsMerge] = useState(false)
    return (
        <>
            <div className="px-14">
                <div className="border-b py-8">
                    <div className="flex justify-between items-center">
                        <a href="#" className="flex items-center">
                            <LoGo />
                            <p className="font-bold text-4xl ml-5">PDF TOOLS</p>
                        </a>
                        <div>
                            <button type="button"
                                className="flex items-center rounded-full  bg-gradient-to-r to-cyan-500 from-blue-500 px-7 py-3">
                                <UpLoadIcon />
                                <p className="ml-3.5 font-bold text-lg text-white">Upload File To Convert PDF</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 items-center pt-5">
                    <div>
                        <h1 className="text-[65px] font-bold">We make PDF easy.</h1>
                        <p className="text-base">All the tools you’ll need to be more productive and work smarter with documents.</p>
                    </div>
                    <div>
                        <img
                            src={'../../assets/images/banner.svg'}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className="text-center mt-20">
                    <h1 className="text-[65px] font-bold">Most Popular PDF Tools</h1>
                </div>
                {!isMerge && (<div className="grid grid-cols-2 gap-x-8 mt-14 mb-20">
                    <div onClick={() => setIsMerge(true)} className="shadow-[0px_4px_24px_0px_rgba(0,0,0,0.1)] text-center p-12 cursor-pointer bg-white">
                        <div className="flex items-center justify-center mb-[18px]">
                            <MergeIcon />
                            <p className="font-bold ml-8 text-2xl">Merge PDF</p>
                        </div>
                        <p className="text-gray-500 text-lg">Combine multiple PDFs into one unified document</p>
                    </div>
                    <div onClick={() => setIsMerge(true)} className="shadow-[0px_4px_24px_0px_rgba(0,0,0,0.1)] text-center p-12 cursor-pointer bg-white">
                        <div className="flex items-center justify-center mb-[18px]">
                            <FileIcon />
                            <p className="font-bold ml-8 text-2xl">Convert PDF</p>
                        </div>
                        <p className="text-gray-500 text-lg">Convert image to editable PDF</p>
                    </div>
                </div >)
                }
                {isMerge && (
                    <>
                        <MergePDF />
                        <div className="flex justify-center items-center mb-[110px]">
                            <div className="text-center">
                                <p className="font-[600] text-2xl">PDF has merged your files into a single PDF</p>
                                <div className="flex justify-center border border-dashed border-sky-600 p-4 my-4">
                                    <EditIcon />
                                    <p className="text-[#2259C9] font-bold text-lg">
                                        Loremipsumissimplytext_merged.pdf - 222.5KB
                                    </p>
                                </div>
                                <div className="flex items-center justify-center gap-4">
                                    <button className="flex items-center min-w-[154px] bg-[#2259C9] justify-center rounded-full px-4 py-2 gap-2 text-white font-bold">
                                        <DownLoadIconIcon />
                                        Download
                                    </button>
                                    <button className="flex items-center min-w-[154px] rounded-full bg-[#22C96F] justify-center px-4 py-2 gap-2 text-white font-bold">
                                        <ViewIcon />
                                        Preview
                                    </button>
                                    <button className="flex items-center min-w-[154px] rounded-full bg-[#C92268] justify-center px-4 py-2 gap-2 text-white font-bold">
                                        <RestartIcon />
                                        Restart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    )
}