// ============================
// DỮ LIỆU TOUR VIỆT NAM (JSON)
// ============================
// Mảng tour giúp dễ quản lý và render giao diện linh hoạt
const tours = [
  {
    id: 1,
    name: "Hạ Long - Ninh Bình - Tràng An",
    region: "north",
    location: "Miền Bắc · Hạ Long, Ninh Bình",
    days: "4 ngày 3 đêm",
    price: "5.900.000",
    tag: "Biển & Di sản",
    image:
      "https://images.unsplash.com/photo-1559599101-7466fe601f50?auto=format&fit=crop&w=900&q=80",
    highlights: ["Du thuyền Vịnh Hạ Long", "Tràng An - Tam Cốc", "Hải sản Hạ Long"],
  },
  {
    id: 2,
    name: "Sapa - Fansipan - Bản Cát Cát",
    region: "north",
    location: "Miền Bắc · Lào Cai",
    days: "3 ngày 2 đêm",
    price: "4.990.000",
    tag: "Núi & Văn hoá",
    image:
      "https://images.unsplash.com/photo-1548783307-f63adc1a4d03?auto=format&fit=crop&w=900&q=80",
    highlights: ["Cáp treo Fansipan", "Check-in bản Cát Cát", "Săn mây đèo Ô Quy Hồ"],
  },
  {
    id: 3,
    name: "Hà Giang - Đồng Văn - Mã Pì Lèng",
    region: "north",
    location: "Miền Bắc · Hà Giang",
    days: "4 ngày 3 đêm",
    price: "6.500.000",
    tag: "Cung đường đèo",
    image:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80",
    highlights: ["Cao nguyên đá Đồng Văn", "Đèo Mã Pì Lèng", "Phố cổ Đồng Văn"],
  },
  {
    id: 4,
    name: "Đà Nẵng - Hội An - Bà Nà Hills",
    region: "central",
    location: "Miền Trung · Đà Nẵng",
    days: "4 ngày 3 đêm",
    price: "7.200.000",
    tag: "Biển & Giải trí",
    image:
      "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=80",
    highlights: ["Cầu Vàng Bà Nà", "Phố cổ Hội An", "Biển Mỹ Khê"],
  },
  {
    id: 5,
    name: "Huế - Đà Nẵng - Hội An",
    region: "central",
    location: "Miền Trung · Huế, Đà Nẵng",
    days: "5 ngày 4 đêm",
    price: "8.300.000",
    tag: "Di sản & Văn hoá",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
    highlights: ["Đại Nội Huế", "Lăng Khải Định", "Hội An đêm đèn lồng"],
  },
  {
    id: 6,
    name: "Quy Nhơn - Kỳ Co - Eo Gió",
    region: "central",
    location: "Miền Trung · Quy Nhơn",
    days: "3 ngày 2 đêm",
    price: "5.700.000",
    tag: "Biển xanh",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
    highlights: ["Biển Kỳ Co", "Eo Gió", "Ẩm thực Quy Nhơn"],
  },
  {
    id: 7,
    name: "Phú Quốc nghỉ dưỡng 5 sao",
    region: "south",
    location: "Miền Nam · Phú Quốc",
    days: "4 ngày 3 đêm",
    price: "9.500.000",
    tag: "Nghỉ dưỡng biển",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    highlights: ["Resort 5 sao", "Cáp treo Hòn Thơm", "Lặn ngắm san hô"],
  },
  {
    id: 8,
    name: "Miền Tây sông nước - Chợ nổi Cái Răng",
    region: "south",
    location: "Miền Nam · Cần Thơ",
    days: "2 ngày 1 đêm",
    price: "2.900.000",
    tag: "Sông nước",
    image:
      "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&w=900&q=80",
    highlights: ["Chợ nổi Cái Răng", "Vườn trái cây", "Đờn ca tài tử"],
  },
  {
    id: 9,
    name: "Côn Đảo thiêng liêng & biển xanh",
    region: "south",
    location: "Miền Nam · Côn Đảo",
    days: "3 ngày 2 đêm",
    price: "7.800.000",
    tag: "Tâm linh & Biển",
    image:
      "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=900&q=80",
    highlights: ["Nghĩa trang Hàng Dương", "Bãi Đầm Trầu", "Lặn ngắm san hô"],
  },
];

// ============================
// HÀM TIỆN ÍCH
// ============================

/**
 * Render danh sách tour theo vùng miền
 * @param {"all" | "north" | "central" | "south"} region
 */
function renderTours(region = "all") {
  const container = document.getElementById("tourList");
  if (!container) return;

  const filtered =
    region === "all" ? tours : tours.filter((tour) => tour.region === region);

  container.innerHTML = "";

  filtered.forEach((tour) => {
    const article = document.createElement("article");
    article.className =
      "tour-card bg-white rounded-2xl overflow-hidden shadow-md shadow-slate-200 hover:shadow-2xl transition flex flex-col";

    article.innerHTML = `
      <div class="relative h-48 overflow-hidden">
        <img
          src="${tour.image}"
          alt="${tour.name}"
          class="w-full h-full object-cover"
        />
        <div class="absolute top-3 left-3 rounded-full bg-emerald-500 text-white text-[11px] font-semibold px-3 py-1 flex items-center gap-1 shadow-md">
          <i class="fa-solid fa-leaf text-[10px]"></i>
          ${tour.tag}
        </div>
      </div>
      <div class="flex-1 flex flex-col p-4 sm:p-5">
        <h3 class="font-semibold text-sm sm:text-base text-slate-900 mb-1.5">
          ${tour.name}
        </h3>
        <p class="text-[11px] text-emerald-600 font-medium mb-1.5">
          ${tour.location}
        </p>
        <div class="flex items-center justify-between text-[11px] mb-3">
          <div class="flex items-center gap-1.5 text-slate-500">
            <i class="fa-regular fa-clock text-[11px]"></i>
            <span>${tour.days}</span>
          </div>
          <div class="flex items-center gap-1.5 text-slate-500">
            <i class="fa-solid fa-users text-[11px]"></i>
            <span>Nhóm nhỏ 15 - 22 khách</span>
          </div>
        </div>
        <ul class="space-y-1 text-[11px] text-slate-600 mb-3">
          ${tour.highlights
            .map(
              (item) =>
                `<li class="flex items-start gap-1.5">
                  <i class="fa-solid fa-circle-check text-emerald-500 mt-[2px] text-[9px]"></i>
                  <span>${item}</span>
                </li>`
            )
            .join("")}
        </ul>
        <div class="mt-auto pt-2 flex items-center justify-between">
          <div class="leading-tight">
            <div class="text-[11px] text-slate-400">Giá từ</div>
            <div class="text-base font-semibold text-amber-500">
              ${tour.price} đ
            </div>
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-full border border-emerald-500 text-emerald-600 text-[11px] font-semibold px-4 py-2 hover:bg-emerald-500 hover:text-white transition"
          >
            Xem chi tiết
            <i class="fa-solid fa-arrow-right text-[9px]"></i>
          </button>
        </div>
      </div>
    `;

    container.appendChild(article);
  });
}

/**
 * Cập nhật trạng thái active cho các nút filter tour
 * @param {string} region
 */
function setActiveFilter(region) {
  const buttons = document.querySelectorAll(".tour-filter-btn");
  buttons.forEach((btn) => {
    const isActive = btn.dataset.region === region || (region === "all" && btn.dataset.region === "all");
    if (isActive) {
      btn.classList.add("bg-emerald-500", "text-white");
      btn.classList.remove("text-slate-600", "hover:bg-slate-100");
    } else {
      btn.classList.remove("bg-emerald-500", "text-white");
      btn.classList.add("text-slate-600", "hover:bg-slate-100");
    }
  });
}

// ============================
// SỰ KIỆN TƯƠNG TÁC GIAO DIỆN
// ============================

document.addEventListener("DOMContentLoaded", () => {
  // Sticky header: đổi nền khi scroll
  const header = document.getElementById("mainHeader");
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("header-scrolled");
      header.classList.remove("header-transparent");
    } else {
      header.classList.add("header-transparent");
      header.classList.remove("header-scrolled");
    }
  };
  onScroll();
  window.addEventListener("scroll", onScroll);

  // Render tour lần đầu với tất cả vùng miền
  renderTours("all");
  setActiveFilter("all");

  // Lọc tour theo tab vùng miền
  const filterButtons = document.querySelectorAll(".tour-filter-btn");
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const region = btn.dataset.region || "all";
      renderTours(region);
      setActiveFilter(region);
    });
  });

  // Mobile menu slide-in
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenuClose = document.getElementById("mobileMenuClose");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileBackdrop = document.getElementById("mobileBackdrop");

  const openMobileMenu = () => {
    if (!mobileMenu || !mobileBackdrop) return;
    mobileMenu.classList.add("mobile-menu-open");
    mobileBackdrop.classList.remove("hidden");
  };

  const closeMobileMenu = () => {
    if (!mobileMenu || !mobileBackdrop) return;
    mobileMenu.classList.remove("mobile-menu-open");
    mobileBackdrop.classList.add("hidden");
  };

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", openMobileMenu);
  }
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu);
  }
  if (mobileBackdrop) {
    mobileBackdrop.addEventListener("click", closeMobileMenu);
  }

  // Smooth scroll cho các link có data-scroll
  const scrollLinks = document.querySelectorAll("a[data-scroll]");
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();

      // Nếu link có yêu cầu filter region thì áp dụng luôn
      const regionFilter = link.dataset.regionFilter;
      if (regionFilter) {
        renderTours(regionFilter);
        setActiveFilter(regionFilter);
      }

      // Cuộn mượt tới section
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });

      // Đóng menu mobile sau khi chọn
      if (link.dataset.closeMobile === "true" || link.hasAttribute("data-close-mobile")) {
        closeMobileMenu();
      }
    });
  });
});

