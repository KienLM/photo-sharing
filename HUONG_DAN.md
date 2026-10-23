# HƯỚNG DẪN - LAB 1, PROBLEM 1

## 1. Phạm vi bài đã làm

- UserList: hiện đầy đủ họ tên của 6 người dùng, bấm để mở trang chi tiết.
- UserDetail: hiện họ tên, location, occupation, description; nút View Photos.
- UserPhotos: hiện tất cả ảnh, thời gian, bình luận và tác giả bình luận (có thể bấm vào).
- TopBar: tên sinh viên bên trái; tên người dùng / "Photos of ..." bên phải.
- Giữ React Router với `/users`, `/users/:userId`, `/photos/:userId`.
- Dùng model có sẵn trong `src/modelData/models.js`, KHÔNG gọi API (Problem 2).

## 2. Chạy dự án trên máy tính

Mở Terminal trong thư mục chứa `package.json`:

```bash
npm install
npm start
```

Trình duyệt: http://localhost:3000

Nếu chạy PowerShell mà lệnh npm bị chặn, hãy dùng `npm.cmd install` và `npm.cmd start`.

## 3. Đưa dự án lên CodeSandbox

### Lựa chọn A: Dùng GitHub (giữ nguyên toàn bộ dự án)

1. Giải nén file ZIP; vào thư mục `photo-sharing-v1` bên trong.
2. Vào https://github.com, đăng nhập, tạo một repository mới (ví dụ `photo-sharing-lab1`).
3. Chọn **Add file > Upload files**, upload **NỘI DUNG** của thư mục `photo-sharing-v1`, không upload thư mục bọc ngoài. Tại trang gốc repo phải thấy `package.json`, `public/`, `src/`.
4. Mở đường dẫn `https://githubbox.com/TEN_GITHUB/photo-sharing-lab1` để truy cập phiên bản trên CodeSandbox (hoặc dùng tính năng Import template / Import from GitHub nếu CodeSandbox hiển thị).
5. Nếu trang đang ở chế độ template chỉ đọc, tạo bản sao bằng tính năng Fork / Create Sandbox from Template để sửa trực tiếp.
6. Nếu ứng dụng chưa tự chạy, tìm Terminal/Tasks và chạy `npm install` rồi `npm start`.
7. Kiểm tra Preview, sau đó dùng **Share** để sao chép liên kết gửi giáo viên.

### Lựa chọn B: Nếu tài khoản CodeSandbox có chức năng Import ZIP

- Sử dụng file `photo-sharing-v1-codesandbox.zip` (có `package.json` ở cấp gốc ZIP).
- Chọn tính năng import/upload dự án từ ZIP (nếu được cung cấp trong giao diện), chờ cài thư viện và chạy `npm start`.
- Nếu giao diện không hỗ trợ nhập ZIP, dùng Lựa chọn A.

## 4. Những file dễ chỉnh theo yêu cầu của giáo viên

| Muốn sửa | File cần sửa |
| --- | --- |
| Tên sinh viên, nội dung thanh trên | `src/components/TopBar/index.jsx` |
| Danh sách người dùng | `src/components/UserList/index.jsx` |
| Thông tin cá nhân | `src/components/UserDetail/index.jsx` |
| Ảnh, bình luận, định dạng ngày | `src/components/UserPhotos/index.jsx` |
| Màu sắc, kích thước, khoảng cách | `src/components/*/styles.css` hoặc `src/App.css` |
| Tên, mô tả, dữ liệu mẫu của người dùng | `src/modelData/models.js` |
| Ảnh mẫu | `public/images/` (tên file phải khớp `file_name` trong model) |
| Các đường dẫn URL | `src/App.js` |

## 5. Tự kiểm tra theo đề bài

- Mở `/users`: nhìn thấy danh sách người dùng.
- Bấm `Ian Malcolm`: vào `/users/57231f1a30e4351f4e9f4bd7`, hiện thông tin Ian.
- Bấm `View Photos`: sang `/photos/57231f1a30e4351f4e9f4bd7`, nhìn thấy hai ảnh và các bình luận.
- Bấm tên tác giả bình luận: tới đúng trang chi tiết tác giả.
- Tải lại trang khi đang ở `/users/...` hoặc `/photos/...`: vẫn hiển thị đúng.
- Trước khi nộp, chạy `npm run build` trên máy đã `npm install` để kiểm tra lỗi build/ESLint.

## 6. Lưu ý

Dự án này chỉ triển khai **Problem 1** (40 điểm). Không thêm `fetchModel`, HTTP API, database, Advanced Features hoặc photo stepper vì chúng nằm trong Problem 2/Extra Credit.
