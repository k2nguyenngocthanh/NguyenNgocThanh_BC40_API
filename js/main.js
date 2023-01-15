const BASE_URL ="https://63b2c9a35901da0ab36dbbbf.mockapi.io";

function renderFoodList(foods){
    var contentHTML="";

    foods.reverse().forEach(function(item){
        var contentTr=`<tr>
        <td>${item.maMon}</td>
        <td>${item.tenMon}</td>
        <td>${item.giaMon}</td>
        <td>${item.loaiMon ?
        "<span class='text-primary'>Mặn</span>":"<span class='text-success'>Chay</span>"}</td>
        <td>${convertString(30,item.hinhAnh)}</td>
      <td>

      <button onclick="xoaMonAn('${item.maMon}')" class="btn btn-danger">Xóa</button>
      <button class="btn btn-warning" onclick="suaMonAn('${item.maMon}')">Sửa</button>
      </td>
        </tr>`;
        contentHTML+=contentTr;
    })
    document.getElementById("tbodyFood").innerHTML =contentHTML;
}

function fetchFoodList(){
    
    batLoading();

    axios({
        url:`${BASE_URL}/food`,
        method:"GET",
    })
    .then(function(res){
        tatLoading();
        var foodList= res.data;
        renderFoodList(foodList);
    
    })
    .catch(function(err){
        tatLoading();
    
    });
}
fetchFoodList();

function xoaMonAn(id){
    batLoading();
    axios({ url:`${BASE_URL}/food/${id}`,
            method: "DELETE",
    })
    .then(function(res){
        tatLoading();
        fetchFoodList()
    })
    .catch(function(err){
        tatLoading();
    });
}

function themMonAn(){
    var monAn= layThongTinForm();
    axios({
        url:`${BASE_URL}/food`,
        method:"POST",
        data:monAn,
    })
    .then(function(res){
        fetchFoodList();
    })
    .catch(function(err){
   })

}

function convertString(maxLength,value){
    if(value.length>maxLength){
        return value.slice(0,maxLength)+"...";
        
    }else{
        return value;
    }
}

function suaMonAn(id){
    batLoading();
    axios({
        url:`${BASE_URL}/food/${id}`,
        method:"GET",
        
    })
    .then(function(res){
        tatLoading();
       showThongTin(res.data);
    })
    .catch(function(err){
        tatLoading();   
        console.log("🚀 ~ file: main.js:97 ~ suaMonAn ~ err", err)
    })
}

function capNhat(){
    batLoading();
    var monAn =layThongTinForm();

    axios({
        url:`${BASE_URL}/food/${monAn.maMon}`,
        method:"PUT",
        data: monAn,
    })
    .then(function(res){
        tatLoading();
        fetchFoodList();
       


    })
    .catch(function(err){
        tatLoading();
        console.log("🚀 ~ file: main.js:111 ~ capNhatMonAn ~ err", err)
   })
}