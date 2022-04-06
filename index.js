var noodleFrameNum = 0;
var imgReader;
var img_tag_id;

document.getElementById("submit-button").onclick = function() {

    var noodle = $('#noodle').val();
    var soupKoku =  $('#soup-koku').val();
    var price = $('#price').val();
    noodleFrameNum += 1;
    console.log(noodle);
    var appendTag = "<li id='noodle-frame-" +  noodleFrameNum + "'> \
                        <div class='submit-area' > \
                            <div class='submit-area-img' > \
                                <img id='uploaded-image-" +  noodleFrameNum + "' class='submitted_img'><br>\
                            </div>\
                            <div class='submit-area-compared_things' > \
                                <ul class='detail-things'> \
                                    <li class='compared_thing'> \
                                        <input type='range' id='noodle' name='noodle' \
                                            min='0' max='100' value='" + noodle + "'> \
                                        <label for='noodle'>麺のうまさ</li></label> \
                                    </li> \
                                    <li class='compared_thing'> \
                                        <input type='range' id='soup-koku' name='soup-koku' \
                                            min='0' max='100' value='" + soupKoku + "'> \
                                        <label for='soup-koku'>スープのうまさ</label> \
                                    </li> \
                                    <li class='compared_thing'> \
                                        <input type='number' id='price' name='price' min='0' max='10000' value='" + price + "'> \
                                        <label for='price'>価格</label> \
                                    </li> \
                                </ul> \
                                <input id='delete-button' class='delete-button-" +  noodleFrameNum + "' type='button' name='submit' value='削除' onclick='deleteClick(" + noodleFrameNum + ")'/> \
                            </div> \
                        </div> \
                    </li>" 
    
    $("#element-list").append(appendTag);

    // 画像ファイル追加
    var appendImgTagId = img_tag_id + "-" + noodleFrameNum
    console.log(appendImgTagId);
    $(appendImgTagId).attr('src', imgReader.result);
    $(appendImgTagId + '_prev').attr('src', '');
};

function deleteClick(noodleFrameNum){
    console.log(noodleFrameNum);
    deleteId = "#noodle-frame-" + noodleFrameNum;
    $(deleteId).remove();
}

// jqueryコード。分けて書くべきなのか分からん！！
$(function () {
    $('.img-upload').change(function () {
        // 画像の情報を取得
        var file = this.files[0];
        img_tag_id = $(this).data('imageTagId');
        console.log(img_tag_id);

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