new fullpage("#fullpage", {
    sectionsColor: ["black", "white"],
    licenseKey: "1NKKK-0T7RK-0CH28-MWNGH-RJOMM",
    scrollOverflow: true,
    normalScrollElements: ".scroll-overflow"
});

const elem = document.querySelector("#nav-bg");
const toggleBtn = document.querySelector("#toggle-btn");
const elemH = elem.getBoundingClientRect().height;
const elemW = elem.getBoundingClientRect().width;

let open = false;
let scale, offsetX, offsetY;

const calculateValues = (() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const offsetValue = Number(getComputedStyle(elem).getPropertyValue("--offset-value"));

    offsetX = (w/2) - (elemW/2) - offsetValue;
    offsetY = (h/2) - (elemH/2) - offsetValue;

    const radius = Math.sqrt((h ** 2)+(w ** 2));
    scale = radius/(elemW/2)/2 + .1;
    return scale;
})

const openMenu = () => {
    elem.style.setProperty("--translate-x", `${offsetX}px`);
    elem.style.setProperty("--translate-y", `-${offsetY}px`);
    elem.style.setProperty("--scale", scale);
}
const closeMenu = () => {
    elem.style.setProperty("--scale", 1);
    elem.style.setProperty("--translate-x", 0);
    elem.style.setProperty("--translate-y", 0);
}
const animateMenu = () => {
    open ? openMenu() : closeMenu();
};

const toggleMenu = () => {
    open = !open;
    animateMenu();
    toggleBtn.classList.toggle("shown");
}

const resizeHandler = () => { 
    window.requestAnimationFrame(() => {
        calculateValues();
        animateMenu();
    });
}

calculateValues();

toggleBtn.addEventListener("click", toggleMenu, false);
window.addEventListener("resize", resizeHandler, false);

function searchPrice(){
    var price_list = [
        // 정품액정 재생액정 OLED액정 인셀액정 표준용량 대용량배터리 하우징 독커넥터 탭틱엔진 전면카 후면카 수화부 하단스피커 볼륨케이블 전원케이블 무선충전 듀얼심개조 메인보드의뢰
        [33700, "품절", "해당없음", 19800, 26400, 32800, 20000, 10600, 7700, 7000, 8000, 5600, 7000, 7000, "해당없음", "해당없음", "해당없음", 40000], //아이폰 SE1
        [37600, 31200, "해당없음", 30200, 17500, 20500, 55000, 17000, 22000, 16000, 55000, 7200, 9900, 9700, "해당없음", 11000, "해당없음", 50000], //아이폰 SE2
        [37600, 31200, "해당없음", 30200, 27000, "품절", 55000, 17000, 22000, 16000, 55000, 7200, 9900, 9700, "해당없음", 11000, "해당없음", 60000], //아이폰 SE3
        [33700, "품절", "해당없음", 19800, 26400, 32800, 20000, 10600, 7700, 7000, 8000, 5600, 7000, 7000, "해당없음", "해당없음", "해당없음", 40000], //아이폰 5
        [33700, "품절", "해당없음", 19800, 26400, 32800, 20000, 10600, 7700, 7000, 8000, 5600, 7000, 7000, "해당없음", "해당없음", "해당없음", 40000], //아이폰 5C
        [33700, "품절", "해당없음", 19800, 26400, 32800, 20000, 10600, 7700, 7000, 8000, 5600, 7000, 7000, "해당없음", "해당없음", "해당없음", 40000], //아이폰 5S
        [34100, 24000, "해당없음", 21300, "품절", 19000, 25000, 10600, 8200, 7000, 8700, 5600, 8200, 9000, 9000, "해당없음", "해당없음", 40000], //아이폰 6
        [40600, 39800, "해당없음", 24000, "품절", 20500, 25000, 10600, 8200, 9000, 15000, 5600, 8200, 9000, 9000, "해당없음", "해당없음", 40000], //아이폰 6+
        [37600, 26400, "해당없음", 22700, 16000, 19000, 25000, 10600, 8200, 9000, 15000, 5600, 8700, 9000, "해당없음", "해당없음", "해당없음", 40000], //아이폰 6S
        [40600, 39800, "해당없음", 24000, "품절", 20500, 25000, 10600, 8200, 9000, 12000, 5600, 8200, 9000, 9000, "해당없음", "해당없음", 40000], //아이폰 6S+
        [37600, 29800, "해당없음", 29800, 16500, 19500, 35000, 12200, 12800, 15000, 30000, 6200, 9400, 9000, "해당없음", "해당없음", "해당없음", 40000], //아이폰 7
        [42300, 39800, "해당없음", 28900, 18000, 21000, 40000, 12400, 12800, 17500, 60000, 6200, 10600, 9000, "해당없음", "해당없음", "해당없음", 40000], //아이폰 7+
        [37600, 31200, "해당없음", 30200, 17500, 20500, 50000, 17000, 22000, 16000, 55000, 7200, 9900, 9700, "해당없음", 11000, "해당없음", 40000], //아이폰 8
        [57400, 40800, "해당없음", 36200, 18500, 21500, 55000, 17000, 30600, 20000, 67000, 7200, 10600, 9700, "해당없음", 11000, "해당없음", 40000], //아이폰 8+
        [99800, 93600, 69800, 49200, 22500, 25500, 60000, 17600, 21000, 23000, 60000, 11900, 9900, "해당없음", 10000, 25400, "해당없음", 90000], //아이폰 X
        [111700, 94800, 68400, 50400, 27500, 30500, 60000, 18600, 23200, 23000, 65000, 12800, 12000, "해당없음", 10000, 29400, "해당없음", 100000], //아이폰 XS
        [175100, 154800, 99600, 64800, 31000, "품절", 65000, 19700, 23600, 23000, 65000, 17800, 12000, "해당없음", 10000, 30400, "해당없음", 100000], //아이폰 XSM
        [84900, 67200, "해당없음", 52800, 24000, "품절", 65000, 18600, 23600, 23000, 55000, 14000, 12900, 17100, "해당없음", 23000, 13000, 90000], //아이폰 XR
        [89500, 69900, "해당없음", 59800, 32500, 35500, 70000, 36800, 24200, 23000, 67500, 21000, 17500, 12400, 12400, 17500, 20000, 120000], //아이폰 11
        [134600, 100800, 91200, 63600, 39500, "품절", 70000, 67700, 24800, 23000, 95000, 22000, 22900, "해당없음", "품절", 29400, "품절", 140000], //아이폰 11Pro
        [263400, 189600, 110400, 91200, "품절", "품절", 70000, 67700, 24800, 23000, 95000, 34000, 22900, "해당없음", "품절", 29400, "품절", 140000], //아이폰 11ProM
        ["품절", "품절", 156000, 127000, 31500, 34500, 80000, "품절", "품절", "품절", "품절", "품절", "품절", "해당없음", "해당없음", "품절", "품절", 140000], //아이폰 12mini
        [278800, "품절", 156000, 127000, 33500, "품절", 80000, "품절", 25200, "품절", "품절", 48600, "품절", "해당없음", "해당없음", 33800, 45000, 140000], //아이폰 12
        [278800, "품절", 156000, 127000, 33500, "품절", 80000, "품절", 25200, "품절", "품절", 48600, "품절", "해당없음", "해당없음", 33800, 45000, 150000], //아이폰 12Pro
        ["품절", "품절", 264000, 175200, "품절", "품절", 80000, "품절", 25200, "품절", "품절", 48600, "품절", "해당없음", "해당없음", 33800, 65000, 150000], //아이폰 12ProM
        ["품절", "품절", 198000, 192000, "품절", "품절", 90000, "품절", "품절", "품절", "품절", "품절", "품절", "해당없음", "해당없음", "품절", "품절", 160000], //아이폰 13mini
        ["품절", 252000, 198000, 192000, "품절", "품절", 90000, "품절", "품절", "품절", "품절", "품절", "품절", "해당없음", "해당없음", "품절", 45000, 160000], //아이폰 13
        ["품절", "품절", "품절", "품절", "품절", "품절", 90000, "품절", "품절", "품절", "품절", "품절", "품절", "해당없음", "해당없음", "품절", 45000, 170000], //아이폰 13Pro
        ["품절", "품절", "품절", "품절", "품절", "품절", 90000, "품절", "품절", "품절", "품절", "품절", "품절", "해당없음", "해당없음", "품절", 65000, 170000] //아이폰 13ProM
    ]
    var selected_phone = document.getElementById("select_phone").value;
    var selected_parts = document.getElementById("select_parts").value;
    var phone_list = ["아이폰 SE(1세대)", "아이폰 SE(2세대)", "아이폰 SE(3세대)", "아이폰 5", "아이폰 5C", "아이폰 5S", "아이폰 6", "아이폰 6 Plus", "아이폰 6S", "아이폰 6S Plus", "아이폰 7", "아이폰 7 Plus", "아이폰 8", "아이폰 8 Plus", "아이폰 X", "아이폰 XS", "아이폰 XS MAX", "아이폰 XR", "아이폰 11", "아이폰 11 Pro", "아이폰 11 Pro MAX", "아이폰 12 mini", "아이폰 12", "아이폰 12 Pro", "아이폰 12 Pro MAX", "아이폰 13 mini", "아이폰 13", "아이폰 13 Pro", "아이폰 13 Pro MAX"];
    var parts_list = ["정품 액정", "재생 액정", "OLED 카피 액정", "LCD 카피 액정", "표준용량 배터리", "대용량 배터리", "하우징", "독커넥터", "탭틱엔진", "전면 카메라", "후면 카메라", "수화부 스피커", "하단 스피커", "볼륨 케이블", "전원 케이블", "무선충전 모듈", "듀얼심 개조", "메인보드 수리"];

    var price_ment;
    if(selected_parts == 0){
        price_ment = `${phone_list[selected_phone]} 정품 액정: <span class = "text-red">${price_list[selected_phone][0]}</span>원<br>${phone_list[selected_phone]} 재생 액정: <span class = "text-red">${price_list[selected_phone][1]}</span>원<br>`;
        if(price_list[selected_phone][2] !== "해당없음") price_ment += `${phone_list[selected_phone]} OLED 카피 액정: <span class = "text-red">${price_list[selected_phone][2]}</span>원<br>`;
        price_ment += `${phone_list[selected_phone]} LCD 카피 액정: <span class = "text-red">${price_list[selected_phone][3]}</span>원<br>`;
    }
    else if(selected_parts == 4){
        price_ment = `${phone_list[selected_phone]} 표준용량 배터리: <span class = "text-red">${price_list[selected_phone][4]}</span>원<br>${phone_list[selected_phone]} 대용량 배터리: <span class = "text-red">${price_list[selected_phone][5]}</span>원<br>`;
    }
    else if(selected_parts == 17){
        price_ment = "";
        document.getElementById("service-pricing").innerHTML = `수리 비용: <span class = "text-red">${price_list[selected_phone][17]}</span>원 부터<br>메인보드 수리는 직접 물품을 받고난 뒤 정확한 견적이 나옵니다.<br>* 침수/사설수리 흔적 심할 시 10000원 추가`;
    }
    else{
        if(price_list[selected_phone][selected_parts] === "품절"){
            price_ment = `<span class = "text-red">제고확보 중</span>`;
        }
        else{
            price_ment = `${phone_list[selected_phone]} ${parts_list[selected_parts]}: <span class = "text-red">${price_list[selected_phone][selected_parts]}</span>원<br>* 모든 부품 정품 부품을 사용합니다.`
        }
    }

    if(selected_phone == 0 || selected_phone == 1 || selected_phone == 2 || selected_phone == 3 || selected_phone == 4 || selected_phone == 5 || selected_phone == 8 || selected_phone == 10 || selected_phone == 11 || selected_phone == 12 || selected_phone == 13){
        if(selected_parts == 13 || selected_parts == 14){
            alert("아이폰 SE(1세대), SE(2세대), SE(3세대), 5, 5C, 5S, 6S, 7, 7 Plus, 8, 8 Plus는 볼륨 케이블과 전원 케이블이 일체형입니다. 전원 케이블 교체 시 볼륨 케이블을 선택하시기 바랍니다.");
            if(price_list[selected_phone][selected_parts] == "해당없음") price_ment = `${phone_list[selected_phone]}은(는) 볼륨 케이블과 전원 케이블이 일체형입니다. 전원 케이블 교체 시 볼륨 케이블을 선택하시기 바랍니다.`;
        }
    }
    if(selected_phone == 14 || selected_phone == 15 || selected_phone == 16 || selected_phone == 19 || selected_phone == 20){
        if(selected_parts == 13 || selected_parts == 15){
            alert("아이폰 X, XS, XS MAX, 11 Pro, 11 Pro MAX는 무선충전 모듈과 볼륨 케이블이 일체형입니다. 볼륨 케이블 교체 시 무선충전 모듈을 선택하시기 바랍니다.");
            if(price_list[selected_phone][selected_parts] == "해당없음") price_ment = `${phone_list[selected_phone]}은(는) 무선충전 모듈과 볼륨 케이블이 일체형입니다. 볼륨 케이블 교체 시 무선충전 모듈을 선택하시기 바랍니다.`;
        }
    }
    if(selected_phone == 17){
        if(selected_parts == 14 || selected_parts == 15){
            alert("아이폰 XR은 무선충전 모듈과 전원 케이블이 일체형입니다. 전원 케이블 교체 시 무선충전 모듈을 선택하시기 바랍니다.");
            if(price_list[selected_phone][selected_parts] == "해당없음") price_ment = `${phone_list[selected_phone]}은(는) 무선충전 모듈과 전원 케이블이 일체형입니다. 전원 케이블 교체 시 무선충전 모듈을 선택하시기 바랍니다.`;
        }
    }
    if(selected_phone == 21 || selected_phone == 22 || selected_phone == 23 || selected_phone == 24 || selected_phone == 25 || selected_phone == 26 || selected_phone == 27 || selected_phone == 28){
        if(selected_parts == 13 || selected_parts == 14 || selected_parts == 15){
            alert("아이폰 12 mini, 12, 12 Pro, 12 Pro MAX, 13 mini, 13, 13 Pro, 13 Pro MAX는 무선충전 모듈과 볼륨 케이블이 일체형입니다. 볼륨 케이블 교체 시 무선충전 모듈을 선택하시기 바랍니다.");
            if(price_list[selected_phone][selected_parts] == "해당없음") price_ment = `${phone_list[selected_phone]}은(는) 무선충전 모듈과 볼륨 케이블이 일체형입니다. 볼륨 케이블 교체 시 무선충전 모듈을 선택하시기 바랍니다.`;
        }
    }

    document.getElementById("parts-pricing").innerHTML = price_ment;

    if(selected_parts >= 0 && selected_parts <= 5 || selected_parts >= 8 && selected_parts <= 12 || selected_parts == 16){
        document.getElementById("service-pricing").innerHTML = `수리 대행이 필요하신가요? 부품값과 함께 아래 공임비를 지불하시고, 물품을 보내주시면 직접 수리해드립니다. <br>공임비: <span class = "text-red">10000</span>원<br>* 침수/사설수리 흔적 심할 시 10000원 추가`;
    }
    else if(selected_parts == 17){
        console.log("GayJoyGo");
    }
    else{
        document.getElementById("service-pricing").innerHTML = `수리 대행이 필요하신가요? 부품값과 함께 아래 공임비를 지불하시고, 물품을 보내주시면 직접 수리해드립니다. <br>공임비: <span class = "text-red">20000</span>원<br>* 침수/사설수리 흔적 심할 시 10000원 추가`;
    }
}