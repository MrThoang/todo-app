import { useRef, useState } from "react"
import clsx from 'clsx';
import PdfIcon from "~/components/Icon/PdfIcon";
import DownIcon from "~/components/Icon/DownArrowIcon";
import MergeIcon from "~/components/Icon/MergeIcon";

export const MergePDF = () => {
    const inputRef = useRef(null);
    const [files, setFiles] = useState([]);
    const [imageURLS, setImageURLS] = useState([])

    const handleClickUpLoad = () => {
        inputRef.current?.click()
    }

    const ImportFile = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFiles((imageList) => [...imageList, e.target.files[0]]);
            setImageURLS((urlList) => [
                ...urlList,
                URL.createObjectURL(e.target.files[0])
            ]);
        }
    };

    return (
        <div className={clsx("text-center py-12 px-3 mb-20 mt-14 bg-white",
            files?.length ? "shadow-[0px_4px_24px_0px_rgba(249,192,103,1)]" : "shadow-[0px_4px_24px_0px_rgba(0,0,0,0.1)]"
        )}>
            <div className="flex items-center justify-center mb-[18px]">
                <MergeIcon />
                <p className="font-bold ml-8 text-2xl">Merge PDF</p>
            </div>
            <p className="text-gray-500 text-lg">Combine multiple PDFs into one unified document</p>
            <div className="image-container flex  justify-center gap-[18px] my-[18px]">
                {files.map((file, index) => {
                    return (
                        <div key={index} className="max-w-[393px] max-h-[242px]" >
                            <img src={imageURLS[index]} alt={""} className="h-full w-full object-cover" />
                            <p>{file.name}</p>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center pt-[18px]">
                <div onClick={() => { handleClickUpLoad() }} className="bg-[#F9C067] w-[519px] flex justify-center p-[27px] rounded cursor-pointer">
                    <div>
                        <div className="flex items-center justify-center mb-6">
                            <PdfIcon />
                            <p className="text-white font-[600] text-2xl ml-[30px]">Choose files</p>
                            <span className="border-r-4 border-white h-[24px] ml-5 mr-[30px]"></span>
                            <input
                                id="upload"
                                ref={inputRef}
                                className="hidden"
                                type="file"
                                onChange={ImportFile}
                            />
                            <DownIcon />
                        </div>
                        <p className="text-black text-lg">Or drag and drop file in this space</p>
                    </div>
                </div>
            </div>
            <div className="mt-[18px]">
                <button disabled={files?.length < 4}
                    className={clsx("rounded-sm px-12 py-3 text-lg text-white font-bold", `${files?.length < 4 ? "bg-gray-400" : "bg-[#2259C9]"}`)}>
                    Merge
                </button>
            </div>
        </div>
    )
}