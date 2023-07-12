# Search Albums and Like Songs

## Basic story of application:
This application was meant to present a list of albums. Using TOMORROW X TOGETHER's discography page (July 2023) as reference, I was able to create a display of +x+ album covers and list each of the albums respective songs with a press of a button. With the knowledge that I've learned throughout phase-1, you can be able to search a specific +x+ album and like your favorite songs.

## Core Features of MVP:
* A search bar that searches albums by ID number.
* Lists titles of the ablums and images of the album covers.
* Button provides song titles.
* Clickable hearts next to each song title.
* A button that toggles dark mode.

## API Data:
db.json file using json-sever that returns an array of 8 album objects with each object having 4 attributes.

**Attributes**: 
- id 
- title 
- image
- tracks

```json
{
  "albums": [
    {
      "id": 1,
      "title": "TDC: STAR",
      "image": "https://ibighit.com/txt/images/txt/discography/the_dream_chapter-star/album-cover.jpg",
      "tracks": ["Blue Orangeade", "CROWN", "Our Summer", "Cat & Dog", "Nap of a star"]
    },
    {
      "id": 2,
      "title": "TDC: MAGIC",
      "image": "https://ibighit.com/txt/images/txt/discography/the_dream_chapter-magic/album-cover.jpg",
      "tracks": ["New Rules", "9 and Three Quarters (Run Away)", "Roller Coaster", "Poppin' Star", "Can't We Just Leave the Monster Alive?", "Magic Island", "20cm", "Angel Or Devil"]
    },
    {
      "id": 3,
      "title": "TDC: ETERNITY",
      "image": "https://ibighit.com/txt/images/txt/discography/the_dream_chapter-eternity/DEvkuGeZqimp54uCZ5FgbCYu.jpg",
      "tracks": ["Drama", "Can't You See Me?", "Fairy of Shampoo", "Maze in the Mirror", "PUMA", "Eternally"]
    },
    {
      "id": 4,
      "title": "Minisode 1: Blue Hour",
      "image": "https://ibighit.com/txt/images/txt/discography/blue_hour/19P3lLPNtKeM6x9RGOwO1swi.jpg",
      "tracks": ["Ghosting", "Blue Hour", "We Lost The Summer", "Wishlist", "Way Home"]
    },
    {
      "id": 5,
      "title": "TCC: FREEZE",
      "image": "https://ibighit.com/txt/images/txt/discography/the_chaos_chapter_freeze/RfMzwNE4j2MB8wrjKDMu923Z.jpg",
      "tracks": ["Anti-Romantic", "0x1=LOVESONG (I Know I Love You) feat.Seori", "Magic", "Ice Cream", "What if I had been that PUMA", "No Rules", "Dear Sputnik", "Frost"]
    },
    {
      "id": 6,
      "title": "TCC: FIGHT OR ESCAPE",
      "image": "https://ibighit.com/txt/images/txt/discography/the_chaos_chapter-fight_escape/cover_fight_escape.jpg",
      "tracks": ["LO$ER=LO♡ER","Anti-Romantic", "0x1=LOVESONG (I Know I Love You) feat.Seori", "Magic", "Ice Cream", "What if I had been that PUMA", "No Rules", "MOA Diary (Dubaddu Wari Wari)", "Dear Sputnik", "Frost", "0x1=LOVESONG (I Know I Love You) feat. Seori (Emocore Mix)"]
    },
    {
      "id": 7,
      "title": "Minisode 2: THURSDAY'S CHILD",
      "image": "https://ibighit.com/txt/images/txt/discography/minisode-2/tmp-cover.png",
      "tracks": ["Opening Sequence", "Good Boy Gone Bad", "Trust Fund Baby", "Lonely Boy (The tatto on my ring finger)", "Thursday's Child Has Far To Go"]
    },
    {
      "id": 8,
      "title": "TNC: TEMPTATION",
      "image": "https://ibighit.com/txt/images/txt/discography/temptation/tmp-cover.png",
      "tracks": ["Devil by the Window", "Sugar Rush Ride", "Happy Fools (feat.Coi Leray)", "Tinnitus (Wanna be a rock)", "Farewell, Neverland"]
    }
  ]
}
```
Initially, the data will be fetched and for each data the keys will render in cards comprised of a title, an image, and a Songs button. The "id" data will be fetched in a form based on what the user types and the "title" and "image" data will be rendered and displayed for that id. Once the user clicks the Songs button, the "id" data will be fetched again and the "tracks" data will be rendered by its respective id.

## Challanges you expect to face:
Expect this project to not work exactly like the GitHub Search App since the `db.json` file only works with an array of objects while GSA worked with a key of `items` pointing to an array of items objects. So there was no `albums` key for me to route, because of this I couldn't fetch a specific id under albums.
Expect the fetch to not recieve the input value and not fetch data, in this case it was a `data.forEach is not a function` error. To resolve that I had to initialize the form data and the rendering seperately so that one fetch will recieve "id" data for the form, and another fetch will recieve data where `forEach` is properly used for rendering the titles and images.

## How you are meeting the requirements of the project
App has a HTML/CSS/JS frontend that accesses data from a db.json file using a json.server. The db.json returns a collection of 8 objects with each having 4 attributes. All interactions between the client and the API are handled asynchronously and uses JSON as the communication format. Uses 3 event listeners: submit, DOMContentLoaded, and click. Project implements at least one forEach for array iteration.

### Languages Used:
* JSON
* HTML
* CSS
* JavaScript

### Sources:
images downloaded from https://ibighit.com/txt/eng/discography/
