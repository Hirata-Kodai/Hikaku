var noodleFrameNum = 0;
var imgReader;
var img_tag_id;
var elem = document.getElementsByClassName('compared_thing_range');
viewRangeValue(elem);

document.getElementById("submit-button").onclick = function() {

    var noodleShopName = $('#noodle_shop_name').val();
    var noodleName =  $('#noodle_name').val();
    var noodle = $('#noodle').val();
    var soupKoku =  $('#soup-koku').val();
    var price = $('#price').val();
    noodleFrameNum += 1;
    
    var appendTag = "<li id='noodle-frame-" +  noodleFrameNum + "'> \
                        <div class='submit-area' > \
                            <div class='submit-area-img' > \
                                <img id='uploaded-image-" +  noodleFrameNum + "' class='submitted_img'><br>\
                            </div>\
                            <div class='submit-area-compared_things' > \
                                <ul class='detail-things'> \
                                    <li class='noodle-shop-name-frame'></li> \
                                        お店の名前：<input type='text' id='noodle_shop_name' name='noodle_shop_name' value='" + noodleShopName + "'> \
                                    </li> \
                                    <li class='noodle-name-frame'></li> \
                                        ラーメンの名前：<input type='text' id='noodle_name' name='noodle_name' value=' " + noodleName +" '> \
                                    </li> \
                                    <li class='compared_thing_range'> \
                                        <input type='range' id='noodle' name='noodle' class='range-class'\
                                            min='0' max='100' value='" + noodle + "'> \
                                        <label for='noodle'>麺のうまさ</label> \
                                        <input type='text' id='noodle_num' name='noodle_num' value='" + noodle + "' class='view-range-value-class'> \
                                    </li> \
                                    <li class='compared_thing_range'> \
                                        <input type='range' id='soup-koku' name='soup-koku' class='range-class'\
                                            min='0' max='100' value='" + soupKoku + "'> \
                                        <label for='soup-koku'>スープのうまさ</label> \
                                        <input type='text' id='noodle_num' name='noodle_num' value='" + soupKoku + "' class='view-range-value-class'> \
                                    </li> \
                                    <li class='compared_thing_text'> \
                                        価格：<input type='number' id='price' name='price' min='0' max='10000' value='" + price + "'> \
                                        <label for='price'>円</label> \
                                    </li> \
                                </ul> \
                                <input id='delete-button' class='delete-button-" +  noodleFrameNum + "' type='button' name='submit' value='削除' onclick='deleteClick(" + noodleFrameNum + ")'/> \
                            </div> \
                        </div> \
                    </li>" 
    
    $("#element-list").append(appendTag);

    // 画像ファイル追加
    var appendImgTagId = img_tag_id + "-" + noodleFrameNum
    $(appendImgTagId).attr('src', imgReader.result);
    $(appendImgTagId + '_prev').attr('src', '');

    // rangeタグの数値を可視化できるようにする
    var elem = document.getElementsByClassName('compared_thing_range');
    viewRangeValue(elem);
};

function deleteClick(noodleFrameNum){
    deleteId = "#noodle-frame-" + noodleFrameNum;
    $(deleteId).remove();
}

function viewRangeValue(elem){

    var rangeValue = function (elem, target) {
        return function(evt){
            target.value = elem.value;
        }
    }

    for(var i = 0, max = elem.length; i < max; i++){
        bar = elem[i].getElementsByClassName('range-class')[0];
        target = elem[i].getElementsByClassName('view-range-value-class')[0];   
        bar.addEventListener('mousemove', rangeValue(bar, target));
    }
}

// jqueryコード。分けて書くべきなのか分からん！！
$(function () {
    $('.img-upload').change(function () {
        // 画像の情報を取得
        var file = this.files[0];
        img_tag_id = $(this).data('imageTagId');
        
        // 指定の拡張子以外の場合はアラート
        var permit_type = ['image/jpeg', 'image/png', 'image/gif'];
        if (file && permit_type.indexOf(file.type) == -1) {
            alert('この形式のファイルはアップロードできません');
            $(this).val('');
            $(img_tag_id).attr('src', '');
            return
        }

        // 読み込んだ画像を取得し、フォームの直後に表示させる
        imgReader = new FileReader()
        imgReader.onload = function () {
            $(img_tag_id).attr('src', imgReader.result);
            $(img_tag_id + '_prev').attr('src', '');
        }

        // 画像の読み込み
        imgReader.readAsDataURL(file);
    });
});