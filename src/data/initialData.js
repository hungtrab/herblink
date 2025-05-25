export const initialGACPSteps = [
  { id: 1, text: "1. Kiểm tra đất sạch", completed: false },
  { id: 2, text: "2. Chọn giống", completed: false },
  { id: 3, text: "Gieo trồng đúng kỹ thuật", completed: false },
  { id: 4, text: "Chăm sóc định kỳ", completed: false },
  { id: 5, text: "Phòng trừ sâu bệnh hữu cơ", completed: false },
  { id: 6, text: "Sử dụng nước tưới an toàn", completed: false },
  { id: 7, text: "Thu hoạch đúng thời điểm", completed: false },
  { id: 8, text: "Sơ chế và bảo quản đúng cách", completed: false },
  { id: 9, text: "Ghi chép nhật ký đồng ruộng", completed: false },
  { id: 10, text: "Đánh giá và cải tiến quy trình", completed: false },
];

export const initialLeaderboardData = [
  { name: "Nguyễn Văn A", score: 80 },
  { name: "Trần Thị B", score: 75 },
  { name: "Lê Văn C", score: 70 },
  { name: "Phạm Thị D", score: 65 },
  { name: "Hoàng Văn E", score: 60 },
];

export const staticLeaderboardData = [
    { rank: 1, name: "Nguyễn Văn A", score: 80 },
];

export const seedGameQuestionsData = [
  { 
    question: "Phân bón nào tốt cho cây trồng theo GACP?", 
    options: ["A) Hữu cơ", "B) Hóa học"], 
    correctAnswer: "A) Hữu cơ", 
    points: 10,
    image: true 
  },
  { question: "Nên trồng cát cánh vào mùa nào?", options: ["A) Xuân", "B) Hạ", "C) Thu"], correctAnswer: "A) Xuân", points: 5 },
  { question: "Độ pH đất thích hợp cho cát cánh?", options: ["A) 5.0-6.0", "B) 6.0-7.0", "C) 7.0-8.0"], correctAnswer: "B) 6.0-7.0", points: 5 },
];

export const safetyQuizQuestionsData = [
    { question: "Ngộ độc cát cánh có thể xảy ra nếu dùng sai cách không?", options: ["A) Có", "B) Không"], correctAnswer: "A) Có" },
    { question: "Sử dụng lá lốt không đúng cách có thể dẫn đến nhiễm trùng không?", options: ["A) Có", "B) Không"], correctAnswer: "A) Có" },
    { question: "Tiêu chuẩn GACP giúp đảm bảo điều gì cho dược liệu?", options: ["A) Giá cao hơn", "B) An toàn và chất lượng", "C) Mọc nhanh hơn"], correctAnswer: "B) An toàn và chất lượng" },
    { question: "Khi không chắc chắn về cách dùng dược liệu, bạn nên làm gì?", options: ["A) Tự thử nghiệm", "B) Hỏi người bán", "C) Tham khảo ý kiến bác sĩ/chuyên gia y tế"], correctAnswer: "C) Tham khảo ý kiến bác sĩ/chuyên gia y tế" },
    { question: "Việc tự ý dùng dược liệu để trị bệnh nặng có an toàn không?", options: ["A) Có, nếu là dược liệu quý", "B) Không, rất nguy hiểm", "C) Tùy loại bệnh"], correctAnswer: "B) Không, rất nguy hiểm" },
];

export const nftProductsData = [
  { id: 1, name: "NFT Cát cánh", price: "500.000 VND", imageDescription: "Hình ảnh NFT cây Cát cánh chất lượng cao", imageName: "NFT Cát cánh" },
  { id: 2, name: "NFT Đương quy", price: "600.000 VND", imageDescription: "Hình ảnh NFT cây Đương quy quý hiếm", imageName: "NFT Đương quy" },
];