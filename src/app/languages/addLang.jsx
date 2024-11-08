import { IoAdd } from "react-icons/io5";


import {
    Card
} from "@/components/ui/card"

export default function AddLang(props) {
    return (
        <div>
            <Card className="w-[350px]">
                <div className="flex justify-center p-16 text-5xl">
                    <IoAdd />
                </div>
            </Card>
        </div>
    )
}
