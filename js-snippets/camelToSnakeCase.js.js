function camelToSnakeCase(s){
    console.log(s);
    return s.split('').map((char,index) => {
        if(char === char.toUpperCase()){
            return index != 0 ? '_' + char.toLowerCase(): '' + char.toLowerCase();
        } else {
            return char;
        }
    }).join('');
}

camelToSnakeCase("HelloThere");