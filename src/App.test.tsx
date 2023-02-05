import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';



describe('App is rendered', () => {
  test('Property Result is rendered', () => {
    render(<App />);
    const linkElement = screen.getByText(/Results/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Property saved is rendered', () => {
    render(<App />);
    const linkElement = screen.getByText(/Saved Properties/i);
    expect(linkElement).toBeInTheDocument();
  });
})

describe('Basic functions execute', () => {
  test("Add property", () => {
    render(<App/>);
    const addProperty = screen.getAllByText(/Add Property/i);
    const preResultProperty = screen.getAllByText(/Remove Property/i);
    fireEvent.click(addProperty[0])
    const curResultProperty = screen.getAllByText(/Remove Property/i);
    expect(curResultProperty.length - preResultProperty.length).toBe(1)
  })

  test("Add property then remove", () => {
    render(<App/>);
    const addProperty = screen.getAllByText(/Add Property/i);
    const preResultProperty = screen.getAllByText(/Remove Property/i);
    fireEvent.click(addProperty[0])
    const resultPropertyAfterAdd =  screen.getAllByText(/Remove Property/i);
    expect(resultPropertyAfterAdd.length - preResultProperty.length).toBe(1)
    fireEvent.click(resultPropertyAfterAdd[1])
    const resultPropertyAfterRemove = screen.getAllByText(/Remove Property/i);
    expect(resultPropertyAfterAdd.length - resultPropertyAfterRemove.length).toBe(1)
  })

  describe("Property added function", () => {
    test("Add property then check property added", () => {
      render(<App/>);
      const addProperty = screen.getAllByText(/Add Property/i);
      fireEvent.click(addProperty[0])
      const curPropertyAdded = screen.getAllByText(/Property Added/i)
      expect(curPropertyAdded.length).toBe(1);
    })
  })
})