new fullpage("#fullpage", {
    sectionsColor: ["black", "white"],
    licenseKey: "1NKKK-0T7RK-0CH28-MWNGH-RJOMM"
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
        // 정품액정 재생액정 OLED액정 인셀액정 표준용량 대용량배터리 하우징 독커넥터 탭틱엔진 전면카 후면카 수화부 하단스피커 볼륨 전원케이블 무선충전
        [33700, "품절", "해당없음", 20300, 26400, 32800, 20000, 10600, 7700, 7000, 8000, 5600, 7000, 7000, "해당없음", "해당없음"], //아이폰 SE1
        [37600, 31200, "해당없음", 30200, 17500, 20500, 55000, 17000, 22000, 16000, 55000, 7200, 9900, 9700, "해당없음", 11000], //아이폰 SE2
        [37600, 31200, "해당없음", 30200, 27000, "품절", 55000, 17000, 22000, 16000, 55000, 7200, 9900, 9700, "해당없음", 11000], //아이폰 SE3
        [33700, "품절", "해당없음", 20300, 26400, 32800, 20000, 10600, 7700, 7000, 8000, 5600, 7000, 7000, "해당없음", "해당없음"], //아이폰 5
        [33700, "품절", "해당없음", 20300, 26400, 32800, 20000, 10600, 7700, 7000, 8000, 5600, 7000, 7000, "해당없음", "해당없음"], //아이폰 5C
        [33700, "품절", "해당없음", 20300, 26400, 32800, 20000, 10600, 7700, 7000, 8000, 5600, 7000, 7000, "해당없음", "해당없음"], //아이폰 5S
        [34100, 24000, "해당없음", 21300, "품절", 19000, 25000, 10600, 8200, 7000, 8700, 5600, 8200, 9000, 9000, "해당없음"], //아이폰 6
        [40600, 39800, "해당없음", 24000, "품절", 20500, 25000, 10600, 8200, 9000, 15000, 5600, 8200, 9000, 9000, "해당없음"], //아이폰 6+
        [37600, 26400, "해당없음", 22700, 16000, 19000, 25000, 10600, 8200, 9000, 15000, 5600, 8700, 9000, "해당없음", "해당없음"], //아이폰 6S
        [40600, 39800, "해당없음", 24000, "품절", 20500, 25000, 10600, 8200, 9000, 12000, 5600, 8200, 9000, 9000, "해당없음"], //아이폰 6S+
        [37600, 30000, "해당없음", 28900, 16500, 19500, 35000, 12200, 12800, 15000, 30000, 6200, 9400, 9000, "해당없음", "해당없음"], //아이폰 7
        [42300, 40800, "해당없음", 28900, 18000, 21000, 40000, 12400, 12800, 17500, 60000, 6200, 10600, 9000, "해당없음", "해당없음"], //아이폰 7+
        [37600, 31200, "해당없음", 30200, 17500, 20500, 50000, 17000, 22000, 16000, 55000, 7200, 9900, 9700, "해당없음", 11000], //아이폰 8
        [57400, 40800, "해당없음", 36200, 18500, 21500, 55000, 17000, 30600, 20000, 67000, 7200, 10600, 9700, "해당없음", 11000], //아이폰 8+
        [103700, 93600, 67200, 49200, 22500, 25500, 60000, 17600, 21000, 23000, 60000, 11900, 9900, "해당없음", 10000, 25400], //아이폰 X
        [111700, 94800, 68400, 50400, 27500, 30500, 60000, 18600, 23200, 23000, 65000, 12800, 12000, "해당없음", 10000, 29400], //아이폰 XS
        [175100, 154800, 99600, 64800, 31000, "품절", 70000, 19700, 23600, 23000, 65000, 17800, 12000, "해당없음", 10000, 30400], //아이폰 XSM
        [84900, 67200, "해당없음", 52800, 24000, "품절", 60000, 18600, 23600, 23000, 55000, 14000, 12900, 17100, "해당없음", 23000], //아이폰 XR
    ]
    var selected_phone = document.getElementById("select_phone");
    var selected_parts = document.getElementById("select_parts");
}