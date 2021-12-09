//var temp = 'This is Global Scope';

function func1() {
    //var temp = 'This is func1 scope';
    func2();

    function func2() {
        //var temp = 'This is func2 scope';
        func3();

        function func3() {
            //var temp = 'This is func3 scope';
            console.log(temp);
        }
    }
}

// temp에 대한 선언이 아예 없으면..
// ReferenceError: temp is not defined
func1();