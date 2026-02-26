// ============================
// DỮ LIỆU MẪU (JSON)
// ============================

// Danh sách tour theo vùng miền
const toursByRegion = [
  {
    id: 1,
    region: "north",
    name: "Hà Nội - Hạ Long - Ninh Bình 4N3Đ",
    desc: "Thủ đô nghìn năm văn hiến, di sản thiên nhiên Hạ Long và non nước Ninh Bình.",
    days: "4 ngày 3 đêm",
    price: "5.900.000",
    badge: "Miền Bắc",
    image: "images/tour-1.jpg",
    highlights: ["Lăng Bác", "Văn Miếu", "Vịnh Hạ Long", "Tam Cốc"],
    fullDesc: "Hành trình kết hợp thủ đô Hà Nội với hai di sản nổi bật: vịnh Hạ Long (di sản thiên nhiên thế giới) và quần thể Tràng An - Tam Cốc (di sản văn hoá và thiên nhiên). Bạn sẽ thăm Lăng Bác, Văn Miếu, dạo phố cổ, sau đó khám phá Hạ Long bằng tàu và chèo thuyền tại Tam Cốc.",
    itinerary: [
      "Ngày 1: Đón tại Hà Nội, tham quan Lăng Chủ tịch Hồ Chí Minh, Văn Miếu - Quốc Tử Giám, Hồ Gươm, phố cổ. Nghỉ đêm tại Hà Nội.",
      "Ngày 2: Hà Nội - Hạ Long, du thuyền vịnh Hạ Long (4–5 giờ), tham quan hang Sửng Sốt. Ăn trưa trên tàu. Nghỉ đêm tại Hạ Long.",
      "Ngày 3: Hạ Long - Ninh Bình, tham quan Tam Cốc - Bích Động (chèo thuyền), có thể ghé Chùa Bái Đính. Nghỉ đêm tại Ninh Bình.",
      "Ngày 4: Tràng An (thuyền) hoặc rời Ninh Bình về Hà Nội, kết thúc tour.",
    ],
    includes: ["Xe máy lạnh đời mới", "Khách sạn 2–3 sao (phòng đôi/twin)", "Vé tham quan theo chương trình", "Hướng dẫn viên tiếng Việt", "Bảo hiểm du lịch"],
    excludes: ["Ăn uống (trừ khi ghi rõ)", "Chi phí cá nhân", "Vé máy bay/tàu đến Hà Nội"],
  },
  {
    id: 2,
    region: "north",
    name: "Sapa - Fansipan - Bản Cát Cát 3N2Đ",
    desc: "Săn mây trên đỉnh Fansipan, trải nghiệm bản làng và văn hoá Tây Bắc.",
    days: "3 ngày 2 đêm",
    price: "4.990.000",
    badge: "Núi & Văn hoá",
    image: "images/tour-2.jpg",
    highlights: ["Cáp treo Fansipan", "Bản Cát Cát", "Đỉnh Ô Quy Hồ"],
    fullDesc: "Tour Sapa trọn gói với cáp treo Fansipan lên nóc nhà Đông Dương, tham quan bản Cát Cát và trải nghiệm văn hoá người Mông, Dao. Phù hợp gia đình và nhóm bạn ưa khám phá.",
    itinerary: [
      "Ngày 1: Hà Nội - Sapa (xe giường nằm/limousine), nhận phòng, tham quan bản Cát Cát, xem thác và làng dệt thổ cẩm. Nghỉ đêm Sapa.",
      "Ngày 2: Cáp treo Fansipan, chinh phục đỉnh 3.143m, check-in đèo Ô Quy Hồ. Nghỉ đêm Sapa.",
      "Ngày 3: Chợ Sapa (nếu đi cuối tuần), thưởng thức ẩm thực Tây Bắc, về lại Hà Nội.",
    ],
    includes: ["Xe Hà Nội - Sapa - Hà Nội", "Khách sạn Sapa 2–3 sao", "Vé cáp treo Fansipan", "Vé tham quan bản Cát Cát", "Hướng dẫn viên"],
    excludes: ["Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 3,
    region: "north",
    name: "Mộc Châu - Mai Châu 3N2Đ",
    desc: "Đồi chè, thung lũng mận, bản làng dân tộc và khí hậu mát mẻ quanh năm.",
    days: "3 ngày 2 đêm",
    price: "3.990.000",
    badge: "Tây Bắc",
    image: "images/tour-3.jpg",
    highlights: ["Đồi chè Mộc Châu", "Thung lũng Mai Châu", "Bản Lác"],
    fullDesc: "Hành trình Tây Bắc nhẹ nhàng với đồi chè Mộc Châu, thung lũng Mai Châu và bản Lác. Phù hợp gia đình, cặp đôi, thích không khí mát mẻ và trải nghiệm bản làng.",
    itinerary: [
      "Ngày 1: Hà Nội - Mộc Châu, tham quan đồi chè, thung lũng mận (mùa hoa/tháng 1–2). Nghỉ đêm Mộc Châu.",
      "Ngày 2: Mộc Châu - Mai Châu, tham quan bản Lác, trải nghiệm homestay hoặc khách sạn. Nghỉ đêm Mai Châu.",
      "Ngày 3: Mai Châu - Hà Nội, dạo làng, mua sắm đặc sản, về Hà Nội.",
    ],
    includes: ["Xe máy lạnh", "Khách sạn/homestay 2 đêm", "Vé tham quan", "Hướng dẫn viên"],
    excludes: ["Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 4,
    region: "north",
    name: "Hà Giang - Đồng Văn - Mã Pì Lèng 4N3Đ",
    desc: "Cao nguyên đá, đèo Mã Pì Lèng hùng vĩ và văn hoá bản địa đặc sắc.",
    days: "4 ngày 3 đêm",
    price: "6.400.000",
    badge: "Cung đường đèo",
    image: "images/tour-4.jpg",
    highlights: ["Đèo Mã Pì Lèng", "Cao nguyên đá", "Chợ tình Đồng Văn"],
    fullDesc: "Hành trình Hà Giang qua đèo Mã Pì Lèng, cao nguyên đá Đồng Văn và các bản làng dân tộc. Lý tưởng mùa hoa tam giác mạch (10–11) hoặc mùa lúa chín.",
    itinerary: [
      "Ngày 1: Hà Nội - Hà Giang, dừng Tuyên Quang. Nghỉ đêm Hà Giang.",
      "Ngày 2: Hà Giang - Đồng Văn qua đèo Mã Pì Lèng, thăm dinh thự họ Vương. Nghỉ đêm Đồng Văn.",
      "Ngày 3: Đồng Văn - Mèo Vạc - Hà Giang, cung đường đẹp. Nghỉ đêm Hà Giang.",
      "Ngày 4: Hà Giang - Hà Nội, kết thúc.",
    ],
    includes: ["Xe máy lạnh", "Khách sạn 3 đêm", "Vé các điểm tham quan", "Hướng dẫn viên"],
    excludes: ["Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 5,
    region: "central",
    name: "Đà Nẵng - Hội An - Bà Nà Hills 4N3Đ",
    desc: "Biển Mỹ Khê, phố cổ Hội An và Cầu Vàng trên Bà Nà Hills.",
    days: "4 ngày 3 đêm",
    price: "7.200.000",
    badge: "Biển & Di sản",
    image: "images/tour-5.jpg",
    highlights: ["Cầu Vàng", "Phố cổ Hội An", "Biển Mỹ Khê"],
    fullDesc: "Kết hợp biển Đà Nẵng, phố cổ Hội An và Bà Nà Hills (Cầu Vàng). Tour phổ biến cho khách lần đầu đến miền Trung.",
    itinerary: [
      "Ngày 1: Đón sân bay Đà Nẵng, nhận phòng, tắm biển Mỹ Khê. Nghỉ đêm Đà Nẵng.",
      "Ngày 2: Bà Nà Hills, cáp treo, Cầu Vàng, làng Pháp. Nghỉ đêm Đà Nẵng.",
      "Ngày 3: Đà Nẵng - Hội An, tham quan phố cổ, Chùa Cầu, làng gốm. Nghỉ đêm Hội An.",
      "Ngày 4: Tự do Hội An hoặc về sân bay Đà Nẵng, kết thúc.",
    ],
    includes: ["Xe + hướng dẫn", "Khách sạn 3 đêm", "Vé Bà Nà Hills", "Vé Hội An"],
    excludes: ["Vé máy bay", "Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 6,
    region: "central",
    name: "Huế - Đà Nẵng - Hội An 5N4Đ",
    desc: "Di sản cung đình Huế, đèo Hải Vân và phố cổ lung linh đèn lồng.",
    days: "5 ngày 4 đêm",
    price: "8.300.000",
    badge: "Miền Trung",
    image: "images/tour-6.jpg",
    highlights: ["Đại Nội Huế", "Chùa Thiên Mụ", "Hội An đèn lồng"],
    fullDesc: "Hành trình dài 5 ngày qua Huế (Đại Nội, chùa Thiên Mụ), đèo Hải Vân, Đà Nẵng và Hội An. Trải nghiệm di sản và biển trọn vẹn.",
    itinerary: [
      "Ngày 1: Đón Huế/Đà Nẵng, tham quan Đại Nội, chùa Thiên Mụ. Nghỉ đêm Huế.",
      "Ngày 2: Lăng Minh Mạng hoặc Tự Đức, qua đèo Hải Vân về Đà Nẵng. Nghỉ đêm Đà Nẵng.",
      "Ngày 3: Bà Nà Hills hoặc biển Mỹ Khê. Nghỉ đêm Đà Nẵng.",
      "Ngày 4: Hội An phố cổ, làng gốm, đèn lồng. Nghỉ đêm Hội An.",
      "Ngày 5: Tự do, tiễn sân bay.",
    ],
    includes: ["Xe + hướng dẫn", "Khách sạn 4 đêm", "Vé tham quan Huế, Bà Nà, Hội An"],
    excludes: ["Vé máy bay", "Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 7,
    region: "central",
    name: "Quy Nhơn - Kỳ Co - Eo Gió 3N2Đ",
    desc: "Biển xanh, bãi cát mịn, check-in Eo Gió và thưởng thức hải sản tươi ngon.",
    days: "3 ngày 2 đêm",
    price: "5.700.000",
    badge: "Biển Quy Nhơn",
    image: "images/tour-7.jpg",
    highlights: ["Bãi Kỳ Co", "Eo Gió", "Hải sản tươi"],
    fullDesc: "Tour biển Quy Nhơn với bãi Kỳ Co, Eo Gió và ẩm thực hải sản. Phù hợp nhóm bạn, cặp đôi thích biển ít khách.",
    itinerary: [
      "Ngày 1: Đón sân bay Quy Nhơn, nhận phòng, tắm biển Quy Nhơn. Nghỉ đêm Quy Nhơn.",
      "Ngày 2: Tour bãi Kỳ Co (canô), Eo Gió, chụp ảnh. Ăn hải sản. Nghỉ đêm Quy Nhơn.",
      "Ngày 3: Tự do, mua đặc sản, tiễn sân bay.",
    ],
    includes: ["Xe + hướng dẫn", "Khách sạn 2 đêm", "Canô Kỳ Co", "Vé Eo Gió"],
    excludes: ["Vé máy bay", "Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 8,
    region: "central",
    name: "Phong Nha - Huế 4N3Đ",
    desc: "Khám phá hang động Phong Nha - Kẻ Bàng và di sản cố đô Huế.",
    days: "4 ngày 3 đêm",
    price: "6.900.000",
    badge: "Thiên nhiên & Di sản",
    image: "images/tour-8.jpg",
    highlights: ["Động Phong Nha", "Thiên đường", "Đại Nội Huế"],
    fullDesc: "Kết hợp hang động Phong Nha - Kẻ Bàng (di sản thiên nhiên) với cố đô Huế. Dành cho du khách thích thiên nhiên và lịch sử.",
    itinerary: [
      "Ngày 1: Đón Đồng Hới/Phong Nha, tham quan động Phong Nha (thuyền). Nghỉ đêm Phong Nha.",
      "Ngày 2: Động Thiên Đường hoặc động Tiên Sơn. Nghỉ đêm Phong Nha.",
      "Ngày 3: Phong Nha - Huế, tham quan Đại Nội, chùa Thiên Mụ. Nghỉ đêm Huế.",
      "Ngày 4: Lăng Tự Đức hoặc Minh Mạng, tiễn sân bay Huế.",
    ],
    includes: ["Xe + hướng dẫn", "Khách sạn 3 đêm", "Vé động Phong Nha, Thiên Đường", "Vé Đại Nội Huế"],
    excludes: ["Vé máy bay", "Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 9,
    region: "south",
    name: "Phú Quốc nghỉ dưỡng 5 sao 4N3Đ",
    desc: "Resort 5 sao, cáp treo Hòn Thơm, lặn ngắm san hô và chợ đêm Phú Quốc.",
    days: "4 ngày 3 đêm",
    price: "9.500.000",
    badge: "Nghỉ dưỡng biển",
    image: "images/tour-9.jpg",
    highlights: ["Cáp treo Hòn Thơm", "Lặn san hô", "Chợ đêm Dinh Cầu"],
    fullDesc: "Tour nghỉ dưỡng Phú Quốc với resort 5 sao, cáp treo Hòn Thơm, tour lặn ngắm san hô và chợ đêm. Phù hợp gia đình, honeymoon.",
    itinerary: [
      "Ngày 1: Đón sân bay Phú Quốc, nhận phòng resort, tắm biển, ngắm hoàng hôn. Nghỉ đêm resort.",
      "Ngày 2: Cáp treo Hòn Thơm, VinWonders (tùy chọn), bãi Sao. Nghỉ đêm resort.",
      "Ngày 3: Tour 3–4 đảo, lặn ngắm san hô. Chiều chợ đêm Dinh Cầu. Nghỉ đêm resort.",
      "Ngày 4: Tự do, tham quan trang trại tiêu/nước mắm, tiễn sân bay.",
    ],
    includes: ["Xe đón/tiễn sân bay", "Resort 5 sao 3 đêm", "Vé cáp treo Hòn Thơm", "Tour 3–4 đảo (cơ bản)"],
    excludes: ["Vé máy bay", "Ăn uống (trừ buffet sáng)", "VinWonders (tùy chọn)"],
  },
  {
    id: 10,
    region: "south",
    name: "Cần Thơ - Cái Răng - Vĩnh Long 3N2Đ",
    desc: "Chợ nổi Cái Răng, vườn trái cây và làng nghề truyền thống miền Tây.",
    days: "3 ngày 2 đêm",
    price: "3.600.000",
    badge: "Miền Tây",
    image: "images/tour-10.jpg",
    highlights: ["Chợ nổi Cái Răng", "Vườn trái cây", "Cầu Cần Thơ"],
    fullDesc: "Hành trình miền Tây đi chợ nổi Cái Răng sáng sớm, vườn trái cây Cần Thơ - Vĩnh Long và làng nghề. Trải nghiệm sông nước Nam Bộ.",
    itinerary: [
      "Ngày 1: TP.HCM - Cần Thơ, nhận phòng. Chiều tham quan Cầu Cần Thơ, bến Ninh Kiều. Nghỉ đêm Cần Thơ.",
      "Ngày 2: Chợ nổi Cái Răng (sáng sớm), vườn trái cây, có thể ghép Cần Thơ - Vĩnh Long. Nghỉ đêm Cần Thơ.",
      "Ngày 3: Vĩnh Long (vườn, làng nghề) hoặc về TP.HCM, kết thúc.",
    ],
    includes: ["Xe máy lạnh", "Khách sạn 2 đêm", "Thuyền chợ nổi", "Vé vườn trái cây", "Hướng dẫn viên"],
    excludes: ["Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 11,
    region: "south",
    name: "Đà Lạt 3N2Đ - Thành phố ngàn hoa",
    desc: "Thung lũng tình yêu, đồi chè Cầu Đất, làng hoa và ẩm thực Đà Lạt.",
    days: "3 ngày 2 đêm",
    price: "4.200.000",
    badge: "Cao nguyên",
    image: "images/tour-11.jpg",
    highlights: ["Thung lũng tình yêu", "Đồi chè Cầu Đất", "Làng hoa Vạn Thành"],
    fullDesc: "Tour Đà Lạt 3 ngày với thung lũng tình yêu, đồi chè Cầu Đất, làng hoa Vạn Thành và các điểm check-in quen thuộc. Khí hậu mát mẻ quanh năm.",
    itinerary: [
      "Ngày 1: Sân bay/TP.HCM - Đà Lạt, tham quan Dinh Bảo Đại, thung lũng tình yêu. Nghỉ đêm Đà Lạt.",
      "Ngày 2: Đồi chè Cầu Đất, làng hoa Vạn Thành, Ga Đà Lạt (tàu hỏa). Nghỉ đêm Đà Lạt.",
      "Ngày 3: Chợ Đà Lạt, mua sắm đặc sản, về sân bay/TP.HCM.",
    ],
    includes: ["Xe máy lạnh", "Khách sạn 2 đêm", "Vé tham quan theo chương trình", "Hướng dẫn viên"],
    excludes: ["Vé máy bay", "Ăn uống", "Chi phí cá nhân"],
  },
  // --- Tour thêm mới ---
  {
    id: 12,
    region: "north",
    name: "Ninh Bình - Tràng An - Bái Đính 2N1Đ",
    desc: "Tràng An bằng thuyền, chùa Bái Đính và Tam Cốc trong hai ngày.",
    days: "2 ngày 1 đêm",
    price: "2.490.000",
    badge: "Di sản",
    image: "images/tour-12.jpg",
    highlights: ["Tràng An", "Chùa Bái Đính", "Tam Cốc"],
    fullDesc: "Tour Ninh Bình ngắn 2N1Đ: Tràng An (thuyền), chùa Bái Đính và Tam Cốc. Phù hợp cuối tuần từ Hà Nội.",
    itinerary: [
      "Ngày 1: Hà Nội - Ninh Bình, Tràng An (thuyền), chùa Bái Đính. Nghỉ đêm Ninh Bình.",
      "Ngày 2: Tam Cốc - Bích Động (thuyền), về Hà Nội.",
    ],
    includes: ["Xe máy lạnh", "Khách sạn 1 đêm", "Vé Tràng An, Bái Đính, Tam Cốc", "Hướng dẫn viên"],
    excludes: ["Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 13,
    region: "north",
    name: "Hạ Long - Tuần Châu 2N1Đ (Tàu 3 sao)",
    desc: "Một đêm trên tàu vịnh Hạ Long, kayak và hang Luồn.",
    days: "2 ngày 1 đêm",
    price: "4.200.000",
    badge: "Vịnh Hạ Long",
    image: "images/tour-13.jpg",
    highlights: ["Tàu 3 sao", "Kayak", "Hang Luồn"],
    fullDesc: "Tour vịnh Hạ Long 2N1Đ với một đêm ngủ trên tàu 3 sao, chèo kayak và tham quan hang Luồn. Xuất phát từ Hà Nội hoặc Hạ Long.",
    itinerary: [
      "Ngày 1: Hạ Long - lên tàu, tham quan hang Sửng Sốt, kayak hoặc thuyền bamboo. Ăn trưa/tối trên tàu. Nghỉ đêm trên tàu.",
      "Ngày 2: Tai Chi sáng, hang Luồn, ăn sáng, trả phòng tàu, về bến.",
    ],
    includes: ["Tàu 3 sao (cabin đôi)", "Ăn: 1 bữa trưa, 1 bữa tối, 1 bữa sáng", "Vé tham quan", "Kayak"],
    excludes: ["Xe Hà Nội - Hạ Long (có thể đặt thêm)", "Đồ uống", "Chi phí cá nhân"],
  },
  {
    id: 14,
    region: "central",
    name: "Nha Trang - VinWonders - Bãi Dài 3N2Đ",
    desc: "Biển Nha Trang, VinWonders Nha Trang và bãi Dài.",
    days: "3 ngày 2 đêm",
    price: "5.990.000",
    badge: "Biển & Giải trí",
    image: "images/tour-14.jpg",
    highlights: ["VinWonders", "Bãi Dài", "Vinpearl Cable"],
    fullDesc: "Tour Nha Trang kết hợp VinWonders (cáp treo Vinpearl), bãi Dài và tắm biển. Phù hợp gia đình có trẻ nhỏ.",
    itinerary: [
      "Ngày 1: Đón sân bay Nha Trang, nhận phòng, tắm biển. Nghỉ đêm Nha Trang.",
      "Ngày 2: Cáp treo Vinpearl, VinWonders cả ngày. Nghỉ đêm Nha Trang.",
      "Ngày 3: Bãi Dài hoặc tự do, tiễn sân bay.",
    ],
    includes: ["Xe đón/tiễn", "Khách sạn 2 đêm", "Vé cáp treo + VinWonders"],
    excludes: ["Vé máy bay", "Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 15,
    region: "central",
    name: "Huế 2N1Đ - Cố đô một ngày",
    desc: "Đại Nội, chùa Thiên Mụ và một lăng (Minh Mạng hoặc Tự Đức).",
    days: "2 ngày 1 đêm",
    price: "2.890.000",
    badge: "Di sản Huế",
    image: "images/tour-15.jpg",
    highlights: ["Đại Nội", "Chùa Thiên Mụ", "Lăng"],
    fullDesc: "Tour Huế ngắn 2N1Đ: Đại Nội, chùa Thiên Mụ và một lăng (Minh Mạng hoặc Tự Đức). Phù hợp khách bay đến Huế hoặc từ Đà Nẵng.",
    itinerary: [
      "Ngày 1: Đón Huế, Đại Nội, chùa Thiên Mụ. Nghỉ đêm Huế.",
      "Ngày 2: Lăng Minh Mạng hoặc Tự Đức, tiễn sân bay/ga.",
    ],
    includes: ["Xe + hướng dẫn", "Khách sạn 1 đêm", "Vé Đại Nội, Thiên Mụ, 1 lăng"],
    excludes: ["Vé máy bay/tàu", "Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 16,
    region: "south",
    name: "Côn Đảo 3N2Đ - Lịch sử và biển",
    desc: "Nghĩa trang Hàng Dương, bảo tàng và bãi biển Côn Đảo.",
    days: "3 ngày 2 đêm",
    price: "8.900.000",
    badge: "Đảo & Lịch sử",
    image: "images/tour-16.jpg",
    highlights: ["Hàng Dương", "Bảo tàng", "Bãi Đầm Trầu"],
    fullDesc: "Tour Côn Đảo kết hợp tham quan lịch sử (nghĩa trang Hàng Dương, bảo tàng) và nghỉ dưỡng biển. Bay từ TP.HCM.",
    itinerary: [
      "Ngày 1: Bay TP.HCM - Côn Đảo, nhận phòng, tham quan bảo tàng Côn Đảo. Nghỉ đêm Côn Đảo.",
      "Ngày 2: Nghĩa trang Hàng Dương, di tích nhà tù, bãi Đầm Trầu. Nghỉ đêm Côn Đảo.",
      "Ngày 3: Tự do, tiễn sân bay Côn Đảo.",
    ],
    includes: ["Xe đón/tiễn sân bay đảo", "Khách sạn 2 đêm", "Vé tham quan"],
    excludes: ["Vé máy bay TP.HCM - Côn Đảo", "Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 17,
    region: "south",
    name: "Mũi Né - Đồi cát - Làng chài 2N1Đ",
    desc: "Đồi cát trắng, đồi cát đỏ, làng chài Mũi Né và biển.",
    days: "2 ngày 1 đêm",
    price: "2.190.000",
    badge: "Biển & Trải nghiệm",
    image: "images/tour-17.jpg",
    highlights: ["Đồi cát đỏ", "Làng chài", "Fairy Stream"],
    fullDesc: "Tour Mũi Né 2N1Đ: đồi cát trắng/đỏ, làng chài, suối tiên (Fairy Stream). Xuất phát từ TP.HCM hoặc Phan Thiết.",
    itinerary: [
      "Ngày 1: TP.HCM/Phan Thiết - Mũi Né, đồi cát đỏ, làng chài, suối tiên. Nghỉ đêm Mũi Né.",
      "Ngày 2: Đồi cát trắng (sáng sớm), tắm biển, về TP.HCM/Phan Thiết.",
    ],
    includes: ["Xe máy lạnh", "Khách sạn 1 đêm", "Vé tham quan", "Hướng dẫn viên"],
    excludes: ["Ăn uống", "Chi phí cá nhân"],
  },
  // --- Tour đa dạng thêm ---
  {
    id: 18,
    region: "north",
    name: "Mù Cang Chải - Ruộng bậc thang 3N2Đ",
    desc: "Ruộng bậc thang vàng óng mùa lúa chín, đèo Khau Phạ và văn hóa Mông.",
    days: "3 ngày 2 đêm",
    price: "5.490.000",
    badge: "Trekking & Nhiếp ảnh",
    image: "images/tour-18.jpg",
    highlights: ["Ruộng bậc thang", "Đèo Khau Phạ", "Làng Mông"],
    fullDesc: "Tour Mù Cang Chải mùa lúa chín (tháng 9–10), trải nghiệm đèo Khau Phạ và các bản làng người Mông. Lý tưởng cho nhiếp ảnh và trekking nhẹ.",
    itinerary: [
      "Ngày 1: Hà Nội - Nghĩa Lộ - Mù Cang Chải, dừng chân đèo Khau Phạ. Nghỉ đêm Mù Cang Chải.",
      "Ngày 2: Tham quan La Pán Tẩn, Chế Cu Nha, Zế Xu Phình (ruộng bậc thang). Nghỉ đêm Mù Cang Chải.",
      "Ngày 3: Sáng sớm săn mây, về Hà Nội.",
    ],
    includes: ["Xe máy lạnh", "Khách sạn/homestay 2 đêm", "Vé tham quan", "Hướng dẫn viên"],
    excludes: ["Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 19,
    region: "north",
    name: "Hà Nội - Ẩm thực phố cổ 1 ngày",
    desc: "Đi bộ ăn sáng phở, bún chả, chè, cà phê trứng và nghe chuyện phố cổ.",
    days: "1 ngày",
    price: "890.000",
    badge: "Ẩm thực",
    image: "images/tour-19.jpg",
    highlights: ["Phở", "Bún chả", "Chè & Cà phê trứng"],
    fullDesc: "Tour ẩm thực Hà Nội một ngày: ăn sáng phở, trưa bún chả, chè, cà phê trứng và dạo phố cổ. Không bao gồm vé máy bay/tàu đến Hà Nội.",
    itinerary: [
      "Sáng: Điểm tâm phở (phố cổ), dạo Hồ Gươm, Văn Miếu (tùy chọn).",
      "Trưa: Bún chả, nước chè. Chiều: Cà phê trứng, bánh cuốn hoặc bánh mì, kết thúc.",
    ],
    includes: ["Hướng dẫn viên ẩm thực", "Các món ăn theo chương trình (sáng, trưa, chiều)"],
    excludes: ["Vé tham quan Văn Miếu (nếu vào)", "Đồ uống thêm", "Chi phí cá nhân"],
  },
  {
    id: 20,
    region: "central",
    name: "Cù Lao Chàm - Lặn ngắm san hô 1 ngày",
    desc: "Canô từ Hội An ra Cù Lao Chàm, lặn/snorkeling và bãi biển hoang sơ.",
    days: "1 ngày",
    price: "1.290.000",
    badge: "Đảo & Lặn biển",
    image: "images/tour-20.jpg",
    highlights: ["Cù Lao Chàm", "Lặn san hô", "Bãi Ông"],
    fullDesc: "Tour một ngày từ Hội An ra Cù Lao Chàm bằng canô cao tốc: lặn ngắm san hô, tắm biển Bãi Ông/Bãi Chồng, ăn trưa hải sản trên đảo.",
    itinerary: [
      "Sáng: Xuất phát từ cảng Cửa Đại, canô ra Cù Lao Chàm. Lặn/snorkeling khu vực san hô.",
      "Trưa: Ăn hải sản trên đảo. Chiều: Tự do tắm biển, về Hội An.",
    ],
    includes: ["Canô khứ hồi", "Vé vào đảo", "Dụng cụ lặn/snorkeling", "Ăn trưa", "Hướng dẫn viên"],
    excludes: ["Đồ uống", "Chi phí cá nhân"],
  },
  {
    id: 21,
    region: "north",
    name: "Cao Bằng - Pác Bó - Thác Bản Giốc 3N2Đ",
    desc: "Suối Lê-nin, hang Pác Bó, thác Bản Giốc và hồ Thang Hen.",
    days: "3 ngày 2 đêm",
    price: "5.790.000",
    badge: "Lịch sử & Thiên nhiên",
    image: "images/tour-21.jpg",
    highlights: ["Pác Bó", "Thác Bản Giốc", "Hồ Thang Hen"],
    fullDesc: "Tour Cao Bằng kết hợp di tích lịch sử Pác Bó và cảnh quan thác Bản Giốc, hồ Thang Hen. Phù hợp gia đình và đoàn yêu lịch sử.",
    itinerary: [
      "Ngày 1: Hà Nội - Cao Bằng, tham quan khu di tích Pác Bó (suối Lê-nin, hang Cốc Bó). Nghỉ đêm Cao Bằng.",
      "Ngày 2: Thác Bản Giốc, động Ngườm Ngao. Nghỉ đêm Cao Bằng.",
      "Ngày 3: Hồ Thang Hen hoặc chợ Cao Bằng, về Hà Nội.",
    ],
    includes: ["Xe máy lạnh", "Khách sạn 2 đêm", "Vé tham quan", "Hướng dẫn viên"],
    excludes: ["Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 22,
    region: "north",
    name: "Bắc Kạn - Hồ Ba Bể 2N1Đ",
    desc: "Hồ Ba Bể bằng thuyền, động Puông và bản làng Tày.",
    days: "2 ngày 1 đêm",
    price: "2.990.000",
    badge: "Hồ & Thiên nhiên",
    image: "images/tour-22.jpg",
    highlights: ["Hồ Ba Bể", "Động Puông", "Bản Pác Ngòi"],
    fullDesc: "Tour Hồ Ba Bể 2N1Đ: du thuyền trên hồ nước ngọt lớn nhất Việt Nam, tham quan động Puông và bản Pác Ngòi. Xuất phát từ Hà Nội.",
    itinerary: [
      "Ngày 1: Hà Nội - Bắc Kạn - Hồ Ba Bể, thuyền tham quan hồ, động Puông. Nghỉ đêm homestay bản Pác Ngòi.",
      "Ngày 2: Sáng tham quan bản, về Hà Nội.",
    ],
    includes: ["Xe máy lạnh", "Homestay 1 đêm", "Thuyền hồ Ba Bể", "Vé động Puông", "Hướng dẫn viên"],
    excludes: ["Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 23,
    region: "central",
    name: "Lý Sơn - Đảo tỏi 2N1Đ",
    desc: "Đảo Lý Sơn, hang Câu, chùa Hang và những cánh đồng tỏi ven biển.",
    days: "2 ngày 1 đêm",
    price: "3.490.000",
    badge: "Đảo & Trải nghiệm",
    image: "images/tour-23.jpg",
    highlights: ["Hang Câu", "Chùa Hang", "Cánh đồng tỏi"],
    fullDesc: "Tour Lý Sơn 2N1Đ từ Quảng Ngãi: hang Câu, chùa Hang, cổng Tò Vò và trải nghiệm làng chài, cánh đồng tỏi. Phù hợp nhóm bạn, cặp đôi.",
    itinerary: [
      "Ngày 1: Quảng Ngãi - Sa Kỳ - tàu ra Lý Sơn, tham quan hang Câu, chùa Hang, cổng Tò Vò. Nghỉ đêm Lý Sơn.",
      "Ngày 2: Chợ sáng, cánh đồng tỏi, tắm biển, tàu về đất liền.",
    ],
    includes: ["Xe + tàu khứ hồi", "Nhà nghỉ 1 đêm", "Vé tham quan", "Hướng dẫn viên"],
    excludes: ["Ăn uống", "Chi phí cá nhân"],
  },
  {
    id: 24,
    region: "south",
    name: "Cần Giờ - Rừng Sác - Đảo Thạnh An 1 ngày",
    desc: "Rừng ngập mặn Cần Giờ, khu dự trữ sinh quyển và đảo Thạnh An.",
    days: "1 ngày",
    price: "690.000",
    badge: "Sinh thái",
    image: "images/tour-24.jpg",
    highlights: ["Rừng Sác", "Đảo Thạnh An", "Lâm Viên"],
    fullDesc: "Tour một ngày từ TP.HCM ra Cần Giờ: tham quan rừng ngập mặn (có thể đi canô), đảo Thạnh An hoặc Lâm Viên Cần Giờ. Phù hợp gia đình, học sinh.",
    itinerary: [
      "Sáng: TP.HCM - Cần Giờ, tham quan Lâm Viên / Rừng Sác (canô vào rừng).",
      "Trưa: Ăn hải sản. Chiều: Đảo Thạnh An (tùy chọn) hoặc tắm biển, về TP.HCM.",
    ],
    includes: ["Xe máy lạnh", "Vé tham quan", "Ăn trưa", "Hướng dẫn viên"],
    excludes: ["Canô (tùy chọn trả thêm)", "Đồ uống", "Chi phí cá nhân"],
  },
  {
    id: 25,
    region: "central",
    name: "Bình Định - Quy Nhơn - Kỳ Co 4N3Đ",
    desc: "Quy Nhơn, Kỳ Co, Eo Gió và tháp Chăm Bình Định.",
    days: "4 ngày 3 đêm",
    price: "6.990.000",
    badge: "Biển & Văn hóa Chăm",
    image: "images/tour-25.jpg",
    highlights: ["Tháp Bánh Ít", "Kỳ Co", "Eo Gió"],
    fullDesc: "Tour Bình Định 4N3Đ: kết hợp biển Quy Nhơn (Kỳ Co, Eo Gió) và di sản tháp Chăm (Bánh Ít, Tháp Đôi). Phù hợp nhóm bạn, gia đình.",
    itinerary: [
      "Ngày 1: Đón sân bay Quy Nhơn, tham quan tháp Bánh Ít. Nghỉ đêm Quy Nhơn.",
      "Ngày 2: Tour bãi Kỳ Co (canô), Eo Gió. Nghỉ đêm Quy Nhơn.",
      "Ngày 3: Tự do tắm biển hoặc tháp Đôi, làng chài. Nghỉ đêm Quy Nhơn.",
      "Ngày 4: Tiễn sân bay.",
    ],
    includes: ["Xe + hướng dẫn", "Khách sạn 3 đêm", "Canô Kỳ Co", "Vé tháp Chăm", "Vé Eo Gió"],
    excludes: ["Vé máy bay", "Ăn uống", "Chi phí cá nhân"],
  },
];

// Danh sách combo du lịch
const combos = [
  {
    id: 1,
    name: "Combo Hà Nội - Đà Nẵng 4N3Đ",
    desc: "Vé máy bay khứ hồi + 3 đêm khách sạn 4 sao trung tâm gần biển.",
    originalPrice: "8.500.000",
    salePrice: "6.790.000",
    image: "images/combo-1.jpg",
    deadline: "2026-03-30T23:59:59",
  },
  {
    id: 2,
    name: "Combo Sài Gòn - Phú Quốc 3N2Đ",
    desc: "Vé máy bay + resort 5 sao + buffet sáng + đón tiễn sân bay.",
    originalPrice: "10.200.000",
    salePrice: "7.990.000",
    image: "images/combo-2.jpg",
    deadline: "2026-04-15T23:59:59",
  },
  {
    id: 3,
    name: "Combo Hà Nội - Đà Lạt 3N2Đ",
    desc: "Vé khứ hồi + khách sạn 3-4 sao trung tâm, phù hợp cặp đôi & gia đình.",
    originalPrice: "6.200.000",
    salePrice: "4.990.000",
    image: "images/combo-3.jpg",
    deadline: null, // không đếm ngược
  },
  {
    id: 4,
    name: "Combo Hà Nội - Huế - Hội An 5N4Đ",
    desc: "Vé máy bay + khách sạn 4 sao, tham quan Huế, Đà Nẵng và Hội An.",
    originalPrice: "11.500.000",
    salePrice: "9.490.000",
    image: "images/combo-4.jpg",
    deadline: "2026-05-31T23:59:59",
  },
  {
    id: 5,
    name: "Combo Sài Gòn - Côn Đảo 3N2Đ",
    desc: "Vé máy bay + khách sạn ven biển, tham quan các điểm tâm linh Côn Đảo.",
    originalPrice: "9.800.000",
    salePrice: "7.890.000",
    image: "images/combo-5.jpg",
    deadline: null,
  },
  {
    id: 6,
    name: "Combo Hà Nội - Nha Trang 4N3Đ",
    desc: "Vé khứ hồi + khách sạn 4 sao, phù hợp gia đình có trẻ nhỏ.",
    originalPrice: "9.200.000",
    salePrice: "7.450.000",
    image: "images/combo-6.jpg",
    deadline: "2026-08-15T23:59:59",
  },
];

// Lịch trình mẫu cho 3 điểm hot
const itineraries = [
  {
    id: "sapa",
    title: "Sapa 3N2Đ - Săn mây & Fansipan",
    days: [
      "Ngày 1: Hà Nội - Sapa, tham quan bản Cát Cát, trải nghiệm văn hoá bản địa.",
      "Ngày 2: Cáp treo Fansipan, chinh phục nóc nhà Đông Dương, check-in đèo Ô Quy Hồ.",
      "Ngày 3: Chợ Sapa, thưởng thức ẩm thực Tây Bắc, về lại Hà Nội.",
    ],
  },
  {
    id: "hoian",
    title: "Hội An 3N2Đ - Phố cổ & biển An Bàng",
    days: [
      "Ngày 1: Đến Đà Nẵng, di chuyển Hội An, dạo phố cổ, thả đèn hoa đăng.",
      "Ngày 2: Tham quan làng gốm Thanh Hà, làng rau Trà Quế, tắm biển An Bàng.",
      "Ngày 3: Tự do mua sắm đặc sản, quay về Đà Nẵng, ra sân bay.",
    ],
  },
  {
    id: "phuquoc",
    title: "Phú Quốc 3N2Đ - Biển & san hô",
    days: [
      "Ngày 1: Bay đến Phú Quốc, nhận phòng resort, tắm biển & ngắm hoàng hôn.",
      "Ngày 2: Tour 3-4 đảo, lặn ngắm san hô, tham quan chợ đêm Phú Quốc.",
      "Ngày 3: Tham quan trang trại tiêu, xưởng nước mắm, mua sắm quà, ra sân bay.",
    ],
  },
];

// Món ăn đặc sản
const foods = [
  {
    id: 1,
    name: "Phở Hà Nội",
    region: "Miền Bắc",
    image: "images/food-1.jpg",
    desc: "Nước dùng trong, ngọt xương, bánh phở mềm và thịt bò thái mỏng, ăn kèm rau thơm và quẩy.",
  },
  {
    id: 2,
    name: "Bún bò Huế",
    region: "Miền Trung",
    image: "images/food-2.jpg",
    desc: "Nước lèo đậm đà từ xương bò, hương sả, mắm ruốc, ăn kèm chả cua và rau sống.",
  },
  {
    id: 3,
    name: "Cao lầu Hội An",
    region: "Miền Trung",
    image: "images/food-3.jpg",
    desc: "Sợi mì vàng dai, thịt xá xíu, rau sống Trà Quế và tóp mỡ giòn tan, trộn cùng nước sốt đặc trưng.",
  },
  {
    id: 4,
    name: "Hủ tiếu Nam Vang",
    region: "Miền Nam",
    image: "images/food-4.jpg",
    desc: "Nước dùng thanh, topping đa dạng như tôm, thịt bằm, trứng cút, ăn kèm giá hẹ tươi.",
  },
  {
    id: 5,
    name: "Bánh mì Sài Gòn",
    region: "Miền Nam",
    image: "images/food-5.jpg",
    desc: "Ổ bánh mì giòn rụm với nhân chả, pate, thịt nguội, đồ chua và nước sốt đậm đà.",
  },
  {
    id: 6,
    name: "Chả cá Lã Vọng",
    region: "Miền Bắc",
    image: "images/food-6.jpg",
    desc: "Cá ướp nghệ nướng, chiên cùng thì là và hành lá, ăn kèm bún, lạc rang và mắm tôm.",
  },
  {
    id: 7,
    name: "Bánh cuốn Thanh Trì",
    region: "Miền Bắc",
    image: "images/food-7.jpg",
    desc: "Bánh mỏng mềm, nhân thịt băm mộc nhĩ, ăn kèm chả quế và nước mắm chấm chua ngọt.",
  },
  {
    id: 8,
    name: "Mì Quảng",
    region: "Miền Trung",
    image: "images/food-8.jpg",
    desc: "Sợi mì vàng, nước dùng ít nhưng đậm đà, ăn kèm tôm thịt, trứng cút và bánh tráng nướng.",
  },
  {
    id: 9,
    name: "Cơm tấm Sài Gòn",
    region: "Miền Nam",
    image: "images/food-9.jpg",
    desc: "Cơm tấm hạt rời, sườn nướng, bì, chả trứng, đồ chua và nước mắm pha vừa ăn.",
  },
  {
    id: 10,
    name: "Gỏi cuốn",
    region: "Miền Nam",
    image: "images/food-10.jpg",
    desc: "Cuốn tôm thịt, bún, rau sống và bánh tráng mềm, chấm mắm nêm hoặc tương đặc.",
  },
];

// Cẩm nang blog (hiển thị trên trang chủ)
const guidePosts = [
  {
    id: 1,
    title: "5 lưu ý quan trọng khi đi biển Phú Quốc mùa cao điểm",
    summary:
      "Chọn thời gian phù hợp, đặt dịch vụ sớm và mẹo tránh đông tại các điểm check-in hot.",
  },
  {
    id: 2,
    title: "Kinh nghiệm săn mây Sapa an toàn cho gia đình có trẻ nhỏ",
    summary:
      "Gợi ý lịch trình nhẹ nhàng, lựa chọn phương tiện di chuyển và khách sạn phù hợp.",
  },
  {
    id: 3,
    title: "Lịch trình 4N3Đ khám phá Hội An - Đà Nẵng lần đầu",
    summary:
      "Kết hợp biển, phố cổ và trải nghiệm ẩm thực địa phương trong một chuyến đi.",
  },
  {
    id: 4,
    title: "Hà Giang mùa hoa tam giác mạch: thời điểm và lịch trình gợi ý",
    summary:
      "Tháng 10–11 là cao điểm hoa tam giác mạch; gợi ý cung đường và điểm chụp ảnh đẹp.",
  },
  {
    id: 5,
    title: "Nên đi Ninh Bình mùa nào? Gợi ý Tràng An, Tam Cốc, Bái Đính",
    summary:
      "Mùa lúa vàng, mùa khô và các tour 1–2 ngày phù hợp gia đình.",
  },
  {
    id: 6,
    title: "Cần mang gì khi đi tour miền Tây 2N1Đ hoặc 3N2Đ",
    summary:
      "Danh sách đồ dùng, trang phục và mẹo chọn tour chợ nổi Cái Răng.",
  },
];

// Bản tin lễ hội (hiển thị trên trang chủ)
const events = [
  {
    id: 1,
    name: "Lễ hội pháo hoa quốc tế Đà Nẵng",
    location: "Đà Nẵng",
    time: "Tháng 6 - 7 hằng năm",
    highlight: "Các đội pháo hoa quốc tế, hoạt động lễ hội đường phố sôi động.",
  },
  {
    id: 2,
    name: "Festival Huế",
    location: "Thừa Thiên Huế",
    time: "Dự kiến tháng 4/2026",
    highlight:
      "Không gian văn hoá cung đình, nhã nhạc cung đình Huế và lễ hội áo dài.",
  },
  {
    id: 3,
    name: "Lễ hội hoa Đà Lạt",
    location: "Lâm Đồng",
    time: "Cuối năm 2026",
    highlight: "Trưng bày hoa, diễu hành đường phố và các đêm nhạc ngoài trời.",
  },
  {
    id: 4,
    name: "Lễ hội hoa tam giác mạch Hà Giang",
    location: "Hà Giang",
    time: "Tháng 10 - 11/2026",
    highlight: "Cánh đồng hoa tam giác mạch, văn hoá các dân tộc vùng cao.",
  },
  {
    id: 5,
    name: "Lễ hội Ok Om Bok (Cúng Trăng) Trà Vinh",
    location: "Trà Vinh",
    time: "Tháng 10 âm lịch",
    highlight: "Đua ghe ngo, đua bò, ẩm thực Khmer Nam Bộ.",
  },
];

// Slider hero: ảnh phong cảnh Việt Nam (đặt file: hero-1-halong.jpg, hero-2-terrace.jpg, hero-3-hoian.jpg vào thư mục images/)
const heroSlides = [
  "images/hero-1-halong.jpg",
  "images/hero-2-terrace.jpg",
  "images/hero-3-hoian.jpg",
];

// ============================
// HÀM RENDER UI
// ============================

/**
 * Render danh sách tour theo vùng miền
 * @param {"north" | "central" | "south"} region
 */
function renderToursRegion(region) {
  const container = document.getElementById("toursRegionList");
  if (!container) return;

  const list = toursByRegion.filter((t) => t.region === region);
  container.innerHTML = "";

  list.forEach((tour) => {
    const card = document.createElement("article");
    card.className =
      "tour-card bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-2xl transition flex flex-col";
    card.dataset.tourId = String(tour.id);

    const highlights = tour.highlights || [];
    const highlightsHtml =
      highlights.length > 0
        ? `<div class="flex flex-wrap gap-1 mb-2">
            ${highlights.map((h) => `<span class="inline-block rounded-full bg-slate-100 text-slate-600 px-2 py-0.5 text-[10px]">${h}</span>`).join("")}
          </div>`
        : "";

    card.innerHTML = `
      <div class="relative h-40 overflow-hidden">
        <img src="${tour.image}" alt="${tour.name}" class="w-full h-full object-cover tour-card-img" loading="lazy" />
        <div class="absolute top-3 left-3 rounded-full bg-primary text-white text-[11px] font-semibold px-3 py-1 flex items-center gap-1 shadow-md">
          <i class="fa-solid fa-location-dot text-[10px]"></i>
          ${tour.badge}
        </div>
      </div>
      <div class="flex-1 flex flex-col p-4 sm:p-5 text-xs">
        <h3 class="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
          ${tour.name}
        </h3>
        <p class="text-slate-500 mb-2">
          ${tour.desc}
        </p>
        ${highlightsHtml}
        <div class="flex items-center justify-between text-[11px] mb-3">
          <span class="inline-flex items-center gap-1 text-slate-500">
            <i class="fa-regular fa-clock text-[10px]"></i>${tour.days}
          </span>
          <span class="inline-flex items-center gap-1 text-amber-500 font-semibold">
            <i class="fa-solid fa-tag text-[10px]"></i>${tour.price} đ
          </span>
        </div>
        <button
          type="button"
          class="tour-detail-btn mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-primary text-primary px-4 py-2 text-[11px] font-semibold hover:bg-primary hover:text-white transition cta-soft"
        >
          Xem chi tiết
          <i class="fa-solid fa-arrow-right text-[9px]"></i>
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Cập nhật tab vùng miền đang active
 * @param {string} region
 */
function setActiveRegionTab(region) {
  const tabs = document.querySelectorAll(".region-tab");
  tabs.forEach((tab) => {
    const isActive = tab.dataset.region === region;
    if (isActive) {
      tab.classList.add("bg-primary", "text-white");
      tab.classList.remove("text-slate-600", "hover:bg-slate-100");
    } else {
      tab.classList.remove("bg-primary", "text-white");
      tab.classList.add("text-slate-600", "hover:bg-slate-100");
    }
  });
}

/**
 * Mở modal chi tiết tour (mô tả đầy đủ, lịch trình, bao gồm/chưa bao gồm)
 * @param {number} tourId
 */
function openTourDetailModal(tourId) {
  const modal = document.getElementById("tourDetailModal");
  const body = document.getElementById("tourDetailBody");
  if (!modal || !body) return;

  const tour = toursByRegion.find((t) => t.id === tourId);
  if (!tour) return;

  const itinerary = tour.itinerary || [];
  const includes = tour.includes || [];
  const excludes = tour.excludes || [];
  const fullDesc = tour.fullDesc || tour.desc;

  body.innerHTML = `
    <div class="relative rounded-xl overflow-hidden mb-4 h-40 bg-slate-100">
      <img src="${tour.image}" alt="${tour.name}" class="w-full h-full object-cover" />
      <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3 text-white">
        <span class="text-[10px] uppercase tracking-wider text-emerald-200">${tour.badge}</span>
        <h2 id="tourDetailTitle" class="text-base font-semibold">${tour.name}</h2>
        <p class="text-xs opacity-90">${tour.days} · ${tour.price} đ/khách</p>
      </div>
    </div>
    <p class="text-slate-600 mb-4">${fullDesc}</p>
    ${tour.highlights?.length ? `<div class="flex flex-wrap gap-1.5 mb-4"><span class="text-slate-500 text-[11px]">Điểm nổi bật:</span> ${tour.highlights.map((h) => `<span class="rounded-full bg-slate-100 text-slate-600 px-2 py-0.5 text-[10px]">${h}</span>`).join("")}</div>` : ""}
    ${itinerary.length ? `<h3 class="font-semibold text-slate-900 mb-2 text-sm">Lịch trình</h3><ol class="list-decimal list-inside space-y-1.5 text-slate-600 mb-4">${itinerary.map((d) => `<li>${d}</li>`).join("")}</ol>` : ""}
    ${includes.length ? `<h3 class="font-semibold text-slate-900 mb-2 text-sm">Bao gồm</h3><ul class="space-y-1 text-slate-600 mb-4">${includes.map((i) => `<li class="flex items-start gap-2"><i class="fa-solid fa-check text-primary mt-0.5 text-[10px]"></i><span>${i}</span></li>`).join("")}</ul>` : ""}
    ${excludes.length ? `<h3 class="font-semibold text-slate-900 mb-2 text-sm">Chưa bao gồm</h3><ul class="space-y-1 text-slate-600 mb-4">${excludes.map((e) => `<li class="flex items-start gap-2"><i class="fa-solid fa-times text-slate-400 mt-0.5 text-[10px]"></i><span>${e}</span></li>`).join("")}</ul>` : ""}
    <div class="flex gap-2 pt-2 border-t border-slate-100">
      <a href="tel:19001234" class="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white py-2.5 text-sm font-semibold cta-main">
        <i class="fa-solid fa-phone text-xs"></i> Gọi đặt tour
      </a>
      <a href="index.html#newsletter" class="inline-flex items-center justify-center gap-2 rounded-full border border-primary text-primary px-4 py-2.5 text-sm font-semibold cta-soft">
        Đăng ký tư vấn
      </a>
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeTourDetailModal() {
  const modal = document.getElementById("tourDetailModal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/**
 * Render danh sách combo
 */
function renderCombos() {
  const container = document.getElementById("comboList");
  if (!container) return;
  container.innerHTML = "";

  combos.forEach((combo) => {
    const card = document.createElement("article");
    card.className =
      "bg-white rounded-2xl overflow-hidden shadow-soft flex flex-col combo-card";
    card.dataset.deadline = combo.deadline || "";

    const orig = parseInt(String(combo.originalPrice).replace(/\./g, ""), 10) || 0;
    const sale = parseInt(String(combo.salePrice).replace(/\./g, ""), 10) || 0;
    const discountPercent = orig > 0 ? Math.round((1 - sale / orig) * 100) : 0;
    const badgeHtml =
      discountPercent >= 15
        ? `<span class="combo-badge combo-badge--sale">Tiết kiệm ${discountPercent}%</span>`
        : combo.deadline
          ? `<span class="combo-badge combo-badge--hot">Hot</span>`
          : "";

    card.innerHTML = `
      <div class="relative h-40 overflow-hidden">
        <img src="${combo.image}" alt="${combo.name}" class="w-full h-full object-cover" loading="lazy">
        ${badgeHtml}
        <div class="absolute top-3 left-3 rounded-full bg-accent text-white text-[11px] font-semibold px-3 py-1 flex items-center gap-1 shadow-md">
          <i class="fa-solid fa-plane-departure text-[10px]"></i>
          Vé + Khách sạn
        </div>
      </div>
      <div class="flex-1 flex flex-col p-4 sm:p-5 text-xs">
        <h3 class="font-semibold text-slate-900 text-sm sm:text-base mb-1.5">
          ${combo.name}
        </h3>
        <p class="text-slate-500 mb-2">
          ${combo.desc}
        </p>
        <div class="flex items-baseline gap-2 mb-2">
          <span class="text-[11px] line-through text-slate-400">${combo.originalPrice} đ</span>
          <span class="text-base font-semibold text-accent">${combo.salePrice} đ</span>
        </div>
        <div class="flex items-center justify-between text-[11px] mb-3">
          <span class="inline-flex items-center gap-1 text-primary">
            <i class="fa-solid fa-bolt text-[10px]"></i>
            <span class="combo-countdown">${combo.deadline ? "Đang tính thời gian ưu đãi..." : "Ưu đãi số lượng có hạn"}</span>
          </span>
          <span class="text-slate-400">Giá / 1 khách</span>
        </div>
        <button
          type="button"
          class="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-[11px] font-semibold cta-main"
        >
          Đặt combo ngay
          <i class="fa-solid fa-arrow-right text-[9px]"></i>
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Khởi động đếm ngược thời gian cho các combo có deadline
 */
function initComboCountdowns() {
  const cards = document.querySelectorAll(".combo-card");
  if (!cards.length) return;

  function updateCountdown() {
    const now = new Date().getTime();
    cards.forEach((card) => {
      const deadlineStr = card.dataset.deadline;
      const label = card.querySelector(".combo-countdown");
      if (!label || !deadlineStr) return;

      const deadline = new Date(deadlineStr).getTime();
      const diff = deadline - now;

      if (diff <= 0) {
        label.textContent = "Ưu đãi đã kết thúc";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);

      label.textContent = `Còn ${days} ngày ${hours} giờ ${minutes} phút`;
    });
  }

  updateCountdown();
  setInterval(updateCountdown, 60 * 1000); // cập nhật mỗi phút cho đủ mượt
}

/**
 * Render lịch trình mẫu dạng accordion
 */
function renderItineraries() {
  const container = document.getElementById("itineraryAccordion");
  if (!container) return;

  container.innerHTML = "";

  itineraries.forEach((item, index) => {
    const wrapper = document.createElement("div");
    wrapper.className =
      "rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden";

    const openClass = index === 0 ? "" : "hidden";

    wrapper.innerHTML = `
      <button
        class="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3 text-xs sm:text-sm text-left font-semibold text-slate-800 hover:bg-slate-100"
        data-accordion-toggle="${item.id}"
      >
        <span>${item.title}</span>
        <i class="fa-solid fa-chevron-down text-[10px] text-slate-500"></i>
      </button>
      <div id="itinerary-${item.id}" class="border-t border-slate-200 px-4 sm:px-5 py-3 text-xs text-slate-600 ${openClass}">
        <ol class="list-decimal list-inside space-y-1.5">
          ${item.days.map((d) => `<li>${d}</li>`).join("")}
        </ol>
      </div>
    `;

    container.appendChild(wrapper);
  });
}

/**
 * Render grid món ăn
 */
function renderFoods() {
  const grid = document.getElementById("foodGrid");
  if (!grid) return;
  grid.innerHTML = "";

  foods.forEach((food) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className =
      "food-item relative rounded-2xl overflow-hidden bg-white shadow-soft hover:shadow-2xl transition group text-left";
    card.dataset.id = String(food.id);

    card.innerHTML = `
      <div class="h-28 sm:h-32 overflow-hidden">
        <img
          src="${food.image}"
          alt="${food.name}"
          class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          loading="lazy"
        />
      </div>
      <div class="p-2.5 sm:p-3 flex flex-col gap-0.5 text-[11px]">
        <span class="font-semibold text-slate-800">${food.name}</span>
        <span class="text-primary">${food.region}</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

/**
 * Hiển thị mô tả món ăn khi click
 * @param {number} id
 */
function showFoodDetail(id) {
  const detail = document.getElementById("foodDetail");
  if (!detail) return;
  const food = foods.find((f) => f.id === id);
  if (!food) return;

  detail.innerHTML = `
    <p class="text-xs text-slate-600">
      <span class="font-semibold text-slate-800">${food.name}</span> ·
      <span class="text-primary">${food.region}</span>:
      ${food.desc}
    </p>
  `;
}

/**
 * Render cẩm nang
 */
function renderGuidePosts() {
  const container = document.getElementById("guideList");
  if (!container) return;
  container.innerHTML = "";

  guidePosts.forEach((post) => {
    const article = document.createElement("article");
    article.className = "bg-slate-50 rounded-xl p-3 sm:p-4 shadow-soft";

    article.innerHTML = `
      <h3 class="font-semibold text-slate-900 mb-1 text-sm">
        ${post.title}
      </h3>
      <p class="text-xs text-slate-600">
        ${post.summary}
      </p>
    `;

    container.appendChild(article);
  });
}

/**
 * Render bản tin lễ hội
 */
function renderEvents() {
  const container = document.getElementById("eventList");
  if (!container) return;
  container.innerHTML = "";

  events.forEach((ev) => {
    const card = document.createElement("article");
    card.className =
      "rounded-2xl bg-slate-50 border border-slate-100 p-4 sm:p-5 shadow-soft";

    card.innerHTML = `
      <div class="flex items-center justify-between gap-3 mb-1.5">
        <h3 class="font-semibold text-slate-900 text-sm">${ev.name}</h3>
        <span class="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2.5 py-1 text-[11px]">
          <i class="fa-solid fa-location-dot text-[9px]"></i>
          ${ev.location}
        </span>
      </div>
      <p class="text-[11px] text-slate-500 mb-1">
        <i class="fa-regular fa-calendar text-[10px] mr-1"></i>${ev.time}
      </p>
      <p class="text-xs text-slate-600">
        ${ev.highlight}
      </p>
    `;

    container.appendChild(card);
  });
}

// ============================
// HÀNH VI TƯƠNG TÁC (JS)
// ============================

/** Debounce: gọi fn sau delay ms, hủy lần gọi trước nếu gọi lại */
function debounce(fn, delay) {
  let id;
  return function (...args) {
    clearTimeout(id);
    id = setTimeout(() => fn.apply(this, args), delay);
  };
}

document.addEventListener("DOMContentLoaded", () => {
  // 0. Tạo hoa/ lá mai rơi (decorative)
  const petalsContainer = document.getElementById("fallingPetals");
  if (petalsContainer) {
    const COUNT = 60;
    for (let i = 0; i < COUNT; i++) {
      const petal = document.createElement("div");
      petal.className = "petal petal--yellow";
      petal.style.left = Math.random() * 100 + "%";
      petal.style.animationDuration = 10 + Math.random() * 15 + "s";
      petal.style.animationDelay = -Math.random() * 25 + "s";
      petalsContainer.appendChild(petal);
    }
  }

  // 1. Slider hero: crossfade mượt khi đổi ảnh
  const heroSlider = document.getElementById("heroSlider");
  const heroBg = heroSlider?.querySelector(".hero-slide-bg");
  const heroDots = document.querySelectorAll(".hero-dot");
  let heroIndex = 0;
  const HERO_CROSSFADE_MS = 450;

  function setHeroSlide(index) {
    if (!heroBg) return;
    const nextIndex = index % heroSlides.length;

    heroDots.forEach((dot, i) => {
      if (i === nextIndex) {
        dot.classList.add("bg-white");
        dot.classList.remove("bg-white/30");
      } else {
        dot.classList.remove("bg-white");
        dot.classList.add("bg-white/30");
      }
    });

    heroBg.classList.add("is-hidden");
    heroBg.classList.remove("is-visible");

    setTimeout(() => {
      heroIndex = nextIndex;
      heroBg.style.backgroundImage = `url('${heroSlides[heroIndex]}')`;
      heroBg.classList.remove("is-hidden");
      heroBg.classList.add("is-visible");
    }, HERO_CROSSFADE_MS);
  }

  if (heroSlides.length && heroBg) {
    heroBg.classList.add("is-visible");
    setHeroSlide(0);
    setInterval(() => {
      setHeroSlide((heroIndex + 1) % heroSlides.length);
    }, 8000);

    heroDots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = Number(dot.dataset.index || 0);
        setHeroSlide(idx);
      });
    });
  }

  // 1b. Section reveal: fade-in khi scroll vào viewport
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.05 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  // 1c. Header: thêm class .scrolled khi scroll (debounce)
  const siteHeader = document.getElementById("siteHeader");
  const onScroll = () => {
    if (window.scrollY > 16) siteHeader?.classList.add("scrolled");
    else siteHeader?.classList.remove("scrolled");
  };
  window.addEventListener("scroll", debounce(onScroll, 16), { passive: true });
  onScroll();

  // 2. Tabs vùng miền cho tour
  setActiveRegionTab("north");
  renderToursRegion("north");

  const regionTabs = document.querySelectorAll(".region-tab");
  regionTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const region = tab.dataset.region || "north";
      setActiveRegionTab(region);
      renderToursRegion(region);
    });
  });

  // 2b. Click "Xem chi tiết" tour -> mở modal mô tả đầy đủ (chỉ khi có modal trên trang Tour)
  const toursListContainer = document.getElementById("toursRegionList");
  const tourDetailModal = document.getElementById("tourDetailModal");
  if (toursListContainer && tourDetailModal) {
    toursListContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".tour-detail-btn");
      if (!btn) return;
      const card = btn.closest("[data-tour-id]");
      if (!card) return;
      const tourId = parseInt(card.dataset.tourId, 10);
      if (tourId) openTourDetailModal(tourId);
    });
    tourDetailModal.querySelector(".tour-detail-close")?.addEventListener("click", closeTourDetailModal);
    tourDetailModal.querySelector(".tour-detail-overlay")?.addEventListener("click", closeTourDetailModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && tourDetailModal.classList.contains("is-open")) closeTourDetailModal();
    });
  }

  // 3. Render combo và đếm ngược
  renderCombos();
  initComboCountdowns();

  // 4. Lịch trình mẫu (accordion)
  renderItineraries();
  document
    .getElementById("itineraryAccordion")
    ?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-accordion-toggle]");
      if (!btn) return;
      const id = btn.getAttribute("data-accordion-toggle");
      const panel = document.getElementById(`itinerary-${id}`);
      if (!panel) return;
      panel.classList.toggle("hidden");
    });

  // 5. Ẩm thực: grid + mô tả khi click
  renderFoods();
  document.getElementById("foodGrid")?.addEventListener("click", (e) => {
    const item = e.target.closest(".food-item");
    if (!item) return;
    const id = Number(item.dataset.id || 0);
    if (!id) return;
    showFoodDetail(id);
  });

  // 6. Cẩm nang & bản tin lễ hội
  renderGuidePosts();
  renderEvents();

  // 7. Mobile menu toggle (mở/đóng mượt bằng aria-hidden + CSS transition)
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  let mobileOpen = false;

  function setMobileMenu(open) {
    if (!mobileMenu) return;
    mobileOpen = open;
    mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
  }

  if (mobileMenu) mobileMenu.setAttribute("aria-hidden", "true"); // đóng lúc đầu

  mobileToggle?.addEventListener("click", () => {
    setMobileMenu(!mobileOpen);
  });

  document.getElementById("mobileMenu")?.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) setMobileMenu(false);
  });

  // 8. Smooth scroll cho tất cả link có data-scroll
  const scrollLinks = document.querySelectorAll("a[data-scroll]");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
      const rect = targetEl.getBoundingClientRect();
      const offsetTop = rect.top + window.scrollY - headerHeight - 8;

      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  });

  // 9. Xử lý form đăng ký nhận tin (newsletter)
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterMessage = document.getElementById("newsletterMessage");

  newsletterForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!newsletterMessage) return;

    newsletterMessage.textContent = "Cảm ơn bạn đã đăng ký!";

    // Xoá nội dung form sau khi đăng ký
    newsletterForm.reset();
  });

  // 10. Xử lý form góp ý / liên hệ
  const feedbackForm = document.getElementById("feedbackForm");
  const feedbackMessage = document.getElementById("feedbackMessage");

  feedbackForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (feedbackMessage) {
      feedbackMessage.textContent = "Cảm ơn bạn đã góp ý! Chúng tôi sẽ phản hồi sớm nhất.";
    }
    feedbackForm.reset();
  });

  // 11. Nút "Cuộn lên đầu trang": hiện khi scroll xuống, click scroll mượt
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 400) backToTop.classList.add("visible");
      else backToTop.classList.remove("visible");
    };
    window.addEventListener("scroll", debounce(toggleBackToTop, 50), { passive: true });
    toggleBackToTop();

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

