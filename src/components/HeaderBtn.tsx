import { IbuttonProps } from "../interface/interface";

export default function HeaderBtn(props : IbuttonProps){
    return(
        <button className=" bg-inherit text-md font-semibold text-gray-500 hover:border-b-[3px] border-green-600 text-nowrap">{props.text}</button>
    )
}