function isLeap(){
    if(year % 4==0){
        if (year % 100 != 0) {
            if (year % 400 == 0) {
                return "it is leap year";
            }
        }
    }
    else{
        return "not leap year";
    }
}

studName = {Sara, Akash, Josy, Harry, Maya};
for (var index = 0; index < studName.length; index++) {
    print(StudName);    
}
