function batLoading(){
    document.getElementById("spinner").style.display="flex";
}
function tatLoading(){
    document.getElementById("spinner").style.display="none";
}
function layThongTinForm(){
    var maMon=document.getElementById("maMon").value;
    var tenMon=document.getElementById("tenMon").value;
    var giaMon=document.getElementById("giaMon").value;
    var hinhMon=document.getElementById("hinhAnh").value;
    var loaiMon=document.getElementById("loaiMon").value;
   
    var monAn={
        maMon:maMon,
        tenMon:tenMon,
        giaMon:giaMon,
        hinhMon:hinhMon,
        loaiMon:loaiMon,
    };
    return monAn;
}
