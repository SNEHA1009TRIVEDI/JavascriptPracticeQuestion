function ChangeCharacter(string){
    let ans="";
    for(let itr of string){
        if(itr>='A' && itr<='Z'){
            ans+=(itr+"").toLowerCase();
        }
        else if(itr>='a' && itr<='z'){
            ans+=(itr+"").toUpperCase();
        }
        else{
            ans+=itr;
        }
    }
    return ans;
}

const ChangeCharacterArrow =(string) => {
    let ans="";
    for(let itr of string){
        if(itr>='A' && itr<='Z'){
            ans+=(itr+"").toLowerCase();
        }
        else if(itr>='a' && itr<='z'){
            ans+=(itr+"").toUpperCase();
        }
        else{
            ans+=itr;
        }
    }
    return ans;
}
console.log(ChangeCharacter);
module.exports = {ChangeCharacter, ChangeCharacterArrow};  