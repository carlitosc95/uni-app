import { Key } from "react";
import { ListProps } from "../types";

const TableContent = ({ items }: ListProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Country</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {items.map((singleItem, index) => (
            <tr key={`${singleItem.name}_${index}` as Key}>
              <th>{index + 1}</th>
              <td className="font-bold cursor-pointer">{singleItem.name}</td>
              <td>{singleItem.country}</td>
              <td>
                <a className="link" href={singleItem.web_pages[0] as string}  target="_blank">{singleItem.web_pages[0]}</a>
              </td>
              <td>#</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableContent;
