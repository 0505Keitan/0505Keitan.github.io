function countLength( text, field ) {
  document.getElementById(field).innerHTML = text.length + "文字";
}

function selectboxChange() {
      target = document.getElementById("output");

      selindex = document.form1.Select1.selectedIndex;
      switch (selindex) {
        case 1:
          break;
        case 2:
        	target.innerHTML = "<a href='https://kyash.me/payments/svL2aqWHfNVDwa0tE66QvriCqB7D' class='square_btn2'>¥1を支援</a>";
          break;
        case 3:
          target.innerHTML = "<a href='https://kyash.me/payments/nwLd6lSrT3Ufv4FeiIReIraKmy0C' class='square_btn2'>¥10を支援</a>";
          break;
        case 4:
          target.innerHTML = "<a href='https://kyash.me/payments/epKLxsEKgzvk2kbL0TOXg4GUWVGY' class='square_btn2'>¥100を支援</a>";
          break;
        case 5:
          target.innerHTML = "<a href='https://kyash.me/payments/xz5BVHLv22Im4Ue5UGEdrYfNb9uR' class='square_btn2'>¥200を支援</a>";
          break;
        case 6:
          target.innerHTML = "<a href='https://kyash.me/payments/GGcK3q85UYuH4RlQNPHAdj12kQeY' class='square_btn2'>¥300を支援</a>";
          break;
        case 7:
          break;
          case 8:
          target.innerHTML = "<a href='https://polca.jp/projects/nuYySE8yh4H' class='square_btn2'>¥300~を支援</a>";
          break;
      }
    }