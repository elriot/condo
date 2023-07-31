import { GoArrowDown, GoArrowUp } from "react-icons/go";
import Table from "./Table"
import useSort from "../hooks/use-sort";
import classNames from "classnames";
import { getThStyle } from "../lib/common-css";

function SortableTable(props) {
    const { config, data } = props;
    const {
        sortedData,
        sortBy,
        sortOrder,
        setSortColumn } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th className={classNames("cursor-pointer hover:bg-gray-100", getThStyle())} onClick={() => setSortColumn(column.label)}>
                    <div className="flex item-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>

                </th>
            )
        };
    });


    return (<div>
        {/* {sortOrder} - {sortBy} */}
        <Table {...props} data={sortedData} config={updatedConfig} />
    </div>);
}
function getIcons(label, sortBy, sortOrder) {
    // console.log(label ,sortBy, sortOrder);
    if (label !== sortBy) {
        return <div className="text-sm"><GoArrowUp /><GoArrowDown /></div>;
    }
    if (sortOrder === null) {
        return <div className="text-sm"> <GoArrowUp /><GoArrowDown /></div>;
    } else if (sortOrder === 'asc') {
        return <div className="text-sm"><GoArrowUp /></div>;
    } else if (sortOrder === 'desc') {
        return <div className="text-sm"><GoArrowDown /></div>;
    }
}
export default SortableTable;
