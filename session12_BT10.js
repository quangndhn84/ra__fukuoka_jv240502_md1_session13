let arrInt = [23, 5, 1, 7, 4, 1, 8, 10];
function getChildArr(arr) {
    //return mảng con có tổng số phần tử là lớn nhất (mảng con phải có số phần tử nhỏ hơn mảng cha)
    //parent: size, child: size-1
    //Chỉ dùng 1 vòng lặp: không sử dụng các vòng lặp lồng nhau
    //1. Tìm phần tử có giá trị nhỏ nhất
    let min = arr[0];
    let minIndex = 0;
    for (let index = 1; index < arr.length; index++) {
        if (min > arr[index]) {
            min = arr[index];
            minIndex = index;
        }
    }
    //2. Khởi tạo mảng chứa các phần tử trừ phần tử nhỏ nhất
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (index != minIndex) {
            newArr.push(arr[index]);
        }
    }
    //3. return mảng mới
    return newArr;
}
console.log("Mảng con có tổng các phần tử lớn nhất:", getChildArr(arrInt));