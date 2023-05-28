

// import '../Styles/SearchSuggestion.css'; 
 export default function SearchSuggestion() {
    let suggestions = [
        "Channel",
        "CodingLab",
        "CodingNepal",
        "YouTube",
        "YouTuber",
        "YouTube Channel",
        "Blogger",
        "Bollywood",
        "Vlogger",
        "Vechiles",
        "Facebook",
        "Freelancer",
        "Facebook Page",
        "Designer",
        "Developer",
        "Web Designer",
        "Web Developer",
        "Login Form in HTML & CSS",
        "How to learn HTML & CSS",
        "How to learn JavaScript",
        "How to became Freelancer",
        "How to became Web Designer",
        "How to start Gaming Channel",
        "How to start YouTube Channel",
        "What does HTML stands for?",
        "What does CSS stands for?",
    ];
    
    
    
    const searchInput = document.getElementById("searchInput");
    const input = document.getElementById("input");
    const resultBox = document.getElementById("resultBox");
    const icon = document.getElementById("icon");
    let linkTag = document.getElementById("a");
    let webLink;
    
    // if user press any key and release 
    
    if(input){
    input.onkeyup = (e) => { 
        let userData = e.target.value; //user enetered data
        let emptyArray = [];
        
        console.log("is input working???")
        
        if(userData) {
            emptyArray = suggestions.filter((data)=>{
                //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
            });
            emptyArray = emptyArray.map((data) => {
                // passing return data inside li tag
                return data = '<li>'+ data +'</li>';
            });
          
            searchInput.classList.add("active"); //show autocomplete box
            showSuggestions(emptyArray);
            let allList = resultBox.querySelectorAll("li");
            for (let i = 0; i < allList.length; i++) {
                //adding onclick attribute in all li tag
                allList[i].setAttribute("onclick", "select(this)");
            }
        }else{
            searchInput.classList.remove("active"); //hide autocomplete box
        }
    }
}
    
    function showSuggestions(list){
        let listData;
        if(!list.length){
          let  userValue = input.value;
          
          console.log(input.value); 
          
            listData = '<li>'+ userValue +'</li>';
        }else{
            listData = list.join('');
        }
        resultBox.innerHTML = listData;
    }
    
    return(
    
        <div id="container" className="container">
        {/* Find out why this is null  */}
        <div  id="searchInput" className="searchInput">
          <input  id="input" type="text" placeholder="Enter some Text " />
          <div id="resultBox"  className="resultBox">
            { /* here list are inserted from javascript */ }
          </div>
          <div id="fas fa-search"  className="icon"><i className="fas fa-search" /></div>
        </div>
      </div>
    )

}

function init() {

    SearchSuggestion(); 

}

window.onload = init;
