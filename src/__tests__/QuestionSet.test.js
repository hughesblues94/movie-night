import { screen, render, fireEvent } from "@testing-library/react";
import QuestionSet from "../Components/QuestionSet";
describe("Question 1 Test", () => {

    test('renders first question', () => {
        render(<QuestionSet />);
        const question = screen.getByText(/What Genre Would You Like to Watch?/i)
        expect(question).toBeInTheDocument()
    })
    test('renders the correct amount of buttons for the first question', () => {
        render(<QuestionSet />);
        expect(screen.getAllByRole("button")).toHaveLength(8)
    })
})


test('renders second question after button click', () => {
    render(<QuestionSet />);
    const button = screen.getByRole('button', {
        name: /Adventure/i
    })
    fireEvent.click(button)
    expect(screen.getByText(/how long?/i)).toBeInTheDocument()

})


