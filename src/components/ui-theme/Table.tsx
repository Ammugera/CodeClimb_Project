import { ReactNode } from "react";

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
}

export default function Table<T extends Record<string, unknown>>({ 
  columns, 
  data,
  onRowClick 
}: TableProps<T>) {
  return (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-lg" />
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                {columns.map((column) => (
                  <th
                    key={String(column.key)}
                    className="px-6 py-4 text-left text-sm font-semibold text-purple-200/80"
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  onClick={() => onRowClick?.(item)}
                  className={`border-b border-white/5 transition-all ${
                    onRowClick ? "cursor-pointer hover:bg-white/5" : ""
                  }`}
                >
                  {columns.map((column) => (
                    <td
                      key={String(column.key)}
                      className="px-6 py-4 text-sm text-white"
                    >
                      {column.render 
                        ? column.render(item) 
                        : String(item[column.key as keyof T] ?? "")}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
