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

  
function showThongTin(monAn){
    document.getElementById("maMon").value=monAn.maMon;
    document.getElementById("tenMon").value=monAn.tenMon;
    document.getElementById("giaMon").value=monAn.giaMon;
    document.getElementById("hinhAnh").value=monAn.hinhMon;
    document.getElementById("loaiMon").value=monAn.loaiMon ? 'Mặn' :'Chay';

}