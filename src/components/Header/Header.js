"use client";

import React, { useState } from "react";
import { Input, Button, Switch } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FormattedMessage } from "react-intl";
import { useLocale } from "../Content/LocaleProvider";
import DropdownMenu from "../components/DropDownMenu";
import { useIntl } from "react-intl";

export default function Header() {
  const { locale, setLocale } = useLocale();
  const [openMenu, setOpenMenu] = useState(null);
  const { formatMessage } = useIntl(); // <-- lấy ra formatMessage

  const menus = [
    {
      key: "vietcap",
      labelId: "about",
      highlight: true,
      items: [
        { id: "aboutUs", url: "/about" },
        { id: "news", url: "/news" },
      ],
    },
    {
      key: "dichvu",
      labelId: "services",
      items: [
        { id: "personal", url: "/services/personal" },
        { id: "corporate", url: "/services/corporate" },
      ],
    },
  ];

  return (
    <div className="w-full h-[64px] bg-white border-b border-[#dfe2eb] sticky top-0 z-50">
      <div className="flex items-center justify-between w-full h-full max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold whitespace-nowrap">
          Vietcap <span className="text-green-500 ml-1">▲</span>
        </div>
        {/* Menu */}
        <div className="flex gap-6">
          {menus.map((menu) => (
            <DropdownMenu
              key={menu.key}
              labelId={menu.labelId}
              items={menu.items}
              isOpen={openMenu === menu.key}
              onOpen={() => setOpenMenu(menu.key)}
              onClose={() => setOpenMenu(null)}
              highlight={menu.highlight}
            />
          ))}
        </div>

        {/* Search + Actions */}
        <div className="flex gap-3 items-center">
          <Input
            prefix={<SearchOutlined />}
            placeholder={formatMessage({
              id: "search",
              defaultMessage: "Search",
            })}
          />
          <Button>
            <FormattedMessage id="openAccount" defaultMessage="Open Account" />
          </Button>
          <Switch
            onClick={() => setLocale(locale === "vi" ? "en" : "vi")}
            className="border px-2 py-1 rounded"
          >
            {locale === "vi" ? "EN" : "VI"}
          </Switch>
        </div>
      </div>
    </div>
  );
}
