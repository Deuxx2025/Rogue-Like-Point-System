# Rogue Like Point System (RLPS) Game Design Document

## 1.- Introduction
Rogue Like Point System is a game made with JavaScrip and HTML hence is played on a web browser or even inside the Twitch app if the `user` is using mobile to see the stream, used only as a Twitch stream overlay, this means that it is not a stand alone page that the `player` can interact but it is a `community base` game that the sole goal is to reach a certain ammount of points before the `stream ends`.

## 2.- Playablity/Gameplay
Since this is a `Twitch overlay` it does not have the typical character to move or things for a player to do but it works on a constraint that there is `no player`, there is a point generation that is given to `all players` (or in this case users). So if there are 10 people in the stream and some want to `win` the game but others can sabotage by spending the points in the already working `redeem system` that the tool offers.

### 2.1.- Commands explanation
TMI.js is used to read the comment section of the stream and checks for the `!` character and some `key words` afterward, using the `redeem system` from Raid-Base-Point-System (RBPS) a user can use `!menu` to access the menu array so the bot prints that information from the back-end. 

Using the same logic the `user` can start or participate the game using this `commands`, it is also noted that the `user` does not know all the `commands` but in the responses that the bot has the commands themselves are shown:

```
!menu
!soundbits (10) play a soundbit...
!soundbits 
Available sounds: sound1 | sound2... | use !play soundname to play the sound
```

In this example the `command` is used either at the beginning or near the end, so the user knows what command to use. 

### 2.2.- Voting system
There is no `player` in this game then another way to convay action is needed, so a voting system is the closes thing to agency as it gets.

A `user` in chat decides to open up the `!skins` section because in the lower part of the screen they can see the character on the left corner with a text that says "level 1" then a large box with semi transparent background has information of what the skin do and what does it generates, finally there is the total points and the multiplier on the right corner. 

Now a voting message is in chat saying "Go to !skins menu or stay in current menu, type !vote and the number of your choice", this will depend on how many action there are on the current menu.

So to change menu the `users` in chat need to be on the same page so there is a 5 minute window to vote, if all users `voted` then the issue is resolved immediately and the vote system is in cooldown.

## 3.- Skins
In the original RBPS there are skins of characters so to use the already existing architecture this skins will have levels and those levels grant `advantages` towards the point generation, For now all chance are `random`, in future updates there will be a better algorithm. All level ups are tied to the previous one, hence you cannot have a level 3 skin without having a level 1 or 2. EX skins are level max at unlock but the unlocks are tied to constrains. All EX skin work either when they are active or inactive. You can only gain the `advantages` when the skin is in use.

### 3.1.- Zuko-Haruki
Base skin of the game, because when this game was designed the creator was playing Minecraft, when the creator plays another game then the base skin will change. The level 1 is when the skin is `acquired`, this section will count with a level counter, the description of the pasive skill and the cost. 

`Level 1`||
pasive skill `Miner`: You generate aditional points, every minute you'll mine a random Minecraft ore and depending of the ore you'll get rewarded.||
`aditional info`: coal = 1 point | copper = 2 points | lapiz lazuli = 3 points | iron = 5 points | redstone = 6 points | gold = 8 points | emerald = 12 points | diamonds = 15 points | netherite = 25 points||
cost: free

`level 2`||
pasive skill `Slayer`: You now have a sword and armor, on top of your ores you'll hunt for mobs, there is a chance to gain no drops, every 3 minutes the reward is granted.||
`aditional info`: rotten flesh = 5 points | string = 7 points | bone = 10 points | gun powder = 15 points | ender pearl = 30 points||
cost: 75 points

`level 3`||
pasive skill `Trader`: You are a well known hero and suplier on the village all points are doubled.||
cost: 150 points

### 3.2.- Aether-Haruki
In true fashion of Genshin Impact the character will have the gacha experience.

`level 1`||
pasive skill `Adventurer`: You go and explore Teyvat, each minute you encounter a chest that grants different amount of points.||
`aditional info`: 1-25 points||
cost: 30 points 

`level 2`||
pasive skill `Completionist`: You complete comissions in Teyvat, gain 60 points every 5 minutes.||
cost: 75 points 

`level 3`||
pasive skill `Gacha`: every 5 minutes spend either 16 points or 160 points for pulls in the gacha, if you win a new character is unlocked and gain point if you don't win.||
`aditional info`: This 'banner' is up when the skin is active, the characters are randomly chosen at start, 1 pull = 1-10 points | 10 pulls 1-10 points times 10 | win the gacha = character unlock + 1600 points||
cost: 150 points

#### 3.2.1.- Professor-Aether
EX skin explore the possibilities of the `professor` archetype.

`level MAX`||
pasive skill `Gacha Master`: all possiblities are doubled and you gain a natural point generation on top of the already existing one.||
`unlock requirement`: Aether-Haruki level 3 and win any gacha pull. 

### 3.3.- Chibi-Haruki
The original skin or one of the 1st skins the creator made.

`level 1`||
pasive skill `Dreamer`: generate 5 points per minute for every 10 points generated with this gain + 1 natural points.||
cost: 30 points

`level 2`||
pasive skill `Hashira`: You are the dancing flame harshira you can slay bigger demons, gain 30 points every 5 minutes.||
cost: 75 points

`level 3`||
pasive skill `Legend`: Muzan has been defeated thanks to you and the Demon Slayer Corps. Gain 100 points every 10 minutes and gain 1 stack, for every stack decrease 1 minute before receiving the reward.||
cost 150 points

#### 3.3.1.- Professor-Haruki
EX skin explore the possibilities of the `professor` archetype.

`level MAX`||
pasive skill `Intelectual`: gain points starting with the natural multiplier, every 15 minutes do a factorial with that number.||
`unlock requirement`: Chibi-Haruki level 3 + 500 points.

#### 3.3.2.- Letrero Haruki
EX skin different from the `professor` archetype.

`level MAX`||
pasive skill `Stream lord`: multiply all points by the number of viewers.||
`unlock requirement`: Only gained by the gacha

### 3.4.- Ezreal-Haruki
Become the explorer of Runeterra

`level 1`||
pasive skill `Take this!!`: You use your gauntlet to execute minions gain 17 points per minute, every 2 minutes gain 6 more points.||
cost: 30 

`leve 2`||
pasive skill `You belong on a museum`: The best adc in town, gain a kill every 5 minutes.||
`aditional info`: base points gained with this skill is 30-100 points.||
cost: 75 points

`level 3`||
pasive skill `Prodigal explorer`: gain 1150 points, every 30 minutes gain it again, this effect stacks.||
`aditional info`: every 30 minutes gain a stack, each stack represent the multiply value of the points.||
cost: 150 points

### 3.5.- Monarch-Haruki
Save your kingdom from the Greed

`level 1`||
pasive skill `Young Monarch`: Gain 12 points every 5 minutes||
cost: 30 points

`level 2`||
pasive skill `Innate leader`: Delegate jobs and your subjects will pay you back, generate 120 points every 10 minutes.||
cost: 75 points

`level 3`
pasive skill `Fierce king`: You defeated the Greed, gain 1200 points every 15 minutes, your reward depends on the island you're on.||
`aditional info`: Island 1 = 1200 points | island 2 = 1500 points | island 3 = 1800 points | island 4 = 2100 points | island 5 = 2400 points||
cost: 150 points

### 3.6.- Shaw-Haruki
The mad chemist 

`level 1`||
pasive skill `Sharp shooter`: Always deal headshots to the zombies, gain 12 points every minute.||
cost: 30 points

`level 2`||
pasive skill `Inventor`: Gather a bunch of zombies with your new invention, wraith fire, gain 90 points every 5 minutes.||
cost: 75 points

`level 3`||
pasive skill `Help from the beyond`: Gain a random power-up every 15 minutes.||
`aditional info`: Bonus points = 500 points | nuke = 400 points | carpenter = 200 points | double points = duplicate points gained for 15 minutes | max ammo = gain a .1 multiplier | full power = gain a .5 multiplier | multiplier = it starts at 1 and it adds depending on the drop||
cost: 150 points

#### 3.6.1.- Professor-Shaw
EX skin explore the possibilities of the `professor` archetype.

`level MAX`||
pasive skill `The mad chemist`: Make all the effects of the EX skins 1.5 times stronger
`unlock requirement`: Shaw-Haruki level 3 + 1150 points

## 4.- Art
The majority of drawings are vector art but the UI is meant to be arranged as an RPG menu, there will not be many graphic components because there is a whole stream happening in the background but the desired outcome is to show only vital information so that the `user` doesn't get lost in the menus.