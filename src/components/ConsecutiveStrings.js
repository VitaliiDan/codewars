import React, { useState } from 'react';

const ConsecutiveStrings = () => {

    const handle = (array, n) => {
    }

    return (
        <div>
            <h1>Consecutive strings</h1>
            <p>
                strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

                Concatenate the consecutive strings of strarr by 2, we get:
                treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
                folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
                trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
                blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
                abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

                Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
                The first that came is "folingtrashy" so
                longest_consec(strarr, 2) should return "folingtrashy".

                In the same way:
                longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) "abigailtheta"
            </p>
            <h2>Q:</h2>
            <p>["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta"</p>
            <p>["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"</p>
            <p>[], 3), ""</p>
            <p>["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"</p>
            <p>["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu"</p>
            <p>["zone", "abigail", "theta", "form", "libe", "zas"], -2), ""</p>
            <p>["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz"</p>
            <p>["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), ""</p>
            <p>["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), ""</p>
            <h2>Answers:</h2>
            {

            }
        </div >
    )
}

export default ConsecutiveStrings;