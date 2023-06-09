function tamgiac(a, b, c) {
    if (a == b & b == c) {
        alert("day la tam giac deu")
    } else {
        if (a == b || b == c || c == a) {
            alert("day la tam giac can")
        } else if (a * a == b * b + c * c 
            || b * b == a * a + c * c 
            || c * c == a * a + b * b) {
            alert("day la tam giac vuong")
        } else {
            alert("day la tam giac thuong")
        }
    }
}

while (true) {
    let chon = parseInt(prompt("nhập 1 để cháy.\nnhap 0 de thoat"))
    if (chon == 1) {
        while (true) {
            let a = parseInt(prompt("nhap vao canh a: "))
            let b = parseInt(prompt("nhap vao canh b: "))
            let c = parseInt(prompt("nhap vao canh c: "))
            if (a > 0 && b > 0 && c > 0 
                || isNaN(a) || isNaN(b) || isNaN(c)) {
                tamgiac(a, b, c)
                break
            } else {
                alert("du lieu nhap vao khong hop le")
            }
        }
    } else if (chon == 0) {
        break
    }
}



