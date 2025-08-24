import { FormattedMessage } from "react-intl";
import Link from "next/link";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

export default function DropdownMenu({
  labelId,
  items,
  isOpen,
  onOpen,
  onClose,
  highlight = false,
}) {
  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      {/* Label */}
      <div
        className={`flex items-center gap-1 px-2 py-1 ${
          highlight ? "text-green-600 font-semibold" : ""
        }`}
      >
        <FormattedMessage id={labelId} defaultMessage={labelId} />
        {isOpen ? (
          <UpOutlined className="text-[10px]" />
        ) : (
          <DownOutlined className="text-[10px]" />
        )}
      </div>

      {/* Menu con */}
      {isOpen && (
        <div className="absolute top-full left-0 w-[220px] bg-white shadow-lg rounded-md py-2 z-50">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="block px-4 py-2 text-black hover:bg-gray-100 hover:font-semibold"
            >
              <FormattedMessage id={item.id} defaultMessage={item.id} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
