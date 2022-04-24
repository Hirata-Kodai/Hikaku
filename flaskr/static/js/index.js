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
    var ingredientsNum =  $('#ingredients_num').val();
    var price = $('#price').val();
    noodleFrameNum += 1;
    
    var appendTag = "<li id='noodle-frame-" +  noodleFrameNum + "'> \
                        <div class='submit-area mx-8 my-6 flex font-sans rounded-md bg-white relative'> \
                            <div class='flex-none w-64 relative'> \
                                <div class='h-3/5'> \
                                    <img id='uploaded-image-" +  noodleFrameNum + "' class='p-6 inset-0 w-full h-full object-cover'><br>\
                                </div> \
                            </div> \
                            <div class='submit-area-compared_things flex-auto p-2' > \
                                <ul class='detail-things'> \
                                    <li class='noodle-shop-name-frame'></li> \
                                        <div class='flex my-3'> \
                                            <div class='w-1/3 mt-1 px-3 py-2'> \
                                                お店の名前： \
                                            </div> \
                                            <div class='w-2/3'> \
                                                <input type='text' id='noodle_shop_name' name='noodle_shop_name' value='" + noodleShopName + "' class='w-2/3 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'> \
                                            </div> \
                                        </div> \
                                    </li> \
                                    <li class='noodle-name-frame'></li> \
                                        <div class='flex my-3'> \
                                            <div class='w-1/3 mt-1 px-3 py-2'> \
                                                ラーメンの名前： \
                                            </div> \
                                            <div class='w-2/3'> \
                                                <input type='text' id='noodle_name' name='noodle_name' value=' " + noodleName +" ' class='w-2/3 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'> \
                                            </div> \
                                        </div> \
                                    </li> \
                                    <li class='compared_thing_range'> \
                                        <div class='flex my-3'> \
                                            <div class='w-2/5 mt-1 px-3 flex'> \
                                                <div class='w-3/5'> \
                                                <label for='noodle'>麺のうまさ</label> \
                                                </div> \
                                                <div class='w-2/5'> \
                                                <input type='text' id='noodle_num' name='noodle_num' value='" + noodle + "' class='w-4/5 view-range-value-class'> \
                                                </div> \
                                            </div> \
                                            <div class='w-3/5 mt-1 px-3'> \
                                                <div class='h-2/3'> \
                                                    <input type='range' id='noodle' name='noodle' class='range-class w-4/5 h-2 bg-blue-100 appearance-none' \
                                            min='0' max='100' value='" + noodle + "'> \
                                                    </div> \
                                                <div lass='h-1/3'> \
                                                    <div class='flex w-4/5 justify-between'> \
                                                        <span>0</span><span>100</span> \
                                                    </div> \
                                                </div> \
                                            </div> \
                                        </div> \
                                    </li> \
                                    <li class='compared_thing_range'> \
                                        <div class='flex my-3'> \
                                            <div class='w-2/5 mt-1 px-3 flex'> \
                                                <div class='w-3/5'> \
                                                <label for='soup-koku'>スープのうまさ</label> \
                                                </div> \
                                                <div class='w-2/5'> \
                                                <input type='text' id='noodle_num' name='noodle_num' value='" + soupKoku + "' class='w-4/5 view-range-value-class'> \
                                                </div> \
                                            </div> \
                                            <div class='w-3/5 mt-1 px-3'> \
                                                <div class='h-2/3'> \
                                                    <input type='range' id='soup-koku' name='soup-koku' class='range-class w-4/5 h-2 bg-blue-100 appearance-none' \
                                            min='0' max='100' value='" + soupKoku + "'> \
                                                </div> \
                                                <div lass='h-1/3'> \
                                                    <div class='flex w-4/5 justify-between'> \
                                                        <span>0</span><span>100</span> \
                                                    </div> \
                                                </div> \
                                            </div> \
                                        </div> \
                                    </li> \
                                    <li class='compared_thing_range'> \
                                        <div class='flex my-3'> \
                                            <div class='w-2/5 mt-1 px-3 flex'> \
                                                <div class='w-3/5'> \
                                                    <label for='ingredients'>具材のうまさ</label> \
                                                </div> \
                                                <div class='w-2/5'> \
                                                    <input type='text' id='ingredients_num' name='ingredients_num' value='" + ingredientsNum + "'class='w-4/5 view-range-value-class'> \
                                                </div> \
                                            </div> \
                                            <div class='w-3/5 mt-1 px-3'> \
                                                <div class='h-2/3'> \
                                                    <input type='range' id='ingredients' name='ingredients' class='range-class w-4/5 h-2 bg-blue-100 appearance-none' \
                                            min='0' max='100' ingredientsNum> \
                                                </div> \
                                                <div lass='h-1/3'> \
                                                    <div class='flex w-4/5 justify-between'> \
                                                        <span>0</span><span>100</span> \
                                                    </div> \
                                                </div> \
                                            </div> \
                                        </div> \
                                    </li> \
                                    <li class='compared_thing_text'> \
                                        <div class='flex my-3'> \
                                            <div class='w-1/3 mt-1 px-3 py-2'> \
                                                価格： \
                                            </div> \
                                            <div class='w-1/3'> \
                                                <input type='number' id='price' name='price' min='0' max='10000' value='" + price + "' class='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'> \
                                            </div> \
                                            <div class='w-1/3 mt-1 px-3 py-2'> \
                                                <label for='price'>円</label> \
                                            </div> \
                                        </div> \
                                    </li> \
                                </ul> \
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