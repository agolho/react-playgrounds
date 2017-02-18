import React from "react";
import TableItem from "./TableItem";

const TableList = ({ data }) => {
  const items = data.map((item,index) => {
    return <TableItem itemprop={item} no={index+1} key={index} />;
  })
  return (
    <div className="table-responsive">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th><a>Recent</a></th>
          <th>All Time</th>
        </tr>
      </thead>
      <tbody>
        {items}
      </tbody>
    </table>
    </div>
  );
}
export default TableList;
