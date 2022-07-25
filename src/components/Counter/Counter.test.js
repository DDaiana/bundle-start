
/** 
 * @jest-environment jsdom
 */

import React from 'react';
import { screen, render } from '@testing-library/react'; // fake being in a browser, yet jest has adapted, thus above lines are mandatory
import '@testing-library/jest-dom/extend-expect';
import  userEvent from '@testing-library/user-event';

import  Counter from '.';

// Obs! at the top of the file, multiple comments line are read diffrent

describe ("Counter", () => {

    // if the same element is used for the test sites then we can do
    beforeEach ( () => {
        render(<Counter title="test"/>);
    })

    test("It displays a heading with appropriate text", () => {

        //if it was a webpage with just our commponent, then see if it passes the 
        // render(<Counter title="test"/>); - has been replaced with the beforeEach() at the top
        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toEqual("test");
    }),
    test("The counter starts at zero", () => {
        const counterOutput = screen.getByRole("figure"); // finding the element using the role figure

        expect(counterOutput).toBeInTheDocument();
        expect(counterOutput.textContent).toEqual("0");
    }),
    test("The counter increments if the plus button is clicked", async () => {
        const incrementButton = screen.getByRole("button", {"name": "+"}); // name is the display text
        const counterOutput = screen.getByRole("figure");
        
        expect(incrementButton).toBeInTheDocument();

        expect(counterOutput.textContent).toEqual("0");
        //Click the button - But we need to get the click, check the UserEvent at the top
        await userEvent.click(incrementButton); // this returns a promise, so we need to make the function as async
        expect(counterOutput.textContent).toEqual("1");
    })

})