# Notes from Regex Tutorial by Dave Gray

[Video link](https://www.youtube.com/watch?v=3l08sBKOSCs&list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT&index=27)

Dummy Text:

I dreamed about killing you again last night
And it felt alright to me
Dying on the banks of Embarcadero skies
I sat and watched you bleed
Buried you alive in a fireworks display
Raining down on me
Your cold, hot blood ran away from me
To the sea

I printed my name on the back of a leaf
And I watched it float away
The hope I had in a notebook full of white, dry pages
Was all I tried to save
But the wind blew me back via Chicago
In the middle of the night
And all without fight
At the crush of veils and starlight

*****

## Character Sets

Use [Regexr.com](https://regexr.com/) for creating and testing regex.

/([^drea])/g = select anything but "drea"

/[a-z]/g = select all lowercase letters

/g = global flag, without it, it selects only the first occurance

/[0-9]/g = selects all numbers

## Character Types

/./g = selects everything but the newline character

/\w/g = selects all individual words

/\W/g = selects everything that's not considered a word character

/\d/g = selects all digits

/\D/g = selects everything except the digits

/\s/g = selects all whitespaces

/\S/g = selects everything that is not whitespace

/[\s\S]/g = everything that is space and non-space

/^I/gm = select every "I" at the beginning of a line

(m = multiline)

/d$/gm = select letter "d" at the end of all lines

/\\./gm = use an escape character (\\) to search for all dots (or any other char).

/(old)/gm = capture groups of chars with ().

/(?:old)/gm = specify a non-capturing group (selecting without capturing)

/g(?=old)/gm = selecting "g" where it is followed by "old".

/g(?!old)/gm = selecting "g" where it is NOT followed by "old".

## Quantifiers (select multiple chars at once)

/[A-Z]/w+/gm = looks for capital letters with other letters following it ( "+" means one or more)

/[A-Z][a-z]*/gm = * means select zero or more letters following a capital, so it also selects "I"

/[A-Z][a-z]*'*/gm = selects zero or more apostrophes following capital or small letters

/[A-Z][a-z]*'*[a-z]*/gm = same as above, but with optional extra letters

/\d{3}/gm = select 3 digits in a row

/\d{3,}/gm = select 3 or more digits

/\d{3, 4}/gm = selects groups of 3 and 4 digits

/(hear)?t/gm = selects letter "t", will select "hear" before it too, but is not required to select only "t"

/(hear)t/gm = will select "heart" as "hear" is no longer optional but required

/h\w+/gm = "greedy word capture" as it selects all the words after the letter "h"

/h\w+/gm = "lazy word capture" as it selects only one character after letter "h"

/(g|l)/gm = "alternating": selects both "l"s and "g"s

/(g|l)ive/gm = selects words like "live" and "give"

****

## Practical Examples

select "10001":

/(^\d{5}$)/gm = select 5 digits in string

select "10001-1234":

/(^\d{5}$)-?(d\{4}$)/gm

select 
"10001
10001-1234" by making the second group optional with a question mark:

/(^\d{5}$)-?(d\{4}$)?/gm

select whitespace in "Kansas........City":

/\s/gm

select 
867-5309
867.5309
867*5309
555-867-5309
+1*555*867*5309

specify last 4 digits:
/(/d{4})/gm

add optional hyphen:
/[-](/d{4})/gm

Most special characters do not need to be escaped with a "\" inside of a character set

add more special characters:
/[-.*](/d{4})/gm

add the first 3 digits (not optional, but required):
/(\d{3})[-.*](/d{4})/gm

add another optional group of 3 + special characters:
/(\d{3})?[-.*]?(\d{3})[-.*](/d{4})/gm

add another series of optional special characters and a "+" sign that needs to be escaped:

/(\+1)[-.*](\d{3})?[-.*]?(\d{3})[-.*](/d{4})/gm


