/*
Sự kiện: Sinh viên Nguyễn Văn A viết 1 bài thơ
1. Lập trình hướng đối tượng
    - Các đối tượng: Sinh viên, tờ giấy, cái bút
    - Dữ liệu của ứng dụng
    - Tiếp cận các đối tượng tham gia và mối quan hệ giữa các đối tượng
    - Dễ mở rộng
    - maintain dễ
2. Lập trình hướng thủ tục
    - Hành vi viết
    - Giải thuật để thực hiện các chức năng
    - Tiếp cận: Top --> Down: ứng dụng --> các module --> các function --> các function nhỏ hơn
    - Khó mở rộng, dữ liệu thay đổi thì phải thay đổi giải thuật
    - maintain khó
    - Tốc độ phát triển nhanh
Bài toán đặt ra: Xây dựng thêm các chức năng cho ứng dụng
LẬP TRÌNH HƯỚNG ĐỐI TƯỢNG:
1. Nghiên cứu tập hợp các đối tượng trong thế giới thực (Sinh viên - đặc điểm: mã sinh viên, tên, tuổi, giới tính... và hành vi: học, yêu, nói....)
2. Xây dựng đối tượng sinh viên gồm các đặc điểm (thuộc tính) và các hành vi(function)
*/
//4 CÁCH KHỞI TẠO ĐỐI TƯỢNG TRONG JAVASCRIPT
/*
    Xây dựng đối tượng sinh viên gồm:
    Các đặc điểm:
        - Mã sinh viên
        - Tên sinh viên
        - Tuổi
    Hành vi:
        - Học
        - Yêu
*/
//1. Cách 1: Sử Object Literal - thường xuyên sử dụng nhất
let student1 = {
    studentId: "SV001",
    studentName: "Nguyễn Văn A",
    age: 20,
    study: function () {
        return "Learn Web Frontend - HTML, CSS, Javascript";
    },
    love: function () {
        console.log("I love you!");
    }
};
console.log("Thông tin sinh viên 1:", student1);
//2. Cách 2: Khởi tạo với Object Constructor function
function Student2(studentId, studentName, age) {
    return {
        //KEY:VALUE
        studentId: studentId,
        studentName: studentName,
        age: age,
        study: function () {
            return "Learn Web Frontend - HTML, CSS, Javascript";
        },
        love: function () {
            console.log("I love you!");
        }
    }
}
/*
function Student2(studentId, studentName, age) {
    return {
        //KEY:VALUE
        studentId,
        studentName,
        age,
        study: function () {
            return "Learn Web Frontend - HTML, CSS, Javascript";
        },
        love: function () {
            console.log("I love you!");
        }
    }
}

*/
let student2 = new Student2("SV002", "Nguyễn Văn B", 18);
console.log("Thông tin sinh viên 2:", student2);
//3. Cách 3: Khởi tạo từ lớp Object
let student3 = new Object();
//Thêm thuộc tính cho đối tượng
student3.studentId = "SV003";
student3.studentName = "Nguyễn Văn C";
student3.age = 25;
//Cập nhật giá trị cho thuộc tính
student3.age = 30;
student3.study = function () {
    return "Learn Web Frontent - HTML, CSS, Javascript";
};
student3.love = function () {
    console.log("I love you!");
}
console.log("Thông tin sinh viên 3:", student3);
//4. Khởi tạo đối tượng từ Javascript Class
class Student4 {
    //1 hàm tạo duy nhất giúp khởi tạo đối tượng
    constructor(studentId, studentName, age) {
        //KEY = VALUE of argument
        this.studentId = studentId;
        this.studentName = studentName;
        this.age = age;
    }
    study() {
        return "Learn Web Frontent - HTML, CSS , Javascript";
    }
    love() {
        console.log("I love you!");
    }
}
let student4 = new Student4("SV004", "Nguyễn Văn D", 23);
console.log("Thông tin sinh viên 4:", student4);
/*
    Bài tập ứng dụng:
    Xây dựng đối tượng Sách bằng 4 cách khác nhau gồm:
    - Các đặc điểm: mã sách, tên sách, giá sách, tác giả, nhà xuất bản
    - Các hành vi: info: in câu "Hãy bình chọn cho sách này"
*/
//In ra tên sinh viên của đối tượng sinh viên 4
console.log("Tên sinh viên của student4:", student4.studentName);
//In ra tuổi của đối tượng sinh viên 4
console.log("Tuổi của đối tượng student4:", student4["age"]);
//Thực hiện hành vi học của sinh viên 3
console.log("Học của sinh viên 3: ", student3.study());
//Xóa thuộc tính của đối tượng sinh viên 2
delete student2.age;
console.log("Sinh viên 2: ", student2);