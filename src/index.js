module.exports = function check(str, bracketsConfig) {

  let stack =[]
    for(let letter of str){
        for(let item of bracketsConfig){
            if(item.includes(letter)){
                if(item[0] === letter && item[1] === letter){
                    if(stack.length == 0 || stack[stack.length-1] !== letter){
                        stack.push(letter);
                    }else{
                        if(stack[stack.length-1] === letter){
                            stack.pop();
                        }
                    }
                    break;
                }
                if(item.indexOf(letter) == 0){
                    stack.push(letter);
                    break;
                }else{
                    if(stack.length == 0 ) return false;
                    if(stack.pop() != item[0]) return false;
                    break;
                }
            }
        }
    }
    if(stack.length !=0) return false;
    return true;
}
