import { Feature } from "@/types"
import { TfiReload } from "react-icons/tfi";
import { CiStar } from "react-icons/ci";
import { TbDeviceDesktopCheck } from "react-icons/tb";

export const featureData: Array<Feature> = [
    {
        icon: <TfiReload className="w-5 h-5 mx-auto"/>,
        title: '300+ formats supported',
        description: 'We support more than 25600 different conversions between more than 300 different file formats. More than any other converter.'
    },
    {
        icon: <CiStar className="w-5 h-5 mx-auto"/>,
        title: 'Fast and easy',
        description: 'Just drop your files on the page, choose an output format and click "Convert" button. Wait a little for the process to complete. We aim to do all our conversions in under 1-2 minutes.'
    },
    {
        icon: <TbDeviceDesktopCheck className="w-5 h-5 mx-auto"/>,
        title: 'All devices supported',
        description: 'Convertio is browser-based and works for all platforms. There is no need to download and install any software.'
    },
]