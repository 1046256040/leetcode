let playerstate = [];
for (let i = 0; i < 100; ++i) {
    playerstate[i] = true;
}
let remainCount = 100;
let index = 0;
let say = 0;

while (remainCount > 1) {
    if (playerstate[index]) {
        say++;
    }
    if (say === 3) {
        playerstate[index] = false;
        remainCount--;
        say = 0;
    }
    index++;
    if (index === 100) {
        index = 0;
    }
}

for (let i = 0; i < playerstate.length; i++) {    //进行多次循环后，找出最后数组中值仍然为ture的元素
    if (playerstate[i]) {
        console.log("剩下的是从刚开始报数之后的第" + i + "个人");
    }
}

function test() {
    let array = [];
    let array1 = [];
    for (let i = 0; i < 10; i++) {
        array.push(i);
        array1.push(i);
    }

    console.log("原始数组：", array)
    for (let k = 0; k < array.length;) {
        array[k] = array[k] + 10;
        k++;
    }
    console.log("数组1：", array)

    for (let k = 0; k < array1.length-1;) {
        array1[k++] = array1[k] + 10;
    }
    console.log("数组2：", array1)
}

test();