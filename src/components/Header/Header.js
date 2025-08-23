import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Button } from "antd";

export default function Header() {
  return (
    <div className="w-full h-[64px] bg-white border-b border-[#dfe2eb] sticky top-0 z-50">
      <div className="flex items-center justify-between w-full h-full max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold whitespace-nowrap">
          Vietcap <span className="text-green-500 ml-1">▲</span>
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center gap-1 text-green-600 font-semibold cursor-pointer">
            Về Vietcap <DownOutlined className="text-[10px]" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            Dịch vụ <DownOutlined className="text-[10px]" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            Sản phẩm <DownOutlined className="text-[10px]" />
          </div>
          <div className="flex items-center gap-1 font-semibold cursor-pointer">
            Go Green Go Up
          </div>
        </div>

        {/* Search + Actions */}
        <div className="flex items-center gap-3">
          <Input
            prefix={<SearchOutlined />}
            placeholder="Tìm kiếm"
            className="!h-[32px] !w-[220px] text-sm"
          />
          <Button className="!h-[32px] !px-4 bg-[#00ff00] text-black font-semibold rounded-md hover:opacity-90">
            Mở tài khoản
          </Button>
          <Button className="!h-[32px] flex items-center gap-1 border px-3 rounded-full">
            <span className="text-lg">🇻🇳</span> VI
          </Button>
        </div>
      </div>
    </div>
  );
}
