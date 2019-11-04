/*
 * darkmode.js v1.2
 *
 * Copyright (c) 2019 0505Keitan
 * Released under the MIT license.
 * see https://opensource.org/licenses/MIT
 *
 * requied jQuery, fontawesome.
 * This source code is released under the MIT License.
 * http://opensource.org/licenses/mit-license.php
 */

isDark = false;

$('#toggleMode').css('cursor','pointer');

$('#toggleMode').on('click', function() {
    if(isDark===false){
        $('body').css('transition','.7s');
        $('a').css('transition','.7s');
        $('body').css('background-color','#212121');
        $('body').css('color', '#FFF');
        $('a:link').css('color', 'white');
        $('a:visited').css('color', 'white');
        $(this).html('<i class="fas fa-lightbulb"></i> LightMode');
        isDark=!isDark;
    }else{
        $('body').css('transition','.7s');
        $('a').css('transition','.7s');
        $('body').css('background-color','#FFF');
        $('body').css('color', '#000');
        $('a:link').css('color', 'black');
        $('a:visited').css('color', 'black');
        $(this).html('<i class="fas fa-moon"></i> DarkMode');
        isDark=!isDark;
    }
});