<div align="center">

# librarium-cinematica

</div>


<div align="center">

###### - ReactJS - ThreeJS - REST - RESTful - API -

</div>

<div align="center">

## Preview - hosted on Vercel

<p>
    <a name='preview' href='https://librarium-cinematica.vercel.app/'>Librarium Cinematica</a>
</p>

## Description

</div>

<p>
    Simple web application that retrives movie posters and plots (plots are desktop-version only) from
    <a name='test' href='https://www.omdbapi.com'>omdbabi</a>
</p>


<div align="center">

## Development

</div>

<p>
    Created using ReactJS, I wanted to make something easy and simple to practice my familiarity with the library as well as practice some design.
</p>

<p>
    I followed <a name='this' href='https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/'>this</a> tutorial to get started. Once complete I wanted to jazz it up a bit so I added some 3D elements, making the posters into sort of floating DVD cases. 
</p>

<p>
    It still felt boring so I found some fonts from google-fonts and added a splash screen.
</p>

<p>
    I probably spent more time than anyone would feel necessary on the splash screen and the fading animations but I feel like it really makes the site flow nicer, instead of elements abruptly popping in and out.
</p>

<p>
    The background image and placeholder images are generated by AI via <a name='craiyon' href='https://www.craiyon.com'>craiyon</a>. I like using this method to generate simple images like gradients as they are almost invisible to users but add a lot of character.
</p>

<p>
    The camera model was created by me from scratch using blender. Imported using npm package @react-three/fiber.
</p>

---

## Issues

* ~~Left React Redux icon because I didn't want to make my own as would teach me nothing right now. May change later.~~ - Made quick icon using GIMP

* ~~Bottom of page is cut off when movie list is populated and I'm seemengly unable to resolve the issue despite spending too much time trying to fix it.~~ - Resolved by adding spacer div.

* Movie components pop in really abruptly. Some kind of lazy load would likely be ideal

* Search functionality is very simple and gives no feedback. Improved somewhat by adding result counter.

* Styling got a bit messier than I wanted. Will likely use Tailwind CSS on next project.

* ~~Some 3D elements not loading on mobile - first two in list wont load in for the matrix for example.~~ - Workaround implemented where I only load 7 instances onto a page at once. Seems to have resolved issue for now. Need to research better loading practices for large meshes. Frustrating as only seems to affect the first two. 

* Section tag resizing when using keyboard on mobile

---

###### Copyright © EdelweissPirate 2022