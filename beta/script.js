// $(document).ready(function(){
//     /*
//         Algorithm for slide show widget
//         1. Use jQuery to find all the slides
//             (hint: will be an array)
//         2. Compute the number of slides (hint: slides.length)
//         3. Keep track of the current slide index
//             (hint: start from 0)
//         4. On click, determine if we're going left or right.
//             That is, previous or next. (hint: look at the class)
//         5. Transition the slides. That means, remove the .active
//         class from the current index slide and add to the next or
//         previous.
//         6. Done.

//         If you don't want to implement your own or want
//         a good reference that works, check out flexslider.js.
//         It's a slider for jQuery.
//     */
//   $(".carousel-control").on("click", function(e){
//       console.log("click control element=%O", e.target);
//   });
// });

function myFunction(x) {
    x.classList.toggle("change");
}
