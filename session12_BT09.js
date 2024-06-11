/*
1. Javascript ngôn ngữ lập trình bất đồng bộ
    - Đồng bộ: Nam - Gọi điện thoại (A và B cùng gọi cho C)
    - Bất đồng bộ: Nữ - Gửi mail(A và B cùng gửi mail cho C)
    - Javascript khi gọi API lấy dữ liệu, không chờ kết quả trả về mà thực hiện công việc tiếp theo
2. Callback function giúp chúng ta thực hiện các công việc đồng bộ
*/
//setInterval(callback function, time)
setInterval(function () {
    console.log("Xin chào các bạn Fukuoka-JV240502");
}, 2000);