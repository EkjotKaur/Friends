const contents = [
  {
    img: "./src/img/ross-rachel.jpg",
    title: "ROSS AND RACHEL",
    body: ["Ross Geller, Ph.D., is one of the six main fictional characters of the NBC sitcom Friends, portrayed by David Schwimmer. Ross is considered by many to be the most intelligent member of the group and is noted for his goofy but lovable demeanor. His relationship with Rachel Green was included in TV Guide's list of the best TV couples of all time, as well as Entertainment Weekly's '30 Best 'Will They/Won't They?' TV Couples'. Kevin Bright, one of the executive producers of the show, had worked with Schwimmer before, so the writers were already developing Ross's character in Schwimmer's voice; hence, Schwimmer was the first person to be cast on the show.", "Rachel Karen Green[4] is a fictional character, one of the six main characters who appeared in the American sitcom Friends. Portrayed by Jennifer Aniston, the character was created by David Crane and Marta Kauffman, and appeared in all of the show's 236 episodes during its decade-long run, from its premiere on September 22, 1994 to its finale on May 6, 2004. Introduced in the show's pilot as a naïve runaway bride who reunites with her childhood best friend Monica Geller and relocates to New York City, Rachel gradually evolves from a spoiled, inexperienced 'daddy's girl' into a successful businesswoman. During the show's second season, the character becomes romantically involved with Monica's brother, Ross, with whom she maintains a complicated on-off relationship throughout the series. Together, the characters have a daughter, Emma"]
  },
  {
    img: "./src/img/monica-chandler.jpg",
    title: "MONICA AND CHANDLER",
    body: ["Monica E. Geller-Bing is a fictional character, one of the six main characters who appears on the American sitcom Friends (1994–2004). Created by David Crane and Marta Kauffman, and portrayed by actress Courteney Cox, Monica appears in each of the show's 236 episodes, from its premiere on September 24, 1994, to its finale on May 6, 2004. A chef known for her cleanliness, competitiveness and obsessive-compulsive nature, Monica is the younger sister of Ross Geller and best friend of Rachel Green, the latter of whom she invites to live with her after Rachel forsakes her own wedding. The two characters spend several years living together as roommates until Monica begins a romantic relationship with long-time neighbor and friend Chandler Bing, whom she marries. Unable to conceive children on their own, the couple eventually adopts twins Erica and Jack Bing and moves out of their apartment into a larger house in the suburbs", "Chandler Muriel Bing is a fictional character from the NBC sitcom Friends, portrayed by Matthew Perry.[2] He was born on April 24, 1968, to Nora Tyler Bing (Morgan Fairchild), an erotic romance novelist, and Charles Bing (Kathleen Turner), a gay female impersonator and star of a Las Vegas drag show called 'Viva Las Gay-gas' as Helena Handbasket. His star sign is Taurus.[3] He is of Scottish and Swedish ancestry. He is an only child and is apparently from an affluent family. Chandler's parents announced their divorce to him over Thanksgiving dinner when he was nine years old, an event which causes him to refuse to celebrate the holiday in his adulthood and develop his notorious sense of humour as a defense mechanism. It is revealed in season 1 that he went to an all-boys high school."]
  },
  {
    img: "./src/img/phoebe-mike.jpg",
    title: "PHEOBE AND MIKE",
    body: ["Phoebe Buffay is a fictional character, portrayed by Lisa Kudrow, one of the six main characters from the American sitcom Friends, created by David Crane and Marta Kauffman. Phoebe was born on February 16 and is the daughter of Frank and Lily Buffay. Her birth mother's name was Phoebe Abbott, for whom she was named after. Phoebe has a twin sister, Ursula, who is also portrayed by Kudrow. Phoebe can speak several languages, including French and Italian. She appeared in all of the show's 236 episodes. She is a masseuse and musician, notable for her offbeat and extremely ditzy behavior. She was Monica Geller's roommate before Rachel Green, which is how she was introduced to the group. Phoebe is best friends with Monica and Rachel, along with their neighbors, Chandler Bing and Joey Tribbiani, and also Monica's brother Ross Geller. She plays a Gibson Gospel and sings at Central Perk. During the show's ninth season, Phoebe and Joey decide to choose a blind date for each other. Phoebe finds someone for him, but Joey forgets about their deal and doesn't find anyone for her. So a couple of minutes before the date, Joey accidentally finds Mike who agrees to go on a blind date with Phoebe. Mike Hannigan (played by actor Paul Rudd) and Phoebe begin a romantic relationship. They later get engaged and then marry.", "Similar to the short-lived Monica/Chandler/Richard love triangle, Phoebe had two serious romantic interests that overlapped with each other at one point during the series. David (Hank Azaria), known as 'The scientist guy', has a romance with Phoebe in the first season of the series, but breaks her heart when he decides to leave for Minsk on a three-year research trip. He makes a few more appearances throughout the series, most notably trying to get back together with her and kissing her when they get interrupted by Phoebe's then-boyfriend Mike (Paul Rudd). Mike had been introduced to Phoebe in the ninth season of the show, when Joey forgot he was supposed to find Phoebe a double date and decided to shout for a random guy called 'Mike' in the coffee shop instead. After a whirlwind romance, Phoebe and Mike eventually break up and she briefly reunites with David in Barbados. Mike beats David to the punch, however, and proposes to Phoebe before the latter gets a chance. She rejects David as she realized she was in love with Mike. She also rejects Mike, on the basis that she did not need a proposal from him, but an indication that their relationship was progressing. She ends up marrying Mike."]
  },
  {
    img: "./src/img/joey.jpg",
    title: "JOEY",
    body: ["Joseph Francis Tribbiani Jr. is a fictional character, serving as one of the primary characters of the NBC sitcom Friends and the main protagonist of its spin-off Joey, and he is portrayed by Matt LeBlanc in both series. He is an Italian-American struggling actor who lives in New York City with his roommate and best friend, Chandler Bing (Matthew Perry), and hangs out in a tight-knit group of his best friends: Chandler, Ross Geller (David Schwimmer), Monica Geller (Courteney Cox), Rachel Green (Jennifer Aniston), and Phoebe Buffay (Lisa Kudrow). He lived with a few other roommates when Chandler moved out to move in with Monica.Joey was presumably born in 1968 as he talks about being 13 in 1981. He is from Queens, New York and is Catholic. Joey comes from a working-class Italian-American family of eight children, of which he is the only boy. His father Joseph Tribbiani, Sr. (Robert Costanzo), is a pipefitter, and his mother's name is Gloria (Brenda Vaccaro). Joey has seven sisters: Mary Therese (Mimi Lieber on Friends) a.k.a. Mary Teresa (Christina Ricci on Joey), Mary Angela (Holly Gagnier), Dina (Marla Sokoloff), Gina (K.J. Steinberg on Friends, Drea de Matteo on Joey), Tina (Lisa Maris),[4] Veronica (Dena Miceli),[4] and Cookie (Alex Meneses). As a child, he was extremely accident-prone. In 'The One with Ross' New Girlfriend', it was implied that he was sexually abused by his tailor but didn't realize it until Chandler went to the same tailor.", ""]
  }
]


const content = document.getElementById("series");

function showDetails(series){
  let output = "";
  output += `
  <div id="friends-2" class="friends-2">
    <div class="inner-2">
      <div class="row justify-content-end m-0">
        <div class="col-2 col-md-1 mt-xl-3" id="close">
          <h1><i class="fas fa-times"></i></h1></i>
        </div>
      </div>
      <div class="row justify-content-around m-0 p-xl-5">
        <div class="col-6 col-md-5 col-xl-4 my-5">
          <img src=${contents[series].img} alt="friends-img">
        </div>
        <div class="col-11 mt-0 col-xl-7 p-xl-3 my-xl-4">
            <h1 class="display-4 display-lg-3">${contents[series].title}</h1>
            <p>${contents[series].body[0]}</p>
            <p>${contents[series].body[1]}</p>
        </div>
      </div>
    </div>
  </div>`

  content.innerHTML = output;
}

const toggle = () => {
  document.getElementById("model").style.display = "none";
  document.getElementById("navbar").style.display = "none";
}

document.getElementById("friends").addEventListener("click", () => {
  toggle();
  showDetails(0);
  closeWindow();
});


document.getElementById("second").addEventListener("click", () => {
  toggle();
  showDetails(1);
  closeWindow();
});

document.getElementById("third").addEventListener("click", () => {
  toggle();
  showDetails(2);
  closeWindow();
});

document.getElementById("forth").addEventListener("click", () => {
  toggle();
  showDetails(3);
  closeWindow();
});

const closeWindow = () => {
  document.querySelector(".fa-times").addEventListener("click", () => {
    document.getElementById("model").style.display = "block";
    document.getElementById("navbar").style.display = "flex";
    // document.getElementById("friends-2").style.display = "none";
    content.innerHTML = "";
  });
}

