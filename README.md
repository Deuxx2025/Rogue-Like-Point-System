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

## 3.- Skins
In the original RBPS there are skins of characters so to use the already existing architecture this skins will have levels and those levels grant `advantages` towards the point generation, For now all chance are random, in future updates there will be a better algorithm. All level ups are tied to the previous one, hence you cannot have a level 3 skin without having a level 1 or 2.

### 3.1.- Zuko-Haruki
Base skin of the game, because when this game was designed the creator was playing Minecraft, when the creator plays another game then the base skin will change. The level 1 is when the skin is `acquired`, this section will count with a level counter, the description of the pasive skill and the cost. 

`Level 1` 
pasive skill `Miner`: You generate aditional points, every minute you'll mine a random Minecraft ore and depending of the ore you'll get rewarded.
`aditional info`: coal = 1 point | copper = 2 points | lapiz lazuli = 3 points | iron = 5 points | redstone = 6 points | gold 8 points | emerald = 12 points | diamonds = 15 points | netherite = 25 points
cost: free

`level 2`
pasive skill `Slayer`: You now have a sword and armor, on top of your ores you'll hunt for mobs, there is a chance to gain no drops, every 3 minutes the reward is granted.
`aditional info`: rotten flesh = 5 points | string = 7 points | bone = 10 points | gun powder = 15 points | ender pearl = 30 points
cost: 75 points

`level 3`
pasive skill `Trader`: You are a well known hero and suplier on the village all points are doubled.
cost: 150 points

### 3.2.- Aether-Haruki
In true fashon of Genshin Impact the character will have the gacha experience.

`level 1`
pasive skill `adventurer`: You go and explore Teyvat, each minute you encounter a chest that grants different amount of points. 
`aditional info`: 1-25 points
cost: 30 points 