import { ConVertPDF } from "~/pages/convert-pdf/ConVertPdf";

function Home() {
    return (
        <div className="h-full bg-[url('./assets/images/background.svg')] w-full bg-no-repeat bg-cover bg-bottom">
            <ConVertPDF />
        </div>
    );
}

export default Home;