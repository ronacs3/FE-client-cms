"use client";
import { Row, Col } from "antd";
import {
  FacebookFilled,
  YoutubeFilled,
  LinkedinFilled,
} from "@ant-design/icons";
// import { FaTiktok } from "react-icons/fa";
import { useState } from "react";

const menus = [
  {
    title: "VỀ VIETCAP",
    items: [
      "Về Vietcap",
      "Tin tức",
      "Quan hệ cổ đông",
      "Cơ hội nghề nghiệp",
      "Hướng dẫn chung",
      "Góp ý & Liên hệ",
      "Văn phòng",
    ],
  },
  {
    title: "DỊCH VỤ",
    items: [
      "Tư vấn KH Cá nhân",
      "Môi giới KH tổ chức",
      "Quản lý gia sản",
      "Ngân hàng đầu tư",
      "Điều khoản sử dụng",
    ],
  },
  {
    title: "SẢN PHẨM",
    items: [
      "Vietcap Trading",
      "Vietcap IQ",
      "Sản phẩm Margin",
      "AI News",
      "Vietcap Academy",
      "Vietcap Webinar",
    ],
  },
  {
    title: "ỨNG DỤNG GIAO DỊCH",
    items: ["Vietcap Mobile App", "Vietcap Trading", "Tải Vietcap Pro"],
  },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0A0F1E] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Row gutter={[32, 32]}>
          {/* Company info */}
          <Col xs={24} md={8}>
            <div className="text-2xl font-bold mb-4 flex items-center gap-2">
              Vietcap <span className="text-green-500">▲</span>
            </div>
            <div className="font-semibold mb-2">
              CÔNG TY CỔ PHẦN CHỨNG KHOÁN VIETCAP
            </div>
            <div className="mb-2 space-y-1">
              <p>
                Tầng 15, Tháp tài chính Bitexco, 2 Hải Triều, Phường Sài Gòn,
                TP. Hồ Chí Minh
              </p>
              <p>
                Tầng 3, Tòa nhà Vinatex - Tài Nguyên, 10 Nguyễn Huệ, Phường Sài
                Gòn, TP. Hồ Chí Minh
              </p>
            </div>
            <div className="mb-2">📞 (+84) 2 8888 2 6868</div>
            <div className="mb-4">✉️ info@vietcap.com.vn</div>
            <div className="flex gap-3 text-lg">
              <FacebookFilled />
              <YoutubeFilled />
              <LinkedinFilled />
              {/* <FaTiktok /> */}
            </div>
          </Col>

          {/* Menus */}
          <Col xs={24} md={16}>
            {/* Desktop */}
            <div className="hidden md:grid grid-cols-4 gap-6">
              {menus.map((menu, idx) => (
                <div key={idx}>
                  <h4 className="font-bold mb-3">{menu.title}</h4>
                  <ul className="space-y-2">
                    {menu.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile accordion */}
            <div className="md:hidden flex flex-col divide-y divide-gray-700">
              {menus.map((menu, idx) => (
                <div key={idx}>
                  <button
                    className="w-full flex justify-between items-center py-3 font-bold"
                    onClick={() => toggleMenu(idx)}
                  >
                    {menu.title}
                    <span>{openIndex === idx ? "−" : "+"}</span>
                  </button>
                  {openIndex === idx && (
                    <ul className="pl-2 pb-3 space-y-2 text-gray-300">
                      {menu.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>

      {/* Footer bottom */}
      <div className="w-full text-center py-4 text-xs border-t border-gray-700 px-2">
        ©2023 Công ty Cổ phần Chứng khoán Vietcap. Giấy phép số 15/GP-TTDT Bộ
        thông tin và truyền thông cấp ngày 29/07/2008
      </div>
    </div>
  );
}
