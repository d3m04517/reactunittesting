import React from 'react';
import ReactDom from 'react-dom';
import Button from '../button.component';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>, div);
});

test("it renders button correctly", () => {
    const {getByTestId} = render(<Button label="I am a button."></Button>)
    expect(getByTestId('button')).toHaveTextContent("I am a button.");
});

test("matches snapshot", () => {
    const tree = renderer.create(<Button label="I am a button."></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});
test("matches snapshot 1", () => {
    const tree = renderer.create(<Button label="I am a button."></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});
test("matches snapshot 2", () => {
    const tree = renderer.create(<Button label="I am a button."></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});