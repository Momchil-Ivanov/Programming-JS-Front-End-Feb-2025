function splitPascalCase(text) {
    let words = text.split(/(?=[A-Z])/);
    console.log(words.join(", "));
}

// splitPascalCase("SplitMeIfYouCanHaHaYouCantOrYouCan");
// splitPascalCase("HoldTheDoor");
// splitPascalCase("ThisIsSoAnnoyingToDo");
