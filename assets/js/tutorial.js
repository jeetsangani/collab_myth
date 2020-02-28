// script for tutorial section
$(".pointerIcn").click(function() {
    $(".pointerIcn").addClass("active");
    $(".pointerIcn > .icon").addClass("active");
    $(".clickableIcn").removeClass("active");
    $(".timelineIcn").removeClass("active");
    $(".audioIcn").removeClass("active");
    $(".clickableIcn > .icon").removeClass("active");
    $(".timelineIcn > .icon").removeClass("active");
    $(".audioIcn > .icon").removeClass("active");
    $("#line").addClass("one");
    $("#line").removeClass("two");
    $("#line").removeClass("three");
    $("#line").removeClass("four");
})

$(".clickableIcn").click(function() {
$(".clickableIcn").addClass("active");
$(".clickableIcn > .icon").addClass("active");
$(".pointerIcn").removeClass("active");
$(".timelineIcn").removeClass("active");
$(".audioIcn").removeClass("active");
$(".pointerIcn > .icon").removeClass("active");
$(".timelineIcn > .icon").removeClass("active");
$(".audioIcn > .icon").removeClass("active");
$("#line").addClass("two");
$("#line").removeClass("one");
$("#line").removeClass("three");
$("#line").removeClass("four");
})

$(".timelineIcn").click(function() {
$(".timelineIcn").addClass("active");
$(".timelineIcn > .icon").addClass("active");
$(".clickableIcn").removeClass("active");
$(".pointerIcn").removeClass("active");
$(".audioIcn").removeClass("active");
$(".clickableIcn > .icon").removeClass("active");
$(".pointerIcn > .icon").removeClass("active");
$(".audioIcn > .icon").removeClass("active");
$("#line").addClass("three");
$("#line").removeClass("two");
$("#line").removeClass("one");
$("#line").removeClass("four");
})

$(".audioIcn").click(function() {
$(".audioIcn").addClass("active");
$(".audioIcn > .icon").addClass("active");
$(".clickableIcn").removeClass("active");
$(".timelineIcn").removeClass("active");
$(".pointerIcn").removeClass("active");
$(".clickableIcn > .icon").removeClass("active");
$(".timelineIcn > .icon").removeClass("active");
$(".pointerIcn > .icon").removeClass("active");
$("#line").addClass("four");
$("#line").removeClass("two");
$("#line").removeClass("three");
$("#line").removeClass("one");
})

$(".pointerIcn").click(function() {
$("#first").addClass("active");
$("#second").removeClass("active");
$("#third").removeClass("active");
$("#fourth").removeClass("active");
})

$(".clickableIcn").click(function() {
$("#first").removeClass("active");
$("#second").addClass("active");
$("#third").removeClass("active");
$("#fourth").removeClass("active");
})

$(".timelineIcn").click(function() {
$("#first").removeClass("active");
$("#second").removeClass("active");
$("#third").addClass("active");
$("#fourth").removeClass("active");
})

$(".audioIcn").click(function() {
$("#first").removeClass("active");
$("#second").removeClass("active");
$("#third").removeClass("active");
$("#fourth").addClass("active");
})