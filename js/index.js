
//Start of Js code

let display = document.getElementById("motivato");
console.log(display);

var motivation = [
  //Add Quotes below
  
  "“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney",
  "The secret of getting ahead is getting started.” – Mark Twain",
  "“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.” – Michael Jordan",
  "“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” – Mary Kay Ash",
  "“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb",
  "“Only the paranoid survive.” – Andy Grove",
  "“It’s hard to beat a person who never gives up.” – Babe Ruth",
  "“I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’” – Leah Busque",
  "“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz",
  "“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.” – Arianna Huffington",
  "“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.” – Joss Whedon",
  "“Just another Magic Monday” – Unknown",
  "“One day or day one. You decide.” – Unknown",
  "“It’s Monday… time to motivate and make dreams and goals happen. Let’s go!” – Heather Stillufsen",
  "“It was a Monday and they walked on a tightrope to the sun.”― Marcus Zusak",
  "“Goodbye blue Monday.” ― Kurt Vonnegut",
  "“So. Monday. We meet again. We will never be friends—but maybe we can move past our mutual enmity toward a more-positive partnership.” ― Julio-Alexi Genao",
  "“When life gives you Monday, dip it in glitter and sparkle all day.” – Ella Woodword",
  "Monday c’est Mon Day",
  "All Motivation Mondays need are a little more coffee and a lot more mascara",
  "I’m alive, motivated and ready to slay the day #MONSLAY",
  "“No one is to blame for your future situation but yourself. If you want to be successful, then become “Successful.”― Jaymin Shah",
  "“Things may come to those who wait, but only the things left by those who hustle.”― Abraham Lincoln",
  "“Everything comes to him who hustles while he waits.”― Thomas Edison",
  "“Every sucessful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.” ― K’wan",
  "“Invest in your dreams. Grind now. Shine later.” – Unknown",
  "“Hustlers don’t sleep, they nap.” – Unknown",
  "“Greatness only comes before hustle in the dictionary.” – Ross Simmonds",
  "“Without hustle, talent will only carry you so far.” – Gary Vaynerchuk",
  "“Work like there is someone working twenty four hours a day to take it away from you.” – Mark Cuban",
  "“Hustle in silence and let your success make the noise.” – Unknown",
  "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” – Aristotle" ,
  "“If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.” – Sheryl Sandberg",
  "“I always did something I was a little not ready to do. I think that’s how you grow. When there’s that moment of ‘Wow, I’m not really sure I can do this,’ and you push through those moments, that’s when you have a breakthrough.” – Marissa Mayer",
  "“If you hear a voice within you say ‘you cannot paint,’ then by all means paint and that voice will be silenced.” – Vincent Van Gogh",
  "“How wonderful it is that nobody need wait a single moment before starting to improve the world.” – Anne Frank",
  "“Some people want it to happen, some wish it would happen, others make it happen.” – Michael Jordan",
  "“Great things are done by a series of small things brought together” – Vincent Van Gogh",
  "“If you hire people just because they can do a job, they’ll work for your money. But if you hire people who believe what you believe, they’ll work for you with blood and sweat and tears.” – Simon Sinek",
  "“Very often, a change of self is needed more than a change of scene.’ – A.C. Benson",
  "“Leaders can let you fail and yet not let you be a failure.” – Stanley McChrystal",
  "“It’s not the load that breaks you down, it’s the way you carry it.” – Lou Holtz",
  "“Everything’s impossible until somebody does it.” – Batman"

]
function motivateMe() {
  var listLength =  Object.keys(motivation).length;
  var randVal = Math.floor(Math.random() * listLength);
  display.innerHTML = (motivation[randVal]);
}

