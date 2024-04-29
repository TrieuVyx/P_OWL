import { getColumnProps } from "../../../filter/index"
export const courseColums = ({ ...restProps }) => {
    return [
        {
            title: "ao",
            dataIndex:"ao",
            windth: 80,
            ...getColumnProps({
                
            })
        },

    ]
}