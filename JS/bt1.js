function tinhnam() {
    while (true) {
        let nam = parseInt(prompt("nhap vao nam: "))
        if (nam > 0 || isNaN(a)) {
            if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
                alert("day la nam nhuan")
            } else {
                alert("day la nam thuong")
            }
            break
        } else {
            alert("du lieu nhap vao khong hop le")
        }
    }
}
while (true) {
    let chon = parseInt(prompt("nhập 1 để cháy.\nnhap 0 de thoat"))
    if(chon==1){
        tinhnam()
    }else if(chon==0){
        break
    }
}




