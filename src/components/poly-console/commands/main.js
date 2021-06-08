export const CommandList = {
    help: {
        usage: "Well, ain't this obvious? lol",
        action: function(command){
            if( command[0] === "" ){
                return {
                    output: "Syntax error while using cookies."
                }
            }
            let commands = ['hello', 'cookies', 'clear'], str = ""
            if( typeof command[0] != "undefined" ){
                str = command[0] + " help: "+CommandList[command[0]].usage
            }else{
                str = "Commands list: \n"+commands.map(command=>{
                    return " "+command
                })
                str += ". Type 'help command' to see more info."
            }
            return {
                output: str
            }
        }
    },
    ping: "pong",
    hello: "Hi from "+document.domain+"!",
    cookies: {
        usage: "Use 'cookies action'. Actions: get, set [Name Value], delete",
        action: function(command){
            let str = ""
            if( command[0] === "get" ){ // GET COOKIES
                if(document.cookies === "" ){
                    str = "No cookies currently."
                }else{
                    str = "Cookies in this site are: "+document.cookie
                }
            }else if(command[0] === "set"){ //Set a cookie
                if( typeof command[1] != "undefined" && typeof command[2] != "undefined" ){
                    document.cookie = command[1] + "=" + command[2]
                    str = "Cookie "+ command[1] + " set."
                }else{
                    str = "Incorrect 'cookie set' usage."
                }
            }else if(command[0] === "delete"){ //DELETE COOKIES
                document.cookies = "";
                str = "All cookies deleted!"
            }else{
                str = "Incorrect cookies usage."
            }
            return {
                output: str
            }
        }
    },
    clear: {
        usage: "Type 'clear' and press enter to clear the console.",
        action: function(){
            return {
                updateState: {
                    history: [],
                    commands: []
                }
                //output: "Clearing console..."
            }
        }
    },
    // snack: {
    //     usage: "Use 'snack message' to take a snack!",
    //     action: function(command){
    //         let str = ''
    //         if( command[0] === "" ){
    //             return {
    //                 output: "You need to provide a message for the snack."
    //             }
    //         }
    //         window.snack('Console says: '+command.join(' '))
    //         str = 'Snack: '+command.join(' ')
    //         return {
    //             output: str
    //         }
    //     }
    // },
}