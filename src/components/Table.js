import React from "react";

const Table = ({ data, columns, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            {columns.map((column) => (
              <th key={column.field} className="py-3 px-6 text-left">
                {column.label}
              </th>
            ))}
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              {columns.map((column) => (
                <td
                  key={`${item.id}-${column.field}`}
                  className="py-3 px-6 text-left whitespace-nowrap"
                >
                  {column.render ? column.render(item) : item[column.field]}
                </td>
              ))}
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <button
                    onClick={() => onEdit(item.id)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
