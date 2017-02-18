import React from 'react';

const TableItem = ({itemprop, no}) => {
  return (
    <tr>
      <td>{no}</td>
      <td><a href="https://www.freecodecamp.com/+{itemprop.username}"><img src={itemprop.img} className="img-fluid img-rounded" style={{height: 2+'em'}} /> {itemprop.username}</a></td>
      <td>{itemprop.recent}</td>
      <td>{itemprop.alltime}</td>
    </tr>
  );
}

export default TableItem;
