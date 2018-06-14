function makePwd(n) {
    var pwd = "";
    var chars = "ABCDEFGHIJ0123456789!@#$%KLMNOPQRSTUVWXYZ";
    for (i = 0; i < n; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * n));
    }
    return pwd;

}

console.log(makePwd(13));


