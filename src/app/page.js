import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero / Quick Links */}
        <section className="bg-gray-100 py-8">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[
              "Bảng giá",
              "Vietcap IQ",
              "Margin",
              "AI News",
              "Academy",
              "Webinar",
            ].map((item) => (
              <div
                key={item}
                className="p-4 bg-white text-center rounded-lg shadow-sm cursor-pointer hover:shadow-md"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6 space-y-8 text-center">
            <h2 className="text-3xl font-bold">
              Chúng tôi cung cấp giải pháp tài chính toàn diện
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Tư vấn khách hàng cá nhân",
                  desc: "Đồng hành cùng bạn trên mọi quyết định đầu tư.",
                },
                {
                  title: "Môi giới khách hàng tổ chức",
                  desc: "Dịch vụ chuyên nghiệp đặt lợi ích khách hàng lên hàng đầu.",
                },
                {
                  title: "Quản lý gia sản",
                  desc: "Giải pháp toàn diện, chất lượng dịch vụ tối ưu.",
                },
                {
                  title: "Ngân hàng đầu tư",
                  desc: "Tư vấn tài chính hiệu quả, phù hợp với doanh nghiệp.",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="p-6 bg-white rounded-lg shadow hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights / Awards */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-6">
              Tại sao chọn Vietcap?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Nền tảng giao dịch dễ sử dụng",
                "Công cụ phân tích thông minh",
                "Tư vấn đầu tư giàu kinh nghiệm",
                "Trải nghiệm độc quyền",
              ].map((text, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white p-4 rounded shadow text-center"
                >
                  {/* Icon placeholder */}
                  <span className="text-2xl">✓</span> {text}
                </div>
              ))}
            </div>

            {/* Optionally add awards images here */}
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
